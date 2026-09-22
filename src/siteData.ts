export const siteData = {
    // --- Personal Information ---
    authorName: "Hector Rodríguez",
    authorRole: "IT Infrastructure & Security Specialist",

    // --- SEO & Global ---
    siteTitle: "Helix Cloud — Seguridad, Red y Continuidad TI para PyMEs en Panamá",
    siteDescription: "Seguridad Microsoft 365 y redes multisucursal para empresas de 10 a 40 empleados en Panamá. Diagnóstico gratuito de 30 minutos.",
    siteUrl: "https://helixcloud.dev",

    // --- Contact channels ---
    whatsappUrl: "https://wa.me/50766366261?text=Hola%2C%20vi%20su%20sitio%20HelixCloud.dev%20y%20me%20interesa%20el%20diagn%C3%B3stico%20gratuito",
    responseTimeNote: "Respuesta en horario hábil (L-V, 8:00–18:00). Guardia extendida contratable.",

    // --- Hero Section ---
    heroEyebrow: "Disponible para nuevos proyectos en Panamá.",
    heroTitle: "Tu red y tu Microsoft 365, resueltos",
    heroSubtitle: "Seguridad y continuidad para empresas con 1 a 4 sedes en Panamá",
    heroDescription:
        "Trabajo con empresas de 10 a 40 empleados que ya usan Microsoft 365 y no pueden permitirse que la red se caiga o que entre un correo de phishing.",
    heroCtaLabel: "Diagnóstico gratuito de 30 min →",

    // --- Problems Section ---
    problemsTitle: "Problemas que reconoces si tu empresa opera en Panamá",
    problems: [
        {
            title: "La red se cae y pierdes ventas",
            description:
                "Una sucursal sin internet o sin VPN es una sucursal que no cobra. Sin monitoreo ni respaldo, te enteras cuando el cliente ya se quejó.",
        },
        {
            title: "Un correo de phishing puede tumbar tu operación",
            description:
                "El acceso remoto expuesto y las cuentas de Microsoft 365 sin MFA son la puerta de entrada más común para el robo de credenciales y el ransomware en empresas pequeñas.",
        },
    ],

    // --- One-time packages (proyectos puntuales) ---
    oneTimePackages: [
        {
            key: "seguridad-m365",
            name: "Arranque Seguro",
            price: "Desde $1,200",
            period: "Proyecto único",
            description:
                "Hardening de Microsoft 365 y Entra ID: MFA, cierre de accesos remotos expuestos, respaldo verificado e informe ejecutivo.",
            notIncluded: "No incluye soporte mensual ni monitoreo continuo — eso es el Plan Continuidad.",
            href: "/servicios/seguridad-microsoft-365/",
            cta: "Solicitar Arranque Seguro",
        },
        {
            key: "auditoria",
            name: "Auditoría de Seguridad y Costos Cloud",
            price: "Desde $1,200",
            period: "Proyecto único",
            description:
                "Revisión de tu entorno cloud (Azure/GCP) y de tu seguridad perimetral: vulnerabilidades, gasto innecesario y prioridades de corrección.",
            notIncluded: "No incluye la implementación de las correcciones — se cotiza aparte según hallazgos.",
            guarantee: "Si no identifico ahorro superior al costo de la auditoría, no me pagas.",
            href: "#contact",
            cta: "Solicitar auditoría",
        },
        {
            key: "migracion-hibrida",
            name: "Migración a la Nube / Híbrida",
            price: "Cotización a medida",
            period: "Según servidores y volumen de datos",
            description:
                "Migramos tus servidores on-premise a la nube (Azure/AWS) o a un ambiente híbrido, con un plan por fases y sin downtime en horario laboral.",
            notIncluded: "No incluye el costo de los servicios cloud del proveedor (Azure/AWS) — se cotiza aparte según el diseño.",
            href: "/servicios/migracion-hibrida/",
            cta: "Solicitar diagnóstico de migración",
        },
    ],

    // --- Monthly plans (mensualidad) ---
    monthlyPlans: [
        {
            key: "continuidad",
            name: "Plan Continuidad",
            price: "Desde $850",
            period: "/mes",
            description: "Hasta 25 usuarios, 1 sede: monitoreo, respaldo, parches y gestión de identidad.",
            notIncluded: "No incluye soporte fuera de horario hábil ni sedes adicionales — ver Plan Multisucursal.",
            href: "#contact",
            cta: "Agendar diagnóstico",
        },
        {
            key: "multisucursal",
            name: "Plan Multisucursal",
            price: "Desde $350",
            priceSuffix: "por sede + $30 por usuario",
            period: "/mes",
            description: "Red, firewall, SD-WAN y monitoreo distribuido para operaciones con varias sedes.",
            notIncluded: "No incluye el hardware de firewall/SD-WAN — se cotiza según cantidad de sedes.",
            href: "/servicios/red-multisucursal/",
            cta: "Solicitar propuesta",
        },
    ],

    // --- Free diagnostic (primary CTA) ---
    freeDiagnostic: {
        title: "Diagnóstico inicial",
        price: "Gratis",
        duration: "30 minutos",
        description: "Revisamos tu red y tu Microsoft 365 para detectar riesgos. Sin compromiso.",
    },

    // --- Cómo trabajamos ---
    howWeWorkTitle: "Cómo trabajamos",
    howWeWork: [
        {
            step: "1",
            title: "Diagnóstico",
            description: "30 minutos por WhatsApp o videollamada para entender tu operación y tus riesgos.",
        },
        {
            step: "2",
            title: "Proyecto",
            description: "Ejecutamos el paquete que corresponda: seguridad M365, red multisucursal o migración híbrida.",
        },
        {
            step: "3",
            title: "Mensualidad",
            description: "Si necesitas continuidad, pasamos a un plan mensual con monitoreo, respaldo y soporte.",
        },
    ],

    // --- FAQ ---
    faqTitle: "Preguntas frecuentes",
    faqItems: [
        {
            q: "¿Qué incluye el diagnóstico gratuito de 30 minutos?",
            a: "Revisamos tu red y tu Microsoft 365 para detectar riesgos. Sales con next steps claros, sin compromiso de compra.",
        },
        {
            q: "¿Trabajan con empresas fuera de Ciudad de Panamá?",
            a: "Sí, atendemos empresas en todo Panamá. La mayoría del trabajo se hace remoto, con visitas puntuales según el proyecto.",
        },
        {
            q: "¿Cuál es el tiempo de respuesta?",
            a: "Respuesta en horario hábil (L-V, 8:00–18:00). Si necesitas guardia extendida o cobertura de fin de semana, se contrata aparte.",
        },
        {
            q: "¿Qué tipo de empresa es un buen fit?",
            a: "Empresas de 10 a 40 empleados, con 1 a 4 sedes, que ya usan Microsoft 365. No trabajamos con micro-negocios de 1-3 personas ni con empresas que ya tienen equipo de plataforma interno.",
        },
        {
            q: "¿Hay contrato de permanencia en los planes mensuales?",
            a: "No hay contrato de permanencia forzoso. El Plan Continuidad y el Plan Multisucursal se facturan mes a mes.",
        },
        {
            q: "¿Qué pasa si ya tengo un proveedor de TI?",
            a: "Podemos trabajar junto a tu proveedor actual — por ejemplo, en la parte de seguridad — o hacer una auditoría independiente de lo que ya tienes.",
        },
        {
            q: "¿Qué NO incluye la auditoría de seguridad y costos?",
            a: "La auditoría identifica y prioriza hallazgos; la implementación de las correcciones se cotiza como proyecto aparte. Si no identifico ahorro superior al costo de la auditoría, no la cobro.",
        },
    ],

    // --- Service Landing Pages ---
    servicePages: [
        {
            slug: "seguridad-microsoft-365",
            navLabel: "Seguridad M365",
            title: "Seguridad Microsoft 365 y Entra ID en Panamá | Helix Cloud",
            metaDescription:
                "Hardening de Microsoft 365 y Entra ID para empresas en Panamá: MFA, cierre de accesos remotos expuestos y respaldo verificado. Desde $1,200.",
            heading: "Seguridad Microsoft 365 y Entra ID",
            tagline: "Cierra las puertas más comunes de entrada para el phishing y el robo de credenciales, sin paralizar tu operación.",
            serviceType: "Managed Security Service",
            overview: [
                "La mayoría de los incidentes de seguridad en empresas pequeñas no empiezan con un ataque sofisticado: empiezan con una cuenta de Microsoft 365 sin MFA o un acceso remoto expuesto a internet.",
                "El Arranque Seguro cierra esas puertas en un proyecto de alcance definido: MFA y Conditional Access en Entra ID, cierre de accesos remotos expuestos, respaldo verificado y un informe ejecutivo con lo que se corrigió y lo que sigue pendiente.",
            ],
            breakdown: [
                { title: "MFA y Conditional Access", description: "Activación de MFA para todos los usuarios y políticas de Conditional Access en Entra ID según el riesgo de cada acceso." },
                { title: "Cierre de accesos remotos expuestos", description: "Identificación y cierre de puertos, VPNs y accesos remotos expuestos directamente a internet." },
                { title: "Respaldo verificado", description: "Verificación de que tus respaldos de correo y archivos existen, se completan y se pueden restaurar." },
                { title: "Informe ejecutivo", description: "Documento con lo corregido, el riesgo residual y las siguientes prioridades de seguridad." },
            ],
            techStack: ["Microsoft 365", "Entra ID", "MFA", "Conditional Access"],
            benefits: [
                "MFA y Conditional Access activos en días, no meses",
                "Accesos remotos expuestos identificados y cerrados",
                "Respaldo verificado, no asumido",
                "Informe ejecutivo con prioridades claras",
            ],
            price: "Desde $1,200",
            priceNote: "Proyecto único",
            notIncluded: "No incluye soporte mensual ni monitoreo continuo — eso es el Plan Continuidad.",
            ctaLabel: "Solicitar Arranque Seguro",
            ctaHref: "#contact",
        },
        {
            slug: "red-multisucursal",
            navLabel: "Red Multisucursal",
            title: "Red y Seguridad Multisucursal en Panamá | Helix Cloud",
            metaDescription:
                "Firewall, SD-WAN y monitoreo distribuido para empresas con varias sedes en Panamá. Desde $350 por sede + $30 por usuario al mes.",
            heading: "Red y Seguridad Multisucursal",
            tagline: "Firewall, SD-WAN y monitoreo distribuido para que cada sede funcione como si fuera una sola red confiable.",
            serviceType: "Managed Network Service",
            overview: [
                "Cuando tienes varias sedes, cada una es un punto de falla distinto: conectividad, seguridad perimetral y visibilidad se vuelven problemas por separado si no hay una red diseñada como una sola.",
                "El Plan Multisucursal conecta y protege cada sede con firewall y SD-WAN, con monitoreo distribuido desde un solo lugar y soporte mensual para que el crecimiento no dependa de apagar incendios.",
            ],
            breakdown: [
                { title: "Diseño de red por sede", description: "Arquitectura de red y conectividad adaptada a la realidad de cada sede." },
                { title: "Firewall y SD-WAN", description: "Seguridad perimetral y enrutamiento inteligente entre sedes con SD-WAN." },
                { title: "Monitoreo distribuido", description: "Visibilidad centralizada del estado de red y seguridad de todas las sedes." },
                { title: "Soporte mensual", description: "Gestión, parches y soporte continuo en horario hábil para toda la red." },
            ],
            techStack: ["SD-WAN", "Firewall", "Monitoreo distribuido"],
            benefits: [
                "Visibilidad centralizada de todas las sedes",
                "Seguridad perimetral consistente por sede",
                "Menos incidentes de conectividad",
                "Soporte mensual incluido",
            ],
            price: "Desde $350 por sede + $30 por usuario",
            priceNote: "/mes",
            notIncluded: "No incluye el hardware de firewall/SD-WAN — se cotiza según cantidad de sedes.",
            ctaLabel: "Solicitar propuesta",
            ctaHref: "#contact",
        },
        {
            slug: "migracion-hibrida",
            navLabel: "Migración Híbrida",
            title: "Migración de Servidores On-Premise a la Nube o Híbrido en Panamá | Helix Cloud",
            metaDescription:
                "Migración de servidores on-premise a Azure/AWS o a un ambiente híbrido para empresas en Panamá, sin downtime y con plan de rollback. Cotización a medida.",
            heading: "Migración a la Nube o a un Ambiente Híbrido",
            tagline: "Llevamos tus servidores locales a la nube o a un esquema híbrido, con un plan por fases y sin detener tu operación.",
            serviceType: "Cloud Migration",
            overview: [
                "Muchas empresas siguen dependiendo de servidores locales que ya cumplieron su vida útil, sin respaldo confiable ni plan de continuidad si el hardware falla.",
                "Evaluamos tu infraestructura actual (servidores, aplicaciones, dependencias) y diseñamos una migración por fases a la nube o a un esquema híbrido — priorizando lo que menos riesgo agrega primero, con backups verificados y un plan de rollback en cada fase.",
            ],
            breakdown: [
                { title: "Evaluación y discovery", description: "Inventario de servidores, aplicaciones, dependencias y capacidad actual para dimensionar la migración." },
                { title: "Diseño de arquitectura", description: "Arquitectura en la nube o híbrida (VPN/conectividad con tu sitio local), identidad y seguridad desde el diseño." },
                { title: "Migración por fases", description: "Rehost, replatform o mantener on-premise según cada carga de trabajo, empezando por lo que menos riesgo agrega." },
                { title: "Validación y documentación", description: "Backups verificados, pruebas de failover y documentación completa del nuevo entorno para tu equipo." },
            ],
            techStack: ["Azure", "AWS", "VMware", "Hyper-V", "VPN Site-to-Site"],
            benefits: [
                "Migración por fases, sin downtime en horario laboral",
                "Plan de rollback en cada fase",
                "Ambientes híbridos cuando no todo puede (o debe) moverse a la nube",
                "Documentación completa del entorno resultante",
            ],
            price: "Cotización a medida",
            priceNote: "Según servidores y volumen de datos",
            notIncluded: "No incluye el costo de los servicios cloud del proveedor (Azure/AWS) — se cotiza aparte según el diseño.",
            ctaLabel: "Solicitar diagnóstico de migración",
            ctaHref: "#contact",
        },
    ],

    // --- Social Links ---
    linkedinUrl: "https://linkedin.com/in/hroddev",
    linkedinHandle: "linkedin.com/in/hroddev",
    githubUrl: "https://github.com/hroddev",
};
