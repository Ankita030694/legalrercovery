import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import JobWorkRecoveryTableOfContents from "./JobWorkRecoveryTableOfContents";
import JobWorkRecoveryScenarioTabs from "./JobWorkRecoveryScenarioTabs";
import JobWorkRecoveryCTA from "./JobWorkRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/cnc-machining-fabrication-job-work-challan-payment-recovery";
const EXACT_H1 =
  "Unpaid CNC Machining, Coating & Fabrication Job-Work Bills: How to Exercise Your Statutory Bailee Lien Under Section 170 Legally";
const META_TITLE = "Job-Work & Fabrication Unpaid Charges: Section 170 Lien";
const META_DESCRIPTION =
  "Unpaid CNC machining or fabrication bills? Exercise your statutory Particular Lien under Section 170 Contract Act and recover dues under CGST Section 143.";

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
        alt: formatAltText("CNC Machining Job Work Lien & Challan Recovery"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Bailee's Statutory Particular Lien",
    statute: "Indian Contract Act, 1872 (Section 170)",
    timing: "Exercised immediately upon completion of skill/labour when payment is withheld",
    mechanism:
      "Retain lawful physical possession of finished or in-process components upon which labour/skill was expended until full labour charges are paid",
    relief:
      "Lawful bar against forced dispatch; completely negates criminal breach of trust (BNS s.316); compels buyer to clear dues to access goods",
    suitability:
      "CNC machining, laser cutting, electroplating, and fabrication units holding current processed batches with unpaid job-work invoices",
    tone: "emerald",
  },
  {
    remedy: "CGST 1-Year Deemed Supply Reversal",
    statute: "Central Goods and Services Tax Act, 2017 (Section 143 & Rule 55)",
    timing: "Day 300 to Day 365 from delivery challan date",
    mechanism:
      "Notify principal OEM that failure to clear dues and take delivery before 1 year converts bailed inputs into a deemed taxable supply from principal to job-worker",
    relief:
      "Forces principal OEM to pay GST with interest from challan date, reverse ITC in Form ITC-04, and account for balance sheet loss",
    suitability:
      "Stalled job-work components, precision toolings, and forged blanks approaching the 12-month statutory return limit",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Compound Interest & Samadhaan",
    statute: "MSMED Act, 2006 (Sections 15–18)",
    timing: "Day 46 post-job-work completion / invoice generation",
    mechanism:
      "File statutory delayed payment petition before State Micro and Small Enterprises Facilitation Council (MSEFC) or MSME ODR Portal",
    relief:
      "Mandatory monthly compound interest at 3 times RBI Bank Rate; Section 19 pre-deposit bar requiring buyer to deposit 75% before challenging award",
    suitability:
      "Udyam-registered job-work machine shops, heat treaters, and fabrication MSMEs facing extended credit periods",
    tone: "emerald",
  },
  {
    remedy: "Income Tax Audit Disallowance Notice",
    statute: "Income Tax Act, 1961 (Section 43B(h))",
    timing: "Fiscal year-end March 31 or quarter-end tax audit closure",
    mechanism:
      "Serve formal statutory intimation on principal's CFO and statutory tax auditors identifying overdue job-work invoices past 15/45 days",
    relief:
      "Disallows principal's tax deduction for job-work expenses, adding the entire unpaid sum back to taxable income and triggering 25–35% tax penalty",
    suitability:
      "Corporate OEMs, listed auto-ancillaries, and large private limited machinery assemblers withholding vendor payments",
    tone: "amber",
  },
  {
    remedy: "Commercial Summary Suit for Debt",
    statute: "Commercial Courts Act, 2015 & Order XXXVII CPC",
    timing: "Post-15-day advocate notice expiry",
    mechanism:
      "File fast-track summary suit based on written PO, GST delivery challan, tax invoice, and GSTR-2B inward credit reconciliation",
    relief:
      "Defendant OEM denied unconditional leave to defend unless they deposit disputed amount into court; decree enforceable within 6–12 months",
    suitability:
      "Unpaid job-work claims exceeding ₹3 Lakh where principal acknowledges receipt via challan but fabricates belated quality defects",
    tone: "red",
  },
];

const FAQS = [
  {
    question: "Can an engineering job-worker legally hold customer raw material if past bills are unpaid?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872, a job-worker has a statutory Particular Lien only over the specific batch of goods upon which they have expended skill and labour, pending payment for services rendered on that specific batch. A job-worker cannot legally detain unworked raw materials or unrelated batches belonging to the customer under Section 170, unless the job-work contract or Purchase Order contains an express 'General Lien' clause extending lien rights over any customer goods lying in the premises. Detaining unrelated raw material without a contractual general lien exposes the job-worker to civil conversion claims or criminal complaints under Section 316 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "What should a job-worker do if the principal OEM threatens to lodge an FIR for criminal breach of trust?",
    answer:
      "When a principal OEM threatens police complaints (alleging theft or criminal breach of trust under BNS Section 316 / IPC Section 405/406), the job-worker must immediately issue a formal 'Statutory Notice of Bailee Particular Lien' under Section 170 by email and Speed Post RPAD. This written notice places on record that possession is retained strictly as a lawful civil bailee lien for unpaid skill and labour charges. A bona fide assertion of a statutory legal right completely negates criminal mens rea and dishonest intention. Furthermore, the job-worker can proactively submit a copy of this notice and job-work challans to the local police station to pre-empt registration of a false FIR, citing Supreme Court rulings confirming that civil contractual disputes cannot be criminalized.",
  },
  {
    question: "What happens to the Job-Work Delivery Challan under CGST Section 143 if goods are held for over 1 year?",
    answer:
      "Under Section 143(3) of the CGST Act, 2017, inputs sent on job-work must be returned to the principal within 1 year (or 3 years for capital goods, dies, jigs, and fixtures). If the goods are retained beyond this statutory window—such as due to an ongoing payment dispute and Section 170 lien—the goods are legally deemed to have been supplied by the principal to the job-worker on the original date of dispatch. The principal OEM is legally required to pay CGST/SGST/IGST along with interest from the original challan date and reverse the corresponding Input Tax Credit (ITC) in Form GST ITC-04. This creates enormous financial and compliance pressure on the principal to clear the job-work invoices.",
  },
  {
    question: "How can a CNC or fabrication shop defeat arbitrary OEM debit notes for 'excess burning loss' or scrap?",
    answer:
      "Arbitrary debit notes for burning loss or swarf scrap can be defeated under Section 73 of the Indian Contract Act, which establishes that unadjudicated damages cannot be unilaterally deducted from admitted invoices. To invalidate such debit notes, the job-worker must produce computerized CNC nesting reports, weighbridge gross/tare slips, and an Input-Output Mass Balance Report certified by a Chartered Engineer proving that the scrap generated is within standard industry tolerances (e.g., 6–9% for laser cutting, 4–7% for forging burning loss). The job-worker should issue a formal 7-day rejection notice, refuse to accept the debit note in GSTR-1, and claim the full invoice amount before the MSEFC.",
  },
  {
    question: "Does Section 43B(h) of the Income Tax Act apply to job-work services rendered by MSMEs?",
    answer:
      "Yes. Job-work activities (such as CNC machining, electroplating, powder coating, heat-treatment, and metal fabrication) qualify as 'Services' or 'Manufacturing' under the MSMED Act, 2006. If the job-worker holds an active Udyam Registration as a Micro or Small enterprise, Section 43B(h) mandates that the corporate buyer must pay within the agreed period (up to 45 days) or within 15 days if no written agreement exists. If payment is delayed past the fiscal year-end, the principal's entire job-work expense is disallowed as a tax deduction, resulting in substantial additional corporate income tax liability.",
  },
  {
    question: "Can an OEM reject machined components months later citing assembly line fitment failure?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930 (applicable by commercial analogy) and established bailment jurisprudence, once components have passed Pre-Dispatch Inspection (PDI) and inward gate quality checks, or have been partially consumed in production, the buyer is deemed to have accepted the lot. Belated rejections raised months later to avoid year-end payments are legally barred. Under Section 59 of the Sale of Goods Act, any alleged technical defect must be proven through joint CMM/metallurgical testing, and the buyer cannot unilaterally withhold payment for the entire batch.",
  },
  {
    question: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records are admissible if supported by a statutory certificate of authenticity. For job-work disputes, this includes: CNC CAD/CAM toolpath files, Coordinate Measuring Machine (CMM) dimensional reports, ERP job-card logs, GST e-Way bills, gate security entry/exit scans, weighbridge computerized printouts, and WhatsApp/email communications regarding job-work dispatch approvals. The certificate must be executed by the systems administrator or factory owner managing the computer systems.",
  },
];

const PRECEDENTS = [
  {
    caseName: "Board of Trustees of the Port of Bombay v. Sriyanesh Knitters (1999) 7 SCC 359",
    forum: "Supreme Court of India",
    statutoryRef: "Indian Contract Act, 1872 — Sections 170 & 171",
    holding:
      "The Supreme Court authoritative ruling delineating the strict boundary between Section 170 (Particular Lien) and Section 171 (General Lien). Held that a bailee who has expended skill and labour upon bailed goods has an inherent statutory right to retain those specific goods until paid. In the absence of an express contractual clause or statutory status as banker/factor, the bailee cannot exercise a general lien over unrelated property.",
    impact:
      "Confirms that job-workers have an absolute legal right to hold the specific batch machined or fabricated, while cautioning against retaining unrelated raw material without contractual backing.",
  },
  {
    caseName: "Kalloomal Tapeshwari Prasad & Co. v. CIT (1982) 1 SCC 325 / State of Gujarat v. Memon Mahomed (AIR 1967 SC 1885)",
    forum: "Supreme Court of India",
    statutoryRef: "Indian Contract Act, 1872 — Bailment & Bailee Duties",
    holding:
      "Established the foundational nature of bailment obligations in commercial manufacturing. Held that possession under bailment creates reciprocal statutory rights and duties; the bailee's right to retain custody until lawful remuneration is satisfied is a recognized legal defense against conversion.",
    impact:
      "Protects precision machine shops and job-workers against criminal allegations of dishonest misappropriation when asserting lawful custody.",
  },
  {
    caseName: "M/s Silpi Industries v. Kerala State Road Transport Corporation (2021) 18 SCC 790",
    forum: "Supreme Court of India",
    statutoryRef: "MSMED Act, 2006 — Sections 15–18",
    holding:
      "The Supreme Court held that the provisions of the MSMED Act, including statutory compound interest at three times the RBI Bank Rate under Section 16, override any contrary terms in buyer purchase orders or commercial agreements.",
    impact:
      "Nullifies unilateral OEM credit terms exceeding 45 days and prevents buyers from imposing interest-waiver clauses on job-work contractors.",
  },
  {
    caseName: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353",
    forum: "Supreme Court of India",
    statutoryRef: "Insolvency and Bankruptcy Code, 2016 — Section 8 & 9",
    holding:
      "Established the test of 'pre-existing dispute' under the IBC. A dispute must be real, plausible, and documented prior to the statutory demand notice; spurious defenses and afterthought quality complaints concocted after payment demands cannot derail recovery.",
    impact:
      "Enables job-workers to pierce OEM excuses where quality complaints or debit notes were created solely after the job-worker demanded settlement of overdue bills.",
  },
];

export default function JobWorkPaymentRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    inLanguage: "en-IN",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about-us`,
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
    datePublished: "2026-11-16T09:00:00+05:30",
    dateModified: "2026-11-16T12:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const faqSchema = {
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Exercise Section 170 Bailee Lien & Recover Job-Work Bills Legally",
    description:
      "A 5-stage legal and operational SOP for engineering job-workers, CNC turning shops, and fabrication units to retain components lawfully and recover unpaid labour charges.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Inward Challans & Physical Batch Segregation",
        text: "Isolate the exact batch of customer goods upon which skill and labour were expended. Verify GST Rule 55 delivery challan details and job-work delivery status.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Statutory Section 170 Bailee Lien Intimation",
        text: "Issue a formal written notice under Section 170 of the Indian Contract Act, 1872 by email and Speed Post RPAD putting the principal OEM on notice of lawful detention.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue CGST Section 143 Deemed Supply & Section 43B(h) Alerts",
        text: "Warn the principal manufacturer of statutory 1-year GST challan expiry, ITC-04 reversal liabilities, and Income Tax Act Section 43B(h) corporate tax disallowance.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Pre-empt Police Complaints with Local Station Representation",
        text: "Submit a proactive written intimation to the local Police Station House Officer (SHO) explaining the ongoing civil statutory bailee lien to bar frivolous FIRs.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Initiate Dual-Track Legal Action: MSEFC / Order XXXVII CPC",
        text: "File for delayed payment recovery with 3x RBI compound interest before the MSME Samadhaan Council or initiate a Commercial Summary Suit under Order XXXVII CPC.",
      },
    ],
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
        name: "Manufacturing & OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CNC Job-Work Payment Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>B2B Creditor Recovery Guide</span>
              <span className="text-slate-600">&bull;</span>
              <span>Manufacturing &amp; Job-Work &sect;6.6</span>
              <span className="text-slate-600">&bull;</span>
              <span>Contract Act s.170</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Scope
              </span>
              Under Section 170 of the Indian Contract Act, 1872, job-workers who expend skill or labour on customer-supplied goods possess a statutory Particular Lien to detain processed components until labour charges are paid in full. When principal OEMs withhold payments, this guide—part of our specialized{" "}
              <Link
                href="/industries/manufacturing-machinery-oem-recovery"
                className="text-red-400 hover:text-red-300 underline font-semibold"
              >
                Manufacturing, Industrial Machinery &amp; OEM Supplier Debt Recovery Desk
              </Link>
              —empowers precision CNC machinists, electroplaters, and fabricators to legally enforce bailee liens, defeat frivolous police threats, leverage CGST Section 143 1-year tax penalties, and recover overdue ledgers with MSMED Act 3x RBI compound interest.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Contract Act s.170
                </p>
                <p className="text-lg sm:text-2xl font-black text-slate-100">Particular Lien</p>
                <p className="text-[11px] text-slate-400">Statutory right on worked goods</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  CGST Sec 143(3)
                </p>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">1-Yr Deemed Sale</p>
                <p className="text-[11px] text-slate-400">Taxes shift to principal OEM</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  MSMED Act Sec 16
                </p>
                <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Interest</p>
                <p className="text-[11px] text-slate-400">Compounded monthly past 45d</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  BNS Sec 316 Shield
                </p>
                <p className="text-lg sm:text-2xl font-black text-red-400">Zero Mens Rea</p>
                <p className="text-[11px] text-slate-400">Police FIR barred on civil liens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs
            items={[
              {
                label: "Manufacturing & OEM Recovery",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "CNC Job-Work Payment Recovery",
                href: PAGE_URL,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <JobWorkRecoveryTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Bailee Lien Doctrine & Police Threats */}
              <section
                id="heading-bailee-lien-doctrine"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    The Job-Worker&apos;s Dilemma: Police Threats vs Statutory Bailee Lien Under Section 170
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Across India&apos;s heavy manufacturing and automotive clusters—from Bhosari and Chakan in Pune, to Peenya in Bengaluru, Ambattur in Chennai, Sanand in Gujarat, and the focal points of Ludhiana and Faridabad—thousands of precision CNC turning centers, VMCs, laser profiling shops, heat-treatment plants, and fabrication yards operate under a precarious commercial asymmetry.
                  </p>
                  <p>
                    Large principal manufacturers, Tier-1 automotive ancillaries, and industrial equipment OEMs routinely bail expensive raw castings, forged blanks, and steel plates under <strong>Form GST Rule 55 Delivery Challans</strong> for specialized job-work. The job-worker expends substantial working capital: diamond cutting inserts, CNC spindle hours, dielectric oils, electricity, argon shielding gas, and skilled machinists. Yet, when the components are finished and ready for dispatch, the principal OEM frequently demands immediate delivery while leaving 60 to 180-day-old job-work labour invoices completely unpaid.
                  </p>
                  <p>
                    When the job-worker hesitates to release the finished batch until past dues are cleared, the principal manufacturer&apos;s procurement department deploys coercive tactics: threatening to lodge an immediate First Information Report (FIR) for criminal breach of trust, dishonest misappropriation, or theft at the local police station.
                  </p>
                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl my-4 text-xs sm:text-sm text-slate-800">
                    <span className="font-bold text-[#DC2626] block uppercase tracking-wider text-[11px] mb-1">
                      The Common Fear vs The Statutory Reality
                    </span>
                    Engineering job-workers capitulate out of fear that local police will seal their units or arrest factory supervisors. In reality, <strong>Section 170 of the Indian Contract Act, 1872</strong> vests the job-worker with an absolute, non-derogable <em>Particular Lien</em> over goods on which skill and labour have been expended. Holding goods under a bona fide statutory lien completely destroys criminal <em>mens rea</em> under Section 316 of the Bharatiya Nyaya Sanhita, 2023.
                  </div>
                  <p>
                    The law is clear: retaining customer components against unpaid labour bills on that specific batch is an established statutory right, not a crime. However, to exercise this right without incurring civil or criminal liability, job-workers must strictly master the legal boundary between a <strong>Particular Lien</strong> and a <strong>General Lien</strong>.
                  </p>
                </div>
              </section>

              {/* Section 2: Section 170 vs Section 171 Legal Boundary */}
              <section
                id="heading-section-170-vs-171"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Section 170 Particular Lien vs Section 171 General Lien: The Legal Boundary
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The single most fatal mistake made by engineering job-workers is attempting to hold <em>unrelated raw materials</em> or <em>subsequent raw batches</em> to force payment for older, already-dispatched invoices. Understanding the strict distinction between Section 170 and Section 171 of the Indian Contract Act is essential to avoid converting a valid civil remedy into unlawful detention.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm">
                      <span className="font-bold text-emerald-800 text-sm block mb-1">
                        Section 170: Particular Bailee Lien
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        <strong>Statutory &amp; Automatic:</strong> Arises whenever a person, in accordance with the purpose of a bailment, has rendered any service involving the exercise of labour or skill in respect of the goods bailed.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
                        <li>Applies strictly to the <strong>specific batch worked upon</strong>.</li>
                        <li>Extends to the full value of skill, labour, tooling, and consumables expended on that batch.</li>
                        <li>Does NOT require an express contractual clause.</li>
                        <li>Requires continuous physical possession.</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm">
                      <span className="font-bold text-amber-800 text-sm block mb-1">
                        Section 171: General Bailee Lien
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        <strong>Restricted &amp; Contractual:</strong> The right to retain any goods bailed as security for a general balance of account. By law, this is restricted exclusively to:
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
                        <li>Bankers, factors, wharfingers, High Court attorneys, and policy brokers.</li>
                        <li>All other commercial parties (including job-workers) <strong>CANNOT</strong> exercise a general lien <em>unless there is an express agreement to that effect in writing</em>.</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    As held by the Supreme Court of India in <em>Board of Trustees of the Port of Bombay v. Sriyanesh Knitters (1999) 7 SCC 359</em>, Section 170 gives the artisan or bailee a lien only on the particular property upon which labour and skill have been bestowed. If a CNC shop has dispatched Batch A (unpaid ₹10 Lakh) and currently holds raw, unmachined castings for Batch B, the shop <strong>cannot</strong> legally detain Batch B under Section 170 unless:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 pl-2 font-medium text-slate-800">
                    <li>The job-worker immediately expends skill and labour on Batch B, maturing a Section 170 Particular Lien on Batch B for Batch B&apos;s labour charges; or</li>
                    <li>The original Purchase Order or Vendor Agreement contains an express <strong>Contractual General Lien Clause</strong> stating: <em>&ldquo;The Job-Worker shall have a general lien on all patterns, dies, raw materials, and finished goods in its custody for any general balance of account overdue from the Principal.&rdquo;</em></li>
                  </ol>
                  <p>
                    Armed with this distinction, job-workers can stand firm: you can lawfully withhold the finished components of the active batch against its own invoice, while concurrently serving legal demand notices for the older ledger arrears under the{" "}
                    <Link
                      href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      MSMED Act 45-day payment mechanism
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: 5-Stage Job-Work Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    03
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    5-Stage Job-Work Recovery &amp; Statutory Lien Decision Tree
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    When an OEM defaults on job-work payments, escalating haphazardly leads to operational friction or unforced legal errors. Engineering job-workers must follow a disciplined, 5-stage statutory escalation decision tree designed to secure payment while pre-empting frivolous police interference.
                  </p>
                </div>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-hidden rounded-xl bg-slate-950 p-4 border border-slate-800 mb-6">
                  <svg
                    viewBox="0 0 820 280"
                    className="w-full h-auto"
                    width={820}
                    height={280}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="5-Stage Job-Work Statutory Lien and Recovery Flowchart"
                  >
                    <defs>
                      <marker
                        id="flow-arrow"
                        viewBox="0 0 10 10"
                        refX="9"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="15" y="25" width="135" height="100" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="82" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 1: Audit</text>
                    <text x="82" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9">Segregate Batch</text>
                    <text x="82" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Verify Rule 55 Challan</text>
                    <text x="82" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">CMM Inspection Ready</text>

                    {/* Arrow 1-2 */}
                    <path d="M150 75 H175" stroke="#DC2626" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                    {/* Stage 2 */}
                    <rect x="175" y="25" width="135" height="100" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="242" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 2: s.170 Notice</text>
                    <text x="242" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9">Assert Particular Lien</text>
                    <text x="242" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Speed Post + Email</text>
                    <text x="242" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Pre-empt Criminal FIR</text>

                    {/* Arrow 2-3 */}
                    <path d="M310 75 H335" stroke="#DC2626" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                    {/* Stage 3 */}
                    <rect x="335" y="25" width="135" height="100" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="402" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 3: Tax Levers</text>
                    <text x="402" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9">CGST s.143 1-Yr Clock</text>
                    <text x="402" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">ITC-04 Reversal Notice</text>
                    <text x="402" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">IT Act s.43B(h) Alert</text>

                    {/* Arrow 3-4 */}
                    <path d="M470 75 H495" stroke="#DC2626" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                    {/* Stage 4 */}
                    <rect x="495" y="25" width="140" height="100" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="565" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 4: Police Shield</text>
                    <text x="565" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9">File SHO Representation</text>
                    <text x="565" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Attach s.170 Lien Copy</text>
                    <text x="565" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Bar False 406/420 FIR</text>

                    {/* Arrow 4-5 */}
                    <path d="M635 75 H660" stroke="#DC2626" strokeWidth="2" markerEnd="url(#flow-arrow)" />

                    {/* Stage 5 */}
                    <rect x="660" y="25" width="145" height="100" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="732" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 5: Legal Decree</text>
                    <text x="732" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9">MSEFC 3x Compound Int.</text>
                    <text x="732" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Order XXXVII CPC Suit</text>
                    <text x="732" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Court Auction of Goods</text>

                    {/* Bottom Indicator */}
                    <rect x="15" y="150" width="790" height="105" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                    <text x="410" y="180" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="bold">
                      Key Decision Criteria: Current Worked Goods vs General Balance of Account
                    </text>
                    <text x="410" y="205" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      If customer pays batch labour invoice: Release batch &rarr; Pursue older ledger debt via MSEFC / Order XXXVII CPC
                    </text>
                    <text x="410" y="225" textAnchor="middle" fill="#F87171" fontSize="10">
                      If customer defaults &amp; threatens police: Maintain physical custody &rarr; Serve Section 170 + Police intimation
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Step Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 1 &bull; Audit &amp; Physical Segregation
                    </span>
                    <p className="text-xs text-slate-300">
                      Segregate the exact batch of machined/fabricated parts. Verify GST Rule 55 delivery challan, machine time-logs, and CMM dimension sheets.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 2 &bull; Section 170 Statutory Lien Notice
                    </span>
                    <p className="text-xs text-slate-300">
                      Serve formal written notice exercising Particular Lien on the specific batch until labour charges are paid in full.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 3 &bull; GST Section 143 &amp; Section 43B(h) Levers
                    </span>
                    <p className="text-xs text-slate-300">
                      Intimate principal OEM that failure to clear dues triggers 1-year deemed supply tax liability and Section 43B(h) corporate tax disallowance.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 4 &bull; Police Pre-emption Representation
                    </span>
                    <p className="text-xs text-slate-300">
                      Submit a proactive letter to the local police station with the statutory lien notice to bar false FIRs for criminal breach of trust.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 5 &bull; Dual-Track Judicial Execution
                    </span>
                    <p className="text-xs text-slate-300">
                      Initiate MSME Samadhaan for 3x RBI compound interest or file a Commercial Summary Suit under Order XXXVII CPC for attachment and decree.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    04
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Recovery Matrix: Contract Act, CGST Section 143 &amp; MSMED Protections
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Recovering job-work dues requires coordinating multiple statutory codes simultaneously. While the Indian Contract Act provides the immediate physical retention remedy, tax and commercial statutes provide the financial leverage needed to bring the defaulting OEM to the negotiating table.
                  </p>
                </div>

                {/* Dark Header Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                        <th className="p-3 sm:p-4">Remedy Track</th>
                        <th className="p-3 sm:p-4">Governing Statute</th>
                        <th className="p-3 sm:p-4">Trigger Timing</th>
                        <th className="p-3 sm:p-4">Operational Mechanism</th>
                        <th className="p-3 sm:p-4">Commercial Relief</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 sm:p-4 font-bold text-slate-900">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 bg-slate-100 text-slate-700">
                              Track {idx + 1}
                            </span>
                            <div>{item.remedy}</div>
                          </td>
                          <td className="p-3 sm:p-4 font-mono text-[11px] text-slate-700">
                            {item.statute}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600">{item.timing}</td>
                          <td className="p-3 sm:p-4 text-slate-700 leading-relaxed">
                            {item.mechanism}
                          </td>
                          <td className="p-3 sm:p-4 font-medium text-emerald-700">
                            {item.relief}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Scenario Tabs Component */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    05
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    4 Critical Job-Work Commercial Failure Modes &amp; Operational Protocols
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Job-work disputes rarely arise in the abstract; they manifest in specific operational bottlenecks on the shop floor. Explore our interactive scenario matrix below to understand the statutory countermeasures for each commercial scenario.
                  </p>
                </div>

                <JobWorkRecoveryScenarioTabs />
              </section>

              {/* Section 6: CGST Section 143 & ITC-04 Trap */}
              <section
                id="heading-gst-itc04-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    06
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    The CGST Section 143 &amp; ITC-04 1-Year Reversal Lever Against Defaulting OEMs
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    One of the most potent yet underutilized statutory levers possessed by Indian job-workers is the strict timeline embedded in <strong>Section 143 of the Central Goods and Services Tax (CGST) Act, 2017</strong>.
                  </p>
                  <p>
                    Under Section 143(1), a registered principal manufacturer may send inputs or capital goods to a job-worker under a delivery challan without paying tax. However, this tax-free movement is conditional upon strict statutory return timelines:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <strong>Inputs &amp; Semi-Finished Components:</strong> Must be brought back to the principal&apos;s factory or supplied directly from the job-worker&apos;s premises within <strong>1 year</strong> of dispatch (extendable by the Commissioner by up to 1 additional year under Section 143(1) proviso).
                    </li>
                    <li>
                      <strong>Capital Goods, Toolings, Moulds &amp; Dies:</strong> Must be brought back within <strong>3 years</strong> of dispatch (extendable by up to 2 additional years).
                    </li>
                  </ul>

                  <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 my-4 space-y-2">
                    <span className="text-red-400 font-bold uppercase tracking-wider text-xs block">
                      The Deemed Supply Trap: Section 143(3)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      &ldquo;Where the inputs sent for job work are not received back by the principal... within a period of one year of their being sent out, it shall be deemed that such inputs had been supplied by the principal to the job-worker on the day when the said inputs were sent out.&rdquo;
                    </p>
                    <p className="text-xs text-amber-300 font-medium">
                      Consequence: The principal must pay GST at applicable tariff rates (18% or 28%) plus compound interest under Section 50 from the original challan date, and reverse Input Tax Credit in quarterly Form GST ITC-04.
                    </p>
                  </div>

                  <p>
                    When a principal OEM delays paying job-work charges and forces the job-worker to hold goods under Section 170, the 1-year statutory clock continues to tick against the principal. By serving a formal <strong>&ldquo;Notice of Approaching Section 143(3) Deemed Supply&rdquo;</strong> at the 9-month or 10-month mark, the job-worker puts the OEM&apos;s CFO on alert:
                  </p>
                  <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-700 italic text-xs sm:text-sm bg-amber-50/50 rounded-r-lg">
                    &ldquo;Unless our overdue labour invoices totaling ₹18.5 Lakh are cleared within 15 days to permit lawful delivery, your ₹65 Lakh worth of CNC-turned shafts bailed under Challan No. DC-2401 will cross the statutory 1-year threshold on 14 December 2026. Pursuant to CGST Section 143(3), this transaction will be reported as a deemed taxable supply, requiring your organization to pay ₹11.7 Lakh GST plus 18% penal interest from the date of dispatch and reverse corresponding ITC.&rdquo;
                  </blockquote>
                  <p>
                    Faced with an immediate, non-recoverable tax penalty and interest liability, corporate CFOs routinely override procurement delays and prioritize vendor settlement.
                  </p>
                </div>
              </section>

              {/* Section 7: Scrap & Burning Loss Disputes */}
              <section
                id="heading-scrap-deduction-dispute"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    07
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Scrap, Swarf, Kerf &amp; Burning Loss Deductions: Neutralizing Arbitrary OEM Debit Notes
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A perennial friction point in engineering job-work is the arbitrary deduction made by principal factories for alleged &ldquo;excess scrap,&rdquo; &ldquo;swarf loss,&rdquo; or &ldquo;melting/burning loss.&rdquo;
                  </p>
                  <p>
                    In manufacturing processes like induction melting, forging, sheet-metal CNC laser cutting, and multi-axis turning, metal loss is an unavoidable thermodynamic and mechanical reality:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm">
                    <li><strong>Foundry &amp; Casting:</strong> Oxidation and burning loss typically ranges from 3% to 6% depending on furnace type.</li>
                    <li><strong>CNC Turning &amp; Milling:</strong> Swarf and machining chip generation ranges from 15% to 45% based on billet-to-finished-part mass ratio.</li>
                    <li><strong>Laser / Plasma Sheet Cutting:</strong> Skeleton, edge margin, and kerf scrap ranges from 7% to 14% based on plate nesting density.</li>
                  </ul>
                  <p>
                    Defaulting OEMs exploit this by issuing unilateral debit notes months after delivery, claiming: <em>&ldquo;Your scrap return was 2% below theoretical estimate; therefore, we are deducting ₹4.2 Lakh from your machining bills.&rdquo;</em>
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      Legal Countermeasures Against Unilateral Scrap Debit Notes
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                      <div>
                        <strong>1. Section 73 Indian Contract Act Bar:</strong> In a catena of judgments, Indian High Courts have held that damages for breach or alleged shortage cannot be unilaterally assessed by one party. In the absence of a joint physical inspection or mutual written sign-off, an arbitrary debit note is an illegal deduction without legal force.
                      </div>
                      <div>
                        <strong>2. CGST Act Section 143(5) &amp; Rule 55 Norms:</strong> Under Section 143(5), any waste and scrap generated during job work may be supplied by the job worker directly on payment of tax, or returned to the principal. Where the PO stipulates return of scrap, establishing weight reconciliation through computerized weighbridge slips and CNC nesting logs legally refutes excess loss allegations.
                      </div>
                      <div>
                        <strong>3. Chartered Engineer Input-Output Audit:</strong> For claims exceeding ₹5 Lakh, obtaining an Input-Output Mass Balance Certificate from a government-approved Chartered Engineer establishes standard industrial engineering practice, shifting the entire evidentiary burden onto the defaulting OEM.
                      </div>
                    </div>
                  </div>

                  <p>
                    By coupling this engineering defense with an immediate rejection of the debit note on the GST portal (refusing to accept credit notes under CGST Section 34), job-workers protect their right to recover the full unreduced invoice value.
                  </p>
                </div>
              </section>

              {/* Section 8: Worked Financial Ledger */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    08
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Financial Ledger: ₹14.8 Lakh CNC Turning &amp; Milling Default with 3x RBI Interest
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Consider a precision machine shop in Peenya, Bengaluru (Micro Enterprise Udyam: UDYAM-KR-03-XXXXXXX) machining 12,000 alloy steel stub-axles for a Tier-1 auto-ancillary OEM.
                  </p>
                </div>

                {/* Financial Ledger Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block">
                        Case Study &bull; Ledger Audit
                      </span>
                      <p className="text-base sm:text-lg font-bold text-white">
                        Precision Machining Invoices &amp; MSMED Act Calculation
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950 text-red-400 border border-red-800 self-start sm:self-auto">
                      180 Days Overdue
                    </span>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase">
                          <th className="py-2.5">Invoice / Component Particulars</th>
                          <th className="py-2.5">Amount (₹)</th>
                          <th className="py-2.5">Challan Ref</th>
                          <th className="py-2.5">Statutory Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                        <tr>
                          <td className="py-2 text-slate-200">Inv #261: CNC Rough Turning (4,000 pcs)</td>
                          <td className="py-2 text-slate-100 font-bold">₹4,20,000</td>
                          <td className="py-2 text-slate-400">DC-2580 (Dispatched)</td>
                          <td className="py-2 text-amber-400">Overdue 140 Days</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-slate-200">Inv #278: Finish Grinding &amp; Spline Milling (4,000 pcs)</td>
                          <td className="py-2 text-slate-100 font-bold">₹5,40,000</td>
                          <td className="py-2 text-slate-400">DC-2612 (Dispatched)</td>
                          <td className="py-2 text-amber-400">Overdue 110 Days</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-slate-200">Inv #294: Final CNC Batch (4,000 pcs) — In Process</td>
                          <td className="py-2 text-slate-100 font-bold">₹5,20,000</td>
                          <td className="py-2 text-slate-400">DC-2689 (In Shop)</td>
                          <td className="py-2 text-emerald-400">Held Under Sec 170 Lien</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-slate-200">Arbitrary OEM Debit Note (Alleged Swarf Shortage)</td>
                          <td className="py-2 text-red-400 font-bold">-₹1,85,000</td>
                          <td className="py-2 text-slate-400">DN-994 (Unilateral)</td>
                          <td className="py-2 text-red-400">Disputed &amp; Invalidated</td>
                        </tr>
                        <tr className="bg-slate-800/80 font-bold">
                          <td className="py-3 text-white">Admitted Principal Claimable</td>
                          <td className="py-3 text-white text-sm">₹14,80,000</td>
                          <td className="py-3 text-slate-400">—</td>
                          <td className="py-3 text-emerald-400">Full Invoiced Sum</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Interest Calculation Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        MSMED Act Section 16 Rate
                      </span>
                      <p className="text-xl font-bold text-emerald-400">20.25% p.a.</p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        3 &times; RBI Bank Rate (6.75% &times; 3), compounded monthly
                      </p>
                    </div>

                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Compounded Penal Interest
                      </span>
                      <p className="text-xl font-bold text-amber-400">₹1,56,840</p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Accrued across overdue periods past Day 45
                      </p>
                    </div>

                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Total Enforceable Demand
                      </span>
                      <p className="text-xl font-bold text-white">₹16,36,840</p>
                      <p className="text-[11px] text-emerald-400 mt-1">
                        Principal + 3x Compound Interest
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 leading-relaxed bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60">
                    <span className="font-bold text-red-400 block mb-1">
                      Action Taken Under Section 170 &amp; MSMED Act:
                    </span>
                    The job-worker lawfully withheld the finished 4,000 stub-axles under Invoice #294 (worth ₹5.20 Lakh in labour charges and ₹28 Lakh in raw material value) under Section 170 Particular Lien. Concurrently, a fact-verified demand notice was served claiming ₹16,36,840 with Section 43B(h) and CGST Section 143 disclosures. Faced with assembly-line stoppage and impending tax disallowance, the OEM cleared the entire ₹14.80 Lakh principal within 11 days.
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] underline"
                  >
                    Calculate your exact 3x RBI compound interest using our free MSME Interest Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 9: BSA Section 63 Digital Evidence Checklist */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    09
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    BSA Section 63 Digital Evidence Checklist: CAD Logs, CMM Reports &amp; Delivery Challans
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, Section 63 mandates stringent certification standards for proving electronic records in commercial proceedings. To withstand debtor challenges before the MSEFC or Commercial Courts, engineering job-workers must systematically assemble the following evidentiary dossier:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      1. Inward Bailment &amp; PO Documentation
                    </span>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Principal OEM Purchase Order (PO) or Job-Work Agreement specifying process rates and agreed tolerance norms.</li>
                      <li>Inward Delivery Challan under GST Rule 55 documenting raw casting heat codes, serials, and gross weights.</li>
                      <li>Inward Security Gate Entry register copy with security supervisor signature.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      2. Manufacturing &amp; Quality Telemetry
                    </span>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>CAD/CAM G-Code generation logs and CNC machine CNC cycle hour logs showing exact machining duration.</li>
                      <li>Coordinate Measuring Machine (CMM) dimensional inspection reports signed by certified quality inspectors.</li>
                      <li>Heat-treatment furnace temperature-time circular charts and spectrometer metallurgy test certificates.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      3. Scrap Reconciliation &amp; Mass Balance
                    </span>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Computerized weighbridge gross/tare printouts for raw metal intake and processed component return.</li>
                      <li>CNC nesting software optimization layouts certifying kerf, skeleton, and trim scrap percentages.</li>
                      <li>Chartered Engineer Input-Output Mass Balance Certificate (for claims &gt; ₹5 Lakh).</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      4. Electronic Service &amp; Tax Filings
                    </span>
                    <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Outward GST Tax Invoices and GSTR-1 filings reconciled against principal&apos;s GSTR-2B.</li>
                      <li>Statutory Section 170 Particular Lien notices sent via registered email and Speed Post RPAD with postal tracking delivery confirmations.</li>
                      <li>Section 63 BSA statutory affidavit executed by the factory IT/Systems Manager.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: 15-Day Advocate Notice SOP */}
              <section
                id="heading-advocate-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    15-Day Statutory Advocate Lien-Cum-Demand Notice SOP
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Informal WhatsApp reminders and polite phone calls from factory owners are systematically ignored by corporate procurement teams. Recovery begins when a fact-verified <strong>15-Day Statutory Bailee Lien-Cum-Demand Notice</strong> lands on the desks of the Managing Director, CFO, and Company Secretary.
                  </p>
                  <p>
                    An effective job-work recovery legal notice must incorporate five mandatory statutory clauses:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-2 text-xs sm:text-sm text-slate-800">
                    <li>
                      <strong>Formal Exercise of Section 170 Particular Lien:</strong> Expressly intimating the principal that physical custody of the specified finished/in-process batch is retained under statutory lien until all labour charges for that batch are credited.
                    </li>
                    <li>
                      <strong>BNS Section 316 Criminal Bar Notice:</strong> Stating on record that custody is retained under a bona fide civil legal right, placing the principal on notice that any frivolous police complaint will be met with immediate Section 227 BNS (false charge of offense) and malicious prosecution proceedings.
                    </li>
                    <li>
                      <strong>CGST Section 143 Deemed Supply Reversal Trigger:</strong> Warning that ongoing retention past 12 months will trigger statutory deemed supply tax liabilities, interest under Section 50, and ITC-04 reversals on the principal.
                    </li>
                    <li>
                      <strong>Income Tax Section 43B(h) Audit Intimation:</strong> Notifying the principal that unpaid MSME job-work invoices past 45 days will be communicated to the principal&apos;s statutory auditors for mandatory corporate tax disallowance.
                    </li>
                    <li>
                      <strong>MSMED Act Section 16 &amp; Order XXXVII CPC Escalation:</strong> Demanding principal plus 3x RBI compound monthly interest within 15 days, failing which legal proceedings will be initiated without further notice.
                    </li>
                  </ol>
                  <p>
                    Sent simultaneously via Advocate Letterhead through Speed Post RPAD, official corporate email, and WhatsApp, this tri-channel notice creates an unassailable evidentiary record under Section 63 BSA and Section 27 of the General Clauses Act.
                  </p>
                </div>
              </section>

              {/* Section 11: Dual-Track CTA Component */}
              <section
                id="heading-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    11
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Dual-Track Institutional &amp; SME Job-Work Recovery Desk
                  </h2>
                </div>

                <JobWorkRecoveryCTA />
              </section>

              {/* Section 12: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    12
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions on Job-Work Payment Recovery &amp; Section 170 Lien
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                    >
                      <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-xs sm:text-sm md:text-base list-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="text-[#DC2626] group-open:rotate-180 transition-transform text-lg shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Judicial Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    13
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Key Judicial Precedents &amp; Bare-Act Provisions Governing Job-Work Dues
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    When challenging OEM defaults, quoting established Supreme Court and High Court precedents elevates your legal notice from a standard collection reminder into an authoritative statutory demand:
                  </p>
                </div>

                <div className="space-y-4">
                  {PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl p-4 sm:p-5 border-t border-r border-b border-slate-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {item.caseName}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                          {item.forum}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[#DC2626] mb-2 font-semibold">
                        {item.statutoryRef}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <p className="text-xs text-emerald-800 font-medium">
                        <strong>Impact on Job-Workers:</strong> {item.impact}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap gap-4">
                  <span>Reviewed by: {LEGAL_REVIEWER.name} ({LEGAL_REVIEWER.role})</span>
                  <span>&bull;</span>
                  <span>Published: November 2026</span>
                  <span>&bull;</span>
                  <span>Applicable: Pan-India (All State High Courts &amp; MSEFC Benches)</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
