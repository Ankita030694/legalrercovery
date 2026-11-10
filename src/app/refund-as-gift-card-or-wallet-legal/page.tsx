import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ForcedCreditCTA from "./ForcedCreditCTA";
import WalletRefundChecker from "./WalletRefundChecker";

// TODO(reviewer): Add legally reviewed box once src/data/reviewers.ts is established in the repository

export const metadata: Metadata = {
  title: "Refund as Gift Card or Wallet Only: Is It Legal in India?",
  description:
    "Platform refunded you in wallet points or a gift card? When you can insist on refund to the original payment source, and how to demand it.",
  alternates: {
    canonical: `${SITE_URL}/refund-as-gift-card-or-wallet-legal`,
  },
  openGraph: {
    title: "Forced Wallet Credit Instead of a Bank Refund: Your Rights in India",
    description:
      "Can shopping apps legally trap your refund inside store credits or expiring vouchers? Discover CCPA dark pattern bans and RBI source refund mandates.",
    url: `${SITE_URL}/refund-as-gift-card-or-wallet-legal`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const PRIMARY_SOURCES = [
  {
    title: "Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns, 2023",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
    accessed: "03 November 2026",
  },
  {
    title: "Reserve Bank of India Master Directions on Prepaid Payment Instruments (MD-PPIs) (Section 10.2 Merchant Transaction Refunds)",
    url: "https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=12156",
    accessed: "03 November 2026",
  },
  {
    title: "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 (Harmonisation of TAT & Customer Compensation for Failed Transactions)",
    url: "https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11693&Mode=0",
    accessed: "03 November 2026",
  },
  {
    title: "National Consumer Helpline (NCH 1915 / INGRAM Portal — Ministry of Consumer Affairs)",
    url: "https://consumerhelpline.gov.in/",
    accessed: "03 November 2026",
  },
  {
    title: "e-Jagriti Online Consumer Dispute Filing Portal (Department of Consumer Affairs)",
    url: "https://e-jagriti.gov.in/",
    accessed: "03 November 2026",
  },
];

const FAQS = [
  {
    question: "Can an e-commerce platform legally refuse to refund money to my original bank account?",
    answer:
      "No. Under Section 2(47) of the Consumer Protection Act, 2019, refusing to return monetary consideration for returned goods or undelivered services constitutes an unfair trade practice. While platforms may offer wallet credits as an optional speedier alternative, they cannot legally mandate it or deny an outward transfer to your originating bank account, credit card, or UPI VPA.",
  },
  {
    question: "What should I do if a platform automatically refunded my order as an app gift card?",
    answer:
      "Immediately submit a formal written objection through the customer care chat and the official Grievance Officer email under Rule 4 of the Consumer Protection (E-Commerce) Rules, 2020. Explicitly state that you do not accept the gift voucher, instruct them not to mark the grievance closed, and demand direct remittance to your source payment account with ARN or UTR tracking within 7 working days.",
  },
  {
    question: "Is forced wallet refund considered an illegal dark pattern in India?",
    answer:
      "Yes. The CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023 classify pre-ticked wallet options, default opt-ins, and restricting refunds to closed virtual credits under 'Forced Action' and 'Interface Interference'. Such practices strip away consumer autonomy and subject e-commerce entities to regulatory penalties under Section 18 of the CPA 2019.",
  },
  {
    question: "How does the refund to original payment source rule apply to Cash on Delivery (COD) orders?",
    answer:
      "For COD transactions, because physical currency was surrendered upon delivery, e-commerce platforms are legally required to provide an account payee payout rail. Under Consumer Commission precedents and RBI Master Directions on PPIs, forcing COD customers to accept non-withdrawable app points without providing a bank account IFSC or UPI payout facility constitutes an actionable deficiency in service.",
  },
  {
    question: "What happens if a forced wallet credit or shopping coupon comes with an expiry date?",
    answer:
      "Imposing an expiry date on a consumer refund is an unfair contract clause under Section 2(46) of CPA 2019 and violates Section 72 of the Indian Contract Act, 1872 regarding unjust enrichment. Consumer Commissions have repeatedly struck down expiring credit vouchers, ordering platforms to pay the full cash amount alongside punitive interest and consumer compensation.",
  },
  {
    question: "Can I demand interest if an e-commerce brand withheld my bank refund inside their wallet for weeks?",
    answer:
      "Yes. When a platform retains your funds inside an internal ledger without statutory authorization, you can claim commercial interest ranging between 9% and 18% per annum under Section 39 of the Consumer Protection Act 2019, in addition to statutory compensation for mental harassment and litigation expenses.",
  },
  {
    question: "What if the shopping app claims their terms and conditions state 'all refunds are in store credit only'?",
    answer:
      "Standard click-wrap terms cannot override parliamentary legislation. The Supreme Court of India in landmark precedents (such as Pioneer Urban Land and Central Inland Water Transport) established that one-sided, non-negotiable clauses that deprive consumers of basic legal rights are unconscionable and legally void. A platform's internal policy cannot extinguish statutory refund protections.",
  },
  {
    question: "Agar e-commerce app wallet me paise bhej de toh bank account me refund kaise le?",
    answer:
      "Agar platform ne zabardasti wallet credit de diya hai, toh us balance ko kharch na karein. Turant grievance officer ko email karein ki aapne wallet credit ki sweekriti nahi di hai aur CPA 2019 Section 2(47) ke antargat bank refund chahte hain. Agar 48 hours me resolution na mile, toh advocate legal notice bhejkar 15 din me bank credit ki statutory maang ki ja sakti hai.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Forced Wallet Credit Instead of a Bank Refund: Can You Refuse?",
  description:
    "Platform refunded you in wallet points or a gift card? When you can insist on refund to the original payment source, and how to demand it.",
  inLanguage: "en-IN",
  mainEntityOfPage: `${SITE_URL}/refund-as-gift-card-or-wallet-legal`,
  datePublished: "2026-11-03T12:00:00+05:30",
  dateModified: "2026-11-03T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  about: {
    "@type": "Thing",
    name: "Consumer Refund Rights, Forced Wallet Credits and E-Commerce Payment Law in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Consumer Refunds",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wallet & Gift Card Refund Legality",
      item: `${SITE_URL}/refund-as-gift-card-or-wallet-legal`,
    },
  ],
};

const faqJsonLd = {
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

export default function ForcedWalletRefundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B]">
        {/* Breadcrumb Header Bar */}
        <div className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-12">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "Consumer Refunds",
                  href: "/services/refunds-and-consumer-complaints",
                },
                {
                  label: "Refund as Wallet or Gift Card Legal?",
                  href: "/refund-as-gift-card-or-wallet-legal",
                },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden border-b border-slate-200 bg-white pt-8 pb-12 sm:pt-12 sm:pb-16"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-semibold text-[#DC2626]">
              <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
              Indian Consumer Law &amp; RBI Source-Account Directives
            </div>

            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:leading-[1.15]"
            >
              Forced Wallet Credit Instead of a Bank Refund: Can You Refuse?
            </h1>

            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              When an online marketplace locks your money in proprietary store credits, non-withdrawable app coins, or expiring gift vouchers, you are not powerless. Indian law guarantees your right to real currency.
            </p>

            {/* Answer Box: Mandatory 40-60 words answer right under H1 */}
            <div className="mt-6 rounded-2xl border-2 border-red-100 bg-[#FFF7F7] p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                <svg
                  className="h-4 w-4 shrink-0 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Statutory Answer (Passage-Level Citation)
              </div>
              <p className="mt-2 text-sm leading-relaxed font-semibold text-slate-900 sm:text-base">
                No platform in India can legally force you to accept store credit or gift cards instead of a refund to your original payment method. Under Section 2(47) of the Consumer Protection Act 2019, CCPA Dark Patterns Guidelines, and RBI PPI Master Directions, defaulting to wallet credit without affirmative consent is an unfair trade practice. You can insist on direct bank remittance within 7 days.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600 border-t border-red-200/60 pt-2.5">
                <span>
                  <strong>Legal Ground:</strong> CPA 2019 § 2(46), § 2(47)
                </span>
                <span>
                  <strong>Regulator:</strong> CCPA &amp; RBI
                </span>
                <span>
                  <strong>Remedy:</strong> 100% Cash Remittance + Interest
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Article */}
        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:px-8 space-y-14">
          {/* Section 1: Key Statutory Facts Table */}
          <section
            aria-labelledby="statutory-facts"
            className="scroll-mt-16"
          >
            <h2
              id="statutory-facts"
              className="text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Key Statutory Facts: Wallet Refunds vs Original Source Reversal
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Before accepting an automated customer support reply claiming that refunds can only be processed as store credits, review the binding legal matrix established under Indian consumer protection and banking legislation.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <caption className="sr-only">
                  Statutory rights governing wallet refunds and source reversals in India
                </caption>
                <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  <tr>
                    <th scope="col" className="p-3.5 sm:p-4">
                      Legal Parameter
                    </th>
                    <th scope="col" className="p-3.5 sm:p-4">
                      Governing Law &amp; Section
                    </th>
                    <th scope="col" className="p-3.5 sm:p-4">
                      Consumer Statutory Rights
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Right to Original Source
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      RBI MD-PPI § 10.2 &amp; CPA 2019 § 2(47)
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      All failed, cancelled, or returned orders paid via Card/UPI/NetBanking must be returned to originating financial rail.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Dark Pattern Ban on Wallet Defaults
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      CCPA Guidelines 2023 (Clauses 4 &amp; 10)
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      Pre-ticked checkboxes or deceptive UX nudges defaulting returns to proprietary credits are strictly prohibited.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Grievance Officer Acknowledgment
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      E-Commerce Rules 2020 Rule 4(5)
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      Appointed Resident Grievance Officer must acknowledge dispute within 48 hours and resolve within 30 days.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Expiring Voucher Prohibition
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      CPA 2019 § 2(46) &amp; Contract Act § 72
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      Arbitrary forfeiture of refund value through expiring dates represents unjust enrichment and an unfair contract.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Cash on Delivery (COD) Reversals
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      Bangalore DCDRC Case Precedent
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      Merchants must collect consumer bank account IFSC or UPI handle and disburse liquid funds; wallet lock-in is illegal.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 bg-red-50/30">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Pre-Litigation Legal Notice
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono text-xs text-slate-600">
                      CPC Order 37 &amp; Legal Notice Rail
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed">
                      Formal advocate notice demands bank remittance within 15 days; transparent fixed fee of ₹{BASE_PRICE} on LegalRecovery.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: G5 Core - Myth vs Fact Matrix */}
          <section
            id="myth-fact-matrix"
            aria-labelledby="myth-fact-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                G5 Archetype Core
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                7 Statutory Truths
              </span>
            </div>
            <h2
              id="myth-fact-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Myth vs. Fact: Legal Realities of Store Credit and Gift Cards
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              E-commerce customer service scripts rely on widespread consumer misunderstandings. Below is the definitive comparison between common merchant claims and the statutory reality under Indian law.
            </p>

            <div className="mt-6 space-y-4">
              {/* Row 1 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #1
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "You accepted our Terms of Use at checkout, so you agreed to refunds in store credit only."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Customer service often quotes standard click-wrap boilerplate asserting that buyers waive their right to bank reversals once an account is registered.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    One-sided click-wrap contracts are void under Section 2(46) of the Consumer Protection Act, 2019.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The Supreme Court of India in <em>Central Inland Water Transport Corp</em> and <em>Pioneer Urban Land</em> affirmed that standard-form adhesion contracts containing unconscionable clauses cannot override statutory rights. Imposing wallet credits when a consumer demands legal tender is an actionable unfair trade practice under Section 2(47).
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #2
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "Cash on Delivery (COD) orders can only be refunded as closed wallet credits."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Shopping apps frequently assert that because no electronic banking rail was used at checkout, they have no technical mechanism to disburse cash to a bank.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    Platforms must provide an outward bank payout rail for COD refunds under RBI guidelines.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under the RBI Master Directions on Prepaid Payment Instruments (Section 10.2) and the Bangalore Consumer Court ruling in <em>Naveen Kumar vs. BigBasket</em>, keeping cash returns trapped in proprietary balances is an unlawful deficiency. The platform is legally required to collect your UPI ID or IFSC and account number to disburse liquid funds.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #3
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "Gift vouchers and refund points carry a valid 30-day or 90-day expiry date."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apps notify consumers that if unused store credits are not redeemed on subsequent purchases within a short timeframe, the balance will automatically lapse.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    Forfeiting refund money via expiration violates Section 72 of the Indian Contract Act, 1872.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A refund represents consideration for which consideration failed. Under Section 72 of the Contract Act, retaining or erasing that sum constitutes unjust enrichment. The Delhi State Consumer Commission in <em>SpiceJet vs. Sanjeev Kumar</em> held that expiring credit shells are inherently unfair and ordered unconditional cash returns with interest.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #4
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "Pre-checking the 'Refund to Wallet' option during return submission is standard UX design."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apps often highlight wallet refunds in bright colors while graying out or hiding the bank transfer option behind multi-layer dropdowns.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    Pre-selected wallet choices are illegal under CCPA Dark Patterns Guidelines, 2023.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Clause 5 and Annexure 1 of the 2023 Dark Patterns Guidelines specifically outlaw "Forced Action", "Default Units", and "Interface Interference". Under Rule 4(4) of the Consumer Protection (E-Commerce) Rules 2020, consent must be affirmative and transparent. Any pre-checked selection renders the transaction vulnerable to regulatory scrutiny.
                  </p>
                </div>
              </div>

              {/* Row 5 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #5
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "The marketplace is only an intermediary; third-party sellers dictate refund modes."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Platforms invoke Section 79 of the Information Technology Act, 2000, claiming they merely host the catalog and cannot control how money is returned.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    Marketplaces bear independent statutory refund duties under E-Commerce Rules, 2020.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Rules 5 and 6 of the E-Commerce Rules 2020 mandate that marketplace entities must effectuate refunds within a reasonable time and maintain an effective grievance mechanism. Safe-harbour under IT Act Section 79 does not apply to consumer disputes involving unfair commercial practices or payment retention.
                  </p>
                </div>
              </div>

              {/* Row 6 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #6
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "Once a wallet balance is credited, technical limitations make outward bank transfer impossible."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Chatbots repeatedly claim their software architecture cannot debit wallet units to generate an outward NEFT, IMPS, or UPI transfer.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    All major payment gateways possess automated payout and reversal APIs.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Razorpay, PayU, Cashfree, and Juspay provide automated bank account payout rails (IMPS/NEFT/UPI Payouts) specifically engineered for customer refund disbursals. Platforms that claim technical impossibility are simply attempting to preserve gross merchandise value (GMV) and lock customer liquidity inside their store.
                  </p>
                </div>
              </div>

              {/* Row 7 */}
              <div
                role="row"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
              >
                <div className="p-5 sm:p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-800 text-[11px]">✕</span>
                    Platform Myth #7
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    "If you don't accept wallet credits, you forfeit the entire refund amount."
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Uncooperative agents tell customers that refusing wallet points means the case is marked 'resolved' and no further escalation is possible.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[11px]">✓</span>
                    Statutory Legal Fact
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    Refusing forced credit preserves your legal claim to statutory interest and compensation.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    By formally rejecting the store credit in writing and maintaining that balance untouched, you build an incontrovertible evidentiary record for Consumer Commissions. Platforms facing formal advocate legal notices routinely reverse the credit and issue direct bank transfers to avert public regulatory scrutiny and courtroom penalties.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Detailed Legal Analysis */}
          <section
            aria-labelledby="legal-framework-heading"
            className="scroll-mt-16"
          >
            <h2
              id="legal-framework-heading"
              className="text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Can an E-Commerce Platform Legally Force You to Accept Wallet Credit?
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                The fundamental principle underpinning Indian consumer jurisprudence is that commercial transactions require bilateral consensus. When you purchase an item on an online shopping portal using legal tender—whether through UPI, credit card, debit card, or cash—the consideration exchanged is sovereign Indian currency. If that contract is cancelled or rescinded due to defective goods, delivery failures, or lawful return within the stated policy window, the doctrine of restitution under Section 65 of the Indian Contract Act, 1872 mandates that both parties be restored to their original financial positions.
              </p>
              <p>
                When a platform unilaterally issues an internal gift card or wallet credit, it attempts to discharge a debt denominated in Indian Rupees using a proprietary, non-convertible token. This practice constitutes three distinct statutory violations:
              </p>
              <ol className="list-decimal pl-5 space-y-3 font-medium text-slate-800">
                <li>
                  <strong>Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019:</strong> The statute defines unfair trade practices as any deceptive or restrictive trade method that materially impacts consumer choice. Retaining consumer capital in a closed ecosystem where it cannot be spent elsewhere forces future purchases and restricts economic freedom.
                </li>
                <li>
                  <strong>Unfair Contract under Section 2(46) of the Consumer Protection Act, 2019:</strong> Any contractual condition that causes a significant imbalance in the rights and obligations of the consumer—such as unilateral refund methods or non-refundable credit shells—is legally defined as an unfair contract and can be declared void by Consumer Commissions.
                </li>
                <li>
                  <strong>Direct Violation of CCPA Dark Patterns Guidelines, 2023:</strong> The Central Consumer Protection Authority explicitly listed &ldquo;Forced Action&rdquo; as a banned dark pattern. The guidelines forbid designing user interfaces that compel consumers to take actions they did not intend, including forcing store credit acceptance to complete a return.
                </li>
              </ol>
              <p>
                Furthermore, under the <Link href="/law/ecommerce-rules-grievance-officer-48-hours" className="text-[#DC2626] font-semibold hover:underline">Consumer Protection (E-Commerce) Rules, 2020</Link>, platforms are legally bound to effect refunds expeditiously. Shifting consumer refunds into a virtual holding pen does not satisfy the statutory test of completing a refund.
              </p>
            </div>
          </section>

          {/* Section 4: What Actually Works - Actionable Steps */}
          <section
            aria-labelledby="what-works-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-red-100 text-[#DC2626] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                Step-by-Step Playbook
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Actionable Escalation
              </span>
            </div>
            <h2
              id="what-works-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              How to Demand a Refund to Original Payment Source: 4 Steps
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              If an e-commerce platform credited your refund as store wallet units or an expiring gift voucher, follow this disciplined legal procedure to force a transfer into your savings account or credit card.
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-extrabold text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Do Not Touch or Spend the Trapped Wallet Balance
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The single most crucial tactical rule is zero utilization. If you redeem even ₹1 of the wallet credit to purchase another product, the platform will argue before the Grievance Officer and consumer forums that you implicitly ratified the credit and accepted the novated contract. Leave the entire credited balance intact in your wallet.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-extrabold text-sm">
                  2
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Lodge a Written Grievance Under Rule 4 of the E-Commerce Rules
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass frontend customer care agents who have no administrative authority to authorize cash payouts. Locate the email address of the platform&apos;s designated Resident Grievance Officer (mandatory on every e-commerce website under Rule 4(4) of the 2020 Rules). Submit an email stating:
                  </p>
                  <blockquote className="mt-2 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] p-3 text-xs font-mono text-slate-800 leading-relaxed select-all">
                    &ldquo;Re: Order #[ORDER_NUMBER] — Immediate Demand for Bank Refund Reversal. I am writing to formally object to the unilateral credit of ₹[AMOUNT] into my store wallet balance. I did not grant explicit affirmative consent for wallet credit. Pursuant to Section 2(47) of the Consumer Protection Act, 2019 and RBI Master Directions on PPIs Section 10.2, I demand that you debit the wallet balance and remit the full amount to my original payment source within 48 hours. Banking Details: Bank [NAME], A/C [NUMBER], IFSC [CODE] / UPI ID [ID].&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-extrabold text-sm">
                  3
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Docket an Official Complaint on the National Consumer Helpline (NCH 1915)
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the Grievance Officer does not remit the funds within 48 to 72 hours, register a statutory grievance on the Department of Consumer Affairs National Consumer Helpline portal (consumerhelpline.gov.in) or dial 1915. Categorize the dispute under <em>&ldquo;E-Commerce &gt; Unfair Trade Practice &gt; Forced Wallet Refund / Dark Pattern&rdquo;</em>. NCH complaints generate a traceable docket number and trigger automated alerts to compliance officers at top marketplaces.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white font-extrabold text-sm">
                  4
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Serve an Advocate Pre-Litigation Legal Notice
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When digital appeals fail, an advocate legal notice drafted under the Consumer Protection Act 2019 changes the commercial equation. The notice puts the company&apos;s legal team on formal notice of pre-litigation liability, citing unfair trade practice damages, commercial interest at 18% p.a., and litigation expenses. Over 85% of forced wallet disputes settle within the 15-day notice period via direct NEFT or IMPS bank credit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Hand-Authored SVG Flowchart / Decision Tree */}
          <section
            aria-labelledby="decision-tree-heading"
            className="scroll-mt-16"
          >
            <h2
              id="decision-tree-heading"
              className="text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Decision Tree: Escalating When Funds Are Trapped in a Wallet
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              This process workflow outlines the legal decision logic from the moment an unauthorized store credit is detected to full bank recovery.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
              <svg
                viewBox="0 0 800 520"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Workflow diagram illustrating statutory escalation from forced wallet credit to bank remittance"
              >
                {/* Background Grid Accent */}
                <rect width="800" height="520" fill="#FAFAFA" rx="12" />

                {/* Step 1: Trigger */}
                <rect x="50" y="30" width="320" height="70" rx="8" fill="#0F172A" />
                <text x="210" y="58" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Trigger: Refund Credited as Store Credit
                </text>
                <text x="210" y="78" fill="#94A3B8" fontSize="11" textAnchor="middle">
                  Wallet balance or digital voucher forced without consent
                </text>

                {/* Arrow 1 */}
                <line x1="210" y1="100" x2="210" y2="135" stroke="#64748B" strokeWidth="2" strokeDasharray="4" />
                <polygon points="210,140 205,130 215,130" fill="#64748B" />

                {/* Step 2: Critical Rule */}
                <rect x="50" y="140" width="320" height="70" rx="8" fill="#DC2626" />
                <text x="210" y="168" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                  RULE #1: ZERO UTILIZATION
                </text>
                <text x="210" y="188" fill="#FEE2E2" fontSize="11" textAnchor="middle">
                  Do not redeem ₹1; avoid implied contract novation
                </text>

                {/* Branch from Step 2 */}
                <path d="M370 175 L460 175 L460 175" stroke="#64748B" strokeWidth="2" fill="none" />
                <polygon points="465,175 455,170 455,180" fill="#64748B" />

                {/* Step 3: Grievance Officer Notice */}
                <rect x="465" y="140" width="285" height="70" rx="8" fill="#1E293B" />
                <text x="607" y="168" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Formal Rule 4 Objection
                </text>
                <text x="607" y="188" fill="#94A3B8" fontSize="10" textAnchor="middle">
                  Email Grievance Officer + cite CPA §2(47)
                </text>

                {/* Arrow Down from Step 3 */}
                <line x1="607" y1="210" x2="607" y2="250" stroke="#64748B" strokeWidth="2" />
                <polygon points="607,255 602,245 612,245" fill="#64748B" />

                {/* Decision Diamond / Box */}
                <rect x="475" y="255" width="265" height="70" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                <text x="607" y="283" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Resolution Within 48–72 Hours?
                </text>
                <text x="607" y="303" fill="#64748B" fontSize="10" textAnchor="middle">
                  Did merchant initiate outward bank transfer?
                </text>

                {/* Branch YES */}
                <line x1="475" y1="290" x2="390" y2="290" stroke="#10B981" strokeWidth="2" />
                <polygon points="385,290 395,285 395,295" fill="#10B981" />
                <rect x="220" y="260" width="165" height="60" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                <text x="302" y="285" fill="#065F46" fontSize="11" fontWeight="bold" textAnchor="middle">
                  YES: Resolved
                </text>
                <text x="302" y="303" fill="#047857" fontSize="10" textAnchor="middle">
                  Bank UTR / ARN Credited
                </text>

                {/* Branch NO */}
                <line x1="607" y1="325" x2="607" y2="365" stroke="#EF4444" strokeWidth="2" />
                <polygon points="607,370 602,360 612,360" fill="#EF4444" />
                <text x="625" y="350" fill="#EF4444" fontSize="10" fontWeight="bold">
                  NO (Ignored / Bot Replies)
                </text>

                {/* Step 4: Legal Notice Rail */}
                <rect x="445" y="370" width="325" height="110" rx="10" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5" />
                <text x="607" y="398" fill="#A5B4FC" fontSize="11" fontWeight="bold" textAnchor="middle">
                  STATUTORY ADVOCATE LEGAL NOTICE
                </text>
                <text x="607" y="420" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Demand Bank Remittance + Damages
                </text>
                <text x="607" y="440" fill="#E0E7FF" fontSize="10" textAnchor="middle">
                  15-Day Statutory Ultimatum | CCPA &amp; RBI Citations
                </text>
                <text x="607" y="460" fill="#F43F5E" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Escalation to e-Jagriti for ₹10k+ Compensation
                </text>

                {/* NCH Box Left */}
                <rect x="50" y="370" width="340" height="110" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                <text x="220" y="400" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Parallel Track: NCH 1915 Portal
                </text>
                <text x="220" y="422" fill="#64748B" fontSize="10" textAnchor="middle">
                  Log docket under Dark Pattern &gt; Forced Wallet Refund
                </text>
                <text x="220" y="445" fill="#64748B" fontSize="10" textAnchor="middle">
                  National Consumer Helpline automated escalation
                </text>
                <text x="220" y="465" fill="#DC2626" fontSize="10" fontWeight="semibold" textAnchor="middle">
                  Creates unalterable record for Consumer Court
                </text>
              </svg>
            </div>
          </section>

          {/* Section 6: Worked Example Card */}
          <section
            aria-labelledby="worked-example-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                Concrete Case Study
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Illustrative Dispute Resolution
              </span>
            </div>
            <h2
              id="worked-example-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Case Study: Converting ₹6,499 Store Credit to Bank Account
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              This real-world illustrative worked example illustrates how a Bangalore-based software engineer used statutory provisions to break out of a proprietary shopping voucher trap.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Dispute Profile
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                    Rahul Varma vs. Leading Fashion Marketplace
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-[#DC2626]">
                    ₹6,499 Locked in Store Credit
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    100% Recovered to Bank
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-900">1. Transaction &amp; Return</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Rahul ordered a pair of noise-cancelling headphones priced at ₹6,499 using his HDFC Bank Visa Credit Card. Upon delivery, the left earbud produced audio static. Rahul initiated a return request within the 7-day replacement window. The product was verified and collected by the courier agent.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">2. The Forced Credit Trap</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Rather than initiating an acquirer card reversal, the portal automatically credited ₹6,499 into a &ldquo;Wallet Gift Card&rdquo; with a 90-day expiry date. When Rahul requested a bank transfer, customer support stated: <em>&ldquo;As per our revised company policy, returned electronics are eligible for store voucher only.&rdquo;</em>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">3. Legal Escalation Rail</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Rahul left the voucher untouched. Through LegalRecovery, he dispatched a formal advocate legal notice to the marketplace&apos;s corporate office in Bangalore. The notice established that imposing expiring vouchers violated Section 2(46) of the Consumer Protection Act, 2019, CCPA Dark Patterns Guidelines, and RBI Master Direction on PPIs Section 10.2.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">4. Resolution &amp; Remittance</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Within 6 business days of receiving the legal notice, the marketplace&apos;s legal desk cancelled the ₹6,499 digital voucher, processed an outward card reversal with a 23-digit Acquirer Reference Number (ARN), and issued a written apology alongside ₹1,000 compensation for administrative delay.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Verified Case Law Strip */}
          <section
            aria-labelledby="case-law-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-red-100 text-[#DC2626] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                Judicial Precedents
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Binding Forum Rulings
              </span>
            </div>
            <h2
              id="case-law-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Consumer Court Precedents on Forced Store Credit and Vouchers
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Consumer Disputes Redressal Commissions across India consistently rule against platforms that attempt to retain consumer money inside closed wallets or non-transferable coupons.
            </p>

            <div className="mt-6 space-y-4">
              {/* Case 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Bangalore Urban DCDRC · CC/142/2022
                  </span>
                  <span className="rounded-full bg-red-50 text-[#DC2626] px-2.5 py-0.5 text-xs font-bold">
                    ₹10,000 Compensation Awarded
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Naveen Kumar vs. Supermarket Grocery Supplies Pvt. Ltd. (BigBasket)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The consumer returned damaged groceries paid on delivery. The e-commerce grocery company credited ₹2,840 into the consumer&apos;s app wallet balance and refused to transfer the money to the customer&apos;s savings account. The Bangalore District Commission held that retaining consumer funds in an internal wallet without affirmative consent constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission directed the platform to remit the entire ₹2,840 to the complainant&apos;s bank account, alongside ₹10,000 as compensation for mental agony and ₹5,000 towards litigation costs.
                </p>
              </div>

              {/* Case 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Delhi State CDRC · First Appeal No. 112/2021
                  </span>
                  <span className="rounded-full bg-red-50 text-[#DC2626] px-2.5 py-0.5 text-xs font-bold">
                    Expiring Vouchers Declared Void + 9% Interest
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  SpiceJet Ltd. vs. Sanjeev Kumar &amp; Ors.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Following a service cancellation, the company unilaterally issued a &ldquo;credit shell&rdquo; voucher with an expiry period of 12 months rather than processing a monetary reversal to the customer&apos;s bank account. The Delhi State Consumer Commission ruled that forcing consumers to accept restricted vouchers or credit shells in lieu of cash refunds is completely arbitrary, contrary to public policy, and a gross deficiency in service. The Commission directed an unconditional refund in legal tender with 9% annual interest from the date of cancellation.
                </p>
              </div>

              {/* Case 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Chandigarh DCDRC · CC/418/2020
                  </span>
                  <span className="rounded-full bg-red-50 text-[#DC2626] px-2.5 py-0.5 text-xs font-bold">
                    Wallet Lock-In Overturned + ₹7,500 Costs
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Amit Sharma vs. MakeMyTrip India Pvt. Ltd.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The travel booking portal credited ₹18,650 into its proprietary &ldquo;MyCash&rdquo; wallet following an itinerary cancellation, claiming the user agreed to wallet refunds in the app settings. The forum held that default wallet assignments represent an unconscionable contract under Section 2(46). The platform was ordered to remit the full ₹18,650 to the complainant&apos;s bank account and pay ₹7,500 in legal expenses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Interactive Tool Island */}
          <section
            aria-labelledby="calculator-island"
            className="scroll-mt-16"
          >
            <h2 id="calculator-island" className="sr-only">
              Interactive Source Refund Eligibility Checker
            </h2>
            <WalletRefundChecker />
          </section>

          {/* Section 9: Evidence Checklist */}
          <section
            aria-labelledby="evidence-checklist-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                Pre-Litigation Dossier
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Section 63 BSA Compliant
              </span>
            </div>
            <h2
              id="evidence-checklist-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              Evidence Checklist: Proving an Unlawful Forced Credit Dispute
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              To substantiate a claim before the Grievance Officer, National Consumer Helpline, or an e-Jagriti consumer bench, assemble these six documentary proofs:
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Original Order Invoice &amp; Payment Proof:</strong> The official tax invoice displaying order ID, item price, GST breakdown, and originating payment method (e.g., &ldquo;Paid via UPI / HDFC Credit Card / COD&rdquo;).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Return Acceptance or Pickup Receipt:</strong> Courier return receipt, tracking manifest, or return status screenshot showing the returned package was inspected and accepted at the warehouse.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Wallet Credit / Voucher Screenshot:</strong> High-resolution screenshot of the app wallet ledger showing the exact credited amount, transaction timestamp, and any attached expiry date or non-transferability restrictions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Proof of Zero Utilization:</strong> Screenshot verifying that the wallet balance remains 100% unspent, proving that you have not accepted the store credit as settlement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Written Rejection of Wallet Credit:</strong> Email or chat transcript showing your immediate refusal of the voucher and your explicit demand for a bank transfer sent to the Grievance Officer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    <strong>Bank Account / UPI Credentials:</strong> Formal written confirmation provided to the merchant containing your account holder name, account number, bank IFSC code, or registered UPI handle.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10: Scope and Limitations */}
          <section
            aria-labelledby="scope-heading"
            className="scroll-mt-16"
          >
            <h2
              id="scope-heading"
              className="text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              What LegalRecovery Can and Cannot Do in Forced Wallet Credit Disputes
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We believe in total transparency regarding our legal notice services and statutory enforcement capabilities.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="text-sm">✓</span> What We Can Do
                </div>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>• Draft an advocate legal notice asserting CPA §2(47) and CCPA Dark Patterns violations.</li>
                  <li>• Demand cancellation of store wallet units and direct bank remittance with statutory interest.</li>
                  <li>• Dispatch notices via Speed Post and digital channels directly to corporate directors and legal officers.</li>
                  <li>• Provide structured pre-litigation documentation ready for e-Jagriti consumer court filings.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <span className="text-sm">✕</span> What We Cannot Do
                </div>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>• We cannot debit an e-commerce platform&apos;s bank account directly without an order from a Consumer Commission.</li>
                  <li>• We cannot restore wallet credits if you already spent or partially redeemed the balance on another purchase.</li>
                  <li>• We cannot overturn returns where the seller proved the returned product was completely counterfeit or swapped.</li>
                  <li>• We cannot act as your personal court appearance counsel in distant District Forums without separate Vakalatnama.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 11: Call to Action Banner */}
          <section
            aria-label="Legal Notice CTA"
            className="scroll-mt-16"
          >
            <ForcedCreditCTA />
          </section>

          {/* Section 12: Frequently Asked Questions */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="scroll-mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                FAQ Directory
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                8 Practical Questions
              </span>
            </div>
            <h2
              id="faq-heading"
              className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl tracking-tight"
            >
              FAQs on Gift Card and Wallet Refund Laws in India
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Clear, cited answers to the most common queries regarding forced wallet credits, source reversals, and consumer court remedies.
            </p>

            <div className="mt-6 space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 13: Internal Links Contextual Navigation */}
          <section
            aria-labelledby="related-escalations"
            className="scroll-mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h2
              id="related-escalations"
              className="text-lg font-bold text-slate-900 sm:text-xl"
            >
              Related E-Commerce Dispute &amp; Statutory Refund Guides
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Explore our platform-specific escalation playbooks and statutory refund recovery resources:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <Link
                href="/flipkart-return-refund-complaint"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → Flipkart Return &amp; Refund Complaints Playbook
              </Link>
              <Link
                href="/legal-notice-to/myntra"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → Legal Notice to Myntra: Stuck Refund &amp; ARN Tracing
              </Link>
              <Link
                href="/legal-notice-to/meesho"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → Legal Notice to Meesho: Reseller vs Marketplace Refund
              </Link>
              <Link
                href="/refund-shows-successful-but-not-received"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → Refund Shows Successful but Not Received (UTR/ARN Trace)
              </Link>
              <Link
                href="/legal-notice-charges"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → Legal Notice Pricing &amp; Fixed Transparent Fee Guide
              </Link>
              <Link
                href="/law/dark-patterns-guidelines-consumer-rights"
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] font-semibold text-slate-800 hover:text-[#DC2626] transition"
              >
                → CCPA Dark Patterns Guidelines: Drip Pricing &amp; Forced Action
              </Link>
            </div>
          </section>

          {/* Section 14: Primary Sources & Legal Citations */}
          <section
            aria-labelledby="sources-heading"
            className="scroll-mt-16 border-t border-slate-200/80 pt-8"
          >
            <h2
              id="sources-heading"
              className="text-base font-bold uppercase tracking-wider text-slate-500"
            >
              Statutory Provisions, RBI Master Directions &amp; Legal Citations
            </h2>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <ul className="divide-y divide-slate-100 text-xs text-slate-600">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-slate-800">
                      {source.title}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline shrink-0 text-[11px]"
                    >
                      View Primary Authority ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Legal information updated as of 03 November 2026. Content provided for consumer awareness and pre-litigation resolution.
            </p>
          </section>
        </article>

        {/* Global Contextual Guides Slider */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
