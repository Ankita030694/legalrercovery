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
    id: "early-office-closure",
    tabLabel: "Month-4 Office Shutdown",
    title: "BPO, Call Center, or Startup Shutters Site Mid-Lock-In & Refuses Exit Fee",
    cause:
      "An enterprise subscriber signs a 24-month Customer Application Form (CAF) with zero One-Time Charge (OTC) so the ISP absorbs ₹1.5L–₹3.0L in municipal Right-of-Way (ROW) trenching, dark fiber splicing, and tower radio erection. In Month 4, the client vacates the floor or shuts operations, claiming 'force majeure' or 'no future usage' to refuse remaining lock-in charges.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act, 1872, a pure 'penalty' is disallowed, but a genuine pre-estimate of loss—specifically unamortized last-mile CapEx, waived OTC, and committed upstream bandwidth capacity—is fully recoverable. Courts consistently distinguish arbitrary windfall penalties from documented capital expenditure amortized over the minimum lock-in period.",
    steps: [
      {
        step: "Isolate Waived OTC & CapEx Ledger",
        description:
          "Extract the signed CAF/SOF showing the waived OTC discount alongside vendor fiber-trenching, splicing, and municipal ROW receipts proving actual sunk cost.",
      },
      {
        step: "Serve Section 74 + Order XXXVII Demand Notice",
        description:
          "Issue a fact-verified notice quantifying unamortized CapEx on a pro-rata basis (e.g., 20/24ths remaining), overdue MRC invoices, and applicable GST.",
      },
      {
        step: "File Summary Suit / Commercial Suit",
        description:
          "Pursue Order XXXVII CPC summary recovery on the signed CAF, Commissioning AT Report, and acknowledged monthly invoices, shifting the burden onto the defaulter to seek leave to defend.",
      },
    ],
    statutoryRule: "Indian Contract Act, 1872 s.73 & s.74 · Order XXXVII CPC · Commercial Courts Act s.12A",
  },
  {
    id: "manufactured-sla-dispute",
    tabLabel: "Fake SLA / Latency Excuse",
    title: "Subscriber Fabricates Bandwidth Drops or Packet Loss After Defaulting on MRC",
    cause:
      "Once the ISP sends a payment reminder or suspends the ILL/MPLS port for 45+ days of unpaid Monthly Recurring Charges (MRC), the enterprise CFO replies claiming 'chronic packet loss, jitter, and SLA breach' to justify unilateral termination without paying lock-in dues.",
    legalBasis:
      "Enterprise ILL/MPLS SLAs require contemporaneous NOC trouble-ticket logging, RFO (Reason for Outage) verification, and formal cure-window invocation. Retroactive quality allegations raised for the first time after billing default are treated by Commercial Courts as an afterthought and sham defense—unable to defeat an Order XXXVII suit or an IBC Section 8 demand.",
    steps: [
      {
        step: "Pull NOC Ticket & MRTG/PRTG Logs",
        description:
          "Export 99.5%+ uptime graphs, BGP session logs, and zero-ticket history from the NOC portal covering the disputed billing cycles.",
      },
      {
        step: "Certify Electronic Logs Under BSA s.63",
        description:
          "Execute a Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate signed by the NOC head authenticating bandwidth utilization and Commissioning Acceptance Test (AT) sign-off.",
      },
      {
        step: "Rebut Pre-Existing Dispute Defense",
        description:
          "Serve a formal rejoinder demonstrating that zero SLA credit notes were claimed prior to disconnection, neutralizing any sham 'pre-existing dispute' plea.",
      },
    ],
    statutoryRule: "BSA 2023 s.63 · Contract Act s.55 · IBC 2016 s.8 (Mobilox Sham Dispute Test)",
  },
  {
    id: "unreturned-mux-cpe",
    tabLabel: "Unreturned MUX / CPE",
    title: "Client Blocks Engineer Entry & Retains Carrier-Grade MUX, Routers, SFP+ & Radios",
    cause:
      "Enterprise clients frequently lock premises, change security staff, or hand over the leased office back to the landlord while retaining ISP-owned Layer-2/3 MUX switches, Cisco/Juniper CPE routers, SFP+ optical transceivers, ONTs, or licensed-band microwave radios worth ₹60,000–₹4,50,000 per POP.",
    legalBasis:
      "Standard CAF and Master Service Agreements explicitly stipulate that last-mile CPE remains the sole property of the ISP/TSP on bailment (Sections 148–160, Indian Contract Act, 1872). Refusal to return bailed telecom hardware post-termination triggers civil recovery of equipment/value under Sections 7–8 of the Specific Relief Act, 1963, and criminal liability for dishonest misappropriation/breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    steps: [
      {
        step: "Hardware Asset Tag & MAC Audit",
        description:
          "Compile the signed Hardware Delivery Challan, serial numbers, MAC IDs, and Commissioning AT Report showing installation at the subscriber's NOC rack.",
      },
      {
        step: "7-Day Mandatory Hardware Surrender Notice",
        description:
          "Demand peaceful handover of all CPE/MUX hardware within 7 days, failing which full replacement cost plus daily detention damages will be claimed alongside BNS s.316 action.",
      },
      {
        step: "Landlord & Facility Manager Intimation",
        description:
          "Send a formal copy to the building/IT-park facility manager putting them on notice of ISP title so the hardware is not auctioned or scrapped as tenant scrap.",
      },
    ],
    statutoryRule: "Contract Act s.148–160 (Bailment) · Specific Relief Act s.7–8 · BNS 2023 s.316",
  },
  {
    id: "multi-branch-mpls-sdwan",
    tabLabel: "Multi-Site MPLS / SD-WAN",
    title: "Enterprise Cancels 12 of 20 MPLS / SD-WAN Spoke Links After Partial Commissioning",
    cause:
      "A retail chain or NBFC executes a pan-India MPLS / SD-WAN Master Service Agreement (MSA) for 20 branches. After the ISP commissions 8 hubs and completes fiber civil work/hardware procurement for the remaining 12 spokes, the client cancels the rollout citing budget cuts.",
    legalBasis:
      "Under Section 73 of the Contract Act, where a party prevents performance or repudiates a composite MSA after the ISP has incurred irreversible third-party backhaul, last-mile vendor, and SD-WAN license commitments, the ISP is entitled to full restitution of incurred CapEx, third-party NNI/last-mile cancellation charges, and unamortized hub-link lock-in.",
    steps: [
      {
        step: "Segregate Commissioned vs. WIP Sites",
        description:
          "Categorize all 20 circuit IDs into (a) AT-signed live links, (b) fiber-laid/spliced WIP sites, and (c) SD-WAN orchestrator licenses already procured.",
      },
      {
        step: "Attach Third-Party Telco/ROW Invoices",
        description:
          "Bundle Class-A/B partner NNI backhaul commitments and municipal ROW demand notes to substantiate actual out-of-pocket damages under Section 73.",
      },
      {
        step: "Invoke Composite MSA Arbitration / Commercial Court",
        description:
          "Consolidate all 20 circuit IDs into one unified notice and commercial claim above the ₹3 lakh Specified Value threshold for Commercial Court or institutional arbitration.",
      },
    ],
    statutoryRule: "Contract Act s.73 & s.74 · Commercial Courts Act s.2(1)(c) · Arbitration Act s.21",
  },
];

export default function IspLockInScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          ISP Operational Playbooks
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Select a Leased Line / MPLS Default Scenario to View Recovery Strategy
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          How Class-A/B Enterprise ISPs and Telco Billing Leads overcome early-exit excuses, fake SLA disputes, and unreturned CPE.
        </p>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="space-y-5">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {currentScenario.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Commercial Failure Mode: </strong>
            {currentScenario.cause}
          </p>
        </div>

        <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            <strong className="text-[#DC2626] uppercase tracking-wider text-[11px] block mb-1">
              Statutory &amp; Contractual Basis
            </strong>
            {currentScenario.legalBasis}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentScenario.steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.step}
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
          <span className="font-semibold text-slate-500">Governing Provisions:</span>
          <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-100 font-medium">
            {currentScenario.statutoryRule}
          </span>
        </div>
      </div>
    </div>
  );
}
