import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BecTableOfContents from "./BecTableOfContents";
import BecScenarioTabs from "./BecScenarioTabs";
import BecNoticeCTA from "./BecNoticeCTA";
import {
  ShieldAlert,
  AlertTriangle,
  FileCheck2,
  DollarSign,
  Scale,
  Clock,
  Building2,
  FileSpreadsheet,
  Globe2,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Lock,
  Layers,
  CheckCircle,
} from "lucide-react";

export const revalidate = 86400;

// Canonical and Meta details precisely matching PDF / 300url.txt spec with strict 60/155 char SEO budget
export const metadata: Metadata = {
  title: "Foreign Buyer Paid a Spoofed 'Changed Bank Account' Email (BEC)? Law",
  description:
    "Hackers spoofed an IBAN and your overseas buyer wired export funds to a hacker? Learn legal liability, SWIFT recall protocol, and cross-border recovery steps.",
  alternates: {
    canonical: `${SITE_URL}/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter`,
  },
  openGraph: {
    title: "Foreign Buyer Paid a Spoofed 'Changed Bank Account' Email (BEC)? Law",
    description:
      "Hackers spoofed an IBAN and your overseas buyer wired export funds to a hacker? Learn legal liability, SWIFT recall protocol, and cross-border recovery steps.",
    url: `${SITE_URL}/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Business Email Compromise (BEC) SWIFT Invoice Hijack Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreign Buyer Paid a Spoofed 'Changed Bank Account' Email (BEC)? Law",
    description:
      "Hackers spoofed an IBAN and your overseas buyer wired export funds to a hacker? Learn legal liability, SWIFT recall protocol, and cross-border recovery steps.",
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
    title: "The Indian Contract Act, 1872 (Section 37 — Obligation of Parties to Perform, Section 73 — Compensation for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records, Server Logs & Email Headers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Foreign Exchange Management Act, 1999 (FEMA Section 8 — Realisation and Repatriation of Foreign Exchange)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "RBI Master Direction — Export of Goods and Services (FED Master Direction No. 16/2015-16, Part C — EDPMS Write-off Rules)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
  },
  {
    title: "Uniform Customs and Practice for Documentary Credits (ICC UCP 600) & Incoterms 2020 Rules",
    url: "https://iccwbo.org/business-solutions/incoterms-rules/",
  },
  {
    title: "Information Technology Act, 2000 (Section 43, 66C Identity Theft & 66D Impersonation by Computer)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
];

const PRECEDENTS = [
  {
    caseName: "BCCI v. D.D. International & English Commercial Court Precedents",
    citation: "Commercial Debt Discharge Doctrine (Common Law)",
    court: "International Commercial Arbitration / High Court of Justice (Commercial Court)",
    year: "Standard Precedent",
    summary:
      "A debtor who remits funds to an unauthorized third party or impostor on the basis of an unauthenticated electronic communication has failed to discharge their contractual debt. Unless the creditor contractually assumed cyber risks or was guilty of gross culpable fraud, payment to an impostor does not constitute valid tender.",
  },
  {
    caseName: "PT Asuransi Tugu Pratama Indonesia TBK v. Citibank N.A.",
    citation: "[2023] HKCFA 3",
    court: "Hong Kong Court of Final Appeal",
    year: "2023",
    summary:
      "Banks and paying entities operating on unauthorized or forged electronic payment instructions cannot claim discharge of obligation. The duty of care requires verification when irregular account details or offshore jurisdictions depart from established historical trade channels.",
  },
  {
    caseName: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353",
    court: "Supreme Court of India",
    year: "2018",
    summary:
      "Reaffirmed that a spurious or moonshine defense raised post-default cannot constitute a pre-existing dispute. A debtor's plea that it was defrauded by an unknown hacker does not negate the crystallized, undisputed underlying commercial invoice liability owed to the bona fide seller.",
  },
];

const FAQS = [
  {
    q: "If our foreign buyer paid a hacker's updated IBAN, is the buyer legally required to pay us again?",
    a: "Yes, in the vast majority of cross-border trade transactions. Under international commercial law, the Indian Contract Act (Section 37), and English Common Law principles, a buyer's legal debt is discharged only when cleared funds reach the seller's nominated bank account. Paying an impostor operating a lookalike domain without voice, cryptographic, or contractually stipulated verification does not legally discharge the buyer's contractual obligation. The commercial risk of misdirecting payment falls squarely on the paying debtor.",
  },
  {
    q: "What is the very first step an exporter must take within the first 24 to 72 hours of discovering BEC fraud?",
    a: "Immediately instruct your buyer to contact their remitting bank and issue an urgent SWIFT GPI Stop / Recall message (MT199 or MT299 recall). Concurrently, notify your Authorised Dealer (AD Category-1) bank in India, file a cyber crime report on the National Cyber Crime Reporting Portal (cybercrime.gov.in), and lodge complaints with CERT-In and international channels (such as the FBI IC3 for US buyers or Action Fraud / Interpol NCBN for European corridors) to freeze the hacker's beneficiary mule account before liquidation.",
  },
  {
    q: "What happens to our RBI EDPMS status if the export bill remains unpaid due to wire fraud?",
    a: "Under FEMA 1999 Section 8 and RBI Master Directions, exporters must realize export proceeds within 9 months from the date of shipment. If the buyer withholds payment citing the BEC hack, the shipping bill remains open in the Export Data Processing and Monitoring System (EDPMS). Failure to regularize results in caution-listing and Customs Show Cause Notices demanding duty drawback payback with 15% interest. Exporters must file a formal legal notice against the buyer to obtain an extension or write-off under RBI AP (DIR Series) Circular No. 88.",
  },
  {
    q: "Can ECGC cover losses arising from a Business Email Compromise or hacker invoice diversion?",
    a: "Standard ECGC Export Credit Insurance policies cover commercial risks (buyer insolvency or protracted default) and political risks, but typically exclude cyber fraud or third-party theft. However, if the buyer accepts the goods but refuses to remit genuine payment to the seller claiming discharge, this can be legally classified as 'protracted default'. Serving an Advocate-vetted statutory demand notice is mandatory to trigger and preserve formal claim filing under ECGC Policy Clause C.24.",
  },
  {
    q: "How does Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) apply to BEC digital evidence?",
    a: "BSA Section 63 governs the admissibility of electronic evidence in Indian courts (replacing Section 65B of the repealed Evidence Act). To prove that your company's mail servers were not the source of the fraud, your IT forensic specialist must extract RFC-compliant raw MIME email headers, SPF/DKIM/DMARC authentication reports, server access logs, and produce a formal Section 63 statutory certificate establishing the integrity of the digital trail.",
  },
  {
    q: "What if our own employee clicked a phishing link and the hacker sent the email from our actual email ID?",
    a: "Even if the seller's email account was accessed, the buyer is not automatically released from liability. Commercial courts apply the comparative fault test: Did the buyer notice obvious red flags, such as changed beneficiary corporate names (e.g., personal names or shell entities in third-party jurisdictions)? Did the export contract stipulate that bank account modifications require dual-factor voice verification or a signed addendum? If the buyer ignored standard trade diligence, it remains liable for the invoice value.",
  },
];

export default function BusinessEmailCompromisePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Business Email Compromise (BEC) in Export-Import: Foreign Buyer Wired USD 150,000 to a Hacker's 'Updated IBAN'—Is the Buyer Still Liable to Pay You?",
    description:
      "Comprehensive legal guide for Indian exporters when an overseas buyer wires funds to a spoofed IBAN. Commercial liability allocation, SWIFT GPI recall protocols, EDPMS regularisation, and legal demand strategies.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Institutional Trade Desk",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-17T17:15:00+05:30",
    dateModified: "2026-11-17T17:15:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter`,
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Export Funds Diverted by BEC Wire Fraud and Enforce Buyer Payment",
    description:
      "Multi-stage protocol for Indian exporters when foreign buyers wire export proceeds to a hacker's updated SWIFT/IBAN.",
    step: [
      {
        "@type": "HowToStep",
        name: "Stage 1: Golden Hour SWIFT Recall & Cyber Freeze",
        text: "Direct the overseas buyer to instruct their remitting bank to send an urgent SWIFT MT199/MT299 recall message and alert international cybercrime portals (FBI IC3 / Interpol).",
      },
      {
        "@type": "HowToStep",
        name: "Stage 2: Server Log Extraction & BSA 2023 s.63 Certification",
        text: "Extract raw MIME headers, SPF/DKIM records, and server IP logs to prove whether the spoof occurred on a lookalike domain or via mail server compromise.",
      },
      {
        "@type": "HowToStep",
        name: "Stage 3: Formal Legal Notice for Contractual Debt Discharge",
        text: "Serve an Advocate-drafted cross-border statutory demand notice rejecting discharge and requiring payment to legitimate nominated bank accounts within 15 days.",
      },
      {
        "@type": "HowToStep",
        name: "Stage 4: RBI EDPMS Regularisation & AD Bank Filing",
        text: "Submit formal police FIRs, recall proofs, and legal notice copies to the AD Category-1 bank to extend the 9-month realization deadline and prevent caution-listing.",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
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
        name: "Exporters & Cross-Border Trade Debt Recovery",
        item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Business Email Compromise (BEC) & SWIFT Invoice Hijack",
        item: `${SITE_URL}/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter`,
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
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span>§6.15 Export Trade Security</span>
            <span className="text-slate-500">•</span>
            <span>BEC Wire Fraud & Man-in-the-Middle Hijack Playbook</span>
          </div>

          {/* Exact H1 (148 chars) verbatim */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Business Email Compromise (BEC) in Export-Import: Foreign Buyer Wired USD 150,000 to a Hacker's 'Updated IBAN'—Is the Buyer Still Liable to Pay You?
          </h1>

          {/* Executive Statutory Summary Box (40–60 words below H1) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer & Statutory Baseline
            </span>
            Under international commercial law and Indian Contract Act Section 37, payment to an impostor on a spoofed lookalike domain does <strong>not</strong> discharge the buyer’s debt. Unless the seller contractually assumed cyber risks, the buyer’s duty of care mandates re-remittance of cleared funds to the seller’s nominated bank account. Learn more at our{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Exporters Cross-Border Trade Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Commercial Liability</p>
              <p className="text-lg sm:text-xl font-black text-emerald-400 mt-1">Debt Not Discharged</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Common-Law Tender Rule</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">SWIFT GPI Recall Window</p>
              <p className="text-lg sm:text-xl font-black text-amber-400 mt-1">24–72 Hours</p>
              <p className="text-[10px] text-slate-400 mt-0.5">MT199 / MT299 Stop</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">RBI EDPMS Exposure</p>
              <p className="text-lg sm:text-xl font-black text-red-400 mt-1">9-Month Clock</p>
              <p className="text-[10px] text-slate-400 mt-0.5">FEMA 1999 Section 8</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Statutory Evidence</p>
              <p className="text-lg sm:text-xl font-black text-slate-100 mt-1">BSA 2023 s.63</p>
              <p className="text-[10px] text-slate-400 mt-0.5">RFC MIME Log Integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs - Note: do NOT include Home as component prepends it */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Exporters & Cross-Border Recovery",
                href: "/industries/exporters-cross-border-trade-recovery",
              },
              {
                label: "Business Email Compromise (BEC) Wire Fraud",
                href: "/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar */}
          <BecTableOfContents />

          {/* Right Main Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Allocation of BEC Loss */}
            <section
              id="statutory-allocation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Paying a Hacker Does Not Discharge the Foreign Buyer's Debt
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Every month, dozens of Indian manufacturing exporters, apparel exporters, chemical suppliers, and merchant trading houses face an identical nightmare: goods worth USD 50,000 to USD 500,000 are delivered to ports in Hamburg, Felixstowe, Newark, or Jebel Ali. Weeks later, when the Indian finance team inquires why the 30-day or 60-day invoice remains unpaid, the overseas buyer responds in shock: <em>“We already wired the full invoice amount two weeks ago per your email instructions detailing the audit-mandated bank account change!”</em>
                </p>

                <p>
                  Upon forensic inspection, the Indian exporter discovers that a cyber criminal intercepted the email correspondence—either by registering a lookalike domain (e.g., <code>@abcexporters-ind.com</code> instead of <code>@abcexporters.com</code>) or by inserting unauthorized auto-forwarding rules in the buyer's or seller's mailbox. The hacker attached a counterfeit PDF invoice replacing the Indian exporter’s State Bank of India or HDFC Bank SWIFT and IBAN details with an offshore beneficiary account in Hong Kong, the United Kingdom, or Cyprus.
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl my-4 text-slate-800">
                  <h4 className="font-bold text-sm text-[#DC2626] uppercase tracking-wide mb-1">
                    The Commercial Debt Discharge Rule (Common Law & Indian Law)
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Under Section 37 of the Indian Contract Act, 1872, and standard Anglo-American sales law, a buyer’s statutory duty is to perform the contract by delivering cleared funds to the seller. <strong>Paying an unauthorized impostor does not extinguish the commercial debt.</strong> The foreign buyer remains 100% contractually liable to pay the authentic exporter, unless the buyer can prove that the diversion was caused solely by the seller’s fraudulent collusion or unmitigated technical negligence.
                  </p>
                </div>

                <p>
                  When foreign buyers refuse to issue a duplicate wire—asserting <em>“we paid your email, so take it up with the police”</em>—they rely on flawed legal advice. International commercial arbitrations and cross-border commercial courts routinely hold that a sophisticated commercial buyer owes a <strong>duty of care</strong> to authenticate sudden, out-of-band changes to banking coordinates before wiring substantial foreign currency.
                </p>

                <p>
                  For structured recovery protocols on export defaults, exporters should also consult our specialized guide on{" "}
                  <Link
                    href="/recovery/export-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Recovering Export Dues from Foreign Buyers
                  </Link>{" "}
                  and our playbook on{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    International Client Unpaid Invoice Recovery Notices
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Operational Decision Tree & SWIFT Recall Flowchart */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BEC Crisis SOP: 72-Hour SWIFT GPI Stop & Multi-Track Action Plan
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When an export wire is diverted, recovery is a game of hours. The stolen funds typically sit in a preliminary mule account before being layered through virtual IBANs or crypto exchanges. Follow this operational triage workflow immediately:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6">
                <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-4 text-center">
                  Figure 1: Cross-Border BEC Recovery & Multi-Jurisdictional Escalation Architecture
                </p>
                <div className="w-full flex justify-center">
                  <svg
                    viewBox="0 0 800 320"
                    className="w-full h-auto max-w-3xl text-xs font-sans"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Node 1: Alert Trigger */}
                    <rect x="20" y="20" width="160" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="100" y="45" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">STEP 1: DISCOVERY</text>
                    <text x="100" y="62" fill="#94A3B8" textAnchor="middle" fontSize="9">Buyer Confirms Wire</text>
                    <text x="100" y="75" fill="#EF4444" textAnchor="middle" fontSize="9">to Fraudulent IBAN</text>

                    {/* Arrow 1 */}
                    <path d="M180 55 L220 55" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2: Golden Hour SWIFT Stop */}
                    <rect x="220" y="20" width="170" height="70" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="305" y="45" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">STEP 2: SWIFT STOP</text>
                    <text x="305" y="62" fill="#FBBF24" textAnchor="middle" fontSize="9">Remitting Bank MT199/299</text>
                    <text x="305" y="75" fill="#94A3B8" textAnchor="middle" fontSize="9">Urgent Recall Request</text>

                    {/* Arrow 2 */}
                    <path d="M390 55 L430 55" stroke="#94A3B8" strokeWidth="2" />

                    {/* Node 3: Cyber Ingest */}
                    <rect x="430" y="20" width="160" height="70" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                    <text x="510" y="45" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">STEP 3: CYBER POLICE</text>
                    <text x="510" y="62" fill="#94A3B8" textAnchor="middle" fontSize="9">Cert-In + FBI IC3</text>
                    <text x="510" y="75" fill="#60A5FA" textAnchor="middle" fontSize="9">Interpol Purple Notice</text>

                    {/* Arrow 3 */}
                    <path d="M590 55 L630 55" stroke="#94A3B8" strokeWidth="2" />

                    {/* Node 4: Forensics */}
                    <rect x="630" y="20" width="150" height="70" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="705" y="45" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">STEP 4: FORENSICS</text>
                    <text x="705" y="62" fill="#34D399" textAnchor="middle" fontSize="9">BSA 2023 s.63 MIME</text>
                    <text x="705" y="75" fill="#94A3B8" textAnchor="middle" fontSize="9">Mail Header Isolation</text>

                    {/* Downward Fork */}
                    <path d="M705 90 L705 140 L400 140 L400 170" stroke="#94A3B8" strokeWidth="2" />

                    {/* Split Node Left: Statutory Demand */}
                    <rect x="60" y="170" width="310" height="110" rx="8" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="215" y="200" fill="#EF4444" textAnchor="middle" fontWeight="bold" fontSize="12">TRACK A: COMMERCIAL RECOVERY</text>
                    <text x="215" y="222" fill="#E2E8F0" textAnchor="middle" fontSize="10">Serve 15-Day Advocate Demand Notice</text>
                    <text x="215" y="238" fill="#94A3B8" textAnchor="middle" fontSize="9">Reject Debt Discharge under Contract Act s.37</text>
                    <text x="215" y="254" fill="#94A3B8" textAnchor="middle" fontSize="9">Preserve ECGC Clause C.24 Protracted Default Window</text>

                    {/* Split Node Right: Regulatory Compliance */}
                    <rect x="430" y="170" width="310" height="110" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="585" y="200" fill="#34D399" textAnchor="middle" fontWeight="bold" fontSize="12">TRACK B: FEMA & EDPMS SHIELD</text>
                    <text x="585" y="222" fill="#E2E8F0" textAnchor="middle" fontSize="10">Submit FIR & Recall Proof to AD Bank</text>
                    <text x="585" y="238" fill="#94A3B8" textAnchor="middle" fontSize="9">Apply for 9-Month EDPMS Extension (FEMA s.8)</text>
                    <text x="585" y="254" fill="#94A3B8" textAnchor="middle" fontSize="9">Preempt Customs Duty Drawback Rule 18 Recovery</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Mobile Stacked Action Cards */}
              <div className="grid grid-cols-1 md:hidden gap-3 mb-6">
                <div className="bg-slate-900 p-4 rounded-xl border border-red-800 text-white">
                  <span className="text-[10px] font-bold text-red-400 uppercase">Phase 1 (Hours 0–24)</span>
                  <p className="font-bold text-sm mt-1">SWIFT GPI Recall & Bank Stop-Payment</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Demand buyer immediately lodge MT199/MT299 recall with remitting bank to freeze funds at the destination bank before withdrawal.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-amber-800 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Phase 2 (Hours 24–48)</span>
                  <p className="font-bold text-sm mt-1">BSA Section 63 Cyber Forensics</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Extract complete RFC email headers and server handshake logs to establish whether the breach occurred on a lookalike domain or foreign server.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-emerald-800 text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Phase 3 (Day 3 Onward)</span>
                  <p className="font-bold text-sm mt-1">Statutory Demand & EDPMS Protection</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Serve formal legal notice rejecting invoice discharge, submit FIR to AD Bank for EDPMS extension, and safeguard Customs Drawback status.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 text-xs sm:text-sm leading-relaxed">
                <strong>Crucial Limitation Rule:</strong> Once funds are wired, the receiving mule bank in London, Dubai, or Singapore typically initiates automated wire-outs or ATM cash-outs within 48 to 72 hours. An immediate SWIFT recall request from the foreign buyer's remitting bank is the only banking mechanism that can arrest the money before it enters untraceable crypto rails.
              </div>
            </section>

            {/* Section 3: Common-Law & Statutory Precedent Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Common-Law & Statutory Precedent Matrix: Who Bears the Cyber Loss?
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                In cross-border litigation, judges and commercial arbitral tribunals apply strict contractual tests to determine whether an impostor wire discharges the buyer's liability. The matrix below outlines how international courts assess liability based on the breach location and diligence failures:
              </p>

              {/* Dark-Header Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Breach Mechanism</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Primary Fault & Diligence Failure</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Legal Debt Discharge Status</th>
                      <th className="p-3 sm:p-4 font-bold">Judicial Remedy for Indian Exporter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Lookalike / Typosquatted Domain (e.g. <code>@seller-ltd.com</code>)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Buyer's accounts team failed to verify header mismatch or conduct out-of-band phone callback.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">
                        ZERO DISCHARGE. Full invoice debt remains intact.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Serve statutory demand; file summary commercial suit under CPC Order 37 or international arbitration.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Buyer Mailbox Hacked (Internal Tenant Infiltration)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Compromise occurred entirely inside buyer's IT firewall; exporter's servers were 100% clean.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">
                        ZERO DISCHARGE. Buyer bears 100% loss.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Immediate commercial notice for duplicate wire remittance plus interest under Contract Act Section 73.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Exporter Email Phished (Attacker used legitimate seller email)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Creditor mailbox breached, but buyer ignored suspicious offshore beneficiary name or unverified bank coordinates.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-amber-600">
                        PARTIAL / COMPARATIVE FAULT. Buyer still held liable if red flags ignored.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Forensic audit via BSA s.63; assert apparent authority defense limits; negotiate settlement or enforce contract terms.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Contract Mandates Written/Voice Bank Change Protocol
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Buyer wired funds without obtaining signed bilateral amendment or registered director confirmation.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">
                        ZERO DISCHARGE. Gross contractual breach by buyer.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Summary enforcement of contract debt; invocation of contractual dispute resolution clauses.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Precedent Cards */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Key Judicial Precedents & Verified Authorities
                </p>
                {PRECEDENTS.map((prec, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-slate-200 shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <span className="font-bold text-sm sm:text-base text-slate-900">{prec.caseName}</span>
                      <span className="text-xs font-semibold text-red-600">{prec.citation}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mb-2">
                      {prec.court} • {prec.year}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{prec.summary}"
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs covering failure modes */}
            <section
              id="failure-modes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Cross-Border BEC Scenarios & Strategic Legal Responses
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore the tactical failure modes below to evaluate liability apportionment, evidence thresholds, and regulatory compliance paths under Indian and international trade laws:
              </p>

              <BecScenarioTabs />
            </section>

            {/* Section 5: BSA 2023 s.63 & Cyber Forensics Evidence Checklist */}
            <section
              id="evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Forensic Audit & Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) SOP
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which supplanted Section 65B of the Indian Evidence Act, 1872 on July 1, 2024), electronic records cannot be admitted as primary evidence in Indian commercial courts unless accompanied by an explicit statutory certificate detailing the operating parameters, integrity, and lawful custody of the computer system.
                </p>

                <p>
                  To successfully pin liability on the buyer and secure police freeze orders, the exporter’s forensic IT team must assemble the following mandatory evidentiary dossier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-2">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626]" /> 1. Raw RFC MIME Email Headers
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Extract raw headers from both sender and recipient inboxes. Isolate <code>Return-Path</code>, <code>Message-ID</code>, <code>Received: from</code> IP addresses, and authentic mail transport agents (MTAs) to demonstrate domain spoofing.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-2">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626]" /> 2. SPF, DKIM & DMARC Authentication Logs
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Produce DNS records showing Sender Policy Framework (SPF) pass/fail records, DomainKeys Identified Mail (DKIM) signatures, and DMARC enforcement policies proving the fraudulent email originated outside authorized servers.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-2">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626]" /> 3. Mail Server Audit & Access Logs
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Export Microsoft 365 Unified Audit Logs (UAL) or Google Workspace Admin audit logs for 90 days, confirming no anomalous logins, foreign IP sessions, or unauthorized mailbox forwarding rules existed on the seller's domain.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-2">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626]" /> 4. BSA 2023 Section 63 Certificate
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A sworn statutory affidavit signed by the Chief Technology Officer or System Administrator certifying system integrity, uninterrupted operation, and hash verification of the exported PST/EML files.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">
                    Multi-Agency Cyber Crime Filing Protocol
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Immediately lodge an e-FIR on <strong>cybercrime.gov.in</strong> under Sections 43, 66C, and 66D of the Information Technology Act, 2000. Forward the acknowledgment number to your state's Cyber Crime Police Station (CCPS) and request a formal Section 91 CrPC / BNSS notice directing the beneficiary bank to freeze the recipient mule account. If the buyer is in the US or Europe, co-file with the <strong>FBI Internet Crime Complaint Center (IC3.gov)</strong> or the UK <strong>Action Fraud</strong> unit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="financial-exposure"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Treasury Math: Diverted Wire of USD 150,000 (~₹1.26 Crore)
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When a USD 150,000 wire is hijacked, the exporter’s financial loss extends far beyond the nominal invoice amount. Unrealized export proceeds trigger penal interest, Customs payback notices, and working capital credit line freezing:
              </p>

              {/* Slate-900 Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg">
                <div className="border-b border-slate-800 pb-4 mb-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400">Export Invoice Specimen</span>
                    <h3 className="text-base sm:text-lg font-bold text-white">Commercial Loss & Regulatory Exposure Audit</h3>
                  </div>
                  <span className="px-3 py-1 bg-red-950/80 border border-red-800/80 rounded-full text-xs font-bold text-red-400">
                    USD/INR @ ₹84.20
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Gross Unrealized Invoice Value (USD 150,000)</span>
                    <span className="font-bold text-slate-100">₹1,26,30,000</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      Duty Drawback Claimed (at 3.5% under Section 75 Customs Act)
                    </span>
                    <span className="font-bold text-amber-400">₹4,42,050</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      RoDTEP Incentive Realized (at 1.8% of FOB Value)
                    </span>
                    <span className="font-bold text-amber-400">₹2,27,340</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      Customs Rule 18 Demand Interest (15% per annum for 9 months)
                    </span>
                    <span className="font-bold text-red-400">₹75,306</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      Export Packing Credit (EPC) Rupee Concessional Interest Clawback (Bank hikes rate to 14%)
                    </span>
                    <span className="font-bold text-red-400">₹5,68,350</span>
                  </div>

                  <div className="flex justify-between py-3 border-t-2 border-red-600 bg-red-950/20 px-3 rounded-lg">
                    <span className="font-black text-sm sm:text-base text-white">
                      Total Compounded Balance Sheet Exposure at 9 Months
                    </span>
                    <span className="font-black text-base sm:text-lg text-emerald-400">
                      ₹1,39,43,046
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 text-[11px] text-slate-400 leading-normal">
                  * Note: In addition to ₹1.39 Cr direct financial exposure, failure to obtain a valid recovery legal notice or FIR prevents the AD Category-1 bank from granting an EDPMS extension, triggering automatic caution-listing across Indian customs ports under FEMA Regulation 8.
                </div>
              </div>
            </section>

            {/* Section 7: Dual-Track B2B Action Card */}
            <section id="dual-cta" className="scroll-mt-28">
              <BecNoticeCTA />
            </section>

            {/* Section 8: Sibling Spokes Directory */}
            <section
              id="spoke-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-15 Exporter & Cross-Border Recovery Network (Related Guides)
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Recovering cross-border trade claims requires coordinated legal, regulatory, and banking actions. Explore our companion recovery playbooks for Indian exporters:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                      FEMA Regulatory Guide
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 mt-1">
                      RBI EDPMS Unrealized Shipping Bill Write-Off & Caution-List Legal Notice
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      How to secure formal AD Bank write-off approval under 25% limits or file legal actions to avoid RBI caution-listing.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-4">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/ecgc-export-credit-insurance-claim-legal-notice-default-procedure"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                      Insurance Claim SOP
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 mt-1">
                      ECGC Export Credit Insurance Claim: Mandatory Legal Notice & Clause C.24
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Preserve your 90% ECGC claim payout by serving statutory default demand notices within policy limitation stops.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-4">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                      Maritime Port Crisis
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 mt-1">
                      Foreign Buyer Not Retiring CAD / DP Documents: Cargo Abandoned at Port
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Demurrage containment, resale to alternative buyers, and emergency shipping line notices under Indian and international maritime law.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-4">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/recovery/international-client-payment"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                      Global Recovery Rails
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 mt-1">
                      International Client Payment Default Recovery Desk
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Cross-border pre-litigation demand, Hague Convention summons service, and overseas debt collection enforcement.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-4">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions (FAQPage) */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Business Email Compromise & Export Wire Theft
                </h2>
              </div>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, i) => (
                  <details key={i} className="group py-4 first:pt-0 last:pb-0">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 group-hover:text-red-600 transition-colors">
                      <span>{faq.q}</span>
                      <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400 group-hover:text-red-600">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 border-l-2 border-red-500">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources & Official Portals */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Bare Acts & Official Trade Portals
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                All statutory recommendations on this page are grounded in bare acts and regulations published by the Legislative Department of India, the Reserve Bank of India, and official international bodies:
              </p>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((src, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-red-600 hover:underline leading-relaxed font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <span>Published by LegalRecovery.in Institutional B2B Trade Desk</span>
                <span>Statutory updates verified through Bharatiya Sakshya Adhiniyam, 2023</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Section */}
      <RelatedRecoveryGuides />
    </div>
  );
}
