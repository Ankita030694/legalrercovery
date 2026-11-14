"use client";

import React, { useState } from "react";

interface MfiScenario {
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

const SCENARIOS: MfiScenario[] = [
  {
    id: "ring-leader-mass-default",
    tabLabel: "Ring-Leader Mass Default",
    title: "Organized Ring-Leader Instigates Centre-Wide Payment Boycott",
    trigger:
      "A local middleman, politically connected borrower, or ex-field staff member convinces an entire village centre or 20–40 JLG borrowers to stop paying EMIs simultaneously, promising fabricated 'loan waivers' or threatening field officers.",
    regulatoryRule:
      "Under the RBI Master Direction (Regulatory Framework for Microfinance Loans), field staff cannot retaliate with coercive centre-meeting sit-ins or public shaming. However, intentional inducement of mass default and misappropriation of collected centre cash by a ring-leader constitutes an actionable civil breach and criminal inducement/cheating where documentary proof exists.",
    remediationSteps: [
      {
        step: "Isolate the Ring-Leader Cohort via Field Intelligence",
        detail:
          "Pause mass field confrontation immediately. Segregate the 1–3 instigators from genuine distressed borrowers in your LMS so legal escalation targets the wilful orchestrators.",
      },
      {
        step: "Serve Individualized Vernacular Speed Post RPAD Notices",
        detail:
          "Dispatch formal Advocate Legal Notices in the local vernacular (Hindi, Marathi, Tamil, Bengali, Kannada, etc.) + English via Speed Post RPAD and WhatsApp to the ring-leaders, citing exact principal, accrued interest, and Lok Adalat referral.",
      },
      {
        step: "File Selective Criminal / PSS s.25 & Lok Adalat Reference",
        detail:
          "Where the ring-leader issued a bounced e-NACH/cheque or collected cash from centre members without depositing it, initiate Section 25 PSS Act / Section 138 NI Act or BNS s.318 complaints while offering penalty-waiver Lok Adalat settlement to misled members.",
      },
    ],
    statutoryCitation: "BNS 2023 s.318 (Cheating) & Legal Services Authorities Act, 1987 (Lok Adalat)",
  },
  {
    id: "graduated-msme-default",
    tabLabel: "₹75K–₹3L Graduated Loan",
    title: "Graduated Individual / Micro-Enterprise Borrower Defaults at 60+ DPD",
    trigger:
      "A seasoned borrower who graduated from ₹25,000 JLG group cycles to a ₹75,000–₹3,00,000 Individual Retail or Micro-Enterprise (kirana, dairy, tailoring, e-rickshaw) loan stops paying after 4–6 EMIs, citing cashflow strain while continuing business operations.",
    regulatoryRule:
      "Unlike ₹20,000 JLG loans where litigation costs exceed the claim, ₹75,000–₹3,00,000 graduated loans are economically viable for formal legal escalation—provided the MFI respects RBI's ban on harsh recovery agents, issues uncompounded penal charges, and serves notice in a language understood by the borrower.",
    remediationSteps: [
      {
        step: "Trigger Legal Escalation at 45–60 DPD (Skip Harsh Field Pressure)",
        detail:
          "Replace repetitive branch visits with a formal Advocate Loan Recall Notice delivered via Speed Post RPAD, WhatsApp PDF, and Email—creating an unmistakable institutional boundary.",
      },
      {
        step: "Invoke Section 25 PSS Act / NI s.138 for Mandate Dishonour",
        detail:
          "If the graduated micro-enterprise loan is backed by an e-NACH, UPI AutoPay, or security cheque, serve the statutory 15-day demand notice within 30 days of dishonour intimation.",
      },
      {
        step: "Route to National Lok Adalat or ODR Settlement Desk",
        detail:
          "Attach a pre-litigation National Lok Adalat / ODR settlement option offering structured 3-to-6-month rescheduling, securing a binding Section 21 Legal Services Authorities Act award enforceable as a civil decree.",
      },
    ],
    statutoryCitation: "PSS Act 2007 (s.25), NI Act (s.138) & Legal Services Authorities Act (s.21)",
  },
  {
    id: "jlg-moral-vs-legal",
    tabLabel: "JLG Moral vs. Legal",
    title: "JLG Co-Borrowers Refuse Group Guarantee for Defaulting Member",
    trigger:
      "One member of a 5-woman Joint Liability Group (JLG) migrates or defaults on a ₹30,000 loan. Branch staff attempt to withhold fresh cycle disbursements or pressure the remaining 4 paying members to cover the defaulter's EMI.",
    regulatoryRule:
      "MFIN and Sa-Dhan Codes of Conduct, aligned with RBI Microfinance Directions, strictly prohibit coercive peer-pressure tactics, forced detention during centre meetings, or illegal asset seizure against JLG members. While JLG agreements contain joint-and-several liability clauses, enforcing them aggressively against paying rural women triggers severe RBI supervisory and reputational sanctions.",
    remediationSteps: [
      {
        step: "Separate Moral Suasion from Legal Liability",
        detail:
          "Use non-coercive centre counseling and flexible moratorium/restructuring for genuine hardship among the 4 paying members—never threaten or publicly shame the group.",
      },
      {
        step: "Issue Soft-Toned Vernacular Demand to the Primary Defaulter",
        detail:
          "Send a compliant, vernacular Advocate Reminder / Demand Notice solely to the absconding or wilful primary borrower's permanent KYC address via Speed Post RPAD.",
      },
      {
        step: "Escalate Only High-Ticket or Chronic Intentional Defaulters",
        detail:
          "Reserve formal Lok Adalat referrals for chronic non-payers or graduated loans above ₹50,000, preserving the JLG social capital of compliant centre members.",
      },
    ],
    statutoryCitation: "RBI Microfinance Master Direction (2022) & MFIN / Sa-Dhan Code of Conduct",
  },
  {
    id: "foir-income-audit-defense",
    tabLabel: "FOIR & Income Audit",
    title: "Borrower Raises Over-Indebtedness / 50% FOIR Breach Before Ombudsman",
    trigger:
      "Following a legal notice or credit bureau reporting, a borrower (or local activist) files an RBI Integrated Ombudsman complaint alleging the MFI violated the 50% household income FOIR cap or failed to hand over a vernacular Loan Card.",
    regulatoryRule:
      "RBI's Regulatory Framework for Microfinance Loans mandates that total debt-servicing obligations of a microfinance household (annual income <= ₹3,00,000) must not exceed 50% of monthly household income, and requires a standardized Fact Sheet / Loan Card in vernacular language.",
    remediationSteps: [
      {
        step: "Audit the Origination Household Income & FOIR Sheet",
        detail:
          "Verify that the borrower's signed household income declaration, CB-checked existing obligations, and 50% FOIR calculation are archived before issuing any adversarial notice.",
      },
      {
        step: "Verify Uncompounded Penal Charges & Interest Transparency",
        detail:
          "Ensure the legal notice demand schedule excludes compounded penal interest and clearly separates Principal, agreed Interest, and transparent Penal Charges per RBI norms.",
      },
      {
        step: "Offer Structured Hardship Restructuring via ODR",
        detail:
          "If genuine post-disbursement income shock occurred (medical/crop loss), route the reply through an Advocate-moderated ODR / Lok Adalat tenure extension rather than pursuing contested recovery.",
      },
    ],
    statutoryCitation: "RBI Master Direction — Regulatory Framework for Microfinance Loans (Clauses 5 & 7)",
  },
];

export default function MfiScenarioTabs() {
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
        <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">
              MFI Recovery &amp; Compliance Playbook
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              {current.title}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700">
            {current.statutoryCitation}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Operational Failure Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
              RBI &amp; SRO Statutory Boundary
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.regulatoryRule}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-3">
            Audit-Safe Legal Remediation Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.remediationSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold mb-2">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
