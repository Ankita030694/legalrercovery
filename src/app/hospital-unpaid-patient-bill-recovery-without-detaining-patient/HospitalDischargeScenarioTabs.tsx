"use client";

import React, { useState } from "react";

interface HospitalScenario {
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

const HOSPITAL_SCENARIOS: HospitalScenario[] = [
  {
    id: "emergency-icu-uninsured",
    tabLabel: "Emergency / ICU Bill",
    ticketBand: "₹1.5L – ₹18L Uninsured Critical Care",
    title: "Emergency Trauma or Uninsured ICU Admission Ends With Unpaid Balance at Discharge",
    failureMechanism:
      "Under Supreme Court and High Court mandates, emergency stabilization cannot be refused for lack of advance deposit, and the stabilized patient cannot be detained at discharge for unpaid ICU, ventilator, or pharmacy charges.",
    lawfulProtocol: "Co-Guarantor Discharge Undertaking + Demand Promissory Note + 15-Day Civil Notice",
    statutoryHooks:
      "Article 21 Constitution of India; Section 126 & 128 Indian Contract Act, 1872 (Attendant Surety); Section 73 Contract Act; Order XXXVII CPC (Summary Suit on Written Undertaking).",
    executionSteps: [
      {
        step: "At Admission / Stabilization: Execute Attendant Co-Obligor Form",
        detail:
          "Obtain Aadhaar/PAN KYC of the primary next-of-kin or attendant signing the admission form, incorporating an explicit co-extensive surety clause under Section 128 of the Contract Act.",
      },
      {
        step: "At Discharge: Release Patient Unconditionally Against Itemized Sign-Off",
        detail:
          "Hand over the discharge summary and patient without delay. Obtain signature on the final itemized bill acknowledgment and a stamped Discharge Undertaking / Demand Promissory Note specifying the 15-day or EMI repayment schedule.",
      },
      {
        step: "Day 16 Post-Default: Dispatch Tri-Channel Advocate Notice",
        detail:
          "Serve a formal 15-day civil recovery notice jointly on the patient and attendant co-guarantor via Email, WhatsApp, and Speed Post RPAD, warning of Order XXXVII Summary Suit and CIBIL/legal cost recovery.",
      },
    ],
    recoveryLeverage: "High Pre-Suit Cure: Attendant co-guarantors settle rapidly once personally impleaded.",
  },
  {
    id: "lama-dama-walkout",
    tabLabel: "LAMA / DAMA Walkout",
    ticketBand: "₹45,000 – ₹6L Mid-Treatment Exit",
    title: "Patient or Family Opts for LAMA/DAMA Mid-Stay to Avoid Mounting Bed & Procedure Charges",
    failureMechanism:
      "Families sensing a rising ICU or surgical bill abruptly demand 'Left Against Medical Advice' (LAMA) or 'Discharge Against Medical Advice' (DAMA), refuse to clear interim pharmacy/implant bills, and threaten police complaints if the billing desk asks for settlement.",
    lawfulProtocol: "Dual LAMA Medico-Legal Consent + Interim Bill Admission + Summary Recovery",
    statutoryHooks:
      "Section 70 Indian Contract Act (Obligation to pay for non-gratuitous medical services); Section 73 Contract Act; BSA 2023 s.63 (CCTV & HMS digital billing logs).",
    executionSteps: [
      {
        step: "Record Unconditional LAMA Consent & Clinical Handover",
        detail:
          "Document the treating doctor's clinical risk explanation and unconditional release on the LAMA form so no allegation of wrongful confinement or medical coercion can be raised.",
      },
      {
        step: "Separate Clinical Release From Financial Ledger Sign-Off",
        detail:
          "Present the itemized interim bill (consumables, OT, ICU days, implants with batch stickers) for acknowledgment. If the attendant refuses to sign the undertaking, record 'Refused to sign financial undertaking; patient released freely' with two staff witnesses.",
      },
      {
        step: "Invoke Section 70 Quantum Meruit + Advocate Demand Notice",
        detail:
          "Even without a signed promissory note, services rendered non-gratuitously are recoverable under Section 70 of the Contract Act backed by HMS logs, consent forms, and BSA s.63 certificates.",
      },
    ],
    recoveryLeverage: "Zero Detention Exposure: Separates medico-legal safety from civil debt enforcement.",
  },
  {
    id: "mortal-remains-release",
    tabLabel: "Mortal Remains / Death",
    ticketBand: "₹2L – ₹25L Prolonged ICU Mortality",
    title: "Patient Passes Away After Prolonged ICU Care and Family Refuses Pending Hospital Dues",
    failureMechanism:
      "Bombay, Delhi, and Madras High Courts strictly prohibit withholding mortal remains or delaying death certificates over unpaid bills—any hesitation at the mortuary invites immediate FIRs, media backlash, and Clinical Establishments Act penalties.",
    lawfulProtocol: "Immediate Dignified Release + Legal Heir / Co-Guarantor Civil Notice",
    statutoryHooks:
      "Article 21 Right to Dignity of the Dead; BNS Wrongful Restraint safeguards; Section 128 Contract Act (Living Attendant Co-Guarantor); Section 2(11) & Order XXII CPC (Legal Representatives liable to extent of estate).",
    executionSteps: [
      {
        step: "Release Mortal Remains & Death Summary Immediately",
        detail:
          "Issue the Medical Certificate of Cause of Death (MCCD) and release the body with full dignity without making payment a pre-condition.",
      },
      {
        step: "Enforce Against the Living Attendant Co-Guarantor",
        detail:
          "Because the admission contract was co-signed by a living attendant/relative as a primary co-obligor and surety under Section 128, the hospital does not have to wait for probate or estate administration.",
      },
      {
        step: "Serve Dignified 15-Day Advocate Notice After Bereavement Window",
        detail:
          "Wait 10–14 days post-cremation before serving a respectful, factual 15-day demand notice enclosing the itemized ICU ledger, consumable invoices, and signed admission guarantee.",
      },
    ],
    recoveryLeverage: "Reputation-Safe Recovery: Protects hospital brand while enforcing living surety liability.",
  },
  {
    id: "discharge-cheque-bounce",
    tabLabel: "Discharge Cheque Bounce",
    ticketBand: "₹50,000 – ₹15L Stop-Payment Default",
    title: "Attendant Issues Post-Dated Cheque at Discharge, Then Instructs Bank to 'Stop Payment'",
    failureMechanism:
      "To secure smooth discharge, a relative hands over a cheque for the ₹2L–₹10L balance, then immediately issues a 'Stop Payment' instruction claiming the cheque was taken under duress or coercion at the hospital counter.",
    lawfulProtocol: "30-Day Section 138 NI Act Statutory Notice + ICDS v. Beena Shabeer Precedent",
    statutoryHooks:
      "Sections 138 & 142 Negotiable Instruments Act, 1881; Section 139 NI Act (Statutory presumption of debt); Supreme Court in ICDS Ltd. v. Beena Shabeer (2002) 6 SCC 426 (Guarantor/third-party cheques enforceable).",
    executionSteps: [
      {
        step: "Preserve Voluntary Handover Proof at Discharge",
        detail:
          "Attach the signed Discharge Undertaking recording that the patient was cleared for release and the attendant voluntarily tendered the cheque toward the admitted itemized bill.",
      },
      {
        step: "Serve Section 138 Demand Notice Within 30 Days of Return Memo",
        detail:
          "Strictly within 30 days of receiving the bank's cheque return memo ('Payment Stopped by Drawer' or 'Funds Insufficient'), dispatch a 15-day statutory demand notice via Speed Post RPAD and email.",
      },
      {
        step: "File Section 138 Criminal Complaint Within 30 Days Post-Cure",
        detail:
          "If unpaid after 15 days of receipt, file a Magistrate complaint under Section 138 NI Act and seek 20% interim compensation under Section 143A.",
      },
    ],
    recoveryLeverage: "Criminal Accountability: 'Stop payment' by a relative triggers Section 138 prosecution.",
  },
];

export default function HospitalDischargeScenarioTabs() {
  const [activeTab, setActiveTab] = useState(HOSPITAL_SCENARIOS[0].id);
  const currentScenario =
    HOSPITAL_SCENARIOS.find((s) => s.id === activeTab) || HOSPITAL_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Hospital Discharge &amp; ICU Billing Playbook
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          How Hospital Billing Desks Recover 4 High-Risk Unpaid Discharge Scenarios
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select a clinical-billing failure mode below to review the Article-21 safe release SOP,
          contractual hooks, and post-discharge enforcement sequence.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3">
        {HOSPITAL_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
            {currentScenario.ticketBand}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            {currentScenario.recoveryLeverage}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
          {currentScenario.title}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">
              Operational &amp; Legal Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentScenario.failureMechanism}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
              Lawful Post-Discharge Protocol
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
              {currentScenario.lawfulProtocol}
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Statutes:</strong> {currentScenario.statutoryHooks}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Step-by-Step Billing &amp; Legal Execution
          </p>
          {currentScenario.executionSteps.map((item, idx) => (
            <div
              key={item.step}
              className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
            >
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
