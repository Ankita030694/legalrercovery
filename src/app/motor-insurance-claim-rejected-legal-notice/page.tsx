import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MotorInsuranceNoticeCTA from "./MotorInsuranceNoticeCTA";
import MotorInsuranceTableOfContents from "./MotorInsuranceTableOfContents";
import MotorInsuranceProblemTabs from "./MotorInsuranceProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car or Bike Insurance Claim Rejected? Legal Notice",
  description:
    "Car or bike insurance claim rejected? Common grounds, what courts have said, and how to challenge the insurer with a notice.",
  alternates: {
    canonical: `${SITE_URL}/motor-insurance-claim-rejected-legal-notice`,
  },
  openGraph: {
    title: "Car or Bike Insurance Claim Rejected? Legal Notice & Reversal Strategy",
    description:
      "Statutory escalation path for repudiated motor insurance claims: Gurmel Singh ruling on delayed intimation, Swaran Singh licence guidelines, and Ombudsman remedies.",
    url: `${SITE_URL}/motor-insurance-claim-rejected-legal-notice`,
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
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Master Circular Ref: IRDAI/NL/GDL/MISC/10/2024)",
    url: "https://irdai.gov.in/",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (amended up to 2023) — Rule 13 (Manner of Filing Complaint) & Rule 17 (Award up to ₹50 Lakh)",
    url: "https://www.cioins.co.in/OmbudsmanRules",
  },
  {
    title: "Motor Vehicles Act, 1988 (Act No. 59 of 1988) — Section 14 (Licence Currency), Section 157 (Transfer of Certificate), & Section 185 (Drunken Driving Breath/Blood Alcohol Standards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022) SCC OnLine SC 666 — Supreme Court on Delayed Intimation & Non-Technical Rejections",
    url: "https://main.sci.gov.in/judgment/judis/49603.pdf",
  },
  {
    title: "Lakhmi Chand v. Reliance General Insurance (2016) 3 SCC 100 — Supreme Court on Fundamental Breach & Direct Causation Rule",
    url: "https://main.sci.gov.in/judgment/judis/43272.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Intimation, WhatsApp & Surveyor Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Delayed FIR or Insurer Intimation Cannot Defeat Genuine Theft or Accident Claim",
    parties: "Gurmel Singh v. Branch Manager, National Insurance Co. Ltd.",
    citation: "Civil Appeal No. 4071 of 2022, 2022 SCC OnLine SC 666",
    date: "Judgment Dated 20 May 2022",
    facts:
      "The appellant's truck was stolen. The appellant lodged an FIR and notified the insurance company after a delay of several days due to efforts made to search for the vehicle and subsequent police verification. The national insurer summarily repudiated the claim on the sole ground that condition no. 1 of the policy mandated immediate intimation within 48 hours.",
    holding:
      "The Supreme Court set aside the NCDRC and State Commission repudiation orders, holding that insurance claims must not be rejected on hyper-technical grounds. When the factum of vehicle theft or accident is genuine and corroborated by police or surveyor investigations, a mere delay in intimating the insurance company cannot extinguish the insured's substantive contractual indemnity. The Supreme Court directed the insurer to pay the entire claim amount with 9% interest per annum from the date of claim filing.",
    amount: "Full Vehicle Assessed Value @ 9% Interest + ₹25,000 Litigation Costs",
    takeaway:
      "Insurers cannot repudiate a car or bike claim solely because you reported the loss a few days late. As long as the accident or theft is authentic, delayed notice is not a fatal defect under binding apex court law.",
  },
  {
    title: "Licence Defect or Minor Policy Violation Must Have Causal Link to the Collision",
    parties: "Lakhmi Chand v. Reliance General Insurance Co. Ltd.",
    citation: "Civil Appeal No. 499 of 2016, (2016) 3 SCC 100",
    date: "Judgment Dated 07 January 2016",
    facts:
      "The insured vehicle met with an accident. The insurance company repudiated the own-damage claim in toto on the ground that the vehicle was carrying more passengers than permitted by its registration certificate, alleging fundamental breach of policy conditions.",
    holding:
      "A 2-judge bench of the Supreme Court held that to repudiate a claim for breach of policy terms, the insurer must establish that the breach was so fundamental that it caused the accident. Carrying excess passengers had zero causal nexus with the negligent truck that struck the vehicle from behind. The court reaffirmed that technical breaches do not exonerate insurers from paying own-damage loss, ordering payment of the assessed compensation.",
    amount: "₹1,64,033 Assessed Loss @ 9% Interest from Repudiation Date",
    takeaway:
      "Unless the insurer proves that the driver's specific licence defect or extra passenger directly triggered the accident, total claim denial is illegal. At minimum, insurers are obligated to settle on a non-standard basis.",
  },
  {
    title: "Drunk Driving Exclusion Invalid Without Quantitative Blood Alcohol Test",
    parties: "Sunita Goyal & Anr. v. SBI General Insurance Co. Ltd.",
    citation: "Revision Petition No. 2378 of 2019, NCDRC New Delhi",
    date: "Order Dated 10 February 2021",
    facts:
      "The insured vehicle met with a severe collision resulting in total damage and injury. The hospital casualty casualty doctor recorded 'smell of alcohol present' on the emergency casualty slip. Citing the policy exclusion for accidents occurring under the influence of intoxicating liquor, the insurer issued a complete claim repudiation.",
    holding:
      "The National Consumer Disputes Redressal Commission (NCDRC) held that merely smelling of alcohol does not satisfy the statutory test for intoxication under Section 185 of the Motor Vehicles Act 1988 (which requires Blood Alcohol Concentration exceeding 30 mg per 100 ml of blood). Without a scientific blood toxicology report or breath analyser quantification, the insurer cannot invoke the exclusion clause. The NCDRC quashed the repudiation and ordered full settlement with interest.",
    amount: "₹6,85,000 Vehicle Total Loss @ 9% Interest + ₹15,000 Compensation",
    takeaway:
      "Hospital remarks stating 'smell of alcohol' or 'suspected intoxication' are legally insufficient. Without a forensic blood alcohol test proving BAC &gt; 30mg/100ml, an insurer's drunk driving repudiation will not stand in court.",
  },
  {
    title: "Light Motor Vehicle (LMV) Licence Is Valid for Light Commercial Transport Vehicles",
    parties: "Mukund Dewangan v. Oriental Insurance Co. Ltd.",
    citation: "Civil Appeal No. 5823 of 2011, (2017) 14 SCC 663 (3-Judge Bench)",
    date: "Judgment Dated 03 July 2017",
    facts:
      "The driver of a light commercial vehicle (unladen weight under 7,500 kg) possessed an ordinary LMV driving licence without a separate commercial or transport endorsement. The insurer repudiated third-party and own-damage claims alleging lack of effective driving licence.",
    holding:
      "A 3-judge bench of the Supreme Court authoritatively resolved the transport endorsement controversy, holding that a driver holding an LMV licence is legally authorised to drive any transport or goods carriage vehicle whose unladen weight does not exceed 7,500 kg. No separate transport endorsement is required under the Motor Vehicles Act 1988.",
    amount: "Doctrine of LMV Authorisation for Sub-7500 kg Transport Vehicles",
    takeaway:
      "Insurers cannot repudiate your commercial or private delivery vehicle claim by arguing that your LMV driving licence lacks a 'transport' badge, provided the unladen weight is under 7.5 tonnes.",
  },
];

const FAQS = [
  {
    question: "Can car insurance claim be rejected for delay in informing the insurer?",
    answer:
      "No, an insurer cannot reject a genuine motor claim solely due to delay in intimation. Under Supreme Court rulings in Gurmel Singh (2022) and Om Prakash (2017), as well as IRDAI circulars, technical delays in lodging an FIR or notifying the insurance company do not invalidate a genuine claim where the accident or theft is authentic.",
  },
  {
    question: "What if my driving licence expired 15 days before the vehicle accident?",
    answer:
      "Under Section 14 of the Motor Vehicles Act 1988, a driver is granted a statutory 30-day grace period from the date of expiry to renew their licence without retaking a driving competence test. If your accident occurred during this grace period, or if the lack of renewal did not directly cause the accident, total repudiation is illegal under the Lakhmi Chand precedent.",
  },
  {
    question: "Can the insurer deny my claim just because the hospital noted 'smell of alcohol'?",
    answer:
      "No. Under Section 185 of the Motor Vehicles Act 1988 and binding NCDRC precedents, an insurer cannot rely on subjective hospital observations like 'smell of alcohol' or 'alleged consumption'. Repudiation requires scientific proof demonstrating Blood Alcohol Concentration (BAC) exceeding 30 mg per 100 ml of blood via a breath analyser or laboratory blood test.",
  },
  {
    question: "What is the difference between claim repudiation and claim rejection in motor insurance?",
    answer:
      "Claim rejection usually refers to procedural failures (such as incomplete documentation, wrong vehicle registration number, or missing surveyor photos) that can be cured by supplying the missing records. Claim repudiation is a formal legal refusal of liability based on policy exclusion clauses (such as fraud, licence invalidity, or pre-existing conditions).",
  },
  {
    question: "Can I approach the Insurance Ombudsman if my motor claim is rejected?",
    answer:
      "Yes. Under Rule 13 and Rule 17 of the Insurance Ombudsman Rules 2017 (amended 2023), you can approach the Insurance Ombudsman within 1 year of rejection if the insurer fails to resolve your grievance within 30 days. The Ombudsman has pecuniary jurisdiction up to ₹50 Lakh, charges zero court fees, and issues binding awards within 3 months.",
  },
  {
    question: "What is a 'non-standard settlement' in car insurance disputes?",
    answer:
      "A non-standard settlement is an IRDAI-recognised formula where an insurer pays up to 75% of the admissible claim amount even if there was an administrative policy breach (such as minor delay, carrying excess passengers, or technical documentation lapses) that was not the primary cause of the accident.",
  },
  {
    question: "Motor insurance claim reject ho gaya hai, legal notice kaise bhejein?",
    answer:
      "Agar insurance company ne claim repudiate kar diya hai, toh pehle rejection letter aur surveyor report collect karein. Phir ek advocate ke madhyam se IRDAI guidelines aur Supreme Court judgments (Gurmel Singh / Lakhmi Chand) cite karte hue registered speed post se legal notice bhejein, jismein 15 dinon ka samay diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Motor Claim Rejected Over Licence, Delay or 'Drunk Driving' Clause?",
  description:
    "Car or bike insurance claim rejected? Common grounds, what courts have said, and how to challenge the insurer with a notice.",
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Legal Research Team",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T17:28:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/motor-insurance-claim-rejected-legal-notice`,
  },
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
      name: "Insurance Recovery",
      item: `${SITE_URL}/legal-notice-to-insurance-company-claim-rejection-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Motor Claim Repudiation Counter",
      item: `${SITE_URL}/motor-insurance-claim-rejected-legal-notice`,
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

export default function MotorInsuranceClaimRejectedPage() {
  const breadcrumbItems = [
    { label: "Insurance Recovery", href: "/legal-notice-to-insurance-company-claim-rejection-recovery" },
    { label: "Motor Claim Repudiation Counter", href: "/motor-insurance-claim-rejected-legal-notice" },
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
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Motor Vehicles Act 1988</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court Anti-Technical Repudiation Rules</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Motor Claim Rejected Over Licence, Delay or &apos;Drunk Driving&apos; Clause?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Anti-Repudiation Legal Rules)
              </p>
              <p>
                Insurers cannot reject car or bike claims on hyper-technical grounds. Under Supreme Court rulings in <em>Gurmel Singh (2022)</em> and <em>Lakhmi Chand (2016)</em>, intimation delay does not extinguish genuine loss, and licence defects require direct accident causation. Alcohols allegations demand blood test proof under Section 185 MV Act. Challenge arbitrary repudiations via an advocate legal notice before moving the Insurance Ombudsman (up to ₹50 Lakh) or Consumer Commission.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Gurmel Singh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Delay Is Not Fatal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">&gt;30mg/100ml</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">BAC Blood Test Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to 75%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Non-Standard Settlement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Ombudsman Free Award Limit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <MotorInsuranceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* SECTION 1: OVERVIEW */}
              <section id="heading-overview" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 1: The Regulatory &amp; Judicial Standard</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  How Indian Motor Insurers Weaponise Policy Exclusion Clauses
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Every year in India, thousands of car and two-wheeler owners face abrupt repudiation letters from general insurance companies after serious road accidents, vehicle rollover damage, or vehicle theft. Claims running from ₹40,000 to upwards of ₹15,00,000 are routinely discarded by claims managers relying on boiler-plate fine print. The four most ubiquitous rejection pretexts deployed across private and public insurers are:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-800">
                    <li>
                      <strong>Delayed Intimation (Condition No. 1):</strong> Alleging that notifying the insurer or police after 48 hours to 10 days prevents independent accident inspection or vehicle recovery.
                    </li>
                    <li>
                      <strong>Driving Licence Technicalities:</strong> Asserting that an expired licence during its 30-day renewal grace period, a licence lacking a commercial endorsement, or a driver who provided a forged licence absolves the insurer of all own-damage indemnity.
                    </li>
                    <li>
                      <strong>Unsubstantiated Drunk Driving Allegations:</strong> Exploiting stray casualty hospital remarks (&quot;smell of alcohol&quot; or &quot;patient uncooperative&quot;) without an official breath-analyser reading or laboratory blood alcohol quantification.
                    </li>
                    <li>
                      <strong>Alleged Misrepresentation or Accessory Modifications:</strong> Denying claims on grounds that an unendorsed CNG/LPG kit was fitted, aftermarket alloy wheels were installed, or pre-existing minor bumper scratches weren&apos;t disclosed during insurance policy renewal.
                    </li>
                  </ul>
                  <p>
                    The Supreme Court of India, National Consumer Disputes Redressal Commission (NCDRC), and the Insurance Regulatory and Development Authority of India (IRDAI) have repeatedly ruled that insurance contracts are contracts of indemnity designed to protect consumers against sudden financial loss. Mechanical, bad-faith repudiations on technical grounds constitute actionable deficiency in service under Section 2(11) and unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-amber-900 font-medium">
                    <strong>Honest Platform Scope:</strong> LegalRecovery drafts and serves enforceable statutory advocate demand notices and assists in preparing complaints before the Insurance Ombudsman and Consumer Commissions. We do not provide physical surveyor inspections, nor do we represent fraudulent staging of motor accidents.
                  </p>
                </div>
              </section>

              {/* SECTION 2: DECISION TREE (ARCHETYPE G1 CORE ARTEFACT) */}
              <section id="heading-decision-tree" className="scroll-mt-28 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 2: Archetype G1 Decision Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Motor Repudiation Decision Tree: Which Legal Route Overturns Your Rejection?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Navigate this decision tree based on your written rejection notice. Follow the questions to identify your strongest legal ground, required statutory forum, and exact recovery timeline:
                </p>

                {/* Inline SVG Decision Tree Flowchart */}
                <figure className="w-full bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 800 480"
                    className="w-full min-w-[700px] h-auto font-sans"
                    aria-label="Motor Insurance Claim Repudiation Decision Tree Flowchart"
                  >
                    {/* Background Grid Accent */}
                    <defs>
                      <linearGradient id="treeGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="treeGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    {/* Root Question */}
                    <rect x="250" y="20" width="300" height="60" rx="12" fill="url(#treeGradRed)" stroke="#F87171" strokeWidth="2" />
                    <text x="400" y="45" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">Motor Claim Repudiated in Writing?</text>
                    <text x="400" y="65" fill="#FCA5A5" fontSize="11" textAnchor="middle">Identify specific clause in rejection letter</text>

                    {/* Connecting Trunk */}
                    <line x1="400" y1="80" x2="400" y2="120" stroke="#94A3B8" strokeWidth="2" />

                    {/* Branching Line */}
                    <line x1="100" y1="120" x2="700" y2="120" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="100" y1="120" x2="100" y2="160" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="300" y1="120" x2="300" y2="160" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="500" y1="120" x2="500" y2="160" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="700" y1="120" x2="700" y2="160" stroke="#94A3B8" strokeWidth="2" />

                    {/* Box 1: Delay in Intimation */}
                    <rect x="20" y="160" width="160" height="75" rx="8" fill="url(#treeGradBlue)" stroke="#475569" strokeWidth="1.5" />
                    <text x="100" y="185" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">Clause 1: Delayed Intimation</text>
                    <text x="100" y="205" fill="#CBD5E1" fontSize="10" textAnchor="middle">Accident/Theft report delay</text>
                    <text x="100" y="222" fill="#94A3B8" fontSize="9" textAnchor="middle">Genuine loss proved?</text>

                    {/* Box 2: Licence Issue */}
                    <rect x="220" y="160" width="160" height="75" rx="8" fill="url(#treeGradBlue)" stroke="#475569" strokeWidth="1.5" />
                    <text x="300" y="185" fill="#FBBF24" fontSize="12" fontWeight="bold" textAnchor="middle">Licence Defect Alleged</text>
                    <text x="300" y="205" fill="#CBD5E1" fontSize="10" textAnchor="middle">Expired &lt;30d or LMV mismatch</text>
                    <text x="300" y="222" fill="#94A3B8" fontSize="9" textAnchor="middle">No causal link to crash?</text>

                    {/* Box 3: Drunk Driving */}
                    <rect x="420" y="160" width="160" height="75" rx="8" fill="url(#treeGradBlue)" stroke="#475569" strokeWidth="1.5" />
                    <text x="500" y="185" fill="#F43F5E" fontSize="12" fontWeight="bold" textAnchor="middle">Drunk Driving Clause</text>
                    <text x="500" y="205" fill="#CBD5E1" fontSize="10" textAnchor="middle">Hospital noted alcohol smell</text>
                    <text x="500" y="222" fill="#94A3B8" fontSize="9" textAnchor="middle">No quantitative BAC lab test?</text>

                    {/* Box 4: Misrepresentation */}
                    <rect x="620" y="160" width="160" height="75" rx="8" fill="url(#treeGradBlue)" stroke="#475569" strokeWidth="1.5" />
                    <text x="700" y="185" fill="#A855F7" fontSize="12" fontWeight="bold" textAnchor="middle">Non-Disclosure / Kit</text>
                    <text x="700" y="205" fill="#CBD5E1" fontSize="10" textAnchor="middle">CNG kit or prior scratch</text>
                    <text x="700" y="222" fill="#94A3B8" fontSize="9" textAnchor="middle">Immaterial to collision?</text>

                    {/* Down arrows to resolutions */}
                    <line x1="100" y1="235" x2="100" y2="280" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="300" y1="235" x2="300" y2="280" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="500" y1="235" x2="500" y2="280" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="700" y1="235" x2="700" y2="280" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2" />

                    {/* Resolution Cards */}
                    <rect x="15" y="280" width="170" height="95" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="100" y="302" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">ROUTE 1: GURMEL SINGH</text>
                    <text x="100" y="320" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">Notice citing SC 2022 Ruling</text>
                    <text x="100" y="337" fill="#94A3B8" fontSize="9" textAnchor="middle">Forum: Ombudsman / DCDRC</text>
                    <text x="100" y="355" fill="#4ADE80" fontSize="9.5" fontWeight="bold" textAnchor="middle">Result: 100% Claim + 9% Int</text>

                    <rect x="215" y="280" width="170" height="95" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
                    <text x="300" y="302" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">ROUTE 2: LAKHMI CHAND</text>
                    <text x="300" y="320" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">Fundamental Breach Defense</text>
                    <text x="300" y="337" fill="#94A3B8" fontSize="9" textAnchor="middle">Forum: Bima Bharosa / CPIO</text>
                    <text x="300" y="355" fill="#4ADE80" fontSize="9.5" fontWeight="bold" textAnchor="middle">Result: 75%-100% Settlement</text>

                    <rect x="415" y="280" width="170" height="95" rx="8" fill="#0F172A" stroke="#F43F5E" strokeWidth="1.5" />
                    <text x="500" y="302" fill="#F43F5E" fontSize="11" fontWeight="bold" textAnchor="middle">ROUTE 3: S. 185 MV ACT</text>
                    <text x="500" y="320" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">Demand BAC &gt; 30mg Proof</text>
                    <text x="500" y="337" fill="#94A3B8" fontSize="9" textAnchor="middle">Forum: Ombudsman / DCDRC</text>
                    <text x="500" y="355" fill="#4ADE80" fontSize="9.5" fontWeight="bold" textAnchor="middle">Result: Complete Reversal</text>

                    <rect x="615" y="280" width="170" height="95" rx="8" fill="#0F172A" stroke="#A855F7" strokeWidth="1.5" />
                    <text x="700" y="302" fill="#A855F7" fontSize="11" fontWeight="bold" textAnchor="middle">ROUTE 4: SECTION 45 RULE</text>
                    <text x="700" y="320" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">Separate Accessory from Impact</text>
                    <text x="700" y="337" fill="#94A3B8" fontSize="9" textAnchor="middle">Forum: Insurance Ombudsman</text>
                    <text x="700" y="355" fill="#4ADE80" fontSize="9.5" fontWeight="bold" textAnchor="middle">Result: Full Own-Damage Cover</text>

                    {/* Master Action Bar */}
                    <rect x="150" y="405" width="500" height="55" rx="10" fill="url(#treeGradRed)" stroke="#F87171" strokeWidth="1.5" />
                    <text x="400" y="428" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Universal First Step: Advocate Legal Demand Notice</text>
                    <text x="400" y="446" fill="#FEE2E2" fontSize="11" textAnchor="middle">Establish formal repudiation date • 15-day cure window • BSA 2023 evidentiary audit</text>
                  </svg>
                  <figcaption className="text-center text-[11px] text-slate-400 mt-2">
                    Figure 1: Statutory Decision Flowchart — Identifying your repudiation defense under Supreme Court precedents and IRDAI 2024 regulations.
                  </figcaption>
                </figure>

                {/* Text Fallback List for Accessibility & Search Crawlers */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 text-xs sm:text-sm text-slate-700 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Accessible Decision Tree Breakdown (Text Navigation)
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>If rejected for Delayed Intimation / Late FIR:</strong> Apply <em>Gurmel Singh (2022)</em>. The Supreme Court forbids insurers from denying genuine claims on technical reporting delays. Required Forum: GRO &rarr; Bima Bharosa &rarr; Insurance Ombudsman. Admissible award: 100% claim + 9% statutory interest.
                    </li>
                    <li>
                      <strong>If rejected for Expired Licence or LMV Transport Endorsement:</strong> Apply <em>Lakhmi Chand (2016)</em> and <em>Mukund Dewangan (2017)</em>. Unless the licence flaw was the primary direct cause of the collision, insurers cannot refuse own-damage indemnity. Expected recovery: 75% (non-standard) to 100%.
                    </li>
                    <li>
                      <strong>If rejected for Drunk Driving:</strong> Demand scientific Blood Alcohol Concentration (BAC) toxicology proof under Section 185 Motor Vehicles Act. Subjective remarks in hospital records are void under NCDRC law.
                    </li>
                    <li>
                      <strong>If rejected for CNG Kit or Aftermarket Fitment:</strong> Invoke Section 45 and IRDAI Master Circular 2024. Non-disclosure must be fraudulent and directly causally connected to the damage.
                    </li>
                  </ul>
                </div>
              </section>

              {/* INTERACTIVE PROBLEM SELECTOR TABS */}
              <MotorInsuranceProblemTabs />

              {/* SECTION 3: ROUTE SECTIONS (ARCHETYPE G1 SPECIFICATION) */}
              <section id="heading-route-delay" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200">
                  <span>Route 1 Breakdown</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Delayed Intimation: Overturning Rejection Under the Gurmel Singh Precedent
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-3">
                  <p>
                    When a vehicle collision or theft occurs, the insured&apos;s instinctive priority is providing emergency medical attention to passengers, lodging a police GD/FIR, or tracking the missing vehicle. Notifying the insurance company within 24 to 48 hours is frequently delayed by genuine physical distress. Insurers consistently exploit standard policy condition no. 1 (&quot;Notice shall be given immediately upon occurrence of any accidental loss&quot;) to issue repudiations.
                  </p>
                  <p>
                    <strong>The Statutory Counter-Rail:</strong> In <em>Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022 SCC OnLine SC 666)</em>, the Supreme Court unequivocally held:
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-1 italic bg-blue-50/50 text-slate-800 rounded-r-lg text-xs sm:text-sm">
                    &quot;While settling claims, the insurance company should not be too technical and ask for documents which were beyond the control of the insured to procure... genuine claims should not be rejected merely on technical grounds like delay in reporting to the police or the insurer.&quot;
                  </blockquote>
                  <p>
                    Furthermore, the IRDAI circular (Ref: IRDA/HLTH/MISC/CIR/216/09/2011) explicitly instructs insurers that condition-based delays must not prevent claim settlement if the delay occurred due to unavoidable circumstances.
                  </p>
                </div>

                {/* Route Fact Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-100 rounded-xl text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Statutory Deadline:</span>
                    <strong className="text-slate-900">1 Year from Repudiation Date</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Filing Cost / Fee:</span>
                    <strong className="text-emerald-700">₹0 (Free at Ombudsman)</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Primary Forum:</span>
                    <strong className="text-slate-900">Insurance Ombudsman / DCDRC</strong>
                  </div>
                </div>
              </section>

              <section id="heading-route-licence" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200">
                  <span>Route 2 Breakdown</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Driving Licence Technicalities: The &apos;Fundamental Breach&apos; Rule
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-3">
                  <p>
                    Insurers routinely deny claims alleging that the driver did not hold a valid and effective driving licence at the time of the crash. Common variations include:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-slate-800">
                    <li>The licence expired 10 to 25 days before the incident.</li>
                    <li>The driver held an LMV licence while driving a commercial delivery pickup.</li>
                    <li>The employer hired a driver who presented an ostensibly valid licence that Sarathi records later showed was improperly endorsed.</li>
                  </ol>
                  <p>
                    Under the landmark 3-judge bench ruling in <em>National Insurance Co. Ltd. v. Swaran Singh (2004) 3 SCC 297</em>, mere absence or defect of a licence does not automatically absolve the insurer. The insurer must prove that the vehicle owner committed a willful breach of policy conditions. In <em>Lakhmi Chand (2016) 3 SCC 100</em>, the Supreme Court confirmed that the insurer must establish a direct causal nexus between the alleged breach and the collision. If an oncoming truck crashed into your stationary car, the validity of your driver&apos;s licence had zero causal contribution to the collision.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-100 rounded-xl text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Statutory Grace Period:</span>
                    <strong className="text-slate-900">30 Days under Section 14 MV Act</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Non-Standard Floor:</span>
                    <strong className="text-emerald-700">75% Assessed Claim Pay-out</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Recommended Action:</span>
                    <strong className="text-slate-900">Advocate Notice + Parivahan Audit</strong>
                  </div>
                </div>
              </section>

              <section id="heading-route-drunk-driving" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200">
                  <span>Route 3 Breakdown</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The &apos;Drunk Driving&apos; Clause: Why Hospital Casualty Notes Are Not Enough
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-3">
                  <p>
                    One of the most damaging repudiation tactics is citing the policy exclusion for driving under the influence of intoxicating liquor. When injured drivers are rushed to government or private trauma centres, attending doctors often make subjective entries in the Emergency Register such as &quot;smell of alcohol present&quot; or &quot;patient disoriented, alleged alcohol intake&quot;. Claims surveyors seize upon these single lines to deny total vehicle loss claims.
                  </p>
                  <p>
                    <strong>The Section 185 MV Act Requirement:</strong> Indian law provides an objective, scientific definition of drunken driving. Under Section 185 of the Motor Vehicles Act 1988, an offence is made out only if the driver has alcohol in their blood exceeding <strong>30 mg per 100 ml of blood</strong> detected by a calibrated breath analyser or a scientific laboratory blood test (gas chromatography).
                  </p>
                  <p>
                    In <em>Sunita Goyal v. SBI General Insurance (NCDRC 2021)</em> and <em>Bachi Devi v. National Insurance</em>, the National Commission established that subjective smell or behavioural disorientation does not prove intoxication. Mouthwash, cough syrups, or metabolic ketones can produce alcohol-like odours. Without forensic laboratory quantification showing BAC &gt; 30 mg/100 ml, repudiation is legally invalid.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-100 rounded-xl text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Statutory BAC Threshold:</span>
                    <strong className="text-rose-700">&gt;30 mg per 100 ml Blood</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Burden of Proof:</span>
                    <strong className="text-slate-900">Strictly on Insurance Company</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block text-[11px] uppercase">Compensation Scope:</span>
                    <strong className="text-slate-900">Total Loss + Defamation Damages</strong>
                  </div>
                </div>
              </section>

              <section id="heading-route-misrepresentation" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200">
                  <span>Route 4 Breakdown</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Non-Disclosure, Aftermarket CNG Kits, &amp; Pre-Existing Damage Clauses
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-3">
                  <p>
                    Insurers often invoke Section 45 principles and the doctrine of <em>uberrima fides</em> (utmost good faith) to reject claims on allegations of non-disclosure. Common triggers include retrofitted sequential CNG kits, aftermarket suspension upgrades, or failure to complete RC transfer endorsement within 14 days of vehicle resale.
                  </p>
                  <p>
                    Under Section 157(2) of the Motor Vehicles Act 1988, third-party insurance transfers automatically upon vehicle ownership transfer. For own-damage claims, general insurance regulations permit policy transfer upon application within 14 days with nominal transfer fee. Regarding mechanical modifications (such as CNG fitment), if the RTO has endorsed the modification on the RC or if the modification was not the root cause of the accident (e.g. rear-end collision by a bus), the insurer cannot repudiate the entire claim.
                  </p>
                </div>
              </section>

              {/* SECTION 4: FACTS & STATUTORY TIMELINES TABLE */}
              <section id="heading-benchmarks-table" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 4: Statutory Timelines &amp; Benchmarks</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  IRDAI Master Circular 2024 Timelines vs Ground Reality
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The Insurance Regulatory and Development Authority of India (IRDAI) mandates strict turn-around-times (TAT) for surveyor appointments, claims settlement, and grievance redressal under the Master Circular on Policyholder Protection 2024:
                </p>

                <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Process Step</th>
                        <th className="p-3 sm:p-4">IRDAI Statutory Benchmark</th>
                        <th className="p-3 sm:p-4">Insurer Default Ground</th>
                        <th className="p-3 sm:p-4">Statutory Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Surveyor Appointment</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Within 48 hours of intimation</td>
                        <td className="p-3 sm:p-4">Delayed inspection causing garage parking charges</td>
                        <td className="p-3 sm:p-4">Claim parking fee reimbursement under CPA Section 2(11)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Surveyor Final Report</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Max 30 days from inspection</td>
                        <td className="p-3 sm:p-4">Withholding survey report copy from the insured</td>
                        <td className="p-3 sm:p-4">Mandatory disclosure under IRDAI Surveyor Regulations</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Claim Settlement / Rejection</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Within 30 days of survey report</td>
                        <td className="p-3 sm:p-4">Indefinite &apos;verification pending&apos; letters</td>
                        <td className="p-3 sm:p-4">Statutory bank rate + 2% penal interest from Day 31</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Grievance Redressal (GRO)</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">14 days to resolve or respond</td>
                        <td className="p-3 sm:p-4">Standard automated closure without reasoned order</td>
                        <td className="p-3 sm:p-4">Direct escalation to Bima Bharosa &amp; Insurance Ombudsman</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Insurance Ombudsman Award</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Within 3 months of complaint</td>
                        <td className="p-3 sm:p-4">Insurer fails to file response within 7 days</td>
                        <td className="p-3 sm:p-4">Ombudsman empowered to pass ex-parte binding award (July 2026 rule)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 5: VERIFIED CASE CITATIONS */}
              <section id="heading-case-citations" className="scroll-mt-28 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 5: Landmark Precedents &amp; Orders</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Judicial Precedents Overturning Unlawful Motor Claim Repudiations
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  These verified Supreme Court and National Consumer Commission (NCDRC) judgments constitute binding authority across all Indian consumer forums, Insurance Ombudsman benches, and civil courts:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, i) => (
                    <article
                      key={i}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
                          {c.citation}
                        </span>
                        <span className="text-xs font-medium text-slate-500">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4">{c.parties}</p>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-5">
                        <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">Facts of the Case:</strong>
                          <p>{c.facts}</p>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-lg border-l-3 border-slate-400">
                          <strong className="text-slate-900 block font-semibold mb-0.5">Court Holding &amp; Principle:</strong>
                          <p>{c.holding}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 bg-red-50/50 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block">
                            Award &amp; Relief Granted:
                          </span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">{c.amount}</span>
                        </div>
                        <div className="text-xs text-slate-600 sm:text-right max-w-sm">
                          <strong className="text-slate-900 block mb-0.5">Litigation Takeaway:</strong>
                          <span>{c.takeaway}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* SECTION 6: WORKED EXAMPLE WITH SPECIFIC NUMBERS */}
              <section id="heading-worked-example" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 6: Concrete Worked Example</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Worked Case Study: Reversing a ₹3,85,000 Creta Accident Claim Repudiation
                </h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5 text-xs sm:text-sm leading-relaxed text-slate-700">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                      Factual Scenario (Illustrative Commercial Dispute)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <strong>Vehicle:</strong> Hyundai Creta 1.5 SX (O) 2023 Model
                      </div>
                      <div>
                        <strong>Policy Type:</strong> Comprehensive Zero-Depreciation Cover
                      </div>
                      <div>
                        <strong>Accident Loss Assessed:</strong> ₹3,85,000 (Frontal Impact + Radiator + Airbag Deployment)
                      </div>
                      <div>
                        <strong>Repudiation Reason:</strong> 12-day intimation delay + Driver&apos;s licence expired 18 days prior
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p>
                      <strong>The Rejection:</strong> On 12 October 2025, Mr. Rohit Sharma suffered a collision on the Jaipur-Delhi highway after a tyre blowout caused the vehicle to hit the central divider. Rohit sustained severe concussion and arm fractures, remaining hospitalised for 10 days. On Day 12, his brother filed the digital claim on the insurer&apos;s portal. The insurer appointed a surveyor who assessed repair liability at ₹3,85,000. However, 25 days later, the claims department repudiated the claim in toto citing: (1) Condition 1 intimation breach (&gt;48 hours delay); and (2) Driver&apos;s licence expired on 24 September 2025.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rohit engaged LegalRecovery.in. An advocate drafted and dispatched a comprehensive statutory legal notice to the insurer&apos;s Grievance Redressal Officer and Head of Motor Claims:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-800">
                      <li>
                        <strong>Delay Counter:</strong> Attached certified hospital discharge records and highway patrol GD entry proving incapacitation, invoking the Supreme Court&apos;s binding <em>Gurmel Singh (2022)</em> and <em>Om Prakash (2017)</em> rulings.
                      </li>
                      <li>
                        <strong>Licence Grace Period Counter:</strong> Cited Section 14 of the Motor Vehicles Act 1988 proving the 30-day statutory grace period, demonstrating that Rohit was entitled to drive without re-examination.
                      </li>
                      <li>
                        <strong>Causation Counter:</strong> Attached the mechanical inspection report showing the collision was triggered by a tyre rupture, satisfying the <em>Lakhmi Chand</em> test that the licence expiry had zero causal nexus with the accident.
                      </li>
                    </ul>
                    <p>
                      <strong>The Outcome:</strong> Upon receiving the advocate legal notice with notice of impending Bima Bharosa and Insurance Ombudsman filing, the insurer&apos;s central claims committee recalled the repudiation letter within 14 working days. The insurer released the full repair settlement of <strong>₹3,85,000</strong> directly to the authorised Hyundai workshop and paid <strong>₹15,000</strong> towards garage storage charges.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">
                        Net Recovery Breakdown
                      </span>
                      <span className="text-base sm:text-lg font-black text-emerald-950">
                        ₹3,85,000 Repair Claim + ₹15,000 Storage Saved = ₹4,00,000 Total Relief
                      </span>
                    </div>
                    <span className="text-xs text-emerald-700 font-medium">Resolved in 18 Calendar Days</span>
                  </div>
                </div>
              </section>

              {/* SECTION 7: EVIDENCE CHECKLIST */}
              <section id="heading-evidence-checklist" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 7: Evidentiary Audit</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Motor Claim Repudiation Evidence Checklist: 8 Documents You Must Secure
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Before serving an advocate legal notice or filing before the Insurance Ombudsman under Rule 13, assemble these 8 essential pieces of documentary and electronic evidence:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                      <h3 className="font-bold text-slate-900 text-sm">Formal Repudiation Letter</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      The official signed letter or email from the insurance company specifying the exact policy condition number, clause, or reason for claim denial.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                      <h3 className="font-bold text-slate-900 text-sm">Licensed Surveyor&apos;s Loss Report</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      The detailed line-item assessment by the IRDAI-licensed surveyor showing parts allowed, labour charges, depreciation deductions, and salvage value.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                      <h3 className="font-bold text-slate-900 text-sm">Police GD / Spot Panchanama / FIR</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      General Diary extract, spot panchanama, or First Information Report registered at the jurisdictional police station proving accident time, date, and location.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">4</span>
                      <h3 className="font-bold text-slate-900 text-sm">Parivahan / Sarathi DL Audit</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Certified digital driving licence extract from mParivahan or Digilocker showing validity period, vehicle class authorisations, and renewal application logs.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">5</span>
                      <h3 className="font-bold text-slate-900 text-sm">Hospital MLC &amp; Toxicology Report</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Emergency Medico-Legal Certificate (MLC). If drunk driving is alleged, obtain the lab blood test report to confirm absence of statutory BAC &gt; 30mg/100ml.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">6</span>
                      <h3 className="font-bold text-slate-900 text-sm">Intimation Call / SMS / App Logs</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Digital logs proving when you first called the insurer&apos;s toll-free helpline, sent an SMS, or submitted the in-app claim request, backed by Section 63 BSA 2023.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">7</span>
                      <h3 className="font-bold text-slate-900 text-sm">Garage Repair Estimates &amp; Tax Invoices</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Itemised tax invoices for spare parts and labour issued by the authorised OEM workshop, accompanied by payment receipts or gate passes.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0">8</span>
                      <h3 className="font-bold text-slate-900 text-sm">RC &amp; Fitness Certificate</h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Registration Certificate (RC), valid PUC, and for transport or commercial vehicles, the valid Fitness Certificate and road permit.
                    </p>
                  </div>
                </div>
              </section>

              {/* NOTICE CTA SECTION (PRIMARY) */}
              <section className="w-full">
                <MotorInsuranceNoticeCTA />
              </section>

              {/* SECTION 8: FAQS */}
              <section id="heading-faqs" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  <span>Part 8: Common Queries</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions on Motor Claim Repudiation &amp; Legal Notices
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:none cursor-pointer"
                    >
                      <summary className="flex items-center justify-between gap-3 text-slate-900 font-bold text-xs sm:text-sm md:text-base">
                        <span>{faq.question}</span>
                        <svg
                          className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 9: PRIMARY SOURCES & LEGAL REFERENCES */}
              <section id="heading-sources" className="scroll-mt-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-300">
                  <span>Part 9: Sources &amp; Legal References</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Authoritative Statutory Statutes, Circulars &amp; Gazette References
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-red-600 hover:underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Contextual Internal Links Section */}
              <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Related Insurance Redressal Portals &amp; Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-800 font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Repudiation Legal Notice Hub
                  </Link>
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-800 font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bima Bharosa &amp; Ombudsman Escalation Guide
                  </Link>
                  <Link
                    href="/claim-repudiated-vs-rejected-difference"
                    className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-800 font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Claim Repudiated vs Rejected
                  </Link>
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-800 font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Health Insurance Claim Rejection Counter
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-800 font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advocate Notice Transparent Pricing
                  </Link>
                </div>
              </div>

              {/* Related Recovery Guides Shared Component */}
              <RelatedRecoveryGuides currentSlug="motor-insurance-claim-rejected-legal-notice" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
