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
    id: "stb-swap-migration",
    tabLabel: "2,000 STBs Swapped",
    title: "LCO Migrates 2,000 Subscribers to Rival MSO & Retains Subsidized Set-Top Boxes",
    cause:
      "A Local Cable Operator (LCO) receives 2,000 HD/Android STBs at a subsidized activation fee of ₹450 against an actual procurement cost of ₹1,850–₹2,200 per unit under a Model Interconnection Agreement (MIA). After accumulating 4 months of subscription share arrears, the LCO secretly pairs subscriber homes with a competing MSO's headend and refuses to return the old STBs or clear the SMS wallet.",
    legalBasis:
      "Under the TRAI Telecommunication (Broadcasting and Cable) Services Interconnection (Addressable Systems) Regulations, 2017 and TRAI Act Section 14(a)(ii), MSO-vs-LCO disputes fall exclusively within TDSAT jurisdiction. Hardware ownership clauses in the MIA/SIA establish bailment under Sections 148–160 of the Indian Contract Act, 1872, enabling TDSAT recovery of depreciated STB cost plus subscription arrears, alongside criminal breach of trust remedies under BNS Section 316 if STBs are sold or flashed.",
    steps: [
      {
        step: "Export CAS/SMS De-Activation & Pairing Logs",
        description:
          "Pull serial-number and VC-card logs from the Conditional Access System (CAS) and Subscriber Management System (SMS) showing active subscriber feed and abrupt signal drop.",
      },
      {
        step: "Serve TRAI 21-Day Interconnect Disconnection Notice",
        description:
          "Issue the mandatory 21-day written notice under Regulation 17 of the TRAI Interconnection Regulations specifying exact subscription arrears and STB inventory return demand.",
      },
      {
        step: "File TDSAT Recovery Petition & BNS s.316 Hardware Notice",
        description:
          "Institute a Section 14 TRAI Act recovery petition before TDSAT for arrears and unreturned STB replacement cost, backed by a BSA s.63 certificate.",
      },
    ],
    statutoryRule: "TRAI Act 1997 s.14 · TRAI Interconnection Regs 2017 Reg. 17 · Contract Act ss.148–160 · BNS s.316",
  },
  {
    id: "lfp-ftth-default",
    tabLabel: "LFP Broadband ONT",
    title: "Local Fiber Partner (LFP) Pockets FTTH Cash & Splices Onto Rival ISP's OLT",
    cause:
      "Regional Class-B and Class-C broadband ISPs deploy 50–500 Local Fiber Partners (LFPs) on revenue-share models (e.g., 60:40 split) with subsidized Dual-Band ONT routers and OLT splitter ports. The LFP collects ₹799/month in cash/UPI from 400 FTTH homes, stops recharging the ISP's partner wallet, and splices the drop-fiber onto a competing ISP overnight.",
    legalBasis:
      "Unlike MIB-registered cable LCOs, an unlicensed LFP operating as a commercial franchisee or collection agent under a Private Franchise Agreement often falls outside TRAI licensee-to-licensee TDSAT jurisdiction—routing the dispute to Commercial Courts (Order XXXVII CPC) or institutional arbitration, while unreturned ONTs trigger Specific Relief Act ss.7–8 and BNS s.316 bailment liability.",
    steps: [
      {
        step: "Audit Franchisee License & OLT MAC-Binding",
        description:
          "Verify whether the LFP holds an independent DoT/TRAI registration or acts purely as an unregistered collection agent to determine TDSAT vs Commercial Court/Arbitration routing.",
      },
      {
        step: "Freeze Partner Portal & Demand ONT Bailment Return",
        description:
          "Suspend new provisioning credentials, preserve RADIUS/BRAS session logs under BSA s.63, and serve a 15-day Advocate Demand Notice for wallet arrears and ONT hardware.",
      },
      {
        step: "Enforce Order XXXVII / Arbitration & Security Cheques",
        description:
          "Present any dishonoured franchisee security cheques under NI Act s.138 and file summary recovery or Section 21 arbitration on reconciled GST invoice ledgers.",
      },
    ],
    statutoryRule: "Order XXXVII CPC · Commercial Courts Act s.2(1)(c) · NI Act s.138 · BNS s.316",
  },
  {
    id: "broadcaster-mso-arrears",
    tabLabel: "Broadcaster–MSO RIO",
    title: "Broadcaster / Content Aggregator Recovering Unpaid RIO & Carriage Fees from MSO",
    cause:
      "A television broadcaster or bouquet aggregator supplies pay channels to a regional MSO under a Reference Interconnect Offer (RIO) agreement. The MSO under-reports active subscriber counts in monthly MSR (Monthly Subscriber Reports), delays pay-channel remittances beyond the 15-day due date, and threatens unilateral channel placement downgrades.",
    legalBasis:
      "Regulation 15 and Schedule III of the TRAI Interconnection Regulations, 2017 mandate auditable SMS/CAS monthly subscriber reporting and strict payment timelines. Broadcasters can serve a 21-day disconnection notice under Regulation 17 and invoke TDSAT Section 14 recovery along with forensic CAS/SMS audit directions under Regulation 15(2).",
    steps: [
      {
        step: "Reconcile MSR Submissions vs Audit Benchmarks",
        description:
          "Compare the MSO's declared Monthly Subscriber Reports against historical bouquet trends and trigger a TRAI-mandated technical/commercial audit.",
      },
      {
        step: "Serve Statutory 21-Day Notice + Public Scroll",
        description:
          "Deliver the 21-day disconnection notice via Speed Post RPAD and email, accompanied by consumer scroll compliance where required before signal switch-off.",
      },
      {
        step: "Petition TDSAT for Principal, Interest & Audit Costs",
        description:
          "Seek a TDSAT money decree for unpaid RIO invoices, 18% contractual interest, and audit-revealed under-declaration differentials.",
      },
    ],
    statutoryRule: "TRAI Interconnection Regs 2017 Regs 15 & 17 · TRAI Act s.14 · TDSAT Execution s.14N",
  },
  {
    id: "sham-signal-defense",
    tabLabel: "Fake Signal Blackout",
    title: "Defaulting LCO Fabricates 'Frequent Signal Outage' Defense After 90-Day Default",
    cause:
      "After receiving a 21-day disconnection notice or TDSAT demand, the defaulting LCO claims that subscribers migrated on their own because the MSO's headend suffered 'chronic pixelation, channel blackouts, and EPG failures'—seeking to set off ₹25L+ in arrears against unverified subscriber churn.",
    legalBasis:
      "Under TRAI Quality of Service (QoS) regulations and standard MIA/SIA terms, an LCO must log contemporaneous headend/node trouble tickets and notify the MSO within 24–48 hours of any outage. Post-default allegations unsupported by NOC ticket logs or joint technical inspection reports are routinely rejected by TDSAT and Commercial Courts as sham afterthoughts.",
    steps: [
      {
        step: "Extract Headend Uptime & Multiplexer Logs",
        description:
          "Compile 99.9% headend RF/IP output logs, broadcaster IRD reception status, and zero-complaint ticket history for the disputed billing quarters.",
      },
      {
        step: "Certify Electronic Records Under BSA s.63",
        description:
          "Attach a signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate from the Headend Engineer validating CAS/SMS and NOC logs.",
      },
      {
        step: "Neutralize Set-Off Claims in TDSAT Pleadings",
        description:
          "Demonstrate uninterrupted channel consumption and SMS top-up history prior to migration to defeat manufactured quality counterclaims.",
      },
    ],
    statutoryRule: "BSA 2023 s.63 · TRAI QoS Regs 2017 · Contract Act s.55 · TDSAT Evidence Rules",
  },
];

export default function MsoLcoScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="LCO and LFP Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
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

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200 shrink-0 self-start sm:self-auto">
            Creditor Playbook
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.cause}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Statutory &amp; Forum Basis
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
            3-Step Creditor Action Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-4 border border-slate-200 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span className="font-bold text-slate-900">Applicable Provisions:</span>
          <span className="font-medium text-slate-700">{current.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
