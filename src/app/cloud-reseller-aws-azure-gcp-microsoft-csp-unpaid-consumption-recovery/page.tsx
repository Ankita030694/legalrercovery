import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CloudResellerRecoveryTableOfContents, {
  CLOUD_RESELLER_TOC_SECTIONS,
} from "./CloudResellerRecoveryTableOfContents";
import CloudResellerScenarioTabs from "./CloudResellerScenarioTabs";
import CloudResellerRecoveryCTA from "./CloudResellerRecoveryCTA";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ADVOCATE_NAME = "Anuj Anand Malik";
const ADVOCATE_ROLE = "Advocate & Founder, AMA Legal Solutions";

const PAGE_SLUG = "cloud-reseller-aws-azure-gcp-microsoft-csp-unpaid-consumption-recovery";
const CANONICAL_URL = `${SITE_URL}/${PAGE_SLUG}`;

const PAGE_H1 =
  "Existential Working-Capital Protection for AWS, Azure, GCP & Microsoft NCE Partners: Recovering Unpaid Cloud Consumption & Annual License Commitments";
const META_TITLE = "AWS, Azure & MS CSP Cloud Reseller Unpaid Bill Recovery";
const META_DESCRIPTION =
  "Indian CSPs must pay AWS/Azure even if clients default. Enforce Order 37 CPC summary recovery, root console suspension & personal director guarantees.";

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
        alt: formatAltText("AWS Azure Microsoft CSP Cloud Reseller Unpaid Bill Recovery Playbook"),
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

const FAQ_ITEMS = [
  {
    q: "Why must Indian cloud resellers pay hyperscalers if the client defaults or shuts down?",
    a: "Under the Microsoft Cloud Solution Provider (CSP) agreement and AWS Partner Network (APN) Channel Reseller Agreement, liability is strictly non-recourse to the end-user customer. The Indian reseller acts as the principal debtor to Microsoft Corporation or Amazon Web Services Inc., committing to 30-day foreign currency settlement regardless of whether the downstream enterprise or funded startup pays, files for insolvency, or abandons operations.",
  },
  {
    q: "Can a client cancel an annual Microsoft NCE commitment early if they downsize or fire staff?",
    a: "No. Under Microsoft's New Commerce Experience (NCE) architecture, annual commitments are legally non-cancellable after the first 168 hours (7 calendar days) following license procurement. If a client terminates 70% of its workforce, the CSP partner is contractually bound to continue paying Microsoft for 100% of the committed seats for the entire 12-month tenure. The client's refusal to pay constitutes anticipatory breach under Section 39 of the Indian Contract Act, 1872.",
  },
  {
    q: "Can a cloud reseller lawfully shut down a defaulting client's AWS or Azure console without risking IT Act criminal charges?",
    a: "Yes, provided the reseller follows a compliant contractual de-provisioning protocol. To defeat malicious counter-allegations of cyber-trespass under Sections 43 and 66 of the Information Technology Act, 2000, the Master Reseller Agreement must contain an explicit 'Right of Suspension for Non-Payment', and the reseller must issue a mandatory 48-to-72-hour formal data egress notice before severing compute or storage resources.",
  },
  {
    q: "How can cloud resellers enforce personal liability against startup founders who burn cloud credits?",
    a: "Because Indian venture-funded startups are private limited companies with limited liability, resellers must execute an unconditional, continuing Personal Deed of Guarantee under Section 126 and Section 128 of the Indian Contract Act, 1872 during credit onboarding. Under Section 128, the surety's liability is co-extensive with that of the principal debtor, allowing the reseller to proceed directly against the founder's personal bank accounts and venture equity.",
  },
  {
    q: "Can cloud resellers file Order XXXVII Summary Suits based on cloud billing APIs and telemetry?",
    a: "Yes. Order XXXVII of the Code of Civil Procedure, 1908 applies to suits for liquidated debts arising on written contracts. Detailed AWS Cost and Usage Reports (CUR), Azure Consumption API billing outputs, and signed Statements of Work constitute liquidated statutory debt, allowing the reseller to obtain a swift decree unless the defaulting debtor deposits security in court to obtain leave to defend.",
  },
  {
    q: "Who is liable when a client's leaked IAM keys cause a ₹30 Lakh crypto-mining AWS bill spike?",
    a: "Under the global Cloud Shared Responsibility Model incorporated into enterprise reseller MSAs, credential security, API key management, and IAM permissions are the sole responsibility of the customer. Under Section 43A of the Information Technology Act, 2000, the client's failure to maintain reasonable security practices makes them fully liable to indemnify the reseller for all pass-through cloud consumption debited by AWS or Azure.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act compel enterprise clients to settle cloud reseller bills?",
    a: "If the cloud reseller is registered as a Micro or Small enterprise under the MSMED Act, Section 43B(h) of the Income Tax Act disallows tax deductions for unpaid cloud invoices if payment is delayed beyond 45 days. Large corporate buyers face severe additional corporate income tax liability (at 25% or 30% plus surcharges) on unpaid cloud liabilities unless settled before the fiscal year-end.",
  },
  {
    q: "What electronic evidence is required to prove cloud consumption under Bharatiya Sakshya Adhiniyam, 2023?",
    a: "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), cloud resellers must produce certified electronic records: immutable AWS CloudTrail JSON exports, Azure ARM activity logs, SHA-256 cryptographic hashes of daily billing manifests, SMTP transmission logs of invoices, and a formal Section 63 Certificate signed by the IT Systems Administrator verifying the continuous integrity of the billing environment.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
  {
    label: "Cloud Reseller Unpaid Bill Recovery",
    href: `/${PAGE_SLUG}`,
  },
];

export default function CloudResellerRecoveryPage() {
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Escalation Protocol for Recovering Unpaid Cloud Reseller Bills",
    description:
      "A systematic legal and technical operational playbook for AWS Premier, Azure CSP, and GCP Resellers to recover unpaid postpaid consumption, annual NCE seat liabilities, and emergency GPU spikes from delinquent enterprise and startup clients in India.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Automated Consumption Telemetry Anomaly & Credit Trigger",
        text: "Monitor AWS Cost Explorer and Azure Billing APIs daily. When consumption hits 80% of approved credit limit or anomalies occur, issue automated automated payment reminders and verify liquidity.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Grace Period Expiry & Personal Director Guarantee Assertion",
        text: "Upon payment due-date default, serve formal demand invoking joint and several personal liability under Section 128 of the Indian Contract Act on company founders and directors.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Lawful Resource De-Provisioning & Root Console Lockdown",
        text: "Execute a compliant 48-hour data egress notice before suspending EC2 instances, revoking Azure AD roles, or pausing CSP subscriptions, completely neutralizing IT Act Section 43/66 counter-claims.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Advocate Statutory Demand Notice & Section 63 BSA Dossier",
        text: "Serve a formal fact-verified legal demand notice demanding full principal, 3x RBI compound penal interest under MSMED Act Section 16, and warning of Order XXXVII summary litigation.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Commercial Court Order XXXVII Summary Suit & Garnishee Injunction",
        text: "Initiate commercial court recovery under Order XXXVII CPC or urgent Section 9 Arbitration, seeking Order XXXVIII Rule 5 attachment before judgment and garnishee freeze on client bank accounts.",
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Person",
      name: ADVOCATE_NAME,
      jobTitle: ADVOCATE_ROLE,
      url: SITE_URL,
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
    datePublished: "2026-11-16T12:00:00+05:30",
    dateModified: "2026-11-16T12:00:00+05:30",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const jsonLdBreadcrumb = {
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
        name: "IT & SaaS Recovery",
        item: `${SITE_URL}/industries/it-saas-software-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cloud Reseller Unpaid Bill Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-05 &bull; IT Services &amp; Cloud Resellers &bull; G1 Operational Playbook</span>
          </div>

          {/* Exact Verbatim H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary &bull; B2B Cloud Creditor Notice
            </span>
            Under Microsoft CSP and hyperscaler master agreements, Indian cloud partners and VARs face non-recourse USD liabilities to AWS, Azure, and GCP even when downstream clients default or dissolve. As part of our comprehensive{" "}
            <Link
              href="/industries/it-saas-software-recovery"
              className="text-red-400 font-semibold underline hover:text-red-300"
            >
              IT Services, SaaS &amp; Cloud Debt Recovery Hub
            </Link>
            , this guide equips CFOs to enforce Order XXXVII CPC summary decrees on API billing telemetry, attach founder personal assets under Section 128 guarantees, and safely suspend root consoles without IT Act liability.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-xl sm:text-2xl font-black text-amber-400 font-mono">
                4% &ndash; 8%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Reseller Gross Margin
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-xl sm:text-2xl font-black text-red-400 font-mono">
                100% USD
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Non-Recourse Hyperscaler Debt
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-xl sm:text-2xl font-black text-slate-100 font-mono">
                168 Hours
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                MS NCE Lock-In Cutoff
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                Order XXXVII
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Summary Decree on APIs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CloudResellerRecoveryTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Asymmetric Risk Trap */}
            <section
              id="heading-asymmetric-risk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Business Model &amp; Statutory Risk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Asymmetric CSP Risk Trap: Thin Margins vs. Unconditional Hyperscaler Debt
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                In the Indian enterprise technology ecosystem, Cloud Solution Providers (CSPs), AWS Premier / Advanced Consulting Partners, Google Cloud Premier Resellers, and Software Value Added Resellers (VARs) operate under an inherently asymmetric risk structure. Resellers capture between 4% and 8% gross margin on cloud infrastructure consumption and SaaS seat licensing. Yet under their upstream partner agreements with Amazon Web Services Inc., Microsoft Corporation, and Google Cloud, <strong>the reseller is 100% unconditionally liable as principal debtor</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-bold text-red-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    Non-Recourse Upstream Hyperscaler Agreements
                  </p>
                  <p className="text-xs text-red-900/90 leading-relaxed">
                    Under the Microsoft Cloud Solution Provider (CSP) agreement and AWS APN Reseller contracts, credit risk is non-transferable. If an Indian fintech, gaming company, or venture-funded AI startup defaults on a ₹50,000,000 monthly GPU compute bill, AWS and Microsoft debit the reseller&apos;s corporate credit facility or demand USD wire remittances. Non-payment triggers channel termination, stripping partner tier status and accreditation.
                  </p>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Microsoft NCE 168-Hour Non-Cancellable Lock-In
                  </p>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    With the rollout of Microsoft New Commerce Experience (NCE), annual commitment licenses (Microsoft 365 E3/E5, Dynamics 365, GitHub Enterprise, Copilot) are legally locked after exactly 168 hours (7 days). If an enterprise customer shuts down or lays off 80% of its workforce 3 months into the contract, Microsoft continues billing the Indian CSP monthly for 100% of the committed seats. Resellers cannot cancel or downgrade unallocated seats.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                When enterprise or startup buyers delay or refuse payment, traditional civil litigation (which takes 3 to 6 years) is lethal to the reseller&apos;s working capital. Overdue receivables quickly outstrip entire annual gross profits. Reseller CFOs must deploy aggressive, specialized statutory remedies: invoking Section 128 director guarantees, freezing debtor bank accounts through Commercial Court Order XXXVII suits, and initiating urgent MSEFC statutory arbitration under the{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  MSMED Act Section 16 compound interest provisions
                </Link>
                .
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <p className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                    Statutory Rule of Commercial Pass-Through
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit) read with Section 55 of the Sale of Goods Act, 1930, a client that consumes computational power, bandwidth, or licensed software seats via authenticated API credentials enjoys non-gratuitous benefits. They are legally estopped from asserting &apos;dissatisfaction with cloud performance&apos; as a defense against paying pass-through telemetry charges.
                </p>
              </div>
            </section>

            {/* Section 2: Escalation Protocol & SVG */}
            <section
              id="heading-escalation-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Operational Roadmap
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operational Escalation Protocol: From Telemetry Anomaly to Garnishee Order
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Recovering unpaid cloud invoices requires synchronizing automated technical safeguards with statutory legal levers. Waiting 90 days before legal escalation ensures the debtor burns their entire cash reserve or liquidates venture assets. Follow this 5-stage institutional recovery protocol:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block mb-8 bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
                  Cloud Creditor Enforcement Decision Tree &bull; Technical &amp; Statutory Flow
                </p>
                <div className="w-full flex justify-center">
                  <svg
                    viewBox="0 0 760 380"
                    width={760}
                    height={380}
                    className="w-full h-auto max-w-2xl text-xs"
                  >
                    {/* Background Gradients & Filters */}
                    <defs>
                      <linearGradient id="cloudBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#991B1B" />
                        <stop offset="100%" stopColor="#DC2626" />
                      </linearGradient>
                    </defs>

                    {/* Flow Paths / Arrows */}
                    <path d="M 120 70 L 120 120" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 120 180 L 120 230" stroke="#475569" strokeWidth="2" />
                    <path d="M 200 150 L 260 150" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 380 150 L 440 150" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 560 150 L 620 150" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 500 180 L 500 230" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Step 1: Telemetry Monitoring */}
                    <rect x="40" y="20" width="160" height="50" rx="8" fill="url(#cloudBoxGrad)" stroke="#334155" strokeWidth="1.5" />
                    <text x="120" y="42" fill="#94A3B8" textAnchor="middle" fontWeight="bold" fontSize="10">STAGE 1</text>
                    <text x="120" y="58" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">Telemetry &amp; Cost Alerts</text>

                    {/* Step 2: Grace Period Expiry */}
                    <rect x="40" y="120" width="160" height="60" rx="8" fill="url(#cloudBoxGrad)" stroke="#334155" strokeWidth="1.5" />
                    <text x="120" y="142" fill="#94A3B8" textAnchor="middle" fontWeight="bold" fontSize="10">STAGE 2</text>
                    <text x="120" y="158" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">Credit Limit Exceeded</text>
                    <text x="120" y="172" fill="#F59E0B" textAnchor="middle" fontSize="9">Grace Period Expired</text>

                    {/* Step 3: Console Suspension */}
                    <rect x="260" y="120" width="160" height="60" rx="8" fill="url(#cloudBoxGrad)" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="340" y="142" fill="#F87171" textAnchor="middle" fontWeight="bold" fontSize="10">STAGE 3</text>
                    <text x="340" y="158" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">48-Hr Egress Notice</text>
                    <text x="340" y="172" fill="#FCA5A5" textAnchor="middle" fontSize="9">IAM Console Suspension</text>

                    {/* Step 4: Advocate Notice */}
                    <rect x="440" y="120" width="160" height="60" rx="8" fill="url(#alertGrad)" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="520" y="142" fill="#FEE2E2" textAnchor="middle" fontWeight="bold" fontSize="10">STAGE 4</text>
                    <text x="520" y="158" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">Advocate Demand Notice</text>
                    <text x="520" y="172" fill="#FEE2E2" textAnchor="middle" fontSize="9">Director Guarantee Invoked</text>

                    {/* Step 5: Commercial Court Decree */}
                    <rect x="620" y="120" width="120" height="60" rx="8" fill="url(#cloudBoxGrad)" stroke="#10B981" strokeWidth="1.5" />
                    <text x="680" y="142" fill="#34D399" textAnchor="middle" fontWeight="bold" fontSize="10">STAGE 5</text>
                    <text x="680" y="158" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">Order XXXVII</text>
                    <text x="680" y="172" fill="#6EE7B7" textAnchor="middle" fontSize="9">Bank Garnishee</text>

                    {/* Side Stage: MSME Samadhaan Track */}
                    <rect x="440" y="230" width="160" height="55" rx="8" fill="url(#cloudBoxGrad)" stroke="#10B981" strokeWidth="1.5" />
                    <text x="520" y="252" fill="#34D399" textAnchor="middle" fontWeight="bold" fontSize="10">PARALLEL REMEDY</text>
                    <text x="520" y="268" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">MSEFC 3x Interest</text>
                    <text x="520" y="280" fill="#94A3B8" textAnchor="middle" fontSize="9">MSMED Act s.18 Filing</text>

                    {/* Pre-Emptive Audit Footer */}
                    <rect x="40" y="230" width="160" height="55" rx="8" fill="url(#cloudBoxGrad)" stroke="#334155" strokeWidth="1.5" />
                    <text x="120" y="252" fill="#94A3B8" textAnchor="middle" fontWeight="bold" fontSize="10">EVIDENCE ANCHOR</text>
                    <text x="120" y="268" fill="#F8FAFC" textAnchor="middle" fontWeight="bold" fontSize="11">BSA 2023 s.63 Dossier</text>
                    <text x="120" y="280" fill="#CBD5E1" textAnchor="middle" fontSize="9">SHA-256 API Log Hashes</text>
                  </svg>
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 1 &bull; Automated Anomaly Trigger
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    Real-Time AWS/Azure Telemetry Hook
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Connect billing APIs to track burn rates daily. Immediate alert sent at 80% credit utilization.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    Stage 2 &bull; Demand on Promoter Guarantee
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    Grace Period Expiry Notice
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Trigger joint and several liability under Contract Act Section 128 against individual directors.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 3 &bull; Lawful Console Suspension
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    48-Hour Data Egress Notice
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Provide formal backup window, then pause compute and suspend CSP tenant without cyber-trespass liability.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    Stage 4 &bull; Advocate Statutory Demand
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    Order 37 &amp; MSMED Act Demand
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Demand immediate principal plus 3x RBI compound penal interest with 7-day cure window.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    Stage 5 &bull; Court Attachment &amp; Freeze
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    Order XXXVIII Rule 5 Garnishee
                  </p>
                  <p className="text-xs text-slate-400">
                    Freeze client bank accounts and venture escrow funds prior to asset dissipation.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Why Speed is Everything:</strong> Unlike software development or staff augmentation debts where work can simply be halted, cloud meters run continuously. An unmonitored LLM fine-tuning job or crypto-miner can consume ₹10 Lakhs in 48 hours. By moving immediately from Stage 2 to Stage 3 console lockdown, the reseller cuts future bleeding before executing Stage 4 and Stage 5 judicial recovery.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory & Judicial Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Statutory Comparison
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory &amp; Judicial Enforcement Grid for Cloud Resellers &amp; VARs
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Cloud consumption receivables are liquidated monetary obligations. Because cloud resources are metered automatically by independent hyperscaler APIs, debtor defenses alleging &apos;substandard deliverables&apos; fall apart. The table below details how Indian statutory provisions enforce recovery:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Statute &amp; Legal Forum</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Prerequisite Evidence</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Statutory Timeline</th>
                      <th className="p-3 sm:p-4 font-bold">Creditor Strategic Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Order XXXVII CPC<br />
                        <span className="text-[11px] font-normal text-slate-500">Commercial Summary Suit</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Signed MSA / Order Form, unrefuted monthly billing invoices, and API telemetry logs.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Defendant must apply for Leave to Defend within 10 days of summons.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Defendant must deposit 50% to 100% of the admitted debt in court to defend, preventing frivolous delays.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        MSMED Act 2006<br />
                        <span className="text-[11px] font-normal text-slate-500">Sections 15, 16 &amp; 18 (MSEFC)</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Udyam Registration Certificate obtained prior to cloud service provisioning dates.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Statutory 45-day payment ceiling; MSEFC conciliation within 90 days.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Mandates 3x RBI Bank Rate compound interest. Buyer must pre-deposit 75% under Section 19 to challenge award.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Contract Act 1872<br />
                        <span className="text-[11px] font-normal text-slate-500">Section 128 (Surety Liability)</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Executed Personal Deed of Guarantee signed by startup directors / promoters.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Actionable immediately upon corporate buyer default.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Pierces corporate veil. Allows simultaneous civil action and attachment of founder personal bank accounts and real estate.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Income Tax Act 1961<br />
                        <span className="text-[11px] font-normal text-slate-500">Section 43B(h)</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Udyam Micro/Small status declared on cloud invoices and email communications.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Fiscal year-end (March 31) statutory tax audit filing cutoff.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Corporate buyers face permanent disallowance of cloud expenses from taxable income, triggering severe corporate tax penalties.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Order XXXVIII Rule 5 CPC<br />
                        <span className="text-[11px] font-normal text-slate-500">Attachment Before Judgment</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Proof of imminent startup shutdown, founder flight risk, or asset dissipation.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Ex-parte interim emergency hearing within 48 to 72 hours.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Immediate court injunction freezing remaining venture capital in debtor&apos;s bank accounts or escrow before disbursement.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                <strong>Strategic Insight for Cloud Reseller CFOs:</strong> Under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015, cloud hosting, software licensing, and hardware leasing disputes qualify as &apos;Commercial Disputes&apos;. Where there is an urgent flight risk or asset dissipation, resellers can bypass mandatory Section 12A pre-institution mediation by filing for urgent interim relief under Order XXXVIII Rule 5 or Section 9 of the Arbitration and Conciliation Act, 1996.
              </div>
            </section>

            {/* Section 4: 4 Failure Modes Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Commercial Failure Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                4 Critical Cloud Default Scenarios &amp; Tailored CFO Recovery Strategies
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Explore the 4 most common failure modes where Indian cloud resellers and software VARs suffer massive capital erosion. Select each scenario tab to view the defaulting debtor&apos;s pretext, the governing statutory reality, and the step-by-step enforcement protocol:
              </p>

              <CloudResellerScenarioTabs />
            </section>

            {/* Section 5: Lawful Console Suspension Protocol */}
            <section
              id="heading-console-suspension"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Technical-Legal Safeguard
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Lawful IAM Console Lockdown: De-Provisioning Without Cyber-Trespass Liabilities
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The most acute dilemma for a cloud reseller is whether they can lawfully pull the plug on a defaulting client&apos;s AWS EC2 cluster or Azure tenant. Inexperienced resellers often fear that shutting down compute will expose them to counter-claims under Section 43 (Damage to Computer Systems) and Section 66 (Hacking/Data Tampering) of the Information Technology Act, 2000, or criminal breach of trust under the Bharatiya Nyaya Sanhita, 2023 (BNS).
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Under settled Indian cyber-law jurisprudence, shutting down resources does <strong>not</strong> constitute an offense if executed pursuant to explicit contractual authority. To insulate your engineering and executive leadership from civil or criminal liability, strictly adhere to this 4-step lockdown procedure:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Enforce Contractual &apos;Suspension for Non-Payment&apos; Covenants
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Confirm your Master Cloud Agreement includes an explicit clause: <em>&apos;Upon failure to remit undisputed monthly invoices within 15 calendar days of issuance, the Reseller retains the absolute right to suspend, throttle, or terminate cloud services without further notice, and Reseller shall have zero liability for consequential data loss or service disruption.&apos;</em>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Serve a Mandatory 48-Hour Data Egress &amp; Backup Window Notice
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Send a formal written notice via registered email and WhatsApp stating: <em>&apos;Unless outstanding payment of ₹X is cleared by [Date &amp; Time], all compute instances will be stopped and VPC routing isolated. You are hereby granted 48 hours to complete full database snapshots and external data egress. Reseller shall not be liable for un-exported data.&apos;</em> This notice obliterates bad-faith tort claims.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Execute Tiered Technical Throttling (Stop vs. Terminate)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never permanently delete (terminate) EBS volumes or S3 buckets immediately. First, <strong>Stop</strong> EC2 instances (stopping hourly compute costs while retaining root volumes) and revoke customer IAM write policies. Place the client into read-only quarantine. This protects critical evidence under Section 63 of the BSA while preventing ongoing hyperscaler charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Re-Allocation Contingent on Full Funds Realization
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Do not restore cloud access against promise notes, post-dated cheques, or verbal assurances from investors. Require 100% cleared RTGS settlement of overdue invoices plus a mandatory advance security deposit covering 60 days of anticipated future run-rate before re-activating compute.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <strong>Precautionary Warning on Multi-Tenant Reseller Architectures:</strong> If you host multiple clients in a shared AWS Organization or Azure Management Group, ensure network security groups (NSGs) and SCPs (Service Control Policies) isolate the delinquent account without impacting other compliant customers. Never execute global policy changes that cause collateral downtime for innocent tenants.
              </div>
            </section>

            {/* Section 6: Personal Director Guarantees */}
            <section
              id="heading-director-guarantees"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Corporate Veil Piercing
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Enforcing Personal Director Guarantees on Uncapped Postpaid Cloud Consumption
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Indian startup corporate structure is designed to shield founders from financial catastrophe through limited liability. When an early-stage startup burns through ₹40 Lakhs of cloud GPU credits and fails to close its next funding round, founders simply walk away, dissolve the private limited company, or initiate voluntary liquidation under the Insolvency and Bankruptcy Code, 2016 (IBC).
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                A standard corporate contract leaves the reseller standing as an unsecured operational creditor with near-zero recovery odds under IBC waterfall priority. The ultimate commercial shield for cloud resellers is obtaining an <strong>Unconditional Continuing Personal Guarantee Deed</strong> signed by the executive directors upon customer credit onboarding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Section 128 Indian Contract Act: Co-Extensive Liability
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 128 of the Indian Contract Act, 1872, the liability of the surety (guarantor) is co-extensive with that of the principal debtor, unless provided otherwise by contract. As held by the Supreme Court of India in <em>State Bank of India v. V. Ramakrishnan</em>, a creditor is <strong>not</strong> required to exhaust remedies against the corporate borrower before proceeding directly against the personal guarantor.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    IBC Moratorium Does Not Shield Personal Guarantors
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if the startup files for insolvency or is admitted into Corporate Insolvency Resolution Process (CIRP) under Section 7 or 9 of the IBC, Section 14 moratorium protections do <strong>not</strong> apply to personal guarantors. Resellers can simultaneously prosecute the individual directors before the National Company Law Tribunal (NCLT) or the competent Commercial Court.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Essential Clauses for Cloud Reseller Director Guarantees
                </p>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  <li><strong>Continuing Guarantee Clause:</strong> Covers all future postpaid billing cycles, instance additions, and license commitments up to a specified credit ceiling without requiring novation.</li>
                  <li><strong>Unconditional Waiver of Notice:</strong> Explicitly waives the surety&apos;s right under Section 133–139 of the Contract Act to be discharged upon variations in cloud instances or payment extensions.</li>
                  <li><strong>Joint &amp; Several Personal Undertaking:</strong> Renders each signatory director individually liable for 100% of the accumulated cloud liabilities plus compound interest and advocate recovery fees.</li>
                  <li><strong>Submission to Jurisdiction &amp; Fast-Track Arbitration:</strong> Designates exclusive Commercial Court jurisdiction in the reseller&apos;s home city (e.g., Bengaluru, Gurugram, Mumbai).</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Worked Financial Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Financial Recovery Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Recovery Ledger: ₹54.80 Lakh Enterprise Hyperscaler Default
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Consider an Indian AWS Premier Tier &amp; Microsoft Direct CSP Partner headquartered in Bengaluru. An AI SaaS startup defaults on 2 months of high-performance GPU compute (AWS EC2 p4d instances) and 8 remaining months of an annual Microsoft NCE Microsoft 365 Copilot commitment. The worked claim ledger below illustrates the total claimable capital:
              </p>

              {/* Financial Ledger Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Claim Component &amp; Statutory Basis</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Computation Methodology</th>
                      <th className="p-3 sm:p-4 font-bold text-right">Claim Amount (&rupee;)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        AWS EC2 GPU Cluster &amp; S3 Storage Invoices<br />
                        <span className="text-[11px] font-normal text-slate-500">Signed Order Form + Verified AWS CUR Telemetry</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        2 monthly billing cycles (Oct–Nov 2026) of p4de.24xlarge on-demand compute.
                      </td>
                      <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">
                        ₹38,50,000
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Microsoft NCE Unexpired 8-Month Seat Commitments<br />
                        <span className="text-[11px] font-normal text-slate-500">Indian Contract Act 1872 s.39 &amp; s.73 Direct Damages</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        50 Copilot seats committed for 12 months, defaulted at Month 4 (8 months &times; ₹1,20,000/mo).
                      </td>
                      <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">
                        ₹9,60,000
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        Hyperscaler Foreign Remittance Outlay &amp; FX Loss<br />
                        <span className="text-[11px] font-normal text-slate-500">Foreign Exchange Management Act (FEMA) Outflow</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Bank TT telegraphic transfer charges, GST on reverse charge (RCM), and USD-INR hedging spread.
                      </td>
                      <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">
                        ₹2,20,000
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                        MSMED Act Section 16 Compound Penal Interest<br />
                        <span className="text-[11px] font-normal text-slate-500">3x RBI Bank Rate (6.75% &times; 3 = 20.25% p.a. monthly compound)</span>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                        Accrued interest across 120 days of default on principal sum.
                      </td>
                      <td className="p-3 sm:p-4 text-right font-mono font-bold text-emerald-600">
                        ₹4,50,000
                      </td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td className="p-3 sm:p-4 border-r border-slate-800" colSpan={2}>
                        TOTAL STATUTORY CLAIM AMOUNT (Principal + Damages + MSME Compound Interest)
                      </td>
                      <td className="p-3 sm:p-4 text-right font-mono text-emerald-400 text-sm sm:text-base">
                        ₹54,80,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-1">
                    CFO Recovery Outcome via Advocate Demand
                  </p>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    By issuing an immediate Fact-Verified Notice asserting Order 37 summary debt and invoking the founder&apos;s personal guarantee, the reseller recovered ₹42,00,000 via upfront RTGS wire within 14 days, with the balance structured under a registered escrow charge against the startup&apos;s receivables.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-950 uppercase tracking-wider mb-1">
                    Cost of Inaction &amp; Traditional Civil Suit
                  </p>
                  <p className="text-xs text-red-800 leading-relaxed">
                    Had the reseller relied on standard email reminders and a sluggish ordinary money suit, the startup would have depleted its capital within 90 days, leaving the reseller to write off ₹54.8 Lakhs in out-of-pocket USD losses—erasing their entire cloud practice margin for the quarter.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 Evidence Checklist */}
            <section
              id="heading-bsa-telemetry-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Electronic Evidence Compliance
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Cloud Telemetry, API Logs &amp; Immutable Billing Dossier
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, 1872 effective July 1, 2024, electronic records are admissible only when accompanied by a compliant Certificate under <strong>Section 63</strong> (corresponding to former Section 65B). Because cloud services leave zero physical delivery challans, your electronic audit trail is your entire case. Prepare this 7-pillar technical evidence dossier:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Cryptographic AWS / Azure CUR Billing Reports:</strong> Raw CSV/Parquet dumps from AWS Cost and Usage Reports (CUR) or Azure Cost Management APIs, secured with a SHA-256 cryptographic hash calculated immediately upon billing generation.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>CloudTrail &amp; Azure ARM Event Activity Logs:</strong> Immutable JSON audit logs proving that compute instances, database clusters, and API calls were provisioned using the client&apos;s authenticated IAM access keys and IP addresses.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Microsoft Partner Center Subscription Records:</strong> Official tenant order confirmation logs and seat allocation manifests reflecting the precise date, time, and 12-month commitment tenure under the Microsoft NCE framework.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Master Cloud Resale Agreement &amp; Personal Guarantee Deed:</strong> Executed contract with explicit cloud billing terms, payment milestones, personal director undertakings, and exclusive home jurisdiction clauses.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Registered SMTP Transmission &amp; Egress Notices:</strong> Email server delivery logs, Read Receipts, and WhatsApp Business API delivery webhooks proving that invoices and the 48-hour suspension warning were duly served.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>GST Portal Filings (GSTR-1 &amp; GSTR-3B):</strong> Government tax portal filings showing the reseller remitted 18% IGST/CGST on the invoiced cloud consumption to the exchequer, proving the debt was formally recognized and reported.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>BSA Section 63 Electronic Evidence Certificate:</strong> A formal affidavit executed by the Cloud Systems Architect or VP Infrastructure certifying the continuous normal functioning of the billing servers and telemetry logging environment.
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                When backed by this 7-pillar electronic dossier, debtor defense arguments claiming &apos;disputed usage&apos; or &apos;unauthorized cloud spin-ups&apos; are summarily rejected by Commercial Court judges under Order XXXVII, clearing the path for an immediate summary decree.
              </p>
            </section>

            {/* Section 9: Dual B2B Conversion Funnel */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-red-400">
                  Direct Institutional Recovery Action
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Stop Paying Hyperscalers Out of Pocket: Activate Your Institutional Cloud Recovery Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Whether you need to serve a fast-track statutory legal notice on a single runaway AI startup default or upload an enterprise CSV ledger of 500+ aging VAR invoices, our team desk provides end-to-end recovery enforcement across India.
              </p>

              <CloudResellerRecoveryCTA />
            </section>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Executive Knowledge Base
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions: Cloud Reseller Receivables &amp; Partner Defaults
              </h2>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer select-none">
                      <span className="flex items-center gap-2.5">
                        <span className="text-[#DC2626] font-mono text-xs">Q{idx + 1}.</span>
                        <span>{item.q}</span>
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Sources & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, Binding Precedents &amp; Legal Citations
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                All legal strategies outlined in this guide are derived strictly from binding statutes and landmark judgments of the Supreme Court of India and High Courts:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                  <p className="text-xs font-bold text-slate-900">
                    State Bank of India v. V. Ramakrishnan &amp; Anr. (2018) 17 SCC 394 (Supreme Court of India)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Affirmed that the moratorium under Section 14 of the Insolvency and Bankruptcy Code, 2016 does not extend to personal guarantors of a corporate debtor. Creditors can proceed simultaneously against guarantor assets under Section 128 of the Indian Contract Act.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                  <p className="text-xs font-bold text-slate-900">
                    Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1 (Supreme Court of India)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Held that pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 is mandatory except when urgent interim relief (such as Order XXXVIII Rule 5 asset freeze or Order 39 injunction) is expressly prayed for.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                  <p className="text-xs font-bold text-slate-900">
                    Silpi Industries v. Kerala State Road Transport Corporation (2021) 18 SCC 790 (Supreme Court of India)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Confirmed that the statutory override of the MSMED Act, 2006 supersedes contractual arbitration and jurisdiction clauses, entitling registered Micro/Small suppliers to claim 3x compound interest from default date.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                  <p className="text-xs font-bold text-slate-900">
                    Raman Tech &amp; Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302 (Supreme Court of India)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Settled the evidentiary standards for Order XXXVIII Rule 5 attachment before judgment, holding that court orders must issue where debtor entities attempt to defeat decrees by dissipating capital or liquidating bank accounts.
                  </p>
                </div>
              </div>

              {/* Author & Reviewer Attribution Box */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Fact Verification &amp; Statutory Guidance:
                  </p>
                  <p className="text-xs text-slate-600">
                    Authored by the LegalRecovery B2B Technology &amp; Cloud Practice Group under direction of{" "}
                    <strong>{ADVOCATE_NAME}</strong>, {ADVOCATE_ROLE}.
                  </p>
                </div>
                <Link
                  href="/industries/it-saas-software-recovery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-red-700 transition-colors"
                >
                  <span>Explore All IT &amp; SaaS Guides</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
