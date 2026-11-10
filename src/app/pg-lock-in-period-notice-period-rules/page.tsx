import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PgLockInNoticeCTA from "./PgLockInNoticeCTA";
import PgLockInTableOfContents from "./PgLockInTableOfContents";
import PgLockInProblemTabs from "./PgLockInProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "PG Lock-In Period & Notice Period Rules: What's Legal",
  description:
    "Is a PG lock-in or notice period enforceable? What PG owners can and can't deduct from your deposit, with city examples.",
  alternates: {
    canonical: `${SITE_URL}/pg-lock-in-period-notice-period-rules`,
  },
  openGraph: {
    title: "PG Lock-In, Notice Period and Deposit Deductions: Legal Rules in India",
    description:
      "Statutory guide to PG lock-in enforceability under Section 74 Contract Act, 30-day notice period rules in Pune, Bengaluru & NCR, and illegal deposit deductions.",
    url: `${SITE_URL}/pg-lock-in-period-notice-period-rules`,
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
    title: "Indian Contract Act, 1872 — Section 39 (Repudiation on Material Breach), Section 73 & Section 74 (No Penalty Forfeiture Without Actual Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Indian Easements Act, 1882 — Section 52 (Leave and Licence Defined) & Section 62 (Revocation and Surrender of Licence)",
    url: "https://www.indiacode.nic.in/handle/123456789/2285",
  },
  {
    title: "Model Tenancy Act, 2021 — Section 11 (Two-Month Residential Security Deposit Cap & Refund Upon Vacating) — Ministry of Housing and Urban Affairs",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model-Tenancy-Act-English-02_06_2021.pdf",
  },
  {
    title: "Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405 (1964 SCR (1) 515) — Supreme Court 5-Judge Constitution Bench on Section 74 Security Deposit Forfeiture",
    url: "https://main.sci.gov.in/judgment/judis/3656.pdf",
  },
  {
    title: "Kailash Nath Associates v. Delhi Development Authority (DDA), (2015) 4 SCC 136 — Supreme Court on Proof of Actual Loss for Forfeiture",
    url: "https://main.sci.gov.in/judgment/judis/42246.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Notices, UPI Receipts & Room Handover Videos)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "If you leave a PG before the 3-month or 6-month lock-in period ends, the PG owner has an absolute right to forfeit 100% of your security deposit.",
    fact: "Unenforceable as an automatic penalty. Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court 5-Judge Bench in Fateh Chand (1963), a contract party cannot forfeit a lump-sum security deposit as a penalty. The PG owner can only deduct reasonable compensation for actual, proved vacancy loss. If your bed is re-occupied within days, forfeiting your deposit is illegal unjust enrichment.",
    authority: "Section 74 Indian Contract Act, 1872; Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405",
  },
  {
    myth: "You must stay through the lock-in period even if the PG serves spoiled food, has bedbugs, lacks water/Wi-Fi, or compromises resident safety.",
    fact: "False. Under Section 39 and Sections 51–54 of the Indian Contract Act, when a PG operator fails to provide habitable accommodation or promised amenities, they commit a material breach of contract. A party in breach cannot enforce a lock-in clause against the aggrieved resident. You can vacate immediately after documenting the defects and claim a 100% deposit refund.",
    authority: "Section 39 Indian Contract Act, 1872; Section 2(11) Consumer Protection Act, 2019",
  },
  {
    myth: "A 30-day PG notice period in Pune, Bengaluru, or Gurugram only starts counting from the 1st of the next calendar month, even if you inform the owner on the 10th.",
    fact: "Legally invalid unless explicitly signed before move-in. Under Sections 73 and 74 of the Contract Act, a 30-day notice runs day-for-day from the exact date you deliver written notice on WhatsApp or email. Inventing a '1st-to-1st only' rule at move-out to charge an extra 20 days' rent is an Unfair Trade Practice.",
    authority: "Section 73 Contract Act; Section 2(47) Consumer Protection Act, 2019",
  },
  {
    myth: "PG owners can legally deduct ₹2,000 to ₹5,000 from every resident's security deposit for routine room painting, whitewashing, and mattress sanitization.",
    fact: "Illegal. Routine wear and tear, seasonal painting, and standard bed cleaning between occupants are the property owner's business overhead (reflecting the principle in Section 108(m) of the Transfer of Property Act). Only documented physical breakage caused by your negligence—backed by an actual repair bill—can be deducted.",
    authority: "Section 108(m) Transfer of Property Act Principle; Consumer Commission Rulings",
  },
  {
    myth: "If you booked a PG by paying a deposit via UPI and never signed a paper agreement, the owner can orally enforce a 6-month lock-in period when you leave.",
    fact: "Completely unenforceable. A lock-in restriction does not exist by default under Indian law; it can only arise from an express prior written agreement. Without a signed lock-in clause, your stay is a revocable monthly Leave and Licence under Section 52 & 62 of the Indian Easements Act, terminable on 15 to 30 days' reasonable notice.",
    authority: "Section 52 & 62 Indian Easements Act, 1882; Section 10 Contract Act",
  },
  {
    myth: "Consumer Courts (e-Jagriti) cannot hear PG or co-living deposit disputes because landlord-tenant cases belong only in Civil or Rent Control Courts.",
    fact: "Wrong for PGs, hostels, and co-living spaces. While pure naked-land leases go to civil or rent authorities, PGs and co-living operators (Stanza Living, Zolo, Colive, local PGs) bundle lodging with food, housekeeping, Wi-Fi, and security. Residents are 'consumers' under Section 2(7) CPA 2019 and can file directly on e-Jagriti.",
    authority: "Section 2(7), 2(11) & 2(42) Consumer Protection Act, 2019",
  },
  {
    myth: "Clickwrap terms in a co-living mobile app that make deposits 'non-refundable' or impose ₹3,000 exit processing fees are 100% binding because you clicked 'I Agree'.",
    fact: "Voidable under statutory law. In Pioneer Urban Land v. Govindan Raghavan (2019) and under Section 2(46) of the Consumer Protection Act, 2019, one-sided standard-form contract clauses where the resident has zero bargaining power and faces disproportionate forfeiture are struck down as 'Unfair Contracts'.",
    authority: "Section 2(46) Consumer Protection Act, 2019; Pioneer Urban Land (2019) 5 SCC 725",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court 5-Judge Bench Bars Automatic Forfeiture of Security Deposits as a Penalty",
    parties: "Fateh Chand v. Balkishan Dass",
    citation: "AIR 1963 SC 1405 / 1964 SCR (1) 515 (5-Judge Constitution Bench)",
    date: "Judgment Dated 15 January 1963",
    facts:
      "Under a property agreement, the recipient sought to forfeit both the initial earnest token and a larger security/advance deposit after alleging a contractual breach by the occupier, relying on an express forfeiture clause written into the deed.",
    holding:
      "A five-judge Constitution Bench of the Supreme Court ruled that Section 74 of the Indian Contract Act eliminates arbitrary contractual penalties. Where a sum is deposited as a security deposit for the performance of a contract (as opposed to a nominal token earnest), a stipulation forfeiting the entire security deposit upon breach operates in terrorem (as a penalty). Courts will only permit reasonable compensation not exceeding the ceiling, and where no actual loss is proved, the deposit cannot be confiscated.",
    amount: "Foundational Rule Against Security Deposit Forfeiture Across India",
    takeaway:
      "Even if your PG agreement says '100% deposit forfeited if vacated during the 6-month lock-in period', that clause is legally a penalty under Section 74. If the PG owner fills your bed immediately or suffers no proved loss, they must refund your deposit.",
  },
  {
    title: "Supreme Court Mandates Proof of Actual Financial Loss Before Any Contract Deposit Deduction",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA) & Anr.",
    citation: "Civil Appeal No. 193 of 2015, (2015) 4 SCC 136",
    date: "Judgment Dated 09 January 2015",
    facts:
      "The respondent authority forfeited the appellant's deposit citing non-compliance with payment timelines, even though the property was subsequently re-allotted to a third party at a higher price, resulting in zero net financial loss to the authority.",
    holding:
      "The Supreme Court synthesized the law under Sections 73 and 74 of the Indian Contract Act: damage or actual financial loss is a mandatory sine qua non (indispensable condition) for claiming compensation under Section 74. Where it is possible to prove actual damage or vacancy loss and the party suffered none because the asset was re-allotted, arbitrary forfeiture is arbitrary and unlawful. Full restitution of the deposit with interest was ordered.",
    amount: "100% Deposit Restitution Ordered Where Re-Allotment Eliminated Loss",
    takeaway:
      "When you vacate a PG in Pune, Bengaluru, or Gurugram and either give a replacement tenant or the PG warden puts a new resident in your bed the same week, the PG owner has zero vacancy loss and cannot deduct lock-in rent from your deposit.",
  },
  {
    title: "Supreme Court Strikes Down One-Sided Standard-FormForfeiture Clauses as Unfair Contracts",
    parties: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan",
    citation: "Civil Appeal No. 12238 of 2018, (2019) 5 SCC 725",
    date: "Judgment Dated 02 April 2019",
    facts:
      "A commercial accommodation provider relied on fine-print, one-sided clauses in its standard agreement that imposed heavy forfeiture and exit penalties on the consumer while giving the operator lenient timelines and minimal obligations.",
    holding:
      "The Supreme Court held that a term of a contract will not be final and binding if it is shown that the consumer had no option but to sign on the dotted line of a contract framed by a party with superior bargaining power. Incorporating one-sided clauses that disproportionately penalize the resident while excusing the operator's defaults constitutes an Unfair Trade Practice under the Consumer Protection Act.",
    amount: "Unfair Clickwrap & Dotted-Line Forfeiture Clauses Declared Voidable",
    takeaway:
      "Co-living app clickwrap agreements (Stanza Living, Zolo, Colive, Your-Space) that force you to click 'Accept' on a 6-month lock-in and ₹3,000 exit fee after you have already paid your booking deposit are challengeable as Unfair Contracts under Section 2(46) CPA 2019.",
  },
  {
    title: "District Consumer Commission Orders Hostel/PG Operator to Refund Withheld Money for Deficient Services",
    parties: "Aryan Rawat v. Nalanda Living Hostel (DCDRC Kangra / Consumer Commission Ruling)",
    citation: "District Consumer Disputes Redressal Commission Order (Reported LiveLaw 2026)",
    date: "Order Reported 2026",
    facts:
      "A student paid advance residential and security charges to a private hostel/PG operator that promised hygienic food, clean accommodation, and essential student amenities. Upon moving in, the resident faced severe service deficiencies and unhygienic conditions, prompting an early exit. The hostel operator refused to refund the advance and deposit, citing non-refundable lock-in policies.",
    holding:
      "The District Consumer Commission held that private hostels and PGs providing bundled boarding, lodging, food, and housekeeping services fall squarely within the ambit of the Consumer Protection Act, 2019. Failing to deliver habitable amenities and subsequently refusing to refund advance/deposit sums behind a 'no-refund' policy constitutes gross deficiency in service under Section 2(11) and unfair trade practice under Section 2(47). The Commission ordered refund of the withheld sum along with interest, mental agony compensation, and litigation costs.",
    amount: "Deposit/Advance Refund + 9% Interest + Harassment Compensation & Costs",
    takeaway:
      "If you leave a PG or hostel before the lock-in period ends because of bad food, water scarcity, pests, or broken promises, Consumer Commissions treat the owner's refusal to refund your deposit as an actionable deficiency in service.",
  },
];

const FAQS = [
  {
    question: "What is a lock-in period in a PG, and is it legally enforceable in India?",
    answer:
      "A lock-in period in a PG (Paying Guest) or co-living space is a contractual minimum stay duration—typically 3 to 6 months—during which the agreement states you cannot vacate without forfeiting your security deposit. Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court ruling in Fateh Chand v. Balkishan Dass (1963), automatic 100% deposit forfeiture is an unenforceable penalty. A PG owner can only deduct proved actual vacancy loss (days the bed genuinely remained empty despite efforts to re-let). Moreover, if you leave early due to unhygienic food, bedbugs, water cuts, or safety issues, the lock-in clause is voidable for the owner's material breach under Section 39 of the Contract Act.",
  },
  {
    question: "What is the notice period for vacating a PG in Pune, Bengaluru, or Gurugram?",
    answer:
      "In Pune (Hinjewadi, Kharadi, Wakad, Viman Nagar, Kothrud), Bengaluru (HSR Layout, Whitefield, Koramangala, Electronic City), and Gurugram/Noida, the standard PG notice period is 30 calendar days for monthly-paying residents (or 15 days in short-stay PGs), governed by the written Leave and Licence or PG agreement. Crucially, under Section 73 of the Indian Contract Act, your 30-day notice starts counting from the exact date you send a written WhatsApp or email message—PG owners cannot orally force a '1st-to-1st of next month' rule unless that exact billing restriction was signed in writing before you moved in.",
  },
  {
    question: "Does a PG take a security deposit, and how many months' deposit is legal?",
    answer:
      "Yes, almost all PGs and co-living operators in India take a refundable security deposit before move-in, usually equal to 1 to 2 months' rent. Under Section 11(1)(a) of the Model Tenancy Act, 2021, residential security deposits are capped at a maximum of 2 months' rent (strictly enforceable in states that have notified MTA-aligned tenancy laws, and cited as the fairness benchmark by consumer forums nationwide). Any security deposit is a refundable trust sum under Section 72 of the Contract Act, not extra income for the PG owner.",
  },
  {
    question: "What can a PG owner legally deduct from my security deposit when I vacate?",
    answer:
      "A PG owner can only deduct three legitimate, documented items: (1) Unpaid pro-rata rent for days you actually occupied the room or an agreed written notice-period shortfall where the bed remained vacant; (2) Your actual pro-rata room electricity bill calculated at the official state DISCOM tariff backed by a sub-meter reading; and (3) Actual repair cost for physical damage caused by your negligence beyond normal wear and tear, supported by a vendor receipt. Deducting flat ₹2,000–₹5,000 'painting/whitewashing charges', 'bed sanitization fees', or ₹18/unit electricity without a bill is illegal.",
  },
  {
    question: "What should I do if a PG owner is not returning my deposit after I vacated?",
    answer:
      "First, compile your UPI/bank payment proof of the deposit, your timestamped WhatsApp or email vacating notice, and your room handover photo/video. Second, send a final written message demanding full NEFT/UPI credit within 48 hours and asking for an itemized bill for any claimed deduction. Third, if the PG owner blocks your calls or refuses payment, serve a formal 15-day Advocate Legal Notice via Registered Speed Post, Email, and WhatsApp citing Section 74 of the Contract Act and Section 2(11)/2(47) of the Consumer Protection Act, 2019, before filing a zero-fee online complaint on e-Jagriti.",
  },
  {
    question: "Can I adjust my PG security deposit against my last month's rent?",
    answer:
      "If your PG holds a 1-month security deposit and you have served a full 30-day written notice, asking the owner in writing to adjust the deposit against the final month's rent is the safest practical shield against wrongful forfeiture—provided your agreement does not prohibit adjustment or you have documented that the owner has a history of withholding deposits from past residents. Keep aside a small buffer to pay your final month's verified sub-meter electricity share upon key handover.",
  },
  {
    question: "PG owner deposit wapas nahi de raha ya lock-in period ka bahana bana raha hai toh legal notice kaise bheje?",
    answer:
      "Agar PG malik, warden, ya co-living company (jaise Stanza Living ya Zolo) notice period dene ke baad bhi aapka security deposit rok le, ya kharab khana/paani hone par bhi lock-in period ke naam par pura paisa kaat le, toh aap Indian Contract Act ki Dhara 74 aur Consumer Protection Act 2019 ke tehat formal Advocate Legal Notice bhej sakte hain. LegalRecovery.in ke verified advocates Speed Post, Email aur WhatsApp (Section 63 BSA) se 15-din ka legal demand notice bhejte hain, jisse 80% se zyada PG disputes bina court gaye settle ho jate hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PG Lock-In, Notice Period and Deposit Deductions: The Rules That Apply",
  description:
    "Is a PG lock-in or notice period enforceable? What PG owners can and can't deduct from your deposit, with city examples.",
  datePublished: "2026-11-04T11:55:00+05:30",
  dateModified: "2026-11-04T11:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/pg-lock-in-period-notice-period-rules`,
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
    "@type": "Thing",
    name: "PG Lock-In Period, Notice Period and Security Deposit Laws in India",
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
      name: "Rental & Security Deposit Recovery",
      item: `${SITE_URL}/recover-security-deposit-from-landlord-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PG Lock-In & Notice Period Rules",
      item: `${SITE_URL}/pg-lock-in-period-notice-period-rules`,
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

export default function PgLockInNoticePeriodRulesPage() {
  const breadcrumbItems = [
    { label: "Rental & Security Deposit Recovery", href: "/recover-security-deposit-from-landlord-india" },
    { label: "PG Lock-In & Notice Period Rules", href: "/pg-lock-in-period-notice-period-rules" },
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
        {/* Hero Section strictly matching site theme, /cheque-bounce-case-against-company-directors, and /legal-notice-to/irctc */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 74 Contract Act &amp; CPA 2019</span>
              <span className="text-red-500">•</span>
              <span>PG, Hostel &amp; Co-Living Statutory Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              PG Lock-In, Notice Period and Deposit Deductions: The Rules That Apply
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 74 Contract Act &amp; Consumer Protection Mandate)
              </p>
              <p>
                Under Section 74 of the Indian Contract Act, 1872, a PG or co-living operator cannot automatically forfeit your entire security deposit for leaving during a lock-in period unless they prove actual vacancy loss—and never if you vacate due to unhygienic food, pests, or broken amenities (Section 39). Standard 15-to-30 day written notices run from the date sent, and arbitrary painting or exit deductions can be recovered via a 15-day advocate notice and e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 74</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">No Penalty Forfeiture Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Standard PG Notice Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Max 2 Mo.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Model Tenancy Deposit Cap †</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">e-Jagriti Filing Up to ₹5 Lakh</p>
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
            <PgLockInTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Legal Overview of PG Lock-In & Notice Periods */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Are PG Lock-In Periods and Notice Periods Under Indian Law?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A <strong>PG lock-in period</strong> is a minimum stay commitment (usually 3, 6, or 11 months) written into a Paying Guest or co-living agreement, whereas a <strong>PG notice period</strong> is the advance written intimation (typically 15 to 30 days) a resident must give before vacating. Unlike a traditional flat tenancy governed by Section 105 of the Transfer of Property Act, 1882, almost all PG accommodations, student hostels, and managed co-living properties (such as Stanza Living, ZoloStays, Colive, Your-Space, and independent city PGs) operate as a <strong>Leave and Licence</strong> under <strong>Section 52 of the Indian Easements Act, 1882</strong> bundled with commercial hospitality services.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  That legal distinction is your strongest weapon when a PG owner refuses to return your security deposit. Because a PG charges you for a package of services—shared or private bed occupancy, daily meals, Wi-Fi, housekeeping, RO water, power backup, and biometric security—you are legally a <strong>&quot;Consumer&quot; under Section 2(7) of the Consumer Protection Act, 2019</strong>. You do not need to fight a multi-year civil court suit to get ₹15,000 or ₹40,000 back; you can invoke both the <strong>Indian Contract Act, 1872</strong> and consumer forum remedies on <strong>e-Jagriti</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a PG operator says, <em>&quot;You left in month 4 of a 6-month lock-in, so your ₹30,000 deposit is forfeited,&quot;</em> they are relying on fear rather than statute. Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, any clause that confiscates an entire security deposit automatically upon early exit is treated as an unenforceable penalty unless the owner proves actual financial loss—and if you left because the PG breached basic hygiene, food, or utility promises, <strong>Section 39 of the Contract Act</strong> entitles you to cancel the contract immediately with zero lock-in penalty.
                </p>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: PG Lock-In and Deposit Misconceptions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Warden Threats vs Statutory Law
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  PG owners, hostel wardens, and co-living property captains routinely quote verbal &quot;house rules&quot; or one-sided app terms to pocket student and IT-worker deposits. Here is what Indian statutes and Supreme Court precedents actually enforce:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact PG Lock-In and Notice Period Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl" role="cell">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ What PG Owners &amp; Apps Claim:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl" role="cell">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ What Indian Law Enforces:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: What PG Owners Can vs Cannot Deduct Table */}
              <section id="heading-deductions-matrix" aria-labelledby="heading-deductions-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deductions-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What PG Owners Can Deduct From Security Deposits: Legality Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 72 and Section 74 of the Indian Contract Act, 1872</strong>, a security deposit is held in trust specifically to cover unpaid dues or verifiable damage beyond ordinary wear and tear. Use this matrix to audit every rupee your PG or hostel tries to deduct at checkout:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Legitimate vs Illegal PG Security Deposit Deductions in India</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Deduction Head Claimed by PG</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Status</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory Proof PG Owner Must Show</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Routine Room Painting, Whitewashing &amp; Deep Cleaning (₹2,000–₹5,000)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Illegal Deduction</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be deducted for normal occupancy wear and tear</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sec 108(m) TPA Principle &amp; Sec 2(47) CPA</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          100% Lock-In Forfeiture When Bed Is Re-Occupied or PG Was Unhygienic
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Illegal Penalty</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Owner must prove actual empty-bed loss &amp; zero service breach</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sec 39 &amp; Sec 74 Contract Act; Kailash Nath SC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Inflated Electricity Charge (₹15–₹20/Unit) Without Sub-Meter or DISCOM Bill
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Illegal Surcharge</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Only actual sub-meter kWh at state DISCOM tariff is valid</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Electricity Act Resale Bar &amp; Sec 2(47) CPA</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Surprise &quot;Move-Out Fee&quot;, &quot;Exit Processing&quot; or &quot;Bed Sanitization Charge&quot;
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Unfair Contract</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Unenforceable if hidden in clickwrap or invented at exit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sec 2(46) CPA 2019 (Unfair Contract)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unpaid Pro-Rata Notice Period Shortfall (Where Written Notice Was Not Served)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Legitimate (Pro-Rata)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Signed agreement showing notice clause + actual days short</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sec 73 &amp; 74 Indian Contract Act, 1872</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Actual Physical Damage or Lost Key / Biometric Card
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Legitimate (Actual Cost)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Timestamped damage photo + itemized repair/replacement receipt</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sec 73 Contract Act (Actual Restitution)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For flat tenancies where a landlord deducts full-house painting fees, see our dedicated guide on{" "}
                  <Link href="/legal-notice-landlord-unreasonable-security-deposit-deductions" className="text-blue-700 underline font-semibold">
                    challenging unreasonable landlord painting and repair deductions
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4: City-Wise PG Rules (Pune, Bengaluru, Gurugram, Hyderabad, Mumbai, Chennai) & Model Tenancy Act † */}
              <section id="heading-city-rules" aria-labelledby="heading-city-rules-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-city-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  PG Notice Period, Deposit Caps and Lock-In Rules Across Cities
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  One of the most searched questions by students and young professionals is: <strong>&quot;What is the notice period for vacating a PG in Pune?&quot;</strong> or whether a PG can demand 3 to 6 months&apos; deposit in Bengaluru or Mumbai. Because urban housing and hostels are regulated at the state and municipal level alongside central contract law, here is how rules apply across India&apos;s major PG hubs:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">City-wise PG Notice Period, Security Deposit and Legal Framework in India</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">City &amp; Key PG Hubs</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical PG Deposit</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Standard Notice Period</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Applicable Legal Framework &amp; Common City Trap</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pune (Hinjewadi, Kharadi, Wakad, Viman Nagar, Kothrud, Baner)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">1–2 Months Rent</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">30 Days (or 15d short-stay)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Leave &amp; Licence (Sec 52 Easements Act) / Maharashtra Rent Control Act Sec 24. <strong>Common Trap:</strong> Owners claim notice only counts from the 1st of next month—unenforceable unless signed prior to entry.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bengaluru (HSR Layout, Whitefield, Koramangala, Electronic City, BTM)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">1–2 Months Rent</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Contract Act Sec 74 &amp; CPA 2019. <strong>Common Trap:</strong> Flat ₹2,000–₹3,000 &quot;maintenance/painting&quot; cut deducted from every PG deposit at checkout regardless of stay length.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Gurugram &amp; Noida (Sector 14–56, Udyog Vihar, Cyber Park, Sec 62/126)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">1–2 Months Rent</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          UP Regulation of Urban Premises Tenancy Act, 2021 (in Noida/UP: 2-month residential cap†) &amp; Contract Act. <strong>Common Trap:</strong> ₹15–₹18/unit electricity surcharge without sub-meter photo.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Hyderabad &amp; Chennai (Gachibowli, Madhapur, Kondapur, OMR, Velachery)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">1 Month (PG) / 2 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">15–30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          TN Regulation of Rights and Responsibilities of Landlords and Tenants Act (in Chennai) &amp; CPA 2019. <strong>Common Trap:</strong> Oral &quot;no-refund on early exit&quot; claims with zero written agreement.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          National Co-Living Apps (Stanza Living, Zolo, Colive, Your-Space)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">1–2 Months + Onboarding Fee</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-amber-700">30 Days via App + 3–6m Lock-In</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Consumer Protection Act, 2019 Sec 2(11), 2(46) &amp; 2(47). <strong>Common Trap:</strong> 45-working-day refund delays and app-only notice buttons disabled when any disputed bill is pending.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* † Statutory Verification Box on Model Tenancy Act 2021 */}
                <div className="p-4 bg-amber-50/90 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong className="font-extrabold text-amber-900 block mb-1">
                    † Statutory Note on the Model Tenancy Act, 2021 (2-Month Deposit Rule — Verified as of November 2026):
                  </strong>
                  Under <strong>Section 11(1)(a) of the Central Model Tenancy Act, 2021</strong>, residential security deposits are capped at two months&apos; rent and must be refunded upon vacating. Because land and tenancy fall under Entry 18 of the State List (Seventh Schedule of the Constitution), the Model Tenancy Act operates only in states/UTs that have enacted or notified corresponding state laws (such as Tamil Nadu, Uttar Pradesh, Andhra Pradesh, and Assam), and exempts certain lodging/hotel premises unless notified. However, even in states like Maharashtra and Karnataka, Consumer Commissions treat the 2-month cap and Section 74 of the Contract Act as the benchmark against unconscionable PG deposit forfeitures. Read our full breakdown in{" "}
                  <Link href="/law/model-tenancy-act-security-deposit-rules" className="text-blue-800 underline font-semibold">
                    Model Tenancy Act security deposit rules by state
                  </Link>{" "}
                  and{" "}
                  <Link href="/should-rental-agreements-be-notarized-in-india" className="text-blue-800 underline font-semibold">
                    whether 11-month rental and PG agreements need notarization or registration
                  </Link>
                  .
                </div>
              </section>

              {/* Section 5: Landmark Court & Consumer Commission Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Court Precedents on Lock-In Forfeiture and PG Deposit Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Rulings
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
                            Precedent #{idx + 1} • {c.citation}
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
                              Core Legal Rule / Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Application
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on Civil Courts &amp; Consumer Commissions
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your PG deposit:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Statutory Escalation Flow (Mobile Cards + Hand-Authored SVG Flowchart) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Flow: From PG Exit Notice to 100% Deposit Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this five-stage legal pathway to lock in your exit evidence, defeat arbitrary lock-in or notice-period excuses, and compel your PG owner or co-living operator to release your deposit:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Written Exit Notice + Defect Log</h3>
                    <p className="text-xs text-slate-200 mt-1">Send 15/30-day notice on WhatsApp + Email (or immediate Sec 39 breach notice with photos).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Room Video &amp; Key Handover</h3>
                    <p className="text-xs text-amber-900 mt-1">Record timestamped room walkthrough video, sub-meter reading, and warden key handover.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">48-Hour Final Ledger Demand</h3>
                    <p className="text-xs text-slate-700 mt-1">Demand itemized electricity/damage bills and full NEFT/UPI refund within 7 days.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice (Sec 74)</h3>
                    <p className="text-xs text-red-900 mt-1">Serve 15-day statutory demand notice via Speed Post + Email + WhatsApp (Sec 63 BSA).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Bank Refund or e-Jagriti Filing</h3>
                    <p className="text-xs text-emerald-900 mt-1">Receive deposit in bank or file ₹0-fee consumer case on e-Jagriti for deposit + 12% interest.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive PG Deposit Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="PG Lock-In and Security Deposit Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="pgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="pgAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="pgSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#pgGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Serve Exit Notice</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">30d Notice or Sec 39</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">WhatsApp + Email Log</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Handover Proof</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Room Video + Meter</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Key Return Timestamp</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Audit Deductions</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Reject Fake Painting</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Demand DISCOM Bill</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#pgAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Sec 74 Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + BSA 63</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#pgSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">100% Refund</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">UPI/NEFT Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Award</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">KEY STATUTORY RULES FOR PG &amp; CO-LIVING REFUNDS IN INDIA:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 74 Indian Contract Act: No automatic lock-in deposit forfeiture without proved empty-bed vacancy loss</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 39 Contract Act: Immediate exit with 100% refund if PG breaches hygiene, food, water, or safety terms</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Consumer Protection Act 2019: ₹0 filing fee on e-Jagriti for PG/hostel claims up to ₹5,00,000 + 12% interest</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: What Actually Works — 5-Step Action Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook When a PG Owner Refuses to Return Deposit
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your PG is an independent building in Pune or Bengaluru or a corporate co-living property, verbal arguments with the warden rarely work. Follow these 5 concrete steps to force a settlement:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Send a Written, Timestamped Vacating Notice (And State Owner Breaches If Leaving in Lock-In)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Never give your notice verbally to a PG caretaker. Send a clear message on WhatsApp and email to the PG owner&apos;s number stating: (a) the date of notice, (b) your exact move-out date, and (c) your bank/UPI details for refund of the ₹[Amount] security deposit. If you are vacating during a lock-in period because of poor food quality, water shortages, bedbugs, damp walls, or broken Wi-Fi, explicitly write those reasons and attach photos so your exit is legally protected under <strong>Section 39 of the Indian Contract Act</strong>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Film a 60-Second Room Handover Video &amp; Photograph the Electricity Sub-Meter
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On your final day, before handing over the room key and biometric card, record a continuous 60-second smartphone video showing the clean mattress, cupboard, walls, bathroom fittings, fan/AC working, and the exact reading on the room&apos;s electricity sub-meter. Send a WhatsApp message right then: <em>&quot;Handed over keys and ID card in undamaged condition to [Warden Name] at [Time]; sub-meter reading is [X] units.&quot;</em> This destroys fabricated damage and ₹5,000 painting claims.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Demand an Itemized Deduction Breakdown &amp; Check If Your Bed Was Re-Allotted
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the PG owner claims a deduction for lock-in breach, painting, or electricity, reply in writing asking for: (1) the official state DISCOM electricity bill, (2) GST repair invoices, and (3) confirmation of whether your bed/room has been allotted to a new paying guest. Ask a roommate in the PG to confirm when a new occupant moves into your bed—under the Supreme Court&apos;s <em>Kailash Nath</em> ruling, re-allotment proves zero vacancy loss. If you also lost money to a property portal or broker while hunting for a replacement flat, see our{" "}
                        <Link href="/legal-notice-to/nobroker" className="text-blue-700 underline font-semibold">
                          NoBroker money-back plan and brokerage refund guide
                        </Link>{" "}
                        and{" "}
                        <Link href="/token-money-refund-property-deal" className="text-blue-700 underline font-semibold">
                          token money refund rules for rental and property deals
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal 15-Day Advocate Legal Notice (Speed Post + Email + WhatsApp)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When a PG owner sees a formal statutory notice on an advocate&apos;s letterhead citing <strong>Section 74 of the Indian Contract Act</strong>, <strong>Section 2(11) &amp; 2(46) of the Consumer Protection Act, 2019</strong>, and municipal trade-licence/tax-reporting scrutiny for unregistered commercial PG operations, the calculus flips immediately. Fighting a consumer case costs the PG owner far more than returning a ₹15,000–₹40,000 deposit. Check our transparent{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                          legal notice charges and advocate drafting fees
                        </Link>{" "}
                        or read our step-by-step guide on{" "}
                        <Link href="/legal-notice-to-pg-owner-for-security-deposit-refund" className="text-blue-700 underline font-semibold">
                          sending a legal notice to a PG owner for security deposit refund
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge an NCH 1915 Grievance &amp; File Online on e-Jagriti (Even After Moving Cities)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day cure window expires without payment, register a pre-litigation docket on the <strong>National Consumer Helpline (1915)</strong> and file an online consumer complaint on <strong>e-Jagriti (e-jagriti.gov.in)</strong>. Under <strong>Section 34(2)(d) of the Consumer Protection Act, 2019</strong>, you can file the case in the District Commission of the city where you <em>currently reside or work</em>—so even if you left your Pune or Bengaluru PG and returned to your hometown, you do not have to travel back to fight the case.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Interactive Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Select Your PG Dispute Scenario: Legal Basis and Tactical Fix
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Click Your Specific Situation Below for the Exact Statutory Provision and 3-Step Remedy
                  </p>
                </div>

                <PgLockInProblemTabs />
              </section>

              {/* Section 9: Worked Case Study (Pune PG Lock-In & Notice Period Dispute) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovering PG Deposit Disputed Under Lock-In Clause
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative PG Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Hinjewadi Phase 2, Pune (Executive PG Accommodation)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Move-In &amp; Lock-In Clause:</strong> Ritika Deshmukh, a software engineer in Pune, moved into a twin-sharing executive PG in Hinjewadi Phase 2 on 1 July at a monthly rent of ₹18,000, paying a 2-month refundable security deposit of <strong>₹36,000 via UPI</strong>. The PG onboarding form contained a 6-month lock-in period and a 30-day notice period clause.
                    </p>
                    <p>
                      <strong>The Dispute &amp; Unilateral Forfeiture:</strong> In late September (month 3), the PG&apos;s common RO water purifier broke down for 12 days, dinner catering was repeatedly cancelled, and Ritika was shifted to her company&apos;s Kharadi office. On 28 September, she sent a 30-day written vacating notice on WhatsApp for 28 October. When she vacated on 28 October and handed over the keys, the PG owner refused to return a single rupee of her ₹36,000 deposit—claiming (1) full forfeiture for leaving before the 6-month lock-in expired, and (2) ₹3,500 for room repainting and bed sanitization. Worse, another IT employee moved into Ritika&apos;s vacated bed on 1 November.
                    </p>
                    <p>
                      <strong>The Statutory Legal Notice:</strong> Ritika initiated a notice through LegalRecovery.in. Our advocate served a 15-day statutory demand notice via Registered Speed Post, Email, and WhatsApp to the PG proprietor, citing: (1) <strong>Section 39 of the Indian Contract Act</strong> (repudiation due to the PG&apos;s failure to provide potable RO water and meals), (2) <strong>Section 74 of the Contract Act &amp; <em>Kailash Nath v. DDA</em></strong> (zero vacancy loss since the bed was re-occupied within 3 days on 1 November, making forfeiture an illegal penalty), and (3) <strong>Section 2(11) &amp; 2(47) of the Consumer Protection Act, 2019</strong> ahead of an e-Jagriti complaint.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Settlement Outcome (Day 9):</strong>
                      Faced with a documented Section 74 claim, timestamped photos of the broken RO plant, proof that the bed was already re-occupied, and imminent consumer court litigation, the PG owner contacted the advocate on Day 7. After deducting only ₹680 for Ritika&apos;s verified October sub-meter electricity share, the owner refunded <strong>₹35,320 via IMPS</strong> on Day 9.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Critical Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Essential Records Before Vacating a PG
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, digital records—including WhatsApp chats, UPI receipts, and smartphone videos—are primary admissible evidence when accompanied by a statutory certificate:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">UPI / Bank Transfer Proof of Security Deposit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank statement or Google Pay / PhonePe receipt showing the 12-digit UTR number, date, and PG owner/entity name.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">PG Onboarding Form, Leave &amp; Licence or App PDF:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of any signed PG rules sheet, co-living app booking confirmation, or WhatsApp tariff message sent at move-in.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Timestamped Written Vacating Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp chat export or email showing the exact date you notified the PG owner/captain of your move-out date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">60-Second Room Walkthrough &amp; Sub-Meter Photo:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Checkout video of the undamaged bed, cupboard, walls, and bathroom, plus a clear photo of the electricity sub-meter.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Service Deficiency Proof (For Lock-In Exits):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Dated photos/videos and PG WhatsApp group complaints showing bad food, pests/bedbugs, water cuts, or broken Wi-Fi/AC.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Key Handover Confirmation &amp; Re-Occupancy Note:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp message confirming key return to the warden and any confirmation that a new resident took your bed.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Honest Scope Block */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope: Legal Remedies for PG and Hostel Deposit Disputes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> What We Can Enforce for You
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900 leading-relaxed list-disc list-inside">
                      <li>Draft and serve a formal 15-day statutory Advocate Legal Notice to the PG owner, hostel trust, or co-living company (Stanza Living, Zolo, Colive, Your-Space).</li>
                      <li>Challenge automatic lock-in deposit forfeitures under Section 74 &amp; Section 39 of the Indian Contract Act and Section 2(46) CPA 2019.</li>
                      <li>Contest arbitrary painting charges, move-out fees, &quot;1st-to-1st&quot; notice period traps, and unbilled electricity deductions.</li>
                      <li>Provide you with a court-ready Section 63 BSA-compliant notice dossier for zero-fee e-Jagriti consumer filing if the owner still refuses to pay.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-amber-950 flex items-center gap-2">
                      <span className="text-amber-600">!</span> Where Statutory Limits Apply
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900 leading-relaxed list-disc list-inside">
                      <li>If you vacated overnight with zero prior notice, had no service complaints, and the PG owner proves your single room stayed empty for the notice month, the owner can lawfully deduct pro-rata notice shortfall rent.</li>
                      <li>If you paid the entire deposit in unaccounted physical cash without any receipt, WhatsApp acknowledgment, or witness, recovery depends on getting the owner to admit receipt on chat or call first.</li>
                      <li>We handle pre-litigation statutory notices and settlement negotiation; physical police action is only applicable if the PG owner locks your personal belongings or laptops inside the room (wrongful restraint/retention under BNS).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on PG Lock-In Period, Notice Rules and Deposit Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in the Indian Contract Act, Consumer Protection Act &amp; Model Tenancy Act
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

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Key Statutes, Court Judgments and Official Consumer References
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
                  Last updated: 4 November 2026. All statutory provisions verified against India Code statutes, Supreme Court judgments, and Ministry of Housing and Urban Affairs Model Tenancy Act records as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Notice to Your PG Owner or Co-Living Operator
                </h2>
                <PgLockInNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related PG, Security Deposit &amp; Tenant Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit From Landlord in India →
                  </Link>
                  <Link
                    href="/legal-notice-to-pg-owner-for-security-deposit-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to PG Owner for Deposit Refund →
                  </Link>
                  <Link
                    href="/law/model-tenancy-act-security-deposit-rules"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Model Tenancy Act 2-Month Security Deposit Rules →
                  </Link>
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Challenge Unreasonable Painting &amp; Repair Deductions →
                  </Link>
                  <Link
                    href="/legal-notice-to/nobroker"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NoBroker Refund &amp; Money-Back Plan Dispute →
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Token Money Refund Rules in Property &amp; Rental Deals →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fee Schedule →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/pg-lock-in-period-notice-period-rules" cluster="property" />
      </div>
    </>
  );
}
