import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import NoBrokerNoticeCTA from "./NoBrokerNoticeCTA";
import NoBrokerTableOfContents from "./NoBrokerTableOfContents";
import NoBrokerProblemTabs from "./NoBrokerProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "NoBroker Refund Not Received? Legal Notice & Recovery",
  description:
    "NoBroker money-back plan or token refund not received? Read the plan terms, escalate in writing and send a legal notice if ignored.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/nobroker`,
  },
  openGraph: {
    title: "NoBroker Money-Back Plan or Token Refund Stuck? Legal Escalation Guide",
    description:
      "Statutory escalation route for denied NoBroker Money-Back Guarantee plans, stuck token advances, held NoBroker Pay rent transfers, and consumer court recovery.",
    url: `${SITE_URL}/legal-notice-to/nobroker`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "NoBroker Money-Back Plan or Token Refund Stuck? Legal Escalation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoBroker Money-Back Plan or Token Refund Stuck? Legal Escalation Guide",
    description:
      "Statutory escalation route for denied NoBroker Money-Back Guarantee plans, stuck token advances, held NoBroker Pay rent transfers, and consumer court recovery.",
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
    title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023 — Central Consumer Protection Authority (CCPA)",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
  },
  {
    title: "Indian Contract Act, 1872 — Section 65 (Obligation of Person Who Has Received Advantage Under Void Agreement) & Section 73 (Damages for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records, RM WhatsApp Logs & Payment Receipts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const PROBLEM_DOSSIERS = [
  {
    badge: "Failure Point #1 • Subscription & RM Plans",
    title: "Tenant or Buyer Money-Back Plan (Relax, Freedom, Assure) Refund Rejected on Fine Print",
    summary:
      "Tenants and homebuyers pay between ₹3,499 and ₹19,999+ for NoBroker subscription plans that headline a '100% Money-Back Guarantee' if a property is not finalised. In practice, dedicated Relationship Managers (RMs) often share properties that are already rented out, far outside the selected locality, above the stated budget, or listed by disguised brokers. When the plan expires and the subscriber asks for a refund, NoBroker customer care rejects the request citing buried terms—claiming the user 'did not unlock all 50 contacts', 'rejected viable properties shown by the RM', or missed a narrow post-expiry claim window.",
    remedy:
      "Mini-Remedy: Under Section 2(46) (Unfair Contract) and Section 2(47) (Unfair Trade Practice) of the Consumer Protection Act, 2019, headline money-back guarantees cannot be defeated by impossible or one-sided fine-print conditions. Export your RM chat logs and screenshots of mismatched/unavailable listings, lodge a formal written refund claim with hello@nobroker.in before plan expiry, and serve a 15-day statutory legal notice if they refuse.",
  },
  {
    badge: "Failure Point #2 • Token Money & Booking Advances",
    title: "Token Advance Paid via NoBroker Stuck After Owner Cancels or Changes Lease Terms",
    summary:
      "During flat finalisation, tenants and buyers are encouraged to pay a token amount (₹5,000 to ₹1,00,000) through the NoBroker app to lock the property. Days later, the landlord hikes the monthly rent, demands a 6-month security deposit, refuses essential repairs, or turns out to have a legal dispute or status-quo order on the property. When the tenant cancels the deal, the landlord refuses to return the token, and NoBroker claims it is merely an online directory with zero responsibility once funds leave its nodal account.",
    remedy:
      "Mini-Remedy: Under Section 65 of the Indian Contract Act, 1872, a token paid for a frustrated or unexecuted lease cannot be forfeited unless actual quantifiable loss is proved. Furthermore, consumer commissions (as in Khushboo Kumari v. NoBroker Technologies Solutions Pvt. Ltd.) hold NoBroker jointly liable when token payments are collected through platform assurances. Serve a joint legal notice naming both NoBroker and the landlord.",
  },
  {
    badge: "Failure Point #3 • NoBroker Pay Rent & Deposit Holds",
    title: "Credit Card or UPI Rent / Security Deposit Payment Held Under 'Verification Pending'",
    summary:
      "Tenants use NoBroker Pay to transfer monthly rent or rental security deposits via credit card or UPI. Money is debited immediately from the tenant's bank or card limit, but NoBroker places the payout on an indefinite compliance hold asking for rent agreement uploads, landlord PAN details, or video verification. Even when the tenant cancels the stuck transfer, the funds remain marooned in NoBroker's payment aggregator nodal pool for weeks, causing credit card interest charges and landlord late-fee penalties.",
    remedy:
      "Mini-Remedy: Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 on Turn Around Time (TAT), uncredited or cancelled digital transactions must be reversed to the originating source account within T+1 to T+5 business days, failing which the consumer is entitled to ₹100/day statutory compensation. Demand the 12-digit Acquirer Reference Number (ARN) or UTR in writing.",
  },
  {
    badge: "Failure Point #4 • Packers & Movers / Home Services",
    title: "NoBroker Packers & Movers, Painting, or Cleaning Advance Forfeited or Transit Damage Ignored",
    summary:
      "NoBroker aggressively cross-sells Packers & Movers, Home Painting, and Deep Cleaning packages. Relocating families routinely face last-minute mover no-shows after paying booking advances, mid-transit extortion by subcontracted lorry drivers, or severe damage to appliances and furniture. When claims are raised, NoBroker offers a token ₹500–₹1,000 voucher while shifting blame onto third-party vendor partners.",
    remedy:
      "Mini-Remedy: District Consumer Commissions in Bengaluru and Hyderabad have repeatedly ruled that because NoBroker collects the booking fee, issues the invoice, and brands the service, it cannot hide behind third-party subcontractors. Reject token goodwill settlements in writing and serve a legal notice under Section 2(11) CPA 2019 for full booking refund and actual repair/replacement damages.",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Directs NoBroker to Refund ₹1,00,000 Property Token Advance With 9% Interest",
    parties: "Khushboo Kumari v. NoBroker Technologies Solutions Pvt. Ltd.",
    citation: "District Consumer Disputes Redressal Commission, Ranga Reddy (Telangana)",
    date: "Verified Consumer Commission Order",
    facts:
      "The complainant paid a token advance of ₹1,00,000 through NoBroker for a property transaction after being assured by NoBroker representatives that the full token amount would be refunded if any legal or title verification defects surfaced. Upon checking with the Sub-Registrar's office, the complainant discovered an active court status-quo order blocking registration of the property. Despite clear proof of the legal impediment, NoBroker failed to refund the ₹1,00,000 advance.",
    holding:
      "The District Consumer Commission held NoBroker Technologies Solutions Pvt. Ltd. guilty of both deficiency in service under Section 2(11) and unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission ruled that a platform facilitating property transactions and assuring refund protection cannot abandon the consumer when title defects emerge. It ordered NoBroker to refund the entire ₹1,00,000 with 9% annual interest from the date of payment, plus ₹10,000 compensation for mental agony.",
    amount: "₹1,00,000 Token Refund @ 9% p.a. Interest + ₹10,000 Mental Agony Damages",
    takeaway:
      "When NoBroker representatives or plan terms assure you that your token advance is safe subject to verification or agreement execution, NoBroker is directly accountable in consumer court if the refund is withheld.",
  },
  {
    title: "Bengaluru Commission Rejects ₹500 Token Offer, Orders NoBroker to Pay ₹1,90,000 for Damaged Goods",
    parties: "Chandan Nukala v. NoBroker Technologies Solutions Pvt. Ltd.",
    citation: "Bengaluru Urban District Consumer Disputes Redressal Commission (Karnataka)",
    date: "Verified Consumer Commission Order",
    facts:
      "The complainant hired NoBroker Packers & Movers for household relocation. Due to negligent dismantling and transit handling by the crew assigned by NoBroker, a high-value water rowing machine worth over ₹2,00,000 was severely damaged and rendered unusable. When the complainant sought reimbursement, NoBroker offered a token compensation of ₹500 and attempted to disclaim liability by pointing to fine-print damage caps.",
    holding:
      "The Bengaluru Urban District Commission struck down NoBroker's ₹500 token offer as arbitrary and unconscionable. Holding NoBroker directly liable for the negligence of its assigned moving crew under Section 2(11) CPA 2019, the Commission directed NoBroker Technologies Solutions Pvt. Ltd. to pay ₹1,75,000 towards the damaged equipment, alongside ₹10,000 for mental harassment and ₹5,000 towards litigation costs.",
    amount: "₹1,75,000 Principal Loss + ₹10,000 Mental Agony + ₹5,000 Legal Costs",
    takeaway:
      "Unilateral fine-print clauses capping NoBroker's liability at ₹500 or ₹1,000 do not survive judicial scrutiny before Consumer Commissions when gross deficiency in service is proved.",
  },
  {
    title: "Hyderabad Commission Penalises NoBroker ₹55,000 for Relocation Delay & Missing Household Items",
    parties: "Venkata Narasimharao Jupudi v. NoBroker Technologies Solutions Pvt. Ltd.",
    citation: "District Consumer Disputes Redressal Commission-I, Hyderabad",
    date: "Verified Consumer Commission Order",
    facts:
      "The complainant booked NoBroker for inter-city shifting of household items from Pune to Hyderabad. The consignment suffered prolonged transit delays, one packed carton went completely missing, and essential furniture assembly hardware was lost, leaving the complainant's family in distress despite repeated escalations to NoBroker support.",
    holding:
      "The District Commission held NoBroker Technologies Solutions Pvt. Ltd. squarely liable for deficiency in service and failure to honour its service-level commitments. The Commission directed NoBroker to pay ₹45,000 as compensation for financial loss and mental agony, plus ₹10,000 as litigation expenses.",
    amount: "₹45,000 Service Deficiency Compensation + ₹10,000 Litigation Costs",
    takeaway:
      "Keep all packing lists, RM WhatsApp promises, and support ticket numbers—consumer courts award substantial compensation when NoBroker fails to honour promised timelines or loses items.",
  },
];

const FAQS = [
  {
    question: "Why is my NoBroker Money-Back Plan refund not received or rejected?",
    answer:
      "NoBroker frequently rejects Money-Back Plan (Relax, Freedom, or Assure Plan) refund claims by asserting that the subscriber did not exhaust all owner contacts, rejected properties suggested by the Relationship Manager (RM), or raised the claim outside the plan validity window. However, under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019, if the RM failed to provide genuinely available, verified properties matching your saved locality and budget filters, NoBroker cannot rely on one-sided fine print to forfeit your subscription fee.",
  },
  {
    question: "How can I check my NoBroker refund status and trace an uncredited bank refund?",
    answer:
      "You can check your initial request status inside the NoBroker app under 'My Plans / Bookings' or 'Help & Support'. If NoBroker support marks your refund as 'Processed' or 'Initiated' but the money has not reached your bank account or credit card after 5 to 7 working days, demand the 12-digit Acquirer Reference Number (ARN) or Unique Transaction Reference (UTR) from hello@nobroker.in. Without a valid ARN/UTR, the money has not left their payment aggregator nodal account.",
  },
  {
    question: "Can I get a token money refund if the landlord cancels the deal or changes terms on NoBroker?",
    answer:
      "Yes. Under Section 65 of the Indian Contract Act, 1872, token money is only an earnest deposit towards a future lease or sale agreement. If the landlord backs out, increases the rent or security deposit, hides society restrictions, or lacks clear title before the rental agreement is signed, the entire token must be refunded. If you paid the token via NoBroker Pay or through a NoBroker RM, you can serve a joint legal notice to both NoBroker Technologies Solutions Pvt. Ltd. and the property owner.",
  },
  {
    question: "What is the official NoBroker Grievance Officer email and corporate address for sending a legal notice?",
    answer:
      "For Level-1 and Level-2 written escalations, email support@nobroker.in and hello@nobroker.in with your registered mobile number and Invoice/Transaction ID. For formal statutory legal notices under Rule 4(4) of the Consumer Protection (E-Commerce) Rules, 2020, address the notice to the Grievance Officer / Directors of NoBroker Technologies Solutions Private Limited (and Htek Spaces Pvt. Ltd., where applicable on your invoice), 6th Floor, Bren Mercury / Leela Galleria, Kaikondrahalli / 5th Block Koramangala, Bengaluru, Karnataka.",
  },
  {
    question: "What should I do if my rent payment on NoBroker Pay is stuck on 'Verification Pending'?",
    answer:
      "If your credit card or UPI was debited on NoBroker Pay for rent or security deposit and the transaction is stuck on compliance hold, cancel the transfer in writing and demand an immediate source reversal. Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 on failed and uncredited digital transactions, payment aggregators cannot hold consumer funds indefinitely and are liable for ₹100 per day of delay beyond the prescribed reversal window.",
  },
  {
    question: "Can I file a case against NoBroker on e-Jagriti Consumer Court without visiting Bengaluru?",
    answer:
      "Yes. Under Section 34(2) of the Consumer Protection Act, 2019, you can file an online consumer complaint on the government's e-Jagriti portal before the District Consumer Commission where you reside or work for gain (whether in Mumbai, Delhi, Pune, Hyderabad, Chennai, or any other city), regardless of NoBroker's Bengaluru jurisdiction clause. Serving a 15-day advocate legal notice beforehand resolves most disputes without needing a prolonged court trial.",
  },
  {
    question: "NoBroker money back plan ya token money refund nahi mil raha toh legal notice kaise bheje?",
    answer:
      "Agar NoBroker aapka Money-Back Plan refund reject kar de, ya मकान मालिक (landlord) aur NoBroker aapka token advance wapas na karein, toh aap Consumer Protection Act 2019 aur Indian Contract Act Section 65 ke tehat 15-day Advocate Legal Notice bhej sakte hain. LegalRecovery.in par verified advocate aapke RM WhatsApp chats, payment receipt aur plan terms ke aadhar par NoBroker Head Office (Bengaluru) ko Registered Speed Post aur email se notice bhejte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NoBroker Money-Back or Token Refund Stuck? Escalate It",
  description:
    "NoBroker money-back plan or token refund not received? Read the plan terms, escalate in writing and send a legal notice if ignored.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/nobroker`,
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
    "@type": "Organization",
    name: "NoBroker",
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
      name: "NoBroker Refund & Legal Notice",
      item: `${SITE_URL}/legal-notice-to/nobroker`,
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

export default function NoBrokerLegalNoticePage() {
  const breadcrumbItems = [
    {
      label: "Security Deposit & Rental Recovery",
      href: "/recover-security-deposit-from-landlord-india",
    },
    {
      label: "NoBroker Refund & Legal Notice",
      href: "/legal-notice-to/nobroker",
    },
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
        {/* Hero Section strictly matching irctc & cheque-bounce-case-against-company-directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>CPA 2019 &amp; E-Commerce Rules 2020</span>
              <span className="text-red-500">•</span>
              <span>NoBroker Statutory Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              NoBroker Money-Back or Token Refund Stuck? Escalate It
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Money-Back Guarantee &amp; Token Refund Mandate)
              </p>
              <p>
                Under Sections 2(11), 2(46), and 2(47) of the Consumer Protection Act, 2019, and Section 65 of the Indian Contract Act, 1872, NoBroker Technologies Solutions Pvt. Ltd. (and a defaulting landlord) cannot forfeit Money-Back Plan fees or property token advances using unfair fine-print clauses. Escalate to NoBroker&apos;s Grievance Officer (48-hour acknowledgment under Rule 4(4)), register an NCH 1915 docket, and serve a 15-day advocate legal notice before filing on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">48 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Rule 4(4) Grievance Ack Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 65 Frustrated Token Advance</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹100/Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Failed Rent Reversal Penalty</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹1.90 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Top Verified Commission Award</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Table of Contents + Archetype B2 Fact Panel Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Sidebar: TOC + Archetype B2 Fact Panel */}
            <NoBrokerTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype B2 - What Usually Goes Wrong With NoBroker (4 Problem <article>s with mini-remedies) */}
              <section
                id="heading-problem-dossiers"
                aria-labelledby="heading-problem-dossiers-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-dossiers-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What Goes Wrong With NoBroker: 4 Failure Points
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Whether you bought a Tenant Freedom/Relax Plan, transferred a property booking token, or used NoBroker Pay for rent and relocation, most refund disputes fall into four specific operational traps:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {PROBLEM_DOSSIERS.map((item, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626]">
                          {item.badge}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {item.summary}
                        </p>
                        <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                          {item.remedy}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 2: Archetype B2 - Comparison <table>: problem type × who is liable × deadline × first action */}
              <section
                id="heading-liability-table"
                aria-labelledby="heading-liability-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-liability-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Who Is Liable for Stuck NoBroker Refunds?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  NoBroker routinely deflects refund claims by arguing that it is an intermediary directory or that a third-party landlord or mover holds your money. Use this statutory matrix to identify the legally liable party, governing deadline, and immediate escalation step:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      NoBroker Dispute Liability Comparison: Problem Type, Liable Entity, Statutory Basis, Deadline, and First Action
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute / Problem Type</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Who Is Legally Liable</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Basis / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Immediate First Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Tenant / Buyer Money-Back Plan Refund Denied
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-700">
                          NoBroker Technologies Solutions Pvt. Ltd. (Solely)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sec 2(11), 2(46) &amp; 2(47) CPA 2019 + CCPA Dark Patterns 2023
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          48h Ack / 30 Days Redressal
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Export RM chat logs &amp; email Grievance Officer before/upon plan expiry
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Property Token Advance Stuck After Deal Fails
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-amber-800">
                          NoBroker + Property Owner (Jointly &amp; Severally)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sec 65 &amp; 73 Indian Contract Act 1872 + E-Commerce Rules 2020
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Immediate on Deal Rescission (15d Notice)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demand nodal settlement status &amp; serve joint notice to NoBroker &amp; Owner
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NoBroker Pay Rent / Deposit Held or Double Debited
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-blue-700">
                          NoBroker + Payment Aggregator / Bank
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI TAT Circular DPSS.CO.PD No.629/2019-20
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-emerald-700">
                          T+1 to T+5 Working Days (₹100/day penalty)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Cancel held transfer &amp; demand 12-digit reversal ARN / UTR
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Owner Guaranteed Tenant / Property Management (CPMS) Breach
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-700">
                          NoBroker Technologies Solutions Pvt. Ltd.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sec 73 Contract Act + Sec 2(11) CPA 2019
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          15-Day Pre-Litigation Cure Window
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Audit SLA breach in PMA agreement &amp; serve fee-refund demand notice
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Packers &amp; Movers / Painting Cancel or Transit Damage
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-700">
                          NoBroker (Principal Contracting Platform)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sec 2(11) &amp; 2(42) CPA 2019 + Vicarious Liability
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          15-Day Demand Notice Window
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Reject token ₹500 offer in writing &amp; attach damage/repair invoices
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  If your NoBroker dashboard claims a refund was initiated but your bank account shows zero inward credit, follow our step-by-step guide on <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">tracing stuck refunds using ARN and UTR numbers</Link>.
                </p>
              </section>

              {/* Section 3: Archetype B2 - Inline SVG flow diagram of refund money-flow (<figure> with <figcaption>) */}
              <section
                id="heading-money-flow"
                aria-labelledby="heading-money-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-money-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Where Money Gets Stuck: NoBroker Refund Flow
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Understanding how funds move between your bank, the payment gateway, NoBroker&apos;s nodal escrow account, and the property owner exposes exactly where your refund is stalled:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1 • Customer Source</span>
                    <h3 className="font-bold text-sm">UPI / Credit Card / NetBanking Debit</h3>
                    <p className="text-xs text-slate-200 mt-1">You pay ₹3,499–₹19,999 (Money-Back Plan) or ₹10,000–₹1,00,000 (Token/Rent).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2 • Gateway &amp; Nodal Pool</span>
                    <h3 className="font-bold text-sm">Aggregator Nodal Account (Bottleneck A)</h3>
                    <p className="text-xs text-amber-900 mt-1">NoBroker Pay rent holds &amp; uncredited ARN reversals stall here (RBI T+1/T+5 rule applies).</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3 • Platform Treasury</span>
                    <h3 className="font-bold text-sm">NoBroker Technologies Solutions Pvt. Ltd. (Bottleneck B)</h3>
                    <p className="text-xs text-red-900 mt-1">Plan refunds rejected on RM contact quotas; token escrow held during owner disputes.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4 • Third-Party Recipient</span>
                    <h3 className="font-bold text-sm">Landlord / Subcontracted Mover (Bottleneck C)</h3>
                    <p className="text-xs text-slate-700 mt-1">Owner refuses token return after cancelling deal; requires joint Sec 65 Contract Act notice.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5 • Statutory Recovery</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Notice → Bank Credit / e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">Overrides fine-print rejections and compels source reversal with 9%–18% interest.</p>
                  </div>
                </div>

                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Money-Flow &amp; Bottleneck Diagram</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 270"
                    width="840"
                    height="270"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[720px]"
                    role="img"
                    aria-label="NoBroker Refund Money-Flow Diagram from Customer to Gateway, Platform, Landlord and Legal Recovery"
                  >
                    <defs>
                      <linearGradient id="nbDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="nbRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="nbGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Node 1: Customer */}
                    <rect x="10" y="20" width="145" height="95" rx="10" fill="url(#nbDark)" />
                    <text x="82" y="43" fill="#CBD5E1" fontWeight="bold" fontSize="10" textAnchor="middle">1. CUSTOMER</text>
                    <text x="82" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Tenant / Buyer</text>
                    <text x="82" y="79" fill="#E2E8F0" fontSize="10" textAnchor="middle">Plan Fee / Token</text>
                    <text x="82" y="95" fill="#94A3B8" fontSize="9" textAnchor="middle">Card • UPI • NetBanking</text>

                    <path d="M 155 67 L 185 67" stroke="#64748B" strokeWidth="2" />

                    {/* Node 2: Gateway */}
                    <rect x="185" y="20" width="145" height="95" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="257" y="43" fill="#B45309" fontWeight="bold" fontSize="10" textAnchor="middle">2. GATEWAY NODAL</text>
                    <text x="257" y="62" fill="#92400E" fontWeight="bold" textAnchor="middle">NoBroker Pay Pool</text>
                    <text x="257" y="79" fill="#78350F" fontSize="10" textAnchor="middle">Rent Compliance Hold</text>
                    <text x="257" y="95" fill="#92400E" fontSize="9" textAnchor="middle">Demand 12-Digit ARN</text>

                    <path d="M 330 67 L 360 67" stroke="#64748B" strokeWidth="2" />

                    {/* Node 3: Platform */}
                    <rect x="360" y="20" width="150" height="95" rx="10" fill="url(#nbRed)" />
                    <text x="435" y="43" fill="#FECACA" fontWeight="bold" fontSize="10" textAnchor="middle">3. PLATFORM HUB</text>
                    <text x="435" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">NoBroker Tech Pvt Ltd</text>
                    <text x="435" y="79" fill="#FEE2E2" fontSize="10" textAnchor="middle">Plan SLA / RM Reject</text>
                    <text x="435" y="95" fill="#FCA5A5" fontSize="9" textAnchor="middle">Rule 4(4) 48h Grievance</text>

                    <path d="M 510 67 L 540 67" stroke="#64748B" strokeWidth="2" />

                    {/* Node 4: Owner / Vendor */}
                    <rect x="540" y="20" width="140" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="610" y="43" fill="#475569" fontWeight="bold" fontSize="10" textAnchor="middle">4. OWNER / VENDOR</text>
                    <text x="610" y="62" fill="#0F172A" fontWeight="bold" textAnchor="middle">Landlord / Mover</text>
                    <text x="610" y="79" fill="#334155" fontSize="10" textAnchor="middle">Token / Advance Held</text>
                    <text x="610" y="95" fill="#475569" fontSize="9" textAnchor="middle">Sec 65 Restitution</text>

                    <path d="M 680 67 L 705 67" stroke="#64748B" strokeWidth="2" />

                    {/* Node 5: Legal Recovery */}
                    <rect x="705" y="20" width="125" height="95" rx="10" fill="url(#nbGreen)" />
                    <text x="767" y="43" fill="#A7F3D0" fontWeight="bold" fontSize="10" textAnchor="middle">5. RESTITUTION</text>
                    <text x="767" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">15-Day Notice</text>
                    <text x="767" y="79" fill="#D1FAE5" fontSize="10" textAnchor="middle">Source Reversal</text>
                    <text x="767" y="95" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Filing</text>

                    {/* Bottom Bottleneck & Statutory Mandate Legend */}
                    <rect x="10" y="140" width="820" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="164" fill="#0F172A" fontWeight="bold" fontSize="11">
                      HOW TO UNBLOCK EACH NOBROKER REFUND BOTTLENECK:
                    </text>
                    <text x="25" y="186" fill="#475569" fontSize="10">
                      • Gateway Nodal Bottleneck (Stage 2): Demand 12-digit UTR/ARN; invoke RBI TAT Circular DPSS.CO.PD No.629 (₹100/day penalty past T+5 days).
                    </text>
                    <text x="25" y="206" fill="#475569" fontSize="10">
                      • Platform Fine-Print Bottleneck (Stage 3): Challenge unfair RM contact-quota rejection under Sec 2(46) CPA 2019 &amp; CCPA Dark Patterns Guidelines.
                    </text>
                    <text x="25" y="226" fill="#475569" fontSize="10">
                      • Landlord Token Forfeiture (Stage 4): Serve joint 15-day Advocate Legal Notice to NoBroker (Bengaluru HQ) + Property Owner under Sec 65 Contract Act.
                    </text>
                  </svg>
                  <figcaption className="text-[11px] sm:text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100">
                    <strong>Figure 1:</strong> Refund money-flow across Customer Source, Payment Aggregator Nodal Account, NoBroker Technologies Solutions Pvt. Ltd., and Property Owner/Vendor, mapping each failure point to its statutory recovery trigger.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4: Archetype B2 Commission Orders Table + Detailed Order Digest Cards */}
              <section
                id="heading-commission-orders"
                aria-labelledby="heading-commission-orders-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-commission-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Commission Orders Against NoBroker
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Consumer Court Rulings
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  District Consumer Disputes Redressal Commissions across India have repeatedly rejected NoBroker&apos;s defense that it is merely an online listing intermediary or that its liability is capped at ₹500. Below is the structured summary table of verified rulings followed by the case-by-case digest:
                </p>

                {/* Archetype B2 Requirement: Commission orders as a <table> */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Verified Consumer Commission Orders Against NoBroker Technologies Solutions Pvt. Ltd.
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Case &amp; Parties</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Consumer Commission</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Nature of Dispute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Award &amp; Relief Ordered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Khushboo Kumari v. NoBroker Technologies Solutions Pvt. Ltd.
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          DCDRC Ranga Reddy (Telangana)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Withheld ₹1,00,000 property token advance despite court status-quo order on flat
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">
                          ₹1,00,000 Refund @ 9% Interest + ₹10,000 Damages
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Chandan Nukala v. NoBroker Technologies Solutions Pvt. Ltd.
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Bengaluru Urban DCDRC (Karnataka)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Severe relocation damage to ₹2L+ equipment; NoBroker offered ₹500 token payout
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">
                          ₹1,75,000 Principal + ₹10,000 Agony + ₹5,000 Costs
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Venkata Narasimharao Jupudi v. NoBroker Technologies Solutions Pvt. Ltd.
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          DCDRC-I Hyderabad (Telangana)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Delayed Pune-to-Hyderabad transit, missing carton, and lost assembly hardware
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">
                          ₹45,000 Compensation + ₹10,000 Litigation Costs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Detailed Order Digest Cards matching irctc layout */}
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
                            Order #{idx + 1} • {c.citation}
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
                              Total Judicial Award / Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Principle
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Section 2(11) &amp; 2(47) CPA 2019
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Pattern Analysis */}
              <section
                id="heading-pattern-analysis"
                aria-labelledby="heading-pattern-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Consumers Win Refund Disputes Against NoBroker
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Reviewing successful pre-litigation settlements and consumer commission orders against NoBroker reveals five decisive evidentiary factors that dismantle platform denials:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Proving RM Listing Mismatch Against Saved Plan Criteria:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Subscribers who preserved screenshots of their saved preference filters (locality, BHK, maximum rent/budget, furnishing) alongside the RM&apos;s suggested links proved that NoBroker failed its core obligation, neutralizing the excuse that &quot;the customer rejected properties&quot;.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Challenging One-Sided Fine Print Under Section 2(46) Unfair Contract:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 2(46) of the Consumer Protection Act, 2019, terms that impose unreasonable conditions to claim a promised money-back guarantee are voidable. Pointing this out in an advocate notice shifts settlement calculus immediately.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Jointly Impleading Both NoBroker and the Property Owner in Token Disputes:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When a token deposit is paid via NoBroker Pay or an RM negotiation, serving a single consolidated legal notice to both NoBroker Technologies Solutions Pvt. Ltd. and the landlord prevents them from playing ping-pong with your money.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Refusing Token ₹500 Voucher Settlements for Relocation Damage:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complainants who rejected in-app ₹500 goodwill credits in writing and produced third-party repair estimates or purchase invoices recovered up to ₹1,75,000+ before consumer forums.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 6: 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook Against NoBroker
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this dated statutory sequence to build an airtight paper trail and force release of your stuck Money-Back Plan fee, token advance, or NoBroker Pay transfer:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 0: Freeze Evidence of Plan Non-Fulfilment or Deal Cancellation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your NoBroker tax invoice, plan terms screenshot, payment debit receipt (with 12-digit UPI UTR or card reference), and complete WhatsApp/in-app chat history with your Relationship Manager (RM) or property owner. If flats shown were unavailable or mismatched, capture screenshots of those listings immediately before your plan expires.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 1–3: File Written Escalation With NoBroker Customer Care &amp; Grievance Cell
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Do not rely on phone calls with your RM. Send a formal email to <strong>hello@nobroker.in</strong> and <strong>support@nobroker.in</strong> with the subject line: <em>&quot;FORMAL REFUND DEMAND — Plan/Txn ID [ID] — Registered Mobile [Number]&quot;</em>. Under <Link href="/law/ecommerce-rules-grievance-officer-48-hours" className="text-blue-700 underline">Rule 4(4) of the Consumer Protection (E-Commerce) Rules, 2020</Link>, the Grievance Officer must acknowledge your complaint within 48 hours.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 7: Lodge an Official NCH 1915 / INGRAM Government Docket
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If NoBroker replies with a canned fine-print rejection or fails to credit your bank account within 7 days, register a grievance on <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">consumerhelpline.gov.in</a> (or call 1915). Upload your invoice, RM chat logs, and rejection email to generate an official NCH docket number.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 15: Serve a Statutory Advocate Legal Demand Notice to NoBroker HQ
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage an advocate to dispatch a formal statutory demand notice to <strong>NoBroker Technologies Solutions Private Limited</strong> at its Bengaluru corporate office (and to the landlord if a token or <Link href="/recover-security-deposit-from-landlord-india" className="text-blue-700 underline">rental security deposit refund</Link> is involved). Sent via Registered Speed Post and Section 63 BSA email, the notice invokes Sections 2(11), 2(46), and 2(47) CPA 2019 and Section 65 Contract Act, granting a strict 15-day cure window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See our transparent fee schedule on the <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 30: File an Online Consumer Petition on e-Jagriti in Your Home District
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If NoBroker fails to settle within the 15-day notice window, file a Section 35 consumer complaint online via <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">e-Jagriti</a> before your local District Consumer Commission (zero court fee for claims up to ₹5 lakh), claiming 100% principal refund, 9%–18% interest, mental agony damages, and legal notice costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Interactive Clause & Bottleneck Solver */}
              <section
                id="heading-clause-solver"
                aria-labelledby="heading-clause-solver-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-solver-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Fine-Print Traps in NoBroker Plans &amp; Agreements
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Exact Dispute Type to View the Statutory Counter-Argument and 3-Step Fix
                  </p>
                </div>

                <NoBrokerProblemTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Tenant Recovers ₹18,000 Token Advance + Plan Fee
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">HSR Layout, Bengaluru (2BHK Rental &amp; Plan Dispute)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation (October 2026):</strong> Siddharth Nair, a software engineer relocating to Bengaluru, purchased a NoBroker Tenant Money-Back Plan for ₹5,899 (inclusive of GST) specifying a 2BHK in HSR Layout within a ₹38,000/month budget. Over 30 days, the assigned RM shared only 11 properties—7 were already rented out and 3 were in Electronic City. On Day 32, Siddharth independently shortlisted one flat on the app and paid a ₹18,000 token advance via NoBroker Pay. Two days later, the landlord demanded a 10-month security deposit (violating local norms) and refused to sign a standard 11-month agreement.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Siddharth cancelled the unexecuted deal and requested a refund of both his ₹18,000 token and his ₹5,899 Money-Back Plan fee. The landlord stopped answering calls, while NoBroker customer care rejected the plan refund claiming <em>&quot;Customer paid token on a property, hence plan marked fulfilled&quot;</em> and disclaimed responsibility for the ₹18,000 token.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth used LegalRecovery.in to serve a joint 15-day statutory advocate legal notice to <strong>NoBroker Technologies Solutions Pvt. Ltd.</strong> (Koramangala, Bengaluru) and the property owner. The notice cited Section 65 of the Indian Contract Act, 1872 (restitution of token on frustrated agreement) and Sections 2(11), 2(46), and 2(47) of the Consumer Protection Act, 2019 (unfair contract terms and misleading money-back guarantee).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 after receipt of the Registered Speed Post and email notice, NoBroker&apos;s escalation desk intervened with the property owner to release the ₹18,000 token and simultaneously approved a 100% reversal of the ₹5,899 plan fee to Siddharth&apos;s HDFC credit card, avoiding a District Consumer Commission filing.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records for NoBroker Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), in-app screenshots, WhatsApp chats, and bank statements are admissible electronic records. Assemble these 6 items:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NoBroker Subscription Invoice &amp; Plan Terms:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Tax invoice showing GSTIN, plan name (Relax/Freedom/Assure), amount paid, and the advertised Money-Back Guarantee banner.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Saved Search Filters &amp; RM Chat Export:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshots of your chosen locality/budget filters and WhatsApp/in-app chats proving the RM sent unavailable or mismatched flats.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NoBroker Pay Token / Rent Receipt &amp; Bank UTR:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Transaction ID, 12-digit UPI UTR or credit card debit statement proving the exact amount debited and zero inward reversal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Landlord Communication &amp; Deal Cancellation Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp messages or emails showing the owner changed rent/deposit terms, backed out, or lacked clear property documents.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Support Rejection Email / Ticket Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Written replies from hello@nobroker.in or in-app support tickets repudiating your refund claim or offering a token ₹500 voucher.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Relocation Damage Photos &amp; Repair Invoices (If Applicable):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped unboxing videos, broken furniture/appliance photos, and service-center repair estimates for Packers &amp; Movers claims.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Honest Scope */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-emerald-200 shadow-xs space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                      ✓ What We Can Enforce
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Serve a formal 15-day Advocate Legal Notice to NoBroker Technologies Solutions Pvt. Ltd. for wrongfully rejected Money-Back Guarantee plans.</li>
                      <li>Issue a joint statutory demand notice to both NoBroker and the landlord to recover forfeited token advances or <Link href="/legal-notice-landlord-unreasonable-security-deposit-deductions" className="text-blue-700 underline">unreasonable security deposit deductions</Link>.</li>
                      <li>Demand immediate reversal and ₹100/day RBI TAT compensation for stuck NoBroker Pay rent or deposit transfers.</li>
                      <li>Pursue full compensation for Packers &amp; Movers or Home Services advance forfeitures and transit damages.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-rose-200 shadow-xs space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 block">
                      ✕ What We Cannot Do
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>We cannot force a refund of a basic non-money-back contact plan if you simply changed your mind about moving after unlocking verified owner contacts.</li>
                      <li>We cannot recover cash token payments handed privately to an unverified stranger without any bank/UPI trail, receipt, or WhatsApp admission.</li>
                      <li>If you signed a registered lock-in lease deed and vacated mid-lock-in without landlord default, token/deposit forfeiture is governed by contract mitigation rules.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: Archetype B2 - FAQ as a plain <h3>/<p> Q&A list (no accordion) */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: NoBroker Refunds, Plans &amp; Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in the Consumer Protection Act 2019, Contract Act &amp; Commission Orders
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, E-Commerce Rules &amp; Official References
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
                  Last updated: November 4, 2026. All statutory provisions verified against the Consumer Protection Act 2019, Consumer Protection (E-Commerce) Rules 2020, Indian Contract Act 1872, and RBI Payment TAT directives.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to NoBroker
                </h2>
                <NoBrokerNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Rental, Deposit &amp; Consumer Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit From Landlord →
                  </Link>
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Challenge Landlord Painting &amp; Repair Deductions →
                  </Link>
                  <Link
                    href="/legal-notice-to-pg-owner-for-security-deposit-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG / Co-Living Security Deposit Refund →
                  </Link>
                  <Link
                    href="/law/ecommerce-rules-grievance-officer-48-hours"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    E-Commerce 48-Hour Grievance Officer Rule →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund With UTR/ARN →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/legal-notice-to/nobroker" cluster="property" />
      </div>
    </>
  );
}
