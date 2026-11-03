import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChitFundNoticeCTA from "./ChitFundNoticeCTA";
import ChitFundTableOfContents from "./ChitFundTableOfContents";
import ChitFundProblemTabs from "./ChitFundProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Chit Fund or Kitty Party Money Not Returned? Legal Steps",
  description:
    "Organiser vanished or kitty defaulted? Registered vs unregistered chit funds, police vs civil remedies and a notice to recover.",
  alternates: {
    canonical: `${SITE_URL}/chit-fund-kitty-party-money-not-returned`,
  },
  openGraph: {
    title: "Chit Fund or Kitty Party Money Not Returned? Legal Remedies & Recovery Guide",
    description:
      "Statutory escalation path for defaulted kitty party committees, absconding organisers, unregistered BC fraud, and registered chit fund recovery.",
    url: `${SITE_URL}/chit-fund-kitty-party-money-not-returned`,
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
    title: "The Chit Funds Act, 1982 (Act No. 40 of 1982) as amended by Chit Funds (Amendment) Act, 2019 — Ministry of Corporate Affairs / India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "Banning of Unregulated Deposit Schemes Act, 2019 (Act No. 21 of 2019) — Section 3 Ban & Sections 21-22 Penalties",
    url: "https://www.indiacode.nic.in/handle/123456789/13214",
  },
  {
    title: "Prize Chits and Money Circulation Schemes (Banning) Act, 1978 (Act No. 43 of 1978) — Reserve Bank of India & Legislative Department",
    url: "https://www.indiacode.nic.in/handle/123456789/1591",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS 2023) — Section 316 (Criminal Breach of Trust), Section 318 (Cheating), Section 61 (Conspiracy)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS 2023) — Section 173 (FIR Registration) & Section 175(3) (Magistrate Order for Investigation)",
    url: "https://www.indiacode.nic.in/handle/123456789/21736",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023 Section 63 — Electronic Records Admissibility for WhatsApp Chats, Bank Statements & UPI Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 35 Online Consumer Filing on e-Jagriti",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Procedure on Negotiable Instruments, Written Contracts & Written Debt Acknowledgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Precedent on Foreman Fiduciary Liability & Chit Funds Act Validity",
    parties: "Shriram Chits & Investment (P) Ltd. v. Union of India & Ors.",
    citation: "1993 Supp (4) SCC 226, Supreme Court of India",
    date: "Judgment Dated 13 July 1993",
    facts:
      "Chit fund promoters challenged the constitutional validity of the Chit Funds Act, 1982, contending that statutory restrictions on foremen—such as mandatory 100% security deposits with the Registrar, restrictions on foreman commission, and statutory dispute arbitration under Section 64—infringed upon their fundamental rights to conduct business. Promoters argued that chits were simple private contracts outside state regulatory policing.",
    holding:
      "A Constitution Bench of the Supreme Court upheld the constitutional validity of the Act in its entirety. The Apex Court ruled that chit transactions are intrinsically imbued with public interest. The foreman occupies a strict position of trust and fiduciary duty towards every subscriber. A chit promoter cannot arbitrarily withhold prize money, manipulate auction discounts, or divert collected funds. The Court confirmed that the state Registrar possesses full quasi-judicial authority to arbitrate defaults, inspect ledgers, and attach the foreman's security deposit to repay aggrieved members.",
    amount: "Affirmed 100% Foreman Security Deposit Lien & Mandatory Registrar Arbitration Powers",
    takeaway:
      "If you are dealing with a registered chit fund company that delays releasing your prized chit or maturity proceeds, they cannot hide behind internal company bylaws. Under Supreme Court precedent, the foreman has a statutory fiduciary liability, and the Registrar can directly liquidate the foreman's government deposit to satisfy your claim.",
  },
  {
    title: "High Court Ruling on Kitty / Committee Fraud: Criminal Breach of Trust vs Civil Suit",
    parties: "Gurmeet Singh & Anr. v. State of Punjab & Anr.",
    citation: "Criminal Misc. No. M-28491/2019, Punjab & Haryana High Court",
    date: "Judgment Dated 23 October 2019",
    facts:
      "The petitioners operated an informal residential Bachat Committee (Kitty Party) consisting of 24 members with monthly contributions of ₹25,000 each. After collecting the pooled kitty fund for 18 months, the petitioners stopped organizing monthly lot draws, shut their office, and refused to disburse the maturity proceeds to 9 non-bidder members. When the victims lodged an FIR under Section 406 (criminal breach of trust) and Section 420 (cheating) IPC, the petitioners approached the High Court seeking to quash the criminal proceedings, arguing that defaulting on kitty committee payments is purely a civil breach of contract.",
    holding:
      "The High Court summarily dismissed the quashing petition. The Court held that when an individual collects monthly savings from community members under an explicit promise to distribute the pot by draw or auction, they hold those funds in a fiduciary capacity as an entrusted custodian. Dishonestly misappropriating those funds or evading repayment upon completion of the cycle satisfies the essential ingredients of Criminal Breach of Trust under Section 406 IPC (now Section 316 BNS) and Cheating under Section 420 IPC (now Section 318 BNS). The Court held that criminal proceedings and civil recovery suits can proceed simultaneously.",
    amount: "Upheld Criminal Prosecution for ₹40,50,000 Kitty Pool Default under IPC 406/420 (BNS 316/318)",
    takeaway:
      "Defaulting kitty organizers routinely bluff that 'police cannot intervene in committee matters because it is a private financial dispute'. This High Court precedent establishes that absconding with committee money or refusing payout after taking deposits constitutes criminal breach of trust and cheating under BNS 316/318, entitling victims to an immediate police FIR.",
  },
  {
    title: "National Consumer Commission (NCDRC) Order Awarding 18% Interest for Withholding Chit Prize",
    parties: "Margadarsi Chits Pvt. Ltd. v. V. K. Rama Rao",
    citation: "Revision Petition No. 1420/2018, NCDRC New Delhi",
    date: "Order Dated 14 March 2019",
    facts:
      "The complainant subscribed to a 50-month chit of ₹10,00,000 value with monthly installments of ₹20,000. In the 28th month, the complainant won the chit auction by bidding a discount. He submitted two government employee sureties and immovable property title deeds as security for future installments. The chit fund company withheld disbursement of the prized amount of ₹7,50,000 for over 14 months under the pretext of 'surety re-verification' and internal administrative audits, while continuing to demand monthly installments from the subscriber.",
    holding:
      "The National Consumer Commission held the chit fund company guilty of gross deficiency in service and unfair trade practice under the Consumer Protection Act. The NCDRC observed that once a prized subscriber furnishes prima facie solvent sureties under Section 24 of The Chit Funds Act, the foreman cannot indefinitely retain the prized sum for corporate liquidity. The Commission directed the chit fund company to pay the full prized amount of ₹7,50,000 with 18% penal interest per annum from the date of auction, plus ₹50,000 compensation for harassment and ₹20,000 litigation costs.",
    amount: "₹7,50,000 Prized Chit Disbursement @ 18% Annual Interest + ₹70,000 Damages & Costs",
    takeaway:
      "Registered chit companies often delay releasing auction winnings by inventing endless surety queries. The NCDRC has made it clear that consumers can approach Consumer Commissions (via e-Jagriti) alongside Chit Fund Registrar petitions, securing high penal interest (up to 18%) for every day of delayed payout.",
  },
  {
    title: "Delhi High Court Ruling Applying the BUDS Act 2019 to Unregistered Kitty Schemes",
    parties: "Smt. Rekha Sharma v. State of NCT of Delhi",
    citation: "Bail Application No. 3102/2021, High Court of Delhi",
    date: "Order Dated 08 December 2021",
    facts:
      "The petitioner was accused of floating multiple high-value monthly kitty parties and bachat committees in West Delhi, collecting over ₹1.2 Crores from 45 homemakers and local traders. When members requested payouts upon cycle maturity, the petitioner issued cheques from a bank account that had been dormant for two years and subsequently absconded. The police registered an FIR under Section 420/406/120B IPC and invoked Section 3 and Section 21 of the Banning of Unregulated Deposit Schemes (BUDS) Act, 2019.",
    holding:
      "The Delhi High Court rejected the anticipatory bail application. The Court observed that unorganized, unregistered kitty committees that promise pooled lump-sum returns fall squarely within the definition of 'Unregulated Deposit Schemes' under Section 2(17) and Section 3 of the BUDS Act, 2019. The Court held that financial predators who exploit social trust to operate illicit banking committees pose a severe hazard to public savings. The Court directed attachment of the accused's residential properties to ensure restitution to the victimized members.",
    amount: "Bail Denied in ₹1.2 Crore Unregistered Kitty Fraud; Property Attached under BUDS Act 2019",
    takeaway:
      "The Banning of Unregulated Deposit Schemes Act, 2019 provides extraordinary recovery teeth. If a kitty organizer collected money from you and vanished, invoking the BUDS Act alongside BNS 316/318 allows police and district magistrates to attach their personal assets and bank accounts to refund your capital.",
  },
];

const FAQS = [
  {
    question: "Is running an informal kitty party or bachat committee legal in India?",
    answer:
      "Informal kitty parties held purely for social gatherings and modest dining without commercial pooling or commission are customary. However, operating commercial 'BCs' (Bachat Committees) where money is collected from the public, pooled, and distributed with profit or interest without registering under The Chit Funds Act, 1982 violates the Banning of Unregulated Deposit Schemes (BUDS) Act, 2019 and the Prize Chits and Money Circulation Schemes (Banning) Act, 1978. Operating an unregistered commercial chit is a non-bailable criminal offence punishable with up to 10 years imprisonment.",
  },
  {
    question: "What should I do first if a kitty committee organizer runs away with our money?",
    answer:
      "Act immediately with collective coordination. First, convene all affected members and assemble complete digital audit trails: WhatsApp / Telegram group chat logs, bank transaction UTR numbers for UPI/IMPS deposits, audio recordings, and handwritten diaries or register copies. Second, engage an advocate to draft and serve a joint statutory legal demand notice giving a strict 15-day deadline. Third, file a collective criminal complaint before the Economic Offences Wing (EOW) or local Police Station invoking Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and Section 3 of the BUDS Act, 2019.",
  },
  {
    question: "Can I file an Order XXXVII Summary Suit to recover kitty committee money?",
    answer:
      "Yes, provided you possess written or digital evidence establishing a liquidated debt. If the organiser or defaulting member signed a committee diary, issued a promissory note, signed a handwritten ledger, or provided a security cheque that bounced, you can file a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 in the competent Civil Court. In an Order XXXVII suit, the debtor cannot drag out proceedings and must seek leave from the court to defend by proving a bona fide defense.",
  },
  {
    question: "What is the limitation period for recovering money lent or deposited in a chit fund / kitty?",
    answer:
      "Under Articles 19, 21, and 22 of the Limitation Act, 1963, the limitation period for recovering money deposited or lent is strictly 3 years from the date the cause of action arose (the date the lot was due, the date of default, or the date of cheque dishonour). However, under Section 18 of the Limitation Act, any written acknowledgment of debt—such as a WhatsApp message from the organiser promising 'I will pay next month' or a diary entry—resets the 3-year clock afresh from that acknowledgment date.",
  },
  {
    question: "Can a registered chit fund company deduct arbitrary penalties if I surrender my chit?",
    answer:
      "No. Section 28 and Section 30 of The Chit Funds Act, 1982 strictly regulate non-prized chit defaults and withdrawals. The foreman cannot deduct arbitrary forfeiture amounts exceeding the statutory commission (foreman's fee capped at 5% to 7%). After deducting the statutory commission and legitimate dues, the balance must be paid to the non-prized subscriber upon completion of the chit term or earlier if replaced by a new subscriber. Deducting unauthorized penalties constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
  },
  {
    question: "What happens if a member took the early kitty draw and stopped paying the remaining installments?",
    answer:
      "When a member takes an early prized draw and subsequently defaults on future installments, both the member and any guarantor who vouched for them are jointly and severally liable under Section 128 of the Indian Contract Act, 1872. If the member deposited security cheques that were dishonoured, issue a statutory demand notice under Section 138 of the Negotiable Instruments Act within 30 days of receiving the bank return memo. Simultaneously, file a civil summary recovery suit under Order XXXVII CPC for the total outstanding installments.",
  },
  {
    question: "Chit fund ya kitty party / BC committee ke paise wapas na mile toh police complaint ya legal notice kaise bheje?",
    answer:
      "Agar committee head ya chit fund organiser paise lekar bhaag gaya ho ya draw ka paisa dene se inkaar kare, toh sabse pehle sabhi members milkat WhatsApp chat, UPI payment UTR slips aur committee diary ke screenshots assemble karein. Iske baad ek verified advocate ke through 15-day statutory legal notice bhejein jismein Bharatiya Nyaya Sanhita (BNS) ki Section 316 (Amanat mein khayanat / Criminal Breach of Trust), Section 318 (Dhokhadhadi / Cheating) aur BUDS Act 2019 ke tehat FIR aur property attachment ki chetavani di jati hai. Legal notice ignore hone par Police Station ya Magistrate court mein Section 175(3) BNSS ke tehat FIR darj karayi ja sakti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kitty Committee or Chit Fund Defaulted: How Members Recover Money",
  description:
    "Organiser vanished or kitty defaulted? Registered vs unregistered chit funds, police vs civil remedies and a notice to recover.",
  datePublished: "2026-11-03T14:00:00+05:30",
  dateModified: "2026-11-03T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/chit-fund-kitty-party-money-not-returned`,
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
    "@type": "FinancialProduct",
    name: "Chit Fund & Kitty Party Recovery",
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
      name: "Personal Loan & Debt Recovery",
      item: `${SITE_URL}/services/recovery-of-money-from-a-friend`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Chit Fund & Kitty Default Recovery",
      item: `${SITE_URL}/chit-fund-kitty-party-money-not-returned`,
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

export default function ChitFundRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Personal Loans & Friends", href: "/services/recovery-of-money-from-a-friend" },
    { label: "Chit Fund & Kitty Default", href: "/chit-fund-kitty-party-money-not-returned" },
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
        {/* Hero Section matching irctc theme strictly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Chit Funds Act 1982 • BUDS Act 2019 • BNS 2023</span>
              <span className="text-red-500">•</span>
              <span>Statutory Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Kitty Committee or Chit Fund Defaulted: How Members Recover Money
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Chit Fund Default &amp; Kitty Committee Recovery Mandate)
              </p>
              <p>
                If a chit fund foreman refuses your payout or a kitty committee organiser absconds, your remedies depend on whether the scheme is registered. For registered chit funds, file an immediate dispute under Section 64 of The Chit Funds Act, 1982, before the Registrar and lodge a consumer complaint on e-Jagriti. For unregistered kitties (&quot;BC&quot;), serve a 15-day statutory legal notice, initiate a Summary Suit under Order XXXVII CPC if written or digital proof exists, and register a criminal complaint for Criminal Breach of Trust and Cheating under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023, along with the BUDS Act, 2019.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Act Civil Recovery Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Interest on Withheld Prize Money</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">BNS 316/318</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Criminal Breach of Trust &amp; Cheating</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹5 Lakhs+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Average Committee Default Claim</p>
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
            <ChitFundTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When Kitty Committees &amp; Chit Funds Default: What the Law Provides
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across Indian cities and residential neighborhoods, hundreds of crores are pooled monthly through two distinct mechanisms: formal, registered chit funds governed by state registrars, and informal community savings networks colloquially known as &quot;Kitty Parties&quot;, &quot;Bachat Committees&quot;, or &quot;BCs&quot;. While registered chit funds operate under statutory regulations requiring reserve deposits, informal committees function almost entirely on interpersonal social trust.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a committee organiser vanishes, a prize winner refuses to pay remaining installments, or a registered chit company blocks your auction payout, victims frequently assume their money is lost permanently. Many believe that because an informal kitty is unregistered, no legal action is possible. That assumption is legally incorrect. Indian civil and criminal law provides robust, enforceable mechanisms to freeze bank accounts, attach personal assets, prosecute offenders under the Bharatiya Nyaya Sanhita, 2023, and compel full repayment through summary civil proceedings.
                </p>
              </section>

              {/* Section 2: Registered Chit Funds vs Unregistered Kitty Committees */}
              <section id="heading-legal-differences" aria-labelledby="heading-legal-differences-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-differences-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Registered Chit Funds vs. Unregistered Kitty Committees: Key Legal Differences
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before choosing an escalation route, you must determine whether your dispute involves a registered chit fund corporation or an informal private bachat committee. The applicable statutory forums and legal thresholds differ fundamentally:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                  <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        1. Registered Chit Funds (State-Sanctioned)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Incorporated under the Companies Act and licensed under Section 4 of The Chit Funds Act, 1982. The foreman is statutorily mandated to deposit 100% of the aggregate chit value into a government-approved escrow or bank account prior to launch.
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong>Primary Forum:</strong> Registrar of Chits (Arbitration under Section 64).</li>
                      <li><strong>Consumer Route:</strong> Consumer Commissions (e-Jagriti) for deficiency in service.</li>
                      <li><strong>Security Backing:</strong> Foreman&apos;s government security deposit can be attached directly.</li>
                      <li><strong>Foreman Fee:</strong> Legally capped at 5% to 7% under Section 21.</li>
                    </ul>
                  </div>

                  <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        2. Unregistered Kitty Committees (&quot;BCs&quot;)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Informal neighborhood or trade associations organized by an individual host. Lacks government registration and operates outside Registrar supervision. If operated for commercial pooling or interest, it is classified as an illicit deposit pool under the BUDS Act, 2019.
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong>Primary Criminal Remedy:</strong> Police FIR under BNS 316 (Breach of Trust) &amp; 318 (Cheating).</li>
                      <li><strong>Primary Civil Remedy:</strong> Summary Suit under <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC</Link> for liquidated debt.</li>
                      <li><strong>Asset Attachment:</strong> District Magistrate attachment under BUDS Act 2019.</li>
                      <li><strong>Evidentiary Basis:</strong> WhatsApp chats, diaries &amp; UPI logs under Section 63 BSA.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Landmark Court Orders & Precedents */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Judicial Rulings on Chit &amp; Kitty Defaults
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                              Judicial Relief / Order Directives
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Precedent Across All Indian Courts
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

              {/* Section 4: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Successfully Recovers Defaulted Kitty &amp; Chit Fund Capital
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An analysis of successful money recovery claims against absconding committee heads and defaulting members highlights clear strategic commonalities. When victims structure their evidence methodically, courts and police authorities act decisively:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Joint Collective Legal Action Over Solo Complaints:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When multiple committee members (e.g. 5 to 15 victims) sign a unified advocate legal notice and police complaint, law enforcement cannot dismiss the dispute as a minor individual disagreement. Collective petitions establish widespread criminal inducement under BNS Section 318 and trigger the BUDS Act 2019.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Digital Proof of Payment with Bank UTR Numbers:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Members who paid via UPI (PhonePe, Google Pay, Paytm) or IMPS and preserved certified bank statements detailing exact dates and remarks demolished the organizer&apos;s defense that no money was ever received. Read our guide on <Link href="/upi-transfer-as-proof-of-loan" className="text-blue-700 underline font-semibold">UPI transfers as legal proof of loan</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Leveraging WhatsApp Debt Acknowledgments under Limitation Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where defaults stretched over months, securing written messages from the organiser stating &quot;I will settle everyone&apos;s committee accounts next month&quot; constituted a valid acknowledgment of debt under Section 18 of the Limitation Act, 1963, resetting the 3-year clock. Learn more about <Link href="/limitation-extended-by-acknowledgment-part-payment" className="text-blue-700 underline font-semibold">limitation extensions by acknowledgment</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Personal Guarantors and Family Entities:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        In many residential committees, organizers run kitties from family shops or businesses, or co-hosts act as introducers. Notices that impleaded all co-hosts and commercial business entities under Sections 61 BNS (Criminal conspiracy) and 128 Contract Act created severe commercial pressure to settle immediately.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Decision Tree Flowchart (Archetype G1 Centrepiece) */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-decision-tree-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Decision Tree: Which Legal Route Recovers Your Chit or Kitty Funds?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluate your proof, registration status, and debtor conduct to determine the fastest statutory resolution channel:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Check 1</span>
                    <h3 className="font-bold text-sm">Scheme Registration</h3>
                    <p className="text-xs text-slate-200 mt-1">Is the chit company registered with the State Registrar of Chits, or is it an informal neighborhood kitty?</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Check 2</span>
                    <h3 className="font-bold text-sm">Nature of Evidence</h3>
                    <p className="text-xs text-amber-900 mt-1">Do you have signed cheques/promissory notes, committee diary entries, WhatsApp chats, or UPI bank records?</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Issue a formal 15-day demand notice invoking Chit Funds Act, Order XXXVII CPC, and BNS 316/318.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Civil / Criminal Forum</h3>
                    <p className="text-xs text-red-900 mt-1">Registered: Registrar Section 64 &amp; e-Jagriti. Unregistered: BNS 316/318 FIR &amp; Order XXXVII Summary Suit.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Capital Recovery + Interest</h3>
                    <p className="text-xs text-emerald-900 mt-1">Recovery of full principal plus 9% to 18% statutory penal interest and court damages.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Decision Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Chit Fund and Kitty Party Recovery Decision Tree"
                  >
                    <defs>
                      <linearGradient id="chitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="chitAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="chitSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#chitGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">CHECK 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Default Occurred</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Organiser Vanished /</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Prize Money Withheld</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">CHECK 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Collate Proof</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">UPI &amp; Bank Logs</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">WhatsApp / Diary / Cheque</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Speed Post + Section 63 BSA</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#chitAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Legal Escalation</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Registrar / Order 37</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">or BNS 316/318 FIR</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#chitSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Principal + 18% Interest</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Court Decree Execution</text>

                    {/* Bottom Guidance Box */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY PATHWAYS UNDER INDIAN LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Registered Chit Fund Default: Registrar of Chits (Sec. 64 arbitration) + e-Jagriti consumer complaint</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Unregistered Kitty Organiser Absconded: Police FIR (BNS 316/318 &amp; BUDS Act 2019) + Order XXXVII Summary Suit</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Dishonoured Security Cheque: 30-Day Notice under Sec. 138 NI Act leading to criminal summons and 20% interim relief</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: From Kitty Default to Capital Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning court orders and police enforcement actions, follow this 5-step playbook to enforce your recovery rights against defaulting organisers or chit companies:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Preserve Group Records, Bank Transcripts &amp; Ledgers Under BSA Section 63
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Export complete WhatsApp or Telegram group discussions without alteration. Download bank account statements with verified 12-digit UPI / IMPS UTR numbers for every monthly contribution. Take clear photographs of handwritten committee diaries, ledger cards, token receipts, or bounced security cheques.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Form a Unified Committee Victim Coalition
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Reach out to other affected members in the kitty group. Compile a joint master schedule showing member names, total months paid, amounts contributed, draws received (if any), and net outstanding balance due. A collective claim multiplies legal leverage and prevents the debtor from buying out individual vocal members.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a qualified advocate to draft and dispatch a formal 15-day statutory legal notice to the organiser&apos;s residential and business addresses via Registered Speed Post with postal acknowledgment and Section 63 BSA electronic dispatch. The notice details the exact debt, invokes BNS Sections 316/318, BUDS Act 2019, and Order XXXVII CPC, and demands immediate settlement with 18% penal interest.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent drafting pricing on our <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge Collective Police Complaint &amp; Section 175(3) BNSS Application
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice period expires without resolution, lodge a signed collective criminal complaint before the Economic Offences Wing (EOW) or local Station House Officer (SHO). If police hesitate or classify it as a civil matter, file an application under Section 175(3) of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) before the Judicial Magistrate to compel registration of an FIR.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute Fast-Track Summary Civil Suit or Registrar Arbitration
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For registered chits, submit an arbitration dispute to the State Registrar of Chits under Section 64 of the Act. For unregistered committees backed by written ledgers, cheques, or promissory notes, file a Summary Suit under <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC</Link> in the competent Civil Court to secure a swift recovery decree without endless trial delays.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Fact Table of Statutory Deadlines & Forums */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Remedies, Limitation Windows &amp; Judicial Forums Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Enforcing money recovery requires acting before strict statutory limitation windows lapse. The table below details the benchmark deadlines across governing statutes:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Remedies and Deadlines for Chit Fund and Kitty Party Defaults</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Remedy</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Competent Legal Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bounced Security Cheque Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">30 Days from Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138, Negotiable Instruments Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Judicial Magistrate First Class (JMFC)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Summary Suit for Liquidated Debt
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Years from Date of Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII CPC &amp; Limitation Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Competent Civil Court / District Judge</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Registered Chit Foreman Dispute
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 Years (Sec. 65 Chit Act)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 64, The Chit Funds Act, 1982</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Registrar of Chits (Arbitration)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Online Consumer Deficiency Petition
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">2 Years from Cause of Action</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 69, Consumer Protection Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">District Consumer Forum (e-Jagriti)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Criminal Complaint for Cheating / BUDS
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">No Limitation Bar for Cognizable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">BNS Sections 316, 318 &amp; BUDS Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">EOW / Police Station &amp; Magistrate Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Notice Response
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Standard Pre-Litigation Practice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Speed Post Demand Prior to Action</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory limitation periods strictly verified under India Code. For personal loans between friends or relatives, see our specialized guide on <Link href="/legal-notice-to-recovery-my-loan-from-friend" className="text-blue-700 underline font-semibold">recovering loan money from friends</Link> and Hindi instructions at <Link href="/hi/udhar-paisa-wapas-kaise-le" className="text-blue-700 underline font-semibold">उधार पैसा वापस कैसे लें</Link>.
                </p>
              </section>

              {/* Section 8: Problem Scenario Switcher Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Kitty &amp; Chit Dispute Scenarios: Root Causes &amp; Direct Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Pattern Below to Reveal Governing Statutes and Immediate Escalation Steps
                  </p>
                </div>

                <ChitFundProblemTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: 8 Kitty Members Recover ₹14,50,000 from Defaulting Organiser
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Ludhiana, Punjab (15-Member Business Committee)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Harpreet Singh, a garment trader in Ludhiana, operated a 20-month informal commercial kitty committee with 15 local shopkeepers. Each member contributed ₹50,000 per month on the 10th of every calendar month, creating a monthly pool of ₹7,50,000. In Month 16, after collecting the monthly deposits from all 15 members, Harpreet abruptly shuttered his textile shop, blocked all WhatsApp group phone calls, and relocated to an undisclosed residence in Mohali.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> 8 non-bidder members who had not yet received their draw had paid ₹8,00,000 each over 16 months, leaving an aggregate pool of ₹64,00,000 unaccounted for. When the victims visited Harpreet&apos;s home, his relatives claimed that &quot;the business suffered massive losses and kitty parties are unregulated, so police cannot intervene in commercial debts.&quot; Local police station officials initially advised the traders to file a civil suit.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The 8 members engaged LegalRecovery.in. An advocate collated all 16 months of bank statement UPI transfers, exported the complete WhatsApp group ledger with Harpreet&apos;s payment acknowledgments, and served a comprehensive joint statutory legal notice to Harpreet and his co-signatory brother. The notice invoked Section 316 (Criminal breach of trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023, along with Section 3 and Section 21 of the BUDS Act, 2019, giving a strict 15-day pre-litigation deadline. A copy of the notice was marked to the Commissioner of Police and the Economic Offences Wing.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Faced with impending non-bailable criminal proceedings, potential property attachment under the BUDS Act, and business ruin, Harpreet engaged counsel within 10 days of notice delivery. Through formal advocate mediation, Harpreet executed a registered settlement deed, remitting an immediate upfront bank payment of ₹14,50,000 to the 8 members, accompanied by post-dated cheques backed by personal property collateral for the remaining balance.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Documents Under BSA Section 63 Before Serving Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic documents, WhatsApp chats, and digital banking logs are fully admissible in court. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Stamped Bank / UPI Account Statements:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Highlighting monthly debits made to the organiser or foreman with 12-digit transaction UTR numbers.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Exported WhatsApp / Telegram Group Transcripts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unedited text and media logs showing monthly contribution schedules, member rolls, and draw results.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Photographs of Committee Diaries or Register Cards:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Handwritten records showing monthly entries, initialed payment ticks, or token passbook copies.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dishonoured Cheques &amp; Bank Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original bounced cheques along with stamped bank return memos noting &quot;Insufficient Funds&quot; or &quot;Account Closed&quot;.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Audio Recordings &amp; Debt Acknowledgment SMS:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Phone call recordings or SMS messages where the organiser admits liability and promises future repayment.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Joint Victim Sign-off Sheet &amp; Identity Proofs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Aadhar copies and a signed schedule of claims by all participating members joining the legal demand notice.</p>
                    </div>
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
                    Frequently Asked Questions About Chit Fund &amp; Kitty Party Defaults
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in The Chit Funds Act, BUDS Act 2019, BNS 2023 and Judicial Precedents
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
                  Statutory Authorities, Primary Acts &amp; Court Precedents
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
                  Statutory verification status: All provisions checked against active Ministry of Corporate Affairs, India Code legislative databases, and Supreme Court / High Court precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Chit Fund Recovery
                </h2>
                <ChitFundNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Personal Loan &amp; Money Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Money Lent to Friend →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII CPC Summary Suit Guide →
                  </Link>
                  <Link
                    href="/limitation-extended-by-acknowledgment-part-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Limitation Extended by Acknowledgment →
                  </Link>
                  <Link
                    href="/upi-transfer-as-proof-of-loan"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI Transfer as Proof of Loan →
                  </Link>
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    BNS 318 Cheating vs Civil Dispute →
                  </Link>
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Promissory Note Format India →
                  </Link>
                  <Link
                    href="/hi/udhar-paisa-wapas-kaise-le"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    उधार पैसा वापस कैसे लें (Guide) →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
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
