"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "notice-period-dispute",
    tabLabel: "Notice Period Dispute",
    title: "Experience Certificate Withheld Over Notice Period Shortfall or Buyout",
    cause:
      "When an employee resigns with an urgent joining date elsewhere and requests a notice buyout or early release, employers frequently retaliate by withholding the experience letter. HR often claims that until the employee pays exorbitant notice recovery fees or serves the entire 90-day period, no exit credentials will be issued.",
    legalBasis:
      "Under Section 73 and Section 74 of the Indian Contract Act, 1872, an employer cannot extract liquidated damages exceeding the actual demonstrated loss. More critically, High Courts across India have ruled that an experience certificate merely attests to factual tenure and cannot be held as a lien or ransom for disputed commercial claims. Notice shortfall is a civil financial adjustment, not grounds to erase your past service history.",
    steps: [
      {
        step: "Demand Detailed FnF Calculation Breakdown",
        description:
          "Submit an email demanding written calculation of the notice shortfall. Calculate whether deductions are on Basic Pay or Gross CTC using our notice recovery tool.",
      },
      {
        step: "Tender Written Settlement or Challenge Penalty",
        description:
          "Either offer lawful adjustment against accrued leave / bonus or reject illegal markup under Section 74 of the Contract Act in writing.",
      },
      {
        step: "Serve Advocate Legal Demand Notice",
        description:
          "Serve a 15-day statutory advocate notice demanding uncoupling of the experience certificate from the financial dispute under Article 21 livelihood rights.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Contract Act & Model Standing Orders Central Rules",
  },
  {
    id: "training-bond-demand",
    tabLabel: "Training Bond Threat",
    title: "Experience Certificate Denied Over Alleged Employment / Training Bond",
    cause:
      "Companies often force freshers or junior engineers to sign 1-to-3-year employment 'bonds' with arbitrary penalty clauses (e.g., ₹2,00,000 to ₹5,00,000) upon early resignation. When the employee moves on, the company refuses to issue the experience letter unless the bond penalty is paid.",
    legalBasis:
      "Under Section 27 of the Indian Contract Act, 1872, any agreement in restraint of trade, profession, or lawful employment is void ab initio. The Supreme Court in Niranjan Shankar Golikari and subsequent High Court verdicts established that an employer can only claim actual, specialized expenses incurred on tangible external training, not general on-the-job training. Withholding service certificates over an illegal bond is coercive extortion.",
    steps: [
      {
        step: "Demand Verifiable Training Expense Invoices",
        description:
          "Formally ask HR to produce tax invoices, certificates, and specialized program proofs demonstrating actual financial expenditure incurred on your training.",
      },
      {
        step: "Document Knowledge Transfer & Asset Return",
        description:
          "Ensure your KT sign-off, client handover notes, and laptop return challan are documented via personal email records before leaving.",
      },
      {
        step: "Dispatch Statutory Advocate Demand Notice",
        description:
          "Serve a formal legal notice demonstrating the bond's unenforceability under Section 27 and demanding unconditional release of your service certificate.",
      },
    ],
    statutoryRule: "Section 27 Indian Contract Act 1872 & Article 19(1)(g) Constitution of India",
  },
  {
    id: "absconding-bgv-threat",
    tabLabel: "Absconding & BGV Blackmail",
    title: "Employer Marks Status as 'Absconding' or Threatens Negative BGV",
    cause:
      "When disputes arise over salary cuts, toxic management, or resignation acceptance, employers weaponize Background Verification (BGV) agencies and threaten to report the employee as 'Absconding' or 'Do Not Rehire' on industry portals, while withholding the experience letter.",
    legalBasis:
      "Tagging an employee as 'absconding' when a formal resignation email was tendered constitutes wrongful imputation and civil defamation under tort law, as well as a breach of fair play. An employer who communicates malicious falsehoods to prospective employers or third-party background checkers is liable for damages for tortious interference with employment and criminal defamation under Section 356 Bharatiya Nyaya Sanhita, 2023 (BNS).",
    steps: [
      {
        step: "Preserve Resignation Chain & Delivery Stamps",
        description:
          "Retain full export of resignation emails, WhatsApp exchanges with managers, and read receipts confirming management was duly notified.",
      },
      {
        step: "Issue Legal Warning Against Defamatory BGV",
        description:
          "Serve a stern legal notice cautioning HR and the BGV agency against publishing derogatory or fabricated 'absconding' tags without judicial process.",
      },
      {
        step: "Approach Labour Conciliation Officer",
        description:
          "Lodge a conciliation petition before the jurisdictional Labour Commissioner to record your lawful resignation and command an accurate service certificate.",
      },
    ],
    statutoryRule: "Section 356 BNS 2023, BSA Section 63 & Industrial Relations Code 2020",
  },
  {
    id: "company-shutdown-ghosting",
    tabLabel: "HR Ghosting / Shutdown",
    title: "Company Acquired, Insolvent, or HR Completely Ghosting Ex-Employees",
    cause:
      "In early-stage startups or distressed companies facing layoffs or liquidation, HR operations dissolve. Ex-employees cannot reach anyone to obtain relieving letters, experience certificates, or Form 16, jeopardizing their onboarding at new employers.",
    legalBasis:
      "Directors and designated company officers remain personally accountable under the Companies Act, 2013, and state Shops and Establishments statutes for statutory company records. Even during insolvency proceedings before the NCLT, the Interim Resolution Professional (IRP) or liquidator is legally mandated to process employee record verification.",
    steps: [
      {
        step: "Serve Notice to Registered Office & Board of Directors",
        description:
          "Send notice directly to the directors' personal registered addresses listed on the Ministry of Corporate Affairs (MCA) portal.",
      },
      {
        step: "Compile Statutory EPFO & Form 26AS Alternate Proofs",
        description:
          "Download your electronic EPFO Service History passbook, Form 16, and AIS/26AS tax credits to demonstrate unbroken statutory employment tenure.",
      },
      {
        step: "File Formal Complaint with Shops & Establishments Inspector",
        description:
          "Submit a statutory inspection petition to the local Labour Officer under Section 34 of the Shops & Establishments Act to compel director compliance.",
      },
    ],
    statutoryRule: "State Shops & Establishments Act (Form T / Service Certificate) & MCA Rules",
  },
];

export default function ExperienceLetterScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Buttons */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto no-scrollbar">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`shrink-0 py-3 sm:py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer select-none ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-2xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            {currentScenario.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-3">
            {currentScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Why Employers Withhold It:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.cause}
            </p>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              The Legal Reality &amp; Your Statutory Right:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            Immediate Corrective Action Plan:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentScenario.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 text-xs">
          <span className="text-slate-600 font-medium">
            Stuck in this exact bottleneck? Need formal legal intervention?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            Review statutory notice drafting options →
          </Link>
        </div>
      </div>
    </div>
  );
}
