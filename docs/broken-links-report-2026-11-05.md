# Broken Links Report — legalrecovery.in

**Date:** 2026-11-05
**Method:**
1. **Live crawl** of https://www.legalrecovery.in. It started from `/` plus every URL in `sitemap.xml` and followed every internal `<a href>`. It reached 566 pages and checked 1,524 unique URLs: 1,113 internal and 411 external links and assets.
2. **Source scan** of `origin/main`, which is 4 commits ahead of the local `main` checkout. Every internal path and `legalrecovery.in` URL in `src/` was matched against the 415 app routes, the redirects in `next.config.ts`, and the files in `public/`.

Every 404 below was confirmed against the live site.

---

## 1. Broken internal page links (404)

### 1a. Hard-coded in source (fix in code)

| Broken URL | Refs | Where (examples) | Suggested target |
|---|---|---|---|
| `/legal-notice-charges` | **148 refs in 98 files** (crawl saw it on 80 live pages) | e.g. `src/app/assured-return-builder-default-legal-notice/page.tsx:1991`, `src/app/atm-cash-not-dispensed-compensation/page.tsx:653`, `src/app/bank-charges-refund-legal-notice/page.tsx:743` | Create the page, or point to an existing pricing section |
| `/law/insurance-ombudsman-bima-bharosa-guide` | 7 | `src/app/cashless-claim-denied-what-to-do/page.tsx:748,1120`, `src/app/health-insurance-claim-rejection-reasons-counter/HealthInsuranceRejectionTabs.tsx:297` | Page not built yet |
| `/templates/insurance-ombudsman-complaint-format` | 7 | `src/app/cashless-claim-denied-what-to-do/page.tsx:765,1126`, `src/app/health-insurance-claim-rejection-reasons-counter/page.tsx:966` | Page not built yet |
| `/templates` (hub page) | 4 | breadcrumbs in `src/app/templates/cheque-bounce-notice-format-hindi/page.tsx:249`, `promissory-note-format-india/page.tsx:243`, `salary-delay-complaint-letter-to-hr/page.tsx:232` | Add `src/app/templates/page.tsx` (12 templates exist, no index page) |
| `/templates/unauthorised-transaction-complaint-letter-bank` | 3 | `src/app/bank-charges-refund-legal-notice/page.tsx:727`, `loan-closed-but-ecs-still-active/page.tsx:862`, `upi-autopay-subscription-refund/page.tsx:715` | Page not built yet |
| `/security-cheque-misuse-section-138` | 3 | `src/app/cheque-bounce-account-closed-signature-mismatch/page.tsx:540`, `law/cheque-bounce-supreme-court-guidelines-2025/page.tsx:1094`, `stop-payment-cheque-bounce-case/page.tsx:1143` | Page not built yet |
| `/services/consumer-complaints` | 1 | `src/app/send-a-legal-notice/online-refund-not-received/OnlineRefundNotReceivedClient.tsx:642` | `/services/refunds-and-consumer-complaints` |
| `/services/cheque-bounce` | 1 | same file `:645` | `/recovery/cheque-bounce-amount` |
| `/services/corporate-recovery` | 1 | same file `:648` | `/services/vendor-and-invoice-recoveries` |
| `/offer-letter-revoked-compensation-india` | 1 | `src/app/maternity-benefit-not-paid-legal-notice/page.tsx:984` | Page not built yet |
| `/franchise-fee-refund-legal-notice` | 1 | `src/app/law/section-80-cpc-notice-to-government/page.tsx:1325` | Page not built yet |
| `/hi/security-deposit-wapas-kaise-le` | 1 | `src/app/templates/society-maintenance-recovery-notice/page.tsx:381` | Page not built yet |
| `/legal-recovery-by-city/gurugram` | 1 | `src/app/sitemap/sitemapData.ts:2136` (HTML sitemap page) | `/legal-recovery-by-city/gurgaon` |
| `/legal-recovery-by-city/bengaluru` | 1 | `src/app/sitemap/sitemapData.ts:2157` | `/legal-recovery-by-city/bangalore` |

### 1b. Inside blog post content (stored in MongoDB; fix in the blog editor at `/authority/blog`)

| Broken URL | # posts | Example posts |
|---|---|---|
| `/money-recovery-court-case-process-india` | 7 | `/blog/msme-odr-portal-vs-order-37-summary-suit-unpaid-invoice-recovery`, `/blog/friendly-loan-cheque-bounce-account-closed-stop-payment-recovery` |
| `/services/friendly-loan-recovery` | 5 | `/blog/recover-money-from-friend-upi-gpay-phonepe-section-63-bsa`, `/blog/borrower-blocked-on-whatsapp-changed-address-money-recovery` |
| `/how-to-recover-money-lent-to-friend-without-proof` | 5 | same posts as above |
| `/legal-notice-for-recovery-of-friendly-loan` | 4 | `/blog/friendly-loan-cheque-bounce-account-closed-stop-payment-recovery` |
| `/legal-notice-for-money-recovery` | 4 | `/blog/section-43bh-income-tax-msme-45-day-payment-recovery-legal-notice` → likely meant `/legal-notice-for-recovery-of-money` |
| `/legal-notice-for-salary-recovery` | 3 | `/blog/employer-deducted-tds-pf-not-deposited-fnf-recovery` |
| `/employer-holding-relieving-letter-and-fnf` | 3 | `/blog/absconding-employee-tag-bgv-threat-fnf-recovery-india` → likely `/employer-withholding-relieving-letter-legal-action` |
| `/startup-laid-off-without-paying-salary` | 3 | `/blog/forced-resignation-layoff-severance-fnf-recovery-india` |
| `/b2b-vendor-payment-recovery` | 2 | `/blog/msme-odr-portal-vs-order-37-summary-suit-unpaid-invoice-recovery` |
| `/msme-samadhaan-portal-delayed-payment-recovery` | 2 | same → likely `/recovery/msme-samadhan` |
| `/unpaid-invoice-recovery-legal-notice-format` | 2 | same |
| `/how-to-send-legal-notice-to-company-for-non-payment` | 2 | same |
| `/cheque-bounce-legal-notice-format` | 2 | `/blog/extend-3-year-limitation-period-money-recovery-section-18-19` |
| `/unpaid-salary-and-pf-not-deposited-legal-notice` | 2 | `/blog/employer-deducted-tds-pf-not-deposited-fnf-recovery` |
| `/wrongful-termination-and-unpaid-salary-legal-notice` | 2 | `/blog/forced-resignation-layoff-severance-fnf-recovery-india` → likely `/legal-notice-wrongful-termination-unpaid-notice-period-salary` |
| `/summary-suit-for-money-recovery-india` | 1 | `/blog/msme-odr-portal-vs-order-37-summary-suit-unpaid-invoice-recovery` → likely `/law/order-37-summary-suit-money-recovery` |
| `/recovery/friendly-loan` | 1 | `/blog/recover-money-from-friend-upi-gpay-phonepe-section-63-bsa` → `/recovery/friendly-loan-amount` |
| `/company-closed-down-without-paying-salary` | 1 | `/blog/recover-unpaid-salary-fnf-insolvent-shutting-down-startup-directors` |
| `/debtor-not-responding-to-calls-or-messages` | 1 | `/blog/borrower-blocked-on-whatsapp-changed-address-money-recovery` |
| `/can-legal-notice-be-sent-on-whatsapp-and-email-india` | 1 | same → likely `/is-an-email-or-whatsapp-message-considered-a-valid-legal-notice-in-indian-courts` |
| `/tenant-security-deposit-recovery-legal-notice` | 1 | `/blog/recover-split-rent-deposit-bills-from-ex-flatmate-roommate-india` |
| `/legal-recovery-of-money-from-landlord` | 1 | `/blog/lawyer-assistance-recovery-rent-deposit` |
| `/legal-notice-to-recover-my-loan-from-friend` | 1 | `/blog/send-legal-notice-yourself-guide` → `/legal-notice-to-recovery-my-loan-from-friend` |
| `/how-to-send-a-legal-notice` | 1 | `/blog/invoice-recovery-doctors-pharmacists` → `/how-to-send-a-legal-notice-for-recovery-of-money-in-india` |

**Malformed auto-links in blog posts.** The Tiptap editor auto-linked numbered list text such as "**1.Select**", "**2.Expert**" and "**1.Digital**" into `http://1.Select`, `http://2.Expert` and `http://1.Digital`, which are dead domains:
- `/blog/send-reply-legal-notice-online-india`, `/blog/legal-demand-notice-automation`, `/blog/send-legal-notice-licensed-lawyers-legalrecovery`, `/blog/send-legal-notice-10-minutes`
- `/blog/understanding-charges-for-legal-notice`, `/blog/how-to-recover-money-owed-legal-guide`

Fix the posts, and consider turning off `autolink` / `linkOnPaste` for bare `word.word` text in the Link extension of `src/app/authority/blog/TiptapEditor.tsx`.

---

## 2. Broken images and assets (404)

| Missing file | Refs | Where | Impact |
|---|---|---|---|
| `/og-*.png` (**~125 different filenames**, e.g. `/og-cyber-fraud.png`, `/og-send-legal-notice.png`) | 130 files | JSON-LD `"image"` in nearly every `*Client.tsx` article/landing page | Schema image is a 404, so the page can't get rich results with an image |
| `/logo.png` | 139 files | JSON-LD `publisher.logo.url` | Publisher logo 404 on every Article schema. Point to `/lrlogo.png` |
| `/icon.png` | 38 files | JSON-LD logo, e.g. `src/app/recovery-of-unpaid-dues-for-my-business/RecoveryOfUnpaidDuesClient.tsx:61` | Same; use `/lrlogo.png` |
| `/services/3.png` | 6 refs | `src/app/legal-notice-services/[slug]/page.tsx:46` (**og:image**) and `LegalNoticeClient.tsx:86,121` | Social share preview broken on every `/legal-notice-services/*` page |
| `/images/og/company-refusing-refund.jpg` | 4 refs | `src/app/send-a-legal-notice/company-refusing-refund/CompanyRefusingRefundClient.tsx:40,495` | Visible `<img>` broken on the page |
| `/images/og/online-refund-not-received.jpg` | 2 refs | `src/app/send-a-legal-notice/online-refund-not-received/OnlineRefundNotReceivedClient.tsx:44,495` | Visible `<img>` broken on the page |
| `/images/placeholder.png` | 1 | `src/app/authority/blog/TiptapEditor.tsx:569` (onerror fallback) | Admin editor only |

The quickest fix for the og/logo set is a find-and-replace to existing files. `/lrlogo.png` exists, and each `send-a-legal-notice/*` page already has a matching `/images/og/<slug>.jpg`.

---

## 3. Internal links that work but go through a redirect

| Link | Refs | Redirects to |
|---|---|---|
| `/send-a-legal-notice/zomato-refund-not-recieved` | **529 pages** (site-wide nav/footer) | `/legal-notice-to/zomato` |
| `/send-a-legal-notice/swiggy-refund-not-recieved` | **529 pages** | `/legal-notice-to/swiggy` |
| `/send-legal-notice` | 29 | `/online-legal-notice` |
| `/blog/money-recovery-instamart-wrongful-product-delivery` | 10 | `/legal-notice-to/swiggy` |
| `/blog/money-recovery-zepto-wrongful-delivery` | 8 | `/legal-notice-to/zepto` |
| `/blog/money-recovery-blinkit-wrongful-delivery` | 3 | `/legal-notice-to/blinkit` |
| `/blog/recover-money-from-transaction-mistake` | 2 | `/recovery/wrong-upi-transfer` |

These are not broken, but update the hrefs to the final URL so link equity isn't lost to redirect hops.

---

## 4. Broken external links

### 4a. Definitely dead (no DNS record)

| Domain | Refs | Note |
|---|---|---|
| `main.sci.gov.in` (Supreme Court judgment PDFs) | **57 URLs on 56 pages, 63 source files** | Domain retired. Supreme Court judgments are now on `sci.gov.in` / `digiscr.sci.gov.in` |
| `edaakhil.nic.in` | 29 source refs (e.g. `send-a-legal-notice/*`, `recovery/gym-membership-refund`) | e-Daakhil was replaced by **e-Jagriti** (`e-jagriti.gov.in`, which resolves) |
| `cms.nic.in/ncdrcnew/judgments.html` | 1 (`/legal-notice-to/spicejet`) | Dead |

### 4b. Returned 404 (page moved or removed)

- `financialservices.gov.in/...Insurance-Ombudsman*` ×4 → `/insurance-mis-selling-free-look-refund`, `/life-insurance-death-claim-rejected`, `/cashless-claim-denied-what-to-do`, `/health-insurance-claim-rejection-reasons-counter`, `/insurance-premium-auto-debited-without-consent`
- `cioins.co.in/OmbudsmanRules`, `/Rules` → `/motor-insurance-claim-rejected-legal-notice`, `/claim-repudiated-vs-rejected-difference`
- `sebi.gov.in` ×5 (ODR master circular, SCORES 2.0, Stock Brokers Regs, unauthorised trading, SBEB regs) → `/sebi-smart-odr-broker-complaint`, `/scam-money-recovery-what-is-possible`, `/esop-buyback-not-paid-ex-employee`
- `labour.gov.in` ×5 PDFs (Standing Orders rules, Code on Wages 2019/2020, Payment of Wages Act, Gratuity notification) → `/experience-letter-not-given-legal-action`, `/law/code-on-wages-salary-payment-deadline`, `/templates/salary-delay-complaint-letter-to-hr`, `/tools/gratuity-calculator`, `/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action`, `/send-a-legal-notice/delayed-salary-startup-company-india`, `/send-a-legal-notice/leave-encashment-not-paid-by-employer`
- `clc.gov.in` ×3 → `/templates/relieving-experience-letter-request-email`, `/tools/gratuity-calculator`, `/employer-withholding-relieving-letter-legal-action`
- `mohua.gov.in` Model Tenancy Act PDFs ×3 → `/law/model-tenancy-act-security-deposit-rules`, `/templates/security-deposit-refund-letter-to-landlord`, `/send-a-legal-notice/recover-unpaid-rent-from-tenant-india`, `/send-a-legal-notice/security-deposit-not-refunded-landlord`
- `delhi.gov.in` ×2 → `/experience-letter-not-given-legal-action`, `/tools/notice-period-recovery-calculator`
- `meity.gov.in` IT Rules PDFs ×2 → `/online-gaming-wallet-balance-refund`, `/legal-notice-to/redbus`
- `irdai.gov.in/master-circulars`, `financialservices.gov.in/beta/...social-security-schemes` → `/insurance-premium-auto-debited-without-consent`
- `msme.gov.in/.../MSMED_Act_2006.pdf` → `/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution`
- `sbi.co.in/.../mclr-historical-data` → `/tools/rera-refund-interest-calculator`
- `finance.rajasthan.gov.in/.../Platform_Gig_Workers_Act_2023.pdf` → `/gig-worker-payout-withheld-legal-notice`
- `indianrailways.gov.in/.../refundrules2015.pdf` → `/legal-notice-to/irctc`
- `cdsco.gov.in/.../Cosmetics/` → `/legal-notice-to/nykaa`
- News/case-law articles: `livelaw.in` ×2 (`/legal-notice-to/nykaa`, `/legal-notice-to/zomato`, `/send-a-legal-notice/zomato-refund-not-recieved`), `lawstreet.co` (`/legal-notice-to/blinkit`, `/legal-notice-to/zomato`), `scconline.com` (`/legal-notice-to/blinkit`, `/blog/money-recovery-blinkit-wrongful-delivery`), `timesofindia` (`/legal-notice-to/blinkit`, `/legal-notice-to/zepto`)

### 4c. Could not be verified from this network (not counted as broken)

- **`indiacode.nic.in` (90 URLs)** and **`consumeraffairs.nic.in` (9)** time out from this machine. Many Indian government sites block or throttle non-Indian traffic. Re-check these from an Indian IP.
- Timeouts on `bombayhighcourt.nic.in`, `airsewa.gov.in`, `rera.mp.gov.in`, `aicte-india.org`.
- Bot-blocked responses that are almost certainly fine in a browser: Facebook/LinkedIn share buttons (400/403), `linkedin.com/in/...` (999), `epfindia.gov.in`, `mca.gov.in`, `npci.org.in`, `fiverr.com`, `uncitral.un.org`, `casemine.com`, `indianexpress.com`, `perplexity.ai`, `chat.deepseek.com` (403).
- A retry showed these load fine: `bimabharosa.irdai.gov.in`, `scores.sebi.gov.in`, `egazette.gov.in`, `rbidocs.rbi.org.in`, `tenancy.tn.gov.in`, `labour.karnataka.gov.in`, `hcmadras.tn.gov.in`, `udyamregistration.gov.in`.

---

## Not covered
- Pages behind login (`/user`, `/authority`, dashboards) were not crawled. Their hard-coded links were still covered by the source scan.
- `/api/*` endpoints and form `action` URLs were not tested.
- All `sitemap.xml` URLs returned 200.
