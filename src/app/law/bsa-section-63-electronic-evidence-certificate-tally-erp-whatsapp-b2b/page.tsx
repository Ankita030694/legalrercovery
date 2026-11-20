import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BsaSection63TableOfContents from "./BsaSection63TableOfContents";
import BsaSection63ScenarioTabs from "./BsaSection63ScenarioTabs";
import BsaSection63CTA from "./BsaSection63CTA";

export const revalidate = 86400;

const PAGE_PATH = "/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b";
const META_TITLE = "BSA Section 63 Certificate for Tally, SAP & WhatsApp";
const META_DESCRIPTION =
  "Filing an old Section 65B IEA affidavit in 2026 invites defense objections. Master BSA 2023 Section 63 Part-A & Part-B Schedule & SHA-256 hash rules.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("BSA 2023 Section 63 Electronic Evidence Certificate Guide"),
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
      "Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023, effective 1 July 2024 — Sections 2(1)(d), 57, 61, 62, 63, 170 & The Schedule Part A and Part B)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Information Technology Act, 2000 (Sections 2(1)(t), 4, 5, 13 & Section 79A — Examiner of Electronic Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title:
      "Commercial Courts Act, 2015 & Code of Civil Procedure, 1908 (Order XI Rule 6 — Electronic Records Disclosure & Statement of Truth)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "Supreme Court of India: Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1 (3-Judge Bench on Mandatory Certificate & Primary vs Secondary Electronic Record)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "Supreme Court of India: Anvar P.V. v. P.K. Basheer, (2014) 10 SCC 473 (Special Law Overriding General Secondary Evidence Rules)",
    url: "https://main.sci.gov.in/",
  },
];

const COMPARISON_ROWS = [
  {
    parameter: "Governing Statute & Effective Date",
    iea65b: "Section 65B, Indian Evidence Act, 1872 (Repealed w.e.f. 1 July 2024 via BSA s.170).",
    bsa63: "Section 63, Bharatiya Sakshya Adhiniyam (BSA), 2023 (Mandatory for all suits/petitions instituted on or after 1 July 2024).",
  },
  {
    parameter: "Prescribed Statutory Format",
    iea65b: "No statutory form prescribed in the Act; litigants drafted custom affidavits or loose declarations.",
    bsa63: "Mandatory two-part statutory form in The Schedule to BSA 2023: Part A (Party/Custodian) + Part B (Expert/IT Hash Certification).",
  },
  {
    parameter: "Cryptographic Hash Value Requirement",
    iea65b: "Silent on cryptographic hashing; filename or printout description sufficed in routine filings.",
    bsa63: "Expressly requires recording the exact Hash Value (SHA-256, SHA-1, MD5, or equivalent standard algorithm) and hash function used.",
  },
  {
    parameter: "Dual-Signatory Structure (Part A + Part B)",
    iea65b: "Single person in lawful control of the computer system signed the entire certificate.",
    bsa63: "Part A is signed by the person in control/management (AR Manager/CFO); Part B is certified by an Expert/IT Custodian verifying the hash & device.",
  },
  {
    parameter: "Scope of Devices Covered",
    iea65b: "Referred to 'computer' and 'computer output' (narrower phrasing requiring judicial extension to servers/clouds).",
    bsa63: "Explicitly covers 'any communication device' and 'semiconductor memory'—directly encompassing smartphones, cloud ERPs, SaaS, and WhatsApp.",
  },
  {
    parameter: "Primary Electronic Evidence Expansion",
    iea65b: "Primary evidence limited to original physical/master storage under s.62 IEA.",
    bsa63: "BSA s.57 Explanations 4–7 classify simultaneous/distributed/automated cloud copies & video recordings as Primary Evidence when duly stored.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "3-Judge Bench on Mandatory Certificate & Primary vs Secondary Distinction",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal & Ors.",
    citation: "(2020) 7 SCC 1, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 14 July 2020",
    facts:
      "In an election petition challenging nomination timing, video recordings from Returning Officer CCTV cameras were relied upon without a valid Section 65B(4) certificate because the authorities failed to furnish it despite repeated written requests.",
    holding:
      "The Supreme Court settled the conflict definitively: a certificate under Section 65B(4) (now Section 63(4) BSA) is a mandatory condition precedent to the admissibility of secondary electronic evidence. However, if the original electronic device/server itself is produced as primary evidence, no certificate is needed. Crucially, the Court clarified that the certificate need not always be filed at the very threshold—Courts can grant leave to file it before trial/marking of exhibits if the omission was inadvertent or an authority refused cooperation.",
    amount: "Condition Precedent for Secondary Copies — Curable Before Exhibit Marking",
    takeaway:
      "If your counsel inadvertently filed an old 65B affidavit in a 2025/2026 commercial suit, immediately seek leave of the Court to replace it with a BSA Section 63 Part A + Part B certificate before issues are framed or evidence is tendered.",
  },
  {
    title: "Foundational Rule: Electronic Evidence Governed Exclusively by Special Provision",
    parties: "Anvar P.V. v. P.K. Basheer & Ors.",
    citation: "(2014) 10 SCC 473, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 18 September 2014",
    facts:
      "CDs containing recorded speeches were produced in court without an accompanying electronic evidence certificate, and the party attempted to prove them through oral testimony under general secondary evidence rules (Sections 63 and 65 IEA).",
    holding:
      "Overruling State (NCT of Delhi) v. Navjot Sandhu, the Supreme Court held that electronic records are governed by a complete code in Section 65B (now Sections 62 and 63 of BSA 2023). Oral evidence cannot substitute for the statutory certificate when proving a printout, PDF, or copied electronic extract.",
    amount: "Oral Testimony Cannot Cure Missing Electronic Certificate",
    takeaway:
      "An Accounts Receivable Manager stepping into the witness box cannot orally 'verify' a Tally ledger printout or WhatsApp screenshot. Without a compliant BSA s.63 certificate, the document is legally inadmissible.",
  },
  {
    title: "Overruling of 'Party Not in Possession' Relaxation & Device Control Duty",
    parties: "Shafhi Mohammad v. State of Himachal Pradesh (Overruled by Arjun Panditrao)",
    citation: "(2018) 2 SCC 801 -> Overruled in (2020) 7 SCC 1",
    date: "Clarified 14 July 2020",
    facts:
      "A two-judge bench in Shafhi Mohammad had suggested that a party who is not in possession of the electronic device from which a document was produced could be exempted from filing a certificate.",
    holding:
      "The three-judge bench in Arjun Panditrao Khotkar expressly overruled Shafhi Mohammad, holding that the statutory mandate cannot be diluted merely on grounds of inconvenience. A party needing third-party electronic data (such as telecom CDRs, bank server logs, or GSTN backend logs) must apply to the Court/Tribunal to summon the third-party custodian under the relevant procedural code.",
    amount: "No Blanket Exemption for Third-Party Cloud / Portal Records",
    takeaway:
      "For GSTN, NIC E-Way Bill, and MCA portal records downloaded on your company's terminal, your AR Head & IT Admin certify the download device and SHA-256 hash—never assume 'public portal' status exempts BSA s.63.",
  },
];

const DEFENSE_PREEMPTION_ROWS = [
  {
    objection: "Outdated 'Section 65B IEA' Title on Certificate",
    statute: "BSA 2023 s.63 & s.170",
    preemption:
      "Use the exact statutory heading 'Certificate under Section 63(4) of the Bharatiya Sakshya Adhiniyam, 2023 (Read with The Schedule — Part A & Part B)' for all proceedings instituted on or after 1 July 2024.",
  },
  {
    objection: "Missing SHA-256 / Hash Value in Part B",
    statute: "BSA 2023 Schedule (Part B)",
    preemption:
      "Generate a 64-character SHA-256 digest for every PDF ledger, E-Way Bill, .eml email, and .zip WhatsApp export before filing. List filename, byte size, hash algorithm, and exact hex string in an annexure table.",
  },
  {
    objection: "Single Signatory Claiming Both Operational & IT Control",
    statute: "BSA 2023 Schedule (Part A & B)",
    preemption:
      "Split execution cleanly: AR Manager / CFO signs Part A (business custody & lawful control) and IT Admin / External Forensic Expert signs Part B (device integrity & hash verification). In SMEs without separate IT staff, explicitly record dual role & technical competence in Part B.",
  },
  {
    objection: "Cropped WhatsApp Screenshots Without Phone/IMEI Data",
    statute: "BSA 2023 s.63(2) & (4)",
    preemption:
      "Export the full WhatsApp chat (.txt/.zip) alongside full-screen captures showing the debtor's mobile number, date/time, and blue ticks. Record handset model, OS version, SIM number, and IMEI in Part A.",
  },
  {
    objection: "Edited Excel / CSV Ledger Extracts Instead of Native ERP PDFs",
    statute: "BSA 2023 s.28 & s.63",
    preemption:
      "Export locked PDF/A statements directly from TallyPrime, SAP, or Zoho Books. Never run manual formulas or re-type rows in Excel before hashing, as defense counsel will allege post-export manipulation.",
  },
  {
    objection: "Unverified Email Forward Printouts (Missing SMTP Headers)",
    statute: "BSA 2023 s.63 & IT Act s.13",
    preemption:
      "Preserve raw .eml or .msg files containing SMTP Message-ID, SPF/DKIM pass headers, and recipient timestamps. Hash the .eml file itself rather than only a printed PDF of the email body.",
  },
];

const AUDIT_CHECKLIST = [
  {
    id: "chk-1",
    title: "1. Verify Filing Date Under BSA s.170",
    description:
      "Confirm whether the suit, NCLT petition, or arbitration commenced on or after 1 July 2024. All post-transition filings require BSA s.63.",
  },
  {
    id: "chk-2",
    title: "2. Lock Native ERP Exports (No Excel Edits)",
    description:
      "Export party ledgers and tax invoices directly from TallyPrime, SAP, or Zoho Books as PDFs without manual post-export editing.",
  },
  {
    id: "chk-3",
    title: "3. Preserve Raw .eml & WhatsApp .txt Exports",
    description:
      "Archive raw .eml/.msg email notice files (with SMTP headers) and full WhatsApp chat exports alongside full-frame screenshots.",
  },
  {
    id: "chk-4",
    title: "4. Download Official GSTN & E-Way PDFs",
    description:
      "Pull GSTR-1, GSTR-2B/3B summaries, and Form EWB-01 E-Way Bills directly from government portals with download timestamps.",
  },
  {
    id: "chk-5",
    title: "5. Compute SHA-256 Hash for Every File",
    description:
      "Run PowerShell Get-FileHash or sha256sum on each exhibit file to generate a tamper-evident 64-character hexadecimal digest.",
  },
  {
    id: "chk-6",
    title: "6. Draft Schedule Part A (AR / CFO Signatory)",
    description:
      "Detail normal business operation, device custody, lawful control, and absence of malfunction in Part A of the statutory Schedule.",
  },
  {
    id: "chk-7",
    title: "7. Draft Schedule Part B (IT / Expert Signatory)",
    description:
      "Record the exact device identifiers, hash algorithm (SHA-256), and complete hash table in Part B signed by the IT custodian or expert.",
  },
  {
    id: "chk-8",
    title: "8. Include Device IMEI & Server Identifiers",
    description:
      "Document smartphone IMEI/model for WhatsApp evidence and server hostname/ERP instance ID for Tally/SAP ledgers.",
  },
  {
    id: "chk-9",
    title: "9. Pair with Order XI Rule 6 CPC Declaration",
    description:
      "In Commercial Courts, align BSA s.63 Part A/B particulars with the mandatory Order XI Rule 6 electronic records disclosure list.",
  },
  {
    id: "chk-10",
    title: "10. Store Master Hash Archive Read-Only",
    description:
      "Retain an unaltered read-only copy of all hashed files so the original digital exhibit matches the Part B digest during trial.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Did Section 63 of BSA 2023 completely replace Section 65B of the Indian Evidence Act?",
    answer:
      "Yes. With the Bharatiya Sakshya Adhiniyam (BSA), 2023 coming into force on 1 July 2024, the Indian Evidence Act, 1872 was repealed under Section 170 of the BSA. Section 63 of the BSA replaces Section 65B for all suits, NCLT insolvency petitions, criminal complaints (such as NI Act s.138), and arbitrations instituted on or after 1 July 2024.",
  },
  {
    question: "What is the difference between Part A and Part B of the BSA Section 63 Schedule?",
    answer:
      "Unlike old Section 65B which had no statutory template, BSA 2023 appends a mandatory Schedule split into two parts. Part A is executed by the party/officer in lawful control of the device or ERP system (such as the Accounts Receivable Head or CFO) confirming regular business operation and output accuracy. Part B is executed by an Expert or IT Custodian certifying the cryptographic Hash Value (such as SHA-256 or MD5) and device/server integrity.",
  },
  {
    question: "Is a SHA-256 hash value mandatory in a BSA Section 63 certificate?",
    answer:
      "Yes. Part B of The Schedule under Section 63(4) of BSA 2023 expressly contains fields for the 'Hash value' and the 'Hash function' (algorithm) used, such as SHA-256, SHA-1, or MD5. Filing a certificate in a commercial suit without documenting the cryptographic hash value invites immediate defense objections that the statutory Schedule was not complied with.",
  },
  {
    question: "Who should sign Part B if an MSME or mid-sized B2B company has no in-house IT department?",
    answer:
      "In large enterprises, the internal IT Administrator, CISO, or an external Section 79A IT Act Examiner / digital forensics expert signs Part B. For MSMEs or proprietorships without a dedicated IT team, either an external IT consultant/CA who manages the Tally server or a technically competent officer who extracted the file and verified the SHA-256 hash can sign Part B, explicitly stating their technical role and hash verification method.",
  },
  {
    question: "How do I prove WhatsApp blue-tick legal notices and chats under BSA Section 63?",
    answer:
      "Export the complete WhatsApp chat thread (.txt/.zip) using the 'Export Chat' feature and capture uncropped screenshots showing the debtor's registered mobile number, timestamp, and double blue ticks. Compute the SHA-256 hash of both the exported chat file and screenshots, record the smartphone make, model, SIM number, and IMEI in Part A, and certify the hash in Part B.",
  },
  {
    question: "Can we cure an old 'Section 65B IEA' affidavit already filed in a 2025 or 2026 commercial suit?",
    answer:
      "Yes, in most cases. Relying on the Supreme Court's 3-Judge Bench ruling in Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) 7 SCC 1, an electronic evidence certificate is a curable procedural requirement prior to the marking of exhibits at trial. Your counsel can file an application seeking leave to place a fresh, compliant BSA Section 63 Part A + Part B certificate on record.",
  },
  {
    question: "Do TallyPrime, SAP, and Zoho Books ledgers still need a BSA Section 63 certificate?",
    answer:
      "Yes, whenever you file PDF exports or paper printouts of your TallyPrime, SAP, or Zoho Books party ledger in court or NCLT, those printouts are secondary electronic records requiring a BSA Section 63(4) Part A + Part B certificate—unless the native server/database itself is produced for direct inspection as primary evidence under Section 57.",
  },
];

export default function BsaSection63Page() {
  const pageTitle =
    "Replacing Old 65B Affidavits: How B2B Creditors Certify Tally/SAP Ledgers, E-Way Bills, Emails & WhatsApp Chats Under Section 63 of BSA, 2023";
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  const breadcrumbItems = [
    { label: "B2B Debt Recovery", href: "/b2b-debt-recovery-india" },
    { label: "BSA Section 63 Certificate Guide", href: PAGE_PATH },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: META_DESCRIPTION,
    url: pageUrl,
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const FAQ_SCHEMA = {
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
        name: "B2B Debt Recovery",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "BSA Section 63 Certificate Guide",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>BSA 2023 &bull; SECTION 63(4)</span>
              <span>&bull;</span>
              <span>SCHEDULE PART A + PART B</span>
              <span>&bull;</span>
              <span>SHA-256 B2B EVIDENCE GUIDE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {pageTitle}
            </h1>

            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Summary
              </span>
              Under Section 63(4) of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing repealed Section 65B of the Indian Evidence Act), B2B creditors must certify Tally/SAP ledgers, GST E-Way Bills, emails, and WhatsApp chats using the mandatory two-part statutory Schedule: <strong>Part A</strong> signed by the AR Manager/CFO and <strong>Part B</strong> signed by an IT Custodian/Expert recording the <strong>SHA-256 hash value</strong>. Explore our{" "}
              <Link
                href="/b2b-debt-recovery-india"
                className="text-red-400 font-semibold underline underline-offset-2 hover:text-red-300 transition-colors"
              >
                Enterprise B2B Debt Recovery Hub
              </Link>{" "}
              to align digital evidence with Commercial Court, Order XXXVII, and NCLT filings.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Governing Law
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-100 mt-1 block">
                  BSA s.63
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  In force since 1 July 2024
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Statutory Format
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">
                  Part A + B
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Party Custody + IT Expert Hash
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Hash Standard
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 mt-1 block">
                  SHA-256
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  64-char cryptographic digest
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Legacy 65B Risk
                </span>
                <span className="text-xl sm:text-2xl font-black text-red-400 mt-1 block">
                  Inadmissible
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Without Part B hash compliance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <BsaSection63TableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Why Old 65B Fails */}
              <section
                id="heading-why-65b-fails"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Why Old Section 65B Affidavits Fail in 2026 Commercial Suits
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Across India&rsquo;s Commercial Courts, Debt Recovery Tribunals (DRTs), and National Company Law Tribunal (NCLT) benches, B2B creditors win or lose summary recovery on the strength of their digital paper trail. Every commercial claim relies on electronic outputs: a TallyPrime or SAP S/4HANA party ledger, GST portal GSTR-1/2B filings, NIC E-Way Bills, SMTP email demand notices, and WhatsApp delivery acknowledgments. Yet many corporate legal teams still annex outdated &ldquo;Section 65B Indian Evidence Act&rdquo; templates downloaded from legacy portals.
                  </p>
                  <p>
                    Following the enactment of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (effective 1 July 2024), Section 170 formally repealed the Indian Evidence Act, 1872 for all newly instituted proceedings. Unlike the repealed Section 65B—which left litigants free to draft single-page self-serving affidavits—<strong>Section 63(4) of BSA 2023</strong> binds every creditor to a strict statutory template in <strong>The Schedule</strong>. Any creditor managing{" "}
                    <Link
                      href="/recovery-of-unpaid-dues-for-my-business"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      unpaid business dues and corporate receivables
                    </Link>{" "}
                    who files a legacy 65B affidavit without Part B hash certification hands defense counsel an effortless technical objection to block interim attachment or leave-to-defend rulings.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                      <h3 className="font-bold text-[#DC2626] text-sm mb-1.5">
                        The 2026 Defense Trap: Repealed Statute Citation
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Defaulters routinely file preliminary objections under Order XI Rule 6 CPC and BSA s.63 arguing that ERP printouts accompanied by a repealed &ldquo;s.65B IEA&rdquo; affidavit lack Part B expert hash verification and cannot be read into evidence at the Order XXXVII or summary judgment stage.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                      <h3 className="font-bold text-emerald-800 text-sm mb-1.5">
                        The Institutional Advantage: Tamper-Proof Admissibility
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        When your Accounts Receivable desk pairs Part A (operational custody) with Part B (SHA-256 hash verification) at the pre-litigation notice stage via{" "}
                        <Link
                          href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                          className="text-emerald-800 font-semibold underline"
                        >
                          tri-channel Email, WhatsApp &amp; Speed Post dispatch
                        </Link>
                        , debtors lose technical leverage and settle faster.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Comparison Table */}
              <section
                id="heading-65b-vs-bsa63"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    IEA Section 65B vs. BSA 2023 Section 63: Statutory Matrix
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  While BSA Section 63 retains the core functional-equivalence philosophy of Section 65B, Parliament introduced four decisive structural upgrades covering statutory forms, cryptographic hashing, dual signatories, and modern communication devices:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700 w-1/4">
                          Evidentiary Parameter
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700 w-3/8">
                          Old Section 65B (IEA, 1872)
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700 w-3/8">
                          New Section 63 (BSA, 2023)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">
                            {row.parameter}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-600 leading-relaxed align-top">
                            {row.iea65b}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-800 font-medium leading-relaxed align-top">
                            {row.bsa63}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Workflow SVG Diagram */}
              <section
                id="heading-workflow-diagram"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    4-Stage BSA Section 63 Part A + Part B Certification Workflow
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  To ensure Commercial Court, NCLT, or Arbitral Tribunal admissibility without evidentiary hiccups, B2B credit teams should execute this four-step chain of custody before serving final demand or filing suit:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6">
                  <svg
                    width="820"
                    height="210"
                    viewBox="0 0 820 210"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    role="img"
                    aria-label="4-Stage BSA Section 63 Electronic Evidence Certification Workflow"
                  >
                    {/* Step 1 */}
                    <rect x="10" y="25" width="175" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="38" cy="52" r="14" fill="#DC2626" />
                    <text x="38" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">1</text>
                    <text x="62" y="56" fill="#F8FAFC" fontSize="12" fontWeight="700">NATIVE EXPORT</text>
                    <text x="24" y="88" fill="#CBD5E1" fontSize="11">Export Tally/SAP PDF,</text>
                    <text x="24" y="106" fill="#CBD5E1" fontSize="11">E-Way Bill, .eml &amp;</text>
                    <text x="24" y="124" fill="#CBD5E1" fontSize="11">WhatsApp .txt without</text>
                    <text x="24" y="142" fill="#CBD5E1" fontSize="11">manual Excel edits.</text>

                    {/* Arrow 1->2 */}
                    <path d="M188 100 H218" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M212 94 L220 100 L212 106" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Step 2 */}
                    <rect x="222" y="25" width="175" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="250" cy="52" r="14" fill="#D97706" />
                    <text x="250" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">2</text>
                    <text x="274" y="56" fill="#F8FAFC" fontSize="12" fontWeight="700">SHA-256 HASH</text>
                    <text x="236" y="88" fill="#CBD5E1" fontSize="11">Generate 64-char</text>
                    <text x="236" y="106" fill="#CBD5E1" fontSize="11">SHA-256 digest via</text>
                    <text x="236" y="124" fill="#CBD5E1" fontSize="11">Get-FileHash or</text>
                    <text x="236" y="142" fill="#CBD5E1" fontSize="11">sha256sum utility.</text>

                    {/* Arrow 2->3 */}
                    <path d="M400 100 H430" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M424 94 L432 100 L424 106" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Step 3 */}
                    <rect x="434" y="25" width="175" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="462" cy="52" r="14" fill="#059669" />
                    <text x="462" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">3</text>
                    <text x="486" y="56" fill="#F8FAFC" fontSize="12" fontWeight="700">PART A SIGNING</text>
                    <text x="448" y="88" fill="#CBD5E1" fontSize="11">AR Head / CFO signs</text>
                    <text x="448" y="106" fill="#CBD5E1" fontSize="11">Schedule Part A on</text>
                    <text x="448" y="124" fill="#CBD5E1" fontSize="11">business custody &amp;</text>
                    <text x="448" y="142" fill="#CBD5E1" fontSize="11">device control.</text>

                    {/* Arrow 3->4 */}
                    <path d="M612 100 H642" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M636 94 L644 100 L636 106" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Step 4 */}
                    <rect x="646" y="25" width="164" height="150" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                    <circle cx="674" cy="52" r="14" fill="#DC2626" />
                    <text x="674" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">4</text>
                    <text x="698" y="56" fill="#F8FAFC" fontSize="12" fontWeight="700">PART B EXPERT</text>
                    <text x="660" y="88" fill="#CBD5E1" fontSize="11">IT Admin / Expert</text>
                    <text x="660" y="106" fill="#CBD5E1" fontSize="11">signs Part B locking</text>
                    <text x="660" y="124" fill="#CBD5E1" fontSize="11">device ID &amp; SHA-256</text>
                    <text x="660" y="142" fill="#CBD5E1" fontSize="11">hash into record.</text>
                  </svg>
                </div>

                {/* Mobile Stacked Workflow Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                  {[
                    { num: "1", title: "Native Export", desc: "Export Tally/SAP PDFs, E-Way Bills, .eml files & WhatsApp .txt without manual Excel edits." },
                    { num: "2", title: "SHA-256 Hash", desc: "Generate a 64-char SHA-256 digest for each file using PowerShell Get-FileHash or sha256sum." },
                    { num: "3", title: "Part A Signing", desc: "AR Head / CFO signs Schedule Part A confirming ordinary course of business and lawful control." },
                    { num: "4", title: "Part B Expert", desc: "IT Admin / Forensic Expert signs Part B certifying the device identifiers and SHA-256 hash table." },
                  ].map((item) => (
                    <div key={item.num} className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-xs font-bold mb-2">
                        {item.num}
                      </span>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: The Schedule Breakdown & SHA-256 */}
              <section
                id="heading-schedule-sha256"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Decoding Part A, Part B &amp; Mandatory SHA-256 Hash Rules
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Section 63(4) of the Bharatiya Sakshya Adhiniyam, 2023 requires that a certificate identifying the electronic record, describing the manner of its production, and giving particulars of the device involved must be <strong>submitted in the form specified in The Schedule</strong>. That Schedule is divided into two distinct legal declarations:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white mb-2">
                        Schedule &bull; Part A
                      </span>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        To Be Filled by the Party (AR Manager / CFO)
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        <li>&bull; Name, designation, and identity of the authorized party producing the record.</li>
                        <li>&bull; Description of the electronic record (e.g., Tally Ledger, Form EWB-01, WhatsApp chat).</li>
                        <li>&bull; Statement that the computer/communication device was regularly used to store or process information during ordinary business activities.</li>
                        <li>&bull; Confirmation that the device operated properly during the material period, or that any brief malfunction did not affect record accuracy.</li>
                        <li>&bull; Device details: Make, Model, Serial Number / IMEI / Server Instance ID.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl border border-red-200 bg-red-50/40">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#DC2626] text-white mb-2">
                        Schedule &bull; Part B
                      </span>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        To Be Filled by the Expert / IT Custodian
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        <li>&bull; Name, qualification, and role of the IT Administrator, System Custodian, or Section 79A IT Act Expert.</li>
                        <li>&bull; Confirmation of the exact <strong>Hash Value</strong> (e.g., 64-character SHA-256 hex string) for each electronic file.</li>
                        <li>&bull; Specification of the <strong>Hash Function</strong> applied (SHA-256 is strongly preferred over legacy MD5/SHA-1).</li>
                        <li>&bull; Verification that the digital output matches the source file stored on the enterprise server or mobile device without alteration.</li>
                        <li>&bull; Date, place, and signature of the technical certifier alongside Part A.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                      Practical Command: Generating a Verifiable SHA-256 Hash in 3 Seconds
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-3">
                      Your IT Administrator or Finance Controller does not need expensive forensic software to compute a court-verifiable SHA-256 hash. Built-in OS utilities generate the exact 64-character digest:
                    </p>
                    <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-emerald-400 overflow-x-auto font-mono">
                      {`# Windows PowerShell:\nGet-FileHash -Path "C:\\Evidence\\Debtor_Tally_Ledger.pdf" -Algorithm SHA256\n\n# macOS / Linux Terminal:\nsha256sum Debtor_Tally_Ledger.pdf`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* Section 5: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <BsaSection63ScenarioTabs />
              </section>

              {/* Section 6: Supreme Court Precedents */}
              <section
                id="heading-sc-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Supreme Court Precedents Governing Electronic Certificates
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Because BSA Section 63 re-enacts the foundational admissibility condition of Section 65B(4) while adding the statutory Schedule, Supreme Court jurisprudence from <em>Anvar P.V.</em> and <em>Arjun Panditrao Khotkar</em> continues to govern commercial litigation strategy:
                </p>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((caseItem, idx) => (
                    <article
                      key={idx}
                      className="relative pl-5 pr-4 py-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                          {caseItem.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {caseItem.date}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                        {caseItem.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-600 mb-3">{caseItem.parties}</p>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong>Facts:</strong> {caseItem.facts}
                        </p>
                        <p>
                          <strong>Holding:</strong> {caseItem.holding}
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">
                          {caseItem.amount}
                        </span>
                        <p className="text-xs text-slate-700 font-medium">
                          <strong>Creditor Takeaway:</strong> {caseItem.takeaway}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Defense Objection Pre-Emption Matrix */}
              <section
                id="heading-defense-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Debtor Defense Objections &amp; BSA s.63 Pre-Emption Matrix
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Use this pre-filing matrix to neutralize the six most common evidentiary objections raised by corporate debtors in Order XXXVII summary suits, Commercial Courts, and NCLT Section 9 hearings:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700 w-1/4">
                          Defense Objection
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700 w-1/5">
                          Statutory Hook
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold border-b border-slate-700">
                          Creditor Pre-Emption Protocol
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DEFENSE_PREEMPTION_ROWS.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">
                            {row.objection}
                          </td>
                          <td className="p-3.5 sm:p-4 font-semibold text-[#DC2626] align-top">
                            {row.statute}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed align-top">
                            {row.preemption}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: 10-Point Checklist & Connected Recovery Tools */}
              <section
                id="heading-audit-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    10-Point BSA Section 63 Pre-Filing Audit Checklist
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Before your litigation counsel files a plaint, summary suit, or insolvency petition, verify all ten compliance checkpoints across your Accounts Receivable and IT teams:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {AUDIT_CHECKLIST.map((chk) => (
                    <div
                      key={chk.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all"
                    >
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                          &check;
                        </span>
                        {chk.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{chk.description}</p>
                    </div>
                  ))}
                </div>

                {/* Connected Tools, Templates & Sibling Spokes */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Connected B2B Recovery Tools, Templates &amp; Sibling Statutory Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <Link
                      href="/tools/limitation-period-calculator"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      3-Year Limitation Period Calculator &rarr;
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      MSME Compound Interest Calculator &rarr;
                    </Link>
                    <Link
                      href="/templates/msme-delayed-payment-demand-notice"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      MSME Delayed Payment Notice Format &rarr;
                    </Link>
                    <Link
                      href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      IBC Section 8 Demand Notice (Form 3/4) &rarr;
                    </Link>
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      Order XXXVII CPC Summary Suit Guide &rarr;
                    </Link>
                    <Link
                      href="/reports/legal-notice-outcomes-study"
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] transition-colors font-semibold text-slate-800 hover:text-[#DC2626]"
                    >
                      Legal Notice Outcomes Empirical Study &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 9: Dual B2B CTA Action Desk */}
              <section id="heading-action-desk" className="scroll-mt-28">
                <BsaSection63CTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions: BSA Section 63 Certificates
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3 select-none">
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Citations &amp; Supreme Court Authorities
                  </h2>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  All statutory commentary, Part A &amp; Part B Schedule workflows, and defense pre-emption protocols in this guide are derived from primary Indian legislation and binding Supreme Court precedent:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                  <span>
                    Authored &amp; Vetted by: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                  </span>
                  <span>Last Verified: November 2026 &bull; CORE-26 Enterprise B2B Recovery</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
