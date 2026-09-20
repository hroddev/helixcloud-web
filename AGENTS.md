# Helix Cloud — AI Coding Agent Task & Context Specification

## 1. Project Overview & Tech Stack
- **Project:** Helix Cloud Website (https://helixcloud.dev)
- **Tech Stack:** Astro v5, Tailwind CSS, TypeScript, HTML5.
- **Target Market:** B2B clients in Panama and LATAM requiring Cloud, Azure, Microsoft 365, Fortinet SD-WAN, and DevOps services.
- **Business Goal:** Expand the current single-page website into a high-converting, SEO-optimized multi-page platform that captures leads through high-value entry products (Audits/Migrations) and pre-qualifies potential monthly retainers.

---

## 2. Technical Requirements & Tasks

### Task 1: Add "One-Off / Starter Services" Section (Tripwire Offerings)
- **File:** `src/components/Pricing.astro` (or relevant component handling `#pricing`).
- **Objective:** Add a new section or tab before/alongside monthly retainers for one-time diagnostic services.
- **Items to include:**
  1. **Auditoría de Seguridad y Costos Cloud (Azure/AWS)** — $300 (Pago único)
     - Includes: Right-sizing review, security vulnerability assessment, cost optimization report.
  2. **Migración Express a Microsoft 365 & Entra ID** — $450 (Pago único)
     - Includes: Mailbox migration, domain setup, baseline security policies.
- **UX Requirement:** Each offer must have a prominent CTA button that scrolls or links directly to the contact form with pre-filled parameters or anchor links (e.g., `#contact?service=audit`).

---

### Task 2: Refactor Site Architecture to Multi-Page SEO Routes
- **Objective:** Transition from a pure Single-Page App (SPA) anchor layout to dedicated Astro landing pages to improve organic search ranking for specific queries.
- **New Page Routes to Create:**
  - `src/pages/servicios/migracion-azure.astro`
  - `src/pages/servicios/microsoft-365.astro`
  - `src/pages/servicios/devops-automatizacion.astro`
  - `src/pages/servicios/auditoria-cloud.astro`
- **Requirements for Each Page:**
  - Standardized layout (`src/layouts/Layout.astro`).
  - Dedicated Meta Title, Meta Description, OpenGraph tags, and Schema.org JSON-LD structured data (`ITService`).
  - Detailed service breakdowns, technology stack badges (Terraform, Azure, Zabbix, Fortinet, etc.), and clear CTAs.
  - Update `src/components/Navbar.astro` and `src/components/Footer.astro` to handle both internal page routes and homepage anchor links cleanly.

---

### Task 3: Upgrade Contact Form with Lead Pre-qualification
- **File:** `src/components/Contact.astro` (or `#contact` section).
- **Objective:** Enhance lead quality by capturing operational context before introductory calls.
- **Form Fields Required:**
  - **Nombre completo** (Input Text, required)
  - **Correo corporativo** (Input Email, required)
  - **Empresa / Organización** (Input Text, required)
  - **Servicio de interés** (Select Dropdown):
    - Auditoría de Costos y Nube (Pago único)
    - Migración a Microsoft 365 / Entra ID
    - Infraestructura Administrada (Plan Esencial / Profesional)
    - DevOps & Automatización a medida
  - **Infraestructura actual** (Checkboxes/Radio): Azure, AWS, On-Premises/VMware, Otro.
  - **Mensaje / Desafío principal** (Textarea)
- **Validation & State:** Use clean front-end validation and accessible focus states styled with Tailwind CSS.

---

### Task 4: Add Schema.org Local & B2B Structured Data
- **File:** `src/layouts/Layout.astro` or `src/components/SEO.astro`.
- **Objective:** Improve Local SEO visibility in Panama and Latin America.
- **JSON-LD Specification:**
  - Type: `ProfessionalService` / `ITService`
  - Name: `Helix Cloud`
  - Area Served: `Panama`, `LATAM`
  - Services: `Cloud Migration`, `DevOps Consulting`, `Managed Infrastructure`, `Microsoft 365 Administration`.
  - SameAs links / Social Profiles.

---

## 3. Design System & Style Guidelines
- **Color Palette:**
  - Background: Dark theme (`bg-gray-950`, `#050505`, `bg-black`).
  - Text: High-contrast white (`text-white`) and subtle muted gray (`text-gray-400`).
  - Accents: Gradient blues and purples (`from-blue-600 to-indigo-600`, `text-blue-400`).
- **Typography:** Font family `Outfit` with tracking adjustments.
- **Components:** Maintain existing glassmorphism cards (`glass`, `border-white/10`) and hover states.

---

## 4. Execution Workflow
1. Analyze the existing codebase structure (`src/pages/index.astro`, layout files, and component hierarchy).
2. Implement Task 1 (Starter Services UI in Pricing).
3. Implement Task 3 (Interactive Form Pre-qualification).
4. Create the new routes under `src/pages/servicios/` with reusable Astro components.
5. Add Task 4 (SEO & JSON-LD Metadata).
6. Verify design consistency across mobile and desktop views.
