export const siteData = {
    // --- Personal Information ---
    authorName: "Hector Rodríguez",
    authorRole: "Azure DevOps & Cloud Infrastructure Specialist",

    // --- SEO & Global ---
    siteTitle: "Helix Cloud - Senior DevOps & Infrastructure Portfolio",
    siteDescription: "Senior DevOps Engineer specializing in scalable Cloud Infrastructure, Infrastructure as Code, and production-grade Optimization on Microsoft Azure.",
    siteUrl: "https://helixcloud.dev",

    // --- Hero Section ---
    heroTitle: "La infra que necesitas",
    heroSubtitle: "Cloud, Microsoft 365 y DevOps para Panamá",
    heroTagline: "",

    // --- Hero Stats ---
    heroStats: [
        { value: "15+", label: "Años de experiencia" },
        { value: "6", label: "Países implementados" },
        { value: "30%", label: "Reducción de costos promedio" },
    ],

    // --- About Section ---
    yearsOfExperience: "15+",
    aboutTitle: "Engineering Excellence",
    aboutBadges: ["Cloud Expert", "DevOps Leader"],
    aboutParagraphs: [
        "With over <span class=\"text-white font-bold border-b-2 border-blue-500/30 pb-0.5\">15 years</span> in the IT trenches, I've evolved from systems administration to architecting complex, cloud-native ecosystems for global enterprises.",
        "My journey has been defined by a passion for <span class=\"text-white font-semibold\">Infrastructure as Code (IaC)</span> and automation. I specialize in bridging the gap between legacy infrastructure and modern, scalable cloud solutions on <span class=\"text-blue-400 font-semibold tracking-wide\">Microsoft Azure</span> and <span class=\"text-blue-400 font-semibold tracking-wide\">GCP</span>.",
        "From leading <span class=\"text-white\">global SD-WAN deployments</span> across 6 countries to reducing operational costs by <span class=\"text-green-400 font-bold\">30%</span> through cloud optimization, I focus on delivering tangible business value through engineering precision and proactive monitoring."
    ],
    aboutDegree: "Bachelor's Degree",
    aboutDegreeMajor: "Computer Systems",
    aboutCertifications: "Certified Professional",
    aboutCertificationsDetail: "GCP & IBM Specialized",

    // --- Stack Section ---
    stackTitle: "Por Qué HelixCloud",
    stackDescription: "Lo que te llevas: infraestructura confiable, costos controlados y equipo dedicado a tu crecimiento.",
    stackBenefits: [
        {
            name: "DevOps & Automatización",
            benefit: "Infraestructura reproducible. Si algo falla, se reconstruye en minutos con Terraform y Ansible.",
        },
        {
            name: "Cloud Platforms",
            benefit: "Azure y GCP administrados con visibilidad total de costos y rendimiento en tiempo real.",
        },
        {
            name: "Seguridad",
            benefit: "Zero Trust implementado correctamente. Acceso solo para quien debe tener acceso, auditado y documentado.",
        },
        {
            name: "Monitoreo",
            benefit: "Alertas antes de que el problema llegue a tus usuarios. Dashboard en tiempo real para tu equipo.",
        },
    ],
    stackFeaturedTech: ["AZURE", "GCP", "TERRAFORM", "KUBERNETES", "VMWARE"],

    // --- Services Section ---
    services: [
        {
            title: "Migración a la Nube",
            href: "/servicios/migracion-azure/",
            description: "Mueve tu empresa a Azure o GCP sin downtime. Llevamos tu infraestructura actual a la nube con un plan estructurado. Tus operaciones continúan mientras modernizamos.",
            tags: ["Azure", "GCP", "Terraform", "Sin downtime"],
        },
        {
            title: "Microsoft 365 y Entra ID",
            href: "/servicios/microsoft-365/",
            description: "Microsoft 365 configurado y administrado correctamente. Implementación completa, gestión de identidades con Entra ID y políticas de seguridad. Tu equipo colabora mejor, tus datos están protegidos.",
            tags: ["M365", "Entra ID", "Exchange", "SharePoint"],
        },
        {
            title: "DevOps y Automatización",
            href: "/servicios/devops-automatizacion/",
            description: "Deployments que no fallan un viernes. Pipelines CI/CD, infraestructura como código y automatización de procesos. Todo versionado, todo reproducible, todo auditable.",
            tags: ["Terraform", "Ansible", "GitHub Actions", "Docker"],
        },
        {
            title: "Monitoreo y Observabilidad",
            description: "Saber que algo falló antes de que te llamen. Visibilidad completa de tu infraestructura en tiempo real. Alertas proactivas configuradas para que los problemas se resuelvan antes de afectar a tus usuarios.",
            tags: ["Zabbix", "Grafana", "Prometheus"],
        },
        {
            title: "Seguridad Informática",
            description: "Infraestructura que cumple con los estándares. Evaluación de vulnerabilidades, hardening de servidores y políticas Zero Trust. Tu negocio protegido sin paralizar las operaciones.",
            tags: ["Zero Trust", "Fortinet", "Auditoría"],
        },
        {
            title: "Infraestructura Administrada",
            description: "Tu equipo IT externo, a fracción del costo. Gestión mensual de toda tu infraestructura cloud. Actualizaciones, parches, backups verificados y soporte técnico. Tú te enfocas en tu negocio.",
            tags: ["Retainer mensual", "SLA 99.9%", "Soporte 24/5"],
        },
    ],

    // --- Service Landing Pages ---
    servicePages: [
        {
            slug: "migracion-azure",
            navLabel: "Migración a Azure",
            title: "Migración a Azure sin downtime | Helix Cloud",
            metaDescription: "Migración a Microsoft Azure sin interrupciones para empresas en Panamá y LATAM. Evaluación, plan por fases, Terraform, backups y soporte post-migración.",
            heading: "Migración a Azure sin downtime",
            tagline: "Llevamos tu infraestructura actual a Azure con un plan estructurado, sin detener tus operaciones.",
            serviceType: "Cloud Migration",
            overview: [
                "Cada migración comienza con un diagnóstico detallado de tu infraestructura actual: servidores, dependencias, cargas críticas y costos. A partir de ahí diseñamos una estrategia por fases para mover todo a Azure sin afectar tu operación.",
                "Trabajamos con Infraestructura como Código (Terraform) para que tu nuevo entorno sea reproducible, auditable y fácil de mantener. Cada fase incluye backups verificados y un plan de rollback.",
            ],
            breakdown: [
                { title: "Evaluación y discovery", description: "Inventario completo de servidores, aplicaciones, dependencias y costos actuales para dimensionar la migración." },
                { title: "Diseño de arquitectura", description: "Landing zone en Azure con redes, identidad (Entra ID), seguridad y gobernanza desde el primer día." },
                { title: "Migración por fases", description: "Rehost, replatform o refactor según cada carga de trabajo, priorizando lo no crítico para validar el proceso." },
                { title: "Optimización post-migración", description: "Rightsizing, backups verificados, monitoreo con Zabbix/Grafana y documentación completa de tu nuevo entorno." },
            ],
            techStack: ["Azure", "Terraform", "AzCopy", "Ansible", "Zabbix", "Grafana"],
            benefits: [
                "Cero downtime en horario laboral",
                "Costos estimados antes de migrar",
                "Backups y rollback planificados",
                "Documentación completa del entorno",
            ],
            ctaLabel: "Solicitar migración",
            ctaHref: "#contact",
        },
        {
            slug: "microsoft-365",
            navLabel: "Microsoft 365",
            title: "Microsoft 365 y Entra ID | Helix Cloud",
            metaDescription: "Implementación y administración de Microsoft 365 y Entra ID en Panamá. Migración de correo, identidades, MFA, políticas de seguridad y colaboración.",
            heading: "Microsoft 365 y Entra ID",
            tagline: "Tu equipo colabora mejor y tus datos están protegidos con políticas de seguridad correctas desde el día uno.",
            serviceType: "Microsoft 365 Administration",
            overview: [
                "Configuramos Microsoft 365 correctamente: migración de buzones, dominio, identidades y políticas de seguridad. Sin configuraciones por defecto que dejen huecos.",
                "Con Entra ID implementamos identidad centralizada, MFA y Conditional Access para que el acceso esté controlado, auditado y documentado.",
            ],
            breakdown: [
                { title: "Migración de correo y datos", description: "Migración de buzones desde Exchange, IMAP o Google Workspace sin pérdida de información ni downtime." },
                { title: "Dominio y DNS", description: "Configuración de dominio, SPF, DKIM y DMARC para que tu correo llegue y tu marca esté protegida." },
                { title: "Entra ID e identidades", description: "Directorio centralizado, SSO para aplicaciones corporativas y MFA para todos los usuarios." },
                { title: "Políticas de seguridad", description: "Conditional Access, DLP y políticas base de Zero Trust para proteger tus datos desde el inicio." },
            ],
            techStack: ["Microsoft 365", "Entra ID", "Exchange", "SharePoint", "Teams"],
            benefits: [
                "MFA y Zero Trust desde el día uno",
                "Migración sin pérdida de correo",
                "SSO para aplicaciones corporativas",
                "Administración y soporte continuo",
            ],
            ctaLabel: "Solicitar implementación",
            ctaHref: "#contact",
        },
        {
            slug: "devops-automatizacion",
            navLabel: "DevOps",
            title: "DevOps y Automatización | Helix Cloud",
            metaDescription: "DevOps a medida: pipelines CI/CD, Infraestructura como Código con Terraform y Ansible, GitHub Actions, Docker y Kubernetes. Deployments reproducibles y auditables.",
            heading: "DevOps y Automatización",
            tagline: "Deployments que no fallan un viernes: pipelines CI/CD e infraestructura como código, todo versionado y auditable.",
            serviceType: "DevOps Consulting",
            overview: [
                "Automatizamos tu ciclo de vida de software e infraestructura: desde el commit hasta producción, con pipelines CI/CD, IaC y contenedores.",
                "Todo queda versionado y reproducible. Si algo falla, se reconstruye en minutos y los rollbacks dejan de ser una pesadilla.",
            ],
            breakdown: [
                { title: "Auditoría de procesos", description: "Analizamos tu flujo actual de deploys, puntos de falla y oportunidades de automatización." },
                { title: "Pipelines CI/CD", description: "GitHub Actions o Azure DevOps: build, test y deploy automáticos con aprobaciones y notificaciones." },
                { title: "Infraestructura como Código", description: "Terraform y Ansible para provisionar y configurar entornos completos de forma reproducible." },
                { title: "Contenedores", description: "Docker y Kubernetes para empaquetar y orquestar tus aplicaciones con escalabilidad." },
            ],
            techStack: ["Terraform", "Ansible", "GitHub Actions", "Docker", "Kubernetes", "Azure DevOps"],
            benefits: [
                "Deployments reproducibles y predecibles",
                "Menos errores por procesos manuales",
                "Rollback en minutos",
                "Todo versionado y auditable",
            ],
            ctaLabel: "Automatizar mi operación",
            ctaHref: "#contact",
        },
        {
            slug: "auditoria-cloud",
            navLabel: "Auditoría Cloud",
            title: "Auditoría de Seguridad y Costos Cloud | Helix Cloud",
            metaDescription: "Auditoría de seguridad y costos cloud (Azure/GCP): rightsizing, evaluación de vulnerabilidades y reporte de optimización. Pago único con resultados accionables.",
            heading: "Auditoría de Seguridad y Costos Cloud",
            tagline: "Descubre fugas de costos y vulnerabilidades de seguridad en tu nube con un reporte claro y accionable.",
            serviceType: "Cloud Security Audit",
            overview: [
                "Revisamos tu entorno cloud (Azure o GCP) para encontrar recursos sobredimensionados, gastos innecesarios y brechas de seguridad.",
                "Entregamos un reporte priorizado por impacto con recomendaciones concretas y el ROI esperado de cada corrección.",
            ],
            breakdown: [
                { title: "Rightsizing de recursos", description: "Análisis de VMs, storage y bases de datos para ajustar el tamaño a la demanda real y reducir costos." },
                { title: "Evaluación de vulnerabilidades", description: "Revisión de configuraciones, permisos y accesos para detectar brechas de seguridad en tu nube." },
                { title: "Optimización de costos", description: "Identificación de recursos ociosos, reservas y modelos de pago para maximizar tu inversión cloud." },
                { title: "Reporte ejecutivo", description: "Documento final con hallazgos priorizados por impacto, costo y esfuerzo de corrección." },
            ],
            techStack: ["Azure", "GCP", "Terraform", "Zabbix", "Grafana"],
            benefits: [
                "Reporte accionable en días",
                "Prioridades por impacto y ROI",
                "Sin compromiso mensual",
                "Recomendaciones concretas",
            ],
            ctaLabel: "Solicitar auditoría",
            ctaHref: "#contact",
        },
    ],

    // --- Starter Services (One-Off / Tripwire) ---
    starterServices: [
        {
            serviceKey: "audit",
            title: "Auditoría de Seguridad y Costos Cloud",
            price: "$300",
            period: "Pago único",
            description: "Revisión completa de tu entorno Azure o GCP para detectar fugas de costos y vulnerabilidades de seguridad.",
            includes: [
                "Análisis de rightsizing de recursos",
                "Evaluación de vulnerabilidades de seguridad",
                "Reporte de optimización de costos",
            ],
            cta: "Solicitar auditoría →",
            ctaLink: "#contact",
            icon: "🔍",
        },
        {
            serviceKey: "migration",
            title: "Migración Express a Microsoft 365 & Entra ID",
            price: "$450",
            period: "Pago único",
            description: "Lleva tu correo e identidades a Microsoft 365 con políticas de seguridad base desde el primer día.",
            includes: [
                "Migración de buzones de correo",
                "Configuración de dominio",
                "Políticas de seguridad base",
            ],
            cta: "Solicitar migración →",
            ctaLink: "#contact",
            icon: "🚀",
        },
    ],

    // --- Pricing Section ---
    pricingPlans: [
        {
            name: "Esencial",
            price: "$500",
            period: "/mes",
            description: "Para empresas dando sus primeros pasos en la nube",
            featured: false,
            features: [
                "Microsoft 365 administrado (hasta 25 usuarios)",
                "Monitoreo básico de infraestructura",
                "Backup semanal verificado",
                "Soporte por email — respuesta 48h",
                "Reporte mensual de salud",
            ],
            cta: "Comenzar →",
            ctaLink: "#contact",
        },
        {
            name: "Profesional",
            price: "$1,200",
            period: "/mes",
            description: "Para empresas medianas que necesitan infraestructura robusta",
            featured: true,
            badge: "Más popular",
            features: [
                "Microsoft 365 + Entra ID completo (hasta 100 usuarios)",
                "Azure administrado — VMs, storage, networking",
                "Monitoreo 24/5 con Zabbix + Grafana",
                "Backup diario con retención 30 días",
                "Pipeline CI/CD básico incluido",
                "Soporte WhatsApp — respuesta 4h",
                "Reunión mensual de revisión",
            ],
            cta: "Agendar demo →",
            ctaLink: "#contact",
        },
        {
            name: "Enterprise",
            price: "A medida",
            period: "",
            description: "Para empresas con infraestructura compleja o multi-sede",
            featured: false,
            features: [
                "Todo el plan Profesional incluido",
                "SD-WAN multi-sucursal (Fortinet)",
                "DevOps y automatización completa",
                "Seguridad y cumplimiento",
                "SLA personalizado con penalidades",
                "Soporte prioritario — respuesta 1h",
            ],
            cta: "Solicitar propuesta →",
            ctaLink: "#contact",
        },
    ],

    // --- Success Cases ---
    successCases: [
        {
            industry: "Retail",
            size: "12 sucursales en 6 países",
            challenge: "Conectar sucursales en 6 países con conectividad confiable y centralizada",
            solution: "Implementación de Fortinet SD-WAN con centro de datos en VMware y Azure como respaldo",
            result: "Alta disponibilidad en todas las sucursales, reducción de incidentes de conectividad en 80%",
        },
        {
            industry: "Servicios",
            size: "Empresa mediana",
            challenge: "Costos de Azure creciendo sin control ni visibilidad",
            solution: "Auditoría de recursos, rightsizing de VMs, implementación de políticas de gobernanza",
            result: "30% de reducción en costos operativos",
        },
        {
            industry: "Banca",
            size: "Outsourcing empresarial",
            challenge: "Infraestructura legacy sin monitoreo ni redundancia",
            solution: "Migración a infraestructura virtualizada con monitoreo proactivo (Zabbix + Grafana)",
            result: "SLA mejorado, cero incidentes críticos en 8 meses consecutivos",
        },
    ],

    // --- Social Links ---
    linkedinUrl: "https://linkedin.com/in/hroddev",
    linkedinHandle: "linkedin.com/in/hroddev",
    githubUrl: "https://github.com/hroddev",
};
