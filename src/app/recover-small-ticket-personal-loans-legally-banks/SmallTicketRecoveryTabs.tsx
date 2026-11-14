"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    id: "delinquent-fintech-loan",
    tabLabel: "FinTech Loan (₹15k–₹50k) e-NACH Bounce",
    title: "Instant Digital Loan Default with Deliberate e-NACH Cancellation",
    cause:
      "A retail borrower avails an instant personal loan of ₹25,000 on a digital lending app. After paying 2 installments, the borrower stops funding the bank account or issues a stop-payment / revoke instruction on the e-NACH mandate. The unpaid balance stands at ₹21,500.",
    legalBasis:
      "Section 25 of Payment and Settlement Systems Act, 2007 (dishonour of electronic funds transfer treated equivalent to cheque bounce under criminal liability) and Section 19 Pre-Litigation Lok Adalat referral.",
    steps: [
      {
        step: "Automated Dishonour Memo & Section 25 Statutory Notice",
        description:
          "Generate the NPCI e-mandate return memo (Return Code R01/R08) and issue a 15-day statutory demand notice under Section 25 PSS Act via Registered Speed Post and WhatsApp, backed by Section 63 BSA electronic audit trails.",
      },
      {
        step: "Pre-Litigation Lok Adalat Listing via DLSA",
        description:
          "Simultaneously sponsor the delinquent case to the upcoming District Legal Services Authority (DLSA) National or State Lok Adalat. The DLSA issues official court summons to the borrower at zero institution fee.",
      },
      {
        step: "Conciliated Settlement Decree",
        description:
          "At Lok Adalat, borrower agrees to a restructured 3-month repayment or one-time settlement (OTS). The award passed under Section 21 of LSA Act 1987 is deemed a non-appealable civil decree executable under Order XXI CPC.",
      },
    ],
    statutoryRule:
      "Section 25 PSS Act 2007 provides that dishonour of electronic funds transfer for insufficiency of funds attracts criminal punishment up to 2 years imprisonment or twice the amount, providing strong settlement leverage.",
  },
  {
    id: "untraceable-borrower-skip",
    tabLabel: "Untraceable / Relocated Borrower",
    title: "Borrower Ghosts FinTech Lender, Changes Mobile Number and Resettles",
    cause:
      "A personal loan borrower of ₹45,000 defaults at 90 DPD. Tele-callers find the primary SIM switched off, and physical notices sent to the Aadhaar address return with 'Left Without Address' / 'Door Locked'.",
    legalBasis:
      "Section 63 of Bharatiya Sakshya Adhiniyam, 2023, Order V Rule 20 CPC (Substituted Service), and CIBIL / Experian Credit Bureau Hard Flagging.",
    steps: [
      {
        step: "Multi-Channel Electronic Trace & Digital Service",
        description:
          "Extract registered alternate emails, UPI handles, and employer credentials captured during video-KYC. Transmit the advocate demand notice across verified electronic channels with read receipts.",
      },
      {
        step: "Bureau Wilful Default Reporting & CIBIL Impairment",
        description:
          "Lender updates the default status across all four credit bureaus (CIBIL, Experian, CRIF, Equifax). The resultant 150+ point score drop locks the borrower out of fresh BNPL, credit cards, or employment background checks.",
      },
      {
        step: "DLSA Summons to Permanent Address & Family Reference",
        description:
          "DLSA summons served via local police / court bailiff to ancestral or permanent home address often causes the borrower or family members to initiate immediate OTS contact to avert rural or social reputational impact.",
      },
    ],
    statutoryRule:
      "Under Supreme Court doctrine, service on last known official address supported by electronic delivery logs satisfies statutory service requirements under Section 27 of General Clauses Act.",
  },
  {
    id: "willful-default-under-50k",
    tabLabel: "Willful Defaulter Ignoring Notice",
    title: "Borrower Has Capacity to Repay But Rebuffs Collection Relying on Small Ticket",
    cause:
      "A salaried borrower with an active salary credit defaults on a ₹60,000 personal loan, betting that the bank will not spend ₹30,000 on litigation for a ₹60,000 exposure.",
    legalBasis:
      "Section 25 PSS Act criminal complaint before Metropolitan Magistrate Court or Fast-Track Online Dispute Resolution (ODR) summary determination.",
    steps: [
      {
        step: "Section 25 PSS Act Pre-Trial Summons Warning",
        description:
          "Serve a stern advocate notice specifying that criminal prosecution under Section 25 PSS Act entails mandatory court appearances, non-bailable warrants (NBWs) upon default, and permanent police verification disqualification.",
      },
      {
        step: "Fast-Track Digital Mediation / ODR Referral",
        description:
          "Enrol the account onto a formal institutional ODR platform. Independent empanelled mediator convenes video conference; failure to settle escalates immediately to binding statutory arbitration or criminal prosecution.",
      },
      {
        step: "Summary Execution / Section 25 Filing",
        description:
          "Where non-compliance persists, bundle 20–50 similar accounts into a single jurisdictional filing through bank's empanelled counsel, achieving economies of scale.",
      },
    ],
    statutoryRule:
      "Section 25(5) PSS Act applies all provisions of the Negotiable Instruments Act, 1881 (sections 138-142), enabling criminal prosecution for dishonoured NACH mandates.",
  },
  {
    id: "lok-adalat-absence",
    tabLabel: "Failure of Appearance at Lok Adalat",
    title: "Borrower Fails to Attend Pre-Litigation Lok Adalat Following DLSA Notice",
    cause:
      "Bank lists 200 small-ticket personal loan accounts before the National Lok Adalat. While 55% settle, 45% of borrowers ignore the court notice and fail to attend the session.",
    legalBasis:
      "Section 20 of Legal Services Authorities Act, 1987 (Failure of Pre-Litigation Conciliation) and Immediate Civil Recovery Suit / Section 25 Filing.",
    steps: [
      {
        step: "DLSA Failure Certificate Issuance",
        description:
          "Obtain an official 'Non-Settlement / Non-Appearance Certificate' from the DLSA Secretary, formally recording that the borrower evaded judicial pre-litigation conciliation.",
      },
      {
        step: "Immediate Section 25 PSS Criminal Complaint",
        description:
          "Present the DLSA non-appearance certificate alongside Section 25 return memo to the Judicial Magistrate First Class (JMFC). Magistrates view pre-litigation evasion severely and issue swift bailable summons.",
      },
      {
        step: "Execution of Section 25 Process & Compelled Settlement",
        description:
          "Faced with police-served court summons, over 70% of defaulting borrowers immediately pay principal plus interest to compound the offence before the court.",
      },
    ],
    statutoryRule:
      "Under Supreme Court directives in Damodar S. Prabhu v. Sayed Babalal H., compounding of dishonour offences at trial attracts graded costs, motivating early settlement.",
  },
];

export default function SmallTicketRecoveryTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Small-Ticket Default Scenario Matrix
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Actionable legal response for micro &amp; retail unsecured defaults between ₹15,000 and ₹1,50,000.
          </p>
        </div>
        <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
          Pre-Litigation Playbook
        </span>
      </div>

      {/* Tabs selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 border-b border-slate-100 scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
          <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded">
            Scenario Profile
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2 mb-2">
            {activeScenario.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {activeScenario.cause}
          </p>
          <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-medium text-slate-600">
            <strong className="text-slate-800">Governing Legal Basis:</strong> {activeScenario.legalBasis}
          </div>
        </div>

        <div>
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
            Enforcement Steps &amp; Resolution Pathway
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">{st.step}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50/60 border border-red-200 rounded-xl p-3.5 sm:p-4 text-xs text-slate-700 leading-relaxed">
          <strong className="text-red-900 font-bold block mb-1">Statutory Enforcement Rule:</strong>
          {activeScenario.statutoryRule}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
          <span>Need bulk deployment for your NPA portfolio?</span>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            Explore Bulk Recovery Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
}
