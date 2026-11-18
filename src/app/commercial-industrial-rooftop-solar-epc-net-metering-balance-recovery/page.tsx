import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SolarEpcTableOfContents from "./SolarEpcTableOfContents";
import SolarEpcScenarioTabs from "./SolarEpcScenarioTabs";
import SolarEpcCTA from "./SolarEpcCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Installed the C&I Solar Plant, Yet the Factory Withholds Your Final 15–20% Citing DISCOM Net-Metering Delays or Dust-Induced Generation Drops?";

// Tightened from 64ch PDF draft to 51ch for Screaming Frog 30-60ch compliance
const META_TITLE = "C&I Solar EPC Final Balance & Net-Metering Recovery";

// Tightened from 162ch PDF draft to 150ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Factory buyers stall final Solar EPC milestones citing DISCOM net-meter stockouts or dusty panels. Enforce Deemed Commissioning & IEC 61724 PR proof.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(META_TITLE),
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
      "The Indian Contract Act, 1872 (Sections 51–54, 70, 73 & 74 — Reciprocal Promises, Prevention of Performance & Deemed Commissioning)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Credit Cap & 3x RBI Bank Rate Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Corporate Tax Disallowance on Unpaid Micro & Small Supplier Invoices Beyond 45 Days)",
    url: "https://www.incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "The Electricity Act, 2003 & CEA (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations",
    url: "https://www.indiacode.nic.in/handle/123456789/2052",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic SCADA, Inverter & WMS Pyranometer Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Ministry of New and Renewable Energy (MNRE) — National Portal & State DISCOM Net-Metering Guidelines",
    url: "https://mnre.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can a factory withhold our final 15–20% C&I Solar EPC payment for 6–10 months because the State DISCOM is out of bi-directional meters?",
    a: "No, not indefinitely—especially if the plant is already synchronized in zero-export mode on the factory's captive load. Under Sections 53 and 54 of the Indian Contract Act, 1872, once the EPC completes mechanical erection, DC/AC commissioning, CEIG inspection, and net-metering application filing, a third-party DISCOM meter stockout or buyer-side sanctioned-load hurdle triggers Deemed Commissioning. You can demand release of the balance against a minor 2–5% retention or meter-tag bank guarantee rather than freezing 20% of the contract value.",
  },
  {
    q: "How do Solar EPCs rebut a factory claiming 'low kWh generation' or 'low Performance Ratio (PR)' when the factory skipped module washing?",
    a: "Raw kWh generation is not a valid legal metric for Performance Guarantee (PG) testing. Under IEC 61724-1 and NREL solar performance standards, PR must be normalized for Plane-of-Array (POA) solar insolation, ambient/module temperature, grid outages, and clean-module baseline conditions. Present WMS pyranometer data alongside timestamped photographs and O&M logs showing buyer-scope soiling neglect to prove the buyer prevented test conditions under Contract Act Section 53.",
  },
  {
    q: "Does a turnkey Solar EPC contract qualify for MSMED Act Section 15–18 and Section 43B(h) interest leverage?",
    a: "Pure indivisible 'works contracts' (design, supply, civil works, and erection bundled under one composite lump-sum PO) frequently face jurisdictional challenges before MSEFC. However, if your C&I solar engagement is structured—or billed—as a Divisible Contract with a separate Supply Purchase Order for PV modules/inverters and a separate BOS/Installation Service Order, the Supply tranche qualifies as 'goods supplied' under the MSMED Act, unlocking 3x RBI Bank Rate compound interest and Income Tax Section 43B(h) pressure.",
  },
  {
    q: "What if CEIG (Chief Electrical Inspector) or DISCOM approval is delayed because the factory has pending utility arrears or non-compliant HT switchgear?",
    a: "Under Sections 51–54 of the Indian Contract Act, 1872 governing reciprocal promises, the buyer is obligated to provide an arrears-free, technically compliant existing electrical network and valid sanctioned load. Document the DISCOM/CEIG deficiency memo in writing immediately, declare Deemed Commissioning effective on your readiness date, and put the buyer on notice for commercial interest and extended site-overhead costs.",
  },
  {
    q: "Can we legally disable or turn off the zero-export solar plant remotely until the factory clears the final 20% EPC milestone?",
    a: "Only if your signed EPC contract or O&M agreement contains an express suspension-of-commissioning / title-retention clause prior to final handover. Unilateral remote shutdown without contractual authorization risks counterclaims for business interruption. Instead, preserve full SCADA/CT-clamp evidence of captive consumption first, serve a 15-day Deemed Commissioning & Cure Notice, and seek interim relief under Arbitration Act Section 9 or Commercial Court summary remedies if needed.",
  },
  {
    q: "What electronic evidence is required under BSA 2023 Section 63 to prove zero-export captive generation and PR compliance in court?",
    a: "You should export raw CSV/PDF logs directly from the inverter OEM cloud portal (Huawei FusionSolar, Sungrow iSolarCloud, SMA Sunny Portal, etc.) and Weather Monitoring Station (WMS) pyranometer, showing daily POA irradiance, AC kWh yield, CT-clamp zero-export throttling events, and grid outage timestamps, accompanied by a signed Section 63 BSA 2023 electronic record certificate.",
  },
  {
    q: "Should a Solar EPC file in Commercial Court, invoke Arbitration, or approach MSEFC for a ₹36 Lakh final balance?",
    a: "If your contract has an arbitration clause, serve a Section 21 Arbitration Notice (or file Section 9 if plant/hardware tampering is imminent). If there is no arbitration clause and the claim is ₹3 Lakh or above, Commercial Courts (with mandatory Section 12A pre-institution mediation unless urgent interim relief is sought) provide fast summary judgment under Order XIII-A CPC. For divisible Udyam-registered module/inverter Supply POs, MSEFC Section 18 offers 3x RBI compound interest leverage.",
  },
];

export default function CommercialIndustrialSolarEpcRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
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
    },
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How C&I Solar EPCs Recover Withheld 15–20% Final Milestones Despite Net-Metering or PR Disputes",
    description:
      "5-step creditor recovery playbook using Deemed Commissioning, IEC 61724 soiling-adjusted PR proof, BSA 2023 s.63 SCADA logs, and divisible Supply PO MSME leverage.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Capture Zero-Export SCADA & CEIG Readiness Proof",
        text: "Export BSA 2023 s.63-certified inverter kWh logs, CT-clamp zero-export throttling data, CEIG safety approval, and DISCOM net-meter application receipts.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Normalize PR Under IEC 61724 & Document Buyer Soiling Neglect",
        text: "Compute insolation- and temperature-corrected Performance Ratio from WMS pyranometer data and log missed buyer-scope module washing cycles.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Segregate Divisible Module/Inverter Supply POs for MSME Leverage",
        text: "Separate hardware supply invoices (backed by e-Way Bills and SRVs) from BOS installation to invoke MSMED Act s.15–18 and Income Tax s.43B(h).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 15-Day Deemed Commissioning & Final Balance Demand Notice",
        text: "Invoke Contract Act s.53–54 and s.70 against captive free-riding via Email, WhatsApp, and Speed Post RPAD.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to MSEFC, Commercial Court Order XIII-A, or Arbitration",
        text: "File MSEFC reference on supply tranches or Commercial Court / Arbitration claims for the full withheld milestone plus 18%–3x RBI interest.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
        name: "Solar, RESCO & EV Power Recovery Hub",
        item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "C&I Solar EPC Net-Metering Balance Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-19 Playbook</span>
            <span>&bull;</span>
            <span>C&amp;I CapEx Solar EPC &amp; Turnkey Balance Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              IND-19 Solar &amp; Power Recovery Framework
            </Link>
            , a factory running zero-export solar on captive load cannot freeze your final 15–20%
            EPC milestone over DISCOM net-meter stockouts or unwashed panels. Enforce Contract Act
            s.53/54 Deemed Commissioning, IEC 61724 PR normalization, and divisible Supply PO MSME
            interest.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-black text-red-400">15%–20%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Typical Final EPC Milestone Frozen Post-Erection
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">IEC 61724</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Insolation &amp; Soiling-Normalized PR Proof
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-black text-amber-400">s.53 &amp; s.54</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Contract Act Deemed Commissioning Trigger
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-black text-slate-100">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                MSMED Compound Interest on Divisible Supply PO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Solar, RESCO & EV Power Recovery",
              href: "/industries/solar-renewable-ev-power-recovery",
            },
            {
              label: "C&I Solar EPC Net-Metering Balance Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <SolarEpcTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-zero-export-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Factories Run Zero-Export Solar While Freezing Final EPC Pay
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s industrial corridors—from Bhiwadi, Manesar, and Chakan to
                  Sanand, Peenya, and Tiruppur—C&amp;I CapEx Solar EPC promoters and ground-mount
                  captive contractors face a recurring working-capital trap. You supply Tier-1
                  modules and string inverters, complete structural mounting, clear Chief Electrical
                  Inspector to Government (CEIG) safety checks, and synchronize the plant. Yet the
                  factory owner withholds the final <strong>15%–20% Commissioning and Performance
                  Ratio (PR) milestone</strong> for six to twelve months.
                </p>
                <p>
                  The buyer&apos;s favorite pretext is a State DISCOM bi-directional net-meter
                  stockout or a sudden allegation of &ldquo;low kWh generation&rdquo; caused by
                  unwashed, dust-laden modules. What makes this commercial abuse acute is{" "}
                  <strong>simultaneous captive enjoyment</strong>: the factory configures the
                  inverter&apos;s Current Transformer (CT) clamp in <em>zero-export mode</em>,
                  consumes 100% of the daytime solar power against its ₹7.50–₹9.50/kWh grid tariff,
                  and pockets lakhs in monthly electricity savings while refusing to pay your final
                  invoice.
                </p>
                <p>
                  In Indian commercial law, a buyer cannot accept full beneficial use of a
                  commissioned asset while weaponizing third-party utility bottlenecks or its own
                  cleaning neglect to defer payment indefinitely. As detailed in our{" "}
                  <Link
                    href="/industries/solar-renewable-ev-power-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Solar EPC, RESCO &amp; EV Power Recovery Hub
                  </Link>
                  , pairing technical telemetry under{" "}
                  <strong>IEC 61724-1</strong> with <strong>Contract Act Sections 53–54</strong>{" "}
                  and <strong>divisible Supply PO MSME leverage</strong> strips away both excuses.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Step Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Deemed Commissioning &amp; Net-Metering Release Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before serving a demand notice or invoking arbitration, lock down the technical
                record so the factory cannot manufacture a post-hoc &ldquo;defective plant&rdquo;
                defense. Follow this five-stage creditor escalation sequence:
              </p>

              {/* Desktop SVG Decision Pipeline */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 920 210"
                  width={920}
                  height={210}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Step C&I Solar EPC Deemed Commissioning and Final Balance Recovery Pipeline"
                >
                  <rect x="0" y="0" width="920" height="210" rx="16" fill="#0F172A" />
                  {/* Step 1 */}
                  <rect x="20" y="30" width="156" height="150" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="44" cy="54" r="12" fill="#DC2626" />
                  <text x="44" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="64" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">SCADA &amp; CEIG</text>
                  <text x="32" y="84" fill="#CBD5E1" fontSize="10">Export zero-export</text>
                  <text x="32" y="100" fill="#CBD5E1" fontSize="10">CT-clamp kWh logs,</text>
                  <text x="32" y="116" fill="#CBD5E1" fontSize="10">CEIG charging NOC,</text>
                  <text x="32" y="132" fill="#CBD5E1" fontSize="10">DISCOM meter receipt.</text>
                  <text x="32" y="160" fill="#34D399" fontSize="10" fontWeight="bold">BSA 2023 s.63 Cert</text>

                  <path d="M178 105 L196 105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="196,100 204,105 196,110" fill="#94A3B8" />

                  {/* Step 2 */}
                  <rect x="206" y="30" width="156" height="150" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="230" cy="54" r="12" fill="#DC2626" />
                  <text x="230" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="250" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">IEC 61724 PR</text>
                  <text x="218" y="84" fill="#CBD5E1" fontSize="10">Normalize PR for</text>
                  <text x="218" y="100" fill="#CBD5E1" fontSize="10">POA irradiance &amp; temp;</text>
                  <text x="218" y="116" fill="#CBD5E1" fontSize="10">document buyer&apos;s</text>
                  <text x="218" y="132" fill="#CBD5E1" fontSize="10">module wash neglect.</text>
                  <text x="218" y="160" fill="#34D399" fontSize="10" fontWeight="bold">Rebuts &quot;Low kWh&quot;</text>

                  <path d="M364 105 L382 105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="382,100 390,105 382,110" fill="#94A3B8" />

                  {/* Step 3 */}
                  <rect x="392" y="30" width="156" height="150" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="416" cy="54" r="12" fill="#DC2626" />
                  <text x="416" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="436" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Split Supply PO</text>
                  <text x="404" y="84" fill="#CBD5E1" fontSize="10">Segregate PV module</text>
                  <text x="404" y="100" fill="#CBD5E1" fontSize="10">&amp; inverter Supply PO</text>
                  <text x="404" y="116" fill="#CBD5E1" fontSize="10">from BOS erection</text>
                  <text x="404" y="132" fill="#CBD5E1" fontSize="10">using LR + SRV proof.</text>
                  <text x="404" y="160" fill="#FBBF24" fontSize="10" fontWeight="bold">MSME s.43B(h) Lever</text>

                  <path d="M550 105 L568 105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="568,100 576,105 568,110" fill="#94A3B8" />

                  {/* Step 4 */}
                  <rect x="578" y="30" width="156" height="150" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="602" cy="54" r="12" fill="#DC2626" />
                  <text x="602" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="622" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">15-Day Notice</text>
                  <text x="590" y="84" fill="#CBD5E1" fontSize="10">Serve Deemed COD</text>
                  <text x="590" y="100" fill="#CBD5E1" fontSize="10">&amp; Contract Act s.53</text>
                  <text x="590" y="116" fill="#CBD5E1" fontSize="10">demand via Email,</text>
                  <text x="590" y="132" fill="#CBD5E1" fontSize="10">WhatsApp &amp; RPAD.</text>
                  <text x="590" y="160" fill="#F87171" fontSize="10" fontWeight="bold">Stops Captive Free-Ride</text>

                  <path d="M736 105 L754 105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="754,100 762,105 754,110" fill="#94A3B8" />

                  {/* Step 5 */}
                  <rect x="764" y="30" width="136" height="150" rx="12" fill="#1E293B" stroke="#DC2626" />
                  <circle cx="786" cy="54" r="12" fill="#DC2626" />
                  <text x="786" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="804" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Forum Filing</text>
                  <text x="776" y="84" fill="#CBD5E1" fontSize="10">MSEFC (Supply PO),</text>
                  <text x="776" y="100" fill="#CBD5E1" fontSize="10">Commercial Court</text>
                  <text x="776" y="116" fill="#CBD5E1" fontSize="10">Order XIII-A, or</text>
                  <text x="776" y="132" fill="#CBD5E1" fontSize="10">Arbitration s.21.</text>
                  <text x="776" y="160" fill="#34D399" fontSize="10" fontWeight="bold">Principal + Interest</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    step: "1",
                    title: "SCADA & CEIG Readiness",
                    desc: "Export zero-export CT-clamp kWh logs, CEIG charging approval, and DISCOM net-meter receipt with BSA s.63 certification.",
                  },
                  {
                    step: "2",
                    title: "IEC 61724 PR Normalization",
                    desc: "Normalize PR for POA irradiance and temperature; log missed buyer-scope module washing cycles.",
                  },
                  {
                    step: "3",
                    title: "Divisible Supply PO Split",
                    desc: "Segregate module/inverter Supply POs (e-Way Bills + SRVs) from BOS erection to trigger MSMED s.15 & s.43B(h).",
                  },
                  {
                    step: "4",
                    title: "15-Day Deemed COD Notice",
                    desc: "Serve Contract Act s.53/54 Deemed Commissioning demand via Email, WhatsApp, and Speed Post RPAD.",
                  },
                  {
                    step: "5",
                    title: "MSEFC / Commercial Court / Arb",
                    desc: "Escalate Supply tranche to MSEFC and BOS/balance to Commercial Court Order XIII-A or Arbitration.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Contract Act, IEC 61724 &amp; Divisible MSME
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every holdback excuse used by an industrial solar buyer maps to a concrete statutory
                rebuttal. Use this matrix when instructing counsel or drafting your final milestone
                demand:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispute Trigger</th>
                      <th className="p-3.5 font-bold">Governing Statute / Standard</th>
                      <th className="p-3.5 font-bold">Creditor Legal Leverage</th>
                      <th className="p-3.5 font-bold">Target Recovery Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        DISCOM Bi-Directional Meter Stockout (Zero-Export Running)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act, 1872 ss. 53, 54 &amp; 70
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Deemed Commissioning + unjust enrichment bar against free captive kWh draw
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">15–30 Days (Notice)</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Dust / Soiling Drop Blamed as &ldquo;Low PR&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IEC 61724-1 / NREL PR + Contract Act s. 53
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Insolation- &amp; temperature-normalized PR proof; buyer washing neglect bars PG penalty
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">7–15 Days Re-Test</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Factory Arrears / HT Switchgear Blocking CEIG
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act ss. 51–54 (Reciprocal Promises)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer-side utility default shifts synchronization risk &amp; triggers 18% interest
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">30–45 Days</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Unpaid PV Module &amp; Inverter Supply Tranche
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act ss. 15–18 + Income Tax Act s. 43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI Bank Rate compound interest + corporate tax disallowance on buyer&apos;s P&amp;L
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">45–90 Days (MSEFC)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Disputed SCADA / Generation Authenticity
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bharatiya Sakshya Adhiniyam (BSA), 2023 s. 63
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Admissibility of inverter OEM cloud CSVs &amp; WMS pyranometer telemetry
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">Trial / Summary Proof</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 C&amp;I Rooftop &amp; Captive Solar Holdback Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact commercial bottleneck below to view the statutory counter,
                mandatory technical records, and immediate creditor action plan:
              </p>

              <SolarEpcScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & PR Ledger */}
            <section
              id="heading-pr-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked ₹36 Lakh Final Milestone &amp; Soiling-Adjusted PR Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical <strong>400 kWp C&amp;I Rooftop Solar EPC</strong> installation
                at ₹45,000/kWp (<strong>₹1.80 Crore total contract value</strong>) where the
                contract was split into a ₹1.20 Crore Module/Inverter Supply PO and a ₹60 Lakh
                BOS/I&amp;C Service Order. The buyer runs zero-export solar for 8 months (240 days)
                while withholding the final 20% (₹36,00,000) citing DISCOM net-meter delay and an
                unwashed PR dip from 78% guaranteed to 67% raw yield:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                    Financial Recovery &amp; Interest Ledger (240 Days Overdue)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Withheld Supply PO Balance (20% of ₹1.20 Cr)</span>
                      <span className="font-bold">₹24,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Withheld BOS / I&amp;C Milestone (20% of ₹60 L)</span>
                      <span className="font-bold">₹12,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">
                        MSMED s.16 Interest on ₹24L Supply (3x RBI @ ~19.5% p.a., 8 mos)
                      </span>
                      <span className="font-bold text-emerald-400">+ ₹3,12,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">
                        Contractual / Commercial Interest on ₹12L BOS (@ 18% p.a., 8 mos)
                      </span>
                      <span className="font-bold text-emerald-400">+ ₹1,44,000</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm sm:text-base">
                      <span className="font-black text-white">Total Recoverable Claim</span>
                      <span className="font-black text-emerald-400">₹40,56,000</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Note: Buyer simultaneously saved ~₹30.72 Lakh in grid power over 240 days
                    (400 kWp &times; 4.0 kWh/kWp/day &times; 240d &times; ₹8/kWh). Use our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-300 underline hover:text-white"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>{" "}
                    for exact compounding.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                    IEC 61724 Soiling-Adjusted PR Proof
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div className="bg-white rounded-xl p-3 border border-emerald-200">
                      <span className="font-bold block text-slate-900">
                        Unwashed Raw PR (Buyer Claim): 67.2%
                      </span>
                      <span className="text-xs text-slate-600">
                        Measured after 95 days without buyer-scope module washing in an industrial
                        PM10 zone + 12% zero-export weekend curtailment.
                      </span>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-emerald-200">
                      <span className="font-bold block text-slate-900">
                        Normalized Clean-Module PR (IEC 61724-1): 80.4%
                      </span>
                      <span className="text-xs text-slate-600">
                        After excluding zero-export CT throttling hours, grid outages, and post-wash
                        7-day WMS pyranometer POA normalization—exceeding the 78% PG threshold.
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                    Result: Zero Liquidated Damages (LD) deductible; full ₹36,00,000 principal +
                    ₹4,56,000 accrued statutory interest enforceable.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IEC 61724, WMS Pyranometer &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Commercial Courts and arbitral tribunals reject bare invoice demands when a buyer
                raises technical counter-allegations. Assemble these six records before issuing your
                statutory notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. CEIG Charging Approval & Electrical Inspector NOC",
                    body: "Proves statutory electrical safety compliance and plant readiness for grid synchronization independent of DISCOM meter stockouts.",
                  },
                  {
                    title: "2. Zero-Export CT-Clamp & Inverter SCADA CSV Logs",
                    body: "Demonstrates daily captive kWh consumed by the factory and identifies every hour of intentional zero-export throttling.",
                  },
                  {
                    title: "3. WMS Pyranometer POA Irradiance & Temp Logs",
                    body: "Establishes objective solar resource availability to normalize Performance Ratio strictly under IEC 61724-1.",
                  },
                  {
                    title: "4. Timestamped Soiling & O&M Washing Neglect Logs",
                    body: "Photos, site visit reports, and emails warning the factory that unwashed modules were depressing raw kWh output.",
                  },
                  {
                    title: "5. DISCOM Net-Meter Application & Payment Receipts",
                    body: "Proves the EPC filed the net-metering application on time and any meter-installation delay rests with the utility or buyer.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Electronic Record Certificate",
                    body: "Mandatory statutory certificate signed by your SCADA/IT custodian making cloud telemetry admissible in court.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Divisible Supply vs BOS Contracts */}
            <section
              id="heading-divisible-contracts"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Structuring Divisible Supply vs. BOS Contracts to Beat Holdbacks
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  One of the most effective structural defenses for C&amp;I Solar EPCs is{" "}
                  <strong>contract divisibility</strong>. When modules, inverters, and mounting
                  structures (typically 65%–72% of project CapEx) are bundled into a single
                  indivisible turnkey works contract, defaulting buyers routinely challenge MSEFC
                  jurisdiction by arguing that composite works contracts fall outside the MSMED Act,
                  2006.
                </p>
                <p>
                  By contrast, when you execute a <strong>separate Supply Purchase Order</strong>{" "}
                  (transferring title to PV modules and inverters upon site delivery against e-Way
                  Bills and Store Receipt Vouchers) alongside a separate{" "}
                  <strong>BOS &amp; Installation Service Order</strong>, the hardware tranche stands
                  on independent footing as a sale of goods. For Udyam-registered Micro and Small
                  enterprises, unpaid balances on the Supply PO trigger mandatory 45-day payment
                  ceilings under <strong>MSMED Act Section 15</strong>,{" "}
                  <strong>3x RBI Bank Rate compound interest</strong> under Section 16, and{" "}
                  <strong>Income Tax Act Section 43B(h)</strong> expense disallowance—forcing the
                  buyer&apos;s CFO and statutory auditor to clear your hardware dues before March 31
                  tax audit sign-off.
                </p>
                <p>
                  Even where net-metering is genuinely pending solely due to a State DISCOM meter
                  shortage, never leave 20% of the total plant value open-ended. Offer a narrow{" "}
                  <strong>2%–5% Meter-Tag Bank Guarantee</strong> or escrow holdback limited strictly
                  to the bi-directional meter installation, while enforcing immediate payment of the
                  remaining 15%–18% commissioning balance.
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch One C&amp;I EPC Demand Notice or Upload Multi-Site Batch
                </h2>
              </div>

              <SolarEpcCTA />
            </section>

            {/* Section 9: Internal Links & Cluster Directory */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Solar EPC, Subcontractor &amp; MSME Interest Recovery Links
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Solar EPC, RESCO PPA & EV Power Recovery Hub (IND-19)",
                    href: "/industries/solar-renewable-ev-power-recovery",
                    tag: "Parent Hub",
                  },
                  {
                    title: "OPEX / RESCO Solar PPA Default: Buyout & Repossession",
                    href: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
                    tag: "Sibling Spoke",
                  },
                  {
                    title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "T1 Calculator",
                  },
                  {
                    title: "Section 43B(h) MSME Tax Disallowance & Demand Notice",
                    href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
                    tag: "P1 Template",
                  },
                  {
                    title: "MSME Delayed Payment Demand Notice Format",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    tag: "P1 Template",
                  },
                  {
                    title: "Subcontractor Payment Recovery & Retention Money India",
                    href: "/subcontractor-payment-recovery-india",
                    tag: "EPC / Infra",
                  },
                  {
                    title: "Section 80 CPC Statutory Notice to Government / DISCOMs",
                    href: "/law/section-80-cpc-notice-to-government",
                    tag: "Statutory Guide",
                  },
                  {
                    title: "Construction RA Bill & Retention Money Arbitration Notice",
                    href: "/templates/construction-ra-bill-retention-money-arbitration-notice",
                    tag: "P1 Template",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] transition-all"
                  >
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                        {linkItem.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        {linkItem.title}
                      </p>
                    </div>
                    <span className="text-slate-400 group-hover:text-[#DC2626] font-bold shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: C&amp;I Solar EPC Balance Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Official Bare Acts, MNRE/CEA Portals &amp; Technical Standards
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
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
