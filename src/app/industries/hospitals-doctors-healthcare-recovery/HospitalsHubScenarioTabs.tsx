"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HealthcareTrack {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  primaryStatutes: string;
  headlineSummary: string;
  workflowSteps: { step: string; detail: string }[];
  complianceGuardrail: string;
  recommendedLinks: { label: string; href: string }[];
}

const HEALTHCARE_TRACKS: HealthcareTrack[] = [
  {
    id: "post-discharge",
    tabLabel: "Post-Discharge & s.138",
    badge: "Article 21 & NI s.138 | ₹15K – ₹25L",
    title: "Post-Discharge Inpatient/ICU Undertakings & Stop-Payment Cheques",
    ticketBand: "₹15,000 – ₹25,00,000 emergency, ICU & surgical balances",
    primaryStatutes:
      "Article 21 Constitution, Indian Contract Act s.73 & s.126, NI Act s.4 & s.138, Order XXXVII CPC",
    headlineSummary:
      "Never detain stabilized patients or mortal remains at the billing desk. Secure voluntary itemized bill acknowledgments and attendant co-obligor promissory undertakings at discharge, then enforce unpaid balances or relative stop-payment cheques through 15-day advocate notices.",
    workflowSteps: [
      {
        step: "1. Non-Coercive Discharge Documentation",
        detail:
          "Obtain patient/attendant KYC, voluntary acknowledgment of the itemized inpatient bill, and a signed Attendant Co-Obligor Undertaking / Promissory Note specifying unconditional discharge.",
      },
      {
        step: "2. Stop-Payment Cheque Crystallization (30 Days)",
        detail:
          "When a patient or relative stops payment on a discharge cheque, dispatch a Section 138 NI Act demand notice within 30 days of the bank return memo citing ICDS Ltd. v. Beena Shabeer.",
      },
      {
        step: "3. Order XXXVII Summary Suit / Long-Stay Transfer",
        detail:
          "For non-cheque defaults, escalate uncured 15-day notices to Order XXXVII CPC summary suits; for abandoned long-stay ICU patients, follow CMO/Police-assisted transfer protocols.",
      },
    ],
    complianceGuardrail:
      "Withholding discharge summaries, patients, or mortal remains violates Article 21 and invites criminal wrongful confinement action under BNS, destroying the hospital's civil recovery posture.",
    recommendedLinks: [
      {
        label: "Post-Discharge Recovery Without Detention",
        href: "/hospital-unpaid-patient-bill-recovery-without-detaining-patient",
      },
      {
        label: "Relative Cheque Bounce & Coercion Defense",
        href: "/patient-cheque-bounce-stop-payment-at-hospital-discharge-section-138",
      },
      {
        label: "2-in-1 Discharge Undertaking & Notice Pack",
        href: "/templates/hospital-discharge-pending-bill-undertaking-and-legal-notice",
      },
    ],
  },
  {
    id: "tpa-insurers",
    tabLabel: "TPA & Cashless Claims",
    badge: "IRDAI Bank Rate + 2% | ₹5L – ₹5 Cr+",
    title: "Delayed TPA Settlements & Arbitrary Cashless Tariff Deductions",
    ticketBand: "₹2,00,000 – ₹5,00,00,000+ aged ROHINI hospital claim ledgers",
    primaryStatutes:
      "IRDAI Health Insurance Master Circular, Commercial Courts Act s.2(1)(c)(xx), Contract Act s.73",
    headlineSummary:
      "Stop writing off 15–35% of approved cashless bills to unilateral TPA 'non-payable' cuts or waiting 120–180 days for settlement. Enforce your signed Provider MOU package schedule and claim statutory IRDAI penal interest at Bank Rate + 2%.",
    workflowSteps: [
      {
        step: "1. Pre-Auth vs Final Deduction Audit",
        detail:
          "Segregate cases where cashless pre-authorization was granted and clinical records match MOU tariffs from genuine policy exclusions, computing TAT breach days per claim.",
      },
      {
        step: "2. Statutory Bank Rate + 2% Interest Demand",
        detail:
          "Generate a claim-by-claim IRDAI penal interest annexure and serve a formal advocate legal notice on both the TPA Nodal Officer and the principal Health Insurer.",
      },
      {
        step: "3. Commercial Court s.12A & Grievance Escalation",
        detail:
          "For aggregate disputed short-settlements >= ₹3 Lakh, initiate Commercial Courts Act s.12A pre-institution mediation and regulatory complaint escalation.",
      },
    ],
    complianceGuardrail:
      "Always name the underwriting Insurance Company alongside the TPA in statutory notices, as privity of risk and IRDAI settlement liability rest primarily on the insurer.",
    recommendedLinks: [
      {
        label: "TPA Delayed & Short-Settled Claim Playbook",
        href: "/hospital-tpa-insurance-delayed-short-settled-claim-recovery",
      },
      {
        label: "IRDAI TPA Penal Interest Calculator",
        href: "/tools/hospital-tpa-delayed-claim-interest-calculator",
      },
      {
        label: "2026–2027 Hospital Receivables DSO Report",
        href: "/reports/healthcare-tpa-settlement-delay-hospital-receivables-india",
      },
    ],
  },
  {
    id: "govt-corporate-ppp",
    tabLabel: "CGHS, PSU & NHM PPP",
    badge: "CPC s.80 & Art. 226 | ₹10L – ₹15 Cr",
    title: "CGHS, ECHS, ESIC, PM-JAY, Corporate OHC & NHM PPP Arrears",
    ticketBand: "₹10,00,000 – ₹15,00,00,000+ empanelled & institutional credit books",
    primaryStatutes:
      "CPC Section 80, Constitution Article 226 (ABL International), Order XXXVII CPC, PPP Concession Clauses",
    headlineSummary:
      "Break 12–24 month freezes on empanelled government claims, corporate Credit Authorization Letters, factory Occupational Health Center (OHC) retainers, and District Hospital PPP dialysis/radiology payouts without losing empanelment standing.",
    workflowSteps: [
      {
        step: "1. Portal Grievance & Reconciliation Exhaustion",
        detail:
          "Document clean bill submission acknowledgments on UTIITSL, NHA/SHA, ESIC, or District Health Society portals to prove bills are undisputed and verified.",
      },
      {
        step: "2. Section 80 CPC Notice vs Corporate Credit Cure",
        detail:
          "Serve a mandatory 60-day Section 80 CPC statutory notice for Government/PSU arrears, or a 15-day credit-suspension cum Order XXXVII notice on private corporate tie-ups.",
      },
      {
        step: "3. Article 226 Writ Mandamus / PPP Arbitration",
        detail:
          "Where admitted CGHS/ECHS/PM-JAY bills remain arbitrarily unpaid post-notice, petition the High Court under Article 226 for time-bound release or invoke PPP arbitration.",
      },
    ],
    complianceGuardrail:
      "Never file a civil suit against Central/State Government health authorities without serving a valid 60-day Section 80 CPC notice, or the plaint faces Order VII Rule 11 rejection.",
    recommendedLinks: [
      {
        label: "CGHS, ECHS, ESIC & PM-JAY Arrears Guide",
        href: "/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery",
      },
      {
        label: "Corporate Credit Tie-Up & OHC Recovery",
        href: "/hospital-corporate-credit-tie-up-psu-medical-bill-recovery",
      },
      {
        label: "PPP Dialysis & Radiology NHM Dues Guide",
        href: "/dialysis-oncology-daycare-center-ppp-government-bill-recovery",
      },
    ],
  },
  {
    id: "clinics-labs-doctors",
    tabLabel: "Clinics, Labs & Doctors",
    badge: "Specialty, B2B Labs & 194J | ₹25K – ₹40L",
    title: "Diagnostic Franchises, IVF/Dental Clinics, 194J Doctors & Home-ICU",
    ticketBand: "₹25,000 – ₹40,00,000+ specialty clinic, lab & fleet receivables",
    primaryStatutes:
      "Commercial Courts Act s.2(1)(c)(ix), Income Tax s.194J Form 26AS, BSA s.63, BNS s.316 & Trade Marks s.29",
    headlineSummary:
      "Tailored recovery tracks for standalone healthcare operators: diagnostic chains enforcing PCC collection center arrears, IVF/cosmetic surgeons defeating online review blackmail, visiting consultants proving fees via Form 26AS 194J TDS, and home-ICU/air-ambulance operators.",
    workflowSteps: [
      {
        step: "1. Lock Ledger & Digital Evidence (BSA s.63)",
        detail:
          "Compile LIS sample logs, signed IVF/dental financial consents, Form 26AS/AIS 194J TDS entries, or WhatsApp air-ambulance charter approvals certified under BSA s.63.",
      },
      {
        step: "2. Targeted Statutory & Brand-Shield Notice",
        detail:
          "Issue dual-purpose notices combining payment demand with Trade Marks s.29 brand-use termination (for labs), BNS s.316 ventilator return, or defamation/extortion warnings.",
      },
      {
        step: "3. Fast-Track Summary Suit or Arbitration",
        detail:
          "Escalate unpaid 194J retainers, franchisee security cheques (s.138), and NRI eldercare arrears into Order XXXVII CPC suits or Section 21 institutional arbitration.",
      },
    ],
    complianceGuardrail:
      "Visiting doctors paid under TDS Section 194J are independent professionals—not employees—so avoid Labour Commissioner filings and pursue Order XXXVII CPC or Arbitration directly.",
    recommendedLinks: [
      {
        label: "Diagnostic & Pathology Lab B2B Dues",
        href: "/diagnostic-lab-pathology-collection-center-b2b-dues-recovery",
      },
      {
        label: "IVF, Dental & Cosmetic Package Recovery",
        href: "/ivf-dental-cosmetic-clinic-treatment-package-emi-default-recovery",
      },
      {
        label: "Visiting Doctor 194J Unpaid Fee Guide",
        href: "/visiting-consultant-doctor-unpaid-professional-fee-from-hospital",
      },
    ],
  },
];

export default function HospitalsHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(HEALTHCARE_TRACKS[0].id);
  const current =
    HEALTHCARE_TRACKS.find((t) => t.id === activeTabId) ?? HEALTHCARE_TRACKS[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div
        role="tablist"
        aria-label="Healthcare receivable categories"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
      >
        {HEALTHCARE_TRACKS.map((track) => {
          const isActive = track.id === activeTabId;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(track.id)}
              className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span className="block leading-tight">{track.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {current.ticketBand}
          </span>
        </div>

        <div>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {current.headlineSummary}
          </p>
          <p className="text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg px-3 py-2">
            <strong className="text-slate-900">Key Statutes:</strong>{" "}
            {current.primaryStatutes}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {current.workflowSteps.map((ws) => (
            <div
              key={ws.step}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-extrabold text-[#DC2626] mb-1.5">
                {ws.step}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                {ws.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-bold text-amber-900 mb-1">
            Compliance &amp; Medico-Legal Guardrail
          </p>
          <p className="text-xs text-amber-800 leading-relaxed">
            {current.complianceGuardrail}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-slate-500 mr-1">
            Deep-Dive Guides:
          </span>
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-semibold transition-colors"
            >
              {lnk.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
