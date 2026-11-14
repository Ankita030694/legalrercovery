"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  stumblingBlock: string;
  statutoryExposure: string;
  recoverySOP: string[];
  keyAuthority: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tpa-shift",
    badge: "TPA Payout Pass-Through Excuse",
    title: "Hospital Shifting Cashless TPA Cuts & Delays to Visiting Surgeon",
    stumblingBlock:
      "The hospital finance desk withholds the visiting surgeon's or anesthetist's surgical share (often 60%–70% of the surgical component) for 6 to 12 months, alleging: 'The TPA/insurer has not settled the claim yet' or 'The insurer applied an arbitrary 25% haircut, so we must deduct that from your fee.'",
    statutoryExposure:
      "Under the Indian Contract Act, 1872, the visiting consultant's contract is strictly with the hospital, not the patient's insurance company (Doctrine of Privity). Unless the written retainership explicitly stipulates a 'pay-when-paid' contingency, the hospital's billing and insurance recovery risks cannot be unilaterally transferred to the independent surgeon who performed the operation.",
    recoverySOP: [
      "Extract patient OT registers, surgery logs, and system discharge summaries proving successful completion of the medical procedure.",
      "Review the Consultant Engagement Agreement to confirm absence of any enforceable 'contingent pay-when-paid' clause.",
      "Issue a formal demand highlighting that the hospital billed the patient/TPA in its own commercial capacity and cannot withhold independent professional remuneration.",
      "Serve a 15-day Advocate Legal Notice demanding principal payout plus 18% commercial interest under the Interest Act, 1978.",
    ],
    keyAuthority: "Indian Contract Act, 1872 (Section 73 & Privity Doctrine) & High Court Service Precedents",
  },
  {
    id: "phantom-194j",
    badge: "Form 26AS Phantom Booking",
    title: "TDS Deducted u/s 194J in Income Tax Filings but Actual Cash Withheld",
    stumblingBlock:
      "The hospital credits the doctor's fee in its internal books of accounts, files quarterly TDS returns (Form 26Q), and deducts 10% TDS under Section 194J. The doctor sees ₹15 Lakh to ₹40 Lakh in Form 26AS and Annual Information Statement (AIS) as taxable income, yet the hospital accounts department refuses to release the net bank disbursement.",
    statutoryExposure:
      "A deduction of tax at source under Section 194J followed by an entry in Form 26AS constitutes an unequivocal, signed written admission of debt by the hospital. Under Section 18 of the Limitation Act, 1963, this resets the limitation clock and forms conclusive documentary proof of an admitted liquidated debt for an Order XXXVII CPC Summary Suit.",
    recoverySOP: [
      "Download certified Form 26AS and AIS reports from the Income Tax e-filing portal displaying the hospital's TAN, booking date, and gross credited amount.",
      "Reconcile Form 26AS Section 194J entries against actual bank statements to demonstrate the unpaid net credit differential.",
      "Draft a statutory demand notice attaching the Form 26AS schedule, putting the hospital on notice that withholding net dues while claiming tax deduction constitutes unjust enrichment.",
      "File an Order XXXVII CPC Summary Suit or invoke institutional arbitration where the hospital has zero bona fide defense against its own tax admissions.",
    ],
    keyAuthority: "Section 18 Limitation Act, 1963 & Delhi HC Ruling on TDS Acknowledgment in Form 26AS",
  },
  {
    id: "emergency-ot",
    badge: "No Written HR Contract",
    title: "Emergency On-Call Surgeries & ICU Shifts Withheld for 'Lack of Formal Contract'",
    stumblingBlock:
      "Visiting super-specialists (neurosurgeons, vascular surgeons, pediatric intensivists) summoned for urgent overnight polytrauma or complex surgeries via hospital WhatsApp or call logs perform critical care. Months later, hospital admin delays release of OT shares, claiming 'there is no formal signed HR contract on file.'",
    statutoryExposure:
      "Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person or delivers anything to them, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter is bound to make compensation. The hospital billed the patient for the surgery and cannot retain the proceeds while refusing to pay the operating doctor.",
    recoverySOP: [
      "Secure certified Hospital Management System (HMS) operation theater entry logs, anesthesia charts, and duty rosters.",
      "Preserve WhatsApp and call records from the Medical Superintendent or RMO summoning the doctor for emergency duty under BSA 2023 Section 63.",
      "Issue a structured claim statement calculating the standard institutional surgical tariff for the specialty.",
      "Serve an Advocate Notice invoking Section 70 Contract Act and Section 63 BSA, demonstrating that the hospital unjustly enriched itself on patient billing.",
    ],
    keyAuthority: "Indian Contract Act, 1872 (Section 70 — Non-Gratuitous Act) & BSA 2023 Section 63",
  },
  {
    id: "teleradiology-dispute",
    badge: "Teleradiology / Tele-ICU Rejection",
    title: "Diagnostic Centre or Hospital Defaulting on Monthly Teleradiology Invoices",
    stumblingBlock:
      "Teleradiology reporting doctors or remote ICU intensivist networks delivering 300 to 1,000+ CT, MRI, and X-ray reads per month face sudden invoice freezes. The diagnostic chain or hospital cites retrospective 'disputed turnaround times' or 'scan quality disagreements' months after issuing patient reports and collecting full diagnostic fees.",
    statutoryExposure:
      "Under the Commercial Courts Act, 2015, diagnostic service agreements and tele-healthcare vendor contracts constitute commercial disputes under Section 2(1)(c). Retrospective rejection of diagnostic reports that were already clinically acted upon and delivered to patients is legally unsustainable and barred by the doctrine of estoppel.",
    recoverySOP: [
      "Export certified PACS (Picture Archiving and Communication System) audit trails and reporting logs with cryptographic digital timestamps.",
      "Collate monthly tax invoices raised alongside corresponding DICOM study UID confirmations and delivery receipts.",
      "Serve an Advocate Legal Notice demanding payment within 15 days, pre-empting frivolous post-facto quality allegations.",
      "Initiate Pre-Institution Mediation under Section 12A of the Commercial Courts Act or invoke arbitration under the service contract.",
    ],
    keyAuthority: "Commercial Courts Act, 2015 (Section 2(1)(c)) & Information Technology Act, 2000 (Section 10A)",
  },
];

export default function VisitingDoctorScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`p-3 rounded-xl text-left transition-all duration-150 border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-600/30"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                  isActive ? "bg-[#DC2626] text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {scenario.badge}
              </span>
              <p
                className={`text-xs font-bold line-clamp-2 leading-snug ${
                  isActive ? "text-white" : "text-slate-800"
                }`}
              >
                {scenario.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Key Authority: {activeScenario.keyAuthority}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">
              Hospital Operational Barrier
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-800 mb-1">
              Statutory Exposure &amp; Doctor Rights
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.statutoryExposure}
            </p>
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
            Prescribed Creditor-Side Recovery Action Plan:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.recoverySOP.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-lg p-3"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
