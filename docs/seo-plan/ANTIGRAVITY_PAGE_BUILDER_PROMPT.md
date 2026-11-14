# LegalRecovery.in — B2B & 25-Industry Page Builder Prompt (Nov 2026 Master Plan)

Build **one** production-grade B2B creditor / institutional recovery page at a time for the `TARGET_URL` provided at the end of this prompt (`URL` path like `/industries/banks-loan-recovery` or Plan ID like `B2B-001`).

> **Note for Legacy Consumer URLs:** If `TARGET_URL` is not in the Nov 2026 B2B Master Plan, check `docs/seo-plan/seo-plan-data.json` and `docs/seo-plan/LegalRecovery_SEO_AI_Master_Plan_Oct2026.pdf`, while preserving the exact same visual theme, Screaming Frog rules, and build/verification standards below.

---

## 1. Sources of Truth (Read in This Order)

1. **`d:\Samagra Jaiswal\AMA office work\legal recovery\300url.txt`** — Complete single-lookup directory of the Nov 2026 300-URL B2B plan: global codebase audit (§1), 14 existing B2B seed assets (§2.2), competitor & AI-Search GEO matrix (§3), 16-statute matrix (§4), 8 calculators & 4 empirical reports (§5.1–§5.2), §7 internal linking & dual-CTA funnel, all 26 Industry Playbooks (`IND-01`..`IND-25`, `CORE-26`), and every field for `B2B-001`–`B2B-300`. Locate the block matching `TARGET_URL` or its `B2B-###` ID plus its parent Industry Playbook header.
2. **`docs/seo-plan/b2b-seo-plan-data.json`** — Authoritative UTF-8 companion JSON (essential for clean Devanagari strings on the 5 Hindi routes: `B2B-087`, `B2B-122`, `B2B-166`, `B2B-177`, `B2B-249`).
3. **`docs/seo-plan/LegalRecovery_B2B_Industry_300_URL_SEO_Master_Plan_Nov2026.pdf`** — Full 134-page PDF specification for deep statutory nuance if needed beyond `300url.txt`.
4. **`AGENTS.md` & `node_modules/next/dist/docs/`** — Next.js 16.2.6 App Router conventions (read the relevant `dist/docs` file before writing metadata, dynamic routes, or client/server boundaries).
5. **`screamingfrog.md`** — Mandatory Zero-Regression SEO Protocol (canonical, metadata length, OG/Twitter tags, sequential headings, alt text, nofollow outlinks, sitemap parity).
6. **Recent Nov 2026 Visual & Structural Reference Pages** (match their **structure, theme, layout, and color palette**):
   - **Primary Pillar / Guide Reference (`IH1` / `G1` / `G2` / `L1`)**:
     - `src/app/arbitration-personal-loan-defaults-bank-recovery-mechanism/page.tsx`
     - `src/app/arbitration-personal-loan-defaults-bank-recovery-mechanism/ArbitrationTableOfContents.tsx`
     - `src/app/arbitration-personal-loan-defaults-bank-recovery-mechanism/ArbitrationScenarioTabs.tsx`
     - `src/app/arbitration-personal-loan-defaults-bank-recovery-mechanism/ArbitrationNoticeCTA.tsx`
     - Secondary pattern check: `src/app/third-party-legal-recovery-services-financial-institutions/page.tsx`
   - **Specialized Archetype Islands** (still wrapped in the exact same dark-hero + sticky-TOC + crimson/slate palette):
     - `T1` Calculator: `src/app/tools/msme-delayed-payment-interest-calculator/page.tsx`
     - `P1` Template Workspace: `src/app/templates/legal-notice-reply-format/page.tsx`
     - `R1` Empirical Benchmark Study: `src/app/reports/legal-notice-outcomes-study/page.tsx`
     - `H1` Hindi / Hinglish Vyapari Guide: `src/app/hi/legal-notice-kaise-bheje/page.tsx`

---

## 2. Visual Theme, Layout & Color Palette (Match Recent Build Exactly)

Every page built under this prompt MUST share the **Nov 13 dark-hero + crimson-accent + sticky-TOC editorial architecture**:

| Layer / Element | Exact Tailwind Classes & Hex Tokens (from Recent Build) |
|---|---|
| **Page Shell (`<div>`)** | `min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white` |
| **Dark Gradient Hero (`<section>`)** | `w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden` (`pt-32 sm:pt-36 md:pt-40` clears the fixed `h-20` `<Navbar />`). Container: `max-w-5xl mx-auto w-full` (`max-w-7xl mx-auto` when hosting wide `T1` calculator panels). |
| **Hero Eyebrow Badge** | `inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5` |
| **Single Page `<h1>`** | `text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words` |
| **Executive Statutory Summary Box (40–60 words below `<h1>`)** | `bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium` with `block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5` label (`Statutory Summary` / `Executive Creditor Answer`) + **inline parent Hub link** in first 250 words for spoke pages. |
| **Hero 4-Card Key Metrics Strip** | `grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm` — stat values use `text-slate-100`, `text-emerald-400`, `text-amber-400`, `text-red-400`; labels use `text-[10px] sm:text-xs text-slate-400`. |
| **Main Layout Container (`<main>`)** | `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16` |
| **Breadcrumbs** | `<Breadcrumbs items={[{ label, href }, ...]} />` from `@/components/Breadcrumbs`. **Do NOT include `{ label: "Home", href: "/" }`** — `Breadcrumbs` automatically prepends `Home /`. |
| **2-Column Split** | `flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0` |
| **Left Sticky Sidebar TOC (`<Prefix>TableOfContents.tsx`, `"use client"`)** | Mobile sticky bar (`lg:hidden sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 px-4 -mx-4 sm:-mx-6 mb-4`). Desktop sticky aside (`hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28 self-start`) in `bg-white border border-slate-200 rounded-2xl p-5 shadow-sm`. Active link: `bg-[#DC2626] text-white font-bold shadow-sm`; inactive: `text-slate-600 hover:bg-slate-100 hover:text-slate-900`. **NEVER render `<h2>`, `<h3>`, or `<h4>` inside the TOC sidebar** — use `<p>` or `<span>` so DOM headings stay strictly `<h1>` -> `<h2>`. |
| **Main Content Column** | `flex-1 w-full min-w-0 space-y-10 sm:space-y-12` containing `<section id="..." className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">` cards. |
| **Accent & Semantic Surfaces** | Crimson primary `#DC2626` (hover `#B91C1C`) for numbered badges (`w-7 h-7 rounded-full bg-[#DC2626] text-white`), active interactive tabs, precedent left-accent bars (`bg-[#DC2626]`), and secondary CTA buttons. Neutral dark badge `#404447`. Dark flagship callouts & comparison table headers `bg-slate-900 text-white` (or `bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]`). Emerald (`emerald-50 border-emerald-200 text-emerald-700`) for positive recovery remedies; Amber (`amber-50 border-amber-200 text-amber-700`) for limitation/statutory defense warnings; Red (`red-50 border-red-200 text-[#DC2626]`) for penal/disallowance triggers. |
| **Footer Cross-Links** | Render `<RelatedRecoveryGuides />` (`bg-[#F8F9FB]`) outside/below `<main>`. |

---

## 3. Pre-Flight Checks Before Writing Code

1. **Extract Target Spec**: Pull the full `B2B-###` block and its `IND-XX` / `CORE-26` Industry Playbook from `300url.txt` and verify UTF-8 text in `docs/seo-plan/b2b-seo-plan-data.json`.
2. **Collision & Redirect Check**: Confirm `TARGET_URL` does not already exist in `src/app/` and is not a source path in `BROKEN_LINK_REDIRECTS` inside `next.config.ts`. Verify every internal link you plan to emit resolves to a live or planned canonical route (zero 301/308 redirect hops).
3. **Uniqueness Check vs Existing Pages**: Read the most recent entries and same-industry/same-archetype entries in `src/data/seo-build-registry.json`. Design H2 headings, interactive tabs, SVGs, tables, worked calculations, and opening paragraphs so:
   - H2 Jaccard similarity vs any sibling page stays **below 40%** (`word_target` and exact H2 wording stay bespoke to this URL's persona and statutory hook).
   - No repeated boilerplate opening or >20-word verbatim sentence copied from another page.
   - All copy adopts the **Creditor-Side Institutional Perspective** (§2.1 polarity rule: never draft from the borrower/consumer-complainant angle).

---

## 4. Archetype Blueprints (Build Strictly for Assigned Archetype)

Read the `Archetype` field in `300url.txt` and build its exact structure + >=4 custom interactive/visual/data artefacts:

- **`IH1` — Industry Pillar Hub (`industry_hub`, 2,600–3,400 words)**:
  - **Role**: Authoritative vertical hub for all buyers in that sector (`IND-01`..`IND-25` or `CORE-26`).
  - **Must Include**: Multi-track escalation decision table (by ticket tier, aging bucket `SMA/DPD`, collateral/contract type, forum); interactive scenario explorer (`<Prefix>ScenarioTabs.tsx`); industry-specific SVG workflow/escalation map + mobile stacked cards; full downward hub-and-spoke directory cards linking to **all 9–17 spokes** in that industry, **all existing live B2B seed URLs** listed in `300url.txt`, and `/bulk-recovery-cases-all-in-one-affordable-solutions`.
  - **Schemas**: `Service` + `ItemList` (industry sub-routes) + `FAQPage` + `BreadcrumbList`.

- **`G1` — B2B Creditor Operational Guide (`guide`, 2,000–2,800 words)**:
  - **Role**: Step-by-step operational & statutory SOP for one specific institutional bottleneck.
  - **Must Include**: 40–60 word AI-citation answer box under H1; Decision Tree SVG flowchart (`hidden md:block` + mobile cards); `bg-slate-900` dark-header Statutory Matrix table; `<Prefix>ScenarioTabs.tsx` covering 3–4 commercial failure modes; Worked Financial & Interest Calculation Box (`emerald-*` / `slate-900` ledger); Industry-Specific Evidence & `BSA 2023 s.63` Checklist; 5–8 unique `FAQ` accordions (`<details>`/`<summary>`).
  - **Schemas**: `Article` + `FAQPage` + `BreadcrumbList` (plus optional secondary `HowTo` only if non-conflicting; primary rich types remain `Article` + `FAQPage` + `BreadcrumbList`).

- **`G2` — B2B Forum / Remedy Comparison Matrix (`guide`, 1,900–2,600 words)**:
  - **Role**: Objective CFO / General Counsel comparison across competing forums/remedies (e.g., Commercial Court vs Order 37 vs IBC s.8 vs Arbitration vs Lok Adalat vs MSME MSEFC).
  - **Must Include**: Side-by-side multi-criteria `bg-slate-900` header comparison matrix (pecuniary floor, statutory timeline, pre-deposit/court fee, interim asset freeze availability, enforceability); interactive threshold selector / scenario matrix (`<Prefix>ScenarioTabs.tsx`); Cost & Time-to-Recovery numerical illustration; 5–8 `FAQ` items.
  - **Schemas**: `Article` + `Table` + `FAQPage` + `BreadcrumbList`.

- **`L1` — Creditor-Side Annotated Statute & Precedent Deep-Dive (`law`, 2,100–2,900 words)**:
  - **Role**: Practitioner-grade statutory commentary for bank/corporate counsel & CFOs.
  - **Must Include**: Exact bare-act section timeline & limitation stops (`30d` / `15d` / `60d` / `10d`); precedent cards with `bg-[#DC2626]` left accent bars using **only verified holdings** from `300url.txt`/PDF (e.g., *Patil Automation*, *Yamini Manohar*, *Mobilox*, *CORE 5-Judge Bench*, *Sripati Singh*, *Raman Tech*, or statutes in §4 — never invent citations); debtor defense pre-emption table (e.g., *pre-existing dispute* screening, *Section 21* limitation stop); 5–8 `FAQ` items.
  - **Schemas**: `Article` + `FAQPage` + `BreadcrumbList`.

- **`T1` — Interactive B2B Calculator (`tool`, 1,400–1,900 words + Client Calculator Island)**:
  - **Modeled on**: `src/app/tools/msme-delayed-payment-interest-calculator/page.tsx`.
  - **Must Include**: Dedicated `"use client"` `<CalculatorName>Client.tsx` with stateful inputs matching PDF §5.1 (dates, principal, RBI rate / interest tiers, state court fee slabs, limitation resets, or s.43B(h) corporate tax savings), live instant calculation cards, printable/copyable summary output, direct handoff CTA to `/user/new-recovery` + CSV batch option, explicit statutory formula & worked example section, edge cases & disclaimers, and 5–8 `FAQ` items.
  - **Schemas**: `WebApplication` + `SoftwareApplication` + `FAQPage` + `BreadcrumbList`.

- **`P1` — Advocate-Vetted Commercial Notice & Clause Workspace (`template`, 1,600–2,200 words + Client Workspace Island)**:
  - **Modeled on**: `src/app/templates/legal-notice-reply-format/page.tsx`.
  - **Must Include**: Dedicated `"use client"` `<TemplateName>Client.tsx` with editable form fields populating a real-time statutory notice preview (complete with `BSA s.63` / `NI s.138` / `PSS s.25` / `IBC Form 3/4` / `SARFAESI` / `RERA s.19(6)` clauses specified in `300url.txt`), 1-click Copy / Print, mandatory annexure checklist, service-method table (Email + WhatsApp + Speed Post RPAD), and Advocate Review Dual-CTA. **Never leave unverified blank placeholders without guidance.**
  - **Schemas**: `Article` + `DigitalDocument` (and/or `CreativeWork`) + `FAQPage` + `BreadcrumbList`.

- **`H1` — Hindi / Hinglish Vyapari Guide (`hindi`, 1,700–2,300 words)**:
  - **Modeled on**: `src/app/hi/legal-notice-kaise-bheje/page.tsx`.
  - **Must Include**: Pure UTF-8 Devanagari H1/title/description read from `docs/seo-plan/b2b-seo-plan-data.json`; natural Devanagari + Roman Vyapari/Mandi terminology (`bilty`, `bahi-khata`, `udhari`, `43B(h)`, `MSME Samadhaan`, `Cheque Bounce`); `<article lang="hi">`, `openGraph.locale: "hi_IN"`, JSON-LD `inLanguage: "hi-IN"`; add `alternates.languages` (`hi-IN`, `en-IN`, `x-default`) when paired with an English equivalent route; keep the same dark-hero + `#DC2626` + sticky-TOC layout.
  - **Schemas**: `Article` + `FAQPage` + `BreadcrumbList`.

- **`R1` — Empirical Benchmark Report (`report`, 3,200–4,500 words + Dataset)**:
  - **Modeled on**: `src/app/reports/legal-notice-outcomes-study/page.tsx`.
  - **Must Include**: Dedicated typed data loader in `src/data/reports/`, transparent Methodology & Scope boundary (citing only verified platform operational figures, RBI/MSME public disclosures, and statutory formula benchmarks — **never fabricate post-May 2026 fake surveys or unverified percentages**), clean SVG visual charts + data tables, executive findings by ticket/corridor/industry, and press-citable summary cards.
  - **Schemas**: `Report` + `Dataset` + `Article` + `FAQPage` + `BreadcrumbList`.

---

## 5. Dual-Track B2B Conversion Funnel & Internal Linking (§7.1 & §7.2)

### Dual-Track CTA Component (`<Prefix>CTA.tsx`, `"use client"`)
Every B2B page CTA MUST present **both tracks cleanly side-by-side** (using `DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition` = ₹999 from `@/lib/funnel-config` and `<PaymentModal />` or App Router links):
1. **Track 1 — Self-Serve Single Case Test (`bg-slate-900` dark card / crimson accent)**:
   - Copy: *"Test 1 Live Overdue Case Now (₹999 · Advocate Drafted · Email + WhatsApp + Speed Post RPAD)"* -> triggers `<PaymentModal />` or links to `/user/new-recovery`.
2. **Track 2 — Enterprise / Institutional Batch Desk (`border-slate-200 bg-white` card / dark slate or `#DC2626` button)**:
   - Copy: *"Have 10 to 10,000+ Defaulters? Upload CSV / Activate Dedicated Institutional Desk"* -> routes to `/bulk-recovery-cases-all-in-one-affordable-solutions` and `/user/representees`.

### Mandatory Internal Linking (§7.1)
- **All Spoke Pages (`G1`, `G2`, `L1`, `P1`, `H1`)**:
  1. Link to the **parent Industry Pillar Hub (`/industries/...`) within the first 250 words** (inside the opening executive block or Section 1).
  2. Link to **at least 1 relevant `T1` Interactive Calculator** from `300url.txt` (§5.1).
  3. Link to **at least 1 relevant `P1` Notice Template** (same industry `P1` or `CORE-26` commercial template).
  4. Link to **2+ sibling spokes** from the same industry AND the **existing B2B seed URLs (`§2.2`)** listed in `300url.txt`.
- **All Industry Pillar Hubs (`IH1`)**:
  - Link downward to **all 9–17 spokes** in that industry, laterally to its **existing seed URLs**, and bottom-of-funnel to `/bulk-recovery-cases-all-in-one-affordable-solutions`.

---

## 6. Screaming Frog, Metadata & Technical SEO Protocol (`screamingfrog.md`)

Check every single item before finishing:

1. **PDF Metadata Length Governance (Critical Audit Note)**:
   - In `300url.txt` / `b2b-seo-plan-data.json`, many draft `meta_title` strings exceed 60 chars and many `meta_description` strings exceed 155 chars, while all 300 PDF `h1` strings exceed 70 chars. Apply this exact rule:
     - **`metadata.title`, `openGraph.title`, `twitter.title`**: Tighten to **30–60 characters** (sweet spot `50–58`) by trimming trailing suffixes while keeping the primary keyword upfront.
     - **`metadata.description`, `openGraph.description`, `twitter.description`**: Tighten to **120–155 characters** while retaining every statutory act/timeline hook.
     - **`<h1>` & `ARTICLE_SCHEMA.headline`**: Use the exact PDF/JSON `h1` **verbatim in BOTH `<h1>` and JSON-LD `headline`** so structured data matches the visible page (`headline === <h1>`), OR if the user requests strict `<=70` H1 mode, condense both identically.
2. **All `<h2>` Headings**: Keep clear, question/task-phrased for AI Search, and **<= 70 characters** wherever possible. Never skip levels (`<h1>` -> `<h2>` -> `<h3>`).
3. **Explicit Metadata Blocks (Avoid Next.js Shallow Merge Bugs)**:
   - `alternates.canonical`: `${SITE_URL}${url}` (`SITE_URL` from `@/lib/site`, NO trailing slash).
   - `openGraph`: `title`, `description`, `url`, `type: "article"`, `siteName: "LegalRecovery.in"`, `locale: "en_IN"` (or `"hi_IN"` for `H1`), and **explicit `images`**: `[{ url: "${SITE_URL}/blog_money_recovery.png", width: 1200, height: 630, alt: formatAltText(...) }]`.
   - `twitter`: **explicit** `{ card: "summary_large_image", title, description, site: "@legalrecoveryin", creator: "@legalrecoveryin", images: ["${SITE_URL}/blog_money_recovery.png"] }` (root `layout.tsx` intentionally omits a global `twitter` block).
   - `robots: { index: true, follow: true }`.
4. **Schema Discipline**: Never emit `Review` or `AggregateRating`. Use `Service` (`IH1`), `Article`, `FAQPage`, `BreadcrumbList`, `WebApplication`/`SoftwareApplication` (`T1`), `DigitalDocument` (`P1`), `Report`/`Dataset` (`R1`). Include inline `// TODO(reviewer): src/data/reviewers.ts is absent in this repository` alongside the advocate attribution (`Anuj Anand Malik`, Advocate & Founder, AMA Legal Solutions) matching `arbitration-personal-loan-defaults-bank-recovery-mechanism/page.tsx`.
5. **External Links & Assets**: Every external portal/judgment citation link (`e-jagriti.gov.in`, `indiacode.nic.in`, `rbi.org.in`, `irdai.gov.in`, etc.) MUST use `rel="noopener noreferrer nofollow"`. Every `<img>` / `<svg>` diagram MUST define explicit integer `width` and `height`, and any image `alt` must use `formatAltText()` (`<= 90` chars) from `@/lib/site`.
6. **Component Discipline**: `src/app/<TARGET_URL>/page.tsx` MUST remain a Server Component (`export const metadata`). Interactive TOC, Scenario Tabs, Calculators, Templates, and CTAs live in modular `"use client"` components in the same route folder.

---

## 7. Required Site-Wide Wiring Checklist (Update on Every Build)

1. **Create route files**: `src/app<TARGET_URL>/page.tsx` + client subcomponents (`*TableOfContents.tsx`, `*ScenarioTabs.tsx` / `*Client.tsx`, `*CTA.tsx`).
2. **XML Sitemap (`src/app/sitemap.ts`)**: Add `{ path: "<TARGET_URL>", changeFrequency: "weekly", priority: 0.9 /* IH1/P0 */ | 0.85 /* P1/P2 */ }` to `STATIC_ROUTES`.
3. **HTML Sitemap (`src/app/sitemap/sitemapData.ts`)**: Add `{ title, href: "<TARGET_URL>", category: "B2B & Institutional Recovery", date, timestamp }` at the top of `ALL_SITEMAP_PAGES` so every newly created B2B page appears immediately on `/sitemap`.
4. **Cluster Cross-Links (`src/components/RelatedRecoveryGuides.tsx`)**: Register `<TARGET_URL>` inside its vertical cluster or B2B cluster entry.
5. **AI Discovery (`public/llms.txt`)**: Append a factual single-line markdown bullet (`- [Title](https://www.legalrecovery.in<TARGET_URL>): <1-sentence statutory scope>`).
6. **Build Registry (`src/data/seo-build-registry.json`)**: Append `{ id, url, archetype, h2s, components, faqQuestions, wordCount, artefacts, sources, builtAt }` so future pages never duplicate H2 structures.

---

## 8. Mandatory Verification & Final Report

Before finishing a built page, run and verify directly:
1. **Type-check & Build**: Run `npx tsc --noEmit` (or targeted Next build/dev check) — zero TypeScript or import errors.
2. **Rendered DOM / Route Check**: Confirm the route returns **HTTP 200**, contains exactly **1 `<h1>`**, sequential headings (`<h2>` immediately after `<h1>`, zero headings inside sidebar TOC), non-empty JSON-LD matching `<h1> === headline`, `<title>` 30–60 chars, `<meta description>` 120–155 chars, `og:image` + `twitter:card`, canonical URL without trailing slash, Dual-Track CTAs present, and zero external links without `rel="noopener noreferrer nofollow"`.
3. **Word Count & Registry Uniqueness Check**: Confirm visible prose falls inside `word_target` (`300url.txt`) and H2 overlap vs `src/data/seo-build-registry.json` is `< 40%`.
4. **Responsive Visual Check**: Verify mobile (`360px`/`375px`) sticky TOC bar & no horizontal overflow, plus desktop (`1280px`) sticky left TOC beside content column.
5. **Concise Report**: Report exact created/modified file paths, verified test/command results, and any honest limitations (`TODO(reviewer)`).

---

**Fill this in when invoking:**

```text
TARGET_URL: <paste a URL or B2B-### from 300url.txt, e.g. /industries/banks-loan-recovery or B2B-001>
```
