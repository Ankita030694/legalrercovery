import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ElectronicsDealerCreditTableOfContents from "./ElectronicsDealerCreditTableOfContents";
import ElectronicsDealerCreditScenarioTabs from "./ElectronicsDealerCreditScenarioTabs";
import ElectronicsDealerCreditCTA from "./ElectronicsDealerCreditCTA";

export const revalidate = 86400;

const PAGE_URL = "/consumer-durables-electronics-mobile-dealer-floor-credit-recovery";
const EXACT_H1 =
  "Post-Diwali / Summer Season Credit Default by Multi-Brand Electronics & Mobile Dealers: IMEI/Serial-Number Tracking & Rapid Recovery";
const META_TITLE = "Consumer Electronics & Mobile Dealer Credit Recovery";
const META_DESCRIPTION =
  "Recover unpaid stock credit from mobile, TV & appliance dealers. Defeat oral price-drop claims using IMEI tracking, CPC Order 37 & Order 38 Rule 5.";

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
        alt: formatAltText("Consumer Electronics and Mobile Dealer Floor Credit Recovery Playbook"),
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
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure & Order XXXVIII Rule 5 — Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 20, 118, 138, 139 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records & Device Activation Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Sale of Goods Act, 1930 (Sections 41 & 42 — Buyer's Right to Examine & Acceptance of Delivered Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2388",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c)(i), 12A Mandatory Pre-Institution Mediation & Urgent Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 31 Tax Invoices, Section 34 Credit Notes & E-Way Bill Verification Rules)",
    url: "https://www.indiacode.nic.in/handle/123456789/12124",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Attachment Before Judgment Under Order XXXVIII Rule 5",
    parties: "Raman Tech. & Process Engg. Co. & Anr. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    date: "Judgment Dated 20 November 2007",
    facts:
      "A commercial supplier sought attachment before judgment under Order XXXVIII Rule 5 CPC against a trading partner on apprehensions of insolvency. The debtor challenged the drastic nature of the interim order, claiming it crippled legitimate business operations.",
    holding:
      "The Supreme Court held that while Order XXXVIII Rule 5 is a drastic power not to be exercised mechanically, it is the primary statutory shield for a bona fide creditor where there is clear evidence that the defendant is attempting to remove, alienate, or dispose of inventory with intent to obstruct or delay execution of any potential decree. For electronics distributors, demonstrating that a multi-brand retailer is liquidating floor stock below cost or diverting display devices to sister showrooms establishes an unassailable case for emergency attachment before judgment.",
    amount: "Doctrine of Pre-Decree Asset Preservation — Safeguarding Creditor Realization",
    takeaway:
      "When an electronics dealer begins surrendering leases, discounting display units for untracked cash, or shifting stock to sister firms, distributors can obtain urgent attachment before judgment under Order 38 Rule 5.",
  },
  {
    title: "Supreme Court on Preventing Fraudulent Liquidation of Commercial Stock",
    parties: "Rajendran & Ors. v. Shankar Sundaram & Ors.",
    citation: "(2008) 2 SCC 724, Supreme Court of India",
    date: "Judgment Dated 21 January 2008",
    facts:
      "The plaintiff established prima facie commercial liability and showed that the defendant was actively negotiating the sale and disposal of core trading assets to third parties during pre-trial proceedings.",
    holding:
      "The Supreme Court affirmed an order directing the defendant to furnish substantial security, failing which attachment of assets followed automatically. The court affirmed that civil courts possess inherent statutory jurisdiction to protect creditors when a debtor seeks to frustrate commercial recovery through rapid disposal of commercial stock.",
    amount: "Security Furnishing Mandate — Automatic Attachment on Default",
    takeaway:
      "Filing an Order 38 Rule 5 application compels the defaulting showroom owner to either furnish bank guarantees for the distributor's dues or face immediate court seizure of showroom appliances and stock.",
  },
  {
    title: "Supreme Court Test for Summary Judgment Under Order XXXVII CPC",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    date: "Judgment Dated 15 November 2016",
    facts:
      "A commercial creditor filed a summary suit based on authenticated written contracts and financial obligations. The defendant raised moonshine oral assertions and disputed interest computations to seek unconditional leave to defend.",
    holding:
      "The Supreme Court laid down the definitive 4-tier test for Order XXXVII CPC: If the defendant shows no genuine defense or raises frivolous/moonshine defenses (such as unsubstantiated oral promises of discount), the plaintiff is entitled to immediate final judgment. If a plausible but dubious defense is raised, the court must impose conditional leave requiring pre-deposit of up to 100% of the claimed debt in court.",
    amount: "Order XXXVII Pre-Deposit Rule — Elimination of Moonshine Oral Defenses",
    takeaway:
      "Electronics distributors suing on written invoices and signed delivery challans can secure immediate summary decree or force the defaulting dealer to deposit 100% cash in court, rendering oral discount claims fatal to the dealer.",
  },
  {
    title: "Supreme Court on Payee Authority to Complete Signed Cheques Under Section 20",
    parties: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197, Supreme Court of India",
    date: "Judgment Dated 06 February 2019",
    facts:
      "The debtor issued a signed blank cheque as floor security. Upon default, the creditor filled the accrued balance and presented it. The drawer contended that because the particulars were filled by another person, the cheque was void.",
    holding:
      "The Supreme Court held that under Section 20 of the Negotiable Instruments Act, a person handing over a signed blank cheque voluntarily impliedly authorizes the payee to fill the crystallized debt. The statutory presumption under Sections 118 and 139 applies in full force, and differences in ink or handwriting do not vitiate criminal liability under Section 138.",
    amount: "Inchoate Instrument Doctrine Upheld — Full Criminal Enforceability",
    takeaway:
      "Regional distributors holding blank signed security cheques obtained at dealer onboarding can legally fill the exact crystallized ledger sum and prosecute under Section 138 without fear of the 'cheque tampering' defense.",
  },
  {
    title: "Supreme Court Confirms Security Cheques Mature into Enforceable Liabilities",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    date: "Judgment Dated 28 October 2021",
    facts:
      "Cheques were issued explicitly as 'security' at the time of commercial credit allocation. When the debtor defaulted on supply repayments, the creditor deposited the security cheques. The debtor argued Section 138 was inapplicable to security instruments.",
    holding:
      "The Supreme Court authoritatively ruled that security cheques do not remain dead paper. Once the agreed payment date expires and the debt remains unpaid, the security matures into a live, legally enforceable liability. Dishonour of such matured security cheques squarely attracts Section 138 prosecution.",
    amount: "Security Maturation Principle — Overcoming the 'Dormant Security' Defense",
    takeaway:
      "Dealers cannot defend Section 138 by claiming cheques were given as festive security; once invoices cross credit limits, the cheques are enforceable for the exact net ledger balance.",
  },
  {
    title: "Supreme Court on Part-Payment Endorsement Under Section 56 NI Act",
    parties: "Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel",
    citation: "(2022) 10 SCC 597, Supreme Court of India",
    date: "Judgment Dated 11 October 2022",
    facts:
      "A commercial debtor remitted a partial payment against outstanding dues. The creditor nevertheless presented a pre-existing cheque for the entire original gross sum without endorsing the partial credit under Section 56.",
    holding:
      "The Supreme Court held that presenting a cheque for an amount greater than the actual legally enforceable debt on the date of presentation, without recording part-payments under Section 56, invalidates prosecution under Section 138. Creditors must present cheques strictly for the net crystallized balance after adjusting part-payments.",
    amount: "Strict Net-Debt Presentation Mandate — Statutory Part-Credit Rule",
    takeaway:
      "Distributors must reconcile all festive part-remittances and officially approved credit notes, presenting security cheques solely for the exact reconciled net debt to maintain unshakeable Section 138 cases.",
  },
];

export default function ElectronicsDealerCreditRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "FMCG, Durables & Super-Stockists",
      href: "/industries/fmcg-distributors-super-stockist-recovery",
    },
    {
      label: "Electronics & Mobile Dealer Floor Credit Recovery",
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
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Overdue Floor Credit from Multi-Brand Electronics & Mobile Dealers",
    description:
      "A step-by-step statutory and operational protocol for regional consumer electronics distributors, AC super-stockists, and mobile OEMs to recover unpaid inventory credit, defeat oral price-drop claims, and execute stock attachment before judgment.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Down IMEI & Serial-Number Activation Audit Trail",
        text: "Extract OEM activation telemetry, carrier network logs, and billing serial logs to prove that invoiced devices were activated and sold to retail end-consumers, defeating bogus RMA, unsold inventory, or non-delivery defenses under Bharatiya Sakshya Adhiniyam, 2023 Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Formal Written-Credit-Note Rebuttal Demand Notice",
        text: "Issue a fact-verified legal notice invoking the parol evidence rule under BSA 2023 Sections 94–95, rejecting unauthenticated oral price-drop or sell-out support claims promised by former sales executives and demanding certified ledger discharge within 7 to 15 days.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Complete & Present Onboarding Security Cheques Under Section 20 NI Act",
        text: "Following the Supreme Court principles in Bir Singh and Sripati Singh, calculate the exact net crystallized debt, endorse any part-payments under Section 56, and deposit the signed security cheque. Upon dishonour, issue statutory 30-day notice under Section 138(b).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Initiate Urgent Pre-Institution Mediation or Move Order XXXVIII Rule 5 Stock Attachment",
        text: "Where the showroom owner is liquidating display appliances or shuttering shop, file an urgent application under Order XXXVIII Rule 5 of CPC for attachment before judgment and Court Commissioner inspection, bypassing standard mediation under Section 12A of the Commercial Courts Act.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File Summary Suit Under Order XXXVII CPC for Liquidated Debt",
        text: "Institute a commercial summary suit on written GST tax invoices and signed delivery challans. Under IDBI Trusteeship v. Hubtown, secure an unconditional decree or compel the debtor to deposit 100% of the disputed sum into court registry to obtain leave to defend.",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can an electronics dealer withhold lakhs citing oral 'price-drop support' promised by our former sales manager?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under Sections 91 and 92 of the Indian Evidence Act (now Sections 94 and 95 of Bharatiya Sakshya Adhiniyam, 2023), oral agreements cannot contradict, alter, or override the written terms of commercial GST Tax Invoices and signed distributorship agreements. Unless the dealer produces an official ERP-generated Credit Note authorized by company finance, such oral assertions are treated by commercial courts as frivolous 'moonshine' defenses under IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
        },
      },
      {
        "@type": "Question",
        name: "How does IMEI and serial number tracking defeat an electronics dealer's false defense?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Electronics distribution generates digital telemetry. When a dealer claims handsets or smart appliances are 'unsold, defective, or never received,' the distributor matches the exact IMEI and serial numbers billed on the GST e-way bill with OEM server activation pings and telecom operator network registrations. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, certified electronic server logs establish that the dealer sold the inventory and collected cash from retail consumers, permanently destroying defenses of non-delivery or unsold stock.",
        },
      },
      {
        "@type": "Question",
        name: "What immediate legal action can a distributor take if a showroom owner starts liquidating display stock?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Distributors can immediately file an urgent application under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment) before the Commercial Court. By showing prima facie debt and evidence of imminent disposal (e.g., spot inspection reports, steep cash discounts, or transfer of goods to sister outlets), the court can attach the showroom's floor inventory, appoint a Court Commissioner to take physical custody of stock, or direct the dealer to deposit bank guarantees under the Supreme Court ruling in Raman Tech. v. Solanki Traders.",
        },
      },
      {
        "@type": "Question",
        name: "Can we legally fill and present a blank signed security cheque collected from the dealer at onboarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the landmark Supreme Court judgments in Bir Singh v. Mukesh Kumar (2019) and Sripati Singh v. State of Jharkhand (2021), a creditor has express statutory authority to fill in the date and exact crystallized ledger sum on a signed inchoate instrument. However, to avoid dismissal under Dashrathbhai Patel (2022), the cheque must be presented strictly for the net crystallized balance after adjusting all part-payments and legitimate credit notes.",
        },
      },
      {
        "@type": "Question",
        name: "Are mobile handsets and consumer electronics covered under the MSMED Act for delayed payment interest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, provided the regional distributor or vendor is registered as a Micro or Small Enterprise under Udyam and supplied goods or value-added services. Under Section 15 and 16 of the MSMED Act, 2006, the buyer must make payment within 45 days, failing which compound interest at three times the RBI Bank Rate becomes statutorily mandatory. Traders registered under Udyam can also leverage Section 43B(h) tax disallowance notifications against defaulting corporate dealers.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a dealer attempts to dump obsolete unsold festive stock back at our warehouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Sections 41 and 42 of the Sale of Goods Act, 1930, when goods are delivered pursuant to purchase orders and retained beyond the contractually stipulated inspection window (typically 7–15 days), the buyer is deemed to have accepted the goods. Distributors are under no legal obligation to accept unilateral returns of obsolete post-festive inventory unless explicitly agreed under a written Sale-or-Return (SOR) contract. Unauthorized returns should be rejected at the warehouse gate with a formal statutory rebuttal notice.",
        },
      },
      {
        "@type": "Question",
        name: "How does LegalRecovery assist regional electronics distributors managing 50 to 500+ dealer accounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LegalRecovery provides an automated institutional recovery desk. Distributors upload ERP/Tally ledger exports and IMEI billing schedules via CSV. The platform reconciles outstanding balances, disallows unsubstantiated oral discount claims, dispatches fact-verified legal notices via Speed Post RPAD and email/WhatsApp with BSA Section 63 certificates, and coordinates nationwide Order XXXVII summary suits and Section 138 NI Act criminal proceedings across district commercial courts.",
        },
      },
    ],
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
        name: "FMCG, Durables & Super-Stockists",
        item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Electronics & Mobile Dealer Floor Credit Recovery",
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
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Operational Playbook &bull; IND-10</span>
            <span>&bull;</span>
            <span>Order XXXVII CPC &bull; Order XXXVIII Rule 5 &bull; NI Act s.138</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words) with Parent Hub link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Executive Creditor Protocol
            </span>
            Regional electronics, smartphone, and appliance distributors operating under thin 1.5–3% distribution margins face severe working capital paralysis when multi-brand retail dealers default post-festivities. Under our institutional recovery framework at{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              FMCG, Consumer Durables &amp; Super-Stockist Debt Recovery
            </Link>
            , distributors deploy IMEI telemetry, enforce Order XXXVIII Rule 5 emergency attachment before showroom liquidation, and prosecute crystallized ledger debts under Order XXXVII CPC and Section 138 NI Act.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="p-3 rounded-xl bg-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                Typical Margin Shock
              </span>
              <p className="text-lg sm:text-xl font-black text-red-400">1.5% &ndash; 3.0%</p>
              <span className="text-[10px] text-slate-400">Wiped out by single default</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                Stock Attachment
              </span>
              <p className="text-lg sm:text-xl font-black text-amber-400">Order 38 R.5</p>
              <span className="text-[10px] text-slate-400">Pre-judgment showroom freeze</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                IMEI Telemetry
              </span>
              <p className="text-lg sm:text-xl font-black text-emerald-400">BSA s.63 Proof</p>
              <span className="text-[10px] text-slate-400">Defeats false unsold claim</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                Interim Cash Payout
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-100">Up to 20% Cash</p>
              <span className="text-[10px] text-slate-400">NI Act Section 143A deposit</span>
            </div>
          </div>

          {/* Hero Dual CTA */}
          <ElectronicsDealerCreditCTA />
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <ElectronicsDealerCreditTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Seasonal Credit Trap */}
            <section
              id="heading-seasonal-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Seasonal Floor-Credit Trap in Consumer Electronics &amp; Mobile Retail
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The Indian consumer durables, IT hardware, split air-conditioner, and smartphone distribution industry functions on a razor-thin gross distribution margin oscillating between <strong>1.5% and 3.0%</strong>. To hit quarterly sales targets mandated by global OEMs and domestic conglomerates, regional distributors are compelled to extend massive, unsecured 30- to 60-day floor credit to multi-brand showrooms, regional retail chains, and standalone mobile shops in the lead-up to high-velocity festive seasons (Diwali, Dhanteras, Navratri, Republic Day sales, and the peak April&ndash;June summer AC cycle).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                During these pre-season billing sprints, distributors pump ₹25 Lakh to ₹3 Crore of high-value inventory&mdash;consisting of 5G smartphones, 4K/OLED smart TVs, inverter split air conditioners, high-end laptops, and domestic appliances&mdash;into dealer showrooms against post-dated cheques (PDCs) or blank signed security cheques. However, once the festive surge subsides, distributors routinely encounter a coordinated wave of commercial defaults characterized by three standard evasive tactics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    The Oral Discount Defense
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dealers claim that the brand&apos;s Area Sales Manager (ASM) or Territory Sales Manager (TSM)&mdash;who has conveniently resigned or transferred to another territory&mdash;promised verbal &ldquo;sell-out support,&rdquo; &ldquo;price-drop protection,&rdquo; or &ldquo;display compensation&rdquo; of ₹1,000 to ₹5,000 per unit to offset sluggish sales.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Unilateral RMA / Return Dumping
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Faced with newly launched successor models that cause inventory obsolescence, dealers attempt to dump unsold display pieces, open-box items, or cosmetic return units back onto the distributor&apos;s warehouse, refusing to clear primary billing invoices.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Showroom Closure &amp; Diversion
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unscrupulous showroom proprietors liquidate display stock at deep cash discounts to retail consumers or divert high-value inventory to untracked grey-market wholesale counters, surrender leased showroom premises, and claim insolvency.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 leading-relaxed">
                <strong>The Creditor Dilemma:</strong> In an industry where a distributor nets ₹30,000 profit on ₹15 Lakh of billed inventory, a single bad debt of ₹15 Lakh completely obliterates the net operating profit generated across ₹5 Crore of successful sales. Waiting for informal sales negotiations or relying on slow civil litigation is fatal. Creditors must immediately shift from amicable follow-ups to statutory enforcement through our{" "}
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="text-[#DC2626] underline font-bold"
                >
                  Distributor &amp; Dealer Dues Recovery Framework
                </Link>
                .
              </div>
            </section>

            {/* SECTION 2: IMEI & Serial Number Tracking */}
            <section
              id="heading-imei-serial-tracking"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IMEI &amp; Serial-Number Electronic Audit Trail Under BSA Section 63
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Unlike unbranded commodities or loose FMCG staples, modern consumer durables and telecommunication hardware carry unique, indelible digital fingerprints: 15-digit International Mobile Equipment Identity (IMEI) numbers for smartphones and cellular devices, and alphanumeric outdoor/indoor unit serial numbers for split air conditioners, smart televisions, and computing devices.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a defaulting dealer attempts to set up a defense alleging &ldquo;short delivery,&rdquo; &ldquo;defective display units,&rdquo; or &ldquo;unsold inventory lying in warehouse,&rdquo; the creditor&apos;s most lethal statutory weapon is the electronic server telemetry maintained by brand OEMs and telecommunications service providers. Under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023</strong> (which replaced Section 65B of the Indian Evidence Act, 1872), electronically generated device logs are fully admissible as substantive documentary evidence.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                  The 4-Point Electronic Evidence Dossier
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <div>
                      <strong className="text-white">ERP Secondary Dispatch Scan:</strong> Primary tax invoices generated through SAP, Oracle, or Tally recorded with barcode/QR scans matching the exact serial/IMEI units loaded onto delivery vehicles.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <div>
                      <strong className="text-white">GST E-Way Bill Physical Acknowledgement:</strong> Matched E-Way Bill and digitally stamped Delivery Challan proving physical delivery at the dealer&apos;s registered showroom address without discrepancy endorsements.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <div>
                      <strong className="text-white">OEM Server First-Activation Ping:</strong> Server records showing the exact date, time, and IP/cell-tower location where the handset was unboxed, SIM-inserted, and registered on Google/Apple/OEM cloud servers.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <div>
                      <strong className="text-white">Consumer Warranty &amp; EMI Registration:</strong> Verification that the retail end-consumer registered the device for brand warranty or executed a paper-finance subvention loan (Bajaj Finance, TVS Credit, HDB Financial Services) through the dealer&apos;s POS portal.
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By serving a formal legal notice containing an annexed <strong>IMEI Activation Schedule</strong>, the creditor legally proves that the dealer has already sold the goods to retail consumers, collected cash or electronic consideration, and deliberately misappropriated funds that legally belong to the distributor. This eliminates any possibility of the dealer obtaining unconditional leave to defend in a summary suit.
              </p>
            </section>

            {/* SECTION 3: SVG Flowchart */}
            <section
              id="heading-multi-track-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Multi-Track Operational Recovery Pipeline for Electronics Distributors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Electronics dealer defaults cannot be handled through linear, sluggish steps. Corporate credit controllers must execute a simultaneous multi-track statutory workflow: freezing physical showroom assets before disposal, presenting signed security instruments, and prosecuting liquidated debts in Commercial Courts.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto pb-4 mb-6">
                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto min-w-[760px] text-slate-800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="800" height="240" rx="16" fill="#F8FAFC" />
                  <rect x="20" y="20" width="160" height="90" rx="10" fill="#1E293B" />
                  <text x="100" y="55" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STAGE 1: AUDIT &amp; LOCK
                  </text>
                  <text x="100" y="75" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    Reconcile Ledger &amp;
                  </text>
                  <text x="100" y="90" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    IMEI Activation Logs
                  </text>

                  <path d="M180 65 L220 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="220,65 212,61 212,69" fill="#DC2626" />

                  <rect x="220" y="20" width="170" height="90" rx="10" fill="#1E293B" />
                  <text x="305" y="55" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STAGE 2: DEMAND NOTICE
                  </text>
                  <text x="305" y="75" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    7-Day Rebuttal Notice
                  </text>
                  <text x="305" y="90" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    Reject Oral Discounts
                  </text>

                  <path d="M390 65 L430 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="430,65 422,61 422,69" fill="#DC2626" />

                  <rect x="430" y="20" width="160" height="90" rx="10" fill="#DC2626" />
                  <text x="510" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STAGE 3: MATURE CHEQUE
                  </text>
                  <text x="510" y="75" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                    Present Under Sec 20
                  </text>
                  <text x="510" y="90" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                    Bir Singh SC Protocol
                  </text>

                  <path d="M590 65 L630 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="630,65 622,61 622,69" fill="#DC2626" />

                  <rect x="630" y="20" width="150" height="90" rx="10" fill="#0F172A" />
                  <text x="705" y="55" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STAGE 4: DUAL ACTION
                  </text>
                  <text x="705" y="75" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    NI s.138 + s.143A &amp;
                  </text>
                  <text x="705" y="90" fill="#94A3B8" fontSize="10" textAnchor="middle">
                    Order 38 Rule 5 Motion
                  </text>

                  {/* Lower Row: Escalation Paths */}
                  <rect x="120" y="145" width="260" height="75" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="250" y="172" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Branch A: Liquidating Display Stock?
                  </text>
                  <text x="250" y="192" fill="#64748B" fontSize="10" textAnchor="middle">
                    Emergency Order 38 R.5 Attachment Before Judgment
                  </text>
                  <text x="250" y="207" fill="#64748B" fontSize="10" textAnchor="middle">
                    Court Commissioner showroom stock seizure
                  </text>

                  <rect x="420" y="145" width="260" height="75" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="550" y="172" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Branch B: Signed Invoices &amp; Inchoate Cheque
                  </text>
                  <text x="550" y="192" fill="#64748B" fontSize="10" textAnchor="middle">
                    Order XXXVII Summary Suit (Commercial Court)
                  </text>
                  <text x="550" y="207" fill="#64748B" fontSize="10" textAnchor="middle">
                    Criminal Section 138 with 20% interim deposit
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 1 &bull; Audit &amp; Lock
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Reconcile Ledger &amp; IMEI Telemetry</p>
                  <p className="text-xs text-slate-300">
                    Match GST tax invoices with OEM device activation pings to eliminate bogus short-delivery or unsold stock claims.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800 text-white">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 2 &bull; Statutory Notice
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Written-Credit-Note Rebuttal Notice</p>
                  <p className="text-xs text-slate-300">
                    Serve 7-day notice rejecting verbal ASM commitments under BSA 2023 Sections 94–95 and crystallizing net enforceable debt.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#DC2626] text-white">
                  <span className="text-[10px] font-bold text-red-100 uppercase tracking-widest block mb-1">
                    Stage 3 &bull; Mature Security Instrument
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Section 20 NI Act Cheque Deposit</p>
                  <p className="text-xs text-red-100">
                    Fill the exact net balance under Bir Singh and Sripati Singh authority; trigger 30-day statutory Section 138 clock.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                    Stage 4 &bull; Commercial Enforcement
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Order 38 Rule 5 + Order 37 Suit</p>
                  <p className="text-xs text-slate-300">
                    Move emergency stock attachment to freeze showroom display units and file commercial summary suit for 100% pre-deposit.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Statutory Matrix Table */}
            <section
              id="heading-statutory-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: Comparing Creditor Legal Remedies
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                To maximize financial recovery before the retail dealer dissipates festive proceeds, corporate finance heads must deploy the appropriate statutory vehicle based on asset risk, debtor posture, and documentation strength:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Statutory Forum / Act</th>
                      <th className="py-3.5 px-4 font-bold">Pecuniary Floor / Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Interim Relief / Asset Freeze</th>
                      <th className="py-3.5 px-4 font-bold">Timeline to Relief</th>
                      <th className="py-3.5 px-4 font-bold">Debtor Defense Pre-Emption</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Order XXXVIII Rule 5 CPC
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Attachment Before Judgment
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">Commercial Court pecuniary jurisdiction (₹3 Lakh+)</td>
                      <td className="py-3 px-4 font-semibold text-emerald-700">
                        Immediate Showroom Seizure or Bank Guarantee Mandate
                      </td>
                      <td className="py-3 px-4 text-slate-700">7 to 21 Days (Emergency Motion)</td>
                      <td className="py-3 px-4 text-slate-700">
                        Requires showing intent to remove stock outside jurisdiction
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Order XXXVII CPC
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Summary Recovery Suit
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">Liquidated debt based on written contract/invoices</td>
                      <td className="py-3 px-4 text-slate-700">
                        Conditional leave to defend requiring 100% pre-deposit
                      </td>
                      <td className="py-3 px-4 text-slate-700">6 to 12 Months</td>
                      <td className="py-3 px-4 text-slate-700">
                        Oral discount claims treated as moonshine under IDBI Trusteeship
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 138 NI Act
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Criminal Cheque Dishonour
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Bounced security cheque / PDC of any amount
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-700">
                        Up to 20% Interim Cash Compensation (Section 143A)
                      </td>
                      <td className="py-3 px-4 text-slate-700">Summons in 60&ndash;90 Days</td>
                      <td className="py-3 px-4 text-slate-700">
                        Section 139 statutory presumption; Bir Singh covers Sec 20 filling
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        MSMED Act Section 18
                        <span className="block text-[10px] text-slate-500 font-normal">
                          MSEFC Statutory Arbitration
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Udyam-registered distributor / supplier
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Mandatory 75% pre-deposit by buyer under Section 19 to challenge award
                      </td>
                      <td className="py-3 px-4 text-slate-700">90 to 180 Days</td>
                      <td className="py-3 px-4 text-slate-700">
                        Statutory compound interest at 3x RBI Bank Rate overrides contracts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Commercial Failure Scenarios Component */}
            <section
              id="heading-commercial-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Tactical Dealer Failure Modes &amp; Operational Countermeasures
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Explore the four most common operational scenarios encountered by electronics, mobile handset, and appliance distributors following Diwali and summer billing cycles. Select each tab to examine the statutory trap, creditor counter-strategy, and mandatory notice clauses:
              </p>

              <ElectronicsDealerCreditScenarioTabs />
            </section>

            {/* SECTION 6: Order 38 Rule 5 Deep Dive */}
            <section
              id="heading-attachment-before-judgment"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Order XXXVIII Rule 5 CPC: Urgent Showroom Display Stock Attachment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The most dangerous period for an electronics distributor occurs between 30 and 60 days following a peak sales festival. Defaulting dealers who have over-leveraged their retail operations often realize that cash sales cannot service their accumulated distributor payables, GST tax liabilities, and bank overdrafts. At this juncture, retail proprietors frequently attempt to salvage personal wealth by surreptitiously liquidating floor inventory at steep discounts to walk-in customers or transferring high-ticket OLED panels, laptops, and flagship smartphones to unmonitored sister firms.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under ordinary civil litigation, filing a suit takes months, by which time the showroom is shuttered, the lease is terminated, and the debtor has zero attachable assets. To pre-empt this catastrophic loss, Order XXXVIII Rule 5 of the Code of Civil Procedure provides an emergency mechanism: <strong>Attachment Before Judgment</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                  Satisfying the Strict Supreme Court Test in Raman Tech v. Solanki Traders
                </p>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed mb-3">
                  Under the Supreme Court ruling in <em>Raman Tech. &amp; Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302</em>, attachment before judgment cannot be granted merely because the creditor has a valid claim. The creditor must produce credible, prima facie material demonstrating that the defendant is about to dispose of or remove property from the court&apos;s jurisdiction with intent to obstruct execution.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-amber-950 font-medium">
                  <p>&bull; <strong>Spot Verification Reports:</strong> Field executive inspection logs showing showroom shelves empty of secondary stock while primary invoices remain unpaid.</p>
                  <p>&bull; <strong>Grey Market Advertisements:</strong> Screenshots of WhatsApp broadcast groups, Instagram flash sales, or unauthorized e-commerce listings where the dealer is selling billed units below dealer price for cash.</p>
                  <p>&bull; <strong>Surrender of Commercial Tenancy:</strong> Communications with the showroom mall management or commercial landlord revealing the dealer has served notice to terminate the shop lease.</p>
                  <p>&bull; <strong>Dishonoured Security Cheques:</strong> Banker&apos;s return memos proving active evasion of contractual payment obligations.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When these evidentiary factors are presented before the Commercial Court alongside the plaint, the court issues a mandatory order under Order XXXVIII Rule 5(1) directing the dealer to furnish security in the sum of the debt within 48 to 72 hours, failing which a Court Commissioner is immediately dispatched to seize and seal the showroom stock. In 85% of cases, the mere threat of court seal forces immediate settlement.
              </p>
            </section>

            {/* SECTION 7: Financial Reconciliation Ledger */}
            <section
              id="heading-financial-reconciliation-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Commercial Financial Reconciliation Ledger &amp; 18% Interest Computation
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A fatal error made by regional distributor credit teams is presenting legal demands for the &ldquo;gross billed amount&rdquo; without methodically accounting for legitimate scheme credits, part-payments, and approved transit damage credit notes. Under the Supreme Court ruling in <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em>, presenting a claim or security cheque for an unadjusted gross sum invalidates Section 138 prosecution.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The worked reconciliation ledger below demonstrates how corporate distributors crystallize legally enforceable debt, disallow bogus oral price-drop claims, and compute commercial interest under the Interest Act, 1978 and Section 16 of the MSMED Act:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Ledger Component &amp; Transaction Details</th>
                      <th className="py-3.5 px-4 font-bold">Billed / Claimed Amount</th>
                      <th className="py-3.5 px-4 font-bold">Statutory Verification Status</th>
                      <th className="py-3.5 px-4 font-bold text-right">Net Crystallized Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        Pre-Diwali Primary Invoices (12 Handset &amp; TV Batches)
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Invoices BIL-2026-8801 to 8812 &bull; With Signed E-Way Bills
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700 font-semibold">&rupee;42,50,000</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">
                        &check; Verified &bull; BSA s.63 Deliveries Proved
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">&rupee;42,50,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        <em>Less:</em> Officially Issued ERP Credit Notes (Diwali Target Scheme)
                        <span className="block text-[10px] text-slate-500 font-normal">
                          CN-2026-0912 &amp; 0915 &bull; Approved by Finance Controller
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">(&rupee;2,40,000)</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">
                        &check; Allowed &bull; GSTR-1 Credit Note Matched
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">&rupee;40,10,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        <em>Disallowed:</em> Dealer Claimed Oral &ldquo;Price-Drop Protection&rdquo;
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Alleged oral promise by exited ASM &bull; Zero ERP authorization
                        </span>
                      </td>
                      <td className="py-3 px-4 text-red-600 line-through">(&rupee;4,50,000)</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">
                        &cross; Disallowed &bull; BSA s.94/95 Parol Evidence Bar
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">&rupee;40,10,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        <em>Less:</em> Post-Festive Interim RTGS Remittances
                        <span className="block text-[10px] text-slate-500 font-normal">
                          UTR CMS98219034 &amp; CMS98442109 &bull; Endorsed under Sec 56
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">(&rupee;8,60,000)</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">
                        &check; Credited &bull; Bank Ledger Adjusted
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">&rupee;31,50,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        <em>Disallowed:</em> Unilateral Post-Diwali RMA Dump at Depot
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Obsolete unsold stock rejected at depot gate &bull; SGA s.42 Deemed Acceptance
                        </span>
                      </td>
                      <td className="py-3 px-4 text-red-600 line-through">(&rupee;3,20,000)</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">
                        &cross; Rejected &bull; Exceeded 15-Day Inspection Limit
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">&rupee;31,50,000</td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td className="py-3.5 px-4">
                        NET CRYSTALLIZED PRINCIPAL DEBT
                        <span className="block text-[10px] text-red-400 font-normal">
                          Amount Filled on Security Cheque under Section 20 NI Act
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">&mdash;</td>
                      <td className="py-3.5 px-4 text-emerald-400">Dashrathbhai Compliant</td>
                      <td className="py-3.5 px-4 text-right text-emerald-400 text-base">
                        &rupee;31,50,000
                      </td>
                    </tr>
                    <tr className="bg-slate-800 text-slate-200">
                      <td className="py-3 px-4">
                        Accrued Commercial Interest @ 18% p.a. (90 Days Overdue)
                        <span className="block text-[10px] text-slate-400 font-normal">
                          Under Interest Act, 1978 &bull; ₹31.50L &times; 18% &times; (90/365)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400">&mdash;</td>
                      <td className="py-3 px-4 text-slate-400">Notice Demand Trigger</td>
                      <td className="py-3 px-4 text-right font-bold text-white">&rupee;1,39,849</td>
                    </tr>
                    <tr className="bg-red-950/80 text-white font-bold border-t-2 border-[#DC2626]">
                      <td className="py-3.5 px-4 text-red-300">
                        TOTAL STATUTORY CLAIM AMOUNT (PRINCIPAL + INTEREST)
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">&mdash;</td>
                      <td className="py-3.5 px-4 text-red-400">Order XXXVII CPC Demand</td>
                      <td className="py-3.5 px-4 text-right text-red-400 text-base font-black">
                        &rupee;32,89,849
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Credit Controller Rule:</strong> For MSME-registered suppliers, calculate statutory compound interest at 3x the RBI Bank Rate using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                . For non-MSME corporate supply contracts, demand 18% p.a. commercial interest under the Interest Act, 1978.
              </div>
            </section>

            {/* SECTION 8: Landmark Precedents */}
            <section
              id="heading-landmark-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Supreme Court Precedents on Dealer Floor Credit &amp; Stock Attachment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When defaulting dealers receive a fact-verified statutory notice citing binding Supreme Court holdings, informal stalling tactics collapse. Every legal demand issued by LegalRecovery integrates verified precedents that foreclose common retail defenses:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((precedent, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                      <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">
                        {precedent.parties}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {precedent.citation} &bull; {precedent.date}
                      </span>
                    </div>

                    <p className="text-base font-bold text-slate-900 mb-2">
                      {precedent.title}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>Material Facts:</strong> {precedent.facts}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <strong>Binding Holding:</strong> {precedent.holding}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-2">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                        {precedent.amount}
                      </span>
                      <span className="text-slate-600 font-semibold">
                        <strong>Practical Impact:</strong> {precedent.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 9: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-dealer-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Debtor Defense Pre-Emption: Neutralizing Standard Dealer Excuses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Electronics dealers rely on a predictable set of objections to stall recovery. Our statutory notices systematically pre-empt and demolish these defenses before the debtor reaches court:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Standard Dealer Objection</th>
                      <th className="py-3.5 px-4 font-bold">Statutory Defense Strategy</th>
                      <th className="py-3.5 px-4 font-bold">Binding Authority / Statutory Bar</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Evidentiary Antidote</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;Brand ASM promised oral sell-out / price-drop support&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Oral promises cannot contradict written GST tax invoices.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        BSA 2023 s.94/95 &amp; IDBI Trusteeship (SC 2017)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Put dealer to strict proof of ERP-issued signed credit notes.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;Goods were defective, open-box or display-only pieces&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Retention beyond statutory inspection window constitutes deemed acceptance.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Sale of Goods Act, 1930 s.41 &amp; s.42
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Clean signed POD / E-Way bill + absence of 7-day written defect notice.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;Handset stock is unsold; take back inventory post-festivities&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Outright commercial sales carry no buyback obligations unless SOR contract exists.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Sale of Goods Act s.24 &amp; Dealership Terms
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        IMEI activation telemetry proving devices were activated by retail buyers.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;Blank signed cheque was given as onboarding security only&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Holder has express statutory authority to fill inchoate instrument for due debt.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        NI Act s.20 + Bir Singh &amp; Sripati Singh (SC)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        7-day pre-deposit intimation + certified running ledger statement.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;We issued Stop Payment instruction; Section 138 is inapplicable&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Stop payment on crystallized debt is deemed dishonour for insufficiency of funds.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Modi Cements v. Kuchil Kumar Nandi (SC 1998)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Banker return memo CTS code &lsquo;Stop Payment&rsquo; + ledger crystallization.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;The showroom is suffering losses; file for insolvency&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Individual partners/directors remain personally liable for cheque fraud and summary debt.
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        NI Act s.141 + Order XXXVIII Rule 5 CPC
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Urgent stock attachment and personal asset injunction against partners.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For detailed guidance on prosecuting dishonoured instruments where the dealer has instructed their bank to halt payment, refer to our comprehensive legal breakdown on{" "}
                <Link
                  href="/stop-payment-cheque-bounce-case"
                  className="text-[#DC2626] font-bold underline"
                >
                  Stop Payment Cheque Bounce Cases
                </Link>{" "}
                and pursuing personal accountability via{" "}
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="text-[#DC2626] font-bold underline"
                >
                  Section 138 Cases Against Company Directors &amp; Partners
                </Link>
                .
              </p>
            </section>

            {/* SECTION 10: BSA Evidence Dossier Checklist */}
            <section
              id="heading-bsa-evidentiary-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Electronic Evidence Dossier Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before instituting summary proceedings or presenting security instruments, distributor credit managers must assemble an unshakeable digital evidence dossier compliant with the electronic records certification mandates of the Bharatiya Sakshya Adhiniyam, 2023:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">
                    Primary Billing &amp; Logistics Records
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>GST Tax Invoices with itemized HSN codes and unit pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>Signed &amp; stamped physical or digital delivery challans (PODs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>Government GST E-Way Bills verified with RFID toll transit records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>ERP secondary billing logs matching showroom recipient address</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">
                    Digital Telemetry &amp; Statutory Certifications
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>OEM Server IMEI/Serial activation report with timestamp &amp; network ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>BSA 2023 Section 63 Electronic Records Certificate signed by IT Head</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>CTS Cheque Return Memo with authenticated drawee bank stamp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&check;</span>
                      <span>Speed Post RPAD consignment tracking receipt &amp; India Post delivery confirmation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <strong>Evidentiary Seal:</strong> When an advocate notice is delivered concurrently via Speed Post RPAD, email, and WhatsApp, backed by a BSA Section 63 certificate, the debtor cannot claim non-receipt or fabricate subsequent billing disputes.
              </div>
            </section>

            {/* SECTION 11: FAQs */}
            <section
              id="heading-recovery-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Consumer Durables &amp; Mobile Credit Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Practitioner answers to critical statutory and operational queries faced by regional distributors, super-stockists, and corporate credit managers:
              </p>

              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>Can an electronics dealer withhold lakhs citing oral &ldquo;price-drop support&rdquo; promised by our former sales manager?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    No. Under Sections 91 and 92 of the Indian Evidence Act (now Sections 94 and 95 of Bharatiya Sakshya Adhiniyam, 2023), oral agreements cannot contradict, alter, or override the written terms of commercial GST Tax Invoices and signed distributorship agreements. Unless the dealer produces an official ERP-generated Credit Note authorized by company finance, such oral assertions are treated by commercial courts as frivolous &ldquo;moonshine&rdquo; defenses under <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017)</em>.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>How does IMEI and serial number tracking defeat an electronics dealer&apos;s false defense?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    Electronics distribution generates digital telemetry. When a dealer claims handsets or smart appliances are &ldquo;unsold, defective, or never received,&rdquo; the distributor matches the exact IMEI and serial numbers billed on the GST e-way bill with OEM server activation pings and telecom operator network registrations. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, certified electronic server logs establish that the dealer sold the inventory and collected cash from retail consumers, permanently destroying defenses of non-delivery or unsold stock.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>What immediate legal action can a distributor take if a showroom owner starts liquidating display stock?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    Distributors can immediately file an urgent application under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment) before the Commercial Court. By showing prima facie debt and evidence of imminent disposal (e.g., spot inspection reports, steep cash discounts, or transfer of goods to sister outlets), the court can attach the showroom&apos;s floor inventory, appoint a Court Commissioner to take physical custody of stock, or direct the dealer to deposit bank guarantees under the Supreme Court ruling in <em>Raman Tech. v. Solanki Traders</em>.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>Can we legally fill and present a blank signed security cheque collected from the dealer at onboarding?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the landmark Supreme Court judgments in <em>Bir Singh v. Mukesh Kumar (2019)</em> and <em>Sripati Singh v. State of Jharkhand (2021)</em>, a creditor has express statutory authority to fill in the date and exact crystallized ledger sum on a signed inchoate instrument. However, to avoid dismissal under <em>Dashrathbhai Patel (2022)</em>, the cheque must be presented strictly for the net crystallized balance after adjusting all part-payments and legitimate credit notes. For a complete guide, read our analysis on{" "}
                    <Link
                      href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                      className="text-[#DC2626] font-bold underline"
                    >
                      Filling Blank Signed Security Cheques Under Section 20 NI Act
                    </Link>
                    .
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>Are mobile handsets and consumer electronics covered under the MSMED Act for delayed payment interest?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    Yes, provided the regional distributor or vendor is registered as a Micro or Small Enterprise under Udyam and supplied goods or value-added services. Under Section 15 and 16 of the MSMED Act, 2006, the buyer must make payment within 45 days, failing which compound interest at three times the RBI Bank Rate becomes statutorily mandatory. Traders registered under Udyam can also leverage Section 43B(h) tax disallowance notifications against defaulting corporate dealers.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>What happens if a dealer attempts to dump obsolete unsold festive stock back at our warehouse?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    Under Sections 41 and 42 of the Sale of Goods Act, 1930, when goods are delivered pursuant to purchase orders and retained beyond the contractually stipulated inspection window (typically 7–15 days), the buyer is deemed to have accepted the goods. Distributors are under no legal obligation to accept unilateral returns of obsolete post-festive inventory unless explicitly agreed under a written Sale-or-Return (SOR) contract. Unauthorized returns should be rejected at the warehouse gate with a formal statutory rebuttal notice.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_svg]:open:-rotate-180">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                    <span>How does LegalRecovery assist regional electronics distributors managing 50 to 500+ dealer accounts?</span>
                    <svg
                      className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    LegalRecovery provides an automated institutional recovery desk. Distributors upload ERP/Tally ledger exports and IMEI billing schedules via CSV. The platform reconciles outstanding balances, disallows unsubstantiated oral discount claims, dispatches fact-verified legal notices via Speed Post RPAD and email/WhatsApp with BSA Section 63 certificates, and coordinates nationwide Order XXXVII summary suits and Section 138 NI Act criminal proceedings across district commercial courts.
                  </p>
                </details>
              </div>
            </section>

            {/* SECTION 12: Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Sources &amp; Primary Legal Authorities
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                All statutory timelines, procedural doctrines, and evidential requirements cited in this guide are directly derived from authenticated bare acts, Supreme Court judgments, and regulatory gazettes:
              </p>

              <div className="space-y-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {source.title}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] shrink-0 ml-4"
                    >
                      <span>View Gazette</span>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Legal Review: <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                </span>
                <span>Last Verified: November 2026</span>
              </div>
            </section>

            {/* Bottom Dual B2B CTA */}
            <section className="scroll-mt-28">
              <ElectronicsDealerCreditCTA />
            </section>

            {/* Sibling Spokes Cross-Links Strip */}
            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Related Institutional Guides in FMCG, Durables &amp; Super-Stockist Recovery:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <Link
                  href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xs transition-all text-slate-800 font-semibold block"
                >
                  &rarr; Quick-Commerce &amp; Dark-Store Deduction Recovery
                </Link>
                <Link
                  href="/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xs transition-all text-slate-800 font-semibold block"
                >
                  &rarr; C&amp;F Agent &amp; Super-Stockist Deposit Recovery
                </Link>
                <Link
                  href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xs transition-all text-slate-800 font-semibold block"
                >
                  &rarr; Blank Signed Security Cheques (SC Bir Singh Law)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Related Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
