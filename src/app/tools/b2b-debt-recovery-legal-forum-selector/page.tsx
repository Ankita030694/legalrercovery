import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import B2bForumSelectorClient from "./B2bForumSelectorClient";
import B2bForumSelectorTOC from "./B2bForumSelectorTOC";
import B2bForumSelectorCTA from "./B2bForumSelectorCTA";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Reviewer box omitted per §6 rule.

const PAGE_PATH = "/tools/b2b-debt-recovery-legal-forum-selector";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Interactive B2B & Institutional Recovery Forum Decision Engine: Find Your Fastest Statutory Track in 30 Seconds";
const META_TITLE = "B2B Recovery Forum Selector: MSME vs Order 37 vs IBC & DRT";
const META_DESCRIPTION =
  "Answer 6 inputs (Creditor, Udyam Tier, Amount, Cheque/e-NACH/Contract, Debtor) to rank IBC s.8, DRT, SARFAESI, PSS s.25, MSME ODR & Order 37.";
const OG_ALT = formatAltText("B2B Debt Recovery Legal Forum Selector Decision Engine");

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "b2b debt recovery forum selector msme vs order 37 vs ibc vs drt",
    "which court to file b2b unpaid invoice case india",
    "msme samadhaan vs commercial court vs nclt ibc comparison",
    "can we file section 138 and order 37 together",
    "commercial recovery eligibility wizard india",
    "estimated timeline and cost b2b recovery india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "LegalRecovery.in",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: OG_ALT,
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

const FAQ_ITEMS = [
  {
    question: "Which court or tribunal should I choose for an unpaid B2B invoice in India?",
    answer:
      "The right forum depends on four statutory filters: your Udyam registration tier, the claim amount, whether the debtor is a Company/LLP, and your payment instruments. Micro and Small enterprises with pre-contract Udyam registration get the highest leverage at MSME Samadhaan/MSEFC (20.25% monthly-compounded interest plus Section 43B(h) tax disallowance). Unregistered suppliers with written invoices should use Order XXXVII CPC Summary Suits (entering Commercial Court at ₹3 Lakh+ after mandatory Section 12A mediation), while undisputed claims of ₹1 Crore or more against Companies/LLPs unlock IBC Section 8 Demand Notices.",
  },
  {
    question: "Can we file a Section 138 cheque bounce case and an Order 37 summary suit together?",
    answer:
      "Yes. Indian courts consistently hold that criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 (or Section 25 of the Payment and Settlement Systems Act, 2007 for e-NACH bounces) and civil recovery under Order XXXVII CPC or Commercial Court are independent remedies that can run simultaneously. Criminal proceedings punish the dishonour and create personal liability for directors under Section 141, while the civil suit secures a money decree and asset attachment—though any amount recovered in one proceeding is adjusted against the final decree.",
  },
  {
    question: "Why does MSME Samadhaan reject Medium Enterprises and EPC Works Contractors?",
    answer:
      "Section 2(n) of the MSMED Act, 2006 defines a 'supplier' eligible for Chapter V remedies (Sections 15 to 24) strictly as a Micro or Small enterprise, excluding Medium enterprises. Furthermore, High Courts across India have ruled that composite EPC, civil construction, and indivisible works contracts (involving both material supply and site erection/labour) fall outside MSEFC jurisdiction. Filing before MSEFC in either scenario triggers dismissal after months of delay, making Order XXXVII CPC, Commercial Court, or Arbitration the proper first track.",
  },
  {
    question: "When is a claim barred from DRT and NCLT under pecuniary thresholds?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, Banks and Financial Institutions cannot file an Original Application in the Debt Recovery Tribunal (DRT) if the debt is below ₹20 Lakh; similarly, notified NBFCs require a ₹20 Lakh minimum default for SARFAESI enforcement. Under Section 4 of the Insolvency and Bankruptcy Code (IBC), 2016, Operational and Financial Creditors cannot file NCLT insolvency petitions unless the default is ₹1 Crore or more.",
  },
  {
    question: "Is Section 12A Pre-Institution Mediation mandatory before filing a Commercial Suit?",
    answer:
      "Yes. Under Section 12A of the Commercial Courts Act, 2015 and the Supreme Court ruling in Patil Automation Pvt. Ltd. v. Rakheja Engineers (2022) 10 SCC 1, any commercial suit of Specified Value (₹3 Lakh and above) filed without first exhausting DLSA/SLSA Pre-Institution Mediation (Form-1 filing with ₹1,000 fee) must be rejected suo motu under Order VII Rule 11 CPC. The sole narrow exception under Yamini Manohar (2024) 5 SCC 815 is where the plaintiff demonstrates genuine urgency requiring immediate interim relief such as Order XXXVIII Rule 5 attachment before judgment.",
  },
  {
    question: "What happens if I send an IBC Section 8 Demand Notice when there is a prior email dispute?",
    answer:
      "Under Mobilox Innovations Pvt. Ltd. v. Kirusa Software (2018) 1 SCC 353, if the corporate debtor replies within 10 days pointing to a plausible pre-existing dispute (such as a quality rejection email, debit note, or rate disagreement raised prior to the Section 8 notice), the NCLT is legally bound to reject the Section 9 insolvency application. In contested invoice cases, creditors should skip NCLT and proceed via Commercial Court or Arbitration backed by BSA 2023 Section 63 electronic records.",
  },
];

export default function B2bDebtRecoveryLegalForumSelectorPage() {
  const breadcrumbSchema = {
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
        name: "B2B Debt Recovery India",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "B2B Legal Forum Selector",
        item: PAGE_URL,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: EXACT_H1,
    headline: EXACT_H1,
    url: PAGE_URL,
    description: META_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    inLanguage: "en-IN",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: EXACT_H1,
    applicationCategory: "LegalService",
    operatingSystem: "Web",
    url: PAGE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>CORE-26 Flagship Decision Engine</span>
            <span>•</span>
            <span>₹1L / ₹3L / ₹20L / ₹1Cr Statutory Cutoffs</span>
            <span>•</span>
            <span>Creditor-Side Matrix</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div
            aria-label="Statutory Summary"
            className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Choosing the wrong Indian recovery forum wastes 6 to 18 months in jurisdictional
            dismissals. Anchored in our{" "}
            <Link
              href="/b2b-debt-recovery-india"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              B2B &amp; Institutional Debt Recovery India
            </Link>{" "}
            framework, this 6-input engine screens pecuniary cutoffs (₹1L, ₹3L, ₹20L, ₹1Cr),
            catches fatal Udyam/Works-Contract traps, and pairs the exact Pre-Litigation Legal
            Notice with your fastest primary and parallel statutory tracks.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Pecuniary Thresholds
              </span>
              <span className="text-slate-100 font-bold text-sm sm:text-base">
                ₹1L / ₹3L / ₹20L / ₹1Cr
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Statutory Forums Ranked
              </span>
              <span className="text-emerald-400 font-bold text-sm sm:text-base">
                MSME, Order 37, IBC, DRT
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Fatal Traps Screened
              </span>
              <span className="text-amber-400 font-bold text-sm sm:text-base">
                7 Jurisdictional Bars
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Parallel Criminal Track
              </span>
              <span className="text-red-400 font-bold text-sm sm:text-base">
                NI s.138 &amp; PSS s.25
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "B2B Debt Recovery India", href: "/b2b-debt-recovery-india" },
              { label: "B2B Legal Forum Selector", href: PAGE_PATH },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <B2bForumSelectorTOC />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* 1. Interactive 6-Input Decision Engine */}
            <B2bForumSelectorClient />

            {/* 2. Pecuniary & Statutory Cutoff Matrix */}
            <section
              id="statutory-cutoff-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Multi-Statute Comparison
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Indian B2B Debt Recovery Pecuniary &amp; Eligibility Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before instructing counsel or paying ad-valorem court fees, CFOs and credit
                controllers must map every overdue account against India&apos;s four statutory
                pecuniary gates. Crossing a threshold changes the forum, pre-deposit burden,
                and settlement leverage entirely.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statutory Forum</th>
                      <th className="p-3.5 font-bold">Pecuniary Floor</th>
                      <th className="p-3.5 font-bold">Eligible Creditor</th>
                      <th className="p-3.5 font-bold">Notice Window</th>
                      <th className="p-3.5 font-bold">Key Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MSME Samadhaan / MSEFC (s.18)
                      </td>
                      <td className="p-3.5">No floor</td>
                      <td className="p-3.5">Micro &amp; Small Udyam (prior to contract)</td>
                      <td className="p-3.5">15-Day s.15/16 &amp; s.43B(h) Notice</td>
                      <td className="p-3.5">
                        3× RBI compound interest (20.25%) + 75% appeal pre-deposit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3.5">No floor (≥₹3L Commercial)</td>
                      <td className="p-3.5">Any creditor with written contract / invoice</td>
                      <td className="p-3.5">15-Day Demand (+ s.12A if ≥₹3L)</td>
                      <td className="p-3.5">
                        Debtor must seek Leave to Defend within 10 days of summons
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC Section 8 &amp; 9 (NCLT)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">₹1,00,00,000 (₹1 Cr)</td>
                      <td className="p-3.5">Operational / Financial Creditor vs Co./LLP</td>
                      <td className="p-3.5">10-Day Form 3 / Form 4 Notice</td>
                      <td className="p-3.5">
                        Board suspension threat; ₹2,000 NCLT filing fee (s.9)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        DRT Original Application (RDB s.19)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">₹20,00,000 (₹20L)</td>
                      <td className="p-3.5">Scheduled Banks &amp; Notified FIs</td>
                      <td className="p-3.5">15-Day Loan Recall Notice</td>
                      <td className="p-3.5">
                        Fee capped at ₹1.5L; Recovery Officer asset attachment
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        SARFAESI Act (s.13(2) / s.14)
                      </td>
                      <td className="p-3.5">₹1L (Banks) / ₹20L (NBFCs)</td>
                      <td className="p-3.5">Secured Banks, HFCs &amp; Notified NBFCs</td>
                      <td className="p-3.5">60-Day s.13(2) Statutory Notice</td>
                      <td className="p-3.5">
                        Non-judicial possession &amp; auction without civil trial
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act s.138 &amp; PSS Act s.25
                      </td>
                      <td className="p-3.5">No floor</td>
                      <td className="p-3.5">Holder of bounced cheque / e-NACH mandate</td>
                      <td className="p-3.5">30-Day Notice + 15-Day Cure</td>
                      <td className="p-3.5">
                        Personal criminal liability + up to 20% interim deposit (s.143A)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Fatal Jurisdiction Traps + Visual Decision Flow SVG */}
            <section
              id="fatal-jurisdiction-traps"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Risk Screening
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Six Fatal Jurisdiction Traps That Trigger Summary Dismissal
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our decision engine automatically flags six recurring statutory errors that cause
                creditors to lose valuable limitation time and non-refundable filing fees:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-xl p-4 border border-slate-800 overflow-x-auto">
                <svg
                  width="760"
                  height="210"
                  viewBox="0 0 760 210"
                  role="img"
                  aria-label="B2B Legal Recovery Forum Decision Tree"
                  className="w-full h-auto"
                >
                  <rect x="10" y="75" width="150" height="58" rx="10" fill="#DC2626" />
                  <text x="85" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Overdue B2B Claim
                  </text>
                  <text x="85" y="118" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Screen 6 Inputs First
                  </text>

                  <line x1="160" y1="104" x2="210" y2="38" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="160" y1="104" x2="210" y2="104" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="160" y1="104" x2="210" y2="170" stroke="#94A3B8" strokeWidth="2" />

                  <rect x="210" y="10" width="235" height="54" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="327" y="33" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">
                    Micro/Small Prior Udyam (Non-EPC)
                  </text>
                  <text x="327" y="50" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    MSME s.15/16 + 43B(h) Notice → MSEFC
                  </text>

                  <rect x="210" y="77" width="235" height="54" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="327" y="100" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    Undisputed ≥ ₹1 Cr vs Co./LLP
                  </text>
                  <text x="327" y="117" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    IBC s.8 Form 3/4 (10d) → NCLT s.9
                  </text>

                  <rect x="210" y="144" width="235" height="54" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="327" y="167" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    Bank/NBFC ≥ ₹20L or Secured
                  </text>
                  <text x="327" y="184" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    SARFAESI s.13(2) (60d) / DRT s.19
                  </text>

                  <line x1="445" y1="37" x2="495" y2="104" stroke="#64748B" strokeWidth="2" />
                  <line x1="445" y1="104" x2="495" y2="104" stroke="#64748B" strokeWidth="2" />
                  <line x1="445" y1="171" x2="495" y2="104" stroke="#64748B" strokeWidth="2" />

                  <rect x="495" y="64" width="255" height="80" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="622" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Parallel Criminal &amp; Civil Stack
                  </text>
                  <text x="622" y="110" textAnchor="middle" fill="#FCA5A5" fontSize="10">
                    Cheque (s.138) / e-NACH (PSS s.25)
                  </text>
                  <text x="622" y="127" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    + Order 37 / Commercial Court (s.12A)
                  </text>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-1">
                    1. Medium Udyam or Post-Contract Udyam in MSEFC
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Under <em>Silpi Industries v. KSRTC</em> (2021) 18 SCC 790 and Section 2(n),
                    Medium enterprises and vendors registered after the supply contract date cannot
                    claim 3× RBI interest or MSEFC jurisdiction.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-1">
                    2. Indivisible Works / EPC Contracts in MSME Samadhaan
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Turnkey civil construction, MEP, and works contracts are excluded from MSEFC
                    conciliation. Route these straight to contractual Arbitration (s.21 + s.9) or
                    Commercial Court.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-1">
                    3. Sub-₹20L Bank/NBFC Loans in DRT or Sub-₹1Cr in NCLT
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    DRT rejects claims under ₹20 Lakh (RDB Act s.1(4)), and NCLT rejects Operational
                    Creditor petitions under ₹1 Crore (IBC s.4). Always verify principal plus
                    contractual interest before issuing Form 3/4.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-1">
                    4. Skipping Section 12A Mediation in ₹3L+ Suits
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Per <em>Patil Automation</em> (2022) 10 SCC 1, Commercial Suits ≥ ₹3 Lakh without
                    a DLSA Form-3 Non-Starter Report face automatic Order VII Rule 11 rejection. Read
                    our{" "}
                    <Link
                      href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Section 12A Commercial Courts Guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Parallel Remedy Stacking */}
            <section
              id="parallel-remedy-stacking"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Multi-Track Leverage
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Stacking Section 138 / PSS s.25 Alongside Order 37 or IBC
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A frequent question from General Counsel and credit heads is whether filing a
                criminal cheque bounce complaint under <strong>Section 138 NI Act</strong> (or an
                e-NACH bounce complaint under <strong>Section 25 PSS Act</strong>) bars a civil
                recovery suit under <strong>Order XXXVII CPC</strong> or an{" "}
                <Link
                  href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                  className="text-[#DC2626] font-semibold underline"
                >
                  IBC Section 8 Form 3/4 Demand Notice
                </Link>
                . Under settled Supreme Court jurisprudence, criminal dishonour proceedings and civil
                recovery actions operate in distinct spheres and may be pursued concurrently.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In practice, serving a combined statutory demand notice—explicitly citing both the
                30-day criminal prosecution trigger and the civil/MSME/IBC escalation window—resolves
                a substantial share of corporate receivables before a single court fee is paid. Our{" "}
                <Link
                  href="/reports/legal-notice-outcomes-study"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Legal Notice Outcomes Empirical Study
                </Link>{" "}
                benchmarks how structured pre-litigation notices accelerate B2B settlement cycles.
              </p>
            </section>

            {/* 5. Timeline & Court Fee Comparison */}
            <section
              id="timeline-cost-comparison"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  CFO Cost-Benefit Benchmark
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Cost &amp; Timeline Comparison (₹25 Lakh vs ₹1.2 Crore)
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="font-extrabold text-slate-900">
                    Scenario A: ₹25 Lakh Unpaid B2B Invoice (Small Udyam Supplier)
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Best Track:</strong> 15-Day MSME s.15/16 + s.43B(h) Demand Notice →
                    MSEFC Reference. Avoids state ad-valorem court fee (which can exceed ₹1–2 Lakh
                    in High Court/Commercial Suits) and triggers 20.25% monthly-compounded interest.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="font-extrabold text-slate-900">
                    Scenario B: ₹1.20 Crore Undisputed Default (Non-MSME vs Pvt Ltd)
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Best Track:</strong> 10-Day IBC Section 8 Form 3/4 Demand Notice → NCLT
                    Section 9 Petition (₹2,000 filing fee) paired with Section 138 NI Act if a PDC
                    bounced. Bypasses heavy ad-valorem Commercial Court stamp duty while putting the
                    debtor&apos;s Board control at risk.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Pre-Litigation Notice & BSA s.63 */}
            <section
              id="notice-and-evidence-prep"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Admissibility &amp; Dispatch
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Pre-Litigation Notice &amp; BSA 2023 Section 63 Readiness
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Regardless of which forum our selector ranks first, every commercial claim relies on
                tamper-proof digital records—Tally/SAP ledgers, GST e-Invoices, E-Way Bills, email
                acknowledgements, and WhatsApp delivery confirmations. Before issuing your demand
                notice, prepare a compliant{" "}
                <Link
                  href="/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b"
                  className="text-[#DC2626] font-semibold underline"
                >
                  BSA 2023 Section 63 Electronic Evidence Certificate
                </Link>{" "}
                and dispatch via multi-channel proof (Email + WhatsApp + Speed Post RPAD). For
                growing enterprises, explore our dedicated{" "}
                <Link
                  href="/recovery-of-unpaid-dues-for-my-business"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Business Unpaid Dues Recovery Desk
                </Link>{" "}
                or our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Bulk Email, WhatsApp &amp; Speed Post Notice Solution
                </Link>
                .
              </p>
            </section>

            {/* 7. Dual-Track B2B Conversion CTA */}
            <section id="next-steps-recovery" className="scroll-mt-28 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Execution Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Convert Your Selected Track Into a Fact-Verified Notice
                </h2>
              </div>
              <B2bForumSelectorCTA />
            </section>

            {/* 8. FAQs */}
            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Practitioner Q&amp;A
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions on B2B Forum Selection
                </h2>
              </div>
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 text-sm sm:text-base font-bold text-slate-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 9. Primary Statutory Sources */}
            <section
              id="primary-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Primary Statutory Sources &amp; Verified Precedents
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>MSMED Act, 2006:</strong> Sections 2(n), 15, 16, 18, 19 &amp;{" "}
                  <em>Silpi Industries v. KSRTC</em> (2021) 18 SCC 790;{" "}
                  <a
                    href="https://samadhaan.msme.gov.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline"
                  >
                    MSME Samadhaan Portal
                  </a>
                </li>
                <li>
                  <strong>Insolvency &amp; Bankruptcy Code, 2016:</strong> Sections 4, 7, 8, 9 &amp;{" "}
                  <em>Mobilox Innovations v. Kirusa Software</em> (2018) 1 SCC 353
                </li>
                <li>
                  <strong>Commercial Courts Act, 2015 &amp; CPC 1908:</strong> Section 12A, Order
                  XXXVII, Order XXXVIII Rule 5, <em>Patil Automation</em> (2022) 10 SCC 1 &amp;{" "}
                  <em>Yamini Manohar</em> (2024) 5 SCC 815
                </li>
                <li>
                  <strong>Banking &amp; Payment Statutes:</strong> RDB Act, 1993 s.1(4) &amp; s.19;
                  SARFAESI Act, 2002 s.13(2)/s.14; NI Act, 1881 s.138/s.143A; PSS Act, 2007 s.25;{" "}
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline"
                  >
                    India Code Statutory Repository
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
