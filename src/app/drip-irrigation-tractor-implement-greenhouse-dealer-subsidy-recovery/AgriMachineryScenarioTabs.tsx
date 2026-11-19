"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  failureMode: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "pmksy-subsidy-freeze",
    tabLabel: "18-Mo PMKSY Subsidy Lag",
    title: "State Horticulture / PMKSY Directorate Withholds Verified Joint-Inspection Bills for 12–18 Months",
    failureMode:
      "After empanelled micro-irrigation companies install drip/sprinkler networks, complete geo-tagged GPS verification, and obtain the District Horticulture Officer (DHO) Joint Inspection Report (JIR), subsidy disbursement stalls indefinitely citing 'budgetary allocation exhausted' or 'portal audit pending'.",
    statutoryCounter:
      "Once a government agency verifies satisfactory physical installation through a signed Joint Inspection Report (JIR) and Geo-Tagging Certificate, the liability becomes an admitted, undisputed public debt. Under ABL International Ltd. v. Export Credit Guarantee Corpn. (2004) and Surya Constructions v. State of UP (2019), High Courts entertain Writ Petitions under Article 226 to compel release of admitted contract/subsidy dues without forcing the vendor into a multi-year civil trial—preceded by a mandatory 60-day Section 80 CPC statutory notice or representation.",
    actionSteps: [
      {
        step: "Serve Section 80 CPC Notice + RTI File Movement Audit",
        detail:
          "Issue a formal Section 80 CPC statutory notice to the Commissioner of Horticulture, District Collector, and DHO annexing the signed JIR, Farmer Work Completion Certificate, and Portal Sanction Order.",
      },
      {
        step: "Invoke MSMED s.15–18 Against Empanelling PSU / Nodal Agency",
        detail:
          "Where supplies are routed through a State Agro-Industries Corporation or Nodal PSU, file MSEFC Samadhaan claims for 3x RBI compound interest beyond 45 days.",
      },
      {
        step: "Escalate Undisputed JIR Arrears via Article 226 Writ",
        detail:
          "If unpaid after the 60-day Section 80 CPC window, file a Writ of Mandamus in the jurisdictional High Court seeking time-bound release with interest.",
      },
    ],
    legalProvision: "CPC s.80 | Constitution Art. 226 | MSMED Act ss.15–18 | Surya Constructions (2019)",
  },
  {
    id: "polyhouse-farmer-share",
    tabLabel: "Polyhouse Farmer Share",
    title: "Turnkey Polyhouse / Shade-Net Beneficiary Margin Share Unpaid Post-Commissioning",
    failureMode:
      "Under MIDH (Mission for Integrated Development of Horticulture) 50%–75% subsidy schemes, the farmer/beneficiary must pay the non-subsidy margin share (25%–50%) plus GST upfront or at structural erection. Once the GI tubular structure, UV film, and foggers are commissioned and subsidy is claimed, the beneficiary withholds the ₹6–₹22 lakh margin balance alleging minor 'wind-flap' or 'climate-controller calibration' issues.",
    statutoryCounter:
      "Polyhouse turnkey contracts are governed by the Indian Contract Act, 1872 and Sale of Goods Act, 1930 (Section 42). Signing the Joint Inspection / Commissioning Certificate for subsidy release operates as conclusive written acceptance of structural quality. Subsequent oral complaints raised solely to evade the balance farmer share are barred by estoppel, while bounced margin cheques trigger immediate NI Act Section 138 liability.",
    actionSteps: [
      {
        step: "Lock In Signed Commissioning & JIR Acceptance",
        detail:
          "Serve an Advocate Demand Notice confronting the beneficiary with their own signed MIDH Joint Inspection & Satisfaction Certificate submitted to the Horticulture Department.",
      },
      {
        step: "Present Margin PDCs & Issue 15-Day s.138 Notice",
        detail:
          "Present any post-dated cheques held toward the beneficiary share; upon dishonour, issue a mandatory Section 138 NI Act notice within 30 days.",
      },
      {
        step: "File Order XXXVII Summary Suit / Commercial Suit",
        detail:
          "Escalate unpaid turnkey invoices (where commercial threshold applies) or District Civil Order XXXVII Summary Suits backed by signed BoQs and GST invoices.",
      },
    ],
    legalProvision: "Sale of Goods Act s.42 | Contract Act s.73 | NI Act s.138 | Order XXXVII CPC",
  },
  {
    id: "implement-dealer-pdc",
    tabLabel: "Implement Dealer PDC Bounce",
    title: "Rotavator, Combine Harvester & Solar Pump Dealer Diverts Cash & Bounces Security PDCs",
    failureMode:
      "Farm-implement dealers in Rajkot, Ludhiana, Karnal, Indore, and Coimbatore take 45–90 day channel credit on rotavators, laser land levellers, threshers, and solar water pumps. After selling units to farmers against cash or Kisan Credit Card (KCC) loans, the dealer bounces security PDCs citing 'tractor-fitment vibration' or 'off-season cash crunch'.",
    statutoryCounter:
      "Per Sripati Singh v. State of Jharkhand (2021), a security cheque presented after credit maturity attracts full criminal prosecution under Section 138 NI Act. Simultaneously, Udyam-registered implement OEMs can bypass dealer-friendly civil courts and claim 3x RBI compound interest with monthly rests before the MSEFC under Sections 15–18 of the MSMED Act, 2006 (overriding any 90-day dealer agreement clause).",
    actionSteps: [
      {
        step: "Reconcile Serial-Number Ledger & Credit Notes",
        detail:
          "Match every chassis/serial number on GST Tax Invoices and E-Way Bills against dealer payments so the cheque amount equals the exact admitted balance.",
      },
      {
        step: "Trigger Dual NI s.138 + BNS s.316/318 Demand",
        detail:
          "Serve a 15-day Section 138 notice within 30 days of the Bank Return Memo, warning of Section 143A 20% interim compensation and BNS cheating/breach of trust prosecution if stock was sold without remitting proceeds.",
      },
      {
        step: "File MSEFC Samadhaan for 3x RBI Interest",
        detail:
          "For Udyam-registered manufacturers, lodge an MSEFC reference claiming statutory compound interest from Day 46 onward.",
      },
    ],
    legalProvision: "NI Act ss.138, 139 & 143A | MSMED ss.15–18 | BNS 2023 ss.316 & 318",
  },
  {
    id: "multi-district-network-drive",
    tabLabel: "Multi-District Dealer Drive",
    title: "50–300+ Rural Implements & Drip Dealers Defaulting Across Multiple Talukas Simultaneously",
    failureMode:
      "OEMs and irrigation brands operating across Maharashtra, Gujarat, Punjab, Haryana, MP, and Tamil Nadu routinely carry ₹5–₹40 crore in fragmented ₹2–₹15 lakh dealer arrears. Local sales managers hesitate to antagonize dealers, letting 3-year limitation periods expire silently.",
    statutoryCounter:
      "Under Section 18 of the Limitation Act, 1963, a written balance confirmation or even a WhatsApp ledger admission authenticated under Section 63 of BSA 2023 resets the 3-year limitation clock. Deploying a synchronized CSV-driven Batch Legal Notice Drive via Advocate Email, WhatsApp, and Speed Post RPAD recovers 40%–65% of dormant channel arrears before litigation is even filed.",
    actionSteps: [
      {
        step: "Audit Aging Buckets & Limitation Dates",
        detail:
          "Export dealer CSVs segmented by 60–180 DPD, 180–365 DPD, and approaching-3-year accounts to prioritize urgent limitation-saving notices.",
      },
      {
        step: "Dispatch Bilingual English + Hindi/Regional Notices",
        detail:
          "Serve simultaneous Advocate notices via RPAD, Email, and WhatsApp across Rajkot, Jalgaon, Pune, Ludhiana, and Coimbatore dealer belts.",
      },
      {
        step: "Convert Unpaid Accounts to MSEFC / Order XXXVII",
        detail:
          "Move non-responsive dealers directly into MSEFC conciliation or Commercial Court Pre-Institution Mediation (Section 12A).",
      },
    ],
    legalProvision: "Limitation Act s.18 | BSA 2023 s.63 | Commercial Courts Act s.12A",
  },
];

export default function AgriMachineryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Agri-Machinery and Subsidy Failure Modes"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white mb-2">
            {current.legalProvision}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
              Commercial Bottleneck / Debtor Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.failureMode}
            </p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            3-Step Execution Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.step}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
