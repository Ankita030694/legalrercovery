"use client";

import React, { useState } from "react";
import { FileWarning, GraduationCap, CreditCard, ShieldAlert, CheckCircle2, Scale } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  badge: string;
  title: string;
  parentExcuse: string;
  schoolRebuttal: string;
  evidenceRequired: string[];
  forumAndStatute: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tc-exit-arrears",
    label: "1. Parent Took TC & Blocked Calls",
    badge: "Post-Exit Default",
    title: "Affluent Parent Demanded TC Citing High Court Orders, Shifted Child & Blocked School Accounts",
    parentExcuse:
      "\"Under RTE Act Section 5(3) and High Court rulings, you cannot stop my child's Transfer Certificate. Once the TC is issued and my child has joined another school, the relationship is over—sue us if you want.\"",
    schoolRebuttal:
      "High Courts (Delhi, Madras, Kerala, Bombay) explicitly separate the child's statutory right to education from the parent's civil contract. Releasing the TC protects the school from NCPCR or writ liability, while preserving 100% of the Trust's civil cause of action against the earning parent under the signed Admission Fee Undertaking and Indian Contract Act. A confidential Advocate Civil Notice delivered to the parent's office and residential address triggers settlement in 60–75% of post-exit cases.",
    evidenceRequired: [
      "Signed Admission Form & Annual Fee Undertaking executed by both parents/guardian",
      "ERP Fee Ledger showing opening balance, quarterly tuition/transport bills & part-payments",
      "Signed TC Issuance Acknowledgment proving unconditional compliance with RTE s.5(3)",
      "Parent KYC (PAN, Aadhaar, Employer/Office Address) captured at admission",
    ],
    forumAndStatute:
      "Indian Contract Act s.10 & s.73 + Order XXXVII CPC Summary Suit (Written Fee Undertaking)",
  },
  {
    id: "board-passout-exit",
    label: "2. Class 10 / 12 Pass-Out Arrears",
    badge: "Board Exam Exit",
    title: "Student Appeared for CBSE / ICSE Board Exams & Left With 18–24 Months Tuition & Hostel Dues",
    parentExcuse:
      "\"CBSE Bye-Laws barred you from stopping our ward's Board Admit Card or marksheet. Now that the student has graduated to college, the school cannot retroactively demand old hostel or lab arrears.\"",
    schoolRebuttal:
      "Allowing a student to sit for Class X or XII Board exams under CBSE/ICSE child-welfare rules never constitutes a waiver of accrued fee debt under Section 63 of the Indian Contract Act. As long as the school files within the 3-year limitation period (Article 113 / Article 22, Limitation Act, 1963) from the due date of each academic term, the Trust can file an Order XXXVII Summary Suit for the entire liquidated tuition, hostel, and mess balance plus contractual interest.",
    evidenceRequired: [
      "Board Exam Undertaking / No-Dues Deferment Email signed by parent prior to admit card release",
      "Itemized Hostel, Mess, Lab & Tuition Ledger verified under BSA 2023 s.63",
      "Prior polite email/WhatsApp reminders sent to parent (proving no waiver or acquiescence)",
      "Parent's current residential address & corporate/business GST or employer details",
    ],
    forumAndStatute:
      "Order XXXVII CPC Summary Suit + Limitation Act 1963 (3-Year Window) + BSA 2023 s.63",
  },
  {
    id: "bounced-cheque-nach",
    label: "3. Bounced Fee Cheque / ECS",
    badge: "Criminal & Civil Dual Rail",
    title: "Parent Issued Post-Dated Fee Cheques or NACH Mandate That Returned 'Insufficient Funds' or 'Stopped'",
    parentExcuse:
      "\"We instructed our bank to stop the fee cheque because we were relocating cities, and you cannot file a criminal case over school fees when our child is no longer studying there.\"",
    schoolRebuttal:
      "Once a parent issues a cheque or NACH/ECS electronic mandate toward an existing legally enforceable fee liability, dishonour triggers criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 (or Section 25 of the Payment and Settlement Systems Act, 2007 for NACH/ECS). Under Modi Cements and Laxmi Dyechem, 'Stop Payment' carries the exact same criminal liability—forcing immediate settlement once the 15-day statutory notice is served.",
    evidenceRequired: [
      "Original dishonoured fee cheque + Bank Cheque Return Memo (with exact date & reason code)",
      "For NACH/ECS bounce: Bank Return Advice & signed Mandate Form (PSS Act s.25)",
      "Statutory 15-day NI Act s.138 Demand Notice dispatched within 30 days of Return Memo",
      "Speed Post RPAD tracking & delivery proof to establish 30-day Magistrate filing limitation",
    ],
    forumAndStatute:
      "NI Act s.138 (Cheque Bounce — 2x Fine / 2-Year Term) or PSS Act s.25 (ECS/NACH Dishonour)",
  },
  {
    id: "ncpcr-media-threat",
    label: "4. Parent Threatens NCPCR / Media",
    badge: "Reputation Shield",
    title: "Chronic Defaulter Threatens Child-Rights Complaint, PTA Escalation & Media Smear Over Fee Follow-Up",
    parentExcuse:
      "\"Your accounts clerk called during school hours and sent a WhatsApp reminder—that amounts to mental harassment of a minor under NCPCR guidelines. Withdraw the demand or we go to the press.\"",
    schoolRebuttal:
      "NCPCR and High Court guidelines prohibit humiliating a child in class, barring entry, or publishing defaulter lists—they NEVER prohibit a school Trust from instructing an Advocate to send a strictly confidential, sealed Civil Recovery Notice addressed solely to the contracting parent at their home or office. Shifting communication from school staff to an independent Advocate eliminates all 'harassment' allegations and insulates the Principal's reputation.",
    evidenceRequired: [
      "Zero-child-contact communication audit (confirming no classroom exclusion or student notice)",
      "Sealed Advocate Notice addressed exclusively to Father/Mother/Guardian (never student)",
      "Confidentiality clause in notice restricting disclosure to third parties or PTA groups",
      "Complete fee concession / installment offer history proving institutional good faith",
    ],
    forumAndStatute:
      "RTE Act s.5(3) Compliant Civil Action + Confidential Advocate Demand + CPC Order XXXVII",
  },
];

const ICONS = [FileWarning, GraduationCap, CreditCard, ShieldAlert];

export default function SchoolFeeScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const active = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {SCENARIOS.map((scenario, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          const isActive = scenario.id === active.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveId(scenario.id)}
              className={`flex items-center gap-2.5 text-left px-3.5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#DC2626]"}`} />
              <span className="leading-snug">{scenario.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {active.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-slate-400" />
            {active.forumAndStatute}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{active.title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Defaulting Parent&apos;s Pretext
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              {active.parentExcuse}
            </p>
          </div>
          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              School Trust&apos;s Statutory Rebuttal
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.schoolRebuttal}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            Mandatory Evidence File for Advocate Notice &amp; Order 37 Suit
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {active.evidenceRequired.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
