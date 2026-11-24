import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PublisherTableOfContents from "./PublisherTableOfContents";
import PublisherScenarioTabs from "./PublisherScenarioTabs";
import PublisherNoticeCTA from "./PublisherNoticeCTA";
import {
  BookOpen,
  ShieldAlert,
  FileCheck2,
  Scale,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  Landmark,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL =
  "/school-textbook-publisher-uniform-stationery-distributor-recovery";
const EXACT_H1 =
  "Supplied ₹25 Lakh of Textbooks & Workbooks in March—and the School or Bookshop Vendor Still Hasn't Paid by November? Publisher Recovery Guide";
// Tightened to 56 chars (within 30-60ch limit) preserving primary keyword
const META_TITLE = "School Book Publisher & Educational Distributor Recovery";
// Tightened to 147 chars (within 120-155ch limit) preserving statutory facts
const META_DESCRIPTION =
  "K-12 publishers hit by March–April school & bookshop defaults? Recover dues before new session via Order 37 CPC, NI s.138 & Dec–Jan bulk notices.";

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
        alt: formatAltText(
          "School Book Publisher Uniform & Stationery Distributor Debt Recovery"
        ),
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
    title:
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Written Contracts, Invoices & Dishonoured Cheques) & Section 80 (Notice to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Negotiable Instruments Act, 1881 — Section 138, Section 141 & Section 143A (Criminal Prosecution & 20% Interim Compensation for Bounced PDCs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15, 16, 17, 18 & 19 (45-Day Payment Ceiling & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Tax Disallowance of Unpaid Micro & Small Enterprise Purchases Beyond 45 Days)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title:
      "The Sale of Goods Act, 1930 — Sections 42, 44 & 55 (Deemed Acceptance Beyond Reasonable Time & Suit for Price of Delivered Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2393",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of E-Way Bills, Transporter Bilties, WhatsApp Booklists & Tally Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "MSME Samadhaan Portal — Ministry of Micro, Small and Medium Enterprises (Online MSEFC Reference Filing)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const FAQS = [
  {
    question:
      "How can a K-12 textbook publisher stop a school or campus bookshop from switching publishers in January without clearing last March's dues?",
    answer:
      "Do not wait until February or March when the new academic booklist is already printed. Launch a coordinated December–January Pre-Session Legal Notice Wave, addressed jointly to the School Trust Chairman, Principal, and Campus Bookshop Proprietor. Citing Order XXXVII CPC Summary Suit liability, MSMED Act s.15–18 (3x RBI compound interest), and Income Tax Section 43B(h) expense disallowance creates immediate pre-admission compliance pressure before the school commits to a rival publisher.",
  },
  {
    question:
      "Can a school or bookshop dump 40% unsold textbooks back on us in November and demand a credit note?",
    answer:
      "No, unless your written distributor agreement expressly permits unlimited returns in November. Under Section 15 of the MSMED Act, 2006, if a buyer fails to record a written objection within 15 days of delivery, the goods are deemed accepted. Under Section 42 of the Sale of Goods Act, 1930, retaining books for 7–8 months past the March–April admission window—especially after stamping, tearing, or syllabus changes—constitutes legal acceptance, entitling the publisher to sue for 100% of the invoice price under Section 55.",
  },
  {
    question:
      "Are educational book publishers, notebook manufacturers, and school uniform suppliers eligible for MSME Samadhaan?",
    answer:
      "Yes. Book publishing (NIC 5811), printing of textbooks/workbooks (NIC 1811), exercise notebook manufacturing (NIC 1709), and school uniform/bag manufacturing (NIC 1410 / 1512) are eligible for Udyam Registration as Micro or Small Enterprises. If your Udyam certificate was active prior to the supply contract or invoice date, you can file an online MSEFC reference under Section 18 of the MSMED Act against private school trusts, campus bookshops, and even government textbook corporations.",
  },
  {
    question:
      "What if the school book vendor gave us Post-Dated Cheques (PDCs) in October that bounced in December?",
    answer:
      "A dishonoured PDC triggers parallel criminal liability under Section 138 of the Negotiable Instruments Act, 1881. You must dispatch a Statutory Demand Notice within 30 days of receiving the Bank Cheque Return Memo, giving the drawer 15 days to clear the cheque amount. If unpaid, you can file a criminal complaint against the proprietor, partners, or school society office-bearers (Section 141) and move for 20% interim compensation under Section 143A.",
  },
  {
    question:
      "How does Order XXXVII CPC Summary Suit work for unpaid textbook, stationery, or lab-equipment supplies?",
    answer:
      "Order XXXVII of the Code of Civil Procedure, 1908 provides a fast-track recovery suit based on written contracts, signed purchase orders, acknowledged invoices, and dishonoured cheques. Unlike an ordinary civil suit, the defaulting school or bookshop has no automatic right to defend—they must apply for 'Leave to Defend' within 10 days of summons and demonstrate a genuine triable issue. Without leave, the court passes an immediate money decree.",
  },
  {
    question:
      "What if the defaulting buyer is a Government School, Kendriya Vidyalaya, or State Textbook Board?",
    answer:
      "Before instituting a civil suit against a Government School, District Education Officer (DEO), or State Education Department, Section 80 of the Code of Civil Procedure, 1908 mandates serving a formal 2-month (60-day) statutory notice detailing the cause of action, tender/GeM order, and relief claimed. In parallel, Udyam-registered suppliers can initiate MSME Samadhaan conciliation without waiting 60 days.",
  },
  {
    question:
      "What if the school trust claims the campus bookshop is an 'independent third-party vendor' and denies liability?",
    answer:
      "Examine who issued the annual booklist approval, who signed the campus gate-pass/delivery challan, and whether the school mandated parents to purchase exclusively from that campus counter. Where the school trust or society co-signed the supply understanding, received commission/rebate, or accepted delivery inside school premises, both the bookshop and the school management can be arrayed in the demand notice and commercial recovery action.",
  },
];

export default function SchoolPublisherRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Pre-Session K-12 Publisher & Educational Distributor Recovery SOP",
    description:
      "Step-by-step statutory recovery playbook for textbook publishers, uniform suppliers, and stationery distributors facing March–November school and bookshop payment defaults.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Booklist Approvals, Transporter Bilties & BSA s.63 Proof",
        text: "Compile Principal booklist emails, GST invoices, E-Way bills, transporter LRs (bilties), and signed school gate challans before initiating demand.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reject Unauthorized November Unsold Book Return Dumps",
        text: "Serve written rebuttal under Sale of Goods Act s.42 & s.55 and MSMED Act s.15 deemed acceptance if the buyer attempts late return of stamped or damaged stock.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Launch December–January Pre-Session Bulk Legal Notice Wave",
        text: "Dispatch Fact-verified statutory notices to School Trustees, Principals, and Bookshops before February–March new-session booklists are finalized.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Enforce 30-Day NI Act s.138 Window on Bounced Bookshop PDCs",
        text: "Issue mandatory 15-day cheque bounce demand notice within 30 days of the bank return memo to unlock criminal prosecution and 20% s.143A interim relief.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to Order XXXVII CPC, MSEFC Samadhaan, or Section 80 CPC",
        text: "File Summary Suits on acknowledged ledgers, MSEFC claims for 3x RBI compound interest, or 60-day Section 80 CPC notices against government education bodies.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
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
        name: "Schools, Universities & EdTech B2B",
        item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Textbook Publisher & Distributor Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>IND-17 K-12 Publishing &amp; School Supply Recovery</span>
            <span className="text-slate-500">·</span>
            <span>Order 37 CPC · NI s.138 · MSMED</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            K-12 publishers and school uniform/stationery distributors shipping 85% of annual stock between February and April can recover overdue November ledgers before schools switch vendors in January by deploying{" "}
            <strong className="text-white">Order XXXVII CPC Summary Suits</strong>,{" "}
            <strong className="text-white">NI Act s.138 PDC prosecution</strong>, and{" "}
            <strong className="text-white">MSMED Act s.15–18 (3x RBI interest)</strong> under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">85% Peak</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Annual K-12 Revenue Shipped in Feb–April
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Monthly Compound Interest (MSMED s.16)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Dec–Jan</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Critical Pre-Session Bulk Notice Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">20% Relief</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Interim Compensation on Bounced PDCs (s.143A)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Schools, Universities & EdTech B2B",
              href: "/industries/schools-universities-edtech-b2b-recovery",
            },
            {
              label: "Textbook Publisher & Distributor Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky TOC */}
          <PublisherTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="march-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Do March–April Textbook &amp; Uniform Supplies Stall Until November?
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s major K-12 publishing and school-supply belts—from Daryaganj, Noida, and Meerut to Jalandhar, Kolkata, and Jaipur—educational publishers, notebook manufacturers, uniform tailors, and science-lab distributors face a structural cashflow trap. Roughly <strong>85% of annual inventory is printed, bound, and dispatched inside a 45-day window between February and April</strong> for the new academic session.
                </p>
                <p>
                  Even though private schools and campus bookshops collect 100% cash or UPI from parents at the start of the academic term in March–April, suppliers are routinely strung along through summer vacations, Puja/Diwali holidays, and half-yearly exams. By November, three acute failure modes emerge:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>
                      <strong>The Pre-Session Publisher Switch:</strong> Schools and campus vendors stall last March&apos;s ₹15–₹40 Lakh balance till December, then quietly adopt a rival publisher&apos;s booklist in January–February without clearing the previous year&apos;s ledger.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>
                      <strong>The November Unsold Book Return Dump:</strong> Seven months after delivery, bookshops dispatch cartons of rain-damaged, school-stamped, or syllabus-expired books back to the publisher&apos;s godown demanding an arbitrary 35%–50% credit note.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>
                      <strong>Bounced PDCs &amp; &ldquo;Committee Approval&rdquo; Stalls:</strong> Post-dated cheques handed over to pacify Diwali collection visits bounce in November–December, while paper mills and printers press the publisher for payment.
                    </span>
                  </li>
                </ul>
                <p>
                  Polite relationship calls from regional sales representatives fail because school trusts know most publishers fear losing next year&apos;s booklist adoption. Converting informal follow-ups into a formal{" "}
                  <strong>December–January Pre-Session Bulk Legal Notice Wave</strong> flips that leverage before new-session admissions lock.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: Order 37 CPC, NI s.138 &amp; MSMED Act Remedies
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Educational publishers and institutional distributors are not restricted to slow 5-year ordinary civil suits. Depending on whether you hold an Udyam Registration, dishonoured PDCs, or a government school tender, five statutory tracks provide rapid recovery leverage:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Forum</th>
                      <th className="p-3.5 font-bold">Trigger &amp; Eligibility</th>
                      <th className="p-3.5 font-bold">Statutory Timeline</th>
                      <th className="p-3.5 font-bold">Creditor Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC (Summary Suit)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed POs, acknowledged invoices, balance confirmations, or bounced cheques.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10 days for defendant to enter appearance &amp; seek Leave to Defend.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        No automatic right to defend; immediate money decree if defense is moonshine.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 (s.138 &amp; s.143A)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Dishonoured PDCs from campus bookshop, distributor, or school trust.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day notice from bank return memo; 15-day statutory cure window.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Criminal summons against trustees/directors + 20% interim compensation (s.143A).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (s.15–19)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Micro/Small Udyam-registered publisher, printer, uniform or bag supplier.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Max 45-day credit ceiling; 15-day window for buyer quality objections.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        3x RBI bank rate compound interest + 75% mandatory pre-deposit for appeals (s.19).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Audited corporate/institutional buyers paying Micro/Small suppliers past 45 days.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        FY-end March 31 disallowance trigger on unpaid MSME supplier ledgers.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Disallows expense deduction, imposing ~25%–30% cash tax hit on buyer.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act s.42 &amp; s.55
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Late November unsold book dumps after 7–8 months of retention.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Reasonable time for rejection (15–30 days or contract return cut-off).
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Deemed acceptance vests title in buyer; publisher sues for 100% invoice price.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Section 80 CPC Notice
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Supplies to Government Schools, KVs, Sainik Schools, or State Boards.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandatory 60-day statutory notice prior to civil suit institution.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Triggers DEO/Treasury file audit clearance before court filing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Pre-Session December–January Escalation Flowchart
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Timing is everything in K-12 publishing. Follow this 5-stage operational decision tree between November and February to clear aged ledgers before schools finalize their next academic year&apos;s vendor list:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                <svg
                  width="840"
                  height="310"
                  viewBox="0 0 840 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage K-12 Publisher Pre-Session Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="16" y="30" width="145" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="88" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (NOV)</text>
                  <text x="88" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Lock BSA s.63 Proof</text>
                  <text x="88" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="10">Booklist + Bilty + E-Way</text>
                  <text x="88" y="107" textAnchor="middle" fill="#CBD5E1" fontSize="10">Signed Gate Challan</text>

                  <path d="M161 75 H189" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="189,70 198,75 189,80" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="198" y="30" width="150" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="273" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2 (NOV–DEC)</text>
                  <text x="273" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Rebut Unsold Dump</text>
                  <text x="273" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="10">Sale of Goods s.42 &amp; s.55</text>
                  <text x="273" y="107" textAnchor="middle" fill="#CBD5E1" fontSize="10">MSMED s.15 (15d Rule)</text>

                  <path d="M348 75 H376" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="376,70 385,75 376,80" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="385" y="30" width="165" height="90" rx="12" fill="#DC2626" stroke="#F87171" strokeWidth="1.5" />
                  <text x="467" y="55" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 3 (DEC–JAN WAVE)</text>
                  <text x="467" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Bulk Legal Notice</text>
                  <text x="467" y="93" textAnchor="middle" fill="#FEF2F2" fontSize="10">Trustees + Principal + Shop</text>
                  <text x="467" y="107" textAnchor="middle" fill="#FEF2F2" fontSize="10">Before New Booklist Lock</text>

                  <path d="M550 75 H578" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="578,70 587,75 578,80" fill="#DC2626" />

                  {/* Stage 4 Decision Fork */}
                  <rect x="587" y="30" width="235" height="90" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                  <text x="704" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 (15-DAY CURE)</text>
                  <text x="704" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Select Statutory Forum</text>
                  <text x="704" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="10">Based on PDC, Udyam or Govt</text>
                  <text x="704" y="107" textAnchor="middle" fill="#CBD5E1" fontSize="10">Entity Status</text>

                  {/* Vertical connectors to 3 tracks */}
                  <path d="M704 120 V155" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M145 155 H704" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M145 155 V180" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M420 155 V180" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M704 155 V180" stroke="#94A3B8" strokeWidth="2" />

                  {/* Track A */}
                  <rect x="30" y="180" width="230" height="100" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="145" y="205" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">IF PDC BOUNCED</text>
                  <text x="145" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">NI Act s.138 + s.143A</text>
                  <text x="145" y="245" textAnchor="middle" fill="#CBD5E1" fontSize="10">30d Notice from Return Memo</text>
                  <text x="145" y="262" textAnchor="middle" fill="#CBD5E1" fontSize="10">20% Interim Compensation</text>

                  {/* Track B */}
                  <rect x="305" y="180" width="230" height="100" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="420" y="205" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">IF UDYAM MICRO / SMALL</text>
                  <text x="420" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">MSEFC + Sec 43B(h)</text>
                  <text x="420" y="245" textAnchor="middle" fill="#CBD5E1" fontSize="10">3x RBI Compound Interest</text>
                  <text x="420" y="262" textAnchor="middle" fill="#CBD5E1" fontSize="10">75% Appeal Deposit Barrier</text>

                  {/* Track C */}
                  <rect x="580" y="180" width="230" height="100" rx="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
                  <text x="695" y="205" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="bold">WRITTEN PO / GOVT SCHOOL</text>
                  <text x="695" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Order 37 CPC / Sec 80</text>
                  <text x="695" y="245" textAnchor="middle" fill="#CBD5E1" fontSize="10">Summary Suit (Private School)</text>
                  <text x="695" y="262" textAnchor="middle" fill="#CBD5E1" fontSize="10">60-Day Notice (Govt / KV)</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Stage 1 (November)",
                    title: "Lock BSA s.63 Supply & Delivery Proof",
                    desc: "Compile booklist emails, GST invoices, E-Way bills, transporter bilties, and signed gate challans.",
                  },
                  {
                    step: "Stage 2 (Nov–Dec)",
                    title: "Reject Late Unsold Book Return Dumps",
                    desc: "Invoke Sale of Goods Act s.42/55 and MSMED s.15 (15-day objection rule) against stamped/damaged returns.",
                  },
                  {
                    step: "Stage 3 (Dec–Jan Wave)",
                    title: "Serve Pre-Session Bulk Legal Notices",
                    desc: "Address notices jointly to School Trustees, Principals, and Bookshops before new-session booklists lock.",
                  },
                  {
                    step: "Stage 4 (Forum Selection)",
                    title: "NI s.138, MSEFC Samadhaan, Order 37 or Sec 80 CPC",
                    desc: "Trigger 30-day cheque bounce prosecution, 3x RBI interest claims, Summary Suits, or 60-day Govt notices.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      {card.step}
                    </p>
                    <p className="text-sm font-bold mb-1">{card.title}</p>
                    <p className="text-xs text-slate-300">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="publisher-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 K-12 Textbook, Uniform &amp; Stationery Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the exact commercial bottleneck your publishing house, uniform factory, or stationery distribution firm is facing this season to view the statutory rebuttal and required evidence:
              </p>

              <PublisherScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Math: ₹25 Lakh March Textbook Supply Default
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Consider a Noida/Meerut Udyam-registered K-12 publisher that supplied <strong>₹25,00,000</strong> of textbooks and workbooks on <strong>15 March 2026</strong> against a signed school booklist order and 45-day written credit terms (due <strong>29 April 2026</strong>), remaining unpaid on <strong>18 November 2026</strong> (203 days overdue past the 45-day ceiling).
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                    <Calculator className="w-4 h-4" /> Statutory Ledger Illustration (MSMED s.16 + s.43B(h))
                  </span>
                  <span className="text-xs text-slate-400">
                    Assumed RBI Bank Rate: 6.75% p.a. (3x = 20.25% p.a. compounded monthly)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-[11px] text-slate-400 uppercase font-bold mb-1">
                      Unpaid Principal
                    </p>
                    <p className="text-xl font-black text-white">₹25,00,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      March 15 GST Invoices (HSN 4901)
                    </p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-[11px] text-slate-400 uppercase font-bold mb-1">
                      Statutory Delay
                    </p>
                    <p className="text-xl font-black text-amber-400">203 Days</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Apr 30 – Nov 18 (Past 45-Day Cap)
                    </p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-[11px] text-slate-400 uppercase font-bold mb-1">
                      MSMED s.16 Interest
                    </p>
                    <p className="text-xl font-black text-emerald-400">~₹2,96,800</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      20.25% p.a. Monthly Compounded
                    </p>
                  </div>
                  <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-700/60">
                    <p className="text-[11px] text-emerald-300 uppercase font-bold mb-1">
                      Total Claimable
                    </p>
                    <p className="text-xl font-black text-white">₹27,96,800+</p>
                    <p className="text-[11px] text-emerald-300 mt-1">
                      Plus Legal Costs &amp; s.19 75% Barrier
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Tax &amp; Appeal Impact:</strong> If the buyer is a corporate bookshop or audited entity, unpaid Micro/Small dues crossing March 31 trigger <strong>Income Tax Act s.43B(h)</strong> disallowance—adding ~₹7.5 Lakh in extra corporate tax liability on a ₹25 Lakh unpaid bill. You can compute your exact invoice-wise statutory interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 underline hover:text-red-300 font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Evidence & BSA s.63 Checklist */}
            <section
              id="bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Publisher Evidence &amp; BSA 2023 Section 63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records—including WhatsApp booklist confirmations, GST E-Way bills, and Tally/Busy ledgers—are admissible in Commercial Courts and Summary Suits when accompanied by a compliant electronic evidence certificate. Assemble these six records before dispatching your December–January notice wave:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Booklist Adoption & PO Trail",
                    desc: "Principal's signed booklist circular, email confirmation, or WhatsApp purchase order specifying class-wise titles, uniform sizes, or stationery quantities.",
                  },
                  {
                    title: "2. GST Tax Invoices & E-Way Bills",
                    desc: "GST invoices (HSN 4901 books / 4820 notebooks / 6203 uniforms) paired with NIC E-Way Bills proving physical movement of goods.",
                  },
                  {
                    title: "3. Transporter Bilty / Lorry Receipt (LR)",
                    desc: "Signed transporter LR/GR receipts and school gate-register acknowledgments stamped by the campus storekeeper or bookshop manager.",
                  },
                  {
                    title: "4. Balance Confirmation / Part-Payment Proof",
                    desc: "Tally/Busy ledger statements, NEFT/RTGS part-payment UTRs, or WhatsApp messages where the school promises payment 'after exam fees'.",
                  },
                  {
                    title: "5. Original PDCs & Bank Return Memos",
                    desc: "Physical dishonoured cheques and bank-stamped return memos (for NI Act s.138 complaints within the strict 30-day notice window).",
                  },
                  {
                    title: "6. Udyam Certificate & Return Policy",
                    desc: "Pre-supply Udyam Registration Certificate plus your printed invoice terms capping unsold returns (e.g., max 10% in mint condition by June 30).",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <FileCheck2 className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Unsold Book Return Dumps & Section 80 CPC */}
            <section
              id="unsold-returns-s80"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Defeating Unsold Book Return Dumps &amp; Govt School Delays
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Two specialized legal traps hit K-12 publishers hardest between November and January. First is the <strong>Consignment vs. Outright Sale</strong> dispute: bookshops often claim they took stock on &ldquo;sale-or-return&rdquo; terms even when GST tax invoices were raised as outright sales. Under <strong>Section 24 &amp; Section 42 of the Sale of Goods Act, 1930</strong>, even where goods are delivered on approval, if the buyer retains them beyond the fixed return cut-off (typically June/July) or stamps/uses them, property passes unconditionally to the buyer.
                </p>
                <p>
                  Second, if your supply was made to a <strong>Government School, Kendriya Vidyalaya, Navodaya Vidyalaya, or State Textbook Corporation</strong>, do not file a civil suit directly—it will be dismissed for non-compliance with{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 80 CPC Notice to Government
                  </Link>
                  . Instead, serve a formal 60-day Section 80 CPC statutory notice on the District Education Officer (DEO) and School Principal while simultaneously initiating an online MSME Samadhaan claim.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <strong>PDC Expiry Warning:</strong> Never let a school bookshop&apos;s bounced cheque sit on your desk while negotiating verbally. If a cheque bounces with &ldquo;Account Closed&rdquo; or &ldquo;Signature Mismatch&rdquo;, the 30-day statutory notice clock under NI Act s.138 runs strictly from the bank return memo date—see our{" "}
                    <Link
                      href="/cheque-bounce-account-closed-signature-mismatch"
                      className="font-bold underline text-amber-900"
                    >
                      Cheque Bounce Account Closed &amp; Signature Mismatch Guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <PublisherNoticeCTA />
            </section>

            {/* Section 9: IND-17 & Cross-Links */}
            <section
              id="ind17-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Related Education B2B &amp; Commercial Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Schools, Universities & EdTech B2B Recovery Hub",
                    href: "/industries/schools-universities-edtech-b2b-recovery",
                    desc: "Parent vertical hub covering private school fee arrears, university dues, smart-class ERPs, and textbook supply recovery.",
                  },
                  {
                    title: "Bulk Recovery Cases & Institutional CSV Desk",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    desc: "Launch a December–January bulk legal notice wave across 10 to 10,000+ defaulting schools and campus bookshops.",
                  },
                  {
                    title: "MSME Delayed Payment Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact 3x RBI compound interest on overdue March–April textbook, uniform, and stationery invoices.",
                  },
                  {
                    title: "Legal Notice Reply & Commercial Notice Format",
                    href: "/templates/legal-notice-reply-format",
                    desc: "Inspect fact-verified statutory notice drafting structures and commercial rebuttal templates.",
                  },
                  {
                    title: "Section 80 CPC Notice to Government Bodies",
                    href: "/law/section-80-cpc-notice-to-government",
                    desc: "Mandatory 60-day statutory notice procedure for unpaid Government School, KV, and State Textbook Board tenders.",
                  },
                  {
                    title: "Cheque Bounce: Account Closed & Signature Mismatch",
                    href: "/cheque-bounce-account-closed-signature-mismatch",
                    desc: "Enforce NI Act s.138 criminal prosecution and s.143A 20% interim relief on dishonoured bookshop PDCs.",
                  },
                ].map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-4 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-1 flex items-center justify-between gap-2">
                        <span>{link.title}</span>
                        <ArrowRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#DC2626]" />
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {link.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Textbook Publisher &amp; Distributor Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Sources */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Authorities &amp; Official Bare Act References
                </h2>
              </div>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-start gap-2 text-xs sm:text-sm text-slate-700 hover:text-[#DC2626] transition-colors"
                    >
                      <Landmark className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                      <span className="underline">{src.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
