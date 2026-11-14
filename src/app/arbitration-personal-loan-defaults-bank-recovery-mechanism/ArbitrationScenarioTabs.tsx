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
    id: "unresponsive-borrower",
    tabLabel: "Unresponsive Borrower",
    title: "Borrower Evades Service or Ignores Section 21 Arbitration Notice",
    cause:
      "In high-volume unsecured retail lending, defaulted borrowers frequently switch phone numbers, abandon rental residences, or deliberately refuse postal delivery of recovery reminders and Section 21 arbitration invocation notices to stall recovery.",
    legalBasis:
      "Under Section 3 of the Arbitration and Conciliation Act, 1996, any written communication is deemed to have been received if it is delivered to the addressee personally or at his place of business, habitual residence, or mailing address. Furthermore, under Section 25(b), if the respondent fails to communicate his statement of defence without showing sufficient cause, the arbitral tribunal is statutorily empowered to treat that failure as an forfeiture of defense and proceed ex-parte, passing an enforceable award on the basis of bank records and Section 63 BSA electronic evidence.",
    steps: [
      {
        step: "Multi-Channel Statutory Notice Delivery",
        description:
          "Serve Section 21 notice simultaneously via Registered Speed Post with tracking acknowledgment, verified email, and WhatsApp messaging with blue-tick or delivery receipts.",
      },
      {
        step: "Institutional Substituted Service Application",
        description:
          "If physical speed post returns with 'unclaimed', 'refused', or 'left without address', submit postal tracking endorsements alongside digital delivery logs to the arbitral institution for substituted service.",
      },
      {
        step: "Ex-Parte Hearing & Section 31 Arbitral Award",
        description:
          "Sole arbitrator issues a peremptory notice; upon continued non-appearance, the arbitrator records evidence via bank affidavit under Bankers' Books Evidence Act and delivers an enforceable arbitral award within 60 to 90 days.",
      },
    ],
    statutoryRule: "Sections 3, 21 & 25(b) Arbitration Act, 1996 & Section 63 BSA 2023",
  },
  {
    id: "perkins-appointment-challenge",
    tabLabel: "Arbitrator Challenge",
    title: "Borrower Challenges Sole Arbitrator Appointment Under Section 12(5)",
    cause:
      "Borrowers or defense advocates frequently challenge arbitrations initiated by banks citing Section 12(5) and the Supreme Court rulings in Perkins Eastman and TRF Ltd., asserting that the bank cannot unilaterally appoint its own empaneled advocate as sole arbitrator.",
    legalBasis:
      "The Supreme Court of India in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) and Bharat Broadband Network Ltd. (2019) held that an entity interested in the dispute outcome cannot unilaterally nominate a sole arbitrator. However, institutional arbitration administered by recognized, neutral arbitral bodies (with open, independent panels of retired judicial officers or accredited neutrals) is fully compliant, immune to unilateral appointment challenges, and upheld by High Courts across India.",
    steps: [
      {
        step: "Institutional Reference Protocol",
        description:
          "Draft retail personal loan agreements specifying institutional arbitration rules rather than naming internal bank officials as appointing authorities.",
      },
      {
        step: "Section 12(1) Independence Disclosure",
        description:
          "Ensure the appointed sole arbitrator files a formal disclosure under the Sixth Schedule of the Arbitration Act confirming independence, impartiality, and zero conflict of interest.",
      },
      {
        step: "Section 16 Jurisdictional Dismissal",
        description:
          "Arbitrator hears and dismisses frivolous Section 16 objections by demonstrating valid institutional nomination and independent empanelment.",
      },
    ],
    statutoryRule: "Sections 11(6), 12(5) & Seventh Schedule, Arbitration Act 1996",
  },
  {
    id: "fintech-digital-contracts",
    tabLabel: "Digital / Fintech Loans",
    title: "Digital Loan Agreement, Click-Wrap Consent & Stamp Duty Objections",
    cause:
      "Fintech lenders and digital personal loan platforms disburse credit via mobile apps using Aadhaar OTP, DigiLocker, or click-wrap loan sanctions. Borrowers dispute the validity of arbitration clauses, claiming lack of physical signatures or deficient state stamp duty.",
    legalBasis:
      "Section 10A of the Information Technology Act, 2000 grants full statutory enforceability to contracts formed electronically. Section 7(3) and 7(4)(b) of the Arbitration Act recognize arbitration agreements contained in electronic communications. Furthermore, the 7-Judge Supreme Court Constitution Bench in In Re: Interplay between Arbitration Agreements and the Stamp Act (2023) held that non-stamping or deficient stamping does not render the arbitration clause void, and stamp duty can be cured before the arbitrator.",
    steps: [
      {
        step: "Digital Audit Trail & Hash Verification",
        description:
          "Extract timestamped click-wrap logs, IP address, device fingerprint, and SMS/OTP verification tokens confirming borrower consent to loan covenants and arbitration.",
      },
      {
        step: "Certificate Under Section 63 BSA, 2023",
        description:
          "Produce electronic evidence accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing erstwhile Section 65B of Evidence Act).",
      },
      {
        step: "E-Stamping / State Duty Reconciliation",
        description:
          "Submit digital loan agreements with e-stamp duty certificates from NeSL or Stock Holding Corporation (SHCIL) to eliminate any interim admissibility hurdle.",
      },
    ],
    statutoryRule: "Section 10A IT Act 2000, Section 7 Arbitration Act & Section 63 BSA 2023",
  },
  {
    id: "award-execution-asset-tracing",
    tabLabel: "Post-Award Execution",
    title: "Enforcing the Arbitral Award as a Civil Court Decree Under Section 36",
    cause:
      "After the arbitral tribunal delivers a money award for the outstanding personal loan principal, interest, and costs, the borrower still refuses voluntary payment, necessitating direct judicial execution against bank accounts, salaries, or movable assets.",
    legalBasis:
      "Section 36(1) of the Arbitration and Conciliation Act mandates that once the 90-day challenge window under Section 34 expires (or where no stay is granted under Section 36(2)), the award is immediately enforceable in the same manner as a decree of a Civil Court under Order 21 of the Code of Civil Procedure, 1908.",
    steps: [
      {
        step: "Expiration of Section 34 Limitation Period",
        description:
          "Wait for 90 days from the date of certified award receipt by the borrower. Verify that no Section 34 petition has been served with an unconditional judicial stay.",
      },
      {
        step: "Filing Execution Petition Under CPC Order 21",
        description:
          "File Execution Petition in the Principal District Court where the borrower resides or where their employer or assets are located, attaching the original award.",
      },
      {
        step: "Order 21 Rule 41 & 48 Attachment Warrants",
        description:
          "Apply for disclosure of assets on affidavit under Order 21 Rule 41, attachment of employer salary under Order 21 Rule 48, and freezing of savings accounts via garnishee orders.",
      },
    ],
    statutoryRule: "Section 36 Arbitration Act 1996 & CPC 1908 Order 21 Rules 41, 46 & 48",
  },
];

export default function ArbitrationScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
          Operational Recovery Solutions
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          How Institutional Arbitration Handles Critical Personal Loan Default Scenarios
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select an operational challenge below to view statutory mechanisms, precedents, and step-by-step resolution paths for bank legal teams.
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
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-5 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            {currentScenario.title}
          </h4>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-200 self-start sm:self-auto">
            {currentScenario.statutoryRule}
          </span>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Operational Impasse
          </h5>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            {currentScenario.cause}
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Statutory Framework &amp; Judicial Protection
          </h5>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            {currentScenario.legalBasis}
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Standard Operating Recovery Procedure
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900">
                      {st.step}
                    </strong>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
