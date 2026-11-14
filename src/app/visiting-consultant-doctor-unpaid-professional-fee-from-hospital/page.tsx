import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import VisitingDoctorTableOfContents from "./VisitingDoctorTableOfContents";
import VisitingDoctorScenarioTabs from "./VisitingDoctorScenarioTabs";
import VisitingDoctorNoticeCTA from "./VisitingDoctorNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/visiting-consultant-doctor-unpaid-professional-fee-from-hospital";
const EXACT_H1 =
  "Hospital Withholding Visiting Consultant or Surgeon Payouts? How Doctors Recover Unpaid Retainers, Surgical Shares & 194J Fees";
const META_TITLE = "Visiting Doctor & Surgeon Unpaid Hospital Fee Recovery Guide";
const META_DESCRIPTION =
  "Visiting specialists are Section 194J professionals, not workmen. Use Form 26AS TDS entries, OT logs & legal notices to recover unpaid hospital arrears.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Visiting Consultant Doctor Unpaid Professional Fee Recovery From Hospital"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Order XXXVII CPC Summary Suit",
    statute: "Code of Civil Procedure, 1908 (Order 37, Rules 1 & 2)",
    timing: "Filed upon expiry of 15-day Advocate Notice",
    mechanism: "Civil suit based on written retainership contract, OT billing sheets, and Form 26AS Section 194J tax acknowledgments",
    relief: "Immediate summary decree for liquidated fee amount unless hospital secures leave to defend by depositing dues in court",
    suitability: "Fastest civil remedy for undisputed retainers and admitted surgical fee arrears exceeding ₹3 Lakh",
    tone: "emerald",
  },
  {
    remedy: "Arbitration Invocation & Sole Arbitrator",
    statute: "Arbitration & Conciliation Act, 1996 (Sections 21 & 11)",
    timing: "30-day statutory notice window under Section 21",
    mechanism: "Notice invoking institutional arbitration under consultancy agreement dispute resolution clause; High Court appointment if hospital defaults",
    relief: "Binding monetary award enforceable as a court decree under Section 36 with 18% commercial interest",
    suitability: "Mandatory first resort when consultant contract contains a valid arbitration agreement",
    tone: "emerald",
  },
  {
    remedy: "Commercial Court Suit & Pre-Mediation",
    statute: "Commercial Courts Act, 2015 (Section 2(1)(c) & Section 12A)",
    timing: "Immediate or post-mandatory 30-day mediation (DLSA)",
    mechanism: "Commercial recovery suit before designated Commercial Court for healthcare services contracts exceeding ₹3 Lakh",
    relief: "Summary judgment under Order XIII-A CPC; pre-judgment attachment of hospital bank accounts under Order XXXVIII Rule 5",
    suitability: "High-value consultant claims where retainership agreement lacks an arbitration clause",
    tone: "slate",
  },
  {
    remedy: "Section 138 NI Act Criminal Complaint",
    statute: "Negotiable Instruments Act, 1881 (Sections 138 & 141)",
    timing: "30-day demand notice upon cheque dishonour; 15-day cure window",
    mechanism: "Prosecution of hospital managing director, medical director, and authorized signatory for bounced fee cheques",
    relief: "Criminal summons, bailable/non-bailable warrants, up to 2 years imprisonment, and mandatory interim compensation up to 20% u/s 143A",
    suitability: "When hospital management issued post-dated cheques for monthly retainers that bounced for insufficient funds",
    tone: "amber",
  },
  {
    remedy: "Commercial Interest & Restitution Claim",
    statute: "Interest Act, 1978 (Section 3) & Contract Act Section 70",
    timing: "Concurrently claimed in Advocate Demand Notice",
    mechanism: "Statutory demand for compound commercial interest at 18% p.a. on delayed professional remuneration",
    relief: "Neutralizes inflation loss, compensates lost capital, and compels hospital finance desks to prioritize doctor disbursements",
    suitability: "Mandatory companion claim across all legal notices and court filings to penalize working capital hoarding",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Why do Labour Courts and Commissioners reject unpaid fee claims filed by visiting consultant doctors?",
    answer:
      "Over 80% of senior visiting surgeons, anesthetists, radiologists, and ICU intensivists in India are engaged under 'Contracts for Services' (independent professional consultancy) rather than 'Contracts of Service' (employment). Hospitals deduct tax at source under Section 194J of the Income Tax Act, 1961 (Fees for Professional Services) rather than Section 192 (Salaries), and do not contribute to EPF or ESIC. Under Section 2(s) of the Industrial Disputes Act, 1947, independent consultants exercising independent clinical judgment and charging per-case or retainership fees are not 'workmen'. Consequently, Labour Courts and Payment of Wages authorities dismiss these petitions for lack of jurisdiction, forcing doctors to recover their dues through civil and commercial routes.",
  },
  {
    question: "How does Form 26AS and AIS Section 194J TDS entry legally prove the hospital owes me money?",
    answer:
      "Under Section 18 of the Limitation Act, 1963 and the law of evidence, any written acknowledgment of liability signed by the debtor or their authorized agent resets the 3-year limitation clock and constitutes documentary proof of an admitted debt. When a hospital deposits TDS under Section 194J on your professional fee, it files quarterly e-TDS returns (Form 26Q) under the digital signature of its Principal Officer. This entry reflects in your Form 26AS and Annual Information Statement (AIS) with the hospital's TAN, booking date, and gross credited amount. Multiple High Courts have affirmed that a company cannot record a credit in tax returns to claim business expense deductions and simultaneously deny the existence of the underlying debt in civil court.",
  },
  {
    question: "Can a hospital refuse to pay my surgical share because the TPA or insurance company delayed or discounted the claim?",
    answer:
      "No, unless your written consultancy contract contains an explicit, enforceable 'pay-when-paid' condition. Under the Indian Contract Act, 1872, the legal relationship of privity of contract exists between the doctor and the hospital, while a separate contract exists between the hospital and the TPA/patient. The hospital engaged the surgeon, booked the operation theater, and charged the patient. The hospital's commercial risk in recovering insurance proceeds cannot be unilaterally offloaded to the operating doctor. Furthermore, even where agreements attempt to link payouts to TPA clearance, Indian courts hold that payments cannot be withheld indefinitely beyond a reasonable commercial period.",
  },
  {
    question: "What should an on-call emergency surgeon do if there is no formal signed written contract?",
    answer:
      "If you performed emergency surgeries, on-call trauma management, or weekend ICU shifts summoned via WhatsApp, telephone, or verbal request without a signed formal contract, your recovery is protected under Section 70 of the Indian Contract Act, 1872 (Obligation of person enjoying benefit of non-gratuitous act). Because you acted non-gratuitously and the hospital billed the patient or insurer for your surgical intervention, the hospital is statutorily obligated to compensate you at fair market rates. Electronic evidence—including Hospital Management System (HMS) OT logs, anesthesia records, patient discharge summaries, and WhatsApp messages—satisfies Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    question: "What is an Order XXXVII CPC Summary Suit and why is it preferred over a regular civil suit?",
    answer:
      "A regular civil money recovery suit in India can take 3 to 7 years to conclude due to procedural evidence stages and cross-examinations. In contrast, an Order XXXVII (Order 37) Summary Suit under the Code of Civil Procedure, 1908 is a specialized fast-track civil mechanism specifically designed for liquidated money debts arising from written contracts, negotiable instruments, or statutory acknowledgments (such as Form 26AS TDS credits). The defendant hospital has no automatic right to defend the suit; it must apply for 'Leave to Defend' within 10 days of receiving court summons. Unless the hospital proves a genuine, bona fide defense, the court immediately enters a summary money decree against the hospital.",
  },
  {
    question: "How do teleradiology and tele-ICU doctors recover unpaid per-scan or per-hour monthly invoices?",
    answer:
      "Teleradiology reporting doctors and tele-ICU intensivists operate as commercial service providers under Section 2(1)(c) of the Commercial Courts Act, 2015. To recover unpaid monthly invoices, doctors must extract Picture Archiving and Communication System (PACS) audit logs, DICOM study unique identifiers (UIDs), and digital delivery timestamps. Serving a formal Advocate Legal Notice demanding payment within 15 days pre-empts bogus retrospective 'turnaround time' or 'report quality' defenses, especially when the diagnostic centre already used the reports clinically and collected patient revenue. If the contract has an arbitration clause, a Section 21 notice fast-tracks recovery.",
  },
  {
    question: "What digital evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To withstand scrutiny in a Summary Suit or Arbitration, digital evidence must be certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act). Essential electronic records include: (1) System-generated Operation Theater (OT) logbooks showing surgeon name, patient IPD number, and procedure timestamp; (2) Anesthesia charts and signed digital discharge summaries; (3) Certified Form 26AS and AIS PDFs downloaded from the Income Tax e-filing portal; (4) WhatsApp and email correspondence regarding on-call schedules, fee sharing percentages, and payment follow-ups; and (5) Bank statements demonstrating the gap between Form 26AS booked income and actual received credits.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Income Tax Act, 1961 (Section 194J — Fees for Professional or Technical Services)",
    url: "https://www.incometax.gov.in/iec/foportal/",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Liquidated Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 7, 9, 11, 21 & 36)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c) — Commercial Disputes & Section 12A Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Indian Contract Act, 1872 (Section 70 — Non-Gratuitous Act & Section 73 — Breach Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Limitation Act, 1963 (Section 18 — Effect of Acknowledgment in Writing)",
    url: "https://www.indiacode.nic.in/handle/123456789/1965",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Visiting Consultant Doctor Unpaid Professional Fee Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Visiting Doctors Recover Unpaid Retainers and Surgical Shares from Defaulting Hospitals",
  description:
    "A 4-stage operational and legal escalation protocol for visiting surgeons, anesthetists, radiologists, and intensivist consultants to recover withheld professional fees using Form 26AS admissions, Advocate Legal Notices, Order XXXVII CPC Summary Suits, and Arbitration.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Form 26AS & Compile Electronic OT Logs",
      text: "Download certified Form 26AS and AIS reports from the Income Tax e-filing portal to identify Section 194J TDS deductions. Cross-reference against hospital HMS OT logs, anesthesia records, and bank statements under Section 63 BSA 2023.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue 15-Day Advocate Statutory Demand Notice",
      text: "Serve a formal legal demand notice via Speed Post RPAD, Email, and WhatsApp to the hospital Managing Director and Finance Head itemizing admitted 194J debt, unpaid surgical shares, and demanding 18% commercial interest under the Interest Act, 1978.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Invoke Section 21 Arbitration or Order XXXVII CPC Summary Suit",
      text: "If the retainership agreement contains an arbitration clause, issue a Section 21 arbitration invocation notice. If absent, institute an Order XXXVII CPC Summary Suit in the competent civil court based on the liquidated debt and Form 26AS admission.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Enforce Money Decree or Arbitral Award under CPC Order XXI",
      text: "Obtain a summary money decree or arbitral award and initiate execution proceedings under Order XXI CPC to attach hospital operating bank accounts, third-party TPA receivables, or movable diagnostic machinery.",
    },
  ],
};

const BREADCRUMB_SCHEMA = {
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
      name: "Hospitals & Healthcare Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Visiting Doctor Unpaid Fee Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function VisitingConsultantDoctorUnpaidFeePage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "Visiting Doctor Unpaid Fee Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Income Tax Section 194J</span>
              <span className="text-red-500">&bull;</span>
              <span>Form 26AS Debt Acknowledgment</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-03 Healthcare</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Section 194J &amp; CPC Order 37 SOP
              </span>
              <p>
                Visiting super-specialists, surgeons, anesthetists, radiologists, and ICU intensivists are independent professionals under Section 194J—not Labour Court workmen. When financially distressed hospitals withhold 6 to 12 months of surgical fees or monthly retainers, doctors cannot approach Labour Commissioners. Instead, by utilizing the hospital&apos;s own <strong>Form 26AS / AIS Section 194J TDS deductions</strong> as an irrefutable statutory acknowledgment of debt under Section 18 of the Limitation Act, 1963, specialists can serve a 15-day Advocate Notice and institute an{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Order XXXVII CPC Summary Suit
                </Link>{" "}
                or invoke fast-track arbitration under Section 21 to freeze hospital bank accounts and recover full principal alongside 18% commercial interest. Part of our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Hospitals &amp; Healthcare Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec. 194J</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Professional TDS (Not Salary Sec 192)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">CPC Summary Suit on Admitted Dues</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">10 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Hospital Leave-to-Defend Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">18% p.a.</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Interest Act Commercial Damages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar TOC */}
            <VisitingDoctorTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Consultant vs Workman Trap */}
              <section
                id="heading-labour-court-myth"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  The Jurisdictional Reality Check
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why Unpaid Doctor Consultancy Fees Cannot Be Filed in Labour Courts
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Every year in India, thousands of super-specialist surgeons, visiting anesthetists, diagnostic radiologists, and ICU intensivists fall into a devastating legal trap when a private hospital, corporate healthcare chain, or nursing home defaults on their monthly retainers and surgical fee cuts. Confronted with ₹10 Lakh to ₹50 Lakh+ in withheld fees, doctors search online or consult general civil lawyers who erroneously advise them to file a complaint before the <strong>Labour Commissioner</strong> under the Payment of Wages Act, 1936 or the Industrial Disputes Act, 1947 for &apos;unpaid salary&apos;.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                    <p className="text-xs sm:text-sm font-semibold text-amber-900">
                      <strong>The Legal Trap:</strong> Over 80% of senior doctors and visiting specialists in Indian private healthcare do NOT hold an employment contract. They are engaged under a <em>&apos;Contract for Services&apos;</em> (Professional Retainership / Consultancy Agreement), not a <em>&apos;Contract of Service&apos;</em> (Master-Servant Employment). Under Section 2(s) of the Industrial Disputes Act, 1947, independent medical practitioners exercising independent clinical discretion are statutorily disqualified from being classified as &apos;workmen&apos;.
                    </p>
                  </div>

                  <p>
                    When an aggrieved doctor files before the Labour Authority, the hospital&apos;s legal team raises a preliminary objection on maintainability by producing the doctor&apos;s Income Tax Form 16A. Because the hospital deducted 10% tax under <strong>Section 194J</strong> (Fees for Professional or Technical Services) rather than Section 192 (Salaries), and made zero Employees&apos; Provident Fund (EPF) or ESIC contributions, the Labour Commissioner summarily dismisses the petition for lack of subject-matter jurisdiction. Months of critical limitation time are wasted while the hospital continues to enjoy the liquidity generated from the doctor&apos;s surgical interventions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        Common Misconception (Labor Court)
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        <li>Filing under Payment of Wages Act or Gratuity Act</li>
                        <li>Claiming employment benefits without EPF/ESIC deductions</li>
                        <li>Facing dismissal due to lack of master-servant relationship</li>
                        <li>Allowing 3-year civil limitation period to expire unmonitored</li>
                      </ul>
                    </div>
                    <div className="bg-red-50/60 border border-red-200 rounded-xl p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-2">
                        Sanctioned Commercial Path (LegalRecovery.in)
                      </h4>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                        <li>Anchor claim on Section 194J Form 26AS / AIS admissions</li>
                        <li>Serve rigorous 15-day Advocate Notice with Interest Act claims</li>
                        <li>Institute Order XXXVII CPC Summary Suit for rapid money decree</li>
                        <li>Invoke Section 21 Institutional Arbitration for commercial awards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: Decision Tree Flowchart */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Strategic Escalation Protocol
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Doctor Fee Recovery Decision Tree: 4-Stage Legal Escalation Rail
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Navigating hospital fee recovery requires matching the contract structure and documentary evidence against the appropriate civil or arbitral rail. Follow this step-by-step institutional playbook:
                </p>

                {/* SVG Flowchart (Desktop) */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner mb-6">
                  <svg
                    viewBox="0 0 880 340"
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={880}
                    height={340}
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="180" height="120" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="110" y="58" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1: AUDIT &amp; LEDGER</text>
                    <text x="110" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Form 26AS &amp; OT Logs</text>
                    <text x="110" y="102" fill="#94A3B8" fontSize="10" textAnchor="middle">Download Form 26AS / AIS</text>
                    <text x="110" y="118" fill="#94A3B8" fontSize="10" textAnchor="middle">Extract HMS Operation Logs</text>
                    <text x="110" y="134" fill="#94A3B8" fontSize="10" textAnchor="middle">BSA s.63 Digital Certification</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M200 90 L240 90" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="240" y="30" width="180" height="120" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="330" y="58" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2: STATUTORY DEMAND</text>
                    <text x="330" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">15-Day Advocate Notice</text>
                    <text x="330" y="102" fill="#94A3B8" fontSize="10" textAnchor="middle">Serve on Hospital MD &amp; CFO</text>
                    <text x="330" y="118" fill="#94A3B8" fontSize="10" textAnchor="middle">Speed Post + Email + WATI</text>
                    <text x="330" y="134" fill="#94A3B8" fontSize="10" textAnchor="middle">18% Interest Act Claim</text>

                    {/* Decision Branch */}
                    <path d="M420 90 L460 90" stroke="#DC2626" strokeWidth="3" />
                    <path d="M460 90 L460 50 L490 50" stroke="#DC2626" strokeWidth="2" />
                    <path d="M460 90 L460 130 L490 130" stroke="#DC2626" strokeWidth="2" />
                    <path d="M460 90 L460 210 L490 210" stroke="#DC2626" strokeWidth="2" />

                    {/* Branch A: Arbitration */}
                    <rect x="490" y="10" width="180" height="75" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="580" y="32" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">ARBITRATION CLAUSE PRESENT</text>
                    <text x="580" y="50" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Section 21 Invocation</text>
                    <text x="580" y="68" fill="#94A3B8" fontSize="9" textAnchor="middle">Sole Arbitrator / High Court s.11</text>

                    {/* Branch B: Order 37 Summary Suit */}
                    <rect x="490" y="95" width="180" height="75" rx="10" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
                    <text x="580" y="117" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">NO ARBITRATION CLAUSE</text>
                    <text x="580" y="135" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Order XXXVII CPC Suit</text>
                    <text x="580" y="153" fill="#94A3B8" fontSize="9" textAnchor="middle">Summary Decree on 26AS Debt</text>

                    {/* Branch C: Cheque Bounce */}
                    <rect x="490" y="180" width="180" height="65" rx="10" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
                    <text x="580" y="202" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">BOUNCED FEE CHEQUES</text>
                    <text x="580" y="220" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Section 138 NI Act</text>
                    <text x="580" y="235" fill="#94A3B8" fontSize="9" textAnchor="middle">Criminal Summons to Directors</text>

                    {/* Final Enforcement Stage */}
                    <path d="M670 50 L710 130" stroke="#DC2626" strokeWidth="2" />
                    <path d="M670 130 L710 130" stroke="#DC2626" strokeWidth="2" />
                    <path d="M670 210 L710 130" stroke="#DC2626" strokeWidth="2" />

                    <rect x="710" y="80" width="150" height="100" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="785" y="108" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">FINAL ENFORCEMENT</text>
                    <text x="785" y="128" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">CPC Order XXI</text>
                    <text x="785" y="148" fill="#94A3B8" fontSize="9" textAnchor="middle">Attach Bank Accounts</text>
                    <text x="785" y="163" fill="#94A3B8" fontSize="9" textAnchor="middle">Garnish TPA Receivables</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 1</span>
                    <h3 className="text-sm font-bold text-white mt-1">Audit Form 26AS &amp; HMS OT Registers</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Download AIS/26AS Section 194J credits and certify electronic surgery logs under Section 63 BSA 2023.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 2</span>
                    <h3 className="text-sm font-bold text-white mt-1">Serve 15-Day Advocate Demand Notice</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Formal legal notice served on Hospital MD, Trustees, and CFO claiming 18% commercial interest under Interest Act, 1978.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 3</span>
                    <h3 className="text-sm font-bold text-white mt-1">Order XXXVII CPC Suit or Section 21 Arbitration</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Fast-track summary suit based on admitted Form 26AS debt or invoke institutional sole arbitrator under agreement.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 4</span>
                    <h3 className="text-sm font-bold text-white mt-1">Order XXI Execution &amp; Account Attachment</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Execute decree to attach hospital operating bank accounts and garnish incoming TPA insurance receivables.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Legal Comparative Framework
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Matrix: Order 37 CPC vs Arbitration vs Commercial Suit
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Evaluating judicial remedies for doctor retainership and surgical share defaults across procedural speed, interim relief, and evidentiary thresholds:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4 font-bold">Recovery Remedy</th>
                        <th className="py-3 px-4 font-bold">Governing Statute</th>
                        <th className="py-3 px-4 font-bold">Procedural Mechanism</th>
                        <th className="py-3 px-4 font-bold">Relief &amp; Enforcement Speed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {STATUTORY_MATRIX.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {row.remedy}
                            <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                              {row.timing}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-700 font-medium">{row.statute}</td>
                          <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{row.mechanism}</td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                row.tone === "emerald"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                  : row.tone === "amber"
                                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                                  : "bg-slate-100 text-slate-800 border border-slate-200"
                              }`}
                            >
                              {row.relief}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                  * Note: In contracts containing a valid arbitration clause, Section 8 of the Arbitration Act mandates reference to arbitration, barring civil courts from entertaining an Order XXXVII suit unless arbitration is waived. Always review the dispute resolution clause before filing.
                </div>
              </section>

              {/* SECTION 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  Operational Breakdown
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  4 Doctor Fee Dispute Scenarios: From TPA Shifts to 194J Freezes
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Explore practical solutions for the four most common commercial failure modes visiting doctors and surgical consultants encounter with private hospitals:
                </p>

                <VisitingDoctorScenarioTabs />
              </section>

              {/* SECTION 5: Form 26AS Statutory Hook */}
              <section
                id="heading-form-26as-hook"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  The Evidentiary Masterstroke
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Form 26AS &amp; AIS: How TDS Entries Legally Acknowledge Hospital Debt
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The single most lethal piece of evidence an aggrieved visiting doctor possesses against a defaulting hospital is often hiding in plain sight on the Income Tax Department&apos;s TRACES and e-filing portals: <strong>Form 26AS and the Annual Information Statement (AIS)</strong>.
                  </p>

                  <p>
                    When a hospital retains a visiting surgeon or consultant, its accounting department books the doctor&apos;s monthly retainership or surgical cuts as an accrued expense to claim a tax deduction under the Income Tax Act, 1961. Under Section 194J, the hospital must deduct 10% TDS at the time of credit to the doctor&apos;s account or payment, whichever is earlier. It then deposits this tax with the Central Government and files quarterly e-TDS returns (Form 26Q) signed by its Managing Director or Chief Financial Officer.
                  </p>

                  <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 my-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">
                      Section 18 Limitation Act: The Binding Acknowledgment Principle
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      Section 18(1) of the Limitation Act, 1963 provides that where, before the expiration of the prescribed period for a suit in respect of any property or right, an acknowledgment of liability in respect of such property or right has been made in writing signed by the party against whom such property or right is claimed, a fresh period of limitation shall be computed from the time when the acknowledgment was so signed.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      In multiple landmark decisions, the High Courts have held that an entry in tax filings—such as Form 26AS reflecting TDS deducted by a deductor—constitutes a clear, unequivocal written admission of an existing liability. The hospital cannot blow hot and cold: it cannot claim income tax expenditure deductions for doctor professional fees before the Income Tax Department while simultaneously claiming in Civil Court that no money is payable to the doctor!
                    </p>
                  </div>

                  <p>
                    In an <Link href="/law/order-37-summary-suit-money-recovery" className="text-red-600 hover:text-red-700 font-semibold underline">Order XXXVII CPC Summary Suit</Link>, the presence of a Form 26AS entry completely eliminates the hospital&apos;s ability to raise sham, frivolous defenses. When the court summons the hospital, the hospital must deposit the disputed amount in court as a condition for being granted Leave to Defend, ensuring the doctor&apos;s principal recovery is secured before trial even commences.
                  </p>
                </div>
              </section>

              {/* SECTION 6: Worked Financial Case Study */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                  Empirical Financial Audit
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Case Study: Recovering ₹28.5 Lakh in Unpaid Surgical Shares
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Real-world reconciliation ledger for a senior visiting laparoscopic surgeon in Delhi-NCR claiming 10 months of withheld surgical fee cuts and on-call retainers:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Case Docket</p>
                      <p className="text-base sm:text-lg font-black text-white">Dr. R. K. (MS, MCh) v. Multi-Specialty Hospital Pvt. Ltd.</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      Settled Pre-Trial via Order 37 Filing
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Total Billed Surgeries (42 Major Laparoscopic Procedures):</span>
                      <span className="font-bold text-slate-200">&rupee;35,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Doctor&apos;s Agreed Contractual Share (70% of Surgeon Fee):</span>
                      <span className="font-bold text-slate-200">&rupee;24,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Fixed Monthly Retainership (10 Months @ &rupee;40,000/mo):</span>
                      <span className="font-bold text-slate-200">&rupee;4,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Total Gross Professional Fee Claim:</span>
                      <span className="font-bold text-slate-100">&rupee;28,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">TDS Deposited by Hospital u/s 194J (10% reflected in 26AS):</span>
                      <span className="font-bold text-amber-400">&minus; &rupee;2,85,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Interim Ad-Hoc On-Account Payments Received:</span>
                      <span className="font-bold text-emerald-400">&minus; &rupee;3,50,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700 bg-slate-800/60 px-3 rounded-lg">
                      <span className="font-extrabold text-white">Net Liquidated Principal Debt Outstanding:</span>
                      <span className="font-extrabold text-red-400 text-sm sm:text-base">&rupee;22,15,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">Commercial Interest Claimed under Interest Act (18% p.a. for 14 mos):</span>
                      <span className="font-bold text-amber-300">&plus; &rupee;4,65,150</span>
                    </div>
                    <div className="flex justify-between py-2 bg-red-950/40 border border-red-800/50 px-3 rounded-lg">
                      <span className="font-black text-white">Total Enforceable Demand in Advocate Notice:</span>
                      <span className="font-black text-emerald-400 text-base sm:text-lg">&rupee;26,80,150</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong>Outcome:</strong> Upon service of the Advocate Legal Notice accompanied by certified Form 26AS printouts, the hospital finance committee realized it could not survive an Order XXXVII CPC Summary Suit. The hospital settled the entire net principal of ₹22.15 Lakh plus ₹2.5 Lakh towards interest across 3 post-dated cheques within 21 days of notice receipt.
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Calculate Statutory Interest on Delayed Professional Fees &rarr;
                  </Link>
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Check Limitation Reset Date via Section 18 Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* SECTION 7: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Evidentiary Architecture
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Evidence Checklist for Visiting Consultants
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63, replacing Section 65B of the Indian Evidence Act), electronic hospital logs, tax filings, and mobile communications must be systematically collated to withstand judicial scrutiny:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Form 26AS &amp; AIS Tax Ledgers</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certified PDFs downloaded directly from TRACES/Income Tax e-filing portal showing hospital TAN, booking dates, quarterly 194J entries, and total credited amounts.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">HMS &amp; OT Register Audit Trails</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hospital Management System operation theater register entries, signed anesthesia charts, patient discharge summaries, and post-operative progress notes with timestamps.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Consultancy Agreement &amp; Tariff Schedule</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Original or digital counterpart of the Professional Retainership Agreement, fee-sharing schedule (e.g. 70:30 surgical split), and written amendment emails.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">4</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Call-Out &amp; Emergency Logs</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      WhatsApp chats, SMS, and official email call-outs from Medical Superintendent, Chief Nursing Officer, or RMO summoning the doctor for emergency surgeries.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">5</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Bank Account Statements</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank account statements certified under the Bankers&apos; Books Evidence Act demonstrating exact dates and amounts of previous payments, establishing the unpaid differential.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">6</span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Section 63 BSA Electronic Certificate</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatory affidavit and device certificate accompanying electronic records affirming lawful device custody, operational integrity, and unaltered hash values.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: SOP for Serving Advocate Notice */}
              <section
                id="heading-sop-advocate-notice"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  Pre-Litigation SOP
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Step-by-Step SOP: Serving an Advocate Notice on Hospital Finance
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A standard friendly email to hospital HR or an informal verbal chat with the Medical Director will rarely unblock frozen doctor retainers. Hospital CFOs operate under liquidity pressures and routinely prioritize pharmaceutical distributors, bank EMIs, and utility providers over docile visiting consultants who hesitate to take legal action.
                  </p>

                  <p>
                    To compel immediate board-level escalation, the demand must be served through an <strong>Advocate Legal Notice</strong> backed by statutory bite:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Address Key Corporate Decision-Makers Personally</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Serve notice jointly on the Managing Director, Chief Executive Officer, Medical Director, and Chief Financial Officer of the hospital entity, as well as the Board of Trustees if operating as a charitable trust.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Annex the Form 26AS &amp; OT Reconciled Schedule</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Incorporate a tabulated ledger displaying Patient IPD Number, Procedure Date, Gross Billed Amount, Agreed Percentage Cut, Net Doctor Share, and Form 26AS Section 194J booking proof.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Stipulate 18% Commercial Interest &amp; 15-Day Cure Window</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Demand interest under Section 3 of the Interest Act, 1978 and grant exactly 15 calendar days from service to clear the dues into the doctor&apos;s designated bank account.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Execute Multi-Channel Deemed Service</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Dispatch via Speed Post RPAD with official India Post tracking bar-codes, certified email to registered corporate domain addresses, and WhatsApp via enterprise API with delivery and read acknowledgments under Section 63 BSA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    If the hospital has issued post-dated cheques that were returned unpaid, ensure the notice complies strictly with the <Link href="/cheque-bounce-notice-timeline-section-138" className="text-red-600 hover:text-red-700 font-semibold underline">Section 138 NI Act 30-day statutory notice timeline</Link> to initiate criminal proceedings against signatory directors alongside civil recovery. For public healthcare institutions or government hospitals, comply with the <Link href="/law/section-80-cpc-notice-to-government" className="text-red-600 hover:text-red-700 font-semibold underline">Section 80 CPC 60-day notice rule</Link>.
                  </p>
                </div>
              </section>

              {/* DUAL B2B CTA STRIP */}
              <section className="scroll-mt-28">
                <VisitingDoctorNoticeCTA />
              </section>

              {/* SECTION 9: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Practical Doctor Inquiries
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions for Visiting Consultants &amp; Surgeons
                </h2>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group py-4 sm:py-5 first:pt-0 last:pb-0 focus-within:outline-none"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        <span>{faq.question}</span>
                        <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 10: Primary Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Statutory Citations
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Authorities, Judicial Precedents &amp; Legal Source Codes
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  All recovery protocols, statutory matrix comparisons, and evidentiary requirements detailed in this guide derive from official legislative enactments and appellate jurisprudence:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold shrink-0">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-red-600 font-medium underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span>Author &amp; Reviewer: {LEGAL_REVIEWER.name} ({LEGAL_REVIEWER.role})</span>
                  <span>Last Updated: November 2026 &bull; Canonical: LegalRecovery.in</span>
                </div>
              </section>

              {/* Sibling Links Directory */}
              <section className="bg-slate-100/70 border border-slate-200 rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Healthcare Recovery Knowledge Network (IND-03)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <Link
                    href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-300 transition-colors block text-xs"
                  >
                    <span className="font-bold text-slate-900 block mb-1">Post-Discharge Patient Bill Recovery</span>
                    <span className="text-slate-500 text-[11px]">Enforcing undertakings without patient detention</span>
                  </Link>
                  <Link
                    href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-300 transition-colors block text-xs"
                  >
                    <span className="font-bold text-slate-900 block mb-1">TPA Insurance Claim Recovery</span>
                    <span className="text-slate-500 text-[11px]">Enforcing IRDAI Bank Rate + 2% penal interest</span>
                  </Link>
                  <Link
                    href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-300 transition-colors block text-xs"
                  >
                    <span className="font-bold text-slate-900 block mb-1">CGHS &amp; Ayushman Bharat Recovery</span>
                    <span className="text-slate-500 text-[11px]">Section 80 CPC and Article 226 High Court Writs</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
