"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "police-threat-particular-lien",
    tabLabel: "1. Police Threat vs Sec 170 Lien",
    title: "Principal OEM Demands Dispatch of Fresh Machined Batch While Defaulting on Past Bills & Threatening Police Complaint",
    badge: "Contract Act s.170 & BNS s.316 Shield",
    buyerProfile:
      "Tier-1 automotive component OEMs, heavy engineering pump/valve manufacturers, and industrial valve assemblers in Bhosari (Pune), Peenya (Bengaluru), Sanand, and Manesar.",
    pretext:
      "The principal manufacturer delivered ₹25 Lakh worth of raw SG iron castings or forged steel blanks under a GST Rule 55 delivery challan for 5-axis CNC finish machining. The job-worker expended cutting tools, coolant, CNC cycle hours, and skilled labour worth ₹6.8 Lakh. When the job-worker requests clearance of past overdue labour invoices before loading the truck, the principal's procurement head threatens: 'You cannot hold our raw material. If you do not release our castings within 24 hours, we will lodge an FIR for criminal breach of trust and theft against your directors.'",
    legalReality:
      "Under Section 170 of the Indian Contract Act, 1872, every bailee who has rendered service involving the exercise of labour or skill upon goods bailed to them has a statutory right to retain possession of those goods until they receive lawful remuneration for the services rendered. Retaining processed goods under a statutory bailee lien is a legitimate civil self-help remedy. It completely negates the 'dishonest intention' or mens rea required for criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Section 405/406). However, the lien applies strictly to the batch worked upon, unless a general lien is contractually agreed.",
    statutoryHook:
      "Indian Contract Act 1872 s.170 (Particular Lien) + BNS 2023 s.316 (Absence of Mens Rea in Civil Lien) + MSMED Act 2006 s.15",
    actionProtocol: [
      "Issue an immediate formal 'Statutory Intimation of Bailee Particular Lien under Section 170' by email and speed post before the OEM approaches police.",
      "Segregate and catalog the exact batch of goods upon which labour was expended, attaching machine-hour logs and CMM inspection sheets.",
      "Tender an itemized labour invoice for the current batch and offer conditional delivery strictly upon immediate escrow or RTGS credit.",
      "Submit a proactive representation to the local Superintendent of Police / Station House Officer (SHO) explaining the ongoing civil contractual bailee lien.",
    ],
  },
  {
    id: "scrap-burning-loss-debit-notes",
    tabLabel: "2. Arbitrary Burning Loss Cuts",
    title: "OEM Imposes Arbitrary 15–20% Debit Notes for Alleged Excess Swarf, Scrap, or Burning Loss",
    badge: "Contract Act s.73 & Mass Balance Audit",
    buyerProfile:
      "Foundries, induction furnace casting units, hot-die forging plants, and CNC sheet-metal laser cutting job-workers.",
    pretext:
      "A laser cutting and CNC bending vendor processes 50 metric tons of customer-supplied SS 304 and alloy steel plates. Standard industry engineering standards recognize a 6% to 9% kerf, skeleton, and trim scrap loss. Six months after dispatch, the principal's accounts department unilaterally debits ₹8.4 Lakh against unpaid job-work invoices, alleging 'excessive wastage beyond theoretical nesting drawings,' without conducting a joint physical weighment or scrap return reconciliation.",
    legalReality:
      "Under Section 73 of the Indian Contract Act, 1872, damages cannot be unilaterally assessed or debited without mutual agreement or judicial adjudication. An OEM cannot invent arbitrary scrap recovery rates post facto unless stipulated in the original Purchase Order (PO). Under CGST Rule 55 and Section 143, normal manufacturing loss is legally recognized. If the job-worker accounts for input-output norms verified by an accredited Chartered Engineer or metallurgist, the OEM's arbitrary debit notes constitute illegal deductions and breach of contract.",
    statutoryHook:
      "Indian Contract Act 1872 s.73 (Unilateral Deductions Void) + CGST Act s.143(5) (Normal Manufacturing Scrap Rules) + MSMED Act s.16",
    actionProtocol: [
      "Produce weighbridge inward/outward gross-tare slips, computerized CNC nesting layouts, and scrap generation manifests.",
      "Issue a formal rejection of unilateral debit notes within 7 days, placing the OEM on notice that unverified deductions are legally void.",
      "Commission an independent Chartered Engineer's Input-Output Mass Balance Report certifying normal industry wastage for the alloy grade.",
      "File a delayed payment claim before the MSEFC under Section 18 of the MSMED Act for full invoice value plus 3x RBI compound interest.",
    ],
  },
  {
    id: "gst-challan-one-year-reversal",
    tabLabel: "3. 1-Year CGST Sec 143 Trap",
    title: "Principal Stalls Payment While Components Near 1-Year GST Challan Deemed Supply Expiry",
    badge: "CGST s.143 & ITC-04 Deemed Supply",
    buyerProfile:
      "Precision toolrooms, aerospace CNC job-shops, plastic injection mould makers, and heavy structural fabrication units.",
    pretext:
      "The principal sent forged blanks and tool steel worth ₹40 Lakh under a Job-Work Delivery Challan (Form GST Rule 55). Machining was completed within 45 days, but the principal stopped responding to payment demands and avoided issuing return instructions. As the statutory 1-year deadline under Section 143(1)(a) of the CGST Act approaches, the principal attempts to coerce the job-worker into accepting a 50% haircut under threat of tax penalties.",
    legalReality:
      "Section 143(3) of the CGST Act, 2017 establishes that if inputs sent on job-work are not returned to the principal within 1 year (or 3 years for capital goods/dies), they are deemed to have been supplied by the principal to the job-worker on the original challan date. The principal must pay CGST/SGST/IGST with interest from the original dispatch date and reverse input tax credit (ITC) in Form GST ITC-04. The tax liability and penal interest rest entirely on the principal manufacturer, not the job-worker.",
    statutoryHook:
      "CGST Act 2017 s.143(3) & s.143(4) (Deemed Supply on Principal) + GST Rule 55 + MSMED Act s.15",
    actionProtocol: [
      "Send a 60-day advance statutory intimation warning the principal of the approaching 1-year Section 143 deadline.",
      "State unequivocally that failure to clear labour dues and take delivery will result in statutory deemed supply reporting.",
      "Notify the principal's statutory auditors and CFO regarding the mandatory tax reversal and interest liability under CGST Section 143(3).",
      "Couple the GST warning with an immediate MSMED Act Section 18 filing and Section 43B(h) income tax disallowance notice.",
    ],
  },
  {
    id: "delayed-line-rejection-debit-note",
    tabLabel: "4. Belated Line Rejections",
    title: "OEM Debits CNC Machining Bills Months Later Alleging 'Assembly Line Fitment Failure' After PDI Approval",
    badge: "Sale of Goods Act s.42 & Section 170 Protection",
    buyerProfile:
      "Automotive Tier-1 transmission, steering, brake disc, and engine bracket machining sub-contractors.",
    pretext:
      "A precision turning vendor delivers 10,000 machined bushes. The components passed Pre-Dispatch Inspection (PDI) at the job-worker's facility and were cleared at the OEM's inward quality gate. Three months later, after consuming 7,000 pieces in vehicle assembly, the OEM's quality manager claims the remaining 3,000 parts have bore taper errors, issuing a debit note for the entire batch's labour charges plus alleged factory downtime charges.",
    legalReality:
      "Under Section 42 of the Sale of Goods Act, 1930 (applicable by analogy to industrial bailment contracts) and Section 73 of the Contract Act, once goods pass inward quality inspection and are integrated into the buyer's production stream, the right of rejection is extinguished. A buyer cannot sit on industrial components for months, consume the majority, and then unilaterally forfeit labour charges for the entire lot. Consequential 'line stoppage' damages cannot be claimed unless specifically contracted as liquidated damages.",
    statutoryHook:
      "Sale of Goods Act s.42 (Deemed Acceptance) + Indian Contract Act s.73 (Remote Consequential Loss Barred) + BSA 2023 s.63",
    actionProtocol: [
      "Collate signed PDI inspection reports, inward Goods Receipt Notes (GRN), and Initial Sample Inspection Reports (ISIR/PPAP Level 3).",
      "Demonstrate partial consumption (70% integration into finished vehicles) as conclusive evidence of quality acceptance.",
      "Issue a formal legal notice disputing the belated debit note and rejecting unliquidated factory downtime claims.",
      "Initiate Commercial Summary Suit under Order XXXVII CPC or MSME Samadhaan conciliation for the entire withheld balance.",
    ],
  },
];

export default function JobWorkRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl p-5 sm:p-7 md:p-8 text-white border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 px-2.5 py-1 rounded-full">
            Commercial Dispute Explorer
          </span>
          <p className="text-base sm:text-lg font-bold text-white mt-1.5">
            4 Critical Job-Work Failure Modes &amp; Statutory Protocols
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Select a scenario to view operational &amp; statutory remedies
        </p>
      </div>

      {/* Tabs list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left flex flex-col justify-between ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/50"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{sc.tabLabel}</span>
              <span className={`text-[10px] mt-1 line-clamp-1 ${isActive ? "text-red-100" : "text-slate-400"}`}>
                {sc.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="mt-6 bg-slate-800/60 rounded-xl p-5 sm:p-6 border border-slate-700/60 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-base sm:text-lg font-bold text-white leading-snug">
            {activeScenario.title}
          </p>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800 shrink-0">
            {activeScenario.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
            <span className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
              Buyer Profile &amp; Corridor
            </span>
            <p className="text-slate-200 leading-relaxed">{activeScenario.buyerProfile}</p>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
            <span className="block text-[10px] uppercase font-bold text-red-400 mb-1">
              Statutory Hook &amp; Legal Levers
            </span>
            <p className="text-slate-200 font-mono text-xs leading-relaxed">{activeScenario.statutoryHook}</p>
          </div>
        </div>

        <div className="space-y-2">
          <span className="block text-[11px] uppercase font-bold text-amber-400 tracking-wider">
            Typical Debtor Pretext / Coercive Tactic
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-amber-950/20 border-l-2 border-amber-500 pl-3 py-1">
            {activeScenario.pretext}
          </p>
        </div>

        <div className="space-y-2">
          <span className="block text-[11px] uppercase font-bold text-emerald-400 tracking-wider">
            Legal Reality &amp; Statutory Protection
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-emerald-950/20 border-l-2 border-emerald-500 pl-3 py-1">
            {activeScenario.legalReality}
          </p>
        </div>

        <div>
          <span className="block text-[11px] uppercase font-bold text-slate-300 tracking-wider mb-2">
            Recommended Step-by-Step Action Protocol
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {activeScenario.actionProtocol.map((step, idx) => (
              <li
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 text-slate-300 flex items-start gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
