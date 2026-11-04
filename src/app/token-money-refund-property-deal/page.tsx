import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TokenMoneyNoticeCTA from "./TokenMoneyNoticeCTA";
import TokenMoneyTableOfContents from "./TokenMoneyTableOfContents";
import TokenMoneyProblemTabs from "./TokenMoneyProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Token Money Refund Rules: When the Property Deal Fails",
  description:
    "Token or bayana money refund rules for resale property deals: forfeiture limits, agreement terms and recovering it with a notice.",
  alternates: {
    canonical: `${SITE_URL}/token-money-refund-property-deal`,
  },
  openGraph: {
    title: "Token Money Refund Rules in India: Recover Bayana When a Property Deal Fails",
    description:
      "Statutory rules on token money and bayana forfeiture under Sections 73–74 Contract Act and Section 55(6)(b) Transfer of Property Act, Supreme Court precedents, and legal notice recovery.",
    url: `${SITE_URL}/token-money-refund-property-deal`,
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
    title: "Indian Contract Act, 1872 — Section 73 (Compensation for Breach) & Section 74 (Contract with Penalty / Forfeiture Stipulations)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Transfer of Property Act, 1882 — Section 55(1)(a) (Seller's Duty to Disclose Material Defects) & Section 55(6)(b) (Buyer's Statutory Charge for Prepaid Purchase Money)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Kailash Nath Associates v. Delhi Development Authority & Anr. (2015) 4 SCC 136 — Supreme Court on Section 74 Earnest Money Forfeiture & Proof of Loss",
    url: "https://main.sci.gov.in/jonew/judis/42264.pdf",
  },
  {
    title: "Satish Batra v. Sudhir Rawal (2013) 1 SCC 345 — Supreme Court Distinction Between Earnest Money (Bayana) and Part-Payment Advance",
    url: "https://main.sci.gov.in/jonew/judis/39653.pdf",
  },
  {
    title: "Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405 (5-Judge Constitution Bench) — Forfeiture of Advance Exceeding Earnest Money Held Impermissible Under Section 74",
    url: "https://main.sci.gov.in/jonew/judis/3650.pdf",
  },
  {
    title: "Real Estate (Regulation and Development) Act, 2016 (RERA) — Section 12, Section 13 (10% Advance Cap Before Registered Agreement) & Section 18",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Chats, UPI Receipts & Digital Bayana Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Constitution Bench Rule: Seller Cannot Forfeit Part-Payment Advance Without Proving Loss",
    parties: "Fateh Chand v. Balkishan Dass",
    citation: "AIR 1963 SC 1405 • 1964 SCR (1) 515 (5-Judge Constitution Bench, Supreme Court)",
    date: "Judgment Dated 15 January 1963",
    facts:
      "Under an agreement to sell leasehold property in Delhi for ₹1,12,500, the buyer paid ₹1,000 as earnest money and a further ₹24,000 as advance part-payment upon delivery of possession. When the sale deed was not registered within the stipulated date, the seller sought to forfeit the entire ₹25,000 under a forfeiture clause in the agreement.",
    holding:
      "A five-judge Constitution Bench of the Supreme Court held that Section 74 of the Indian Contract Act cuts across all penalty stipulations, including clauses permitting forfeiture of part-payments paid under a contract of sale. While a nominal sum paid strictly as earnest money (₹1,000) could be forfeited upon buyer default, the seller had zero legal right to forfeit the ₹24,000 advance part-payment because the seller failed to prove any actual financial loss suffered from the breach.",
    amount: "Refund of ₹24,000 Advance Ordered + 6% Interest (Only ₹1,000 Nominal Earnest Money Allowed)",
    takeaway:
      "Even if your Agreement to Sell labels a large 20%–30% payment as 'non-refundable bayana', courts split genuine nominal earnest money from advance part-payment and strike down penal forfeiture under Section 74 unless the seller proves real market loss.",
  },
  {
    title: "Section 74 Applies to Earnest Money: Arbitrary Forfeiture Without Loss Is Illegal",
    parties: "Kailash Nath Associates v. Delhi Development Authority & Anr.",
    citation: "Civil Appeal No. 193 of 2015, (2015) 4 SCC 136 (Supreme Court of India)",
    date: "Judgment Dated 09 January 2015",
    facts:
      "The appellant deposited ₹78,00,000 as 25% earnest money for a commercial plot auction. After prolonged extensions and unilateral noncompliance by the authority, DDA cancelled the allotment and forfeited the entire ₹78 lakh earnest money, later re-auctioning the same property at more than triple the price.",
    holding:
      "The Supreme Court laid down comprehensive principles governing earnest money under Section 74 of the Contract Act: (1) Forfeiture of earnest money is not automatic—it is triggered only if the buyer commits a breach of contract; (2) All stipulations for forfeiture of earnest money are governed by Section 74; and (3) Where the seller suffers zero loss—or actually makes a windfall profit by reselling the property at a higher price—forfeiting the buyer's earnest money is arbitrary, unconscionable, and legally impermissible.",
    amount: "100% Refund of ₹78,00,000 Earnest Money + 9% Annual Interest",
    takeaway:
      "If the seller refuses to return your token money and subsequently sells the flat to someone else at the same or higher price, they have suffered zero legal damage. Under Kailash Nath, you can demand 100% restitution.",
  },
  {
    title: "Distinction Between Conditional Token Money, Earnest Money (Bayana) & Part-Payment",
    parties: "Satish Batra v. Sudhir Rawal",
    citation: "Civil Appeal No. 7588 of 2012, (2013) 1 SCC 345 (Supreme Court of India)",
    date: "Judgment Dated 18 October 2012",
    facts:
      "In an agreement to sell immovable property for ₹70,00,000, the purchaser paid ₹7,00,000 (10%) as earnest money. The agreement contained an explicit two-way clause: if the seller defaulted, he would pay double the earnest money (₹14,00,000); if the buyer failed to pay the balance ₹63,00,000 within 3 months, the 10% earnest money would stand forfeited. The buyer defaulted on balance payment without justification.",
    holding:
      "The Supreme Court clarified the dual nature of earnest money: it represents a guarantee of contract performance that becomes part of the purchase price if the transaction goes forward, and is forfeited only if the transaction falls through solely by reason of the fault or failure of the purchaser. However, the Court explicitly held that a mere part-payment or preliminary token deposit paid without an express forfeiture covenant in a concluded contract cannot be forfeited.",
    amount: "10% Cap Benchmark for Genuine Earnest Money When Buyer Unilaterally Defaults",
    takeaway:
      "Check your receipt or agreement carefully: if you only signed a kachha token slip, paid via UPI with WhatsApp messages, or if the agreement lacks an explicit forfeiture clause, the seller cannot forfeit a single rupee under Satish Batra.",
  },
  {
    title: "Buyer's Statutory Charge on the Property for Refund of Prepaid Token & Advance",
    parties: "Videocon Properties Ltd. v. Dr. Bhalchandra Laboratories & Ors.",
    citation: "Civil Appeal No. 7662 of 1997, (2004) 3 SCC 711 (Supreme Court of India)",
    date: "Judgment Dated 23 December 2003",
    facts:
      "A property buyer paid earnest money and advance instalments under an agreement for sale. Due to the seller's failure to fulfil contractual obligations and convey clear title, the agreement was terminated, and the buyer demanded refund of the advance with interest, asserting a statutory charge over the landed property.",
    holding:
      "The Supreme Court held that under Section 55(6)(b) of the Transfer of Property Act, 1882, unless a buyer has improperly declined to accept delivery of the property, the buyer holds a statutory charge on the property itself for the entire amount of any purchase money properly paid in anticipation of the delivery, plus interest on such amount and earnest money. This statutory charge attaches from the moment the advance is paid and is enforceable against the seller and any subsequent purchaser with notice.",
    amount: "Full Advance Refund + Statutory Charge Over Property Under Section 55(6)(b) TPA",
    takeaway:
      "When a deal fails due to seller default, title defect, or loan rejection caused by building violations, invoking Section 55(6)(b) in your legal notice puts a legal cloud on the property, preventing the seller from easily selling it to another buyer until your token is refunded.",
  },
];

const FAQS = [
  {
    question: "What are the token money refund rules in India when a property deal fails?",
    answer:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872 and Section 55(6)(b) of the Transfer of Property Act, 1882, token money refund rules depend on why the deal failed and whether a written forfeiture clause exists. If the deal fails due to a title defect, hidden mortgage, unapproved construction causing home loan rejection, or the seller backing out, the buyer is legally entitled to a 100% refund of the token/bayana amount with 9% to 18% annual interest. Even if the buyer backs out, the seller cannot forfeit an informal token paid without a signed forfeiture agreement, and cannot forfeit more than a reasonable nominal earnest amount (typically capped at 5%–10% on proved loss) under Supreme Court rulings in Fateh Chand (1963) and Kailash Nath (2015).",
  },
  {
    question: "Is token amount refundable or not if no formal Agreement to Sell was signed?",
    answer:
      "Yes, 100% refundable. If you paid a preliminary token amount via UPI, NEFT, IMPS, cheque, or cash against a handwritten kachha receipt, WhatsApp message, or property dealer slip—and no formal Agreement to Sell (ATS) or Memorandum of Understanding (MoU) containing an explicit forfeiture clause was signed—the money is legally classified as a refundable deposit towards negotiation, not forfeitable earnest money. Under Sections 65 and 70 of the Indian Contract Act (doctrine of restitution and unjust enrichment), the seller or landlord must refund the entire token amount upon cancellation.",
  },
  {
    question: "Can the seller forfeit my bayana money if my bank home loan is rejected?",
    answer:
      "If your home loan is rejected because the property lacks a sanctioned building plan, Completion/Occupancy Certificate (CC/OC), clear chain of title deeds, or has encumbrances, the fault lies with the seller under Section 55(1)(a) of the Transfer of Property Act, and you are entitled to a 100% bayana refund. If the loan was rejected due to your personal income or CIBIL score and the agreement did not contain a 'subject to loan sanction' contingency clause, the seller still cannot arbitrarily pocket a large 20%–25% advance—under Section 74 of the Contract Act, any forfeiture beyond nominal administrative loss is treated as an unenforceable penalty.",
  },
  {
    question: "What can I do if the seller backs out of the property deal after taking bayana?",
    answer:
      "When a seller backs out—often because property rates rose or another buyer offered a higher price—you have two statutory options: (1) Serve a formal advocate legal notice demanding 100% refund of your bayana plus contractual damages (many bayana agreements stipulate 'double bayana' compensation on seller default, enforceable to the extent of market price differential under Section 73 Contract Act) along with a Section 55(6)(b) statutory charge on the property; or (2) File a suit for Specific Performance under Section 10 of the Specific Relief Act, 1963 along with an Order 39 CPC temporary injunction restraining the seller from transferring the property to any third party.",
  },
  {
    question: "What are the token amount refund rules under RERA when booking a flat with a builder?",
    answer:
      "For primary flat or plot bookings with a developer, Section 13(1) of the RERA Act, 2016 prohibits a builder from accepting more than 10% of the apartment cost as advance or application fee without first executing and registering a written Agreement for Sale. If a builder delays possession or changes layout plans, you are entitled to a 100% refund with SBI MCLR + 2% interest under Section 18 of RERA. Even if a buyer cancels a booking for personal reasons, the Supreme Court and NCDRC (in DLF Ltd. v. Bhagwanti Narula) have capped builder forfeiture at a maximum of 10% of the basic sale price (or actual token paid, whichever is lower), ordering immediate refund of the balance.",
  },
  {
    question: "How do I write a token money refund application to a seller, landlord, or broker?",
    answer:
      "Your written token money refund application must be sent via email, WhatsApp, and Registered Post before the agreement deadline expires. It must clearly state: (1) Exact property address and date of token payment; (2) Amount paid and 12-digit bank UTR / cheque number; (3) The specific reason the transaction cannot proceed (e.g., missing title documents, bank loan rejection, or mutual cancellation prior to agreement); (4) Your bank account details for NEFT/RTGS reversal; and (5) A clear 7-to-15 day deadline to refund the amount failing which an advocate legal notice and civil recovery suit will be initiated.",
  },
  {
    question: "Property deal cancel hone par token money ya bayana wapas kaise le?",
    answer:
      "Agar resale flat, plot ya rental deal cancel hone ke baad makan malik, seller ya broker aapka token / bayana paisa wapas nahi kar raha hai, toh sabse pehle WhatsApp aur email par likhit cancellation aur refund demand bhejein. Agar seller bina kisi vastavik nuksan (actual loss) ke bayana zabt (forfeit) karne ki dhamki de, toh LegalRecovery.in ke madhyam se Indian Contract Act ki Dhara 73–74 aur Transfer of Property Act ki Dhara 55(6)(b) ke tehat 15 din ka Advocate Legal Notice bhejein. Legal notice se property par kanooni daava (statutory charge) darj ho jata hai, jisse seller kisi teesre vyakti ko property nahi bech pata aur 15 din mein samjhauta kar leta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Property Deal Fell Through? When You Get Your Token Money Back",
  description:
    "Token or bayana money refund rules for resale property deals: forfeiture limits, agreement terms and recovering it with a notice.",
  datePublished: "2026-11-04T11:55:00+05:30",
  dateModified: "2026-11-04T11:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/token-money-refund-property-deal`,
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
    name: "Token Money and Earnest Money (Bayana) Refund Rules in India",
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
      name: "Security Deposit & Rental Recovery",
      item: `${SITE_URL}/recover-security-deposit-from-landlord-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Token Money Refund Rules",
      item: `${SITE_URL}/token-money-refund-property-deal`,
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

export default function TokenMoneyRefundPropertyDealPage() {
  const breadcrumbItems = [
    { label: "Security Deposit & Rental Recovery", href: "/recover-security-deposit-from-landlord-india" },
    { label: "Token Money Refund Rules", href: "/token-money-refund-property-deal" },
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

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC & Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 74 Contract Act &amp; Sec 55(6)(b) TPA</span>
              <span className="text-red-500">•</span>
              <span>Resale, Rental &amp; Bayana Refund Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Property Deal Fell Through? When You Get Your Token Money Back
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Token &amp; Bayana Forfeiture Limits in India)
              </p>
              <p>
                Under Section 74 of the Indian Contract Act, 1872 and Section 55(6)(b) of the Transfer of Property Act, 1882, a seller, landlord, or broker cannot arbitrarily forfeit your token or bayana money when a property deal fails. If no forfeiture clause was signed, or if the deal collapsed due to title defects, home loan rejection, or seller default, you are entitled to a 100% refund with interest within 3 years—enforceable via a 15-day advocate legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">No Agreement / Seller Default</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 55(6)(b)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Charge on Property</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">≤ 10% Cap</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Earnest Forfeiture (SC Rule)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period (12 Yrs Charge)</p>
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
            <TokenMoneyTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1 (Archetype G4 Hero Element): Big Comparison Matrix of Routes */}
              <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Token &amp; Bayana Recovery Routes Compared: Notice vs Civil Suit vs RERA vs Police
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G4 Forum Matrix
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a resale flat purchase, plot transaction, or high-value rental deal falls through, sellers and property brokers routinely claim that <em>&quot;token money is never refunded once paid.&quot;</em> Indian contract and property statutes say the exact opposite. Choosing the right legal forum depends on who holds your money (individual owner, broker, or builder) and whether a signed Agreement to Sell exists:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[680px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Legal Routes to Recover Token or Bayana Money in India</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Route / Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Best Used Against</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Cost &amp; Court Fee</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Proof Needed &amp; Legal Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80 bg-red-50/20">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          1. Advocate Legal Notice + Sec 55(6)(b) Charge
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-slate-800">
                          Resale Seller, Landlord, Property Dealer / Broker
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          7–15 Calendar Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-slate-900">
                          Low Fixed Fee (Pre-Litigation)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          UPI/Bank UTR + WhatsApp/Bayana slip. Puts seller on notice of statutory charge, blocking resale to third parties.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          2. Order XXXVII Summary Suit / Civil Money Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Resale Property Seller Who Refuses Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          4–9 Months (Order 37) / 12–24m (Regular)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          State Ad-Valorem Court Fee (~1%–7%)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Written Bayana / ATS or bounced refund cheque. Defendant must get court leave to defend within 10 days.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          3. Consumer Court (e-Jagriti) / State RERA
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Real Estate Brokers, Portals (NoBroker/99acres), Builders
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">
                          3–6 Months
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          ₹0 up to ₹5L Claim (Consumer) / ₹1,000 (RERA)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Brokerage receipt, portal plan terms, or builder allotment slip. Awards 100% refund + MCLR+2% interest &amp; damages.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          4. Specific Performance Suit + Order 39 Injunction
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Seller Backing Out After Property Price Rise
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700 font-bold">
                          Interim Stay in 7–14 Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Court Fee on Total Sale Consideration
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Signed Agreement to Sell + proof of buyer&apos;s readiness with balance funds (Section 10 &amp; 16 Specific Relief Act).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          5. Police Complaint / FIR (BNS Sec 318 / 316)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Fake Owner, Forged Title, or Double-Bayana Fraud
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-bold">
                          15–45 Days (Preliminary Inquiry)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Nil Statutory Fee
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Must prove dishonest intention from inception (e.g., seller took bayana from 3 buyers or hid prior bank auction).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2 (Archetype G4 Persona Section): Which One Is Right For You? */}
              <section id="heading-persona-choice" aria-labelledby="heading-persona-choice-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-persona-choice-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Which Recovery Route Is Right for Your Failed Property Deal?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In Indian property transactions, a private individual selling a resale flat is not a &quot;service provider&quot; under the Consumer Protection Act, whereas a broker or builder is. Match your exact situation below to avoid filing in the wrong forum:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  <article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#DC2626]" />
                    <div className="space-y-2.5 pt-1">
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                        Persona A • Resale Buyer (Loan / Title Issue)
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        You Paid Token or Bayana to a Resale Flat Owner, and the Deal Collapsed
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Whether your bank home loan was rejected, title verification exposed an undisclosed mortgage or missing chain deed, or you cancelled before signing a formal Agreement to Sell, your fastest weapon is a <strong>15-day Advocate Legal Notice invoking Section 74 of the Contract Act and a Section 55(6)(b) statutory charge</strong>, followed by an <strong>Order XXXVII Summary Suit</strong> if unpaid.
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-red-700 mt-4 pt-3 border-t border-slate-100">
                      Recommended: Advocate Notice → Civil Summary Suit
                    </p>
                  </article>

                  <article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
                    <div className="space-y-2.5 pt-1">
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Persona B • Seller Backed Out for Higher Price
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        You Are Ready With the Balance Money, but the Seller Refuses to Register
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        When a seller stalls registration because market prices jumped or a third party offered ₹10 lakh more, do not quietly accept a delayed principal-only refund. Serve a <strong>statutory notice putting the property under lis pendens notice</strong> and demanding either immediate registration or <strong>100% refund plus double-bayana / market-difference damages</strong> under Section 73 Contract Act.
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-amber-800 mt-4 pt-3 border-t border-slate-100">
                      Recommended: Notice + Specific Performance / Damages
                    </p>
                  </article>

                  <article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-600" />
                    <div className="space-y-2.5 pt-1">
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Persona C • Broker, Portal or Landlord Token
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        You Paid Token to a Property Dealer, Portal, Builder, or Prospective Landlord
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If a property broker pocketed your token, a rental landlord refused to return a holding deposit after changing lease terms, or a builder forfeited your booking advance, you enjoy statutory consumer protection. Serve a <strong>joint legal notice to the owner and broker</strong>, then escalate via <strong>e-Jagriti Consumer Commission or State RERA</strong>.
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-emerald-700 mt-4 pt-3 border-t border-slate-100">
                      Recommended: Joint Notice → e-Jagriti / State RERA
                    </p>
                  </article>
                </div>
              </section>

              {/* Section 3: Token Money vs Earnest Money (Bayana) vs Part-Payment Law */}
              <section id="heading-token-vs-bayana" aria-labelledby="heading-token-vs-bayana-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-token-vs-bayana-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Is Token Amount Refundable or Not? Token vs. Bayana (Earnest Money) vs. Part-Payment
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Sellers and local property dealers deliberately blur the line between <strong>token money (sai / preliminary holding deposit)</strong>, <strong>earnest money (bayana)</strong>, and <strong>advance part-payment</strong> so they can threaten 100% forfeiture. However, the Supreme Court of India—across <em>Fateh Chand (1963)</em>, <em>Satish Batra (2013)</em>, and <em>Kailash Nath (2015)</em>—draws a strict three-tier legal distinction:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Legal Distinction Between Token Money, Earnest Money (Bayana) and Part-Payment Advance</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Payment Type</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">How It Is Paid in Practice</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">If Deal Fails Due to Seller / Title / Loan Issue</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">If Buyer Cancels for Personal Reasons</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute &amp; Case Law</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          1. Preliminary Token Money (Kachha Receipt / UPI)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          ₹10,000–₹2,00,000 paid to pause listing while title &amp; Agreement to Sell (ATS) are drafted
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          100% Refundable + Interest
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          100% Refundable (No concluded contract or forfeiture clause exists)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Sec 65 &amp; 70 Contract Act; Satish Batra (2013) SC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          2. Genuine Earnest Money (Pucca Bayana)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Typically 5%–10% of sale price paid upon signing a formal ATS with an express forfeiture clause
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          100% Refundable + Damages / Double Bayana (Sec 73)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">
                          Forfeitable ONLY up to reasonable loss (≤10%); 0% if seller resold at profit
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Sec 74 Contract Act; Kailash Nath (2015) 4 SCC 136
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          3. Advance Part-Payment (Above 10% Bayana)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          20%–50% stage payments made after bayana towards purchase price before registration
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          100% Refundable + Sec 55(6)(b) Statutory Charge
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          100% Refundable (Cannot be forfeited as penalty unless seller proves loss)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Fateh Chand v. Balkishan Dass, AIR 1963 SC 1405
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          4. Rental / Lease Holding Token
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          ₹5,000–₹50,000 paid to landlord or broker to block a flat before executing rent agreement
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">
                          100% Refundable Immediately
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          Refundable (At most actual days vacant if agreed in writing)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Sec 70 &amp; 74 Contract Act; Model Tenancy Act 2021
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 (Archetype G4 Deep-Dive per Route): Deep Dive Into Each Recovery Route */}
              <section id="heading-route-deep-dive" aria-labelledby="heading-route-deep-dive-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-route-deep-dive-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deep-Dive Analysis: How Each Token &amp; Bayana Recovery Route Works
                </h2>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Route 1: 15-Day Statutory Advocate Legal Notice &amp; Section 55(6)(b) Property Charge
                      </h3>
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                        Fastest Pre-Litigation Lever
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      In 70%+ of resale property and rental token disputes, the seller holds onto the money assuming the buyer will not spend years in civil court. A formal advocate legal notice reverses that calculation overnight. Drafted under <strong>Sections 73 and 74 of the Indian Contract Act</strong> and <strong>Section 55(6)(b) of the Transfer of Property Act, 1882</strong>, the notice formally terminates the transaction (or calls upon the seller to cure title defects), demands 100% restitution with 18% annual interest within 15 days, and notifies the seller (and the housing society / RWA) of the buyer&apos;s statutory charge over the property. Because no new buyer or bank will fund a property facing an active recovery dispute, sellers typically settle during the 15-day window. If your dispute involves a stuck advance in a broader real estate transaction, see our guide on{" "}
                      <Link href="/send-a-legal-notice/property-dispute-money-stuck" className="text-blue-700 underline font-semibold">
                        recovering money stuck in a property dispute
                      </Link>.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Route 2: Order XXXVII CPC Summary Suit &amp; Civil Suit for Recovery of Purchase Money
                      </h3>
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                        Written Bayana / Bounced Cheque
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If the seller ignores the 15-day legal notice and you possess a written Bayana Agreement, signed receipt, or a refund cheque that bounced, you do not have to endure a slow 5-year ordinary trial. You can institute a fast-track summary suit under{" "}
                      <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">
                        Order XXXVII of the Code of Civil Procedure (CPC)
                      </Link>{" "}
                      to recover a liquidated debt arising from a written contract. Under Order 37 Rule 3, the seller has no automatic right to defend—they must apply for &quot;leave to defend&quot; within 10 days of summons, and courts routinely require the seller to deposit the disputed token amount in court as a condition to defend. Furthermore, while a simple money recovery suit has a 3-year limitation period under Article 24/47 of the Limitation Act, a suit enforcing a buyer&apos;s statutory charge on immovable property under Section 55(6)(b) TPA enjoys a <strong>12-year limitation period under Article 62 of the Limitation Act, 1963</strong> (affirmed by the Supreme Court in <em>Delhi Development Authority v. Skipper Construction Co. (P) Ltd.</em>, (2000) 10 SCC 130).
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Route 3: Consumer Commission (e-Jagriti) &amp; State RERA (For Brokers, Portals &amp; Builders)
                      </h3>
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Brokers, Portals &amp; Developers
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      When token money is withheld by a real estate broker, property consultancy, online rental portal (such as a money-back plan or blocking token), or a real estate developer, you can file an online consumer complaint on <strong>e-Jagriti</strong> under Section 35 of the Consumer Protection Act, 2019 for deficiency in service and unfair trade practice. For primary flat or plot bookings with a builder,{" "}
                      <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
                        builder booking cancellation rules under RERA
                      </Link>{" "}
                      prohibit builders from taking more than 10% advance without a registered agreement (Section 13) and mandate full refund with SBI MCLR + 2% interest if the builder defaults (Section 18).
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Route 4: Criminal Prosecution Under Section 318 / 316 BNS (Fraudulent Title &amp; Double Sale)
                      </h3>
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                        Fraud From Inception Only
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Police stations routinely refuse to register FIRs in ordinary bayana disputes, calling them civil matters. However, if the seller induced you to pay token money while concealing that the property was already mortgaged to a bank under SARFAESI attachment, belonged to another co-owner who never consented, or if the seller simultaneously collected bayana from multiple buyers, the act constitutes criminal cheating from inception under{" "}
                      <Link href="/law/bns-318-cheating-vs-civil-dispute" className="text-blue-700 underline font-semibold">
                        Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)
                      </Link>{" "}
                      (formerly Section 420 IPC). Putting these specific fraudulent omissions into your legal notice and police complaint compels criminal inquiry.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Landmark Supreme Court Precedents Digest (Identical Card Style to IRCTC & Company Directors) */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Judgments on Token &amp; Earnest Money Forfeiture
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
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
                              Judicial Relief / Binding Rule
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Indian Civil Courts &amp; Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Statutory Resolution Hierarchy Flowchart (Mobile Cards + SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Flow: From Deal Collapse to Token Money Realization
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured pre-litigation and litigation escalation rail so the seller cannot falsely accuse you of defaulting on the agreement deadline:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Deal Breakdown Trigger</h3>
                    <p className="text-xs text-slate-200 mt-1">Loan rejected, title defect discovered, seller backs out, or pre-ATS cancellation.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Written Cancellation &amp; Demand</h3>
                    <p className="text-xs text-amber-900 mt-1">Send written refund application via Email/WhatsApp BEFORE bayana expiry date.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Legal Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Serve Speed Post + Email notice invoking Sec 74 Contract Act &amp; Sec 55(6)(b) TPA.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Statutory Charge &amp; RWA Intimation</h3>
                    <p className="text-xs text-red-900 mt-1">Put property under notice of buyer&apos;s charge so seller cannot sell to a 3rd party.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Bank Settlement or Order 37 Suit</h3>
                    <p className="text-xs text-emerald-900 mt-1">Full refund via RTGS/NEFT, or summary suit / e-Jagriti complaint with 18% interest.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Token and Bayana Money Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="tokenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="tokenAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="tokenSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#tokenGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Deal Collapses</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Title / Loan / Back-Out</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Freeze Further Payments</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Refund Request</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Send Before Due Date</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Record Reason in Writing</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Sec 74 &amp; Sec 55(6)(b)</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">15-Day Demand via RPAD</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#tokenAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Property Charge</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Block 3rd-Party Sale</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Seller / Broker Pressure</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#tokenSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Restitution</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Order 37 / e-Jagriti</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RULES &amp; LIMITATION BENCHMARKS FOR TOKEN / BAYANA RECOVERY:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Forfeiture Ceiling: Zero forfeiture without signed ATS clause; max nominal earnest cap (≤10%) only if seller proves actual loss (Kailash Nath SC)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Buyer&apos;s Charge: Attaches to property from date of payment under Section 55(6)(b) Transfer of Property Act, 1882</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Limitation Period: 3 Years for civil money recovery suit (Art. 24/47); up to 12 Years to enforce statutory property charge (Art. 62)</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Action Playbook to Recover Your Token or Bayana Money
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Execute these 5 chronological steps the moment you realise the property transaction is not moving forward, so the seller cannot manufacture a pretext to forfeit your deposit:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Stop Oral Follow-Ups &amp; Send Written Cancellation Before the Bayana Deadline Expires
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The single biggest trap in resale property deals is waiting past the 30-day or 60-day bayana completion date based on the broker&apos;s verbal assurance that <em>&quot;bhaiya maan jayenge, paise wapas mil jayenge.&quot;</em> Once the calendar date on the bayana slip passes without a written communication from you, the seller immediately sends a forfeiture notice claiming you defaulted. Send a timestamped email and WhatsApp message <strong>before</strong> the target date placing the exact reason for cancellation (missing title papers, loan technical rejection, or mutual withdrawal) on record.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Your Payment Receipt: Kachha Token Slip vs. Signed Agreement to Sell
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Check the exact document you signed. If you paid via UPI, NEFT, or cheque without signing any document—or only have a one-page broker token slip without an explicit forfeiture clause—cite the Supreme Court&apos;s ruling in <em>Satish Batra v. Sudhir Rawal (2013)</em>. Even if you signed a formal Agreement to Sell with a forfeiture clause, separate the initial 5%–10% earnest money from any subsequent advance part-payments, which are 100% protected from forfeiture under <em>Fateh Chand (1963)</em>. If you have no written agreement at all, review our legal guide on{" "}
                        <Link href="/how-to-recover-money-without-written-agreement" className="text-blue-700 underline font-semibold">
                          recovering money without a written agreement
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Gather Bank Loan Rejection Letters, Encumbrance Proofs &amp; WhatsApp Admissions
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Compile your 12-digit UTR bank transfer statement, the bank&apos;s home loan rejection or technical valuation report (showing unauthorized construction or missing OC/CC), Sub-Registrar Encumbrance Certificate, and the complete WhatsApp chat with the seller and property dealer. Under{" "}
                        <Link href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" className="text-blue-700 underline font-semibold">
                          Section 63 of the Bharatiya Sakshya Adhiniyam, 2023
                        </Link>, WhatsApp chats and voice notes where the seller or broker acknowledges receiving the token amount are fully admissible electronic evidence.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a 15-Day Advocate Legal Notice Asserting Section 74 &amp; Section 55(6)(b) Charge
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate dispatch a formal statutory legal notice via Registered Speed Post (RPAD), Email, and WhatsApp to the property owner (and jointly to the broker if the broker mediated the deal). The notice demands 100% refund within 15 days, challenges illegal forfeiture under Section 74 of the Contract Act, and formally notifies the seller that a <strong>statutory buyer&apos;s charge under Section 55(6)(b) of the Transfer of Property Act</strong> attaches to the property until every rupee is returned.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Order 37 Summary Suit, Section 138 Cheque Complaint, or e-Jagriti Petition
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the seller issued a refund cheque that was dishonoured, immediately serve a Section 138 NI Act notice within 30 days. For unpaid resale bayana, file an Order XXXVII CPC summary suit or a civil recovery suit with a prayer to enforce the Section 55(6)(b) charge against the property. If the money is held by a broker, property portal, or builder, lodge an online complaint on e-Jagriti or State RERA.
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
                    Select Your Failed Property Deal Scenario: Legal Basis &amp; Tactical Fix
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Click Your Specific Token or Bayana Dispute Below to See the Governing Supreme Court Rule and 3-Step Solution
                  </p>
                </div>

                <TokenMoneyProblemTabs />
              </section>

              {/* Section 9: Token Money Refund Application & Cancellation Letter Format */}
              <section id="heading-refund-application" aria-labelledby="heading-refund-application-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-refund-application-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Token Money Refund Application Format (Pre-Notice Written Demand)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Send via Email, WhatsApp &amp; Speed Post
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before the date stipulated on your token receipt or bayana slip expires, send this written <strong>token money refund application</strong> to the seller/landlord (copying the property broker) to create an indisputable paper trail:
                </p>

                <article
                  aria-label="Token Money Refund Application Template"
                  className="bg-white rounded-2xl border border-slate-300 p-5 sm:p-7 shadow-sm font-mono text-xs sm:text-sm text-slate-800 space-y-3 leading-relaxed overflow-x-auto"
                >
                  <p className="font-sans text-[11px] font-extrabold uppercase tracking-wider text-red-600 border-b border-slate-200 pb-2">
                    Template: Formal Cancellation &amp; Token / Bayana Refund Application (Without Prejudice)
                  </p>
                  <p><strong>Subject:</strong> Urgent: Cancellation of Property Deal &amp; Demand for Refund of Token / Advance Money of ₹[Amount] for [Flat/Plot No. &amp; Full Address]</p>
                  <p><strong>To:</strong> [Full Name of Seller / Landlord], [Address, Email &amp; Mobile Number]<br />
                  <strong>CC:</strong> [Name of Property Broker / Agency, if any]</p>
                  <p>Dear [Seller/Landlord Name],</p>
                  <p>
                    1. I had paid a sum of <strong>₹[Amount]</strong> (Rupees [Amount in Words]) to you on <strong>[Date of Payment]</strong> via [UPI / NEFT / IMPS / Cheque No. • UTR: ________] as a refundable token / advance towards the proposed [purchase / lease] of property bearing address <strong>[Complete Property Address]</strong>.
                  </p>
                  <p>
                    2. Please take formal notice that the proposed transaction cannot proceed due to <strong>[Select Reason: (a) non-availability of clear marketable title deeds / Completion Certificate / Society NOC required under Section 55(1)(a) of the Transfer of Property Act, 1882 / (b) rejection of home loan sanction by [Bank Name] vide letter dated [Date] / (c) mutual non-finalisation of the formal Agreement to Sell terms]</strong>.
                  </p>
                  <p>
                    3. Under <strong>Sections 65, 70, and 74 of the Indian Contract Act, 1872</strong> and the settled law laid down by the Hon&apos;ble Supreme Court in <em>Fateh Chand v. Balkishan Dass (AIR 1963 SC 1405)</em> and <em>Kailash Nath Associates v. DDA ((2015) 4 SCC 136)</em>, you have no legal right to forfeit the said token/advance amount in the absence of proved financial loss. Furthermore, under <strong>Section 55(6)(b) of the Transfer of Property Act, 1882</strong>, the prepaid amount constitutes a statutory buyer&apos;s charge on the said property.
                  </p>
                  <p>
                    4. You are hereby requested to refund the full sum of <strong>₹[Amount]</strong> to my bank account [Account Holder Name, Bank Name, A/c No., IFSC] within <strong>7 (seven) calendar days</strong> of receiving this communication, failing which I shall be constrained to serve a formal Advocate Legal Notice and initiate civil recovery proceedings at your sole risk as to costs and 18% p.a. interest.
                  </p>
                  <p>Sincerely,<br /><strong>[Your Full Name, Address &amp; Mobile Number]</strong><br />Date: [DD/MM/YYYY]</p>
                </article>
              </section>

              {/* Section 10: Worked Case Study (Identical Dark Card Style to IRCTC & Company Directors) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Buyer Recovers ₹5,00,000 Bayana After Home Loan Rejection &amp; Title Defect
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Property Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Noida / Delhi NCR (Resale 3BHK Apartment Deal)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Transaction &amp; Payment:</strong> Saurabh Khanna agreed to purchase a resale 3BHK flat in Noida for ₹92,00,000 through a local property dealer. He transferred ₹1,00,000 via IMPS as an initial blocking token and, four days later, paid another ₹4,00,000 via RTGS upon signing a 2-page Bayana Receipt that gave 45 days to complete registration.
                    </p>
                    <p>
                      <strong>The Dispute &amp; Forfeiture Threat:</strong> When Saurabh applied for an ₹70,00,000 home loan with SBI, the bank&apos;s legal scrutiny revealed two major hurdles: the seller hadnot registered the Tripartite Sub-Lease Deed properly, and there were ₹1,85,000 in pending society maintenance and sunken-fund arrears. When Saurabh asked the seller to clear the arrears and provide the missing chain document, the seller stalled past Day 45 and then sent a WhatsApp message claiming the ₹5,00,000 bayana stood forfeited due to &quot;buyer delay.&quot;
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Saurabh engaged LegalRecovery.in. Within 24 hours, a property recovery advocate drafted and dispatched a 15-day statutory demand notice via Registered Speed Post and email to both the seller and the property dealer, with a copy marked to the Apartment Owners Association (AOA) secretary. The notice cited <strong>Section 55(1)(a) and Section 55(1)(g) of the Transfer of Property Act</strong> (seller&apos;s failure to disclose defects and clear society dues), <strong>Section 74 of the Contract Act</strong> (<em>Kailash Nath</em> &amp; <em>Fateh Chand</em>), and placed the flat under formal notice of a <strong>Section 55(6)(b) statutory buyer&apos;s charge for ₹5,00,000 plus 18% interest</strong>.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Because the AOA refused to issue a transfer NOC while a Section 55(6)(b) legal notice was pending on record—and the next prospective buyer backed away upon learning of the dispute—the seller contacted Saurabh&apos;s advocate on Day 11 and refunded the entire ₹5,00,000 via RTGS against a mutual cancellation and no-claim receipt.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Critical Evidence Checklist & Honest Scope */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="space-y-4">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 6 Documents Required to Recover Token or Bayana Money
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), keep these 6 records ready before serving your statutory legal notice:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement With 12-Digit UTR / Cheque Proof:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Official PDF bank statement showing the exact UPI, IMPS, NEFT, RTGS, or encashed cheque debit to the seller or broker.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Token Receipt, Kachha Parchi, or Bayana Agreement:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Any handwritten token slip, broker receipt, MoU, or Agreement to Sell (even if unregistered or on plain/stamp paper).</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">WhatsApp Chat &amp; Voice Note Export (Sec 63 BSA):</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Full chat thread with the owner and property dealer acknowledging token receipt, deal price, and timeline extensions.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Loan Rejection or Title Search Report:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Written communication from your bank, lawyer, or Sub-Registrar EC showing why the property failed technical/legal scrutiny.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Readiness &amp; Timely Cancellation Email:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Timestamped email/message sent prior to the agreement expiry date demanding missing papers or refund.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Seller &amp; Property Address / PAN / Aadhar Details:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Full residential address of the seller/landlord, the subject property address, and broker office details for Speed Post service.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honest Scope Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-800">
                      ✓ What LegalRecovery Can Do For You
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      We verify your token receipt or Agreement to Sell, draft a tailored statutory legal notice citing Sections 73–74 Contract Act and Section 55(6)(b) Transfer of Property Act, and serve the seller, landlord, and broker via Registered Speed Post, Email, and WhatsApp—plus assist with Order 37 summary suit or e-Jagriti / RERA complaint filings.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-900">
                      ✕ Honest Scope &amp; Limitations
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      If you paid 100% of the token in unaccounted cash (&quot;black money&quot;) with zero written receipt, zero witness, and zero WhatsApp/SMS acknowledgment from the seller or broker, proving payment in a civil court is extremely difficult. Always anchor your claim to bank transfers, cheques, or recorded digital admissions.
                    </p>
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
                    Frequently Asked Questions: Token Money &amp; Bayana Refund Rules in India
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in the Indian Contract Act, Transfer of Property Act &amp; Supreme Court Precedents
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
                  Primary Statutes, Supreme Court Judgments &amp; Official References
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
                  Statutory verification status: All statutory provisions and Supreme Court citations verified against India Code and Supreme Court of India official records as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Send an Advocate Legal Notice to Recover Your Token or Bayana Money
                </h2>
                <TokenMoneyNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Property, Deposit &amp; Advance Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit from Landlord in India →
                  </Link>
                  <Link
                    href="/pg-lock-in-period-notice-period-rules"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG Lock-In Period &amp; Notice Period Rules →
                  </Link>
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Refund From Builder (RERA) →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/property-dispute-money-stuck"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property Dispute Money Stuck Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to-pg-owner-for-security-deposit-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG Owner Security Deposit Refund Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Housing Society / RWA Maintenance &amp; NOC Disputes →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII Summary Suit for Written Contracts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
