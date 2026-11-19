"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  triggerFact: string;
  statutoryTrap: string;
  creditorMove: string[];
  outcomeMetric: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "debt-syndication-cma-bypass",
    tabLabel: "1. Debt Syndication Bypass",
    badge: "Contract Act s.73 + MCA CHG-1",
    title: "Promoter Used Your CMA, TEVR & Lender Pitch, Claimed 'Talks Stalled', Then Drew Down ₹50 Cr Directly",
    triggerFact:
      "You spent four months restructuring the borrower's balance sheet, preparing the Credit Monitoring Arrangement (CMA) data, Techno-Economic Viability Report (TEVR), and Debt Syndication Pitch, and introduced three scheduled commercial banks/NBFCs. After receiving an in-principle sanction letter, the promoter emails that 'pricing is unviable—mandate terminated'. Sixty days later, the borrower signs the exact ₹50 Crore Term Loan / CC facility directly with the introduced lender, dodging your 1.5% (₹75 Lakh) success fee.",
    statutoryTrap:
      "Waiting passively for the borrower to voluntarily share the final Sanction Letter—or threatening the bank relationship manager informally without contractual grounding—lets the entire loan disburse into operational accounts and weakens your urgency claim under Section 9 / Order XXXVIII Rule 5.",
    creditorMove: [
      "Pull the company's live MCA V3 Charge Register (Form CHG-1) immediately: the statutory filing discloses the exact bank/NBFC name, charge creation date, and sanctioned facility limit, proving transaction closure within your 12–24 month Tail Period.",
      "Serve an Advocate Mandate-Enforcement & Breach Notice under Contract Act ss.73 & 205 (with Copyright Act s.51 warning on unauthorised reuse of your proprietary CMA/IM financial model) to the Borrower Board, Guarantor Directors, and—as a strictly factual notice of contractual fee claim—copying the lender's Legal/Credit Compliance Desk where permitted by your mandate.",
      "If disbursement is in tranches and your mandate contains an arbitration clause, file an urgent Section 9 Commercial Court petition seeking an escrow deposit or bank guarantee securing the ₹75 Lakh success fee out of pending loan drawdown tranches.",
    ],
    outcomeMetric:
      "Form CHG-1 eliminates factual denial of closing, while imminent Section 9 / Commercial Suit filing threatens the borrower's lender-covenant compliance ('no material undisclosed litigation'), forcing negotiated fee settlement before the next tranche clears.",
  },
  {
    id: "pe-vc-funding-tail-dodge",
    tabLabel: "2. PE / VC / M&A Tail Dodge",
    badge: "Tail Survival + MCA PAS-3",
    title: "Founder Let the 6-Month Exclusive Mandate Expire, Then Closed a ₹100 Cr Series B With Your Introduced Fund 45 Days Later",
    triggerFact:
      "Your boutique investment bank ran a structured equity/M&A process, built the Information Memorandum (IM) and Virtual Data Room (VDR), and logged 18 institutional investors on the Protected Investor Schedule—including the lead PE/VC fund. Days before exclusivity expires, the founder stalls term-sheet signing, lets the primary term lapse, and executes the Share Subscription Agreement (SSA) directly 45 days later to dodge your 2.5% (₹2.50 Crore) success fee.",
    statutoryTrap:
      "Relying only on verbal introductions without a written Protected Investor / Tail List sent upon mandate expiry gives founders room to claim the fund came through a 'separate co-investor referral'. Also, invoking Section 12A mediation prematurely when closing funds are about to be wired forfeits urgent interim protection.",
    creditorMove: [
      "On the day exclusivity expires (or termination notice arrives), formally transmit the finalized 'Tail-Protected Investor & Lender Schedule' citing VDR access timestamps, calendar invites, and email introductions under BSA 2023 s.63.",
      "Monitor MCA Form PAS-3 (Return of Allotment) and Form MGT-14 / SH-7 filings: Form PAS-3 provides indisputable public statutory proof of share allotment to the exact introduced fund (or its affiliate SPV / Mauritius-Singapore pooling vehicle).",
      "Invoke the Tail-Period Survival Clause (typically 12–24 months post-termination) and 'Effective Cause' commission law via Advocate Demand Notice + urgent Arbitration Section 9 application to ring-fence the ₹2.50 Crore fee from closing escrow or primary investment proceeds.",
    ],
    outcomeMetric:
      "Institutional PE/VC funds carry strict representations and warranties requiring disclosure of all broker/advisor claims; placing the founder's closing table on formal legal notice triggers immediate indemnity pressure from the incoming investor's legal counsel.",
  },
  {
    id: "commercial-real-estate-ipc",
    tabLabel: "3. Commercial IPC / Land Deal",
    badge: "Effective Cause + Order 38",
    title: "Developer & Institutional Buyer Cut Out the Commercial Real-Estate IPC After Site Inspection & LOI",
    triggerFact:
      "As a commercial real-estate IPC or mandate broker for a ₹80 Crore Grade-A warehouse / IT park / land parcel transaction, you executed an exclusive brokerage mandate (2% fee = ₹1.60 Crore), arranged site inspections, shared title due-diligence packs, and negotiated the non-binding Letter of Intent (LOI). Both parties then route the registered Sale Deed / Lease Deed through a newly incorporated sister SPV to claim 'different buyer entity—no brokerage payable'.",
    statutoryTrap:
      "Failing to define 'Introduced Party' to include affiliates, group entities, promoter SPVs, and nominees in your demand framing—or suing only for oral brokerage without proving 'Effective Cause' (causa causans) via inspection logs, LOI drafts, and WhatsApp/email trails.",
    creditorMove: [
      "Obtain certified copies of the Registered Conveyance Deed / Lease Deed from the Sub-Registrar (IGRS) and MCA Director Master Data (DIN cross-check) establishing common promoter/beneficial control between the LOI signatory and the purchasing SPV.",
      "Invoke Indian Contract Act Section 73 (breach of exclusivity & non-circumvention), Section 219 (agent's remuneration earned upon bringing parties to binding deal), and Section 70 (quantum meruit fallback) in an Advocate Legal Notice.",
      "Where no arbitration clause exists and the claim exceeds ₹3 Lakh, evaluate urgent Commercial Suit with Order XXXVIII Rule 5 (Attachment Before Judgment) or Order XXXIX injunction against unpaid sale consideration tranches, satisfying the Yamini Manohar urgency threshold to bypass Section 12A delay.",
    ],
    outcomeMetric:
      "Piercing the sister-SPV camouflage through DIN/beneficial-owner filings plus certified Sub-Registrar deeds strips away the 'different entity' excuse and positions the advisor for summary adjudication or funded settlement.",
  },
  {
    id: "unpaid-retainer-post-sanction",
    tabLabel: "4. Unpaid Retainer & Bounced Cheque",
    badge: "Order 37 CPC + NI Act s.138",
    title: "Client Paid Zero Retainer Milestones or Bounced the Post-Sanction Success-Fee Cheque",
    triggerFact:
      "To get the formal Bank Sanction Letter or IM launch across the line, the promoter signs a Mandate Fee Confirmation Addendum and hands over a ₹35 Lakh post-dated cheque payable upon first drawdown—while also defaulting on ₹6 Lakh in accrued monthly retainer & out-of-pocket financial-modelling invoices. Upon presentation after disbursement, the cheque bounces 'Payment Stopped by Drawer'.",
    statutoryTrap:
      "Allowing the promoter to string you along for 35 days with 'next week RTGS' promises destroys your statutory 30-day window under Section 138(b) of the Negotiable Instruments Act, 1881. Equally fatal: forgetting Udyam / Section 43B(h) leverage if your advisory boutique is an eligible Micro/Small enterprise.",
    creditorMove: [
      "Within 30 days of the bank cheque-return memo, dispatch a dual-track Advocate Statutory Notice under NI Act Section 138/141 (targeting the company + signatory/managing directors) alongside Order XXXVII CPC Summary Suit notice for the written Mandate Fee Confirmation.",
      "Cite Sripati Singh v. State of Jharkhand (2021 SCC OnLine SC 1002) upfront so the promoter knows the 'security cheque' defence fails once the sanction/disbursement trigger occurred, exposing them to up to 20% interim compensation u/s 143A.",
      "Attach GSTR-1 tax invoices (SAC 997159 / 998311) and Form 26AS Section 194J/194H TDS entries—plus CGST s.16(2) 180-day ITC reversal warning and Income Tax s.43B(h) expense disallowance warning (where Udyam-registered).",
    ],
    outcomeMetric:
      "Combining criminal NI Act s.138 summons risk for corporate promoters with an Order XXXVII liquidated written-contract suit turns a stalled 'fee negotiation' into an urgent personal-liberty and tax-compliance priority.",
  },
];

export default function MandateFeeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Investment banking and debt syndication fee circumvention scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border text-left ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Deal-Table Flashpoint
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.triggerFact}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Legal &amp; Commercial Trap to Avoid
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-3">
            Advisory Creditor Escalation Sequence
          </p>
          <ol className="space-y-2.5">
            {current.creditorMove.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Expected Commercial &amp; Legal Leverage
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
