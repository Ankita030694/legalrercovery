"use client";

import React, { useState } from "react";

interface Milestone {
  label: string;
  dayOffset: number;
  badge: string;
  badgeColor: string;
  rule: string;
  description: string;
}

export default function ElectronicsDeadlineCalculator() {
  const todayStr = new Date().toISOString().split("T")[0];
  const [baseDate, setBaseDate] = useState<string>(todayStr);
  const [retailer, setRetailer] = useState<"croma" | "reliance-digital">("croma");
  const [disputeType, setDisputeType] = useState<"doa" | "warranty" | "extended">("doa");

  const calculateDate = (baseDateStr: string, daysToAdd: number) => {
    if (!baseDateStr) return "--";
    try {
      const d = new Date(baseDateStr);
      d.setDate(d.getDate() + daysToAdd);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "--";
    }
  };

  const calculateYears = (baseDateStr: string, yearsToAdd: number) => {
    if (!baseDateStr) return "--";
    try {
      const d = new Date(baseDateStr);
      d.setFullYear(d.getFullYear() + yearsToAdd);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "--";
    }
  };

  const milestones: Milestone[] = [
    {
      label: "Store Replacement Window Expiry",
      dayOffset: 7,
      badge: "Retail Window",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      rule: "Store Sales Agreement & Return Terms",
      description:
        disputeType === "doa"
          ? `${retailer === "croma" ? "Croma" : "Reliance Digital"} standard terms promise direct replacement within 7 calendar days. Lodge an official written ticket before this date to prevent staff claiming the return window closed.`
          : "Standard store exchange policy. Once past 7 days, stores attempt to shift all repair responsibility to the manufacturer.",
    },
    {
      label: "Grievance Officer 48h Acknowledgement",
      dayOffset: 2,
      badge: "Mandatory Rule",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      rule: "Rule 4(5), E-Commerce Rules 2020",
      description: `The Resident Grievance Officer of ${retailer === "croma" ? "Infiniti Retail Limited" : "Reliance Retail Limited"} is legally mandated to issue a ticket acknowledgement within 48 hours of your formal email complaint.`,
    },
    {
      label: "Statutory Legal Notice 15-Day Cure Window",
      dayOffset: 15,
      badge: "Pre-Litigation Demand",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      rule: "Section 86, CPA 2019 & Privity of Contract",
      description:
        "The standard statutory notice period granted to the retailer and manufacturer to deliver a replacement unit, authorize a 100% refund, or pay damages before an e-Jagriti consumer complaint is instituted.",
    },
    {
      label: "Mandatory 30-Day E-Commerce Redressal",
      dayOffset: 30,
      badge: "Redressal Cap",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      rule: "Rule 5(4), Consumer Protection E-Commerce Rules",
      description:
        "Statutory deadline for the corporate entity to settle consumer grievances completely. Unresolved matters past this point constitute actionable Deficiency in Service.",
    },
  ];

  const limitationDate = calculateYears(baseDate, 2);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 md:p-9 border border-slate-800 shadow-xl my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800 mb-2">
            Interactive Statutory Calculator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Electronics Dispute & Legal Notice Timeline Calculator
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Calculate your DOA claim cut-off, grievance deadlines, and e-Jagriti limitation dates based on Indian statutory benchmarks.
          </p>
        </div>
      </div>

      {/* Control Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
            Retail Chain
          </label>
          <select
            value={retailer}
            onChange={(e) => setRetailer(e.target.value as "croma" | "reliance-digital")}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="croma">Croma (Infiniti Retail Ltd - Tata)</option>
            <option value="reliance-digital">Reliance Digital (Reliance Retail Ltd)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
            Dispute Nature
          </label>
          <select
            value={disputeType}
            onChange={(e) => setDisputeType(e.target.value as "doa" | "warranty" | "extended")}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="doa">Defective on Arrival / Within 7 Days</option>
            <option value="warranty">Manufacturing Defect (Year 1 Brand Warranty)</option>
            <option value="extended">Extended Warranty Denial (ZipCare / resQ)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
            Delivery or Defect Discovery Date
          </label>
          <input
            type="date"
            value={baseDate}
            onChange={(e) => setBaseDate(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Dynamic Milestones Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {milestones.map((m, idx) => {
          const targetDate = calculateDate(baseDate, m.dayOffset);
          return (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    +{m.dayOffset} Days
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{m.label}</h4>
                <div className="text-lg font-extrabold text-amber-400 font-mono mb-2">
                  {targetDate}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {m.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                Statute: {m.rule}
              </div>
            </div>
          );
        })}
      </div>

      {/* Limitation Banner */}
      <div className="mt-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-emerald-400 uppercase tracking-wide mr-2">
            Section 69 CPA Limitation Period:
          </span>
          <span className="text-slate-300">
            Final date to file consumer complaint on e-Jagriti is{" "}
            <strong className="text-white font-mono">{limitationDate}</strong> (2 years from cause of action).
          </span>
        </div>
        <div className="text-slate-400 shrink-0 font-mono text-[11px]">
          Target Forum: District Commission
        </div>
      </div>
    </div>
  );
}
