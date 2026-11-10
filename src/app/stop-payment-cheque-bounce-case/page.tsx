import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import StopPaymentNoticeCTA from "./StopPaymentNoticeCTA";
import StopPaymentTableOfContents from "./StopPaymentTableOfContents";
import StopPaymentProblemTabs from "./StopPaymentProblemTabs";
import StopPaymentChecklistWizard from "./StopPaymentChecklistWizard";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Stop Payment Cheque Bounce: Is Section 138 Attracted?",
  description:
    "Cheque returned as 'payment stopped'? When Section 138 still applies, the defences that work, and the deadlines to act.",
  alternates: {
    canonical: `${SITE_URL}/stop-payment-cheque-bounce-case`,
  },
  openGraph: {
    title: "Stop Payment Cheque Bounce: Is Section 138 Attracted? (Supreme Court Rulings)",
    description:
      "Drawer stopped payment? Learn why Section 138 NI Act is fully attracted under Modi Cements & Goaplast, narrow drawer defences, and statutory 30-day notice deadlines.",
    url: `${SITE_URL}/stop-payment-cheque-bounce-case`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Sections 138, 139, 140, 141, 142, 143A & 148",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Supreme Court Judgment in Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249 — 3-Judge Bench on Stop Payment Liability",
    url: "https://main.sci.gov.in/judgment/judis/14983.pdf",
  },
  {
    title: "Supreme Court Judgment in Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232 — Stop Payment Instructions & Presumption of Liability",
    url: "https://main.sci.gov.in/judgment/judis/18320.pdf",
  },
  {
    title: "Supreme Court Judgment in Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375 — Cheque Dishonour for Reasons Beyond Insufficiency",
    url: "https://main.sci.gov.in/judgment/judis/39745.pdf",
  },
  {
    title: "Supreme Court Guidelines in Sanjabij Tari v. Kishore S. Borcar (2025 INSC 1113 / 25 Sep 2025) — Nationwide Compounding, E-Summons & Case Management",
    url: "https://main.sci.gov.in/supremecourt/2024/29841/29841_2024_1_1501_56412_Judgement_25-Sep-2025.pdf",
  },
  {
    title: "Supreme Court Judgment in MSR Leathers v. S. Palaniappan (2013) 1 SCC 86 — Multiple Presentations of Cheque Within Validity Period",
    url: "https://main.sci.gov.in/judgment/judis/39566.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bank CTS Memos & Speed Post Tracking)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "3-Judge Supreme Court Ruling on Stop Payment Attracting Section 138",
    parties: "Modi Cements Ltd. v. Kuchil Kumar Nandi",
    citation: "(1998) 3 SCC 249; AIR 1998 SC 1057",
    date: "Supreme Court of India (3-Judge Bench)",
    facts:
      "The drawer issued several commercial cheques towards supply of cement. Before the cheques were presented for encashment, the drawer sent a written instruction to his bank to 'stop payment' and advised the payee not to present the cheques. When the payee presented the instruments, they were dishonoured with the remark 'Payment stopped by drawer'. The drawer contended that because payment was countermanded prior to presentation, Section 138 was not attracted.",
    holding:
      "The 3-Judge Bench of the Supreme Court firmly overruled earlier contrary decisions (Electronics Trade & Technology Development Corp.) and held that even if a cheque is dishonoured on the ground of 'stop payment', Section 138 is attracted. The court affirmed that Section 138 would become a dead letter if drawers could simply instruct their bankers to withhold payment and evade criminal sanction. The statutory presumption under Section 139 operates against the drawer.",
    amount: "Criminal Prosecution Sustained; Quashing Petition Dismissed",
    takeaway:
      "A drawer cannot escape Section 138 criminal liability by merely informing the bank or payee to stop payment prior to presentation. The payee retains full right to issue a 15-day statutory notice and initiate criminal prosecution.",
  },
  {
    title: "Apex Court on Drawer's Presumption of Debt When Cheque Is Stopped",
    parties: "Goaplast (P) Ltd. v. Chico Ursula D'Souza & Anr.",
    citation: "(2003) 3 SCC 232; 2003 Cri LJ 1723",
    date: "Supreme Court of India",
    facts:
      "The respondent issued post-dated cheques towards a commercial transaction. Thereafter, the respondent wrote to his banker to stop payment, alleging that the consideration had not materialized. Upon dishonour with the endorsement 'Payment stopped by drawer', the complainant issued a statutory notice and filed a complaint. The High Court quashed the complaint holding that the drawer had informed the bank beforehand.",
    holding:
      "The Supreme Court set aside the High Court's quashing order and restored the criminal complaint. The Apex Court ruled that Section 138 is designed to promote the efficacy of banking operations and ensure credibility in commercial transactions. Writing 'stop payment' does not absolve the drawer; the drawer must establish as a matter of trial defence that there was no existing debt or liability on the date the cheque was drawn or presented.",
    amount: "Trial Restored with Direction for Expeditious Disposal",
    takeaway:
      "Trial courts cannot quash a Section 138 case at the threshold simply because the drawer claims stop payment was justified. The legal presumption under Section 139 is in favour of the holder in due course.",
  },
  {
    title: "Supreme Court Clarification on Cheque Dishonour Endorsements Beyond Balance",
    parties: "Laxmi Dyechem v. State of Gujarat & Ors.",
    citation: "(2012) 13 SCC 375; (2012) 4 SCC (Civ) 1165",
    date: "Supreme Court of India",
    facts:
      "The accused issued multiple cheques towards supply of chemical materials. The cheques were returned unpaid by the bank with various endorsements including 'signatures differ from specimen', 'payment stopped by drawer', and 'account closed'. The accused argued that Section 138 strictly limits liability to two grounds: 'funds insufficient' and 'exceeds arrangement'.",
    holding:
      "The Supreme Court rejected this restrictive reading, holding that dishonour on grounds of 'stop payment', 'account closed', or 'signatures do not match' squarely falls within Section 138. The court held that whenever a cheque cannot be honoured due to any default or deliberate conduct on the part of the drawer, the penal provisions of Section 138 are activated provided the statutory notice procedure is satisfied.",
    amount: "Over ₹4.5 Crores Commercial Cheques — Prosecution Maintained",
    takeaway:
      "Any bank return memo that prevents encashment due to the drawer's act or omission—including 'Payment stopped by drawer'—is legally treated as a cheque bounce under Section 138.",
  },
  {
    title: "Supreme Court 2025 Nationwide Guidelines on Compounding & Summons",
    parties: "Sanjabij Tari v. Kishore S. Borcar & Anr.",
    citation: "2025 INSC 1113; Criminal Appeal No. 29841/2024",
    date: "Supreme Court of India (Order Dated 25 Sep 2025)",
    facts:
      "Addressing nationwide systemic delays in cheque bounce trials, the Supreme Court laid down binding practice directions for all High Courts and trial magistrates across India, mandating streamlined summons through digital channels, mandatory early compounding windows, and revised compounding cost schedules.",
    holding:
      "The Supreme Court mandated: (1) Summons under Section 138 can be served electronically via WhatsApp, registered email, and SMS alongside speed post; (2) An early compounding settlement window must be offered at the first hearing; (3) Graded compounding costs shall be levied if the drawer delays settlement beyond the initial appearance; (4) Trial courts must dispose of Section 138 summary trials without allowing dilatory adjournments.",
    amount: "Binding Practice Directions Enforceable Across All Indian Magistrates",
    takeaway:
      "As of 2026, cheque bounce proceedings move on fast-track summons and structured compounding windows. A drawer who stopped payment can no longer drag cases for years without escalating compounding penalties.",
  },
];

const FAQS = [
  {
    question: "Is 'Payment Stopped by Drawer' considered a cheque bounce under Section 138 of the NI Act?",
    answer:
      "Yes, absolutely. The Supreme Court of India in the landmark 3-Judge Bench ruling in Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249 and Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232 conclusively settled that a cheque returned with the endorsement 'Payment stopped by drawer' attracts the full criminal liability of Section 138 of the Negotiable Instruments Act, 1881. The law treats stop payment instructions as an intentional act preventing encashment, triggering up to 2 years imprisonment and a fine of up to double the cheque amount.",
  },
  {
    question: "What is the difference between a stop payment and a cheque bounce?",
    answer:
      "From a banking standpoint, a standard 'cheque bounce' occurs automatically when the drawer's account balance is less than the cheque value (return reason: 'Funds Insufficient'). In contrast, a 'stop payment' occurs when the drawer affirmatively instructs the bank not to honour the instrument. However, from a legal perspective under Section 138 NI Act, there is zero difference: both constitute statutory dishonour, require a 15-day demand notice within 30 days of the bank memo, and enable the payee to file a criminal complaint in court.",
  },
  {
    question: "Can a cheque returned as 'Payment Stopped' be presented again to the bank?",
    answer:
      "Yes, a cheque can be presented multiple times to the bank as long as it is presented within its 3-month statutory validity period, as affirmed by the Supreme Court in MSR Leathers v. S. Palaniappan (2013) 1 SCC 86. However, you can only re-present it if you have not already dispatched a formal Section 138 statutory demand notice. Once a legal demand notice is dispatched following a dishonour memo, the 15-day cure window begins, and the cause of action crystallizes. You cannot re-present the cheque to generate a fresh 30-day notice limitation period.",
  },
  {
    question: "What defences can a drawer raise in a stop payment cheque bounce case?",
    answer:
      "Under Sections 138 and 139 of the NI Act, the law presumes that the cheque was issued for the discharge of a legally enforceable debt. To defend against a stop payment complaint, the drawer must prove on a preponderance of probabilities that: (1) There was no legally enforceable debt or liability existing on the date of presentation (e.g., total failure of consideration or cancellation of contract before supply); or (2) The cheque was stolen, forged, or extorted, supported by a contemporary police complaint lodged BEFORE the cheque was presented; or (3) There were sufficient funds in the bank account when the stop payment instruction was given, accompanied by a documented bona fide commercial dispute.",
  },
  {
    question: "What is the timeline to send a legal notice after a stop payment memo?",
    answer:
      "Under Section 138(b) of the Negotiable Instruments Act, the payee must issue a formal advocate legal demand notice within strictly 30 calendar days from the date of receiving the dishonour memo from the bank. The notice must demand payment of the exact cheque amount within 15 calendar days from the date of receipt by the drawer. If the drawer fails to make the payment within these 15 days, the cause of action arises on Day 16, and the criminal complaint must be filed in the jurisdictional Magistrate court within 30 days (1 month).",
  },
  {
    question: "Stop payment cheque bounce case in Hindi: क्या स्टॉप पेमेंट करने पर चेक बाउंस का केस दर्ज हो सकता है?",
    answer:
      "हाँ, यदि आपने या किसी अन्य व्यक्ति ने बैंक को 'Stop Payment' का निर्देश देकर चेक रुकवाया है, तो पराक्रम्य लिखत अधिनियम (Negotiable Instruments Act, 1881) की धारा 138 के तहत चेक बाउंस का आपराधिक मुकदमा दर्ज हो सकता है। सुप्रीम कोर्ट ने 'मोदी सीमेंट्स' और 'गोवाप्लास्ट' मामलों में स्पष्ट निर्णय दिया है कि स्टॉप पेमेंट करने पर भी चेक बाउंस माना जाता है और आरोपी को 2 साल तक की जेल या चेक राशि का दोगुना जुर्माना हो सकता है। चेक धारक को बैंक मेमो मिलने के 30 दिनों के भीतर 15 दिन का कानूनी नोटिस भेजना अनिवार्य है।",
  },
  {
    question: "Can I claim 20% interim compensation in a stop payment cheque bounce case?",
    answer:
      "Yes. Under Section 143A of the Negotiable Instruments Act, the trial court has statutory power to direct the drawer to deposit up to 20% of the cheque amount as interim compensation to the complainant. This interim compensation must be paid within 60 days of the magistrate's order (extendable by 30 days on sufficient cause). This provision applies equally to stop payment dishonours as to insufficient fund dishonours once the drawer pleads not guilty.",
  },
  {
    question: "Can I file an Order 37 summary suit along with a Section 138 complaint for stop payment?",
    answer:
      "Yes. Criminal proceedings under Section 138 NI Act and a civil summary suit under Order XXXVII of the Code of Civil Procedure (CPC) for recovery of money are independent remedies. The Supreme Court has repeatedly confirmed that pursuing Section 138 in criminal court does not bar the creditor from simultaneously filing an Order 37 civil suit to attach the debtor's bank accounts and obtain a summary decree for the principal plus interest.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "'Payment Stopped by Drawer': Does It Still Count as Cheque Bounce?",
  description:
    "Cheque returned as 'payment stopped'? When Section 138 still applies, the defences that work, and the deadlines to act.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/stop-payment-cheque-bounce-case`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "LegalValue",
    name: "Section 138 Negotiable Instruments Act — Stop Payment Dishonour",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Cheque Bounce Hub",
      item: `${SITE_URL}/cheque-bounce-notice-timeline-section-138`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Stop Payment Cheque Bounce",
      item: `${SITE_URL}/stop-payment-cheque-bounce-case`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function StopPaymentChequeBouncePage() {
  const breadcrumbItems = [
    { label: "Cheque Bounce Hub", href: "/cheque-bounce-notice-timeline-section-138" },
    { label: "Stop Payment Cheque Bounce", href: "/stop-payment-cheque-bounce-case" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 138 Negotiable Instruments Act</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court Landmark Doctrine</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              &apos;Payment Stopped by Drawer&apos;: Does It Still Count as Cheque Bounce?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Supreme Court Rule on Stop Payment)
              </p>
              <p>
                Yes. Under Section 138 of the Negotiable Instruments Act, 1881, as affirmed by the Supreme Court in <em>Modi Cements</em> and <em>Goaplast</em>, a cheque returned as &quot;Payment stopped by drawer&quot; carries identical criminal liability to one bounced for insufficient funds. Payees must serve a statutory demand notice within 30 days of receiving the return memo, granting the drawer 15 days to pay before initiating criminal proceedings.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 138</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fully Attracted (SC Doctrine)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice Dispatch Window (Sec 138b)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Cure Period (Sec 138c)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Up to 2x</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cheque Fine + Up to 2 Yr Jail</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <StopPaymentTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Section 138 Applicability */}
              <section id="heading-138-applicability" aria-labelledby="heading-138-applicability-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-138-applicability-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Does Stop Payment Cheque Attract Section 138 Proceedings?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a creditor or payee deposits a commercial cheque and receives a bank return memo endorsed with &quot;Payment stopped by drawer&quot;, a pervasive misconception leads both drawers and payees to believe that criminal liability is bypassed. Many drawers mistakenly assume that by proactively instructing their branch to countermand the cheque before clearance, they transform a criminal offence into a protracted civil dispute.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Supreme Court of India has emphatically and consistently rejected this contention. Under the statutory scheme of Chapter XVII of the Negotiable Instruments Act, 1881, the object of Section 138 is to preserve the integrity and sanctity of commercial paper in the Indian economy. If a drawer could avoid criminal culpability simply by sending a stop-payment memo to their bank, the entire legislative architecture of Section 138 would be reduced to an empty formality.
                </p>
                <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                  <strong>Binding Legal Position:</strong> A stop payment instruction does not save the drawer from criminal prosecution. The moment the cheque is dishonoured and returned unpaid by the bank, the statutory clock starts ticking. Provided the payee serves an advocate demand notice within 30 days and gives the drawer 15 days to pay, a criminal complaint under Section 138 / Section 142 is fully maintainable before the Judicial Magistrate.
                </div>
              </section>

              {/* Section 2: Court Rulings Digest */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Rulings on Stop Payment Liability
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Ruling #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief / Precedent Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across All Magistrate Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your case:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Difference Between Stop Payment and Cheque Bounce */}
              <section id="heading-stop-payment-vs-bounce" aria-labelledby="heading-stop-payment-vs-bounce-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-stop-payment-vs-bounce-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Stop Payment vs Cheque Bounce: Banking and Legal Distinctions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While commercial trade often distinguishes between a cheque that bounces for lack of funds and a cheque where payment is deliberately stopped, the Negotiable Instruments Act treats them as identical triggers for criminal culpability:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Stop Payment vs Insufficient Funds Cheque Bounce</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Parameter</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Funds Insufficient Bounce</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Stop Payment by Drawer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bank Return Memo Reason
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-700">CTS Code 01: Funds Insufficient</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-red-700">CTS Code 06: Payment stopped by drawer</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Primary Cause
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Inadequate bank balance or overdraft limit breach</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Deliberate instruction issued by drawer to branch</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 Applicability
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Explicitly Covered in Statute</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Conclusively Covered via Supreme Court Precedent</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice Dispatch Requirement
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Strictly within 30 days of receiving return memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Strictly within 30 days of receiving return memo</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 139 Presumption
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Presumed issued for legally enforceable debt</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Presumed issued for legally enforceable debt</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Penal Punishment (Section 138)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Up to 2 years imprisonment and/or 2x cheque amount</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Up to 2 years imprisonment and/or 2x cheque amount</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Drawer Defences Analysed */}
              <section id="heading-drawer-defences" aria-labelledby="heading-drawer-defences-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-drawer-defences-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When Does a Stop Payment Defence Actually Work in Court?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In litigation under Section 138, Section 139 establishes a mandatory statutory presumption in favour of the holder: the court must presume that the cheque was issued for the discharge of a legally enforceable debt or liability. The burden of rebutting this presumption lies entirely upon the drawer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-red-200 shadow-sm space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded">
                      Defences That Fail (Routinely Rejected)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✕</span>
                        <span><strong>&quot;It was only a security cheque&quot;:</strong> Security cheques mature into debt the moment default occurs (<em>Sripati Singh 2021</em>).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✕</span>
                        <span><strong>Verbal cancellation of agreement:</strong> Unsubstantiated verbal claims carry zero evidentiary weight against negotiable paper.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✕</span>
                        <span><strong>Post-notice police complaint:</strong> Filing a missing cheque FIR after receiving the payee&apos;s legal notice is rejected as an afterthought.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✕</span>
                        <span><strong>Stop payment letter without sufficient balance:</strong> If bank balance was insufficient on presentation date, the stop payment instruction is deemed fraudulent.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-emerald-200 shadow-sm space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      Defences That Succeed (Narrow &amp; Strict)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span><strong>Contemporary FIR predating presentation:</strong> Documented police complaint for stolen or extorted cheque lodged before presentation date.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span><strong>Total failure of consideration:</strong> Proving the underlying contract was formally terminated before delivery, with written intimation to the payee.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span><strong>Sufficient balance + genuine dispute:</strong> Proving the account had sufficient funds on the presentation date and payment was halted due to proven fraud.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span><strong>Time-barred debt:</strong> A cheque issued to pay a debt that was already barred by the 3-year limitation period without written acknowledgment under Section 18 Limitation Act.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Resolution Rail Flowchart */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Rail: From Stop Payment Memo to Court Decree
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enforce your recovery through the structured statutory escalation hierarchy mandated by the Negotiable Instruments Act:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Return Memo Received</h3>
                    <p className="text-xs text-slate-200 mt-1">Bank returns cheque with &quot;Payment stopped by drawer&quot; memo.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">30-Day Notice Window</h3>
                    <p className="text-xs text-amber-900 mt-1">Advocate drafts and dispatches Section 138 demand notice via Speed Post + Email.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">15-Day Cure Window</h3>
                    <p className="text-xs text-slate-700 mt-1">Drawer has strictly 15 days from notice delivery to remit the full cheque amount.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Magistrate Court Filing</h3>
                    <p className="text-xs text-red-900 mt-1">File Section 138 criminal complaint within 30 days of cause of action arising.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Interim Relief &amp; Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">Claim 20% interim deposit under Section 143A or early compounding payout.</p>
                  </div>
                </div>

                {/* Hand-Authored Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Cheque Bounce Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Stop Payment Cheque Bounce Resolution Flowchart"
                  >
                    <defs>
                      <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="spAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="spSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#spGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Stop Payment Memo</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">CTS Code 06 Returned</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Preserve Original Memo</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">30-Day Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Sec 138(b) Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Speed Post + Sec 63 BSA</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">15-Day Cure Window</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Sec 138(c) Compliance</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Cause of Action Day 16</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#spAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Court Complaint</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">JMFC / MM Filing</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Within 1 Month Deadline</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#spSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Interim / Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Sec 143A 20% Deposit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Compounding Decree</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">CRITICAL STATUTORY DEADLINES UNDER SECTION 138 NI ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Present Cheque: Within 3 months from the date inscribed on the instrument</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Demand Notice: Exactly within 30 calendar days of receiving bank return memo</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Criminal Complaint in Court: Exactly within 30 calendar days from the expiry of the 15-day cure notice period</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: The 5-Step Escalation Playbook */}
              <section id="heading-5step-playbook" aria-labelledby="heading-5step-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-5step-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook for Stop Payment Cheque Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning Supreme Court precedents and commercial recovery practices, follow this chronological 5-step playbook:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure the CTS Return Memo and Document the Exact Delivery Date
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collect the original physical cheque and the bank return memo marked &quot;Payment stopped by drawer&quot;. Verify that the memo bears the clearing branch stamp, date of return, and CTS reason code 06. Preserve the bank envelope or SMS/email advice confirming the date you received the memo, as this date triggers your 30-day statutory notice limitation window under Section 138(b).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Statutory Section 138 Demand Notice Within 30 Days
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Instruct an advocate to serve a formal 15-day statutory demand notice. The notice must explicitly state the cheque number, issue date, presentation details, the stop payment memo details, and demand the exact cheque amount. Do not add unspecified damages or interest to the principal cheque demand in the operative paragraph to prevent technical defects. Dispatch via Registered Speed Post with Acknowledgement Due (RPAD) and registered email/WhatsApp under Section 63 BSA. Check our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Track the 15-Day Cure Window and Preserve Proof of Delivery
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download the official delivery confirmation certificate from the India Post tracking portal. Under Section 27 of the General Clauses Act, dispatch to the correct address creates a legal presumption of valid service. The drawer has strictly 15 days from delivery to remit payment. If payment is made, the matter ends. If the drawer fails or refuses to pay, the statutory cause of action crystallizes on the 16th day.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File the Criminal Complaint in Court Within 30 Days of Cause of Action
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Section 142(1)(b) of the NI Act, the criminal complaint must be filed before the Metropolitan Magistrate or Judicial Magistrate First Class (JMFC) having territorial jurisdiction over the bank branch where the payee maintains their account (Section 142(2)). The complaint must be filed strictly within 30 calendar days from the expiration of the 15-day notice period.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce Section 143A 20% Interim Compensation &amp; Compounding Window
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        At the stage of framing notice or recording plea, file an application under Section 143A NI Act seeking a direction for the drawer to deposit 20% of the cheque amount as interim compensation. Leverage the Supreme Court&apos;s 2025 directions in <em>Sanjabij Tari</em> to pressure early compounding before escalating costs are imposed on the defaulting drawer.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Statutory Timelines & Fact Table */}
              <section id="heading-statutory-deadlines" aria-labelledby="heading-statutory-deadlines-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-deadlines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Legal Benchmarks: Section 138 NI Act
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every stage of a cheque bounce proceeding is subject to inflexible statutory deadlines. Missing even a single limitation window by one day can render your complaint time-barred:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Deadlines and Benchmarks for Cheque Bounce</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Litigation Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence if Missed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cheque Presentation to Bank
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 3 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(a) NI Act + RBI Circular</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-600">Cheque becomes stale; Section 138 cannot be filed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Legal Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Within 30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(b) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-600">Notice invalid; cannot initiate criminal prosecution</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Drawer Cure / Payment Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Strictly 15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(c) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">No offence until Day 15 expires; premature suit dismissed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Criminal Complaint in Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 30 Days (1 Month)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 142(1)(b) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Requires condonation of delay under Section 142 proviso</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Interim Compensation Deposit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Within 60 Days (Max 90)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 143A(3) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recoverable as fine under Section 421 CrPC / BNSS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order 37 Summary Suit (Civil)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Within 3 Years</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 47, Limitation Act, 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-600">Debt barred by civil limitation; summary decree unavailable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Use our free <Link href="/tools/cheque-bounce-deadline-calculator" className="text-blue-700 underline font-semibold">cheque bounce deadline calculator</Link> to compute your exact notice and court filing dates based on your return memo.
                </p>
              </section>

              {/* Section 8: Dispute Scenarios Tabs Island */}
              <section id="heading-dispute-scenarios" aria-labelledby="heading-dispute-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dispute Scenarios: Handling Specific Stop Payment Defences
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the factual circumstance raised by the drawer to review statutory liability and actionable payee steps
                  </p>
                </div>

                <StopPaymentProblemTabs />
              </section>

              {/* Section 9: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Stop Payment Cheque Recovery With Interim Relief
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Commercial Case Study
                    </span>
                    <span className="text-xs text-slate-400">Jaipur to Gurugram (B2B Industrial Supply)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Transaction:</strong> Apex Industrial Components supplied ₹6,50,000 worth of precision electrical switches to Zenith Automations Pvt. Ltd. Zenith issued a post-dated cheque (PDC) drawn on HDFC Bank dated 15 September 2026.
                    </p>
                    <p>
                      <strong>The Default &amp; Stop Payment:</strong> Apex presented the cheque on 22 September 2026. On 24 September, HDFC Bank returned the cheque unpaid with the CTS return memo: <em>&quot;Payment stopped by drawer&quot;</em>. Zenith sent a brief WhatsApp message asserting: <em>&quot;We stopped payment because 15 switches had minor packaging dents. Do not present again.&quot;</em> Zenith refused to release payment or return the supplied inventory.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> On Day 8 following receipt of the dishonour memo, Apex engaged LegalRecovery.in. An advocate drafted and dispatched a Section 138 statutory demand notice via Registered Speed Post and Section 63 BSA electronic mail. The notice cited <em>Goaplast</em> and <em>Modi Cements</em>, emphasizing that delivery challans were signed without demurral and giving Zenith strictly 15 days to pay ₹6,50,000.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Recovery:</strong>
                      Zenith failed to pay within the 15-day cure period. On Day 22 of the cause of action, Apex filed a Section 138 complaint before the Chief Judicial Magistrate along with an application under Section 143A NI Act. At the preliminary hearing, the Magistrate issued summons and ordered Zenith to deposit 20% interim compensation (₹1,30,000). Recognizing criminal exposure and growing compounding penalties under the 2025 Supreme Court directions, Zenith entered into an in-court compounding settlement, remitting the entire ₹6,50,000 plus ₹35,000 litigation costs.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Pre-Flight Evidence Checklist Wizard */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Checklist: 6 Critical Documents for a Stop Payment Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Verify your documentation before serving a statutory demand notice. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic delivery proof and postal tracking carry full presumption of service:
                </p>

                <StopPaymentChecklistWizard />
              </section>

              {/* Section 11: Document & Evidence Matrix Table (Archetype G3 Requirement) */}
              <section id="heading-document-matrix" aria-labelledby="heading-document-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-document-matrix-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Document &amp; Evidence Matrix: What to Present in Court
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Every document produced in a Section 138 proceeding serves a specific evidentiary purpose under the Indian Evidence / BSA framework:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Evidence Matrix for Stop Payment Cheque Bounce Litigation</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Document / Proof</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Why It Matters (Legal Value)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Where &amp; How to Obtain</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Original Cheque with Signature
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Foundational negotiable instrument. Triggers statutory presumption of consideration under Section 118 &amp; 139 NI Act.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Returned by presenting bank branch upon dishonour advice.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          CTS Dishonour Return Memo
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Statutory presumption of dishonour under Section 146 NI Act. Establishes the date when the 30-day notice limitation begins.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Issued by clearing bank with CTS Code 06 (&quot;Payment stopped by drawer&quot;).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Mandatory pre-condition under Section 138(b). Gives 15 days to pay; establishes cause of action.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Drafted and dispatched by enrolled advocate via Speed Post and Email.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Speed Post Booking &amp; Tracking
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Proof of service under Section 27 General Clauses Act and Supreme Court rulings (<em>C.C. Alavi Haji 2007</em>).
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          India Post booking receipt + indiapost.gov.in delivery tracking report.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Underlying Debt Documentation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Invoices, promissory notes, delivery challans, or ledger statements establishing existing legal liability.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Complainant&apos;s commercial records, audited books, and GST filings.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Electronic Certificate (Section 63 BSA)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Admissibility affidavit for WhatsApp notice delivery, email headers, and bank portal SMS screenshots.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Affidavit executed by the complainant in accordance with Section 63 BSA, 2023.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 12: Notice Template Preview & Download Block */}
              <section id="heading-notice-template" aria-labelledby="heading-notice-template-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-notice-template-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Section 138 Legal Notice Format: Stop Payment Dishonour
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Below is the standardized statutory notice format drafted for &quot;Payment stopped by drawer&quot; dishonours, incorporating Section 138/139 NI Act principles and Supreme Court precedents:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg space-y-4 text-xs sm:text-sm font-mono overflow-x-auto">
                  <div className="text-right text-slate-400 text-xs">
                    REGISTERED SPEED POST WITH A.D. &amp; EMAIL
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-amber-400">LEGAL DEMAND NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881</p>
                    <p className="text-slate-400">To: [Full Name / Legal Entity of Drawer]</p>
                    <p className="text-slate-400">Address: [Complete Residential / Registered Office Address, Pin Code]</p>
                  </div>
                  <div className="space-y-2 text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                    <p>
                      <strong>Sir / Madam,</strong>
                    </p>
                    <p>
                      Under instructions from and on behalf of our client, [Payee Full Name / Business Entity], residing / having office at [Payee Address], we hereby serve upon you this statutory demand notice:
                    </p>
                    <p>
                      1. That towards discharge of your legally enforceable debt and liability arising out of [nature of transaction: commercial supply / friendly loan / service invoice No. dated _____], you issued Cheque No. [Cheque Number] dated [Cheque Date] drawn on [Bank Name &amp; Branch] for an amount of ₹[Amount in Figures] (Rupees [Amount in Words] only) in favour of our client.
                    </p>
                    <p>
                      2. That our client presented the said cheque for encashment through their banker, [Payee Bank Name &amp; Branch], within its statutory validity period. However, the said cheque was returned dishonoured and unpaid on [Date of Return Memo] with the bank endorsement: <strong>&quot;Payment stopped by drawer&quot;</strong>.
                    </p>
                    <p>
                      3. That as established by the Hon&apos;ble Supreme Court of India in <em>Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249</em> and <em>Goaplast (P) Ltd. v. Chico Ursula D&apos;Souza (2003) 3 SCC 232</em>, stopping payment does not absolve you from criminal liability under Section 138 of the Negotiable Instruments Act, 1881.
                    </p>
                    <p>
                      4. We therefore call upon you to pay the said cheque amount of ₹[Cheque Amount] to our client within strictly 15 (fifteen) calendar days from the date of receipt of this notice, failing which our client shall initiate criminal prosecution against you under Sections 138 and 142 of the Negotiable Instruments Act, 1881, as well as an Order XXXVII civil summary suit, at your sole risk, cost, and consequences.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-slate-400 text-xs">
                    [Name of Advocate] • Advocate, High Court • Enrolment No. [Bar Council Number]
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Looking for the Hindi language notice template? View our <Link href="/templates/cheque-bounce-notice-format-hindi" className="text-blue-700 underline font-semibold">cheque bounce notice format in Hindi</Link>.
                </p>
              </section>

              {/* Section 13: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Stop Payment Cheque Bounce Cases
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Negotiable Instruments Act, Supreme Court Precedents and Court Procedure
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 14: Primary Sources Block */}
              <section id="heading-primary-sources" aria-labelledby="heading-primary-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-primary-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutes, Supreme Court Judgments &amp; Primary Legal References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against the Negotiable Instruments Act 1881 (as amended through Act 20 of 2018), Bharatiya Sakshya Adhiniyam 2023, and active Supreme Court precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 138 Notice for Stop Payment
                </h2>
                <StopPaymentNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Cheque Bounce &amp; Debt Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Timeline (30 + 15 Day Rule) →
                  </Link>
                  <Link
                    href="/law/cheque-bounce-supreme-court-guidelines-2025"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Supreme Court 2025 Cheque Bounce Guidelines →
                  </Link>
                  <Link
                    href="/templates/cheque-bounce-notice-format-hindi"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Format in Hindi →
                  </Link>
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Timeline (Sec 138) →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Deadline Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
