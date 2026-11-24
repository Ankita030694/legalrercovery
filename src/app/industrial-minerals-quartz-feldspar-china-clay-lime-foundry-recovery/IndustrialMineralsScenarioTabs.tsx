"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "whiteness-mesh-cuts",
    tabLabel: "Whiteness & Mesh Cuts",
    title: "Morbi Ceramic or Sanitaryware Plant Slashing 12–18% via Post-Unloading Debit Notes",
    cause:
      "After unloading 200–325 mesh quartz, potash feldspar, or levigated china clay into their ball-mill silos, buyers wait 45–60 days and issue unilateral debit notes alleging 'low whiteness (L-value)', 'oversize residue on 300 mesh', or 'high moisture', while having already fired the material into finished tiles.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, once the buyer unloads, mixes, or consumes the mineral powder in production without an immediate written rejection notice within the agreed inspection window, the goods are deemed legally accepted. Unilateral post-consumption debit notes cannot defeat a liquidated GST invoice or bar an MSMED Act s.18 MSEFC reference.",
    steps: [
      {
        step: "1. Lock Pre-Dispatch COA & Gate Weighment Records",
        description:
          "Compile your plant lab's Certificate of Analysis (whiteness, Fe2O3 %, mesh sieve retention), weighbridge slip, and signed LR/bilty showing unconditional unloading at the Morbi/Thangadh factory gate.",
      },
      {
        step: "2. Reject Unilateral Debit Notes in Writing Within 7 Days",
        description:
          "Serve a formal Fact-Verified Notice under Sale of Goods Act s.42 + MSMED Act s.15 rejecting the belated debit note and demanding the full invoice principal plus 3x RBI compound interest.",
      },
      {
        step: "3. Trigger Section 43B(h) Tax Disallowance Alert to Buyer's CA",
        description:
          "Notify the ceramic company's Managing Director and statutory auditor that unpaid Manufacturing MSME mineral bills past 45 days face mandatory Income Tax disallowance under Section 43B(h).",
      },
    ],
    statutoryRule: "Sale of Goods Act s.42 + MSMED Act ss.15–18 + IT Act s.43B(h)",
  },
  {
    id: "credit-stretch-120",
    tabLabel: "120+ Day Credit Stretch",
    title: "Glass, Paint or Steel Plant Stretching Payment 120+ Days While You Paid Royalty Upfront",
    cause:
      "Mineral grinding and calcining units in Beawar, Udaipur, Bhuj, Ongole, and Katni must pay State Mining Royalty (DMFT/NMET/e-Ravanna), explosive/quarry charges, and HT industrial power bills upfront. Large float-glass, refractory, and steel buyers exploit this cash crunch by stretching 30-day credit to 120–180 days.",
    legalBasis:
      "While raw mining extraction historically faced Udyam exclusions, mineral pulverizing, micronizing, beneficiation, washing, and calcining plants transform raw lumps into graded industrial powders and quicklime—qualifying squarely as Manufacturing MSMEs (NIC Group 239 / Division 23). They enjoy full MSMED Act Sections 15–18 protection and Section 43B(h) disallowance leverage.",
    steps: [
      {
        step: "1. Verify Udyam Manufacturing NIC Code & Invoice Aging",
        description:
          "Confirm your Udyam Certificate reflects mineral grinding, calcining, or non-metallic mineral product manufacturing, and tabulate every invoice past the 15-day or 45-day statutory cap.",
      },
      {
        step: "2. Serve Pre-MSEFC Statutory Demand + 3x RBI Interest Ledger",
        description:
          "Issue a tri-channel Fact-Verified Notice quantifying principal plus monthly compounded interest at 3x the RBI bank rate under Section 16 of the MSMED Act.",
      },
      {
        step: "3. File MSME Samadhaan Reference or Order XXXVII Summary Suit",
        description:
          "Escalate unpaid accounts to the jurisdictional Micro & Small Enterprises Facilitation Council (MSEFC) or file a fast-track Order 37 CPC Summary Suit where written POs and e-Invoices exist.",
      },
    ],
    statutoryRule: "MSMED Act ss.15–18 (Manufacturing MSME) + IT Act s.43B(h)",
  },
  {
    id: "foundry-cheque-bounce",
    tabLabel: "Foundry Silica & PDC Bounce",
    title: "Cast-Iron / Steel Foundry Dishonoring Silica Sand & Bentonite Cheques",
    cause:
      "Foundries in Kolhapur, Rajkot, Coimbatore, Howrah, and Mandi Gobindgarh procure resin-coated silica sand, sodium bentonite, and burnt lime on rolling credit, issuing post-dated cheques (PDCs) that bounce with 'Exceeds Arrangement' or 'Payment Stopped by Drawer' once casting orders slow down.",
    legalBasis:
      "Dishonor of a cheque issued against confirmed mineral dispatches triggers personal criminal liability against the foundry's Managing Director and authorized signatories under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881—with Section 143A empowering the Magistrate to order 20% interim compensation.",
    steps: [
      {
        step: "1. Preserve Bank Return Memo & Dispatch Section 138 Notice in 30 Days",
        description:
          "Serve a mandatory 15-day statutory demand notice via Speed Post RPAD and email/WhatsApp within 30 days of receiving the bank's dishonor memo.",
      },
      {
        step: "2. Implead Active Directors & Authorized Signatories (Section 141)",
        description:
          "Name the specific directors in charge of foundry procurement and finance in the complaint, backed by MCA signatory records and GST e-Way bills.",
      },
      {
        step: "3. Pair Criminal NI s.138 with Civil Order 37 Summary Suit",
        description:
          "Run the criminal cheque-bounce complaint alongside an Order XXXVII CPC Summary Suit (or MSEFC claim) so the foundry cannot stall repayment for years.",
      },
    ],
    statutoryRule: "NI Act ss.138, 141 & 143A (20% Interim) + Order XXXVII CPC",
  },
  {
    id: "lime-kiln-asset-strip",
    tabLabel: "Kiln / Plant Asset Stripping",
    title: "Calcined Lime or Sponge-Iron Buyer Shutting Kilns & Stripping Plant Assets",
    cause:
      "A steel rolling mill, AAC block unit, or paper mill owing ₹40 Lakh–₹1.5 Crore for quicklime (CaO), hydrated lime, or dolomite chips suddenly halts operations, shifts finished inventory at night, or transfers machinery to a sister concern.",
    legalBasis:
      "When a defaulting corporate buyer is dissipating assets to frustrate a decree, Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 empowers the Commercial Court to order Attachment Before Judgment of factory bank accounts, finished goods, or plant machinery. For corporate defaults ≥ ₹1 Crore, an IBC Section 8 Demand Notice creates immediate insolvency pressure.",
    steps: [
      {
        step: "1. Conduct MCA Charge & GST Active-Status Audit",
        description:
          "Check ROC filings, sister-entity GSTINs, and recent asset-transfer red flags before the buyer strips liquid receivables.",
      },
      {
        step: "2. File Urgent Order XXXVII Suit + Order XXXVIII Rule 5 Application",
        description:
          "Seek ex-parte or urgent security/attachment of the buyer's trade receivables and bank balances backed by confirmed GST invoices and balance confirmations.",
      },
      {
        step: "3. Serve IBC Section 8 Form 3/4 Notice (Where Default ≥ ₹1 Crore)",
        description:
          "For corporate debtors above the ₹1 Crore threshold with no genuine pre-existing dispute, serve a 10-day IBC Section 8 statutory demand notice to force immediate settlement.",
      },
    ],
    statutoryRule: "CPC Order XXXVIII Rule 5 + Order XXXVII + IBC Section 8 (≥ ₹1 Cr)",
  },
];

export default function IndustrialMineralsScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Industrial Mineral Recovery Scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200 shrink-0 self-start sm:self-auto">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Default Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Creditor Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Creditor Escalation Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <p className="text-xs font-extrabold text-slate-900 mb-1.5">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
