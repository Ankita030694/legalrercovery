"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  supplierProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "unilateral-line-stoppage-debit-notes",
    tabLabel: "1. Line Stoppage & Warranty Debit Notes",
    title: "Tier-1 OEM Slaps ₹15L–₹40L 'Line-Stoppage' Penalty Without Joint Technical Failure Analysis",
    badge: "Contract Act s.73/74 & Breach of Natural Justice",
    supplierProfile:
      "Tier-1, Tier-2, and Tier-3 precision forging, aluminium die-casting, sheet-metal stamping, and plastic injection-moulding units in Chakan, Manesar, Sriperumbudur, Sanand, Hosur, or Jamshedpur.",
    pretext:
      "The OEM's vehicle assembly plant reports a 45-minute conveyor stoppage or warranty field failure. Without summoning the vendor for joint dimensional root-cause analysis (8D report) or testing mating assemblies, the OEM's materials department unilaterally issues a ₹28 Lakh debit note and directly deducts it from the supplier's approved bi-monthly running payment cycle.",
    legalReality:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, liquidated damages or compensation cannot be imposed unilaterally without proving actual, direct loss caused exclusively by the vendor's breach. A buyer cannot act as judge in its own cause (*nemo judex in causa sua*). Deducting arbitrary line-stoppage penalties without joint metallurgical validation constitutes an unlawful unilateral price alteration and wrongful withholding of debt under Section 15 of the MSMED Act, 2006.",
    statutoryHook:
      "Indian Contract Act 1872 ss.73–74 + MSMED Act 2006 ss.15–16 + Order XXXVII Rule 2 CPC + Kailash Nath Associates v. DDA (2015) 4 SCC 136",
    actionProtocol: [
      "Issue an immediate formal Repudiation Notice of the unilateral debit note within 7 days, denying liability and objecting to unauthorized ERP ledger set-offs.",
      "Demand constitution of an accredited Joint Quality Audit Committee and independent failure analysis at an ARAI/NABL accredited laboratory.",
      "Re-invoice the deducted sum as an overdue principal invoice, triggering the statutory 45-day countdown under MSMED Act Section 15.",
      "Serve an Advocate Demand Notice warning of Section 16 penal compound interest (3x RBI Bank Rate) and corporate tax disallowance under Section 43B(h).",
    ],
  },
  {
    id: "unamortized-die-tooling-capital",
    tabLabel: "2. Stranded Die & Tooling Costs",
    title: "OEM Drops Production Volumes or Scraps Vehicle Platform, Leaving ₹45L+ Tooling Capital Stranded",
    badge: "Promissory Estoppel & Contract Act s.170 Lien",
    supplierProfile:
      "Dedicated tooling developers, progressive die fabricators, pressure die-casting foundries, and injection-moulding suppliers who incurred upfront CAPEX against OEM Letters of Intent (LOI) or nominal piece-rate amortization agreements.",
    pretext:
      "The auto manufacturer issued an LOI or Purchase Order projecting 50,000 parts per month over 3 years, specifying that the supplier absorb the ₹45 Lakh die/mould development cost into a ₹6.50 per-part amortization premium. After 6 months and only 12,000 parts, the OEM abruptly slashes orders by 85% or axes the vehicle model, refusing to reimburse the remaining ₹41.2 Lakh unamortized tooling capital.",
    legalReality:
      "Under the equitable Doctrine of Promissory Estoppel and Section 73 of the Indian Contract Act, where an ancillary unit incurs substantial capital expenditure relying on an OEM's explicit commercial promise and volume projection, the buyer cannot repudiate the capital commitment when production targets fail. Crucially, under Section 170 of the Indian Contract Act, the supplier holds a statutory Bailee Particular Lien over the dies, jigs, and fixtures developed or maintained by its labour and skill, lawfully entitled to retain physical custody until the entire balance is cleared.",
    statutoryHook:
      "Indian Contract Act 1872 s.73 & s.170 (Bailee Lien) + Promissory Estoppel (Motilal Padampat Sugar Mills) + Sale of Goods Act s.55",
    actionProtocol: [
      "Collate the initial RFQ, LOI, tool design approvals, external tool-room fabrication tax invoices, and PPAP sample buy-off logs.",
      "Quantify unamortized capital: calculate (Agreed Amortization Target Volume - Actual Off-Take Volume) × Per-Part Tooling Component.",
      "Issue formal notice of Bailee's Particular Lien under Section 170 Indian Contract Act, asserting lawful physical retention of the dies/moulds against removal.",
      "Serve formal demand notice for immediate lump-sum settlement of unamortized tooling capital, followed by MSEFC reference or Commercial Summary Suit.",
    ],
  },
  {
    id: "retrospective-price-reduction-rm-index",
    tabLabel: "3. Retrospective RM Price Slashes",
    title: "OEM Imposes Retrospective Raw-Material (RM) Indexing Reductions on Past Delivered Batches",
    badge: "Sale of Goods Act s.55 & GST Rule 53 Bar",
    supplierProfile:
      "Automotive suppliers exposed to commodity metal fluctuations (CRCA steel, forged alloy billets, aluminium ingots, engineering polymers, brass pins).",
    pretext:
      "Citing a quarterly lag in commodity index benchmarking (such as ICIS, LME, or Platts) or an internal cost-reduction mandate ('annual vendor efficiency target'), the OEM's purchasing team issues retrospective debit notes discounting invoices for component batches that were supplied, billed, and accepted 3 to 9 months earlier.",
    legalReality:
      "Under Section 55 of the Sale of Goods Act, 1930, once goods have been delivered and the property in goods has passed to the buyer, the seller is entitled to the full agreed contract price. A contract cannot be altered retrospectively without bilateral written consent. Furthermore, under GST Rule 53, debit notes issued unilaterally without vendor acceptance violate tax reconciliation protocols, and deducting past retrospective claims against current supplies constitutes an illegal commercial set-off.",
    statutoryHook:
      "Sale of Goods Act 1930 s.55 + Indian Contract Act 1872 s.62 (Novation Bar) + CGST Act 2017 s.34 & Rule 53",
    actionProtocol: [
      "Formally repudiate the debit notes within the statutory period, refusing to reflect or accept them in GSTR-1 / GSTR-3B reconciliation.",
      "Notify the buyer in writing that unilateral retrospective price reductions without bilateral amendment constitute a clear breach of contract.",
      "Demand immediate release of all unauthorized set-offs from subsequent supply payments under Section 15 of the MSMED Act.",
      "Submit an intimation to the buyer's statutory auditors noting unresolved B2B disputed tax invoices and potential Section 43B(h) disallowances.",
    ],
  },
  {
    id: "ppap-approved-batch-rejection-vendor-code",
    tabLabel: "4. PPAP Approved Batch & Vendor Code Threat",
    title: "OEM Consumes PPAP Level 3 Approved Parts in Vehicle Assembly, Then Threatens Vendor Code Freeze",
    badge: "SOGA s.42 Deemed Acceptance & Coercion Bar",
    supplierProfile:
      "Safety-critical, powertrain, and chassis component manufacturers (machined hubs, brake calipers, steering knuckles, fuel lines, wiring harnesses).",
    pretext:
      "The supplier ships 20,000 precision parts with approved Production Part Approval Process (PPAP) Level 3 documentation, Inspection Reports, and Material Test Certificates (MTC). The OEM's inbound quality passes the goods and the plant consumes them directly on the assembly line. Two months later, the OEM claims assembly line defects, slaps retrospective rejection debit notes, and threatens: 'Accept this debit note or we will block your vendor code and terminate all RFQ bidding.'",
    legalReality:
      "Under Section 42 of the Sale of Goods Act, 1930, integrating components into finished motor vehicles sold commercially constitutes an act inconsistent with the seller's ownership, representing irrevocable deemed acceptance. The buyer has forfeited its statutory right of rejection. Furthermore, threatening vendor code blacklisting to force acceptance of arbitrary debits amounts to economic coercion and unlawful intimidation under Section 15 of the Indian Contract Act and Section 9 of the Commercial Courts Act, warranting urgent interim injunctive relief.",
    statutoryHook:
      "Sale of Goods Act 1930 ss.41–42 + Indian Contract Act 1872 ss.15/73 + Commercial Courts Act 2015 s.9 (Interim Protection)",
    actionProtocol: [
      "Marshal signed Part Submission Warrants (PSW), PPAP approval sheets, batch-wise CMM inspection reports, and outward e-Way bills.",
      "Document that the OEM's plant consumed the batches without timely intimation of rejection within the statutory inspection window.",
      "Serve an Advocate Cease-and-Desist Notice against arbitrary vendor code deactivation, citing actionable tortious interference and economic coercion.",
      "Initiate fast-track MSEFC recovery or urgent Commercial Court Section 9 pre-litigation injunction to restrain vendor code delisting.",
    ],
  },
];

interface AutoAncillaryScenarioTabsProps {
  className?: string;
}

export default function AutoAncillaryScenarioTabs({
  className = "",
}: AutoAncillaryScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-950/20"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                  isActive ? "text-red-200" : "text-slate-400"
                }`}
              >
                Auto Failure Mode
              </span>
              <span className="text-xs sm:text-sm font-bold leading-snug">
                {item.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs text-slate-500 font-semibold">
            Cluster Target: Auto-Ancillary &amp; Component Suppliers
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
          {current.title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
            <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide mb-1">
              Supplier &amp; Component Profile
            </span>
            <p className="text-slate-600 text-xs sm:text-sm m-0">
              {current.supplierProfile}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              The OEM Pretext &amp; Commercial Bottleneck:
            </span>
            <p className="text-slate-600 m-0">{current.pretext}</p>
          </div>

          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3.5 rounded-r-xl">
            <span className="font-bold text-amber-900 block text-xs uppercase tracking-wide mb-1">
              Creditor-Side Legal Reality
            </span>
            <p className="text-amber-800 text-xs sm:text-sm m-0">
              {current.legalReality}
            </p>
          </div>

          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl">
            <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold block mb-1">
              Statutory Basis &amp; Enactments
            </span>
            <span className="text-xs sm:text-sm font-semibold font-mono text-emerald-300">
              {current.statutoryHook}
            </span>
          </div>
        </div>

        <div>
          <span className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wider block mb-3">
            Recommended Operational SOP &amp; Creditor Action Protocol:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-700 leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
