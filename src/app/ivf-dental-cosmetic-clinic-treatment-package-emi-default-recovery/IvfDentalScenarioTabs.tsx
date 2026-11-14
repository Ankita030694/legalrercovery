"use client";

import React, { useState } from "react";

interface SpecialtyScenario {
  id: string;
  tabLabel: string;
  ticketBand: string;
  title: string;
  failureMechanism: string;
  lawfulProtocol: string;
  statutoryHooks: string;
  executionSteps: {
    step: string;
    detail: string;
  }[];
  recoveryLeverage: string;
}

const SPECIALTY_SCENARIOS: SpecialtyScenario[] = [
  {
    id: "ivf-cycle-milestone",
    tabLabel: "IVF Cycle Package",
    ticketBand: "₹1.5L – ₹4.5L Multi-Milestone IVF Cycle",
    title: "Embryo Transfer Completed; Patient Cancels 3rd Milestone or Stops e-NACH on Negative Outcome",
    failureMechanism:
      "Patients enrolling in IVF packages pay the initial stimulation deposit (e.g., 40%) and egg retrieval milestone (30%), but when the post-embryo transfer beta-hCG is negative or requires another frozen embryo transfer (FET), they unilaterally stop the final 30% milestone cheque or cancel their e-NACH mandate, falsely asserting 'guaranteed baby' claims.",
    lawfulProtocol: "Assisted Reproductive Technology (ART) Act s.21 Consent + Contract Act s.73 Milestone Notice",
    statutoryHooks:
      "ART (Regulation) Act, 2021 Section 21 & Rules 2022 (explicit prohibition of guaranteeing pregnancy outcomes); Indian Contract Act, 1872 Section 73 (liquidated damages for breached milestone schedule); PSS Act 2007 Section 25 (e-NACH bounce prosecution); NI Act Section 138.",
    executionSteps: [
      {
        step: "Pre-Treatment Gate: ART Act Form 1 Informed Consent & Milestone Schedule",
        detail:
          "Ensure signed ART Form 1 explicitly declares that medical fees cover clinical procedures, embryology consumables, and cryopreservation—independent of clinical pregnancy or live birth outcomes. Bind both spouses as joint and several co-obligors under Contract Act s.128.",
      },
      {
        step: "Day 1 of Default: Freeze Non-Emergency Biological Services & Issue Clinical Audit",
        detail:
          "Immediately record electronic audit trail of follicular monitoring, egg pick-up (OPU) embryology records, and embryo grading sheets under BSA 2023 s.63. Notify patient in writing that lab storage continues under statutory custody while milestone dues remain payable.",
      },
      {
        step: "Day 7 Post-Default: Dispatch Tri-Channel Advocate Notice (Email + WhatsApp + RPAD)",
        detail:
          "Serve a 15-day statutory demand citing ART Act non-guarantee disclosures and Section 73 Contract Act, warning of Section 25 PSS Act / Section 138 NI Act prosecution against both spouses.",
      },
    ],
    recoveryLeverage: "Very High Pre-Suit Settlement: ART consent documentation disproves 'guaranteed outcome' defenses immediately.",
  },
  {
    id: "dental-aligner-ortho",
    tabLabel: "Dental Clear Aligners",
    ticketBand: "₹85,000 – ₹2.5L Custom Fabricated Aligners",
    title: "Patient Receives Complete Custom Aligner Batch Upfront, Then Stops Paying Quarterly EMIs",
    failureMechanism:
      "In clear aligner treatments (Invisalign, toothsi/makeO, in-house CAD/CAM), the clinic incurs 60–80% upfront laboratory fabrication and 3D printing costs for all 20–40 stages at Day 1. The patient accepts the aligner box, wears the first 6–8 trays, and then stops paying monthly/quarterly EMIs, claiming they 'lost motivation' or 'it is taking too long.'",
    lawfulProtocol: "Bespoke Goods Contract Doctrine + Order XXXVII CPC Summary Suit on In-House EMI Note",
    statutoryHooks:
      "Sale of Goods Act, 1930 Section 16 & Contract Act Section 73 (customized non-resalable medical goods fabricated exclusively for patient's dental anatomy); Demand Promissory Note under NI Act s.4; Order XXXVII CPC.",
    executionSteps: [
      {
        step: "Onboarding: Custom Manufacturing Agreement & Stamped Promissory Note",
        detail:
          "Have the patient sign an agreement specifying that aligner trays are custom-milled medical appliances with zero salvage or resale value. Secure a stamped Demand Promissory Note for the full package value with an EMI schedule.",
      },
      {
        step: "On Default: Suspend Digital Check-Ins & Trigger Accelerated Debt Clause",
        detail:
          "Under the terms of the signed agreement, failure to pay any single installment accelerates the entire remaining treatment balance. Send formal clinical notification that remote orthodontic monitoring is paused until dues are cleared.",
      },
      {
        step: "15-Day Advocate Notice & CIBIL/Legal Notice Dispatch",
        detail:
          "Issue a formal legal notice demanding the full accelerated balance plus 18% p.a. commercial interest, noting that the clinic has fully performed its upfront manufacturing obligations.",
      },
    ],
    recoveryLeverage: "Rapid Cure: Patients cannot re-order lost trays or obtain refinement scans from another dentist without NOC and clearing dues.",
  },
  {
    id: "implant-full-mouth",
    tabLabel: "Implants & Full-Mouth Rehab",
    ticketBand: "₹1.2L – ₹6L Surgical Dental Procedures",
    title: "Patient Issues Post-Dated Cheques for Stage 2 Prosthetics, Then Instructs 'Stop Payment'",
    failureMechanism:
      "Full-mouth dental rehabilitation and surgical implant placements involve multi-stage execution (Stage 1: surgical fixtures & bone grafting; Stage 2: osseointegration & abutments; Stage 3: permanent zirconia crowns). Patients frequently issue post-dated cheques (PDCs) for Stage 2/3, receive permanent cementation, and immediately issue 'Stop Payment' to the bank.",
    lawfulProtocol: "NI Act Section 138 Criminal Prosecution + Section 143A Interim Compensation",
    statutoryHooks:
      "Negotiable Instruments Act, 1881 Section 138, 139 (presumption of legally enforceable debt) & Section 143A (20% court-ordered interim deposit); Modi Cements v. Kuchil Kumar Nandi (stop payment attracts s.138).",
    executionSteps: [
      {
        step: "Cheque Dishonour: Collect Bank Return Memo & Verify 30-Day Clock",
        detail:
          "Secure original cheque return memo with reason 'Payment Stopped by Drawer' or 'Insufficient Funds.' Note exact return date to preserve the non-negotiable 30-day statutory notice limitation.",
      },
      {
        step: "Within 30 Days: Serve Advocate Demand Notice Under Section 138(b)",
        detail:
          "Dispatch statutory demand notice via Registered Speed Post RPAD and email/WhatsApp. Clearly separate the exact cheque amount from ancillary clinical charges to comply with the Suman Sethi doctrine.",
      },
      {
        step: "Day 16 Post-Receipt: File Section 138 Criminal Complaint Before Judicial Magistrate",
        detail:
          "If unpaid within 15 days of notice delivery, file criminal complaint within 30 days. Petition court for Section 143A interim compensation requiring the patient to deposit 20% of the cheque amount upfront.",
      },
    ],
    recoveryLeverage: "Maximum Criminal Leverage: Section 138 carries up to 2 years imprisonment and double cheque amount fine, ending bad-faith stop payments.",
  },
  {
    id: "cosmetic-review-blackmail",
    tabLabel: "Cosmetic & Hair Transplant",
    ticketBand: "₹65,000 – ₹5L Elective Aesthetic Surgeries",
    title: "Patient Demands Waiver of Balance Fee, Threatening Fake Negligence Videos & 1-Star Google Reviews",
    failureMechanism:
      "Following hair transplantation, rhinoplasty, gynecomastia, or liposuction, patients who signed clear aesthetic outcome disclaimers attempt to evade the final 30–50% bill by blackmailing the surgeon: 'Cancel my pending bill and refund my advance, or I will post 1-star reviews and videos alleging botched surgery on Google Maps, Instagram, and Reddit!'",
    lawfulProtocol: "Jacob Mathew Medical Negligence Shield + BNS s.308 (Extortion) & s.356 (Defamation) Legal Notice",
    statutoryHooks:
      "Jacob Mathew v. State of Punjab (2005 6 SCC 1) & Martin F. D'Souza v. Mohd. Ishfaq (doctor cannot be prosecuted or held negligent without independent expert medical board finding); BNS 2023 Section 308 (Extortion) & Section 356 (Defamation); IT Act Section 66A/79.",
    executionSteps: [
      {
        step: "Evidence Preservation: Archive All Threats & Pre/Post-Op Photographic Logs",
        detail:
          "Capture unedited screenshots and audio recordings of WhatsApp messages, phone calls, or social media DMs where the patient ties review threats to financial waivers. Export standardized high-res pre-op, intra-op, and post-op clinical photos under BSA 2023 s.63.",
      },
      {
        step: "Immediate Dual-Action Rebuttal: Advocate Legal Notice + Cease & Desist",
        detail:
          "Serve a stern legal notice stating: (1) Medical negligence requires Bolam/Jacob Mathew test; (2) Demanding financial waiver under threat of public defamation constitutes criminal extortion under BNS s.308; (3) Demanding ₹10L–₹50L in civil defamation damages if any defamatory post is published.",
      },
      {
        step: "Intermediary Takedown & Police Complaint Execution",
        detail:
          "If the patient posts defamatory content, immediately submit Google Business Profile and Meta legal removal requests attaching the extortion notice, and register a formal cyber-cell police complaint.",
      },
    ],
    recoveryLeverage: "Total Defense Inversion: Converts patient's blackmail attempt into criminal extortion exposure, compelling prompt settlement of clinic dues.",
  },
];

export default function IvfDentalScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SPECIALTY_SCENARIOS[0].id);
  const currentScenario =
    SPECIALTY_SCENARIOS.find((s) => s.id === activeTab) || SPECIALTY_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-7 shadow-sm">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SPECIALTY_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="mt-5 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
              {currentScenario.ticketBand}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 mt-2">
              {currentScenario.title}
            </h3>
          </div>
        </div>

        {/* Failure Mechanism vs Lawful Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 text-xs sm:text-sm">
            <span className="block font-bold text-[#DC2626] uppercase tracking-wider text-[11px] mb-1">
              Patient Default Mechanism &amp; Pressure Tactics
            </span>
            <p className="text-slate-700 leading-relaxed">
              {currentScenario.failureMechanism}
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm">
            <span className="block font-bold text-emerald-800 uppercase tracking-wider text-[11px] mb-1">
              Lawful Clinic Recovery Protocol
            </span>
            <p className="text-slate-800 font-medium leading-relaxed mb-2">
              {currentScenario.lawfulProtocol}
            </p>
            <p className="text-[11px] text-slate-600">
              <strong>Statutory Hooks:</strong> {currentScenario.statutoryHooks}
            </p>
          </div>
        </div>

        {/* 3 Step Action Blueprint */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            Operational 3-Step Legal Execution SOP
          </span>
          <div className="space-y-3">
            {currentScenario.executionSteps.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-slate-900">{item.step}</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Leverage Box */}
        <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#DC2626] text-white flex items-center justify-center font-black shrink-0 text-sm">
            &check;
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-red-300 uppercase tracking-wide text-[11px] block">
              Creditor Strategic Advantage
            </span>
            <p className="text-slate-200 mt-0.5 font-medium">{currentScenario.recoveryLeverage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
