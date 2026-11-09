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
              Dispute Category: <strong className="text-slate-900 font-bold">{activeSegment.name}</strong> • Post-May 2026 Cohort
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-600 uppercase block tracking-wider">
                Statutory Cure Period
              </span>
              <span className="text-sm font-black text-slate-900">
                15 Days
              </span>
            </div>
            <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-center">
              <span className="text-[10px] font-bold text-red-800 uppercase block tracking-wider">
                Cohort Status
              </span>
              <span className="text-sm font-black text-[#DC2626]">
                In Compilation
              </span>
            </div>
          </div>
        </div>

        {/* 15, 30, 60 Day Time Window Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stage 1</span>
              <span className="text-xs font-black text-emerald-600">Days 1–15</span>
            </div>
            <p className="text-base font-black text-slate-900 mb-1">Statutory Cure Window</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Recipient reviews liability. Settlement avoids prosecution or formal consumer / civil filing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stage 2</span>
              <span className="text-xs font-black text-blue-600">Days 16–30</span>
            </div>
            <p className="text-base font-black text-slate-900 mb-1">Draft Plaint Conciliation</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Advocate serves draft complaint copy to in-house counsel, triggering executive review.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stage 3</span>
              <span className="text-xs font-black text-amber-600">Days 31–60</span>
            </div>
            <p className="text-base font-black text-slate-900 mb-1">Pre-Litigation Lok Adalat</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pre-filing mediation or notice response negotiations prior to contested trial listing.
            </p>
          </div>
        </div>

        {/* Statutory Legal Leverage Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-red-50/60 border border-red-200/80 space-y-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-900">
              Primary Statutory Legal Leverage
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {activeSegment.primaryLeverage}
          </p>
        </div>

        {/* Debtor Reaction & Escalation Forum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Standard Debtor Legal Response Pattern
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeSegment.commonDebtorResponse}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Designated Escalation Forum Upon Default
            </span>
            <p className="text-xs font-bold text-slate-900 leading-relaxed">
              {activeSegment.escalationForum}
            </p>
          </div>
        </div>

        {/* Contextual CTA for this category */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-600">
            Dealing with an active {activeSegment.name.toLowerCase()} dispute?
          </p>
          <Link
            href={actionLink.href}
            className="text-xs font-extrabold text-[#DC2626] hover:text-[#B91C1C] hover:underline transition-colors shrink-0"
          >
            {actionLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
