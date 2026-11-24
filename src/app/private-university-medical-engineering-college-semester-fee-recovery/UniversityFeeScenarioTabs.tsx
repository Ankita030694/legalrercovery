"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  bottleneck: string;
  statutoryTrigger: string;
  actionSteps: string[];
  outcome: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "loan-diversion",
    tabLabel: "1. Education Loan Diverted",
    badge: "Personal Account Misappropriation",
    title: "Bank Disbursed Education Loan to Student Account—Never Remitted to University",
    bottleneck:
      "Under several retail education loan schemes, banks credit semester tranches into the student's or parent's savings account rather than directly via RTGS to the university trust account. Students divert the funds for personal use while continuing classes and demanding semester exam admit cards.",
    statutoryTrigger:
      "Indian Contract Act, 1872 (ss. 37, 43, 73 — Joint Co-Guarantor Liability) + Bharatiya Nyaya Sanhita (BNS), 2023 s. 316 (Criminal Breach of Trust where fee-specific bank disbursement is misappropriated) + Formal Intimation to Lending Bank Branch.",
    actionSteps: [
      "Reconcile the bank sanction letter / demand note issued by the University Finance Office against UTR/NEFT credits received.",
      "Serve a Joint Statutory Legal Demand Notice on the student, the co-obligor parent/guardian, and mark a formal factual copy to the sanctioning bank's Nodal Officer noting end-use diversion.",
      "Avoid blocking original school/board certificates; enforce the co-guarantor parent's personal civil liability via Order XXXVII CPC summary suit if unpaid within 15 days.",
    ],
    outcome:
      "Lending banks routinely freeze further tranches and pressure the co-applicant parent to clear university dues immediately to avoid loan recall.",
  },
  {
    id: "final-year-hostel",
    tabLabel: "2. Final-Year & Hostel Arrears",
    badge: "Post-Convocation & Mess Dues",
    title: "Final-Year Student Vacated Hostel & Cleared Exams Leaving ₹2.5L–₹6L Unpaid",
    bottleneck:
      "Students accumulate 2–4 semesters of tuition, hostel room rent, mess charges, and library/lab breakage fees in their final year. Because UGC & AICTE strictly prohibit withholding original 10th/12th mark-sheets or degree certificates as collateral, registrars fear releasing documents permanently kills recovery.",
    statutoryTrigger:
      "UGC Notification on Refund of Fees & Non-Retention of Original Certificates (Oct 2018 / 2024 Updates) + Indian Contract Act, 1872 s. 10 & s. 73 + CPC Order XXXVII (Summary Suit on Signed Admission Bond & Fee Ledger).",
    actionSteps: [
      "Release original academic certificates strictly against a written acknowledgement of receipt that records the exact admitted fee balance without waiver.",
      "Issue a Fact-Verified Civil Recovery Notice under Contract Act s. 43 jointly to the graduated student and earning parent/co-guarantor.",
      "File an Order XXXVII CPC Summary Suit (or Commercial Court suit where trust commercial criteria apply) attaching the signed Admission Undertaking, Hostel Allotment Form, and BSA 2023 s. 63 certified ERP ledger.",
    ],
    outcome:
      "Eliminates UGC show-cause notices and NAAC/AICTE accreditation risk while converting unsecured student arrears into an executable money decree against earning parents.",
  },
  {
    id: "pdc-nach-bounce",
    tabLabel: "3. Semester PDC / NACH Bounce",
    badge: "Criminal Negotiable Track",
    title: "Post-Dated Semester Fee Cheque or e-NACH Mandate Dishonoured (R01 / Account Closed)",
    bottleneck:
      "Many private engineering, MBA, and medical colleges collect post-dated cheques (PDCs) or e-NACH mandates for staggered semester instalments. When cheques bounce for 'Funds Insufficient' or 'Account Closed', accounts teams send informal WhatsApp reminders and miss the strict 30-day statutory notice deadline.",
    statutoryTrigger:
      "Negotiable Instruments Act, 1881 (Section 138 & Section 143A — 20% Interim Compensation) + Payment and Settlement Systems Act, 2007 (Section 25 for e-NACH / ECS dishonour).",
    actionSteps: [
      "Log the exact Cheque Return Memo date or NPCI ISO 20022 return date (R01–R05) in the University ERP on T+0.",
      "Dispatch a mandatory statutory demand notice within 30 days of dishonour via Speed Post RPAD, Email, and WhatsApp granting 15 days to cure.",
      "File criminal complaint within 30 days after the 15-day cure window expires under s. 142(2) NI Act at the university's own bank-branch jurisdiction.",
    ],
    outcome:
      "Triggers immediate criminal summons against the cheque signatory (typically the earning parent) and empowers the university to seek 20% interim deposit under s. 143A.",
  },
  {
    id: "seat-bond-nri",
    tabLabel: "4. Seat-Leaving Bond & NRI Default",
    badge: "Medical / Dental & Foreign Students",
    title: "Mid-Course Medical/Dental Dropouts, Seat-Leaving Bonds & Foreign/NRI Tuition Default",
    bottleneck:
      "Self-financed medical, dental, and nursing colleges face mid-course dropouts after the Mop-Up/Stray Vacancy round closes—leaving a ₹15L–₹80L seat vacant for 4.5 years—or NRI/foreign students returning home with unpaid dollar/rupee tuition.",
    statutoryTrigger:
      "Indian Contract Act, 1872 s. 74 (Reasonable Liquidated Damages vs Penalty) + NMC / DCI Seat-Leaving Rules + CPC Order V Rule 25 & BSA 2023 s. 63 (International Electronic Service on NRI Co-Guarantors).",
    actionSteps: [
      "Separate unenforceable 'arbitrary penalty' claims from provable actual loss (vacant seat revenue loss certified post-counselling cut-off date) under Contract Act s. 74.",
      "For NRI/foreign students, serve statutory demand notices simultaneously on the student's registered foreign email/WhatsApp and the mandatory Indian Local Guardian / Co-Sponsor.",
      "Enforce the liquidated tuition balance against the Indian co-guarantor's domestic bank accounts or assets via Order XXXVII CPC.",
    ],
    outcome:
      "Courts uphold actual-loss seat-vacancy claims when backed by counselling closure records, while Indian co-guarantor enforcement bypasses cross-border service delays.",
  },
];

export default function UniversityFeeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector */}
      <div
        role="tablist"
        aria-label="University fee default scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
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
              className={`px-3.5 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/70">
            {current.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
              Institutional Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.bottleneck}
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
              Statutory Enforcement Hook
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.statutoryTrigger}
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-2">
            Registrar &amp; Finance Officer Action Sequence
          </p>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
            {current.actionSteps.map((step, idx) => (
              <li key={idx} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-950/50 border border-emerald-800/60 rounded-xl p-3.5 text-xs sm:text-sm text-emerald-200">
          <strong className="text-emerald-400 uppercase tracking-wider text-[11px] mr-2">
            Recovery Outcome:
          </strong>
          {current.outcome}
        </div>
      </div>
    </div>
  );
}
