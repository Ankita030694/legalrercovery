"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "notice-recovery",
    tabLabel: "Notice Period Buyout",
    title: "Arbitrary Notice Shortfall Deducted on Full CTC or Gross Salary",
    cause:
      "When an employee resigns and requests an early release with unserved notice days, payroll software (such as Keka, Darwinbox, or SAP) often calculates notice shortfall deduction using Gross CTC instead of Basic Salary. An employee earning ₹1,20,000 monthly CTC with a Basic of ₹48,000 gets debited ₹80,000 for 20 short days rather than the lawful Basic equivalent of ₹32,000, wiping out their entire monthly earnings or final settlement.",
    legalBasis:
      "Under established High Court jurisprudence (including Delhi High Court in Sanjay Jain v. National Aviation Co. and Bombay High Court rulings), notice pay recovery is intended purely to compensate the employer for basic wages payable during the unserved notice period. An employer cannot recover allowances (HRA, conveyance, special allowance, medical) or employer PF contributions which were neither earned nor disbursed. Deducting notice on Gross CTC constitutes an illegal wage penalty prohibited under Section 18 of the Code on Wages, 2019.",
    steps: [
      {
        step: "Audit Payslip Formula & Demand CTC vs Basic Breakdown",
        description:
          "Calculate your unserved notice days against your monthly Basic pay [Basic / 30 × unserved days]. If the payroll deduction exceeds this figure, email HR demanding the mathematical formula used.",
      },
      {
        step: "Issue Formal Section 18 Wage Protest Email",
        description:
          "Submit a written protest citing Section 18(1) Code on Wages, 2019, stating that deducting perks and non-incurred allowances is an illegal clawback and demanding immediate recalculation.",
      },
      {
        step: "Serve Advocate Statutory Legal Notice & Samadhan Docket",
        description:
          "If HR refuses to refund the excess recovery within 7 days, engage a verified labour advocate to serve a statutory 15-day demand notice followed by a claim before the Labour Commissioner.",
      },
    ],
    statutoryRule: "Section 18(1) Code on Wages 2019 & Section 74 Indian Contract Act",
  },
  {
    id: "training-bond",
    tabLabel: "Training Bond & Bonus",
    title: "Unilateral Salary Recovery for Training Bond or Joining Bonus Clawback",
    cause:
      "Companies frequently slip 1-year to 3-year employment bonds or joining/retention bonus clawback clauses into offer letters. When an employee exits before the bond term, payroll automatically deducts ₹1,00,000 to ₹3,00,000 under 'Bond Recovery' or 'Bonus Recovery' from their monthly payslip or Full & Final (FnF) statement without establishing any actual financial expenditure.",
    legalBasis:
      "Under Section 74 of the Indian Contract Act, 1872, liquidated damages clauses are unenforceable as penalties unless the employer proves actual out-of-pocket loss. In landmark judgments such as Sicpa India Ltd. v. Manas Pratim Deb and Toshniwal Brothers, courts held that routine internal onboarding or on-the-job training does not create a recoverable debt. An employer cannot forfeit wages without proving specialized third-party training invoices.",
    steps: [
      {
        step: "Demand Invoices & Proof of Specialized Training Expenditure",
        description:
          "Respond in writing demanding certified copies of third-party tuition fees, external certification receipts, or vendor invoices exclusively incurred on your training.",
      },
      {
        step: "Highlight Section 27 Restraint of Trade & Penalty Prohibition",
        description:
          "Place on record that unreasonable post-employment financial fetters violate Section 27 of the Indian Contract Act and Section 18 of the Code on Wages.",
      },
      {
        step: "Issue Statutory Demand Notice for Wage Restitution",
        description:
          "Instruct a labour advocate to dispatch a legal demand notice to the company's directors demanding immediate release of the deducted bond sum with 18% penal interest.",
      },
    ],
    statutoryRule: "Section 74 Indian Contract Act 1872 & Section 18(2) Code on Wages",
  },
  {
    id: "asset-damage",
    tabLabel: "Asset Damage / Laptop",
    title: "Arbitrary Deductions for Laptop Wear, Missing Accessories, or Losses",
    cause:
      "Employers often levy arbitrary deductions of ₹15,000 to ₹75,000 on payslips under 'Asset Recovery' or 'Damage Deduction' alleging scratches on company laptops, delayed courier handover of equipment, or unreturned chargers, frequently without inspecting the asset in the employee's presence.",
    legalBasis:
      "Under Section 18(2)(c) and Section 19 of the Code on Wages, 2019 (and Section 10 of the Payment of Wages Act, 1936), an employer cannot deduct a single rupee for damage or loss without giving the employee a written show-cause notice and a reasonable opportunity to explain. Furthermore, deductions can never exceed the actual depreciated market value of the item, nor can they be made for ordinary operational wear and tear.",
    steps: [
      {
        step: "Secure Courier Tracking / Asset Handover Receipt",
        description:
          "Retrieve IT asset acknowledgment slips, courier delivery tracking with POD (Proof of Delivery), or email confirmations from the IT helpdesk acknowledging receipt.",
      },
      {
        step: "Challenge Procedural Illegality of Unilateral Recovery",
        description:
          "Point out in writing that no domestic show-cause notice was served under Section 19 of the Code on Wages, rendering the deduction legally null and void.",
      },
      {
        step: "Serve Advocate Legal Notice for Misappropriation of Wages",
        description:
          "Serve a formal statutory notice putting the employer on notice that withholding wages for regular asset wear constitutes unlawful wage withholding under labour enactments.",
      },
    ],
    statutoryRule: "Section 18(2)(c) & Section 19 Code on Wages 2019",
  },
  {
    id: "negative-balance",
    tabLabel: "Negative Pay / Target Reversal",
    title: "Negative Net Pay, Disputed Leave Recovery & Target Clawbacks",
    cause:
      "In sales, consulting, and customer support roles, payrolls sometimes claw back previously credited commissions or quarterly incentives due to customer cancellations, or recalculate earned leave balances retroactively. This leaves the employee with zero or negative net pay on their payslip, with HR demanding that the employee deposit money back into the company's bank account.",
    legalBasis:
      "Section 18(3) of the Code on Wages, 2019 strictly mandates that total aggregate deductions in any wage period cannot exceed 50% of the employee's total wages. Generating a payslip with zero or negative net pay is a prima facie violation of statutory wage ceilings. Retrospective clawbacks of earned incentive without an express contractual right and prior notice violate wage protections.",
    steps: [
      {
        step: "Invoke 50% Statutory Ceiling on Wage Deductions",
        description:
          "Immediately write to payroll and the CFO citing Section 18(3) of the Code on Wages, 2019, highlighting that monthly deductions exceeding 50% of total wages are unlawful.",
      },
      {
        step: "Demand Incentive Policy & Commission Audit Sheets",
        description:
          "Demand signed documentation showing where the clawback policy was mutually agreed upon and proof of customer defaults attributed to your willful misconduct.",
      },
      {
        step: "Escalate via Statutory Notice to Labour Officer",
        description:
          "Lodge an urgent complaint before the jurisdictional Conciliation Officer / Labour Commissioner under the Industrial Relations Code and serve an advocate notice.",
      },
    ],
    statutoryRule: "Section 18(3) Code on Wages 2019 (50% Deduction Cap)",
  },
];

export default function SalaryRecoveryProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const current = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
        {PROBLEMS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="space-y-5 animate-fadeIn">
        <div>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
            Statutory Benchmark: {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide text-red-600">
              Why Payroll Levies This Recovery:
            </strong>
            <p className="text-slate-700 leading-relaxed">{current.cause}</p>
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1.5">
            <strong className="text-emerald-950 font-bold block text-xs uppercase tracking-wide text-emerald-800">
              The Governing Legal Reality:
            </strong>
            <p className="text-emerald-900 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        {/* 3 Action Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Immediate 3-Step Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {st.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pt-1">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 text-xs text-slate-600">
          <span>Facing delayed dues after exit? Check our guide on <Link href="/law/code-on-wages-fnf-two-working-days" className="text-blue-700 underline font-semibold">2-day statutory settlement</Link>.</span>
          <span className="text-slate-400">Section 18 Code on Wages 2019 Enforcement</span>
        </div>
      </div>
    </div>
  );
}
