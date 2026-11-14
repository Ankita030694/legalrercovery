"use client";

import React, { useState } from "react";

interface DiagnosticScenario {
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

const DIAGNOSTIC_SCENARIOS: DiagnosticScenario[] = [
  {
    id: "pcc-wallet-brand-hijack",
    tabLabel: "PCC Franchisee Default",
    ticketBand: "₹1.5L – ₹18L Defaulting Franchisee",
    title: "PCC Siphons Retail Cash, Overdrafts LIMS Wallet & Secretly Diverts Samples Under Old Brand Signboard",
    failureMechanism:
      "A Patient Collection Center (PCC) collects 100% upfront cash and UPI fees from walk-in patients every morning, runs its reference lab billing wallet into negative balance, and diverts blood/tissue samples to an unaccredited cut-rate local lab—while maintaining the national diagnostic chain's illuminated signboard, NABL accredited test lists, and branded collection tubes to deceive patients.",
    lawfulProtocol: "Immediate LIMS Access Lockdown + Section 29 Trade Marks Cease-and-Desist + Section 138 NI Act Security Cheque Invocation",
    statutoryHooks:
      "Trade Marks Act 1999 s.29 & s.135 (Infringement & Ex-Parte Injunction); NI Act s.138 & s.139 (Security Cheque Enforcement post-Sripati Singh); Commercial Courts Act 2015 s.2(1)(c)(ix) (Franchise & Service Agreements); Bharatiya Nyaya Sanhita 2023 s.316 & s.318 (Criminal Breach of Trust & Cheating).",
    executionSteps: [
      {
        step: "LIMS Lockout & Forensic Electronic Audit",
        detail:
          "Instantly freeze the PCC operator's LIMS barcode generation portal, preventing new sample registration. Export an immutable Section 63 BSA electronic log of all unpaid sample accessions, patient billing amounts, and wallet ledger debits.",
      },
      {
        step: "Physical Trademark De-Branding Audit & Evidence Capture",
        detail:
          "Deploy field territory managers with time-stamped video/photo evidence of the defaulting center operating under your brand name while routing samples elsewhere. Send mystery shoppers to record receipt of non-network test reports under your signboard.",
      },
      {
        step: "Dual-Track Advocate Legal Demand Dispatch",
        detail:
          "Serve a joint 15-day statutory demand: Track A demands immediate clearing of crystallised ledger arrears under Commercial Courts Act s.2(1)(c)(ix); Track B demands immediate de-branding, surrender of branded test kits, and warns of an ex-parte High Court / District Commercial Court injunction under Order XXXIX Rules 1 & 2 CPC.",
      },
    ],
    recoveryLeverage: "Crushing Brand Defense: Rogue franchisees settle within 7–14 days when faced with immediate signboard seizure and police complaints for patient endangerment.",
  },
  {
    id: "nursing-home-outsource-dispute",
    tabLabel: "Nursing Home Outsource",
    ticketBand: "₹3L – ₹25L Outsourced Testing Arrears",
    title: "Nursing Home Accrues Rolling 60–90 Day B2B Lab Credit, Fabricates Hemolysis Disputes to Dodge Dues",
    failureMechanism:
      "A 30–100 bed private nursing home sends daily specialized ICU, surgical biopsy, culture, and pathology samples to your central reference lab on 30-day rolling credit. When dues exceed credit limits, the nursing home billing head stalls payments claiming 'inpatient bills are pending with insurance TPAs' or concocts retroactive pre-analytical hemolysed sample rejections.",
    lawfulProtocol: "Electronic LIMS Chain-of-Custody Dossier + Service Suspension Notice + Order XXXVII CPC Summary Suit",
    statutoryHooks:
      "Indian Contract Act 1872 s.70 (Non-Gratuitous Service Quantum Meruit) & s.73; Commercial Courts Act 2015 s.2(1)(c)(xviii); Bharatiya Sakshya Adhiniyam 2023 s.63 (LIMS Barcode & Cold-Chain Logistics Metadata); Order XXXVII CPC (Liquidated Debt on B2B Invoices).",
    executionSteps: [
      {
        step: "Compile Phlebotomy & Temperature Cold-Chain Audit",
        detail:
          "Generate digital phlebotomist collection logs, automated cold-chain runner temperature scans, and time-stamped accession acknowledgments to destroy frivolous retroactive quality or transit dispute claims.",
      },
      {
        step: "Issue Pre-Litigation Stop-Reporting Notice",
        detail:
          "Serve a formal 7-day credit suspension and demand notice signed by an advocate, putting the hospital board and medical director on notice that unreleased lab results will be withheld and fresh specimen accessioning halted.",
      },
      {
        step: "Initiate Pre-Institution Mediation or Order XXXVII Filing",
        detail:
          "If dues exceed ₹3 Lakh, initiate Section 12A Pre-Institution Mediation before the Commercial Court DLSA. If the B2B service MOU contains an admitted debt schedule or signed monthly statement, institute an Order XXXVII CPC summary money suit.",
      },
    ],
    recoveryLeverage: "Clinical Continuity Pressure: Nursing homes cannot risk disruption of critical ICU and surgical diagnostic reporting and prioritize lab invoice clearing.",
  },
  {
    id: "radiology-teleradiology-referral",
    tabLabel: "Teleradiology & MRI / CT",
    ticketBand: "₹2L – ₹15L Advanced Imaging Default",
    title: "Regional Imaging Center or Scanning Hub Withholds PACS Teleradiology Interpretation Fees",
    failureMechanism:
      "Sub-district imaging centers outsource MRI, CT scan, and PET reporting to central sub-specialist radiologists via PACS (Picture Archiving and Communication Systems). After utilizing tele-reporting bandwidth for hundreds of high-value scans, the imaging center owner halts remittance, disputes radiologist report turnaround times (TAT), or shuts digital access keys.",
    lawfulProtocol: "PACS Audit Trail Extraction + Tele-Radiology Service Suspension + Section 138 NI Act Action",
    statutoryHooks:
      "Information Technology Act 2000 s.65B / BSA 2023 s.63 (PACS Server & Cloud Access Logs); Negotiable Instruments Act 1881 s.138 (Security Cheques); Indian Contract Act 1872 s.73 (Breach of Tele-Reporting SLA); Order XXXVIII Rule 5 CPC (Attachment of Scanning Center Receivables Before Judgment).",
    executionSteps: [
      {
        step: "Secure Cloud PACS Metadata & SLA Timestamps",
        detail:
          "Pull complete server-side logs proving exact DICOM image upload timestamps, sub-specialist radiologist review intervals, and verified signed PDF report dispatch metrics defeating all spurious turnaround time (TAT) defenses.",
      },
      {
        step: "Present Security Cheques & Serve Statutory 138 Demand",
        detail:
          "Deposit franchisee/client security cheques issued at onboarding. Upon dishonour ('Exceeds Arrangement' or 'Stop Payment'), issue a strict Section 138 NI Act statutory notice within 30 days of receiving the bank memo.",
      },
      {
        step: "File for Interim Attachment of Machine Revenue",
        detail:
          "Apply before the Commercial Court under Order XXXVIII Rule 5 CPC for interim attachment of the scanning center's merchant POS machines and corporate health insurer payouts pending suit adjudication.",
      },
    ],
    recoveryLeverage: "Irrefutable Digital Evidence: PACS server logs leave zero room for subjective dispute, enabling fast criminal and commercial summary orders.",
  },
  {
    id: "corporate-camp-wellness-default",
    tabLabel: "Corporate Camps & Wellness",
    ticketBand: "₹5L – ₹40L Corporate AHC Packages",
    title: "Corporate Health Aggregator or Employer Defaults on Annual Preventive Checkup (AHC) Camp Bills",
    failureMechanism:
      "Your diagnostic chain executes on-site blood collection, ECG, spirometry, and doctor consultations for 2,000+ corporate employees across industrial plants or IT parks. The broker, TPA wellness desk, or corporate client holds back payment for 180+ days alleging 'missing employee attendance sheets' or 'delayed digital report delivery'.",
    lawfulProtocol: "Batch Attendance Reconciliation + MSME Samadhaan / Section 15 Compounded Interest Claim + Advocate Demand",
    statutoryHooks:
      "Micro, Small and Medium Enterprises Development (MSMED) Act 2006 ss.15, 16 & 18 (Mandatory 45-day payment & 3x RBI Bank Rate Compound Interest); Commercial Courts Act 2015 s.2(1)(c)(i); Companies Act 2013 s.43B(h) Income Tax disallowance leverage.",
    executionSteps: [
      {
        step: "Assemble Camp Barcode Accession & Consent Repository",
        detail:
          "Collate employee registration sheets, signed phlebotomy consent chits, and corporate HR on-site coordinator authorization letters matching each billed profile in the master invoice.",
      },
      {
        step: "Dispatch Statutory MSME / Section 15 Demand Notice",
        detail:
          "Issue a formal legal notice quantifying the principal amount alongside compounding monthly interest at 3 times the RBI bank rate under Section 16 of the MSMED Act, reminding the corporate of Section 43B(h) tax audit disclosure liabilities.",
      },
      {
        step: "Lodge Dispute on MSME Samadhaan Portal",
        detail:
          "File an institutional application before the Micro and Small Enterprise Facilitation Council (MSEFC). Statutory conciliation and arbitration mandate a 90-day resolution timeline and require a 75% pre-deposit under Section 19 for any corporate appeal.",
      },
    ],
    recoveryLeverage: "Section 43B(h) & 3x Interest Mandate: Corporates face tax audit disallowances and mounting compound interest, triggering urgent CFO settlement approval.",
  },
];

export default function DiagnosticLabScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(DIAGNOSTIC_SCENARIOS[0].id);

  const scenario = DIAGNOSTIC_SCENARIOS.find((s) => s.id === activeTab) || DIAGNOSTIC_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation Pill Strip */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 mb-6">
        {DIAGNOSTIC_SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/70"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {scenario.ticketBand}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Pathology &amp; Imaging RCM Protocol
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
          {scenario.title}
        </h3>

        <div className="mb-5 bg-white rounded-xl border border-slate-200 p-4">
          <span className="block text-[11px] font-black uppercase tracking-wider text-red-600 mb-1">
            Commercial Failure Mode
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {scenario.failureMechanism}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
              Lawful Operational Rail
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {scenario.lawfulProtocol}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
              Statutory Levers &amp; Precedents
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
              {scenario.statutoryHooks}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900">
            Step-by-Step Recovery Playbook
          </span>
          {scenario.executionSteps.map((s, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white rounded-xl border border-slate-200/80 p-3.5"
            >
              <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0 flex items-center justify-center mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                  {s.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <span className="block text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1">
            Settlement Leverage &amp; Outcome
          </span>
          <p className="text-xs sm:text-sm font-semibold text-emerald-900">
            {scenario.recoveryLeverage}
          </p>
        </div>
      </div>
    </div>
  );
}
