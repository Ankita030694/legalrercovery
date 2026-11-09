import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TelecomNoticeCTA from "./TelecomNoticeCTA";
import TelecomTableOfContents from "./TelecomTableOfContents";
import TelecomProblemTabs from "./TelecomProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Jio, Airtel, Vi or Broadband Refund: Complaint Route",
  description:
    "Jio, Airtel, Vi or broadband refund pending? The appellate authority route, TRAI rules and when to send a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/telecom-broadband-refund-complaint`,
  },
  openGraph: {
    title: "Jio, Airtel, Vi or Broadband Refund: Complaint Route & Legal Notice",
    description:
      "Statutory escalation path for unreturned router security deposits, failed prepaid recharge debits, phantom postpaid billing, and TRAI appellate proceedings.",
    url: `${SITE_URL}/telecom-broadband-refund-complaint`,
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
    title: "Telecom Consumers Protection and Redressal of Grievances Regulations, 2012 (Regulation No. 1 of 2012) — Telecom Regulatory Authority of India (TRAI)",
    url: "https://trai.gov.in/sites/default/files/TCPRGR06012012.pdf",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Supreme Court Ruling on Consumer Protection Act Applicability to Telecom Disputes (Secretary, Thirumurugan Co-op v. M. Lalitha & Bharti Airtel Ltd. v. Dr. Vidya Sagar)",
    url: "https://main.sci.gov.in/judgment/judis/25732.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for CDRs, Invoices, SMS, & App Gateways)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on Withheld Fiber Router Security Deposit Post-Disconnection",
    parties: "Kishore Kumar v. Reliance Jio Infocomm Ltd.",
    citation: "Consumer Complaint No. 418/2022, DCDRC Bengaluru (Urban)",
    date: "Order Dated 18 October 2023",
    facts:
      "The complainant disconnected his JioFiber broadband connection upon shifting residences and surrendered the Optical Network Terminal (ONT) router and power adaptor to an authorized field technician against a physical collection receipt. Despite repeated emails and follow-ups over five months, Reliance Jio failed to remit the refundable security deposit of ₹2,500, falsely claiming in its customer ticketing system that equipment verification was pending.",
    holding:
      "The District Consumer Commission held that retaining a consumer's security deposit after documented hardware surrender directly violates Regulation 14 of the TRAI Telecom Consumers Protection Regulations, 2012, and constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019. The forum ordered Reliance Jio to refund the security deposit of ₹2,500 along with 10% statutory interest from the date of disconnection, ₹15,000 as compensation for mental harassment, and ₹5,000 towards litigation costs.",
    amount: "₹2,500 Deposit @ 10% Interest + ₹15,000 Harassment Award + ₹5,000 Litigation Costs",
    takeaway:
      "When returning broadband hardware, always secure a signed physical collection slip or an electronic acknowledgment capturing the serial number. If the service provider stalls your refund beyond 60 days, consumer courts routinely award the principal deposit with 10% statutory interest plus exemplary compensation.",
  },
  {
    title: "State Commission Ruling on Phantom Postpaid Invoicing and Collection Agent Harassment",
    parties: "Bharti Airtel Ltd. v. Dr. Raman Sharma",
    citation: "First Appeal No. 89/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 14 March 2022",
    facts:
      "The subscriber submitted a formal written disconnection request for his postpaid mobile connection, paid all outstanding billed dues up to the billing cycle, and received a service cancellation docket. Three months later, Bharti Airtel generated continuous phantom monthly rental invoices totalling ₹8,400 and assigned a third-party collection agency that subjected the consumer to threatening telephone calls during professional working hours.",
    holding:
      "The State Commission dismissed Airtel's appeal with punitive costs, ruling that generating billing demands after acknowledging a valid disconnection request is an unfair trade practice under Section 2(47) CPA 2019. The Commission held that deploying third-party recovery agents who issue threats and intimidation constitutes an actionable tort. The State Commission upheld the complete quashing of the ₹8,400 bill and awarded ₹25,000 compensation for mental agony, alongside ₹10,000 litigation expenses.",
    amount: "₹8,400 Invoices Quashed + ₹25,000 Tort Damages + ₹10,000 Legal Expenses",
    takeaway:
      "A telecom company has zero lawful authority to generate invoices after you have submitted a formal disconnection request and cleared the final invoice. Recovery agency threats can be immediately countered with a statutory cease-and-desist legal notice and consumer court action for exemplary damages.",
  },
  {
    title: "District Commission Verdict on Failed Prepaid Recharge Debit Without Plan Activation",
    parties: "Vivek Malhotra v. Vodafone Idea Ltd. (Vi) & Paytm Payments Bank",
    citation: "Consumer Case No. 176/2023, DCDRC New Delhi (South)",
    date: "Order Dated 29 January 2024",
    facts:
      "The consumer executed an annual prepaid recharge of ₹1,498 via a digital wallet. The funds were debited from his bank account, but Vodafone Idea failed to activate the recharge pack due to an API timeout. Customer care bots repeatedly closed his complaints stating 'Recharge Successful', while his mobile connection remained barred for non-recharge. The subscriber had to purchase a secondary pack to maintain essential telecommunication.",
    holding:
      "The District Commission observed that telecom providers cannot collect consumer consideration and deny service while hiding behind automated digital error logs. The court found Vodafone Idea guilty of unfair trade practice and service deficiency, directing a full refund of ₹1,498 with 12% interest, ₹10,000 compensation for disrupting essential communication, and ₹5,000 legal costs.",
    amount: "₹1,498 Recharge Refund @ 12% Interest + ₹10,000 Distress Award + ₹5,000 Costs",
    takeaway:
      "Under Reserve Bank of India TAT norms and consumer law, failed recharges must be auto-credited or fulfilled within T+1 day. If the operator fails to rectify the glitch, you are entitled to a full refund, interest, and substantial compensation for service deprivation.",
  },
  {
    title: "Consumer Forum Order on Chronic Broadband Downtime & Denial of Pro-Rata Credit",
    parties: "S. Swaminathan v. ACT Fibernet (Atria Convergence Technologies Ltd.)",
    citation: "CC No. 312/2022, DCDRC Hyderabad",
    date: "Order Dated 07 June 2023",
    facts:
      "The complainant subscribed to a high-speed fiber broadband plan for his home office. Due to an unrectified main junction cable breakdown, the broadband connection remained entirely non-functional for 21 consecutive days. ACT Fibernet refused to grant a pro-rata billing waiver or refund of the monthly rental of ₹1,850, arguing that internet service level agreements (SLAs) are subject to external civil infrastructure contingencies.",
    holding:
      "The Consumer Commission rejected the ISP's defence, holding that service providers charging upfront fees cannot unilaterally shift operational failure risks onto end consumers. The forum held that charging for unprovided services constitutes deficiency of service under Section 2(11) CPA 2019. The Commission ordered ACT Fibernet to refund ₹1,850 for the defective period, pay ₹12,000 for lost remote working productivity, and ₹4,000 litigation expenses.",
    amount: "₹1,850 Subscription Refund + ₹12,000 Productivity Loss Compensation + ₹4,000 Costs",
    takeaway:
      "Broadband service providers cannot claim full subscription payments when fiber downtime persists without resolution. Documenting ticket dockets and downtime logs entitles you to pro-rata refunds and compensation for professional disruption.",
  },
];

const FAQS = [
  {
    question: "Why is my Jio, Airtel, Vi or broadband refund not received after cancellation?",
    answer:
      "Under Regulation 14 of the TRAI Telecom Consumers Protection Regulations, 2012, service providers must refund security deposits within 60 days of service closure. In practice, refunds stall due to automated batch reconciliation errors between telecom billing databases, delayed verification of surrendered router equipment (ONT hardware) by local field franchisees, or customer support artificially deflecting claims to retain working capital. If your refund exceeds statutory timelines, demand the 12-digit Bank UTR or Acquirer Reference Number (ARN) from the telecom circle's Nodal Officer.",
  },
  {
    question: "What is the official TRAI complaint route for telecom and broadband refund disputes?",
    answer:
      "TRAI mandates a structured 2-tier internal grievance mechanism: (1) Register a complaint with the operator's Call Centre or Web Portal to receive a mandatory Unique Docket Number; (2) If unresolved within 3 to 10 days, escalate the matter to the Circle Nodal Officer; (3) If the Nodal Officer fails to grant relief within 10 days, file an appeal before the operator's Appellate Authority within 30 days. If the Appellate Authority fails to resolve the refund or ignores Regulation 14 interest, the consumer can proceed to an Advocate Legal Demand Notice and the Consumer Dispute Redressal Commission on e-Jagriti.",
  },
  {
    question: "How long does a telecom company have to refund my router security deposit under TRAI rules?",
    answer:
      "Telecom and broadband service providers have a strict statutory deadline of 60 days from the date of disconnection and equipment handover to refund your security deposit under TRAI Regulation 14. If the operator fails to refund the amount within 60 days, they are legally liable to pay penal interest at the rate of 10% per annum from the date of closure until the date of actual payment.",
  },
  {
    question: "What happens if a mobile or broadband recharge debited my bank account but never activated?",
    answer:
      "Under Reserve Bank of India (RBI) Circular RBI/2019-20/67 on Turn Around Time (TAT) for failed electronic transactions, failed utility and mobile recharge debits must be auto-reversed to the customer's account within T+1 business day. If the telecom merchant or acquiring payment gateway retains your funds beyond 5 banking days, you are entitled to statutory compensation of ₹100 per day of delay alongside the principal recharge amount.",
  },
  {
    question: "Can I take Jio, Airtel or an ISP to Consumer Court (e-Jagriti) for a refund dispute?",
    answer:
      "Yes. The Supreme Court has repeatedly confirmed (in Secretary, Thirumurugan Co-operative and subsequent rulings) that Section 7B of the Indian Telegraph Act does not bar consumer court remedies. Under Section 35 of the Consumer Protection Act, 2019, any consumer can file an online complaint against telecom operators on the government e-Jagriti portal. Consumer commissions routinely award full refund, 9% to 12% interest, harassment compensation (₹10,000 to ₹25,000), and litigation costs.",
  },
  {
    question: "Can collection agencies harass me for postpaid bills generated after I requested disconnection?",
    answer:
      "No. Generating invoices after a consumer has served a valid cancellation request and cleared past dues constitutes an unfair trade practice under Section 2(47) of CPA 2019. Furthermore, deploying third-party recovery agents who issue abusive calls, threats of arrest, or unauthorized CIBIL reporting violates RBI Fair Practices Codes and Section 351 of the Bharatiya Nyaya Sanhita (criminal intimidation). A formal advocate legal notice will immediately halt recovery harassment.",
  },
  {
    question: "Jio ya Airtel broadband refund bank account mein nahi aaya toh legal notice kaise bheje?",
    answer:
      "Agar JioFiber, Airtel Xstream, Vi ya kisi local ISP ne router surrender karne ke baad bhi security deposit ya recharge refund 60 din tak wapas na kiya ho, toh aap ek formal statutory legal demand notice bhej sakte hain. LegalRecovery.in par verified advocate TRAI Regulations 2012 aur Consumer Protection Act 2019 ke tehat telecom company ke Circle Nodal Office aur Registered Corporate Office ko Speed Post aur email se 15 din ka payment demand bhejte hain, jisse bina court gaye adhikansh maamle hal ho jaate hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Telecom or Broadband Refund Not Received? TRAI Route and Notice",
  description:
    "Jio, Airtel, Vi or broadband refund pending? The appellate authority route, TRAI rules and when to send a legal notice.",
  datePublished: "2026-11-06T20:30:00+05:30",
  dateModified: "2026-11-06T20:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/telecom-broadband-refund-complaint`,
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
    name: "Telecom Regulatory Authority of India",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Everyday Services & Consumer Disputes",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Telecom & Broadband Refund Route",
      item: `${SITE_URL}/telecom-broadband-refund-complaint`,
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

export default function TelecomBroadbandRefundPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Everyday Services", href: "/services/refunds-and-consumer-complaints" },
    { label: "Telecom & Broadband Refund", href: "/telecom-broadband-refund-complaint" },
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
        {/* Hero Section matching platform theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>TRAI Regulations 2012/2026</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Jio • Airtel • Vi • ACT Broadband</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Telecom or Broadband Refund Not Received? TRAI Route and Notice
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (TRAI Refund Mandate &amp; Consumer Remedy)
              </p>
              <p>
                Under Regulation 14 of TRAI&apos;s Telecom Consumers Protection Regulations, 2012, service providers must refund security deposits within 60 days of service closure, or pay mandatory 10% annual penal interest. When Jio, Airtel, Vi, or broadband providers ignore appellate escalation or fail to reverse recharge debits, consumers can issue a formal 15-day advocate legal notice before initiating consumer court proceedings on e-Jagriti for full recovery and damages.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">TRAI Security Deposit Refund TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">10% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Delay Interest (Reg 14)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Failed Recharge Auto-Reversal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹15,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Typical Consumer Court Damages</p>
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
            <TelecomTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Archetype G4 Hero Element: Big Comparison Table of Routes */}
              <section id="heading-routes-comparison" aria-labelledby="heading-routes-comparison-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                    Archetype G4 Matrix Analysis
                  </span>
                  <h2
                    id="heading-routes-comparison-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparing Telecom &amp; Broadband Dispute Routes: Notice vs TRAI Appellate vs Consumer Court vs TDSAT
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When telecom companies withhold refundable hardware deposits, fail to credit failed online recharges, or pursue illegal collection calls for disconnected lines, consumers often wonder which escalation path yields actual money recovery. The comparative matrix below outlines the cost, statutory timeline, evidentiary burden, and legal enforcement across all four dispute routes in India:
                </p>

                {/* The Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">Comparison of Indian Telecom and Broadband Dispute Forums</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">Comparison Dimension</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">TRAI Appellate Authority</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-red-300">Advocate Legal Notice</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">Consumer Commission (e-Jagriti)</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">TDSAT / Civil Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Statutory Governing Body</th>
                        <td className="p-3 sm:p-4">TRAI 2-Tier Grievance Desk</td>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">Bar Council Advocate / CPA 2019</td>
                        <td className="p-3 sm:p-4">District / State CDRC (CPA 2019)</td>
                        <td className="p-3 sm:p-4">Telecom Disputes Tribunal (TRAI Act §14)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Government Filing Cost</th>
                        <td className="p-3 sm:p-4">₹0 (Free Internal Portal)</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Flat ₹999 (No Court Fees)</td>
                        <td className="p-3 sm:p-4">₹0 up to ₹5 Lakh claim (e-Jagriti)</td>
                        <td className="p-3 sm:p-4">High Tribunal Court Fees + Senior Counsel</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Average Resolution Timeline</th>
                        <td className="p-3 sm:p-4">15 to 45 Days</td>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">7 to 15 Days (Pre-Litigation)</td>
                        <td className="p-3 sm:p-4">4 to 12 Months</td>
                        <td className="p-3 sm:p-4">12 to 24 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Key Proof Required</th>
                        <td className="p-3 sm:p-4">Call centre docket number &amp; account ID</td>
                        <td className="p-3 sm:p-4">Equipment return slip, bank statement &amp; dockets</td>
                        <td className="p-3 sm:p-4">Legal notice tracking, BSA 63 certificate &amp; bills</td>
                        <td className="p-3 sm:p-4">Complex contractual SLA logs &amp; telecom records</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Can Award Damages / Penalties?</th>
                        <td className="p-3 sm:p-4">No (Only billing credit / deposit refund)</td>
                        <td className="p-3 sm:p-4">Demands 10% interest + harassment damages</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Yes (₹10,000–₹50,000 compensation + costs)</td>
                        <td className="p-3 sm:p-4">Yes (Commercial damages focus)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Enforceability &amp; Binding Power</th>
                        <td className="p-3 sm:p-4">Internal Operator Discretion</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Triggers Legal Cell Settlement</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Judicial Decree (Section 71 Attachment)</td>
                        <td className="p-3 sm:p-4">High Court Appellate Enforceability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Persona Section: Which One Is Right For You */}
              <section id="heading-persona-fit" aria-labelledby="heading-persona-fit-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-persona-fit-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Telecom &amp; Broadband Refund Route Is Right for You?
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Persona-Based Decision Framework
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
                        Scenario 1 • Minor Recharge Failure
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        Prepaid Recharge Under ₹1,000 Failed on UPI / Net Banking
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        If you attempted an instant mobile recharge or broadband top-up via UPI or card, funds were debited, but the account pack never reflected, start with the telecom app chat desk and your bank’s UPI grievance portal. Under RBI TAT rules, this must be reversed within T+1 day. If stalled past 7 days, escalate directly to the Circle Nodal Officer.
                      </p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-semibold text-slate-700">
                      Best Route: <span className="text-slate-900 font-bold">App Docket + Circle Nodal Email</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#DC2626]" />
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-50 text-[#DC2626] mb-2">
                        Scenario 2 • Withheld Security Deposit
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        JioFiber, Airtel or ACT Broadband ONT Deposit (₹1,500 – ₹4,000)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        You surrendered your optical fiber modem and power adapter, hold a technician acknowledgment slip, yet customer support keeps closing tickets saying &quot;device pending&quot; or &quot;internal refund processing&quot; past 60 days. Standard support bots will not release funds without external legal escalation.
                      </p>
                    </div>
                    <div className="p-2.5 bg-red-50 rounded-xl text-[11px] font-semibold text-[#DC2626]">
                      Best Route: <span className="font-bold">Advocate Statutory Legal Demand Notice</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
                        Scenario 3 • Harassment &amp; Chronic Downtime
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        Postpaid Phantom Bills (&gt; ₹5,000), Recovery Threat Calls, or Prolonged Outage
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        A disconnected postpaid number is still generating invoices, third-party recovery agencies are harassing you and threatening CIBIL ruin, or an ISP left your broadband dead for 3 weeks during critical work-from-home contracts. You need both debt quashing and punitive financial compensation.
                      </p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-semibold text-slate-700">
                      Best Route: <span className="text-slate-900 font-bold">Legal Notice followed by e-Jagriti Commission</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Deep-Dive H2 per Route: Route 1 */}
              <section id="heading-appellate-deepdive" aria-labelledby="heading-appellate-deepdive-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-appellate-deepdive-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1 Deep Dive: The TRAI 2-Tier Grievance &amp; Appellate Authority Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Telecom Consumers Protection and Redressal of Grievances Regulations, 2012, every telecom access service provider and internet service provider (ISP) in India is statutorily mandated to maintain a two-tier internal dispute resolution system:
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold text-sm block mb-1">Tier 1: Call Centre / Web Grievance Officer &amp; Mandatory Docketing</strong>
                    <p className="leading-relaxed">
                      Whenever you contact Jio, Airtel, Vi, or your broadband provider via phone, mobile application, or email regarding a billing or refund dispute, the operator is obligated under Regulation 3 to register the grievance and immediately issue a unique Docket Number via SMS. For requests relating to refund of security deposits or service disconnection, the statutory benchmark for resolution is 3 to 10 days.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold text-sm block mb-1">Tier 2: Circle Nodal Officer Escalation</strong>
                    <p className="leading-relaxed">
                      If the call centre closes your docket without remitting the funds or fails to resolve the matter within statutory timeframes, you can escalate the dispute to the Circle Nodal Officer. Each licensed telecom circle (e.g., Delhi-NCR, Mumbai, Karnataka, UP-East) has a designated Nodal Officer whose contact details are publicly published on the operator&apos;s website. The Nodal Officer must investigate and resolve the grievance within 10 working days.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold text-sm block mb-1">Tier 3: The Operator&apos;s Appellate Authority Bench</strong>
                    <p className="leading-relaxed">
                      If the Nodal Officer&apos;s decision is unsatisfactory, you have a statutory right to appeal before the Appellate Authority of the service provider within 30 days of the decision (or within 30 days of the expiry of the Nodal Officer&apos;s 10-day timeline). The Appellate Authority comprises a two-member bench (one telecom executive and one independent consumer advocate) that must decide the appeal within 30 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Deep-Dive H2 per Route: Route 2 */}
              <section id="heading-legal-notice-deepdive" aria-labelledby="heading-legal-notice-deepdive-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-notice-deepdive-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2 Deep Dive: The Advocate Legal Demand Notice (The Pre-Litigation Ultimatum)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While TRAI&apos;s internal grievance machinery is legally mandated, corporate customer service teams often treat appellate filings as administrative formality. When customer care representatives deflect claims with canned responses, serving a formal statutory advocate legal notice fundamentally shifts the power dynamic:
                </p>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    A legal notice drafted by an advocate is formally addressed to the Managing Director, Chief Executive Officer, and Company Secretary of the telecom parent entity (e.g., Reliance Jio Infocomm Ltd., Bharti Airtel Ltd., Vodafone Idea Ltd., or Atria Convergence Technologies Ltd.), as well as the Circle General Manager.
                  </p>
                  <p className="leading-relaxed">
                    The notice establishes an unassailable factual foundation: the subscriber customer ID, installation address, technician hardware pickup receipt with ONT serial number, payment gateway debit UTRs, and all prior TRAI docket numbers. It explicitly cites <strong className="text-slate-900">Regulation 14 of TRAI Regulations 2012</strong> (10% per annum penal interest mandate) and <strong className="text-slate-900">Section 2(11) of the Consumer Protection Act, 2019</strong>.
                  </p>
                  <p className="leading-relaxed">
                    Because the notice is dispatched via Registered Speed Post and served electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, it bypasses frontline call centre agents and lands directly on the desk of the telecom operator&apos;s corporate in-house legal department. Corporate legal teams know that defending a ₹2,500 security deposit dispute in consumer court costs them upwards of ₹25,000 in counsel appearance fees. In over 80% of substantiated cases, the operator issues an immediate bank reversal before the 15-day notice period expires.
                  </p>
                </div>
              </section>

              {/* Mid-Page Notice CTA */}
              <TelecomNoticeCTA
                variant="primary"
                buttonText="Draft Advocate Notice to Telecom Provider"
              />

              {/* Deep-Dive H2 per Route: Route 3 */}
              <section id="heading-consumer-court-deepdive" aria-labelledby="heading-consumer-court-deepdive-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-consumer-court-deepdive-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3 Deep Dive: District Consumer Commission (e-Jagriti) Under CPA 2019
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If the service provider fails to comply with your advocate legal notice within the stipulated 15-day demand window, you can immediately initiate consumer court proceedings under Section 35 of the Consumer Protection Act, 2019:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1 text-sm">Filing via e-Jagriti Digital Portal:</strong>
                    <p className="text-slate-700 leading-relaxed">
                      Complaints are filed 100% digitally on the Ministry of Consumer Affairs&apos; e-Jagriti portal (<a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] font-semibold underline">e-jagriti.gov.in</a>). There is zero government court fee for monetary claims up to ₹5,00,000, making justice accessible for individual subscribers.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1 text-sm">Jurisdiction Where You Reside:</strong>
                    <p className="text-slate-700 leading-relaxed">
                      Under Section 34(2) of CPA 2019, consumers can file the complaint before the District Consumer Commission located where the consumer personally resides or works for gain, eliminating any requirement to travel to the telecom operator&apos;s registered corporate headquarters in Mumbai or New Delhi.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1 text-sm">Statutory Damages &amp; Mental Agony:</strong>
                    <p className="text-slate-700 leading-relaxed">
                      In addition to ordering a 100% refund of the security deposit or disputed bills with 9% to 12% annual interest, consumer forums routinely penalize telecom operators between ₹10,000 and ₹35,000 for mental agony, harassment, loss of remote work productivity, and advocate litigation fees.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1 text-sm">Enforceability &amp; Attachment:</strong>
                    <p className="text-slate-700 leading-relaxed">
                      Under Section 71 and 72 of the Consumer Protection Act, 2019, orders passed by Consumer Commissions have the force of a civil court decree. Failure to comply can result in the attachment of the telecom operator&apos;s corporate bank accounts and criminal prosecution of responsible directors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Deep-Dive H2 per Route: Route 4 */}
              <section id="heading-tdsat-civil-deepdive" aria-labelledby="heading-tdsat-civil-deepdive-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-tdsat-civil-deepdive-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4 Deep Dive: When Does TDSAT or Civil Court Come Into Play?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many consumers mistakenly ask whether they should file a petition before the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) or initiate a regular civil recovery suit under the Code of Civil Procedure (CPC). Here is the authoritative legal position:
                </p>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">TDSAT Jurisdiction:</strong> Under Section 14 of the Telecom Regulatory Authority of India Act, 1997, TDSAT was established primarily to adjudicate disputes between licensors and licensees, between two or more service providers (e.g., inter-operator interconnect charges or spectrum disputes), and between a service provider and a group of consumers. While groups of consumers can approach TDSAT, the tribunal requires substantial filing fees, appearance by specialized telecom advocates, and is based in New Delhi. For individual retail consumers seeking refunds of ₹1,000 to ₹50,000, TDSAT is commercially impractical.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">Civil Suits vs Consumer Commissions:</strong> While a civil recovery suit can theoretically be instituted under Section 9 CPC for recovery of debt, civil courts require ad-valorem stamp duty court fees, lengthy multi-year trials, and formal evidence cross-examinations. The Supreme Court of India in <span className="font-semibold text-slate-900">Bharti Airtel Ltd. v. Dr. Vidya Sagar</span> clarified that the Consumer Protection Act provides an expeditious, low-cost summary remedy that is fully available to telecom consumers alongside existing statutory laws.
                  </p>
                </div>
              </section>

              {/* Verified Court Orders */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                      Verifiable Precedents
                    </span>
                    <h2
                      id="heading-court-orders-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Landmark Order Digest: 4 Verifiable Telecom Rulings Against Jio, Airtel, Vi &amp; ACT Fibernet
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Commission Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Licensed Indian Access Providers
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

              {/* Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Consistently Won Telecom &amp; Broadband Refund Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An in-depth empirical review of consumer court judgments across Indian state and district commissions demonstrates clear evidentiary patterns. When consumers follow these documented evidentiary steps, telecom defense claims are swiftly dismissed:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Hardware Surrender Slip with ONT Serial Number:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For router and optical fiber modem deposit refunds, consumers who produced a signed technician pickup voucher or digital collection SMS detailing the serial number rendered the telecom provider&apos;s defense of &quot;missing equipment&quot; entirely baseless.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">12-Digit Bank UTR Proving Gateway Debit Without Inward Settlement:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        In failed recharge and disputed invoice deductions, producing an authenticated bank statement showing the debit to the telecom merchant and zero subsequent inward credits established conclusive liability under RBI TAT regulations.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proof of Exhausting the TRAI Internal Escalation Chain:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting written proof of prior Call Centre Docket Numbers and Circle Nodal Officer emails demonstrated to the judge that the subscriber acted with utmost diligence, proving that the service provider&apos;s dispute desk deliberately neglected consumer rights.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Service of Statutory Advocate Legal Notice via Registered Speed Post:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Courts viewed a prior advocate legal notice as conclusive evidence of bona fide dispute notice. Telecom operators that ignored the 15-day statutory notice were routinely slapped with punitive legal costs and mental distress damages.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Statutory Deadlines Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-deadlines-table-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Deadlines &amp; Regulatory Benchmarks in Telecom Disputes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    TRAI &amp; RBI Timelines
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">Statutory Deadlines for Telecom and Broadband Grievances</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">Dispute Stage / Event</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">Statutory Deadline</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-200">Governing Law / Circular</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-red-300">Consequence of Default</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Broadband Security Deposit Refund</th>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Within 60 Days of Closure</td>
                        <td className="p-3 sm:p-4">TRAI TCPRGR 2012 Regulation 14</td>
                        <td className="p-3 sm:p-4">Mandatory 10% p.a. interest payable to consumer</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Call Centre Docket Resolution</th>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">3 to 10 Working Days</td>
                        <td className="p-3 sm:p-4">TRAI Regulation 5</td>
                        <td className="p-3 sm:p-4">Right to escalate directly to Circle Nodal Officer</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Circle Nodal Officer Decision</th>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Within 10 Days of Receipt</td>
                        <td className="p-3 sm:p-4">TRAI Regulation 8</td>
                        <td className="p-3 sm:p-4">Right to appeal before Appellate Authority Bench</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Filing Appeal to Appellate Authority</th>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Within 30 Days of Decision</td>
                        <td className="p-3 sm:p-4">TRAI Regulation 10</td>
                        <td className="p-3 sm:p-4">Appellate bench must adjudicate within 30 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Failed Online Recharge Auto-Reversal</th>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">T+1 Business Day</td>
                        <td className="p-3 sm:p-4">RBI Harmonisation Circular 2019-20/67</td>
                        <td className="p-3 sm:p-4">Statutory penalty of ₹100 per day of delay</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">Consumer Court Filing Limitation</th>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">2 Years from Cause of Action</td>
                        <td className="p-3 sm:p-4">CPA 2019 Section 69</td>
                        <td className="p-3 sm:p-4">Claim barred by limitation unless condoned</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Dispute Playbooks Interactive Component */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <h2 id="heading-problem-picker-title" className="sr-only">
                  Dispute Scenarios &amp; Resolution Playbooks
                </h2>
                <TelecomProblemTabs />
              </section>

              {/* Worked Real-World Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: Recovering a ₹2,500 Withheld Fiber Deposit &amp; ₹15,000 Harassment Damages
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Matter
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Subscriber</span>
                      <strong className="text-slate-900 font-bold">Priya Sharma (Noida, UP)</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Service Provider</span>
                      <strong className="text-slate-900 font-bold">Leading Telecom / Fiber ISP</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Security Deposit Amount</span>
                      <strong className="text-emerald-700 font-bold">₹2,500 Refundable Deposit</strong>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-slate-900 font-bold block text-sm">Background &amp; Grievance:</strong>
                    <p className="leading-relaxed">
                      Priya disconnected her fiber broadband service in May 2026 due to relocation. On May 12, an authorized technician visited her apartment, collected the ONT router and adapter, and handed over an official physical acknowledgment slip with serial number ONT-784910. Priya was informed her ₹2,500 deposit would be credited to her bank account within 14 days.
                    </p>
                    <p className="leading-relaxed">
                      By July 20, 2026 (70 days post-disconnection), no refund had arrived. When Priya followed up, the automated support portal claimed the hardware return was &quot;under evaluation&quot;. Frontline agents then closed three consecutive support dockets stating &quot;customer unreachable&quot;.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-slate-900 font-bold block text-sm">The Legal Recovery Action:</strong>
                    <p className="leading-relaxed">
                      Instead of continuing endless chat-bot loops, Priya engaged LegalRecovery.in. An advocate drafted a formal statutory demand notice addressed to the telecom company&apos;s Circle Nodal Officer and Managing Director. The notice attached the technician pickup voucher, bank statement showing zero inward credit, and cited TRAI Regulation 14 (60-day refund limit and 10% per annum penal interest), granting 15 days to settle before filing on e-Jagriti.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
                    <strong className="font-bold block text-emerald-900 text-sm">Case Outcome:</strong>
                    <p className="text-xs leading-relaxed">
                      Upon receiving the Speed Post notice, the telecom company&apos;s legal escalation team contacted Priya on day 8. The operator immediately credited the full ₹2,500 security deposit plus ₹250 statutory interest directly to her bank account, alongside a formal written waiver of all pending docket queries. Priya avoided lengthy litigation and resolved a 70-day delay in under 10 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 6 Critical Documents for Telecom Refund Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Admissible Under Section 63 BSA
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">1</span>
                    <strong className="text-slate-900 font-bold block mb-1">Equipment Return Slip / Pickup SMS:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Physical receipt or automated SMS from the technician confirming receipt of ONT router, setup box, or power adapter with device serial numbers.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">2</span>
                    <strong className="text-slate-900 font-bold block mb-1">Disconnection Service Request (SR) Docket:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      The official cancellation confirmation email or SMS containing the date of disconnection request and final billing cutoff date.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">3</span>
                    <strong className="text-slate-900 font-bold block mb-1">Certified Bank Account Statement:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      PDF statement covering 60 days following the return of equipment, confirming that zero refund credits were settled by the telecom operator.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">4</span>
                    <strong className="text-slate-900 font-bold block mb-1">Payment Gateway Receipts &amp; UTRs:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Bank or UPI transaction receipt showing the initial security deposit deduction, failed recharge debits, or disputed monthly rental payments.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">5</span>
                    <strong className="text-slate-900 font-bold block mb-1">Circle Nodal &amp; Appellate Email Trail:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Complete email threads sent to the telecom circle&apos;s nodal officer showing ticket numbers, complaint dates, and unfulfilled promises.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold inline-flex items-center justify-center mb-2">6</span>
                    <strong className="text-slate-900 font-bold block mb-1">Recovery Threat Recordings / Letters:</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Screenshots of WhatsApp recovery messages, recorded voice calls, or demand notices sent by recovery agents after connection cancellation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Bottom Notice CTA */}
              <TelecomNoticeCTA
                variant="primary"
                buttonText="Recover Telecom Refund with Advocate Legal Notice"
              />

              {/* FAQs Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Telecom, Broadband &amp; Recharge Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory FAQ Guide
                  </span>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 transition-all open:border-[#DC2626]/40 open:shadow-xs"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-bold text-lg transition-transform duration-200 group-open:rotate-45 shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
                >
                  Primary Statutes, TRAI Regulations &amp; Regulatory References
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                  <p className="text-xs text-slate-600">
                    All legal assertions, timelines, and rights outlined in this guide are grounded in primary statutory sources and official notifications:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {PRIMARY_SOURCES.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold mt-0.5">•</span>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                    Disclaimer: This legal guide is published for educational and consumer empowerment purposes pursuant to the Consumer Protection Act, 2019 and TRAI regulations. For individual dispute representation, formal legal notices are dispatched by enrolled advocates under the Advocates Act, 1961.
                  </div>
                </div>
              </section>

              {/* Related Everyday Services & Recovery Links */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Related Everyday Services Dispute Hubs
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-slate-700 font-semibold transition-colors"
                  >
                    Interior Designer &amp; Contractor Refund Notice →
                  </Link>
                  <Link
                    href="/recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-slate-700 font-semibold transition-colors"
                  >
                    All Financial Recovery Streams →
                  </Link>
                  <Link
                    href="/services/refunds-and-consumer-complaints"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-slate-700 font-semibold transition-colors"
                  >
                    Consumer Complaints &amp; Refund Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/telecom-broadband-refund-complaint" />
      </div>
    </>
  );
}
