import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BlankSecurityChequeTableOfContents from "./BlankSecurityChequeTableOfContents";
import BlankSecurityChequeScenarioTabs from "./BlankSecurityChequeScenarioTabs";
import BlankSecurityChequeCTA from "./BlankSecurityChequeCTA";

export const revalidate = 86400;

const PAGE_URL = "/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery";
const EXACT_H1 =
  "How Companies Legally Fill & Prosecute Blank Signed Dealer Security Cheques: Section 20 NI Act, *Bir Singh* & *Sripati Singh* Protocol";
const META_TITLE = "Filling Signed Security Cheques: SC Bir Singh Law";
const META_DESCRIPTION =
  "Supreme Court confirms payees can fill crystallized debt on signed blank security cheques under Section 20 NI Act. Follow this 7-day pre-deposit notice SOP.";

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
        alt: formatAltText("How Companies Legally Fill and Prosecute Blank Signed Dealer Security Cheques"),
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
    title: "Negotiable Instruments Act, 1881 (Sections 20, 56, 118, 138, 139, 141, 142 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Code of Criminal Procedure, 1973 (Sections 200, 202 & 204 Magistrate Inquiry) / Bharatiya Nagarik Suraksha Sanhita, 2023",
    url: "https://www.indiacode.nic.in/handle/123456789/16225",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 12A Mandatory Pre-Institution Mediation & Commercial Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Reserve Bank of India (Cheque Truncation System CTS-2010 Standards & Clearing House Guidelines)",
    url: "https://www.rbi.org.in",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Settles Authority to Fill Inchoate Signed Instruments",
    parties: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197, Supreme Court of India",
    date: "Judgment Dated 06 February 2019",
    facts:
      "The drawer issued a signed blank cheque to the payee towards a commercial loan. The payee subsequently filled in the date, payee name, and debt amount before presenting the instrument for encashment. The cheque was dishonoured for insufficiency of funds. The drawer defended on the ground that the particulars were written in a different handwriting and ink, and that he had never authorized the payee to complete the cheque.",
    holding:
      "A 2-Judge Bench of the Supreme Court held that if a person signs and hands over a blank or incomplete cheque leaf voluntarily, they impliedly authorize the holder or payee to fill up the remaining details. Under Section 20 of the Negotiable Instruments Act, 1881, the instrument becomes fully enforceable for any crystallized liability. The fact that the body of the cheque was filled by someone else or in different ink is immaterial to establish liability under Section 138 once the signature is admitted.",
    amount: "Doctrine of Inchoate Instrument Affirmed — Holder Implied Authority Upheld",
    takeaway:
      "A corporate creditor can lawfully fill the date and exact crystallized ledger sum on a signed blank security cheque. Difference in ink or handwriting does not invalidate the cheque under Section 138.",
  },
  {
    title: "Supreme Court on Security Cheque Maturing into Enforceable Debt",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002 / AIR 2021 SC 5732, Supreme Court of India",
    date: "Judgment Dated 28 October 2021",
    facts:
      "Cheques were handed over as 'security' at the inception of a commercial loan agreement. When the debtor defaulted on the scheduled repayment, the creditor presented the security cheques for encashment. The cheques bounced, and the debtor claimed that 'security cheques' cannot give rise to criminal prosecution under Section 138 NI Act because no present debt existed at the time of handing over.",
    holding:
      "The Supreme Court definitively rejected the argument that security cheques are immune from Section 138 prosecution. The Court held that a cheque issued as security does not remain a mere decorative piece of paper. When the underlying loan or commercial liability becomes due and payable and the debtor fails to discharge it, the security matures into an active, legally enforceable liability. Presenting the security cheque upon default and its subsequent dishonour squarely attracts Section 138.",
    amount: "Security Cheque Maturation Doctrine — Section 138 Fully Maintainable",
    takeaway:
      "Security cheques collected during dealer onboarding become live enforceable instruments the moment credit terms expire and ledger debt remains unpaid.",
  },
  {
    title: "Supreme Court on Continuing Commercial Transactions & Contingent Dues",
    parties: "Sunil Todi & Ors. v. State of Gujarat & Anr.",
    citation: "2021 SCC OnLine SC 1174, Supreme Court of India",
    date: "Judgment Dated 03 December 2021",
    facts:
      "A corporate buyer provided undated signed cheques as security under a power purchase agreement. When power was supplied and invoices were raised, payments were defaulted. The power supplier filled and presented the security cheques, which were dishonoured. The drawer challenged the summoning order, arguing the cheques were merely security against future supplies.",
    holding:
      "The Supreme Court affirmed that the term 'debt or other liability' in Section 138 includes contingent liabilities that have crystallized before the date of presentation. A security cheque issued to secure future supplies or running account balances can be lawfully presented once the liability crystallizes into an actual liquidated sum.",
    amount: "Running Account Security Covered — Section 138 Applies to Future Supplies",
    takeaway:
      "Signed security cheques deposited at distributor onboarding legally cover future invoices raised over months or years of supply, provided the dues are liquidated upon presentation.",
  },
  {
    title: "Admission of Cheque Signature Triggers Rebuttal Presumption Under Section 139",
    parties: "Kalamani Tex & Anr. v. P. Balasubramanian",
    citation: "(2021) 5 SCC 283, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 10 February 2021",
    facts:
      "The drawer admitted signing the cheque and the accompanying letter of undertaking but contended that no consideration passed and that the debt was fabricated by the payee. The trial court acquitted the drawer on minor discrepancies.",
    holding:
      "A 3-Judge Bench reversed the acquittal, holding that once the execution of the cheque is admitted (i.e., the signature on the instrument belongs to the drawer), the statutory presumption under Section 118 and Section 139 of the NI Act arises immediately as a matter of law. The court is statutorily bound to presume that the cheque was issued for the discharge of a legally enforceable debt. The burden of proof shifts heavily to the accused to produce cogent evidence, beyond mere oral denials.",
    amount: "Mandatory Section 139 Rebuttal Presumption — Heavy Burden Shifted to Debtor",
    takeaway:
      "Because distributors admit their signature on onboarding cheques, the legal burden rests entirely on the dealer to prove the absence of debt—which is impossible against an audited running ledger.",
  },
  {
    title: "The Fatal Over-Presentation Trap: Part-Payment Endorsement Under Section 56",
    parties: "Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel",
    citation: "(2022) 10 SCC 597 / 2022 SCC OnLine SC 1376, Supreme Court of India",
    date: "Judgment Dated 11 October 2022",
    facts:
      "The debtor issued a cheque for ₹20 Lakhs. Before the cheque was presented, the debtor made part-payments aggregating to ₹4,09,315. The creditor nevertheless presented the cheque for the full face value of ₹20 Lakhs, which bounced. The creditor served a demand notice demanding the full ₹20 Lakhs.",
    holding:
      "The Supreme Court held that presenting a cheque for an amount greater than the legally enforceable debt on the date of presentation, without recording the part-payment on the instrument under Section 56 NI Act, invalidates the prosecution under Section 138. The statutory notice must demand the exact legally enforceable debt. Presenting an inflated instrument destroys the criminal cause of action.",
    amount: "Over-Presentation Bar — Strict Section 56 Part-Payment Endorsement Required",
    takeaway:
      "Never fill a blank signed security cheque for an arbitrary round figure or historical total. Credit controllers must fill the EXACT net ledger balance after adjusting all returns, rebates, and part-payments.",
  },
  {
    title: "Standard of Proof for Rebutting Statutory Presumption under Section 139",
    parties: "Rangappa v. Sri Mohan",
    citation: "(2010) 11 SCC 441, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 07 May 2010",
    facts:
      "The drawer challenged the maintainability of a Section 138 prosecution by claiming that the cheque was lost or stolen and that the complainant failed to prove the initial consideration.",
    holding:
      "A 3-Judge Bench clarified that the presumption mandated by Section 139 includes the existence of a legally enforceable debt. While the accused may rebut this presumption on a preponderance of probabilities, a mere denial, bald assertion, or frivolous explanation does not suffice. The accused must demonstrate a probable defense supported by contemporaneous records.",
    amount: "Debt Presumption Encompassed — Frivolous Theft Defenses Neutralized",
    takeaway:
      "Bare assertions by defaulting distributors that 'the company misused my blank cheque' fail in court unless backed by contemporaneous police complaints or stop-payment letters filed before the ledger default.",
  },
];

const DEFENSE_PREEMPTIONS = [
  {
    objection: "Cheque was handed over only as 'Security' during dealership appointment",
    trap: "The dealer argues before the Magistrate that the instrument was marked or intended as a non-enforceable security deposit, not against specific invoices.",
    remedy:
      "Pre-empt by citing Sripati Singh (SC 2021) and Sunil Todi (SC 2021). Plead in the complaint that once credit invoices matured and remained unpaid, the security instrument legally matured into an enforceable payment instrument.",
    authority: "Sripati Singh (2021 SCC OnLine SC 1002) & Sunil Todi (2021 SCC OnLine SC 1174)",
  },
  {
    objection: "Body of the cheque is written in different ink and handwriting",
    trap: "The dealer requests the court to send the cheque to a Central Forensic Science Laboratory (CFSL) or handwriting expert to prove the company filled it.",
    remedy:
      "Rely directly on Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 and Section 20 NI Act. A difference in handwriting or ink is legally irrelevant when the signature is admitted. Oppose CFSL referral applications as a delaying tactic.",
    authority: "Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 & Section 20 NI Act",
  },
  {
    objection: "Old blank cheque from 4 years ago is stale or time-barred",
    trap: "The dealer contends that the cheque leaf was signed in 2021 and therefore cannot be filled and presented in 2026 for subsequent unpaid invoices.",
    remedy:
      "Under Section 20 NI Act, the instrument is inchoate until completed. The legal date of the cheque is the date written on its face, not the date the blank leaf was signed. The 3-month presentation validity under RBI CTS guidelines runs from the face date.",
    authority: "Section 20 NI Act read with RBI Circular DPSS.CO.CHD.No. 2622/04.07.05/2010-11",
  },
  {
    objection: "Dealer issued Stop Payment or closed bank account prior to presentation",
    trap: "The dealer contacts their banker to stop clearing or closes the current account, attempting to escape Section 138 liability by arguing no clearing took place.",
    remedy:
      "Under Modi Cements Ltd. and Goaplast (P) Ltd., 'Stop Payment' and 'Account Closed' memos are statutorily equated to dishonour under Section 138. Serving the 7-day pre-deposit notice proves the stop payment was issued in bad faith.",
    authority: "Modi Cements Ltd. (1998) 4 SCC 519 & Goaplast (P) Ltd. (2003) 3 SCC 232",
  },
  {
    objection: "Dealer claims defective stock, damaged goods, or uncredited return claims",
    trap: "The dealer fabricates a post-hoc dispute claiming unsold inventory or damaged stock was never picked up by the company, asserting no crystallized debt existed.",
    remedy:
      "Produce the 7-Day Pre-Deposit Intimation Notice delivery proof. Under the doctrine of contemporaneous silence, if the dealer failed to lodge a return claim during the 7-day window, retrospective disputes cannot rebut Section 139.",
    authority: "BSA 2023 Section 63 Proof & Section 139 Mandatory Presumption",
  },
  {
    objection: "Part-payment made before presentation renders Section 138 void",
    trap: "The dealer transfers ₹50,000 against a ₹5,00,000 ledger, but the company carelessly deposits a cheque filled for the original ₹5,00,000 without adjustment.",
    remedy:
      "Strictly apply the Dashrathbhai Patel protocol: fill the blank cheque ONLY for the exact net remaining balance (₹4,50,000), or endorse the ₹50,000 receipt on the reverse of the cheque under Section 56 NI Act.",
    authority: "Dashrathbhai Patel (2022) 10 SCC 597 & Section 56 NI Act",
  },
];

const FAQS = [
  {
    question: "Can an FMCG or durables company legally fill a blank signed security cheque received from a dealer?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881, and the landmark Supreme Court ruling in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197, handing over a signed blank cheque leaf vests implied statutory authority in the holder or payee to complete the inchoate instrument. The company can lawfully fill in the date, payee name, and the exact crystallized ledger debt. The fact that the details were completed by someone other than the drawer or in different ink does not invalidate the cheque or Section 138 prosecution.",
  },
  {
    question: "What is the mandatory 7-day pre-deposit intimation notice, and why is it critical?",
    answer:
      "The 7-Day Ledger Crystallization & Cheque-Presentation Intimation Notice is the gold-standard operational safeguard for corporate credit controllers. Before depositing an inchoate security cheque, the company serves a formal notice enclosing the audited running ledger, identifying the specific cheque number, and stating the exact crystallized balance due. The notice gives the dealer 7 calendar days to inspect the ledger, raise any credit-note disputes, or settle the account via RTGS/NEFT, failing which the cheque will be presented. When served via Speed Post and WhatsApp/Email, this notice completely destroys the dealer's defense that the company 'misused an old blank cheque without notice'.",
  },
  {
    question: "How does the Supreme Court ruling in Sripati Singh (2021) protect corporate creditors?",
    answer:
      "In Sripati Singh v. State of Jharkhand (2021 SCC OnLine SC 1002), the Supreme Court definitively held that a cheque issued as 'security' does not remain a harmless piece of paper forever. The Court established that once the underlying commercial debt matures and remains unpaid on the due date, the security instrument matures into an enforceable legal liability. If presented and dishonoured thereafter, criminal prosecution under Section 138 of the NI Act is fully maintainable.",
  },
  {
    question: "What happens if a dealer pays a partial amount before the company presents the security cheque?",
    answer:
      "Under the Supreme Court's ruling in Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022), presenting a cheque for an amount higher than the actual legally enforceable debt on the date of presentation renders the Section 138 complaint non-maintainable. If a dealer makes a part-payment, the credit controller must fill the blank security cheque ONLY for the net remaining balance, or if already filled, endorse the partial payment on the instrument under Section 56 NI Act before presentation.",
  },
  {
    question: "Is Section 138 maintainable if the dealer issues a 'Stop Payment' instruction or closes the account?",
    answer:
      "Yes. The Supreme Court in Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) and Goaplast (P) Ltd. (2003) confirmed that 'Stop Payment' and 'Account Closed' return memos fall squarely within the criminal ambit of Section 138. Serving a 7-day pre-deposit notice before presentation provides indisputable evidence that the stop-payment instruction was issued in bad faith to evade lawful commercial debt.",
  },
  {
    question: "What is the limitation period for presenting a completed security cheque and serving the statutory notice?",
    answer:
      "Under RBI CTS guidelines, a cheque is valid for presentation for 3 months from the date written on the face of the instrument. Once deposited and dishonoured, the bank issues a Return Memo. Under Section 138(b) of the NI Act, the creditor has exactly 30 calendar days from receipt of the bank Return Memo to issue a formal Statutory Demand Notice granting a 15-day cure period. If the debtor fails to pay within 15 days of receiving the notice, the cause of action arises on Day 16, and the Section 142 criminal complaint must be filed before the Magistrate within 30 days.",
  },
  {
    question: "Can a company claim interim compensation under Section 143A of the NI Act in security cheque cases?",
    answer:
      "Yes. Under Section 143A of the Negotiable Instruments Act (inserted by the 2018 Amendment), the trial court trying a Section 138 complaint has the power to order the drawer to deposit up to 20% of the face value of the dishonoured cheque as interim compensation. In summary trials where the dealer pleads not guilty, corporate creditors routinely secure 20% interim deposit orders, creating immense financial pressure on defaulting distributors.",
  },
  {
    question: "How does LegalRecovery assist FMCG, durables, and manufacturing brands managing hundreds of dealer defaults?",
    answer:
      "LegalRecovery provides a dual-track recovery infrastructure: Corporate credit teams can test an overdue dealer file for ₹999 to serve a fact-verified 7-day pre-deposit intimation notice and Section 138 demand notice. For enterprise portfolios with 10 to 10,000+ defaulting distributors, our Dedicated Institutional Desk ingests ERP/Tally ledger exports, automates Section 20 filling protocols, issues automated Speed Post RPAD dispatches with real-time tracking, and manages nationwide Section 138 and Section 143A court filings across India.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-17T09:00:00+05:30",
  dateModified: "2026-11-17T09:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
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
    name: "Prosecution of Blank Signed Security Cheques under Section 20 and Section 138 Negotiable Instruments Act",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FMCG, Durables & Super-Stockist Recovery",
      item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Section 20 & 138 Security Cheque Protocol",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function BlankSignedSecurityChequePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
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

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-10 FMCG, CONSUMER DURABLES &amp; SUPER-STOCKISTS &bull; SECTION 20 &amp; 138 NI ACT PROTOCOL</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Corporate Creditor Answer
            </span>
            Under Section 20 of the Negotiable Instruments Act, 1881, and the Supreme Court landmark judgments in{" "}
            <em>Bir Singh v. Mukesh Kumar</em> (2019) and <em>Sripati Singh</em> (2021), a payee company holds lawful
            statutory authority to fill the date and exact crystallized ledger balance on a blank signed dealer security
            cheque. In the{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              FMCG, Consumer Durables &amp; Super-Stockist channel recovery playbook
            </Link>
            , serving a fact-verified <strong>7-Day Pre-Deposit Intimation Notice</strong> with certified running ledgers
            conclusively eliminates the defense of &ldquo;cheque misuse&rdquo; or unauthorized alteration, transforming an
            onboarding security deposit into a lethal Section 138 criminal recovery rail.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Section 20 Authority</span>
              <p className="text-base sm:text-lg md:text-xl font-black text-slate-100">Implied Mandate</p>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Holder Can Fill Sum</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">7-Day Pre-Deposit Notice</span>
              <p className="text-base sm:text-lg md:text-xl font-black text-emerald-400">Zero Misuse</p>
              <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">Destroys Dealer Defense</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Signature Admitted</span>
              <p className="text-base sm:text-lg md:text-xl font-black text-amber-400">Section 139</p>
              <span className="text-[10px] text-amber-300 font-semibold block mt-0.5">Strict Burden on Debtor</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Section 143A Order</span>
              <p className="text-base sm:text-lg md:text-xl font-black text-red-400">Up to 20% Cash</p>
              <span className="text-[10px] text-red-300 font-semibold block mt-0.5">Trial Court Deposit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "FMCG & Consumer Durables Recovery",
                href: "/industries/fmcg-distributors-super-stockist-recovery",
              },
              { label: "Blank Signed Security Cheque Protocol", href: PAGE_URL },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <BlankSecurityChequeTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Security Cheque Paradox */}
            <section
              id="heading-security-cheque-paradox"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Channel Credit Operational Dilemma
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Security Cheque Paradox: Why 60% of Corporate Prosecutions Fail
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Across the Indian commercial landscape—spanning Fast Moving Consumer Goods (FMCG), consumer durables,
                  electronics, cement, paints, and pharmaceuticals—it is universal trade custom for manufacturers and
                  national brands to collect 2 to 3 undated signed &ldquo;Security Cheques&rdquo; at the inception of a
                  distributorship, super-stockist, or C&amp;F agreement. This security leaf is intended to safeguard credit
                  lines against defaults in running account ledgers.
                </p>
                <p>
                  Yet, empirical records before Judicial Magistrates reveal an alarming failure rate: over 60% of corporate
                  prosecutions under Section 138 of the Negotiable Instruments Act, 1881 involving onboarding security
                  cheques get stalled, dismissed, or dragged through multi-year forensic battles. When a distributor defaults
                  on supplies, finance executives frequently commit one of three fatal blunders:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 not-prose">
                  <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                      Blunder A: Arbitrary Round Sum
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Filling an arbitrary round figure (e.g., ₹10,00,000) when the true audited ledger balance is
                      ₹8,34,520, fatally violating the Supreme Court&rsquo;s <em>Dashrathbhai Patel</em> doctrine.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-800 block mb-1">
                      Blunder B: Skipping Intimation Notice
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Depositing the cheque blindly without a prior 7-day ledger reconciliation notice, handing the dealer an
                      easy defense of &ldquo;clandestine misuse of an old security paper.&rdquo;
                    </p>
                  </div>
                  <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 block mb-1">
                      Blunder C: Part-Payment Blindness
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Failing to endorse interim RTGS payments on the instrument under Section 56 NI Act, rendering the entire
                      criminal complaint legally invalid at the threshold.
                    </p>
                  </div>
                </div>
                <p>
                  To convert an onboarding security cheque into an ironclad recovery instrument, corporate legal teams must
                  rely on the dual architecture of <strong>Section 20 of the Negotiable Instruments Act</strong> and the
                  Supreme Court&rsquo;s definitive rulings in <em>Bir Singh v. Mukesh Kumar</em> and <em>Sripati Singh</em>.
                  For wider channel defaults, review our companion guide on{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    distributor and dealer unpaid dues recovery
                  </Link>{" "}
                  and our playbook for{" "}
                  <Link
                    href="/industries/fmcg-distributors-super-stockist-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    FMCG, Consumer Durables &amp; Super-Stockist Channel Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Section 20 NI Act Authority */}
            <section
              id="heading-section20-inchoate-authority"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Statutory Foundation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Section 20 NI Act Decoded: Authority to Complete Inchoate Instruments
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Section 20 of the Negotiable Instruments Act, 1881 codifies the legal doctrine of{" "}
                  <strong>Inchoate Stamped Instruments</strong>. It establishes a statutory presumption that when one person
                  signs and delivers to another a paper stamped in accordance with the law relating to negotiable
                  instruments, either wholly blank or having written thereon an incomplete negotiable instrument, he thereby
                  gives <em>prima facie authority to the holder thereof to make or complete it</em>.
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-5 border-l-4 border-[#DC2626] my-4 not-prose">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-1">
                    Section 20 NI Act &bull; Bare Act Mandate
                  </span>
                  <p className="text-xs sm:text-sm italic font-serif text-slate-200 leading-relaxed">
                    &ldquo;Where one person signs and delivers to another a paper stamped in accordance with the law relating to
                    negotiable instruments then in force in India, and either wholly blank or having written thereon an
                    incomplete negotiable instrument, he thereby gives prima facie authority to the holder thereof to make or
                    complete, as the case may be, upon it a negotiable instrument, for any amount specified therein and not
                    exceeding the amount covered by the stamp...&rdquo;
                  </p>
                </div>
                <p>
                  Because a bank cheque is exempt from ad-valorem stamp duty under the Indian Stamp Act, 1899 (Article 19,
                  Schedule I), the statutory ceiling is defined not by physical stamp duty, but by the{" "}
                  <strong>crystallized, legally enforceable debt</strong> existing between the drawer and payee on the date of
                  presentation.
                </p>
                <p>
                  When a dealer delivers an undated, unsigned-amount cheque bearing their genuine authorized signature:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Implied Legal Agency:</strong> The drawer statutorily constitutes the creditor company as their
                    implied agent to complete the instrument with the payee name, current date, and exact unpaid ledger
                    balance.
                  </li>
                  <li>
                    <strong>Signature Admission Triggers Section 139:</strong> Under the 3-Judge Bench ruling in{" "}
                    <em>Kalamani Tex</em>, admitting the signature on the cheque immediately invokes the presumption that the
                    cheque was issued for the discharge of a legally enforceable debt. The burden of proof shifts 100% to the
                    debtor.
                  </li>
                  <li>
                    <strong>Forensic Irrelevance:</strong> Defense pleas claiming &ldquo;different ink,&rdquo;
                    &ldquo;different handwriting,&rdquo; or &ldquo;clerk filled the details&rdquo; are rejected as legally
                    frivolous by virtue of Section 20.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Landmark Precedents */}
            <section
              id="heading-landmark-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Judicial Precedent Library
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Landmark Precedents: Bir Singh, Sripati Singh &amp; Sunil Todi Rulings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Corporate legal notices and Section 138 complaints must directly plead verified Supreme Court holdings to
                prevent Magistrate dismissal and defeat speculative revision petitions.
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 border-l-4 border-l-[#DC2626] shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                        {item.citation}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-bold text-[#DC2626] mb-3">{item.title}</p>
                    <div className="text-xs text-slate-700 space-y-2 mb-4 leading-relaxed">
                      <p>
                        <strong className="text-slate-900">Facts &amp; Defense:</strong> {item.facts}
                      </p>
                      <p>
                        <strong className="text-slate-900">Supreme Court Holding:</strong> {item.holding}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="font-extrabold text-slate-900">{item.amount}</span>
                      <span className="text-slate-600 italic">
                        <strong>Rule:</strong> {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: 7-Day Pre-Deposit Notice SOP */}
            <section
              id="heading-seven-day-intimation-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Gold-Standard Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The 7-Day Pre-Deposit Notice SOP: Defeating the Misuse Defense
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  The fundamental failure in most corporate cheque bounce litigations is presenting an onboarding security
                  cheque without prior written warning. When a company presents a cheque unannounced, the debtor claims in
                  court: <em>&ldquo;I had no idea this old cheque was presented; the company fraudulently filled an arbitrary sum without my knowledge.&rdquo;</em>
                </p>
                <p>
                  To eradicate this defense permanently, corporate credit controllers must implement the{" "}
                  <strong>7-Day Ledger Crystallization &amp; Cheque-Presentation Intimation SOP</strong>:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 space-y-4 not-prose">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Supply Halt &amp; Ledger Audit
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Immediately suspend credit billing in SAP/ERP. Consolidate all unpaid invoices, adjust verified return
                        credit notes, reconcile GSTR-1 and GSTR-3B filings, and compute the exact net balance due.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Issue 7-Day Pre-Deposit Intimation Notice
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Draft a fact-verified intimation notice citing: (a) Dealership agreement date; (b) Cheque No.,
                        bank name, and drawer details; (c) Exact crystallized ledger debt of ₹X,XX,XXX; and (d) Intimation that
                        under Section 20 NI Act and <em>Bir Singh v. Mukesh Kumar</em>, the company will fill and present Cheque
                        No. XXXXXX on Date DD/MM/YYYY unless the full sum is cleared within 7 calendar days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Dual-Channel Evidentiary Dispatch (BSA 2023 s.63)
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Dispatch the notice simultaneously via Speed Post RPAD to the dealer&rsquo;s registered commercial
                        address and via registered WhatsApp API and corporate email. Secure postal delivery tracking receipts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        The Legal Guillotine: Doctrine of Acquiescence
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        If the dealer fails to dispute the ledger or remit the funds within the 7-day period, their silence
                        constitutes statutory acquiescence. When the cheque is deposited on Day 8, the dealer cannot plead
                        surprise, fraud, or misuse before the Magistrate.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  This protocol transforms an informal security deposit into an unassailable commercial liability with zero
                  evidential loopholes.
                </p>
              </div>
            </section>

            {/* Section 5: Mathematical Ledger Crystallization */}
            <section
              id="heading-ledger-crystallization-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Commercial Ledger Reconciliation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Mathematical Ledger Crystallization: Avoiding the Dashrathbhai Trap
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Under the Supreme Court ruling in <em>Dashrathbhai Trikambhai Patel</em> (2022), the criminal offense under
                  Section 138 arises ONLY if the cheque represents the <strong>exact legally enforceable debt</strong> on the
                  date of presentation. If a company claims ₹10,00,000 when the debtor has made partial payments reducing the
                  balance to ₹8,50,000, presenting the ₹10 Lakh instrument without an endorsement under Section 56 NI Act is
                  fatal to the prosecution.
                </p>

                {/* Worked Financial Illustration Table */}
                <div className="overflow-x-auto my-6 not-prose border border-slate-200 rounded-xl shadow-xs">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Ledger Head / Supply Transaction</th>
                        <th className="py-3 px-4">Accounting Impact</th>
                        <th className="py-3 px-4">Amount (&rupee;)</th>
                        <th className="py-3 px-4">Section 138 Legal Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Total Invoiced Dispatches (12 Invoices)</td>
                        <td className="py-3 px-4 text-slate-600">Gross Billed Supplies</td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-900">&rupee;18,45,000</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Supported by Tax Invoices &amp; e-Way Bills</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Less: Authorized Damage / Expiry Returns</td>
                        <td className="py-3 px-4 text-slate-600">Credit Note Deductions</td>
                        <td className="py-3 px-4 font-mono text-red-600 font-bold">-&rupee;1,85,000</td>
                        <td className="py-3 px-4 text-slate-500">Credited to Dealer Ledger</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Less: Annual Target Rebates &amp; Schemes</td>
                        <td className="py-3 px-4 text-slate-600">Contractual Price Discounts</td>
                        <td className="py-3 px-4 font-mono text-red-600 font-bold">-&rupee;65,000</td>
                        <td className="py-3 px-4 text-slate-500">Formally Reconciled Credit Notes</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Less: Interim Bank RTGS Remittances</td>
                        <td className="py-3 px-4 text-slate-600">Part-Payments Received</td>
                        <td className="py-3 px-4 font-mono text-red-600 font-bold">-&rupee;4,20,000</td>
                        <td className="py-3 px-4 text-amber-700 font-semibold">Dashrathbhai Patel Mandatory Deduction</td>
                      </tr>
                      <tr className="bg-emerald-50/80 border-t-2 border-emerald-600">
                        <td className="py-3.5 px-4 font-black text-slate-900">NET CRYSTALLIZED DEBT (Cheque Face Value)</td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800">Section 20 Lawful Filling Sum</td>
                        <td className="py-3.5 px-4 font-mono font-black text-emerald-700 text-sm">&rupee;11,75,000</td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800">Exact Sum to be Filled on Cheque</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                  <strong className="block mb-1 text-amber-950 font-bold">Credit Controller Golden Rule:</strong>
                  Never fill the blank security cheque for a rounded ₹12,00,000 or ₹18,45,000. It must match the net
                  crystallized ledger figure of <strong>₹11,75,000</strong> verbatim in words and figures. For calculating
                  statutory commercial interest under MSME mandates, use our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="font-bold underline text-amber-900 hover:text-black"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Section 6: Six-Step Prosecution Pipeline */}
            <section
              id="heading-six-step-prosecution-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  End-to-End Criminal Rail
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The 6-Step Legal Protocol: From Ledger Freeze to Section 138 Filing
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this sequential statutory checklist from the initial default to obtaining interim compensation in the
                Magistrate&rsquo;s court.
              </p>

              {/* Hand-authored SVG Flowchart (Desktop) */}
              <div className="hidden md:block my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-inner">
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 block mb-4 text-center">
                  Statutory Flowchart: Section 20 Completion to Section 143A Compensation
                </span>
                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={240}
                  aria-label="Flowchart from Ledger Default to Section 138 Cheque Bounce Prosecution"
                >
                  {/* Step 1 */}
                  <rect x="10" y="20" width="115" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="67" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 1</text>
                  <text x="67" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Ledger Freeze</text>
                  <text x="67" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">Stop Supplies</text>

                  {/* Arrow 1 */}
                  <line x1="125" y1="55" x2="145" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="145,55 140,51 140,59" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="145" y="20" width="115" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="202" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 2</text>
                  <text x="202" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">7-Day Notice</text>
                  <text x="202" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">RPAD + Email Intimation</text>

                  {/* Arrow 2 */}
                  <line x1="260" y1="55" x2="280" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="280,55 275,51 275,59" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="280" y="20" width="115" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="337" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 3</text>
                  <text x="337" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Sec 20 Fill</text>
                  <text x="337" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">Present Cheque</text>

                  {/* Arrow 3 */}
                  <line x1="395" y1="55" x2="415" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="415,55 410,51 410,59" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="415" y="20" width="115" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="472" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 4</text>
                  <text x="472" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Dishonour Memo</text>
                  <text x="472" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">Bank Return Advice</text>

                  {/* Arrow 4 */}
                  <line x1="530" y1="55" x2="550" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="550,55 545,51 545,59" fill="#DC2626" />

                  {/* Step 5 */}
                  <rect x="550" y="20" width="115" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="607" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 5</text>
                  <text x="607" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Sec 138 Notice</text>
                  <text x="607" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">30d Window / 15d Cure</text>

                  {/* Arrow 5 */}
                  <line x1="665" y1="55" x2="685" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="685,55 680,51 680,59" fill="#DC2626" />

                  {/* Step 6 */}
                  <rect x="685" y="20" width="105" height="70" rx="8" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="737" y="45" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">STEP 6</text>
                  <text x="737" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Court Complaint</text>
                  <text x="737" y="74" fill="#FEE2E2" fontSize="8" textAnchor="middle">Sec 143A Interim Comp</text>

                  {/* Bottom Timeline Legend */}
                  <rect x="10" y="120" width="780" height="95" rx="10" fill="#0F172A" stroke="#334155" />
                  <text x="25" y="145" fill="#38BDF8" fontSize="11" fontWeight="bold">STRICT STATUTORY LIMITATION INTERVALS:</text>
                  <text x="25" y="165" fill="#CBD5E1" fontSize="10">&bull; Cheque Validity: 3 Months from date written on face (RBI CTS-2010 regulations)</text>
                  <text x="25" y="182" fill="#CBD5E1" fontSize="10">&bull; Statutory Demand Notice: Must be issued within 30 days of receiving Bank Return Memo (Sec 138(b))</text>
                  <text x="25" y="199" fill="#CBD5E1" fontSize="10">&bull; Cause of Action &amp; Filing: 15-day cure window expires &rarr; File Sec 142 Criminal Complaint within next 30 days</text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 my-5">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 1 &bull; Day 0</span>
                  <p className="text-xs font-bold text-slate-900">Ledger Freeze &amp; Commercial Reconciliation</p>
                  <p className="text-[11px] text-slate-600 mt-1">Halt billing, adjust credit notes and return memos, finalize net debt balance.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 2 &bull; Day 1–7</span>
                  <p className="text-xs font-bold text-slate-900">7-Day Pre-Deposit Intimation Notice</p>
                  <p className="text-[11px] text-slate-600 mt-1">Serve notice with ledger statement via Speed Post RPAD &amp; Email/WhatsApp.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 3 &bull; Day 8</span>
                  <p className="text-xs font-bold text-slate-900">Section 20 Completion &amp; Cheque Presentation</p>
                  <p className="text-[11px] text-slate-600 mt-1">Fill exact crystallized debt and current date; deposit at payee bank branch.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 4 &bull; Return Day</span>
                  <p className="text-xs font-bold text-slate-900">Bank Dishonour Memo Received</p>
                  <p className="text-[11px] text-slate-600 mt-1">Memo stating &lsquo;Funds Insufficient&rsquo;, &lsquo;Stop Payment&rsquo;, or &lsquo;Account Closed&rsquo;.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 5 &bull; Within 30 Days</span>
                  <p className="text-xs font-bold text-slate-900">Statutory Section 138 Legal Demand Notice</p>
                  <p className="text-[11px] text-slate-600 mt-1">Issue formal 15-day demand notice under Section 138(b) to drawer and directors.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-[#DC2626] block">Step 6 &bull; Within 30 Days After Cure</span>
                  <p className="text-xs font-bold text-slate-900">Section 142 Complaint &amp; Section 143A Application</p>
                  <p className="text-[11px] text-slate-600 mt-1">File criminal complaint before Magistrate; seek up to 20% interim cash deposit.</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  If the dealer issues a stop payment or account closure instruction, see our dedicated guide on{" "}
                  <Link
                    href="/stop-payment-cheque-bounce-case"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    stop payment cheque bounce prosecution
                  </Link>
                  . For companies where the debtor is a Private Limited or Limited entity, review our statutory framework on{" "}
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    holding company directors personally liable under Section 141
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-dealer-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Magistrate Trial Defense Screening
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Debtor Defense Pre-Emption Table: Neutralizing Dealer Objections
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Defaulting dealers deploy standard objections during Section 251 CrPC / Section 274 BNSS plea recording.
                Neutralize each defense at the notice stage.
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 w-1/4">Dealer Defense / Trap</th>
                      <th className="py-3.5 px-4 w-1/2">Legal Remedy &amp; Creditor Action Rail</th>
                      <th className="py-3.5 px-4 w-1/4">Binding Judicial Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {DEFENSE_PREEMPTIONS.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50" : ""}>
                        <td className="py-3 px-4 font-bold text-slate-900">
                          <span className="block text-red-600 font-extrabold text-[10px] uppercase mb-0.5">Objection {idx + 1}</span>
                          {item.objection}
                          <span className="block text-[11px] text-slate-500 font-normal mt-1">{item.trap}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-700 leading-relaxed">
                          {item.remedy}
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-900 text-[11px]">
                          {item.authority}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Interactive Commercial Scenarios */}
            <section
              id="heading-commercial-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Interactive Strategy Engine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Commercial Default Scenarios: Interactive Credit Controller Explorer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore 4 commercial default scenarios faced by FMCG, durable, and manufacturing credit teams, and review
                the required notice clauses and statutory counter-strategies.
              </p>

              <BlankSecurityChequeScenarioTabs />
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Dossier */}
            <section
              id="heading-bsa-evidentiary-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Evidentiary Standards &amp; Trial Readiness
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier &amp; Electronic Audit Trail
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Under the new criminal and evidentiary regime enacted via the{" "}
                  <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic records, ERP audit
                  logs, and digital delivery confirmations are fully admissible in Magistrate courts, provided they are
                  certified by the corporate system administrator or authorized legal officer.
                </p>
                <p>
                  To secure an immediate summoning order under Section 204 CrPC / BNSS, every corporate Section 138 complaint
                  must annex this mandatory 5-part Evidentiary Dossier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      Part A &bull; ERP Running Ledger Audit Trail
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete certified SAP/Tally ledger export bearing company stamp, showing all debit invoice entries,
                      credit receipts, and net outstanding balance, certified under Section 63 BSA.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      Part B &bull; GST Portal Tax Invoice &amp; e-Way Bills
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      GST portal GSTR-1 summaries showing dealer GSTIN, corresponding e-way bill generation receipts, and
                      transporter vehicle logs establishing physical delivery of goods. See our guide on{" "}
                      <Link
                        href="/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery"
                        className="text-[#DC2626] font-semibold underline hover:text-red-700"
                      >
                        GST ITC reconciliation &amp; supplier non-filing remedies
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      Part C &bull; 7-Day Notice Dispatch &amp; Delivery Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      India Post Speed Post tracking report with &lsquo;Item Delivered&rsquo; seal, corporate email server
                      dispatch logs, and verified registered WhatsApp delivery and blue-tick receipts.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      Part D &bull; Bank Return Memo &amp; CTS Image
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Original bank dishonour memo with official bank clearing seal, CTS cheque clearing slip, and bank statement
                      evidencing dishonour.
                    </p>
                  </div>
                </div>

                <p>
                  Review our vetted template workspace for{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    commercial legal notice drafting and reply formats
                  </Link>{" "}
                  for structural notice templates.
                </p>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-prosecution-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Corporate Counsel FAQ
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Corporate Counsel FAQ: Prosecuting Signed Security Cheques Legally
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Direct statutory and tactical answers for CFOs, Credit Controllers, and Legal Heads enforcing distributor
                cheques across India.
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none hover:bg-slate-100 transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs shrink-0 group-open:rotate-180 transition-transform">
                        &darr;
                      </span>
                    </summary>
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Official Legislative References
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Citations &amp; Official Legislative References
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Review verified legislation from official Government of India repositories and regulatory portals:
              </p>

              <ul className="space-y-2 mb-6">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {source.title} &rarr;
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
                For a complete index of all B2B institutional debt recovery playbooks, legal templates, and industry dispute
                escalation guides across all sectors, visit our{" "}
                <Link
                  href="/sitemap"
                  className="text-[#DC2626] font-bold underline hover:text-red-700"
                >
                  LegalRecovery Institutional Sitemap (All Sectors &amp; Categories)
                </Link>
                .
              </div>
            </section>

            {/* Dual B2B Conversion Funnel CTA */}
            <div className="pt-4">
              <BlankSecurityChequeCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Related Recovery Guides (FMCG Cluster) */}
      <RelatedRecoveryGuides cluster="fmcgConsumer" />
    </div>
  );
}
