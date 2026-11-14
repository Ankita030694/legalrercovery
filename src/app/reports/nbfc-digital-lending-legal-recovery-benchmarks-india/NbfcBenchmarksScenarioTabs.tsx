"use client";

import React, { useState } from "react";
import { DpdBucketBenchmark } from "@/data/reports/nbfcBenchmarksLoader";

interface NbfcBenchmarksScenarioTabsProps {
  buckets: DpdBucketBenchmark[];
}

export default function NbfcBenchmarksScenarioTabs({
  buckets,
}: NbfcBenchmarksScenarioTabsProps) {
  const [selectedId, setSelectedId] = useState<string>(buckets[0]?.id || "dpd_0_30");
  const active = buckets.find((b) => b.id === selectedId) || buckets[0];

  if (!active) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-5">
      <div className="flex flex-wrap gap-2">
        {buckets.map((bucket) => {
          const isActive = bucket.id === active.id;
          return (
            <button
              key={bucket.id}
              type="button"
              onClick={() => setSelectedId(bucket.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400"
              }`}
            >
              {bucket.bucket}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] block">
              Selected Delinquency Cohort
            </span>
            <p className="text-lg font-extrabold text-slate-900">{active.bucket}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Cure Window: {active.statutoryCureWindow}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Trigger Event
            </span>
            <p className="font-semibold text-slate-800">{active.triggerEvent}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Governing Statute
            </span>
            <p className="font-semibold text-slate-800">{active.primaryStatute}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              Recommended Dispatch Wave
            </span>
            <p className="font-semibold text-slate-900">{active.recommendedWave}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Unit Cost &amp; Next Forum
            </span>
            <p className="font-semibold text-slate-900">
              {active.unitCostPerAccount} — Next: {active.escalationPath}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
