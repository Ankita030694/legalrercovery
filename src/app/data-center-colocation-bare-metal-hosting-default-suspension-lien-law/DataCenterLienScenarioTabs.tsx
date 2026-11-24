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
    id: "colocation-gate-pass-lien",
    tabLabel: "Rack Hardware Lien",
    title: "Refusing Gate-Pass Removal for Defaulting Tenant's ₹80L+ Physical Rack Servers",
    cause:
      "A colocation tenant owes 3–6 months of rack space, metered power (kWh), and cross-connect fees, then sends a logistics team with a De-Install Gate-Pass request to pull out ₹80 Lakh–₹3 Crore worth of Dell PowerEdge, HPE ProLiant, or Cisco Nexus hardware before settling arrears.",
    legalBasis:
      "While Section 171 of the Indian Contract Act, 1872 grants general statutory liens only to bankers, factors, wharfingers, attorneys, and policy-brokers, Indian courts consistently enforce an express Contractual Lien created in a Colocation Master Services Agreement (MSA). Combined with Section 170 (where value-added rack engineering, cooling, and smart-hands maintenance were rendered), the data center may lawfully withhold physical Gate-Pass clearance until undisputed arrears are cleared—provided it simultaneously grants a 7-day read-only logical data-export window so it is not accused of holding business or personal data hostage.",
    steps: [
      {
        step: "Issue Formal Gate-Pass Hold & Lien Crystallization Notice",
        description:
          "Serve a Fact-verified Lien & Cure Notice citing the exact MSA Contractual Lien clause, itemized rack/power ledger, and formal refusal of physical asset exit pending payment.",
      },
      {
        step: "Decouple Data Access from Physical Possession",
        description:
          "Provision a 7-day read-only SFTP/out-of-band VPN export window for the tenant's engineers to copy databases, neutralizing any BNS s.316 criminal breach of trust or IT Act s.43 allegation.",
      },
      {
        step: "Escalate to Order XXXVII CPC or Section 9 Asset Preservation",
        description:
          "If arrears remain unpaid after 15 days, file an Order XXXVII CPC Summary Suit or Section 9 Arbitration petition seeking formal attachment/sale authorization over the detained rack hardware.",
      },
    ],
    statutoryRule: "Indian Contract Act s.170/171 (Express MSA Lien) & Order XXXVII CPC",
  },
  {
    id: "gpu-cluster-ai-default",
    tabLabel: "GPU / Bare-Metal Default",
    title: "AI Startup Defaults on Bare-Metal Nvidia H100 / A100 GPU Cluster Commit",
    cause:
      "Venture-backed AI startups book dedicated 8xH100 or A100 bare-metal clusters on 12–24 month reserved commits with high-density liquid/air cooling. When funding stalls, they stop paying monthly ₹15L–₹45L bills while continuing model training jobs that burn massive kWh power.",
    legalBasis:
      "Unlike multi-tenant SaaS, bare-metal GPU clusters represent dedicated capital allocation and stranded high-voltage power capacity. Under Sections 53/54 and 73/74 of the Indian Contract Act, 1872, the provider is entitled to suspend compute execution after a written cure notice, snapshot model weights/checkpoints to cold object storage for 7 days, and recover both consumed power arrears and genuine pre-estimated lock-in damages.",
    steps: [
      {
        step: "Graceful Job Pause & Checkpoint Snapshot",
        description:
          "Issue a 72-hour Final Power & Compute Suspension Notice; upon expiry, pause GPU workloads and move model weights/datasets to a read-only S3/NFS export bucket.",
      },
      {
        step: "Re-Allocate Stranded GPU Capacity to Mitigate Loss",
        description:
          "Document re-provisioning attempts and power commit shortfalls to satisfy the duty of mitigation under Section 73 Explanation while claiming unrecovered lock-in differential.",
      },
      {
        step: "Enforce Order XXXVII Summary Suit on Metered Logs",
        description:
          "Pair signed MSA Order Forms with BSA 2023 s.63 certified BMS/PDU power logs and GPU telemetry to obtain fast-track summary recovery without full trial.",
      },
    ],
    statutoryRule: "Contract Act ss.53, 54, 73 & 74 + BSA 2023 s.63 Telemetry",
  },
  {
    id: "dpdp-regulated-tenant",
    tabLabel: "DPDP & IT Act Safe-Harbor",
    title: "Suspending a FinTech, HealthTech, or SaaS Tenant Hosting End-Citizen Personal Data",
    cause:
      "A defaulting bare-metal or colocation tenant hosts regulated patient EHR records, KYC documents, or payment ledgers of lakhs of Indian citizens. Abruptly pulling the network plug or wiping drives risks IT Act Section 43/66 cyber-tampering FIRs and DPDP Act 2023 Data Fiduciary/Processor liability.",
    legalBasis:
      "Under Section 2(i)–(k) and Section 8 of the Digital Personal Data Protection (DPDP) Act, 2023, the defaulting tenant is the Data Fiduciary while the data center or bare-metal host acts strictly as a Data Processor. A Data Processor cannot unilaterally destroy or ransom personal data without prior contractual notice, nor can it expose itself to Section 43(a)/(b) IT Act 2000 civil damages for unauthorized denial of access to a third party's computer resource without a documented default-cure and export protocol.",
    steps: [
      {
        step: "Serve 15-Day Cure + Mandatory 7-Day Read-Only Export Notice",
        description:
          "Notify the tenant's DPO and Directors via Email, WhatsApp, and Speed Post RPAD that ingress/egress production traffic will be throttled, while a dedicated read-only SFTP/snapshot endpoint remains open for 7 days.",
      },
      {
        step: "Capture Cryptographic Checksums & Access Logs",
        description:
          "Log every byte downloaded during the 7-day export window with SHA-256 hashes and BSA 2023 s.63 certificates so the tenant cannot falsely claim data corruption or extortion.",
      },
      {
        step: "Controlled Cryptographic Erasure Post-Window",
        description:
          "Only after the 7-day export window expires with written confirmation or documented non-utilization, perform NIST 800-88 wipe of leased bare-metal NVMe drives (while retaining physical colocation hardware under lien).",
      },
    ],
    statutoryRule: "DPDP Act 2023 s.8 & IT Act 2000 s.43 / s.66 Safe-Suspension Protocol",
  },
  {
    id: "power-kwh-lockin-recovery",
    tabLabel: "kWh Power & Lock-In",
    title: "Recovering Unpaid Metered Power (kWh), Cross-Connects & Early Exit Lock-In",
    cause:
      "Tenants often dispute variable PUE-adjusted electricity bills, dark-fiber cross-connect charges, or 24-month lock-in exit fees, claiming 'unilateral rate hikes' or 'phantom SLA downtime' as an excuse to walk away without paying ₹25L–₹1.5Cr in arrears.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act and the Supreme Court's Kailash Nath Associates v. DDA (2015) standard, early termination charges in Tier-3/4 colocation are recoverable when backed by proof of dedicated rack-kW reservation, DG backup, and precision HVAC allocation. Automated smart-PDU meter logs and NOC ticket SLAs certified under Section 63 BSA 2023 dismantle sham downtime set-offs.",
    steps: [
      {
        step: "Reconcile Smart-PDU kWh Logs & NOC Uptime Reports",
        description:
          "Compile monthly PDU telemetry, PUE multiplier schedules, and 99.982% Tier-3 uptime certificates to prove zero SLA breach.",
      },
      {
        step: "Issue Dual-Component Demand (Consumed + Lock-In)",
        description:
          "Segregate undisputed consumed power/rack invoices (triable under Order XXXVII CPC) from lock-in exit liquidated damages in the Advocate Legal Notice.",
      },
      {
        step: "Invoke Commercial Court s.12A Mediation or Arbitration",
        description:
          "For claims >= ₹3 Lakh, initiate Commercial Courts Act s.12A pre-institution mediation or Section 21 institutional arbitration with simultaneous asset-preservation relief.",
      },
    ],
    statutoryRule: "Contract Act s.74, Commercial Courts Act s.12A & Order XXXVII CPC",
  },
];

export default function DataCenterLienScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Data center default and lien scenarios"
        className="flex flex-wrap gap-2 mb-6"
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
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900">
            {current.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            {current.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor-Side Statutory Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step General Counsel Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item, index) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
