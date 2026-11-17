"use client";

import React, { useState } from "react";
import { PaymentTermBenchmark } from "@/data/reports/exporterDefaultsReportLoader";

interface ExporterReportScenarioTabsProps {
  terms: PaymentTermBenchmark[];
}

export default function ExporterReportScenarioTabs({
  terms,
}: ExporterReportScenarioTabsProps) {
  const [selectedId, setSelectedId] = useState<string>(terms[0]?.id || "open_account");
  const active = terms.find((t) => t.id === selectedId) || terms[0];

  if (!active) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-5">
      <div className="flex flex-wrap gap-2">
        {terms.map((term) => {
          const isActive = term.id === active.id;
          return (
            <button
              key={term.id}
              type="button"
              onClick={() => setSelectedId(term.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400"
              }`}
            >
              {term.term}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] block">
              Selected Export Payment Instrument
            </span>
            <p className="text-lg font-extrabold text-slate-900">{active.term}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200">
            Risk Tier: {active.riskTier}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Primary Default Vulnerability
            </span>
            <p className="font-semibold text-slate-800">{active.primaryVulnerability}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Governing Statute &amp; Trade Rule
            </span>
            <p className="font-semibold text-slate-800">{active.statutoryLever}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              RBI EDPMS &amp; Drawback Impact
            </span>
            <p className="font-semibold text-slate-900">{active.edpmsImpact}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Recommended Escalation &amp; Unit Cost
            </span>
            <p className="font-semibold text-slate-900">
              {active.recommendedAction} ({active.unitCost})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
