export const siteData = {
    // --- Personal Information ---
    authorName: "Hector Rodríguez",
    authorRole: "Azure DevOps & Cloud Infrastructure Specialist",

    // --- SEO & Global ---
    siteTitle: "Helix Cloud - Senior DevOps & Infrastructure Portfolio",
    siteDescription: "Senior DevOps Engineer specializing in scalable Cloud Infrastructure, Infrastructure as Code, and production-grade Optimization on Microsoft Azure.",

    // --- Hero Section ---
    heroTitle: "La infraestructura que tu empresa necesita",
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
        "My journey has been defined by a passion for <span class=\"text-white font-semibold\">Infrastructure as Code (IaC)</span> and automation. I specialize in bridging the gap between legacy infrastructure and modern, scalable cloud solutions on <span class=\"text-blue-400 font-semibold tracking-wide\">Microsoft Azure</span> and <span class=\"text-blue-400 font-semibold tracking-wide\">AWS</span>.",
        "From leading <span class=\"text-white\">global SD-WAN deployments</span> across 6 countries to reducing operational costs by <span class=\"text-green-400 font-bold\">30%</span> through cloud optimization, I focus on delivering tangible business value through engineering precision and proactive monitoring."
    ],
    aboutDegree: "Bachelor's Degree",
    aboutDegreeMajor: "Computer Systems",
    aboutCertifications: "Certified Professional",
    aboutCertificationsDetail: "AWS & IBM Specialized",

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
            benefit: "Azure y AWS administrados con visibilidad total de costos y rendimiento en tiempo real.",
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
    stackFeaturedTech: ["AZURE", "AWS", "TERRAFORM", "KUBERNETES", "VMWARE"],

    // --- Services Section ---
    services: [
        {
            title: "Migración a la Nube",
            description: "Mueve tu empresa a Azure o AWS sin downtime. Llevamos tu infraestructura actual a la nube con un plan estructurado. Tus operaciones continúan mientras modernizamos.",
            tags: ["Azure", "AWS", "Terraform", "Sin downtime"],
        },
        {
            title: "Microsoft 365 y Entra ID",
            description: "Microsoft 365 configurado y administrado correctamente. Implementación completa, gestión de identidades con Entra ID y políticas de seguridad. Tu equipo colabora mejor, tus datos están protegidos.",
            tags: ["M365", "Entra ID", "Exchange", "SharePoint"],
        },
        {
            title: "DevOps y Automatización",
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
