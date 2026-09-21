# Task: Restructure helixcloud.dev into a simpler, higher-converting site

## Role
You are working on the marketing site for **Helix Cloud** (helixcloud.dev), a
one-person freelance IT infrastructure and security practice based in Panama.
The owner works full-time elsewhere, so capacity is limited to ~5-8 recurring
clients. The site must reflect that: few services, clear prices, one CTA.

## Step 0 — Audit before changing anything
1. Detect the stack (framework, build tool, styling, deploy target) and report it.
2. Map the current routes and components.
3. Produce a short migration plan and WAIT for my approval before editing files.
4. Do all work on a feature branch (`feat/site-restructure`). Do not deploy to
   production; build locally / produce a preview only.

## Strategic brief (drives all copy decisions)

**Ideal client profile (ICP):** Panamanian companies with 10-40 employees,
1-4 locations, already on Microsoft 365, in sectors that lose money when the
network is down: retail, clinics, logistics, legal/accounting firms.
Explicitly NOT: 3-person micro-businesses, and NOT enterprises with in-house
platform teams.

**Positioning:** network, security and monitoring for small multi-location
operations in Panama — not generic "Cloud, DevOps & Microsoft 365".

**Demand drivers to lead with (Panama, 2026):**
- Electronic invoicing / PAC migration (DGI Resolución 201-6299: taxpayers over
  B/.36,000 annual income or 100+ documents per month must use a PAC).
- SMB security basics — phishing and exposed remote access are the top vectors.
- Microsoft 365 / Entra ID done properly (MFA, conditional access, offboarding).
- Backup and business continuity.

**Remove from the site entirely:** DevOps/Terraform/Ansible/IaC as a headline
pillar, Kubernetes, advanced observability. Keep them out of nav and hero; at
most one line on an "otros servicios" note.

## Target information architecture
Replace the current multi-page structure with:

- `/` — single long landing page, sections in this order:
  1. Hero: who it's for + problem solved + primary CTA
  2. Three concrete problems the ICP recognizes as their own
  3. Three packages with visible prices
  4. One proof element (anonymized case study; see constraints)
  5. Short "cómo trabajamos" (3 steps: diagnóstico → proyecto → mensualidad)
  6. FAQ (6-8 questions)
  7. Final CTA + contact form
- `/servicios/seguridad-microsoft-365/`
- `/servicios/facturacion-electronica/`
- `/servicios/red-multisucursal/`

Delete or 301-redirect the old service pages that no longer exist. Keep the
existing sitemap.xml generation working and update robots.txt if needed.

## Pricing to publish (replace all current pricing)

| Offer | Type | Price |
|---|---|---|
| Diagnóstico inicial (30 min) | Free | Gratis |
| Arranque Seguro — hardening M365/Entra ID, MFA, cierre de accesos remotos expuestos, respaldo verificado, informe ejecutivo | One-time project | Desde $1,200 |
| Listo para Facturación Electrónica — integración, orden de datos, conectividad y respaldo en punto de venta, capacitación | One-time project | Desde $900 |
| Auditoría de Seguridad y Costos Cloud | One-time project | Desde $1,200 |
| Plan Continuidad — hasta 25 usuarios, 1 sede: monitoreo, respaldo, parches, gestión de identidad, soporte en horario hábil | Monthly | Desde $850/mes |
| Plan Multisucursal — red, firewall, SD-WAN, monitoreo distribuido | Monthly | Desde $350 por sede + $30 por usuario |

Rules:
- Remove "24/5 support" and "SLA de respuesta 1 hora" everywhere. Replace with
  "Respuesta en horario hábil (L-V, 8:00-18:00). Guardia extendida contratable."
- Remove the $300 audit and the $450 flat M365 migration.
- Every price is prefixed "Desde" and every plan shows what is NOT included.
- Add a guarantee line to the audit: "Si no identifico ahorro superior al costo
  de la auditoría, no me pagas."

## Copy constraints (important)
- All user-facing copy in **Spanish (Panama)**. Code, comments, commit messages,
  variable names and any README stay in **English**.
- **Do not invent** testimonials, client names, logos, case studies or metrics.
- Remove the unsupported claims currently on the site: "30% de reducción de
  costos promedio", "6 países", "SLA 99.9%". Either delete them or replace with
  a placeholder I must fill in, marked `TODO(hector): verify claim`.
- The proof section must use an anonymized profile (e.g. "Retail, 20+ sucursales
  en Centroamérica y el Caribe") with NO employer name, logo or identifying
  detail. Leave it as a clearly marked placeholder for me to approve.
- One primary CTA only: the free 30-minute diagnostic via WhatsApp
  (https://wa.me/50766366261). The contact form is the secondary path and must
  keep requiring a corporate email.

## Technical requirements
- Single primary CTA repeated at most 3 times on the landing page.
- Mobile-first; verify no horizontal scroll at 375px width.
- Lighthouse: performance and accessibility ≥ 90 on the landing page. Report the
  scores after the build.
- Semantic HTML, proper heading hierarchy, visible focus states, WCAG AA contrast
  in both light and dark mode.
- Per-page `<title>` and meta description in Spanish, targeting Panama.
  Add `hreflang="es-PA"`, Open Graph tags, and JSON-LD
  (`ProfessionalService` + `Offer` for each package, `FAQPage` for the FAQ).
- No new frameworks, dependencies or hosting platforms without asking me first.
- Keep bundle size at or below current; inline critical CSS if the stack allows.

## Deliverables
1. Migration plan (before any edit) — wait for approval.
2. The restructured site on `feat/site-restructure`.
3. A diff summary of removed/added routes plus the redirect map.
4. Lighthouse scores and a 375px screenshot of the landing page.
5. A list of every `TODO(hector)` placeholder left for me to fill.

Start with Step 0 and report back.
