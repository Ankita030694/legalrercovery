"use client";

import React, { useMemo, useState, useId } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type StateKey = "delhi" | "maharashtra" | "karnataka" | "gujarat" | "tamilnadu" | "up";

interface StateFeeResult {
  key: StateKey;
  stateName: string;
  cityHub: string;
  statute: string;
  fee: number;
  isCapped: boolean;
  capLabel: string;
  effectivePct: number;
  notes: string;
}

function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return new Date(2025, 0, 1);
  return new Date(y, m - 1, d);
}

function diffDays(start: Date, end: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.max(0, Math.round((utc2 - utc1) / msPerDay));
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

/**
 * Computes approximate state-wise ad-valorem court fee for money recovery suits
 * based on Schedule I / Art. 1 slabs of each State Court-Fees Act.
 */
function calculateStateCourtFee(state: StateKey, specifiedValue: number): StateFeeResult {
  const v = Math.max(0, specifiedValue);

  switch (state) {
    case "delhi": {
      // Court Fees Act, 1870 (Delhi Amendment):
      // Up to ₹4,00,000 -> progressive slab (~₹6,248 at ₹4L)
      // Above ₹4,00,000 -> ₹6,248 + ₹48.80 per ₹5,000 or part thereof (~0.976% uncapped)
      let fee = 0;
      if (v <= 0) fee = 0;
      else if (v <= 50000) fee = Math.max(250, v * 0.025);
      else if (v <= 400000) fee = 1250 + ((v - 50000) / 350000) * 4998;
      else {
        const excessBlocks = Math.ceil((v - 400000) / 5000);
        fee = 6248 + excessBlocks * 48.8;
      }
      return {
        key: "delhi",
        stateName: "Delhi",
        cityHub: "New Delhi / Saket / Tis Hazari",
        statute: "Court-Fees (Delhi Amendment) Act",
        fee: Math.round(fee),
        isCapped: false,
        capLabel: "Uncapped (~0.98% above ₹4L)",
        effectivePct: v > 0 ? (fee / v) * 100 : 0,
        notes: "No upper ceiling; ~₹9,760 per ₹10L above ₹4L.",
      };
    }

    case "maharashtra": {
      // Maharashtra Court Fees Act, 1959 — Schedule I, Art. 1:
      // Progressive slabs up to ₹1,00,000 (~₹2,430), then ₹200 per ₹10,000 (2%) above ₹1L,
      // strictly capped at ₹3,00,000.
      let fee = 0;
      if (v <= 0) fee = 0;
      else if (v <= 100000) fee = Math.max(200, v * 0.0243);
      else if (v <= 1100000) {
        const blocks = Math.ceil((v - 100000) / 10000);
        fee = 2430 + blocks * 200;
      } else {
        const blocks = Math.ceil((v - 100000) / 10000);
        fee = Math.min(300000, 2430 + blocks * 200);
      }
      return {
        key: "maharashtra",
        stateName: "Maharashtra",
        cityHub: "Mumbai / Pune / Nagpur",
        statute: "Maharashtra Court Fees Act, 1959",
        fee: Math.round(fee),
        isCapped: fee >= 300000,
        capLabel: "Capped at ₹3,00,000",
        effectivePct: v > 0 ? (fee / v) * 100 : 0,
        notes: "Max cap of ₹3,00,000 reached at ~₹1.50 Cr claim.",
      };
    }

    case "karnataka": {
      // Karnataka Court-Fees and Suits Valuation Act, 1958 — Art. 1 Schedule I:
      // 0–₹1L: ~₹7,500; ₹1L–₹5L: 5%; ₹5L–₹10L: 4%; ₹10L–₹20L: 3%; ₹20L–₹50L: 2%; >₹50L: 1% (uncapped)
      let fee = 0;
      if (v <= 0) fee = 0;
      else if (v <= 100000) fee = v * 0.075;
      else if (v <= 500000) fee = 7500 + (v - 100000) * 0.05;
      else if (v <= 1000000) fee = 27500 + (v - 500000) * 0.04;
      else if (v <= 2000000) fee = 47500 + (v - 1000000) * 0.03;
      else if (v <= 5000000) fee = 77500 + (v - 2000000) * 0.02;
      else fee = 137500 + (v - 5000000) * 0.01;
      return {
        key: "karnataka",
        stateName: "Karnataka",
        cityHub: "Bengaluru / Hubballi",
        statute: "Karnataka Court-Fees Act, 1958",
        fee: Math.round(fee),
        isCapped: false,
        capLabel: "Uncapped (1%–7.5% tiered)",
        effectivePct: v > 0 ? (fee / v) * 100 : 0,
        notes: "High initial slabs; drops to 1% marginal above ₹50L.",
      };
    }

    case "gujarat": {
      // Gujarat Court-Fees Act, 2004 — Schedule I Art. 1:
      // Progressive slabs up to maximum cap of ₹75,000.
      let fee = 0;
      if (v <= 0) fee = 0;
      else if (v <= 100000) fee = v * 0.055;
      else if (v <= 500000) fee = 5500 + (v - 100000) * 0.035;
      else if (v <= 1000000) fee = 19500 + (v - 500000) * 0.02;
      else fee = Math.min(75000, 29500 + (v - 1000000) * 0.01);
      return {
        key: "gujarat",
        stateName: "Gujarat",
        cityHub: "Ahmedabad / Surat / Vadodara",
        statute: "Gujarat Court-Fees Act, 2004",
        fee: Math.round(fee),
        isCapped: fee >= 75000,
        capLabel: "Capped at ₹75,000",
        effectivePct: v > 0 ? (fee / v) * 100 : 0,
        notes: "Lowest high-value cap in India (₹75,000 max above ~₹55.5L).",
      };
    }

    case "tamilnadu": {
      // Tamil Nadu Court-Fees and Suits Valuation Act, 1955 (2017 Amendment):
      // Uniform 3% ad-valorem under Art. 1 Schedule I, uncapped.
      const fee = v * 0.03;
      return {
        key: "tamilnadu",
        stateName: "Tamil Nadu",
        cityHub: "Chennai / Coimbatore",
        statute: "TN Court-Fees Act, 1955 (Art. 1)",
        fee: Math.round(fee),
        isCapped: false,
        capLabel: "Uncapped (Flat 3%)",
        effectivePct: v > 0 ? 3.0 : 0,
        notes: "Flat 3% ad-valorem with no statutory upper cap.",
      };
    }

    case "up": {
      // UP Court-Fees Act, 1870 (as amended in UP):
      // ~7.5% ad-valorem on commercial money suits above ₹10,000, uncapped.
      let fee = 0;
      if (v <= 0) fee = 0;
      else if (v <= 50000) fee = v * 0.085;
      else fee = 4250 + (v - 50000) * 0.075;
      return {
        key: "up",
        stateName: "Uttar Pradesh",
        cityHub: "Noida / Lucknow / Kanpur",
        statute: "UP Court-Fees Act, 1870",
        fee: Math.round(fee),
        isCapped: false,
        capLabel: "Uncapped (~7.5% above ₹50K)",
        effectivePct: v > 0 ? (fee / v) * 100 : 0,
        notes: "Among the highest uncapped ad-valorem fees (~7.5%).",
      };
    }
  }
}

export default function CommercialCourtCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(260000);
  const [dueDateStr, setDueDateStr] = useState<string>("2025-05-01");
  const [filingDateStr, setFilingDateStr] = useState<string>("2026-11-20");
  const [interestRatePct, setInterestRatePct] = useState<number>(18);
  const [compoundingMode, setCompoundingMode] = useState<"simple" | "msme_monthly">("simple");
  const [selectedState, setSelectedState] = useState<StateKey>("delhi");
  const [otherLegalCosts, setOtherLegalCosts] = useState<number>(55000);
  const [recoveryProbPct, setRecoveryProbPct] = useState<number>(85);

  const [copied, setCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const principalId = useId();
  const dueDateId = useId();
  const filingDateId = useId();
  const rateId = useId();
  const stateId = useId();
  const legalCostId = useId();
  const probId = useId();

  const calc = useMemo(() => {
    const p = Math.max(0, principal);
    const start = parseLocalDate(dueDateStr);
    const end = parseLocalDate(filingDateStr);
    const days = diffDays(start, end);
    const years = days / 365;
    const rate = Math.max(0, interestRatePct) / 100;

    let accruedInterest = 0;
    if (p > 0 && days > 0 && rate > 0) {
      if (compoundingMode === "simple") {
        accruedInterest = p * rate * years;
      } else {
        // Monthly rests compounding (e.g., MSME s.16 3x RBI rate)
        const months = days / 30.4375;
        accruedInterest = p * (Math.pow(1 + rate / 12, months) - 1);
      }
    }

    const specifiedValue = p + accruedInterest;
    const qualifiesCommercial = specifiedValue >= 300000;
    const principalAloneBelow3L = p < 300000;
    const interestBridgedThreshold = principalAloneBelow3L && qualifiesCommercial;

    const allStates: StateFeeResult[] = (
      ["delhi", "maharashtra", "karnataka", "gujarat", "tamilnadu", "up"] as StateKey[]
    ).map((st) => calculateStateCourtFee(st, specifiedValue));

    const activeState =
      allStates.find((s) => s.key === selectedState) ?? allStates[0];

    // Section 12A Pre-Institution Mediation fee (approx NALSA/State slab)
    const mediationFee =
      specifiedValue <= 1000000
        ? 15000
        : specifiedValue <= 5000000
        ? 30000
        : specifiedValue <= 10000000
        ? 40000
        : 50000;

    // ROI vs Write-Off
    const totalUpfrontOutlay = activeState.fee + Math.max(0, otherLegalCosts);
    const expectedGrossRecovery = specifiedValue * (Math.min(100, Math.max(0, recoveryProbPct)) / 100);
    const netExpectedGain = expectedGrossRecovery - totalUpfrontOutlay;
    const roiMultiple = totalUpfrontOutlay > 0 ? netExpectedGain / totalUpfrontOutlay : 0;

    return {
      p,
      days,
      accruedInterest,
      specifiedValue,
      qualifiesCommercial,
      principalAloneBelow3L,
      interestBridgedThreshold,
      allStates,
      activeState,
      mediationFee,
      totalUpfrontOutlay,
      expectedGrossRecovery,
      netExpectedGain,
      roiMultiple,
    };
  }, [
    principal,
    dueDateStr,
    filingDateStr,
    interestRatePct,
    compoundingMode,
    selectedState,
    otherLegalCosts,
    recoveryProbPct,
  ]);

  const handleCopySummary = async () => {
    const summaryText = [
      `COMMERCIAL COURT SPECIFIED VALUE & COURT-FEE SUMMARY (Section 12(1)(a))`,
      `Principal Overdue: ${formatINR(calc.p)}`,
      `Accrued Pre-Suit Interest (${calc.days} days @ ${interestRatePct}% p.a., ${compoundingMode === "simple" ? "Simple" : "Monthly Compound"}): ${formatINR(calc.accruedInterest)}`,
      `Total Specified Value (s.12(1)(a)): ${formatINR(calc.specifiedValue)}`,
      `Commercial Court Eligibility (₹3,00,000 Floor): ${calc.qualifiesCommercial ? "QUALIFIES" : "BELOW ₹3L FLOOR"}`,
      `Selected State (${calc.activeState.stateName}) Ad-Valorem Court Fee: ${formatINR(calc.activeState.fee)} (${calc.activeState.effectivePct.toFixed(2)}% | ${calc.activeState.capLabel})`,
      `Est. Section 12A Mediation Fee: ${formatINR(calc.mediationFee)} (100% Court Fee saved if settled at mediation)`,
      `Net Expected Suit Recovery (${recoveryProbPct}% prob. less fees): ${formatINR(calc.netExpectedGain)}`,
      `Generated via LegalRecovery.in`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        {/* Top Bar */}
        <div className="bg-slate-900 text-white px-5 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
              Section 12(1)(a) Commercial Courts Act, 2015
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              Specified-Value, Interest &amp; 6-State Ad-Valorem Court-Fee Engine
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "₹2.6L (Test Threshold)", val: 260000 },
              { label: "₹10L", val: 1000000 },
              { label: "₹50L", val: 5000000 },
              { label: "₹2 Cr", val: 20000000 },
            ].map((preset) => (
              <button
                key={preset.val}
                type="button"
                onClick={() => setPrincipal(preset.val)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors cursor-pointer ${
                  principal === preset.val
                    ? "bg-[#DC2626] border-[#DC2626] text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-8 space-y-8">
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Principal */}
            <div>
              <label
                htmlFor={principalId}
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Principal Invoice Amount (₹)
              </label>
              <input
                id={principalId}
                type="number"
                min={0}
                step={5000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* Default Date */}
            <div>
              <label
                htmlFor={dueDateId}
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Invoice Due / Default Date
              </label>
              <input
                id={dueDateId}
                type="date"
                value={dueDateStr}
                onChange={(e) => setDueDateStr(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* Filing Date */}
            <div>
              <label
                htmlFor={filingDateId}
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Proposed Suit Filing Date
              </label>
              <input
                id={filingDateId}
                type="date"
                value={filingDateStr}
                onChange={(e) => setFilingDateStr(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label
                htmlFor={rateId}
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Pre-Suit Interest Rate (% p.a.)
              </label>
              <div className="flex gap-2">
                <input
                  id={rateId}
                  type="number"
                  min={0}
                  max={36}
                  step={0.25}
                  value={interestRatePct}
                  onChange={(e) => setInterestRatePct(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none focus:ring-2 focus:ring-red-100"
                />
                <button
                  type="button"
                  onClick={() => {
                    setInterestRatePct(20.25);
                    setCompoundingMode("msme_monthly");
                  }}
                  className="shrink-0 px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-700 border border-slate-200 cursor-pointer"
                  title="Apply 3x RBI Bank Rate (20.25% monthly compound)"
                >
                  MSME 20.25%
                </button>
              </div>
            </div>

            {/* Interest Basis */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Interest Calculation Basis
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCompoundingMode("simple")}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    compoundingMode === "simple"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  Simple (PO / s.34)
                </button>
                <button
                  type="button"
                  onClick={() => setCompoundingMode("msme_monthly")}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    compoundingMode === "msme_monthly"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  Monthly Compound
                </button>
              </div>
            </div>

            {/* State Jurisdiction */}
            <div>
              <label
                htmlFor={stateId}
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Filing State (Court-Fee Jurisdiction)
              </label>
              <select
                id={stateId}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value as StateKey)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-semibold text-slate-900 bg-white focus:border-[#DC2626] focus:outline-none focus:ring-2 focus:ring-red-100"
              >
                <option value="delhi">Delhi (Uncapped ~0.98%)</option>
                <option value="maharashtra">Maharashtra / Mumbai (₹3L Cap)</option>
                <option value="karnataka">Karnataka / Bengaluru (Uncapped)</option>
                <option value="gujarat">Gujarat / Ahmedabad (₹75K Cap)</option>
                <option value="tamilnadu">Tamil Nadu / Chennai (Flat 3%)</option>
                <option value="up">Uttar Pradesh / Noida (~7.5%)</option>
              </select>
            </div>
          </div>

          {/* Threshold Status Banner */}
          <div
            className={`rounded-2xl p-4 sm:p-5 border ${
              calc.interestBridgedThreshold
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : calc.qualifiesCommercial
                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                : "bg-red-50 border-red-200 text-red-950"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider block mb-0.5">
                  {calc.interestBridgedThreshold
                    ? "⚡ Threshold Crossed via Pre-Suit Interest (Section 12(1)(a))"
                    : calc.qualifiesCommercial
                    ? "✓ Qualifies as Commercial Dispute (₹3,00,000+ Specified Value)"
                    : "✕ Below ₹3,00,000 Commercial Court Floor"}
                </span>
                <p className="text-xs sm:text-sm font-medium">
                  {calc.interestBridgedThreshold
                    ? `Your principal (${formatINR(calc.p)}) is below ₹3,00,000, but adding ${calc.days} days of accrued interest (${formatINR(calc.accruedInterest)}) lifts Specified Value to ${formatINR(calc.specifiedValue)} — qualifying for Commercial Court!`
                    : calc.qualifiesCommercial
                    ? `Specified Value of ${formatINR(calc.specifiedValue)} meets the ₹3,00,000 statutory threshold. Mandatory Section 12A Pre-Institution Mediation applies unless seeking urgent interim attachment (Order 38 Rule 5).`
                    : `Specified Value of ${formatINR(calc.specifiedValue)} is below ₹3,00,000. File in Regular Civil Court (Order 37 CPC Summary Suit) or MSME Samadhaan if Udyam-registered.`}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Live Output KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Specified Value (s.12)
              </span>
              <span className="text-xl sm:text-2xl font-black text-white block">
                {formatINR(calc.specifiedValue)}
              </span>
              <span className="text-[11px] text-slate-300 mt-1 block">
                Principal + {calc.days}d Interest
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Pre-Suit Interest Accrued
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                {formatINR(calc.accruedInterest)}
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                @ {interestRatePct}% p.a. ({calc.days} days)
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                {calc.activeState.stateName} Court Fee
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#DC2626] block">
                {formatINR(calc.activeState.fee)}
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                {calc.activeState.effectivePct.toFixed(2)}% • {calc.activeState.capLabel}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Sec 12A Mediation Fee
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                {formatINR(calc.mediationFee)}
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Saves 100% Court Fee if settled
              </span>
            </div>
          </div>

          {/* 6-State Side-by-Side Comparison Table */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                6-State Ad-Valorem Court-Fee Comparison for {formatINR(calc.specifiedValue)}
              </p>
              <span className="text-[11px] text-slate-500">
                Click any state row to set it as active jurisdiction
              </span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-3 px-4 font-bold">State / Commercial Hub</th>
                    <th className="py-3 px-4 font-bold">Estimated Court Fee</th>
                    <th className="py-3 px-4 font-bold">Effective %</th>
                    <th className="py-3 px-4 font-bold">Statutory Cap / Structure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {calc.allStates.map((st) => {
                    const isSelected = st.key === selectedState;
                    return (
                      <tr
                        key={st.key}
                        onClick={() => setSelectedState(st.key)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? "bg-red-50/80 font-semibold"
                            : "bg-white hover:bg-slate-50"
                        }`}
                      >
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-900 block">
                            {st.stateName}{" "}
                            {isSelected && (
                              <span className="ml-1.5 inline-block px-1.5 py-0.5 text-[10px] rounded bg-[#DC2626] text-white">
                                Selected
                              </span>
                            )}
                          </span>
                          <span className="text-[11px] text-slate-500">{st.cityHub}</span>
                        </td>
                        <td className="py-3 px-4 font-extrabold text-slate-900">
                          {formatINR(st.fee)}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          {st.effectivePct.toFixed(2)}%
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                              st.capLabel.includes("Capped")
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {st.capLabel}
                          </span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">
                            {st.notes}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* CFO ROI vs Write-Off Mini Estimator */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3">
              CFO Litigation ROI vs Write-Off Check ({calc.activeState.stateName})
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              <div>
                <label
                  htmlFor={legalCostId}
                  className="block text-[11px] font-bold text-slate-600 mb-1"
                >
                  Est. Counsel &amp; Filing Cost (₹)
                </label>
                <input
                  id={legalCostId}
                  type="number"
                  min={0}
                  step={5000}
                  value={otherLegalCosts}
                  onChange={(e) => setOtherLegalCosts(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900"
                />
              </div>
              <div>
                <label
                  htmlFor={probId}
                  className="block text-[11px] font-bold text-slate-600 mb-1"
                >
                  Solvent Debtor Recovery Prob. (%)
                </label>
                <input
                  id={probId}
                  type="number"
                  min={10}
                  max={100}
                  step={5}
                  value={recoveryProbPct}
                  onChange={(e) => setRecoveryProbPct(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900"
                />
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3">
                <span className="text-[11px] text-slate-500 block">Total Upfront Cash Outlay</span>
                <span className="text-sm font-extrabold text-slate-900">
                  {formatINR(calc.totalUpfrontOutlay)}
                </span>
              </div>
              <div className="bg-white border border-emerald-200 rounded-xl p-3">
                <span className="text-[11px] text-emerald-700 block">
                  Net Expected Recovery ({calc.roiMultiple.toFixed(1)}× ROI)
                </span>
                <span className="text-sm font-extrabold text-emerald-800">
                  {formatINR(calc.netExpectedGain)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
            >
              {copied ? "✓ Copied CFO Summary!" : "Copy CFO Calculation Summary"}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors cursor-pointer shadow-sm"
            >
              Serve Pre-Suit Notice First — ₹{basePrice}
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors text-center"
            >
              Upload Bulk AR Ledger (CSV) →
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
