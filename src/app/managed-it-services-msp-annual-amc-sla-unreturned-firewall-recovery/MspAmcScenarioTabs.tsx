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
    id: "admin-credential-handover",
    tabLabel: "M365 / DNS Handover",
    title: "Client Owes 4 Months of AMC & Demands Root M365, Cloudflare & Firewall Passwords",
    cause:
      "After an MSP suspends proactive patching or ticket support for 90+ days of unpaid monthly retainers, the defaulting client's new IT vendor or CFO demands immediate handover of Microsoft 365 Global Admin, GoDaddy/Cloudflare DNS, AWS root, and domain registrar credentials. Holding these client-owned credentials hostage as leverage triggers counter-FIR threats under IT Act s.43 and s.66.",
    legalBasis:
      "Client-owned cloud tenants, domain names, and enterprise email accounts are the client's intangible property. Under Section 43(a)/(b)/(e) of the Information Technology Act, 2000, denying an authorized owner access to their computer system or data creates civil compensation liability and criminal exposure—completely derailing the MSP's civil debt suit. Executing a clean, timestamped Credential Handover Protocol strips the defaulter of criminal leverage while preserving 100% of the MSP's money claim.",
    steps: [
      {
        step: "Segregate Client Credentials vs. MSP IP",
        description:
          "Compile client-owned logins (M365 Global Admin, DNS, SSL, ERP DB) separately from MSP-owned RMM agents, proprietary automation scripts, and MSP-billed license keys.",
      },
      {
        step: "Execute Dual-Signed Handover Protocol",
        description:
          "Transfer client-owned credentials against a written 'Without Prejudice' Handover Acknowledgement explicitly stating that transfer does not waive ₹X overdue AMC invoices.",
      },
      {
        step: "Serve Simultaneous Order XXXVII & MSMED Notice",
        description:
          "On the same day of credential release, serve an Advocate Demand Notice claiming unpaid AMC fees, 3x RBI compound interest (if MSME), and return of MSP-owned CPE.",
      },
    ],
    statutoryRule: "IT Act 2000 s.43 & s.66 · Contract Act s.51–54 · Order XXXVII CPC",
  },
  {
    id: "unreturned-faas-firewall",
    tabLabel: "Unreturned Fortinet / CPE",
    title: "Client Terminates FaaS Contract & Refuses Return of Leased Fortinet, SonicWall or Sophos Gear",
    cause:
      "Under Firewall-as-a-Service (FaaS) and managed SD-WAN bundles, the MSP deploys ₹1.2L–₹6.5L worth of Fortinet FortiGate, SonicWall, Sophos XG appliances, PoE core switches, and enterprise Wi-Fi APs on a monthly rental. Upon payment default, the client blocks physical site entry or claims the hardware is 'included in past payments'.",
    legalBasis:
      "When hardware is deployed on lease/FaaS without title transfer, the client holds the appliances strictly as a bailee under Sections 148–160 of the Indian Contract Act, 1872. Retaining or refusing to return bailed networking gear after contract termination constitutes actionable civil detention under Sections 7–8 of the Specific Relief Act, 1963, and criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    steps: [
      {
        step: "Freeze OEM Cloud Portal & Compile Serials",
        description:
          "De-register or suspend MSP-owned FortiCloud/Sophos Central management seats (without wiping client local config) and extract Delivery Challans with exact serial numbers and MAC IDs.",
      },
      {
        step: "Serve 7-Day BNS s.316 Hardware Surrender Notice",
        description:
          "Issue a formal fact-verified notice demanding physical surrender of the tagged appliances within 7 days, specifying full replacement value and daily rental detention charges.",
      },
      {
        step: "Notify IT-Park Facility & File BNS s.316 / Civil Action",
        description:
          "Put the building/IT-park landlord on written notice of MSP title so hardware is not scrapped, and escalate non-return to BNS s.316 police complaint + Commercial Court recovery.",
      },
    ],
    statutoryRule: "Contract Act s.148–160 (Bailment) · Specific Relief Act s.7–8 · BNS 2023 s.316",
  },
  {
    id: "soc-sla-credit-excuse",
    tabLabel: "SOC / SLA Uptime Excuse",
    title: "Enterprise Client Cancels 24x7 SOC / EDR Annual Contract Citing 'Fake SLA Breaches'",
    cause:
      "Mid-way through an annual 24x7 Security Operations Center (SOC), SIEM, and Managed EDR contract, a defaulting enterprise CFO refuses to clear quarterly retainers—retroactively alleging 'missed alerts, false positives, or 99.9% SLA failure' even though zero SLA breach tickets were logged during the billing quarters.",
    legalBasis:
      "Commercial IT/MSSP MSAs mandate contemporaneous SLA breach reporting within 7–15 days, followed by a formal cure window and capped service credits (typically 5%–10% of that month's MRC—never 100% invoice forfeiture). Under the Supreme Court's Mobilox standard and Order XXXVII CPC principles, belated quality excuses raised only after a payment default are rejected as sham afterthoughts when rebutted by BSA s.63 certified PSA/SIEM logs.",
    steps: [
      {
        step: "Export PSA Ticket & SIEM Heartbeat Logs",
        description:
          "Generate monthly SLA compliance reports, MTTR metrics, and CrowdStrike/SentinelOne endpoint health dashboards proving continuous 24x7 monitoring.",
      },
      {
        step: "Certify Telemetry Under BSA 2023 Section 63",
        description:
          "Execute a Section 63 Bharatiya Sakshya Adhiniyam certificate signed by the SOC Lead or CTO authenticating the immutable PSA/SIEM logs and monthly executive reports sent to the client.",
      },
      {
        step: "Enforce MSA Lock-In & Sunk License Costs",
        description:
          "Claim the unpaid annual retainer balance alongside non-cancellable annual EDR/SIEM OEM license seats procured specifically for the client's tenant under Contract Act s.73.",
      },
    ],
    statutoryRule: "BSA 2023 s.63 · Contract Act s.55 & s.73 · IBC s.8 (Mobilox Sham Dispute Test)",
  },
  {
    id: "multi-branch-amc-default",
    tabLabel: "Multi-Site Retail / NBFC AMC",
    title: "Multi-Branch Corporate Stops Paying Pan-India IT Facility AMC & OEM Renewal Bills",
    cause:
      "A 40-branch NBFC, retail chain, or healthcare network signs a composite pan-India IT Facility Management & AMC contract covering L1/L2 engineers, firewall subscriptions, and backup appliances. After 6 months of uninterrupted service, the corporate stops clearing invoices citing 'cash-flow restructuring' while still keeping MSP-procured firewall licenses active.",
    legalBasis:
      "Where an enterprise continues enjoying deployed IT infrastructure, annual OEM UTM subscriptions paid upfront by the MSP, and on-site engineering support without formal termination, Section 70 of the Contract Act (non-gratuitous benefit) and acknowledged GST invoices establish an indisputable liquidated debt for an Order XXXVII Summary Suit or MSMED Samadhaan reference (with Section 43B(h) tax disallowance pressure).",
    steps: [
      {
        step: "Audit GST E-Invoices & GSTR-2B Acceptance",
        description:
          "Verify whether the corporate buyer claimed Input Tax Credit (ITC) on your AMC GST invoices—ITC availment acts as a powerful statutory admission of service receipt.",
      },
      {
        step: "Trigger Section 43B(h) & MSMED s.16 Leverage",
        description:
          "If the MSP holds Udyam registration (Micro/Small), serve an intimation warning that overdue AMC invoices beyond 45 days face mandatory income tax disallowance under Section 43B(h).",
      },
      {
        step: "Batch Branch Hardware & Commercial Suit",
        description:
          "Consolidate all 40 branch hardware serial numbers and overdue AMC ledgers into one Commercial Court Order XXXVII summary suit or institutional arbitration.",
      },
    ],
    statutoryRule: "MSMED Act s.15–18 · Income Tax Act s.43B(h) · Contract Act s.70 · Order XXXVII CPC",
  },
];

export default function MspAmcScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="MSP and MSSP Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            Operational Playbook
          </span>
          <span className="text-[11px] font-semibold text-[#DC2626]">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            3-Step Legal Execution Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {item.step}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
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
