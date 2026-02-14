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

2. **Setup environment variables**:
   ```bash
   task config
   # Edit .env and infra/terraform.tfvars with your actual data
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Deploy Infrastructure**:
   ```bash
   task infra:init
   task infra:apply
   ```

## 🛠️ Task Runner (go-task)

This project uses [Task](https://taskfile.dev/) as a task runner to simplify common operations.

### Installation

- **Linux (Debian/Ubuntu)**: `sudo snap install task --classic` or `brew install go-task`
- **macOS**: `brew install go-task`
- **Windows**: `choco install go-task` or `scoop install task`

### Available Commands

| Command | Description |
| :--- | :--- |
| `task config` | **(First Step)** Creates `.env` and `terraform.tfvars` from templates. |
| `task setup` | Installs all dependencies for the Frontend and the API. |
| `task dev` | Runs the Astro development server. |
| `task build` | Builds the project for production. |
| `task infra:init` | Initializes Terraform. |
| `task infra:plan` | Shows the execution plan for Azure infrastructure. |
| `task infra:apply` | Deploys the infrastructure to Azure. |
| `task clean` | Removes build artifacts and `node_modules`. |

## 🎨 Customization

To personalize the site with your own information, you only need to modify **one file**:

- **[`src/siteData.ts`](file:///var/home/hrod-ws/workspace/helixcloud/helixcloud-web/src/siteData.ts)**: Change your name, role, social links, and section titles here.

For infra-level configurations (like reCAPTCHA keys or database names), use the `.env` and `terraform.tfvars` files as described above.

## 🛡️ Implemented Security

- **reCAPTCHA v3**: Invisible protection against bots in the contact form.
- **Honeypot Field**: Extra validation layer against automated SPAM.
- **Cosmos DB Firewall**: Restricted access only to Azure services and authorized IPs.
- **HTTPS/Full Encryption**: Managed via Cloudflare.

---
**Developed by Héctor Rodríguez | 2026**
