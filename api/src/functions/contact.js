const { app, output } = require('@azure/functions');

const cosmosOutput = output.cosmosDB({
    databaseName: process.env.COSMOS_DB_NAME || 'HelixDB',
    containerName: process.env.COSMOS_DB_CONTAINER || 'Contacts',
    createIfNotExists: true,
    connection: 'COSMOS_DB_CONNECTION_STRING',
});

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    extraOutputs: [cosmosOutput],
    handler: async (request, context) => {
        try {
            const body = await request.json();
            const clientIp = request.headers.get('x-forwarded-for') || 'unknown';

            context.log(`Contact submission from ${clientIp}`);

            // 1. RECAPTCHA VERIFICATION
            if (body.recaptchaToken) {
                try {
                    const secret = process.env.RECAPTCHA_SECRET;
                    if (secret) {
                        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${body.recaptchaToken}`;
                        const verifyResponse = await fetch(verifyUrl, { method: 'POST' });
                        const verifyData = await verifyResponse.json();

                        if (!verifyData.success || verifyData.score < 0.3) {
                            context.log.warn(`reCAPTCHA failed. Score: ${verifyData.score}`);
                            return { status: 403, body: JSON.stringify({ error: "Bot detected. Access denied." }) };
                        }
                    }
                } catch (err) {
                    context.log.error(`reCAPTCHA verification error: ${err}`);
                    // We might not want to block the user if Google's API is down, 
                    // or we might want to be strict. Let's be lenient but log it.
                }
            }

            // 2. HONEYPOT CHECK (Anti-Spam)
            // If the hidden field 'bot_field' is filled, it's a bot. Reject silently.
            if (body.bot_field) {
                context.log.warn(`Bot detected from IP: ${clientIp}`);
                // Return fake success to confuse the bot
                return { status: 201, body: JSON.stringify({ message: "Message received." }) };
            }

            // 2. INPUT VALIDATION
            if (!body.email || !body.message) {
                return { status: 400, body: JSON.stringify({ error: "Email and message are required." }) };
            }

            if (body.message.length > 1000) {
                return { status: 400, body: JSON.stringify({ error: "Message too long (max 1000 chars)." }) };
            }

            // Basic Email Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(body.email)) {
                return { status: 400, body: JSON.stringify({ error: "Invalid email format." }) };
            }

            const entry = {
                id: new Date().toISOString() + '-' + Math.random().toString(36).substr(2, 9),
                email: body.email, // Partition Key
                name: body.name || 'Anonymous',
                message: body.message,
                timestamp: new Date().toISOString(),
                source: 'website',
                status: 'new'
            };

            context.extraOutputs.set(cosmosOutput, entry);

            // 3. EMAIL NOTIFICATION (Azure Communication Services)
            const connectionString = process.env.ACS_CONNECTION_STRING;
            const senderAddress = process.env.SENDER_ADDRESS;
            const recipientAddress = process.env.NOTIFICATION_EMAIL;

            if (connectionString && senderAddress && recipientAddress) {
                try {
                    const { EmailClient } = require("@azure/communication-email");
                    const client = new EmailClient(connectionString);

                    const emailMessage = {
                        senderAddress: senderAddress,
                        content: {
                            subject: `New Contact Form: ${body.name || 'Anonymous'}`,
                            plainText: `Email: ${body.email}\nName: ${body.name || 'Anonymous'}\nMessage: ${body.message}\nIP: ${clientIp}`,
                            html: `
                                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                                    <h2 style="color: #2563eb;">New Contact Form Submission</h2>
                                    <p><strong>Name:</strong> ${body.name || 'Anonymous'}</p>
                                    <p><strong>Email:</strong> ${body.email}</p>
                                    <p><strong>Message:</strong></p>
                                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
                                        ${body.message}
                                    </div>
                                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                                    <p style="font-size: 12px; color: #6b7280;">Sent from helixcloud.dev | IP: ${clientIp}</p>
                                </div>
                            `,
                        },
                        recipients: {
                            to: [{ address: recipientAddress }],
                        },
                    };

                    await client.beginSend(emailMessage);
                    context.log("Notification email sent successfully");
                } catch (emailError) {
                    context.log.error(`Failed to send notification email: ${emailError}`);
                }
            }

            return { status: 201, body: JSON.stringify({ message: "Message received successfully." }) };
        } catch (error) {
            context.log.error(`Error processing request: ${error}`);
            return { status: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
        }
    }
});
