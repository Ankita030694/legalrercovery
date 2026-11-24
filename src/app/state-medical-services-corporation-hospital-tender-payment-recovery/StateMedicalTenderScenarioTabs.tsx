"use client";

import React, { useState } from "react";

interface TenderScenario {
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

const TENDER_SCENARIOS: TenderScenario[] = [
  {
    id: "state-corp-treasury-freeze",
    tabLabel: "State Corp Treasury Freezes",
    ticketBand: "₹45L – ₹4.8 Cr State Formulation / Kit Tender",
    title: "State Medical Corp (UPMSCL / BMSICL / RMSCL / KMSCL) Accepts Delivery but Stalls Payment for 12+ Months Citing 'Budget Token Freeze'",
    failureMechanism:
      "A pharmaceutical formulation manufacturer or surgical disposables vendor fulfills an annual rate contract for a State Medical Services Corporation. Stock is inspected at state drug warehouses, accepted, and distributed across district hospitals. However, the Corporation withholds ₹1.5 Cr+ across 14 invoices for 12 to 18 months, claiming 'budget sanction pending from Finance Department', 'administrative token lapsed', or 'audit committee review'. The tender document contains a standard adhesion clause: 'No interest shall be payable on delayed payments under any circumstances.'",
    lawfulProtocol:
      "Statutory MSMED Act Section 16 Override + Silpi Industries Supreme Court Precedent + High-Level ACS Health Legal Demand + MSEFC Samadhaan Filing",
    statutoryHooks:
      "MSMED Act 2006 ss.15, 16, 17, 18; Supreme Court ruling in Silpi Industries (2021) & Vaishno Enterprises (2021); Gujarat State Civil Supplies Corp v. Mahakali Foods (2023); Bharatiya Sakshya Adhiniyam 2023 s.63 (Warehouse Store Receipts & Stock Ledger Metadata).",
    executionSteps: [
      {
        step: "Dissect & Nullify Tender 'No-Interest' Adhesion Clause",
        detail:
          "Serve a Legal Demand citing Supreme Court law (Silpi Industries) establishing that Section 16 MSMED compound interest (3x RBI Bank Rate) statutorily overrides any restrictive non-interest clause in government tender rate contracts.",
      },
      {
        step: "Reconcile Central Drug Warehouse Good Received Notes (GRN)",
        detail:
          "Compile batch-wise GRNs, Form 39 test releases, consignee stock vouchers, and warehouse inward registers digitally certified under Section 63 BSA 2023 to establish undisputed delivery and deemed acceptance.",
      },
      {
        step: "MSEFC Statutory Reference & Administrative Finance Escalation",
        detail:
          "File on MSME Samadhaan for full principal + 3x RBI compound interest while marking formal demand copies to the Additional Chief Secretary (Health), Managing Director, and State Finance Controller.",
      },
    ],
    recoveryLeverage:
      "Statutory Superiority & Mandatory Pre-Deposit: State Corporations cannot plead lack of treasury budget against statutory MSMED claims. Under Section 19, the Corporation must deposit 75% of the claimed amount in court to challenge any MSEFC award.",
  },
  {
    id: "gem-crac-ddo-withholding",
    tabLabel: "GeM Auto-CRAC & DDO Default",
    ticketBand: "₹12L – ₹1.4 Cr Govt Hospital / AIIMS Supplies",
    title: "Goods Delivered on GeM, Auto-CRAC Generated Within 10 Days, but Hospital DDO Blocks Online Treasury Disbursal",
    failureMechanism:
      "A medical equipment or surgical supplier delivers diagnostic instruments, hospital ICU consumables, or orthopedic implants to Central Government hospitals (AIIMS, Safdarjung, ESIC, Railway, or Defence hospitals) via the Government e-Marketplace (GeM). The hospital takes physical delivery, and under GeM General Terms and Conditions (GTC), the Consignee Receipt and Acceptance Certificate (CRAC) auto-generates after 10 days without rejection. Despite an active CRAC, the Drawing and Disbursing Officer (DDO) refuses to process the online bill, citing 'internal verification pending' or 'end-of-year token exhaustion'.",
    lawfulProtocol:
      "GeM GTC Clause 12(i) Enforcement + DoE OM 1% Monthly Penal Interest Mandate + GeM Samadhaan Dispute Escalation + Section 18 MSMED Reference",
    statutoryHooks:
      "GeM GTC v4.0 Clause 12 (Mandatory Payment Within 10 Days Post-CRAC); Ministry of Finance, Dept of Expenditure OM No. F.6/18/2019-PPD (Penal Interest on Delayed GeM Payments); MSMED Act 2006 ss.15 & 16; General Financial Rules (GFR) 2017 Rule 149.",
    executionSteps: [
      {
        step: "Extract Immutable GeM System CRAC & Consignee Milestones",
        detail:
          "Download time-stamped GeM system logs confirming delivery challan upload, auto-CRAC generation date, and DDO invoice verification status with SHA-256 digital validation under Section 63 BSA 2023.",
      },
      {
        step: "Lodge Formal Escalation on GeM Portal & Serve DoE OM Penal Notice",
        detail:
          "Initiate formal incident logging on GeM Samadhaan ticketing rail. Issue a Legal Demand to the Hospital Director and DDO asserting 1% per month penal interest under DoE guidelines and 3x RBI rate under MSMED Act.",
      },
      {
        step: "Invoke Central Public Grievance CPGRAMS & MSME Samadhaan Dual Rail",
        detail:
          "Lodge parallel claims under CPGRAMS (monitored by the Prime Minister's Office) and MSME Facilitation Council, forcing administrative clearance within 21 to 30 days before audit strictures arise.",
      },
    ],
    recoveryLeverage:
      "GeM Administrative Rating Freeze: Under GeM GTC, continued payment default freezes the hospital buyer's procurement rating on GeM, exposing DDOs to administrative scrutiny and audit objections by the Comptroller and Auditor General (CAG).",
  },
  {
    id: "malicious-nskq-deduction",
    tabLabel: "Malicious NSKQ Lab Deductions",
    ticketBand: "₹25L – ₹2.5 Cr Bulk Antibiotic / I.V. Fluid Tenders",
    title: "Corporation Alleges 'Not of Standard Quality' (NSKQ) Months After Consumption to Block Multi-Batch Payments",
    failureMechanism:
      "Months after batches of parenteral infusions, antibiotics, or surgical gloves have been supplied, distributed to Primary Health Centers (PHCs), and largely consumed by patients, the State Medical Corporation issues a surprise 'Not of Standard Quality' (NSKQ) notice based on an in-house or empaneled laboratory test. Without providing raw chromatographic data or analytical test protocols, the Corporation withholds payments across completely unrelated, undisputed batches and levies arbitrary 5x penalty debits.",
    lawfulProtocol:
      "Drugs & Cosmetics Act Section 25(3)/(4) Statutory Appellate Re-Test + Section 73 Contract Act Defense + High Court Interim Direction",
    statutoryHooks:
      "Drugs and Cosmetics Act, 1940 ss.25(3) & 25(4) (Conclusive Evidence of CDL Kolkata); Indian Contract Act 1872 ss.70 & 73; Sale of Goods Act 1930 s.42 (Acceptance of Goods by Consumption); Commercial Courts Act 2015 s.12A.",
    executionSteps: [
      {
        step: "Serve 28-Day Statutory Notification for Central Lab Re-Testing",
        detail:
          "Within 28 days of receiving the Government Analyst report, serve statutory notice under Section 25(3) expressing intention to adduce evidence in controversion, compelling referral of the control sample to the Central Drugs Laboratory (CDL Kolkata/Kasauli).",
      },
      {
        step: "Document Prior Distribution & Full Consumption by Hospital Wards",
        detail:
          "Establish via hospital consumption records and warehouse issue registers that the Corporation accepted and utilized the batches, barring belated rejection under Section 42 of the Sale of Goods Act, 1930.",
      },
      {
        step: "File Commercial Injunction Against Unilateral Cross-Batch Set-Offs",
        detail:
          "Challenge the Corporation's practice of deducting disputed NSKQ penalties from unrelated running bills, securing commercial court restraint orders against unauthorized financial debit notes.",
      },
    ],
    recoveryLeverage:
      "Conclusive Statutory Evidence: Under Section 25(4) of the Drugs Act, CDL reports supersede state lab findings conclusively. Once statutory re-testing is demanded, the Corporation cannot unilaterally forfeit payments or declare the vendor an NSKQ defaulter.",
  },
  {
    id: "retaliatory-blacklisting-stay",
    tabLabel: "Blacklisting & PBG Forfeiture",
    ticketBand: "₹50L – ₹10 Cr Institutional Procurement Portfolios",
    title: "Corporation Threatens Blacklisting / Debarment & PBG Forfeiture in Retaliation for Filing MSME Samadhaan",
    failureMechanism:
      "When a medical supplier files an MSEFC claim or serves a Legal Demand for overdue bills, tender officials react vindictively by issuing a Show-Cause Notice for debarment/blacklisting, citing vague 'breach of tender conditions' or 'uncooperative conduct'. Concurrently, the Corporation threatens to encash the supplier's Performance Bank Guarantee (PBG) or forfeit their Earnest Money Deposit (EMD), which would trigger automated debarment across all Central and State government tenders.",
    lawfulProtocol:
      "Article 226 High Court Writ Petition + Patel Engineering & Erusian Equipment Natural Justice Doctrine + Injunction on PBG Encashment",
    statutoryHooks:
      "Constitution of India Article 226 & Article 14; Supreme Court holdings in Patel Engineering (2012), Erusian Equipment (1975), and UMC Technologies (2015); Specific Relief Act 1963 s.41; MSMED Act 2006 s.24 (Overriding Effect).",
    executionSteps: [
      {
        step: "Identify Procedural Violations in the Show-Cause Notice",
        detail:
          "Analyze the notice against Supreme Court law (UMC Technologies): a blacklisting show-cause notice is void ab initio if it does not explicitly state that blacklisting/debarment is proposed and detail specific objective infractions.",
      },
      {
        step: "File Emergency Writ Petition under Article 226 in State High Court",
        detail:
          "Move the High Court demonstrating mala fide retaliation aimed at stifling statutory MSMED recovery rights, praying for an immediate stay on blacklisting proceedings and tender exclusion.",
      },
      {
        step: "Secure Restraint on Bank Guarantee Encashment for Egregious Fraud",
        detail:
          "Demonstrate special equities and irretrievable injustice to obtain an ad-interim injunction restraining the beneficiary bank from honoring retaliatory PBG invocation while bills remain unpaid.",
      },
    ],
    recoveryLeverage:
      "Constitutional Stays & Anti-Retaliation Immunity: High Courts routinely quash arbitrary debarment notices that lack proportionality and natural justice, insulating the supplier's nationwide bidding eligibility while dues are recovered.",
  },
];

export default function StateMedicalTenderScenarioTabs() {
  const [activeTab, setActiveTab] = useState(TENDER_SCENARIOS[0].id);
  const activeScenario =
    TENDER_SCENARIOS.find((s) => s.id === activeTab) || TENDER_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation Header */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-1.5 sm:p-2 gap-1.5 sm:gap-2">
        {TENDER_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`flex-1 min-w-[140px] sm:min-w-[170px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-red-100 text-red-800">
            {activeScenario.ticketBand}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Institutional Procurement Recovery Playbook
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug mb-3">
            {activeScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-1">
              Procurement Bottleneck &amp; Failure Mode:
            </strong>
            {activeScenario.failureMechanism}
          </p>
        </div>

        {/* Protocol & Statutory Hooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="block text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1">
              Lawful Escalation Protocol
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {activeScenario.lawfulProtocol}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
            <span className="block text-[11px] font-black uppercase tracking-wider text-red-400 mb-1">
              Statutory Authorities &amp; Precedents
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed">
              {activeScenario.statutoryHooks}
            </p>
          </div>
        </div>

        {/* 3-Step Action Sequence */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            SOP Execution Sequence
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.executionSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold text-center leading-6 mb-2">
                    {idx + 1}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                    {step.step}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leverage Box */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-2.5">
            <span className="text-base text-amber-700 font-bold shrink-0">&bull;</span>
            <div className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
              <strong className="font-bold text-amber-950">Statutory Leverage: </strong>
              {activeScenario.recoveryLeverage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
