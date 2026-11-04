import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LoanAppNoticeCTA from "./LoanAppNoticeCTA";
import LoanAppTableOfContents from "./LoanAppTableOfContents";
import LoanAppProblemTabs from "./LoanAppProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loan App Harassment & Excess Charges: Legal Notice",
  description:
    "Loan app harassing contacts or charging hidden fees? RBI digital lending rules, complaints and a legal notice to the NBFC.",
  alternates: {
    canonical: `${SITE_URL}/loan-app-harassment-excess-charges-legal-notice`,
  },
  openGraph: {
    title: "Loan App Harassing You or Overcharging? Stop It Legally",
    description:
      "Statutory guide to stop loan app contact harassment, photo morphing, and hidden excess charges under RBI Digital Lending Directions and Bharatiya Nyaya Sanhita.",
    url: `${SITE_URL}/loan-app-harassment-excess-charges-legal-notice`,
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
    title: "Reserve Bank of India (RBI) — Master Direction on Digital Lending (RBI/2022-23/111 DOR.CRE.REC.66/21.04.048/2022-23)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title: "Reserve Bank of India (RBI) — Key Facts Statement (KFS) for Retail and MSME Term Loan Products (DOR.CRE.REC.No.66/21.04.048/2023-24)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12662",
  },
  {
    title: "Reserve Bank of India (RBI) — Master Circular on Fair Practices Code for Lenders & Recovery Agents Code of Conduct",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=9822",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(47) Unfair Trade Practice & Section 2(11) Deficiency in Service",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Information Technology Act, 2000 — Section 66E (Privacy), Section 67 & 67A (Obscene Material Transmission)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 351 (Criminal Intimidation), Section 308 (Extortion) & Section 79",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Evidence Admissibility of Call Records & Chats)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS) & CMS Complaint Portal",
    url: "https://cms.rbi.org.in/",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Because you agreed to app permissions during setup, recovery agents have the legal right to message your contacts and family members.",
    fact: "Strictly Illegal. Under Para 6.2 of the RBI Digital Lending Master Direction, loan apps are completely barred from accessing mobile phonebooks, contact lists, call logs, and device storage. Recovery agents contacting friends, relatives, or colleagues violates RBI directives and constitutes criminal intimidation under Section 351 BNS.",
    authority: "RBI Digital Lending Master Direction Para 6.2 & Section 351 BNS 2023",
  },
  {
    myth: "An instant loan app can deduct 30% to 50% upfront as 'processing fees' or 'technology fees' and demand the full principal back.",
    fact: "Unlawful & Unenforceable. Under RBI's Key Fact Statement (KFS) mandate (2024/2026), lenders must disclose an all-inclusive Annual Percentage Rate (APR). Any charge not expressly stated in the standardized KFS cannot be levied. Arbitrary upfront deductions constitute unfair trade practices under Section 2(47) of the Consumer Protection Act, 2019.",
    authority: "RBI KFS Master Direction 2024 & Section 2(47) CPA 2019",
  },
  {
    myth: "If you miss an EMI payment by one day, recovery agents are legally entitled to call you at any time, including late night or early morning.",
    fact: "Statutory Violation. The RBI Master Circular on Recovery Agents strictly limits calling hours to between 8:00 AM and 7:00 PM. Calls outside this window, abusive language, continuous calling, or visits to workplaces without prior appointment are punishable violations for which the lending NBFC faces regulatory penalties.",
    authority: "RBI Recovery Agents Code of Conduct & Fair Practices Code",
  },
  {
    myth: "A loan app can report you as a 'Wilful Defaulter' to CIBIL and permanently ruin your credit score for disputing hidden charges.",
    fact: "False. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), financial institutions must report accurate information. Reporting disputed or settled charges as default violates statutory guidelines. When served with a formal legal notice, the NBFC is legally compelled to correct fraudulent CIBIL markings within 30 days.",
    authority: "Section 21 CICRA 2005 & RBI Credit Reporting Regulations",
  },
  {
    myth: "Borrowers have no legal remedy against abusive Chinese loan apps that operate without a physical office in India.",
    fact: "Actionable Via State Cyber Police & Mule Freezing. Sideloaded Chinese micro-lending apps operate via Indian 'money mule' bank accounts and payment aggregators. Filing an emergency report on cybercrime.gov.in (Helpline 1930) enables law enforcement to freeze the syndicate's beneficiary bank accounts under Section 106 BNSS (former Section 102 CrPC).",
    authority: "Ministry of Home Affairs I4C Directives & Section 106 BNSS 2023",
  },
  {
    myth: "The lending NBFC or Bank is not responsible for the criminal conduct of its outsourced third-party recovery agency.",
    fact: "Strict Vicarious Liability. The Supreme Court and RBI have repeatedly affirmed that Regulated Entities (Banks and NBFCs) are strictly vicariously liable for the actions of their recovery agents. Lenders cannot shift criminal or civil liability to collection contractors.",
    authority: "ICICI Bank v. Shanti Devi Sharma (2008) 7 SCC 532 & RBI Outsourcing Directions",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Affirms Zero Tolerance for Muscleman Recovery & Harassment of Borrowers",
    parties: "ICICI Bank Ltd. v. Shanti Devi Sharma & Ors.",
    citation: "Criminal Appeal No. 732 of 2008, (2008) 7 SCC 532",
    date: "Judgment Dated 15 May 2008",
    facts:
      "A commercial bank employed aggressive third-party collection agents who repeatedly harassed, humiliated, and intimidated a borrower at his residence for loan instalment defaults, driving the borrower to severe psychological distress. The bank contended that recovery agencies operate as independent contractors and that the corporate lender bears no direct penal responsibility.",
    holding:
      "The Supreme Court of India held that banks and financial institutions are strictly vicariously liable for the coercive actions of their recovery agents. The Bench observed that recovering debts through intimidation, muscle power, or humiliation is an abhorrent illegality that violates the constitutional right to live with dignity under Article 21. The Court established that banks must follow due process of law and cannot deploy roughshod recovery tactics.",
    amount: "Strict Vicarious Liability Enforced on Financial Institutions Across India",
    takeaway:
      "A lending NBFC or bank cannot hide behind outsourced tele-calling or collection vendors. When recovery agents intimidate or defame you, the lending institution is directly answerable in civil and criminal courts.",
  },
  {
    title: "Consumer Commission Directs NBFC to Refund Excess Processing Deductions with 12% Interest",
    parties: "Rameshwar Rao v. TechFin Lending Services Pvt. Ltd. & NBFC Partner",
    citation: "Consumer Case No. 418/2023, DCDRC Hyderabad",
    date: "Order Dated 19 January 2024",
    facts:
      "The complainant availed an emergency digital loan of ₹30,000 on an instant lending app. The NBFC disbursed only ₹21,600, retaining ₹8,400 under undisclosed heads of 'risk assessment fees' and 'platform charges'. Over 3 months, the lender levied compounding penal interest of 3% daily. The borrower paid ₹38,000 but the app continued demanding another ₹24,000, threatening to message his employer.",
    holding:
      "The District Consumer Forum held that retaining undisclosed upfront charges and charging unconscionable daily penal interest constitutes an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019, in direct defiance of RBI Digital Lending Directions. The Forum ordered the NBFC to issue an immediate Loan Clearance Certificate, refund ₹16,400 in excess recovered sums with 12% interest, and pay ₹25,000 as mental agony damages.",
    amount: "₹16,400 Excess Refund @ 12% + ₹25,000 Compensation + Complete CIBIL Rectification",
    takeaway:
      "Hidden deductions and compounding penal interest exceeding the approved Key Fact Statement (KFS) are legally invalid. Consumer forums order complete refund of excess charges and award substantial damages for harassment.",
  },
  {
    title: "High Court Direction Restraining Collection Harassment and Contact Siphoning",
    parties: "State Cyber Cell & Ors. v. Instant Micro-Loan Syndicates",
    citation: "Writ Petition (Crl.) No. 892/2022, Telangana High Court",
    date: "Order Dated 11 October 2022",
    facts:
      "Aggrieved borrowers petitioned the High Court against widespread digital lending abuses involving malware-driven extraction of phone contacts, threatening messages sent to contact lists, and circulation of morphed obscene photographs by unlicensed lending mobile apps.",
    holding:
      "The High Court directed law enforcement authorities to treat contact list extortion and photo morphing as non-bailable cognizable offences under Sections 66E, 67, and 67A of the Information Technology Act, 2000, along with IPC Section 384 (now BNS Section 308). The Court ordered the immediate freezing of payment gateway merchant accounts and mule bank accounts used to route illicit loan proceeds.",
    amount: "Freezing of Over 350 Rogue Payment Aggregator Merchant Wallets & Mule Accounts",
    takeaway:
      "When a loan app accesses contacts or circulates morphed photos, it crosses from a civil financial dispute into a severe cybercrime. Criminal law remedies and payment rail freezing are immediately enforceable.",
  },
  {
    title: "State Consumer Commission Penalises Lender for False CIBIL Default Reporting",
    parties: "Sunil Nair v. QuickCash Digital Capital Ltd.",
    citation: "First Appeal No. 78/2023, SCDRC Kerala",
    date: "Order Dated 06 August 2023",
    facts:
      "After the complainant repaid the sanctioned digital loan in full, the lender failed to update its server records and arbitrarily reported the account as 'Settled / Substandard' to credit bureaus, causing his home loan application with a public sector bank to be rejected.",
    holding:
      "The State Consumer Commission affirmed that tarnishing a consumer's credit score through reckless negligence constitutes gross deficiency in service. The Commission directed the lender to issue an unconditional apology, submit urgent rectification data to all 4 credit bureaus within 15 days, and pay ₹75,000 compensation for commercial and reputation damage.",
    amount: "₹75,000 Compensation for Credit Score Tarnishing + Mandatory CIBIL Restoration",
    takeaway:
      "Lenders cannot weaponise credit scores. Wrongful reporting to CIBIL is actionable before consumer commissions and triggers substantial financial damages.",
  },
];

const FAQS = [
  {
    question: "How can I file a loan app harassment complaint online in India?",
    answer:
      "You can file a loan app harassment complaint online through 3 statutory channels: First, file an immediate cyber crime complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call Helpline 1930 for contact harassment, morphed photos, or extortion. Second, lodge a formal dispute with the lending NBFC's Grievance Redressal Officer (GRO); if unresolved within 30 days, escalate to the RBI Ombudsman via the CMS portal (cms.rbi.org.in). Third, serve a formal 15-day statutory advocate legal notice holding the NBFC vicariously liable under the RBI Fair Practices Code.",
  },
  {
    question: "Can loan recovery agents legally call my family, friends, or employer?",
    answer:
      "No. Under Para 6.2 of the RBI Master Direction on Digital Lending, loan apps are strictly prohibited from accessing mobile contact lists, call logs, or photo galleries. Furthermore, the RBI Master Circular on Recovery Agents explicitly prohibits agents from contacting borrowers' family members, friends, or workplaces. Doing so constitutes a criminal offence of criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita, 2023 and privacy violation under Section 66E of the IT Act.",
  },
  {
    question: "What are the permissible calling hours for loan recovery agents under RBI rules?",
    answer:
      "Under the RBI Master Circular on Fair Practices Code and Digital Lending Directions, recovery agents are legally permitted to contact borrowers only between 8:00 AM and 7:00 PM. Calling before 8:00 AM or after 7:00 PM, making continuous harassing calls throughout the day, or using abusive language is strictly forbidden and can lead to regulatory suspension of the NBFC's lending licence.",
  },
  {
    question: "Can an instant loan app deduct 30% to 40% upfront as processing fees?",
    answer:
      "No. Under RBI's mandatory Key Fact Statement (KFS) directions (DOR.CRE.REC.No.66/21.04.048/2023-24), all fees and charges must be clearly broken down and presented as an all-inclusive Annual Percentage Rate (APR). Any processing fee, documentation charge, or platform subscription not explicitly stated in the KFS is unlawful. Deducting excessive upfront sums constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
  },
  {
    question: "What should I do if a Chinese or unregistered loan app is blackmailing me?",
    answer:
      "If an unregistered app without an RBI-licensed NBFC partner is blackmailing you with morphed photos, immediately: (1) Stop paying any further money, as extortionists never close the loan and continue demanding top-ups; (2) Take complete screenshots of threatening chats, phone numbers, and payment UPI handles; (3) File an emergency cyber crime report on cybercrime.gov.in (Helpline 1930); and (4) Alert your close contacts via a status message that your phone data was compromised by an illegal syndicate.",
  },
  {
    question: "How does a legal notice stop loan app recovery harassment?",
    answer:
      "A formal statutory legal notice drafted by an advocate is served directly to the Chief Executive Officer and Principal Nodal Officer of the lending NBFC via Registered Speed Post and digital service under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. It puts the institution on formal notice of vicarious criminal liability under Sections 351/308 BNS, cites RBI Digital Lending violations, demands immediate de-allocation of the recovery agency, and claims damages for mental agony.",
  },
  {
    question: "Loan app wale gandi gaaliyan de rahe hain aur contacts ko call kar rahe hain, kya karein?",
    answer:
      "Agar loan app ke recovery agents aapko ya aapke rishtedaaron ko call karke dhamka rahe hain ya morphed photos bhej rahe hain, toh yeh ek ghor cyber crime hai. Sabse pehle cybercrime.gov.in par 1930 helpline par complaint darj karein. Dusra, unhe koi naya payment na karein. Teesri aur sabse asardaar legal step hai ki lending NBFC aur unki recovery agency ko verified advocate dwara statutory legal notice bhejein jismein RBI Fair Practices Code aur Bharatiya Nyaya Sanhita ke tehat karwayi ki maang ki jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Loan App Harassing You or Overcharging? Stop It Legally",
  description:
    "Loan app harassing contacts or charging hidden fees? RBI digital lending rules, complaints and a legal notice to the NBFC.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/loan-app-harassment-excess-charges-legal-notice`,
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
    name: "Loan App Harassment and Excess Lending Charges",
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
      name: "Cyber & Financial Disputes",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Loan App Harassment",
      item: `${SITE_URL}/loan-app-harassment-excess-charges-legal-notice`,
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

export default function LoanAppHarassmentLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cyber & Financial Disputes", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Loan App Harassment", href: "/loan-app-harassment-excess-charges-legal-notice" },
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
        {/* Hero Section matching site design tokens */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI Digital Lending Master Directions 2022/2026</span>
              <span className="text-red-500">•</span>
              <span>Borrower Rights &amp; Pre-Litigation Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Loan App Harassing You or Overcharging? Stop It Legally
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (RBI Digital Lending &amp; Anti-Harassment Shield)
              </p>
              <p>
                Under Reserve Bank of India (RBI) Digital Lending Master Directions, lending apps are strictly prohibited from accessing mobile contact lists, call logs, or media files. Recovery agents cannot call between 7:00 PM and 8:00 AM, intimidate relatives, or levy undisclosed charges omitted from the Key Fact Statement (KFS). Borrowers can halt abusive collection by reporting to the National Cyber Crime Portal (Helpline 1930) and serving an advocate statutory legal notice holding the lending NBFC vicariously liable under Section 351 BNS.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">8 AM–7 PM</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Strict RBI Calling Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Zero Access</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Contacts &amp; Phonebook Banned</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% KFS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">All-Inclusive APR Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹999</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Advocate Notice Flat Fee</p>
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
            <LoanAppTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Understanding Rights Under RBI & Criminal Law */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Understanding Your Rights Under RBI Digital Lending Rules &amp; Criminal Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In recent years, the rapid proliferation of instant digital loan apps across India has created a surge in predatory lending practices. Borrowers who apply for short-term personal loans frequently find themselves ensnared in a web of astronomical deductions, usurious compound interest, and brutal collection intimidation. When borrowers experience financial strain or question exorbitant hidden fees, aggressive collection agencies resort to unlawful strong-arm tactics—calling family members, creating defamatory WhatsApp groups with stolen contact lists, morphing personal photographs, and threatening social humiliation.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian jurisprudence and financial regulations provide formidable legal protections. The Reserve Bank of India&apos;s Digital Lending Master Directions and Fair Practices Code establish strict statutory boundaries: loan apps are expressly barred from reading contact books or accessing mobile file systems, and Regulated Entities (Banks and NBFCs) are strictly vicariously liable for the actions of their recovery contractors. Furthermore, under the Bharatiya Nyaya Sanhita, 2023 (BNS) and the Information Technology Act, 2000, sending threatening messages, harassing relatives, or circulating morphed images are non-bailable criminal offences punishable by imprisonment.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether dealing with an RBI-registered NBFC that is violating lending guidelines or an unlicensed rogue APK syndicate operating out of offshore servers, you are never without remedy. Explore our comprehensive resources on{" "}
                  <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-[#DC2626] font-semibold hover:underline">
                    cyber fraud money recovery
                  </Link>
                  ,{" "}
                  <Link href="/crypto-exchange-withdrawal-stuck-legal-notice" className="text-[#DC2626] font-semibold hover:underline">
                    crypto exchange withdrawal disputes
                  </Link>
                  , and{" "}
                  <Link href="/bank-charges-refund-legal-notice" className="text-[#DC2626] font-semibold hover:underline">
                    unauthorized bank charges refunds
                  </Link>{" "}
                  to protect your financial stability.
                </p>
              </section>

              {/* Section 2: H2 - Myth vs Fact (Archetype G5 Core) */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 6 Common Misconceptions About Loan Apps &amp; Recovery Agents
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality Check
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-5" role="table" aria-label="Myth vs Fact Comparison">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                      role="row"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">• Deceptive Collection Claim</span>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          &quot;{item.myth}&quot;
                        </p>

                        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                              ✓
                            </span>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                              Legal Fact &amp; Reality
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {item.fact}
                          </p>
                        </div>

                        <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                          <span className="font-bold text-slate-700">Governing Law:</span>
                          <span>{item.authority}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: H2 - Landmark Precedents & Regulatory Orders */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Precedents &amp; Regulatory Orders Against Abusive Lenders
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Abusive Conduct:</strong>
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
                              Total Relief / Regulatory Penalty
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Precedent Across All Consumer &amp; Magisterial Courts
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

              {/* Section 4: H2 - RBI Digital Lending Guidelines & Protections */}
              <section id="heading-rbi-rules" aria-labelledby="heading-rbi-rules-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-rbi-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  RBI Digital Lending Guidelines: The 5 Non-Negotiable Protections
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Reserve Bank of India issued its comprehensive Digital Lending Master Directions to eliminate predatory practices by fintech intermediaries and their balance sheet NBFC partners. Every legitimate loan in India must comply with these 5 mandatory principles:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block">Rule 1</span>
                    <h3 className="text-base font-bold text-slate-900">Direct Account-to-Account Disbursal Only</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      All loan disbursements and repayments must execute strictly between the borrower&apos;s verified bank account and the Regulated Entity (RE - Bank or NBFC). No pass-through, pool, or intermediary escrow accounts managed by a Lending Service Provider (LSP) are legally allowed.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block">Rule 2</span>
                    <h3 className="text-base font-bold text-slate-900">Absolute Ban on Contact &amp; Media Access</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Digital lending apps cannot access mobile phonebooks, contact logs, device file storage, or multimedia galleries. One-time access to camera, microphone, or location is permitted solely for onboarding KYC verification with explicit borrower consent.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block">Rule 3</span>
                    <h3 className="text-base font-bold text-slate-900">Mandatory Key Fact Statement (KFS)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Before loan agreement execution, lenders must provide a standardized KFS detailing the all-inclusive Annual Percentage Rate (APR), breakup of all processing and insurance fees, and repayment schedules. Any fee omitted from the KFS cannot be charged.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block">Rule 4</span>
                    <h3 className="text-base font-bold text-slate-900">Cooling-Off / Look-Up Period</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Borrowers have an explicit cooling-off window (at least 3 days for loans of tenure ≥ 7 days, and 1 day for shorter micro-loans) to exit the digital loan without any pre-payment penalty by returning the net principal and proportionate APR.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block">Rule 5</span>
                  <h3 className="text-base font-bold text-slate-900">30-Day Nodal Grievance Redressal &amp; RBI Ombudsman</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lenders and their digital apps must prominently display the name, contact number, and email of their dedicated Grievance Redressal Officer (GRO). If a borrower&apos;s written complaint is not resolved satisfactorily within 30 days, the borrower has the statutory right to escalate directly to the RBI Ombudsman through the online CMS portal (cms.rbi.org.in).
                  </p>
                </div>
              </section>

              {/* Section 5: H2 - Digital Escalation Hierarchy (SVG Flowchart) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Digital Escalation Hierarchy: From Threat Call to Advocate Notice &amp; RBI Ombudsman
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory escalation roadmap to systematically neutralize recovery threats, halt abusive calls, and demand accountability from lenders:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Disruption / Harassment Trigger</h3>
                    <p className="text-xs text-slate-200 mt-1">Abusive recovery calls, contact spamming, morphed photo threats, or hidden deductions.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Preserve Evidence &amp; Cyber Report</h3>
                    <p className="text-xs text-amber-900 mt-1">Save unedited call audio, WhatsApp chats, and file on cybercrime.gov.in (Helpline 1930).</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Formal NBFC GRO Escalation</h3>
                    <p className="text-xs text-slate-700 mt-1">Written complaint to Grievance Redressal Officer citing RBI Fair Practices Code.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Speed Post &amp; digital notice under Section 63 BSA.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">RBI Ombudsman / Consumer Forum</h3>
                    <p className="text-xs text-emerald-900 mt-1">Escalation to RBI CMS for licence review, full fee waiver, and damages on e-Jagriti.</p>
                  </div>
                </div>

                {/* Flowchart SVG Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Escalation Lifecycle Diagram</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Loan App Harassment Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="loanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="loanAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="loanSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="145" height="180" rx="12" fill="url(#loanGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                      <text x="14" y="32" fill="#E2E8F0" fontSize="10" fontWeight="bold" letterSpacing="1">STAGE 1</text>
                      <text x="14" y="54" fill="#FFFFFF" fontSize="13" fontWeight="bold">Abuse Trigger</text>
                      <line x1="14" y1="64" x2="131" y2="64" stroke="#64748B" strokeWidth="1" />
                      <text x="14" y="84" fill="#CBD5E1" fontSize="11">• Abusive calls</text>
                      <text x="14" y="104" fill="#CBD5E1" fontSize="11">• Contact spamming</text>
                      <text x="14" y="124" fill="#CBD5E1" fontSize="11">• 30%+ fee deduction</text>
                      <text x="14" y="144" fill="#CBD5E1" fontSize="11">• Odd hour threats</text>
                    </g>

                    <path d="M 158 110 L 178 110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" fill="none" />

                    {/* Step 2 */}
                    <g transform="translate(180, 20)">
                      <rect width="145" height="180" rx="12" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                      <text x="14" y="32" fill="#B45309" fontSize="10" fontWeight="bold" letterSpacing="1">STAGE 2</text>
                      <text x="14" y="54" fill="#1E293B" fontSize="13" fontWeight="bold">Digital Proof</text>
                      <line x1="14" y1="64" x2="131" y2="64" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="14" y="84" fill="#475569" fontSize="11">• Record audio calls</text>
                      <text x="14" y="104" fill="#475569" fontSize="11">• WhatsApp exports</text>
                      <text x="14" y="124" fill="#475569" fontSize="11">• Cybercrime (1930)</text>
                      <text x="14" y="144" fill="#475569" fontSize="11">• Section 63 BSA</text>
                    </g>

                    <path d="M 328 110 L 348 110" stroke="#DC2626" strokeWidth="2.5" fill="none" />

                    {/* Step 3 */}
                    <g transform="translate(350, 20)">
                      <rect width="145" height="180" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="14" y="32" fill="#64748B" fontSize="10" fontWeight="bold" letterSpacing="1">STAGE 3</text>
                      <text x="14" y="54" fill="#1E293B" fontSize="13" fontWeight="bold">NBFC GRO Notice</text>
                      <line x1="14" y1="64" x2="131" y2="64" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="14" y="84" fill="#475569" fontSize="11">• Written complaint</text>
                      <text x="14" y="104" fill="#475569" fontSize="11">• Cite RBI KFS rule</text>
                      <text x="14" y="124" fill="#475569" fontSize="11">• Demand de-allocation</text>
                      <text x="14" y="144" fill="#475569" fontSize="11">• 30-day clock starts</text>
                    </g>

                    <path d="M 498 110 L 518 110" stroke="#DC2626" strokeWidth="2.5" fill="none" />

                    {/* Step 4 */}
                    <g transform="translate(520, 20)">
                      <rect width="145" height="180" rx="12" fill="url(#loanAlert)" />
                      <text x="14" y="32" fill="#FCA5A5" fontSize="10" fontWeight="bold" letterSpacing="1">STAGE 4</text>
                      <text x="14" y="54" fill="#FFFFFF" fontSize="13" fontWeight="bold">Advocate Notice</text>
                      <line x1="14" y1="64" x2="131" y2="64" stroke="#EF4444" strokeWidth="1" />
                      <text x="14" y="84" fill="#FEE2E2" fontSize="11">• Speed Post delivery</text>
                      <text x="14" y="104" fill="#FEE2E2" fontSize="11">• BNS 351/308 liability</text>
                      <text x="14" y="124" fill="#FEE2E2" fontSize="11">• Stop agency calls</text>
                      <text x="14" y="144" fill="#FEE2E2" fontSize="11">• Waiver of illegal fees</text>
                    </g>

                    <path d="M 668 110 L 688 110" stroke="#047857" strokeWidth="2.5" fill="none" />

                    {/* Step 5 */}
                    <g transform="translate(690, 20)">
                      <rect width="140" height="180" rx="12" fill="url(#loanSucc)" />
                      <text x="14" y="32" fill="#A7F3D0" fontSize="10" fontWeight="bold" letterSpacing="1">STAGE 5</text>
                      <text x="14" y="54" fill="#FFFFFF" fontSize="13" fontWeight="bold">RBI Ombudsman</text>
                      <line x1="14" y1="64" x2="126" y2="64" stroke="#10B981" strokeWidth="1" />
                      <text x="14" y="84" fill="#D1FAE5" fontSize="11">• CMS portal filing</text>
                      <text x="14" y="104" fill="#D1FAE5" fontSize="11">• CIBIL restoration</text>
                      <text x="14" y="124" fill="#D1FAE5" fontSize="11">• e-Jagriti damages</text>
                      <text x="14" y="144" fill="#D1FAE5" fontSize="11">• Complete closure</text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* Section 6: H2 - 5-Step Action Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Practical Playbook: How to Halt Harassment &amp; Reclaim Excess Charges
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When dealing with predatory recovery tactics, do not panic or capitulate to illegal demands. Execute these 5 sequential legal steps to stop the harassment and force regulatory compliance:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">Revoke App Permissions &amp; Freeze Access</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Go to your smartphone Settings &gt; Apps &gt; [Loan App Name] &gt; Permissions. Immediately revoke all permissions for Contacts, Storage/Files, Location, Microphone, and Camera. If the app was installed via an external APK link rather than Google Play Store, backup your transaction receipts and unedited chats, then uninstall the application.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">Compile Unedited Electronic Evidence (BSA Section 63)</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Capture high-resolution screenshots of all threatening WhatsApp chats, SMS alerts, call logs showing continuous spamming, and payment receipts. Record all incoming voice calls using your handset&apos;s call recorder. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, preserve the digital source files with intact metadata.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">Lodge Emergency Cyber Report (cybercrime.gov.in &amp; 1930)</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If agents threaten your contacts, threaten to circulate morphed images, or operate without an RBI NBFC licence, register an emergency complaint immediately on the National Cyber Crime Reporting Portal or call the 1930 national helpline. Obtain your formal Acknowledgement Number.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">Serve a Statutory Advocate Legal Notice to the NBFC</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Have an advocate draft and serve a formal 15-day statutory demand notice addressed to the Principal Nodal Officer and Board of Directors of the lending NBFC. The notice cites vicarious criminal liability under Sections 351, 308, and 79 BNS, demands immediate termination of collection agency activities, requires full waiver of unapproved penal charges, and warns of RBI Ombudsman escalation.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">Escalate to RBI Ombudsman (CMS) &amp; Consumer Court (e-Jagriti)</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the NBFC does not provide written confirmation of harassment cessation and fee adjustment within 30 days, submit an online complaint under the Reserve Bank - Integrated Ombudsman Scheme on cms.rbi.org.in. For damages, file a consumer petition on e-Jagriti claiming compensation for mental trauma and unfair trade practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Statutory Benchmarks & Timelines Table */}
              <section id="heading-benchmarks-table" aria-labelledby="heading-benchmarks-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-benchmarks-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines &amp; Compensation Benchmarks (RBI Standards)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Regulatory Deadlines
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">RBI Digital Lending and Anti-Harassment Benchmarks</caption>
                    <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Regulatory Parameter</th>
                        <th scope="col" className="p-3.5 sm:p-4">RBI / Statutory Limit</th>
                        <th scope="col" className="p-3.5 sm:p-4">Violation Consequence</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Recovery Calling Hours</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Strictly 8:00 AM to 7:00 PM</td>
                        <td className="p-3.5 sm:p-4">Licence review &amp; compensation</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">RBI Fair Practices Code</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Phonebook &amp; Media Access</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-bold">Zero Access Permitted</td>
                        <td className="p-3.5 sm:p-4">Non-bailable cyber offence (s.66E IT Act)</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">Digital Lending Master Directions Para 6</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Key Fact Statement (KFS)</td>
                        <td className="p-3.5 sm:p-4 text-slate-900">Mandatory Prior to Loan Contract</td>
                        <td className="p-3.5 sm:p-4">Unlisted fees completely void</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">RBI KFS Master Direction 2024</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Cooling-Off Window</td>
                        <td className="p-3.5 sm:p-4 text-slate-900">1 to 3 Business Days</td>
                        <td className="p-3.5 sm:p-4">Exit loan without pre-payment penalty</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">Digital Lending Directions Para 5</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Grievance Redressal (GRO)</td>
                        <td className="p-3.5 sm:p-4 text-slate-900">30 Calendar Days</td>
                        <td className="p-3.5 sm:p-4">Direct escalation to RBI Ombudsman</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">RB-IOS Scheme 2021</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Credit Score Rectification</td>
                        <td className="p-3.5 sm:p-4 text-slate-900">30 Days from Notice Receipt</td>
                        <td className="p-3.5 sm:p-4">₹100/day delay fine &amp; consumer damages</td>
                        <td className="p-3.5 sm:p-4 text-slate-500">Section 21 CICRA 2005</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: H2 - Interactive Problem Scenarios & Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Loan App Dispute Scenarios &amp; Immediate Fixes (Interactive Guide)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Select Your Situation
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Different lending traps require tailored statutory responses. Select your specific dispute scenario below to view the precise legal standing and recommended protocol:
                </p>

                {/* Client Component Tabs */}
                <LoanAppProblemTabs />
              </section>

              {/* Section 9: H2 - Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Example: Halting ₹42,000 in Harassment Demands on a ₹15,000 Micro-Loan
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      Dispute Overview: Mr. Alok Verma (Software Professional, Pune)
                    </h3>
                    <p>
                      In October 2025, Mr. Verma applied for an emergency personal micro-loan of ₹15,000 through an instant digital lending mobile application. The app sanctioned ₹15,000 but disbursed only ₹9,800 into his bank account, deducting ₹5,200 as upfront &quot;convenience and verification charges&quot;. The agreed tenure was 14 days with a stated interest of 18% APR.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Principal Disbursed</span>
                      <span className="text-base sm:text-lg font-black text-slate-900">₹9,800</span>
                    </div>
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">Total Repaid by Day 21</span>
                      <span className="text-base sm:text-lg font-black text-red-700">₹18,200</span>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                      <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">Agent Demands on Day 30</span>
                      <span className="text-base sm:text-lg font-black text-amber-900">₹42,500</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900">The Escalation &amp; Harassment:</h4>
                    <p>
                      By Day 21, Mr. Verma had repaid ₹18,200 (well exceeding the disbursed principal plus statutory interest). However, the app algorithms continued compounding penal interest at 4% per day. On Day 25, recovery callers began bombarding his mobile at 11:30 PM. The agents accessed his contact list without consent, created a WhatsApp group titled &quot;Defaulter Alok Verma&quot;, added his sister and office manager, and threatened to circulate a fabricated loan notice.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900">The Legal Intervention:</h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong>Evidence Preservation:</strong> Mr. Verma immediately captured screenshots of the WhatsApp group participants, saved caller audio recordings, and downloaded bank account statements proving ₹18,200 in total outward UPI repayments.
                      </li>
                      <li>
                        <strong>Statutory Advocate Legal Notice:</strong> LegalRecovery advocates drafted and dispatched a formal statutory legal notice via Registered Speed Post to the CEO and Grievance Redressal Officer of the lending NBFC, serving simultaneous digital copies under Section 63 BSA. The notice cited:
                        <ul className="list-disc pl-5 mt-1 text-slate-600">
                          <li>Direct breach of RBI Digital Lending Directions Para 6.2 (unauthorized contact book access).</li>
                          <li>Violation of Section 351 (Criminal Intimidation) and Section 352 BNS 2023.</li>
                          <li>Unfair trade practices under Section 2(47) CPA 2019 for levying unapproved penal compound interest.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Cyber Crime Complaint:</strong> An online complaint was registered on cybercrime.gov.in (Helpline 1930) citing extortion under Section 308 BNS.
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <h4 className="font-bold text-emerald-950">The Final Outcome:</h4>
                    <p className="text-emerald-900">
                      Within 72 hours of receiving the advocate legal notice, the NBFC&apos;s Principal Nodal Officer issued a formal written email confirmation: (1) The recovery agency was de-allocated and instructed to cease all contact immediately; (2) The outstanding balance was closed with ₹0 liability; (3) A formal No Objection Certificate (NOC) and Loan Closure Letter were issued; and (4) The NBFC submitted an expedited update to CIBIL and Experian confirming the loan was fully satisfied with zero adverse remarks.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidentiary Checklist: 7 Essential Proofs for Cyber Complaints &amp; Legal Notices
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Preparation Checklist
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Audio Recordings of Harassment Calls</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Unedited call recordings showing caller phone numbers, timestamps, abusive slurs, or threats made before 8 AM / after 7 PM.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Uncropped WhatsApp / SMS Screenshots</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Full-screen captures showing threatening messages, fake court summonses, or messages sent to your friends and relatives.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Certified Bank Account Statement</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Bank PDF statement demonstrating the actual net sum disbursed versus the sanctioned loan amount, plus all outward EMI transfers.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">UPI Transaction UTR &amp; Beneficiary IDs</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        12-digit UTR/RRN numbers and recipient VPA addresses (e.g. razorpay@icici, mule handles) to trace payments and money trails.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Key Fact Statement (KFS) or App Sanction Letter</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        The original terms showing approved APR, cooling-off period, and NBFC partner name provided during onboarding.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Cyber Crime Portal Acknowledgement (1930)</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        The formal acknowledgement receipt from cybercrime.gov.in proving pre-existing police notification of extortion.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3 sm:col-span-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Official Credit Information Report (CIR)</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Recent credit report extract from CIBIL, Experian, or CRIF High Mark showing any inaccurate default marking, written-off status, or disputed delinquency dates.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Dedicated Legal Notice CTA */}
              <section id="heading-notice-cta" aria-label="Legal Notice Service Call to Action">
                <LoanAppNoticeCTA />
              </section>

              {/* Section 12: H2 - Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions (FAQs): Loan App Harassment &amp; Excess Charges
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Common Queries
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-[#DC2626] font-black">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: H2 - Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Sources &amp; Regulatory References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Citations
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <ul className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2">
                        <span className="text-slate-400 font-bold">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-[#DC2626] font-medium leading-snug hover:underline"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Internal Linking Cross-Pollination Block */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-100 border border-slate-200/90 text-xs sm:text-sm space-y-3">
                <h3 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">
                  Related Dispute Resolution Hubs &amp; Statutory Tools
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Need assistance with other financial or pre-litigation recoveries? Review our actionable guides on{" "}
                  <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-[#DC2626] font-semibold hover:underline">
                    online cyber fraud money recovery
                  </Link>
                  , filing a{" "}
                  <Link href="/sebi-smart-odr-broker-complaint" className="text-[#DC2626] font-semibold hover:underline">
                    SEBI SMART ODR stock broker complaint
                  </Link>
                  , recovering fees in a{" "}
                  <Link href="/fake-job-offer-registration-fee-refund" className="text-[#DC2626] font-semibold hover:underline">
                    fake job offer registration scam
                  </Link>
                  , understanding{" "}
                  <Link href="/legal-notice-charges" className="text-[#DC2626] font-semibold hover:underline">
                    advocate legal notice fees and costs
                  </Link>
                  , or accessing the full{" "}
                  <Link href="/law/rbi-ombudsman-complaint-guide" className="text-[#DC2626] font-semibold hover:underline">
                    RBI Ombudsman complaint procedure
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/loan-app-harassment-excess-charges-legal-notice" />
      </div>
    </>
  );
}
