"use client";

import { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  situation: string;
  customsPosition: string;
  statutoryDefense: string;
  recommendedAction: string;
  reliefProbability: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "ecgc-settled",
    badge: "ECGC Settlement",
    title: "Buyer Insolvent abroad; ECGC settled 90% comprehensive risks claim",
    situation:
      "A merchant exporter shipped engineering goods valued at $240,000 to an EU buyer under DA 90 days. The buyer filed for bankruptcy in Germany before acceptance. The exporter received an ECGC claims payout of 90% invoice value, but RBI EDPMS shows $240,000 as outstanding. Nhava Sheva Customs issued a Show Cause Notice under Rule 18 demanding payback of ₹11,40,000 Duty Drawback + ₹3,80,000 RoDTEP scrips plus 15% interest.",
    customsPosition:
      "Customs claims foreign currency proceeds were never credited into the exporter's AD Bank account; therefore export condition under Section 75(1) failed.",
    statutoryDefense:
      "Rule 18(2) of Customs and Central Excise Duties Drawback Rules, 1995/2017 explicitly carves out an exception where compensation is settled by ECGC. Under settled High Court jurisprudence, recovery cannot be sustained when an ECGC insurance settlement is on record and the loss was beyond the exporter's control.",
    recommendedAction:
      "Submit Form BRC-waiver annexing the ECGC Claim Settlement Voucher, Insurance Policy copy, and AD Bank certificate confirming claim credit. Request discharge of SCN under Rule 18(2).",
    reliefProbability: "Very High (95%+ with proper ECGC discharge vouchers)",
  },
  {
    id: "rbi-write-off",
    badge: "AD Bank Write-Off",
    title: "AD Bank wrote off unrealized export proceeds on merits under RBI Master Directions",
    situation:
      "A textile exporter supplied $110,000 worth of garments to a US retail chain that went into Chapter 11 reorganization. After rigorous recovery follow-ups, legal notices, and exhausting recovery remedies, the Authorized Dealer (AD Bank) approved write-off under RBI Master Direction on Export of Goods and Services (Para C.18 / 10% self-write-off / 15% AD Bank limit) and closed the EDPMS entry.",
    customsPosition:
      "ICD Tughlakabad Customs argued that EDPMS closure by an AD bank does not automatically bind the revenue authorities unless specifically approved by the RBI Central Office.",
    statutoryDefense:
      "The proviso to Section 75(1) and Rule 18(2) state that drawback is protected where non-realization is permitted or written off by the Reserve Bank of India or its delegated Authorized Dealer Bank acting within prescribed regulatory powers on merits.",
    recommendedAction:
      "Produce the AD Bank's official Write-Off Certificate, formal correspondence showing bonafide exporter efforts, and proof that surrender of RoDTEP / DBK was not a condition precedent to the banking write-off.",
    reliefProbability: "High (85%–90% if procedural write-off limits are satisfied)",
  },
  {
    id: "extension-pending",
    badge: "AD Bank Extension",
    title: "Overseas commercial dispute pending before ICC / Foreign Court with Extension granted",
    situation:
      "A chemical manufacturer exported specialty polymers worth $350,000 to Turkey. The importer raised an arbitrary quality dispute and withheld payment. The exporter initiated legal proceedings in Istanbul and applied for an extension of the realization period with their AD Category-1 bank. While the bank granted extension under Para C.8 of the Master Direction, Mundra Customs issued a Section 75 recovery SCN.",
    customsPosition:
      "Customs issued demand arguing the standard statutory 9-month realization window under Regulation 9 of FEMA Export Regulations had lapsed.",
    statutoryDefense:
      "Premature SCN: As long as the AD Bank has validly extended the realization period pursuant to RBI delegated powers, the export realization period has not expired under law. The Customs demand is premature and legally infirm.",
    recommendedAction:
      "File interim reply enclosing the AD Bank formal extension letter, copy of foreign legal demand notice, and request keeping the SCN in abeyance pending adjudication or commercial recovery.",
    reliefProbability: "High (SCN kept in abeyance or dropped subject to future realization)",
  },
  {
    id: "rodtep-third-party",
    badge: "Transferred RoDTEP Scrips",
    title: "RoDTEP e-Scrips were already sold/transferred to third-party importers on ICEGATE",
    situation:
      "A manufacturer received RoDTEP credits in their electronic ledger and sold ₹18,50,000 worth of e-scrips to unrelated domestic importers via ICEGATE portal. The underlying export payment of $190,000 got stuck in Sri Lanka due to foreign exchange currency restrictions. Customs has now initiated recovery proceedings against both the manufacturer and the bona fide third-party transferee.",
    customsPosition:
      "Customs sought recovery of duty foregone from the transferee under Section 28 and sought equivalent cash recovery from the exporter.",
    statutoryDefense:
      "Under Notification No. 76/2021-Customs, the primary liability to surrender invalid or unearned RoDTEP credits rests solely on the generating exporter, not a bona fide transferee for value. For the exporter, force majeure defense and RBI write-off applications protect against penalty levies.",
    recommendedAction:
      "Defend the third-party purchaser under bona fide purchaser principles, while presenting RBI force majeure / currency restriction write-off petitions on behalf of the exporter.",
    reliefProbability: "Moderate to High (Transferee protected; Exporter liability contingent on RBI waiver)",
  },
];

export default function DrawbackScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-widest text-red-400 font-bold block mb-1">
            Interactive Defense Matrix
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Customs SCN Real-World Defense Scenarios
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Select your operational scenario to view the exact statutory defense, documentation proof, and likelihood of SCN quashing.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/40"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {s.badge}
            </button>
          );
        })}
      </div>

      {/* Content Card */}
      <div className="bg-slate-800/80 rounded-xl p-5 sm:p-6 border border-slate-700 space-y-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
          {current.title}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              The Operational Crisis
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.situation}
            </p>
          </div>

          <div className="bg-red-950/30 rounded-lg p-4 border border-red-900/40">
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1.5">
              Department Revenue Demand Position
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.customsPosition}
            </p>
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800">
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1.5">
            Statutory Legal Defense & Case Law
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {current.statutoryDefense}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="sm:col-span-2 bg-slate-900/60 rounded-lg p-3.5 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Immediate Advocate Action Required
            </span>
            <p className="text-xs text-slate-300 font-medium">
              {current.recommendedAction}
            </p>
          </div>
          <div className="bg-emerald-950/40 rounded-lg p-3.5 border border-emerald-800/40 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Relief Assessment
            </span>
            <p className="text-xs font-bold text-emerald-300">
              {current.reliefProbability}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
