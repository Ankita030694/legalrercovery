import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/components/../lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import CarpetAreaNoticeCTA from "./CarpetAreaNoticeCTA";
import CarpetAreaTableOfContents from "./CarpetAreaTableOfContents";
import CarpetAreaProblemTabs from "./CarpetAreaProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Carpet Area Less Than Promised? Claim a Refund",
  description:
    "Flat carpet area smaller than agreed? How to measure, RERA provisions on carpet area and claiming a proportionate refund.",
  alternates: {
    canonical: `${SITE_URL}/carpet-area-shortfall-refund`,
  },
  openGraph: {
    title: "Got a Smaller Flat Than Promised? Proportionate Refund Under RERA",
    description:
      "How to measure apartment carpet area under RERA Section 2(k), challenge inflated super built-up loading, and claim a proportionate refund with SBI MCLR + 2% interest.",
    url: `${SITE_URL}/carpet-area-shortfall-refund`,
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
    title:
      "Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) — Section 2(k) (Statutory Definition of Carpet Area), Section 4(2)(h), Section 12 (Veracity of Prospectus), Section 13(2), Section 14 (Adherence to Sanctioned Plans & 5-Year Defect Liability) & Section 18",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title:
      "Model Agreement for Sale Under RERA Rules (Clause 1.7 / Clause 7.2 Across State RERA Rules) — Mandatory Proportionate Refund Within 45 Days With SBI MCLR + 2% Interest for Reduction in Carpet Area",
    url: "https://mohua.gov.in/",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) IS 3861:2002 — Method of Measurement of Plinth, Carpet and Rentable Areas of Buildings (Read With RERA Section 2(k) Override)",
    url: "https://www.bis.gov.in/",
  },
  {
    title:
      "Wg. Cdr. Arifur Rahman Khan and Aleya Sultana & Ors. v. DLF Southern Homes Pvt. Ltd., (2020) 16 SCC 512 — Supreme Court Ruling That Execution of Conveyance Deed Does Not Extinguish Buyer Claims",
    url: "https://main.sci.gov.in/supremecourt/2019/18680/18680_2019_33_1501_23550_Judgement_24-Aug-2020.pdf",
  },
  {
    title:
      "M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors., (2021) 18 SCC 1 — Supreme Court 3-Judge Bench on Allottee Refund & Interest Rights Under RERA",
    url: "https://main.sci.gov.in/supremecourt/2021/16758/16758_2021_33_1501_31312_Judgement_11-Nov-2021.pdf",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Digital Brochures, Laser Measurement Reports, CAD Drawings & CRM Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const SCENARIO_CARDS = [
  {
    badge: "Scenario 01 • Highest Leverage Stage",
    title: "Shortfall Found During Pre-Delivery Inspection (PDI) Before Taking Keys",
    odds: "High Direct Adjustment Odds (Within 15–45 Days)",
    situation:
      "The builder invited you for Pre-Delivery Inspection (PDI) and raised the final 5%–10% possession demand. When you or your architect measured the rooms with a laser meter, the net usable RERA carpet area turned out to be 45 to 110 sq. ft. smaller than promised in your Builder-Buyer Agreement (BBA).",
    route:
      "Do not sign an unconditional 'Satisfaction Certificate'. Record the exact room-by-room laser measurements on the PDI sheet, obtain a licensed Architect Certificate under RERA Section 2(k), and serve a 15-day Advocate Demand Notice requiring the builder to deduct the proportionate shortfall price plus SBI MCLR + 2% interest from your final possession demand.",
    statutoryHook: "Model RERA Agreement Clause 1.7 + Section 14(1) RERA, 2016",
    jumpHref: "#heading-step-playbook",
    jumpLabel: "See 6-Step Measurement & Refund Playbook →",
  },
  {
    badge: "Scenario 02 • Brochure vs Agreement Trap",
    title: "Sold on 'Super Built-Up Area' (35%–45% Loading), Actual Flat Is Cramped",
    odds: "Strong Claim Under Sec 12 RERA & Sec 2(47) CPA",
    situation:
      "You booked a flat marketed as '1,550 Sq. Ft. Super Area' in the sales brochure and price sheet. At handover, the internal usable rooms measure barely 880 sq. ft. because the builder quietly applied a 43% loading factor for common corridors, lift shafts, and external walls.",
    route:
      "Under Section 2(k) and Section 13(2) of RERA, pricing an apartment on Super Built-Up Area without binding Carpet Area disclosure is illegal. Compare the brochure against the project's registered Apartment Table on the State RERA portal and serve a statutory notice under Section 12 RERA for proportionate refund or 100% exit with interest.",
    statutoryHook: "Sections 2(k), 12 & 13(2) RERA + Section 2(47) CPA 2019",
    jumpHref: "#heading-legal-basis",
    jumpLabel: "Compare Carpet vs Super Area Law →",
  },
  {
    badge: "Scenario 03 • Post-Handover Discovery",
    title: "Already Took Possession & Signed Sale Deed Before Discovering Shortfall",
    odds: "Enforceable Within 5-Year Sec 14(3) Defect Window",
    situation:
      "You paid the final dues, signed the standard Possession Letter and Conveyance Deed, and took the keys. A month later, while your interior contractor measured the rooms for false ceiling and wardrobes, you discovered a 65 sq. ft. carpet area shortfall—meaning you overpaid both the builder and Stamp Duty.",
    route:
      "In Arifur Rahman Khan v. DLF Southern Homes (2020), the Supreme Court held that signing a possession letter or sale deed does NOT extinguish a homebuyer's statutory rights. Invoke the 5-year defect and obligation window under Section 14(3) of RERA via an Advocate Legal Notice to claim proportionate price refund plus excess Stamp Duty reimbursement.",
    statutoryHook: "Section 14(3) RERA (5-Year Rule) + Arifur Rahman Khan (SC 2020)",
    jumpHref: "#heading-case-digest",
    jumpLabel: "Read Post-Deed Supreme Court Ruling →",
  },
  {
    badge: "Scenario 04 • Extortionate Final Demand",
    title: "Builder Demands ₹3L–₹8L Extra Claiming 'Super Area Increased at OC'",
    odds: "Struck Down Routinely Under Pawan Gupta SC Precedent",
    situation:
      "Instead of refunding you for a smaller flat, the builder sends a Final Demand Notice claiming the 'Super Area' increased by 95 sq. ft. during construction—without a single square foot of extra carpet area inside your rooms—and refuses to release keys unless you pay.",
    route:
      "Under the Supreme Court's ruling in Pawan Gupta v. Experion Developers (2020), builders cannot levy arbitrary super-area increases without proving revised sanctioned plans and actual carpet area expansion (capped at 3% under RERA). Pay under written protest if urgent, and serve a legal notice to recover the illegal demand with interest.",
    statutoryHook: "Pawan Gupta v. Experion Developers (SC 2020) + Clause 1.7 BBA",
    jumpHref: "#heading-builder-defences",
    jumpLabel: "See Counter-Steps for Fake Area Demands →",
  },
  {
    badge: "Scenario 05 • Material Layout Alteration",
    title: "Major Shrinkage (>5% Reduction) or Missing Utility Room / Balcony",
    odds: "Choice of Pro-Rata Refund OR 100% Full Exit With Interest",
    situation:
      "The builder altered the apartment layout without taking prior written consent of 2/3rd allottees under Section 14(2) RERA—eliminating a servant/utility room, shrinking bedroom widths so a standard king bed cannot fit, or reducing carpet area by 8%–15%.",
    route:
      "A unilateral reduction inside an individual unit violates Section 14(1) and 14(2)(i) of RERA (which requires prior written consent of the allottee). You have the unconditional option either to refuse possession and demand a 100% refund of all paid installments with SBI MCLR + 2% interest, or to retain the flat and claim proportionate refund plus compensation under Form N.",
    statutoryHook: "Sections 12, 14(2) & 18 RERA + Newtech Promoters (SC 2021)",
    jumpHref: "#heading-worked-example",
    jumpLabel: "See Worked Refund & Interest Math →",
  },
  {
    badge: "Scenario 06 • Legacy / Non-RERA Project",
    title: "Legacy Pre-RERA Booking or Unregistered Builder Project Shortfall",
    odds: "Strong Remedy via e-Jagriti Consumer Commission",
    situation:
      "Your project received its Completion/Occupancy Certificate before RERA came into force, or involves a smaller redevelopment building where the developer delivered 12% less floor area than promised in the registered Agreement for Sale.",
    route:
      "File a pre-litigation 15-day Advocate Demand Notice under Section 2(11) (Deficiency in Service) and Section 2(47) (Unfair Trade Practice) of the Consumer Protection Act, 2019, read with Section 55 of the Transfer of Property Act, followed by an online consumer complaint on the government e-Jagriti portal (District Commission up to ₹50 lakh; State Commission ₹50L–₹2 Cr).",
    statutoryHook: "Sections 2(11), 2(47) & 35 CPA 2019 + e-Jagriti Portal",
    jumpHref: "#heading-escalation-flow",
    jumpLabel: "View RERA vs Consumer Court Flow →",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Bars Builders From Charging for Arbitrary 'Super Area' Revisions Without Proof of Carpet Area Change",
    parties: "Pawan Gupta v. Experion Developers Pvt. Ltd.",
    citation: "Civil Appeal Nos. 3703–3704 of 2020 (Affirming NCDRC CC No. 285 of 2018), Supreme Court of India",
    date: "Order Dated 26 November 2020",
    facts:
      "At the time of offering possession, the developer demanded substantial additional charges from homebuyers claiming that the 'Super Area' of the apartments had increased during construction. The allottees challenged the demand before the National Consumer Disputes Redressal Commission (NCDRC), demonstrating through independent architectural reports that the internal usable carpet area had not increased and that the developer had unilaterally inflated common-area loading.",
    holding:
      "The NCDRC held—and the Supreme Court affirmed by dismissing the builder's appeals—that a promoter cannot arbitrarily revise or demand excess consideration for purported super-area additions without producing certified architectural drawings and revised sanction approvals from the town-planning authority proving actual area expansion. Any excess sums collected on unverified area claims must be refunded or adjusted with statutory interest.",
    amount: "Unlawful Super-Area Demand Quashed + Refund of Excess Consideration With Interest",
    takeaway:
      "Whether a builder shrinks your usable rooms or demands extra money at possession under the guise of 'revised super area', the burden lies strictly on the builder to prove actual RERA Carpet Area dimensions from sanctioned municipal drawings.",
  },
  {
    title: "Signing Possession Certificate or Conveyance Deed Does Not Extinguish Buyer's Right to Claim Shortfall Compensation",
    parties: "Wg. Cdr. Arifur Rahman Khan and Aleya Sultana & Ors. v. DLF Southern Homes Pvt. Ltd.",
    citation: "Civil Appeal No. 6239 of 2019, (2020) 16 SCC 512, Supreme Court of India",
    date: "Judgment Dated 24 August 2020",
    facts:
      "Homebuyers who had taken physical possession of their flats and executed registered conveyance deeds approached the consumer forum seeking compensation for builder breaches, delayed handover, and deviations from promised project specifications. The developer contended that once an allottee signs a 'no-claim' possession certificate and executes the final sale deed, the contract stands discharged by accord and satisfaction.",
    holding:
      "A two-judge bench of the Supreme Court overruled the builder's estoppel defence. The Court held that flat buyers have no real bargaining power when a builder refuses to hand over keys unless standard-form possession undertakings are signed. Executing a possession certificate or conveyance deed does not forfeit or waive an allottee's statutory right to claim compensation and refunds for contractual deficiencies.",
    amount: "Statutory Compensation & Financial Relief Awarded Post-Conveyance Deed",
    takeaway:
      "Even if you discovered the carpet area shortfall after taking keys, moving in, or registering the Sale Deed, the builder cannot hide behind the fine print of your possession letter.",
  },
  {
    title: "Allottee's Right to Refund With SBI MCLR + 2% Interest for Breach of Agreement Terms Is Unconditional",
    parties: "M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors.",
    citation: "Civil Appeal Nos. 6745–6749 of 2021, (2021) 18 SCC 1 (3-Judge Bench), Supreme Court of India",
    date: "Judgment Dated 11 November 2021",
    facts:
      "Promoters across Uttar Pradesh challenged the statutory authority of RERA to direct refunds with prescribed MCLR interest when builders failed to deliver apartments strictly in accordance with the terms and specifications of the Agreement for Sale, and also challenged the delegation of Section 40 Recovery Certificate powers.",
    holding:
      "A three-judge bench of the Supreme Court held that under the scheme of RERA (Sections 12, 14, 18, and 31), the promoter is bound by a strict statutory mandate to deliver the apartment exactly as agreed in the Agreement for Sale and prospectus. Any failure to deliver in accordance with the agreed specifications gives the allottee an indefeasible statutory right to refund and prescribed interest, enforceable as arrears of land revenue under Section 40(1).",
    amount: "100% Statutory Refund / Proportionate Restitution + SBI MCLR Interest Affirmed",
    takeaway:
      "Under RERA, the statutory Model Agreement for Sale (Clause 1.7) has the force of law: any reduction in carpet area obligates the builder to refund the excess money within 45 days along with SBI MCLR + 2% interest.",
  },
  {
    title: "Homebuyers Can Elect Either RERA or Consumer Commission (e-Jagriti) to Prosecute Area & Specification Deficiencies",
    parties: "M/s Imperia Structures Ltd. v. Anil Patni & Anr.",
    citation: "Civil Appeal Nos. 3581–3590 of 2020, (2020) 10 SCC 783, Supreme Court of India",
    date: "Judgment Dated 2 November 2020",
    facts:
      "Allottees approached the Consumer Commission alleging deficiency in service and unfair trade practice by the developer in failing to deliver apartments as per the promised agreement specifications. The builder sought dismissal of the consumer complaints by invoking Section 79 of RERA (bar of civil court jurisdiction).",
    holding:
      "The Supreme Court held that an allottee is a 'consumer' under the Consumer Protection Act and that Section 79 of RERA only bars civil courts, not Consumer Commissions, which enjoy concurrent saving protection under Section 71 and Section 88 of RERA. Homebuyers have the freedom to choose either RERA or the Consumer Commission (or withdraw from RERA to claim composite damages).",
    amount: "Concurrent Consumer Commission & RERA Jurisdiction Upheld With 9%–10.95% Interest",
    takeaway:
      "If your carpet area dispute involves both a proportionate price refund and additional claims for excess stamp duty, interior redesign loss, and mental harassment, you can strategically choose between RERA (Form M + Form N) and e-Jagriti.",
  },
];

const FAQS = [
  {
    question: "What can I do if my flat's carpet area is less than promised in the Builder-Buyer Agreement?",
    answer:
      "Under Section 2(k), Section 12, and Section 14 of the Real Estate (Regulation and Development) Act, 2016 (RERA), read with Clause 1.7 of the statutory Model Agreement for Sale, a builder is legally bound to deliver the exact Carpet Area contracted. If the delivered carpet area is smaller than agreed, the builder must refund the proportionate excess money paid by you within 45 days of demand, along with simple interest at SBI Highest Marginal Cost of Lending Rate (MCLR) + 2% (currently ~10.95% p.a. in Maharashtra, Haryana, Karnataka, Delhi; MCLR + 1% in UP) calculated from the date the excess installment was paid.",
  },
  {
    question: "How is RERA carpet area measured, and does it include balconies, external walls, or shafts?",
    answer:
      "No. Under Section 2(k) of RERA, 2016, 'carpet area' is strictly defined as the net usable floor area of an apartment, EXCLUDING the area covered by external walls, areas under service shafts (plumbing/electrical ducts), exclusive balcony or verandah area, and exclusive open terrace area, while INCLUDING the area covered by internal partition walls inside the flat. If a builder includes outer perimeter walls, balconies, or flowerbeds inside the carpet area figure to mask a shortfall, it is a statutory violation.",
  },
  {
    question: "How is the proportionate carpet area shortfall refund calculated?",
    answer:
      "First, divide your Total Agreed Sale Consideration (excluding GST/Stamp Duty) by the Promised Carpet Area (in sq. ft. or sq. m.) to get your Effective Per-Sq.-Ft. Rate. Next, multiply that rate by the Shortfall Area (Promised Carpet Area minus Actual Measured Carpet Area) to get your Principal Refund Due. On this principal shortfall amount, add simple interest at SBI Highest MCLR + 2% per annum from the date of your payments until the date of refund, plus reimbursement of excess Stamp Duty and GST paid on the missing square footage.",
  },
  {
    question: "Can the builder refuse a refund by citing a '±3% or ±5% construction tolerance' clause?",
    answer:
      "No. Under Clause 1.7 of the statutory RERA Model Agreement for Sale, the 3% threshold is only a ceiling on how much extra area a builder can charge for if the apartment becomes slightly larger during construction—it does NOT allow the builder to retain your money without refund when the flat is smaller! Clause 1.7 explicitly mandates that for any reduction in carpet area, the promoter shall refund the excess money paid with prescribed MCLR + 2% interest within 45 days. One-sided builder clauses waiving refunds for shortfalls are void under Section 2(46) of the Consumer Protection Act, 2019.",
  },
  {
    question: "What if I booked the flat on 'Super Built-Up Area' and the builder never mentioned Carpet Area?",
    answer:
      "Selling a flat solely on 'Super Built-Up / Saleable Area' violates Section 4(2)(h) and Section 13(2) of RERA, 2016. You should immediately check the project's registration page on your State RERA portal, where the builder was legally forced to declare the sanctioned RERA Carpet Area for every apartment type. If the delivered flat is smaller than the RERA-declared carpet area, or if the builder misrepresented the loading factor in the brochure (e.g., promising 25% loading but applying 42% loading), you can claim proportionate restitution or full refund under Section 12 of RERA and Section 2(47) of the Consumer Protection Act.",
  },
  {
    question: "Can I claim a carpet area shortfall refund after taking possession and registering the Sale Deed?",
    answer:
      "Yes. In Wg. Cdr. Arifur Rahman Khan v. DLF Southern Homes Pvt. Ltd. (2020) 16 SCC 512, the Supreme Court held that signing a standard possession certificate or conveyance deed does not extinguish a homebuyer's statutory right to claim compensation for builder breaches. Furthermore, Section 14(3) of RERA gives every allottee a 5-year statutory window from the date of handing over possession to report any structural defect or failure of the promoter to fulfill obligations as per the Agreement for Sale.",
  },
  {
    question: "Builder ne agreement se chhota flat (kam carpet area) diya hai toh refund kaise milega?",
    answer:
      "Agar builder ne Builder-Buyer Agreement (BBA) ya brochure mein vaada kiye gaye Carpet Area se chhota flat diya hai, toh sabse pehle kisi licensed Architect ya Civil Engineer se RERA Section 2(k) ke hisab se flat ka laser measurement karwayein aur signed Architect Certificate lein. Uske baad LegalRecovery.in ke madhyam se builder aur uske directors ko 15-din ka Advocate Legal Notice bhejein, jismein ghate hue sq. ft. ka proportionate paisa aur SBI MCLR + 2% byaj (interest) 45 din mein wapas karne ya final possession demand mein adjust karne ki mang ki jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Got a Smaller Flat Than Promised? Proportionate Refund Under RERA",
  description:
    "Flat carpet area smaller than agreed? How to measure, RERA provisions on carpet area and claiming a proportionate refund.",
  datePublished: "2026-11-04T12:48:00+05:30",
  dateModified: "2026-11-04T12:48:00+05:30",
  mainEntityOfPage: `${SITE_URL}/carpet-area-shortfall-refund`,
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
  about: [
    {
      "@type": "Thing",
      name: "RERA Carpet Area Shortfall Proportionate Refund",
    },
    {
      "@type": "Legislation",
      name: "Real Estate (Regulation and Development) Act, 2016 — Section 2(k), Section 12 & Section 14",
    },
  ],
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
      name: "Property & Builder Disputes",
      item: `${SITE_URL}/services/property-and-builder-disputes`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Builder Booking Refund Hub",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Carpet Area Shortfall Refund",
      item: `${SITE_URL}/carpet-area-shortfall-refund`,
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

export default function CarpetAreaShortfallRefundPage() {
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const breadcrumbItems = [
    { label: "Property & Builder Disputes", href: "/services/property-and-builder-disputes" },
    { label: "Builder Booking Refund Hub", href: "/builder-booking-cancellation-refund-legal-notice" },
    { label: "Carpet Area Shortfall Refund", href: "/carpet-area-shortfall-refund" },
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
        {/* Hero Section strictly matching /legal-notice-to/irctc and /cheque-bounce-case-against-company-directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RERA Sec 2(k), 12 &amp; 14 • Model BBA Clause 1.7</span>
              <span className="text-red-500">•</span>
              <span>Updated <time dateTime="2026-11-04">Nov 2026</time></span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Got a Smaller Flat Than Promised? Proportionate Refund Under RERA
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (RERA Section 2(k) Measurement &amp; Clause 1.7 Proportionate Refund Mandate)
              </p>
              <p>
                Under Section 2(k), Section 12, and Section 14 of RERA, 2016, and Clause 1.7 of the statutory Model Agreement for Sale, if a builder delivers a flat with less Carpet Area than promised, the builder is strictly liable to refund the proportionate excess price within 45 days with SBI Highest MCLR + 2% interest. Obtain a licensed Architect Laser Measurement Certificate and serve a 15-day Advocate Demand Notice before filing on your State RERA portal or e-Jagriti within the 5-year Section 14(3) defect window.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 2(k)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Excludes Outer Walls, Shafts &amp; Balconies</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">MCLR + 2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">~10.95% Interest on Excess Paid</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Clause 1.7 Statutory Refund Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">5 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 14(3) Post-Handover Liability</p>
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
            <CarpetAreaTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1 (Archetype G2 Hero Element): Scenario Cards Grid */}
              <section id="heading-scenario-cards" aria-labelledby="heading-scenario-cards-title" className="scroll-mt-28 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Archetype G2 • Flat Size &amp; Area Discrepancy Scenarios
                  </span>
                  <h2
                    id="heading-scenario-cards-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Carpet Area Shortfall Scenario Matches Your Flat Handover?
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you are inspecting your apartment at the Pre-Delivery Inspection (PDI) stage or have already moved in and noticed that wardrobes and beds barely fit, discovering that your flat is smaller than promised is not a minor cosmetic issue—it is direct financial overcharging. At ₹8,000 to ₹25,000 per sq. ft. in Indian metros, even a 60 sq. ft. carpet area shortfall means the builder has pocketed ₹4.80 lakh to ₹15 lakh of your home loan for space that does not exist. Identify your exact stage below:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {SCENARIO_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626]">
                            {card.badge}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                            {card.odds}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong className="text-slate-900">Your Situation:</strong> {card.situation}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                          <strong className="text-slate-900">Recommended Legal Action:</strong> {card.route}
                        </p>
                      </div>

                      <div className="pl-2 pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-500">
                          {card.statutoryHook}
                        </span>
                        <a
                          href={card.jumpHref}
                          className="text-xs font-extrabold text-[#DC2626] hover:text-red-800 shrink-0"
                        >
                          {card.jumpLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 2 (Archetype G2): Legal Basis With Quoted Statutes & Comparison Tables */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What RERA Sections Govern Carpet Area Refunds?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before the enactment of the Real Estate (Regulation and Development) Act, 2016 (RERA), builders across India routinely sold apartments on nebulous &ldquo;Super Built-Up Area&rdquo; or &ldquo;Saleable Area&rdquo;, inflating flat sizes by 30% to 48% through invisible common-area loading. Parliament abolished this practice by enacting a mandatory, nationwide definition of <strong>Carpet Area under Section 2(k)</strong> and making proportionate refunds compulsory under the statutory Model Agreement for Sale:
                </p>

                {/* Quoted Statutes Blockquotes (Archetype G2 Requirement) */}
                <div className="space-y-4">
                  <blockquote
                    cite="https://www.indiacode.nic.in/handle/123456789/2158"
                    className="bg-white border-l-4 border-[#404447] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      Section 2(k), Real Estate (Regulation and Development) Act, 2016 — Statutory Definition of Carpet Area
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;&lsquo;Carpet area&rsquo; means the net usable floor area of an apartment, excluding the area covered by the external walls, areas under services shafts, exclusive balcony or verandah area and exclusive open terrace area, but includes the area covered by the internal partition walls of the apartment.&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why it matters when measuring your flat:</strong> A builder cannot include external outer brick/RCC walls, bathroom plumbing shafts, AC ledges, flowerbeds, or balconies inside your promised RERA Carpet Area. Only the internal room-to-room floor area plus internal partition walls count toward Section 2(k) carpet area.
                    </footer>
                  </blockquote>

                  <blockquote
                    cite="https://mohua.gov.in/"
                    className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-600">
                      Clause 1.7, Statutory RERA Model Agreement for Sale (Read With Sections 12, 13 &amp; 14(2) RERA) — Mandatory Proportionate Refund
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;The Promoter shall confirm the final carpet area that has been allotted to the Allottee after the construction of the Building is complete and the occupancy certificate is granted by the competent authority, by furnishing details of the changes, if any, in the carpet area. The total price payable for the carpet area shall be recalculated upon confirmation by the Promoter. If there is any reduction in the carpet area within the defined limit, then the Promoter shall refund the excess money paid by Allottee within forty-five days with annual interest at the rate prescribed in the Rules, from the date when such an excess amount was paid by the Allottee.&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why it matters for your refund calculation:</strong> You do not merely get back the raw principal difference—the builder is statutorily required to pay annual interest at <strong>SBI Highest MCLR + 2%</strong> (or MCLR + 1% in UP RERA) from the exact date your excess installment was paid! You can compute this instantly using our <Link href="/tools/rera-refund-interest-calculator" className="text-blue-700 underline font-semibold">RERA Refund Interest Calculator</Link>.
                    </footer>
                  </blockquote>
                </div>

                {/* Table 1: Carpet Area vs Built-Up Area vs Super Built-Up Area */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-4">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of RERA Carpet Area, Built-Up Area, and Super Built-Up Area Under Indian Law</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Area Metric</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">What Is Included</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">What Must Be Excluded</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Size (1,500 Sq. Ft. Super Flat)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Status Under RERA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          RERA Carpet Area (Section 2(k))
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Net usable floor area of bedrooms, living, kitchen, toilets + internal partition walls</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">External walls, service/plumbing shafts, balconies, verandahs, open terraces</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-emerald-700">~950 to 1,050 Sq. Ft.</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-emerald-800">ONLY Legally Valid Pricing Basis (Sec 4 &amp; 13)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Exclusive Balcony / Verandah Area
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Appurtenant balcony, sit-out verandah, or exclusive open terrace attached to unit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be merged into RERA Carpet Area; must be disclosed separately in BBA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-blue-700">~80 to 130 Sq. Ft.</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Valid ONLY if separately quantified in Agreement</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Built-Up / Plinth Area
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Carpet Area + External perimeter wall thickness + Balconies + Utility ducts</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Common lobbies, lifts, staircases, clubhouse, garden, security cabins</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-amber-700">~1,150 to 1,220 Sq. Ft.</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-amber-800 font-semibold">Cannot Be Used to Mask Carpet Shortfall</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Super Built-Up / Saleable Area
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Built-Up Area + Arbitrary 25%–45% &ldquo;Loading&rdquo; for corridors, lifts, clubhouse</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Open parking, public roads, municipal green belts</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-red-700">1,500 Sq. Ft. (Inflated)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">Illegal for Flat Pricing Under RERA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Key Statutory Facts & Remedies Table */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-4">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Key Statutory Facts, Forums, Deadlines and Remedies for Carpet Area Shortfall Claims</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Parameter</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Rule / Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">What the Law Mandates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Proportionate Refund Deadline
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">Model RERA Agreement Clause 1.7</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Promoter must refund excess money paid for reduced carpet area within <strong>45 days</strong> (60 days in select state rules) of confirmation/demand.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Interest Rate on Excess Paid
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">State RERA Rules (Rule 15/18)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs"><strong>SBI Highest MCLR + 2%</strong> (~10.95% p.a. as of Nov 2026; MCLR + 1% in UP RERA) from the date when the excess installment was paid.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Option to Cancel &amp; Take 100% Refund
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">Sections 12, 14(2) &amp; 18 RERA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">If the area reduction alters the sanctioned layout without consent or stems from false brochure representation, allottee can exit with 100% refund + interest.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Post-Possession Claim Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">Section 14(3) RERA &amp; Sec 69 CPA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs"><strong>5 Years</strong> from handing over possession under RERA Sec 14(3); <strong>2 Years</strong> from cause of action/discovery in Consumer Commission (e-Jagriti).</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Adjudicating Forums
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">Sec 31/71 RERA &amp; Sec 35 CPA 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">State RERA Authority (Form M for refund+interest; Form N before Adjudicating Officer for compensation) OR Consumer Commission via e-Jagriti.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Fee
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">LegalRecovery.in Statutory Dispatch</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Flat <strong>₹{basePrice}</strong> for Advocate drafting + Registered Speed Post + Email/WhatsApp service with 15-day demand window.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 (Archetype G2): Step-by-Step <ol> Playbook */}
              <section id="heading-step-playbook" aria-labelledby="heading-step-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-step-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6-Step Playbook: Flat Measurement &amp; Refund Claim
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Builders routinely dismiss verbal complaints or smartphone tape-measure photos by claiming &ldquo;your measurement method is wrong&rdquo;. To make your carpet-area shortfall legally unassailable in RERA or Consumer Court, execute these six steps in sequence:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Conduct a Room-by-Room Laser Measurement With a Licensed Architect (RERA Sec 2(k) + IS 3861:2002)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Hire an independent Architect registered with the Council of Architecture (COA) or a Chartered Civil Engineer (typically ₹3,000–₹7,500) to inspect the flat using a calibrated digital laser distance meter. Instruct the architect to prepare a signed, stamped <strong>As-Built Carpet Area Certificate</strong> with a CAD drawing showing: (a) clear wall-to-wall internal dimensions of every bedroom, living/dining room, kitchen, store, passage, and bathroom; plus (b) the exact thickness of <strong>internal partition walls</strong>; while explicitly excluding external perimeter walls, service/plumbing shafts, balconies, verandahs, and open terraces as mandated by Section 2(k) of RERA.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Cross-Check Your Builder-Buyer Agreement (BBA) Against the State RERA Portal Sanctioned Plan
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Compare your architect&apos;s measured carpet area against three baseline documents: (1) the Carpet Area schedule in your registered Agreement for Sale (BBA), (2) the marketing brochure/price sheet given at booking, and (3) the project&apos;s official Apartment Table and Sanctioned Floor Plan uploaded by the promoter on the State RERA portal. Often, builders declare a smaller carpet area to RERA while selling a bloated figure in buyer brochures—which proves a straight violation of Section 12 of RERA.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Record Written Protest on the PDI Sheet or Possession Handover Letter
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the builder refuses to hand over keys unless you sign their standard printed Possession Certificate, write clearly above your signature: <em>&ldquo;Possession accepted under protest; subject to joint RERA Section 2(k) carpet area verification and proportionate refund claim.&rdquo;</em> If the site manager refuses to let you write on the physical sheet, send an email to the builder&apos;s CRM and Nodal Officer within 24 hours attaching your architect&apos;s measurement note to create an undeniable Section 63 BSA electronic record.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Compute Your Exact Proportionate Principal Refund, SBI MCLR + 2% Interest &amp; Excess Stamp Duty
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Calculate your claim across three heads: (1) <strong>Proportionate Principal Refund</strong> = (Total Base Sale Price ÷ Promised Carpet Area) × Shortfall Sq. Ft.; (2) <strong>Statutory Interest</strong> at SBI Highest MCLR + 2% (~10.95% p.a.) from the date the excess installment was paid until refund using our <Link href="/tools/rera-refund-interest-calculator" className="text-blue-700 underline font-semibold">RERA Refund Interest Calculator</Link>; and (3) <strong>Excess Stamp Duty, Registration &amp; GST</strong> paid on the missing square footage.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a 15-Day Statutory Advocate Legal Demand Notice to the Promoter &amp; Directors
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before initiating litigation, have an advocate dispatch a formal Legal Demand Notice to the builder company&apos;s Registered Office and its active Directors (via Registered Speed Post + official email/WhatsApp). The notice annexes your Architect&apos;s Section 2(k) Certificate, invokes Clause 1.7 of the Model Agreement for Sale, Section 12, and Section 14 of RERA, and gives a strict 15-day ultimatum to either conduct a joint laser re-measurement and credit the refund + interest or face statutory adjudication. Check our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      6
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Online RERA Complaint (Form M / Form N) or Consumer Petition on e-Jagriti
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the builder fails to settle or adjust the shortfall within the notice window, file an <Link href="/rera-complaint-online-state-wise" className="text-blue-700 underline font-semibold">online RERA complaint in your state</Link> (Form M before the Authority for proportionate refund + MCLR+2% interest; Form N before the Adjudicating Officer for compensation) and request appointment of a Court/RERA Local Commissioner Architect if the builder disputes your measurement. Alternatively, file online on e-Jagriti under the Consumer Protection Act, 2019. Once RERA passes an order, enforce it via a <Link href="/rera-refund-order-not-paid-recovery-certificate" className="text-blue-700 underline font-semibold">Section 40 RERA Recovery Certificate</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 4 (Archetype G2 Mandatory Block): Mistakes to Avoid (<ul> with ✕ styling) */}
              <section id="heading-mistakes-avoid" aria-labelledby="heading-mistakes-avoid-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-mistakes-avoid-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Costly Mistakes When Challenging Size Shortfalls
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Builder legal teams rely on predictable buyer measurement errors and procedural missteps to get carpet-area complaints dismissed or reduced. Avoid these five mistakes:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Measuring Only Room-to-Room Floor Area and Forgetting Internal Partition Walls:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 2(k) of RERA, internal partition walls separating rooms inside your flat ARE included in Carpet Area (typically 4% to 6% of the internal area), whereas external perimeter walls and balconies are excluded. If you only sum up clear room floor dimensions without adding the footprint of internal partition walls, the builder&apos;s counsel will discredit your measurement in RERA. Always have a licensed architect compute both net room floor area and internal partition wall thickness separately.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Calculating Your Shortfall Rate Only on &ldquo;Base Price&rdquo; While Ignoring PLC, Floor Rise &amp; Bundled Charges:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Builders often try to calculate a proportionate refund on the bare &ldquo;Basic Selling Price (BSP)&rdquo; while excluding Preferential Location Charges (PLC), floor-rise charges, and EDC/IDC that were billed per square foot. Under Clause 1.7 of the Model Agreement for Sale, the <em>total price payable for the carpet area</em> must be recalculated proportionately—including all per-sq.-ft. linked charges and GST.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Demolishing or Altering Internal Partition Walls During Interior Work Before Official Inspection:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        If you discover a carpet area shortfall after taking possession, do <strong>not</strong> knock down any internal kitchen or bedroom walls for interior remodelling before serving your legal notice and getting a certified Architect Survey (with timestamped photographs and video). Once you alter internal walls, the builder will argue in court that the original as-built dimensions can no longer be verified.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Accepting a One-Time Maintenance Waiver Instead of Principal Refund + MCLR + 2% Interest:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When confronted with an architect&apos;s report proving a 60–90 sq. ft. shortfall worth ₹6 lakh–₹12 lakh, builders frequently offer to &ldquo;waive 6 months of society maintenance charges&rdquo; worth ₹30,000 in exchange for a full-and-final settlement sign-off. Never trade away a statutory capital refund + 10.95% annual interest for a token maintenance credit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Letting the 2-Year Consumer Court or 5-Year RERA Section 14(3) Limitation Window Expire:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Verbal assurances by the builder&apos;s CRM team do not pause statutory limitation periods. Under Section 69 of the Consumer Protection Act, 2019, a consumer complaint must be filed within 2 years of the cause of action, and under Section 14(3) of RERA, the promoter&apos;s defect and obligation liability runs for 5 years from possession handover. Serve a formal Advocate Demand Notice immediately upon discovering the shortfall.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Landmark Court & RERA Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court &amp; NCDRC Rulings on Area Shortfall
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Precedents
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
                              Judicial Relief / Legal Standard
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All State RERA &amp; Consumer Benches
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your flat:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Resolution Rail Flowchart (IRCTC style) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Resolution Flow: Laser Measurement to Bank Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How homebuyers convert an architect&apos;s carpet-area measurement report into a direct possession-demand credit or an enforceable RERA refund order:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Architect Laser Survey</h3>
                    <p className="text-xs text-slate-200 mt-1">Measure room-by-room net area + internal walls under RERA Sec 2(k).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">PDI Protest &amp; Claim Math</h3>
                    <p className="text-xs text-amber-900 mt-1">Endorse possession under protest; compute shortfall + SBI MCLR + 2% interest.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve Promoter &amp; Directors citing Clause 1.7 BBA, Sec 12 &amp; Sec 14 RERA.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">RERA Form M/N or e-Jagriti</h3>
                    <p className="text-xs text-slate-700 mt-1">File online complaint; request joint verification if builder disputes report.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">45-Day Refund or Sec 40 RC</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct bank refund / final demand adjustment or Collector attachment.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Carpet Area Shortfall Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 860 270"
                    width="860"
                    height="270"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[720px]"
                    role="img"
                    aria-label="RERA Carpet Area Shortfall Measurement and Proportionate Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="carpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="carpAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="carpSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="145" height="95" rx="10" fill="url(#carpGrad)" />
                    <text x="82" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="82" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Laser Survey</text>
                    <text x="82" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">COA Architect Report</text>
                    <text x="82" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">RERA Sec 2(k) Split</text>

                    <path d="M 155 67 L 182 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="182" y="20" width="145" height="95" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="254" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="254" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Protest &amp; Math</text>
                    <text x="254" y="82" fill="#78350F" fontSize="10" textAnchor="middle">PDI Under Protest</text>
                    <text x="254" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Shortfall + MCLR+2%</text>

                    <path d="M 327 67 L 354 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="354" y="20" width="145" height="95" rx="10" fill="url(#carpAlert)" />
                    <text x="426" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="426" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="426" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="426" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Clause 1.7 + Sec 12/14</text>

                    <path d="M 499 67 L 526 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="526" y="20" width="145" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="598" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="598" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">RERA / e-Jagriti</text>
                    <text x="598" y="82" fill="#334155" fontSize="10" textAnchor="middle">Form M/N Petition</text>
                    <text x="598" y="98" fill="#475569" fontSize="9" textAnchor="middle">Joint Site Survey Order</text>

                    <path d="M 671 67 L 698 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="698" y="20" width="150" height="95" rx="10" fill="url(#carpSucc)" />
                    <text x="773" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="773" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Pro-Rata Refund</text>
                    <text x="773" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Price + Interest Credit</text>
                    <text x="773" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Sec 40 Collector RC</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="140" width="838" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="164" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY BENCHMARKS FOR CARPET AREA SHORTFALL CLAIMS UNDER RERA &amp; CPA 2019:
                    </text>
                    <text x="25" y="186" fill="#475569" fontSize="10">
                      • Proportionate Refund Formula: (Total Agreed Consideration ÷ Promised Carpet Area) × Missing Sq. Ft. + SBI MCLR + 2% Interest
                    </text>
                    <text x="25" y="204" fill="#475569" fontSize="10">
                      • Statutory Refund Timeline: Within 45 Days of confirmation/demand under Model Agreement for Sale Clause 1.7
                    </text>
                    <text x="25" y="222" fill="#475569" fontSize="10">
                      • Post-Handover Defect &amp; Obligation Window: 5 Years from possession handover date under Section 14(3) of RERA, 2016
                    </text>
                    <text x="25" y="240" fill="#475569" fontSize="10">
                      • Material Alteration Exit Option: 100% full refund + interest if layout changed without prior written consent (Sec 12 &amp; Sec 14(2))
                    </text>
                  </svg>
                  <figcaption className="text-[11px] text-slate-500 mt-2">
                    Figure: 5-stage statutory pathway from independent architect laser measurement under RERA Section 2(k) to proportionate refund and interest recovery.
                  </figcaption>
                </figure>
              </section>

              {/* Section 7: Interactive Builder Defence & Measurement Solver Tabs */}
              <section id="heading-builder-defences" aria-labelledby="heading-builder-defences-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-builder-defences-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Super vs Carpet Area: Builder Excuses &amp; Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Any Common Builder Defence Below to See Why It Fails Under RERA Section 2(k) and Supreme Court Law
                  </p>
                </div>

                <CarpetAreaProblemTabs />
              </section>

              {/* Section 8: Worked Case Study With Concrete Math */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹9.36L for Carpet Area Shortfall
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Worked Example &amp; Refund Math
                    </span>
                    <span className="text-xs text-slate-400">Sector 65, Gurugram • 3BHK Apartment (Promised 1,250 Sq. Ft. Carpet Area)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Booking &amp; Agreement:</strong> In January 2023, Siddharth and Meera Kapoor booked a 3BHK apartment in Sector 65, Gurugram. Their registered Builder-Buyer Agreement (BBA) specified a <strong>RERA Carpet Area of 1,250 sq. ft.</strong> (plus 110 sq. ft. exclusive balcony area) for a total base consideration of <strong>₹1,50,00,000 (₹1.50 Crore)</strong>—establishing an effective rate of <strong>₹12,000 per sq. ft. of carpet area</strong>. By October 2026, they had paid 95% of the price (₹1,42,50,000).
                    </p>
                    <p>
                      <strong>The PDI Discovery:</strong> In October 2026, the developer issued a Possession Intimation Letter demanding the final 5% installment (₹7,50,000) plus stamp duty. During the Pre-Delivery Inspection (PDI), Siddharth engaged a COA-licensed architect who conducted a room-by-room Bosch laser measurement strictly per Section 2(k) of RERA. The architect certified that the net usable floor area plus internal partition walls measured only <strong>1,172 sq. ft.</strong>—a <strong>shortfall of 78 sq. ft. (6.24% smaller than promised)</strong> because the builder had quietly included external shaft walls and balcony projections inside the carpet area figure.
                    </p>

                    {/* Worked Calculation Breakdown Table */}
                    <div className="w-full overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/80 my-3">
                      <table className="w-full min-w-[520px] text-left text-xs text-slate-200">
                        <caption className="sr-only">Worked Proportionate Refund Calculation for 78 Sq. Ft. Carpet Area Shortfall</caption>
                        <thead className="bg-slate-800/90 text-slate-100 font-bold border-b border-slate-700">
                          <tr>
                            <th scope="col" className="py-2.5 px-3.5">Calculation Component</th>
                            <th scope="col" className="py-2.5 px-3.5">Formula / Basis</th>
                            <th scope="col" className="py-2.5 px-3.5 text-right">Amount / Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          <tr>
                            <th scope="row" className="py-2.5 px-3.5 font-semibold text-white">Promised vs. Actual RERA Carpet Area</th>
                            <td className="py-2.5 px-3.5">1,250 sq. ft. (BBA) − 1,172 sq. ft. (Architect Laser Survey)</td>
                            <td className="py-2.5 px-3.5 text-right font-bold text-red-400">78 Sq. Ft. Shortfall (6.24%)</td>
                          </tr>
                          <tr>
                            <th scope="row" className="py-2.5 px-3.5 font-semibold text-white">Effective Per-Sq.-Ft. Carpet Rate</th>
                            <td className="py-2.5 px-3.5">₹1,50,00,000 Total Base Price ÷ 1,250 sq. ft.</td>
                            <td className="py-2.5 px-3.5 text-right font-semibold">₹12,000 / sq. ft.</td>
                          </tr>
                          <tr>
                            <th scope="row" className="py-2.5 px-3.5 font-semibold text-white">Proportionate Principal Refund Due</th>
                            <td className="py-2.5 px-3.5">78 sq. ft. × ₹12,000 per sq. ft. (Clause 1.7 Model BBA)</td>
                            <td className="py-2.5 px-3.5 text-right font-bold text-emerald-400">₹9,36,000</td>
                          </tr>
                          <tr>
                            <th scope="row" className="py-2.5 px-3.5 font-semibold text-white">5% GST Refund / Credit on Shortfall</th>
                            <td className="py-2.5 px-3.5">5% GST charged on ₹9,36,000 overbilled consideration</td>
                            <td className="py-2.5 px-3.5 text-right font-semibold text-emerald-300">₹46,800</td>
                          </tr>
                          <tr>
                            <th scope="row" className="py-2.5 px-3.5 font-semibold text-white">Statutory Interest (SBI MCLR + 2% = 10.95% p.a.)</th>
                            <td className="py-2.5 px-3.5">Simple interest on ₹9,36,000 for 3.75 years (45 months)</td>
                            <td className="py-2.5 px-3.5 text-right font-bold text-amber-400">₹3,84,120</td>
                          </tr>
                          <tr className="bg-slate-800/60">
                            <th scope="row" className="py-2.5 px-3.5 font-black text-white">Total Statutory Claim (Principal + GST + Interest)</th>
                            <td className="py-2.5 px-3.5 font-semibold text-slate-300">Enforceable under RERA Sec 14/18 &amp; Clause 1.7</td>
                            <td className="py-2.5 px-3.5 text-right font-black text-emerald-400 text-sm">₹13,66,920</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <strong>The Statutory Action:</strong> When the builder&apos;s CRM refused to adjust the shortfall citing a &ldquo;±5% tolerance clause&rdquo;, Siddharth engaged LegalRecovery.in. An advocate served a 15-day statutory demand notice to the developer&apos;s Managing Director and Chief Architect, attaching the COA Architect Certificate and invoking Clause 1.7 of the Haryana RERA Model Agreement for Sale, Section 2(k), and Section 14 of RERA.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome (Day 14 Settlement):</strong>
                      Faced with an undeniable Section 2(k) architect survey and the prospect of a project-wide RERA audit affecting 240 identical 3BHK units, the builder&apos;s legal department convened a joint laser re-verification on Day 9. On Day 14, the builder issued a Revised Final Possession Statement completely setting off the pending ₹7,50,000 final installment, crediting ₹46,800 GST, and transferring the balance ₹5,70,120 directly to Siddharth&apos;s bank account prior to Conveyance Deed registration.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Area Shortfall
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital brochures, CAD measurement files, and email logs are fully admissible. Assemble these 6 records before dispatching your legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">COA-Licensed Architect Certificate &amp; CAD Plan:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed certificate with room-by-room laser measurements and internal partition wall area strictly per RERA Section 2(k) and IS 3861:2002.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Registered Builder-Buyer Agreement (BBA):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Highlighting the promised RERA Carpet Area, exclusive balcony area, total price schedule, and Clause 1.7 refund terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Marketing Brochure, Price Sheet &amp; Allotment Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving any pre-booking representation of Carpet Area vs. Super Built-Up Area under Section 12 of RERA.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">State RERA Portal Project &amp; Apartment Extract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Downloaded PDF of the builder&apos;s sanctioned floor plan and registered apartment area table from the official State RERA website.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Payment Receipts &amp; Final Possession Demand Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing the exact dates of each payment installment (for MCLR + 2% interest calculation) and any inflated final area demand.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">PDI Protest Sheet / Email &amp; Timestamped Photos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Photos of the laser meter display against walls and the written protest email sent to the builder&apos;s CRM at handover.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Honest Scope */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-emerald-200 p-5 shadow-xs space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                      ✓ What We Do for Homebuyers
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Verify your Builder-Buyer Agreement (BBA) and architect survey against RERA Section 2(k) and Clause 1.7 rules.</li>
                      <li>Compute your exact proportionate principal refund, GST/Stamp Duty excess, and SBI MCLR + 2% interest schedule.</li>
                      <li>Draft and dispatch a formal 15-day Advocate Legal Demand Notice to the promoter and active directors via Registered Speed Post + Email/WhatsApp for a flat <strong>₹{basePrice}</strong>.</li>
                      <li>Prepare complaint pleadings for State RERA (Form M / Form N) or e-Jagriti Consumer Commission if the builder fails to settle within 15 days.</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl border border-rose-200 p-5 shadow-xs space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 block">
                      ✕ What We Cannot Do (Honest Boundaries)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                      <li>We are a legal notice and recovery platform, not a physical architectural surveying agency—you must arrange a local licensed architect or civil engineer to physically measure the flat with a laser meter.</li>
                      <li>If your BBA explicitly disclosed the exact RERA Carpet Area (say, 980 sq. ft.) and the delivered flat actually measures 980 sq. ft. per Section 2(k), you cannot claim a shortfall merely because you verbally assumed the 1,350 sq. ft. Super Area was usable room space—unless the brochure misrepresented the carpet area under Section 12.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Carpet Area Shortfall, RERA Rules &amp; Refunds
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Anchored in RERA Section 2(k), Model Agreement Clause 1.7 &amp; Supreme Court Judgments
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

              {/* Section 12: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary RERA Rules, BIS Standards &amp; Court References
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
                  Statutory verification status: All RERA Section 2(k), Section 12, Section 14, and Model Agreement for Sale Clause 1.7 provisions verified against India Code, Ministry of Housing and Urban Affairs (MoHUA) rules, and Supreme Court judgments as of <time dateTime="2026-11-04">November 2026</time>.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Carpet Area Shortfall Legal Notice to the Builder
                </h2>
                <CarpetAreaNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder, RERA &amp; Property Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Refund Hub →
                  </Link>
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RERA Refund Interest Calculator (SBI MCLR + 2%) →
                  </Link>
                  <Link
                    href="/rera-refund-order-not-paid-recovery-certificate"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Enforce Unpaid RERA Order (Sec 40 Recovery Certificate) →
                  </Link>
                  <Link
                    href="/rera-complaint-online-state-wise"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    State-Wise Online RERA Complaint Guide →
                  </Link>
                  <Link
                    href="/subvention-scheme-pre-emi-builder-default"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subvention Scheme Pre-EMI Builder Default →
                  </Link>
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Delayed Possession Refund Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/carpet-area-shortfall-refund" cluster="property" />
      </div>
    </>
  );
}
