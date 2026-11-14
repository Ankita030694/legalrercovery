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
    id: "third-party-relative-stop-payment",
    badge: "Third-Party Attendant Cheque Default",
    title: "Relative or Attendant Issues Cheque at 9:30 PM Discharge & Immediately Slaps 'Stop Payment' at 9:00 AM",
    stumblingBlock:
      "A patient's brother-in-law, son, or business associate issues a signed cheque at the hospital billing desk late in the evening to clear an outstanding ₹4.8 Lakh ICU/OT invoice and obtain discharge clearance. The following morning at 9:00 AM, the drawer instructs their bank to 'Stop Payment' and claims in reply: 'I was never the patient, I received no medical treatment, and I possess no personal legal debt to the hospital.'",
    statutoryExposure:
      "The Supreme Court of India in ICDS Ltd. v. Beena Shabeer & Anr. (2002) 6 SCC 426 held that the statutory phrase 'for the discharge, in whole or in part, of any debt or other liability' in Section 138 of the Negotiable Instruments Act, 1881 is not restricted to the personal liability of the drawer. A cheque issued by a guarantor, family member, or third-party to discharge the medical debt of an admitted inpatient is 100% criminally prosecutable. Furthermore, under Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232, a 'Stop Payment' memo carries the exact penal consequences of an 'Insufficient Funds' dishonour.",
    recoverySOP: [
      "Secure the Bank Return Memo immediately with the official bank endorsement 'Payment Stopped by Drawer' or 'Refer to Drawer'.",
      "Collate the Inpatient Dossier: Signed Inpatient Admission Form, Voluntary Financial Guarantor Undertaking, Itemized Final Hospital Bill, and Discharge Summary countersigned by the attendant.",
      "Issue a formal Section 138 Statutory Demand Notice via Speed Post RPAD and Email/WhatsApp within strict 30 days of receiving the bank memo.",
      "Specifically plead the Supreme Court ruling in ICDS Ltd. v. Beena Shabeer in the notice to eliminate the frivolous third-party debt defense upfront.",
      "Upon expiry of the 15-day notice window, file the Section 138 Criminal Complaint before the Judicial Magistrate with an application under Section 143A for 20% interim deposit.",
    ],
    keyAuthority: "NI Act s.138, s.139 & Supreme Court in ICDS Ltd. v. Beena Shabeer (2002) 6 SCC 426",
  },
  {
    id: "duress-coercion-detention-defense",
    badge: "The Hospital Coercion & Duress Defense",
    title: "Drawer Claims Hospital 'Coerced' Signature or 'Unlawfully Detained' Patient Under Article 21",
    stumblingBlock:
      "In response to the Section 138 legal notice, the drawer's counsel alleges that the hospital billing counter held the patient hostage, refused to disconnect life-saving equipment or sign the discharge slip, and extracted the cheque under extortion and duress. The debtor threatens counter-complaints under BNS Section 127 (wrongful confinement) and medical council complaints to intimidate hospital management into waiving the bill.",
    statutoryExposure:
      "Under Section 139 of the Negotiable Instruments Act, 1881 read with the Supreme Court benchmark in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197, once the drawer admits their signature on the cheque, the law mandates a statutory presumption of consideration and liability. General allegations of duress cannot rebut this presumption without immediate, contemporaneous police complaints or protest letters lodged on the date of discharge. When the hospital demonstrates a standard 'Voluntary Discharge Clearance & Debt Acknowledgment' signed without protest, courts dismiss the duress plea as an afterthought.",
    recoverySOP: [
      "Review the billing counter CCTV audit log and timestamped discharge logs showing the patient and attendant departing peacefully.",
      "Verify that the hospital's 'Discharge & Undertaking Certificate' explicitly records: 'Patient released in stable condition; cheque issued voluntarily toward settled inpatient charges without protest or coercion.'",
      "Draft a structured Rejoinder / Complaint highlighting the absence of any contemporaneous police FIR or written protest by the drawer prior to the cheque dishonour.",
      "File an Order XXXVII CPC Summary Suit in parallel before the Commercial / Civil Court; under the Indian Contract Act, mere plea of duress without substantiation requires 100% pre-deposit before leave to defend is granted.",
    ],
    keyAuthority: "NI Act s.139, BSA s.63 & Supreme Court in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197",
  },
  {
    id: "tpa-co-pay-short-settlement-default",
    badge: "TPA Co-Pay & Short-Settlement Cheque",
    title: "Attendant Post-Dated Cheque for Cashless Insurance Shortfall Bounces After TPA Disallows Claim",
    stumblingBlock:
      "A patient undergoes emergency coronary angioplasty or polytrauma surgery under a cashless health insurance policy. The Third Party Administrator (TPA) issues an initial query and sanctions only ₹3.5 Lakh against a total bill of ₹7.2 Lakh. To facilitate discharge on a Sunday, the patient's family issues a post-dated cheque for the unapproved ₹3.7 Lakh shortfall with an agreement that it will be deposited if the insurer denies final settlement. The insurer repudiates the shortfall; the hospital deposits the cheque, and it dishonours.",
    statutoryExposure:
      "The Supreme Court in Sripati Singh v. State of Jharkhand & Anr. (2021) SCC OnLine SC 1002 settled that a cheque issued as security or conditional payment matures into an actionable, legally enforceable debt under Section 138 the moment the agreed contingency or default occurs. The patient's insurance contract is strictly between the policyholder and the insurer; the hospital is an independent service provider whose right to full payment is governed by the Admission Undertaking.",
    recoverySOP: [
      "Extract the signed 'Cashless Admission & Insurance Shortfall Undertaking' wherein the patient and attendant jointly agreed to bear all disallowances and non-payable expenses.",
      "Attach the TPA Final Claim Denial / Deduction Letter establishing that the insurer refused the balance liability.",
      "Send a 48-hour administrative payment reminder before presenting the post-dated cheque to provide formal opportunity to cure.",
      "Upon dishonour, issue the Section 138 Statutory Notice within 30 days citing Sripati Singh and demanding immediate RTGS/NEFT settlement.",
    ],
    keyAuthority: "Supreme Court in Sripati Singh v. State of Jharkhand (2021) & Sunil Todi v. State of Gujarat (2021)",
  },
  {
    id: "mortal-remains-mortuary-release-stop-payment",
    badge: "End-of-Life Dues & Mortal Remains",
    title: "Attendant Cheque Issued for Terminal ICU Bill Stopped Immediately After Mortal Remains Are Released",
    stumblingBlock:
      "Following the unfortunate demise of a patient after prolonged ICU ventilator care, the outstanding hospital dues stand at ₹5.5 Lakh. To secure clearance, an authorized relative issues a cheque and executes an indemnity bond. Immediately upon receiving the death certificate and mortal remains, the drawer stops payment, weaponizing public sentiment and alleging the hospital detained the body for money.",
    statutoryExposure:
      "Under Supreme Court and High Court constitutional jurisprudence, detaining a deceased body for unpaid bills is unlawful under Article 21. However, hospitals that voluntarily release mortal remains alongside a properly executed Debt Acknowledgment & Third-Party Cheque retain full civil and criminal remedies. The drawer of the cheque is personally liable under Section 138 NI Act, entirely independent of the patient's demise or estate distribution.",
    recoverySOP: [
      "Ensure the hospital protocol strictly bifurcates clinical release of the deceased body from financial settlement, proving zero detention occurred.",
      "Obtain an executed 'Third-Party Indemnity & Voluntary Cheque Undertaking' signed by the drawer in the presence of two witnesses prior to body release.",
      "Upon stop-payment, serve a sensitive yet legally uncompromising Section 138 Notice through legal counsel, emphasizing the drawer's independent statutory promise.",
      "Initiate Section 138 NI Act proceedings in the jurisdictional magistrate court, accompanied by a civil recovery suit against the deceased's legal heirs and estate.",
    ],
    keyAuthority: "NI Act s.138, Indian Contract Act s.126 & Order XXXVII Rule 1 CPC",
  },
];

export default function PatientChequeBounceScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Header */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/70 p-2 gap-1.5">
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex-1 min-w-[200px] cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              <span
                className={`block text-[10px] uppercase tracking-wider mb-0.5 ${
                  isSelected ? "text-white/80" : "text-slate-400"
                }`}
              >
                {item.badge}
              </span>
              <span className="truncate block">{item.title.split(":")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Scenario Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
            {currentScenario.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        {/* Commercial & Operational Bottleneck */}
        <div className="bg-amber-50/60 rounded-xl p-4 sm:p-5 border border-amber-200/80">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Discharge Desk Failure Mode &amp; Debtor Tactic
          </h4>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-normal">
            {currentScenario.stumblingBlock}
          </p>
        </div>

        {/* Statutory Hook & Legal Protection */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Hospital Creditor Statutory Hook &amp; Judicial Shield
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            {currentScenario.statutoryExposure}
          </p>
        </div>

        {/* Actionable SOP Rail */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Standard Operating Recovery SOP (Hospital Legal &amp; Billing Protocol)
          </h4>
          <ol className="space-y-2.5">
            {currentScenario.recoverySOP.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Authority Citation Banner */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Governing Statute / Landmark Authority:</span>
          <span className="font-mono text-[11px] text-[#DC2626] font-bold">
            {currentScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
