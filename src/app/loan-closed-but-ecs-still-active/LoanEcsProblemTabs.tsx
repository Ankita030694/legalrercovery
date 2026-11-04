"use client";

import React, { useState } from "react";

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
    id: "nbfc-failure",
    tabLabel: "Lender Ignored NOC",
    title: "Lender Issued Loan Closure Letter / NOC but Never Sent Cancellation to NPCI",
    cause:
      "A frequent failure occurs when NBFCs or private fintech lenders close the loan on their internal core lending software, issue a No Objection Certificate (NOC) or No Due Certificate (NDC) to the borrower, but negligently fail to transmit the mandate revocation instruction across the National Automated Clearing House (NACH) network. Consequently, NPCI's automated clearing rails continue executing monthly debits on the scheduled date.",
    legalBasis:
      "Under the RBI Master Direction on Digital Lending (2022) and the Payment and Settlement Systems Act, 2007 (Section 25), an autodebit presentation without underlying debt constitutes an unauthorised debit. Under Section 2(11) of the Consumer Protection Act, 2019, failure of the lender to decommission collection mandates post-closure is per se deficiency of service, exposing the lender to civil restitution and punitive damages.",
    steps: [
      {
        step: "Retrieve UMRN & Loan Closure Reference",
        description:
          "Locate your Unique Mandate Reference Number (UMRN) from your bank passbook or netbanking portal, alongside your final NOC/NDC issued by the lender.",
      },
      {
        step: "Serve Formal Revocation to Destination Sponsor Bank",
        description:
          "Submit a written Stop Mandate / Mandate Revocation form directly to your destination bank quoting RBI Circular DPSS.CO.CHD.No./2019-20, which obligates your bank to stop debits immediately upon customer request.",
      },
      {
        step: "Issue Advocate Statutory Notice for Immediate Refund",
        description:
          "Serve a 7-day advocate legal notice demanding immediate refund of debited amounts with 18% penal interest and expungement of any adverse CIBIL remarks.",
      },
    ],
    statutoryRule: "RBI Master Direction on Customer Service & CPA 2019 Section 2(11)",
  },
  {
    id: "bank-stop-refusal",
    tabLabel: "Bank Refuses to Stop",
    title: "Borrower's Bank Claims 'Only the Lender Can Cancel the NACH / ECS Mandate'",
    cause:
      "When borrowers visit their home bank branch requesting to stop or cancel the ECS/NACH mandate, branch officials routinely give an unlawful brush-off: 'We cannot stop NACH from our end; you must bring a cancellation certificate from the loan company.' This false barrier leaves consumers helpless as debits continue.",
    legalBasis:
      "The Reserve Bank of India has expressly clarified in multiple notifications—specifically RBI Circular on Customer Protection in NACH/ECS operations and Ombudsman Scheme Compendiums—that bank account holders possess an absolute statutory right to revoke or withdraw any ECS / NACH mandate directly through their destination bank without requiring lender concurrence. A bank's refusal to accept a mandate revocation request violates RBI directions and attracts compensatory fines.",
    steps: [
      {
        step: "Submit Written Notice of Revocation Under Bank Receipt",
        description:
          "Tender a physical letter or netbanking ticket explicitly stating: 'I hereby exercise my right under RBI guidelines to revoke NACH Mandate UMRN [XXXX] with immediate effect.' Obtain an acknowledgment seal.",
      },
      {
        step: "Cite RBI Circular DPSS.CO.CHD.No./2019-20",
        description:
          "Provide the branch manager with the RBI circular reference holding destination banks strictly liable for unauthorised debits processed after customer stop instructions.",
      },
      {
        step: "Escalate to Banking Ombudsman Within 30 Days",
        description:
          "If the bank debits funds despite your stop request, lodge an immediate complaint on the RBI CMS portal (cms.rbi.org.in) claiming the debited amount plus ₹100/day penalty.",
      },
    ],
    statutoryRule: "RBI Directive on Customer-Initiated Mandate Cancellation & RBI CMS Rail",
  },
  {
    id: "bounce-charges",
    tabLabel: "Bounce Charges Levied",
    title: "Mandate Bounced on Empty Account Post-Closure: Bank Levying ₹500+ Bounce Penalties",
    cause:
      "Often, a borrower clears the loan and stops maintaining a balance in that specific account. Because the lender failed to terminate the ECS mandate, the autodebit runs, fails due to insufficient funds, and triggers repeated NACH return charges (₹295 to ₹590 per presentation) from both the lender and the customer's bank.",
    legalBasis:
      "Levying bounce charges on a debt that has legally ceased to exist is completely illegal. In consumer forum precedents, banks and NBFCs have been ordered to reverse every single bounce fee and pay heavy mental harassment awards for initiating debit requests after loan closure. Furthermore, lenders cannot report post-closure NACH failures to credit bureaus (CIBIL/Experian).",
    steps: [
      {
        step: "Collate Detailed Bank Statement & Passbook Extracts",
        description:
          "Mark every 'NACH Return Charges' and 'ECS Inward Return' line item debited to your account since the date of the NOC.",
      },
      {
        step: "Demand Immediate Ledger Reversal from Bank",
        description:
          "Serve a demand notice calling upon the bank to reverse all inward bounce fees since the underlying mandate had lapsed upon loan settlement.",
      },
      {
        step: "File for Consumer Court Restitution & Credit Score Restoration",
        description:
          "Approach the District Consumer Forum (e-Jagriti) for full refund of bounce fees, ₹50,000 compensation for credit score impairment, and ₹15,000 legal costs.",
      },
    ],
    statutoryRule: "Consumer Protection Act 2019 & Credit Information Companies (Regulation) Act 2005",
  },
  {
    id: "foreclosure-delay",
    tabLabel: "Foreclosure & Extra EMI",
    title: "Prepayment or Foreclosure Completed but Next Month EMI Still Siphoned Off",
    cause:
      "When a borrower forecloses or prepays their loan in full, lenders typically require 5 to 7 days for batch ledger reconciliation. If foreclosure is finalized between the 20th and 31st of the month, the lender's automated billing tape has already been uploaded to NPCI for 1st-to-5th clearing, causing an extra EMI deduction despite zero balance.",
    legalBasis:
      "Under banking jurisprudence, money collected after debt discharge constitutes 'money had and received' under Section 72 of the Indian Contract Act, 1872. The lender holds these excess funds as a constructive trustee and is under a strict legal obligation to refund the exact surplus within 48 to 72 hours, failing which commercial penal interest applies.",
    steps: [
      {
        step: "Verify Foreclosure Statement Date vs Debit Date",
        description:
          "Establish that the full prepayment / foreclosure receipt preceded the date the ECS batch cleared from your account.",
      },
      {
        step: "Serve Formal Demand for Refund Within 48 Hours",
        description:
          "Issue a high-priority email to the lender's Grievance Redressal Officer (GRO) demanding instant NEFT/RTGS reversal of the excess debited instalment.",
      },
      {
        step: "Invoke RBI Fair Practices Code for Lenders",
        description:
          "Warn the lender that withholding surplus borrower funds violates RBI's Fair Practices Code and will be escalated to the Department of Supervision (DoS).",
      },
    ],
    statutoryRule: "Section 72 Indian Contract Act 1872 & RBI Fair Practices Code for Lenders",
  },
];

export default function LoanEcsProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 md:p-9 shadow-xs">
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-100">
        {PROBLEMS.map((prob) => {
          const isActive = activeTab === prob.id;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveTab(prob.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-red-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Scenario Analysis &amp; Statutory Remedy
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Why This Happens
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              Statutory Basis &amp; Lender Liability
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
            <div className="mt-3 pt-3 border-t border-amber-200/60 text-[11px] font-mono font-semibold text-amber-900">
              Governing Authority: {currentProblem.statutoryRule}
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-white to-slate-50">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Action Plan for Immediate Revocation &amp; Refund
          </h4>
          <div className="space-y-4">
            {currentProblem.steps.map((st, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                    {st.step}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
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
