"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SchoolsEdTechScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const SCHOOLS_EDTECH_SCENARIOS: SchoolsEdTechScenario[] = [
  {
    id: "k12-parent-fees",
    tabLabel: "Private School Fee Arrears",
    badge: "Ticket ₹25K – ₹5L / Student | RTE & HC Safe",
    title: "Recovering Chronic K-12 Tuition & Transport Arrears From Affluent Parents Without Withholding TCs",
    ticketBand: "₹25,000 – ₹5,00,000 per student across 50–500 chronic defaulting families",
    statutoryTrigger: "RTE Act s.5(3) + High Court TC Mandates + Order XXXVII CPC on Admission Undertaking",
    bottleneck:
      "Delhi, Madras, Kerala, and Bombay High Courts strictly prohibit schools from withholding Transfer Certificates (TCs), Board admit cards, or marksheets over unpaid fees—and rogue recovery agents trigger instant DEO show-cause notices and viral social media backlash. Meanwhile, affluent parents treat unaided schools as zero-interest credit lines, walking away with TCs while leaving ₹1.5L–₹4L arrears unpaid.",
    legalMechanism:
      "Every High Court order barring TC retention simultaneously affirms the school Trust's lawful right to recover arrears as a civil debt strictly from the contracting parent or guardian. Pairing an explicit Child-Safe Safe-Harbour Disclaimer (affirming the student's academic and TC rights remain untouched) with the signed Enrollment Fee Undertaking and ERP fee ledger supports summary recovery under Order XXXVII CPC and Section 138 NI Act on bounced fee cheques.",
    operationalSteps: [
      {
        step: "1. Issue TC Cleanly & Lock Admission Undertaking",
        detail:
          "Never detain the student or withhold the TC/marksheet. Export the signed Admission Form, Fee Undertaking, ERP ledger statement, and prior fee reminders under BSA Section 63.",
      },
      {
        step: "2. Serve RTE-Safe Fact-Verified Notice Strictly to Parents",
        detail:
          "Dispatch batch civil demand notices addressed solely to the earning Parent/Guardian containing an explicit RTE s.5(3) & NCPCR child-protection disclaimer.",
      },
      {
        step: "3. Escalate Chronic Defaulters via Order 37 / s.138",
        detail:
          "Convert unresolved accounts into Order XXXVII CPC summary suits or Section 138 NI Act / PSS Act s.25 complaints where fee cheques or NACH mandates bounced.",
      },
    ],
    recommendedLinks: [
      {
        label: "Recover Fees Without Withholding TC Guide",
        href: "/how-private-schools-recover-unpaid-fees-without-withholding-tc",
      },
      {
        label: "RTE-Safe Parent Notice Template (Word)",
        href: "/templates/school-compliant-parent-fee-recovery-legal-notice-format",
      },
      {
        label: "Bulk School Ledger CSV Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
  {
    id: "university-hostel",
    tabLabel: "University & Hostel Dues",
    badge: "Ticket ₹1.5L – ₹25L | UGC Compliant",
    title: "Private University, Medical & Engineering College Semester, Hostel & Mess Fee Recovery",
    ticketBand: "₹1,50,000 – ₹25,00,000 per student (multi-semester tuition, hostel & caution shortfalls)",
    statutoryTrigger: "UGC Certificate-Retention Rules + Contract Act Co-Guarantor Liability + PSS s.25 / NI s.138",
    bottleneck:
      "Private universities and deemed medical/engineering colleges face acute cash-flow leakage when students complete 3–6 semesters or exit mid-course after defaulting on hostel, mess, and tuition installments. Under UGC guidelines, institutions cannot hold original degree certificates hostage, leaving Registrars and CFOs unable to enforce post-dated cheques or NACH mandates.",
    legalMechanism:
      "Enrollment bonds co-signed by earning parents or corporate sponsors as joint co-guarantors create independent contractual liability enforceable in civil courts without touching degree issuance. Where semester installment cheques or NACH e-mandates dishonour, Section 138 NI Act and Section 25 of the Payment and Settlement Systems Act, 2007 provide criminal prosecution leverage within 30 days of bounce.",
    operationalSteps: [
      {
        step: "1. Compile Co-Guarantor Bond & Hostel ERP Ledger",
        detail:
          "Extract the signed admission/hostel allotment bond, parent co-guarantor KYC, biometric hostel/mess attendance logs, and semester fee ledgers.",
      },
      {
        step: "2. Trigger 30-Day NI s.138 / PSS s.25 Statutory Notice",
        detail:
          "Serve mandatory statutory demand notices within 30 days of cheque or NACH dishonour on both the adult student and co-guarantor parent.",
      },
      {
        step: "3. File Summary Civil Recovery Against Co-Guarantors",
        detail:
          "Pursue Order XXXVII CPC summary suits on admitted fee schedules while keeping original academic certificates compliant with UGC norms.",
      },
    ],
    recommendedLinks: [
      {
        label: "University & College Semester Fee Recovery",
        href: "/private-university-medical-engineering-college-semester-fee-recovery",
      },
      {
        label: "Cheque Bounce & Signature Mismatch Guide",
        href: "/cheque-bounce-account-closed-signature-mismatch",
      },
      {
        label: "Test 1 Live University Default (₹999)",
        href: "/user/new-recovery",
      },
    ],
  },
  {
    id: "edtech-publishers-bus",
    tabLabel: "EdTech, Publishers & Bus Fleets",
    badge: "Ticket ₹5L – ₹3Cr | Suing School Trusts",
    title: "B2B Smart-Class, School ERP, Textbook Publishers & Yellow-Bus Fleet Recovery From School Trusts",
    ticketBand: "₹5,00,000 – ₹3,00,00,000 in annual smart-class annuities, book supplies & transport bills",
    statutoryTrigger: "Societies Registration Act s.6 / Indian Trusts Act + MSMED s.15–18 + Order XXXVII CPC",
    bottleneck:
      "B2B EdTech vendors, smart-class integrators, textbook publishers, and yellow-bus fleet contractors routinely lose cases or face years of delay because notices and suits are drafted against the 'School Brand Name'—which is not a juristic person! Meanwhile, school managements collect earmarked smart-class or transport fees from 1,500+ parents upfront in April and stall vendor payouts for 6–12 months.",
    legalMechanism:
      "Under Section 6 of the Societies Registration Act, 1860 (and Indian Trusts Act / Section 8 Companies Act), legal proceedings must name the Registered Society/Trust through its President/Secretary or all Trustees. Pairing Trust-level service with signed installation certificates, school ERP usage logs, book delivery challans, and Udyam MSMED Act s.15–18 (3x RBI compound interest) compels rapid settlement before the new academic session.",
    operationalSteps: [
      {
        step: "1. Identify Exact Juristic Entity (Society / Trust / Sec. 8)",
        detail:
          "Verify the school's affiliation/trust deed and address notices strictly to the Registered Society/Trust via its President, Secretary, and Authorized Signatory.",
      },
      {
        step: "2. Attach Delivery Challans, Hardware Logs & Fee Proof",
        detail:
          "Bundle signed smart-class commissioning reports, publisher GRs/challans, or RTO bus permit logs under BSA Section 63.",
      },
      {
        step: "3. Serve Pre-Session MSMED / Order 37 Demand",
        detail:
          "Launch December–January demand waves for publishers and 45-day MSMED / Order XXXVII CPC notices for EdTech and bus fleet arrears.",
      },
    ],
    recommendedLinks: [
      {
        label: "B2B Smart-Class & School ERP Recovery",
        href: "/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools",
      },
      {
        label: "Textbook Publisher & Uniform Distributor Guide",
        href: "/school-textbook-publisher-uniform-stationery-distributor-recovery",
      },
      {
        label: "School Bus Fleet Contractor Trust Recovery",
        href: "/school-bus-transport-fleet-contractor-unpaid-trust-dues-recovery",
      },
    ],
  },
  {
    id: "coaching-skill-grants",
    tabLabel: "Coaching, L&D & Skill Grants",
    badge: "Ticket ₹3L – ₹2Cr+ | IP, CPC s.80 & Writs",
    title: "Coaching Franchise Royalties, Corporate L&D Invoices & PMKVY / DDU-GKY Skill-Grant Tranches",
    ticketBand: "₹3,00,000 – ₹2,00,00,000 across franchise royalties, L&D workshops & govt skill milestones",
    statutoryTrigger: "Commercial Courts Act s.2(1)(c) + Arbitration s.9 + CPC s.80 & Art. 226 Mandamus",
    bottleneck:
      "Test-prep coaching franchisors suffer franchisees withholding royalty shares, poaching star faculty, and continuing to display branded signboards post-termination. Separately, corporate L&D vendors get stalled over subjective feedback excuses, while NSDC/PMKVY/DDU-GKY/SSDM skill-training partners wait 12–24 months for audited tranche releases from State Skill Missions.",
    legalMechanism:
      "Franchise agreements fall squarely under Commercial Courts Act Section 2(1)(c)(ix)/(xvii), enabling urgent Section 9 Arbitration interim injunctions against unauthorized signboard/study-material IP use. For delayed PMKVY/SSDM skill-training tranches after batch certification, a statutory Section 80 CPC notice to the State Skill Mission sets up an Article 226 High Court writ of mandamus for undisputed audited payouts.",
    operationalSteps: [
      {
        step: "1. Segregate Commercial IP vs Government Grant Track",
        detail:
          "Audit franchise royalty ledgers and Copyright study-material logs separately from SDMS/NSDC batch certification and placement records.",
      },
      {
        step: "2. Serve Section 9 / Commercial Notice or CPC s.80",
        detail:
          "Issue urgent trademark/royalty cessation notices to defaulting coaching franchisees, or 60-day Section 80 CPC notices to State Skill Development Missions.",
      },
      {
        step: "3. Enforce via Arbitration, MSEFC or High Court Writ",
        detail:
          "Pursue Section 9 interim injunctions for franchise IP, MSME Samadhaan + s.43B(h) for corporate L&D, and Article 226 writs for verified skill grants.",
      },
    ],
    recommendedLinks: [
      {
        label: "Coaching Franchise Royalty & Poaching Guide",
        href: "/coaching-institute-franchise-royalty-and-installment-bounce-recovery",
      },
      {
        label: "PMKVY / DDU-GKY / SSDM Skill Grant Recovery",
        href: "/pmkvy-ddu-gky-nsdc-csr-skill-training-partner-grant-tranche-recovery",
      },
      {
        label: "Section 80 CPC Notice to Government Guide",
        href: "/law/section-80-cpc-notice-to-government",
      },
    ],
  },
];

export default function SchoolsEdTechHubScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCHOOLS_EDTECH_SCENARIOS[0].id);
  const current =
    SCHOOLS_EDTECH_SCENARIOS.find((s) => s.id === activeTab) || SCHOOLS_EDTECH_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Education and EdTech B2B recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCHOOLS_EDTECH_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-600">
            {current.ticketBand}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
          {current.title}
        </h3>
        <p className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 mb-5">
          Primary Statutory Hook: {current.statutoryTrigger}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Institutional Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Lawful Creditor Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mb-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-3">
            3-Step Execution Workflow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.operationalSteps.map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <p className="text-xs font-bold text-white mb-1">{item.step}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-slate-500 mr-1">Deep-Dive Guides:</span>
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {lnk.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
