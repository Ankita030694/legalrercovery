"use client";

import React, { useState } from "react";

interface LokAdalatScenario {
  id: string;
  badge: string;
  shortLabel: string;
  title: string;
  portfolioProfile: string;
  bottleneckPattern: string;
  statutoryLeverage: string;
  primingChecklist: string[];
  nodalSOP: string;
  targetOutcome: string;
}

const LOK_ADALAT_SCENARIOS: LokAdalatScenario[] = [
  {
    id: "retail-mudra-unsecured",
    badge: "Sub-₹20L Retail & Mudra",
    shortLabel: "Retail & Mudra NPAs",
    title: "Unsecured Personal Loans, Credit Cards & Mudra (Shishu/Kishore/Tarun) Below DRT Floor",
    portfolioProfile:
      "Ticket sizes ₹50,000 to ₹15,00,000 across PSU, Gramin, and Small Finance Bank branches where DRT jurisdiction (₹20 Lakh minimum) is unavailable and civil court fees (5%–8%) erode net recovery.",
    bottleneckPattern:
      "Branches upload 3,000 raw CBS borrower rows to the DLSA office 10 days before the quarterly National Lok Adalat. Bare-bones DLSA postcards reach rural/semi-urban borrowers 2 days after the sitting or omit OTS discount slabs—producing sub-6% attendance and zero cash collection.",
    statutoryLeverage:
      "Legal Services Authorities Act, 1987 Section 19(5)(ii) & Section 20(2) (pre-litigation cognizance at zero court fee) paired with Section 21 deemed Civil Court Decree. Pre-aligned consent awards also satisfy CGTMSE / CGFMU statutory legal-action prerequisites without paying ad-valorem civil court stamps.",
    primingChecklist: [
      "Pre-approved Board OTS matrix mapped to CBS ledger (principal + uncompounded interest slab)",
      "T-30 Fact-verified vernacular OTS Invitation-cum-Lok Adalat Pre-Intimation via WhatsApp + RPAD",
      "Dynamic UPI/NEFT token-deposit link (10% upfront commitment prior to bench sitting)",
      "Pre-drafted Joint Compromise Memo with default-acceleration clause for instant bench signing",
    ],
    nodalSOP:
      "Dispatch tri-channel OTS priming notices at T-30 so borrowers confirm their slab on WhatsApp or branch desk by T-10. Walk pre-consented borrowers into the DLSA sitting on T-0 to convert oral promises into irrevocable Section 21 consent decrees.",
    targetOutcome: "3x–4x higher borrower turnout; binding decree in 1 sitting at ₹0 court fee.",
  },
  {
    id: "kcc-agri-sarfaesi-bar",
    badge: "KCC & Agriculture NPAs",
    shortLabel: "KCC & Agri Loans",
    title: "Kisan Credit Card (KCC) & Agricultural Term Loans Barred Under SARFAESI Section 31(i)",
    portfolioProfile:
      "Priority-sector KCC, crop loans, dairy/allied term loans, and tractor facilities secured strictly by agricultural land across Regional Rural Banks (RRBs) and District Central Cooperative Banks.",
    bottleneckPattern:
      "Section 31(i) of the SARFAESI Act completely bars banks from enforcing security interests over agricultural land. State Revenue Recovery Certificate (RRC) proceedings drag for 3–5 years, while hostile telecalling triggers district administration pushback and borrower-union friction.",
    statutoryLeverage:
      "National Lok Adalat under Section 20(2) LSA Act provides a non-coercive, state-sanctioned conciliation bench headed by sitting/retired Judicial Officers. Conciliated KCC awards carry full Section 21 decree force and align with NABARD/State SLBC recovery drives.",
    primingChecklist: [
      "Vernacular (Hindi/Marathi/Tamil/Telugu/Bengali) OTS-cum-Lok Adalat notice showing exact interest waiver",
      "Post-harvest cash-flow alignment (Kharif/Rabi installment schedule baked into consent award)",
      "Branch Nodal Officer pre-camp at Taluka Legal Services Committee (TLSC) 7 days before sitting",
      "Co-borrower & guarantor joint service via Speed Post RPAD + verified mobile WhatsApp",
    ],
    nodalSOP:
      "Time the T-30 priming wave immediately post-harvest and pair vernacular advocate notices with clear 'Waiver Valid Only at National Lok Adalat Bench' deadlines. Structure 2-tranche consent decrees (25% on sitting day + 75% within 90 days) with automatic full-dues revival on default.",
    targetOutcome: "Non-adversarial KCC closure; avoids SARFAESI s.31(i) dead-end & RRC backlog.",
  },
  {
    id: "pending-s138-s25-drt",
    badge: "Pending s.138 / s.25 / Civil",
    shortLabel: "Pending Court & s.138",
    title: "Compounding Pending NI Act s.138, PSS Act s.25 & Civil Suits for 100% Court-Fee Refund",
    portfolioProfile:
      "Aged retail, MSME, and vehicle-finance NPAs already stuck in Judicial Magistrate courts (NI Act s.138 / PSS Act s.25 e-NACH bounces) or pending civil recovery suits below ₹20 Lakh.",
    bottleneckPattern:
      "Magistrate dockets take 24–48 months for trial while borrowers evade bailable warrants. Banks sit on locked court fees in civil suits and incur recurring panel-advocate appearance bills every hearing date without actual cash recovery.",
    statutoryLeverage:
      "Section 20(1) LSA Act referral of pending cases + Section 147 NI Act compounding + Court Fees Act, 1870 Section 16 (100% refund of civil court fee upon Lok Adalat settlement). Under Supreme Court K.N. Govindan Kutty Menon v. C.D. Shaji (2012), even a Section 138 criminal complaint settled in Lok Adalat becomes an executable Civil Court Decree.",
    primingChecklist: [
      "Extract pending s.138 / s.25 CNR numbers and serve joint referral notice to borrower & counsel",
      "Quantify exact statutory court-fee refund certificate claim under Section 16 Court Fees Act",
      "Highlight non-bailable warrant (NBW) & CIBIL/CIC settlement clearance leverage in T-21 notice",
      "Ensure consent terms specify exact post-dated UPI/RTGS tranches and default execution clause",
    ],
    nodalSOP:
      "File bulk Section 20(1) referral memos before the Trial Court 30 days ahead of the quarterly NALSA calendar while serving the borrower a pre-Lok-Adalat compounding offer. Obtain both the Section 21 Award and the Court Fee Refund Certificate on sitting day.",
    targetOutcome: "100% civil court-fee refund + instant criminal-to-civil decree conversion.",
  },
  {
    id: "broken-award-execution",
    badge: "Broken Lok Adalat Awards",
    shortLabel: "Decree Execution (O.21)",
    title: "Enforcing Defaulted Lok Adalat Consent Awards Directly Under CPC Order XXI",
    portfolioProfile:
      "Accounts where borrowers attended the National Lok Adalat, signed a compromise award with 10% upfront payment to buy time, and then defaulted on the remaining 60–90 day settlement installments.",
    bottleneckPattern:
      "Many branch managers mistakenly treat a defaulted Lok Adalat settlement as a 'failed informal OTS' and start fresh reminder calls or file a brand-new civil suit—wasting 3+ years and forfeiting the binding decree they already hold.",
    statutoryLeverage:
      "Section 21(1) & (2) LSA Act: Every Lok Adalat award is deemed a final, non-appealable Civil Court Decree (State of Punjab v. Jalour Singh, 2008). Under Order XXI CPC (Rules 30, 41, 48 & 54), the bank bypasses trial completely and moves straight to Execution Petition for salary attachment, bank garnishee freeze, or immovable property sale.",
    primingChecklist: [
      "Certified copy of signed Lok Adalat Award containing explicit full-liability default-revival clause",
      "Certified Bankers' Books ledger evidencing unpaid balance after credit of upfront Lok Adalat token",
      "7-day Pre-Execution Intimation Notice citing Order XXI Rule 41 asset affidavit & employer garnishee",
      "Verified borrower employer details, secondary UPI/bank accounts, or Vahan/CERSAI asset trace",
    ],
    nodalSOP:
      "Serve an urgent 7-day Advocate Execution Warning Notice attaching the certified Section 21 Award the moment an installment lapses past grace period. For non-payers, file an Execution Petition directly in the jurisdictional Civil Court under Order XXI without paying fresh ad-valorem suit court fees.",
    targetOutcome: "Zero trial delay; immediate bank-account garnishee or Order XXI Rule 48 salary deduction.",
  },
];

export default function BankLokAdalatScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(LOK_ADALAT_SCENARIOS[0].id);
  const activeTab =
    LOK_ADALAT_SCENARIOS.find((tab) => tab.id === activeTabId) || LOK_ADALAT_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
        {LOK_ADALAT_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[165px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-transparent text-slate-700 hover:bg-white hover:text-slate-900"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-80 mb-0.5">
                {tab.badge}
              </span>
              <span className="truncate block">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm transition-all duration-200">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
              Bank NPA Playbook &middot; {activeTab.badge}
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeTab.title}
            </p>
            <p className="text-xs text-slate-500 mt-1">{activeTab.portfolioProfile}</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-right">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Institutional Impact
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600">
              {activeTab.targetOutcome.split(";")[0]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Why Traditional Bank Drives Fail Here
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeTab.bottleneckPattern}
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Statutory Power &amp; Decree Mechanism
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {activeTab.statutoryLeverage}
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-1">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Mandatory Pre-Sitting Priming &amp; Documentation Controls
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeTab.primingChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700"
                >
                  <span className="text-[#DC2626] font-bold font-mono shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mt-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Regional Recovery Manager &amp; Nodal Officer Execution SOP
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
              {activeTab.nodalSOP}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Expected Result: {activeTab.targetOutcome}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
