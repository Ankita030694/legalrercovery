"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  statutoryTrigger: string;
  bottleneck: string;
  sambPlaybook: string[];
  outcomeMetric: string;
}

const EDRT_SCENARIOS: ScenarioItem[] = [
  {
    id: "collateral-shortfall",
    tabLabel: "1. Collateral Shortfall",
    badge: "RDB Act s.19(12)–(15) & s.19(3A)",
    title: "Mortgaged Collateral Realizes Less Than 60% of NPA Dues — Attaching Unmortgaged Personal Assets",
    statutoryTrigger: "Section 19(12), 19(13)(A), 19(15) & Section 19(3A) Asset Disclosure Mandate",
    bottleneck:
      "When a SARFAESI auction clears only ₹1.10 Cr against a ₹1.85 Cr NPA (or where depreciated plant/machinery leaves an unsecured balance), borrowers quietly transfer unencumbered residential plots, bank FDs, or trade receivables to relatives while the DRT OA drags through pleadings.",
    sambPlaybook: [
      "Do not wait for SARFAESI sale completion: file the Section 19 OA simultaneously under the Supreme Court Transcore doctrine and annex a dedicated Interlocutory Application (IA) under Section 19(12)–(13)(A) seeking ex-parte conditional attachment of identified unmortgaged assets.",
      "Invoke Section 19(3A) and 19(4) in the first listing so the Presiding Officer directs the borrower and every personal guarantor to file a sworn Affidavit of Assets (immovable properties, bank accounts, demat holdings, and debtors) within 30 days of summons.",
      "Support the Section 19(13)(A) IA with concrete asset-dissipation evidence—MCA charge-creation filings, sub-registrar encumbrance searches, or closure of factory premises—to obtain an immediate status-quo restraint under Section 19(12) before notice.",
      "Once the Recovery Certificate (RC) issues under Section 19(22), hand the pre-attached asset schedule straight to the Recovery Officer under Section 25 for direct proclamation of sale without fresh tracing delays.",
    ],
    outcomeMetric: "Locks unmortgaged borrower & guarantor wealth on Day 1–15 before transfer.",
  },
  {
    id: "cbs-evidence-challenge",
    tabLabel: "2. CBS & Penal Interest Defense",
    badge: "BBEA s.2A/4 + BSA s.63 + RBI Circular",
    title: "Borrower Challenges Uncertified Finacle/BaNCS Statements & Capitalized Penal Interest",
    statutoryTrigger: "Bankers' Books Evidence Act 1891 s.2A/4, BSA 2023 s.63 & RBI Penal Charges Directions",
    bottleneck:
      "Experienced DRT defense counsel routinely stall Original Applications for 12–18 months by filing objections that the bank's Core Banking System (CBS) ledger printout lacks the statutory Section 2A Bankers' Books certificates, omits the BSA 2023 Section 63 Part-A/Part-B hash schedule, or compounds penal interest into principal in violation of RBI's Fair Lending Practice Directions on Penal Charges.",
    sambPlaybook: [
      "Generate a clean, separate ledger schedule segregating (a) Disbursed Principal, (b) Contractual Normal Interest (with rate-reset dates and MCLR/EBLR circulars), and (c) Non-Capitalized Penal Charges shown as a standalone line item.",
      "Attach a dual-signature Bankers' Books Evidence Act Section 2A certificate signed by BOTH the Branch Manager / Principal Accountant AND the CBS IT / System Manager certifying system integrity, daily backups, and tamper-free extraction.",
      "Pair the Section 2A certificate with a statutory BSA 2023 Section 63 Schedule (Part A by the SAMB Authorized Officer + Part B by the Bank's IT Officer recording the SHA-256 hash of the PDF ledger and email/WhatsApp loan recall delivery logs).",
      "Cross-reference the RBI Circular on Penal Charges in Loan Accounts inside the OA pleadings to pre-empt borrower demands for account re-casting or appointment of a Chartered Accountant commissioner.",
    ],
    outcomeMetric: "Eliminates 90%+ technical admissibility adjournments at DRT evidence stage.",
  },
  {
    id: "guarantor-limitation-trap",
    tabLabel: "3. Guarantor Invocation Trap",
    badge: "Contract Act s.128 & Beleri Rule",
    title: "Personal / Corporate Guarantor Claims Time-Bar or Defective 'CC-Only' Recall Notice",
    statutoryTrigger: "Indian Contract Act s.126/128, Limitation Act Art. 55 & Syndicate Bank v. Channaveerappa Beleri (SC)",
    bottleneck:
      "Branch officers frequently address a Loan Recall Notice solely to the principal borrower while casually adding 'Copy to: Guarantor' at the footer. In DRT proceedings, solvent personal guarantors argue that their 'on-demand' continuing guarantee was never validly invoked—or that the 3-year limitation expired before OA filing.",
    sambPlaybook: [
      "Before uploading the OA on e-DRT, serve a formal Loan Recall cum Explicit Guarantee Invocation Notice addressed directly to every Personal and Corporate Guarantor under Section 128 of the Contract Act, demanding payment within 7–15 days.",
      "Track split limitation clocks: under the Supreme Court ruling in Syndicate Bank v. Channaveerappa Beleri, limitation against an on-demand guarantor begins ONLY upon formal demand/invocation and refusal—preserving multi-crore guarantor liability even on older stressed accounts.",
      "Verify whether the borrower executed Balance & Security Confirmation Letters (Limitation Act s.18) or made part-payments (s.19) within 3 years, and check whether equitable/registered mortgages qualify for the 12-year limitation under Article 62 of the Limitation Act.",
      "Dispatch the composite Pre-OA Recall + Guarantee Invocation Notice simultaneously via Email, Business WhatsApp, and India Post Speed Post RPAD so delivery proofs meet Section 19(4) and BSA s.63 standards.",
    ],
    outcomeMetric: "Preserves co-extensive guarantor recovery & blocks Article 55 dismissal.",
  },
  {
    id: "parallel-sarfaesi-consortium",
    tabLabel: "4. Parallel SARFAESI & Consortium",
    badge: "Transcore Doctrine & RDB s.19(2)",
    title: "Coordinating Parallel SARFAESI Enforcement, Consortium Joinder & NCLT Interplay",
    statutoryTrigger: "RDB Act s.19(1)–(2), SARFAESI s.13(10) & Transcore v. Union of India (SC)",
    bottleneck:
      "Borrowers routinely move DRT or High Courts claiming that once a bank initiates SARFAESI Section 13(2)/13(4) enforcement, it is barred by the 'doctrine of election' from filing or prosecuting a Section 19 OA—or consortium member banks file fragmented OAs causing conflicting Recovery Certificates.",
    sambPlaybook: [
      "Cite the Supreme Court Constitution-level principle in Transcore v. Union of India: SARFAESI and RDB Act remedies are complementary, not mutually exclusive. A bank does NOT need to withdraw a pending DRT OA to invoke SARFAESI, nor wait for SARFAESI completion to file an OA.",
      "Where multiple consortium banks share pari-passu security, either file a Joint OA led by the Consortium Leader or implead member banks as proforma defendants / join under Section 19(2) to share Recovery Officer execution proceeds proportionately.",
      "Where SARFAESI auction proceeds leave a balance shortfall, leverage either the pending Section 19 OA (by filing an updated realization memo) or file a fresh Section 13(10) SARFAESI / Rule 11 application in DRT within limitation for the exact unpaid balance.",
      "If corporate borrower dues exceed ₹1 Crore and IBC Section 7 CIRP is contemplated, verify Section 14 IBC moratorium timing—remembering that under Lalit Kumar Jain (SC), IBC moratorium against a corporate borrower does NOT automatically shield personal guarantors unless Part III s.95 interim moratorium triggers.",
    ],
    outcomeMetric: "Unifies SARFAESI physical possession with DRT personal-decree leverage.",
  },
];

export default function EdrtScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(EDRT_SCENARIOS[0].id);

  const current = EDRT_SCENARIOS.find((s) => s.id === activeTab) || EDRT_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="DRT Original Application Litigation Scenarios"
        className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-4"
      >
        {EDRT_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            {current.outcomeMetric}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Statutory Lever: {current.statutoryTrigger}
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong className="block text-[11px] uppercase tracking-wider text-amber-800 font-extrabold mb-1">
            SAMB Litigation Bottleneck
          </strong>
          {current.bottleneck}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-extrabold text-slate-900 mb-2.5">
            Step-by-Step Bank Counsel Action Protocol
          </p>
          <ul className="space-y-2.5">
            {current.sambPlaybook.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
