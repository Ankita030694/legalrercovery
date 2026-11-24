import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import ImporterTableOfContents from "./ImporterTableOfContents";
import ImporterScenarioTabs from "./ImporterScenarioTabs";
import ImporterNoticeCTA from "./ImporterNoticeCTA";

// Static Route Metadata conforming strictly to Screaming Frog 60-character Title & 155-character Description constraints
export const metadata: Metadata = {
  title: "Foreign Supplier Took Advance & Didn't Ship? Importer Relief",
  description:
    "Remitted TT advance to an overseas supplier who vanished or sent scrap? Actionable cross-border recovery protocol and RBI IDPMS FEMA defense for Indian importers.",
  alternates: {
    canonical:
      "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
  },
  openGraph: {
    title: "Foreign Supplier Took Advance & Didn't Ship? Importer Relief",
    description:
      "Remitted TT advance to an overseas supplier who vanished or sent scrap? Actionable cross-border recovery protocol and RBI IDPMS FEMA defense for Indian importers.",
    url: "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreign Supplier Took Advance & Didn't Ship? Importer Relief",
    description:
      "Remitted TT advance to an overseas supplier who vanished or sent scrap? Actionable cross-border recovery protocol and RBI IDPMS FEMA defense for Indian importers.",
  },
};

const PAGE_HEADLINE =
  "Indian Importer Protection: Recovering Unfulfilled Foreign TT Advances, Fighting 'Stones-in-Container' Scrap Fraud & Clearing RBI IDPMS Entries";

const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud#article",
      isPartOf: {
        "@type": "WebPage",
        "@id":
          "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
      },
      headline: PAGE_HEADLINE,
      description:
        "Sent USD 80,000 TT advance to an overseas machinery or scrap supplier who vanished—leaving your AD Bank chasing YOU on RBI IDPMS? Urgent recovery + FEMA defense.",
      mainEntityOfPage:
        "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
      inLanguage: "en-IN",
      datePublished: "2026-11-17T09:00:00+05:30",
      dateModified: "2026-11-17T09:00:00+05:30",
      author: {
        "@type": "Organization",
        name: "LegalRecovery Cross-Border Trade & FEMA Litigation Group",
        url: "https://www.legalrecovery.in",
      },
      publisher: {
        "@type": "Organization",
        name: "LegalRecovery.in",
        url: "https://www.legalrecovery.in",
      },
    },
    {
      "@type": "HowTo",
      "@id":
        "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud#howto",
      name: "How Indian Importers Can Recover Unfulfilled TT Advances and Close RBI IDPMS Entries",
      description:
        "Five-stage operational SOP to claw back overseas wire advances, freeze fraudulent beneficiary bank accounts, and defend against FEMA Section 10(6) ED enforcement.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Golden Hour SWIFT Recall & Cyber Freeze",
          text: "Trigger SWIFT MT192/MT292 recall through Indian remitting AD Bank and register immediate cybercrime incident on 1930 / cybercrime.gov.in.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Customs Panchnama & Independent Survey",
          text: "In cases of cargo substitution (stones/waste), obtain certified Customs Joint Examination Panchnama and accredited marine surveyor report under BSA s.63.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Cross-Border Advocate Demand Notice",
          text: "Issue Hague Service Convention and CISG compliant statutory legal notice demanding instant TT refund and liquidated damages.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Consulate Commercial Wing & Interpol Red Notice Track",
          text: "Lodge trade dispute complaints with Indian Embassy Commercial Counselor overseas and local foreign trade chambers.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "RBI IDPMS Time Extension & Write-Off Defense",
          text: "Submit formal petition with AD Category-I Bank under Master Direction Para C.1/C.3 to avoid FEMA Section 10(6) prosecution and ED hawala suspicion.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Industries",
          item: "https://www.legalrecovery.in/industries",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Exporters & Cross-Border Trade",
          item: "https://www.legalrecovery.in/industries/exporters-cross-border-trade-recovery",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Import Advance & IDPMS Recovery Guide",
          item: "https://www.legalrecovery.in/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does the RBI IDPMS system treat cheated Indian importers like hawala suspects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Foreign Exchange Management Act, 1999 (FEMA) and RBI Master Direction on Import of Goods and Services, an Authorised Dealer (AD) Bank monitors all outward remittances via the Import Data Processing and Monitoring System (IDPMS). If physical import goods do not cross customs and generate an electronic Bill of Entry (BOE) within 6 months of an outward Telegraphic Transfer (TT) advance, the software tags the transaction as an open, unfulfilled remittance. Unless the Indian importer demonstrates active legal recovery efforts or official fraud reports, banking surveillance and the Enforcement Directorate (ED) may suspect unauthorized foreign exchange siphoning or illegal capital flight under FEMA Section 10(6).",
          },
        },
        {
          "@type": "Question",
          name: "What immediate action should be taken if an overseas supplier delivers stones or mud instead of metal scrap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not move the container from the Inland Container Depot (ICD) or port premises. Immediately issue a Joint Inspection Notice to the shipping line, customs house agent (CHA), and overseas vendor. Conduct container de-stuffing strictly in the presence of a certified independent marine/cargo surveyor and Customs examination officers, obtaining a formal Customs Panchnama and certified video recording. Concurrently, lodge a criminal complaint under Sections 318(4) and 316(2) of the Bharatiya Nyaya Sanhita, 2023 (BNS) for cheating and criminal breach of trust, and submit the survey evidence to your AD Bank to halt IDPMS non-compliance tagging.",
          },
        },
        {
          "@type": "Question",
          name: "Can an Indian bank initiate a SWIFT recall once the TT advance has been credited to the foreign supplier's bank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, via an MT192 (Request for Cancellation) or MT292 message transmitted directly to the overseas correspondent bank. While a recipient bank generally requires beneficiary consent to debit funds once credited, immediate flagging of cyber fraud, Business Email Compromise (BEC), or forged proforma invoices triggers local anti-money laundering (AML) compliance holds. In jurisdictions like Hong Kong, UAE, or the UK, Indian importers can also seek an urgent court freezing order (e.g. Mareva injunction or HK Section 21M relief) against the receiving account.",
          },
        },
        {
          "@type": "Question",
          name: "How can an Indian importer obtain an Extension of Time (EOT) or write-off for an unfulfilled import advance under RBI directions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under Para C.1 and C.3 of the RBI Master Direction on Import of Goods and Services, AD Category-I banks possess delegated authority to grant extensions of time for settling advance import remittances beyond 6 months, provided the importer demonstrates bona fide intent and unavoidable delays. If the foreign supplier has defrauded the importer or become untraceable, the bank can approve a regulatory write-off of the open IDPMS entry upon receiving proof of advocate-served cross-border demand notices, police/cyber FIRs, and formal representations before the relevant Indian Embassy or Trade Mission.",
          },
        },
        {
          "@type": "Question",
          name: "What statutory penalties apply under FEMA Section 10(6) if an open import advance is not settled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under Section 10(6) read with Section 13 of FEMA, 1999, failure to utilize foreign exchange for the declared import purpose or failure to repatriate unutilized foreign exchange to India within the prescribed time exposes the importing entity and its directors to penalties of up to three times the sum remitted, along with potential attachment of domestic bank accounts and prosecution by the Enforcement Directorate. Establishing documented, proactive cross-border legal recovery is the single strongest statutory defense against such penalties.",
          },
        },
        {
          "@type": "Question",
          name: "Does Indian court jurisdiction apply to a fraudulent foreign supplier located in China, Turkey, or the UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While Indian civil courts may assert jurisdiction where the contract was accepted or payment remitted, enforcing an Indian domestic money decree overseas can be challenging without bilateral reciprocal enforcement treaties under Section 44A of the Civil Procedure Code (CPC). A multi-track approach is most effective: serving an advocate legal notice citing the UN Convention on Contracts for the International Sale of Goods (CISG) or chosen governing law, lodging trade fraud petitions with the Indian Embassy/Consulate Commercial Wing, and engaging local counsel in the foreign supplier's jurisdiction for summary asset freezing and insolvency filings.",
          },
        },
      ],
    },
  ],
};

export default function IndianImporterAdvancePaidRecoveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DATA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>FEMA Section 10(6) Protection</span>
              <span>&bull;</span>
              <span>RBI IDPMS Regulatory Defense</span>
              <span>&bull;</span>
              <span>Cross-Border Commercial Fraud</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {PAGE_HEADLINE}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor &amp; Importer Compliance Answer
              </span>
              When an Indian manufacturer or trader remits an outward Telegraphic Transfer (TT) advance to an overseas supplier who vanishes or ships substitute waste (stones, slag, water containers), the importer faces dual jeopardy: total loss of commercial capital and severe regulatory scrutiny under the{" "}
              <Link
                href="/industries/exporters-cross-border-trade-recovery"
                className="text-red-400 underline hover:text-red-300 font-semibold"
              >
                RBI Master Direction on Import of Goods and Services
              </Link>
              . If no electronic Bill of Entry matches the remittance in the Import Data Processing and Monitoring System (IDPMS) within 180 days, Authorised Dealer (AD) Banks are statutorily mandated to tag the importer for FEMA Section 10(6) contraventions and refer the case to the Directorate of Enforcement (ED) for suspected unauthorized foreign exchange flight. Immediate cross-border legal demand notices, customs joint survey panchnamas, cybercrime SWIFT recalls, and embassy trade dispute filings are the only legally recognized safeguards to freeze regulatory blacklisting and compel overseas fund repatriation.
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-amber-400">180 Days</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
                  RBI IDPMS BOE Window
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-red-400">3x Amount</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
                  FEMA S.13 Statutory Penalty
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">24-48 Hrs</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
                  SWIFT MT192 Recall Golden Window
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-slate-100">Para C.3</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">
                  AD Bank Write-Off Mechanism
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                {
                  label: "Exporters & Cross-Border Trade",
                  href: "/industries/exporters-cross-border-trade-recovery",
                },
                {
                  label: "Import Advance & IDPMS Recovery Guide",
                  href: "/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
                },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC Sidebar */}
            <ImporterTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    The Cross-Border Import Advance Trap: When Overseas Suppliers Default
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Indian industrial enterprises across heavy engineering, metal recycling, active pharmaceutical ingredients (APIs), polymers, electronics, and solar infrastructure routinely operate under rigid commercial terms requiring 15% to 100% advance outward remittances via Telegraphic Transfer (TT). When an overseas supplier based in China, the UAE, Turkey, Western Europe, or North America fails to fulfill their obligations, the Indian buyer enters a devastating crisis.
                  </p>
                  <p>
                    Unlike domestic commercial disputes where Indian courts exercise immediate civil and criminal jurisdiction under the Bharatiya Nyaya Sanhita (BNS) and the Commercial Courts Act, 2015, cross-border vendor defaults plunge Indian CFOs and promoters into a regulatory vice. Beyond the direct financial loss, the transaction immediately falls under regulatory surveillance governed by the Reserve Bank of India (RBI) and the Foreign Exchange Management Act, 1999 (FEMA).
                  </p>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-medium">
                    <p className="text-xs sm:text-sm">
                      <strong>The Twin Crises of Cross-Border Trade:</strong> Indian trade regulations treat cross-border capital with zero tolerance. While Indian exporters battle the Export Data Processing and Monitoring System (EDPMS) for unpaid invoices under our{" "}
                      <Link
                        href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                        className="text-[#DC2626] underline font-semibold hover:text-red-700"
                      >
                        RBI EDPMS Unrealized Export Dues Guide
                      </Link>
                      , Indian importers confront the mirror terror: <strong>IDPMS</strong>. If an outward advance is remitted and no matching Bill of Entry is registered within 180 days, your business is flagged for illegal hawala flight unless formal legal recovery is initiated.
                    </p>
                  </div>
                  <p>
                    This statutory operational guide provides corporate legal teams, business owners, and finance heads with the exact procedural framework needed to recover defaulted import advances, combat physical cargo substitution fraud (&quot;stones in scrap containers&quot;), invoke emergency SWIFT recalls, and secure definitive regulatory clearance under the RBI Master Direction on Import of Goods and Services.
                  </p>
                </div>
              </section>

              {/* SECTION 2: IDPMS Trap & FEMA Section 10(6) */}
              <section
                id="heading-idpms-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    The RBI IDPMS Architecture &amp; FEMA Section 10(6) Contravention Risks
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Under Section 10(6) of the Foreign Exchange Management Act, 1999, any person or corporate entity in India who acquires foreign exchange for a specified purpose is legally required to utilize that foreign currency exclusively for that declared purpose, or repatriate it to India within the prescribed statutory period.
                  </p>
                  <p>
                    When an Indian enterprise instructs its Authorised Dealer Category-I (AD) Bank to issue an outward TT remittance for goods import, the AD Bank records the transaction on the <strong>Import Data Processing and Monitoring System (IDPMS)</strong>—the central automated database tracking physical import flows against foreign currency outflows across Indian customs ports (ICEGATE) and banking rails.
                  </p>

                  {/* Dark Callout: Statutory Enforcement Mechanics */}
                  <div className="p-5 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-xl border border-slate-800 space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-red-400 uppercase tracking-wider">
                      Statutory Escalation Timeline for Unfulfilled Import Advances
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 font-bold shrink-0">Day 1:</span>
                        <span>Outward TT advance remitted by AD Bank against Proforma Invoice / Contract. Form A2 lodged on IDPMS.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 font-bold shrink-0">Day 90–120:</span>
                        <span>Expected shipment arrival window. If no electronic Bill of Entry (BOE) auto-populates via ICEGATE, automated system alerts trigger bank follow-ups.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold shrink-0">Day 180 (6 Months):</span>
                        <span>Statutory threshold under RBI Master Direction. The transaction turns delinquent on IDPMS. AD Bank issues formal regulatory warning letter demanding BOE submission or fund repatriation.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">Day 210+:</span>
                        <span>Failure to submit proof of bona fide legal dispute results in AD Bank reporting the importer to the Reserve Bank of India and the Directorate of Enforcement (ED) under suspected FEMA Section 10(6) hawala capital flight.</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    The critical danger for the cheated Indian importer is that the Enforcement Directorate operates on an evidentiary presumption: an unfulfilled outward foreign exchange remittance without physical goods entry represents prima facie evidence of unauthorized overseas fund parkment or round-tripping. To defeat this statutory presumption, the importer must present comprehensive proof of aggressive, bona fide legal recovery initiated prior to regulatory inquiry.
                  </p>
                </div>
              </section>

              {/* SECTION 3: Statutory Defense & Comparison Matrix */}
              <section
                id="heading-recovery-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Statutory Defense Matrix: Comparing Recovery Rails Across Jurisdictions
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Recovering foreign currency advances requires matching the legal mechanism to the nature of the default, the destination jurisdiction, and the regulatory demands of the Indian banking system.
                </p>

                <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                  <div className="inline-block min-w-full align-middle px-5 sm:px-6 md:px-8">
                    <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden text-left text-xs sm:text-sm">
                      <thead className="bg-slate-900 text-white font-semibold">
                        <tr>
                          <th className="py-3 px-3 sm:px-4">Recovery Forum / Rail</th>
                          <th className="py-3 px-3 sm:px-4">Statutory Basis</th>
                          <th className="py-3 px-3 sm:px-4">Turnaround Time</th>
                          <th className="py-3 px-3 sm:px-4">IDPMS Defense Utility</th>
                          <th className="py-3 px-3 sm:px-4">Cross-Border Reach</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            Advocate Cross-Border Demand Notice
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Hague Service Convention, CISG, Local Civil Code
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-700 font-semibold">
                            7–15 Days
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-700 font-bold">
                            High (Immediate proof of bona fide dispute for AD Bank)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Global (Sent via DHL RPAD + Certified Legal Email)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            SWIFT Recall (MT192 / MT292)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Correspondent Banking Rules &amp; FATF AML Guidelines
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-700 font-semibold">
                            24–72 Hours
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700">
                            Moderate (Only successful if funds not yet withdrawn)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Inter-Bank Banking Network
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            Customs Panchnama &amp; Police Cyber FIR
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            BNS 2023 ss. 318(4), 316(2); Customs Act s. 143A
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-amber-700 font-semibold">
                            15–30 Days
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-700 font-bold">
                            Critical (Mandatory for Cargo Substitution / Scrap Fraud)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Domestic Law Enforcement &amp; Interpol Coordination
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            Embassy Commercial Counselor Complaint
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Bilateral Trade Promotion &amp; Consular Trade Missions
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700">
                            30–60 Days
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700 font-semibold">
                            Substantial (Governmental confirmation of dispute)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Country of Overseas Vendor
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                            Overseas Court Freezing Order / Litigation
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            HK s.21M, UK Mareva Injunction, DIFC Courts
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-red-700 font-semibold">
                            3–12 Months
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-700 font-bold">
                            Conclusive (Allows full AD Bank IDPMS write-off)
                          </td>
                          <td className="py-3 px-3 sm:px-4">
                            Local Jurisdiction of Beneficiary
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/recovery/export-dues"
                    className="text-xs sm:text-sm font-semibold text-[#DC2626] hover:underline"
                  >
                    &rarr; Explore Cross-Border Export Dues Legal Recovery
                  </Link>
                  <span className="hidden sm:inline text-slate-400">|</span>
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-xs sm:text-sm font-semibold text-[#DC2626] hover:underline"
                  >
                    &rarr; Legal Notice Framework for International Debtors
                  </Link>
                </div>
              </section>

              {/* SECTION 4: 5-Stage Decision Tree & Flowchart */}
              <section
                id="heading-escalation-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    4
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    5-Stage Operational Escalation Protocol: From Default to IDPMS Closure
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  The following operational workflow establishes immediate legal pressure on the delinquent foreign vendor while creating an impenetrable evidentiary audit trail for the remitting AD Bank and the Reserve Bank of India.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center">
                  <svg
                    viewBox="0 0 800 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-2xl mx-auto h-auto"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="130" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="85" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="85" y="80" fill="#F9FAFB" fontSize="10" textAnchor="middle">SWIFT Recall</text>
                    <text x="85" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">&amp; Cyber Freeze (1930)</text>

                    {/* Arrow 1-2 */}
                    <path d="M150 75 H175" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="175,70 185,75 175,80" fill="#E5E7EB" />

                    {/* Stage 2 */}
                    <rect x="185" y="30" width="130" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="250" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="80" fill="#F9FAFB" fontSize="10" textAnchor="middle">Joint Survey &amp;</text>
                    <text x="250" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">Customs Panchnama</text>

                    {/* Arrow 2-3 */}
                    <path d="M315 75 H340" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="340,70 350,75 340,80" fill="#E5E7EB" />

                    {/* Stage 3 */}
                    <rect x="350" y="30" width="130" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="415" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="415" y="80" fill="#F9FAFB" fontSize="10" textAnchor="middle">Cross-Border Legal</text>
                    <text x="415" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">Demand Notice (CISG)</text>

                    {/* Arrow 3-4 */}
                    <path d="M480 75 H505" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="505,70 515,75 505,80" fill="#E5E7EB" />

                    {/* Stage 4 */}
                    <rect x="515" y="30" width="130" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="580" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="580" y="80" fill="#F9FAFB" fontSize="10" textAnchor="middle">Embassy Dispute &amp;</text>
                    <text x="580" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">Overseas Court Action</text>

                    {/* Arrow 4-5 */}
                    <path d="M645 75 H670" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="670,70 680,75 670,80" fill="#E5E7EB" />

                    {/* Stage 5 */}
                    <rect x="680" y="30" width="105" height="90" rx="10" fill="#1F2937" stroke="#10B981" strokeWidth="2" />
                    <text x="732" y="60" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="732" y="80" fill="#F9FAFB" fontSize="10" textAnchor="middle">IDPMS EOT /</text>
                    <text x="732" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">RBI Para C.3 Write-Off</text>

                    {/* Connective Bottom Line */}
                    <path d="M85 120 V180 H732 V120" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="4 4" />
                    <rect x="260" y="160" width="280" height="40" rx="8" fill="#111827" stroke="#4B5563" />
                    <text x="400" y="185" fill="#E5E7EB" fontSize="11" fontWeight="bold" textAnchor="middle">
                      FEMA Section 10(6) ED Scrutiny Prevented
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Escalation Protocol */}
                <div className="md:hidden space-y-4 my-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase">Stage 1</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">SWIFT Recall &amp; 1930 Cyber Freeze</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Instruct AD Bank to transmit MT192 recall and log crime details on cybercrime.gov.in within 24–48 hours of detecting payment diversion or ghost entity status.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase">Stage 2</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">Customs Panchnama &amp; Independent Survey</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      For cargo fraud (stones, sludge in scrap), de-stuff under Customs supervision and certified marine surveyor; file BNS 318(4) cheating FIR.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase">Stage 3</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">Cross-Border Legal Demand Notice</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Issue formal fact-verified notice to foreign supplier entity and directors asserting CISG, local civil liability, and Hague convention service.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase">Stage 4</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">Embassy Trade Dispute &amp; Local Injunction</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Escalate to Indian Mission Commercial Wings; engage local counsel in supplier country for bank asset freezes.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-emerald-600 uppercase">Stage 5</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">IDPMS EOT &amp; RBI Write-Off Submission</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Present recovery documentation to AD Bank for formal Extension of Time (EOT) or write-off under RBI Master Direction Para C.3.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <ImporterNoticeCTA />
                </div>
              </section>

              {/* SECTION 5: Interactive Failure Mode Scenarios */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    5
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Interactive Commercial Failure Modes: Red Flags &amp; Statutory Responses
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Select your specific operational crisis below to inspect the statutory red flags, immediate tactical remedies, and the exact legal documentation required to satisfy your Authorised Dealer Bank:
                </p>

                <ImporterScenarioTabs />
              </section>

              {/* SECTION 6: Worked Financial Calculation Box */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    6
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Worked Financial Case Study: USD 80,000 TT Advance Default &amp; IDPMS Ledger
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    <strong>Case Background:</strong> An Ahmedabad-based secondary steel manufacturing unit remits a 30% advance of <strong>USD 80,000 (INR 67,20,000 @ INR 84/USD)</strong> via its Authorised Dealer Bank to a scrap trading firm registered in Dubai (UAE) for 500 MT of Heavy Melting Steel (HMS 1/2) scrap. Three 40-foot containers arrive at Nhava Sheva (JNPT) ICD. Upon opening under Customs supervision, the containers are found to be packed with concrete pavers, scrap mud, and unworked quarry stones.
                  </p>
                </div>

                {/* Financial Ledger Display */}
                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-4">
                  <div className="text-xs uppercase tracking-widest text-red-400 font-bold border-b border-slate-800 pb-2">
                    Financial Exposure &amp; Regulatory Liability Breakdown
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Principal Outward TT Advance:</span>
                        <span className="font-mono text-slate-100 font-bold">USD 80,000 (INR 67.20 L)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Shipping Line Demurrage &amp; Port Ground Rent:</span>
                        <span className="font-mono text-slate-100 font-bold">INR 8,40,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Customs Duty on Declared Invoice Value:</span>
                        <span className="font-mono text-amber-400 font-bold">INR 5,04,000 (Provisional)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Total Immediate Working Capital Loss:</span>
                        <span className="font-mono text-red-400 font-bold">INR 80,64,000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">FEMA S.13 Potential Statutory Penalty (3x):</span>
                        <span className="font-mono text-red-400 font-bold">INR 2,01,60,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">IDPMS Delinquency Tagging Date:</span>
                        <span className="font-mono text-amber-400 font-bold">Day 181 (Automatic)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Legal Recovery Cost via LegalRecovery.in:</span>
                        <span className="font-mono text-emerald-400 font-bold">&rupee;999 Flat Notice</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Total Statutory Liability Avoided:</span>
                        <span className="font-mono text-emerald-400 font-bold">&gt; INR 2.01 Crores</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300 leading-relaxed">
                    <strong>Operational Outcome:</strong> By serving a fact-verified Hague Service notice within 10 days of the customs joint survey, lodging a BNS Section 318(4) cheating complaint, and petitioning the AD Bank with the certified survey panchnama under RBI Para C.1, the importer secured a 180-day regulatory extension, prevented ED prosecution, and forced the supplier&apos;s local trading sponsor to negotiate a USD 65,000 settlement.
                  </div>
                </div>
              </section>

              {/* SECTION 7: Evidence Checklist & BSA s.63 */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    7
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Evidence Checklist &amp; BSA 2023 Section 63 Electronic Audit Trail
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic evidence—including commercial emails, digital proforma invoices, SWIFT MT103 confirmations, WhatsApp communications, and ICEGATE electronic records—must be backed by a certified Section 63 certificate to hold evidentiary weight before Indian courts, police cyber cells, and the Reserve Bank of India.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Contractual &amp; Banking Records
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Executed Purchase Agreement / Sales Contract with explicit governing law &amp; delivery terms (INCOTERMS 2020)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Certified Proforma Invoice displaying supplier corporate registration and beneficiary bank IBAN/SWIFT</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Authorised Dealer Bank Outward Remittance Advice &amp; SWIFT MT103 telegraphic transfer copy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Form A2 declaration filed with AD Bank under Foreign Exchange Management Act</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Forensic &amp; Statutory Proof of Fraud
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Certified RFC 5322 email headers and IT forensic audit trail verifying BEC spoofing or fraudulent instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Customs Examination Panchnama &amp; certified video recording of container de-stuffing at port/ICD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Independent Marine/Cargo Surveyor Certificate confirming material deviation or non-existent scrap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Formal Cyber Crime Portal acknowledgment / FIR copy registered under BNS 2023 Sections 318(4) &amp; 316(2)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                  <strong>Statutory Best Practice:</strong> Compile all items above into a unified indexed dossier before meeting with your AD Bank&apos;s Chief Manager (Forex). Presenting a fact-verified evidence bundle demonstrates active legal recovery under RBI Para C.1, obligating the bank to grant regulatory relief.
                </div>
              </section>

              {/* SECTION 8: FAQ Accordions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    8
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Frequently Asked Questions: Importer Recovery &amp; IDPMS Compliance
                  </h2>
                </div>

                <div className="space-y-4">
                  {SCHEMA_DATA["@graph"][3].mainEntity.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-slate-300"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-slate-900 text-xs sm:text-sm">
                        <span>{faq.name}</span>
                        <span className="text-[#DC2626] group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2">
                          &#9660;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 9: Statutory Sources */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    9
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                    Statutory Authorities &amp; Regulatory Precedents
                  </h2>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <div>
                      <strong>Foreign Exchange Management Act, 1999 (FEMA)</strong> — Section 10(6) (Obligation to utilize foreign exchange for declared purpose) and Section 13 (Penalties up to three times the contravened sum).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <div>
                      <strong>RBI Master Direction — Import of Goods and Services (Updated 2026)</strong> — Section C (Operational guidelines for Authorised Dealer Banks on IDPMS entries, 180-day tracking, Extension of Time, and write-off criteria under Para C.3).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <div>
                      <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> — Section 318(4) (Cheating and dishonestly inducing delivery of property) &amp; Section 316(2) (Criminal breach of trust).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <div>
                      <strong>Customs Act, 1962</strong> — Section 143A &amp; Section 46 (Entry of goods on importation, joint examination, and verification of suspect cargo).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <div>
                      <strong>Hague Service Convention &amp; CISG</strong> — United Nations Convention on Contracts for the International Sale of Goods (1980) governing cross-border seller breach and buyer restitution rights.
                    </div>
                  </li>
                </ul>

                {/* Sibling Spokes Cross-Links */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Related Cross-Border Trade &amp; Regulatory Guides
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs">
                    <Link
                      href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] rounded-lg border border-slate-200 transition-colors font-medium"
                    >
                      RBI EDPMS Write-Off &amp; Caution List Guide
                    </Link>
                    <Link
                      href="/ecgc-export-credit-insurance-claim-legal-notice-default-procedure"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] rounded-lg border border-slate-200 transition-colors font-medium"
                    >
                      ECGC Credit Insurance Claim Notice SOP
                    </Link>
                    <Link
                      href="/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] rounded-lg border border-slate-200 transition-colors font-medium"
                    >
                      CAD / DP Abandoned Port Container Recovery
                    </Link>
                    <Link
                      href="/recovery/international-client-payment"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] rounded-lg border border-slate-200 transition-colors font-medium"
                    >
                      International Client Payment Recovery Solutions
                    </Link>
                  </div>
                </div>
              </section>

              {/* Bottom Institutional Dual CTA */}
              <div className="pt-4">
                <ImporterNoticeCTA />
                <div className="mt-4 p-4 bg-slate-100 rounded-xl border border-slate-200 text-center">
                  <p className="text-xs text-slate-600 mb-2">
                    Managing multiple open IDPMS advances or cross-border vendor defaults across your group?
                  </p>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="inline-flex items-center text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    Upload Bulk Supplier Default Cases via CSV (10 to 10,000+ files) &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links */}
        <div className="border-t border-slate-200">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
