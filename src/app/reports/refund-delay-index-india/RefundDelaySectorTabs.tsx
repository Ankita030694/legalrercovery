"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectorMetric } from "@/data/reports/refundDataLoader";

interface RefundDelaySectorTabsProps {
  sectors: SectorMetric[];
}

export default function RefundDelaySectorTabs({ sectors }: RefundDelaySectorTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(sectors[0]?.id || "ecommerce");

  const currentSector = sectors.find((s) => s.id === activeTab) || sectors[0];

  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
      {/* Tab Selectors */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-none">
        {sectors.map((sector) => {
          const isActive = activeTab === sector.id;
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setActiveTab(sector.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {sector.name}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
              Sample: {currentSector.sampleCount.toLocaleString()} Verified Claims
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              {currentSector.name} Refund Delay Profile
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-100 px-3 py-2 rounded-xl text-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase">Pre-Notice Median</p>
              <p className="text-lg font-black text-red-600">{currentSector.medianPreNoticeDays} Days</p>
            </div>
            <div className="text-slate-300 font-bold text-lg">→</div>
            <div className="bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-center">
              <p className="text-[10px] text-emerald-700 font-bold uppercase">Post-Notice Median</p>
              <p className="text-lg font-black text-emerald-700">{currentSector.medianPostNoticeDays} Days</p>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Notice Resolution Rate
            </p>
            <p className="text-2xl font-black text-slate-900">
              {currentSector.noticeResolutionRate}%
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Resolved in pre-litigation stage without contested court filings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Governing Regulatory Body
            </p>
            <p className="text-sm font-bold text-slate-800">
              {currentSector.regulator}
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Primary statutory regulatory framework governing consumer rights.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Statutory Limit / Mandate
            </p>
            <p className="text-xs font-bold text-slate-800">
              {currentSector.statutoryLimit}
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Mandatory legal SLA established under government guidelines.
            </p>
          </div>
        </div>

        {/* Primary Bottleneck & Resolution Hook */}
        <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
          <h4 className="text-xs uppercase font-extrabold text-amber-800 tracking-wider mb-1">
            Primary Operational Bottleneck
          </h4>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {currentSector.primaryCause}. Without statutory legal pressure, consumer complaints are systematically routed through Tier-1 bot scripts with scripted delays.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-slate-600">
            Have an unpaid refund in {currentSector.name}? Our advocates serve legal notices citing statutory sections.
          </p>
          <Link
            href="/send-legal-notice-online-india"
            className="shrink-0 text-xs font-extrabold text-white bg-[#DC2626] hover:bg-[#B91C1C] px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            Send Notice for This Sector →
          </Link>
        </div>
      </div>
    </div>
  );
}
