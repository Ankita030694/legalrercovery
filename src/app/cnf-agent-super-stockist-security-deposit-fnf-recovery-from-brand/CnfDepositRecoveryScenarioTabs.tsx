"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  problem: string;
  statutoryTrap: string;
  lawfulPlaybook: string;
  remedyCode: string;
  financialRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "asm-dumping-resignation",
    tabLabel: "ASM Stock Dumping & Exit",
    badge: "Quarter-End Target Push",
    title: "Regional ASM Dumped ₹60L Excess Inventory with Oral Scheme Promises, Then Resigned",
    problem:
      "To meet aggressive Q4 sales targets, the Area Sales Manager (ASM) and Regional Sales Manager (RSM) billed ₹60 Lakhs of slow-moving primary stock to the Super-Stockist/C&F depot. The ASM assured via WhatsApp and email that special 8% secondary clearance discounts, consumer promo schemes, and debit notes would be credited to the ledger. Two months later, the ASM abruptly resigns, the brand appoints a new regional sales head, and corporate finance repudiates all secondary scheme claims as 'unapproved oral commitments', freezing ₹18.5 Lakhs in scheme reimbursements.",
    statutoryTrap:
      "FMCG brand legal teams routinely rely on boilerplate clauses in distributor agreements stating that 'no scheme or discount is valid unless accompanied by a written corporate circular signed by the Head of Finance'. They attempt to classify the field manager's written instructions as unauthorized acts under Section 238 of the Indian Contract Act.",
    lawfulPlaybook:
      "1. Establish Apparent and Ostensible Authority under Section 237 of the Indian Contract Act, 1872: the brand clothed the ASM with authority to drive secondary sales, circulate scheme sheets, and approve trade discounts.\n2. Enforce Statutory Agency Indemnity under Section 222: the principal is bound to indemnify the agent against the consequences of all lawful acts done in good faith within the scope of agency.\n3. Compile digital evidence under Bharatiya Sakshya Adhiniyam, 2023 (BSA) Section 63: timestamped WhatsApp circulars, email threads, ERP/DMS secondary sale logs, and retailer credit distribution sheets.\n4. Issue a Fact-Verified Pre-Litigation Statutory Demand Notice quantifying ₹18.5 Lakhs plus commercial interest.",
    remedyCode: "Contract Act s.222 (Agent Indemnity) + s.237 (Ostensible Authority) + BSA 2023 s.63",
    financialRecovery: "100% Credit Note Realization (₹18,50,000) + Settlement of Disputed Secondary Dues",
  },
  {
    id: "expired-near-expiry-stock",
    tabLabel: "Expired Stock & Reverse Logistics",
    badge: "Refusal to Issue Credit Notes",
    title: "Brand Refuses Reverse E-Way Bills & Credit Notes for ₹24L Expired / Damaged Returns",
    problem:
      "A carrying & forwarding depot accumulates ₹24 Lakhs of expired, near-expiry, and damaged market returns collected from retail distributors across the territory. Despite contractual reverse logistics clauses, brand supply chain managers repeatedly delay issuing Reverse E-Way Bills and credit notes to avoid reflecting inventory write-downs on corporate quarterly financial statements. When the agency is terminated, the brand walks away, leaving the rotting inventory in the C&F warehouse while withholding the agent's exit settlement.",
    statutoryTrap:
      "Brands frequently drag reconciliation past the 3-year statutory limitation period or claim that 'unsold inventory is the stockist's absolute purchase risk' despite express market replacement commitments in their trade policies.",
    lawfulPlaybook:
      "1. Serve a 72-Hour Formal Inspection & Uplift Notice with a scheduled physical audit date.\n2. Conduct an independent panchnama and video inventory recording with an advocate commissioner or chartered engineer certifying batch numbers, manufacturing dates, and damage conditions.\n3. Assert Statutory Possessory Lien under Section 221 of the Indian Contract Act: the C&F agent is legally entitled to retain the principal's physical goods and warehouse possession until all agency commission, storage charges, and scheme claims are liquidated.\n4. Levy storage demurrage and warehouse rent under Section 73 of the Contract Act for unauthorized occupation of warehouse pallet space post-termination.",
    remedyCode: "Contract Act s.221 (Agent's Possessory Lien) & s.73 (Warehouse Storage Demurrage)",
    financialRecovery: "Full ₹24 Lakh Credit Note / Payout + Accrued Monthly Warehouse Demurrage Charges",
  },
  {
    id: "bogus-shortage-audit",
    tabLabel: "Bogus Depot Shortage Audit",
    badge: "Unilateral F&F Forfeiture",
    title: "Brand Fabricates ₹42L Internal Audit Shortage to Wipe Out ₹50L Security Deposit",
    problem:
      "Following formal agency termination, the C&F agent executes a joint stock handover and hands over depot keys to the brand's logistics team. Six months later, when the agent demands the refund of their ₹50 Lakh security deposit, brand finance issues a surprise 'Final Reconciliation Statement' claiming an alleged ₹42 Lakh cumulative stock shortage, damaged carton write-offs, and unverified dealer debit notes, unilaterally offering a measly ₹8 Lakh final settlement.",
    statutoryTrap:
      "Brand finance controllers know that C&F agents often hesitate to litigate against corporate giants. They utilize unilateral, unvetted internal spreadsheets to fabricate disputed set-offs, hoping the stockist will capitulate to a 20-cent-on-the-dollar compromise.",
    lawfulPlaybook:
      "1. Invoke the landmark Supreme Court precedent in Union of India v. Raman Iron Foundry (1974) 2 SCC 231: unadjudicated claims for alleged damages or shortages do not constitute an existing liquidated debt and cannot be unilaterally deducted from an admitted, undisputed security deposit.\n2. Produce the counter-signed Joint Handover Panchnama, Goods Receipt Notes (GRN), and physical outward gate logs signed by the brand's logistics officer on handover day.\n3. Serve a 15-Day Advocates Act Statutory Legal Notice demanding the immediate release of the full ₹50 Lakh deposit with 18% commercial interest.\n4. File an Order XXXVII CPC Summary Suit or Section 9 Commercial Courts Act urgent interim petition to freeze brand bank accounts.",
    remedyCode: "Raman Iron Foundry Rule (1974) 2 SCC 231 + Order XXXVII CPC Liquidated Debt Summary Suit",
    financialRecovery: "100% Recovery of ₹50,00,000 Security Deposit + ₹5.4 Lakhs Accrued Pre-Suit Interest",
  },
  {
    id: "promised-interest-withheld",
    tabLabel: "Unpaid Interest on Deposit",
    badge: "Breach of Stamped MOU",
    title: "Contract Stipulates 10% Annual Interest on ₹75L Security Deposit, Brand Refuses Payout",
    problem:
      "Under the registered C&F appointment agreement or stamped commercial MOU, the super-stockist deposited ₹75 Lakhs as an interest-bearing security deposit, with the brand explicitly covenanting to credit 10% p.a. simple interest on a quarterly basis. Over a 4-year tenure, the brand's treasury department repeatedly withheld interest payouts citing 'pending sales target reviews' and 'administrative delays'. Upon agency termination, the brand refuses to credit the ₹30 Lakhs in accumulated interest.",
    statutoryTrap:
      "Brand corporate counsel argues that the C&F agent waived interest by continuing operations without formal written protest, attempting to plead estoppel and equitable waiver against contractual obligations.",
    lawfulPlaybook:
      "1. Rebut waiver doctrines: mere commercial forbearance or non-initiation of legal proceedings does not extinguish express contractual covenants under Section 62 and Section 73 of the Indian Contract Act.\n2. For MSME-Registered C&F / Warehousing partners: invoke Sections 15–18 of the MSMED Act, 2006. Under Section 16, interest at 3 times the RBI Bank Rate compounded monthly is mandatory and statutorily overrides any contrary contract clause, waiver, or corporate policy.\n3. Calculate compound interest under statutory tables and issue a Section 17 MSME Samadhaan demand or Section 2(1)(c)(ix) Commercial Court summary recovery suit.",
    remedyCode: "MSMED Act ss.15-18 (Mandatory 3x RBI Compound Interest) / Contract Act s.73 Damages",
    financialRecovery: "₹30,00,000 Contractual Interest Realized + Costs of Litigation & Advocate Fees",
  },
];

export default function CnfDepositRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl p-5 sm:p-6 md:p-8 text-white border border-slate-800 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/70">
            FMCG &amp; Super-Stockist Failure Modes
          </span>
          <p className="text-lg sm:text-xl font-bold text-white mt-1">
            Commercial Breakdown Scenarios &amp; Creditor Counter-Playbooks
          </p>
        </div>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Click scenario to inspect statutory strategy
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="pt-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2.5 py-1 rounded-md">
            {current.badge}
          </span>
          <span className="text-xs font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2.5 py-1 rounded-md">
            Target: {current.financialRecovery}
          </span>
        </div>

        <p className="text-base sm:text-lg font-bold text-white leading-snug">
          {current.title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1.5">
              The Commercial Failure &amp; Corporate Denial
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.problem}
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-1.5">
              The Corporate Legal Trap
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-slate-800/90 border border-emerald-500/30 rounded-xl p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              The Creditor Recovery Playbook
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {current.remedyCode}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line space-y-1">
            {current.lawfulPlaybook}
          </div>
        </div>
      </div>
    </div>
  );
}
