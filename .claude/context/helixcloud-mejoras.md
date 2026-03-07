# Contexto: Mejoras HelixCloud.dev — Claude Code

## Stack del sitio

- **Framework:** Astro, tailwind
- **Hosting:** Azure Static Web Apps
- **Deploy:** GitHub Actions (push a main → deploy automático)
- **Dominio:** helixcloud.dev

## Objetivo de esta sesión

Transformar el sitio de portafolio técnico a landing page de servicios
orientada a conversión. El cliente objetivo son empresas medianas en Panamá
(50-300 empleados) con IT limitado. El visitante típico es un gerente
administrativo o dueño de empresa, no un técnico.

---

## Diagnóstico del sitio actual

### Problemas críticos a corregir

**1. Hero — habla de logros, no de beneficios**
El headline actual "Engineering Excellence" y el copy que sigue describen
el perfil profesional de Hector, no el valor que recibe el cliente.
Un gerente de empresa mediana en Panamá no conecta con "cloud-native ecosystems".

**2. Sin CTA en el hero**
No hay botón visible en la primera pantalla. El visitante no sabe qué hacer.

**3. Technical Stack es un CV**
La lista de Terraform, Bicep, Ansible, etc. solo le habla a otros técnicos.
El cliente objetivo no sabe qué es Bicep ni le importa.

**4. Credenciales aparecen antes que los servicios**
Bachelor's Degree y Certified Professional están demasiado arriba.
Las credenciales refuerzan la decisión, no la inician.

**5. Sin sección de servicios con precios**
El visitante no sabe qué ofreces ni cuánto cuesta. Sin esa información,
no hay razón para contactar.

**6. Sin casos de éxito con contexto**
Se menciona "30% reducción de costos" pero sin historia. El SD-WAN en
6 países es el caso de éxito más poderoso y no está desarrollado.

**7. Formulario de contacto sin incentivo**
No hay razón clara para llenarlo. Falta urgencia, incentivo y expectativa
de qué pasa después.

---

## Cambios a implementar

### CAMBIO 1 — Hero nuevo

**Headline actual:** "Engineering Excellence"
**Headline nuevo:**

```
Tu infraestructura no debería
ser lo que te detiene.
```

**Subheadline actual:** Habla de la trayectoria de Hector
**Subheadline nuevo:**

```
Servicios administrados de nube, Microsoft 365 y DevOps
para empresas en Panamá que quieren crecer sin contratar
un equipo IT completo.
```

**Agregar dos CTAs en el hero:**

- Primario: "Diagnóstico gratuito →" (link a sección contacto)
- Secundario: "Ver servicios" (link a sección servicios)

**Agregar stats debajo de los CTAs:**

- 15+ Años de experiencia
- 6 Países implementados
- 30% Reducción de costos promedio

---

### CAMBIO 2 — Nueva sección de servicios (después del hero)

Reemplazar o reestructurar "Core Capabilities" con una sección de servicios
clara con descripción orientada a beneficios. Servicios a incluir:

```
1. Migración a la Nube
   Título: "Mueve tu empresa a Azure o AWS sin downtime"
   Descripción: "Llevamos tu infraestructura actual a la nube con un plan
   de migración estructurado. Tus operaciones continúan mientras
   modernizamos tu infraestructura."
   Tags: Azure, AWS, Terraform, Sin downtime

2. Microsoft 365 y Entra ID
   Título: "Microsoft 365 configurado y administrado correctamente"
   Descripción: "Implementación completa de M365, gestión de identidades
   con Entra ID y políticas de seguridad. Tu equipo colabora mejor,
   tus datos están protegidos."
   Tags: M365, Entra ID, Exchange, SharePoint

3. DevOps y Automatización
   Título: "Deployments que no fallan un viernes"
   Descripción: "Pipelines CI/CD, infraestructura como código y
   automatización de procesos. Todo versionado, todo reproducible,
   todo auditable."
   Tags: Terraform, Ansible, GitHub Actions, Docker

4. Monitoreo y Observabilidad
   Título: "Saber que algo falló antes de que te llamen"
   Descripción: "Visibilidad completa de tu infraestructura en tiempo real.
   Alertas proactivas configuradas para que los problemas se resuelvan
   antes de afectar a tus usuarios."
   Tags: Zabbix, Grafana, Prometheus

5. Seguridad Informática
   Título: "Infraestructura que cumple con los estándares"
   Descripción: "Evaluación de vulnerabilidades, hardening de servidores
   y políticas Zero Trust. Tu negocio protegido sin paralizar las operaciones."
   Tags: Zero Trust, Fortinet, Auditoría

6. Infraestructura Administrada (Retainer)
   Título: "Tu equipo IT externo, a fracción del costo"
   Descripción: "Gestión mensual de toda tu infraestructura cloud.
   Actualizaciones, parches, backups verificados y soporte técnico.
   Tú te enfocas en tu negocio."
   Tags: Retainer mensual, SLA 99.9%, Soporte 24/5
```

---

### CAMBIO 3 — Sección de precios

Agregar sección de precios con tres niveles después de servicios:

```
Plan Esencial — $500/mes
  Para empresas dando sus primeros pasos en la nube
  - Microsoft 365 administrado (hasta 25 usuarios)
  - Monitoreo básico de infraestructura
  - Backup semanal verificado
  - Soporte por email — respuesta 48h
  - Reporte mensual de salud
  CTA: "Comenzar →"

Plan Profesional — $1,200/mes  [DESTACADO — "Más popular"]
  Para empresas medianas que necesitan infraestructura robusta
  - Microsoft 365 + Entra ID completo (hasta 100 usuarios)
  - Azure administrado — VMs, storage, networking
  - Monitoreo 24/5 con Zabbix + Grafana
  - Backup diario con retención 30 días
  - Pipeline CI/CD básico incluido
  - Soporte WhatsApp — respuesta 4h
  - Reunión mensual de revisión
  CTA: "Agendar demo →"

Plan Enterprise — A medida
  Para empresas con infraestructura compleja o multi-sede
  - Todo el plan Profesional incluido
  - SD-WAN multi-sucursal (Fortinet)
  - DevOps y automatización completa
  - Seguridad y cumplimiento
  - SLA personalizado con penalidades
  - Soporte prioritario — respuesta 1h
  CTA: "Solicitar propuesta →"
```

---

### CAMBIO 4 — Caso de éxito (nuevo)

Agregar una sección "Resultados reales" con el caso de SD-WAN:

```
Caso 1 — SD-WAN Multi-país
  Industria: Retail (franquiciado internacional)
  Desafío: Conectar 12 sucursales en 6 países con conectividad
           confiable y centralizada
  Solución: Implementación de Fortinet SD-WAN con centro de datos
            en VMware y Azure como respaldo
  Resultado: Alta disponibilidad en todas las sucursales,
             reducción de incidentes de conectividad en 80%

Caso 2 — Optimización Azure
  Industria: Servicios (outsourcing)
  Desafío: Costos de Azure creciendo sin control
  Solución: Auditoría de recursos, rightsizing de VMs,
            implementación de políticas de gestión
  Resultado: 30% de reducción en costos operativos

Caso 3 — Migración a nube con zero downtime
  Industria: Banca (outsourcing)
  Desafío: Infraestructura legacy sin monitoreo ni redundancia
  Solución: Migración a infraestructura virtualizada con
            monitoreo proactivo
  Resultado: SLA mejorado, cero incidentes críticos en 8 meses
```

---

### CAMBIO 5 — Transformar "Technical Stack"

Si se mantiene la sección, cambiar de lista de herramientas a beneficios:

```
En vez de lista de bullets con nombres de tecnologías,
mostrar cada categoría con el beneficio que entrega:

DevOps & Automatización
→ "Infraestructura reproducible. Si algo falla, se reconstruye
   en minutos con Terraform y Ansible."

Cloud Platforms
→ "Azure y AWS administrados con visibilidad total de costos
   y rendimiento en tiempo real."

Seguridad
→ "Zero Trust implementado correctamente. Acceso solo para
   quien debe tener acceso, auditado y documentado."

Monitoreo
→ "Alertas antes de que el problema llegue a tus usuarios.
   Dashboard en tiempo real para tu equipo."
```

---

### CAMBIO 6 — Sección de contacto mejorada

**Headline actual:** "Ready to Optimize?"
**Headline nuevo:** "Hablemos de tu infraestructura"

**Agregar debajo del headline:**

```
Diagnóstico gratuito de 30 minutos. Sin compromiso.
Te respondo en menos de 24 horas.
```

**Agregar botón de WhatsApp prominente ANTES del formulario:**

```
[💬 WhatsApp directo] — wa.me/50766366261
```

**Cambiar copy del formulario:**

- Campo "How can I help?" → "¿Cuál es tu mayor dolor de cabeza con IT hoy?"
- Botón submit: "Enviar" → "Solicitar diagnóstico gratuito"

**Agregar expectativa después del botón:**

```
✓ Te respondo en menos de 24 horas
✓ Primera consulta sin costo
✓ Sin contratos de largo plazo para empezar
```

---

### CAMBIO 7 — Idioma del sitio

El sitio actual está en inglés. El cliente objetivo son empresas en Panamá.
**Recomendación:** cambiar todo el contenido a español.

Si se prefiere mantener inglés para audiencia internacional, al menos
agregar un selector de idioma ES/EN.

Para el mercado panameño, español genera más confianza y conversión.

---

## Orden de implementación recomendado

```
Prioridad 1 (impacto inmediato):
  → Cambio 1: Nuevo hero con headline orientado al cliente y CTAs
  → Cambio 6: Contacto con WhatsApp y expectativas claras

Prioridad 2 (completa la propuesta de valor):
  → Cambio 2: Sección de servicios con descripciones de beneficios
  → Cambio 3: Sección de precios

Prioridad 3 (genera confianza):
  → Cambio 4: Casos de éxito
  → Cambio 5: Technical Stack como beneficios

Prioridad 4 (optimización):
  → Cambio 7: Traducción al español
```

---

## Reglas de copy para todo el sitio

1. **Hablar al cliente, no de Hector** — cada sección debe responder
   "¿qué obtienes tú?" no "qué sé yo hacer".

2. **Panamá primero** — mencionar Panamá explícitamente genera confianza
   local. El cliente sabe que entienden su contexto.

3. **Beneficios antes que herramientas** — Terraform no significa nada
   para un gerente administrativo. "Se reconstruye en minutos" sí.

4. **Números concretos siempre** — "30% reducción de costos", "6 países",
   "15 años", "respuesta en 4 horas". Los números concretos generan
   credibilidad.

5. **Un CTA claro por sección** — cada sección termina con una acción
   específica. No dejar al visitante sin saber qué hacer.

6. **Urgencia sin presión** — "Diagnóstico gratuito" es más efectivo que
   "Contáctanos". Da una razón concreta para actuar ahora.

---

## Información de contacto real a usar en el sitio

```
WhatsApp:  Botón con enlace directo — NO mostrar el número en texto plano
           URL: https://wa.me/50766366261?text=Hola%2C%20vi%20su%20sitio%20HelixCloud.dev%20y%20me%20interesa%20conocer%20sus%20servicios
           Texto del botón: "💬 Escríbenos por WhatsApp"
Email:     hector@helixcloud.dev  (dominio propio, nunca Gmail)
LinkedIn:  linkedin.com/in/hroddev
Ubicación: Ciudad de Panamá, Panamá
```

**Regla:** Nunca mostrar el número de teléfono en texto plano en ninguna
parte del sitio. Siempre usar el enlace wa.me con mensaje pre-cargado.

---

## Notas técnicas para Astro

- Mantener la estructura de componentes existente — no reescribir desde cero
- Si hay un archivo de contenido separado (JSON/MD), actualizar datos ahí
- Verificar que los cambios se vean bien en móvil — el sitio se ve principalmente
  desde móvil según las capturas
- El deploy es automático al hacer push a main via GitHub Actions
- No modificar el archivo de workflow de GitHub Actions (.github/workflows/)
