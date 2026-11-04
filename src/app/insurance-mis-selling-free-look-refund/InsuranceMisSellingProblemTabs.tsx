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
    id: "sold-as-fd",
    tabLabel: "Policy Sold as FD",
    title: "Insurance Policy Deceptively Sold by Bank RM as a High-Yield Fixed Deposit",
    cause:
      "A rampant bancassurance abuse in India occurs when bank relationship managers or branch executives advise senior citizens, retirees, or depositors to park savings in a 'Special 3-Year Fixed Deposit' offering 10% to 12% guaranteed annual returns. The customer is handed a life insurance or Unit-Linked Insurance Plan (ULIP) contract without ever being informed that it entails an annual recurring premium commitment for 10 to 15 years.",
    legalBasis:
      "Under Regulation 10 of the IRDAI (Protection of Policyholders' Interests) Regulations and Section 2(47) of the Consumer Protection Act, 2019, marketing an insurance product by deliberately misrepresenting its fundamental characteristics, tenure, or risk profile constitutes an unfair and deceptive trade practice. Under Section 18 and 19 of the Indian Contract Act, consent obtained through misrepresentation or fraud vitiates the contract, rendering it voidable at the option of the policyholder. Insurers are vicariously liable for fraudulent misrepresentations committed by their corporate banking agents.",
    steps: [
      {
        step: "Gather Bank Pitch Records & Branch Interaction Logs",
        description:
          "Collect visiting cards, brochures, WhatsApp messages, or handwritten calculation sheets given by the bank employee showing promises of 'fixed returns' or 'deposit maturity'.",
      },
      {
        step: "Submit Written Discrepancy Notice to Bank & Insurer GRO",
        description:
          "File an immediate complaint with the Grievance Redressal Officer (GRO) of both the bank and the life insurance company, explicitly stating that you intended to open a fixed deposit, not an insurance policy.",
      },
      {
        step: "Escalate to Insurance Ombudsman & Bima Bharosa",
        description:
          "If the insurer rejects cancellation by pointing to signed standard terms, lodge a complaint on Bima Bharosa and approach the Insurance Ombudsman. Ombudsmen routinely direct 100% refund of premium in senior citizen FD mis-selling cases.",
      },
    ],
    statutoryRule: "Section 2(47) CPA 2019 & IRDAI Bancassurance Code of Conduct",
  },
  {
    id: "forged-proposal",
    tabLabel: "Forged Proposal Form",
    title: "Agent Forged Signature, Inflated Income, or Falsified Occupation in Proposal Form",
    cause:
      "To meet monthly sales targets and bypass automated underwriting eligibility criteria, unscrupulous insurance agents frequently fabricate customer proposal forms. They enter inflated annual incomes, alter mobile numbers or email IDs so that PIVC calls and e-policy notices are diverted, and forge the customer's signature or push pre-signed blank forms.",
    legalBasis:
      "A contract of insurance is founded upon the doctrine of utmost good faith (uberrimae fidei). When an agent unilaterally alters material particulars or executes a forged proposal form, no valid meeting of minds (consensus ad idem) occurs. The contract is non est factum and void ab initio under Section 10 and 20 of the Indian Contract Act, 1872. The Supreme Court and NCDRC have held that insurers cannot enforce policy terms or forfeiture clauses where the proposal was filled fraudulently by the insurer's authorized representative.",
    steps: [
      {
        step: "Demand Certified Copy of the Proposal Form",
        description:
          "Write formally to the insurer demanding an unredacted copy of the physical or digital proposal form containing the underwriting declarations and signature stamp.",
      },
      {
        step: "Prepare a Forensic Signature & Factual Discrepancy Sheet",
        description:
          "Highlight obvious signature variations, incorrect addresses, or falsified annual income figures (cross-checked against your genuine ITR returns or Form 16).",
      },
      {
        step: "Issue Advocate Notice Invoking Criminal & Consumer Remedies",
        description:
          "Serve a formal statutory legal demand notice alleging forgery, cheating under Bharatiya Nyaya Sanhita (BNS 318), and unfair trade practice, demanding complete reversal with statutory interest.",
      },
    ],
    statutoryRule: "Sections 10 & 19 Indian Contract Act • BNS Section 318 & 336",
  },
  {
    id: "denied-free-look",
    tabLabel: "Free-Look Denied",
    title: "Insurer Rejects Free-Look Cancellation Claiming Request Was Submitted Late",
    cause:
      "Policyholders often issue a cancellation request within days of reading the policy bond, only for the insurance company to reject the refund claiming the 15-day or 30-day statutory free-look period has elapsed. Insurers frequently calculate the deadline from the policy issuance date or premium debit date rather than the actual physical or electronic delivery date.",
    legalBasis:
      "Under the IRDAI Master Circular on Protection of Policyholders' Interests (2024), the 30-day free-look clock begins strictly from the date of receipt of the policy document by the policyholder, NOT from the date of underwriting, issuance, or payment. The burden of proving delivery with proof of dispatch and consignment acknowledgment lies entirely upon the insurance company. If the insurer fails to produce a signed courier delivery run-sheet or electronic delivery audit trail, their rejection is illegal.",
    steps: [
      {
        step: "Obtain Postal Consignment / Courier Delivery Timestamp",
        description:
          "Trace the Speed Post or courier tracking number (e.g., Blue Dart, DTDC, India Post) to establish the exact delivery date when the physical document reached your address.",
      },
      {
        step: "Rebut the Rejection Letter with Delivery Audit Evidence",
        description:
          "Send a firm rebuttal to the insurer's Grievance Cell showing that your cancellation was dispatched within 30 days of documented delivery.",
      },
      {
        step: "Claim Delay Penal Interest @ Bank Rate + 2%",
        description:
          "Under IRDAI regulations, if an insurer holds back a valid free-look refund beyond 7 days of receiving the request, they are mandated to pay penal interest at 2% above the prevailing RBI bank rate.",
      },
    ],
    statutoryRule: "IRDAI Master Circular 2024 (Reg. on Free-Look Cancellation Timelines)",
  },
  {
    id: "ulip-pension-trap",
    tabLabel: "ULIP / Pension Trap",
    title: "Regular-Premium ULIP or Pension Plan Disguised as 'Single-Payment' Investment",
    cause:
      "Investors are persuaded by brokers to invest ₹1 Lakh or ₹2.5 Lakhs into a 'wealth creation scheme', believing it to be a one-time capital investment. In year two, they are shocked by an alert demanding another ₹1 Lakh, discovering they have been enrolled in a 10-year regular premium ULIP where failure to pay leads to policy lapse and severe surrender charges.",
    legalBasis:
      "The Insurance Regulatory and Development Authority of India (IRDAI) prohibits misleading product illustrations and aggressive sales tactics under its Advertising and Sales Regulations. Misrepresenting premium payment frequency violates Section 2(47) of the Consumer Protection Act. If the consumer was not given the statutory Benefit Illustration signed prior to sale, the sale violates mandatory pre-contractual disclosure norms.",
    steps: [
      {
        step: "Review the Mandated Benefit Illustration Sheet",
        description:
          "Check whether the agent provided the mandatory IRDAI 4% and 8% gross return Benefit Illustration with your signature before policy issuance.",
      },
      {
        step: "Halt Premium Payment & Refuse Voluntary Surrender",
        description:
          "Do not surrender the policy voluntarily, as insurers will deduct massive discontinuance charges. File a dispute for contract rescission and 100% refund due to mis-selling.",
      },
      {
        step: "Approach the Insurance Ombudsman with Sample Pitch Evidence",
        description:
          "Ombudsmen have jurisdiction to award full refund of premium where high-risk market-linked ULIPs were pushed onto risk-averse or elderly buyers without risk profiling.",
      },
    ],
    statutoryRule: "IRDAI (Unit Linked Insurance Products) Regulations & Ombudsman Rules 2017",
  },
  {
    id: "unauthorized-autodebit",
    tabLabel: "Sneaky NACH Debit",
    title: "Bank Account Hit with Unauthorized NACH Auto-Debit for Renewal Premium",
    cause:
      "Having contested a mis-sold policy during year one or having refused to pay subsequent premiums, the policyholder discovers their bank account has been debited via an electronic NACH mandate that was set up without informed consent during the initial proposal onboarding.",
    legalBasis:
      "Under Reserve Bank of India (RBI) Directions on E-Mandates and NPCI procedural rules, automated debit mandates require explicit two-factor customer authorization and 24-hour pre-debit notifications. An insurer or bank that debits recurring premiums when the underlying insurance policy is under formal dispute commits an unauthorized debit actionable under the RBI Integrated Ombudsman Scheme and Consumer Protection Act.",
    steps: [
      {
        step: "Cancel the NACH E-Mandate in NetBanking Immediately",
        description:
          "Log into your bank portal or visit the home branch to revoke the active mandate registered under the insurer's Unique Mandate Reference Number (UMRN).",
      },
      {
        step: "File a Bank Chargeback / Dispute for Unauthorized Debit",
        description:
          "Demand reversal of the debited premium from your bank within 30 days under RBI failed transaction and unauthorized debit guidelines.",
      },
      {
        step: "Serve Legal Notice Demanding Restitution & Harassment Damages",
        description:
          "Issue a legal notice holding both the insurer and the bank jointly liable for illegal fund withdrawal and breach of trust.",
      },
    ],
    statutoryRule: "RBI E-Mandate Directions & Section 2(47) Consumer Protection Act 2019",
  },
];

export default function InsuranceMisSellingProblemTabs() {
  const [activeTabId, setActiveTabId] = useState(PROBLEMS[0].id);

  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Buttons */}
      <div className="flex items-center overflow-x-auto border-b border-slate-200 bg-slate-50/80 p-1.5 gap-1.5 scrollbar-thin">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTabId(problem.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-red-600 shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-full">
            Statutory Rule: {activeProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight mt-2.5">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
              The Root Cause &amp; Industry Trap
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4 sm:p-5 space-y-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-900">
              The Statutory Counter &amp; Legal Grounds
            </h4>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Immediate Remediation Path */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
            Immediate 3-Step Remediation Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs font-bold text-slate-900 line-clamp-1">
                    {s.step}
                  </strong>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            Facing this exact mis-selling dispute?
          </span>
          <a
            href="#heading-cta-block"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1"
          >
            Draft Statutory Legal Demand Notice →
          </a>
        </div>
      </div>
    </div>
  );
}
