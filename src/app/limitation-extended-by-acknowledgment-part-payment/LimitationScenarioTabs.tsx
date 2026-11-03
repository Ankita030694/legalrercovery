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
    id: "whatsapp-acknowledgment",
    tabLabel: "WhatsApp / Email Chats",
    title: "Written Acknowledgment of Liability in WhatsApp Chats, SMS, or Emails",
    cause:
      "A friend, relative, or business debtor borrowed money 2 to 3 years ago and continually delayed payment. During this period, the borrower sent messages such as 'I will pay your balance next month', 'Give me 60 days', or 'I admit I owe you ₹2,50,000'. Many lenders mistakenly assume only an ink-signed physical contract counts. In reality, modern courts treat electronic messaging as written acknowledgment.",
    legalBasis:
      "Section 18 of the Limitation Act, 1963 dictates that where, before the expiration of the prescribed period for a suit, an acknowledgment of liability has been made in writing signed by the party, a fresh period of limitation begins from the date of the acknowledgment. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and Section 4 of the Information Technology Act, 2000, electronic communications and chat messages fulfill the statutory requirement of writing and signature.",
    steps: [
      {
        step: "Export Complete WhatsApp Chat History With Media",
        description:
          "Export the chat transcript without editing. Ensure the borrower's registered phone number, profile info, and message timestamps showing the admission of debt are clearly preserved.",
      },
      {
        step: "Map Acknowledgment Timestamp Against Loan Date",
        description:
          "Verify that the chat message admitting the debt occurred before the initial 3-year limitation window lapsed from the original loan date or agreed repayment date.",
      },
      {
        step: "Issue Advocate Demand Notice Citing Section 18",
        description:
          "Serve an advocate statutory notice referencing the specific chat admission and notifying the borrower that a fresh 3-year limitation clock has commenced under Section 18.",
      },
    ],
    statutoryRule: "Section 18 Limitation Act 1963 & Section 63 BSA 2023",
  },
  {
    id: "upi-part-payment",
    tabLabel: "Partial UPI / Bank Transfer",
    title: "Part-Payment of Principal or Interest via UPI, NEFT, or Cheque",
    cause:
      "The borrower owed ₹5,00,000 and had not repaid for 2.5 years. Suddenly, after repeated follow-ups, they transferred ₹5,000 or ₹10,000 via Google Pay, PhonePe, or bank transfer with a remark like 'loan part', or gave a small cash deposit slip. The borrower assumes paying a nominal token amount prevents legal action while running down the 3-year limitation clock.",
    legalBasis:
      "Section 19 of the Limitation Act, 1963 provides that where payment on account of a debt or of interest on a legacy is made before the expiration of the prescribed period by the person liable to pay, a fresh period of limitation of 3 years shall be computed from the time when the payment was made. An electronic bank credit statement constitutes incontrovertible written evidence of payment under the debtor's hand.",
    steps: [
      {
        step: "Secure Certified Bank Statement / UTR Record",
        description:
          "Download a certified bank statement highlighting the inward transfer, debtor account details, and transaction reference (UTR / UPI transaction ID).",
      },
      {
        step: "Calculate the Reset Date (New 3-Year Window)",
        description:
          "Count 3 full years starting from the exact calendar date of the partial bank credit. The entire remaining principal balance remains legally enforceable throughout this renewed window.",
      },
      {
        step: "Demand Outstanding Principal + Contractual Interest",
        description:
          "Dispatch a statutory notice crediting the partial amount to accrued interest/principal and demanding the balance under threat of an Order XXXVII CPC Summary Suit.",
      },
    ],
    statutoryRule: "Section 19 Limitation Act 1963 & RBI UTR Evidence",
  },
  {
    id: "promissory-note",
    tabLabel: "Promissory Note / Balance Slip",
    title: "Signed Promissory Note or Ledger Balance Confirmation",
    cause:
      "The loan was extended against a demand promissory note or the debtor signed an annual balance confirmation slip. When the debtor defaults, disputes often arise regarding whether limitation runs from the date of execution or the date of demand, and whether a renewed promissory note extends the limitation.",
    legalBasis:
      "Under Article 21 of the Limitation Act, 1963, for money lent on a promissory note payable on demand, the limitation period is 3 years from the date of the note. However, if a subsequent promissory note or written balance confirmation is executed before the 3 years expire, it constitutes a binding Section 18 acknowledgment, renewing the entire 3-year recovery window. Such written instruments qualify for expedited recovery under Order XXXVII of the Code of Civil Procedure (CPC).",
    steps: [
      {
        step: "Inspect Stamp Duty & Execution Date",
        description:
          "Verify that the promissory note bears requisite revenue stamp duty under the Indian Stamp Act and contains unambiguous unconditional promise to pay.",
      },
      {
        step: "Check for Intermediate Balance Confirmations",
        description:
          "Gather any signed ledger extracts, audit balance confirmation letters, or follow-up undertakings executed by the debtor.",
      },
      {
        step: "File Order XXXVII CPC Summary Suit",
        description:
          "Because a promissory note is a negotiable instrument, file a summary suit where the debtor cannot defend without first seeking leave of the court.",
      },
    ],
    statutoryRule: "Article 21 Limitation Act & Order XXXVII Rule 1 CPC",
  },
  {
    id: "debt-revival-25-3",
    tabLabel: "Debt Older Than 3 Years",
    title: "Revival of an Already Time-Barred Debt Under Section 25(3) Contract Act",
    cause:
      "More than 3 full years have elapsed since the loan was given without any acknowledgment or payment. The debtor then sends a WhatsApp message or signs an undertaking stating: 'I know 4 years have passed, but I promise to clear your ₹4,00,000 by Diwali.' The creditor assumes the money is permanently lost because Section 18 only applies before limitation expires.",
    legalBasis:
      "While Section 18 of the Limitation Act requires acknowledgment to occur BEFORE the 3-year limitation period expires, Section 25(3) of the Indian Contract Act, 1872 creates a powerful statutory exception. An agreement made in writing and signed by the debtor promising to pay wholly or in part a debt of which the creditor might have enforced payment but for the law for the limitation of suits is a VALID and ENFORCEABLE CONTRACT. A fresh 3-year limitation clock begins from this new promise.",
    steps: [
      {
        step: "Identify an Express Promise to Pay",
        description:
          "Ensure the debtor's communication contains an express promise to pay the time-barred sum, rather than a mere vague acknowledgment of past transactions.",
      },
      {
        step: "Preserve Digital Writing & Signature Equivalent",
        description:
          "Archive the email, WhatsApp text, or signed compromise settlement letter under Section 63 BSA 2023 certificate.",
      },
      {
        step: "Issue Legal Notice Enforcing Section 25(3) Contract",
        description:
          "Serve a formal advocate demand notice establishing a fresh cause of action under Section 25(3) of the Indian Contract Act.",
      },
    ],
    statutoryRule: "Section 25(3) Indian Contract Act 1872 (AIR 1961 SC 1236)",
  },
];

export default function LimitationScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-100" role="tablist">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${scenario.id}`}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        id={`tabpanel-${currentScenario.id}`}
        role="tabpanel"
        className="space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#DC2626] rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>Statutory Section</span>
            <span>•</span>
            <span>{currentScenario.statutoryRule}</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
            {currentScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">
              The Real-World Dilemma
            </h4>
            <p className="text-slate-700 leading-relaxed">{currentScenario.cause}</p>
          </div>

          <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl space-y-1.5">
            <h4 className="font-extrabold text-[#DC2626] uppercase tracking-wider text-[11px]">
              The Statutory Mechanism &amp; Court Interpretation
            </h4>
            <p className="text-slate-800 leading-relaxed">{currentScenario.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
            Recommended Action Steps to Enforce This Extension:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-xs text-slate-900">{st.step}</h5>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-500">
            Need an advocate demand notice invoking {currentScenario.statutoryRule}?
          </span>
          <Link
            href="/legal-notice-to-recovery-my-loan-from-friend"
            className="text-red-700 hover:text-red-800 font-bold underline inline-flex items-center gap-1"
          >
            Explore Personal Loan Recovery Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
