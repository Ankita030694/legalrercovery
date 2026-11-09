"use client";

import React, { useState } from "react";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "advance-absconded",
    tabLabel: "Vendor Vanished / Stalled",
    title: "Vendor Took 30%–80% Advance but Ceased Communication or Closed Office",
    cause:
      "Rooftop solar companies frequently market heavily under the PM Surya Ghar: Muft Bijli Yojana or state solar rooftop policies. After collecting substantial cash advances, RTGS transfers, or booking tokens, unscrupulous or undercapitalized vendors stop answering phone calls, vacate rented sales offices, and offer rolling false dates about dispatch shortages, transformer approvals, or panel import delays.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019, failure to execute contractual commitments within the agreed timeframe constitutes gross deficiency in service. Collecting advance funds with no intent or operational capacity to deliver constitutes unfair and deceptive trade practice under Section 2(47) CPA 2019 and gives rise to criminal breach of trust under Section 316 and cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS).",
    steps: [
      {
        step: "Preserve Banking Trails & Written Communications",
        description:
          "Extract bank statement debit confirmations showing the vendor's account number, IFSC code, and 12-digit UTR. Collate all WhatsApp chats, SMS promises, formal quotations, and booking receipts.",
      },
      {
        step: "Lodge Formal Complaint on PM Surya Ghar & NCH Portal",
        description:
          "Submit a vendor delinquency ticket on the National Rooftop Solar Portal (pmsuryaghar.gov.in) and National Consumer Helpline (NCH 1915). Demand de-empanelment of the vendor.",
      },
      {
        step: "Issue Advocate Statutory Demand Notice",
        description:
          "Serve a 15-day statutory demand notice holding company directors personally accountable, demanding 100% principal advance refund with 12% annual interest and compensation.",
      },
    ],
    statutoryRule: "Section 2(11) & 2(47) CPA 2019; Sections 316 & 318 BNS 2023",
  },
  {
    id: "panels-dumped",
    tabLabel: "Materials Dumped / Unfinished",
    title: "Panels & Mounting Structures Dumped on Terrace but Installation Left Incomplete",
    cause:
      "Vendors often drop solar panels, GI rails, or unboxed components onto the customer's roof to trigger intermediate payment tranches (e.g., '60% upon material delivery'). Once the money clears, the vendor pulls technicians off-site to juggle other contracts, leaving loose modules exposed to monsoon weather, structural rust, and rooftop waterproofing damage for months.",
    legalBasis:
      "Merely delivering uncommissioned hardware does not fulfill a turnkey solar EPC (Engineering, Procurement, and Construction) contract. Under Section 37 and 41 of the Sale of Goods Act, 1930, the buyer is not deemed to have accepted the goods until given a reasonable opportunity of examination and functional testing. Abandoning raw electrical equipment creates dangerous structural hazards, rendering the contractor liable for site restoration and complete refund.",
    steps: [
      {
        step: "Conduct Date-Stamped Photographic & Video Audit",
        description:
          "Record high-resolution photos and continuous video walkthrough of the terrace showing unbolted structures, exposed DC wires, missing inverters, and lack of earthing pits.",
      },
      {
        step: "Serve Formal 'Notice of Non-Acceptance & Site Hazard'",
        description:
          "Issue a formal written notice advising the vendor that the dumped materials remain unaccepted at their sole risk and expense, and will incur daily storage and safety liability.",
      },
      {
        step: "Demand Immediate Completion or Removal & Full Restitution",
        description:
          "Give a 7-day cure window: either complete commissioning with DISCOM meter synchronization or remove all items, repair roof penetrations, and refund all sums paid.",
      },
    ],
    statutoryRule: "Section 37 Sale of Goods Act 1930 & Section 2(11) CPA 2019",
  },
  {
    id: "discom-net-metering",
    tabLabel: "DISCOM Net-Metering Stalled",
    title: "Solar System Erected but DISCOM Net-Metering Approval Stalled or Rejected",
    cause:
      "The physical panels and inverter are bolted down, but the plant remains disconnected or runs only in reverse-feed lockout because the installer failed to file technical feasibility reports, omitted the Electrical Inspectorate CEIG certificate, or failed to secure a bi-directional net meter from the state electricity distribution company (DISCOM). The consumer pays regular grid bills while their rooftop capital sits dead.",
    legalBasis:
      "Rooftop solar agreements are turnkey performance contracts that include liaising with the local DISCOM for net-metering synchronization. State Electricity Regulatory Commissions (SERCs) penalize unauthorized synchronization. Under CPA 2019 Section 14(1)(d), the installer is strictly liable to reimburse the consumer for the financial value of solar energy units lost every month due to administrative dereliction.",
    steps: [
      {
        step: "Verify DISCOM Application Status Directly",
        description:
          "Visit the local DISCOM sub-division or log into their solar portal using your consumer account number (CA / K-Number) to verify whether the vendor even applied for technical feasibility.",
      },
      {
        step: "Demand Work Completion Report (WCR) & Inverter Test Certificates",
        description:
          "Require the vendor to hand over the manufacturer's lab test reports, inverter factory test certificates, and earthing resistance values required by the grid inspector.",
      },
      {
        step: "Serve Joint Statutory Demand Notice",
        description:
          "Dispatch an advocate legal notice to the solar vendor and DISCOM Executive Engineer demanding net-meter sync within 15 days or damages equal to monthly solar generation loss.",
      },
    ],
    statutoryRule: "SERC Grid Interactive Rooftop Regulations & Section 14 CPA 2019",
  },
  {
    id: "subsidy-forfeited",
    tabLabel: "Subsidy Pocketed / Forfeited",
    title: "PM Surya Ghar / MNRE Central Subsidy Withheld, Forfeited, or Swindled",
    cause:
      "Under PM Surya Ghar, residential consumers are entitled to Direct Benefit Transfer (DBT) subsidies of up to ₹78,000 for a 3 kW system. Many installers either charged customers full gross price promising to process the subsidy later, or used unapproved non-DCR (Domestic Content Requirement) modules that disqualify the installation from central financial assistance upon DISCOM inspection.",
    legalBasis:
      "The Operational Guidelines for PM Surya Ghar: Muft Bijli Yojana (MNRE 2024) require empanelled vendors to strictly use ALMM-listed (Approved List of Models and Manufacturers) DCR modules. Misrepresenting non-subsidized commercial panels as subsidy-eligible violates Section 2(47) CPA 2019 (unfair trade practices) and breaches vendor empanelment undertakings.",
    steps: [
      {
        step: "Verify National Portal Registration Docket",
        description:
          "Login to pmsuryaghar.gov.in using the mobile number linked to your electricity connection. Check whether the vendor submitted the mandatory installation details and bank mandate.",
      },
      {
        step: "Verify Panel RFID & Serial Numbers Against ALMM List",
        description:
          "Scan the QR/RFID code embedded under the glass of each solar module. Match the serial numbers against the manufacturer's invoice to verify genuine Made-in-India DCR status.",
      },
      {
        step: "File MNRE Blacklisting & Consumer Recovery Claim",
        description:
          "Issue a legal notice demanding the vendor directly pay the forfeited subsidy amount of ₹78,000 plus interest, failing which de-empanelment complaints will be lodged with MNRE.",
      },
    ],
    statutoryRule: "MNRE PM Surya Ghar Guidelines 2024 & Section 2(47) CPA 2019",
  },
  {
    id: "substandard-hardware",
    tabLabel: "Substandard / Fake Panels",
    title: "Low-Efficiency, Cracked, or Non-ALMM Approved Solar Panels Installed",
    cause:
      "The quotation promised high-efficiency Tier-1 Mono PERC 550W bifacial panels, but upon installation, the vendor substituted unbranded polycrystalline 330W modules, blemished factory seconds, or uncertified inverters that trip repeatedly under peak load and generate less than 50% of projected kilowatt-hours.",
    legalBasis:
      "Section 84 and 86 of the Consumer Protection Act, 2019 establish strict product liability on manufacturers and service providers for manufacturing defects, deviation from specifications, and failure to conform to express warranties. Section 15 of the Sale of Goods Act, 1930 implies an absolute condition that goods must correspond with the agreed description.",
    steps: [
      {
        step: "Conduct Third-Party Electrical Generation Audit",
        description:
          "Hire a certified solar electrical engineer to generate an IV curve test report and infrared thermography check documenting micro-cracks and wattage shortfalls.",
      },
      {
        step: "Send Formal Rejection Notice Under Sale of Goods Act",
        description:
          "Formally repudiate the substandard installation, disclaim all acceptance, and demand the vendor uninstall and remove the hardware at their cost.",
      },
      {
        step: "Pursue Complete Equipment Replacement or Full Monetary Restitution",
        description:
          "Serve an advocate legal notice claiming full purchase price refund, reimbursement for roof restoration, and penal damages for fraudulent substitution of equipment.",
      },
    ],
    statutoryRule: "Sections 84 & 86 CPA 2019; Section 15 Sale of Goods Act 1930",
  },
];

export default function SolarInstallerProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const activeTab = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden my-8">
      {/* Tab Navigation Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-shrink-0 px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer text-left whitespace-nowrap ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-sm"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Statutory Authority: {activeTab.statutoryRule}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Dispute Scenario #{PROBLEMS.findIndex((p) => p.id === activeTabId) + 1} of 5
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-3 leading-snug">
          {activeTab.title}
        </h3>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Common Failure Mode &amp; Root Cause
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
            {activeTab.cause}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Applicable Indian Legal Basis
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed bg-red-50/40 p-4 rounded-xl border border-red-100">
            {activeTab.legalBasis}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Recommended Statutory Action Steps
          </h4>
          <div className="space-y-3">
            {activeTab.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/70 bg-white hover:border-slate-300 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#111827] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 leading-tight mb-1">
                    {st.step}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
