"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "minimum-wage-vda-arrears",
    tabLabel: "Statutory VDA Arrears Refusal",
    title: "Plant Finance Refuses ₹8L–₹25L Semi-Annual VDA Escalation Citing 'Fixed-Rate Work Order'",
    cause:
      "State Labour Departments (e.g., Maharashtra, Haryana, Gujarat, Tamil Nadu) notify revisions in Variable Dearness Allowance (VDA) twice a year under the Minimum Wages Act. Under Section 12 and penal provisions, the labour contractor must disburse enhanced minimum wages immediately. When the contractor submits supplementary escalation debit notes or arrear invoices, plant finance rejects them claiming: 'Our purchase order specifies a fixed lump-sum monthly rate per shift; we cannot pay price escalation without corporate headquarter approval.'",
    legalBasis:
      "Supreme Court judgment in Tarapore & Co. v. State of M.P. (1994) 3 SCC 528 firmly establishes that statutory wage increases enacted by sovereign legislative notification are mandatory pass-through liabilities on the principal employer. Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970 enforces the principal employer's ultimate wage obligation. Contractual fixed-rate clauses cannot waive or override statutory minimum wage laws under Section 23 of the Indian Contract Act, 1872.",
    steps: [
      {
        step: "1. Collate Gazette Notification & Wage Disbursement Ledger",
        description:
          "Extract the official State Gazette notification prescribing revised basic + VDA rates. Prepare worker-wise bank transfer statements (NEFT/RTGS/IMPS) proving the exact differential wage paid out of the contractor's working capital.",
      },
      {
        step: "2. Formal Statutory Escalation Demand under Tarapore Principle",
        description:
          "Issue a formal statutory demand notice citing Tarapore & Co., Section 12 of the Minimum Wages Act, 1948, and Section 21(4) of CLRA Act. Give a 15-day peremptory window to clear the arrears.",
      },
      {
        step: "3. File MSME Samadhaan Petition with 3x Compound Interest",
        description:
          "Lodge an online petition before the Micro and Small Enterprise Facilitation Council (MSEFC) under Section 18 of the MSMED Act, claiming the wage revision arrears plus 3x RBI compound interest from the statutory due date.",
      },
    ],
    statutoryRule:
      "Minimum Wages Act, 1948 (s.12) & CLRA Act, 1970 (s.21(4)) — Statutory wage escalation cannot be contracted out via fixed-rate purchase orders.",
  },
  {
    id: "biometric-vs-gate-register",
    tabLabel: "Biometric vs Gate Log Deductions",
    title: "Plant HR Deducts 15%–25% Billing Citing Biometric Server Glitches & Punch Mismatches",
    cause:
      "A factory operates biometric fingerprint or facial turnstiles at entry gates. When plant network downtime, sensor unresponsiveness, or heavy shift changeover congestion causes missed punches, plant HR unilaterally disallows thousands of recorded man-hours. Despite physical security guard logbooks and shop-floor supervisor shift attendance sheets showing full manpower deployment, plant accounts deducts ₹3 Lakh to ₹7 Lakh from the monthly invoice.",
    legalBasis:
      "Contemporaneous certification of shift rosters by shop-floor foremen and physical entry records maintained by security personnel constitute primary documentary evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. Under Section 121 of BSA (Estoppel by Conduct) and Supreme Court precedent in Food Corporation of India v. Workers Union (2005) 5 SCC 305, a principal employer that accepts labor production output cannot retrospectively repudiate attendance certified by its own supervisors.",
    steps: [
      {
        step: "1. Secure Dual-Signed Physical Muster Sheets & Gate Registers",
        description:
          "Compile daily Form D shift allocation sheets co-signed by the contractor supervisor and the plant's production manager, alongside digital photographs of the security entry gate logbook.",
      },
      {
        step: "2. Rebut Biometric Discrepancy Log within 48 Hours",
        description:
          "Serve a written reconciliation notice establishing that turnstile machine errors caused data drops, supported by production shift output records demonstrating the line operated at full rated capacity.",
      },
      {
        step: "3. Invoke Quantum Meruit & Estoppel under Contract Act",
        description:
          "Demand full payment under Section 70 of the Indian Contract Act, 1872 (obligation of person enjoying benefit of non-gratuitous act) and Section 121 of BSA 2023, warning of immediate MSEFC escalation.",
      },
    ],
    statutoryRule:
      "BSA 2023 s.63 & s.121 + Indian Contract Act s.70 — Principal employer cannot retain the commercial benefit of deployed factory labor while withholding billing on machine glitch pretexts.",
  },
  {
    id: "ecr-challan-audit-trap",
    tabLabel: "ECR PF/ESIC Audit Freeze",
    title: "Plant Finance Freezes Current Month Billing Demanding EPFO Credit Proof Before Releasing Funds",
    cause:
      "Plant accounts departments demand that before releasing the current month's invoice (e.g., September billing due by October 10th), the contractor must provide the official EPFO ECR challan and TRRN payment receipt for September itself. Because EPFO statutory dues are payable by the 15th of the following month and contractor working capital depends on the client's invoice clearance, plant finance uses this chicken-and-egg audit pretext to hold payments for 60 to 90 days.",
    legalBasis:
      "Under CLRA Act Section 21, the contractor must disburse wages by the 7th or 10th of the month. EPFO statutory compliance guidelines permit deposit of contributions up to the 15th. Industry best practices and statutory law establish that submission of the preceding month's ECR challan, TRRN payment receipt, wage register (Form B), and bank disbursement certificates fulfills statutory compliance prerequisites. Withholding current billing beyond 45 days violates Section 15 of the MSMED Act, 2006.",
    steps: [
      {
        step: "1. Furnish Preceding Month ECR & Current Bank Disbursement Proof",
        description:
          "Submit the verified Electronic Challan-cum-Return (ECR), TRRN receipt for the immediately preceding month, accompanied by bank transaction confirmation proving direct wage credits into workers' bank accounts for the current billing cycle.",
      },
      {
        step: "2. Serve 45-Day MSMED Statutory Compliance Stop Notice",
        description:
          "Issue a formal legal communication reminding plant finance that Section 15 of MSMED Act mandates invoice settlement within 45 days, overriding internal SOPs, and triggering mandatory compound interest under Section 16.",
      },
      {
        step: "3. Notify Principal Employer of CLRA Vicarious Exposure",
        description:
          "Highlight that withholding billing imperils ongoing statutory compliance, placing the principal employer at risk of direct prosecution under Section 25 of the CLRA Act and Section 14B of the EPF Act.",
      },
    ],
    statutoryRule:
      "MSMED Act s.15 & EPF Act s.14B — Internal plant audit cycles cannot supersede the 45-day statutory payment ceiling once wage disbursement certificates are submitted.",
  },
  {
    id: "overnight-termination-penalties",
    tabLabel: "Overnight Swap & Bogus Penalties",
    title: "Plant Replaces Contractor Overnight and Imposes ₹15L–₹35L 'Line Stoppage / Scrap' Penalties",
    cause:
      "After accumulating 3 to 5 months of pending invoices, the factory brings in a new manpower agency on the 1st of the month, bars the existing contractor's workers from the gates, and withholds all pending bills and security deposits. When pressed, the plant issues a unilateral debit note citing: '₹22 Lakh loss due to production line stoppage and excessive scrap generation caused by unskilled contractor workers.'",
    legalBasis:
      "Under Supreme Court doctrine in Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353, belated, unadjudicated counterclaims manufactured after termination are rejected as spurious afterthoughts. Under Sections 73 and 74 of the Indian Contract Act, 1872, liquidated damages or penalties cannot be unilaterally deducted without proving actual suffered loss through an independent joint inquiry.",
    steps: [
      {
        step: "1. Demand Immediate Joint Inspection & Inquiry Records",
        description:
          "Issue an immediate evidentiary requisition demanding shift quality logs, scrap analysis reports, and proof of contemporaneous notice given during the contract term before the unilateral debit note was fabricated.",
      },
      {
        step: "2. Serve Comprehensive Pre-Litigation Legal Demand Notice",
        description:
          "Deliver an advocate-drafted statutory demand notice detailing pending invoices, illegally seized security deposits, and wrongful penalty debit notes, requiring payment within 15 days.",
      },
      {
        step: "3. Multi-Pronged Escalation via MSEFC & Section 43B(h) Audit Alert",
        description:
          "Initiate MSEFC conciliation for unpaid principal plus 3x compound interest, while serving notice to the client's statutory auditors regarding overdue MSME dues subject to tax disallowance under Section 43B(h).",
      },
    ],
    statutoryRule:
      "Mobilox Pre-Existing Dispute Rule & Indian Contract Act s.74 — Unilateral penalty debit notes raised post-termination carry zero evidentiary validity before statutory forums.",
  },
];

export default function LabourContractorScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
      <div className="border-b border-slate-800 pb-4 mb-6">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/60 border border-red-800/60 px-2.5 py-1 rounded-full">
          Operational Failure Modes
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 mt-2">
          Interactive Resolution Engine for Industrial Labour Billing Disputes
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Select a factory default pattern below to inspect the statutory rebuttal, legal precedents, and actionable recovery roadmap.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin no-scrollbar border-b border-slate-800">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="mt-6 space-y-6">
        <div>
          <h4 className="text-base sm:text-lg md:text-xl font-bold text-red-400 leading-snug">
            {activeScenario.title}
          </h4>
        </div>

        {/* Failure Mode & Root Cause */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5">
          <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">
            Default Mechanism & Factory Resistance
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeScenario.cause}
          </p>
        </div>

        {/* Legal Ground & Judicial Precedent */}
        <div className="bg-slate-800/90 border-l-4 border-[#DC2626] rounded-r-xl p-4 sm:p-5">
          <p className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1.5">
            Statutory Counter & Precedent Authority
          </p>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
            {activeScenario.legalBasis}
          </p>
        </div>

        {/* Tactical Step-by-Step SOP */}
        <div>
          <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
            Contractor Recovery Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-200 leading-tight">
                    {item.step}
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Hook Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">Governing Legal Hook:</span>
          <span className="text-red-400 font-mono text-[10px] sm:text-xs text-right max-w-[70%]">
            {activeScenario.statutoryRule}
          </span>
        </div>
      </div>
    </div>
  );
}
