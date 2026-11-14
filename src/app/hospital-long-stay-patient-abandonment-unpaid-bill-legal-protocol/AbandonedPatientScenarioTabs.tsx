"use client";

import React, { useState } from "react";

interface AbandonmentScenario {
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

const ABANDONMENT_SCENARIOS: AbandonmentScenario[] = [
  {
    id: "elderly-stroke-dementia",
    tabLabel: "Elderly ICU / Stroke",
    ticketBand: "₹12L – ₹28L Accrued HDU/ICU Dues",
    title: "Elderly Stroke or Dementia Patient Medically Fit for Discharge; Children Disappear and Stop Paying",
    failureMechanism:
      "A 72-year-old patient with an acute ischemic stroke stabilizes after 14 days in ICU. The treating neurologist certifies medical stability and advises step-down home care or rehabilitation. The children, facing an accrued bill of ₹16 Lakh, stop visiting, switch off registered mobile numbers, and refuse to receive the patient, knowing private hospitals cannot legally evict a senior citizen onto the road.",
    lawfulProtocol:
      "Internal Medical Board Certification + Section 24 Senior Citizens Act Criminal Intimation + DM/SDM Custodial Application + Civil Order XXXVII Suit on Earning Children",
    statutoryHooks:
      "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (Sections 4, 23 & 24); Indian Contract Act, 1872 (Section 128 Guarantor Suretyship); Order XXXVII CPC; BNS Section 105 & 106 immunity through administrative handover.",
    executionSteps: [
      {
        step: "Step 1: Convene Hospital Medical Board & Record Clinical Discharge Clearance",
        detail:
          "The Medical Superintendent, Neurologist, and Medico-Legal Officer execute a joint clinical board certificate documenting hemodynamic stability, independence from invasive ventilation, and suitability for step-down care. This defeats future medical negligence allegations.",
      },
      {
        step: "Step 2: Dispatch Dual Statutory Notice to Children & Local Police Station",
        detail:
          "Serve a 7-day final handover notice by Speed Post RPAD and email to all known adult children. Simultaneously file a Sanha / General Diary entry at the local police station intimating abandonment under Section 24 of the Senior Citizens Act, requesting police tracing of kin.",
      },
      {
        step: "Step 3: Formal Petition to District Magistrate (DM/SDM) & CMO for Transfer",
        detail:
          "Petition the District Magistrate and Chief Medical Officer (CMO) citing the Senior Citizens Act and Clinical Establishments guidelines, requesting transfer of custody to a Government Geriatric Ward or state-run old age home under police escort.",
      },
      {
        step: "Step 4: Summary Recovery Suit Against Earning Children / Admission Guarantor",
        detail:
          "Initiate an Order XXXVII CPC Summary Suit against the son/daughter who signed the admission co-guarantor undertaking, impleading the patient's ancestral/movable estate under Section 4 and Section 23 of the Senior Citizens Act.",
      },
    ],
    recoveryLeverage:
      "Maximum Criminal & Reputational Pressure: Section 24 penal sanction (imprisonment) and DM summons compel immediate relative appearance and settlement.",
  },
  {
    id: "neuro-tracheostomy-coma",
    tabLabel: "Tracheostomy / Neuro",
    ticketBand: "₹18L – ₹35L Long-Term Bed Occupancy",
    title: "Post-Craniotomy or Prolonged Coma Patient on Tracheostomy; Relatives Abandon Bed for Months",
    failureMechanism:
      "Following road trauma or intracranial hemorrhage surgery, the patient remains in a vegetative state or on tracheostomy with T-piece support. Hospital bills surpass ₹22 Lakh. Kin realize long-term palliative care is catastrophic financially, abandon visiting hours, and refuse all phone communications, effectively using the private ICU as an indefinite hospice at hospital expense.",
    lawfulProtocol:
      "CMO Medical Board Referral + State Medical College Inter-Hospital Safe Transfer + Order XXXVII CPC & Quantum Meruit Civil Enforcement",
    statutoryHooks:
      "Clinical Establishments (Registration and Regulation) Act, 2010 (Emergency stabilization fulfilled); Section 70 Indian Contract Act (Quantum Meruit for non-gratuitous care); CPC Order XXXVII; High Court writ jurisprudence on bed rationing in tertiary healthcare.",
    executionSteps: [
      {
        step: "Step 1: Document Plateaued Clinical Status & Bed-Blocking Record",
        detail:
          "Compile a 60-day nursing and consultant clinical dossier establishing that active tertiary interventions have concluded and only supportive palliative nursing is ongoing, while critical ICU beds are denied to incoming emergency cases.",
      },
      {
        step: "Step 2: Formal Requisition to Director of Health Services (DHS) / CMO",
        detail:
          "Issue a formal administrative intimation to the CMO and DHS requesting allocation of a chronic long-stay ventilator/tracheostomy bed in a Government Medical College hospital, citing tertiary capacity exhaustion.",
      },
      {
        step: "Step 3: Protocolized Inter-Hospital Transfer in Advance Life Support (ALS) Ambulance",
        detail:
          "Execute the transfer strictly with an ACLS-certified medical officer, emergency nurse, continuous monitoring, and complete attested medical records handed over against written receiving to the Govt Medical Superintendent.",
      },
      {
        step: "Step 4: Freeze Attendant's Assets via Civil Injunction & Recovery Suit",
        detail:
          "Institute a civil recovery suit with Order XXXVIII Rule 5 CPC attachment before judgment against the bank accounts and properties of the family member who signed the admission agreement.",
      },
    ],
    recoveryLeverage:
      "Stops ₹25,000/Day Unfunded Cash Drain: Inter-hospital transfer liberates critical ICU infrastructure while preserving 100% legal enforceability of accrued bills.",
  },
  {
    id: "trauma-false-kyc-walkout",
    tabLabel: "Trauma / False KYC",
    ticketBand: "₹4L – ₹14L Emergency Trauma Deficit",
    title: "Emergency Trauma / Accident Victim Admitted by Bystander or Friend with False Identity Details",
    failureMechanism:
      "A grievously injured accident victim is admitted in the dead of night. The admitting companion provides a fake phone number and forged or incomplete Aadhaar photocopy, deposits a minimal initial token, and slips away before the patient is shifted from OT to ICU. The patient survives extensive orthopedic/neuro stabilization but lacks cognitive ability or funds to clear the ₹8.5 Lakh ledger.",
    lawfulProtocol:
      "Mandatory MLC Registration + Police Tracing Requisition + UIDAI Biometric Verification + State Victim Compensation Scheme / Motor Accident Claims Tribunal (MACT)",
    statutoryHooks:
      "Motor Vehicles Act, 1988 (Section 164B Golden Hour & Hit-and-Run Fund); Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 396 Victim Compensation); Indian Contract Act Section 70; Aadhaar Act Section 33 court order disclosure.",
    executionSteps: [
      {
        step: "Step 1: Verify MLC FIR Number & Requisition Police Investigation",
        detail:
          "Link the hospital Medico-Legal Case (MLC) number to the police FIR. Issue a written request to the Station House Officer (SHO) and DCP/SP to verify vehicle registration and trace genuine next-of-kin via call detail records (CDR) and street CCTV.",
      },
      {
        step: "Step 2: Biometric Fingerprint Tracing via Police / District Magistrate",
        detail:
          "If the patient is unconscious and unidentified, request the investigating officer to conduct biometric UIDAI verification under court-sanctioned criminal identification protocols to establish true identity and home address.",
      },
      {
        step: "Step 3: Transfer to Government Welfare Hospital / NGO Care Facility",
        detail:
          "Upon clinical stabilization, move the patient via CMO authorization to a government tertiary hospital or certified state shelter home, accompanied by complete treatment records and police GD documentation.",
      },
      {
        step: "Step 4: Implead Hospital as Medical Creditor in MACT Tribunal / Third-Party Claim",
        detail:
          "File an impleadment application before the Motor Accident Claims Tribunal (MACT) or Motor Vehicle Accident Fund claiming direct hospital lien and reimbursement against the offending vehicle's third-party insurer.",
      },
    ],
    recoveryLeverage:
      "Direct Statutory Insurance Payout: MACT awards and statutory third-party insurer funds liquidate medical bills even when the patient's family is destitute or untraceable.",
  },
  {
    id: "affluent-kin-malpractice-blackmail",
    tabLabel: "Blackmail / Defamation Threat",
    ticketBand: "₹15L – ₹40L High-Net-Worth Kin Dispute",
    title: "Affluent Relatives Deliberately Refuse Discharge to Avoid Large Bill, Threatening Medical Negligence Counter-Suits",
    failureMechanism:
      "Wealthy children leave an elderly, post-surgical parent in a luxury private suite for 6 months. When presented with the ₹24 Lakh bill, they allege imaginary doctor negligence, refuse to take the parent home, threaten police FIRs and viral social media campaigns, and brazenly state: 'If you force discharge, we will hold the hospital liable if anything happens.'",
    lawfulProtocol:
      "Independent Medical Board Certification + Pre-Emptive Police Caveat + Formal Injunction for Vacation + Order XXXVII Summary Suit with Exemplary Damages",
    statutoryHooks:
      "Jacob Mathew v. State of Punjab (Doctor protection against malicious negligence FIRs); BNS Section 308 (Extortion) & Section 356 (Defamation); Specific Relief Act Section 38 (Mandatory Injunction); CPC Order XXXVII.",
    executionSteps: [
      {
        step: "Step 1: Impanel an External Third-Party Clinical Review Board",
        detail:
          "Appoint two independent external senior medical consultants to review the patient's chart, conduct bedside evaluation, and certify that tertiary inpatient stay is clinically contraindicated and poses high risk of hospital-acquired infection (HAI).",
      },
      {
        step: "Step 2: File Pre-Emptive Police & Judicial Caveat",
        detail:
          "Submit a detailed chronological representation to the Deputy Commissioner of Police (DCP) and Judicial Magistrate documenting the extortionate conduct, enclosing CCTV logs of family refusal to take discharge, defeating retaliatory FIRs.",
      },
      {
        step: "Step 3: Issue Final Advocate Demand Notice with Senior Citizens Act Impleadment",
        detail:
          "Serve a 15-day formal Advocate Demand Notice warning of Section 24 Senior Citizens Act penal prosecution, civil damages for bed obstruction, and initiation of high-value Order XXXVII proceedings.",
      },
      {
        step: "Step 4: File Civil Suit for Mandatory Injunction & Summary Money Decree",
        detail:
          "Approach the Civil Court / High Court for a mandatory injunction directing relatives to take physical custody of the patient, alongside summary decree for accrued bed and treatment charges plus interest at 18% p.a.",
      },
    ],
    recoveryLeverage:
      "Breaks Kin Blackmail: Threat of public criminal charges under Section 24 and frozen commercial bank accounts swiftly forces wealthy relatives to settle and discharge.",
  },
];

export default function AbandonedPatientScenarioTabs() {
  const [activeTab, setActiveTab] = useState(ABANDONMENT_SCENARIOS[0].id);

  const scenario =
    ABANDONMENT_SCENARIOS.find((s) => s.id === activeTab) || ABANDONMENT_SCENARIOS[0];

  return (
    <div className="w-full space-y-6">
      {/* Tabs Header */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {ABANDONMENT_SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-6">
        {/* Title & Ticket Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
              Failure Scenario Analysis
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {scenario.title}
            </h3>
          </div>
          <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-xl text-xs font-black bg-slate-900 text-emerald-400 self-start sm:self-center">
            {scenario.ticketBand}
          </span>
        </div>

        {/* Failure Mechanism vs Lawful Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-red-800 mb-1.5">
              The Operational Bottleneck &amp; Legal Threat
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {scenario.failureMechanism}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1.5">
              Lawful Escrow &amp; Transfer SOP
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
              {scenario.lawfulProtocol}
            </p>
          </div>
        </div>

        {/* Statutory Hook Badges */}
        <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
            Governing Statutory Provisions &amp; Shielding Precedents
          </p>
          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            {scenario.statutoryHooks}
          </p>
        </div>

        {/* Step-by-Step SOP Execution */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Step-by-Step Medico-Legal Execution Roadmap:
          </p>
          <div className="space-y-2.5">
            {scenario.executionSteps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-start gap-3 shadow-xs"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-slate-900">{st.step}</p>
                  <p className="text-slate-600 leading-relaxed">{st.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Leverage Box */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-amber-900">
            <span className="uppercase tracking-wider text-[11px] text-amber-800 font-black block">
              Core Hospital Leverage:
            </span>
            {scenario.recoveryLeverage}
          </p>
        </div>
      </div>
    </div>
  );
}
