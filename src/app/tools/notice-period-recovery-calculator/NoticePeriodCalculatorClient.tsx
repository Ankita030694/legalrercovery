"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function NoticePeriodCalculatorClient() {
  const [noticeRequired, setNoticeRequired] = useState<number>(60);
  const [noticeServed, setNoticeServed] = useState<number>(30);
  const [basicSalary, setBasicSalary] = useState<number>(40000);
  const [grossSalary, setGrossSalary] = useState<number>(85000);
  const [contractClause, setContractClause] = useState<"basic" | "gross" | "unspecified">("unspecified");
  const [divisorMode, setDivisorMode] = useState<number>(30); // 30 or 26
  const [employerDemanded, setEmployerDemanded] = useState<number>(85000);
  const [copied, setCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Accessibility IDs
  const noticeRequiredId = useId();
  const noticeServedId = useId();
  const basicSalaryId = useId();
  const grossSalaryId = useId();
  const contractClauseId = useId();
  const divisorModeId = useId();
  const employerDemandedId = useId();

  // Calculations
  const shortfallDays = Math.max(0, noticeRequired - noticeServed);
  const divisor = divisorMode > 0 ? divisorMode : 30;

  const dailyBasicRate = basicSalary / divisor;
  const dailyGrossRate = grossSalary / divisor;

  const recoveryOnBasic = Math.round(dailyBasicRate * shortfallDays);
  const recoveryOnGross = Math.round(dailyGrossRate * shortfallDays);

  const lawfulRecovery =
    contractClause === "basic" || contractClause === "unspecified"
      ? recoveryOnBasic
      : recoveryOnGross;

  const potentialExcessDeduction = Math.max(0, recoveryOnGross - recoveryOnBasic);
  const directDisputedAmount =
    employerDemanded > 0 ? Math.max(0, employerDemanded - recoveryOnBasic) : potentialExcessDeduction;

  const handleCopyBreakdown = () => {
    const text = `--- NOTICE PERIOD RECOVERY DISPUTE SUMMARY ---
Total Notice Required: ${noticeRequired} days
Actual Notice Served: ${noticeServed} days
Shortfall Days: ${shortfallDays} days
Calculation Divisor: ${divisor} days

Monthly Basic Salary: ₹${basicSalary.toLocaleString("en-IN")} (Per-day: ₹${Math.round(dailyBasicRate).toLocaleString("en-IN")})
Monthly Gross Salary: ₹${grossSalary.toLocaleString("en-IN")} (Per-day: ₹${Math.round(dailyGrossRate).toLocaleString("en-IN")})

Contractual Clause: ${
      contractClause === "basic"
        ? "Explicitly specifies Basic Pay"
        : contractClause === "gross"
        ? "Purports to recover Gross / CTC"
        : "Silent / Unspecified (Notice pay only)"
    }

Lawful Notice Recovery (Basic Wage Baseline): ₹${recoveryOnBasic.toLocaleString("en-IN")}
Employer Demanded Recovery: ₹${employerDemanded.toLocaleString("en-IN")}
Potential Unlawful Over-Deduction: ₹${directDisputedAmount.toLocaleString("en-IN")}

Legal Grounds: Section 74 Indian Contract Act, 1872 (no penalty exceeding actual loss) & Section 17(2) Code on Wages, 2019 (statutory dues clearance).
Generated via LegalRecovery.in Notice Period Recovery Calculator.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
        {/* Top Calculator Banner */}
        <div className="bg-slate-900 text-white px-5 sm:px-8 py-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#DC2626] animate-ping" />
            <h3 className="text-base sm:text-lg font-black tracking-tight">
              Interactive Notice Period Recovery &amp; Buyout Calculator
            </h3>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Section 74 Contract Act Compliant
          </span>
        </div>

        {/* Two-Pane Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Pane: Interactive Inputs (<form>) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-6 p-5 sm:p-7 md:p-8 space-y-5 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200"
          >
            <div className="border-b border-slate-200 pb-3">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                1. Notice Period &amp; Duration Served
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Enter your contractual requirement and actual last working date offset.
              </p>
            </div>

            {/* Notice Days Required & Served */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={noticeRequiredId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Notice Period Required (Days)
                </label>
                <div className="relative">
                  <input
                    id={noticeRequiredId}
                    type="number"
                    min="0"
                    max="180"
                    value={noticeRequired}
                    onChange={(e) => setNoticeRequired(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">
                    Days
                  </span>
                </div>
                <div className="flex gap-1.5 mt-1.5">
                  {[30, 60, 90].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setNoticeRequired(days)}
                      className={`text-[11px] px-2 py-0.5 rounded font-medium border cursor-pointer ${
                        noticeRequired === days
                          ? "bg-slate-800 text-white border-slate-800"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {days}d
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor={noticeServedId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Actual Days Served
                </label>
                <div className="relative">
                  <input
                    id={noticeServedId}
                    type="number"
                    min="0"
                    max={noticeRequired}
                    value={noticeServed}
                    onChange={(e) =>
                      setNoticeServed(
                        Math.min(noticeRequired, Math.max(0, parseInt(e.target.value) || 0))
                      )
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">
                    Days
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Shortfall: <strong className="text-red-600 font-bold">{shortfallDays} days</strong>
                </p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-3 pt-2">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                2. Salary Structure (Basic vs Gross)
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Check your appointment letter or latest payslip for itemized figures.
              </p>
            </div>

            {/* Salary Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={basicSalaryId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Monthly Basic Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">
                    ₹
                  </span>
                  <input
                    id={basicSalaryId}
                    type="number"
                    step="500"
                    min="0"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-7 pr-3 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Excludes HRA, transport &amp; special allowances</p>
              </div>

              <div>
                <label
                  htmlFor={grossSalaryId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Monthly Gross Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">
                    ₹
                  </span>
                  <input
                    id={grossSalaryId}
                    type="number"
                    step="500"
                    min="0"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-7 pr-3 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Total monthly compensation on payslip</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-3 pt-2">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                3. Contractual Clause &amp; Divisor Rules
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                How does your appointment letter phrase notice-period recovery?
              </p>
            </div>

            {/* Contract Clause Dropdown */}
            <div>
              <label
                htmlFor={contractClauseId}
                className="block text-xs font-bold text-slate-800 mb-1.5"
              >
                Appointment Letter Clause Wording
              </label>
              <select
                id={contractClauseId}
                value={contractClause}
                onChange={(e) =>
                  setContractClause(e.target.value as "basic" | "gross" | "unspecified")
                }
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
              >
                <option value="unspecified">
                  Silent / Generic (&quot;Notice pay in lieu thereof&quot; — Law defaults to Basic)
                </option>
                <option value="basic">
                  Explicitly Basic Pay (&quot;Salary equivalent to Basic Salary for shortfall&quot;)
                </option>
                <option value="gross">
                  Purports Gross CTC (&quot;Gross compensation or Cost to Company recovery&quot;)
                </option>
              </select>
            </div>

            {/* Divisor Choice & Employer Demanded Amount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={divisorModeId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Calculation Divisor Basis
                </label>
                <select
                  id={divisorModeId}
                  value={divisorMode}
                  onChange={(e) => setDivisorMode(parseInt(e.target.value) || 30)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                >
                  <option value={30}>30 Calendar Days (Standard Payroll Divisor)</option>
                  <option value={26}>26 Working Days (Statutory Wages Benchmark)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor={employerDemandedId}
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  Employer Demanded Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">
                    ₹
                  </span>
                  <input
                    id={employerDemandedId}
                    type="number"
                    step="500"
                    min="0"
                    value={employerDemanded}
                    onChange={(e) =>
                      setEmployerDemanded(Math.max(0, parseInt(e.target.value) || 0))
                    }
                    className="w-full bg-white border border-slate-300 rounded-xl pl-7 pr-3 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Right Pane: Live Calculation Output (<output>) */}
          <output
            aria-live="polite"
            className="lg:col-span-6 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-white space-y-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Statutory Comparison Breakdown
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Shortfall: {shortfallDays} Days
                </span>
              </div>

              {/* Highlighting Card: Lawful vs Gross Recovery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {/* Lawful Basic Recovery Card */}
                <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                    ✓ Lawful Basic Wage Recovery
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                    ₹{recoveryOnBasic.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[11px] text-emerald-800 mt-1 leading-tight font-medium">
                    ₹{Math.round(dailyBasicRate).toLocaleString("en-IN")}/day × {shortfallDays} days
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    High Court Benchmark
                  </span>
                </div>

                {/* Gross / Demanded Recovery Card */}
                <div className="p-4 bg-red-50/80 border border-red-200 rounded-2xl">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-800 block mb-1">
                    ✕ Employer Gross Deduction
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-red-700 tracking-tight">
                    ₹{recoveryOnGross.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[11px] text-red-800 mt-1 leading-tight font-medium">
                    ₹{Math.round(dailyGrossRate).toLocaleString("en-IN")}/day × {shortfallDays} days
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                    High Contestability Risk
                  </span>
                </div>
              </div>

              {/* Excess Recovery Warning Callout */}
              {directDisputedAmount > 0 ? (
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl shadow-xs space-y-1.5 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                      ⚠️ Potential Unlawful Over-Deduction Identified
                    </span>
                    <span className="text-xs sm:text-sm font-black text-amber-900">
                      +₹{directDisputedAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-xs text-amber-900/90 leading-relaxed font-medium">
                    Your employer is seeking to deduct{" "}
                    <strong>₹{directDisputedAmount.toLocaleString("en-IN")}</strong> in excess of the
                    statutory Basic Pay benchmark. Under Section 74 of the Indian Contract Act, employers cannot levy punitive liquidated damages exceeding actual loss sustained or recover allowances (HRA, transport, phone) for unworked days.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-5 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">✓ Deductions match basic wage parameters.</p>
                  <p className="mt-0.5">Ensure your relieving letter and FnF settlement are handed over within 2 working days of your last working day under Section 17(2) of the Code on Wages.</p>
                </div>
              )}

              {/* Detailed Breakdown Lines */}
              <div className="space-y-2 border-t border-slate-100 pt-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Notice shortfall duration:</span>
                  <span className="font-bold text-slate-900">{shortfallDays} calendar days</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Basic pay rate per day ({divisor}d basis):</span>
                  <span className="font-semibold text-slate-900">₹{dailyBasicRate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Gross pay rate per day ({divisor}d basis):</span>
                  <span className="font-semibold text-slate-900">₹{dailyGrossRate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Difference in per-day notice recovery:</span>
                  <span className="font-bold text-red-600">
                    +₹{(dailyGrossRate - dailyBasicRate).toFixed(2)}/day
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 text-slate-900 font-extrabold">
                  <span>Statutory Maximum Payable by You:</span>
                  <span className="text-emerald-700 text-base">₹{recoveryOnBasic.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyBreakdown}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{copied ? "✓ Copied to Clipboard" : "📋 Copy Dispute Breakdown for HR"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-xs sm:text-sm font-bold text-white shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Send Legal Notice (₹{basePrice})</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Verified by Employment Advocates</span>
                <Link
                  href="/legal-notice-for-full-and-final-settlement-delay"
                  className="text-blue-700 hover:underline font-semibold"
                >
                  View FnF Settlement Legal Notice Process →
                </Link>
              </div>
            </div>
          </output>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
