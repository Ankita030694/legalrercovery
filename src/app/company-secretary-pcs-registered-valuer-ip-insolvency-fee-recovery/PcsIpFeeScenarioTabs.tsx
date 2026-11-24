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
    id: "mca-sh7-stamp-duty-advance",
    tabLabel: "1. MCA SH-7 Stamp Duty Advance",
    badge: "Contract Act s.69/222 + Order 37",
    title: "PCS Paid ₹4.20 Lakh MCA ROC Stamp Duty & Filing Fee on Form SH-7/PAS-3; Promoter Stopped Responding",
    triggerFact:
      "Ahead of an investor tranche deadline, a corporate promoter instructs your PCS firm over email and WhatsApp to urgently file Form SH-7 (Authorized Capital Increase from ₹1 Cr to ₹10 Cr) and Form PAS-3 (Return of Allotment). Relying on urgent assurance of 'same-evening NEFT', your firm pays ₹4.20 Lakh in MCA V3 statutory fees and State Stamp Duty from your firm's current account. The SRN gets approved, equity gets allotted, and the client ghosts your reimbursement memo plus ₹75,000 professional fee.",
    statutoryTrap:
      "Do NOT attempt to mark the form 'defective' with the ROC out of frustration or withhold the company's original Share Certificate book, Statutory Registers (MGT-1/MGT-2), or directors' DSC tokens. Withholding corporate registers violates ICSI ethical norms and R.D. Saxena, while delaying formal legal demand allows the promoter to claim the advance was 'part of a bundled fixed-fee mandate'.",
    creditorMove: [
      "Separate your claim into two airtight heads: (a) Statutory Out-of-Pocket Reimbursement (pure agent indemnification under Sections 69, 70 & 222 of the Indian Contract Act, 1872—zero GST dispute possible) proven via MCA V3 SRN Challan + Firm Bank Debit Statement, and (b) Liquidated Professional Fee invoice with ICSI UDIN.",
      "Hand over any client-owned physical registers or DSC tokens under a signed Handover Receipt to keep your ICSI Certificate of Practice (COP) 100% insulated.",
      "Instruct independent litigation counsel to serve a 15-day External Fact-Verified Notice under Order XXXVII CPC (Summary Suit for liquidated reimbursement + written instruction) alongside CGST s.16(2) 180-day ITC reversal warning on the professional fee component and Commercial Court s.12A pre-institution mediation notice if total dues reach ₹3 Lakh+.",
    ],
    outcomeMetric:
      "MCA V3 SRN Challans tied to your firm's bank debit and the company's CIN leave zero factual defense—triggering swift reimbursement before the Board faces Summary Suit summons or auditor disclosures.",
  },
  {
    id: "coc-stalling-irp-rp-fees",
    tabLabel: "2. CoC Stalling CIRP / IRP Fees",
    badge: "IBC s.5(13), 53(1)(a) & s.60(5) IA",
    title: "Committee of Creditors (CoC) Banks Ratified ₹2.5 Lakh/Month RP Fee Under Reg. 34B, Then Delayed Contribution for 9 Months",
    triggerFact:
      "You ran a 270-day Corporate Insolvency Resolution Process (CIRP) as IRP/RP, preserved factory security, appointed IBBI Registered Valuers, and convened 8 CoC meetings. Although the CoC ratified your minimum fixed monthly fee under IBBI CIRP Regulation 34B and out-of-pocket expenses under Regulation 34, lead PSU/private banks failed to release their pro-rata voting-share contribution—or replaced you with a new RP without clearing ₹22.5 Lakh in accrued CIRP costs.",
    statutoryTrap:
      "Never halt statutory CIRP filings, refuse to hand over Corporate Debtor custody/records to a newly appointed RP (breaching IBBI Code of Conduct Clause 16), or unilaterally appropriate Corporate Debtor cash without CoC ratification. Informal reminder emails to bank AGM/DGM desks routinely sit unactioned across quarters without an Adjudicating Authority order.",
    creditorMove: [
      "Compile the complete IBBI compliance ledger: Form 2 consent, NCLT admission order, CIRP Reg. 33/34/34B CoC ratification resolutions, e-voting tallies, CIRP Cost Disclosure Form (Form III) filed with IBBI/IPA, and pro-rata bank contribution table.",
      "Issue a formal Demand-cum-Final Reconciliation Notice to each defaulting CoC member (and the CIRP Applicant for pre-CoC Reg. 33 expenses) demanding pro-rata deposit into the CIRP Cost Account within 15 days.",
      "If unpaid, file an Interlocutory Application (IA) under Section 60(5) of the IBC, 2016 before the NCLT seeking a binding direction on CoC members to remit pro-rata CIRP costs immediately—and ensuring any Resolution Plan explicitly provides Rank-1 priority payment u/s 30(2)(a) (or u/s 53(1)(a) in liquidation).",
    ],
    outcomeMetric:
      "Because Section 5(13) CIRP costs enjoy super-priority u/s 30(2)(a) and 53(1)(a) and NCLT enforces pro-rata CoC contribution u/s 60(5), formal legal notice followed by an IA compels bank legal teams to release stalled CIRP fee approvals.",
  },
  {
    id: "registered-valuer-fema-companies-act",
    tabLabel: "3. Valuer FEMA / s.247 Report Used",
    badge: "Alok Kaushik + RBI FIRMS / PAS-3 Proof",
    title: "Corporate Client or RP Used Signed IBBI Valuation Report for PAS-3 / FEMA FC-GPR Filing—Then Refused Balance ₹3.5 Lakh Fee",
    triggerFact:
      "As an IBBI Registered Valuer (Securities & Financial Assets / Land & Building / Plant & Machinery), you completed a DCF & Comparable-Multiples Valuation Report u/s 247 of the Companies Act, 2013 and FEMA (Non-Debt Instruments) Rules, 2019 (or Fair/Liquidation Value under CIRP Reg. 27/35). The client took a 20% advance, obtained the signed PDF report, uploaded it with Form PAS-3 / RBI FIRMS FC-GPR (or used it in CoC deliberations), and then refused the 80% balance claiming 'valuation was lower than expected'.",
    statutoryTrap:
      "Never issue a second 'adjusted' report or improperly alter signed statutory valuation assumptions. Conversely, waiting quietly after the client has already relied on your report before ROC, RBI AD-Bank, or NCLT forfeits peak negotiation timing.",
    creditorMove: [
      "Pull independent statutory proof that your work product was accepted and acted upon: MCA V3 public filing of Form PAS-3 / MGT-14 / NCLT scheme referencing your IBBI Registration Number, RBI FIRMS acknowledgment correspondence, or CoC minutes recording receipt of Fair/Liquidation Value reports.",
      "For private corporate/FEMA mandates: dispatch an External Advocate Demand Notice under Order XXXVII CPC + Form 26AS (s.194J TDS) + CGST s.16(2) 180-day ITC reversal (plus MSMED Act ss.15–18 & s.43B(h) tax-disallowance leverage if Udyam-registered).",
      "For IBC CIRP / withdrawn CIRP valuations: demand immediate inclusion in ratified CIRP Costs u/s 5(13) and, if the CIRP was set aside or stalled, invoke the Supreme Court's binding ruling in Alok Kaushik v. Bhuvaneshwari Ramanathan (2021) 5 SCC 787 via a Section 60(5)(c) NCLT application.",
    ],
    outcomeMetric:
      "Once a client files your signed Valuation Report with ROC or RBI, any belated 'unsatisfactory quality' excuse collapses under estoppel—creating an open-and-shut Summary Suit or NCLT s.60(5) fee order.",
  },
  {
    id: "pcs-secretarial-audit-icsi-noc",
    tabLabel: "4. Secretarial Audit & ICSI NOC Bypass",
    badge: "ICSI Clause (8) + Balance Sheet s.18",
    title: "Listed / Large Unlisted Company Switched PCS for Form MR-3 Secretarial Audit Leaving 14 Months of Retainership Unpaid",
    triggerFact:
      "You served as Secretarial Auditor (Form MR-3 u/s 204 of the Companies Act, 2013) and annual ROC compliance retainer for a public company. After you issued Form MR-3 and signed Form MGT-8 (Annual Return Certification), the company left ₹4.80 Lakh unpaid across quarterly retainers and Secretarial Audit bills—and appointed a new PCS for the next financial year without clearing your dues.",
    statutoryTrap:
      "Under First Schedule, Part I, Clause (8) of the Company Secretaries Act, 1980, an incoming PCS must communicate in writing with the outgoing PCS before accepting the position, and ICSI ethical guidelines address undisputed audit fees—but unlike physical goods, you cannot hold the company's minute books or corporate common seal hostage, nor can you block non-audit advisory handovers improperly.",
    creditorMove: [
      "Respond promptly in writing (RPAD + ICSI-registered email) to the incoming PCS's Clause (8) communication disclosing the exact unpaid undisputed Secretarial Audit fees (attaching the signed Balance Sheet / Board Resolution appointing you and ICSI UDINs for MR-3 / MGT-8).",
      "If the incoming PCS accepted the appointment without prior Clause (8) written communication, serve a formal, dignified written notice drawing attention to First Schedule Part I Clause (8) of the Company Secretaries Act, 1980.",
      "Simultaneously deploy an independent Advocate Demand Notice against the company and Managing Director/CFO covering both Secretarial Audit fees and annual retainership arrears backed by Balance Sheet provisions (Section 18 Limitation Act acknowledgment), Form 26AS 194J TDS credits, and CGST s.16(2) ITC reversal.",
    ],
    outcomeMetric:
      "Formal ICSI Clause (8) notice alerts the incoming PCS and Audit Committee to documented unpaid statutory fees, while parallel external Advocate escalation secures recovery of both audit and retainership ledgers.",
  },
];

export default function PcsIpFeeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="PCS, Registered Valuer and Insolvency RP fee default scenarios"
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
              Practice Flashpoint
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.triggerFact}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              ICSI / IBBI Trap to Avoid
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-3">
            Creditor-Side Legal Action Sequence
          </p>
          <ol className="space-y-2.5">
            {current.creditorMove.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Expected Recovery Leverage
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
