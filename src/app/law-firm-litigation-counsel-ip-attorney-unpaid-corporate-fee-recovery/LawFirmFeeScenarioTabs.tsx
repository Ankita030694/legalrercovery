"use client";

import React, { useState } from "react";

interface ScenarioPlaybook {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  exposure: string;
  statuteHook: string;
  whatHappens: string;
  wrongMove: string;
  creditorSequence: string[];
  evidenceLock: string;
}

const PLAYBOOKS: ScenarioPlaybook[] = [
  {
    id: "litigation-switch",
    tabLabel: "Commercial Suit Switch",
    badge: "Scenario 01 · Litigation Chambers",
    title: "Corporate Client Switches Law Firms Right Before Final Arguments With ₹24L Unpaid",
    exposure: "₹10L – ₹80L (Appearance Fees, Drafting & Retainership Arrears)",
    statuteHook: "CPC Order III Rule 4(2) Discharge Application + Order XXXVII CPC + Commercial Courts s.12A",
    whatHappens:
      "After 18 months of interim injunctions, pleadings, and cross-examinations in a High Court or NCLT dispute, the corporate promoter quietly engages a cheaper firm days before final arguments and demands an unconditional No-Objection Certificate (NOC) and original brief files without clearing 9 pending appearance memos.",
    wrongMove:
      "Refusing to return original title deeds, court-certified copies, or client files until fees are paid—which directly violates R.D. Saxena v. Balram Prasad Sharma (2000) 7 SCC 264 and invites a State Bar Council disciplinary complaint under Section 35 of the Advocates Act, 1961.",
    creditorSequence: [
      "Immediately transmit complete client-owned papers and digital pleadings via courier/email under a signed Handover Inventory preserving your right to unpaid fees.",
      "Do NOT sign a blanket 'no-dues' waiver; instead, move an application under Order III Rule 4(2) CPC seeking formal leave of the Court to be discharged while annexing the reconciled statement of unpaid appearance memos and daily court order-sheets.",
      "Request the Judge to record in the discharge order that leave is granted 'without prejudice to the outgoing counsel's civil recovery rights for unpaid professional fee bills of ₹X'—creating a judicial admission on record.",
      "Instruct independent recovery counsel to serve a 15-day statutory demand notice citing acknowledged emails, Form 26AS Section 194J TDS credits, and Order XXXVII CPC / Commercial Courts s.12A pre-institution mediation.",
    ],
    evidenceLock:
      "Signed Vakalatnama + Daily Court Order-Sheets recording appearance + Engagement Letter / Fee Schedule email + Form 26AS s.194J TDS credits + Order III Rule 4(2) Discharge Order.",
  },
  {
    id: "ip-govt-disbursements",
    tabLabel: "Patent & TM Disbursements",
    badge: "Scenario 02 · IP & Patent Attorneys",
    title: "Patent National-Phase & PCT Official IPO Filing Fees Advanced From Firm Account Unpaid",
    exposure: "₹5L – ₹65L (Official IPO Govt Fees + Prosecution & FER Response Bills)",
    statuteHook: "Indian Contract Act s.69 & s.70 (Reimbursement) + Order XXXVII CPC + Patents Rules Form-13 / TM-P",
    whatHappens:
      "To beat a non-extendable 31-month PCT national-phase entry deadline or patent annuity cut-off, an Indian IP boutique advances ₹12L–₹45L in official Indian Patent Office (IPO) e-filing fees, excess claim charges, and translation costs. Once the application number is generated, the corporate applicant or startup stops paying and files a fresh Power of Attorney (Form 26) through another patent agent.",
    wrongMove:
      "Abandoning a live statutory prosecution deadline without formal written withdrawal notice to the client and the Controller, or holding back issued original Letters Patent / Registration Certificates as an unlawful lien.",
    creditorSequence: [
      "Segregate your ledger cleanly into two buckets: (A) Out-of-Pocket Statutory Government Disbursements backed by IPO / TMR CBR (Cash Book Receipts) bearing the client's application numbers, and (B) Professional Prosecution & Drafting Fees.",
      "Serve a 15-day written Notice of Withdrawal of Representation (and stop advancing fresh official annuities) with explicit diary reminders of upcoming statutory deadlines so no professional negligence counterclaim can survive.",
      "For undisputed official CBR disbursements paid on written email instruction, press an Order XXXVII CPC Summary Suit (liquidated debt evidenced by written instruction + government payment receipt) alongside Indian Contract Act s.70 quantum meruit / reimbursement.",
      "Where the defaulting applicant is an Indian corporate entity, highlight Form 26AS TDS mismatches and unpaid GST RCM/B2B invoice exposure in the external Advocate Demand Notice.",
    ],
    evidenceLock:
      "Written email/PO instructing national-phase or TM filing + Signed Form 26 / TM-48 PoA + IPO/TMR Official CBR Receipts showing exact INR paid from firm bank account + BSA 2023 s.63 certificate.",
  },
  {
    id: "arguing-counsel-chambers",
    tabLabel: "Arguing Counsel Chambers",
    badge: "Scenario 03 · Senior & Briefing Chambers",
    title: "Senior / Arguing Counsel Conference & Hearing Fee Memos Unpaid by Instructing Firm or Client",
    exposure: "₹4L – ₹50L (Per-Hearing Appearance Memos, Conference Fees & Written Submissions)",
    statuteHook: "Contract Act s.70 & s.230 (Agent vs Disclosed Principal) + Court Order-Sheets + Limitation Act Art. 113",
    whatHappens:
      "A Senior Advocate or arguing counsel's chamber conducts 14 conferences, settles written submissions, and argues an interim stay before the High Court or Supreme Court on brief from an instructing Advocate-on-Record (AoR) / corporate law firm. After relief is obtained or the matter settles out of court, the corporate litigant refuses to clear the Senior Counsel's clerk memos while the instructing firm pleads 'we were only an agent'.",
    wrongMove:
      "Relying solely on informal WhatsApp messages from the chamber clerk without a contemporaneous written fee memo sent to both the instructing firm and the corporate client's General Counsel, risking a Section 230 Contract Act ping-pong defense.",
    creditorSequence: [
      "Issue itemized Chamber Fee Memos within 7 days of each hearing/conference quoting the exact Case Number, Court Bench, Date of Order-Sheet recording Senior Counsel's appearance, and agreed per-appearance tariff.",
      "Put both the corporate client (principal beneficiary who accepted services under Contract Act s.70) and the instructing firm on written notice via formal Chamber/External Recovery Counsel communication to clarify who bears payment liability.",
      "Verify whether the corporate litigant booked the fee memo in its GST Reverse Charge Mechanism (RCM) filings under Notification 13/2017-CT(R) or deducted Section 194J TDS—either filing operates as a devastating statutory admission of liability.",
      "If unpaid beyond 15 days, escalate via external counsel to Commercial Court s.12A pre-institution mediation (for commercial litigation disputes above ₹3L) or Order XXXVII CPC where fee memos were confirmed by email.",
    ],
    evidenceLock:
      "Certified Court Order-Sheets displaying Senior Counsel's name + Brief transmission & fee confirmation emails + Chamber Clerk Diary / Fee Memos + Corporate GST RCM / Form 26AS 194J records.",
  },
  {
    id: "foreign-associate-ip",
    tabLabel: "Foreign IP Associates",
    badge: "Scenario 04 · Cross-Border Associates",
    title: "Overseas Law Firm or Foreign IP Associate Defaults on Indian National-Phase & Enforcement Invoices",
    exposure: "USD 15,000 – USD 120,000 (₹12L – ₹1 Cr+ Cross-Border Filing & Litigation Bills)",
    statuteHook: "CPC s.20(c) Indian Jurisdiction + Foreign Exchange / LUT Export Billing + Reciprocal Enforcement (CPC s.44A)",
    whatHappens:
      "An overseas patent associate (US, EU, China, or Japan) instructs an Indian IP law firm to file 18 national-phase patent applications, conduct trademark oppositions, and advance IPO official fees. When the foreign associate's own end-client defaults or goes bankrupt, the foreign firm refuses to pay the Indian associate claiming 'pay-when-paid' despite zero such clause in the instruction letter.",
    wrongMove:
      "Allowing invoices to age past 2.5 years hoping for repeat referrals while failing to preserve FEMA export realization extensions or letting limitation run out under Article 113.",
    creditorSequence: [
      "Audit the instruction email chain: under Indian Contract Law, an instructing foreign law firm is directly liable as contracting party unless an express written clause restricted recourse solely to the underlying foreign applicant.",
      "Immediately halt further credit advances for official IPO annuities/renewals after giving clear 30-day written notice of upcoming statutory deadlines to protect against malpractice allegations.",
      "Serve a formal dual-jurisdiction Fact-Verified Demand Notice citing Indian court jurisdiction under CPC s.20(c) (contract performed & filings executed in India), official IPO CBR disbursements, and contractual interest.",
      "For undisputed USD/EUR invoices backed by email confirmations, initiate Order XXXVII CPC summary proceedings in the Commercial Division of the relevant Indian High Court / District Commercial Court, or leverage reciprocal enforcement / overseas bar ethics escalation where applicable.",
    ],
    evidenceLock:
      "Instruction emails with tariff acceptance + Signed Form 26/TM-48 + Official IPO CBR payment proofs + Bank SWIFT/FIRC history of prior paid invoices establishing course of dealing + Export LUT invoices.",
  },
];

export default function LawFirmFeeScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(PLAYBOOKS[0].id);
  const current = PLAYBOOKS.find((p) => p.id === activeId) || PLAYBOOKS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Law firm and IP attorney unpaid fee recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {PLAYBOOKS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
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

      {/* Active Playbook Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
              {current.badge}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] sm:text-xs font-bold">
            Typical Ticket: {current.exposure}
          </span>
        </div>

        <div className="bg-white border-l-4 border-[#DC2626] rounded-r-xl p-4 shadow-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Primary Statutory Leverage
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-900">{current.statuteHook}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              How Corporate Clients Manufacture Default
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.whatHappens}
            </p>
          </div>
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Fatal Trap to Avoid (Bar Council Risk)
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.wrongMove}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-3">
            R.D. Saxena-Compliant 4-Step Recovery Sequence
          </p>
          <ol className="space-y-2.5">
            {current.creditorSequence.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Court-Ready Evidence Lock (BSA 2023 s.63)
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
            {current.evidenceLock}
          </p>
        </div>
      </div>
    </div>
  );
}
