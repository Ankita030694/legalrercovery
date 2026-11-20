"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
  badge: string;
  situation: string;
  risk: string;
  legalBasis: string;
  sopSteps: string[];
  sampleClause: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "mobilox-dispute-trap",
    tabTitle: "1. Mobilox Pre-Existing Dispute",
    badge: "NCLT s.9(5)(ii)(d) Dismissal Risk",
    situation:
      "Months before receiving your Section 8 notice, the corporate debtor sent a WhatsApp message or email complaining about delayed delivery, batch quality, or reconciliation discrepancies—even if they never raised a formal debit note.",
    risk:
      "Under Mobilox Innovations v. Kirusa Software, if the NCLT finds a 'plausible contention' requiring further investigation that pre-dates the Section 8 notice, it must reject the Section 9 petition without examining the merits.",
    legalBasis:
      "IBC 2016 Section 8(2)(a) & Section 9(5)(ii)(d); Mobilox Innovations (P) Ltd. v. Kirusa Software (P) Ltd., (2018) 1 SCC 353.",
    sopSteps: [
      "Audit the last 24 months of email, WhatsApp, and ERP/GRN logs before drafting Form 3 or Form 4.",
      "Isolate undisputed invoices where GST Input Tax Credit (ITC) was claimed in GSTR-2B or TDS was deducted in Form 26AS without protest.",
      "If a genuine quality email exists for Invoice #4, exclude Invoice #4 from the Section 8 schedule if the remaining undisputed invoices still cross ₹1 Crore.",
      "Attach signed delivery challans, e-Way Bills, and post-complaint balance confirmation emails to prove any alleged dispute is a sham 'moonshine' afterthought.",
    ],
    sampleClause:
      "The Corporate Debtor has unconditionally accepted delivery of goods under Tax Invoices Nos. [List] and availed full Input Tax Credit thereon without raising any written dispute prior to this Demand Notice. Any belated allegation is a sham moonshine defense barred under Mobilox Innovations.",
  },
  {
    id: "interest-po-clubbing",
    tabTitle: "2. ₹1 Cr Interest & PO Clubbing",
    badge: "Section 4 Threshold Engineering",
    situation:
      "Individual purchase orders or invoices are ₹20–₹35 Lakhs each, and total unpaid principal stands at ₹84 Lakhs—short of the ₹1 Crore Section 4 threshold unless contractual interest or multiple POs are clubbed.",
    risk:
      "NCLT benches routinely dismiss Section 9 petitions where creditors unilaterally add 18%–24% invoice interest without a signed agreement or mutual course of dealing, dropping the valid debt below ₹1 Crore.",
    legalBasis:
      "IBC 2016 Section 4 (MCA Notification S.O. 1205(E) dated 24.03.2020); Prashat Agarwal v. Vikash Parasrampuria (NCLAT, 2022) on clubbing contractual interest with principal.",
    sopSteps: [
      "Verify whether the MSA, PO, or counter-signed tax invoice explicitly stipulates a fixed delayed-payment interest rate (e.g., 18% p.a. after 30 days).",
      "Prepare a separate Annexure-II 'Computation of Default' table bifurcating Principal, Contractual Interest, and Due Date per invoice.",
      "Confirm all clubbed invoices arise from the same Operational Creditor and Corporate Debtor (distinct legal entities or sister concerns cannot be clubbed).",
      "Cross-check that no invoice falling within the Section 10A Covid-19 suspension window (25 March 2020 to 24 March 2021) is relied upon to cross ₹1 Crore.",
    ],
    sampleClause:
      "Pursuant to Clause [X] of the Purchase Order and Tax Invoice terms accepted by the Corporate Debtor, delayed payment attracts contractual interest at 18% per annum. Combined Principal (Rs. 84,50,000) plus Contractual Interest (Rs. 19,20,000) totals Rs. 1,03,70,000, exceeding the Section 4 threshold.",
  },
  {
    id: "authorization-defect",
    tabTitle: "3. Board Resolution & Advocate Sign",
    badge: "Macquarie Bank Compliance",
    situation:
      "A company's Sales Head or an external advocate issues a Section 8 Demand Notice without attaching a specific Board Resolution or Power of Attorney authorizing IBC action against the debtor.",
    risk:
      "Corporate debtors challenge locus standi in their 10-day reply and at the Section 9 admission stage, alleging the notice was issued by an unauthorized signatory.",
    legalBasis:
      "Rule 5(1) AAA Rules 2016; Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd., (2018) 2 SCC 674 (Advocate can issue s.8 notice if duly authorized).",
    sopSteps: [
      "Pass a Board Resolution (or Partner Authorization for LLPs) specifically authorizing the designated officer AND external Advocates to issue Section 8 notices and file Section 9 petitions.",
      "Mention the exact Board Resolution date and attach a certified true copy as an annexure to Form 3/Form 4.",
      "Ensure the Vakalatnama / Authority Letter explicitly covers Insolvency and Bankruptcy Code proceedings before NCLT.",
      "Verify the signatory's name, designation, and DIN/Bar Council enrollment number appear cleanly on the final page.",
    ],
    sampleClause:
      "This Demand Notice is issued by the undersigned Advocate under specific written instructions and Board Resolution dated [Date] passed by the Board of Directors of the Operational Creditor, a certified copy whereof is annexed hereto as Annexure-A.",
  },
  {
    id: "rule5-service-10a",
    tabTitle: "4. Rule 5(2) Service & s.10A Trap",
    badge: "Deemed Service & Covid Exclusion",
    situation:
      "The corporate debtor's registered office is locked or shifted, Speed Post returns 'Left', or the CFO includes invoices whose due dates fell during the Section 10A Covid-19 moratorium.",
    risk:
      "Defective service resets the 10-day statutory clock, while including any Section 10A default (25.03.2020 – 24.03.2021) renders the Section 9 petition permanently barred under the proviso to Section 10A.",
    legalBasis:
      "Rule 5(2)(a)-(b) of Insolvency & Bankruptcy (AAA) Rules 2016; IBC Section 10A Proviso; Ramesh Kymal v. Siemens Gamesa Renewable Power (2021) 3 SCC 224.",
    sopSteps: [
      "Pull fresh MCA Master Data on the day of dispatch to confirm the Corporate Debtor's current Registered Office address and official email ID.",
      "Serve Form 3/Form 4 simultaneously via Speed Post RPAD (with tracking & BSA s.63 certificate) AND official email to a Whole-Time Director / KMP.",
      "Scrub the invoice aging sheet to exclude every invoice whose default date falls between 25 March 2020 and 24 March 2021.",
      "Wait 10 clear calendar days from the latest confirmed date of delivery (postal delivery or email timestamp) before filing Form 5 under Section 9.",
    ],
    sampleClause:
      "Notice is served under Rule 5(2) of the AAA Rules, 2016 at the MCA-registered office via Speed Post RPAD and electronically to the Whole-Time Director's official email. None of the defaults claimed herein fell due within the Section 10A suspension period.",
  },
];

export default function IbcSection8ScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
          Operational Creditor NCLT Risk Playbooks
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          4 High-Stakes IBC Section 8 Failure Modes &amp; Pre-Emption SOPs
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Select an operational creditor bottleneck below to review the NCLT dismissal risk, statutory basis, step-by-step fix, and drafting clause.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="mt-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-950/70 text-amber-300 border border-amber-800/50">
            {current.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">{current.legalBasis}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Situation
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.situation}</p>
          </div>
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/50">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5">
              NCLT Rejection / Stay Risk
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.risk}</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/70">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Creditor Pre-Issuance SOP Steps
          </p>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-200 list-decimal pl-5">
            {current.sopSteps.map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border-l-4 border-[#DC2626]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">
            Recommended Form 3 / Form 4 Clause
          </p>
          <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
            &ldquo;{current.sampleClause}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
