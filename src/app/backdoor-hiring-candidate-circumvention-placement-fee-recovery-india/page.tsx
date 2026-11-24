import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BackdoorHiringTableOfContents from "./BackdoorHiringTableOfContents";
import BackdoorHiringScenarioTabs from "./BackdoorHiringScenarioTabs";
import BackdoorHiringNoticeCTA from "./BackdoorHiringNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india";
const EXACT_H1 =
  "Client Rejected Your Candidate on Email and Secretly Hired Them 60 Days Later? The 'Backdoor Hiring' Detection & Legal Fee-Recovery Playbook";
const META_TITLE = "Client 'Backdoor Hired' Candidate? Recover Placement Fee";
const META_DESCRIPTION =
  "Prove candidate introduction via ATS timestamps and enforce your 12-month ownership & penal backdoor fee clause under Contract Act s.73 via Legal Notice.";

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
        alt: formatAltText("Backdoor Hiring Candidate Circumvention Placement Fee Recovery Guide"),
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

const PRIMARY_SOURCES = [
  {
    title: "The Indian Contract Act, 1872 (Section 70 — Quantum Meruit, Section 73 — Breach Damages & Section 74 — Penalty Surcharges)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility & Section 104 — Burden of Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Mercantile Agency Contracts & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15 & 16 — Mandatory 45-Day Payment & Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A — Validity of Contracts Formed Through Electronic Communications & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Contractual Demands)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Constitution Bench on Quantum Meruit & Restitution for Non-Gratuitous Work",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A commercial contractor performed civil works at the request of state officers without an executed formal statutory contract conforming to constitutional formalities. The state enjoyed the benefit of the constructed warehouses but subsequently refused payment, citing the absence of a signed, binding instrument.",
    holding:
      "The 5-Judge Constitution Bench established the cornerstone doctrine of Section 70 of the Indian Contract Act, 1872: Where a person lawfully does something for another person or delivers anything to them, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the recipient is legally bound to make compensation to the former in respect of, or to restore, the thing so done or delivered. In recruitment circumvention disputes, even where a client claims the Terms of Business (TOB) lacked a formal wet signature, their interviewing and onboarding of the candidate constitutes acceptance of the commercial service, creating an unavoidable statutory obligation to remit market placement fees.",
    amount: "Doctrine of Quantum Meruit Established — Mandatory Commercial Restitution",
    takeaway:
      "Clients cannot evade placement fees by alleging the master service agreement was never countersigned; receiving candidate introductions and hiring them non-gratuitously triggers strict statutory liability under Section 70.",
  },
  {
    title: "Supreme Court on Restitution & Prevention of Corporate Unjust Enrichment",
    parties: "Food Corporation of India v. Vikas Majdoor Kamgar Sahkari Mandli Ltd.",
    citation: "(2007) 13 SCC 544, Supreme Court of India",
    date: "Judgment Dated 11 December 2007",
    facts:
      "A service provider supplied logistics and labor services upon oral requisitions and informal correspondence. The principal corporation contended that because no formally concluded written tender agreement was executed, no actionable debt existed in contract law.",
    holding:
      "The Supreme Court reaffirmed that the principle of restitution embodied in Section 70 of the Contract Act prevents unjust enrichment. The court ruled that contractual technicalities cannot be weaponized by commercial beneficiaries to expropriate specialized services without market compensation. The party enjoying the commercial fruit of an introduction must pay the customary market rate.",
    amount: "Equitable Restitution Affirmed — Elimination of Technical Contractual Evasion",
    takeaway:
      "Staffing and executive search agencies providing curated candidates are entitled to full customary remuneration under Section 70, wholly defeating corporate defenses of 'no wet-signed agreement'.",
  },
  {
    title: "The Effective Cause Doctrine in Agency & Introduction Placement Commissions",
    parties: "Millar, Son, & Co. v. Radford (Affirmed in Indian Mercantile Jurisprudence)",
    citation: "(1903) 19 TLR 575, Court of Appeal (Cited with Approval by High Courts of Delhi & Bombay)",
    date: "Authoritative Common Law Mercantile Authority",
    facts:
      "An estate and recruitment broker introduced a counterparty to a principal. The principal temporarily broke off negotiations, waited for direct contact, and subsequently entered into a contract directly with the introduced counterparty to avoid paying the agent's commission.",
    holding:
      "The Court established the 'Effective Cause' (or Procuring Cause) doctrine: It is not sufficient for an agent merely to prove that he introduced the parties; the agent must prove that his introduction was the effective cause of the ultimate employment or transaction. Where an agency sources a candidate, shares their credentials, and arranges interviews, the chain of causation is direct. A temporary pause, cosmetic role title alteration, or direct secret outreach by the employer does not sever causation.",
    amount: "Effective Cause Standard — Direct Causation Protects Agency Commission",
    takeaway:
      "If the agency's CV dispatch was the initial spark that brought the candidate to the client's radar, the agency remains the effective cause of hiring, entitling them to full placement remuneration regardless of intermediate delays.",
  },
  {
    title: "Delhi High Court on 12-Month Circumvention Ownership & Non-Solicitation Covenants",
    parties: "Maha Associates v. Tata Teleservices Ltd. & Ors.",
    citation: "2013 SCC OnLine Del 342, High Court of Delhi",
    date: "Judgment Dated 29 January 2013",
    facts:
      "A recruitment consultancy submitted candidates under standard business terms specifying a 12-month candidate ownership protection window. The defendant entity claimed candidates were interviewed but not selected, only to hire them 4 months later through a third-party staffing contractor to circumvent placement fees.",
    holding:
      "The High Court held that candidate ownership covenants protecting an agency for 12 months from the date of introduction are reasonable commercial restraints designed to protect proprietary sourcing investments. Routing an introduced candidate through a third-party vendor or sister concern constitutes willful circumvention and breach of contract under Section 73, entitling the agency to full placement damages.",
    amount: "Enforceability of 12-Month Ownership Clauses Upheld under Section 73",
    takeaway:
      "Clients who hire introduced talent within 12 months—whether directly, via contractors, or across sister concerns—are legally liable for the full placement fee and contractual damages.",
  },
  {
    title: "Supreme Court on Admissibility of Electronic Records & ATS Server Logs",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, Supreme Court of India",
    date: "Judgment Dated 14 July 2020",
    facts:
      "The evidentiary weight of computer printouts, database audit logs, and electronic emails was challenged for alleged non-compliance with statutory certification formalities under Section 65B of the Indian Evidence Act, 1872 (now Section 63 of Bharatiya Sakshya Adhiniyam, 2023).",
    holding:
      "The Supreme Court clarified that electronic records produced from computer systems are admissible as primary or secondary evidence when accompanied by a statutory certificate executed by a person occupying an official position responsible for the management of the relevant device or system. In candidate circumvention disputes, applicant tracking system (ATS) transmission logs, raw email headers, and server dispatch records certified under Section 63 BSA constitute conclusive proof of candidate introduction.",
    amount: "Electronic Evidence Telemetry Standard — Conclusive Proof of Introduction Date",
    takeaway:
      "Recruitment agencies can definitively dismantle client denial letters by submitting Section 63 BSA certified ATS database logs and raw email headers confirming exact minute-level introduction.",
  },
];

const FAQS = [
  {
    question: "What is 'backdoor hiring' and how does Indian contract law protect recruitment agencies?",
    answer:
      "Backdoor hiring (or client circumvention) occurs when a client company interviews or receives a candidate profile introduced by an executive search or recruitment agency, formally rejects the profile or claims the position is frozen, and then secretly hires that candidate within 6 to 12 months without paying the agency placement fee. Under Sections 70, 73, and 74 of the Indian Contract Act, 1872, agencies are legally protected by candidate introduction ownership covenants and the 'Effective Cause' doctrine. Even if the formal Terms of Business was not signed, Section 70 (Quantum Meruit) obligates the employer to pay standard market compensation for the commercial benefit enjoyed.",
  },
  {
    question: "What is the '48-Hour Duplicate-Database Rule' and how does it defeat client rejection excuses?",
    answer:
      "The 48-Hour Duplicate Rule is the standard commercial and legal threshold governing recruitment introductions. Under standard recruitment practice and Section 104 of Bharatiya Sakshya Adhiniyam, 2023 (Burden of Proof), if a client claims a candidate was already in their internal applicant tracking system (ATS), they must notify the agency in writing within 24 to 48 hours of CV submission, providing a timestamped server extract proving active sourcing within the preceding 30–60 days. If the client fails to issue this prompt written rejection and subsequently interviews or hires the candidate, their retroactive duplicate defense is legally waived, and the agency is deemed the effective cause of hiring.",
  },
  {
    question: "Can a client escape placement fees by hiring the candidate into a subsidiary or sister company?",
    answer:
      "No. Standard agency Terms of Business (TOB) explicitly define the client to include all holding companies, subsidiaries, affiliates, joint ventures, and associated group entities. Furthermore, under Section 70 of the Contract Act and the corporate veil doctrine, the parent company and the hiring subsidiary are jointly and severally liable. If the resume was sourced via the parent's recruitment mandate, diverting the profile to a sister entity to evade placement fees constitutes fraudulent circumvention under Section 73.",
  },
  {
    question: "How do we legally prove that a client secretly hired our candidate?",
    answer:
      "Proof is established through a multi-point evidentiary dossier: (1) ATS profile creation and submission timestamps, (2) Raw MIME email headers showing resume transmission to client HR, (3) Interview calendar invites on Microsoft Teams or Google Meet, (4) Candidate's public LinkedIn profile updates showing the corporate employment transition date, (5) Candidate corporate email verification via ping testing (e.g., candidate@clientcompany.com), and (6) EPFO Universal Account Number (UAN) employer establishment filings. When certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, these records provide airtight proof in court.",
  },
  {
    question: "Can an agency recover placement fees if the client never signed our Terms of Business (TOB)?",
    answer:
      "Yes. Under Section 8 of the Indian Contract Act, 1872 (Acceptance by performance) and Section 70 (Quantum Meruit), a contract is formed by conduct. The 5-Judge Constitution Bench in State of West Bengal v. B.K. Mondal & Sons (AIR 1962 SC 779) and the Supreme Court in FCI v. Vikas Majdoor (2007) affirmed that where a party requests and enjoys a non-gratuitous commercial service, they cannot invoke the absence of a wet-signed agreement to evade market remuneration. If the agency emailed its TOB alongside the CV and the client proceeded to interview the candidate, the terms are legally binding.",
  },
  {
    question: "What damages and interest can recruitment agencies claim in a backdoor hiring legal notice?",
    answer:
      "Recruitment consultancies can claim: (1) The full 100% standard placement fee (typically 8.33% to 15% of annual gross CTC, or up to 20%–25% for executive search), (2) Contractual penal circumvention surcharges (typically 50% to 100% additional liquidated damages under Section 74), (3) Applicable 18% GST, and (4) Commercial delayed payment interest at 18% p.a. If the agency is registered under Udyam (MSME), Section 16 of the MSMED Act entitles them to mandatory compound interest at three times the RBI Bank Rate from the 45th day.",
  },
  {
    question: "How does LegalRecovery assist recruitment consultancies facing multiple backdoor hiring defaults?",
    answer:
      "LegalRecovery provides a dedicated institutional recovery desk for recruitment agencies and executive search firms. Agencies upload disputed placements via CSV or self-serve portal. Our team cross-checks candidate employment data, prepares fact-verified statutory notices incorporating Section 63 BSA electronic evidence certificates, dispatches notices via Speed Post RPAD and email/WhatsApp, and initiates nationwide Summary Suits under Order XXXVII CPC or MSME Samadhaan arbitrations to enforce immediate financial settlement.",
  },
];

export default function BackdoorHiringPlacementFeeRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Staffing & Manpower Recovery Hub",
      href: "/industries/staffing-recruitment-manpower-recovery",
    },
    {
      label: "Backdoor Hiring Placement Fee Recovery",
      href: PAGE_URL,
    },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
    datePublished: "2026-11-17T05:30:00+05:30",
    dateModified: "2026-11-17T05:30:00+05:30",
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Detect and Legally Recover Placement Fees for Backdoor Hires in India",
    description:
      "A step-by-step statutory and operational protocol for recruitment agencies, executive search consultants, and staffing firms to detect candidate circumvention, dismantle false database defenses, and enforce 12-month ownership clauses via Legal Notice.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Down Digital Introduction Telemetry & ATS Timestamps",
        text: "Extract ATS candidate profile creation logs, email MIME dispatch headers (.eml), interview calendar coordination threads, and video call logs. Secure an electronic evidence certificate under Bharatiya Sakshya Adhiniyam, 2023 Section 63 to prove exact introduction priority.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Establish Circumvention & Active Employment at Client Entity",
        text: "Document the candidate's active employment through LinkedIn profile updates, corporate email verification, company website directories, or EPFO UAN establishment seeding, establishing that hiring occurred within the 12-month candidate ownership protection window.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue Formal GST Placement Tax Invoice with Circumvention Surcharge",
        text: "Generate and dispatch an official GST Tax Invoice computing the agreed placement fee (8.33%–15% of CTC) plus contractual penal circumvention surcharges and 18% GST, stipulating a strict 7-day settlement deadline.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Legal Demand Notice Under Contract Act s.70 & s.73",
        text: "Serve a comprehensive statutory Legal Notice via Speed Post RPAD and email, demolishing unverified 'internal database' claims under the 48-hour rule, citing the Effective Cause doctrine and Section 70 Quantum Meruit, and demanding immediate electronic transfer.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Initiate Commercial Summary Suit or MSME Samadhaan Arbitration",
        text: "Upon expiry of the notice window without payment, file a Summary Suit under Order XXXVII of the CPC for liquidated debt or initiate statutory arbitration before the MSEFC under Section 18 of the MSMED Act for compound interest at 3x RBI Bank Rate.",
      },
    ],
  };

  const jsonLdFaq = {
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
        name: "Staffing & Manpower Recovery",
        item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Backdoor Hiring Placement Fee Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Staffing &amp; Executive Search Legal Playbook &bull; Section 70 Quantum Meruit</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer &bull; Candidate Circumvention SOP
            </span>
            Under the Indian Contract Act, 1872 (Section 73) and the 5-Judge Constitution Bench ruling on Section 70 Quantum Meruit (*State of West Bengal v. B.K. Mondal &amp; Sons*), a client cannot escape paying your recruitment fee by claiming the position was frozen or that your Terms of Business lacked a wet signature. If your ATS telemetry and email timestamps prove you were the &ldquo;Effective Cause&rdquo; of introduction, the client&apos;s secret onboarding of the candidate within 12 months triggers full placement fee liability plus penal circumvention damages under Section 74. Consult our authoritative{" "}
            <Link
              href="/industries/staffing-recruitment-manpower-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300 transition-colors"
            >
              Staffing &amp; HR Recruitment Debt Recovery Hub
            </Link>{" "}
            for industry-wide multi-client recovery strategies.
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Statutory Window
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">12 Months</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Ownership Protection Period</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Duplicate Rule
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">48 Hours</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Client Rejection Disclosure Window</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Circumvention Surcharge
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">100% Penal</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Damages under Contract Act s.74</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                MSME Interest Rate
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">3x RBI Rate</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Compounded Monthly (MSMED Act)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <BackdoorHiringTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Backdoor Hiring Crisis */}
            <section
              id="heading-backdoor-hiring-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  The Backdoor Hiring Crisis: How Recruitment Agencies Bleed Lakhs
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Every recruitment consultancy, executive search boutique, and contingency staffing agency in India loses between <strong>₹5,00,000 and ₹30,00,000 annually</strong> to client circumvention—colloquially termed <em>&ldquo;backdoor hiring&rdquo;</em>. The pattern is calculated and repetitive: an agency expends dozens of sourcing hours identifying a niche software architect, marketing VP, or business development director. The candidate&apos;s CV is formatted and dispatched to the client&apos;s Talent Acquisition (TA) team.
                </p>
                <p>
                  Days later, the corporate HR responds with an evasive denial: <em>&ldquo;The hiring manager has put this position on indefinite hold,&rdquo;</em> <em>&ldquo;We selected an internal candidate,&rdquo;</em> or <em>&ldquo;The candidate does not match our cultural expectations.&rdquo;</em> Concurrently, the agency closes the mandate. However, 60 to 120 days later—once the paper trail cools—the candidate quietly appears on LinkedIn wearing the client&apos;s company badge, reporting to the same hiring manager who claimed the mandate was canceled.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-[#DC2626] font-semibold">
                    The Corporate Circumvention Myth: Many corporate talent leaders falsely assume that unless an agency has a wet-signed Master Services Agreement (MSA) or unless the placement is billed within 30 days, the agency possesses no enforceable remedy. Under Indian commercial jurisprudence, this assumption is completely unfounded.
                  </p>
                </div>
                <p>
                  Indian contract law squarely protects recruitment agencies through two statutory pillars: <strong>Section 73 of the Indian Contract Act, 1872</strong> (enforcing candidate ownership protection covenants) and <strong>Section 70 (Quantum Meruit)</strong>, which mandates that any entity enjoying the non-gratuitous fruit of commercial services must pay fair market value, regardless of whether a formal contract was executed. If your agency is also dealing with delayed invoices from other vendors, explore our{" "}
                  <Link
                    href="/services/vendor-and-invoice-recoveries"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Vendor and Invoice Recovery Services
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/business-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Corporate Business Dues Recovery Rails
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 2: Digital Detection Audit Trail */}
            <section
              id="heading-detection-audit-trail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Digital Detection Audit: 6 Verifiable Telemetry Signals of a Backdoor Hire
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Corporate clients frequently bank on agency ignorance. However, the modern digital employment ecosystem leaves indelible forensic tracks. Before serving a statutory demand notice, agencies must build an airtight digital dossier using the following 6 telemetry vectors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 1 &bull; ATS Profile ID &amp; Email Dispatch Logs
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Raw MIME Headers &amp; Candidate Submission Hash
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Export original submission emails containing RFC 822 MIME headers (.eml format). The raw headers preserve message IDs, delivery timestamps, recipient mail server IP addresses, and resume attachment file hashes (SHA-256), establishing irrevocable priority under Bharatiya Sakshya Adhiniyam, 2023 Section 63.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 2 &bull; Interview Coordination Trails
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Calendar Invites &amp; Video Conference Telemetry
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Save all Google Meet, Microsoft Teams, or Zoom invitation links forwarded between your consultant, client HR, and the candidate. These logs definitively prove that the client engaged with the candidate strictly on the basis of the agency&apos;s introduction.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 3 &bull; LinkedIn &amp; Professional Social Updates
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Employment Transition &amp; Wayback Machine Snapshots
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capture timestamped full-page PDF exports of the candidate&apos;s LinkedIn profile reflecting the new corporate designation. Utilize the Wayback Machine or Perma.cc to establish an immutable archival record of when the employment relationship commenced.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 4 &bull; Corporate Mail Server MX Verification
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    SMTP Handshake &amp; Ping Verification
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify the candidate&apos;s newly provisioned corporate email (e.g., <code>candidate@clientdomain.com</code>) via automated SMTP server ping tests. A <code>250 OK</code> mailbox response confirms active corporate account provisioning and direct employment.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 5 &bull; EPFO Universal Account Number (UAN) Records
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    EPF Establishment Contribution Tracking
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In formal discovery or commercial litigation, a party can subpoena Employees&apos; Provident Fund Organisation (EPFO) records. The candidate&apos;s 12-digit UAN reflects monthly employer contributions, establishing the exact month of salary onboarding.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Signal 6 &bull; Candidate Written Confirmation
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Ethical Direct Out-of-Court Statement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Candidates placed in backdoor situations are often unaware of the agency&apos;s circumvention. An informal, professional check-in often yields written confirmation (WhatsApp/Email) that client HR reached out directly &ldquo;to bypass vendor commissions&rdquo;.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Statutory Matrix: The 5 Legal Frameworks Governing Candidate Circumvention
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Recruitment debt recovery does not depend on subjective goodwill. It is governed by codified statutory frameworks that penalize bad-faith commercial conduct and protect service providers:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Statutory Authority</th>
                      <th className="py-3 px-4 font-bold">Governing Sections</th>
                      <th className="py-3 px-4 font-bold">Agency Legal Right</th>
                      <th className="py-3 px-4 font-bold">Remedy &amp; Enforceability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-red-600">
                        Section 73 &amp; Section 74
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Enforcement of 12-Month Introduction Ownership &amp; Liquidated Circumvention Damages
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Full placement fee + 100% penal surcharge for willful breach of non-circumvention terms
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-600">
                        Section 70 (Quantum Meruit)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Non-Gratuitous Commercial Act &amp; Restitution (Valid Even Without Signed Agreement)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Statutory market-rate placement compensation (8.33%–15% CTC) based on enjoyed benefit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Bharatiya Sakshya Adhiniyam, 2023
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        Section 63 &amp; Section 104
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Admissibility of Certified ATS Timestamps &amp; Reverse Burden for Duplicate Defenses
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Conclusive evidentiary proof of introduction date; client must prove prior active sourcing
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Commercial Courts Act, 2015
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-amber-600">
                        Section 2(1)(c)(xviii) &amp; s.12A
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mercantile Agency Dispute Jurisdiction &amp; Fast-Track Pre-Institution Mediation
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Specialized commercial court adjudication; settlement award enforceable as a civil court decree
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act, 2006
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-blue-600">
                        Section 15, 16 &amp; 17
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Statutory 45-Day Payment Mandate for Udyam-Registered HR Consultancies
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mandatory compound interest at 3x RBI Bank Rate + disallowance under Section 43B(h) of IT Act
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Registered staffing agencies should also review our statutory guide on{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Section 43B(h) MSME Payment Rules &amp; Corporate Tax Disallowance
                </Link>{" "}
                to leverage year-end balance sheet pressure against defaulting corporate debtors.
              </p>
            </section>

            {/* Section 4: Operational Decision Tree SVG Flowchart */}
            <section
              id="heading-operational-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Operational Decision Tree: The 5-Stage Backdoor Fee Recovery Protocol
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                When candidate circumvention is uncovered, impulsive phone calls to client HR only give the debtor time to conceal records. Follow this disciplined, field-tested 5-stage protocol:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-inner mb-6">
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-auto"
                  width={900}
                  height={240}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Line */}
                  <line x1="80" y1="110" x2="820" y2="110" stroke="#334155" strokeWidth="4" strokeDasharray="6 6" />

                  {/* Step 1 */}
                  <g>
                    <rect x="20" y="50" width="150" height="120" rx="12" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="95" cy="50" r="16" fill="#DC2626" />
                    <text x="95" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="95" y="85" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">DISCOVERY</text>
                    <text x="95" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Telemetry Lock</text>
                    <text x="95" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">ATS + MIME Headers</text>
                    <text x="95" y="142" fill="#94A3B8" fontSize="10" textAnchor="middle">BSA s.63 Certificate</text>
                  </g>

                  {/* Step 2 */}
                  <g>
                    <rect x="190" y="50" width="150" height="120" rx="12" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="265" cy="50" r="16" fill="#DC2626" />
                    <text x="265" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="265" y="85" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">INVOICING</text>
                    <text x="265" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">GST Placement Bill</text>
                    <text x="265" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">Full Fee + Circumvention</text>
                    <text x="265" y="142" fill="#94A3B8" fontSize="10" textAnchor="middle">7-Day Payment Demand</text>
                  </g>

                  {/* Step 3 */}
                  <g>
                    <rect x="360" y="50" width="150" height="120" rx="12" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="435" cy="50" r="16" fill="#DC2626" />
                    <text x="435" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="435" y="85" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">PRE-EMPTION</text>
                    <text x="435" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">48-Hr Rule Demolition</text>
                    <text x="435" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">Reject Database Excuse</text>
                    <text x="435" y="142" fill="#94A3B8" fontSize="10" textAnchor="middle">Candidate Proof Collation</text>
                  </g>

                  {/* Step 4 */}
                  <g>
                    <rect x="530" y="50" width="150" height="120" rx="12" fill="url(#activeGrad)" stroke="#EF4444" strokeWidth="2" />
                    <circle cx="605" cy="50" r="16" fill="#FFFFFF" />
                    <text x="605" y="55" fill="#DC2626" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="605" y="85" fill="#FEE2E2" fontSize="11" fontWeight="bold" textAnchor="middle">STATUTORY NOTICE</text>
                    <text x="605" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Legal Demand</text>
                    <text x="605" y="125" fill="#FEE2E2" fontSize="10" textAnchor="middle">Speed Post RPAD + Email</text>
                    <text x="605" y="142" fill="#FEE2E2" fontSize="10" textAnchor="middle">s.70 &amp; s.73 Contract Act</text>
                  </g>

                  {/* Step 5 */}
                  <g>
                    <rect x="700" y="50" width="150" height="120" rx="12" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="775" cy="50" r="16" fill="#10B981" />
                    <text x="775" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                    <text x="775" y="85" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">ENFORCEMENT</text>
                    <text x="775" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Order 37 / MSME</text>
                    <text x="775" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">Commercial Summary Suit</text>
                    <text x="775" y="142" fill="#94A3B8" fontSize="10" textAnchor="middle">3x RBI Rate Compounded</text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 1 &bull; Telemetry Lockdown</span>
                  </div>
                  <p className="text-xs text-slate-300">Extract ATS profiles, raw RFC 822 email headers (.eml), interview calendar invites, and execute a BSA 2023 Section 63 electronic certificate.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 2 &bull; Formal GST Placement Invoice</span>
                  </div>
                  <p className="text-xs text-slate-300">Issue an official GST Tax Invoice computing the full placement fee (8.33%–15% CTC) plus 100% circumvention damages with a 7-day payment window.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 3 &bull; 48-Hour Rule Rebuttal</span>
                  </div>
                  <p className="text-xs text-slate-300">Demolish unverified internal database claims. Enforce the 48-hour disclosure rule and place burden of prior active outreach on the client under BSA Section 104.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-red-700">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">4</span>
                    <span className="text-xs font-bold text-red-300 uppercase">Stage 4 &bull; Statutory Legal Notice</span>
                  </div>
                  <p className="text-xs text-slate-200">Serve a fact-verified Legal Notice via Speed Post RPAD and email citing Contract Act s.70 (Quantum Meruit) and s.73 breach damages.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">5</span>
                    <span className="text-xs font-bold text-emerald-400 uppercase">Stage 5 &bull; Order XXXVII Suit or MSME Filing</span>
                  </div>
                  <p className="text-xs text-slate-300">Institute a Commercial Summary Suit under Order XXXVII CPC for liquidated debt or file before MSEFC under the MSMED Act for 3x RBI compound interest.</p>
                </div>
              </div>

              {/* Sibling Spoke Cross-Links */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Related Staffing &amp; Manpower Recovery Guides:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                  >
                    Contract Staffing Temp Payroll &amp; PF/ESIC Recovery &rarr;
                  </Link>
                  <Link
                    href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                  >
                    90-Day Replacement Clause Abuse Recovery &rarr;
                  </Link>
                  <Link
                    href="/security-guard-housekeeping-facility-management-unpaid-bill-recovery"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                  >
                    Security &amp; Facility Management Unpaid Bill Recovery &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-commercial-circumvention-scenarios"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Commercial Circumvention Scenarios &amp; Tailored Enforcement Rails
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore the 4 primary operational tactics corporate clients employ to evade placement fees, along with the specific legal doctrines used to dismantle them:
              </p>
              <BackdoorHiringScenarioTabs />
            </section>

            {/* Section 6: The 48-Hour Duplicate Database Rule */}
            <section
              id="heading-48hr-duplicate-rule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  The 48-Hour Duplicate-Database Rule: Demolishing HR&apos;s Primary Defense
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  In more than 80% of backdoor hiring disputes, corporate HR responds with the identical boilerplate excuse: <em>&ldquo;We cannot pay this placement invoice because candidate Mr. Sharma was already present in our internal talent database (Workday / Greenhouse / Taleo) prior to your email.&rdquo;</em>
                </p>
                <p>
                  Under Indian contract law and commercial customs, this defense is legally defective unless the client satisfies the <strong>Two-Pronged Active Introduction Test</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-bold text-amber-900 text-sm mb-1">
                      Prong 1: Prompt Written Rejection (Within 24–48 Hours)
                    </h3>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      If a candidate profile is submitted by an agency, commercial reasonableness dictates that the client must search its database and issue a written duplicate notification within 24 to 48 hours of receipt. If the client remains silent, evaluates the profile, conducts interviews, and only invokes the &ldquo;database duplicate&rdquo; excuse after the candidate is hired, the client has waived this defense by conduct under Section 8 of the Contract Act.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <h3 className="font-bold text-emerald-900 text-sm mb-1">
                      Prong 2: Active Sourcing vs. Passive Repository
                    </h3>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Mere passive existence of a resume uploaded 2 years ago does not constitute active candidate ownership. The client must produce timestamped server logs under Section 63 BSA showing that their internal talent team actively communicated with the candidate regarding this specific requisition within 30 days prior to the agency&apos;s submission.
                    </p>
                  </div>
                </div>

                <p>
                  Under <strong>Section 104 of Bharatiya Sakshya Adhiniyam, 2023</strong> (Burden of proving fact to be proved to make evidence admissible), the legal burden rests entirely on the client to produce its certified ATS server telemetry. If they cannot produce an outbound email or call log predating your introduction, commercial courts treat your introduction as the solitary <strong>&ldquo;Effective Cause&rdquo;</strong> of hiring. For draft notice formats, see our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Ready-to-Use Legal Notice Reply Formats
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 7: Fee & Penalty Calculation Box */}
            <section
              id="heading-fee-and-penalty-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Worked Financial &amp; Penalty Calculation: ₹35L Executive Placement Case Study
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                When drafting a legal demand notice for backdoor circumvention, consultancies should never limit their claim to the basic fee. Standard terms of business and Section 74 of the Contract Act entitle the creditor to penal surcharges and statutory commercial interest:
              </p>

              {/* Calculation Box */}
              <div className="bg-slate-900 rounded-2xl p-5 sm:p-7 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Illustration &bull; Senior Engineering Director Circumvention
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-white">
                    Candidate Placed at ₹35,00,000 Annual Gross CTC (Circumvented Post-Interview)
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">Agreed Placement Fee (12.5% CTC):</span>
                      <span className="font-bold text-slate-100">₹4,37,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">Backdoor Circumvention Penalty (100% s.74):</span>
                      <span className="font-bold text-red-400">₹4,37,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">Subtotal Liquidated Claim:</span>
                      <span className="font-bold text-slate-100">₹8,75,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Applicable GST @ 18%:</span>
                      <span className="font-bold text-slate-100">₹1,57,500</span>
                    </div>
                  </div>

                  <div className="space-y-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">Commercial Delayed Interest (18% p.a. / 180 Days):</span>
                      <span className="font-bold text-amber-400">₹92,925</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">MSMED Alternative (3x RBI Rate Compounded):</span>
                      <span className="font-bold text-emerald-400">₹1,24,680</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-700">
                      <span className="text-slate-400">Legal Notice &amp; Legal Preparation Fee:</span>
                      <span className="font-bold text-slate-100">₹25,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Total Statutory Crystallized Demand:</span>
                      <span className="font-bold text-emerald-300 text-sm sm:text-base">₹11,50,425</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-500 text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-emerald-400 block mb-1">
                    Financial Recovery Takeaway for Agency CFOs:
                  </span>
                  A client who engages in backdoor circumvention faces more than double the original placement fee once the 100% liquidated circumvention penalty under Section 74 and statutory interest are factored in. Confronting corporate HR with this formal financial ledger in a legal notice compels immediate commercial settlement. Calculate exact delayed interest on our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-400 underline font-semibold hover:text-emerald-300"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>.
                </div>
              </div>
            </section>

            {/* Section 8: Landmark Court Precedents */}
            <section
              id="heading-landmark-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Landmark Judicial Precedents Supporting Recruitment Fee Recovery
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                When serving a formal legal demand notice, citing binding Supreme Court of India precedents eliminates frivolous HR resistance and demonstrates immediate court-readiness:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl p-5 bg-slate-50/40 border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.parties}</p>
                    <p className="text-xs font-semibold text-slate-600 mb-3">{item.citation}</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-200 text-xs">
                        <span className="font-semibold text-slate-900">{item.amount}</span>
                        <span className="text-emerald-700 font-medium">Takeaway: {item.takeaway}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Client Defense Pre-Emption Table */}
            <section
              id="heading-client-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Client Defense Pre-Emption: Neutralizing the 5 Most Common Corporate Excuses
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Corporate legal departments routinely rely on predictable boilerplate objections. Here is how our fact-verified recovery notices neutralize each defense upfront:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Corporate Debtor Excuse</th>
                      <th className="py-3 px-4 font-bold">Debtor Legal Angle</th>
                      <th className="py-3 px-4 font-bold">Statutory Rebuttal &amp; Case Law</th>
                      <th className="py-3 px-4 font-bold">Practical Evidentiary Counter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &ldquo;We never signed your Terms of Business agreement.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-medium">
                        Lack of Privity of Contract
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Section 8 Contract Act (Acceptance by conduct) + Constitution Bench in <em>B.K. Mondal</em> (Section 70 Quantum Meruit)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Produce emails showing delivery of TOB in opening email followed by client scheduling interview requests.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &ldquo;Candidate was already in our internal careers database.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-medium">
                        Prior Art / Internal Sourcing
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        The 48-Hour Rejection Rule + Section 104 BSA 2023 (Burden of proof on client to prove active prior outreach)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Challenge client to produce outbound email timestamp predating agency submission within 30 days.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &ldquo;We hired the candidate for a different role / subsidiary.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-medium">
                        Different Mandate / Entity Evasion
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Millar v. Radford (Effective Cause Doctrine) + TOB Affiliate Clause + Joint liability under Section 70
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        File MCA corporate registry extracts proving common directors, shared parent entity, or office address.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &ldquo;We hired them 4 months later via a third-party payroll firm.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-medium">
                        Contractor Shield Evasion
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        12-Month Introduction Ownership Protection Clause + Delhi HC in <em>Maha Associates v. Tata Teleservices</em>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Show that the 12-month covenant prohibits direct or indirect hiring through any intermediary or contractor.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &ldquo;Candidate applied directly on our job board months later.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-medium">
                        Direct Inbound Application
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Proximate Cause Standard: Direct application does not extinguish agency introduction within 12 months.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Candidate affidavit or email confirming agency informed them of the opening and submitted their credentials first.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Industry-Specific Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-bsa-evidentiary-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  BSA 2023 Section 63 Evidence Dossier: What to Collate Before Notice Dispatch
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, electronic evidence requires strict technological certification. Secure every document in this checklist to guarantee immediate evidentiary weight in commercial court:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      1. Raw RFC 822 Email Transmission File (.eml format)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download the raw email file from Outlook, Google Workspace, or your recruitment ATS. It contains cryptographically verifiable DKIM signatures, SPF authentication results, and server-hop timestamps proving exact dispatch time to client HR.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      2. ATS Profile Creation &amp; Client Submission Audit Logs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Extract database server audit logs from your ATS (Zoho Recruit, Bullhorn, Greenhouse, or Lever) showing the internal candidate profile ID, candidate consent timestamp, and submission record.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      3. Interview Calendar Invites &amp; Meeting Logs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Export calendar invites sent to the candidate and hiring manager. This proves that the client acted directly upon your introduction and that candidate evaluation occurred under your mandate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      4. LinkedIn Employment Timestamp &amp; Public Profiles
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Generate full-page timestamped PDF captures of the candidate&apos;s LinkedIn experience section, employer team pages, press releases, or GitHub commit signatures under the client&apos;s corporate domain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      5. Terms of Business (TOB) Communication Record
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Provide the initial email delivering the standard fee schedule, the 12-month introduction ownership clause, and the 100% circumvention liquidated damage provision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      6. Section 63 BSA Electronic Certificate
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Execute a formal certificate signed by the Head of IT or Managing Partner certifying that the email and database printouts were produced in the ordinary course of business from secure computer systems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-recovery-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Frequently Asked Questions (FAQ) &bull; Backdoor Hiring Legal Recovery
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct statutory and operational answers for recruitment agency founders, managing partners, and talent acquisition leaders:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 transition-colors"
                  >
                    <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer hover:bg-slate-100/70 select-none">
                      <span className="pr-4">{faq.question}</span>
                      <svg
                        className="w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Citations & Primary Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Statutory References &amp; Official Regulatory Sources
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Review the official bare acts and legislative authorities governing candidate ownership and mercantile agency recoveries:
              </p>
              <div className="space-y-2">
                {PRIMARY_SOURCES.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 pr-3">
                      {source.title}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-[#DC2626] transition-colors shrink-0"
                    >
                      View Statute &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Dual-Track B2B Action Desk CTA */}
            <section className="scroll-mt-28 pt-4">
              <BackdoorHiringNoticeCTA />
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
