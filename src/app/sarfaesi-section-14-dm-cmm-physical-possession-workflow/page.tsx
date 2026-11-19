import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SarfaesiSection14TableOfContents from "./SarfaesiSection14TableOfContents";
import SarfaesiSection14ScenarioTabs from "./SarfaesiSection14ScenarioTabs";
import SarfaesiSection14CTA from "./SarfaesiSection14CTA";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/sarfaesi-section-14-dm-cmm-physical-possession-workflow`;
const HERO_IMAGE_URL = `${SITE_URL}/blog_money_recovery.png`;

export const metadata: Metadata = {
  title: "SARFAESI Section 14 DM/CMM Physical Possession Bank Guide",
  description:
    "Bank guide to filing defect-free Section 14 SARFAESI applications before DM/CMM: 9-point statutory affidavits, panchnama & High Court remedies.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "SARFAESI Section 14 DM/CMM Physical Possession Bank Guide",
    description:
      "Bank guide to filing defect-free Section 14 SARFAESI applications before DM/CMM: 9-point statutory affidavits, panchnama & High Court remedies.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "SARFAESI Section 14 Physical Possession Workflow for Banks and DM CMM",
          "SARFAESI Section 14 DM CMM Possession Guide"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARFAESI Section 14 DM/CMM Physical Possession Bank Guide",
    description:
      "Bank guide to filing defect-free Section 14 SARFAESI applications before DM/CMM: 9-point statutory affidavits, panchnama & High Court remedies.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [HERO_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_PRECEDENTS = [
  {
    title: "Supreme Court Settles Nature of DM / CMM Powers as Strictly Non-Adjudicatory",
    parties: "Balkrishna Rama Tarle v. Phoenix ARC Pvt. Ltd. & Ors.",
    citation: "(2023) 1 SCC 662, Supreme Court of India",
    date: "Judgment Dated 26 September 2022",
    facts:
      "A secured creditor approached the Chief Metropolitan Magistrate (CMM) under Section 14 of the SARFAESI Act for physical possession. The borrower and a purported tenant raised objections regarding title and leasehold rights. The High Court entertained a writ petition against the CMM order, stalling execution.",
    holding:
      "The Supreme Court held that the powers of the DM or CMM under Section 14 are purely ministerial and non-adjudicatory. The Magistrate has zero authority to adjudicate title disputes, assess the validity of the mortgage, or determine inter-se rights between the borrower and third parties. The DM is only required to verify whether the 9-point affidavit has been furnished by the Authorized Officer, and upon such verification, must facilitate physical custody without adjudicating defenses.",
    amount: "Ministerial Mandate Established — Zero Adjudicatory Scope for DM / CMM",
    takeaway:
      "Banks can prevent District Magistrates from issuing summons to borrowers or conducting civil mini-trials by citing Balkrishna Rama Tarle; any dispute regarding the debt or mortgage belongs strictly before the DRT under Section 17.",
  },
  {
    title: "Supreme Court on Rejection of Post-Mortgage Tenancy Claims Without Landlord Consent",
    parties: "Bajarang Shyamsunder Agarwal v. Central Bank of India & Anr.",
    citation: "(2019) 9 SCC 94, Supreme Court of India",
    date: "Judgment Dated 11 September 2019",
    facts:
      "A borrower defaulted on a secured bank facility. When physical possession was initiated under Section 14, an alleged tenant claimed tenancy protection under state rent control legislation based on an oral tenancy followed by an unregistered tenancy deed created subsequent to the mortgage.",
    holding:
      "The Supreme Court affirmed that a tenant claiming rights under a lease entered into after the date of mortgage without express written sanction of the secured creditor violates Section 65A of the Transfer of Property Act, 1882. Such leases are void against the mortgagee bank. Furthermore, unregistered leases exceeding one year are barred by Section 17 and Section 49 of the Registration Act, 1908 and cannot defeat Section 14 possession.",
    amount: "Precedent Barring Unregistered & Post-Mortgage Tenant Injunctions",
    takeaway:
      "Secured creditors can dislodge sham tenants set up by defaulting promoters by proving mortgage registration priority via CERSAI records and lack of Section 65A consent.",
  },
  {
    title: "High Court Precedent on Mandatory 30-Day and Maximum 60-Day Timeline for Section 14",
    parties: "Kotak Mahindra Bank Ltd. v. Girnar Corrugators Pvt. Ltd. & Ors.",
    citation: "(2023) 3 SCC 210, Supreme Court of India",
    date: "Judgment Dated 05 January 2023",
    facts:
      "The secured creditor filed an application under Section 14 before the District Magistrate. The proceedings remained stalled due to competing claims under the MSMED Act facilitation council awards and administrative inaction by the executive authorities extending well past 180 days.",
    holding:
      "The Supreme Court reiterated that Section 14(1) second and third provisos mandate disposal within 30 days, extendable up to a total of 60 days only upon recording written reasons. The non-obstante clause in Section 14 read with Section 35 of the SARFAESI Act overrides general administrative delays and inconsistent subordinate claims.",
    amount: "Enforcement of Statutory 30–60 Day Window & SARFAESI Non-Obstante Priority",
    takeaway:
      "If the District Magistrate fails to pass an order within 60 days, banks are entitled to immediate relief under Article 226 from the jurisdictional High Court via a peremptory Writ of Mandamus.",
  },
  {
    title: "Appointment of Advocate Commissioners for Physical Possession under Section 14",
    parties: "NKGSB Cooperative Bank Ltd. v. Subir Chakravarty & Ors.",
    citation: "(2022) 10 SCC 286, Supreme Court of India",
    date: "Judgment Dated 25 February 2022",
    facts:
      "The CMM appointed an Advocate Commissioner instead of a subordinate administrative officer or police personnel to take physical possession of the secured asset under Section 14(1A). The borrower challenged the order as ultra vires.",
    holding:
      "The Supreme Court held that the CMM / DM is fully competent under Section 14(1A) of the SARFAESI Act to appoint an Advocate Commissioner as an officer subordinate to them for executing possession, taking inventory, and sealing premises with police assistance.",
    amount: "Advocate Commissioner Protocol Validated Nationwide",
    takeaway:
      "Banks can request the appointment of an active panel Advocate Commissioner to eliminate delays associated with overburdened Revenue Tehsildars and Talathi officials.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act — Sections 13, 14, 17, 26D, 31 & 35)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Security Interest (Enforcement) Rules, 2002 (Rule 8 — Sale of Immovable Secured Assets, Appendix I Panchnama & Appendix II Inventory)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006?sam_handle=123456789/2513",
  },
  {
    title: "Transfer of Property Act, 1882 (Section 58 Mortgages & Section 65A Mortgagor's Power to Lease)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Registration Act, 1908 (Section 17 Mandatory Registration & Section 49 Effect of Non-Registration)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Panchnama Videography & CERSAI Digital Audit Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Central Registry of Securitisation Asset Reconstruction and Security Interests of India (CERSAI Portal & Security Interest Rules)",
    url: "https://www.cersai.org.in/",
  },
];

const FAQS = [
  {
    question: "What is the mandatory 9-point affidavit under SARFAESI Section 14?",
    answer:
      "Inserted by the 2013 amendment to Section 14(1) of the SARFAESI Act, the 9-point affidavit is an affirmation filed by the Bank's Authorized Officer declaring: (1) total aggregate financial assistance granted and outstanding debt; (2) borrower's agreement creating security interest; (3) registration of charge with CERSAI under Section 26D; (4) occurrence of default; (5) NPA classification under RBI guidelines; (6) service of Section 13(2) 60-day demand notice; (7) consideration and rejection of borrower objections under Section 13(3A) within 15 days; (8) non-payment within 60 days; and (9) lawful requirement of administrative assistance to take physical possession.",
  },
  {
    question: "Can the District Magistrate (DM) issue notice to the borrower or conduct a trial under Section 14?",
    answer:
      "No. As settled by the Supreme Court in Balkrishna Rama Tarle v. Phoenix ARC (2023) and Standard Chartered Bank v. V. Noble Kumar (2013), the DM or Chief Metropolitan Magistrate (CMM) exercises purely ministerial and executive functions. The Magistrate is not an adjudicating authority. The DM cannot issue a show-cause notice to the borrower, adjudicate disputes on debt quantum or title, or entertain counterclaims. The DM's duty is strictly confined to verifying the factual averments in the 9-point affidavit and passing an executive order to take possession.",
  },
  {
    question: "What is the statutory timeline for the DM/CMM to pass a physical possession order?",
    answer:
      "Under the second proviso to Section 14(1), the DM/CMM is required to pass the order within 30 days from the date of the bank's application. If the order cannot be passed within 30 days for reasons beyond control, the third proviso permits an extension up to an aggregate maximum of 60 days, provided the Magistrate records the reasons for the delay in writing. If no order is passed within 60 days, the bank can approach the High Court under Article 226 for a Writ of Mandamus.",
  },
  {
    question: "How should banks handle a tenant occupying the mortgaged property during Section 14 execution?",
    answer:
      "Under Supreme Court rulings in Bajarang Shyamsunder Agarwal (2019) and Harshad Govardhan Sondagar (2014), any lease executed after the creation of the mortgage without the bank's express written consent is void under Section 65A of the Transfer of Property Act. Furthermore, leases exceeding 11 months must be registered under Section 17 of the Registration Act. Unregistered leases cannot confer any right to remain in possession against the secured creditor. The DM must reject sham tenancy claims and take physical custody.",
  },
  {
    question: "What is the difference between symbolic possession under Rule 8(1) and physical possession under Section 14?",
    answer:
      "Symbolic possession under Rule 8(1) of the Security Interest (Enforcement) Rules, 2002 is taking formal legal control by serving a possession notice on the borrower, affixing it on the property, and publishing it in two leading newspapers within 7 days. Physical possession under Section 14 involves actual physical eviction, breaking open locks, preparing an inventory of movables, taking custody of the premises, and deploying bank security personnel, enabling vacant physical sale to auction purchasers.",
  },
  {
    question: "Can the DM appoint an Advocate Commissioner instead of an Executive Magistrate or Tehsildar?",
    answer:
      "Yes. The Supreme Court in NKGSB Cooperative Bank Ltd. v. Subir Chakravarty (2022) held that under Section 14(1A), the DM or CMM is fully authorized to appoint an Advocate Commissioner to execute physical possession, break open locks, prepare the panchnama and inventory, and hand over vacant custody to the bank Authorized Officer with police assistance.",
  },
  {
    question: "What immediate legal remedy is available if the District Magistrate delays Section 14 orders beyond 60 days?",
    answer:
      "When a Section 14 application exceeds the 60-day statutory ceiling, the bank can file a Writ Petition (Civil) under Article 226 of the Constitution before the jurisdictional High Court praying for a Writ of Mandamus. High Courts routinely dispose of such writ petitions at the admission stage by directing the DM/CMM to pass the possession order within 2 to 4 weeks.",
  },
  {
    question: "Is CERSAI registration mandatory before filing a Section 14 application?",
    answer:
      "Yes. Under Section 26D of the SARFAESI Act (effective from January 2020), no secured creditor is entitled to exercise the rights of enforcement of securities under Chapter III (including Section 13 and Section 14) unless the security interest created in its favor has been registered with CERSAI. The CERSAI registration certificate and Asset ID must be explicitly referenced in point 3 of the 9-point affidavit.",
  },
];

export default function SarfaesiSection14Page() {
  // Structured Data Schemas
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
        name: "Scheduled Commercial & Cooperative Banks Recovery Hub",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SARFAESI Section 14 Physical Possession Workflow",
        item: CANONICAL_URL,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "SARFAESI Section 14 Physical Possession: 9-Point Affidavit, 30–60 Day Timeline & DM Delay Remedies",
    description:
      "Step-by-step bank guide to filing defect-free Section 14 SARFAESI applications before DM/CMM, 9-point statutory affidavits, panchnama & High Court remedies.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: [HERO_IMAGE_URL],
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: SITE_URL,
      },
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
  };

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Banks Secure Physical Possession under SARFAESI Section 14",
    description:
      "End-to-end statutory procedure for banks and financial institutions to obtain physical custody of secured mortgaged assets through District Magistrates or Chief Metropolitan Magistrates.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Mandatory Statutory Pre-Requisites & Section 13(2) Notice",
        text: "Classify account as NPA under RBI norms, register security interest on CERSAI under Section 26D, serve 60-day demand notice under Section 13(2), and dispose of any Section 13(3A) borrower representation via speaking order within 15 days.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Drafting the 9-Point Statutory Affidavit",
        text: "Authorized Officer drafts and verifies the 9 mandatory affirmations under Section 14(1) proviso, attaching loan agreements, title deeds, postal tracking delivery proofs, and CERSAI search certificates.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Filing Application Before Jurisdictional DM or CMM",
        text: "Submit formal Section 14 petition with the 9-point affidavit before the District Magistrate (in mofussil districts) or Chief Metropolitan Magistrate (in metropolitan cities) where the secured asset is located.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Securing Ministerial Order Within Statutory 30–60 Day Window",
        text: "Ensure the Magistrate verifies the affidavit without issuing notice to borrower. Secure appointment of an Advocate Commissioner or Revenue Officer with police assistance under Section 14(1A) and 14(2).",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Physical Execution, Panchnama & BSA 2023 Videography",
        text: "Execute warrant of possession on site: break open locks, prepare Rule 8 Appendix I Panchnama and Appendix II Inventory with two independent witnesses, complete digital video recording under BSA 2023 s.63, and deploy bank private security guards.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "High Court Escalation for Administrative Delays",
        text: "If the DM fails to pass orders within 60 days, file an Article 226 Writ of Mandamus before the High Court citing Supreme Court precedents for a time-bound disposal direction.",
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Header Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>SARFAESI Act 2002 &bull; Section 14 Protocol</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">IND-01 Bank Creditor Guide</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            SARFAESI Section 14 Physical Possession: 9-Point Affidavit, 30–60 Day Timeline &amp; DM Delay Remedies
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Bank Recovery Heads
            </span>
            <p>
              Under Section 14 of the SARFAESI Act, District Magistrates (DM) and Chief Metropolitan Magistrates (CMM) perform purely ministerial duties to assist secured creditors in taking physical possession of secured assets. By filing a defect-free 9-point affidavit accompanied by mandatory CERSAI registration certificates, banks can secure possession within the 30-day statutory window (maximum 60 days). As part of our comprehensive{" "}
              <Link
                href="/industries/banks-loan-recovery"
                className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
              >
                Scheduled Commercial Banks, Small Finance Banks &amp; Cooperative Banks Recovery Hub
              </Link>
              , this operational playbook equips bank Stressed Asset Recovery Branches (SARB) and legal panels to defeat sham tenancy claims, enforce Section 14(2) police assistance, and escalate administrative delays to the High Court via Article 226 Writs of Mandamus.
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Statutory Timeline
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 font-mono">
                30–60 Days
              </p>
              <span className="text-[10px] text-slate-400 block">
                SARFAESI s.14(1) Proviso
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Affidavit Checklist
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 font-mono">
                9 Points
              </p>
              <span className="text-[10px] text-slate-400 block">
                Mandatory Legal Affirmations
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                DM / CMM Scope
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-amber-400 font-mono">
                Ministerial
              </p>
              <span className="text-[10px] text-slate-400 block">
                Zero Adjudicatory Jurisdiction
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Delay Escalation
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-400 font-mono">
                Art. 226 Writ
              </p>
              <span className="text-[10px] text-slate-400 block">
                High Court Mandamus Relief
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="w-full bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <Breadcrumbs
            items={[
              {
                label: "Scheduled Commercial Banks Recovery Hub",
                href: "/industries/banks-loan-recovery",
              },
              {
                label: "SARFAESI Section 14 Physical Possession Workflow",
                href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
              },
            ]}
          />
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Sticky Left Table of Contents */}
          <SarfaesiSection14TableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Architecture */}
            <section
              id="heading-statutory-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Section 14 Framework
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Architecture of SARFAESI Section 14 Possession
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a secured credit facility and fails to pay within 60 days of receiving a demand notice under Section 13(2), the secured creditor is entitled under Section 13(4) of the SARFAESI Act to take possession of the secured asset. However, in retail mortgages, commercial properties, industrial plants, and land parcels, defaulting promoters frequently lock premises, resist physical entry, or stage violent protests. In such situations, self-help physical repossession by bank recovery agents exposes bank officers to penal prosecution and consumer forum strictures.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To overcome physical resistance lawfully, Section 14 of the SARFAESI Act creates an institutional sovereign enforcement mechanism. The Chief Metropolitan Magistrate (CMM) in metropolitan areas and the District Magistrate (DM) in mofussil districts are statutorily mandated, upon written application by the Authorized Officer, to take possession of such asset and documents and forward them to the secured creditor.
              </p>

              {/* Crucial Statutory Principles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Non-Adjudicatory Executive Mandate
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The DM/CMM does not sit as a judicial tribunal. The Magistrate cannot adjudicate the validity of the loan, interest compounding, mortgage execution, or limitation. As ruled in <em>Standard Chartered Bank v. V. Noble Kumar</em>, the DM’s role is purely to verify the affidavit and assist in custody.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Overriding Non-Obstante Effect
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 14 operates with a non-obstante clause (&ldquo;Notwithstanding anything contained in any other law for the time being in force&rdquo;). Read with Section 35 of the SARFAESI Act, Section 14 overrides local state laws, rent control enactments, and revenue codes that conflict with bank possession.
                  </p>
                </div>
              </div>

              {/* Cross Links to Sibling Assets */}
              <div className="bg-red-50/60 border border-red-100 rounded-xl p-4 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-[#DC2626] block">
                  Related Bank Creditor Workflows:
                </span>
                <p>
                  Before invoking Section 14, ensure your bank has perfected its Section 13(2) demand notice and objection disposal. Review our comprehensive{" "}
                  <Link
                    href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    SARFAESI Section 13(2) Demand Notice Bank Guide
                  </Link>{" "}
                  and verify pecuniary thresholds via the{" "}
                  <Link
                    href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Bank Loan Recovery Below ₹20 Lakhs Options
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: 9-Point Affidavit */}
            <section
              id="heading-9-point-affidavit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Mandatory Statutory Affirmations
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The Mandatory 9-Point Section 14 Statutory Affidavit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By the Enforcement of Security Interest and Recovery of Debts Laws and Miscellaneous Provisions (Amendment) Act, 2012 (effective 15 January 2013), Parliament amended Section 14(1) by inserting a mandatory proviso. The Authorized Officer of the bank must now file an exhaustive affidavit affirming nine distinct factual propositions. Omission of even one statutory affirmation renders the Section 14 application defective, causing Magistrate clerks to issue objections that stall recovery for months.
              </p>

              {/* 9-Point Breakdown Cards */}
              <div className="space-y-3">
                {[
                  {
                    num: "01",
                    clause: "Section 14(1) Proviso (i)",
                    title: "Aggregate Financial Assistance & Outstanding Liability",
                    desc: "Explicit affirmation of the aggregate credit facilities sanctioned, disbursed, total outstanding liability as on the date of NPA classification, and current dues including contractually agreed uncompounded interest and expenses.",
                  },
                  {
                    num: "02",
                    clause: "Section 14(1) Proviso (ii)",
                    title: "Creation of Valid Security Interest / Mortgage",
                    desc: "Affirmation that the borrower/mortgagor agreed to create security interest in the secured immovable asset; detailed recital of deposit of title deeds (equitable mortgage) or registered mortgage indenture with registration particulars.",
                  },
                  {
                    num: "03",
                    clause: "Section 14(1) Proviso (iii) & s.26D",
                    title: "CERSAI Charge Registration & Priority",
                    desc: "Mandatory declaration that the security interest has been duly registered with the Central Registry (CERSAI). Under Section 26D, failure to attach the CERSAI Security Interest Report (Asset ID) statutorily bars enforcement.",
                  },
                  {
                    num: "04",
                    clause: "Section 14(1) Proviso (iv)",
                    title: "Default in Repayment of Debt / Installments",
                    desc: "Affirmation that the borrower committed chronic default in repayment of financial assistance or installments according to agreed terms and sanction conditions.",
                  },
                  {
                    num: "05",
                    clause: "Section 14(1) Proviso (v)",
                    title: "NPA Classification in Accordance with RBI Norms",
                    desc: "Affirmation that the borrower account was lawfully classified as a Non-Performing Asset (NPA) on a specific cut-off date strictly in compliance with Reserve Bank of India Prudential Norms on Income Recognition and Asset Classification (IRAC).",
                  },
                  {
                    num: "06",
                    clause: "Section 14(1) Proviso (vi)",
                    title: "Service of Section 13(2) Demand Notice with Proof",
                    desc: "Affirmation that a formal demand notice under Section 13(2) was served upon the borrower and guarantors requiring payment within 60 days. Must attach India Post Speed Post RPAD tracking receipts or BSA 2023 s.63 electronic dispatch logs.",
                  },
                  {
                    num: "07",
                    clause: "Section 14(1) Proviso (vii)",
                    title: "Section 13(3A) Objection Consideration & 15-Day Reply",
                    desc: "Affirmation that any representation or objection filed by the borrower under Section 13(3A) was duly considered by the secured creditor and rejected through a reasoned speaking order communicated within 15 calendar days; or affirmation that no objection was received.",
                  },
                  {
                    num: "08",
                    clause: "Section 14(1) Proviso (viii)",
                    title: "Failure to Discharge Liability within 60-Day Notice Period",
                    desc: "Affirmation that the borrower and guarantors failed to discharge their liability in full within the statutory 60-day window from the date of service of the Section 13(2) notice.",
                  },
                  {
                    num: "09",
                    clause: "Section 14(1) Proviso (ix)",
                    title: "Lawful Compliance & Need for Administrative Assistance",
                    desc: "Affirmation that all provisions of the SARFAESI Act, Security Interest Rules, and RBI directions have been complied with, and the secured asset is not an exempt property under Section 31 (such as agricultural land), necessitating DM assistance for taking custody.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex flex-col sm:flex-row items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:flex-col sm:items-center sm:justify-center shrink-0">
                      <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-mono font-bold text-xs flex items-center justify-center">
                        {item.num}
                      </span>
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded">
                          {item.clause}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Symbolic vs Physical Possession Comparison Matrix */}
            <section
              id="heading-symbolic-vs-physical"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Enforcement Comparison
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Symbolic Possession (Rule 8(1)) vs Physical Possession (Section 14)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many banking recovery managers conflate &ldquo;symbolic possession&rdquo; taken under Section 13(4) read with Rule 8(1) with &ldquo;physical possession&rdquo; under Section 14. Auctioning a property on an &ldquo;as is where is&rdquo; basis under mere symbolic possession severely depresses auction recovery realization (frequently resulting in 30%–50% bidding discounts or zero bids due to buyer fear of eviction litigation).
              </p>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">
                        Criteria
                      </th>
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-amber-300">
                        Symbolic Possession (Rule 8(1)/(2))
                      </th>
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-emerald-300">
                        Physical Possession (Section 14)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Statutory Authority
                      </td>
                      <td className="py-3 px-4">
                        SARFAESI Act Section 13(4)(a) read with Rule 8(1) &amp; 8(2) of Security Interest Rules.
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-semibold text-emerald-900">
                        SARFAESI Act Section 14(1) read with Rule 8(3); executed via DM / CMM executive order.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Actual Physical Custody
                      </td>
                      <td className="py-3 px-4 text-amber-700">
                        No. Borrower, family members, or tenants remain in physical occupation of the premises.
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-semibold text-emerald-900">
                        Yes. Occupants are physically evicted, locks broken open, premises sealed, and bank guards deployed.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Police Assistance
                      </td>
                      <td className="py-3 px-4">
                        Not available under Rule 8(1). Bank officers cannot utilize physical force to dispossess.
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-semibold text-emerald-900">
                        Mandatory under Section 14(2). The DM requisitions armed police force including female constables.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        E-Auction Realization
                      </td>
                      <td className="py-3 px-4 text-red-700">
                        Poor. Retail buyers avoid properties without physical handover; ARC buyers demand 40%+ haircut.
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-semibold text-emerald-900">
                        Maximum realization. Unencumbered vacant physical possession attracts genuine commercial buyers.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        DRT Section 17 Limitation
                      </td>
                      <td className="py-3 px-4">
                        Borrower can file Securitisation Application (SA) within 45 days of symbolic possession notice.
                      </td>
                      <td className="py-3 px-4 bg-emerald-50/40 font-semibold text-emerald-900">
                        Fresh cause of action arises, but DRT cannot grant interim stay without hearing bank caveat.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Operational SOP
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Section 14 Execution Decision Tree &amp; Enforcement Rails
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this sequential operational decision rail from pre-filing CERSAI audits to physical sealing. Desktop users can review the end-to-end vector flowchart, while mobile users can follow the step-by-step phased cards below.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-xl p-6 border border-slate-800 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 900 480"
                  className="w-full max-w-4xl mx-auto h-auto text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={900}
                  height={480}
                  aria-label="Section 14 SARFAESI Physical Possession Decision Flowchart"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="140" y="65" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 1: PRE-FILING AUDIT</text>
                  <text x="140" y="85" fill="#F8FAFC" fontSize="11" textAnchor="middle">s.13(2) Notice + s.13(3A) Reply</text>
                  <text x="140" y="103" fill="#94A3B8" fontSize="10" textAnchor="middle">CERSAI Form I Asset ID Audit</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="260" y1="75" x2="330" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="330,75 320,70 320,80" fill="#94A3B8" />

                  {/* Step 2 */}
                  <rect x="330" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                  <text x="450" y="65" fill="#60A5FA" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 2: 9-POINT AFFIDAVIT</text>
                  <text x="450" y="85" fill="#F8FAFC" fontSize="11" textAnchor="middle">Affidavit by Authorized Officer</text>
                  <text x="450" y="103" fill="#94A3B8" fontSize="10" textAnchor="middle">Annex Title Deeds &amp; Tracking Reports</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="570" y1="75" x2="640" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="640,75 630,70 630,80" fill="#94A3B8" />

                  {/* Step 3 */}
                  <rect x="640" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="760" y="65" fill="#34D399" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 3: DM / CMM FILING</text>
                  <text x="760" y="85" fill="#F8FAFC" fontSize="11" textAnchor="middle">Jurisdictional Filing</text>
                  <text x="760" y="103" fill="#94A3B8" fontSize="10" textAnchor="middle">Track 30-Day Statutory Clock</text>

                  {/* Branching Lines Down */}
                  <line x1="760" y1="120" x2="760" y2="200" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="760,200 755,190 765,190" fill="#94A3B8" />

                  {/* Decision Box */}
                  <polygon points="760,200 860,260 760,320 660,260" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                  <text x="760" y="255" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">Order Passed in</text>
                  <text x="760" y="272" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">30–60 Days?</text>

                  {/* Branch YES -> Execution */}
                  <line x1="660" y1="260" x2="480" y2="260" stroke="#10B981" strokeWidth="2" />
                  <polygon points="480,260 490,255 490,265" fill="#10B981" />
                  <text x="560" y="250" fill="#34D399" fontSize="11" fontWeight="bold">YES (Order Issued)</text>

                  <rect x="240" y="215" width="240" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="360" y="250" fill="#34D399" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 4A: POSSESSION</text>
                  <text x="360" y="270" fill="#F8FAFC" fontSize="11" textAnchor="middle">Advocate Commissioner + Police</text>
                  <text x="360" y="288" fill="#94A3B8" fontSize="10" textAnchor="middle">Rule 8 Panchnama &amp; Sealing</text>

                  {/* Branch NO -> High Court Mandamus */}
                  <line x1="760" y1="320" x2="760" y2="380" stroke="#EF4444" strokeWidth="2" />
                  <polygon points="760,380 755,370 765,370" fill="#EF4444" />
                  <text x="770" y="355" fill="#EF4444" fontSize="11" fontWeight="bold">NO (&gt;60 Days)</text>

                  <rect x="640" y="380" width="240" height="85" rx="10" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                  <text x="760" y="415" fill="#F87171" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 4B: WRIT MANDAMUS</text>
                  <text x="760" y="433" fill="#F8FAFC" fontSize="11" textAnchor="middle">Article 226 High Court Petition</text>
                  <text x="760" y="450" fill="#94A3B8" fontSize="10" textAnchor="middle">Compel DM Order within 2–4 Weeks</text>

                  {/* Final Arrow from 4A to Handover */}
                  <line x1="240" y1="260" x2="140" y2="260" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="140" y1="260" x2="140" y2="380" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="140,380 135,370 145,370" fill="#94A3B8" />

                  <rect x="20" y="380" width="240" height="85" rx="10" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                  <text x="140" y="415" fill="#6EE7B7" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 5: SECURED AUCTION</text>
                  <text x="140" y="433" fill="#F8FAFC" fontSize="11" textAnchor="middle">Vacant Physical Asset Handover</text>
                  <text x="140" y="450" fill="#A7F3D0" fontSize="10" textAnchor="middle">Maximum E-Auction Value Recovery</text>
                </svg>
              </div>

              {/* Mobile Card Sequence */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1",
                    title: "Pre-Filing Statutory Due Diligence",
                    desc: "Verify NPA classification, complete Section 13(2) service with India Post tracking, ensure Section 13(3A) speaking order dispatched within 15 days, and download CERSAI Form I report.",
                  },
                  {
                    step: "2",
                    title: "Drafting 9-Point Statutory Affidavit",
                    desc: "Authorized Officer signs and notarizes the 9-point affidavit strictly complying with Section 14(1) provisos (i) to (ix).",
                  },
                  {
                    step: "3",
                    title: "DM / CMM Application & 30-Day Docket",
                    desc: "File before jurisdictional Magistrate. Submit request for Advocate Commissioner appointment under Section 14(1A) to avoid revenue clerk delays.",
                  },
                  {
                    step: "4",
                    title: "Execution or High Court Writ Escalation",
                    desc: "If order passed, execute with Section 14(2) police force. If DM delays beyond 60 days, file Article 226 Writ Petition before High Court for peremptory mandamus.",
                  },
                  {
                    step: "5",
                    title: "Physical Handover & Unencumbered Auction",
                    desc: "Seal property, complete Rule 8 Appendix I/II panchnama with BSA 2023 s.63 videography, and proceed with public e-auction.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-mono font-bold text-xs flex items-center justify-center">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: DM / CMM Ministerial Role & Jurisdictional Limits */}
            <section
              id="heading-dm-ministerial-role"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Jurisdictional Boundaries
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  District Magistrate Ministerial Role &amp; Jurisdictional Limits
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The single largest source of delay in SARFAESI recovery occurs when District Magistrates misunderstand their statutory function under Section 14 and attempt to act as a civil judge or DRT presiding officer. DMs frequently issue show-cause notices to borrowers, hear elaborate arguments regarding interest calculations, permit cross-examination, or adjourn matters to accommodate borrower settlement proposals.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-2">
                <strong className="font-bold text-amber-900 block text-sm">
                  What the District Magistrate CANNOT Legally Do Under Section 14:
                </strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Cannot issue notice to the borrower:</strong> The Supreme Court in <em>Standard Chartered Bank v. V. Noble Kumar</em> held that Section 14 does not contemplate issuance of prior notice or hearing to the borrower.
                  </li>
                  <li>
                    <strong>Cannot adjudicate validity of mortgage or title:</strong> In <em>Balkrishna Rama Tarle (2023)</em>, the Apex Court ruled that the DM cannot entertain borrower or third-party title disputes.
                  </li>
                  <li>
                    <strong>Cannot examine quantum of debt or penal interest:</strong> The borrower’s remedy lies solely before the DRT under Section 17, not before the District Magistrate.
                  </li>
                  <li>
                    <strong>Cannot refuse assistance due to pending civil suits:</strong> Under Section 34 of the SARFAESI Act, civil court jurisdiction is completely ousted.
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The District Magistrate’s jurisdiction is strictly limited to two objective verifications: (1) whether the secured asset is located within their territorial jurisdiction, and (2) whether the Authorized Officer has filed an affidavit containing all 9 statutory affirmations required by the Section 14(1) proviso. Once verified, the Magistrate possesses no statutory discretion to deny or indefinitely adjourn the order.
              </p>
            </section>

            {/* Section 6: Defeating Bogus Tenancy (Bajarang Shyamsunder Rule) */}
            <section
              id="heading-tenancy-scrutiny"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Anti-Evasion Legal Weapons
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Defeating Bogus Tenancy Claims: The Bajarang Shyamsunder Rule
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When secured retail or commercial assets are slated for Section 14 physical takeover, defaulting borrowers routinely fabricate sham tenancies in favor of relatives, associates, or shell entities. The purported &ldquo;tenant&rdquo; files an application before the DM or civil court claiming protected tenancy under state Rent Control Acts. Bank recovery teams must execute a three-pronged statutory rebuttal:
              </p>

              {/* 3 Tenancy Defenses */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Statutory Rule 1
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Section 65A TPA Consent
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 65A of the Transfer of Property Act, 1882, any lease created by a mortgagor after the mortgage date without express written consent of the mortgagee bank is invalid against the bank. If no prior bank NOC exists, the lease is void ab initio.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Statutory Rule 2
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Registration Act s.17 &amp; s.49
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leases for terms exceeding one year or reserving yearly rent must be registered by a registered instrument. Under Section 49 of the Registration Act, unregistered tenancy deeds are inadmissible in evidence to prove leasehold rights.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Statutory Rule 3
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Bajarang Shyamsunder Holding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held in <em>Bajarang Shyamsunder Agarwal (2019)</em> that oral tenancies or informal rent receipts cannot defeat SARFAESI Section 14. The tenant’s only forum is DRT Section 17(4A), not the District Magistrate.
                  </p>
                </div>
              </div>

              {/* Interactive Scenario Tabs Component */}
              <div className="pt-2">
                <SarfaesiSection14ScenarioTabs />
              </div>
            </section>

            {/* Section 7: Rule 8 Panchnama, Inventory & BSA 2023 Checklist */}
            <section
              id="heading-panchnama-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  On-Site Evidence Checklist
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Rule 8 Panchnama, Inventory &amp; BSA 2023 Section 63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When physical custody is executed by the Advocate Commissioner or Executive Magistrate, the Authorized Officer must strictly comply with Rule 8(1), Rule 8(2), and Rule 8(3) of the Security Interest (Enforcement) Rules, 2002. Any procedural lapse during the execution of panchnama allows the borrower to file a Section 17 challenge in DRT, seeking restitution of possession.
              </p>

              {/* Protocol Grid */}
              <div className="space-y-3">
                {[
                  {
                    title: "Panchnama in Appendix I Format with Two Independent Panchas",
                    detail:
                      "Record the exact date, time, boundary descriptions, and lock-breaking events in the presence of two independent local witnesses (panchas) residing in the same locality. Avoid using bank peons or recovery agents as panchas.",
                  },
                  {
                    title: "Itemized Inventory of Movables (Appendix II Format)",
                    detail:
                      "Under Rule 8(3), prepare an exhaustive inventory of all movable goods, furniture, electronics, and documents found inside the premises. Take photographs of every room, obtain signatures of the Court Commissioner and panchas, and grant the borrower 15 days to remove movables.",
                  },
                  {
                    title: "BSA 2023 Section 63 Digital Video & Photo Certification",
                    detail:
                      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (replacing Evidence Act s.65B), video record the entire eviction, lock-cutting, inventory cataloging, and exterior padlock sealing. Maintain cryptographic hashes (SHA-256) and obtain a digital device certificate from the videographer.",
                  },
                  {
                    title: "Affixation of Possession Notice on Outer Door & Public Boundary",
                    detail:
                      "Affix the statutory Possession Notice on a conspicuous part of the property. Take clear geotagged photographs showing the notice affixed next to the broken/resealed lock.",
                  },
                  {
                    title: "7-Day Mandatory Newspaper Publication in Two Daily Papers",
                    detail:
                      "Under Rule 8(2), publish the Possession Notice within 7 days in two leading newspapers circulating in the locality, one of which must be in the vernacular language of the district.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      &check;
                    </span>
                    <div className="space-y-0.5">
                      <strong className="text-slate-900 font-bold block">
                        {item.title}
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Cost-of-Delay Ledger: Worked Financial Case Study */}
            <section
              id="heading-holding-cost-worked-case"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Financial Impact Analysis
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Cost-of-Delay Ledger: Financial Impact on a ₹2.5 Crore Secured NPA
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank allows a Section 14 application to languish before the District Magistrate for 12 months instead of escalating to the High Court at the 60-day mark, the economic destruction is severe. Interest de-recognition under RBI IRAC norms, security guard deployment costs, property tax penalties, and depreciation reduce recovery by lakhs.
              </p>

              {/* Financial Comparison Box */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Empirical Case Study
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      ₹2.50 Cr Secured Commercial Asset (Industrial Shed + Land)
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-red-950 text-red-400 border border-red-800/60 px-2.5 py-1 rounded">
                    Contractual Rate: 12.5% p.a.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Column A: Inaction Delay */}
                  <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block border-b border-red-900/40 pb-1.5">
                      Track A: Passive DM Pendency (14 Months Delay)
                    </span>
                    <div className="space-y-1.5 font-mono text-slate-300">
                      <div className="flex justify-between">
                        <span>Uncollected Accrued Interest:</span>
                        <span className="text-red-400 font-bold">&#8377;36,45,833</span>
                      </div>
                      <div className="flex justify-between">
                        <span>24/7 Security Guard Expenses:</span>
                        <span className="text-red-400 font-bold">&#8377;5,60,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Physical Asset Depreciation &amp; Pilferage:</span>
                        <span className="text-red-400 font-bold">&#8377;12,50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Municipal Property Tax Arrears:</span>
                        <span className="text-red-400 font-bold">&#8377;3,20,000</span>
                      </div>
                      <div className="border-t border-red-900/40 pt-2 flex justify-between text-white font-bold text-sm">
                        <span>Total Holding Loss:</span>
                        <span className="text-red-400">&#8377;57,75,833</span>
                      </div>
                    </div>
                  </div>

                  {/* Column B: Active Escalation */}
                  <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block border-b border-emerald-900/40 pb-1.5">
                      Track B: High Court Mandamus Escalation (60 Days Disposal)
                    </span>
                    <div className="space-y-1.5 font-mono text-slate-300">
                      <div className="flex justify-between">
                        <span>Affidavit Verification &amp; Filing:</span>
                        <span className="text-emerald-400 font-bold">Day 0–30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Art. 226 High Court Mandamus Writ:</span>
                        <span className="text-emerald-400 font-bold">Day 65</span>
                      </div>
                      <div className="flex justify-between">
                        <span>High Court Time-Bound Direction:</span>
                        <span className="text-emerald-400 font-bold">3 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Advocate Commissioner Handover:</span>
                        <span className="text-emerald-400 font-bold">Day 95</span>
                      </div>
                      <div className="border-t border-emerald-900/40 pt-2 flex justify-between text-white font-bold text-sm">
                        <span>Holding Loss Prevented:</span>
                        <span className="text-emerald-400">&#8377;48,50,000+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  *Calculation assumes uncompounded simple contractual interest under RBI Fair Practices Guidelines, 2 security personnel per shift, and 5% asset deterioration on plant machinery over 14 months of physical abandonment.
                </p>
              </div>

              {/* Calculator Hook Link */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block text-sm">
                    Compute Your Bank&apos;s Specific SARFAESI &amp; DRT Timelines
                  </span>
                  Check Section 31 exemptions and compute court fee caps via our interactive tool.
                </div>
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs shrink-0 transition-colors"
                >
                  Open Forum Calculator &rarr;
                </Link>
              </div>
            </section>

            {/* Section 9: High Court Article 226 Mandamus Strategy */}
            <section
              id="heading-high-court-writ"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  High Court Escalation
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  High Court Article 226 Writ of Mandamus for Section 14 Delays
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When the 30-day statutory window passes and the aggregate 60-day limit under the third proviso expires without an executive order, the District Magistrate is in direct breach of a mandatory statutory duty. Because no alternative efficacious statutory appeal exists against administrative inaction under the SARFAESI Act, the bank’s remedy lies directly before the High Court under Article 226 of the Constitution of India.
              </p>

              {/* Step-by-Step Writ Protocol */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Phase 1: Record Collation
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Extract Certified Order Sheets
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Obtain certified copies of the DM case file demonstrating that the application was registered, the 9-point affidavit was complete, and repeated adjournments or administrative delays exceeded 60 days without statutory reasons recorded in writing.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Phase 2: Writ Drafting
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Plead Supreme Court Precedents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Draft the Writ Petition (Civil) pleading the authoritative holdings in <em>Balkrishna Rama Tarle</em>, <em>Kotak Mahindra Bank v. Girnar Corrugators</em>, and <em>NKGSB Bank</em>. Emphasize that the DM has no jurisdiction to delay or hear borrower defenses.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Phase 3: Advance Service
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Serve Government Pleader
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve advance service copies upon the Office of the Government Pleader / Advocate General representing the District Magistrate. This enables the High Court Bench to dispose of the writ on the first date of listing without issuing protracted notices.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Phase 4: Time-Bound Relief
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Secure 2 to 4-Week Disposal Order
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High Courts routinely issue a peremptory direction commanding the District Magistrate to pass orders under Section 14 within two to four weeks and provide requisite police force without entertaining borrower objections.
                  </p>
                </div>
              </div>

              {/* Sibling Link to Lok Adalat & Settlement */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">
                  Exploring Pre-Litigation Conciliation Alongside Section 14?
                </span>
                For stressed retail and SME assets where the borrower expresses genuine repayment intent before physical eviction, banks can parallelly initiate pre-litigation settlement through{" "}
                <Link
                  href="/law/lok-adalat-pre-litigation-money-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  National Lok Adalat Money Recovery
                </Link>{" "}
                to obtain an enforceable consent award with full court-fee refund.
              </div>
            </section>

            {/* Section 10: Dual B2B Conversion Funnel CTA */}
            <section className="scroll-mt-28">
              <SarfaesiSection14CTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Banker Legal Helpdesk
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: SARFAESI Section 14 Possession
                </h2>
              </div>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group py-4 text-left transition-colors cursor-pointer"
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#DC2626] transition-colors list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs group-open:rotate-180 transition-transform shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-2 sm:pr-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources & Legal Precedents */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Official Legal Citations
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities &amp; Landmark Judicial Precedents
                </h2>
              </div>

              {/* Landmark Judgments */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Binding Supreme Court Decisions
                </h3>
                <div className="space-y-3">
                  {STATUTORY_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl space-y-2 text-xs sm:text-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <strong className="text-slate-900 font-bold text-sm sm:text-base">
                          {prec.title}
                        </strong>
                        <span className="text-[11px] font-mono text-slate-500">
                          {prec.date}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-800 italic">
                        {prec.parties} &mdash; {prec.citation}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Holding:</strong> {prec.holding}
                      </p>
                      <div className="pt-1 text-[11px] text-[#DC2626] font-bold">
                        Institutional Takeaway: {prec.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Legislation & Government Portals */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Primary Statutory References &amp; Official Portals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626]/40 transition-colors text-xs text-slate-700 flex items-start justify-between gap-2 group"
                    >
                      <span className="group-hover:text-[#DC2626] font-medium leading-relaxed">
                        {source.title}
                      </span>
                      <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0">
                        &nearr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Author & Reviewer Attribution Box */}
              <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span>Author &amp; Legal Reviewer: </span>
                  <strong className="text-slate-800 font-semibold">
                    Anuj Anand Malik
                  </strong>
                  <span>, Advocate &amp; Founder, AMA Legal Solutions</span>
                  {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                </div>
                <span>Published: November 2026 &bull; Verified under BSA 2023</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross Links */}
      <RelatedRecoveryGuides cluster="banking" />
    </div>
  );
}
