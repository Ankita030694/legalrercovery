"use client";

import React, { useMemo, useState } from "react";
import { IndustryBenchmark } from "@/data/reports/b2bDelayedPaymentsLoader";

interface B2BIndustryBenchmarkExplorerProps {
  industries: IndustryBenchmark[];
}

const CLUSTERS = [
  "All 25 Sectors",
  "BFSI & Lending",
  "Manufacturing & Infra",
  "Tech & Professional",
  "Healthcare & Pharma",
  "Trade, Logistics & Services",
] as const;

export default function B2BIndustryBenchmarkExplorer({
  industries,
}: B2BIndustryBenchmarkExplorerProps) {
  const [selectedCluster, setSelectedCluster] = useState<string>("All 25 Sectors");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCode, setActiveCode] = useState<string>(industries[0]?.code || "IND-01");

  const filteredIndustries = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return industries.filter((item) => {
      const matchCluster =
        selectedCluster === "All 25 Sectors" || item.cluster === selectedCluster;
      const matchSearch =
        !q ||
        item.sector.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.primaryStatute.toLowerCase().includes(q) ||
        item.keyEvidence.toLowerCase().includes(q);
      return matchCluster && matchSearch;
    });
  }, [industries, selectedCluster, searchTerm]);

  const activeIndustry =
    industries.find((i) => i.code === activeCode) || filteredIndustries[0] || industries[0];

  return (
    <div className="space-y-6">
      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <div className="flex flex-wrap gap-2">
          {CLUSTERS.map((cluster) => (
            <button
              key={cluster}
              type="button"
              onClick={() => setSelectedCluster(cluster)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                selectedCluster === cluster
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cluster}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by sector, statute (e.g. 43B(h), IBC, SARFAESI), or evidence..."
            aria-label="Filter 25-industry benchmark table"
            className="w-full sm:max-w-md px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
          <span className="text-xs font-bold text-slate-500">
            Showing {filteredIndustries.length} of {industries.length} Industries
          </span>
        </div>
      </div>

      {/* Selected Industry Deep-Dive Inspector Card */}
      {activeIndustry && (
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white mr-2">
                {activeIndustry.code}
              </span>
              <span className="text-xs font-bold text-slate-400">{activeIndustry.cluster}</span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-950/80 text-amber-300 border border-amber-800/60">
              {activeIndustry.dsoRiskTier}
            </span>
          </div>
          <p className="text-base sm:text-lg font-extrabold text-white">{activeIndustry.sector}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 font-bold uppercase block mb-1">
                Statutory Credit &amp; Aging Window
              </span>
              <span className="text-slate-100 font-medium">{activeIndustry.statutoryCreditWindow}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 font-bold uppercase block mb-1">
                Primary &amp; Secondary Recovery Statutes
              </span>
              <span className="text-emerald-300 font-semibold block">{activeIndustry.primaryStatute}</span>
              <span className="text-slate-300 mt-1 block">{activeIndustry.secondaryRemedy}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 font-bold uppercase block mb-1">
                Mandatory Evidence Pack (BSA s.63)
              </span>
              <span className="text-slate-200">{activeIndustry.keyEvidence}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 font-bold uppercase block mb-1">
                Pre-Litigation Notice Cure Trigger
              </span>
              <span className="text-red-300 font-semibold">{activeIndustry.cureTrigger}</span>
            </div>
          </div>
        </div>
      )}

      {/* Full 25-Industry Responsive Matrix */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="py-3 px-3 font-bold uppercase tracking-wider">ID</th>
              <th className="py-3 px-3 font-bold uppercase tracking-wider">Industry Vertical</th>
              <th className="py-3 px-3 font-bold uppercase tracking-wider">Credit / Aging Window</th>
              <th className="py-3 px-3 font-bold uppercase tracking-wider">Primary Recovery Statute</th>
              <th className="py-3 px-3 font-bold uppercase tracking-wider">Pre-Litigation Cure Trigger</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredIndustries.map((row) => {
              const isSelected = row.code === activeIndustry?.code;
              return (
                <tr
                  key={row.code}
                  onClick={() => setActiveCode(row.code)}
                  className={`cursor-pointer transition-colors ${
                    isSelected ? "bg-red-50/80" : "hover:bg-slate-50"
                  }`}
                >
                  <td className="py-3 px-3 font-black text-[#DC2626] whitespace-nowrap">
                    {row.code}
                  </td>
                  <td className="py-3 px-3 font-bold text-slate-900 min-w-[180px]">
                    {row.sector}
                    <span className="block text-[10px] font-semibold text-slate-500">
                      {row.cluster} &bull; {row.dsoRiskTier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-700 min-w-[150px]">
                    {row.statutoryCreditWindow}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800 min-w-[180px]">
                    {row.primaryStatute}
                  </td>
                  <td className="py-3 px-3 text-slate-700 min-w-[180px]">{row.cureTrigger}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-slate-500">
        Tip: Click any industry row above to inspect its full secondary remedies and BSA 2023 Section 63 evidence pack in the dark inspector panel.
      </p>
    </div>
  );
}
