import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DealerRecoveryTableOfContents from "./DealerRecoveryTableOfContents";
import DealerRecoveryScenarioTabs from "./DealerRecoveryScenarioTabs";
import DealerRecoveryCTA from "./DealerRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/industrial-dealer-oem-authorized-distributor-credit-default-recovery";
const EXACT_H1 =
  "Channel Credit Recovery for Industrial OEMs (Pumps, Motors, Cables, Switchgear, Bearings & Valves): Dealer Default & BG Enforcement";
const META_TITLE = "Industrial Dealer & Channel Partner Credit Default Recovery";
const META_DESCRIPTION =
  "Authorized industrial dealer defaulting past 45 days? Enforce bank guarantees, execute contractual deposit set-off, and recover dues under NI Act 138.";

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
        alt: formatAltText("Industrial Dealer OEM Credit Default Recovery"),
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
    remedy: "Contractual Security Deposit Set-Off & Bank Guarantee Invocation",
    statute: "Indian Contract Act, 1872 (ss. 74, 126, 171) & Ansal Engineering Doctrine",
    timing: "Immediate upon expiration of 30-to-45-day credit period & cure notice",
    mechanism:
      "Deliver unconditional demand to the issuing bank encashing the Bank Guarantee (BG); simultaneously serve formal notice of contractual set-off appropriating the dealer cash security deposit against undisputed invoice ledger balances.",
    relief:
      "Immediate liquidation of 25%–50% of the overdue ledger without court intervention; mitigates bad-debt provisions instantly on the OEM's balance sheet.",
    suitability:
      "Exclusive and authorized regional distributors holding valid active Bank Guarantees or rolling interest-free security deposits.",
    tone: "emerald",
  },
  {
    remedy: "Cheque Dishonour Criminal Prosecution & Director Liability",
    statute: "Negotiable Instruments Act, 1881 (Sections 138 & 141) & PSS Act 2007 (s. 25)",
    timing: "Present within 3 months of cheque date; serve notice within 30 days of bank memo",
    mechanism:
      "Deposit rolling security cheques or post-dated cheques (PDCs) held under credit agreement. Upon dishonour (funds insufficient/stop payment), serve 15-day statutory demand under Section 138 on dealer firm and all signatory directors/partners.",
    relief:
      "Imprisonment up to 2 years, penal fine up to twice the cheque amount, and mandatory interim compensation up to 20% under Section 143A NI Act.",
    suitability:
      "Dealers operating under PDC security agreements who issue stop-payment orders or divert collection proceeds away from OEM clearance.",
    tone: "rose",
  },
  {
    remedy: "Pre-Institution Mediation & Commercial Summary Suit",
    statute: "Commercial Courts Act, 2015 (ss. 2(1)(c)(i), 12A) & Order XXXVII CPC",
    timing: "Within 3 years of invoice due date or acknowledgment of debt (Limitation Act)",
    mechanism:
      "File online Pre-Institution Mediation before District Legal Services Authority (DLSA); if dealer avoids or non-starter report issues within 30 days, institute Order XXXVII Summary Suit with application for Order XXXVIII Rule 5 attachment before judgment.",
    relief:
      "Decree for principal plus commercial contract interest within 6–12 months; debtor cannot defend without obtaining leave to defend by depositing security.",
    suitability:
      "Unsecured open-credit defaults exceeding ₹3 Lakh where Bank Guarantee or security deposit is insufficient to extinguish the total outstanding ledger.",
    tone: "amber",
  },
  {
    remedy: "MSMED Act Statutory Escalation & 3x RBI Compound Interest",
    statute: "MSMED Act, 2006 (Sections 15, 16, 17, 18 & 24 Non-Obstante Clause)",
    timing: "Matures immediately on Day 46 from delivery if credit exceeds 45 days",
    mechanism:
      "File online reference before Micro and Small Enterprise Facilitation Council (MSEFC) under Section 18. Mandatory 90-day statutory conciliation and arbitration.",
    relief:
      "Compound interest with monthly rests at 3 times the RBI Bank Rate (~20.25% p.a.); 75% pre-deposit mandatory under Section 19 for dealer to challenge the award.",
    suitability:
      "Udyam-registered Micro and Small machinery, pump, valve, and electrical engineering manufacturers supplying goods to large regional corporate distributors.",
    tone: "emerald",
  },
];

const PREEMPTION_MATRIX = [
  {
    excuse: "“The goods are slow-moving dead inventory; take back the unsold motors/cables and cancel the balance invoice amount.”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 42) & Principal-to-Principal Agency Terms",
    counterMeasure:
      "Authorized industrial dealerships operate on an outright 'Principal-to-Principal' purchase model, not consignment or agency. Under Section 42 of the Sale of Goods Act, retaining goods for months without immediate rejection constitutes deemed acceptance. The OEM is under no contractual obligation to buy back unsold stock upon dealer default. Unilateral return debit notes have zero legal standing.",
  },
  {
    excuse: "“Our downstream EPC project clients or state electricity boards (DISCOMs) haven't paid us, so we cannot pay the OEM.”",
    statutoryShield: "Indian Contract Act, 1872 (Section 73) & Absence of 'Pay-When-Paid' Covenants",
    counterMeasure:
      "Unless the dealership agreement contains an explicit, bilateral 'pay-when-paid' contingency, the dealer's liability to the OEM is absolute and unconditional upon delivery. Downstream collection bottlenecks are internal commercial risks of the distributor. Third-party delays do not constitute impossibility or force majeure under Section 56 of the Contract Act.",
  },
  {
    excuse: "“The cheques held by the OEM were given only as 'advance security' and cannot be presented for Section 138 prosecution.”",
    statutoryShield: "Supreme Court Doctrine in Sripati Singh (2021) & Sunil Todi (2022)",
    counterMeasure:
      "The Supreme Court has conclusively settled that when an existing commercial debt matures past the credit period, a security cheque automatically matures into an instrument for discharging a legally enforceable debt. If the dealer defaults on its invoice ledger, the OEM possesses full statutory authority to present the security cheque and initiate Section 138 proceedings upon dishonour.",
  },
  {
    excuse: "“We are raising retrospective warranty defect claims of ₹30 Lakh for motor burning and cable insulation failures.”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 59) & Contractual Warranty SOP Bar",
    counterMeasure:
      "Dealership contracts require technical warranty claims to be logged within 7–14 days of fault occurrence accompanied by failed component serial numbers and field inspection reports. Retrospective, unverified warranty debit notes manufactured post-default are legally barred under Section 59 as post-facto commercial contrivances without evidential merit.",
  },
];

const FAQS = [
  {
    question:
      "Can an industrial OEM legally encash a dealer's Bank Guarantee without first obtaining a court decree?",
    answer:
      "Yes. An unconditional Bank Guarantee (BG) represents an independent, autonomous contract between the issuing bank and the beneficiary (the OEM), completely separate from the underlying dealership dispute. Under the Supreme Court's landmark doctrine in Ansal Engineering Enterprises Ltd. v. Tehri Hydro Development Corp. Ltd. (1996) 5 SCC 450 and Standard Chartered Bank v. Heavy Engineering Corporation Ltd. (2020) 13 SCC 574, courts will not grant an injunction restraining the encashment of an unconditional bank guarantee except in rare instances of egregious fraud established to the knowledge of the bank or irretrievable injustice. The OEM can invoke the BG immediately upon dealer default by submitting a formal letter of invocation to the bank in strict compliance with the guarantee terms.",
  },
  {
    question:
      "What is the legal difference between channel financing default and open credit default for an industrial OEM?",
    answer:
      "In an open credit arrangement, the OEM finances the dealer directly on its balance sheet (30–60 day credit terms); upon default, the OEM pursues recovery as an unsecured commercial creditor through contractual set-off, Section 138 NI Act, or Commercial Courts. In channel financing, a partner bank or NBFC discounts the OEM's invoices and disburses funds to the OEM immediately, while extending credit to the dealer. However, if the dealer defaults and the facility has recourse or a First Loss Default Guarantee (FLDG), the lender debits the OEM's fixed deposit or escrow account. Under Section 140 of the Indian Contract Act, 1872, the OEM is then legally subrogated to all rights and securities of the lending bank against the defaulting dealer.",
  },
  {
    question:
      "Can an OEM present undated security cheques for Section 138 NI Act prosecution when an industrial dealer defaults?",
    answer:
      "Yes, provided the debt is legally enforceable and mature at the time of presentation. In Sripati Singh v. State of Jharkhand (2021) SCC OnLine SC 1002 and Sunil Todi v. State of Gujarat (2022) 16 SCC 762, the Supreme Court held that a cheque issued as security does not remain a lifeless piece of paper. When the underlying loan, credit purchase, or invoice liability matures and the debtor fails to discharge the liability, the creditor is entitled to present the security cheque. If the cheque bounces with remarks like 'funds insufficient' or 'stop payment', Section 138 criminal liability is triggered, provided the statutory 15-day notice is issued within 30 days of receiving the bank memo.",
  },
  {
    question:
      "Can a defaulting authorized dealer legally demand stock buyback or return of unsold inventory upon contract termination?",
    answer:
      "No, unless the dealership agreement specifically contains an express buyback covenant. Under Indian commercial law, authorized dealership agreements operate on a 'Principal-to-Principal' basis where property and risk in goods pass to the dealer upon delivery (Section 19 and 20 of the Sale of Goods Act, 1930). Retaining goods beyond a reasonable period without written rejection constitutes deemed acceptance under Section 42. Upon termination for default, the dealer cannot compel the OEM to accept returns of slow-moving or obsolete inventory to offset liquidated invoice debts.",
  },
  {
    question:
      "How can an OEM prevent a defaulting dealer from selling counterfeit or rival brand goods while holding authorized dealership rights?",
    answer:
      "The OEM must immediately serve a composite Dealership Termination & Cease-and-Desist Notice revoking the dealer's license to use OEM trademarks, logos, signage, and marketing literature. If the dealer continues passing off competitor or counterfeit goods under the OEM's brand, the OEM can file an urgent Commercial Intellectual Property Suit under Sections 29, 134, and 135 of the Trade Marks Act, 1999 read with Commercial Courts Act 2015. Courts readily grant ex-parte ad-interim injunctions and appoint Local Commissioners under Order XXXIX Rule 7 CPC to seize unauthorized goods and godown stock without prior notice.",
  },
  {
    question:
      "What evidence is required under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) to prove dealer invoice default in court?",
    answer:
      "To satisfy Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), the OEM must produce digitally verified computer records accompanied by an authoritative statutory electronic certificate. Key evidence includes: ERP/SAP ledger statements showing invoice generation and credit ledger entries; GST e-Way bills showing consignment movement from OEM plant to dealer godown; transporter Delivery Challans bearing dealer stamp/signature; bank account statements reflecting partial RTGS/NEFT payments; and email/WhatsApp correspondence acknowledging balances.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 138, 141, 142 & 143A) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 73, 74, 126, 128, 140, 171, 211 & 213)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Commercial Courts Act, 2015 (Sections 2(1)(c)(i), 12A Pre-Institution Mediation & Order XIII-A CPC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Sale of Goods Act, 1930 (Sections 19, 20, 41, 42 & 59 — Deemed Acceptance & Breach of Warranty Bar)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for ERP & GST Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15, 16, 17, 18 & 24 Non-Obstante Clause)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Autonomous Character & Injunction Bar Against Bank Guarantee Invocation",
    parties: "Ansal Engineering Enterprises Ltd. v. Tehri Hydro Development Corp. Ltd.",
    citation: "(1996) 5 SCC 450, Supreme Court of India",
    date: "Judgment Dated 18 September 1996",
    facts:
      "The appellant contractor challenged the encashment of an irrevocable, unconditional bank guarantee, arguing that contractual disputes regarding delays and non-performance were pending before an arbitrator and that invocation was premature.",
    holding:
      "The Supreme Court affirmed that an unconditional bank guarantee is an independent contract between the bank and the beneficiary. The bank is bound to honour its commitment upon demand without inquiring into the underlying contractual dispute. Judicial interference by way of injunction is impermissible except in egregious fraud known to the bank or irretrievable injustice.",
    amount: "Doctrine of Bank Guarantee Autonomy Upheld — Injunctions Prohibited",
    takeaway:
      "Industrial OEMs can invoke unconditional dealer bank guarantees immediately upon credit default without waiting for court or arbitral adjudication, securing instant liquidity.",
  },
  {
    title: "Supreme Court on Validity of Security Cheques for Section 138 Criminal Prosecution",
    parties: "Sripati Singh (Since Deceased) v. State of Jharkhand & Anr.",
    citation: "(2021) SCC OnLine SC 1002, Supreme Court of India",
    date: "Judgment Dated 28 October 2021",
    facts:
      "The debtor issued post-dated cheques labeled as 'security cheques' toward a business loan. Upon default, the creditor presented the cheques, which bounced for insufficient funds. The High Court quashed the Section 138 proceedings on the ground that cheques given as security could not attract criminal liability.",
    holding:
      "The Supreme Court overturned the High Court ruling, holding that when a loan or credit facility is unpaid on the due date, the debt matures into a legally enforceable liability. Consequently, a cheque originally issued as security becomes a regular negotiable instrument for repayment. Cheque dishonour squarely attracts Section 138 prosecution.",
    amount: "Security Cheques Validated for Section 138 NI Act Recovery",
    takeaway:
      "Rolling security cheques collected from industrial dealers upon signing dealership agreements can be validly presented and prosecuted under Section 138 when invoice ledgers remain unpaid.",
  },
  {
    title: "Supreme Court on Strict Mandatory Nature of Commercial Courts Pre-Institution Mediation",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "An engineering equipment supplier filed a commercial suit for unpaid machinery and component invoices without exhausting the pre-institution mediation procedure mandated under Section 12A of the Commercial Courts Act, 2015. The defendant sought rejection of the plaint under Order VII Rule 11 CPC.",
    holding:
      "The Supreme Court held that Section 12A mediation is mandatory for all commercial suits that do not contemplate urgent interim relief. Plaints filed in violation of Section 12A are liable to be rejected. However, where an urgent injunction or attachment before judgment under Order XXXVIII Rule 5 is pleaded, the suit can be instituted directly.",
    amount: "Section 12A Mandatory Compliance Established for Commercial Dues",
    takeaway:
      "Industrial OEMs recovering open credit dues must either initiate 30-day DLSA mediation under Section 12A or explicitly plead urgent interim relief (such as asset freezing or stock attachment) to institute direct suits.",
  },
  {
    title: "Supreme Court on Subrogation Rights of Guarantor Stepping Into Creditor's Shoes",
    parties: "State Bank of India v. V. Ramakrishnan & Anr.",
    citation: "(2018) 17 SCC 394, Supreme Court of India",
    date: "Judgment Dated 14 August 2018",
    facts:
      "Examining the interaction between guarantor liabilities and creditor rights under the Indian Contract Act, 1872 and the Insolvency and Bankruptcy Code, 2016, the court analyzed the statutory principle of subrogation under Section 140.",
    holding:
      "Under Section 140 of the Indian Contract Act, when a guarantor pays off the debt owed to a principal creditor, the guarantor is invested with all the rights and securities which the creditor held against the debtor. The paying guarantor steps into the shoes of the creditor with full legal standing to recover the debt.",
    amount: "Section 140 Subrogation Principle Confirmed",
    takeaway:
      "When an OEM's deposit or FLDG is debited by a bank due to channel finance distributor default, the OEM inherits all the bank's claims and personal guarantees against the dealer directors.",
  },
];

export default function IndustrialDealerCreditRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
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
    datePublished: "2026-11-16T08:00:00+05:30",
    dateModified: "2026-11-16T08:00:00+05:30",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Statutory Recovery SOP for Industrial OEM Dealer & Distributor Credit Defaults",
    description:
      "Operational legal protocol for credit heads at pumps, motors, cables, switchgear, bearings, and valves OEMs to enforce bank guarantees, execute contractual security deposit set-offs, and prosecute Section 138 NI Act defaults.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Credit Freeze & Forensic Telemetry Audit",
        text: "Immediately suspend ERP/SAP billing authorizations and lock outward dispatches. Reconcile signed Delivery Challans, bilties, and GST e-Way bills under BSA 2023 Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Security Deposit Set-Off & Bank Guarantee Invocation",
        text: "Issue formal letter of invocation to the issuing bank encashing the dealer's Bank Guarantee; simultaneously appropriate the cash security deposit against undisputed ledger balances.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Security Cheque & PDC Banking Presentment",
        text: "Present undated security cheques or PDCs held against the credit ceiling for clearing. Upon receipt of bank dishonour memo, issue 15-day statutory demand under Section 138 NI Act.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Comprehensive Dealership Termination & Cease-and-Desist Notice",
        text: "Serve advocate-drafted termination notice terminating authorized distributor status, revoking trademark usage, demanding return of proprietary marketing collateral, and declaring full balance maturity.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Commercial Suit Institution & Pre-Decree Asset Attachment",
        text: "File an Order XXXVII Summary Suit in Commercial Court with an urgent Order XXXVIII Rule 5 application to attach dealer warehouse stocks and bank accounts before judgment.",
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
        name: "Manufacturing & Machinery OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industrial Dealer Credit Default Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
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
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Operational Creditor SOP &bull; §6.6 IND-06 Channel Playbook</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words under H1 with inline parent Hub link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary &bull; Legal Directive
            </span>
            Authorized industrial dealers stretching 45-day rolling credit past 180 days while diverting collection proceeds to competitors trigger immediate contractual breach. Under the{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-300 font-bold underline hover:text-white transition-colors"
            >
              Manufacturing &amp; Industrial Machinery OEM Recovery
            </Link>{" "}
            framework, engineering manufacturers must swiftly execute contractual security deposit set-offs, enforce unconditional Bank Guarantees under the Ansal Engineering doctrine, and initiate Section 138 NI Act criminal prosecution for bounced security cheques.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">
                Typical Dealer Ticket
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100 mt-1 block">
                &rupee;10L &ndash; &rupee;2.0 Cr
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Per distributor default
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">
                BG Invocation Window
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400 mt-1 block">
                24 &ndash; 72 Hours
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Direct bank encashment
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">
                NI Act 138 Notice Cap
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400 mt-1 block">
                30 Days
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                From bank memo date
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">
                Interim Relief Under s.143A
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400 mt-1 block">
                Up to 20%
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Mandatory court deposit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Manufacturing & Machinery OEM Recovery",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "Industrial Dealer Credit Default Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky Sidebar TOC + Main Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <DealerRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Industrial Dealer Credit Trap */}
            <section
              id="heading-dealer-credit-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  The Industrial Dealer Credit Trap: High Tickets &amp; Cash Diversion
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Industrial original equipment manufacturers (OEMs) producing pumps, electric motors, high-voltage switchgear, cables, industrial valves, compressors, and bearings maintain distribution networks spanning 100 to 800 authorized regional stockists across India. Unlike FMCG or retail consumer distribution where retail kirana tickets are fragmented into small ₹5,000 to ₹25,000 buckets, an industrial authorized dealer holds rolling credit lines ranging from ₹10 Lakh to upwards of ₹2 Crore.
                </p>

                <p>
                  Because industrial components require high working capital and technical catalog stocking, OEMs routinely extend 30-to-45-day open credit cycles backed by nominal security deposits or partial Bank Guarantees (BGs). However, when industrial demand shifts or local engineering contractors face liquidity bottlenecks, defaulting distributors execute a predictable and predatory pattern: they stretch 45-day credit to 90, 120, and 180+ days.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-amber-950">
                  <span className="block text-xs uppercase tracking-wider font-extrabold text-amber-900 mb-1">
                    The Capital Diversion Failure Mode
                  </span>
                  Investigation across heavy engineering defaults reveals that defaulting dealers rarely halt sales. Instead, they liquidate the OEM&apos;s credit-supplied stock to local industrial end-users, pocket the cash realizations, and divert this liquid capital to buy spot-cash inventory of low-cost, unbranded, or Chinese rival brands offering 30% higher distributor margins. The OEM&apos;s capital is effectively weaponized against its own market share.
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    Channel Financing vs. Direct Open Credit: Structural Risk Profiles
                  </h3>
                  <p className="text-slate-600 mb-3 text-xs sm:text-sm">
                    Industrial OEM CFOs and credit controllers generally operate two distinct channel sales models, each carrying unique legal vulnerabilities:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">
                        Direct Balance-Sheet Open Credit (30–60 Days)
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        The OEM acts as the primary lender, absorbing 100% of the counterparty credit risk. Backed only by rolling PDCs, promissory notes, or small fixed deposits (₹5L–₹15L), defaults hit the OEM&apos;s working capital instantly. Recovery relies on contractual set-off, Section 138 NI Act prosecutions, and Commercial Court suits under Order XXXVII CPC.
                      </p>
                    </div>
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">
                        Bank/NBFC Channel Financing with OEM Recourse (FLDG)
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        Invoices are discounted by an institutional lender (e.g. TReDS, SIDBI, or partner commercial banks) providing T+2 liquidity to the OEM. However, tripartite agreements routinely mandate 10%–25% First Loss Default Guarantees (FLDG) or full recourse. When the dealer defaults, the bank debits OEM reserves, requiring the OEM to enforce subrogation rights under Section 140 of the Indian Contract Act.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Furthermore, when credit heads press for payment, dealers hide behind external EPC payment delays or manufacture spurious retrospective warranty counter-claims. Recovering high-ticket industrial channel dues requires immediate structural intervention: freezing ERP billing dispatches, forfeiting contractual security deposits, invoking bank guarantees, and initiating Section 138 Negotiable Instruments Act criminal proceedings alongside commercial suit litigation.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Recovery Matrix for Industrial Channel Debt
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                Industrial credit heads must navigate four distinct legal tracks to dismantle dealer intransigence. The matrix below outlines the exact bare-act hooks, enforcement timelines, and recovery remedies available under Indian law:
              </p>

              <div className="overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-left border-collapse border border-slate-200 text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] border border-slate-800">
                        Legal Remedy &amp; Track
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] border border-slate-800">
                        Governing Statute &amp; Doctrine
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] border border-slate-800">
                        Trigger Window
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] border border-slate-800">
                        Relief &amp; Enforcement Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900 border border-slate-200">
                          {row.remedy}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700 font-mono text-[11px] border border-slate-200">
                          {row.statute}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 border border-slate-200">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700 border border-slate-200 leading-relaxed">
                          {row.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                <span className="font-bold text-slate-900">Creditor Practice Note: </span>
                For suppliers qualifying under Udyam Micro or Small category, remember that MSMED Act Section 24 holds an express non-obstante clause overriding contradictory contract clauses. Cross-refer to the{" "}
                <Link
                  href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Samadhaan vs Legal Notice Guide
                </Link>{" "}
                and the{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to calculate 3x RBI compound penal interest.
              </div>
            </section>

            {/* Section 3: 5-Stage Escalation SOP Flowchart */}
            <section
              id="heading-escalation-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Escalation SOP for Industrial Channel Debt Recovery
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Recovering commercial receivables without sabotaging brand reputation requires a structured, escalation-based SOP. Below is the multi-track decision workflow for OEM Credit Heads:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 880 200"
                  className="w-full h-auto text-white select-none"
                  width={880}
                  height={200}
                >
                  {/* Step 1 */}
                  <g>
                    <rect
                      x="10"
                      y="30"
                      width="150"
                      height="130"
                      rx="12"
                      fill="#1E293B"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text x="85" y="60" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">
                      STAGE 1
                    </text>
                    <text x="85" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      ERP Dispatch Freeze
                    </text>
                    <text x="85" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Lock sales orders
                    </text>
                    <text x="85" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Audit e-Way bills
                    </text>
                    <text x="85" y="135" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Reconcile ledgers
                    </text>
                  </g>

                  {/* Arrow 1 */}
                  <path d="M 160 95 L 185 95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <g>
                    <rect
                      x="190"
                      y="30"
                      width="150"
                      height="130"
                      rx="12"
                      fill="#1E293B"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="265" y="60" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                      STAGE 2
                    </text>
                    <text x="265" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      BG Invocation &amp; Set-Off
                    </text>
                    <text x="265" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Demand issuing bank
                    </text>
                    <text x="265" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Ansal Engg doctrine
                    </text>
                    <text x="265" y="135" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Appropriate deposit
                    </text>
                  </g>

                  {/* Arrow 2 */}
                  <path d="M 340 95 L 365 95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <g>
                    <rect
                      x="370"
                      y="30"
                      width="150"
                      height="130"
                      rx="12"
                      fill="#1E293B"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="445" y="60" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                      STAGE 3
                    </text>
                    <text x="445" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      Cheque &amp; PDC Deposit
                    </text>
                    <text x="445" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Present for clearing
                    </text>
                    <text x="445" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Obtain bank memo
                    </text>
                    <text x="445" y="135" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Sripati Singh hook
                    </text>
                  </g>

                  {/* Arrow 3 */}
                  <path d="M 520 95 L 545 95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <g>
                    <rect
                      x="550"
                      y="30"
                      width="150"
                      height="130"
                      rx="12"
                      fill="#1E293B"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="625" y="60" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                      STAGE 4
                    </text>
                    <text x="625" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      15-Day Advocate Notice
                    </text>
                    <text x="625" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      NI Act 138 demand
                    </text>
                    <text x="625" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Contract termination
                    </text>
                    <text x="625" y="135" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Cease &amp; desist IP
                    </text>
                  </g>

                  {/* Arrow 4 */}
                  <path d="M 700 95 L 725 95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 5 */}
                  <g>
                    <rect
                      x="730"
                      y="30"
                      width="140"
                      height="130"
                      rx="12"
                      fill="#1E293B"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <text x="800" y="60" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">
                      STAGE 5
                    </text>
                    <text x="800" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      Court Decree &amp; Order 38
                    </text>
                    <text x="800" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Order 37 Summary Suit
                    </text>
                    <text x="800" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Stock attachment
                    </text>
                    <text x="800" y="135" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      Section 143A 20%
                    </text>
                  </g>

                  {/* Marker definition */}
                  <defs>
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  {
                    step: "Stage 1",
                    title: "ERP Dispatch Freeze & Ledger Audit",
                    desc: "Immediately flag dealer ID in SAP/ERP to block outward order releases. Audit outward GST e-Way bills and signed transport consignment notes under BSA Section 63.",
                  },
                  {
                    step: "Stage 2",
                    title: "Bank Guarantee Invocation & Deposit Set-Off",
                    desc: "Deliver urgent invocation letter to the issuing bank under the Ansal Engineering doctrine; execute contractual set-off of cash security deposits against overdue invoices.",
                  },
                  {
                    step: "Stage 3",
                    title: "Security Cheque / PDC Clearing Presentment",
                    desc: "Present post-dated cheques or security cheques for clearing. Upon receipt of bank dishonour memo, activate Section 138 NI Act statutory clock.",
                  },
                  {
                    step: "Stage 4",
                    title: "Composite 15-Day Advocate Notice",
                    desc: "Serve formal statutory legal notice demanding payment within 15 days, terminating authorized distributorship, and demanding immediate removal of OEM branding.",
                  },
                  {
                    step: "Stage 5",
                    title: "Commercial Suit & Order XXXVIII Rule 5 Stock Attachment",
                    desc: "Institute Order XXXVII Summary Suit in Commercial Court; file urgent application for attachment before judgment against dealer godown inventory and bank accounts.",
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 text-xs"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      {s.step}
                    </span>
                    <p className="font-bold text-slate-100 text-sm mb-1">{s.title}</p>
                    <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: 4 Channel Failure Modes (Scenario Tabs) */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  4 Channel Failure Modes: From Credit Stretching to Brand Abuse
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore the four most common commercial failure modes encountered by industrial OEM credit heads, complete with statutory hooks and creditor-side action plans:
              </p>

              <DealerRecoveryScenarioTabs />
            </section>

            {/* Section 5: Flawless BG Invocation & Security Deposit Set-Off */}
            <section
              id="heading-bg-deposit-setoff"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Executing Flawless Bank Guarantee (BG) Invocation &amp; Deposit Set-Off
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  When an authorized distributor defaults past the contractual grace period, the OEM&apos;s fastest liquidity tool is the direct encashment of available Bank Guarantees and the contractual appropriation of cash security deposits. However, procedural blunders in the invocation letter frequently lead to bank rejections or debtor-obtained court stays.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                    Checklist for Defect-Free Bank Guarantee Invocation
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-black shrink-0">&bull;</span>
                      <span>
                        <strong>Strict Adherence to BG Wording:</strong> The invocation letter must mirror the precise statutory language specified in the guarantee deed. If the BG requires the beneficiary to state that &ldquo;the dealer has committed a breach of the dealership agreement,&rdquo; omitting this exact phrase will give the issuing bank grounds to reject the demand.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-black shrink-0">&bull;</span>
                      <span>
                        <strong>Service at Specified Branch:</strong> The demand must be physically delivered via Speed Post RPAD or hand delivery against written acknowledgment at the exact bank branch designated in the guarantee document before the expiry date.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-black shrink-0">&bull;</span>
                      <span>
                        <strong>Authorized Signatory Verification:</strong> Ensure the invocation letter is signed by the designated corporate officer (Managing Director, CFO, or authorized Power of Attorney holder) supported by a certified Board Resolution.
                      </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Simultaneously, under Section 171 and general principles of contractual set-off under the Indian Contract Act, 1872, the OEM is entitled to appropriate the dealer&apos;s interest-free security deposit. The OEM must serve a formal <strong>Notice of Contractual Appropriation &amp; Set-Off</strong> stating the exact ledger invoices against which the deposit has been applied, rendering the balance sum a strictly liquidated net demand.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    Legal Independence of Unconditional Bank Guarantees
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 text-xs sm:text-sm">
                    In commercial contracts, a Bank Guarantee creates an autonomous tripartite contract. Under the doctrine reiterated by the Supreme Court in <em>Standard Chartered Bank v. Heavy Engineering Corporation Ltd. (2020) 13 SCC 574</em>, the issuing bank has no discretion to determine whether the dealer actually defaulted or whether the default was justified by market conditions. The bank is legally compelled to pay upon presentation of a conforming demand letter.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    If an issuing bank hesitates, demurs, or seeks the defaulting dealer&apos;s concurrence before releasing funds, the OEM should immediately serve a <strong>Banker&apos;s Regulatory Demand Notice</strong> citing RBI Master Circular on Guarantees &amp; Co-acceptances. Banks failing to honour encashments within 48 to 72 hours are subject to penal interest and banking ombudsman escalation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked ₹45L Ledger & Interest Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Worked &rupee;45 Lakh Dealer Default Ledger &amp; Net Realizable Recovery
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                Consider a typical scenario: An industrial electric motor OEM headquartered in Faridabad supplies an authorized distributor in Ludhiana under 45-day credit terms. The dealer defaults on 5 consecutive dispatches totaling ₹45,00,000, stretching aging past 150 days:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Component Breakdown
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Amount (&rupee;)
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between text-slate-200">
                    <span>Gross Unpaid Invoices (5 Consignments across 120 Days)</span>
                    <span className="font-mono font-bold">&rupee;45,00,000</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>Less: Invocation of Unconditional Bank Guarantee (HDFC Bank)</span>
                    <span className="font-mono font-bold">(&minus;&rupee;15,00,000)</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>Less: Contractual Appropriation of Cash Security Deposit</span>
                    <span className="font-mono font-bold">(&minus;&rupee;5,00,000)</span>
                  </div>
                  <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-2 font-semibold">
                    <span>Net Liquidated Principal Balance Due</span>
                    <span className="font-mono font-bold text-amber-400">&rupee;25,00,000</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>Contractual Default Interest (18% p.a. for 150 Overdue Days)</span>
                    <span className="font-mono font-bold text-slate-200">&rupee;1,84,931</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>MSMED Act Sec 16 Interest (~20.25% Monthly Compounding, if MSE)</span>
                    <span className="font-mono font-bold text-slate-200">&rupee;2,12,480</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">
                      Target Legal Claim Under Commercial Suit / Order XXXVII
                    </span>
                    <span className="text-sm font-bold text-white">
                      Liquidated Net Principal + Contractual Interest
                    </span>
                  </div>
                  <span className="text-base sm:text-xl font-black text-emerald-400 font-mono">
                    &rupee;26,84,931
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 leading-relaxed">
                <span className="font-bold text-emerald-900">Recovery Multiplier: </span>
                By immediately setting off the ₹15L Bank Guarantee and ₹5L security deposit, the OEM instantly reduces its balance sheet exposure from ₹45L down to ₹25L. The remaining ₹25L balance is covered by the dealer&apos;s two dishonoured security cheques of ₹12.5L each, setting the foundation for Section 138 NI Act prosecution and Order XXXVII Summary Suit with an interim 20% deposit demand under Section 143A.
              </div>
            </section>

            {/* Section 7: BSA Section 63 Evidence Audit */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  BSA Section 63 Digital Evidence Audit: ERP Telemetry &amp; E-Way Bills
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, electronic evidence requires strict statutory certification to be admissible in Commercial Courts without oral witness testimony. Industrial OEMs must assemble an airtight digital dossier to neutralize debtor denials of delivery:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      1. GST e-Way Bill &amp; Portal Verification
                    </span>
                    <p className="text-slate-600">
                      Download timestamped e-Way bill records showing active transit from OEM manufacturing unit to dealer godown, vehicle registration numbers, and RFID toll plaza logs verifying arrival at dealer destination.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      2. Transporter Bilties &amp; Delivery Challans
                    </span>
                    <p className="text-slate-600">
                      Produce physical or scanned consignment notes (bilties) and OEM delivery challans bearing the dealer&apos;s official rubber stamp, receiving date, and warehouse manager signature.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      3. ERP / SAP Certified Ledger Statements
                    </span>
                    <p className="text-slate-600">
                      Extract system-generated customer ledgers showing dispatch invoice numbers, credit limits, security deposit deductions, and partial RTGS/NEFT payments accompanied by a BSA Section 63 electronic certificate.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      4. Written Confirmations &amp; WhatsApp Admissions
                    </span>
                    <p className="text-slate-600">
                      Archive email threads, balance confirmation letters (annual audit confirmations), and WhatsApp messages from dealer directors acknowledging outstanding balances or promising future payment dates.
                    </p>
                  </div>
                </div>

                <p>
                  If you are dealing with other specialized manufacturing disputes, explore our guides on{" "}
                  <Link
                    href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Custom Industrial Machinery Commissioning Balance Recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Auto-Ancillary Arbitrary Debit Note &amp; Tooling Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Preemption Matrix for Dealer Defenses */}
            <section
              id="heading-preemption-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Neutralizing Common Authorized Dealer Defenses &amp; Debit Notes
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                When confronted with formal legal demand notices, defaulting industrial distributors routinely fabricate identical pretexts to obstruct recovery. Here is how institutional creditors dismantle these defenses before court:
              </p>

              <div className="space-y-4">
                {PREEMPTION_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold text-red-700 uppercase tracking-wider text-[11px] shrink-0 mt-0.5">
                        Dealer Pretext:
                      </span>
                      <p className="font-semibold text-slate-900 italic">{item.excuse}</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block mb-0.5">
                        Statutory Defense Shield: {item.statutoryShield}
                      </span>
                      <p className="text-slate-600 leading-relaxed">{item.counterMeasure}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: 15-Day Advocate Notice SOP */}
            <section
              id="heading-advocate-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  15-Day Advocate Demand &amp; Dealership Termination Notice SOP
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  A routine commercial reminder email has zero statutory teeth against a calculated distributor default. To create immediate settlement pressure, the OEM must serve a composite, advocate-vetted <strong>15-Day Statutory Legal Demand &amp; Termination Notice</strong> that incorporates five mandatory legal components:
                </p>

                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  <li>
                    <strong>Recital of Dealership Agreement &amp; Invoices:</strong> Detail the contract date, agreed 30-to-45-day credit period, invoice numbers, signed delivery challans, and GST e-Way bills establishing an undisputed liquidated sum.
                  </li>
                  <li>
                    <strong>Notice of Set-Off &amp; Guarantee Invocation:</strong> Detail the exact sums appropriated from the dealer&apos;s security deposit and bank guarantee, quantifying the net mature debt balance.
                  </li>
                  <li>
                    <strong>Section 138 NI Act Dishonour Notice:</strong> If security cheques bounced, incorporate the statutory 15-day cure window under Section 138 with explicit notice of director liability under Section 141.
                  </li>
                  <li>
                    <strong>Dealership Revocation &amp; Cease-and-Desist:</strong> Formally terminate authorized dealer status, revoke trademark and logo usage rights, demand removal of OEM authorized signage from physical premises within 72 hours, and bar further distribution.
                  </li>
                  <li>
                    <strong>Notice of Commercial Litigation:</strong> State that upon failure to remit the balance within 15 days, the OEM will institute an Order XXXVII Summary Suit in the designated Commercial Court, seeking attachment of dealer godown assets under Order XXXVIII Rule 5 CPC.
                  </li>
                </ol>

                <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 my-4 text-xs font-mono">
                  <span className="text-red-400 font-bold block mb-2 text-[11px] uppercase tracking-wider font-sans">
                    Recommended Dealership Termination &amp; Demand Clause Language:
                  </span>
                  <p className="text-slate-300 leading-relaxed italic font-sans">
                    &ldquo;TAKE NOTICE that on account of your failure to liquidate the matured invoice ledger balance of &rupee;[Amount] within the contractual credit period of 45 days, our client hereby exercises its contractual right under Clause [X] of the Dealership Agreement to terminate your authorized distributorship with immediate effect. You are called upon to immediately remove all signage, trademarks, and logos of our client from your premises. Furthermore, TAKE NOTICE that under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881, you and your directors are hereby called upon to pay the sum of &rupee;[Cheque Amount] within 15 days of receipt of this notice, failing which our client shall initiate criminal prosecution alongside civil summary proceedings under Order XXXVII CPC.&rdquo;
                  </p>
                </div>

                <p>
                  For medium enterprises excluded from MSME Samadhaan, read our detailed analysis on{" "}
                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Medium Enterprises Excluded from MSME Samadhaan: Faster Legal Routes
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 10: Dual-Track Institutional Recovery Desk (CTA) */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Dual-Track Institutional Recovery Desk for Industrial OEMs
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Whether you need to resolve a single high-ticket distributor default or restructure an entire national dealer network across 10 to 1,000+ channel partners, LegalRecovery.in provides enterprise-grade legal enforcement:
              </p>

              <DealerRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions for Industrial OEM Credit Heads
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Detailed statutory answers to high-stakes legal questions surrounding dealer default, bank guarantee encashment, and channel credit recovery:
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 sm:p-5 transition-colors open:bg-white"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm leading-snug list-none">
                      <span className="pr-4">{faq.question}</span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Authoritative Judicial Precedents & Legislative Sources */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  12
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Judicial Precedents &amp; Legislative Sources
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Key Supreme Court rulings governing bank guarantees, security cheques, and commercial summary proceedings in industrial channel defaults:
              </p>

              <div className="space-y-5 mb-8">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#DC2626] block mb-1">
                        Supreme Court Precedent &bull; {item.citation}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mb-2">
                        {item.parties} ({item.date})
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        <strong>Facts: </strong>
                        {item.facts}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        <strong>Holding: </strong>
                        {item.holding}
                      </p>
                      <div className="p-2.5 bg-red-50/70 border border-red-200/60 rounded-lg text-xs text-red-950 font-medium">
                        <strong>OEM Takeaway: </strong>
                        {item.takeaway}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 block mb-3">
                  Primary Statutory References:
                </span>
                <ul className="space-y-2 text-xs">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] hover:underline transition-colors"
                      >
                        {src.title} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Contextual Library Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
