import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import NbfcSarfaesiTableOfContents from "./NbfcSarfaesiTableOfContents";
import NbfcSarfaesiScenarioTabs from "./NbfcSarfaesiScenarioTabs";
import NbfcSarfaesiCTA from "./NbfcSarfaesiCTA";

export const revalidate = 86400;

const PAGE_PATH = "/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "NBFC SARFAESI Eligibility Decoded: The ₹100 Cr Asset / ₹20 Lakh Debt Rule & How Smaller LAP Lenders Enforce Mortgages";
const META_TITLE = "NBFC SARFAESI Eligibility: ₹100 Cr Asset & ₹20L Rule";
const META_DESCRIPTION =
  "Check NBFC SARFAESI eligibility under MoF S.O. 856(E) (₹100 Cr asset, ₹20L debt floors), plus fast-track Arbitration & Order 34/37 LAP alternatives.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("NBFC SARFAESI eligibility 100 crore asset and 20 lakh loan rule guide"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_INFO = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

const FAQS = [
  {
    q: "What is the minimum asset size and loan amount for an NBFC to invoke SARFAESI in India?",
    a: "Under Ministry of Finance Notification S.O. 856(E) dated 24 February 2020 (read with S.O. 652(E) dated 12 February 2021) issued under Section 2(1)(m)(iv) of the SARFAESI Act, 2002, an NBFC must satisfy two cumulative gates: (1) total asset size of ₹100 Crore or above as per its last audited balance sheet, and (2) an individual defaulted debt (principal plus accrued interest) of ₹20 Lakh or above.",
  },
  {
    q: "Can a Base-Layer NBFC with ₹40 Crore AUM use SARFAESI for a ₹50 Lakh LAP default?",
    a: "No. Both conditions under S.O. 856(E) are conjunctive. Even if the individual Loan Against Property (LAP) exposure exceeds ₹20 Lakh, an NBFC with less than ₹100 Crore in total assets is not a notified financial institution under Section 2(1)(m)(iv) and is statutorily barred from issuing a Section 13(2) demand notice.",
  },
  {
    q: "Why do Housing Finance Companies (HFCs) have a lower SARFAESI threshold than NBFCs?",
    a: "Registered Housing Finance Companies regulated by the RBI/NHB are notified separately under Section 2(1)(m)(iv) and remain governed by the statutory Section 31(h) floor of ₹1 Lakh rather than the ₹20 Lakh NBFC floor. However, an NBFC-ICC offering Loan Against Property (LAP) against residential collateral is not an HFC and cannot claim the ₹1 Lakh threshold.",
  },
  {
    q: "How can a non-SARFAESI NBFC enforce a mortgage without waiting 8–10 years in an Order 34 CPC suit?",
    a: "Under the Supreme Court's distinction in Booz Allen & Hamilton Inc. v. SBI Home Finance Ltd. (2011) 5 SCC 532, while a suit for foreclosure or sale of mortgaged property is an action in rem, a personal money claim under the loan agreement is arbitrable in personam. Non-SARFAESI NBFCs can invoke institutional arbitration (Section 21), seek Section 9 interim restraint against property alienation, obtain a fast-track Section 29B award, and attach/sell the borrower's property in Section 36 / Order 21 CPC execution.",
  },
  {
    q: "Does assigning a sub-₹20 Lakh NBFC NPA to an Asset Reconstruction Company (ARC) unlock SARFAESI?",
    a: "Assigning a sub-₹20 Lakh loan to an ARC under Section 5 does not bypass the statutory bar if the underlying debt was never enforceable under SARFAESI or falls below statutory thresholds. Consequently, ARCs heavily discount sub-₹20 Lakh LAP pools during price discovery unless the originator has already initiated Section 25 PSS Act, Section 138 NI Act, or arbitral proceedings.",
  },
  {
    q: "Can an NBFC add compounded penal interest to cross the ₹20 Lakh SARFAESI threshold?",
    a: "No. Under the RBI Fair Lending Practice – Penal Charges in Loan Accounts circular, lenders cannot capitalize or compound penal charges into the principal. Artificially inflating an ₹18 Lakh balance above ₹20 Lakh with unlawful compounded penalties exposes the Section 13(2) notice to immediate quashing by the DRT under Section 17.",
  },
];

const STATUTORY_SOURCES = [
  {
    title: "SARFAESI Act, 2002 (Sections 2(1)(m)(iv), 5, 13, 14, 17, 26D & 31) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Ministry of Finance Notification S.O. 856(E) & S.O. 652(E) — NBFC SARFAESI Thresholds",
    url: "https://financialservices.gov.in/",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Sections 9, 12(5), 21, 29B & 36) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXI Execution & Order XXXIV Mortgage Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "RBI Master Direction — Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "CERSAI Central Registry of Securitisation Asset Reconstruction and Security Interest",
    url: "https://www.cersai.org.in/",
  },
];

const PRECEDENTS = [
  {
    title: "In Rem Mortgage Foreclosure vs In Personam Arbitrable Debt Recovery",
    caseName: "Booz Allen and Hamilton Inc. v. SBI Home Finance Ltd.",
    citation: "(2011) 5 SCC 532 — Supreme Court of India",
    holding:
      "Held that suits for enforcement of a mortgage by sale or foreclosure under Order 34 CPC adjudicate rights in rem and are non-arbitrable. Crucially, however, an independent contractual claim for a personal money decree under the loan agreement is an action in personam and remains arbitrable.",
    impact:
      "Non-SARFAESI NBFCs (<₹100 Cr AUM or <₹20L LAP) can invoke Section 21 arbitration on the personal repayment covenant, secure Section 9 interim injunctions, and execute the resulting Section 36 money award against the borrower's immovable assets under Order 21 CPC.",
  },
  {
    title: "Arbitrability Boundary Between Exclusive DRT Claims & Non-Notified Lenders",
    caseName: "Vidya Drolia v. Durga Trading Corporation",
    citation: "(2021) 2 SCC 1 — 3-Judge Bench, Supreme Court of India",
    holding:
      "Reaffirmed that statutory claims exclusively triable by the Debt Recovery Tribunal (for notified banks and financial institutions under the RDB Act) are non-arbitrable. Conversely, lenders outside the RDB/SARFAESI notification perimeter are not barred from invoking private arbitration on contractual debt.",
    impact:
      "Base-Layer NBFCs (<₹100 Cr AUM) and sub-₹20 Lakh LAP tickets sit outside both DRT and SARFAESI jurisdiction—making fast-track institutional arbitration legally valid and immune to DRT-exclusivity objections.",
  },
  {
    title: "Mandatory 60-Day Section 13(2) Notice & Reasoned Section 13(3A) Disposal",
    caseName: "Mardia Chemicals Ltd. v. Union of India",
    citation: "(2004) 4 SCC 311 — Supreme Court of India",
    holding:
      "Upheld the constitutional validity of SARFAESI non-judicial enforcement while mandating strict compliance with the 60-day Section 13(2) demand notice and a reasoned, written disposal of borrower objections under Section 13(3A) before taking Section 13(4) possession.",
    impact:
      "Notified NBFCs enforcing >=₹20 Lakh LAP defaults must maintain airtight NPA classification proof, CERSAI s.26D registration, and documented s.13(3A) objection replies.",
  },
  {
    title: "Private NBFCs & ARCs Protected Against Article 226 Writ Interference",
    caseName: "Phoenix ARC Pvt. Ltd. v. Vishwa Bharati Vidya Mandir",
    citation: "(2022) 5 SCC 345 — Supreme Court of India",
    holding:
      "Ruled that High Courts should not entertain Article 226 writ petitions against private ARCs or notified NBFCs exercising statutory SARFAESI powers; borrowers must pursue the statutory remedy before the DRT under Section 17.",
    impact:
      "Once an NBFC genuinely clears both the ₹100 Cr AUM and ₹20 Lakh ticket gates, borrowers cannot stall Section 13(4) / Section 14 possession through parallel High Court writs.",
  },
];

export default function NbfcSarfaesiEligibilityPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: REVIEWER_INFO.name,
      jobTitle: REVIEWER_INFO.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "NBFC & Fintech Loan Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NBFC SARFAESI Eligibility (₹100 Cr / ₹20L Rule)",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-02 NBFC &amp; LAP Law Guide</span>
            <span>&bull;</span>
            <span>MoF S.O. 856(E) &amp; 652(E)</span>
            <span>&bull;</span>
            <span>SARFAESI s.2(1)(m)(iv)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + inline Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under MoF Notifications S.O. 856(E) and S.O. 652(E), an NBFC can invoke SARFAESI only if it holds{" "}
            <strong className="text-white">&ge; ₹100 Crore in total assets</strong> and the defaulted debt is{" "}
            <strong className="text-white">&ge; ₹20 Lakh</strong>. Excluded Base-Layer and small-ticket LAP lenders must pivot to{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              multi-track NBFC loan recovery
            </Link>{" "}
            using Arbitration s.21/s.9, s.25 PSS Act, and Order 34/37 CPC.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">&ge; ₹100 Cr</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NBFC Audited Asset Gate (S.O. 856(E))
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">&ge; ₹20 Lakh</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NBFC Debt Floor (Principal + Interest)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">&ge; ₹1 Lakh</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                HFC Statutory Floor (s.31(h) Exception)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">7,000+ NBFCs</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Base-Layer Lenders Barred from SARFAESI
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Reviewed by <strong className="text-slate-200">{REVIEWER_INFO.name}</strong> ({REVIEWER_INFO.role}) &middot; Updated 14 Nov 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "NBFC & Fintech Loan Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
              { label: "NBFC SARFAESI Eligibility (₹100 Cr / ₹20L Rule)", href: PAGE_PATH },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <NbfcSarfaesiTableOfContents />

          {/* Right Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Dual-Gate Threshold */}
            <section
              id="heading-thresholds"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  MoF S.O. 856(E) &amp; 652(E): The Dual-Gate NBFC SARFAESI Test
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Unlike scheduled commercial banks—which automatically qualify as secured creditors under Section 2(1)(c) of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) for any secured debt exceeding ₹1 Lakh—Non-Banking Financial Companies (NBFCs) enjoy no automatic statutory right to enforce mortgages without court intervention. An NBFC acquires SARFAESI powers strictly by Central Government notification under <strong>Section 2(1)(m)(iv)</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                On 24 February 2020, the Ministry of Finance issued <strong>Notification S.O. 856(E)</strong>, reducing the earlier ₹500 Crore asset floor to <strong>₹100 Crore</strong> and the ticket floor from ₹1 Crore to <strong>₹50 Lakh</strong>. Subsequently, via <strong>Notification S.O. 652(E) dated 12 February 2021</strong>, the Ministry further lowered the individual debt threshold from ₹50 Lakh to <strong>₹20 Lakh</strong>. Both conditions are strictly conjunctive:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Gate 1 &bull; Entity Asset Size
                  </p>
                  <p className="text-base font-bold text-slate-900 mb-1.5">
                    &ge; ₹100 Crore Total Assets
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Measured strictly from the NBFC&rsquo;s <strong>last audited balance sheet</strong> as an RBI-registered NBFC. Over 7,000 Base-Layer NBFCs across India fall below ₹100 Crore AUM and are statutorily barred from issuing Section 13(2) demand notices—even on ₹2 Crore LAP defaults.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Gate 2 &bull; Individual Debt Exposure
                  </p>
                  <p className="text-base font-bold text-slate-900 mb-1.5">
                    &ge; ₹20 Lakh Principal + Interest
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The security interest must be enforced for recovery of a debt amounting to ₹20 Lakh or more on the date of NPA classification. Micro-LAP, affordable MSME property loans, and ₹5 Lakh–₹19 Lakh secured tickets fail Gate 2 even when held by a ₹10,000 Crore Middle-Layer NBFC.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-800 leading-relaxed">
                <strong>Statutory Trap for CFOs &amp; General Counsel:</strong> Issuing a SARFAESI Section 13(2) notice when either gate is unmet is <em>ultra vires</em>. Borrowers routinely challenge such notices before Civil Courts or High Courts as void ab initio, wiping out 6 to 14 months of recovery momentum. Before dispatching any demand, run your exposure through our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="font-bold underline text-amber-900 hover:text-[#DC2626]"
                >
                  SARFAESI &amp; Recovery Forum Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 2: HFC & ARC Rules */}
            <section
              id="heading-hfc-arc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  HFC ₹1 Lakh Floor vs NBFC ₹20 Lakh Bar &amp; ARC Assignment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Institutional recovery heads frequently conflate Housing Finance Companies (HFCs) with NBFC-Investment and Credit Companies (NBFC-ICCs) that underwrite residential Loan Against Property (LAP). Under RBI Master Directions and Section 2(1)(m)(iv) notifications, the distinction carries massive enforcement consequences:
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 mb-5">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span>
                    <strong>Registered HFCs (&ge; ₹1 Lakh Floor):</strong> HFCs holding an RBI/NHB Certificate of Registration as a Housing Finance Company and notified under Section 2(1)(m)(iv) are governed by the baseline <strong>Section 31(h)</strong> exclusion—meaning SARFAESI applies to any housing loan where total dues exceed <strong>₹1 Lakh</strong> (provided more than 20% of principal and interest remains unpaid under Section 31(j)).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span>
                    <strong>NBFC-ICCs Writing Residential LAP (&ge; ₹20 Lakh Floor):</strong> Even if the collateral is a self-occupied residential house, an NBFC-ICC is bound by S.O. 652(E). A ₹15 Lakh LAP default cannot enter SARFAESI.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span>
                    <strong>Assigning Sub-₹20 Lakh Secured NPAs to ARCs (Section 5):</strong> While Section 5 of SARFAESI permits banks and financial institutions to assign financial assets to an Asset Reconstruction Company (ARC), an ARC steps into the shoes of the assignor. Assigning a sub-₹20 Lakh loan originated by an un-notified Base-Layer NBFC does not magically confer Section 13 enforcement powers where the statutory threshold was never met.
                  </span>
                </li>
              </ul>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For non-SARFAESI LAP portfolios, pre-litigation leverage via an advocate-drafted{" "}
                <Link
                  href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  NBFC legal recovery notice
                </Link>{" "}
                or bulk tri-channel{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Email, WhatsApp &amp; Speed Post notice dispatch
                </Link>{" "}
                routinely recovers 30%–45% of overdue accounts before court fees or ARC haircuts are incurred.
              </p>
            </section>

            {/* Section 3: Landmark Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Landmark Supreme Court &amp; High Court Rulings on NBFC Enforcement
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Four Supreme Court rulings define the exact boundary between SARFAESI enforcement, Order 34 CPC mortgage foreclosure, and fast-track institutional arbitration for NBFCs:
              </p>

              <div className="space-y-4">
                {PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative pl-5 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.caseName} — {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 leading-relaxed">
                      <strong>Creditor Playbook Impact:</strong> {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Dual-Track Mortgage Enforcement: Notified vs Non-SARFAESI NBFCs
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every defaulted LAP or mortgage file at 60–90+ DPD must pass through a two-gate statutory triage before any recall or demand notice is issued. Routing a non-SARFAESI file into Section 13(2), or routing an arbitrable money covenant into a 10-year Order 34 civil suit, destroys portfolio IRR.
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="760"
                  height="310"
                  viewBox="0 0 760 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="NBFC SARFAESI vs Non-SARFAESI Mortgage Enforcement Decision Tree"
                >
                  {/* Node 1: Defaulted LAP */}
                  <rect x="20" y="115" width="150" height="72" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="95" y="143" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">LAP / Secured NPA</text>
                  <text x="95" y="162" textAnchor="middle" fill="#94A3B8" fontSize="10">90+ DPD &amp; CERSAI Audit</text>

                  {/* Arrow 1 -> Gate 1 */}
                  <line x1="170" y1="151" x2="215" y2="151" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="215,146 225,151 215,156" fill="#94A3B8" />

                  {/* Gate 1: >= 100 Cr & >= 20L */}
                  <rect x="225" y="108" width="180" height="86" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="315" y="136" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">S.O. 856(E) Dual Gate</text>
                  <text x="315" y="155" textAnchor="middle" fill="#FECACA" fontSize="10">AUM &ge; ₹100 Cr AND</text>
                  <text x="315" y="171" textAnchor="middle" fill="#FECACA" fontSize="10">Debt &ge; ₹20L (or HFC &ge; ₹1L)</text>

                  {/* Upper Branch: YES -> SARFAESI */}
                  <path d="M405 130 L455 70 L485 70" stroke="#10B981" strokeWidth="2" fill="none" />
                  <polygon points="485,65 495,70 485,75" fill="#10B981" />
                  <text x="442" y="62" fill="#34D399" fontSize="11" fontWeight="700">YES</text>

                  <rect x="495" y="24" width="245" height="92" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="617" y="50" textAnchor="middle" fill="#ECFDF5" fontSize="12" fontWeight="700">Track A: SARFAESI Enforcement</text>
                  <text x="617" y="70" textAnchor="middle" fill="#A7F3D0" fontSize="10">1. s.13(2) 60-Day Demand Notice</text>
                  <text x="617" y="86" textAnchor="middle" fill="#A7F3D0" fontSize="10">2. s.13(3A) Reply + s.13(4) Possession</text>
                  <text x="617" y="102" textAnchor="middle" fill="#A7F3D0" fontSize="10">3. s.14 CMM/DM Order &amp; E-Auction</text>

                  {/* Lower Branch: NO -> Non-SARFAESI */}
                  <path d="M405 172 L455 232 L485 232" stroke="#F59E0B" strokeWidth="2" fill="none" />
                  <polygon points="485,227 495,232 485,237" fill="#F59E0B" />
                  <text x="442" y="250" fill="#FBBF24" fontSize="11" fontWeight="700">NO</text>

                  <rect x="495" y="182" width="245" height="106" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="617" y="208" textAnchor="middle" fill="#FEF3C7" fontSize="12" fontWeight="700">Track B: Non-SARFAESI Pivot</text>
                  <text x="617" y="228" textAnchor="middle" fill="#FDE68A" fontSize="10">1. Loan Recall + s.25 PSS / s.138 NI</text>
                  <text x="617" y="244" textAnchor="middle" fill="#FDE68A" fontSize="10">2. s.21 Arbitration (Personal Debt) + s.9</text>
                  <text x="617" y="260" textAnchor="middle" fill="#FDE68A" fontSize="10">3. s.36 / Order 21 Property Attachment</text>
                  <text x="617" y="276" textAnchor="middle" fill="#94A3B8" fontSize="9">(Or Order 37 / Order 34 CPC if no Arb Clause)</text>
                </svg>
              </div>

              {/* Mobile Stacked Workflow Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold uppercase text-red-400 mb-1">Step 1 &bull; Triage</p>
                  <p className="text-sm font-bold">Verify S.O. 856(E) Dual Gate (&ge; ₹100 Cr AUM + &ge; ₹20L Debt)</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Gate Passed &bull; Track A</p>
                  <p className="text-sm font-semibold">SARFAESI s.13(2) (60d) &rarr; s.13(3A) &rarr; s.13(4) &amp; s.14 DM Possession</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Gate Failed &bull; Track B</p>
                  <p className="text-sm font-semibold">Recall + s.25 PSS / s.138 NI + s.21 Arbitration (Money Debt) + s.9 Attachment + s.36 Execution</p>
                </div>
              </div>
            </section>

            {/* Section 5: Remedy Comparison Matrix */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Order 34 CPC vs Arbitration s.9/s.36 vs ARC Assignment Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                When an NBFC is barred from SARFAESI, choosing between a traditional Order 34 mortgage suit, an Order 37 summary suit, institutional arbitration, or ARC sale determines both recovery speed and legal cost-to-recovery ratio:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Enforcement Mechanism</th>
                      <th className="p-3.5 font-bold">Eligibility Gate</th>
                      <th className="p-3.5 font-bold">Typical Timeline</th>
                      <th className="p-3.5 font-bold">Interim Asset Freeze</th>
                      <th className="p-3.5 font-bold">Optimal NBFC Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">SARFAESI s.13(2) / s.14</td>
                      <td className="p-3.5 text-slate-700">&ge; ₹100 Cr AUM &amp; &ge; ₹20L debt (HFC: &ge; ₹1L)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">4–9 months</td>
                      <td className="p-3.5 text-slate-700">Statutory bar on transfer post-s.13(2)</td>
                      <td className="p-3.5 text-slate-700">Notified Middle/Upper-Layer NBFCs with &ge; ₹20L LAP</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Institutional Arbitration + s.9</td>
                      <td className="p-3.5 text-slate-700">Written s.7 clause; personal money claim</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">6–12 months (s.29B)</td>
                      <td className="p-3.5 text-slate-700">High (s.9 injunction against sale)</td>
                      <td className="p-3.5 text-slate-700">Base-Layer NBFCs &amp; ₹5L–₹19L LAP tickets</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Order 37 CPC Summary Suit</td>
                      <td className="p-3.5 text-slate-700">Liquidated debt; no active arb objection</td>
                      <td className="p-3.5 text-amber-700 font-semibold">12–24 months</td>
                      <td className="p-3.5 text-slate-700">Order 38 Rule 5 (strict burden)</td>
                      <td className="p-3.5 text-slate-700">Legacy LAP agreements lacking valid arb clause</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Order 34 CPC Mortgage Suit</td>
                      <td className="p-3.5 text-slate-700">Registered or equitable mortgage</td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">5–10+ years</td>
                      <td className="p-3.5 text-slate-700">Lis pendens (s.52 TPA)</td>
                      <td className="p-3.5 text-slate-700">Only when third-party encumbrances block money decree</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">s.25 PSS Act / s.138 NI Act</td>
                      <td className="p-3.5 text-slate-700">Bounced e-NACH / cheque; 30d notice</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">3–9 months (settlement)</td>
                      <td className="p-3.5 text-slate-700">s.143A 20% interim compensation</td>
                      <td className="p-3.5 text-slate-700">Parallel criminal leverage alongside Arbitration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                For a deeper look at neutral arbitrator appointments and Section 36 execution mechanics, see our{" "}
                <Link
                  href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  institutional loan arbitration guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/online-dispute-resolution-india"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Online Dispute Resolution (ODR) India workflow
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Interactive Scenario Tabs */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 NBFC LAP Default Scenarios &amp; Statutory Forum Routing
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your NBFC&rsquo;s balance-sheet tier or loan ticket profile below to inspect the exact statutory eligibility result, execution steps, and RBI compliance guardrails:
              </p>

              <NbfcSarfaesiScenarioTabs />
            </section>

            {/* Section 7: Defense Pre-Emption Table */}
            <section
              id="heading-defenses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Pre-Empting Borrower Defenses in Non-SARFAESI Mortgage Suits
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Defaulting LAP borrowers routinely deploy four technical objections to stall arbitration or civil attachment. Pre-empting each defense at the Loan Recall Notice stage protects award enforceability:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Borrower Objection</th>
                      <th className="p-3.5 font-bold">Statutory Basis Cited</th>
                      <th className="p-3.5 font-bold">Creditor Pre-Emption Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">&ldquo;Mortgage disputes are non-arbitrable&rdquo;</td>
                      <td className="p-3.5 text-slate-700">Booz Allen (2011) 5 SCC 532</td>
                      <td className="p-3.5 text-slate-700">
                        Draft the s.21 invocation and Statement of Claim strictly for a <strong>personal money award</strong> under the loan covenant—never seek mortgage foreclosure before the arbitrator.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">&ldquo;Unilateral arbitrator appointment is void&rdquo;</td>
                      <td className="p-3.5 text-slate-700">s.12(5) &amp; Perkins Eastman (2020)</td>
                      <td className="p-3.5 text-slate-700">
                        Route appointments exclusively through an independent ODR/arbitral institution panel rather than MD/CEO nomination.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">&ldquo;No notice of recall or s.21 received&rdquo;</td>
                      <td className="p-3.5 text-slate-700">s.3 &amp; s.21 Arbitration Act; s.34(2)(a)(iii)</td>
                      <td className="p-3.5 text-slate-700">
                        Serve tri-channel notices (Email + WhatsApp + Speed Post RPAD) and retain a cryptographic <strong>BSA 2023 s.63</strong> electronic certificate.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">&ldquo;Penal interest inflated claim above ₹20L&rdquo;</td>
                      <td className="p-3.5 text-slate-700">RBI Penal Charges Circular; SARFAESI s.17</td>
                      <td className="p-3.5 text-slate-700">
                        Separate uncompounded penal charges in Schedule A using an RBI-compliant{" "}
                        <Link
                          href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                          className="text-[#DC2626] font-semibold underline"
                        >
                          loan recall notice schedule
                        </Link>
                        .
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Worked LAP Math */}
            <section
              id="heading-worked-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked LAP Recovery Math: ₹14.5L Mortgage vs ₹26.2L SARFAESI
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Comparing two defaulted MSME Loan Against Property accounts held by a Middle-Layer NBFC (AUM ₹480 Crore) demonstrates why statutory triage at Day 90 directly drives net recovery yield:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-slate-900 text-white p-5 border border-slate-800">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                    Case A &bull; Sub-₹20L LAP (Barred from SARFAESI)
                  </span>
                  <h3 className="text-lg font-bold mb-3">₹14,50,000 Defaulted MSME LAP</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li>&bull; <strong>NPA Principal + Simple Interest:</strong> ₹14,50,000</li>
                    <li>&bull; <strong>SARFAESI Status:</strong> Ineligible (fails Gate 2 &ge; ₹20L)</li>
                    <li>&bull; <strong>Order 34 Suit Cost &amp; Drag:</strong> 7+ yrs; 38% NPV erosion</li>
                    <li>&bull; <strong>Arbitration + s.25 PSS Pivot:</strong> 7.5 months to settlement/award</li>
                    <li className="pt-2 border-t border-slate-700 text-emerald-400 font-bold">
                      Net Creditor Recovery: ₹13,65,000 (94.1% gross realization)
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-emerald-50 text-slate-900 p-5 border border-emerald-200">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
                    Case B &bull; SARFAESI-Eligible LAP
                  </span>
                  <h3 className="text-lg font-bold mb-3">₹26,20,000 Defaulted Commercial LAP</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>&bull; <strong>NPA Principal + Simple Interest:</strong> ₹26,20,000</li>
                    <li>&bull; <strong>SARFAESI Status:</strong> Eligible (&ge; ₹100 Cr AUM &amp; &ge; ₹20L)</li>
                    <li>&bull; <strong>CERSAI s.26D Check:</strong> Verified prior to s.13(2) dispatch</li>
                    <li>&bull; <strong>Timeline:</strong> 60d s.13(2) + s.13(4) symbolic possession</li>
                    <li className="pt-2 border-t border-emerald-200 text-emerald-800 font-bold">
                      Net Creditor Recovery: ₹25,10,000 (95.8% via pre-auction OTS)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <NbfcSarfaesiCTA />
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: NBFC SARFAESI Thresholds, HFCs &amp; LAP Mortgage Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Notifications, Bare Acts &amp; Regulatory Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {STATUTORY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
