"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  riskProfile: string;
  statutoryTrigger: string;
  actionSteps: string[];
  outcome: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "icu-ventilator",
    tabLabel: "1. Active ICU Ventilator",
    badge: "Life-Support Guardrail",
    title: "Nursing Home Defaults on ICU Ventilator Currently Connected to an Admitted Patient",
    riskProfile:
      "Highest clinical & criminal exposure for the lessor. Any unilateral attempt to unplug, power down, or physically remove an active ventilator risks BNS Section 106 (causing death by negligence), NABH/Clinical Establishments Act complaints, and an immediate counter-FIR by the patient's family.",
    statutoryTrigger:
      "7-Day or 14-Day Mandatory Patient-Transfer & Clinical Handover Notice served simultaneously on the Hospital Managing Director, Medical Superintendent, and District Chief Medical Officer (CMO) / Civil Surgeon.",
    actionSteps: [
      "Document zero-interruption clinical stance in writing: explicitly state that the lessor will NOT disconnect active life support.",
      "Grant a strict 7-day (or 14-day) statutory window for the hospital to either clear 100% of overdue rental arrears OR shift the patient to an alternate hospital/in-house ventilator.",
      "Copy the District CMO / Health Authority so the nursing home cannot claim ignorance or blame the lessor for clinical continuity.",
      "Upon expiry of the handover window without payment or patient transfer, move the Commercial/Civil Court under Order XL Rule 1 CPC for a Court Receiver supervised biomedical de-installation.",
    ],
    outcome:
      "Shifts 100% of clinical duty-of-care onto the Medical Superintendent and forces immediate settlement or CMO-monitored equipment release.",
  },
  {
    id: "c-arm-per-case",
    tabLabel: "2. C-Arm / Per-Case OT Gear",
    badge: "OT & Lithotripsy Default",
    title: "Hospital Uses Rented C-Arm, Endoscopy Tower, or Lithotripsy Laser Without Paying Per-Case Fees",
    riskProfile:
      "Tier-2/3 orthopaedic and urology nursing homes frequently collect full surgical packages from patients (₹45,000–₹1.2L per procedure) while under-reporting OT case counts or withholding monthly minimum guarantee (MMG) rentals.",
    statutoryTrigger:
      "Indian Contract Act s.148–161 (Bailment Termination) + Order XXXVII Summary Suit for liquidated MMG arrears + Order XL Rule 1 Receiver for non-life-support OT hardware.",
    actionSteps: [
      "Audit DICOM image timestamps, AERB radiation exposure logs, and laser pulse/shot counters to prove exact OT utilization.",
      "Issue a 7-day Bailment Termination & Arrears Notice demanding both unpaid MMG/per-case fees and scheduled biomedical pick-up between surgeries.",
      "If the hospital is Udyam-registered supplier's debtor, invoke MSMED Act s.15–18 for 3x RBI compound interest on delayed rental invoices.",
      "File an Order XL Rule 1 Receiver application coupled with Order XXXVIII Rule 5 attachment before judgment if the clinic threatens to block OT access.",
    ],
    outcome:
      "Non-life-support diagnostic and surgical units can be lawfully de-installed between scheduled OT lists under Court Receiver or written Medical Superintendent sign-off.",
  },
  {
    id: "aesthetic-laser",
    tabLabel: "3. ₹30L Aesthetic Laser",
    badge: "Clinic & Derm Default",
    title: "Dermatology / Cosmetic Clinic Defaults on ₹30L Diode or Picosecond Laser Lease",
    riskProfile:
      "Zero life-support risk, making this the cleanest asset class for rapid repossession—yet clinics often stall recovery by alleging fabricated 'wavelength calibration defects' or 'cooling handpiece failure' after 4–6 months of unpaid EMIs/rentals.",
    statutoryTrigger:
      "BNS s.316(2) Criminal Breach of Trust (if possession is retained post-termination) + Specific Relief Act s.7–8 + Order XXXVII CPC Summary Suit.",
    actionSteps: [
      "Compile the signed Installation & Commissioning Certificate, service engineer visit logs, and zero-defect WhatsApp acknowledgments under BSA 2023 s.63.",
      "Serve a 7-day Statutory Bailment Termination Notice revoking the clinic's license to operate the laser and fixing a biometric/engineer handover slot.",
      "Pre-empt false defect defenses by attaching the last preventive maintenance (PM) sheet signed by the clinic's doctor.",
      "If the clinic refuses entry or hides the handpiece/chiller unit, escalate to a BNS s.316 FIR with jurisdictional Police Station Email CC and claim daily running hire + ₹30L replacement value.",
    ],
    outcome:
      "Clinics rarely risk a police inquiry or sealed OT/procedure room; most settle arrears or surrender the laser within 10–15 days of a BNS s.316 notice.",
  },
  {
    id: "shifted-or-sold",
    tabLabel: "4. Shifted / Sold Machine",
    badge: "BNS s.316 FIR Track",
    title: "Defaulting Hospital Shifted Leased Ventilator/C-Arm to Sister Branch or Sold It to a Dealer",
    riskProfile:
      "Loss-making nursing homes sometimes shut down overnight, transfer leased ICU monitors or Holter machines to an undisclosed sister clinic in another district, or pledge/sell them to a second-hand medical equipment broker.",
    statutoryTrigger:
      "BNS 2023 s.316(2)/(3) (Criminal Breach of Trust by Bailee) + BNS s.317 (Dishonestly Receiving Stolen Property against the third-party buyer/broker).",
    actionSteps: [
      "Match serial numbers, OEM chassis plates, and hospital-specific asset QR tags against the original Delivery Challan and e-Way Bill.",
      "Serve a formal Criminal Breach of Trust & Bailment Termination Notice with mandatory CC to the jurisdictional Police Station SHO Email.",
      "Put any known second-hand medical dealer on written notice under BNS s.317 so they cannot claim bona fide purchaser status.",
      "File a criminal complaint / FIR under BNS s.316 and seek search-and-seizure recovery of the serial-numbered medical asset alongside a civil replacement-value suit.",
    ],
    outcome:
      "Unauthorized relocation or sale converts a civil rental default into a cognizable criminal offence, enabling police seizure and rapid asset recovery.",
  },
];

export default function MedicalScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Hospital rental default scenarios">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/70">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            IND-20 Clinical-Legal Playbook
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
              Clinical &amp; Commercial Risk
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.riskProfile}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
              Primary Statutory Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.statutoryTrigger}</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-2.5">
            Step-by-Step Creditor Execution Protocol
          </p>
          <ul className="space-y-2">
            {current.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-950/50 border border-emerald-700/50 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
            Expected Operational Outcome
          </p>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">{current.outcome}</p>
        </div>
      </div>
    </div>
  );
}
