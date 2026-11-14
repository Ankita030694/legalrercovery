"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  regulatoryRule: string;
  remediationSteps: {
    step: string;
    detail: string;
  }[];
  statutoryCitation: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "calling-window-breach",
    tabLabel: "8 AM–7 PM Breach",
    title: "Outsourced Telecaller Violates 8 AM–7 PM Window or Excess-Call Cap",
    trigger:
      "Predictive dialers operated by third-party collection agencies repeatedly call borrowers before 8:00 AM, after 7:00 PM, or exceed reasonable daily contact frequencies—generating RBI Integrated Ombudsman complaints and recorded harassment audio.",
    regulatoryRule:
      "Under the RBI Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services and the Fair Practices Code for NBFCs, Regulated Entities (REs) remain vicariously liable for every call placed by their outsourced agents. Unreasonable hours, abusive language, or persistent calling constitute unfair recovery practices attracting monetary penalties and supervisory restrictions.",
    remediationSteps: [
      {
        step: "Hard-Gate Dialer Windows & Cap Soft Calls at 15 DPD",
        detail:
          "Enforce server-level CRM locks restricting soft reminder calls strictly between 08:00 and 19:00 IST, capped at 2–3 polite reminders during Bucket X (1–15 DPD).",
      },
      {
        step: "Auto-Freeze Voice Dunning at 30 DPD",
        detail:
          "Once an account crosses 30 DPD without payment, suppress automated voice-bots and field visits to prevent escalating borrower friction and Ombudsman filings.",
      },
      {
        step: "Dispatch Advocate Legal Notice on Tri-Channel Rails",
        detail:
          "Transition the account to a formal Advocate Demand Notice delivered via Email, WhatsApp, and Speed Post RPAD—replacing 40 intrusive calls with a single legally admissible statutory demand.",
      },
    ],
    statutoryCitation: "RBI Responsible Business Conduct Directions & Fair Practices Code (8 AM–7 PM Rule)",
  },
  {
    id: "iibf-dra-audit-gap",
    tabLabel: "IIBF DRA Audit Gap",
    title: "Unverified Field Agent Lacks IIBF DRA Certification or Background Vetting",
    trigger:
      "During an RBI supervisory inspection or post-complaint audit, the NBFC cannot produce valid IIBF Debt Recovery Agent (DRA) certificates, police verification records, or signed Code of Conduct undertakings for sub-contracted field executives.",
    regulatoryRule:
      "RBI mandates that all recovery agents deployed by banks and NBFCs must undergo mandatory training and obtain certification from the Indian Institute of Banking and Finance (IIBF), alongside strict background verification and public disclosure of empaneled agencies on the RE's website.",
    remediationSteps: [
      {
        step: "Centralize Agency Roster & IIBF Certificate Expiry Tracking",
        detail:
          "Maintain an auditable registry of every field agent's IIBF DRA certificate number, KYC, and police clearance before issuing any borrower assignment.",
      },
      {
        step: "Eliminate Unsecured Small-Ticket Field Visits",
        detail:
          "For unsecured personal loans and BNPL under ₹2 Lakh, eliminate physical field visits entirely—deploying Advocate Legal Notices and Online Dispute Resolution (ODR) instead.",
      },
      {
        step: "Route Escalations Through Advocates Act, 1961 Counsel",
        detail:
          "Statutory legal notices and Section 25 PSS Act / Section 138 NI Act proceedings are executed by enrolled Advocates under the Advocates Act, 1961—eliminating unregulated field-agent exposure.",
      },
    ],
    statutoryCitation: "RBI Outsourcing Master Direction (IIBF DRA Training) & Advocates Act, 1961",
  },
  {
    id: "lsp-digital-lending-violation",
    tabLabel: "LSP & Digital Lending",
    title: "Fintech LSP Contact Scraping or Third-Party Shaming Triggers RBI Action",
    trigger:
      "A Lending Service Provider (LSP) or Digital Lending App (DLA) accesses borrower phonebooks, messages relatives/employers, or sends unbranded WhatsApp threats—exposing the partner NBFC to immediate business restrictions under RBI Digital Lending Directions.",
    regulatoryRule:
      "RBI Digital Lending Directions prohibit DLAs/LSPs from accessing mobile phone resources such as contact lists and call logs, mandate explicit borrower consent for data collection, and strictly ban contacting third parties or shaming borrowers.",
    remediationSteps: [
      {
        step: "Zero Contact-List Access & Strict Purpose Limitation",
        detail:
          "Audit all LSP SDKs to verify zero access to phone contacts, gallery, or call logs, and ensure borrower data is stored only on India-located servers of the Regulated Entity.",
      },
      {
        step: "Serve Notices Strictly to Verified Borrower Coordinates",
        detail:
          "Ensure Advocate Legal Notices are dispatched solely to the borrower's KYC-verified email, registered mobile number, and permanent/current postal address.",
      },
      {
        step: "Capture Inbound Reply Triage in Compliant Portal",
        detail:
          "Log all borrower settlement requests, hardship claims, or dispute replies inside a structured legal triage portal rather than ad-hoc agent WhatsApp chats.",
      },
    ],
    statutoryCitation: "RBI Master Direction on Regulatory Framework for Digital Lending & DPDP Act, 2023",
  },
  {
    id: "nach-bounce-legal-shift",
    tabLabel: "30–90 DPD Legal Shift",
    title: "Converting Repeated e-NACH Bounces into Audit-Safe Statutory Notices",
    trigger:
      "A borrower's e-NACH / UPI AutoPay mandate bounces repeatedly at 30–60 DPD. Continued telecalling yields false promises-to-pay (PTP) while the 30-day statutory limitation window to issue a Section 25 PSS Act notice quietly expires.",
    regulatoryRule:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007 (read with Section 138 of the Negotiable Instruments Act, 1881), a lender must issue a written statutory demand notice within 30 days of receiving the electronic dishonour intimation from the bank/NPCI. Missing this window forfeits criminal-parity leverage.",
    remediationSteps: [
      {
        step: "Ingest NPCI Dishonour Memos Within 48 Hours",
        detail:
          "Export bounced UMRN records and NPCI return codes (e.g., Insufficient Funds / Mandate Cancelled) into the LegalRecovery.in CSV engine.",
      },
      {
        step: "Issue Composite Recall + PSS s.25 Demand Notice",
        detail:
          "Serve a formal Advocate Notice detailing exact Principal, Interest, and uncompounded Penal Charges per RBI Penal Charges norms, giving a 15-day statutory cure window.",
      },
      {
        step: "Preserve BSA 2023 s.63 Hash & RPAD Proofs",
        detail:
          "Archive server timestamps, SHA-256 hashes, Email/WhatsApp delivery receipts, and India Post RPAD tracking for seamless judicial or ODR filing.",
      },
    ],
    statutoryCitation: "Payment & Settlement Systems Act, 2007 (s.25) & BSA 2023 (s.63)",
  },
];

export default function RbiComplianceScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Header */}
      <div className="bg-slate-900 p-2 sm:p-3 flex flex-wrap gap-2">
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-5 sm:p-6 md:p-8 space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
            Compliance Failure Mode &amp; Remediation
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">
              Operational Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
              RBI Supervisory &amp; Statutory Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.regulatoryRule}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Audit-Safe Substitution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.remediationSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-500">Governing Authority:</span>
          <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
            {current.statutoryCitation}
          </span>
        </div>
      </div>
    </div>
  );
}
