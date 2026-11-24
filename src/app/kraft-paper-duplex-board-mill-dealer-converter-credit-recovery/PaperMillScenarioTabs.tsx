"use client";

import React, { useState } from "react";

interface PaperMillScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  defaultPattern: string;
  statutoryShield: string;
  recoveryProtocol: {
    step: string;
    detail: string;
  }[];
  keyStatutes: string;
}

const PAPER_MILL_SCENARIOS: PaperMillScenario[] = [
  {
    id: "post-slitting-reel-excuse",
    tabLabel: "Post-Slitting / Printing Complaint",
    badge: "Mill vs Converter",
    title: "Corrugator or Offset Printer Slit & Printed 80% of Reels—Then Alleged GSM, Cobb, or Shade Defect",
    defaultPattern:
      "A kraft or grey-back/white-back duplex mill dispatches 28 MT of reels from Vapi, Morbi, or Muzaffarnagar with Reel-Wise Packing Lists and Mill QC Lab Sheets. The buyer mounts reels on its corrugator or sheet-fed offset press, slits/cuts them into cartons, sells finished packaging, and at Day 55 refuses ₹22 lakh citing 'uneven GSM', 'high Cobb60 moisture pickup', or 'top-liner shade variation'.",
    statutoryShield:
      "Indian paper trade custom—uniformly printed on mill invoices ('No quality claim entertained once reel is cut, slit, sheetered, or mounted on machine')—is statutorily reinforced by Section 42 of the Sale of Goods Act, 1930. Mounting, slitting, or printing a reel is an irreversible act of ownership extinguishing the right of rejection. Any post-run grievance raised after Day 15 also violates the MSMED Act s.15 deemed-acceptance window and fails the Supreme Court's Mobilox 'pre-existing dispute' test under IBC.",
    recoveryProtocol: [
      {
        step: "Freeze the Reel Barcode & MTC Audit Trail",
        detail:
          "Pull the mill's DCS/QCS reel-number log, burst factor (BF), GSM cross-profile, Cobb60 sizing sheet, weighbridge slip, and clean E-Way/LR receipt proving zero gate-level remark.",
      },
      {
        step: "Demand Intact Unslit Control Reel Inspection",
        detail:
          "Reply in writing within 48 hours: offer joint inspection strictly on untouched, unslit reels bearing original mill stencil/core labels. Reject ex-parte claims on cut waste or finished cartons.",
      },
      {
        step: "Escalate via Parallel NI s.138 + Order XXXVII / MSEFC",
        detail:
          "Present running-account PDCs/security cheques immediately upon default; serve a composite Advocate Demand Notice invoking Sale of Goods Act s.42, NI s.138, and Section 43B(h) tax disallowance.",
      },
    ],
    keyStatutes: "Sale of Goods Act ss.41, 42 & 55 | NI Act ss.138/143A | MSMED Act ss.15–18 | Paper Trade Custom",
  },
  {
    id: "chawri-bazar-mumbai-merchant",
    tabLabel: "Chawri Bazar / Mumbai Merchant",
    badge: "Wholesale & Broker",
    title: "Wholesale Paper Merchant or Indenting Broker Diverted Collections from Printers & Froze Mill Ledger",
    defaultPattern:
      "In Delhi's Chawri Bazar, Mumbai's Abdul Rehman Street / Bhiwandi godowns, or Sivakasi paper markets, a distributor or commission agent lifts ₹65 lakh of Maplitho, Chromo, Art Card, and Duplex sheets on 45–60 day mill credit. The merchant supplies downstream book publishers and carton converters, collects cash/RTGS from them, and stalls the mill claiming 'market liquidity crunch' or blaming an unnamed sub-buyer.",
    statutoryShield:
      "Where billing is principal-to-principal on the merchant's GSTIN (GSTR-1/GSTR-2B ITC claimed by the merchant), privity of contract lies strictly with the merchant—not downstream printers. Where an indenting broker signed a del credere guarantee or trade-association chitti, Indian Contract Act ss.126–128 & 230 enable joint recovery against both buyer and guarantor/agent. Dishonoured merchant cheques trigger immediate criminal liability under NI Act s.138 & s.141 against every active partner or director.",
    recoveryProtocol: [
      {
        step: "Lock Ledger Confirmation & GSTR-2B Acceptance",
        detail:
          "Extract signed balance confirmations, E-Way delivery logs to the merchant's Bhiwandi/Patparganj godown, and GST portal acceptance confirming full ownership transfer.",
      },
      {
        step: "Serve Dual Notice + Paper Trade Association Circulation",
        detail:
          "Dispatch a Fact-Verified Statutory Notice to the merchant firm, all partners/directors, and any del credere broker, alongside formal default intimation to regional Paper Merchants' Associations where bye-laws permit.",
      },
      {
        step: "Move Commercial Court Order XXXVIII Rule 5 Attachment",
        detail:
          "If the merchant is liquidating godown reels at distress prices or shifting stock to a sister GSTIN, file an urgent Commercial Suit bypassing s.12A mediation (Yamini Manohar principle) seeking interim attachment of stock and bank accounts.",
      },
    ],
    keyStatutes: "CPC Order XXXVII & Order XXXVIII r.5 | NI Act ss.138/141 | Indian Contract Act ss.126–128 | Commercial Courts Act s.12A",
  },
  {
    id: "ibc-section-8-large-exposure",
    tabLabel: "IBC s.8 + s.138 (>= ₹1 Cr)",
    badge: "High-Ticket Recovery",
    title: "Corporate Packaging Converter Owes ₹1.05 Cr–₹4 Cr Across Multi-Month Kraft & Duplex Supplies",
    defaultPattern:
      "A large automatic corrugated plant, pharma mono-carton company, or FMCG packaging subsidiary builds ₹1.20 Cr+ overdue exposure across 40+ reel dispatches from Kashipur, Rajahmundry, or Erode mills. Management stops honouring RTGS schedules, lets ₹45 lakh of security/PDC cheques bounce ('Exceeds Arrangement' / 'Payment Stopped'), and sends a belated email alleging 'core collapse and splicing breaks' only after legal demand begins.",
    statutoryShield:
      "Once undisputed operational debt crosses the ₹1 Crore threshold under Section 4 of the Insolvency and Bankruptcy Code, 2016, a Form 3 / Form 4 Demand Notice under IBC Section 8 forces a strict 10-day statutory ultimatum. Under Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (Supreme Court, 2017), fabricated quality complaints raised after consuming reels or after notice do not qualify as a genuine 'pre-existing dispute' to block NCLT admission. Parallel NI s.138 proceedings simultaneously expose directors to personal criminal summons and 20% interim deposit under s.143A.",
    recoveryProtocol: [
      {
        step: "Pre-Screen Ledger for Mobilox Dispute Hygiene",
        detail:
          "Audit every email/WhatsApp thread before serving Form 3 so no unresolved pre-slitting QC complaint exists on the invoiced principal; carve out any contested ₹2–3 lakh invoice if needed to keep >= ₹1 Cr spotless.",
      },
      {
        step: "Serve Statutory IBC Form 3 / Form 4 Demand Notice",
        detail:
          "Deliver Form 3 (with invoice schedule, E-Way bills, reel packing lists, and ledger) at the corporate debtor's MCA registered office via Speed Post RPAD and official director emails—starting the 10-day clock.",
      },
      {
        step: "Run Parallel NI s.138 Prosecution + NeSL IU Filing",
        detail:
          "Record the default with NeSL (Information Utility) to create statutory debt proof for NCLT Section 9 admission while prosecuting bounced cheques under NI Act s.138 (applying Sripati Singh for security cheques).",
      },
    ],
    keyStatutes: "IBC 2016 ss.4, 8 & 9 (Form 3/4) | Mobilox Innovations (SC) | Sripati Singh (SC) | NI Act ss.138 & 143A",
  },
  {
    id: "wastepaper-occ-supplier",
    tabLabel: "Wastepaper / OCC Supplier Bills",
    badge: "Upstream Raw Material",
    title: "Paper Mill Defaults on Wastepaper (OCC / NDLKC / SOP) or Agro-Pulp Supplier Invoices",
    defaultPattern:
      "A domestic wastepaper aggregator, imported OCC/DSOCC trader (Mundra/Nhava Sheva port), or agro-residue pulp vendor supplies ₹35 lakh–₹1.4 Cr of baled raw material to a kraft or duplex paper mill in Morbi, Muzaffarnagar, or Punjab. The mill weighs the trucks at its dharamkanta, pulps the bales into finished kraft reels, and then slashes 12%–20% citing 'excess moisture/outthrows' or delays payment for 120+ days.",
    statutoryShield:
      "Under Sale of Goods Act s.42, once wastepaper bales are unloaded, moisture-deducted at the mill weighbridge gate (standard gate moisture/dust slip signed upon entry), and fed into the hydrapulper, the mill cannot impose retroactive weight or quality cuts weeks later. Udyam-registered wastepaper processors and recyclers can enforce the 45-day MSMED Act ceiling, 3x RBI monthly compound interest, and Section 43B(h) corporate tax disallowance—or IBC Section 8 for >= ₹1 Cr exposures.",
    recoveryProtocol: [
      {
        step: "Preserve Gate Dharamkanta & Moisture-Deduction Slips",
        detail:
          "Retain the mill's own weighbridge ticket, initial gate moisture deduction remark, container Bill of Lading (for imported OCC), and GST E-Way Part-B trail showing final net weight accepted.",
      },
      {
        step: "Rebut Post-Pulping Weight/Outthrow Debit Notes",
        detail:
          "Assert Sale of Goods Act s.42 and CGST s.34 (refusing Credit Notes): once bales are pulped, physical re-weighing is impossible and unilateral post-consumption deductions are void.",
      },
      {
        step: "Trigger MSMED s.18 / IBC s.8 & Section 43B(h) Notice",
        detail:
          "Dispatch a Fact-Verified Notice to the mill's Managing Director and Statutory Auditor citing Section 43B(h) expense disallowance (for Micro/Small processors) or IBC Form 3 for >= ₹1 Cr raw-material arrears.",
      },
    ],
    keyStatutes: "Sale of Goods Act s.42 | MSMED Act ss.15–18 | Income Tax Act s.43B(h) | IBC 2016 ss.8–9 | CGST Act s.34",
  },
];

export default function PaperMillScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(PAPER_MILL_SCENARIOS[0].id);
  const current =
    PAPER_MILL_SCENARIOS.find((s) => s.id === activeId) || PAPER_MILL_SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Interactive Scenario Selector Pills */}
      <div
        role="tablist"
        aria-label="Paper mill and merchant credit default scenarios"
        className="flex flex-wrap gap-2"
      >
        {PAPER_MILL_SCENARIOS.map((item) => {
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

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-white shrink-0">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Buyer / Debtor Default Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.defaultPattern}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter-Strike
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.statutoryShield}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Mill / Merchant Execution Protocol
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.recoveryProtocol.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200 text-xs">
          <span className="font-semibold text-slate-500">Applicable Statutory Hooks:</span>
          <span className="font-mono font-bold text-slate-800 bg-white px-3 py-1 rounded-lg border border-slate-200">
            {current.keyStatutes}
          </span>
        </div>
      </div>
    </div>
  );
}
