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
    id: "blank-signed-cheque",
    tabLabel: "Blank Signed Cheque",
    title: "Accused Claims Cheque Was Signed Blank as Security",
    cause:
      "A standard defense routinely raised in cheque bounce litigation is that the drawer handed over a signed blank cheque to a vendor, landlord, or lender as mere 'security' without authorizing the filled amount or date. Drawers historically attempted to delay trials by demanding forensic handwriting expert verification for different inks.",
    legalBasis:
      "In Sanjabij Tari v. Kishore S. Borcar (2025) and Bir Singh v. Mukesh Kumar (2019), the Supreme Court held that once the signature on the cheque is admitted by the accused, statutory presumptions under Sections 118 and 139 of the NI Act arise mandatorily. Even if a blank cheque is voluntarily signed and handed over towards a liability, the holder has implied authority under Section 20 of the NI Act to fill in the particulars. Mere assertion of a 'blank security cheque' without tangible evidence fails to displace the presumption.",
    steps: [
      {
        step: "Demonstrate Underlying Transaction",
        description:
          "Produce invoices, ledger account statements, promissory notes, delivery challans, or WhatsApp acknowledgement confirming the existing legally enforceable debt.",
      },
      {
        step: "Invoke Section 20 Inchoate Instruments",
        description:
          "Argue that delivering a signed blank negotiable instrument confers prima facie authority upon the holder to complete the amount and date.",
      },
      {
        step: "Check Security Cheque Misuse Guide",
        description:
          "Review our detailed analysis on how courts treat post-dated guarantees in our dedicated security cheque misuse analysis.",
      },
    ],
    statutoryRule: "Sections 20, 118 & 139 NI Act + Sanjabij Tari (2025)",
  },
  {
    id: "cash-loan-tax-limit",
    tabLabel: "Cash Loan > ₹20,000",
    title: "Loan Exceeds ₹20,000 Cash Limit Under Section 269SS IT Act",
    cause:
      "Borrowers facing cheque bounce complaints frequently argue that because the underlying loan was advanced in cash exceeding ₹20,000—which contravenes Section 269SS of the Income Tax Act, 1961—the debt is an 'illegal contract' and not a 'legally enforceable debt' under Section 138 of the NI Act.",
    legalBasis:
      "In Sanjabij Tari v. Kishore S. Borcar (Supreme Court, 25 Sep 2025), the two-judge bench decisively rejected this defense. The Supreme Court established that contravention of Section 269SS of the Income Tax Act invites statutory tax penalties from the Revenue Department, but it does NOT invalidate the loan contract or render the debt unenforceable under Section 138 of the NI Act. The payee can maintain criminal prosecution regardless of tax proceedings.",
    steps: [
      {
        step: "Establish Source and Delivery of Funds",
        description:
          "Present bank withdrawal slips, contemporaneous receipts, or debtor acknowledgment showing cash was actually disbursed to the drawer.",
      },
      {
        step: "Distinguish Tax Penalties from Enforceable Debt",
        description:
          "Cite Sanjabij Tari (2025) para holding that Section 269SS IT Act penalties operate independently and do not vitiate Section 138 NI Act liability.",
      },
      {
        step: "File Section 145 Complainant Affidavit",
        description:
          "Submit evidence on affidavit detailing the friendly loan, date of disbursement, and subsequent cheque issuance.",
      },
    ],
    statutoryRule: "Section 138 NI Act read with Section 269SS Income Tax Act 1961",
  },
  {
    id: "electronic-summons",
    tabLabel: "E-Summons & Evasion",
    title: "Accused Evades Postal Summons & Changes Address",
    cause:
      "For decades, cheque bounce trials dragged on for 3 to 7 years primarily because accused persons intentionally refused Registered Post envelopes, altered door numbers, or colluded with local process servers, stalling trial commencement before plea recording.",
    legalBasis:
      "Under the Supreme Court's 2025 guidelines and Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA) / Section 64 Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), trial courts are now mandated to issue electronic summons alongside speed post. Summons served via verified email addresses, registered mobile numbers, or WhatsApp with 'blue tick' / server transmission logs constitute valid statutory service.",
    steps: [
      {
        step: "Furnish Digital Contact Details in Complaint",
        description:
          "Include drawer's active email ID, verified mobile/WhatsApp number, and permanent address directly in the Section 138 complaint memo.",
      },
      {
        step: "Request Dasti Service via Electronic Means",
        description:
          "File an application under Section 64 BNSS / Section 144 NI Act for electronic service of court process via court-monitored email or WhatsApp.",
      },
      {
        step: "Submit Electronic Certificate Under Section 63 BSA",
        description:
          "Provide system transmission logs, email delivery receipts, and WhatsApp delivery confirmation supported by a Section 63 BSA affidavit.",
      },
    ],
    statutoryRule: "Section 144 NI Act + Section 64 BNSS + Section 63 BSA 2023",
  },
  {
    id: "compounding-penalty",
    tabLabel: "Compounding Costs Scale",
    title: "Settling at Later Stages Triggers Steep Graded Penalty Costs",
    cause:
      "Accused persons frequently attempted to exhaust the complainant by litigating through the Magistrate, Sessions Court, and High Court, only to offer payment of the cheque face value years later at the appellate stage to escape conviction.",
    legalBasis:
      "The Supreme Court updated the Damodar S. Prabhu (2010) framework in the 2025 guidelines. Under Section 147 of the NI Act, early compounding at the notice or first-appearance stage incurs 0% penalty costs. If compounding is sought after charge/notice framing before the Magistrate, courts impose 10% penalty; before Sessions Court, 15%; and before High Court or Supreme Court, 20% of the cheque amount payable to the Legal Services Authority.",
    steps: [
      {
        step: "Encourage Pre-Summons Early Settlement",
        description:
          "Drawers who pay within the 15-day statutory notice window escape all criminal prosecution and court penalty costs entirely.",
      },
      {
        step: "Invoke Section 147 at First Appearance",
        description:
          "If summons are issued, compounding at the first hearing allows settlement without paying heavy graded court surcharges.",
      },
      {
        step: "Complainant Leverage for Full Settlement",
        description:
          "Payees can leverage progressive compounding costs to negotiate full principal recovery plus commercial interest and advocate legal expenses.",
      },
    ],
    statutoryRule: "Section 147 NI Act + Damodar S. Prabhu (2010) & 2025 Guidelines",
  },
  {
    id: "stop-payment-account-closed",
    tabLabel: "Stop Payment / Closed Account",
    title: "Cheque Dishonoured Due to 'Payment Stopped by Drawer' or 'Account Closed'",
    cause:
      "Drawers often instruct their bank to stop payment or deliberately close their bank account before the cheque is presented, believing that Section 138 applies exclusively to 'insufficient funds' memos.",
    legalBasis:
      "The Supreme Court in Modi Cements Ltd. v. Kuchil Kumar Nandi and NEPC Micon Ltd. v. Magma Leasing held that Section 138 covers any cheque returned unpaid by the bank, including 'payment stopped by drawer', 'account closed', 'refer to drawer', and 'signature differs'. A stop payment instruction does not save the drawer unless they prove sufficient credit balance and legitimate reason for stopping payment.",
    steps: [
      {
        step: "Preserve Bank Dishonour Memo",
        description:
          "Under Section 146 of the NI Act, the bank's return memo is prima facie evidence of dishonour. Save the original memo with exact bank reason code.",
      },
      {
        step: "Dispatch 30-Day Statutory Notice Immediately",
        description:
          "Serve the Section 138 demand notice within 30 days of the dishonour memo date, regardless of whether the reason was 'Funds Insufficient' or 'Account Closed'.",
      },
      {
        step: "Calculate Filing Deadlines Accurately",
        description:
          "Use our cheque bounce deadline calculator to ensure you file the criminal complaint within 30 days after the 15-day cure window expires.",
      },
    ],
    statutoryRule: "Sections 138 & 146 NI Act + Modi Cements (SC Precedent)",
  },
];

export default function ChequeBounceScenariosTabs() {
  const [activeTabId, setActiveTabId] = useState(SCENARIOS[0].id);

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Navigation Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-100 scrollbar-none">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-100 text-red-800 mb-2">
            {activeScenario.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
            <strong className="text-slate-900 font-bold block">
              The Defense / Practical Bottleneck:
            </strong>
            <p className="leading-relaxed">{activeScenario.cause}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
            <strong className="text-slate-900 font-bold block">
              Supreme Court Legal Ruling &amp; Statutory Force:
            </strong>
            <p className="leading-relaxed">{activeScenario.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            Actionable Next Steps Under 2025 Rules:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-xs font-bold text-slate-900">{st.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-red-50 border border-red-200/70 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-red-900 font-medium">
            Need an advocate-drafted statutory notice for your dishonoured cheque?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-[#DC2626] font-bold hover:underline shrink-0"
          >
            View Transparent Legal Notice Fees →
          </Link>
        </div>
      </div>
    </div>
  );
}
