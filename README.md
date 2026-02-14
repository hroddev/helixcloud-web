# Helix Cloud - Senior DevOps & Infrastructure Portfolio

Este repositorio contiene la plataforma web de **Helix Cloud**, una landing page profesional diseñada con arquitectura serverless y despliegue automatizado en Microsoft Azure.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue un enfoque de infraestructura moderna desacoplada:

- **Frontend**: [Astro v4](https://astro.build/) (Zero-JS por defecto, alto rendimiento).
- **Backend**: [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/) (Node.js) para el procesamiento de formularios.
- **Base de Datos**: [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) (NoSQL) para el almacenamiento de contactos.
- **Infraestructura**: [Terraform](https://www.terraform.io/) (IaC) para la gestión de recursos de Azure.
- **Seguridad**: Integración con Google reCAPTCHA v3 y Cloudflare (WAF/SSL).
- **Notificaciones**: Azure Communication Services para alertas por correo electrónico.

## 📁 Estructura del Repositorio

```text
/
├── api/                # Backend (Azure Functions en Node.js)
├── infra/              # Infraestructura como Código (Terraform)
├── public/             # Recursos estáticos (Imágenes, Favicon, etc.)
├── src/                # Código fuente del Frontend (Astro)
│   ├── components/     # Componentes modulares de la UI
│   ├── layouts/        # Plantillas de diseño base
│   └── pages/          # Rutas de la aplicación (index.astro)
└── package.json        # Dependencias del proyecto
```

## 🛠️ Tecnologías Clave

- **Astro & TailwindCSS**: Para una UI fluida, responsiva y oscura (Aesthetic).
- **GitHub Actions**: Pipeline de CI/CD para despliegue automático en Azure Static Web Apps.
- **Azure Communication Services**: Sistema profesional de envío de correos.

## 🚀 Despliegue Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Desplegar Infraestructura**:
   ```bash
   cd infra
   terraform init
   terraform apply
   ```

## �️ Seguridad Implementada

- **reCAPTCHA v3**: Protección invisible contra bots en el formulario de contacto.
- **Honeypot Field**: Capa extra de validación contra SPAM automatizado.
- **Cosmos DB Firewall**: Acceso restringido solo a servicios de Azure e IPs autorizadas.
- **HTTPS/Full Encryption**: Gestionado a través de Cloudflare.

---
**Desarrollado por Héctor Rodríguez | 2026**
