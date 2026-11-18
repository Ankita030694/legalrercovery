"use client";

import React, { useState } from "react";

interface CpaasScenario {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  legalBasis: string;
  steps: {
    step: string;
    detail: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: CpaasScenario[] = [
  {
    id: "whatsapp-festive-blast",
    tabLabel: "WhatsApp Blast Default",
    title: "Enterprise Runs ₹40L Festive WhatsApp Marketing Burst, Then Stalls Payment",
    trigger:
      "An e-commerce, D2C, or NBFC client triggers millions of Meta marketing conversations (₹0.80+ per template) during Diwali/EOSS on a 30-day postpaid credit line, then disputes conversion ROI or goes silent when the invoice matures.",
    legalBasis:
      "Under the Meta WhatsApp Business Solution Provider (BSP) billing model, Meta debits the BSP's credit line per delivered conversation window regardless of the advertiser's downstream sales conversion. Under Section 73 of the Indian Contract Act, 1872 and Order XXXVII CPC, signed Insertion Orders (IOs) or Master Services Agreements (MSAs) combined with Meta WABA webhook delivery receipts establish a liquidated debt.",
    steps: [
      {
        step: "Credit-Cap Breach & Immediate API Throttling",
        detail:
          "Issue a 48-hour automated credit-limit breach notice and throttle non-OTP marketing templates while preserving transactional/utility logs to prevent compounding Meta pass-through exposure.",
      },
      {
        step: "BSA 2023 s.63 Certified WABA Webhook Export",
        detail:
          "Export timestamped Meta Graph API conversation IDs, pricing category breakdowns (marketing vs utility vs authentication), and SHA-256 hash-certified billing reconciliation sheets.",
      },
      {
        step: "15-Day Demand Notice & Order XXXVII Summary Suit",
        detail:
          "Serve an advocate-drafted notice demanding principal, 18% GST reimbursement, and contractual/MSMED interest (3x RBI bank rate if the BSP holds Udyam registration).",
      },
    ],
    statutoryRule: "BSA 2023 s.63 + Order XXXVII CPC + MSMED Act 2006 s.15–16",
  },
  {
    id: "api-key-leak-excuse",
    tabLabel: "\"API Key Leaked\" Dispute",
    title: "Client Claims Unauthorized OTP/SMS Traffic Spike From Leaked API Credentials",
    trigger:
      "After an international A2P SMS or OTP bombing spike hits ₹18–₹35 Lakh, the enterprise's CTO claims their GitHub repo or staging server leaked the REST API key and refuses to pay the telco interconnect bill.",
    legalBasis:
      "A well-drafted CPaaS MSA includes a Strict API-Key Customer Custody & Indemnity Clause making the client solely liable for all traffic authenticated via its API key, Bearer token, or SMPP bind. Under Section 11 of the Information Technology Act, 2000, electronic records attributed to a subscriber's security procedure (API key + IP whitelist) are legally binding on the originator.",
    steps: [
      {
        step: "Produce SMPP / REST Auth & IP Origin Logs",
        detail:
          "Extract source IP addresses, TLS handshake timestamps, DLT Principal Entity (PE) ID, and registered Header/Template IDs showing traffic originated from the client's authenticated credentials.",
      },
      {
        step: "Invoke Strict Custody & Non-Repudiation Clause",
        detail:
          "Rebut the 'third-party hack' defense by citing MSA custody warranties: the BSP is a neutral conduit paying Airtel/Jio/VI interconnect upfront and cannot absorb client-side DevOps negligence.",
      },
      {
        step: "Pre-Empt IT Act s.43 Counterclaims",
        detail:
          "Attach threshold-alert emails sent during the spike to prove the BSP acted in good faith and gave real-time anomaly alerts before suspending the bind.",
      },
    ],
    statutoryRule: "IT Act 2000 s.11 & s.43 + Contract Act s.124 (Indemnity) + BSA s.63",
  },
  {
    id: "dlt-interconnect-squeeze",
    tabLabel: "DLT & Telco Pass-Through",
    title: "Airtel/Jio/VI DLT Scrubbing & Interconnect Bills Due While Client Challenges CDRs",
    trigger:
      "Bulk SMS aggregators pay ₹0.025–₹0.03 per DLT-scrubbed SMS plus interconnect termination fees on fixed 15-day telco cycles, but the enterprise client withholds 60+ days of invoices alleging 'low delivery rates' or DLT template rejections.",
    legalBasis:
      "Under TRAI's Telecom Commercial Communications Customer Preference Regulations (TCCCPR), 2018, DLT scrubbing charges apply per submission/scrubbing attempt, even if a message fails due to the enterprise's expired PE header or unapproved template. Telco SMSC Call Detail Records (CDRs) certified under BSA 2023 s.63 are conclusive proof of submission and carrier handoff.",
    steps: [
      {
        step: "Separate Carrier Hand-Off from Handset Reachability",
        detail:
          "Present operator-level SMPP submit_sm_resp and deliver_sm DLR error codes distinguishing 'delivered to handset' from 'subscriber switched off/DND blocked'—which remain billable under standard CPaaS SLAs.",
      },
      {
        step: "Lock In Undisputed Principal via Commercial Mediation",
        detail:
          "Under Section 12A of the Commercial Courts Act, 2015, initiate Pre-Institution Mediation for claims ≥ ₹3 Lakh to force the client's CFO to admit undisputed DLT volumes or face fast-track Commercial Suit.",
      },
      {
        step: "Batch Small-Ticket Aggregator Arrears",
        detail:
          "Aggregate 50–500+ SME bulk SMS defaulters (₹50,000–₹5 Lakh each) into a single CSV legal-notice campaign to recover working capital without per-case litigation overhead.",
      },
    ],
    statutoryRule: "TRAI TCCCPR 2018 + Commercial Courts Act 2015 s.12A + BSA s.63",
  },
  {
    id: "cloud-telephony-dialer-burst",
    tabLabel: "IVR & Election Burst",
    title: "Cloud Telephony, SIP Trunk & Political/NBFC Outbound Dialer Overruns",
    trigger:
      "A fintech collections agency, edtech sales floor, or election campaign vendor runs 500+ concurrent cloud IVR channels and Virtual Mobile Numbers (VMNs), exceeds its postpaid credit cap over a weekend, and abandons the account.",
    legalBasis:
      "Cloud telephony and SIP trunking usage is metered in real-time pulse/minute CDRs. Note the critical forum split under Section 14 of the TRAI Act, 1997: disputes between licensed TSPs/VNOs go to TDSAT, whereas a CPaaS platform's postpaid invoice recovery against an enterprise subscriber belongs in Commercial Court / Civil Court (Order XXXVII CPC) or MSME MSEFC.",
    steps: [
      {
        step: "Freeze DID/VMN & Toll-Free Number Routing",
        detail:
          "Issue a 72-hour cure notice before de-allocating DIDs/toll-free numbers and exporting call recordings/CDRs under a clear retention window to avoid business-disruption counterclaims.",
      },
      {
        step: "Preserve Pulse-Level CDRs & KYC/CAF Records",
        detail:
          "Compile DOT-compliant KYC, CAF/MSA, SIP trunking channel logs, and pulse-by-pulse CDR exports signed with a BSA 2023 s.63(4) certificate.",
      },
      {
        step: "Enforce Personal Guarantees or Director Liability",
        detail:
          "Where post-dated security cheques (PDCs) or e-NACH mandates bounce upon credit-cap overrun, simultaneously trigger Section 138 NI Act / Section 25 PSS Act criminal complaints alongside civil recovery.",
      },
    ],
    statutoryRule: "TRAI Act 1997 s.14 (Forum Split) + NI Act s.138 + Order XXXVII CPC",
  },
];

export default function CpaasScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="CPaaS and WhatsApp BSP default scenarios"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.trigger}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Legal Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            3-Step Recovery Execution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
