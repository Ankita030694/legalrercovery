import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ReraTableOfContents from "./ReraTableOfContents";
import ReraProblemTabs from "./ReraProblemTabs";
import ReraNoticeCTA from "./ReraNoticeCTA";

// TODO(reviewer): Add verified reviewer bio box once src/data/reviewers.ts is created with real Bar Council registration numbers.

const PAGE_URL = `${SITE_URL}/rera-complaint-online-state-wise`;

export const metadata: Metadata = {
  title: {
    absolute: "RERA Complaint Online: State-Wise Process, Fees & Format",
  },
  description:
    "Step-by-step RERA complaint filing for major states: portals, fees, Form M/N formats, interest rules and typical timelines.",
  keywords: [
    "rera complaint online",
    "rera complaint format",
    "rera complaint against builder",
    "rera complaint status",
    "rera complaint fees",
    "rera complaint login",
    "form m vs form n rera",
    "maharera online complaint",
    "up rera complaint online",
    "harera complaint portal",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "RERA Complaint Online: State-Wise Process, Fees & Format",
    description:
      "Step-by-step RERA complaint filing for major states: portals, fees, Form M/N formats, interest rules and typical timelines.",
    url: PAGE_URL,
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-11-04T00:00:00.000Z",
    modifiedTime: "2026-11-04T00:00:00.000Z",
    authors: ["Anuj Anand Malik"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RERA Complaint Online: State-Wise Process, Fees & Format",
    description:
      "Step-by-step RERA complaint filing for major states: portals, fees, Form M/N formats, interest rules and typical timelines.",
  },
};

const TOC_ITEMS = [
  { id: "heading-state-matrix", label: "State-Wise RERA Portals, Fees & Interest" },
  { id: "heading-route-comparison", label: "5 Builder Recovery Routes Compared (G4)" },
  { id: "heading-personas", label: "Which Route Fits Your Case? (3 Personas)" },
  { id: "heading-form-m-vs-n", label: "Form M vs Form N & Online Complaint Format" },
  { id: "heading-landmark-rulings", label: "Supreme Court RERA Judgments" },
  { id: "heading-flowchart", label: "RERA Complaint to Sec 40 Execution Flow" },
  { id: "heading-playbook", label: "5-Step Online RERA Filing Playbook" },
  { id: "heading-problem-picker", label: "RERA Scenario Selector (Interactive)" },
  { id: "heading-worked-example", label: "Worked Case Study: ₹82.5L + ₹29.45L Interest" },
  { id: "heading-evidence-checklist", label: "6-Point BSA Section 63 Evidence Checklist" },
  { id: "heading-honest-scope", label: "Honest Scope: What We Do & Don't Do" },
  { id: "heading-faqs", label: "Frequently Asked Questions" },
  { id: "heading-sources", label: "Primary Statutes & Official Portals" },
];

const FAQS = [
  {
    question: "How do I file a RERA complaint online against a builder in my state?",
    answer:
      "To file a RERA complaint online, visit your state's official RERA portal (such as maharera.maharashtra.gov.in in Maharashtra, up-rera.in in Uttar Pradesh, haryanarera.gov.in in Haryana, or rera.karnataka.gov.in in Karnataka) and register an 'Allottee / Citizen' account under the RERA complaint login tab. Select Form M if you are claiming a full refund with statutory interest or monthly possession delay interest before the Regulatory Authority under Section 31 read with Section 18, or select Form N if you are claiming standalone compensation before the Adjudicating Officer under Section 71. Fill in the project RERA registration number, promoter details, payment schedule, and reliefs sought, upload single-PDF indexed annexures (Agreement for Sale, payment receipts, and pre-litigation legal notice), and pay the prescribed online filing fee (₹1,000 in most states; ₹5,000 in Maharashtra).",
  },
  {
    question: "What are the RERA complaint fees across different Indian states?",
    answer:
      "RERA complaint fees are prescribed by each state's Real Estate Rules and are paid online via UPI, NetBanking, or debit card during submission. In Uttar Pradesh (UP RERA), Haryana (HARERA Gurugram and Panchkula), Karnataka (K-RERA), Delhi (DLRERA), Gujarat (GujRERA), Telangana (TGRERA), Rajasthan (RajRERA), and West Bengal (WBRERA), the standard online filing fee before the Regulatory Authority (Form M) is ₹1,000 per complaint (HARERA adds ₹10 per annexure page). In Maharashtra (MahaRERA via the MahaCRITI portal), the online complaint filing fee is ₹5,000. In Tamil Nadu (TNRERA), filing Form M before the Authority costs ₹1,000 (plus ₹600 postal charges), while filing Form N before the Adjudicating Officer for compensation costs ₹5,000.",
  },
  {
    question: "What is the difference between Form M and Form N in an online RERA complaint format?",
    answer:
      "Following the Supreme Court's landmark ruling in M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP (2021 SCC OnLine SC 1044), jurisdiction under Section 31 of the RERA Act is strictly bifurcated. Form M is filed before the RERA Regulatory Authority when an allottee seeks an unconditional refund of the principal amount paid along with statutory SBI MCLR + 2% interest, monthly interest for every month of delayed possession under Section 18(1), revocation of illegal cancellation, or execution of a registered conveyance deed. Form N is filed before the Adjudicating Officer (a judicial officer appointed under Section 71) exclusively for quantifying standalone monetary compensation or damages for mental harassment, loss of rent, or structural defects under Sections 12, 14, 18, and 19.",
  },
  {
    question: "How much interest can a homebuyer claim in a RERA complaint against a builder?",
    answer:
      "Under Section 18(1) of RERA 2016 read with the respective State RERA Rules, a builder who fails to hand over possession with a valid Occupancy Certificate (OC) by the date specified in the Agreement for Sale must pay symmetric statutory interest. In Maharashtra, Haryana, Karnataka, Delhi, Tamil Nadu, Gujarat, and Telangana, the prescribed rate is the State Bank of India (SBI) Highest Marginal Cost of Funds based Lending Rate (MCLR) plus 2% simple interest per annum (with SBI 3-year MCLR around 8.85%–9.00%, this equals roughly 10.85%–11.00% p.a.). In Uttar Pradesh (UP RERA), the rule prescribes SBI MCLR plus 1% for allottees. As held by the Supreme Court in Experion Developers v. Sushma Ashok Shiroor (2022), refund interest is calculated from the exact date each respective instalment was paid by the buyer until the date of actual realisation.",
  },
  {
    question: "How do I check my RERA complaint status online after filing?",
    answer:
      "You can track your RERA complaint status either through the public 'Search Complaint / Cause List' tab on your state portal without logging in, or by signing in to your citizen dashboard via the RERA complaint login window. Enter your system-generated Complaint Reference Number (for example, NCR144/xxxx in UP RERA, GGM/xxxx in HARERA, or CRxxxxxxx in MahaCRITI) to view bench allocation, automated notice service on the promoter, the promoter's uploaded written reply, virtual hearing links, interim daily orders (Roznama), and the final signed judgment PDF.",
  },
  {
    question: "Can I file an online RERA complaint if the builder has not registered the project under RERA?",
    answer:
      "Yes. In Newtech Promoters (2021), the Supreme Court clarified that the RERA Authority has full jurisdiction over projects that were 'ongoing' without a Completion Certificate as on 1 May 2017, as well as any project exceeding 500 sq. metres or 8 apartments that is mandatorily registrable under Section 3 of RERA—even if the builder illegally failed to register it. Most state portals (including UP RERA, MahaRERA, HARERA, and K-RERA) provide a dedicated 'Complaint Against Unregistered Project' workflow where you can seek both a Section 18 refund and a Section 59 penalty (up to 10% of the estimated project cost) against the promoter.",
  },
  {
    question: "Builder possession delay kare ya refund na de toh RERA complaint online kaise file kare?",
    answer:
      "Agar builder ne Builder-Buyer Agreement (BBA) ki possession date nikal jane ke baad bhi Occupancy Certificate (OC) ke sath flat handover nahi kiya hai, toh sabse pehle builder ko Section 18(1) RERA ke tahat 15 din ka advocate legal notice bhejkar 100% principal refund aur SBI MCLR + 2% byaj (interest) ki maang karein. Agar builder paise wapas nahi karta, toh apne rajya ke official RERA portal (jaise up-rera.in, maharera.maharashtra.gov.in, ya haryanarera.gov.in) par Citizen Login banayein, Form M chunein, apne payment receipts, BBA aur legal notice ki PDF upload karein, aur ₹1,000 (Maharashtra mein ₹5,000) online fee jama karke complaint darj karein.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) — Sections 12, 13, 14, 18, 31, 40, 43(5) & 71 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Supreme Court of India: M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors., 2021 SCC OnLine SC 1044 (Unconditional Refund & Form M vs Form N Jurisdiction)",
    url: "https://main.sci.gov.in/supremecourt/2021/16750/16750_2021_34_1501_31312_Judgement_11-Nov-2021.pdf",
  },
  {
    title: "Supreme Court of India: Imperia Structures Ltd. v. Anil Patni & Anr., (2020) 10 SCC 783 (Concurrent RERA & Consumer Forum Jurisdiction)",
    url: "https://main.sci.gov.in/supremecourt/2019/9796/9796_2019_35_1501_24557_Judgement_02-Nov-2020.pdf",
  },
  {
    title: "Supreme Court of India: Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286 (Interest From Each Date of Deposit)",
    url: "https://main.sci.gov.in/supremecourt/2022/6027/6027_2022_3_1501_34824_Judgement_07-Apr-2022.pdf",
  },
  {
    title: "Maharashtra Real Estate Regulatory Authority (MahaRERA) & MahaCRITI Online Complaint Portal",
    url: "https://maharera.maharashtra.gov.in/",
  },
  {
    title: "Uttar Pradesh Real Estate Regulatory Authority (UP RERA) Online e-Courts & Complaint Portal",
    url: "https://www.up-rera.in/",
  },
  {
    title: "Haryana Real Estate Regulatory Authority (HARERA Gurugram & Panchkula) Online Complaint Portal",
    url: "https://haryanarera.gov.in/",
  },
  {
    title: "Karnataka Real Estate Regulatory Authority (K-RERA) Online Complaint Filing & Status Portal",
    url: "https://rera.karnataka.gov.in/",
  },
];

export default function ReraComplaintOnlineStateWisePage() {
  const noticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "How to File a RERA Complaint Online in Your State",
        description:
          "Step-by-step RERA complaint filing for major states: portals, fees, Form M/N formats, interest rules and typical timelines.",
        url: PAGE_URL,
        datePublished: "2026-11-04T00:00:00+05:30",
        dateModified: "2026-11-04T00:00:00+05:30",
        inLanguage: "en-IN",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/authors/anuj-anand-malik`,
          name: "Anuj Anand Malik",
          url: `${SITE_URL}/authors/anuj-anand-malik`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
        about: [
          {
            "@type": "Legislation",
            name: "Real Estate (Regulation and Development) Act, 2016",
            legislationIdentifier: "Act No. 16 of 2016",
          },
          {
            "@type": "Thing",
            name: "Section 18 and Section 31 Online RERA Complaint",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
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
            name: "RERA Complaint Online: State-Wise Guide",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#0F172A] text-white pt-6 pb-10 sm:py-14 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Archetype & Legal Provision Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider bg-[#DC2626] text-white shadow-xs">
                Section 18, 31 &amp; 40 RERA 2016 • Archetype G4 Matrix
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                Form M (Authority) vs Form N (AO) • State Portals Verified
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
              How to File a RERA Complaint Online in Your State
            </h1>

            {/* Author & Freshness Metadata Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
              <span>
                By{" "}
                <Link
                  href="/authors/anuj-anand-malik"
                  className="text-white font-semibold underline decoration-red-500/70 hover:text-red-300"
                >
                  Anuj Anand Malik
                </Link>{" "}
                (Advocate)
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                Last Updated:{" "}
                <time dateTime="2026-11-04" className="text-white font-semibold">
                  November 4, 2026
                </time>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold">
                ✓ Checked Against SC Newtech Promoters &amp; 10 State RERA Portals
              </span>
            </div>

            {/* Quick Answer Box (40-60 words directly below H1) */}
            <div
              aria-label="Statutory Quick Answer"
              className="mt-6 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border-l-4 border-[#DC2626] border-t border-r border-b border-slate-800 shadow-xl max-w-4xl"
            >
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1.5">
                Direct Statutory Answer — Section 18 &amp; Section 31 RERA Act, 2016
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                Homebuyers can file a <strong>RERA complaint online</strong> under{" "}
                <strong>Section 31 of the RERA Act, 2016</strong> on their state RERA portal by creating an Allottee Login, paying a <strong>₹1,000 to ₹5,000 fee</strong>, and submitting <strong>Form M</strong> (before the Authority for Section 18 refund or monthly delay interest at <strong>SBI Highest MCLR + 2%</strong>) or <strong>Form N</strong> (before the Adjudicating Officer for compensation).
              </p>
            </div>

            {/* 4 Key Statutory Stat Cards */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Online Filing Fee
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-white mt-0.5">
                  ₹1,000 – ₹5,000
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  ₹1,000 most states; ₹5,000 MahaRERA
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Statutory Interest
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-emerald-400 mt-0.5">
                  MCLR + 2%
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  ~10.85%–11% p.a. simple interest
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Statutory Disposal Target
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-sky-400 mt-0.5">
                  60 Days
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Section 29(4) / 71(2) (4–9 mo actual)
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Pre-RERA Legal Notice
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-amber-400 mt-0.5">
                  ₹{noticePrice.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Advocate drafted + Speed Post
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Property & Builder Disputes", href: "/services/property-and-builder-disputes" },
                { label: "RERA Complaint Online (State-Wise)", href: "/rera-complaint-online-state-wise" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sticky Left Sidebar TOC */}
            <div className="lg:col-span-4 xl:col-span-3 w-full">
              <ReraTableOfContents items={TOC_ITEMS} />
            </div>

            {/* Right Main Column */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-12 min-w-0">
              {/* Section 1: State-Wise RERA Complaint Online Matrix */}
              <section
                id="heading-state-matrix"
                aria-labelledby="heading-state-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    State-by-State RERA Portal &amp; Fee Reference (2026)
                  </span>
                  <h2
                    id="heading-state-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    State-Wise RERA Complaint Online Matrix: Portals, Filing Fees, Forms &amp; Interest Rules
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Although the <strong>Real Estate (Regulation and Development) Act, 2016</strong> is a central statute enacted by Parliament, complaint filing procedures, portal login interfaces, statutory forms, and interest formulas are governed by each state&apos;s notified Real Estate Rules. Before initiating your <strong>rera complaint login</strong>, verify the exact portal URL, filing fee, and form designation for the state where the real estate project is physically located:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[760px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      State-Wise RERA Online Complaint Portals, Filing Fees, Forms and Interest Rates in India
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold border-b border-slate-800">
                      <tr>
                        <th scope="col" className="py-3.5 px-3.5">State / Authority</th>
                        <th scope="col" className="py-3.5 px-3.5">Official Portal (Login &amp; Status)</th>
                        <th scope="col" className="py-3.5 px-3.5">Online Filing Fee</th>
                        <th scope="col" className="py-3.5 px-3.5">Statutory Form (Auth / AO)</th>
                        <th scope="col" className="py-3.5 px-3.5">Prescribed Interest Rate</th>
                        <th scope="col" className="py-3.5 px-3.5">Conciliation / Key Feature</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Maharashtra (MahaRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          maharera.maharashtra.gov.in (MahaCRITI)
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">₹5,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Online Complaint Form (Sec 31 Authority / AO)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 18)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          MahaRERA Conciliation Forum &amp; virtual hearing benches
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Uttar Pradesh (UP RERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          up-rera.in (e-Courts Portal)
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form M (Authority) / Form N (Adjudicating Officer)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI MCLR + 1% (UP Rules)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Lucknow &amp; Greater Noida benches; online RC tracking
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Haryana (HARERA Gurugram &amp; Panchkula)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          haryanarera.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">
                          ₹1,000 + ₹10/page annexure
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Form CRA-M (Authority) / Form CRA-N (AO)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 15)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Separate Gurugram &amp; Panchkula jurisdiction logins
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Karnataka (K-RERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.karnataka.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000 (Form N) / ₹1,000 (Form O)</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form N (Authority Rule 29) / Form O (AO Rule 30)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 18)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Note: Karnataka uses Form N for Authority &amp; Form O for AO
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          NCT of Delhi (DLRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.delhi.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form M (Authority Rule 33) / Form N (AO Rule 34)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 15)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Covers DDA / private projects within NCT of Delhi
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Tamil Nadu (TNRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.tn.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">
                          ₹1,000 (Form M) / ₹5,000 (Form N)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Form M (Authority Rule 37) / Form N (AO Rule 38)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 18)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Requires ₹600 additional postal service fee in Form M
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Gujarat (GujRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          gujrera.gujarat.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form A (Authority) / Form B (Adjudicating Officer)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 16)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          100% paperless Form A/B workflow &amp; Conciliation cell
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Telangana (TGRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.telangana.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form M (Authority) / Form N (Adjudicating Officer)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 15)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Active enforcement against pre-launch / unregistered plots
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          Rajasthan (RajRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.rajasthan.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form N (Authority Rule 35) / Form O (AO Rule 36)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Highest MCLR + 2% (Rule 17)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Online Citizen SSO ID login + Conciliation Forum
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          West Bengal (WBRERA)
                        </th>
                        <td className="py-3 px-3.5 font-mono text-xs text-blue-700">
                          rera.wb.gov.in
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">₹1,000</td>
                        <td className="py-3 px-3.5 text-xs">
                          Form M (Authority Rule 36) / Form N (AO Rule 37)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          SBI Prime Lending Rate / MCLR + 2%
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Replaces legacy WBHIRA (struck down by SC in 2021)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Want to compute the exact SBI MCLR + 2% refund or delay interest owed by your developer before filing? Use our{" "}
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="text-blue-700 underline font-semibold"
                  >
                    RERA Refund &amp; Delay Interest Calculator
                  </Link>{" "}
                  or review our dedicated guide on serving a{" "}
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="text-blue-700 underline font-semibold"
                  >
                    builder booking cancellation refund legal notice
                  </Link>.
                </p>
              </section>

              {/* Section 2: Archetype G4 Hero Comparison Matrix of 5 Builder Recovery Routes */}
              <section
                id="heading-route-comparison"
                aria-labelledby="heading-route-comparison-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Archetype G4 Legal Route Comparison Matrix
                  </span>
                  <h2
                    id="heading-route-comparison-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    RERA Complaint vs Consumer Court vs NCLT: 5 Builder Recovery Routes Compared
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  In <em>Imperia Structures Ltd. v. Anil Patni</em> (2020) 10 SCC 783, a three-judge bench of the Supreme Court settled that homebuyers are &quot;consumers&quot; and enjoy concurrent statutory remedies across RERA, Consumer Commissions, and the Insolvency and Bankruptcy Code (IBC). However, under <strong>Section 79 of RERA</strong>, civil courts are barred from entertaining suits that the RERA Authority is empowered to decide, and under the proviso to <strong>Section 71(1)</strong>, you cannot pursue the same compensation claim simultaneously in both Consumer Court and before the RERA Adjudicating Officer. Compare the 5 legal routes below:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[740px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Comparison of Advocate Notice, State RERA Authority Form M, RERA Adjudicating Officer Form N, Consumer Court e-Jagriti and NCLT IBC
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-3.5">Legal Recovery Route</th>
                        <th scope="col" className="py-3.5 px-3.5">Statutory Provision</th>
                        <th scope="col" className="py-3.5 px-3.5">Filing Fee / Cost</th>
                        <th scope="col" className="py-3.5 px-3.5">Typical Timeline</th>
                        <th scope="col" className="py-3.5 px-3.5">Primary Relief Granted</th>
                        <th scope="col" className="py-3.5 px-3.5">Enforcement Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          1. Pre-RERA Advocate Legal Notice
                        </th>
                        <td className="py-3 px-3.5 text-xs">
                          Sections 12, 13 &amp; 18(1) RERA + CPA 2019
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">
                          ₹{noticePrice.toLocaleString("en-IN")} (LegalRecovery)
                        </td>
                        <td className="py-3 px-3.5 font-bold text-emerald-700">
                          15 Days Cure Window
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Direct pre-litigation refund, cancellation reversal, or mandatory annexation proof for Form M
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Triggers formal cause of action &amp; Conciliation settlement
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80 bg-red-50/30">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          2. State RERA Authority (Online Form M)
                        </th>
                        <td className="py-3 px-3.5 text-xs">
                          Section 31 r/w Section 18(1) RERA 2016
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">
                          ₹1,000 (₹5,000 in MH)
                        </td>
                        <td className="py-3 px-3.5 font-bold text-blue-700">
                          60 Days statutory (4–9 months actual)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          100% Principal Refund + SBI MCLR+2% Interest OR Monthly Delay Interest till OC possession
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Section 40(1) Recovery Certificate (Arrears of Land Revenue via Collector)
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          3. RERA Adjudicating Officer (Online Form N)
                        </th>
                        <td className="py-3 px-3.5 text-xs">
                          Section 31 r/w Section 71 &amp; 72 RERA 2016
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">
                          ₹1,000 – ₹5,000
                        </td>
                        <td className="py-3 px-3.5 font-bold text-blue-700">
                          6–10 Months
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Standalone quantified compensation for mental agony, loss of rent, or Section 14(3) defect damage
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Section 40(1) Recovery Certificate &amp; Section 40(2) Civil Decree attachment
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          4. Consumer Commission (e-Jagriti Online)
                        </th>
                        <td className="py-3 px-3.5 text-xs">
                          Sections 2(11), 2(47) &amp; 35 CPA 2019
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">
                          ₹0 up to ₹5L; ₹200–₹7,500 above
                        </td>
                        <td className="py-3 px-3.5 font-bold text-amber-700">
                          9–18 Months
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Combined order in ONE forum: Full Refund + 9%–12% Interest + Mental Harassment Damages + Costs
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Section 71 CPA (CPC Order XXI Execution) &amp; Section 72 Arrest Warrant (up to 3 yrs jail)
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-bold text-slate-900">
                          5. NCLT Insolvency Petition (IBC)
                        </th>
                        <td className="py-3 px-3.5 text-xs">
                          Section 7(1) Proviso IBC 2016
                        </td>
                        <td className="py-3 px-3.5 font-bold text-slate-900">
                          ₹25,000 Court Fee + Group Counsel
                        </td>
                        <td className="py-3 px-3.5 font-bold text-amber-700">
                          12–24 Months (CIRP)
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Replaces builder board with Resolution Professional (RP); Form CA claim filing by financial creditors
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Requires minimum 100 allottees OR 10% of total allottees in the same project
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Archetype G4 "Which One Is Right for You" — 3 Persona Cards */}
              <section
                id="heading-personas"
                aria-labelledby="heading-personas-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Archetype G4 Decision Guide
                  </span>
                  <h2
                    id="heading-personas-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Which Builder Recovery Route Is Right for You? (3 Homebuyer Personas)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Persona 1 */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Persona 1 • Pre-Agreement / Token Buyer
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        Booked a Flat, Paid 5%–10% Advance, Want to Cancel Before Signing BBA
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If you paid ₹1 lakh to ₹8 lakh as a booking token or allotment advance, never signed a registered Agreement for Sale under Section 13(1), or discovered false brochure promises under Section 12, do not rush into multi-year litigation first. Start by serving a formal{" "}
                        <Link
                          href="/templates/flat-booking-cancellation-letter"
                          className="text-blue-700 underline font-semibold"
                        >
                          flat booking cancellation letter
                        </Link>{" "}
                        followed by an advocate legal notice under Section 12 and Section 13 RERA, and escalate to the <strong>State RERA Conciliation Forum</strong> or online <strong>Form M</strong> if unpaid in 15 days.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs font-bold text-slate-900">
                      Recommended Route: Advocate Notice → RERA Conciliation / Form M
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#DC2626] shadow-sm flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                        Persona 2 • Delayed Possession Buyer (Most Common)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        BBA Possession Date Passed Without OC — Want Full Refund or Monthly Delay Interest
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the possession date (including any valid contractual grace period) in your registered Builder-Buyer Agreement has expired and the promoter lacks an Occupancy Certificate, <strong>Online Form M before the State RERA Regulatory Authority</strong> is your fastest, lowest-cost weapon. Under <em>Newtech Promoters (2021)</em>, your right to a 100% refund with SBI MCLR + 2% interest (if withdrawing) or monthly interest for every month of delay (if staying in the project) is unconditional.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs font-bold text-[#DC2626]">
                      Recommended Route: 15-Day Sec 18 Notice → Online RERA Form M
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                        Persona 3 • Commercial / Assured Return or Composite Claim
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        Want Refund + Harassment Damages in One Forum, or Facing Assured-Return Default
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If you want both principal refund with interest AND mental agony compensation in a single proceeding without splitting Form M and Form N, filing on the <strong>e-Jagriti Consumer Commission portal</strong> gives you Section 72 criminal arrest teeth against defaulting directors. Conversely, if a commercial builder defaulted on monthly assured returns, read our{" "}
                        <Link
                          href="/assured-return-builder-default-legal-notice"
                          className="text-blue-700 underline font-semibold"
                        >
                          assured return builder default legal notice guide
                        </Link>.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs font-bold text-slate-900">
                      Recommended Route: Advocate Notice → e-Jagriti / RERA Form M + Form N
                    </div>
                  </div>
                </div>
              </section>

              {/* Inline CTA */}
              <ReraNoticeCTA variant="inline" />

              {/* Section 4: Form M vs Form N Jurisdiction Split & Online Complaint Format */}
              <section
                id="heading-form-m-vs-n"
                aria-labelledby="heading-form-m-vs-n-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Section 31 vs Section 71 Jurisdiction &amp; Pleading Template
                  </span>
                  <h2
                    id="heading-form-m-vs-n-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Form M vs Form N: The Supreme Court Jurisdiction Split &amp; RERA Complaint Format
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The single biggest mistake homebuyers make when filing a <strong>rera complaint online</strong> is selecting the wrong statutory form on the portal—causing their complaint to be returned for want of jurisdiction after months of waiting. In paragraph 86 of <em>M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP &amp; Ors.</em> (2021 SCC OnLine SC 1044), the Supreme Court drew a bright statutory line between the <strong>Real Estate Regulatory Authority (Form M)</strong> and the <strong>Adjudicating Officer (Form N)</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border-l-4 border-l-emerald-600 border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                        Form M • Regulatory Authority (Sec 31)
                      </span>
                      <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                        90% of Homebuyer Cases
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      When to Select Form M (or Form N in Karnataka/Rajasthan)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>
                        <strong>Complete Withdrawal &amp; Refund (Sec 18(1)):</strong> Return of 100% principal paid + prescribed SBI MCLR + 2% interest from each date of payment.
                      </li>
                      <li>
                        <strong>Delayed Possession Monthly Interest (Proviso to Sec 18(1)):</strong> You wish to stay in the project and claim interest for every month of delay until actual handover with OC.
                      </li>
                      <li>
                        <strong>Cancellation Reversal &amp; Conveyance Deed (Sec 11(4) &amp; 17):</strong> Setting aside an arbitrary builder cancellation letter or directing execution of registered sale deed.
                      </li>
                      <li>
                        <strong>Statutory Violations (Sec 3, 12, 13, 14):</strong> Unregistered project complaints, pre-BBA &gt;10% collection, or 5-year structural defect rectification directions.
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border-l-4 border-l-amber-600 border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                        Form N • Adjudicating Officer (Sec 71)
                      </span>
                      <span className="text-[11px] font-mono bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                        Compensation Only
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      When to Select Form N (or Form O in Karnataka/Rajasthan)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>
                        <strong>Mental Harassment &amp; Agony Damages:</strong> Quantifying standalone compensation under Section 71 read with Section 72 factors (disproportionate gain by promoter, loss caused to allottee).
                      </li>
                      <li>
                        <strong>Loss of Rental Income / Alternate Rent Paid:</strong> Claiming reimbursement of actual house rent paid due to delayed flat handover, supported by registered rent agreements.
                      </li>
                      <li>
                        <strong>Unrectified Defect Monetary Damages (Sec 14(3)):</strong> Claiming repair cost compensation after the builder ignores a 30-day structural defect notice.
                      </li>
                      <li>
                        <strong>Title Defect Compensation (Sec 18(2)):</strong> Unlimited limitation compensation if the promoter&apos;s land title turns out to be defective.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Standard Form M / Form N Online RERA Complaint Format Block */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Standard RERA Complaint Format (Form M / Form N Pleading Structure)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Section 31 RERA 2016 • Ready for Online Portal Text Fields &amp; PDF Upload
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every state RERA portal asks you to fill structured online fields and upload a signed detailed complaint statement. Use this exact 6-part statutory format so the bench scrutiny officer clears your filing without raising defects:
                  </p>
                  <pre className="text-[11px] sm:text-xs font-mono text-slate-200 bg-slate-950/90 p-4 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`BEFORE THE REAL ESTATE REGULATORY AUTHORITY, [STATE NAME] AT [BENCH CITY]
COMPLAINT NO. __________ OF 2026 (UNDER SECTION 31 READ WITH SECTION 18 OF RERA ACT, 2016 — FORM M)

1. PARTICULARS OF THE COMPLAINANT(S) (ALLOTTEE):
   • Name(s): [Full Name as per Allotment Letter / BBA]
   • Address for Service, Mobile & Registered Email ID: [Full Details]

2. PARTICULARS OF THE RESPONDENT (PROMOTER / BUILDER):
   • Company Name & CIN: [e.g., XYZ Infratech Pvt. Ltd.]
   • Registered Office Address & Directors' Details: [As per MCA / RERA Portal]
   • Project Name & State RERA Registration Number: [e.g., UPRERAPRJxxxxxx / P518000xxxxx]

3. JURISDICTION OF THE AUTHORITY:
   • The project is situated at [Plot/Sector, District, State], which lies within the territorial jurisdiction of this Hon'ble Authority under Section 31 of the RERA Act, 2016.

4. FACTS OF THE CASE (CHRONOLOGICAL SUMMARY):
   • Date of Booking & Unit Allotted: Tower [__], Unit No. [__], RERA Carpet Area [___ sq. ft.].
   • Total Consideration Agreed: ₹[________] | Total Principal Paid by Allottee: ₹[________] (Annexure A: Payment Ledger & Bank UTRs).
   • Date of Registered Agreement for Sale (BBA): [DD/MM/YYYY] (Annexure B).
   • Contractual Date of Possession as per Clause [__] of BBA: [DD/MM/YYYY].
   • Builder Default: Despite a lapse of [__] months past the committed possession date, the Respondent has failed to obtain a statutory Occupancy Certificate (OC) and hand over lawful possession.
   • Pre-Litigation Legal Notice: Complainant served a formal Section 18 demand notice dated [DD/MM/YYYY] via Speed Post (Tracking No. [________], Annexure C), which the Respondent failed to comply with.

5. RELIEF(S) SOUGHT (SELECT OPTION A OR OPTION B):
   • [OPTION A — FOR REFUND]: Direct the Respondent under Section 18(1)(a) to refund the entire principal amount of ₹[________] along with prescribed interest at SBI Highest MCLR + 2% (currently [__]% p.a.) calculated from each respective date of payment till actual realization; OR
   • [OPTION B — FOR DELAY INTEREST + POSSESSION]: Direct the Respondent under the proviso to Section 18(1) to pay monthly delayed-possession interest at SBI Highest MCLR + 2% on ₹[________] from [Possession Due Date] until actual handover of possession with a valid Occupancy Certificate.
   • Direct the Respondent to pay ₹25,000 towards cost of legal notice and online complaint proceedings.

6. DECLARATION & VERIFICATION:
   • I/We declare that the subject matter of this complaint is not pending before any Consumer Commission or other Tribunal in respect of the identical relief sought herein.`}
                  </pre>
                </div>
              </section>

              {/* Section 5: Landmark Supreme Court Judgments */}
              <section
                id="heading-landmark-rulings"
                aria-labelledby="heading-landmark-rulings-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Binding Judicial Precedents
                  </span>
                  <h2
                    id="heading-landmark-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Landmark Supreme Court Judgments Governing Online RERA Complaints &amp; Builder Refunds
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  When a builder&apos;s legal team files a reply to your online RERA complaint claiming &quot;force majeure&quot;, &quot;NGT construction bans&quot;, or &quot;10% earnest money forfeiture&quot;, citing these four binding Supreme Court judgments in your rejoinder and oral arguments dismantles their defence:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#DC2626] shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        Supreme Court of India • 3-Judge Bench (2021)
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        2021 SCC OnLine SC 1044
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP &amp; Ors.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio &amp; Homebuyer Impact:</strong> The Supreme Court held that an allottee&apos;s right under Section 18(1) to demand a full refund with prescribed interest when the promoter fails to give possession by the agreement date is <strong>unconditional and unqualified</strong>—it does not depend on establishing fault or unforeseen difficulties of the builder. The Court also confirmed that the Regulatory Authority (Form M) has exclusive power to adjudicate refund + interest, upheld the power of RERA to issue Section 40(1) Recovery Certificates as arrears of land revenue, and mandated that a builder cannot appeal a RERA refund order without first depositing at least 30% (or up to 100%) of the decreed amount under Section 43(5).
                    </p>
                  </article>

                  <article className="p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#DC2626] shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        Supreme Court of India • 3-Judge Bench (2020)
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        (2020) 10 SCC 783
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      Imperia Structures Ltd. v. Anil Patni &amp; Anr.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio &amp; Homebuyer Impact:</strong> Developers frequently argue that because the State RERA Authority extended the project&apos;s registration validity by 1–2 years, the homebuyer&apos;s refund claim is premature. The Supreme Court rejected this defence outright, ruling that the period for handing over possession is governed strictly by the date stipulated in the individual <strong>Builder-Buyer Agreement (BBA)</strong>, not the project registration expiry date on the RERA website. The Court also affirmed concurrent remedies under the Consumer Protection Act and RERA.
                    </p>
                  </article>

                  <article className="p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#DC2626] shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        Supreme Court of India • 3-Judge Bench (2022)
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        (2022) 15 SCC 286
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio &amp; Homebuyer Impact:</strong> Settling the date from which refund interest must be computed, the Supreme Court held that when an allottee exercises the right to exit a delayed project, statutory interest is payable <strong>from the date of deposit of each respective instalment</strong> until the date of actual realisation—not merely from the promised date of possession.
                    </p>
                  </article>

                  <article className="p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#DC2626] shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        Supreme Court of India • 2-Judge Bench (2019)
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        (2019) 5 SCC 725
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio &amp; Homebuyer Impact:</strong> Clauses in a Builder-Buyer Agreement that charge the homebuyer 18% compound interest for payment delay while offering the buyer a paltry ₹5 to ₹10 per sq. ft. per month (~1.5% p.a.) for builder possession delay, or forfeiting 10%–20% of the Basic Sale Price on cancellation, are <strong>ex-facie one-sided, unfair, and void</strong>. A homebuyer cannot be compelled to take delivery of a flat years after the contractual possession date.
                    </p>
                  </article>
                </div>
              </section>

              {/* Section 6: Hand-Authored SVG Flowchart */}
              <section
                id="heading-flowchart"
                aria-labelledby="heading-flowchart-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Visual Statutory Architecture
                  </span>
                  <h2
                    id="heading-flowchart-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Statutory Resolution Flow: From Builder Possession Default to Section 40 Recovery Certificate
                  </h2>
                </div>

                <figure className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 920 260"
                      role="img"
                      aria-labelledby="rera-svg-title rera-svg-desc"
                      className="w-full min-w-[680px] h-auto"
                    >
                      <title id="rera-svg-title">
                        5-Stage Online RERA Complaint Filing and Section 40 Execution Flowchart
                      </title>
                      <desc id="rera-svg-desc">
                        Diagram showing Stage 1 Pre-RERA Legal Notice under Section 18, Stage 2 Citizen Portal Login and Form M or Form N Filing, Stage 3 Conciliation Forum or Bench Hearing, Stage 4 Final Section 18 Refund or Interest Order, and Stage 5 Section 40 Recovery Certificate Attachment via District Collector.
                      </desc>

                      <defs>
                        <marker
                          id="rera-arrow"
                          viewBox="0 0 10 10"
                          refX="8"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                        </marker>
                      </defs>

                      {/* Background Track */}
                      <rect x="10" y="15" width="900" height="230" rx="16" fill="#F8FAFC" stroke="#E2E8F0" />

                      {/* Box 1 */}
                      <rect x="25" y="45" width="155" height="165" rx="12" fill="#111827" />
                      <text x="40" y="72" fill="#F87171" fontSize="10" fontWeight="bold">
                        STAGE 01 • DAY 1–15
                      </text>
                      <text x="40" y="94" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                        Builder Default &amp;
                      </text>
                      <text x="40" y="112" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                        Sec 18 Legal Notice
                      </text>
                      <text x="40" y="136" fill="#CBD5E1" fontSize="10">
                        • BBA date expired, no OC
                      </text>
                      <text x="40" y="154" fill="#CBD5E1" fontSize="10">
                        • Serve 15-day Advocate
                      </text>
                      <text x="40" y="169" fill="#CBD5E1" fontSize="10">
                        Demand Notice (₹999)
                      </text>
                      <text x="40" y="190" fill="#34D399" fontSize="10" fontWeight="bold">
                        Establishes Cause of Action
                      </text>

                      {/* Arrow 1->2 */}
                      <line x1="180" y1="127" x2="202" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#rera-arrow)" />

                      {/* Box 2 */}
                      <rect x="206" y="45" width="160" height="165" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="220" y="72" fill="#DC2626" fontSize="10" fontWeight="bold">
                        STAGE 02 • PORTAL FILING
                      </text>
                      <text x="220" y="94" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Citizen Login &amp;
                      </text>
                      <text x="220" y="112" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Form M / Form N
                      </text>
                      <text x="220" y="136" fill="#475569" fontSize="10">
                        • Form M: Refund/Interest
                      </text>
                      <text x="220" y="154" fill="#475569" fontSize="10">
                        • Form N: AO Compensation
                      </text>
                      <text x="220" y="172" fill="#475569" fontSize="10">
                        • Upload BBA + UTRs + Notice
                      </text>
                      <text x="220" y="190" fill="#047857" fontSize="10" fontWeight="bold">
                        Fee: ₹1,000 (₹5,000 MH)
                      </text>

                      {/* Arrow 2->3 */}
                      <line x1="366" y1="127" x2="388" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#rera-arrow)" />

                      {/* Box 3 */}
                      <rect x="392" y="45" width="160" height="165" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="406" y="72" fill="#DC2626" fontSize="10" fontWeight="bold">
                        STAGE 03 • BENCH / CONCIL
                      </text>
                      <text x="406" y="94" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Auto-Summons &amp;
                      </text>
                      <text x="406" y="112" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Virtual Hearing
                      </text>
                      <text x="406" y="136" fill="#475569" fontSize="10">
                        • Portal serves e-Notice
                      </text>
                      <text x="406" y="154" fill="#475569" fontSize="10">
                        • Optional Conciliation Bench
                      </text>
                      <text x="406" y="172" fill="#475569" fontSize="10">
                        • Builder Reply &amp; Rejoinder
                      </text>
                      <text x="406" y="190" fill="#1D4ED8" fontSize="10" fontWeight="bold">
                        Track Status via Docket ID
                      </text>

                      {/* Arrow 3->4 */}
                      <line x1="552" y1="127" x2="574" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#rera-arrow)" />

                      {/* Box 4 */}
                      <rect x="578" y="45" width="155" height="165" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="592" y="72" fill="#DC2626" fontSize="10" fontWeight="bold">
                        STAGE 04 • SEC 18 ORDER
                      </text>
                      <text x="592" y="94" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Final Refund / Delay
                      </text>
                      <text x="592" y="112" fill="#0F172A" fontSize="13" fontWeight="bold">
                        Interest Decree
                      </text>
                      <text x="592" y="136" fill="#475569" fontSize="10">
                        • 100% Principal + SBI
                      </text>
                      <text x="592" y="152" fill="#475569" fontSize="10">
                        MCLR+2% from each payment
                      </text>
                      <text x="592" y="170" fill="#475569" fontSize="10">
                        • 45–60 Days to comply
                      </text>
                      <text x="592" y="190" fill="#B45309" fontSize="10" fontWeight="bold">
                        Sec 43(5): 30–100% Pre-Deposit
                      </text>

                      {/* Arrow 4->5 */}
                      <line x1="733" y1="127" x2="755" y2="127" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#rera-arrow)" />

                      {/* Box 5 */}
                      <rect x="759" y="45" width="138" height="165" rx="12" fill="#064E3B" />
                      <text x="771" y="72" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                        STAGE 05 • SEC 40 RC
                      </text>
                      <text x="771" y="94" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                        Collector Recovery
                      </text>
                      <text x="771" y="112" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                        Certificate (RC)
                      </text>
                      <text x="771" y="136" fill="#D1FAE5" fontSize="10">
                        • Online Execution Filing
                      </text>
                      <text x="771" y="154" fill="#D1FAE5" fontSize="10">
                        • Bank Escrow Attachment
                      </text>
                      <text x="771" y="172" fill="#D1FAE5" fontSize="10">
                        • Unsold Flat Auction
                      </text>
                      <text x="771" y="190" fill="#34D399" fontSize="10" fontWeight="bold">
                        Arrears of Land Revenue
                      </text>
                    </svg>
                  </div>
                  <figcaption className="text-xs text-slate-500 mt-3 text-center">
                    Figure 1: End-to-end statutory trajectory of an online RERA complaint from pre-litigation Section 18 demand notice through Form M adjudication and Section 40(1) District Collector Recovery Certificate execution.
                  </figcaption>
                </figure>
              </section>

              {/* Section 7: 5-Step Online RERA Complaint Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Step-by-Step Portal Walkthrough
                  </span>
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    How to File a RERA Complaint Online: 5-Step State Portal Playbook (Login to Execution)
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Whether you are filing on <strong>MahaCRITI (Maharashtra)</strong>, <strong>UP RERA e-Courts</strong>, <strong>HARERA (Gurugram/Panchkula)</strong>, or <strong>K-RERA (Karnataka)</strong>, the online filing architecture follows five mandatory procedural stages:
                </p>

                <ol className="space-y-4">
                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Verify Project RERA Registration &amp; Serve a 15-Day Pre-Litigation Legal Notice
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Before opening the complaint portal, search the project name on your state RERA website under &quot;Registered Projects&quot; and note down the exact <strong>RERA Project Registration Number</strong>, the promoter&apos;s designated 70% escrow bank account details, and whether an Occupancy Certificate (OC) has been uploaded. Next, serve a formal{" "}
                        <Link
                          href="/legal-notice-to-builder-for-delayed-possession-refund"
                          className="text-blue-700 underline font-semibold"
                        >
                          legal notice to the builder for delayed possession refund
                        </Link>{" "}
                        invoking Section 18(1) RERA (or Section 12/13 for pre-agreement cancellation). Uploading this legal notice and its India Post Speed Post delivery receipt as an annexure proves to the RERA bench that you formally exercised your option to withdraw or claim delay interest prior to litigation.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Create Your Citizen / Allottee Login &amp; Choose Form M or Form N
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Navigate to the official state portal&apos;s <strong>RERA complaint login</strong> page and register as a &quot;Citizen / Complainant / Allottee&quot; using your PAN, Aadhaar-linked mobile number, and email ID. Once inside your dashboard, select <strong>Form M (Complaint to Regulatory Authority under Section 31)</strong> if you want a full principal refund with SBI MCLR + 2% interest, monthly possession delay interest, or revocation of an unfair cancellation letter. Select <strong>Form N (Application to Adjudicating Officer under Section 71)</strong> only if you are filing for standalone compensation/damages. (Remember: in Karnataka and Rajasthan, the Authority form is numbered Form N and the AO form is Form O.)
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enter Allotment Particulars, Compute SBI MCLR + 2% Interest &amp; Upload Indexed PDFs
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        When you enter the RERA Project Registration ID, the portal auto-populates the promoter&apos;s corporate name and registered address. Enter your apartment/plot number, date of booking, date of registered Agreement for Sale (BBA), committed possession date, total consideration, and total amount paid. Upload a clearly bookmarked PDF bundle containing: (1) Allotment Letter &amp; Registered BBA; (2) Date-wise Payment Ledger with Bank UTRs and Builder Receipts; (3) Exact SBI MCLR + 2% interest calculation sheet from each date of deposit; (4) Pre-litigation Advocate Legal Notice and Speed Post POD; and (5) Form M/N Declaration Affidavit.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Pay Online RERA Complaint Fee &amp; Monitor RERA Complaint Status
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Pay the statutory filing fee (₹1,000 in UP, Haryana, Karnataka, Delhi, Gujarat, Telangana; ₹5,000 in Maharashtra) via the integrated treasury gateway. Upon payment, the portal generates a permanent <strong>Complaint Reference / Registration Number</strong> and automatically dispatches an electronic show-cause summons to the builder&apos;s registered email and promoter dashboard, directing the builder to file a written reply within 15 to 30 days. Check your <strong>rera complaint status</strong> weekly to download the builder&apos;s reply and next hearing date.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Attend Virtual / Conciliation Hearing &amp; File Online Section 40 Execution for Unpaid Orders
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        If the builder agrees to Conciliation (available on MahaRERA, UP RERA, HARERA, and GujRERA), a settlement consent decree is recorded within 2–3 sittings. Otherwise, the Authority Bench hears arguments (typically 3 to 5 hearings via video conferencing or physical bench) and passes a final Section 18 order directing refund or delay interest within 45–60 days. If the builder fails to pay within the compliance window, click <strong>&quot;File Execution / Non-Compliance&quot;</strong> inside your portal login to obtain a <strong>Section 40(1) Recovery Certificate (RC)</strong> directed to the District Collector for bank attachment and property auction.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Interactive Problem / Scenario Tabs */}
              <section
                id="heading-problem-picker"
                aria-labelledby="heading-problem-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Interactive Diagnostic Tool
                  </span>
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Common RERA Complaint Bottlenecks &amp; Tactical Remedies
                  </h2>
                </div>

                <ReraProblemTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Pune Homebuyer Recovers ₹82,50,000 Principal + ₹29,45,250 Interest via MahaCRITI Online Filing
                </h2>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative MahaRERA Online Complaint Resolution
                    </span>
                    <span className="text-xs text-slate-400">
                      Baner-Balewadi, Pune (MahaRERA — 3BHK Residential Apartment)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Booking &amp; Payment Timeline:</strong> Siddharth Deshmukh booked a 1,320 sq. ft. RERA carpet area 3BHK apartment in Baner-Balewadi, Pune for a total agreement value of ₹95,00,000. Between April 2021 and September 2022, he paid <strong>₹82,50,000</strong> (including stamp duty and GST) across 5 construction-linked tranches via RTGS and an SBI home loan. Under Clause 7.1 of his registered Agreement for Sale (under Section 13 of RERA), possession with a statutory Occupancy Certificate (OC) was committed by <strong>31 December 2023</strong>.
                    </p>
                    <p>
                      <strong>The Builder&apos;s Default &amp; Excuse:</strong> By September 2026—more than 32 months past the committed possession date—finishing work had stalled and no OC was obtained. When Siddharth demanded a refund, the developer refused, pointing to a unilateral RERA registration extension and threatening to forfeit 10% of the agreement value (₹9,50,000) under a standard cancellation clause.
                    </p>
                    <p>
                      <strong>The Statutory Action &amp; Online MahaCRITI Filing:</strong> Siddharth engaged LegalRecovery.in to serve a formal 15-day statutory demand notice under Section 18(1)(a) of RERA 2016, recording his unconditional withdrawal from the project and citing <em>Imperia Structures (2020)</em> and <em>Newtech Promoters (2021)</em>. When the promoter failed to refund within 15 days, Siddharth logged into <code>maharera.maharashtra.gov.in</code> (MahaCRITI portal), filed an online Section 31 / Section 18 complaint paying the <strong>₹5,000 MahaRERA filing fee</strong>, and uploaded his indexed payment ledger and pre-litigation notice.
                    </p>
                    <p>
                      <strong>Interest Computation (SBI Highest MCLR + 2% per Rule 18 MahaRERA Rules ≈ 10.95% p.a.):</strong> Calculated from the exact date of each of the 5 payment tranches up to realisation (weighted average duration: 3.26 years on ₹82,50,000), the simple statutory interest came to <strong>₹29,45,250</strong>.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">
                        The Outcome:
                      </strong>
                      During the MahaRERA Conciliation &amp; Adjudication proceedings, confronted with an indisputable date-of-deposit ledger and zero OC defence, the Bench directed a full Section 18(1) refund of ₹82,50,000 principal plus ₹29,45,250 statutory interest (total <strong>₹1,11,95,250</strong>) within 60 days, resulting in complete closure of the SBI home loan and bank remittance of Siddharth&apos;s entire equity plus interest.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: 6-Point BSA Section 63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Essential Documents for Online RERA Complaint Filing (BSA Section 63)
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records, email trails, portal screenshots, and digital bank statements are admissible in quasi-judicial RERA and Consumer proceedings when accompanied by a Section 63 certificate. Scan and index these 6 documents in clear PDF format (under 10 MB per file) before logging into your state RERA portal:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Allotment Letter &amp; Registered Agreement for Sale (BBA):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Complete scan highlighting the unit number, RERA carpet area, total sale consideration, and the exact possession date clause.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Chronological Payment Receipts &amp; Bank UTR Statement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        All builder payment receipts matched with bank account statements / housing loan disbursement statements showing UTR/cheque numbers and dates (required for <em>Experion</em> date-of-deposit interest).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        RERA Portal Project Extract &amp; QPR Screenshots:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        PDF printout from the state RERA portal showing the project registration number, promoter directors, escrow bank details, and absence of an Occupancy Certificate (OC).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Pre-Litigation Advocate Legal Notice &amp; Speed Post POD:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Signed copy of the Section 18 / Section 13 legal notice served on the promoter along with India Post tracking delivery proof and registered email bounce/delivery headers.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Site Construction Photos, Brochure &amp; Demand Letters:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Geo-tagged site photographs proving incomplete construction or structural defects, original marketing brochure (for Section 12 claims), and builder demand letters.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        BSA Section 63 Certificate &amp; Non-Pendency Declaration:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Self-declaration affirming that electronic printouts are authentic under Section 63 BSA 2023 and that no identical claim is pending before a Consumer Commission.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Honest Scope Block */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do for Your RERA Dispute
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> What We Do (Within Our Scope)
                    </h3>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>
                        Audit your Allotment Letter, Builder-Buyer Agreement (BBA), and date-wise payment ledger against Section 12, 13, 14, and 18 of the RERA Act, 2016.
                      </li>
                      <li>
                        Compute your exact statutory refund and simple interest claim at your state&apos;s prescribed SBI Highest MCLR + 2% (or +1%) rate from each date of payment.
                      </li>
                      <li>
                        Draft and dispatch an advocate-signed statutory legal demand notice via Registered Speed Post and email to the builder&apos;s registered office and directors—ready to attach as your pre-litigation annexure in online Form M or Form N.
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-rose-950 flex items-center gap-2">
                      <span className="text-rose-600">✕</span> What We Do Not Do (Boundaries)
                    </h3>
                    <ul className="text-xs sm:text-sm text-rose-900 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>
                        We are not a government RERA authority or state portal helpdesk; your ₹1,000–₹5,000 statutory filing fee is paid directly on your state&apos;s official <code>.gov.in</code> / <code>up-rera.in</code> portal.
                      </li>
                      <li>
                        If a corporate builder has already been admitted into Corporate Insolvency Resolution Process (CIRP) under Section 7 or 9 of the IBC before the NCLT and a Section 14 moratorium is active, new RERA execution warrants are stayed—you must file a financial creditor claim in <strong>Form CA</strong> before the Interim Resolution Professional (IRP).
                      </li>
                      <li>
                        Our ₹{noticePrice.toLocaleString("en-IN")} fee covers the pre-litigation advocate legal notice and dispatch; full bench appearance across multiple RERA hearings is engaged separately if required.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Filing a RERA Complaint Online, Fees, Format &amp; Status
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the RERA Act 2016, Supreme Court Precedents &amp; State RERA Rules
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

              {/* Section 13: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Real Estate Authorities, Primary Statutes &amp; Official State RERA References
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
                  Statutory verification status: All state RERA portal URLs, Form M/N rules, filing fees, and Supreme Court citations verified against India Code and active state RERA notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice to Your Builder Before RERA Filing
                </h2>
                <ReraNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster (Row LR-095 Internal Links + Cluster Siblings) */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder, RERA &amp; Real-Estate Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Builder Booking Cancellation Refund Legal Notice →
                  </Link>
                  <Link
                    href="/templates/flat-booking-cancellation-letter"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Letter Format →
                  </Link>
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RERA Refund &amp; Delay Interest Calculator →
                  </Link>
                  <Link
                    href="/assured-return-builder-default-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Assured Return Builder Default Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Delayed Possession Refund Notice to Builder →
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Token Money &amp; Bayana Refund Rules →
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
