"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  industry: string;
  contractStructure: string;
  disputeValue: string;
  factPattern: string;
  shipperDefense: string;
  statutoryStrategy: string;
  actionChecklist: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "quick-commerce-ev",
    badge: "Quick-Commerce / Dark Stores",
    title: "15 Custom 14-ft Electric Vans Grounded After Dark Store Network Restructuring",
    industry: "Hyperlocal Quick-Commerce & Grocery Fulfillment",
    contractStructure: "36-Month Lock-in @ Fixed ₹62,000/mo standing charge + ₹14/km (Min. 2,200 km/mo guarantee)",
    disputeValue: "₹48.60 Lakhs (8 Months Shortfall + 22 Months Unamortized EV Chassis Loan & Charger CapEx)",
    factPattern:
      "A quick-commerce unicorn entered into a 3-year Master Fleet Agreement requiring the fleet operator to purchase 15 dedicated custom-dimension electric vans with branded vinyl wraps and proprietary rack configurations. After month 8, the shipper consolidated dark store clusters and unilaterally slashed scheduled routes by 70%, asserting that 'only actual driven kilometers shall be paid'. The fleet operator faced an immediate NBFC EMI liability of ₹38,500 per chassis plus battery lease obligations, with zero commercial re-deployability due to proprietary body dimensions.",
    shipperDefense:
      "'Contract was service-based and clause 14 permits volume adjustments based on business discretion; paying for un-run kilometers violates standard commercial reasonableness.'",
    statutoryStrategy:
      "Invoke Sections 73 and 74 of the Indian Contract Act, 1872. The agreed minimum-km clause represents a genuine pre-estimate of fixed standing charges (vehicle financing, driver standby remuneration, insurance, and battery degradation) agreed by sophisticated commercial entities. Serve a formal 15-day statutory demand notice quantifying unamortized custom CapEx, followed by an Order XXXVII CPC summary suit in the Commercial Court and MSMED Act Section 18 reference claiming 3x RBI compound interest.",
    actionChecklist: [
      "Extract and notarize telematics API logs showing 100% vehicle availability at mother dark stores.",
      "Collate NBFC chassis loan sanction letters, battery lease contracts, and fabrication invoices to prove fixed CapEx.",
      "Issue 15-day statutory demand separating accrued monthly shortfall invoices from unamortized capital damages.",
      "Lodge an urgent Section 9 Commercial Courts petition for interim security / bank account attachment.",
    ],
  },
  {
    id: "ecommerce-long-haul",
    badge: "E-Commerce Mid-Mile Logistics",
    title: "20 Custom 32-ft Multi-Axle Trucks Terminated Mid-Term on National Line-Haul",
    industry: "E-Commerce Marketplace Line-Haul & Sortation Centers",
    contractStructure: "3-Year Lock-In Agreement @ ₹1,75,000/month Minimum Guarantee per truck (4,200 km @ ₹41.66/km)",
    disputeValue: "₹1.42 Crores (6 Months Accrued Shortfall Dues + Unexpired Lock-In Standing Charges)",
    factPattern:
      "An institutional e-commerce shipper persuaded a regional fleet owner to procure 20 custom 32-foot single-axle high-cube container trucks exclusively mapped to Delhi-Bhiwandi-Bengaluru corridors. At Month 14, citing macroeconomic headwinds and rail multimodal shifts, the shipper issued an abrupt 30-day notice of termination without paying the stipulated 6-month early termination liquidated damages or the preceding 4 months of minimum-km shortfall bills.",
    shipperDefense:
      "'Market slowdown constitutes commercial hardship; Section 74 penal liquidated damages cannot be claimed without strict proof of actual financial loss.'",
    statutoryStrategy:
      "Rely on Supreme Court precedents (Kailash Nath Associates v. DDA and ONGC v. Saw Pipes). Where vehicles are procured specifically for dedicated usage under custom specifications, fixed standing costs are genuine pre-estimated liquidated damages. The shipper cannot treat dedicated fleet capital as spot market rentals. Issue a fact-verified notice invoking arbitration or Commercial Court summary suit, asserting Section 53 of the Contract Act (prevention of performance by promisee) and claiming interest under the MSMED Act, 2006.",
    actionChecklist: [
      "Assemble FASTag toll logs, GPS odometer reports, and gate-entry slips proving vehicle readiness and dispatch records.",
      "Quantify monthly vehicle loan EMIs, commercial road taxes, national permits, and fitness renewals as unavoidable standing losses.",
      "Issue Section 21 Arbitration Invocation or pre-institution mediation under Section 12A Commercial Courts Act.",
      "Serve Section 43B(h) Income Tax disallowance intimation on the shipper's statutory auditors.",
    ],
  },
  {
    id: "dairy-cold-chain",
    badge: "FMCG & Cold-Chain Logistics",
    title: "10 Dedicated Insulated Reefer Trucks Denied Minimum Running Dues on Milk-Runs",
    industry: "Dairy, Confectionery & Temperature-Controlled Distribution",
    contractStructure: "Fixed Monthly Standing ₹75,000/vehicle + Variable ₹26/km (Min. 3,000 km/vehicle/month)",
    disputeValue: "₹34.80 Lakhs (Unpaid Shortfall Bills + Disputed Diesel Escalation Arrears)",
    factPattern:
      "A national dairy processor contracted 10 specialized refrigerated trucks (reefers) with thermo-king units for primary plant-to-depot milk-runs. When fuel prices fluctuated, the shipper refused to adjust the diesel escalation formula and reduced milk-run frequencies from 28 runs/month to 11 runs/month. The shipper cleared only running kilometers and systematically struck off the 'Shortfall Adjustments' line items from monthly tax invoices.",
    shipperDefense:
      "'Fleet operator failed to achieve promised turnaround times and reefer maintenance was irregular; unilateral invoice reductions represent legitimate service penalties.'",
    statutoryStrategy:
      "Rebut unilateral debit deductions using the Supreme Court ruling in Raman Iron Foundry. Debits cannot be claimed on unadjudicated claims. Prove temperature telematics and GPS uptime showing 99.4% adherence. Reconstruct the diesel escalation index based on Indian Oil Corporation (IOCL) official bulk consumer rates. File an application under MSMED Act Section 18 before the MSEFC for full shortfall recovery, compulsory 3x compound interest, and recovery of illegal deductions.",
    actionChecklist: [
      "Download independent IoT temperature sensor data and data logger logs proving zero spoilage or cold-chain breaches.",
      "Compile official IOCL diesel price circulars matching the contractual base-month index formula.",
      "Demonstrate that driver and cleaner wages were disbursed throughout the idle standing periods.",
      "File online MSME Samadhaan reference followed by statutory demand notice under Section 15 of the MSMED Act.",
    ],
  },
  {
    id: "corporate-cabs",
    badge: "Corporate Employee Transport",
    title: "25 Dedicated Executive Cabs & Tempo Travelers Abruptly Dropped by IT Enterprise",
    industry: "IT/ITeS Corporate Campus Employee Transportation",
    contractStructure: "Fixed ₹48,000/cab/month (up to 2,500 km) + ₹11/extra km, 24-Month Lock-In with 90-day Notice",
    disputeValue: "₹29.25 Lakhs (Unpaid Invoices for 3 Months + 90-Day Lock-in Notice Period Compensation)",
    factPattern:
      "An employee transportation vendor deployed 25 dedicated white-board commercial sedans and 5 tempo travelers for an IT campus in Gurugram. Following a hybrid-work policy change, the IT enterprise unilaterally terminated the vendor with immediate 24-hour notice, refusing to pay the mandatory 90-day lock-in notice compensation and withholding the last 3 months of regular billing on grounds of 'roster scheduling discrepancies.'",
    shipperDefense:
      "'Cabs were not physically utilized after work-from-home mandate; payment for non-rendered services violates Section 56 of the Contract Act (frustration of contract).'",
    statutoryStrategy:
      "The Supreme Court in Energy Watchdog v. CERC firmly held that commercial difficulty or internal restructuring does not constitute contract frustration under Section 56. The vendor maintained fleet readiness and drivers on standby. Serve a Fact-Verified Legal Notice under Section 73 of the Contract Act and Order XXXVII CPC for liquidated debt. The employer is bound by its written contract to pay the contractual 90-day notice compensation and unpaid bills.",
    actionChecklist: [
      "Collate driver roster allocations, digital trip sheets, and employee pickup OTP logs.",
      "Demonstrate formal intimation of vehicle readiness delivered daily to the corporate transport helpdesk.",
      "Issue 15-day Fact-Verified Notice demanding immediate settlement of accrued billing and lock-in notice pay.",
      "File a Summary Suit under Order 37 CPC in the District Commercial Court.",
    ],
  },
];

export default function DedicatedFleetScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
            Interactive Commercial Failure Modes
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
            4 Dedicated Fleet Breach Archetypes &amp; Creditor Enforcement Blueprints
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Select an industry archetype to inspect the legal playbook
        </span>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left flex items-center gap-2 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  isActive ? "bg-white" : "bg-slate-400"
                }`}
              />
              <span>{scenario.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-black uppercase tracking-wider mb-1">
              {activeScenario.industry}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {activeScenario.title}
            </h4>
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Total Recoverable Claim
            </span>
            <span className="text-sm sm:text-base font-black text-[#DC2626]">
              {activeScenario.disputeValue}
            </span>
          </div>
        </div>

        {/* Contract Structure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
            <span className="block font-bold text-slate-700 uppercase tracking-wide text-[10px] mb-1">
              Agreed Contractual Structure
            </span>
            <p className="text-slate-600 font-medium">{activeScenario.contractStructure}</p>
          </div>
          <div className="bg-amber-50/70 p-3.5 rounded-lg border border-amber-200/70">
            <span className="block font-bold text-amber-800 uppercase tracking-wide text-[10px] mb-1">
              Defaulting Shipper Defense
            </span>
            <p className="text-amber-900 italic font-medium">{activeScenario.shipperDefense}</p>
          </div>
        </div>

        {/* Fact Pattern */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Operational Dispute Pattern &amp; Commercial Injury
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/50 p-3.5 rounded-lg border border-slate-100">
            {activeScenario.factPattern}
          </p>
        </div>

        {/* Statutory Enforcement Strategy */}
        <div className="bg-red-50/50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
          <span className="block text-xs font-bold uppercase tracking-wider text-red-900 mb-1">
            Statutory Recovery &amp; Litigation Blueprint
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {activeScenario.statutoryStrategy}
          </p>
        </div>

        {/* Action Checklist */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Evidence Assembly &amp; Immediate Pre-Litigation Steps
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {activeScenario.actionChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60"
              >
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
