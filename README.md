# Helix Cloud - Senior DevOps & Infrastructure Portfolio

This repository contains the **Helix Cloud** web platform, a professional landing page designed with a serverless architecture and automated deployment on Microsoft Azure.

## 🏗️ Project Architecture

The project follows a decoupled modern infrastructure approach:

- **Frontend**: [Astro v4](https://astro.build/) (Zero-JS by default, high performance).
- **Backend**: [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/) (Node.js) for form processing.
- **Database**: [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) (NoSQL) for contact storage.
- **Infrastructure**: [Terraform](https://www.terraform.io/) (IaC) for Azure resource management.
- **Security**: Integration with Google reCAPTCHA v3 and Cloudflare (WAF/SSL).
- **Notifications**: Azure Communication Services for email alerts.

## 📁 Repository Structure

```text
/
├── api/                # Backend (Azure Functions in Node.js)
├── infra/              # Infrastructure as Code (Terraform)
├── public/             # Static assets (Images, Favicon, etc.)
├── src/                # Frontend source code (Astro)
│   ├── components/     # UI modular components
│   ├── layouts/        # Base design layouts
│   └── pages/          # Application routes (index.astro)
└── package.json        # Project dependencies
```

## 🛠️ Key Technologies

- **Astro & TailwindCSS**: For a fluid, responsive, and dark UI (Aesthetic).
- **GitHub Actions**: CI/CD pipeline for automatic deployment to Azure Static Web Apps.
- **Azure Communication Services**: Professional email delivery system.

## 🚀 Local Deployment

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development mode**:
   ```bash
   npm run dev
   ```

3. **Deploy Infrastructure**:
   ```bash
   cd infra
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your configuration
   terraform init
   terraform apply
   ```

## 🛡️ Implemented Security

- **reCAPTCHA v3**: Invisible protection against bots in the contact form.
- **Honeypot Field**: Extra validation layer against automated SPAM.
- **Cosmos DB Firewall**: Restricted access only to Azure services and authorized IPs.
- **HTTPS/Full Encryption**: Managed via Cloudflare.

---
**Developed by Héctor Rodríguez | 2026**
