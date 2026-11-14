"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  bottleneck: string;
  statutoryReality: string;
  saasGap: string;
  bundledAdvantage: string;
  steps: {
    step: string;
    detail: string;
  }[];
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "mid-market-nbfc-aum",
    tabLabel: "₹50–500 Cr AUM NBFC",
    badge: "Zero Annual Lock-In",
    title: "Mid-Market NBFC Quoted Heavy Annual SaaS Fees for 200–1,500 Monthly Notices",
    bottleneck:
      "Mid-sized Base/Middle-Layer NBFCs (₹50 Cr to ₹2,000 Cr AUM) rarely have 50,000+ monthly defaults to amortize enterprise SaaS platform licenses, minimum monthly seat commitments, and 12-week API integration fees.",
    statutoryReality:
      "Under Section 29 and Section 33 of the Advocates Act, 1961, software automation cannot sign or issue a statutory Legal Notice in its own right—only an enrolled Advocate can issue formal pre-litigation demand notices on advocate letterhead.",
    saasGap:
      "After paying annual SaaS subscription and onboarding fees to an enterprise collection suite, the NBFC CFO still has to empanel an external law firm, pay separate per-notice drafting retainers, and manually reconcile Speed Post RPAD tracking.",
    bundledAdvantage:
      "LegalRecovery.in eliminates fixed annual software lock-in by bundling batch CSV dispatch (Email + WATI WhatsApp + India Post Speed Post RPAD) with AMA Legal Solutions advocate representation under a single transparent per-notice/retainer model.",
    steps: [
      {
        step: "1. Pilot a Single Overdue Case (₹999)",
        detail:
          "Test Advocate drafting, tri-channel dispatch, and borrower settlement response on 1 live overdue account without procurement committee delays.",
      },
      {
        step: "2. Upload 10 to 10,000+ Accounts via CSV",
        detail:
          "Zero-code CSV ingestion maps borrower name, loan ID, DPD bucket, e-NACH bounce date, and overdue breakup in under 24 hours.",
      },
      {
        step: "3. Pay Only for Notices Dispatched",
        detail:
          "Convert fixed SaaS capex into variable per-case opex aligned directly to monthly NPA/SMA-2 inflow.",
      },
    ],
  },
  {
    id: "fintech-enach-bounce",
    tabLabel: "Digital Lender / Fintech",
    badge: "30-Day PSS s.25 Clock",
    title: "High-Velocity e-NACH / UPI AutoPay Bounces Requiring 30-Day Statutory Notices",
    bottleneck:
      "Digital lending fintechs and BNPL platforms face tight 30-day statutory windows under Section 25 of the Payment and Settlement Systems Act, 2007 after an e-NACH dishonour, yet pure telecalling bots fail to create legal deterrence.",
    statutoryReality:
      "To preserve criminal prosecution rights under Section 25 PSS Act (read with Section 138 NI Act procedure), the lender must issue a formal written demand notice within 30 days of receiving the dishonour memo from the bank/NPCI.",
    saasGap:
      "Generic collection SaaS tools trigger automated SMS/WhatsApp reminders that lack advocate authority, fail to satisfy the strict Section 25 statutory demand format, and omit BSA 2023 Section 63 electronic hash certificates.",
    bundledAdvantage:
      "LegalRecovery.in auto-generates Advocate-signed Section 25 demand notices within the 30-day window, dispatches them across Email, verified WATI WhatsApp, and Speed Post RPAD, and archives BSA 2023 s.63 server-hash certificates.",
    steps: [
      {
        step: "1. NPCI Dishonour Memo Ingestion",
        detail:
          "Batch-upload dishonour dates, UMRN mandate references, and overdue EMI ledgers directly via CSV or institutional desk.",
      },
      {
        step: "2. Tri-Channel Statutory Service",
        detail:
          "Simultaneous Email, WATI WhatsApp, and Speed Post RPAD dispatch establishes unimpeachable proof of service even if the borrower ignores calls.",
      },
      {
        step: "3. Direct ODR & Settlement Routing",
        detail:
          "Embedded payment/settlement links route cooperative borrowers to instant closure while non-payers advance to ODR/Section 25 escalation.",
      },
    ],
  },
  {
    id: "reply-triage-bottleneck",
    tabLabel: "Reply Triage & ODR",
    badge: "Advocate Reply Triage",
    title: "Inbound Borrower Replies, Dispute Claims & Restructuring Requests",
    bottleneck:
      "When 1,000+ legal notices go out in a batch, 15%–25% of borrowers reply via email, WhatsApp, or advocate counter-notices alleging wrong billing, restructuring hardship, or RBI Fair Practices Code grievances.",
    statutoryReality:
      "Unanswered borrower dispute letters or mishandled RBI Ombudsman complaints during recovery create severe regulatory exposure under the RBI Master Direction on Outsourcing and Digital Lending.",
    saasGap:
      "Pure software platforms dump inbound replies into generic ticketing queues or leave the NBFC's internal 2-person legal team overwhelmed, forcing expensive ad-hoc external counsel billing.",
    bundledAdvantage:
      "LegalRecovery.in includes structured Reply Triage backed by AMA Legal Solutions: replies are categorized into Full Settlement, EMI Restructuring, Genuine Billing Dispute, or Frivolous Delay, with advocate-vetted responses and ODR routing.",
    steps: [
      {
        step: "1. Automated Inbound Capture",
        detail:
          "All borrower replies across Email and WhatsApp are linked directly to the Loan Account ID and original notice hash.",
      },
      {
        step: "2. Legal Triage Classification",
        detail:
          "Advocates separate genuine hardship/restructuring requests from tactical disputes and issue compliant counter-replies.",
      },
      {
        step: "3. ODR / Lok Adalat / Arbitration Escalation",
        detail:
          "Unresolved accounts move seamlessly into pre-litigation Online Dispute Resolution or Section 21 arbitration without switching vendors.",
      },
    ],
  },
  {
    id: "lap-cv-co-lending",
    tabLabel: "LAP / CV / Co-Lending",
    badge: "Multi-Statute Routing",
    title: "Secured LAP, Commercial Vehicle & Co-Lending Portfolios Needing Bespoke Notices",
    bottleneck:
      "Mid-market NBFCs rarely have one uniform loan product; a single lender often manages unsecured SME loans, Commercial Vehicle (CV) hypothecation, sub-₹20L LAP mortgages, and 80:20 Co-Lending books.",
    statutoryReality:
      "Each asset class demands distinct statutory language: MV Act s.51(5) Form 36 for CV, Order 34/37 CPC or Arbitration s.21 for non-SARFAESI LAP, and Servicing POA recitals for Bank-NBFC co-lending.",
    saasGap:
      "Template-driven SaaS suites struggle with multi-statute legal customization, often dispatching generic 'loan overdue' PDFs that fail judicial scrutiny on locus standi or uncompounded RBI penal charges.",
    bundledAdvantage:
      "AMA Legal Solutions vets every product-specific template—separating principal, contractual interest, and uncompounded penal charges—so notices hold up in District Courts, DRT, and Arbitral Tribunals.",
    steps: [
      {
        step: "1. Product-Specific Template Mapping",
        detail:
          "Configure separate statutory clauses for Unsecured SME, CV/CE, Gold s.176, and Co-Lending Servicing POA accounts.",
      },
      {
        step: "2. RBI Penal Charges Compliance",
        detail:
          "Automated ledger formatting ensures penal charges are never capitalized into compounding interest.",
      },
      {
        step: "3. Pan-India Advocate Continuity",
        detail:
          "The same legal desk that issues the pre-litigation notice handles subsequent Section 9, Section 25, or Order 37 filings.",
      },
    ],
  },
];

export default function NbfcVendorScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Strip */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="NBFC Vendor Evaluation Scenarios">
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">{current.title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Operational Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Statutory Reality (India)
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryReality}
            </p>
          </div>
          <div className="bg-amber-50/80 rounded-xl border border-amber-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">
              Where Pure Collection SaaS Falls Short
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">{current.saasGap}</p>
          </div>
          <div className="bg-emerald-50/80 rounded-xl border border-emerald-200 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Bundled LegalRecovery + AMA Legal Advantage
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.bundledAdvantage}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Recommended Execution Workflow
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.steps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-slate-200 p-3.5">
                <p className="text-xs font-extrabold text-[#DC2626] mb-1">{s.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
