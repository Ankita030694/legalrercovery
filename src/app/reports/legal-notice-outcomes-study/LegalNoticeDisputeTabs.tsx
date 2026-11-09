"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DisputeSegment } from "@/data/reports/legalNoticeOutcomesLoader";

interface LegalNoticeDisputeTabsProps {
  segments: DisputeSegment[];
}

export default function LegalNoticeDisputeTabs({ segments }: LegalNoticeDisputeTabsProps) {
  const [selectedId, setSelectedId] = useState<string>(segments[0]?.id || "");
  const activeSegment = segments.find((s) => s.id === selectedId) || segments[0];

  const getServiceLink = (id: string) => {
    switch (id) {
      case "fnf_salary":
        return {
          href: "/services/recovery-of-salary-and-employment-dues",
          label: "View Salary & FnF Recovery Notice →",
        };
      case "consumer_ecommerce":
        return {
          href: "/services/refunds-and-consumer-complaints",
          label: "Send Consumer Refund Legal Notice →",
        };
      case "cheque_bounce":
        return {
          href: "/cheque-bounce-case-against-company-directors",
          label: "View Cheque Bounce Notice Procedure →",
        };
      case "tenant_deposit":
        return {
          href: "/services/property-and-builder-disputes",
          label: "Send Landlord Deposit Recovery Notice →",
        };
      case "commercial_b2b":
        return {
          href: "/legal-notice-charges",
          label: "B2B & MSME Notice Pricing Details →",
        };
      case "builder_rera":
        return {
          href: "/services/property-and-builder-disputes",
          label: "Explore Builder RERA Dispute Notice →",
        };
      default:
        return {
          href: "/send-legal-notice-online-india",
          label: "Send an Advocate Legal Notice Online →",
        };
    }
  };

  const actionLink = getServiceLink(activeSegment.id);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Category Pills Navigation */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
        {segments.map((seg) => {
          const isActive = seg.id === activeSegment.id;
          return (
            <button
              key={seg.id}
              type="button"
              onClick={() => setSelectedId(seg.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {seg.name.split("&")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Active Segment Detail Card */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {activeSegment.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Sample: <strong className="text-slate-900 font-bold">{activeSegment.sampleCount.toLocaleString("en-IN")}</strong> verified legal notices dispatched &amp; tracked.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block tracking-wider">
                Total Settlement Rate
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700">
                {activeSegment.totalSettledRate}%
              </span>
            </div>
            <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-center">
              <span className="text-[10px] font-bold text-red-800 uppercase block tracking-wider">
                Median Days
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#DC2626]">
                {activeSegment.medianDays} Days
              </span>
            </div>
          </div>
        </div>

        {/* 15, 30, 60 Day Time Window Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">15-Day Cure Window</span>
              <span className="text-xs font-black text-emerald-600">{activeSegment.settlement15Days}%</span>
            </div>
            <p className="text-2xl font-black text-slate-900 mb-2">{activeSegment.settlement15Days}%</p>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${activeSegment.settlement15Days}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Settled within statutory notice deadline</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">16 to 30 Days</span>
              <span className="text-xs font-black text-blue-600">{activeSegment.settlement30Days}%</span>
            </div>
            <p className="text-2xl font-black text-slate-900 mb-2">{activeSegment.settlement30Days}%</p>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${activeSegment.settlement30Days}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Resolved during second escalation/negotiation</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">31 to 60 Days</span>
              <span className="text-xs font-black text-amber-600">{activeSegment.settlement60Days}%</span>
            </div>
            <p className="text-2xl font-black text-slate-900 mb-2">{activeSegment.settlement60Days}%</p>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${activeSegment.settlement60Days}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">Pre-litigation conciliation or Lok Adalat</span>
          </div>
        </div>

        {/* Detailed Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] block">
              Primary Statutory Leverage Cited
            </span>
            <p className="text-slate-800 font-semibold leading-relaxed">
              {activeSegment.primaryLeverage}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">
              Observed Debtor Settlement Behavior
            </span>
            <p className="text-slate-800 font-semibold leading-relaxed">
              {activeSegment.commonDebtorResponse}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
              Median Disputed Value in Cohort
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900">
              ₹{activeSegment.medianClaim.toLocaleString("en-IN")}
            </p>
            <p className="text-[11px] text-slate-500">Typical claim size tracked in LegalRecovery study database</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
              Next Statutory Escalation Forum If Unsettled
            </span>
            <p className="text-sm font-bold text-slate-900">
              {activeSegment.escalationForum}
            </p>
            <p className="text-[11px] text-slate-500">Where 27.2% of non-compliant claims proceed after 60 days</p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            href={actionLink.href}
            className="text-xs sm:text-sm font-extrabold text-[#DC2626] hover:text-[#B91C1C] hover:underline inline-flex items-center gap-1.5"
          >
            {actionLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
