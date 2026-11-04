"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ClauseProblemTab {
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

const PROBLEMS: ClauseProblemTab[] = [
  {
    id: "money-back-plan-rejected",
    tabLabel: "Money-Back Plan Denied",
    title: "Tenant or Buyer Money-Back Plan (Freedom / Relax / Assure) Refund Rejected",
    cause:
      "Tenants and homebuyers pay ₹3,499 to ₹19,999+ for NoBroker 'Money-Back Guarantee' plans promising a dedicated Relationship Manager (RM) and a guaranteed rental or purchase match within 30 to 45 days. When the RM shares outdated listings, already-let flats, or properties far outside the chosen radius, the consumer requests a refund. NoBroker support frequently rejects the claim citing hidden fine print: 'Customer did not exhaust all 50 owner contacts', 'Customer rejected properties shown by RM', or 'Refund request raised after the 7-day post-expiry window'.",
    legalBasis:
      "Under Section 2(46) of the Consumer Protection Act, 2019 (Unfair Contract) and Section 2(47) (Unfair Trade Practice), an e-commerce service provider cannot advertise a '100% Money-Back Guarantee' in bold headline text while burying impossible fulfilment conditions in fine print. Further, under the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023, advertising an illusory money-back assurance and shifting the burden of non-existent inventory onto the tenant constitutes a prohibited dark pattern and deficiency in service under Section 2(11).",
    steps: [
      {
        step: "Export RM Chat Logs & Irrelevant Property Links",
        description:
          "Download screenshots of your NoBroker app dashboard, the exact locality/budget filters you set, and the WhatsApp/in-app links shared by the RM showing flats were either unavailable, broker-listed, or outside your specified area.",
      },
      {
        step: "Serve Formal Written Claim Before & Upon Plan Expiry",
        description:
          "Email hello@nobroker.in and grievance@nobroker.in quoting your Plan Invoice ID, stating clearly that NoBroker breached its core service obligation to provide verified, available properties matching your criteria.",
      },
      {
        step: "Issue Advocate Statutory Notice Challenging Unfair Terms",
        description:
          "If support refuses to refund the plan amount or deducts arbitrary 'RM service charges', serve a 15-day advocate demand notice to NoBroker Technologies Solutions Pvt. Ltd. invoking Section 2(46) and Section 2(11) CPA 2019.",
      },
    ],
    statutoryRule: "Sections 2(11), 2(46) & 2(47) CPA 2019 + Dark Patterns Guidelines 2023",
  },
  {
    id: "token-money-stuck",
    tabLabel: "Token Advance Stuck",
    title: "Token Money / Booking Advance Paid via NoBroker Stuck After Deal Cancellation",
    cause:
      "Tenants and buyers often transfer ₹5,000 to ₹1,00,000 as a token advance through NoBroker Pay or during an RM-facilitated negotiation to lock a flat. Subsequently, the landlord backs out, demands higher rent or extra security deposit, refuses to fix major seepage, or has defective title documents. When the tenant cancels, the landlord refuses to return the token, and NoBroker washes its hands claiming it is 'merely a technology platform' and that the money was already settled to the owner.",
    legalBasis:
      "Under Section 65 and Section 73 of the Indian Contract Act, 1872, when an agreement is frustrated or rescinded due to misrepresentation or changed terms prior to execution of a lease/sale deed, any party who has received an advantage is bound to restore it. Moreover, as proved in Khushboo Kumari v. NoBroker Technologies Solutions Pvt. Ltd., when NoBroker facilitates token collection and assures refund protection upon document or verification failure, it is jointly and severally liable under the Consumer Protection (E-Commerce) Rules, 2020.",
    steps: [
      {
        step: "Document Reason for Deal Failure in Writing",
        description:
          "Send an immediate WhatsApp message and email to both the property owner and your NoBroker RM recording why the lease/purchase could not proceed (e.g., owner hiked rent, hidden lock-in, or title defect).",
      },
      {
        step: "Demand Payment Gateway Settlement Proof (UTR)",
        description:
          "Require NoBroker to disclose in writing whether your token sits in NoBroker's nodal escrow account or was transferred to the landlord's bank account, along with the exact 12-digit UTR number.",
      },
      {
        step: "Serve Joint Legal Notice to NoBroker & Property Owner",
        description:
          "Implead both NoBroker Technologies Solutions Pvt. Ltd. (Accused/Opposite Party No. 1) and the Property Owner (Opposite Party No. 2) in a single 15-day legal notice to stop them from blaming each other.",
      },
    ],
    statutoryRule: "Sections 65 & 73 Indian Contract Act, 1872 + E-Commerce Rules 2020",
  },
  {
    id: "nobroker-pay-rent-hold",
    tabLabel: "NoBroker Pay Rent Hold",
    title: "Rent or Security Deposit Paid via Credit Card / UPI Held on 'Verification Pending'",
    cause:
      "Tenants use NoBroker Pay to pay monthly rent or rental security deposits via credit card or UPI. Frequently, the payment is debited immediately from the tenant's card/bank account, but NoBroker flags the transaction as 'On Hold — Upload Rental Agreement / PAN Verification'. Even after uploading documents—or when the tenant cancels the held transaction—the money is neither credited to the landlord on time (triggering late-rent penalties) nor refunded back to the tenant's source card within statutory RBI timelines.",
    legalBasis:
      "Under the Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20) and RBI Payment Aggregator Guidelines, any domestic payment that is rejected, cancelled, or fails compliance settlement cannot be retained indefinitely in a nodal account. Failure to reverse funds to the originating payment source within T+1 to T+5 working days attracts statutory compensation of ₹100 per day of delay.",
    steps: [
      {
        step: "Extract Transaction ID & Card/Bank Debit Statement",
        description:
          "Download the NoBroker Pay transaction receipt and your credit card or bank statement showing the exact debit date and merchant name.",
      },
      {
        step: "Demand ARN / UTR for Source Reversal",
        description:
          "Write to NoBroker support and grievance officer demanding immediate reversal to the source card/UPI and the 12-digit Acquirer Reference Number (ARN) or UTR.",
      },
      {
        step: "Escalate via Legal Notice & RBI / Consumer Forum",
        description:
          "If funds remain uncredited past 5 working days, serve a statutory demand notice claiming principal reversal, ₹100/day RBI delay penalty, and reimbursement of any credit card interest or late-rent fee incurred.",
      },
    ],
    statutoryRule: "RBI TAT Circular DPSS.CO.PD No.629/2019-20 (₹100/Day Penalty)",
  },
  {
    id: "packers-home-services",
    tabLabel: "Packers & Home Services",
    title: "NoBroker Packers & Movers, Painting, or Cleaning Advance & Damage Claims",
    cause:
      "NoBroker cross-sells Packers & Movers, Home Painting, Deep Cleaning, and Interior services to relocating tenants. Common disputes include last-minute vendor no-shows after collecting booking advances, mid-job price hikes by subcontracted movers, refusal to refund booking amounts upon cancellation, or severe transit damage to furniture and appliances where NoBroker offers a token ₹500–₹1,000 payout blaming third-party partner vendors.",
    legalBasis:
      "Consumer commissions in Bengaluru and Hyderabad (including Chandan Nukala v. NoBroker and Venkata Narasimharao Jupudi v. NoBroker) have decisively rejected NoBroker's defense that moving and painting are performed by independent third-party vendors. Because the consumer books on the NoBroker app, pays NoBroker's invoice, and relies on NoBroker's brand assurance, NoBroker is directly liable as the contracting service provider under Section 2(11) and Section 2(42) of the Consumer Protection Act, 2019.",
    steps: [
      {
        step: "Record Timestamped Photos & Inventory Sheet",
        description:
          "Take pre-move and post-delivery photos/videos of damaged goods, keep the booking quotation, and preserve WhatsApp demands for extra cash made by the moving crew.",
      },
      {
        step: "Reject Token ₹500 Settlement Offers in Writing",
        description:
          "Do not accept nominal goodwill credits in the app if they require signing a full-and-final waiver. Reply by email rejecting the token offer and attaching repair/replacement invoices.",
      },
      {
        step: "Serve Advocate Notice for Full Booking Refund & Damages",
        description:
          "Send a formal legal notice to NoBroker Technologies Solutions Pvt. Ltd. demanding 100% advance refund or actual item repair/replacement cost plus mental harassment compensation.",
      },
    ],
    statutoryRule: "Section 2(11) CPA 2019 + Carriage by Road Act Principles",
  },
];

export default function NoBrokerProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Clause &amp; Bottleneck Solver
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific NoBroker Dispute Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click your exact dispute category below to see why NoBroker rejects the claim, the statutory rule that overrides their fine print, and your 3-step legal remedy:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="NoBroker Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Fine-Print Trap &amp; Operational Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Grounds &amp; Precedent
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Practical Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Need advocate intervention?</strong> We draft and serve a formal statutory notice to NoBroker Technologies Solutions Pvt. Ltd. (and the landlord, if needed) within 24 hours.
          </span>
          <Link
            href="/recover-security-deposit-from-landlord-india"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            See Deposit Recovery Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
