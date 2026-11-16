"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  legalChallenge: string;
  statutorySolution: string;
  actionableSteps: string[];
  estimatedRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "custom-fitout-breach",
    tabLabel: "Custom Fit-Out CapEx",
    badge: "High Capital Exposure",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Tenant Exits at Month 10 of 36-Month Lock-In After Landlord Funded ₹40L+ Custom Interiors",
    context:
      "A funded tech startup or multinational corporate leased a 12,000 sq. ft. Grade-A floor plate. To close the deal, the commercial landlord invested ₹48,00,000 in custom HVAC, specialized server rooms, executive acoustic cabins, and bespoke cafeteria fit-outs under an agreed 36-month lock-in covenant. At month 10, the tenant serves an abrupt 30-day exit notice claiming business restructuring.",
    legalChallenge:
      "The tenant's counsel argues that under Section 74 of the Indian Contract Act, lock-in period clauses are penal. They assert that the landlord retains the physical interior improvements in the building, and therefore cannot demand the unamortized fit-out capital.",
    statutorySolution:
      "Under the Delhi High Court principles in Tower Vision India and Deepak Chopra, while unexpired rent cannot be a pure windfall, unamortized capital expenditure specifically tailored for the tenant constitutes direct, actual damage proven under Section 73. Because the remaining 26/36ths of the fit-out cannot be re-used by a generic replacement tenant without substantial demolition, the landlord is entitled to recover ₹34.66 Lakhs of unamortized CapEx plus initial rent-free period clawback.",
    actionableSteps: [
      "Issue an immediate Advocate Legal Notice disputing unilateral surrender and invoking the custom fit-out amortization schedule.",
      "Conduct a BSA 2023 s.63 compliant videographic inventory showing specialized alterations that render the space non-fungible for standard tenants.",
      "Claw back 100% of the initial 3-month rent-free fit-out concession as contractually linked to lock-in performance.",
      "Forfeit the 6-month security deposit specifically against unamortized CapEx and physical reinstatement, not generic liquidated rent.",
    ],
    estimatedRecovery: "100% Actual Vacancy Rent + 100% Unamortized CapEx + Clawback",
  },
  {
    id: "unilateral-abandonment",
    tabLabel: "Midnight Key Abandonment",
    badge: "Possession Dispute",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Tenant Abandons Office Overnight, Drops Keys at Reception & Claims Lock-In is Void",
    context:
      "Facing cash-flow insolvency, a retail brand or corporate tenant vacates during a weekend, clears out computers and inventory, drops the entrance keys at the property manager desk or sends them via courier, and emails an assertion that 'physical possession is surrendered; lock-in rent cannot be legally enforced'.",
    legalChallenge:
      "If the landlord accepts the keys unconditionally or re-enters without reservation, the tenant's legal team pleads 'implied surrender by operation of law' under Section 111(f) of the Transfer of Property Act, extinguishing future lock-in liabilities.",
    statutorySolution:
      "The landlord must refuse unconditional acceptance of keys. Dispatch a registered written response within 48 hours stating that keys are held strictly in escrow as a custodian to mitigate structural deterioration, without prejudice to ongoing rent accrual, utility liens, and unexpired lock-in obligations. Serve formal notice for a joint physical dilapidation inspection.",
    actionableSteps: [
      "Reject unilateral key handover in writing via Speed Post RPAD and email within 24–48 hours.",
      "Serve a 7-day notice for joint inventory inspection; if the tenant fails to appear, engage an independent licensed surveyor or notary.",
      "Invoke CPC Order XV-A in the Commercial Court seeking an interim direction for deposit of admitted rent and CAM arrears pendente lite.",
      "File an application under Order 38 Rule 5 CPC for attachment before judgment over tenant's bank accounts and corporate receivables.",
    ],
    estimatedRecovery: "Rent till Lawful Determination + Dilapidation Costs + CAM Arrears",
  },
  {
    id: "mitigation-differential",
    tabLabel: "Re-Letting at Deficit",
    badge: "Section 73 Mitigation",
    badgeColor: "bg-emerald-950/70 border-emerald-800 text-emerald-300",
    title: "Landlord Re-Lets Premises After 5 Months at a 15% Lower Market Rent",
    context:
      "A co-working operator or commercial floor landlord suffers a lock-in breach with 20 months remaining. To fulfill the statutory duty to mitigate losses under Section 73 of the Contract Act, the landlord actively lists the property with international property consultants (IPCs). After 5 months of zero occupancy, a new tenant is signed at ₹85/sq. ft. against the original breached rate of ₹100/sq. ft.",
    legalChallenge:
      "Defaulting tenants frequently claim that once a new tenant occupies the premises, the landlord's cause of action under the lock-in clause is completely extinguished and no further financial claim survives.",
    statutorySolution:
      "Indian contract law does not mandate that the landlord suffer the entire vacancy uncompensated. The landlord is statutorily entitled to: (1) 100% of the rent for the 5-month actual vacancy gap, (2) the ₹15/sq. ft. differential across the remaining 15 months of the original lock-in, and (3) pro-rated leasing brokerage paid to sign the replacement tenant.",
    actionableSteps: [
      "Document rigorous mitigation efforts: IPC mandates, listings on commercial real estate portals, site inspection logs, and broker correspondence.",
      "Issue a revised demand notice computing the exact net loss: 5 months complete vacancy + 15 months rate differential + secondary brokerage fees.",
      "Offset security deposit first against the 5-month vacancy rent ledger and CAM arrears.",
      "Initiate Section 12A Commercial Court Pre-Institution Mediation or Section 9 Arbitration for immediate recovery of the liquidated differential.",
    ],
    estimatedRecovery: "5 Mos Vacancy + 15 Mos Rental Spread + Re-Leasing Brokerage",
  },
  {
    id: "security-deposit-stall",
    tabLabel: "Deposit Forfeiture Stall",
    badge: "Arbitration / CCA 2015",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Tenant Demands Security Deposit Refund, Claiming Landlord Suffered No Real Loss",
    context:
      "A corporate lessee with a 6-month security deposit (₹60,00,000) breaches an unexpired 18-month lock-in. The tenant issues a formal legal notice threatening criminal breach of trust under BNS Section 316 (earlier IPC 405/406) if the deposit is not refunded within 15 days, asserting that the landlord cannot retain the deposit without proving an actual court-decreed loss.",
    legalChallenge:
      "Tenants attempt to weaponize police complaints or Section 9 arbitral petitions to freeze or compel the release of security deposits before the landlord's damages are judicially quantified.",
    statutorySolution:
      "Under Supreme Court jurisprudence in Kailash Nath and ONGC v. Saw Pipes, while genuine pre-estimates of damages require proof of injury, the landlord has an undisputed right of set-off and contractual lien over deposits against existing accrued dues: pending electricity/water bills, CAM charges, TDS non-deposits under Section 194-I, and physical damage restoration. Any balance security deposit is legally retained pending quantification of vacancy damages.",
    actionableSteps: [
      "Submit an exhaustive dilapidation and arrears debit note offsetting 100% of actual accrued charges against the security deposit.",
      "Refute criminal allegations citing civil contractual jurisdiction under Commercial Courts Act 2015 s.2(1)(c)(vii).",
      "If the lease has an institutional arbitration clause, serve a Section 21 notice claiming unexpired lock-in rent and restraining deposit dissipation.",
      "File an application under Section 17 before the Arbitral Tribunal for an interim security deposit preservation order.",
    ],
    estimatedRecovery: "100% Deposit Set-Off Justified + Independent Money Decree",
  },
];

export default function LockInRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
            Commercial Lease Failure Modes
          </span>
          <p className="text-base sm:text-lg font-extrabold text-slate-900">
            Interactive Playbook: Resolving 4 Common Lock-In Breach Scenarios
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
          Creditor-Side SOP
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${currentScenario.badgeColor}`}
          >
            {currentScenario.badge}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Target: {currentScenario.estimatedRecovery}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {currentScenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentScenario.context}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="rounded-xl bg-white p-4 border border-red-100 shadow-xs">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-1.5">
              Debtor Defense &amp; Legal Hurdle
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalChallenge}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 border border-emerald-100 shadow-xs">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1.5">
              Landlord Statutory Remedy (Contract Act s.73/74)
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.statutorySolution}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">
            Mandatory Creditor Action Checklist:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentScenario.actionableSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-[10px] font-bold text-white">
                  {idx + 1}
                </span>
                <span className="leading-tight">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
