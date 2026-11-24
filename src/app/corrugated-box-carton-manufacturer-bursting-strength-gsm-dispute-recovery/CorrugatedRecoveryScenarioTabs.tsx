"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  failureMode: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "post-dispatch-bf-debit",
    tabLabel: "Post-Dispatch 15% BF Debit",
    title: "Buyer Packed & Exported Finished Goods in Your Cartons—Then Issued a 15% Debit Note 45 Days Later",
    failureMode:
      "An FMCG, garment exporter, or pharma plant receives 25,000 5-ply RSC corrugated cartons against clean Gate Entry and GRN, fills them on its packaging line, ships domestic trucks or export containers, and 45–75 days later issues a unilateral 15% debit note citing 'low Bursting Factor (BF)', 'GSM drop', or 'collapsed pallets at destination'.",
    statutoryCounter:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have irrevocably accepted goods the moment they perform any act inconsistent with the seller's ownership—and packing, taping, strapping, and dispatching finished products inside corrugated cartons is the textbook act of consumption and acceptance. Furthermore, under Section 15–16 of the MSMED Act, 2006, if no written objection was raised within 15 days of delivery, the 'day of deemed acceptance' locks in automatically and unilateral debit notes issued weeks later are void in law.",
    actionSteps: [
      {
        step: "Rebut Debit Note Within 72 Hours with Mill Test Certificates",
        detail:
          "Issue a formal written rejection of the debit note enclosing your Kraft Mill Test Certificate (MTC), in-house Bursting Strength Tester (BST) lot log, and clean signed GRN—refusing to issue any GST Credit Note under Section 34 CGST Act.",
      },
      {
        step: "Demand Proof of Joint Pre-Use NABL / IIP Lab Sampling",
        detail:
          "Put the buyer on notice that ex-parte tests conducted on crushed post-transit cartons (without sealed pre-use control samples tested at an NABL/IIP lab at 27°C ± 1°C and 65% ± 2% RH per IS 1060) have zero evidentiary weight.",
      },
      {
        step: "Trigger Section 43B(h) + MSEFC 3x RBI Compound Interest Notice",
        detail:
          "Serve a Fact-Verified Statutory Demand Notice notifying the buyer's CFO and Statutory Auditor that withholding payment beyond 45 days triggers full expense disallowance under Section 43B(h) of the Income Tax Act plus monthly-compounded 3x RBI interest.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.41–42 | MSMED Act ss.15–18 | Income Tax Act s.43B(h) | IS 2771 / IS 1060",
  },
  {
    id: "monsoon-moisture-excuse",
    tabLabel: "Monsoon Humidity & Moisture",
    title: "Buyer Stored Cartons in a Damp Godown During Monsoon—Then Blamed Factory GSM / BCT",
    failureMode:
      "Between June and September, buyers stack flat-bundled corrugated shippers on damp concrete floors, open loading bays, or near uninsulated metal roofs. Paperboard is hygroscopic: ambient humidity above 80% RH raises board moisture from the standard 7%–9% to 14%–18%, causing Box Compression Test (BCT) and Edge Crush Test (ECT) values to drop by 35%–50%—which the buyer blames on 'under-spec kraft liner'.",
    statutoryCounter:
      "Under Section 26 of the Sale of Goods Act, 1930, risk of post-delivery deterioration passes to the buyer upon delivery at the factory gate or buyer dock unless otherwise agreed. Indian Standard IS 2771 (Part 1) and IS 1060 mandate paperboard conditioning at controlled temperature (27°C ± 1°C) and 65% ± 2% Relative Humidity prior to Bursting Strength or BCT evaluation. A buyer cannot shift its own improper warehousing and ambient moisture absorption onto a compliant box manufacturer.",
    actionSteps: [
      {
        step: "Preserve Dispatch-Day Moisture Meter & Weight Slip Logs",
        detail:
          "Document bundle weight, caliper thickness, Cobb sizing value (water absorption g/m²), and pin-type moisture readings (7%–9%) at dispatch alongside covered-truck loading photographs timestamped under BSA 2023 s.63.",
      },
      {
        step: "Invoke Passing of Risk (Section 26) & IS 1060 Conditioning Norms",
        detail:
          "Demonstrate in your Advocate Notice that once goods crossed the buyer's gate dry and signed on the E-Way Bill / LR without moisture remark, ambient monsoon absorption during buyer storage is strictly at buyer's risk.",
      },
      {
        step: "Offer Joint Oven-Dry Re-Conditioned Lab Audit on Sealed Control Stock",
        detail:
          "Call the buyer's bluff by offering a joint IIP (Indian Institute of Packaging) or NABL lab test on unconsumed cartons conditioned to 65% RH—exposing fabricated QC pretexts before MSEFC or Commercial Court.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.26 & 42 | IS 2771 (Part 1) | IS 1060 Conditioning Standard | BSA 2023 s.63",
  },
  {
    id: "kraft-paper-rate-hike",
    tabLabel: "Kraft Paper Hike Freeze",
    title: "Mill Kraft Paper Jumped ₹5–₹8/kg—Buyer Kept Lifting Boxes & Froze Rate-Revision Invoices",
    failureMode:
      "Waste-paper and kraft mill prices surge sharply by ₹4,000–₹8,000 per MT across 16 BF to 28 BF reels. Your corrugated factory sends a written rate-revision circular effective 1st of the month; procurement verbally says 'keep dispatching, PO amendment is in SAP workflow', accepts 15 trucks of revised-rate tax invoices, claims full GST Input Tax Credit (ITC) via GSTR-2B, and then freezes the entire running ledger citing 'old PO price'.",
    statutoryCounter:
      "Under Section 70 of the Indian Contract Act, 1872 (obligation of person enjoying benefit of non-gratuitous act) read with Section 9 of the Sale of Goods Act, 1930, a buyer who receives revised-rate GST Tax Invoices, consumes the cartons in commercial production, and avails GSTR-2B Input Tax Credit on the revised taxable value is legally estopped from paying only the obsolete rate. Availing ITC without reversing GST constitutes an unequivocal statutory admission of the invoiced consideration.",
    actionSteps: [
      {
        step: "Capture GSTR-1 / GSTR-2B ITC Acceptance & Revised Rate Circulars",
        detail:
          "Compile your email/WhatsApp rate-revision notice, Kraft Mill price-hike circulars, purchase team acknowledgments ('dispatch urgently, amendment coming'), and GST portal filings proving the buyer retained full ITC on the revised invoice value.",
      },
      {
        step: "Split Undisputed Base-Rate Dues vs. Rate-Revision Differential",
        detail:
          "Demand immediate release of 100% undisputed base-rate ledger within 7 days (blocking buyer from holding ₹20L hostage over a ₹1.5L rate delta) alongside statutory claim for the accepted revised differential.",
      },
      {
        step: "Stop Open-Credit Supply & Enforce Section 43B(h) Audit Alert",
        detail:
          "Transition supply to advance/LC terms immediately and copy the buyer's Finance Controller on an Advocate Demand Notice detailing GST ITC reversal risk under Section 16(2) second proviso (180-day payment rule) plus Section 43B(h).",
      },
    ],
    legalProvision: "Indian Contract Act s.70 | Sale of Goods Act s.9 | CGST Act s.16(2) 180-Day ITC Rule | MSMED s.15",
  },
  {
    id: "120-day-portal-credit",
    tabLabel: "120-Day Portal Credit Trap",
    title: "E-Commerce, Garment & Pharma Buyers Enforce 90–120 Day Credit Against Udyam Box Units",
    failureMode:
      "Large D2C aggregators, garment export houses, and pharma plants onboard automatic and semi-auto corrugated box manufacturers (over 90% of FCBM units are Micro or Small Enterprises under Udyam) on standard 90-to-120-day vendor portal payment cycles—while paper mills demand cash or 15–21 day payment from the box maker.",
    statutoryCounter:
      "Section 24 of the MSMED Act, 2006 grants an absolute statutory override: Sections 15 to 23 prevail notwithstanding anything inconsistent in any Vendor Agreement, Purchase Order, or SAP portal term. Even if you signed a 90-day or 120-day credit agreement, the maximum legal credit ceiling is strictly 45 days (or 15 days without written agreement). Moreover, Section 43B(h) of the Income Tax Act, 1961 disallows the buyer from deducting your entire packaging purchase expense in that financial year if unpaid beyond 45 days as of March 31—imposing an immediate 25.17%–34.94% corporate tax penalty on the buyer.",
    actionSteps: [
      {
        step: "Serve Formal Udyam Status & Section 43B(h) Tax-Impact Notice",
        detail:
          "Transmit your Udyam Micro/Small Registration Certificate via email and RPAD along with an invoice-wise Day-45 due schedule, explicitly copying the buyer's CFO, Tax Head, and Statutory Auditor.",
      },
      {
        step: "File MSEFC Samadhaan Reference on Principal + 3x RBI Interest",
        detail:
          "Once an invoice crosses Day 45, file an online claim before your State Micro & Small Enterprises Facilitation Council (MSEFC) demanding principal plus monthly-compounded interest at 3x RBI bank rate (typically ~18%–19.5% p.a.).",
      },
      {
        step: "Parallel NI Act s.138 or Order XXXVII Suit for High-Value Arrears",
        detail:
          "Where buyer cheques bounce or dues exceed ₹10 lakh with undisputed GRNs, combine MSEFC interest enforcement with NI Act Section 138 criminal prosecution (with 20% s.143A interim deposit) or Commercial Court Order XXXVII summary recovery.",
      },
    ],
    legalProvision: "MSMED Act ss.15, 16, 18 & 24 Override | Income Tax Act s.43B(h) | NI Act ss.138 & 143A",
  },
];

export default function CorrugatedRecoveryScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Interactive Scenario Selector Pills */}
      <div
        role="tablist"
        aria-label="Corrugated box manufacturer dispute scenarios"
        className="flex flex-wrap gap-2"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
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
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-white shrink-0">
            FCBM Recovery Track
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Buyer Deduction / Default Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.failureMode}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Creditor Counter-Strike
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Factory Execution Protocol
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {st.step}
                  </strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500">
            Governing Statutes:
          </span>
          <span className="font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            {current.legalProvision}
          </span>
        </div>
      </div>
    </div>
  );
}
