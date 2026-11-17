"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  summary: string;
  riskLevel: "HIGH ENFORCEABILITY" | "HIGH SET-ASIDE RISK" | "VOID AB INITIO";
  riskColor: string;
  pitfall: string;
  statutoryFix: string;
  recommendedRoute: string;
  actionHref: string;
  actionText: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "signed-lorry-receipt",
    tabLabel: "Scenario A: Signed Bilty + Part-Payment",
    title: "Buyer Accepted Goods on Bilty / Counter-Signed Invoice with Mahajan Clause",
    summary:
      "The outstation buyer signed the transport Lorry Receipt (LR) upon delivery, accepted the physical Bijak/invoice referencing trade rules of Maskati Market/FOSTTA, and made a partial bank transfer against the ledger balance.",
    riskLevel: "HIGH ENFORCEABILITY",
    riskColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    pitfall:
      "Failing to issue a formal Section 21 notice of invocation specifying the exact Panch/Arbitral Rules before requesting the Association President to appoint arbitrators.",
    statutoryFix:
      "Per Delhi HC in *Taipack Ltd.* and Gujarat HC in *Ramesh Textiles*, continuous course of dealing accompanied by signed delivery challans satisfies Section 7(4)(c) of the Arbitration Act. Serve Section 21 notice via Speed Post and WhatsApp with BSA Section 63 hash logs before presenting the award for execution.",
    recommendedRoute: "Section 36 Civil Execution Petition before District Commercial Court.",
    actionHref: "/user/new-recovery",
    actionText: "Draft Section 21 Invocation & Award Execution Petition",
  },
  {
    id: "unilateral-panch-president",
    tabLabel: "Scenario B: Unilateral President Appointment",
    title: "Mahajan President Appointed Sole Arbitrator Without Debtor Participation",
    summary:
      "The trade association rules state that if an outstation buyer fails to respond to summons, the Association President or Secretary shall unilaterally empanel a sole arbitrator or Panch committee to pass an award.",
    riskLevel: "HIGH SET-ASIDE RISK",
    riskColor: "bg-amber-50 text-amber-800 border-amber-300",
    pitfall:
      "Violates the landmark Supreme Court ruling in *Perkins Eastman Architects* (2020) and Section 12(5) read with the Seventh Schedule. The debtor will challenge the award under Section 34 or Section 36 in execution.",
    statutoryFix:
      "When the debtor fails to concur on the arbitrator panel, do NOT proceed ex-parte with a unilaterally nominated Mahajan Panch. Instead, petition the High Court under Section 11(6) for neutral arbitrator appointment, or immediately switch to MSME ODR / Order 37.",
    recommendedRoute: "MSME Samadhaan ODR (MSEFC Section 18) or Commercial Order 37 Summary Suit.",
    actionHref: "/msme-odr-portal-delayed-payment-guide",
    actionText: "Switch from Defective Panch to MSME ODR Forum",
  },
  {
    id: "unsigned-whatsapp-order",
    tabLabel: "Scenario C: Informal Broker WhatsApp Orders",
    title: "Broker Placed Order on WhatsApp; Invoices Dispatched Unsigned",
    summary:
      "Goods were dispatched via transport under a broker's (adatiya's) WhatsApp instructions. The invoice contains the printed Mahajan clause, but the debtor never signed or acknowledged the Bijak in writing.",
    riskLevel: "VOID AB INITIO",
    riskColor: "bg-red-50 text-red-800 border-red-300",
    pitfall:
      "Debtor will successfully plead lack of consensus ad idem under Section 7(3). The execution court will dismiss the Section 36 petition, ruling no valid written arbitration agreement ever existed.",
    statutoryFix:
      "Bypass market arbitration completely. Establish liability under Sale of Goods Act, Section 70 Contract Act, and GST e-Way Bill records. File a Commercial Summary Suit under Order XXXVII CPC or MSME statutory recovery.",
    recommendedRoute: "Summary Suit (Order 37 CPC) backed by e-Way Bills & Broker Ledger Confirmation.",
    actionHref: "/how-to-recover-money-without-written-agreement",
    actionText: "Initiate Direct Legal Notice for Unsigned Invoice Dues",
  },
  {
    id: "outstation-jurisdiction-challenge",
    tabLabel: "Scenario D: Outstation Debtor Territorial Defense",
    title: "Debtor in Different State Ignores Mahajan Summons Citing Lack of Jurisdiction",
    summary:
      "Surat/Ahmedabad mill dispatches grey fabric to garment manufacturer in Kanpur/Bengaluru. Debtor ignores Mahajan summons claiming local trade association rules do not apply to non-members.",
    riskLevel: "HIGH SET-ASIDE RISK",
    riskColor: "bg-amber-50 text-amber-800 border-amber-300",
    pitfall:
      "Mahajan awards against non-members are regularly stayed under Section 34 on the ground that non-members cannot be bound by private association bylaws without express written consent.",
    statutoryFix:
      "If the outstation buyer is not an enrolled association member, rely on the invoice clause only if counter-signed; otherwise, invoke MSME Act Section 18 which provides statutory overriding jurisdiction at the supplier's location (Section 24 override).",
    recommendedRoute: "MSEFC Council Filing under MSMED Act 2006 (Supplier-Location Jurisdiction).",
    actionHref: "/industries/textiles-apparel-garment-recovery",
    actionText: "Audit Textile Debtor Jurisdiction & Recovery Forum",
  },
];

export default function MahajanArbitrationScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 text-white shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-red-400">
            Interactive Enforcement Diagnostics
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            Simulate Your Textile Mahajan Arbitration Clause Enforceability
          </h3>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
          Arbitration Act §7 / §34 / §36 Audit
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-800/90 rounded-xl p-5 sm:p-6 border border-slate-700 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-400 shrink-0" />
            {activeScenario.title}
          </h4>
          <span
            className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${activeScenario.riskColor}`}
          >
            {activeScenario.riskLevel}
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {activeScenario.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-700/80">
          <div className="bg-slate-900/80 rounded-lg p-3.5 border border-red-900/40">
            <span className="text-xs uppercase font-bold text-red-400 flex items-center gap-1.5 mb-1.5">
              <AlertTriangle className="w-4 h-4" /> Procedural Pitfall / Annulment Risk
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeScenario.pitfall}
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-lg p-3.5 border border-emerald-900/40">
            <span className="text-xs uppercase font-bold text-emerald-400 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-4 h-4" /> Statutory Remedy & Compliance Step
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeScenario.statutoryFix}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-700/80 text-xs">
          <div className="text-slate-300">
            <strong className="text-white">Optimal Statutory Route: </strong>
            <span className="text-amber-300 font-semibold">{activeScenario.recommendedRoute}</span>
          </div>
          <Link
            href={activeScenario.actionHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 hover:underline"
          >
            {activeScenario.actionText} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
