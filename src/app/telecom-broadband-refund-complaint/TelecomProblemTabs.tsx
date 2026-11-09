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
    id: "unreturned-security-deposit",
    tabLabel: "Router / ONT Deposit",
    title: "Broadband Connection Closed & Router Returned, but Security Deposit Withheld",
    cause:
      "When disconnecting fiber broadband services (JioFiber, Airtel Xstream, ACT Fibernet, Tata Play Fiber, or BSNL Bharat Fiber), subscribers are promised full refund of their initial equipment security deposit (typically ₹1,000 to ₹3,000) upon returning the Optical Network Terminal (ONT) device and power adapter. Technicians collect the equipment and generate a digital pickup receipt. However, telecom billing systems routinely stall the refund, claim equipment damage, or falsely assert that the hardware was never returned.",
    legalBasis:
      "Under Regulation 14 of the Telecom Consumers Protection and Redressal of Grievances Regulations, 2012, telecom service providers are legally obligated to adjust all outstanding dues and refund the net security deposit within 60 days of closure of service. If the operator fails to remit the refund within 60 days, they are statutory mandated to pay penal interest at the rate of 10% per annum. Unreasonable retention beyond 60 days constitutes deficiency of service and unfair trade practice under Section 2(11) and 2(47) of CPA 2019.",
    steps: [
      {
        step: "Preserve Hardware Collection Slip & Acknowledgment",
        description:
          "Keep the physical or digital equipment return slip, technician pickup SMS, or app receipt showing the serial number of the ONT router and adapter surrendered.",
      },
      {
        step: "Lodge Trai Tier-1 & Tier-2 Appellate Grievance",
        description:
          "Register a written complaint with your telecom circle's Nodal Officer and Appellate Authority, explicitly citing Regulation 14 and claiming 10% p.a. interest.",
      },
      {
        step: "Serve Formal Advocate Demand Notice",
        description:
          "If the deposit is not returned within 15 days of appellate escalation, issue an advocate legal notice holding the corporate leadership personally liable before filing in Consumer Court.",
      },
    ],
    statutoryRule: "TRAI Regulation 14 (60-Day TAT + 10% Interest) & CPA 2019 Sec 2(11)",
  },
  {
    id: "failed-recharge-debit",
    tabLabel: "Failed Recharge Debit",
    title: "Money Debited from Bank / UPI but Plan Not Activated or Double Charged",
    cause:
      "Subscribers attempting online recharges via MyJio, Airtel Thanks, Vi App, Google Pay, PhonePe, or Paytm frequently encounter gateway timeouts. Bank accounts or credit cards are debited instantly (e.g., ₹299, ₹666, or annual ₹3,599 plans), but the telecom operator fails to activate the validity pack or data benefits. Customer care bots continuously insist that funds will auto-reverse within 7 days, yet weeks pass without credit or plan reflection.",
    legalBasis:
      "Reserve Bank of India (RBI) Harmonisation of Turn Around Time (TAT) circular (RBI/2019-20/67) mandates that failed e-commerce and utility recharge debits where the merchant does not confirm fulfillment must be auto-reversed to the customer's account within T+1 business day. Failure to reverse within prescribed timelines makes the entity liable for penal compensation of ₹100 per day of delay under RBI directives.",
    steps: [
      {
        step: "Extract Bank UTR & Gateway Transaction ID",
        description:
          "Download your PDF bank account statement or UPI transaction receipt capturing the 12-digit Unique Transaction Reference (UTR) and telecom merchant ID.",
      },
      {
        step: "Email Nodal Desk with Strict Reversal Demand",
        description:
          "Email the circle nodal desk with payment proofs, asserting violation of RBI TAT norms and requesting immediate activation or bank credit within 48 hours.",
      },
      {
        step: "Enforce Advocate Statutory Notice for Penalty",
        description:
          "If unpaid after 7 days, dispatch an advocate demand notice claiming the principal debit plus statutory ₹100/day RBI compensation and mental agony damages.",
      },
    ],
    statutoryRule: "RBI Circular RBI/2019-20/67 (TAT & Penalty) & CPA 2019 Sec 2(47)",
  },
  {
    id: "chronic-outage-downtime",
    tabLabel: "Fiber Outage / No Service",
    title: "Prolonged Fiber Cut & Service Downtime Without Pro-Rata Bill Credit or Refund",
    cause:
      "Underground fiber cuts, infrastructure failure, or local maintenance issues frequently leave broadband subscribers without internet for days or weeks. Despite raising repeated trouble tickets, local field engineers fail to restore connectivity. When subscribers request billing adjustments, cancellation, or refund of prepaid monthly/annual fees for the unserved period, customer support refuses, citing strict 'non-refundable subscription' terms.",
    legalBasis:
      "Under Quality of Service (QoS) benchmarks framed by TRAI and settled consumer jurisprudence (NCDRC rulings on essential services), telecom operators cannot collect consideration for services they fail to provide. Charging full subscription fees during documented prolonged outages constitutes unfair trade practice under Section 2(47) and gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Compile Trouble Ticket Numbers & Outage Logs",
        description:
          "Document every ticket docket number, automated downtime SMS, app status screenshot, and customer care email recording the exact outage dates and hours.",
      },
      {
        step: "Submit Written Cancellation & Pro-Rata Refund Claim",
        description:
          "Send a formal termination email to the Appellate Authority stating persistent SLA failure and claiming pro-rata refund of prepaid rental and security deposit.",
      },
      {
        step: "Serve Pre-Litigation Legal Demand Notice",
        description:
          "Have an advocate serve a legal notice demanding full refund of unutilized subscription fees, security deposit, and compensation for lost remote-work productivity.",
      },
    ],
    statutoryRule: "TRAI QoS Regulations & CPA 2019 Section 2(11) Deficiency of Service",
  },
  {
    id: "erroneous-postpaid-billing",
    tabLabel: "Postpaid Harassment",
    title: "Postpaid Connection Disconnected but Invoices & Recovery Threats Persist",
    cause:
      "A subscriber submits a formal porting out or cancellation request, clears the final bill, and surrenders the connection. Months later, the telecom provider's automated billing system resumes generating phantom monthly rental invoices, late payment fees, and administrative penalties. Third-party recovery agencies begin calling the consumer, family members, and workplaces with abusive threats of criminal warrants and CIBIL credit score ruination.",
    legalBasis:
      "Once a consumer submits a valid disconnection request under TRAI regulations and clears outstanding billed amounts up to the date of request, the telecom provider has zero legal right to bill for subsequent cycles. Furthermore, engaging third-party collection agencies that use threatening language violates RBI Fair Practices Codes and Supreme Court harassment rulings, attracting punitive tort liability and criminal intimidation complaints under Section 351 BNS (earlier Section 506 IPC).",
    steps: [
      {
        step: "Retrieve Final Bill & Disconnection Confirmation",
        description:
          "Locate your original disconnection service request (SR) number, final paid invoice receipt, and porting completion SMS proving termination.",
      },
      {
        step: "Issue Immediate Cease-and-Desist Communication",
        description:
          "Email the Telecom Appellate Authority and Principal Nodal Officer repudiating the phantom invoice and demanding immediate withdrawal of recovery agents.",
      },
      {
        step: "Serve Advocate Legal Notice for Harassment & Defamation",
        description:
          "Serve a formal statutory notice holding the operator liable for consumer harassment, breach of privacy, and defamation, with notice of consumer court litigation.",
      },
    ],
    statutoryRule: "TRAI Disconnection Norms, CPA 2019 Sec 2(47) & BNS Sec 351 Intimidation",
  },
];

export default function TelecomProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);

  const activeProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
            Interactive Resolution Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Identify Your Telecom or Broadband Refund Dispute
          </h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Select your scenario below
        </span>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTabId;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTabId(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-6">
        <div>
          <div className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] border border-red-200 rounded-md text-[11px] font-black uppercase tracking-wider mb-2">
            Statutory Basis: {activeProblem.statutoryRule}
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            {activeProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <strong className="text-slate-900 font-bold block mb-1">What Happens & Root Cause:</strong>
            <p className="text-slate-700 leading-relaxed">{activeProblem.cause}</p>
          </div>
          <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/70">
            <strong className="text-slate-900 font-bold block mb-1">Your Statutory Rights & Law:</strong>
            <p className="text-slate-700 leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        <div>
          <h5 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Recommended Action Plan:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs font-bold text-slate-900 block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {s.description}
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
