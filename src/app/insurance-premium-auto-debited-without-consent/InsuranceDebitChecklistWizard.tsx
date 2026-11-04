"use client";

import React, { useState } from "react";
import InsuranceDebitNoticeCTA from "./InsuranceDebitNoticeCTA";

interface ChecklistItem {
  id: string;
  title: string;
  statute: string;
  detail: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "chk-bank-statement",
    title: "Bank Statement Showing Debit Narration, Date & Insurer Code",
    statute: "Section 63, Bharatiya Sakshya Adhiniyam, 2023 & Section 34, Indian Evidence Act",
    detail:
      "Download your stamped bank statement showing the exact deduction narration (e.g., 'INSU-DEBIT', 'PMJJBY-RENEWAL', 'HDFC-LIFE-PRM', 'SBILIFE-AUTODEBIT') along with transaction reference, value date, and debited amount.",
  },
  {
    id: "chk-proposal-form",
    title: "Demand Certified Copy of Signed Proposal Form & Customer Mandate",
    statute: "Regulation 8 & 9, IRDAI (Protection of Policyholders' Interests) Regulations, 2024",
    detail:
      "Submit an immediate email demanding the physical proposal form bearing your ink signature or the electronic e-sign/OTP verification log with audit trail. If the bank or insurer cannot produce affirmative consent, the contract is void ab initio.",
  },
  {
    id: "chk-loan-sanction",
    title: "Audit Loan Sanction Letter for Illegal Insurance Bundling",
    statute: "RBI Charter of Customer Rights (Right to Suitability) & Section 2(47) CPA 2019",
    detail:
      "Check your loan agreement or sanction memorandum. Banks are strictly prohibited by the RBI from conditioning loan approval or disbursement on purchasing insurance from their tie-up corporate partner.",
  },
  {
    id: "chk-freelook-notice",
    title: "Dated Free-Look Cancellation Request (30 Days from Policy Receipt)",
    statute: "IRDAI Master Circular on Policyholders' Protection (May 2024) — Clause 5",
    detail:
      "Send a written cancellation notice by email to the insurer's Grievance Redressal Officer (GRO) invoking the statutory 30-day free-look provision. Even if 30 days have lapsed, establish that failure to deliver the physical policy document extends the free-look period indefinitely.",
  },
  {
    id: "chk-branch-complaint",
    title: "Lodge Written Protest with Branch Manager & Obtain Stamped Acknowledgment",
    statute: "RBI Master Direction on Customer Service in Banks (DBR.No.Leg.BC.21/09.07.006/2015-16)",
    detail:
      "Hand over a written dispute letter to the home branch manager. Demand a physical receiving stamp or reference ticket number. Under RBI guidelines, banks must acknowledge consumer grievances within 24 hours.",
  },
  {
    id: "chk-stop-mandate",
    title: "Cancel Active NACH / e-Mandate to Prevent Future Deductions",
    statute: "NPCI Circular on Customer Revocation of NACH Mandates & Section 25, PSS Act 2007",
    detail:
      "Submit a written cancellation request via Net Banking or branch to revoke the NACH/ECS mandate immediately. Banks cannot charge a penalty for stopping an unauthorized recurring debit.",
  },
];

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  rootCause: string;
  legalBasis: string;
  refundRule: string;
  remedySteps: string[];
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: "loan-bundled",
    badge: "Most Prevalent in 2026",
    title: "Forced Insurance Bundled with Home / Personal / Car Loan",
    rootCause:
      "Bank branch executives or relationship managers add ₹25,000 to ₹1,50,000 as a single-premium term or health policy to your sanctioned loan without informing you, deducting it directly from the disbursed loan amount.",
    legalBasis:
      "RBI Charter of Customer Rights (Right to Suitability) & IRDAI Corporate Agents Regulations, 2015. Tying third-party insurance to credit facilities is an explicit unfair trade practice under Section 2(47) Consumer Protection Act, 2019.",
    refundRule:
      "Entitled to 100% refund of debited premium credited back to the loan principal, along with re-amortization of the EMI and reversal of accrued interest charged on the bundled amount.",
    remedySteps: [
      "Compare sanctioned loan amount versus actual disbursed net proceeds to identify the exact deducted premium.",
      "Send an email to the Bank Nodal Officer and Insurer within 30 days stating the insurance was forced as a pre-condition.",
      "Demand immediate cancellation and reversal of the premium with recalculation of loan amortisation schedule.",
      "Serve an Advocate Legal Notice if the branch refuses refund claiming 'mandatory bank policy'.",
    ],
  },
  {
    id: "pmjjby-pmsby",
    badge: "Auto-Deductions on Savings Accounts",
    title: "PMJJBY (₹436) or PMSBY (₹20) Debited Without Enrollment Form",
    rootCause:
      "Public sector and private banks mechanically enroll account holders into Pradhan Mantri Jeevan Jyoti Bima Yojana (₹436/yr) or PM Suraksha Bima Yojana (₹20/yr) to meet annual administrative targets without consent.",
    legalBasis:
      "Department of Financial Services (DFS) Operational Guidelines for Social Security Schemes & RBI Master Circular on Customer Service. No account may be debited without an executed enrollment consent form.",
    refundRule:
      "Immediate full reversal of the unauthorized premium plus de-registration from the national insurance portal to prevent recurring May/June renewals.",
    remedySteps: [
      "Check passbook/SMS for narration 'PMJJBY' or 'PMSBY' with deduction between May 25 and June 15.",
      "Submit a written declaration to the branch manager stating no consent form or Aadhaar e-mandate was ever executed.",
      "Demand refund and request an official confirmation that the auto-renewal mandate has been purged from your CIF/account.",
      "If not credited within 7 working days, escalate to the RBI Banking Ombudsman under Section 10(2) of RB-IOS 2021.",
    ],
  },
  {
    id: "fd-swapped-ulip",
    badge: "Senior Citizen & Saver Mis-selling",
    title: "Fixed Deposit Swapped into ULIP or Multi-Year Traditional Plan",
    rootCause:
      "Customer visits branch to renew or deposit funds into an FD, but relationship manager convinces them it is a 'Guaranteed High-Return Bank Deposit' while issuing a multi-year recurring insurance policy.",
    legalBasis:
      "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 & Section 2(11) CPA 2019 (Deficiency in Service). Misleading representation of insurance as fixed deposits constitutes gross fraud.",
    refundRule:
      "Complete 100% refund without surrender charges or mortality deductions, plus interest from the date of wrongful debit.",
    remedySteps: [
      "Obtain the welcome kit and check the policy schedule; verify whether annual recurring premiums are mandated.",
      "Collect initial branch deposit counterfoils, cheque counterfoils, or branch CCTV logs confirming the FD intention.",
      "File a formal mis-selling complaint on the IRDAI Bima Bharosa portal (bimabharosa.irdai.gov.in).",
      "Serve a formal Legal Notice to the Bank Chairman and Life Insurer demanding full restitution.",
    ],
  },
  {
    id: "unauthorised-nach",
    badge: "Unknown Third-Party Debits",
    title: "Unauthorised Recurring NACH / e-NACH Debit for General Insurance",
    rootCause:
      "Cyber insurance, health top-up, or personal accident premium deducted on an unauthorized standing instruction or third-party corporate agent tie-up without two-factor authentication or explicit approval.",
    legalBasis:
      "Section 25 of Payment and Settlement Systems Act, 2007 & RBI Circular on e-Mandate Framework for Recurring Transactions (RBI/2019-20/47).",
    refundRule:
      "Full refund under RBI Zero Liability / Limited Liability guidelines within 10 working days of notification.",
    remedySteps: [
      "Instruct your bank to immediately block the specific Unique Mandate Reference Number (UMRN).",
      "Report the transaction as unauthorized within 3 working days to retain absolute zero customer liability.",
      "Demand the Mandate Verification Document or NPCI authorization log from the operations desk.",
      "Lodge a complaint on the RBI CMS portal if the bank blames the payment aggregator or third-party insurer.",
    ],
  },
];

export default function InsuranceDebitChecklistWizard() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeScenario, setActiveScenario] = useState<string>("loan-bundled");

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalCount = CHECKLIST_ITEMS.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const selectedScenario =
    SCENARIO_TABS.find((s) => s.id === activeScenario) || SCENARIO_TABS[0];

  return (
    <div className="space-y-8">
      {/* Interactive Evidence Audit Checklist */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Pre-Flight Evidence Audit
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Evidence Readiness Checklist: Bank &amp; Insurer Refund Claim
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select every document you have secured to establish lack of consent and contractual invalidity.
            </p>
          </div>

          {/* Interactive Progress Meter */}
          <div className="sm:text-right shrink-0 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Audit Readiness
            </div>
            <div className="flex items-center gap-2 sm:justify-end">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {progressPercent}%
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                ({completedCount}/{totalCount})
              </span>
            </div>
            <div className="w-36 h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Checklist Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? "bg-red-50/50 border-red-300 shadow-sm"
                    : "bg-slate-50/60 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // Handled by container click
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer"
                    aria-label={item.title}
                  />
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-red-700">
                      {item.statute}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Advice Box Based on Completion */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            {completedCount === totalCount ? (
              <span className="font-bold text-emerald-700">
                ✓ Full evidence gathered! You possess sufficient documentary proof to file an unassailable demand notice.
              </span>
            ) : completedCount >= 3 ? (
              <span className="font-bold text-amber-700">
                ▲ Good progress. Securing the proposal form or loan sanction copy will seal the bank&apos;s liability.
              </span>
            ) : (
              <span className="font-semibold text-slate-600">
                Tip: Even if you only have the bank statement debit entry, our advocates can draft the formal statutory notice compelling disclosure of the proposal form.
              </span>
            )}
          </p>
          <InsuranceDebitNoticeCTA
            buttonText="Draft Formal Demand Notice"
            source="checklist_wizard"
            className="shrink-0"
          />
        </div>
      </div>

      {/* Scenario Diagnostic Navigator */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm">
        <div className="pb-5 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-2">
            Dispute Taxonomy
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Select Your Unauthorised Insurance Debit Dispute Type
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Different bancassurance debit categories carry specific statutory rules, forum limits, and refund requirements.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-5 pb-6">
          {SCENARIO_TABS.map((tab) => {
            const isSelected = activeScenario === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveScenario(tab.id)}
                className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/30"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`block text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
                    isSelected ? "text-red-400" : "text-slate-500"
                  }`}
                >
                  {tab.badge}
                </span>
                <span className="block text-xs font-bold line-clamp-2">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Content Panel */}
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              {selectedScenario.title}
            </h4>
            <span className="inline-block text-xs font-bold text-red-700 bg-red-100/80 px-2.5 py-1 rounded-md">
              {selectedScenario.legalBasis.split("&")[0]}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                How It Happens (Root Cause)
              </span>
              <p className="text-slate-700 leading-relaxed">
                {selectedScenario.rootCause}
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Statutory Refund &amp; Interest Standard
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {selectedScenario.refundRule}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Statutory Action Steps to Force Reversal:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {selectedScenario.remedySteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
