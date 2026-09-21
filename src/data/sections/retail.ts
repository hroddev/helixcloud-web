// src/content/sections/retail.ts
// Site copy is Spanish (es-PA); keys, comments and TODOs stay in English.

export const retail = {
    id: "retail-multisucursal",
    eyebrow: "Retail multisucursal",
    headline: "Cuando una sucursal pierde internet, no pierde conexión: pierde ventas",
    // Alt headline for A/B testing — swap, don't render both.
    headlineAlt: "Tus tiendas no deberían esperar a que alguien vaya a revisar el router",
    subheadline:
        "Red, seguridad y monitoreo para operaciones con varias tiendas en Panamá y la región. Para que la caja siga facturando aunque el enlace falle.",

    problems: [
        {
            title: "\"La tienda llama para avisar que no hay sistema\"",
            body: "Te enteras de la caída por el cajero, no por una alerta. Para cuando llegas al diagnóstico, ya se perdieron dos horas de venta.",
        },
        {
            title: "\"Cada sucursal tiene un equipo distinto y nadie sabe la clave\"",
            body: "Lo instaló el proveedor de internet, no hay documentación y no hay respaldo de la configuración. Si el equipo se daña, la tienda se reconstruye desde cero.",
        },
        {
            title: "\"El wifi de los clientes, las cámaras y la caja están en la misma red\"",
            body: "Un solo equipo infectado alcanza el punto de venta. Y con factura electrónica, una caja detenida es una caja que no puede emitir.",
        },
    ],

    capabilities: [
        {
            title: "Continuidad de caja",
            body: "Enlace de respaldo con conmutación automática: si el proveedor principal cae, la tienda sigue vendiendo y facturando.",
        },
        {
            title: "Monitoreo con alerta anticipada",
            body: "Sé que la sucursal está degradada antes de que llamen. Reporte mensual de disponibilidad por tienda.",
        },
        {
            title: "Red segmentada",
            body: "Caja, administración, cámaras y wifi de clientes en segmentos separados. Un problema en uno no toca a los demás.",
        },
        {
            title: "Configuración estandarizada y respaldada",
            body: "Todas las sucursales bajo la misma plantilla, con respaldo de configuración. Un equipo dañado se reemplaza en horas, no en días.",
        },
        {
            title: "Kit de apertura de tienda",
            body: "Plantilla repetible para que abrir la próxima sucursal sea un procedimiento, no un proyecto.",
        },
        {
            title: "Acceso remoto controlado",
            body: "Tú y tus proveedores entran solo a lo que les corresponde, con registro de quién hizo qué.",
        },
    ],

    plan: {
        name: "Plan Multisucursal",
        price: "Desde $350 por sede + $30 por usuario al mes",
        includes: [
            "Gestión del firewall de cada sucursal",
            "Monitoreo del enlace y de los equipos críticos",
            "Respaldo de configuración",
            "Segmentación de red",
            "Atención de incidentes en horario hábil (L-V, 8:00-18:00)",
            "Reporte mensual de disponibilidad por sucursal",
        ],
        excludes: [
            "Hardware y enlaces de internet",
            "Licencias de terceros",
            "Guardia fuera de horario (se contrata aparte)",
        ],
        cta: {
            label: "Agendar diagnóstico gratis de 30 min",
            href: "https://wa.me/50766366261?text=Hola%2C%20vi%20su%20sitio%20HelixCloud.dev%20y%20me%20interesa%20el%20Plan%20Multisucursal%20para%20retail",
        },
    },

    faq: [
        {
            q: "¿Trabajan con el proveedor de internet que ya tengo?",
            a: "Sí. No vendo enlaces ni recibo comisión de ningún proveedor, así que la recomendación que te doy es la que me parece correcta para tu operación.",
        },
        {
            q: "¿Tengo que cambiar los equipos de mis tiendas?",
            a: "No necesariamente. El diagnóstico dice qué sirve y qué no. Si algo hay que reemplazar, te digo por qué y cuánto cuesta antes de tocar nada.",
        },
        {
            q: "¿Y si abro una sucursal nueva?",
            a: "Se suma al plan con la plantilla ya definida. Sabes de antemano cuánto cuesta y cuánto tarda.",
        },
        {
            q: "¿Cuántos clientes atiende Helix Cloud?",
            a: "Pocos, a propósito. Es una práctica independiente con cupo limitado, no un centro de soporte masivo.",
        },
    ],

    seo: {
        title: "Red y seguridad para retail multisucursal en Panamá | Helix Cloud",
        description:
            "Gestión de red, firewall y monitoreo para comercios con varias sucursales en Panamá. Continuidad de caja, segmentación y respaldo de configuración. Diagnóstico gratis.",
    },
};
