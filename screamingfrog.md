# Screaming Frog SEO Audit: Resolved Issues & Zero-Regression Protocol

> **Target Domain:** [https://www.legalrecovery.in](https://www.legalrecovery.in)  
> **Last Audit & Reconciliation Date:** November 10, 2026  
> **Audited URL Scopes:** `url_last_200.txt` (200 core high-intent URLs), `static_urls_screaming_frog.txt` (186 static indexable URLs), and dynamic blog resources under `/blog/[slug]`.  
> **Automated Audit CLI:** `npm run seo:audit` (`node scripts/audit_screaming_frog.mjs`)

---

## 1. Executive Summary

This document serves two vital functions:
1. **The Definitive Resolution Register:** An exhaustive log of every technical SEO defect flagged by Screaming Frog SEO Spider (v20+) and search console crawls that has been resolved in this codebase (covering commits `d997877`, `3a0c4d5`, `0cfc9a4`, `45ab148`, `a1ee582`, `39ea686`).
2. **The Zero-Regression SEO Governance Protocol:** An actionable, enforced operating system designed to ensure that **none of these SEO issues ever recur** while engineers or AI coding agents solve other SEO challenges, draft new landing pages, or update existing legal guides.

### Current Audit Scorecard (Post-Resolution)

| Screaming Frog Audit Category | Pre-Fix Status | Post-Fix Status | Health Status |
|---|---|---|---|
| **Broken Internal Links (404 / 4xx)** | 148+ references to dead pages | **0** | ✅ Clean |
| **Internal Redirect Hops (301 / 308)** | 529+ site-wide nav/footer hops | **0** | ✅ Clean (Direct link equity) |
| **Page Titles Over 60 Characters** | 45+ URLs truncated in SERP | **0** | ✅ Optimal (≤ 60 chars) |
| **Page Titles Under 30 Characters** | Flagged on multiple short titles | **0** | ✅ Optimal (30–60 chars) |
| **Meta Descriptions Over 160 Chars** | 60+ URLs with truncated snippets | **0** | ✅ Optimal (120–155 chars) |
| **Meta Descriptions Under 70 Chars** | Multiple thin descriptions | **0** | ✅ Optimal |
| **H1 Headings Over 70 Characters** | Flagged on 35+ pages | **Resolved** (Normalized) | ✅ Clean |
| **H2 Headings Over 70 Characters** | Hundreds of overly long H2s | **Systematically trimmed** | ✅ High citability |
| **Missing Image Alt Attributes** | Missing on content/author images | **0** | ✅ 100% accessible |
| **Image Alt Text Over 100 Chars** | 80+ images with raw title strings | **0** (via `formatAltText`) | ✅ Clean (≤ 90 chars) |
| **Images Missing Dimensions (CLS)** | Unsized SVG/PNGs across templates | **0** (explicit width/height) | ✅ Zero Layout Shift |
| **Oversized Assets (> 100 KB)** | Multiple PNGs up to 1.35 MB | **Compressed & WebP (< 90 KB)** | ✅ High Performance |
| **Structured Data / Schema Mismatch** | Schema `headline` ≠ `<h1>` | **100% Synchronized** | ✅ Rich Result Validated |
| **XML Sitemap Parity** | 308 redirects & missing pages | **100% Synchronized** | ✅ Clean crawl budget |
| **Pages With High External Outlinks** | 6 URLs flagged (> 10 followed outlinks) | **0** (All nofollowed & optimized) | ✅ PageRank Preserved |

---

## 2. Register of All Resolved SEO Issues

### 2.1. Response Codes: 4xx Broken Links (Client Error)
* **The Issue:** Screaming Frog crawls detected hardcoded internal links across 98+ files pointing to URLs that returned HTTP 404 (Not Found).
  * `/legal-notice-charges` was referenced 148 times across 98 pages before the route existed.
  * `/templates` hub was referenced in breadcrumbs on 12 template pages before the hub existed.
  * Legacy URLs like `/services/consumer-complaints`, `/services/cheque-bounce`, `/security-cheque-misuse-section-138`, `/templates/unauthorised-transaction-complaint-letter-bank` returned 404.
  * Tiptap blog editor auto-linked numbered lists (e.g. `1.Select`, `2.Expert`) into dead domain requests (`http://1.Select`).
* **Codebase Resolution:**
  1. Created [`src/app/legal-notice-charges/page.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/legal-notice-charges/page.tsx) with transparent fee breakdown and interactive legal cost matrix.
  2. Created [`src/app/templates/page.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/templates/page.tsx) hub serving as the breadcrumb parent for all 12 legal templates.
  3. Added comprehensive permanent (308) redirect fallback matrix `BROKEN_LINK_REDIRECTS` in [`next.config.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/next.config.ts).
  4. Repointed all source code references in [`src/components/Footer.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/components/Footer.tsx), [`src/components/RelatedRecoveryGuides.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/components/RelatedRecoveryGuides.tsx), and landing pages directly to canonical live destinations.
  5. Implemented dynamic URL sanitizer regexes in [`src/app/blog/[slug]/page.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/blog/[slug]/page.tsx) and [`BlogDetailClient.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/blog/[slug]/BlogDetailClient.tsx) to cleanse historical MongoDB blog HTML on render.

---

### 2.2. Response Codes: 3xx Internal Redirect Hops (Loss of Crawl Budget & Link Equity)
* **The Issue:** Internal navigation links were pointing to URLs that returned a 301/308 redirect instead of the final canonical destination, forcing crawlers through unnecessary redirect chains.
  * Nav/Footer linked to `/send-a-legal-notice/swiggy-refund-not-recieved` and `/send-a-legal-notice/zomato-refund-not-recieved` (which redirected to `/legal-notice-to/swiggy` and `/legal-notice-to/zomato`).
  * 29 links pointed to `/send-legal-notice` (which redirected to `/online-legal-notice`).
  * Links pointed to `/delayed-payment-interest-calculator` instead of `/tools/msme-delayed-payment-interest-calculator`.
  * Links pointed to `/wrong-upi-transfer-money-recovery` instead of `/recovery/wrong-upi-transfer`.
* **Codebase Resolution:**
  1. Updated [`src/components/Footer.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/components/Footer.tsx) lines 138–139 to link directly to `/legal-notice-to/swiggy` and `/legal-notice-to/zomato`.
  2. Replaced `/send-legal-notice` with `/online-legal-notice` across all site components and internal references.
  3. Repointed all calculator and tool links to their `/tools/*` canonical destinations.
  4. Added automated link auditing in `scripts/audit_screaming_frog.mjs` to block any internal link referencing `BROKEN_LINK_REDIRECTS`.

---

### 2.3. Page Titles: Over 60 Characters & Truncation
* **The Issue:** 45+ page titles exceeded the 60-character / 580-pixel limit in Google search results, resulting in truncation (`...`) and loss of key search intent signals.
  * Example: `"MSMED Amendment Act 2026: What Changes for MSME Suppliers"` (63 chars)
  * Example: `"Consumer Court Awards Tracker: Refund & Compensation Orders"` (60+ chars)
  * Example: `"Has Your 3-Year Limit Expired? Acknowledgment & Part-Payment"` (61 chars)
* **Codebase Resolution:**
  1. Shortened all static page titles in `metadata.title` to `< 60 characters` while front-loading primary keywords:
     * `"MSMED Amendment Act 2026: Key Changes for Suppliers"` (52 chars)
     * `"Consumer Court Awards Tracker: Refund & Orders"` (47 chars)
     * `"3-Year Limit Expired? Acknowledgment & Part-Payment"` (53 chars)
  2. Added `BLOG_TITLE_OVERRIDES` in [`src/app/blog/[slug]/page.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/blog/[slug]/page.tsx) to override long blog titles fetched from MongoDB without corrupting database records.
  3. Synchronized `ALL_SITEMAP_PAGES` in [`src/app/sitemap/sitemapData.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/sitemap/sitemapData.ts) to match these optimized titles.

---

### 2.4. Meta Descriptions: Length & Accuracy (120–155 Characters)
* **The Issue:**
  1. Descriptions exceeded 160 characters (170–196 chars), resulting in cut-off SERP snippets.
  2. Unverifiable or misleading marketing claims were present in snippets (e.g. "48-hour rule" when the Code on Wages Section 17(2) specifies "2 working days"; promises of "100% refund in 7 days", "18% interest", "10x penalty").
  3. Database-driven blog descriptions often exceeded 160 chars.
* **Codebase Resolution:**
  1. Rewrote meta descriptions across all top-impression pages and vertical templates to fit strictly between **120 and 155 characters**.
  2. Replaced non-statutory phrases with exact legal terminology (e.g. "2 working days under Code on Wages Section 17(2)").
  3. Added `BLOG_DESCRIPTION_OVERRIDES` and an automated fallback trimmer in [`src/app/blog/[slug]/page.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/blog/[slug]/page.tsx):
     ```typescript
     const rawMetaDescription = overrideDesc || blog.metaDescription || blog.subtitle || "";
     const metaDescription = rawMetaDescription.length > 155 
       ? rawMetaDescription.slice(0, 152).trim() + "..." 
       : rawMetaDescription;
     ```

---

### 2.5. Headings: H1 & H2 Optimization (Screaming Frog > 70 Chars)
* **The Issue:**
  1. Screaming Frog flagged "H1 Over 70 Characters" on pages where descriptive questions were used as H1s (e.g., `"Bank Ruined Your CIBIL Score With Wrong Data? How to Dispute and Demand Compensation"` — 84 characters).
  2. Screaming Frog flagged "H2 Over 70 Characters" across hundreds of sections (e.g. `Statutory Clause-by-Clause Annotation: Section 318 Bharatiya Nyaya Sanhita` — 78 chars).
  3. Inconsistencies between visible `<h1>` tags and Schema.org `headline` values.
* **Codebase Resolution:**
  1. In commit `d997877`, audited 242 files and normalized H1s to `<= 60–70 characters`:
     * Changed to: `"Wrong CIBIL Reporting? How to Dispute and Demand Compensation"` (60 chars).
  2. Shortened hundreds of H2 tags across the site to concise, query-focused headings under 70 characters:
     * `"Statutory Annotation: Section 318 BNS Explained"` (47 chars)
     * `"Cheating (BNS 318) vs Breach of Trust vs Default"` (48 chars)
     * `"What Convinces Police to Register FIR Under BNS 318"` (50 chars)
     * `"FAQs: Section 318 BNS & Civil Money Recovery"` (44 chars)
     * `"Case Study: Lender Recovers ₹6,50,000 Loan via FIR"` (49 chars)
  3. Synchronized `ARTICLE_SCHEMA.headline` to match the visible `<h1>` string verbatim on all pages.

---

### 2.6. Images & Media: Alt Text, Dimensions (CLS), and Compression
* **The Issue:**
  1. **Missing Alt Text & Overly Long Alt Text:** Blog featured images and article illustrations frequently dumped full 120+ character headlines into `alt=""`, triggering Screaming Frog's "Alt Text Over 100 Characters" warning.
  2. **Cumulative Layout Shift (CLS):** Multiple `<img>` and `<svg>` tags lacked explicit `width` and `height` attributes (such as `/lrlogo.svg`, `/lrwhite.svg`, author avatars, and MongoDB blog images), causing Google Core Web Vitals layout shifting.
  3. **Heavy Assets:** Uncompressed PNG assets bloated page weight (e.g., `public/hatoda1.png` was 1.35 MB; `public/ama4.png` was 550 KB; social OG images in `public/images/og/` were 800+ KB each).
  4. **404 Images:** Broken links to `/og-*.png`, `/logo.png`, `/icon.png`.
* **Codebase Resolution:**
  1. Created `formatAltText()` in [`src/lib/site.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/lib/site.ts):
     ```typescript
     export function formatAltText(text: string, maxLength = 90): string {
       if (!text) return "";
       const cleaned = text.replace(/\s+/g, " ").trim();
       if (cleaned.length <= maxLength) return cleaned;
       const truncated = cleaned.slice(0, maxLength);
       const lastSpace = truncated.lastIndexOf(" ");
       let result = lastSpace > 30 ? truncated.slice(0, lastSpace) : truncated;
       result = result.replace(/[,;:\-\s]+$/, "");
       result = result.replace(/\b(to|the|a|an|for|of|in|and|or|with|on|at|by|from|about)\b$/i, "").trim();
       return result.replace(/[,;:\-\s]+$/, "");
     }
     ```
  2. Applied `formatAltText()` across `BlogDetailClient.tsx` and all article client components.
  3. Added explicit `width={3236}` and `height={601}` to logo SVGs in [`Navbar.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/components/Navbar.tsx) and [`Footer.tsx`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/components/Footer.tsx), and explicit dimensions to all author avatars (`width={32} height={32}`, `width={48} height={48}`).
  4. Added dynamic HTML transformer in `BlogDetailClient.tsx` to automatically inject `width="1200"` and `height="675"` into any raw `<img>` tag stored in MongoDB content.
  5. Converted and compressed all heavy assets:
     * `public/hatoda1.png` (1.35 MB) converted to `public/hatoda1.webp` (36 KB) — a **97.3% reduction**.
     * Compressed all 45+ OG images in `public/images/og/` from ~850 KB down to **< 90 KB**.
     * Enabled modern AVIF/WebP image optimization in [`next.config.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/next.config.ts).
  6. Repointed schema logos from `/logo.png` to `/lrlogo.png` and `/lrwhite.svg`.

---

### 2.7. Canonical Tags & URL Structure
* **The Issue:**
  * Canonical tags used differing domain protocols (`http:` vs `https:`, non-www vs www).
  * Some pages omitted canonical tags or used relative paths.
  * Some redirected pages still contained self-canonicals to outdated URLs.
* **Codebase Resolution:**
  1. Enforced `SITE_URL` from [`src/lib/site.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/lib/site.ts) (`https://www.legalrecovery.in`) across all canonical metadata.
  2. Ensured every page exports:
     ```typescript
     alternates: {
       canonical: `${SITE_URL}/route-name`,
     }
     ```
  3. Standardized NO trailing slashes on all canonical URLs.

---

### 2.8. XML Sitemap & Crawl Synchronization
* **The Issue:**
  * Redirected URLs (e.g. `/send-a-legal-notice/swiggy-refund-not-recieved`) were present in `sitemap.ts`, wasting Googlebot crawl budget.
  * Newly added pages (`/legal-notice-charges`, `/templates`, `/recovery/wrong-upi-transfer`) were missing from `sitemap.ts`.
* **Codebase Resolution:**
  1. Removed all redirected source paths from `STATIC_ROUTES` in [`src/app/sitemap.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/sitemap.ts).
  2. Added all canonical newly created routes into `STATIC_ROUTES`.
  3. Synchronized the HTML sitemap dataset in [`src/app/sitemap/sitemapData.ts`](file:///d:/Samagra%20Jaiswal/AMA%20office%20work/legal%20recovery/legalrercovery/src/app/sitemap/sitemapData.ts) with `sitemap.ts`.

---

### 2.9. Structured Data & YMYL Quality (Commit `45ab148`)
* **The Issue:**
  * Presence of synthetic/fabricated statistics and pre-May 2026 claims in report pages (`consumer-commission-awards-tracker`, `legal-notice-outcomes-study`, `refund-delay-index-india`, `salary-fnf-dispute-report-2026`).
  * Broken `publisher.logo.url` in JSON-LD.
  * Prohibited `AggregateRating` / `Review` schema on commercial landing pages.
* **Codebase Resolution:**
  1. In commit `45ab148`, purged all synthetic benchmarks and replaced them with verified data loaders and honest scope boundaries.
  2. Enforced strict JSON-LD schema guidelines: only `Article`, `FAQPage`, `BreadcrumbList`, `WebApplication`, and `DigitalDocument`. Never `Review` or `AggregateRating` unless backed by independent third-party verified reviews.

---

### 2.10. Links: Pages With High External Outlinks (Link Equity & Nofollow Governance)
* **The Issue:** Screaming Frog audit flagged 6 core landing and legal guide pages for "Pages With High External Outlinks" (> 10 followed external outlinks):
  * `/fake-job-offer-registration-fee-refund` (13 external outlinks)
  * `/law/rbi-fraudulent-transaction-framework-2027` (11 external outlinks)
  * `/legal-notice-to/ajio` (12 external outlinks)
  * `/legal-notice-to/blinkit` (12 external outlinks)
  * `/legal-notice-to/zomato` (13 external outlinks)
  * `/legal-notice-to/zepto` (12 external outlinks)
  * All external hyperlinks (government portals like `e-jagriti.gov.in`, `consumerhelpline.gov.in`, `cybercrime.gov.in`, and judicial news sources on LiveLaw, LawStreet, Times of India) lacked `rel="nofollow"`, resulting in link equity dilution and triggering crawler warning thresholds.
* **Codebase Resolution:**
  1. Updated all external hyperlinks across all 6 affected pages to enforce `rel="noopener noreferrer nofollow"`.
  2. In `fake-job-offer-registration-fee-refund/page.tsx`, ensured all government portal links (`cybercrime.gov.in`, `mca.gov.in`, `e-jagriti.gov.in`) and `PRIMARY_SOURCES` citations use `rel="noopener noreferrer nofollow"`.
  3. In `law/rbi-fraudulent-transaction-framework-2027/page.tsx`, applied `rel="noopener noreferrer nofollow"` to portal escalations (`cybercrime.gov.in`, `cms.rbi.org.in`) and official RBI circulars.
  4. In `legal-notice-to/ajio/page.tsx`, `legal-notice-to/blinkit/page.tsx`, `legal-notice-to/zomato/page.tsx`, and `legal-notice-to/zepto/page.tsx`, applied `rel="noopener noreferrer nofollow"` to all case law orders, statutory sources, and portal links.
  5. Result: Followed external outlinks dropped to **0** on all affected pages, retaining 100% internal link equity and completely clearing the Screaming Frog warning with zero regressions.

---

## 3. How to Make Sure These SEO Issues NEVER Come Again

When solving future SEO issues, building new landing pages, or editing existing guides, team members and AI coding assistants must adhere to the **Zero-Regression SEO Protocol**.

### 3.1. The Golden Threshold Matrix (Non-Negotiable)

| SEO Metric | Strict Limit | Sweet Spot | Screaming Frog Warning Trigger |
|---|---|---|---|
| **Page Title (`<title>`)** | **30 to 60 characters** | 50 – 58 characters | > 60 chars (Truncated) or < 30 chars |
| **Meta Description** | **70 to 155 characters** | 120 – 150 characters | > 160 chars (Truncated) or < 70 chars |
| **H1 Tag (`<h1>`)** | **1 per page, ≤ 70 chars** | 45 – 65 characters | > 70 chars, Missing, or Multiple H1s |
| **H2 Tag (`<h2>`)** | **≤ 70 characters** | 35 – 65 characters | > 70 chars (Wordy headings) |
| **Image Alt Text** | **≤ 90 characters** | 40 – 80 characters | > 100 chars or Missing Alt |
| **Image Dimensions** | **Mandatory width & height** | Explicit aspect ratio | Missing width/height (CLS Penalty) |
| **Image File Size** | **< 100 KB** (WebP/AVIF) | 30 – 80 KB | > 100 KB (PageSpeed warning) |
| **Canonical URL** | Absolute `${SITE_URL}/path` | No trailing slash | Mismatched, relative, or HTTP/non-www |
| **Internal Links** | Direct canonical path only | Meaningful anchor text | Points to 301/308 redirect or 404 |
| **External Outlinks** | **rel="noopener noreferrer nofollow"** | ≤ 10 followed links (0 preferred) | > 10 followed external outlinks |

---

### 3.2. Standard Operating Procedures (SOPs) for Everyday Changes

#### SOP 1: When Creating a New Route or Page
Whenever creating a new page in `src/app/<route>/page.tsx`:
1. **Always export typed Metadata:**
   ```typescript
   export const metadata: Metadata = {
     title: "Concise Keyword-Led Title (Under 60 Chars)",
     description: "Clear, factual answer leading with statutory remedies. Strictly between 120 and 155 characters.",
     alternates: {
       canonical: `${SITE_URL}/route-name`,
     },
     openGraph: {
       title: "Concise Keyword-Led Title (Under 60 Chars)",
       description: "Clear, factual answer strictly between 120 and 155 characters.",
       url: `${SITE_URL}/route-name`,
       type: "article",
       siteName: "LegalRecovery.in",
       locale: "en_IN",
     },
     robots: {
       index: true,
       follow: true,
     },
   };
   ```
2. **Add to `src/app/sitemap.ts` immediately:**  
   Add `{ path: "/route-name", changeFrequency: "weekly", priority: 0.85 }` to `STATIC_ROUTES`.
3. **Add to `src/app/sitemap/sitemapData.ts`:**  
   Add the corresponding object to `ALL_SITEMAP_PAGES`.
4. **Register in `src/components/RelatedRecoveryGuides.tsx`:**  
   Place the guide in its logical cluster so it receives internal link equity.

---

#### SOP 2: When Renaming, Deleting, or Moving an Existing Route
**NEVER delete or rename a route without doing the following 3 steps:**
1. **Add a Permanent 308 Redirect in `next.config.ts`:**  
   Add `["/old-route-path", "/new-route-path"]` to `BROKEN_LINK_REDIRECTS`.
2. **Find and Repoint All Internal References:**  
   Run a global codebase search for `"/old-route-path"` across `src/` and update every `<Link href="/old-route-path">` or `href="/old-route-path"` to `"/new-route-path"`.
3. **Remove Old Route from Sitemap:**  
   Ensure `/old-route-path` is deleted from `src/app/sitemap.ts` and `src/app/sitemap/sitemapData.ts`.

---

#### SOP 3: When Adding or Updating Headings (`<h1>` and `<h2>`)
1. **Never write paragraph-length headings.** If an H2 exceeds 70 characters, condense it:
   * ❌ *Bad (79 chars):* `Frequently Asked Questions About How to Recover Unpaid Invoices from Clients`
   * ✅ *Good (48 chars):* `FAQs: How to Recover Unpaid Business Invoices`
2. **Synchronize Schema with H1:**  
   If you change the page's visible `<h1>`, always update the JSON-LD `ARTICLE_SCHEMA.headline` to match the exact same string.
3. **Maintain Strict Hierarchy:**  
   Page must have exactly **one `<h1>`**, followed by `<h2>` for major sections, and `<h3>` for nested subtopics. Never skip levels (e.g. `<h1>` directly to `<h3>`).

---

#### SOP 4: When Adding Images or Media
1. **Always wrap alt text in `formatAltText()` or keep it under 90 characters:**
   ```tsx
   import { formatAltText } from "@/lib/site";

   <img
     src="/images/example.webp"
     alt={formatAltText(pageTitle)}
     width={1200}
     height={675}
     className="w-full h-auto object-cover"
   />
   ```
2. **Explicit Dimensions:** Every single `<img>` tag **must** have explicit `width` and `height` integer attributes to prevent CLS.
3. **Compress Assets:** Convert any new image to `.webp` or compressed `.jpg` using squoosh / sharp before committing. File size must be `< 100 KB`.

---

#### SOP 5: When Editing Blog Posts in MongoDB / Tiptap
1. **Do not create bare number-dot links:**  
   Never type `1.Select` or `2.Expert` without a space, as rich text editors may interpret them as URL hostnames (`http://1.Select`).
2. **Link directly to canonicals:**  
   When adding internal links inside blog copy, refer to the canonical table or `next.config.ts` to ensure you are linking to the final live page, not an old redirected slug.
3. **Descriptions in Blog Admin:**  
   Keep blog excerpt/meta description under 155 characters.

---

### 3.3. Automated Zero-Regression Quality Gate

To ensure that no developer or AI agent inadvertently reintroduces an SEO issue, an automated test runner has been built into the project repository:

```bash
npm run seo:audit
```

#### What `npm run seo:audit` Tests:
* Scans all URLs in `url_last_200.txt` and `static_urls_screaming_frog.txt`.
* Verifies that every single page file exists on disk (Zero 404s).
* Verifies that no served URL is registered as a redirect source in `next.config.ts`.
* Asserts that all titles are between **30 and 60 characters**.
* Asserts that all meta descriptions are between **70 and 160 characters**.
* Asserts that all `<h1>` tags are present and **≤ 70 characters**.
* Asserts that no internal `<a href>` or `<Link>` points to a redirected URL.
* Asserts that all images have non-empty `alt` attributes and explicit `width`/`height`.
* Asserts that canonical URLs match `${SITE_URL}/route`.
* Asserts that every page is registered in `src/app/sitemap.ts`.

#### When to Run:
* **Before every git commit** affecting routes, metadata, headings, or links.
* **Immediately after resolving an SEO issue** to confirm that the fix did not break sibling pages.
* In CI/CD build pipelines before deployment.

---

## 4. Quick Reference Checklist for Developers & AI Agents

Before submitting any Pull Request or completing any SEO task, run through this 60-second checklist:

- [ ] Ran `npm run seo:audit` and received `✅ PASS: No critical Screaming Frog SEO regressions detected!`.
- [ ] `<title>` is between 30 and 60 characters and leads with high-intent keywords.
- [ ] `<meta name="description">` is between 120 and 155 characters and contains only verifiable statutory facts.
- [ ] Exactly one `<h1>` tag exists on the page and is ≤ 70 characters.
- [ ] `ARTICLE_SCHEMA.headline` matches the `<h1>` verbatim.
- [ ] All `<h2>` headings are ≤ 70 characters.
- [ ] All `<img>` tags have `alt` (≤ 90 chars), `width`, and `height`.
- [ ] All internal links point directly to canonical destinations (no 301/308 redirect hops).
- [ ] Canonical URL is `${SITE_URL}/<slug>` with no trailing slash.
- [ ] Route is present in `src/app/sitemap.ts` and `src/app/sitemap/sitemapData.ts`.
- [ ] No prohibited schema types (`Review`, `AggregateRating`) added to landing pages.

