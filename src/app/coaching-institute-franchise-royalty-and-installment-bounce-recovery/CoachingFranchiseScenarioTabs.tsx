"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  trigger: string;
  statutoryWeapons: string[];
  actionSteps: string[];
  timeline: string;
  warning: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "rebrand",
    tabLabel: "Overnight Signboard Swap",
    badge: "Commercial Courts Act s.2(1)(c)(ix) + Arb s.9",
    title: "Franchisee Collected ₹3 Cr in April, Withheld 20% Royalty & Rebranded in August",
    trigger:
      "Local franchise partner in Kota, Sikar, Patna, or Hyderabad collects full-year IIT-JEE/NEET batch fees using the national franchisor's brand, withholds Q1/Q2 royalty remittances, and paints over the signboard overnight while retaining the exact same classrooms and enrolled batch.",
    statutoryWeapons: [
      "Section 9, Arbitration & Conciliation Act, 1996 (urgent interim injunction restraining brand misuse & fee diversion)",
      "Commercial Courts Act, 2015 s.2(1)(c)(ix) & (xvii) (commercial franchise & IP dispute jurisdiction)",
      "Trade Marks Act, 1999 s.29 & s.135 (passing off & post-termination mark restraint)",
    ],
    actionSteps: [
      "Capture geo-tagged photographs of the old and new signboards, ERP batch rosters, and parent fee receipts with a BSA 2023 s.63 certificate within 48 hours.",
      "Serve a composite Franchise Termination, Royalty Demand & Trademark Cease-and-Desist Notice invoking Section 21 arbitration.",
      "Move the Commercial Court u/s 9 of the Arbitration Act for ex-parte ad-interim injunction, appointment of a Local Commissioner to inventory study kits, and escrow/bank attachment of diverted student fees.",
    ],
    timeline: "7–15 Days for Section 9 Interim Restraint",
    warning:
      "Do not delay termination notices hoping for informal mediation: once the academic batch crosses October, the franchisee will claim 'implied waiver' of royalty defaults.",
  },
  {
    id: "poaching",
    tabLabel: "Faculty Poaching & IP Theft",
    badge: "Copyright Act s.51/63 + Contract Tort",
    title: "Mass Poaching of Star Faculty & Piracy of Test Series / Study Material",
    trigger:
      "Defaulting franchisee induces star physics/chemistry faculty to breach fixed-term exclusivity covenants and distributes photocopied or white-labeled ranker test series, DPP sheets, and LMS question banks to the same students under a new coaching banner.",
    statutoryWeapons: [
      "Copyright Act, 1957 s.51, s.55 & s.63 (civil injunction, Anton Piller search/seizure & criminal piracy complaint)",
      "Indian Contract Act, 1872 s.27 (post-term restraint is void, BUT in-term exclusivity & confidential database protection are fully enforceable)",
      "Information Technology Act, 2000 s.43 & s.66 (unauthorized LMS/ERP student database extraction)",
    ],
    actionSteps: [
      "Audit LMS download logs and watermarked PDF serial numbers to trace the exact center ID leaking test-series papers.",
      "File a Section 55 Copyright infringement & database theft injunction alongside a Commercial Court application for Anton Piller inspection of printed material.",
      "Enforce liquidated damages and in-term exclusivity clauses against faculty/franchisees for active-term inducement, rather than relying on unenforceable post-termination non-competes.",
    ],
    timeline: "5–10 Days for IP Seizure & LMS Audit",
    warning:
      "Indian courts strike down post-employment non-compete clauses under Section 27 Contract Act. Frame your injunction strictly around copyright piracy, trade-secret database theft, and active-term exclusivity.",
  },
  {
    id: "moe-nach",
    tabLabel: "MoE 2024 & NACH Bounce",
    badge: "NI Act s.138 + PSS Act s.25 + MoE 2024",
    title: "Student Installment PDC / e-NACH Bounce Under MoE 2024 Pro-Rata Rules",
    trigger:
      "Parents/students opt for 3-installment or NBFC-linked coaching fee plans, attend 4–6 months of classes, and then issue 'Stop Payment' or revoke e-NACH mandates—claiming a blanket refund under the Ministry of Education (MoE) 2024 Coaching Guidelines.",
    statutoryWeapons: [
      "Ministry of Education (MoE) 2024 Coaching Guidelines (mandates pro-rata refund within 10 days ONLY for unattended future period—does NOT excuse earned arrears)",
      "Payment and Settlement Systems Act, 2007 s.25 (criminal liability for dishonoured e-NACH / ECS mandates)",
      "Negotiable Instruments Act, 1881 s.138 (30-day statutory demand notice on bounced installment PDCs)",
    ],
    actionSteps: [
      "Reconcile biometric/LMS attendance logs to separate 'earned tuition & delivered study-kit cost' from any unearned future quarters.",
      "Issue a MoE-2024 compliant Fact-Verified Recovery Notice strictly demanding the pro-rata earned balance + GST, explicitly waiving any unearned post-withdrawal quarters.",
      "For bounced e-NACH mandates or PDCs matching earned dues, dispatch a 30-day NI Act s.138 / PSS Act s.25 notice and run bulk CSV batches for 100+ defaulting enrollments.",
    ],
    timeline: "30-Day Statutory Demand + 15-Day Cure",
    warning:
      "Never present a full-year lump-sum PDC after a student has formally withdrawn in writing—courts and consumer commissions treat claiming unearned future fees as an unfair trade practice under MoE 2024.",
  },
  {
    id: "royalty-pdc",
    tabLabel: "Royalty PDC & Escrow Default",
    badge: "NI Act s.138/143A + Order XXXVII CPC",
    title: "Dishonoured Franchisee Security PDCs & Unpaid Study-Material Invoices",
    trigger:
      "Franchisee's quarterly minimum-guarantee royalty cheques or study-material kit invoices bounce with 'Funds Insufficient' or 'Account Closed', while the franchisee disputes royalty computation without ever raising a prior written objection.",
    statutoryWeapons: [
      "Negotiable Instruments Act, 1881 s.138 & s.143A (up to 20% interim compensation payable by defaulting franchisee within 60 days)",
      "Code of Civil Procedure, 1908 Order XXXVII (Summary Suit on signed Franchise Agreement, GST invoices & dishonoured cheques)",
      "MSMED Act, 2006 s.16 (if franchisor/curriculum supplier holds Udyam registration for supplied print/LMS material)",
    ],
    actionSteps: [
      "Serve a strict 30-day NI Act s.138 demand notice from the bank return memo date covering both the franchisee entity and its managing partners/directors u/s 141.",
      "Attach GSTR-2B input tax credit acceptance and signed delivery challans of study-material boxes to foreclose fabricated 'defective material' defenses.",
      "Seek 20% interim deposit u/s 143A NI Act at the plea-recording stage or file an Order XXXVII Commercial Summary Suit where leave to defend requires deposit of admitted arrears.",
    ],
    timeline: "30d Notice + 15d Cure + 45d Filing Window",
    warning:
      "Always verify whether the franchisee operates as a Sole Proprietorship, Partnership, or Private Limited Company before issuing s.138 notices—serving only the brand name invalidates criminal prosecution.",
  },
];

export default function CoachingFranchiseScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Coaching Franchise Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
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
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Target Window: {current.timeline}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Commercial Trigger: </strong>
            {current.trigger}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2.5">
              Applicable Statutory Weapons
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {current.statutoryWeapons.map((w, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2.5">
              Franchisor Action Sequence
            </p>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              {current.actionSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm text-amber-900">
          <strong className="font-bold">Critical Compliance Guardrail: </strong>
          {current.warning}
        </div>
      </div>
    </div>
  );
}
