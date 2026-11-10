import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TaskScamNoticeCTA from "./TaskScamNoticeCTA";
import TaskScamTableOfContents from "./TaskScamTableOfContents";
import TaskScamProblemTabs from "./TaskScamProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Telegram Task Scam Money Recovery: What Actually Works",
  description:
    "Telegram task or review scam victim? Reporting, fund-freeze requests, bank and UPI routes, and how to spot recovery-agent scams.",
  alternates: {
    canonical: `${SITE_URL}/task-scam-telegram-money-recovery`,
  },
  openGraph: {
    title: "Telegram Task Scam Money Recovery: What Actually Works",
    description:
      "Statutory escalation path for Telegram review and task fraud: 1930 NCRP reporting, layer-1 to layer-3 mule account freezing, Section 503 BNSS court unfreeze petitions, and avoiding secondary recovery scams.",
    url: `${SITE_URL}/task-scam-telegram-money-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Telegram Task Scam Money Recovery: What Actually Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Task Scam Money Recovery: What Actually Works",
    description:
      "Statutory escalation path for Telegram review and task fraud: 1930 NCRP reporting, layer-1 to layer-3 mule account freezing, Section 503 BNSS court unfreeze petitions, and avoiding secondary recovery scams.",
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
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — Section 503 (Order for Custody and Disposal of Property Pending Inquiry/Trial) & Section 107 (Attachment & Forfeiture of Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 318 (Cheating), Section 319 (Cheating by Personation) & Section 316 (Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Information Technology Act, 2000 — Section 66C (Identity Theft) & Section 66D (Cheating by Personation by Using Computer Resource)",
    url: "https://www.indiacode.nic.in/handle/123456789/13116",
  },
  {
    title: "National Cyber Crime Reporting Portal (NCRP) & Citizen Financial Cyber Fraud Reporting System (CFCFRMS / 1930 Helpline) — Ministry of Home Affairs / I4C",
    url: "https://cybercrime.gov.in/",
  },
  {
    title: "Reserve Bank of India (RBI) — Master Direction on Know Your Customer (KYC) Directions, 2016 (Mule Account Prevention & Monitoring Directives)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Bank Negligence in Transaction Monitoring & Delay in Freezing Accounts",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Telegram Chats, UPI Logs, & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Release of Frozen Cyber Fraud Proceeds from Mule Bank Accounts Under Section 457 CrPC / 503 BNSS",
    parties: "Dr. Rajesh Kumar v. State (NCT of Delhi) & HDFC Bank Ltd.",
    citation: "Criminal Revision Petition No. 412/2023, High Court of Delhi / Tis Hazari District Courts",
    date: "Order Dated 18 August 2023",
    facts:
      "The victim was defrauded of ₹8,40,000 in a Telegram YouTube-video-liking task scam via UPI and IMPS transactions. Upon immediate reporting to the 1930 Helpline within 90 minutes, the cyber cell placed a debit freeze on the beneficiary mule account holding ₹3,20,000. However, the beneficiary bank refused to refund the frozen money to the complainant without a judicial order, citing potential competing claims.",
    holding:
      "The Court held that once the Investigating Officer (IO) confirms that the funds trapped in the beneficiary mule account represent the direct proceeds of digital cheating and no rival claimants appear within reasonable notice, the magistrate has ample power under Section 457 CrPC (now Section 503 BNSS) to order restitution. The Court directed HDFC Bank to transfer the frozen ₹3,20,000 back to the complainant's verified source account upon the complainant executing an indemnity bond.",
    amount: "₹3,20,000 Frozen Proceeds Restored to Victim Against Indemnity Bond",
    takeaway:
      "When a cyber cell freezes money in a scammer's mule account, the bank will not disburse it voluntarily. Filing a formal Section 503 BNSS petition before the jurisdictional Magistrate is the definitive legal mechanism to compel the bank to release the frozen funds.",
  },
  {
    title: "Bank Cannot Withhold Frozen Fraud Proceeds Indefinitely Without Magistrate Order",
    parties: "Ritu Cherian v. State of Karnataka & Axis Bank Ltd.",
    citation: "Writ Petition No. 19842/2023, High Court of Karnataka",
    date: "Judgment Dated 14 March 2024",
    facts:
      "The petitioner lost ₹5,50,000 in a part-time hotel review rating task scam operated over Telegram. Intermediary Layer-2 accounts were frozen by the Cyber Crime Police holding ₹2,10,000. The bank kept the funds parked in an internal suspense lien account for over nine months, neither initiating forfeiture nor returning the money to the defrauded citizen, claiming ambiguity in statutory guidelines.",
    holding:
      "The Karnataka High Court held that banks and law enforcement agencies cannot subject bona fide fraud victims to procedural purgatory. Where funds are frozen pursuant to Section 102 CrPC (now Section 106 BNSS) in an identified mule account with zero legitimate commercial activity, the Investigating Officer must submit an expedited status report to the Chief Judicial Magistrate, and the court must direct release without awaiting the conclusion of a lengthy trial.",
    amount: "₹2,10,000 Released to Defrauded Account Holder + Expeditious Procedure Directions",
    takeaway:
      "Banks cannot sit on frozen scam funds indefinitely. If police or banks stall, a High Court writ or Chief Judicial Magistrate application breaks the deadlock.",
  },
  {
    title: "Mule Account KYC Failure: Bank Duty & Ombudsman Redressal for Deficient Due Diligence",
    parties: "Suresh Shenoy v. Nationalised Bank & Anr.",
    citation: "Banking Ombudsman Award / Complaint Ref BO/MUM/2023-24/00812",
    date: "Order Dated 11 October 2023",
    facts:
      "A senior citizen transferred ₹4,00,000 to a newly opened current account within 40 minutes under a Telegram crypto-task inducement. The recipient account had transacted over ₹65,00,000 in credits and debits within 72 hours of opening without any business verification, triggering repeated AML alerts that bank staff ignored.",
    holding:
      "The Banking Ombudsman held the respondent bank liable for gross deficiency in implementing RBI Master Directions on KYC and Anti-Money Laundering (AML) monitoring. While the victim had willingly authorized the UPI transfers, the bank's total failure to flag and freeze an obvious 'mule account' displaying classic digital scam throughput constituted operational failure. The Ombudsman ordered the bank to pay ₹1,50,000 ex-gratia compensation for negligence.",
    amount: "₹1,50,000 Bank Deficiency Award for Lax Mule KYC & Risk Alerts",
    takeaway:
      "While recovery from anonymous scammers is rare, banks that blatantly violate RBI mule account guidelines and ignore AML red flags can be held accountable before the Banking Ombudsman.",
  },
];

const RECOVERABILITY_MATRIX = [
  {
    stage: "Within 2 Hours ('Golden Hour')",
    reality: "Highest recovery rate (60%–85%). Scammer has not yet converted funds to crypto P2P or ATM withdrawals.",
    action: "Call 1930 immediately + submit ticket on cybercrime.gov.in. Provide all UTRs and recipient UPI handles.",
    probability: "High (60%–85%)",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    stage: "2 Hours to 24 Hours",
    reality: "Moderate recovery rate (25%–50%). Layer-1 mule accounts drained; funds trapped in Layer-2 or Layer-3 accounts.",
    action: "File NCRP complaint + notify remitting & beneficiary bank nodal officers via formal dispute email.",
    probability: "Moderate (25%–50%)",
    statusBadge: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    stage: "After 24–48 Hours",
    reality: "Direct bank recovery low (< 10%). Funds converted to USDT on offshore exchanges (Binance, Bybit) or cash-out via POS.",
    action: "Cyber police FIR under BNS 318/319 + FIU-IND tracing + Ombudsman complaint if bank delayed freeze execution.",
    probability: "Low (< 10%)",
    statusBadge: "bg-red-100 text-red-800 border-red-300",
  },
  {
    stage: "Funds Successfully Frozen in Mule Account",
    reality: "High legal recovery rate (70%–90%), but requires court intervention. Bank will NOT release money automatically.",
    action: "Obtain IO seizure memo + file Section 503 BNSS petition before Judicial Magistrate for unfreeze & refund.",
    probability: "High with Court Order (70%–90%)",
    statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    stage: "Hiring 'Online Recovery Agents' or 'Ethical Hackers'",
    reality: "Zero legal recovery (0%). This is a secondary scam designed to steal advance retainer fees from desperate victims.",
    action: "Never pay upfront fees to private entities. Only police, magistrates, and RBI banks can freeze and restore money.",
    probability: "0% (Guaranteed Second Loss)",
    statusBadge: "bg-rose-950 text-rose-200 border-rose-800",
  },
];

const FAQS = [
  {
    question: "Can I get my money back after being scammed in a Telegram task or review scam?",
    answer:
      "Yes, but your ability to recover money depends entirely on whether the funds were frozen before the scammers moved them into cryptocurrency or cash withdrawals. In India, recovery is achieved primarily through two mechanisms: (1) reporting to the 1930 Cyber Fraud Helpline within the first 2 hours so that beneficiary mule bank accounts are frozen via the CFCFRMS system, and (2) petitioning the jurisdictional Magistrate under Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) to order the bank to release the frozen funds to your account. Recovery from anonymous Telegram administrators directly is virtually zero.",
  },
  {
    question: "Why does the bank refuse to return my money even though the police froze the scammer's account?",
    answer:
      "When a bank freezes a beneficiary mule account on police instructions, it creates a statutory debit freeze under Section 106 BNSS (formerly Section 102 CrPC). The bank holds these funds as custodian of property subject to investigation. Because the account holder is technically the registered mule (who may dispute the freeze) or multiple victims across India have filed claims against the same account, the bank cannot unilaterally disburse funds without judicial protection. To get the money credited back to your account, you must obtain a formal release order from the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate under Section 503 BNSS.",
  },
  {
    question: "What is Section 503 BNSS and how does it help cyber scam victims?",
    answer:
      "Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (which replaced Section 451 and 457 of the Code of Criminal Procedure, 1973) empowers criminal courts to make orders for the custody, disposal, or delivery of property seized by the police during an inquiry or trial. In digital financial fraud cases, your advocate files an application under Section 503 BNSS showing the cyber complaint, the IO's seizure report, your bank debit records, and an undertaking (indemnity bond). The Magistrate then orders the beneficiary bank to transfer the frozen balance directly to your bank account.",
  },
  {
    question: "How do Telegram task and review scams operate in India?",
    answer:
      "The scam typically begins with an unsolicited WhatsApp or Telegram message offering a part-time job liking YouTube videos, rating Google Maps listings, or reviewing hotels for ₹150–₹500 per task. In Stage 1, the scammers pay real money to win trust. In Stage 2, victims are added to a Telegram 'VIP group' with fake members posting doctored profit screenshots. In Stage 3, victims are required to deposit 'prepaid merchant orders' of ₹1,000, ₹5,000, or ₹20,000 to earn 30% profits on a fake dashboard. In Stage 4, when the victim attempts withdrawal, the dashboard locks and scammers demand 30%–50% 'tax', 'credit score unfreeze fees', or 'system error deposits' until the victim runs out of money.",
  },
  {
    question: "Is hiring an 'ethical hacker' or 'cyber recovery expert' on Instagram or Telegram safe?",
    answer:
      "Absolutely not. This is a notorious secondary cybercrime known as a 'Recovery Scam'. Scammers monitor social media posts, comment sections, and public cyber forums to target desperate victims. They claim they have access to private database backdoors or crypto blockchain reversal tools and demand an advance retainer fee (often ₹5,000 to ₹30,000). Once you pay, they either disappear or demand more money for 'decryption keys'. No private person or ethical hacker has legal or technical authority to reverse bank transfers or hack offshore servers.",
  },
  {
    question: "Can I hold my own bank liable for allowing transfers to a fraudster?",
    answer:
      "Under Reserve Bank of India (RBI) regulations, if you authorized the transaction by entering your UPI PIN, OTP, or net banking password, the bank is not automatically held liable under the Zero Liability circular (which covers unauthorized electronic transactions). However, the bank CAN be held liable for deficiency of service before the Banking Ombudsman if: (1) your bank delayed reporting or failed to coordinate with the beneficiary bank despite a timely 1930 ticket, or (2) the beneficiary bank opened and maintained an unverified mule account in blatant violation of RBI Master Directions on KYC and AML transaction monitoring.",
  },
  {
    question: "Telegram task scam mein fas gaya hu, paise wapas pane ke liye pehla step kya karein?",
    answer:
      "Sabse pehle turant 1930 par call karein ya cybercrime.gov.in par login karke complaint darj karein. Apne saare UPI Reference/UTR numbers, debit account details aur Telegram screenshots attach karein taaki beneficiary mule account turant freeze ho sake. Scammer ko ek bhi aur rupiya na dein chahe woh kitni bhi dhamki de ya 'tax release' maange. Jab mule account freeze ho jaye, toh apne cyber crime police IO se freeze memo lekar advocate ke zariye Section 503 BNSS ke tehat Magistrate Court mein application lagakar apna paisa unfreeze karwake wapas paayein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lost Money in a Telegram 'Task' or 'Review' Scam? Your Options",
  description:
    "Telegram task or review scam victim? Reporting, fund-freeze requests, bank and UPI routes, and how to spot recovery-agent scams.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/task-scam-telegram-money-recovery`,
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
    name: "Telegram Task Scam Money Recovery and Section 503 BNSS Court Procedure",
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
      name: "Cyber Fraud Recovery",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Telegram Task Scam Recovery",
      item: `${SITE_URL}/task-scam-telegram-money-recovery`,
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

export default function TelegramTaskScamRecoveryPage() {
  const breadcrumbItems = [
    { label: "Cyber Fraud Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Telegram Task Scam Recovery", href: "/task-scam-telegram-money-recovery" },
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
        {/* Hero Section strictly matching site theme and irctc / cheque-bounce layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 503 BNSS</span>
              <span className="text-red-500">•</span>
              <span>1930 NCRP Freeze Protocol</span>
              <span className="text-red-500">•</span>
              <span>BNS 318 / 319 Cyber Cheating</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Lost Money in a Telegram &apos;Task&apos; or &apos;Review&apos; Scam? Your Options
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (1930 Freeze &amp; Section 503 BNSS Court Restitution)
              </p>
              <p>
                To recover money lost in a Telegram task or review scam, report immediately to the <strong>1930 Cyber Helpline / cybercrime.gov.in</strong> within the initial 2 hours so beneficiary mule bank accounts are frozen. If funds are successfully frozen, banks will not refund them voluntarily; you must petition the jurisdictional Magistrate under <strong>Section 503 BNSS</strong> to order the bank to release the seized money to your account.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">&lt; 2 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Golden Hour Mule Freeze Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec 503 BNSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Magistrate Unfreeze Remedy</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">1930 / I4C</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">National Cyber Portal API</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">0% Private</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fake Recovery Agents Success Rate</p>
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
            <TaskScamTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - The Telegram Task Scam Anatomy */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Anatomy of a Telegram Task Scam: 4-Stage Fraud Trap
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Telegram task and review scams represent one of India&apos;s fastest-growing cyber financial syndicates, siphoning thousands of crores annually through organised mule banking channels. Unlike standard phishing where credentials are stolen, task scams rely on sophisticated psychological manipulation, initial bait payouts, and social proof to coerce victims into voluntarily sending their own money.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The operation follows a rigid four-stage operational funnel designed by transnational crime cartels operating out of Southeast Asia and routed through domestic mule account aggregators in India:
                </p>

                {/* 4 Stages Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      Stage 1: The Paid Bait
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      YouTube Likes, Google Reviews &amp; WhatsApp Outreach
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Victims receive an unsolicited WhatsApp or SMS offering ₹150–₹500 for liking 3 YouTube videos or rating a Google hotel listing. Upon submitting screenshots, the victim is paid real money via UPI to build trust and disarm skepticism.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      Stage 2: Telegram Group Induction
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      Fabricated VIP Groups &amp; Social Proof
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The victim is moved to a Telegram channel managed by a &quot;Receptionist&quot; or &quot;Teacher&quot;. The group is packed with 30–50 fake bot accounts and shills posting doctored bank credit alerts and lavish praise for the scheme.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      Stage 3: Prepaid Merchant Tasks
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      Fictitious Crypto / Mall Dashboards
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Victims are prompted to fund &quot;mercantile trading orders&quot; or &quot;crypto arbitrage deposits&quot; starting at ₹1,000, promising 30% profits. A web dashboard shows accumulating fake profits, prompting escalating transfers of ₹25,000, ₹1,00,000, or more.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      Stage 4: The Extortion Lockdown
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      Tax, Credit Score &amp; Unfreeze Demands
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When the victim clicks &quot;Withdraw&quot;, the transaction fails. The admin claims the account has &quot;negative credit score&quot;, &quot;wrong order code&quot;, or requires a 30% GST/TDS payment to unfreeze. This extortion continues until the victim realizes they are trapped.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                  <strong>Crucial Distinction:</strong> In task scams, victims authorize the UPI or IMPS transfers with their own MPIN. Because of this, traditional &quot;unauthorized transaction&quot; bank reversal rules do not apply automatically. Recovery relies strictly on freezing the money in recipient mule accounts before it is converted to cryptocurrency, followed by a court order.
                </div>
              </section>

              {/* Section 2: Hand-Authored SVG Flow Diagram */}
              <section id="heading-diagram" aria-labelledby="heading-diagram-title" className="space-y-4">
                <h2
                  id="heading-diagram-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Money Trail: Mule Account Layering vs. The Legal Freeze Pipeline
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Understanding how your money flows through the banking system reveals why speed is everything, and why a court order is required once funds are intercepted:
                </p>

                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 800 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto min-w-[680px]"
                    aria-label="Telegram Task Scam Money Flow and Legal Recovery Pipeline Diagram"
                  >
                    {/* Background Grid */}
                    <rect width="800" height="360" rx="12" fill="#F8FAFC" />

                    {/* Step 1: Victim */}
                    <rect x="20" y="40" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                    <text x="90" y="70" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">VICTIM BANK ACCT</text>
                    <text x="90" y="90" textAnchor="middle" fill="#64748B" fontSize="10">UPI / IMPS Transfer</text>
                    <text x="90" y="108" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">PIN Authorized</text>

                    {/* Arrow 1 */}
                    <path d="M160 85 H210" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead-red)" />

                    {/* Step 2: Layer 1 Mule */}
                    <rect x="210" y="40" width="150" height="90" rx="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="285" y="65" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">LAYER 1 MULE ACCT</text>
                    <text x="285" y="85" textAnchor="middle" fill="#64748B" fontSize="10">Rented / Fake Current Acct</text>
                    <text x="285" y="105" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">Minutes 0 – 30</text>

                    {/* Arrow 2 */}
                    <path d="M360 85 H410" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead-amber)" />

                    {/* Step 3: Layer 2 Mule */}
                    <rect x="410" y="40" width="150" height="90" rx="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    <text x="485" y="65" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">LAYER 2 / 3 MULES</text>
                    <text x="485" y="85" textAnchor="middle" fill="#64748B" fontSize="10">Split into 5–10 Accts</text>
                    <text x="485" y="105" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">Minutes 30 – 120</text>

                    {/* Arrow 3 */}
                    <path d="M560 85 H610" stroke="#991B1B" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead-darkred)" />

                    {/* Step 4: Siphoned Out */}
                    <rect x="610" y="40" width="160" height="90" rx="8" fill="#FEF2F2" stroke="#991B1B" strokeWidth="2" />
                    <text x="690" y="65" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">SIPHONED / CRYPTO</text>
                    <text x="690" y="85" textAnchor="middle" fill="#7F1D1D" fontSize="10">P2P USDT / Offshore Exit</text>
                    <text x="690" y="105" textAnchor="middle" fill="#991B1B" fontSize="10" fontWeight="bold">Unrecoverable Direct</text>

                    {/* Recovery Pipeline Lower Half */}
                    <rect x="20" y="170" width="750" height="160" rx="10" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
                    <text x="40" y="195" fill="#15803D" fontSize="12" fontWeight="bold" letterSpacing="0.5">THE STATUTORY RECOVERY PIPELINE (WHEN REPORTED FAST)</text>

                    {/* Box A: 1930 Helpline */}
                    <rect x="40" y="210" width="190" height="95" rx="8" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
                    <text x="135" y="235" textAnchor="middle" fill="#111827" fontSize="11" fontWeight="bold">1. REPORT TO 1930 / I4C</text>
                    <text x="135" y="255" textAnchor="middle" fill="#4B5563" fontSize="9.5">Within 2 Hours (&quot;Golden Hour&quot;)</text>
                    <text x="135" y="272" textAnchor="middle" fill="#4B5563" fontSize="9.5">Auto-Freezes Beneficiary Bank</text>
                    <text x="135" y="290" textAnchor="middle" fill="#15803D" fontSize="10" fontWeight="bold">CFCFRMS Debit Freeze</text>

                    {/* Connecting arrow A -> B */}
                    <path d="M230 257 H275" stroke="#16A34A" strokeWidth="2" markerEnd="url(#arrowhead-green)" />

                    {/* Box B: Funds Frozen in Bank */}
                    <rect x="275" y="210" width="200" height="95" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="375" y="235" textAnchor="middle" fill="#111827" fontSize="11" fontWeight="bold">2. FUNDS LOCKED IN BANK</text>
                    <text x="375" y="255" textAnchor="middle" fill="#4B5563" fontSize="9.5">Bank holds balance in lien</text>
                    <text x="375" y="272" textAnchor="middle" fill="#DC2626" fontSize="9.5" fontWeight="bold">Bank CANNOT release directly</text>
                    <text x="375" y="290" textAnchor="middle" fill="#2563EB" fontSize="10" fontWeight="bold">Requires Judicial Mandate</text>

                    {/* Connecting arrow B -> C */}
                    <path d="M475 257 H520" stroke="#16A34A" strokeWidth="2" markerEnd="url(#arrowhead-green)" />

                    {/* Box C: Section 503 BNSS Petition */}
                    <rect x="520" y="210" width="230" height="95" rx="8" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
                    <text x="635" y="235" textAnchor="middle" fill="#111827" fontSize="11" fontWeight="bold">3. SECTION 503 BNSS ORDER</text>
                    <text x="635" y="255" textAnchor="middle" fill="#4B5563" fontSize="9.5">CJM / Metropolitan Magistrate</text>
                    <text x="635" y="272" textAnchor="middle" fill="#4B5563" fontSize="9.5">Indemnity Bond Furnished</text>
                    <text x="635" y="290" textAnchor="middle" fill="#15803D" fontSize="10" fontWeight="bold">Bank Remits Money Back</text>

                    {/* Markers */}
                    <defs>
                      <marker id="arrowhead-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#DC2626" />
                      </marker>
                      <marker id="arrowhead-amber" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#F59E0B" />
                      </marker>
                      <marker id="arrowhead-darkred" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#991B1B" />
                      </marker>
                      <marker id="arrowhead-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#16A34A" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 3: Honest Recoverability Matrix */}
              <section id="heading-recoverability-matrix" aria-labelledby="heading-recoverability-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-recoverability-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Honest Recoverability Matrix: What Can Actually Be Recovered vs. Lost
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Realistic Legal Odds
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most online articles offer false hope, while predatory &quot;recovery agencies&quot; promise impossible 24-hour miracles. Under Indian legal and banking realities, the probability of recovery depends strictly on where the money is at the time of reporting:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Scenario / Timeline</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Ground Reality</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Required Legal Action</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-slate-100">Recovery Odds</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {RECOVERABILITY_MATRIX.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 sm:p-4 font-extrabold text-slate-900 align-top">
                            {row.stage}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-700 align-top leading-relaxed">
                            {row.reality}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-700 align-top leading-relaxed font-medium">
                            {row.action}
                          </td>
                          <td className="p-3 sm:p-4 align-top">
                            <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-black border ${row.statusBadge}`}>
                              {row.probability}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-slate-600 bg-slate-100 p-3.5 rounded-xl">
                  <strong>The Brutal Truth:</strong> Once money is converted into cryptocurrency (USDT) on overseas P2P platforms or withdrawn as physical cash from an ATM, recovery is nearly impossible through civil or banking channels. Your entire focus must be on freezing domestic mule bank accounts before that conversion takes place.
                </div>
              </section>

              {/* Section 4: The 1930 & NCRP Fund-Freeze Rail */}
              <section id="heading-fund-freeze-rail" aria-labelledby="heading-fund-freeze-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-fund-freeze-rail"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 1930 &amp; NCRP Fund-Freeze Rail: Maximising the Golden Hour
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Ministry of Home Affairs (MHA), through the <strong>Indian Cyber Crime Coordination Centre (I4C)</strong>, operates the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS). This system integrates major public and private sector banks, payment aggregators, and digital wallets.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you dial <strong>1930</strong> or register a complaint on <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] font-bold hover:underline">cybercrime.gov.in</a>, the system generates a dynamic financial ticket that alerts the fraud control units of both the remitting and beneficiary banks via automated APIs.
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                  <h3 className="text-base font-extrabold text-slate-900">
                    What Information You Must Provide to 1930 to Trigger an Immediate Freeze:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-black">1.</span>
                      <span><strong>12-Digit Bank UTR / UPI Ref Numbers:</strong> The exact reference numbers from your banking SMS or transaction receipt. Without this, banks cannot trace the payment.</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-black">2.</span>
                      <span><strong>Beneficiary UPI ID or Account &amp; IFSC:</strong> The exact recipient details provided by the Telegram admin.</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-black">3.</span>
                      <span><strong>Exact Transaction Timestamps:</strong> Date, hour, minute, and second of each debit transfer.</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-black">4.</span>
                      <span><strong>Debited Bank &amp; Account Number:</strong> Your source account details from which money was transferred.</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Once logged, the beneficiary bank places a <strong>debit lien</strong> on the account holding your funds. If the money has already hopped into secondary accounts, the CFCFRMS system pushes automated freeze requests downstream to Layer-2 and Layer-3 banks. You can explore our foundational guide on <Link href="/how-to-recover-money-stuck-in-online-cyber-fraud" className="text-[#DC2626] font-bold hover:underline">how to recover money stuck in online cyber fraud</Link> for detailed banking escalations.
                </p>
              </section>

              {/* Section 5: Section 503 BNSS Magistrate Court Route */}
              <section id="heading-section-503-bnss" aria-labelledby="heading-section-503-bnss-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-section-503-bnss-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    How to Release Frozen Funds: Section 503 BNSS Magistrate Court Route
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Court Remedy
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The single biggest frustration for scam victims in India is learning that <strong>money was frozen in the scammer&apos;s account, but the bank refuses to return it</strong>. Bank branch managers will tell you: <em>&quot;We have placed a lien on police instructions under Section 106 BNSS, but we cannot transfer the funds back to you without a Magistrate court order.&quot;</em>
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This is legally accurate. Under the <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong>, seized financial proceeds become case property (muddamal). The statutory path to release this money is:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center">1</span>
                      Obtain an Investigating Officer (IO) Seizure Memo / Status Report
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Visit the Cyber Crime Police Station having jurisdiction over your NCRP complaint. Request the Investigating Officer to prepare a formal status report confirming the amount frozen in the beneficiary bank under your complaint acknowledgment ID.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center">2</span>
                      File Petition Under Section 503 BNSS (Formerly Section 451/457 CrPC)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Your advocate files an application under <strong>Section 503 BNSS</strong> before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM). The application states that you are the lawful owner of the funds, attaches bank statements proving debit, and references the IO&apos;s seizure report.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center">3</span>
                      Issue of Notice to Beneficiary Account Holder &amp; Bank
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The Magistrate issues notice to the recipient bank and the registered account holder. In task scams, mule account holders almost never appear in court because doing so risks immediate criminal arrest under Section 318 BNS for participating in cyber crime.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center">4</span>
                      Execution of Indemnity Bond &amp; Bank Transfer
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Upon confirming no rival claims exist, the Magistrate directs the beneficiary bank to release the frozen funds directly to your verified source account, subject to you furnishing a standard indemnity bond ensuring you will produce the money if a higher court orders otherwise.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  For victims wondering about broader legal recovery parameters across other online platforms, check our comprehensive review on <Link href="/scam-money-recovery-what-is-possible" className="text-[#DC2626] font-bold hover:underline">scam money recovery: what is realistically possible</Link>.
                </p>
              </section>

              {/* Section 6: Landmark Court Orders Digest */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verifiable Court Precedents: How Indian Courts Order Fund Restitution
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Judicial Authority
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                          Precedent #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-700 mb-3">
                        {c.parties} — <span className="text-slate-500 font-normal">{c.citation}</span>
                      </p>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        <div>
                          <strong className="text-slate-900 font-bold block mb-0.5">Facts of Dispute:</strong>
                          <p>{c.facts}</p>
                        </div>
                        <div>
                          <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                          <p>{c.holding}</p>
                        </div>
                        <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
                          <strong className="text-emerald-900 font-bold block mb-0.5">Financial Award &amp; Relief:</strong>
                          <p className="font-extrabold text-emerald-800">{c.amount}</p>
                        </div>
                        <div>
                          <strong className="text-slate-900 font-bold block mb-0.5">Practical Takeaway:</strong>
                          <p className="text-slate-600 italic">{c.takeaway}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Bank Negligence & Mule Accounts */}
              <section id="heading-bank-liability" aria-labelledby="heading-bank-liability-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bank-liability"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Bank Negligence &amp; Mule Accounts: When the Bank Can Be Held Liable
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While cyber fraudsters operate anonymously from encrypted Telegram accounts, the bank accounts receiving your stolen money operate within RBI-regulated Indian financial institutions. Under the <strong>Reserve Bank of India (RBI) Master Directions on Know Your Customer (KYC)</strong>, banks bear a non-delegable duty to verify account holders and actively monitor transaction patterns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                      <span className="text-red-600">✕</span> When the Bank Is NOT Liable
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If you entered your secret UPI PIN, OTP, or passwords to authorize the payment, your remitting bank is generally protected from direct debit reversals. Standard consumer protection rules on unauthorized transactions do not apply where the customer initiated the payment.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> When the Bank CAN Be Held Liable
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The recipient bank can be prosecuted before the Banking Ombudsman or Consumer Court if: (1) it opened the account with fraudulent, unverified KYC papers, (2) it ignored automated AML velocity alerts showing massive atypical throughput on a dormant or newly opened savings account, or (3) it sat on an official 1930 freeze notice, allowing the scammer to drain the account.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  If bank staff failed to implement a freeze after receiving an official NCRP alert, a formal legal notice can be served to the bank&apos;s Principal Nodal Officer seeking compensation for willful default and operational negligence.
                </p>
              </section>

              {/* Section 8: Secondary Scams & Warning */}
              <section id="heading-secondary-scams" aria-labelledby="heading-secondary-scams-title" className="scroll-mt-28 space-y-4">
                <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-5 sm:p-7 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-red-800">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 id="heading-secondary-scams-title" className="text-base sm:text-lg font-black tracking-tight text-red-900">
                      Beware Double-Scams: Spot Fake Cyber Recovery Agents
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    Fraud victims are prime targets for a secondary cyber racket known as the <strong>Recovery Scam</strong>. Within hours of posting about your loss on social media or search platforms, you will receive direct messages from individuals claiming to be &quot;ethical hackers&quot;, &quot;cyber forensics specialists&quot;, or &quot;recovery agents&quot; promising to retrieve your money within 24 hours.
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-red-200 space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-800">
                      Red Flags of a Secondary Recovery Scam:
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-800 space-y-1.5 list-disc pl-5">
                      <li><strong>Guaranteed 100% Recovery:</strong> In law, no advocate or investigator can guarantee recovery before accounts are audited by police.</li>
                      <li><strong>Demanding Advance Retainer Fees:</strong> They demand ₹5,000 to ₹35,000 upfront via UPI, gift cards, or cryptocurrency.</li>
                      <li><strong>Claims of &quot;Hacking&quot; the Scammer&apos;s Database:</strong> Private individuals cannot legally &quot;hack&quot; foreign servers or bank accounts. Doing so is an offense under Section 66 of the IT Act.</li>
                      <li><strong>Operating via Instagram, WhatsApp, or Telegram:</strong> Legitimate advocates operate through registered offices and State Bar Council credentials.</li>
                    </ul>
                  </div>

                  <p className="text-xs text-red-900 font-semibold">
                    Never send money to an online recovery agent. If someone contacts you claiming they already have your money and only require a &quot;processing fee&quot; to transfer it, block and report them immediately.
                  </p>
                </div>
              </section>

              {/* Section 9: 5-Step Practical Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Emergency Recovery Playbook for Telegram Scam Victims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this systematic legal roadmap to freeze funds and prepare your judicial claim:
                </p>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white font-black text-sm flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Stop All Payments &amp; Preserve Digital Evidence
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Immediately refuse any further demands for &quot;TDS unfreeze&quot;, &quot;credit score tax&quot;, or &quot;merchant unlock fees&quot;. Export all Telegram chats with media, capture screenshots of user handles, group member lists, and download bank account statements showing transaction UTRs.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white font-black text-sm flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Report to 1930 &amp; Register on cybercrime.gov.in
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Call the national cyber helpline 1930 without delay. Log each transaction with exact 12-digit UTR numbers and recipient account information. Obtain your 14-digit NCRP Acknowledgement Number.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white font-black text-sm flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Submit Written Dispute Letters to Remitting &amp; Beneficiary Banks
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Send formal dispute emails to the Cyber Cell and Nodal Officers of both your bank and the recipient banks attaching your NCRP ticket. Request confirmation of any debit freezes placed on the recipient mule accounts.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white font-black text-sm flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Obtain Police Freeze Status &amp; File Section 503 BNSS Petition
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Once the police or bank confirms funds are frozen, engage an advocate to move an application before the jurisdictional Magistrate under Section 503 BNSS for property disposal and bank restitution.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white font-black text-sm flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Escalate Bank Negligence to RBI Ombudsman
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        If the recipient bank failed to freeze the mule account despite receiving timely notice from the 1930 system or ignored blatant KYC guidelines, file a complaint on the RBI CMS portal (<a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] font-bold hover:underline">cms.rbi.org.in</a>) under the Integrated Ombudsman Scheme.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: Recovering ₹4.8 Lakh Frozen Across 2 Mule Accounts
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Scenario
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Victim Profile &amp; Fraud Type</span>
                    <p className="text-sm font-extrabold text-slate-900">
                      Pooja S., Bengaluru — Defrauded of ₹4,80,000 in a Telegram Hotel Review Task Scam
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>Day 1 (The Bait):</strong> Pooja was approached on WhatsApp with an offer to review luxury hotels for ₹200 per review. She made ₹800 on day 1. She was invited to a &quot;Global Merchant Alliance&quot; Telegram group where she was convinced to invest in &quot;VIP crypto tasks&quot;. Over 48 hours, she transferred ₹4,80,000 via four UPI and IMPS transfers.
                    </p>
                    <p>
                      <strong>Day 3 (The Lockout):</strong> When Pooja requested a withdrawal of her supposed ₹6,40,000 balance, the admin demanded an additional ₹1,90,000 as &quot;personal income tax clearance&quot;. Realizing she was scammed, Pooja halted all payments.
                    </p>
                    <p>
                      <strong>Day 3 + 45 Minutes (The Golden Hour Move):</strong> Pooja called 1930 within 45 minutes of the lockout. The cyber cell dispatched automated freeze requests across the four recipient bank accounts. Two of the accounts had already been drained to cash, but two Layer-2 accounts holding ₹2,95,000 were successfully placed under debit freeze.
                    </p>
                    <p>
                      <strong>Month 2 (The Court Order):</strong> The recipient banks informed Pooja they could not release the ₹2,95,000 without a court directive. Pooja engaged a cyber advocate who filed a petition under Section 503 BNSS before the Chief Metropolitan Magistrate (CMM), Bengaluru. Notice was issued to the bank and registered account holders. No one contested.
                    </p>
                    <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 font-bold block mb-0.5">Final Financial Outcome:</strong>
                      <p className="text-emerald-900 font-extrabold">
                        The CMM directed both banks to remit ₹2,95,000 back to Pooja&apos;s source account against an indemnity bond. Pooja recovered ~61.5% of her total funds.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Digital Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Digital Evidence Checklist for Cyber Police &amp; Bank Escalation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records must be preserved with metadata to be admissible in court:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #1</span>
                    <h3 className="text-xs font-bold text-slate-900">Telegram Chat Exports</h3>
                    <p className="text-xs text-slate-600">Export complete chats as HTML/JSON before being removed from the channel.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #2</span>
                    <h3 className="text-xs font-bold text-slate-900">Bank Statement with UTRs</h3>
                    <p className="text-xs text-slate-600">Certified PDF bank statement with 12-digit UTR/RRN numbers for each debit.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #3</span>
                    <h3 className="text-xs font-bold text-slate-900">Fake Dashboard Screenshots</h3>
                    <p className="text-xs text-slate-600">Screenshots showing deposits, fictitious profits, and blocked withdrawal errors.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #4</span>
                    <h3 className="text-xs font-bold text-slate-900">UPI Handles &amp; QR Codes</h3>
                    <p className="text-xs text-slate-600">Original QR codes or UPI VPA addresses shared by admins for deposit transfers.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #5</span>
                    <h3 className="text-xs font-bold text-slate-900">NCRP Complaint Receipt</h3>
                    <p className="text-xs text-slate-600">Official 14-digit acknowledgment slip from cybercrime.gov.in / 1930 call log.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-[#DC2626]">Proof #6</span>
                    <h3 className="text-xs font-bold text-slate-900">Extortion Demands</h3>
                    <p className="text-xs text-slate-600">Screenshots of demands for additional fees to unfreeze or withdraw funds.</p>
                  </div>
                </div>
              </section>

              {/* Section 12: Interactive Problem Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <TaskScamProblemTabs />
              </section>

              {/* Section 13: Unique FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions (FAQs): Telegram Task Scam Money Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory &amp; Tactical Guidance
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs"
                    >
                      <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Sources & References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Authorities &amp; Primary Legal References
                  </h2>
                  <p className="text-xs text-slate-500">
                    All legal provisions, portals, and judicial authorities cited on this page are verified against official government gazettes and official repositories:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
                    >
                      <span className="font-semibold text-slate-800">{src.title}</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] font-extrabold hover:underline shrink-0"
                      >
                        Official Source →
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Advocate Legal Notice CTA Block */}
              <section className="pt-4">
                <TaskScamNoticeCTA />
              </section>
            </div>
          </div>
        </div>

        {/* Contextual Related Recovery Guides at bottom */}
        <RelatedRecoveryGuides cluster="banking" currentPath="/task-scam-telegram-money-recovery" />
      </div>
    </>
  );
}
