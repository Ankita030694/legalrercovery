"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, FileText, Scale } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  badge: string;
  title: string;
  debtorTactic: string;
  statutoryRebuttal: string;
  evidenceRequired: string[];
  actionStep: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "hygiene-penalty",
    label: "1. Backdated Hygiene Fines",
    badge: "Most Common Trap",
    title: "Arbitrary 15%–30% Backdated Food-Quality or Hygiene Penalty Deducted at Payout",
    debtorTactic:
      "After 90–120 days of daily meal service without a single written complaint, factory HR or college administration suddenly slaps a ₹4.5 Lakh 'unsatisfactory taste / hygiene penalty' or 'committee fine' right when you demand your overdue monthly invoices.",
    statutoryRebuttal:
      "Under Section 74 of the Indian Contract Act, 1872, unilateral liquidated penalties are unenforceable without proof of actual loss and contemporaneous notice. Furthermore, under Section 15 of the MSMED Act, 2006, if the buyer fails to raise a written quality objection within 15 days of receiving the monthly bill/service, the service is deemed accepted by law. Under the Supreme Court's Mobilox Innovations (2018) standard, un-sampled, post-demand quality allegations are 'moonshine' defenses.",
    evidenceRequired: [
      "Daily/monthly canteen committee sign-off registers with zero recorded food-quality warnings",
      "Absence of FSSAI food sample sealing memos, lab test reports, or contemporaneous show-cause emails",
      "GSTR-2B / GSTR-3B Input Tax Credit (ITC) availed by the factory or institution on your full tax invoices",
    ],
    actionStep:
      "Serve a Statutory Legal Notice rebutting the backdated deduction under Contract Act s.74 & MSMED s.15 deemed acceptance, demanding full principal plus 3x RBI bank rate compound interest.",
  },
  {
    id: "biometric-mismatch",
    label: "2. Biometric Count Dispute",
    badge: "Audit Deadlock",
    title: "Biometric / Meal-Coupon Count Reconciliation Deadlock Holding Up Entire Ledger",
    debtorTactic:
      "Management claims their biometric turnstile or ERP coupon logs show 8% fewer plates than your kitchen register and freezes 100% of four months' bills (₹18+ Lakh) indefinitely until 'reconciliation completes.'",
    statutoryRebuttal:
      "Under Section 15 & 16 of the MSMED Act and Order XII Rule 6 CPC (Judgment on Admissions), a buyer cannot withhold the undisputed 92% base billing over an alleged 8% reconciliation variance. Even if a genuine count discrepancy exists, the undisputed portion becomes immediately payable within 45 days, and withholding the entire ledger triggers mandatory compound interest at 3x the RBI bank rate plus Income Tax Act Section 43B(h) expense disallowance.",
    evidenceRequired: [
      "Daily biometric/RFID tap CSV exports or physical meal-coupon counterfoils signed by shift supervisors",
      "Minimum Guaranteed Pax (MGP) clause in the Canteen Service Agreement",
      "Kitchen logbooks, LPG/ration consumption invoices, and shift-wise headcount emails",
    ],
    actionStep:
      "Issue a bifurcated Demand Notice demanding immediate release of the 92% undisputed principal within 7 days and calling for joint BSA s.63-certified biometric audit for the remaining 8%.",
  },
  {
    id: "hostage-kitchen",
    label: "3. Hostage Kitchen & Deposit",
    badge: "Operational Blackmail",
    title: "Client Threatens Security Deposit Forfeiture If Caterer Stops Daily Meal Service",
    debtorTactic:
      "While owing 4 months of mess bills, the factory or university warns that if you suspend breakfast/lunch tomorrow due to zero cash for vegetables and LPG, they will forfeit your ₹5–10 Lakh security deposit and blacklist you for 'abandoning essential services.'",
    statutoryRebuttal:
      "Under Section 51 & 54 of the Indian Contract Act, 1872 (Reciprocal Promises), a contractor's obligation to continue supplying daily perishable meals is contingent on the employer honouring agreed payment cycles. A party in material breach of 120-day payment terms cannot compel performance at the vendor's insolvency or forfeit security deposits under Section 74.",
    evidenceRequired: [
      "Canteen Agreement payment clause (e.g., 15-day or 30-day credit limit) and Security Deposit receipt/BG",
      "Prior written reminders warning management of raw-material (LPG, dairy, vegetables) cashflow exhaustion",
      "Ledger showing 90–120 days of unpaid certified bills exceeding the security deposit value",
    ],
    actionStep:
      "Serve a 7-day Cure-or-Suspension Notice under Contract Act s.51/54 putting management on formal notice before demobilizing, preserving your full right to recover both unpaid bills and the security deposit.",
  },
  {
    id: "hospital-college-trust",
    label: "4. Trust / Hospital Delay",
    badge: "Section 43B(h) Leverage",
    title: "Private Hospital, University Trust, or MNC Subsidiary Stalling Beyond 45 Days",
    debtorTactic:
      "Hospital or university accounts payable teams cite 'trustee approval pending' or 'quarterly grant release' to stretch mess contractor payments to 120–180 days, assuming small caterers will not litigate.",
    statutoryRebuttal:
      "Under Section 43B(h) of the Income Tax Act, 1961 (effective AY 2024–25 onwards), any corporate or audited entity paying a Micro or Small Udyam-registered caterer beyond 45 days (with written agreement) or 15 days (without) loses tax deductibility on the entire catering expense in that financial year, adding ~25%–30% direct corporate tax liability. For non-profit trusts, MSEFC awards under MSMED s.18 carry mandatory 3x RBI compound interest and 75% pre-deposit barriers against appeals (s.19).",
    evidenceRequired: [
      "Caterer's Udyam Registration Certificate (Micro or Small Enterprise classification under NIC 5629)",
      "Signed Work Order / Canteen Contract and monthly tax invoices with GST E-Invoicing / HSN 9963",
      "Email trail with Hospital/College Purchase & Accounts officers acknowledging invoice receipt",
    ],
    actionStep:
      "Address the Demand Notice directly to the Statutory Auditor, CFO, and Managing Trustee highlighting Section 43B(h) tax disallowance and impending MSEFC Samadhaan reference.",
  },
];

export default function CanteenScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-md"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 ${
                  isActive
                    ? "bg-[#DC2626] text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {scenario.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold leading-snug">
                {scenario.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-amber-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              Debtor Delay / Deduction Tactic
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.debtorTactic}
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
              Creditor Statutory Rebuttal
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryRebuttal}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-[#DC2626] shrink-0" />
            Mandatory Evidence Packet for This Scenario
          </div>
          <ul className="space-y-2">
            {current.evidenceRequired.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-red-400 font-bold mb-0.5">
              Recommended Next Legal Step
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.actionStep}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
