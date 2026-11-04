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
    id: "bank-no-reply",
    tabLabel: "Bank Not Responding (30-Day Rule)",
    title: "Bank Delays, Ignores Grievance, or Sends Infinite Auto-Replies Beyond 30 Days",
    cause:
      "A frequent hurdle in banking disputes is that branch staff and online customer care portals send endless automated token numbers ('We are investigating your query, please allow 7 business days') without providing any concrete resolution. Weeks turn into months while the customer's funds remain trapped.",
    legalBasis:
      "Under Clause 10(1)(a) of the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS), you do not need the bank's final refusal to approach the RBI Ombudsman. If exactly 30 calendar days have elapsed since you lodged your written or digital grievance with the regulated entity (bank, NBFC, or payment system participant) and no reply or an unsatisfactory reply has been received, your complaint becomes directly maintainable before the Ombudsman.",
    steps: [
      {
        step: "Establish Grievance Timestamp & Receipt",
        description:
          "Locate your original complaint email sent to the bank's Branch Manager, Grievance Redressal Officer (GRO), or web portal ticket. Ensure the ticket timestamp clearly shows 30+ completed calendar days.",
      },
      {
        step: "Serve Formal Demand Notice to Principal Nodal Officer",
        description:
          "Issue a formal advocate legal notice to the bank's Principal Nodal Officer (PNO) placing on record that statutory 30-day default has occurred under Clause 10(1) RB-IOS.",
      },
      {
        step: "Lodge Online Complaint on RBI CMS Portal",
        description:
          "Access cms.rbi.org.in, select 'Lodge a Complaint', upload your 30-day proof alongside the transaction trail, and claim full refund plus compensation for mental harassment.",
      },
    ],
    statutoryRule: "Clause 10(1)(a) RB-IOS 2021 & RBI Customer Service Master Direction",
  },
  {
    id: "fraud-denial",
    tabLabel: "Fraud / OTP Blame Denial",
    title: "Bank Rejects Fraud Claim Mechanically Blaming Customer for Sharing OTP or Credentials",
    cause:
      "When funds are siphon off via cyber scams, phishing, vishing, malware, or SIM swaps, banks routinely issue pre-printed rejection letters stating: 'Transaction was authenticated via 2-Factor OTP, therefore bank bears zero liability and customer is negligent'.",
    legalBasis:
      "Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 and the landmark Bombay High Court and NCDRC precedents, a bank cannot absolve itself merely because an OTP was generated. The burden of proving customer negligence lies squarely on the bank, not the customer. Furthermore, if the customer notified the bank within 3 working days, zero liability applies under Section 6. Under the RBI 2027 Fraud Framework, banks must provide electronic server logs and cannot stonewall claims.",
    steps: [
      {
        step: "Obtain 1930 NCRP Cybercrime Portal Acknowledgment",
        description:
          "File an immediate complaint on cybercrime.gov.in or call 1930 within 24 hours. The NCRP acknowledgment number is vital corroboration before the Ombudsman.",
      },
      {
        step: "Cite Paragraph 6 of RBI 2017 Circular to Bank Nodal Officer",
        description:
          "Challenge the bank's rejection in writing, placing the statutory burden of proof on the bank to produce certified IP logs and 2FA gateway audit trails under BSA Section 63.",
      },
      {
        step: "Escalate to RBI Ombudsman for Full Reversal + Interest",
        description:
          "File on CMS portal claiming 100% refund of unauthorized debits under zero liability, along with ₹1,00,000 compensation for harassment under Clause 15(3)(b).",
      },
    ],
    statutoryRule: "RBI Circular DBR.No.Leg.BC.78 (2017) & RBI Fraud Framework 2027",
  },
  {
    id: "failed-tat-reversal",
    tabLabel: "Failed ATM / UPI Reversal",
    title: "Account Debited but ATM Dispensed No Cash or UPI Failed at Merchant",
    cause:
      "During ATM withdrawals, PoS swipes, or UPI/IMPS payments, network timeouts frequently cause the customer's account to be debited while the cash is not dispensed or the merchant gateway receives no credit. Banks frequently tell customers to wait 15 to 30 days for reconciliation.",
    legalBasis:
      "Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 (Harmonisation of Turn Around Time), failed transactions must be reversed within strict timelines: T+1 business day for UPI/IMPS and T+5 business days for ATM/PoS. If the bank fails to reverse the debit within this window, it is mandated by law to pay a penalty compensation of ₹100 per day directly into the customer's account without requiring a separate claim.",
    steps: [
      {
        step: "Document Transaction RRN / UTR & ATM Slip",
        description:
          "Secure the 12-digit Retrieval Reference Number (RRN), UPI transaction ID, or ATM failure slip showing error code (e.g., 'Cash Timeout / Switch Decline').",
      },
      {
        step: "Calculate Statutory ₹100/Day Delay Penalty",
        description:
          "Calculate days delayed past T+1 or T+5. Invoice the bank for the principal amount plus accumulated ₹100/day compensation under RBI TAT guidelines.",
      },
      {
        step: "File CMS Complaint for Auto-Credit Enforcement",
        description:
          "Lodge a complaint on cms.rbi.org.in under 'Failed Electronic Transaction Not Reversed'. The Ombudsman will direct immediate credit of principal + daily penalty.",
      },
    ],
    statutoryRule: "RBI Circular DPSS.CO.PD No.629/2019-20 (TAT Harmonisation)",
  },
  {
    id: "account-freeze-lien",
    tabLabel: "Arbitrary Account Freeze / Lien",
    title: "Bank Freezes Entire Savings / Current Account Over a Small Disputed Inward Credit",
    cause:
      "Upon receiving an email or notice from an interstate cyber cell inquiring into a suspicious layer of funds, banks frequently panic and place a blanket debit freeze or total lien across the customer's entire account balance, blocking lakhs of rupees of legitimate business or personal funds.",
    legalBasis:
      "High Courts across India (including the Bombay High Court in Hitesh Patel v. State of Maharashtra and Delhi HC in Dr. Sonal) have ruled that banks cannot freeze entire accounts when the dispute pertains to a specific tranche of money. Under Section 106/107 BNSS 2023 (Section 102 CrPC), any freeze must be restricted strictly to the disputed lien amount, and the bank cannot withhold unrelated operational balances.",
    steps: [
      {
        step: "Demand Section 102/107 Written Requisition from Bank",
        description:
          "Formally demand the police requisition notice, FIR copy, or cyber cell email from the Branch Manager and GRO to identify the exact disputed amount.",
      },
      {
        step: "Issue Advocate Notice to Restrict Lien to Disputed Amount",
        description:
          "Send a statutory legal notice demanding unfreezing of all unencumbered funds, holding the bank liable for financial damages and business disruption.",
      },
      {
        step: "Escalate to Ombudsman or High Court for Account Operation",
        description:
          "Approach the RBI Ombudsman for arbitrary deficiency under Clause 10(2) RB-IOS or file a Writ Petition before the High Court for immediate operational release.",
      },
    ],
    statutoryRule: "Section 106/107 BNSS 2023 & Bombay HC Guidelines on Cyber Liens",
  },
  {
    id: "award-defiance",
    tabLabel: "Bank Defying Ombudsman Award",
    title: "Ombudsman Passed an Award in Your Favor, but the Bank Fails to Release Payment",
    cause:
      "After the RBI Ombudsman issues an award directing the bank to reverse funds or pay damages, banks occasionally sit on the order, cite internal legal vetting, or miss the 30-day compliance deadline without filing a statutory appeal.",
    legalBasis:
      "Under Clause 15(4) of the RB-IOS 2021, the regulated entity must implement the award within 30 days of receiving the complainant's letter of acceptance. If the bank fails to implement the award and has not obtained permission from the Executive Director of the RBI to file an appeal under Clause 16, the bank is in direct contempt of RBI statutory directions, attracting penalties under Section 47A of the Banking Regulation Act, 1949.",
    steps: [
      {
        step: "Submit Written Letter of Acceptance Promptly",
        description:
          "Within 30 days of the Ombudsman's award, submit your formal written acceptance to the Ombudsman and the bank's Principal Nodal Officer.",
      },
      {
        step: "Track the 30-Day Statutory Compliance Window",
        description:
          "If the bank does not credit funds within 30 days, demand confirmation from the bank's Compliance Officer whether an appeal was sanctioned by the RBI Executive Director.",
      },
      {
        step: "File Contempt Notice & Approach Consumer Forum / High Court",
        description:
          "Issue a legal notice citing Clause 15(4) RB-IOS and Section 47A Banking Regulation Act, or file an execution petition under Section 71 of CPA 2019 on e-Jagriti.",
      },
    ],
    statutoryRule: "Clause 15(4) & Clause 16 RB-IOS 2021 & Section 47A Banking Regulation Act",
  },
];

export default function RbiOmbudsmanProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Header bar */}
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
        <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
          Interactive Resolution Hub
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
          Select Your Banking Dispute to View the Statutory RBI Escalation Path
        </h3>
      </div>

      {/* Tab Selector Buttons */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 scrollbar-none">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-8 space-y-6">
        <div>
          <div className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold bg-red-100 text-red-800 mb-2">
            {currentProblem.statutoryRule}
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
            {currentProblem.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {currentProblem.cause}
          </p>
        </div>

        {/* Legal Mandate Box */}
        <div className="bg-slate-50 border-l-4 border-red-600 p-4 rounded-r-xl">
          <p className="text-xs uppercase font-bold text-slate-800 tracking-wide mb-1">
            Governing Legal Position:
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentProblem.legalBasis}
          </p>
        </div>

        {/* 3 Step Action Grid */}
        <div>
          <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Enforcement Protocol:
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-extrabold mb-2">
                  {idx + 1}
                </div>
                <h6 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">{s.step}</h6>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Link Context */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">Related Banking Disputes:</span>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/recovery/fraud-transaction-amount"
              className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
            >
              Recover Fraudulent UPI &amp; Card Debits →
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/recovery/wrong-upi-transfer"
              className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
            >
              Wrong UPI Transfer Refund Guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
