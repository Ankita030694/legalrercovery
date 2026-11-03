"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

export default function FnfCalculatorClient() {
  const [grossSalary, setGrossSalary] = useState<number>(75000);
  const [basicSalary, setBasicSalary] = useState<number>(37500);
  const [daysInMonth, setDaysInMonth] = useState<number>(30);
  const [unpaidDays, setUnpaidDays] = useState<number>(20);
  const [leaveDays, setLeaveDays] = useState<number>(18);
  const [leaveDivisor, setLeaveDivisor] = useState<number>(26); // 26 vs 30
  const [serviceYears, setServiceYears] = useState<number>(5);
  const [serviceMonths, setServiceMonths] = useState<number>(7); // >=6 rounds up
  const [employmentType, setEmploymentType] = useState<"regular" | "fixed_term">("regular");
  const [gratuityCeiling, setGratuityCeiling] = useState<number>(2000000);
  const [bonusAndReimbursements, setBonusAndReimbursements] = useState<number>(15000);
  const [noticeRequired, setNoticeRequired] = useState<number>(60);
  const [noticeServed, setNoticeServed] = useState<number>(45);
  const [noticeRateBasis, setNoticeRateBasis] = useState<"basic" | "gross">("basic");
  const [otherDeductions, setOtherDeductions] = useState<number>(2500);

  const [copied, setCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Unique IDs for accessibility
  const grossId = useId();
  const basicId = useId();
  const daysInMonthId = useId();
  const unpaidDaysId = useId();
  const leaveDaysId = useId();
  const leaveDivisorId = useId();
  const serviceYearsId = useId();
  const serviceMonthsId = useId();
  const employmentTypeId = useId();
  const gratuityCeilingId = useId();
  const bonusId = useId();
  const noticeRequiredId = useId();
  const noticeServedId = useId();
  const noticeRateBasisId = useId();
  const otherDeductionsId = useId();

  // Calculations
  const calculatedUnpaidSalary = Math.round(
    daysInMonth > 0 ? (grossSalary / daysInMonth) * unpaidDays : 0
  );

  const calculatedLeaveEncashment = Math.round(
    leaveDivisor > 0 ? (basicSalary / leaveDivisor) * leaveDays : 0
  );

  // Gratuity Calculation
  // Round up if service months >= 6
  const effectiveYears = serviceYears + (serviceMonths >= 6 ? 1 : 0);
  const isGratuityEligible =
    (employmentType === "regular" && effectiveYears >= 5) ||
    (employmentType === "fixed_term" && effectiveYears >= 1);

  const rawGratuity = isGratuityEligible
    ? Math.round((15 / 26) * basicSalary * effectiveYears)
    : 0;
  const calculatedGratuity = Math.min(gratuityCeiling, rawGratuity);

  const totalGrossEarnings =
    calculatedUnpaidSalary +
    calculatedLeaveEncashment +
    calculatedGratuity +
    bonusAndReimbursements;

  // Notice Period Shortfall
  const shortfallDays = Math.max(0, noticeRequired - noticeServed);
  const noticeDailyRate =
    daysInMonth > 0
      ? (noticeRateBasis === "basic" ? basicSalary : grossSalary) / daysInMonth
      : 0;
  const calculatedNoticeRecovery = Math.round(noticeDailyRate * shortfallDays);

  const totalDeductions = calculatedNoticeRecovery + otherDeductions;
  const isDeductionCapped = totalDeductions > totalGrossEarnings * 0.5;
  const netFnFPayable = Math.max(0, totalGrossEarnings - totalDeductions);

  const formatINR = (val: number) =>
    "₹" + val.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const copySummary = () => {
    const summaryText = `--- FULL & FINAL (FnF) SETTLEMENT SUMMARY ---
Gross Monthly Salary: ${formatINR(grossSalary)}
Basic + DA: ${formatINR(basicSalary)}
Unpaid Working Days: ${unpaidDays} days (Amount: ${formatINR(calculatedUnpaidSalary)})
Earned Leave Balance: ${leaveDays} days (Amount: ${formatINR(calculatedLeaveEncashment)})
Gratuity Eligible (${effectiveYears} yrs service): ${formatINR(calculatedGratuity)}
Bonus & Reimbursements: ${formatINR(bonusAndReimbursements)}
TOTAL GROSS EARNINGS: ${formatINR(totalGrossEarnings)}

DEDUCTIONS:
Notice Shortfall: ${shortfallDays} days on ${noticeRateBasis.toUpperCase()} (${formatINR(calculatedNoticeRecovery)})
Other Lawful Deductions: ${formatINR(otherDeductions)}
TOTAL DEDUCTIONS: ${formatINR(totalDeductions)}

NET FnF PAYABLE AMOUNT: ${formatINR(netFnFPayable)}
Statutory Due Date: Within 2 working days of exit under Section 17(2), Code on Wages 2019.
Generated via LegalRecovery.in FnF Calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="calculator-tool"
      className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-6 border-b border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1.5">
              <span>Interactive Statutory Tool</span>
              <span>•</span>
              <span>Code on Wages 2019 / 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Full &amp; Final (FnF) Settlement Split Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Enter your salary structure and exit parameters below for an instant, statutory itemised settlement sheet.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copySummary}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <span className="text-emerald-400">✓</span> Copied!
                </>
              ) : (
                <>
                  <span>📋</span> Copy Summary
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer"
            >
              <span>🖨️</span> Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: Interactive Form Inputs */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-7 p-5 sm:p-7 space-y-6 bg-slate-50/50"
        >
          {/* Section: Salary & Month Basics */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 inline-flex items-center justify-center text-[11px] font-black">
                1
              </span>
              Salary Structure &amp; Unpaid Working Days
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={grossId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Monthly Gross Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">
                    ₹
                  </span>
                  <input
                    id={grossId}
                    type="number"
                    min={0}
                    step={500}
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="e.g. 75000"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Total monthly CTC excluding annual bonus &amp; gratuity
                </span>
              </div>

              <div>
                <label
                  htmlFor={basicId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Monthly Basic + DA (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">
                    ₹
                  </span>
                  <input
                    id={basicId}
                    type="number"
                    min={0}
                    step={500}
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="e.g. 37500"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Used for leave encashment &amp; statutory gratuity
                </span>
              </div>

              <div>
                <label
                  htmlFor={daysInMonthId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Days in Exit Month
                </label>
                <select
                  id={daysInMonthId}
                  value={daysInMonth}
                  onChange={(e) => setDaysInMonth(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value={30}>30 Days (April, June, Sept, Nov)</option>
                  <option value={31}>31 Days (Jan, Mar, May, Jul, Aug, Oct, Dec)</option>
                  <option value={28}>28 Days (February Non-Leap)</option>
                  <option value={29}>29 Days (February Leap Year)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor={unpaidDaysId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Unpaid Working Days in Final Month
                </label>
                <input
                  id={unpaidDaysId}
                  type="number"
                  min={0}
                  max={31}
                  value={unpaidDays}
                  onChange={(e) => setUnpaidDays(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                  placeholder="e.g. 20"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Days worked up to your Last Working Day (LWD)
                </span>
              </div>
            </div>
          </div>

          {/* Section: Leave Encashment & Gratuity */}
          <div className="pt-2 border-t border-slate-200">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 inline-flex items-center justify-center text-[11px] font-black">
                2
              </span>
              Leave Encashment &amp; Statutory Gratuity
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={leaveDaysId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Accumulated Paid / Earned Leave (Days)
                </label>
                <input
                  id={leaveDaysId}
                  type="number"
                  min={0}
                  value={leaveDays}
                  onChange={(e) => setLeaveDays(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                  placeholder="e.g. 18"
                />
              </div>

              <div>
                <label
                  htmlFor={leaveDivisorId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Leave Encashment Divisor
                </label>
                <select
                  id={leaveDivisorId}
                  value={leaveDivisor}
                  onChange={(e) => setLeaveDivisor(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value={26}>26 Working Days (Judicial Standard &amp; Factories Act)</option>
                  <option value={30}>30 Calendar Days (Standard IT/Service Policy)</option>
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Supreme Court standard uses 26 working days for daily wage rate.
                </span>
              </div>

              <div>
                <label
                  htmlFor={serviceYearsId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Years of Service
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    id={serviceYearsId}
                    type="number"
                    min={0}
                    value={serviceYears}
                    onChange={(e) => setServiceYears(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="Full Years"
                  />
                  <input
                    id={serviceMonthsId}
                    type="number"
                    min={0}
                    max={11}
                    value={serviceMonths}
                    onChange={(e) => setServiceMonths(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="Months"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  6+ months rounds up to an additional full year.
                </span>
              </div>

              <div>
                <label
                  htmlFor={employmentTypeId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Employment Nature (Gratuity Threshold)
                </label>
                <select
                  id={employmentTypeId}
                  value={employmentType}
                  onChange={(e) =>
                    setEmploymentType(e.target.value as "regular" | "fixed_term")
                  }
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value="regular">Regular Employee (5 Years Threshold)</option>
                  <option value="fixed_term">Fixed-Term Contract (1 Year Threshold under CSS 2020)</option>
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  {isGratuityEligible
                    ? `Eligible (${effectiveYears} years service)`
                    : `Ineligible (requires ${employmentType === "regular" ? "5 yrs" : "1 yr"} service)`}
                </span>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor={bonusId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Pending Statutory Bonus, Incentives &amp; Expense Reimbursements (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">
                    ₹
                  </span>
                  <input
                    id={bonusId}
                    type="number"
                    min={0}
                    step={500}
                    value={bonusAndReimbursements}
                    onChange={(e) =>
                      setBonusAndReimbursements(Number(e.target.value) || 0)
                    }
                    className="w-full pl-8 pr-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="e.g. 15000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Notice Shortfall & Deductions */}
          <div className="pt-2 border-t border-slate-200">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 inline-flex items-center justify-center text-[11px] font-black">
                3
              </span>
              Notice Period Shortfall &amp; Deductions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={noticeRequiredId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Notice Period Required (Days)
                </label>
                <input
                  id={noticeRequiredId}
                  type="number"
                  min={0}
                  value={noticeRequired}
                  onChange={(e) => setNoticeRequired(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                  placeholder="e.g. 60"
                />
              </div>

              <div>
                <label
                  htmlFor={noticeServedId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Notice Days Actually Served
                </label>
                <input
                  id={noticeServedId}
                  type="number"
                  min={0}
                  value={noticeServed}
                  onChange={(e) => setNoticeServed(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                  placeholder="e.g. 45"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Shortfall: {shortfallDays} days
                </span>
              </div>

              <div>
                <label
                  htmlFor={noticeRateBasisId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Notice Pay Recovery Basis
                </label>
                <select
                  id={noticeRateBasisId}
                  value={noticeRateBasis}
                  onChange={(e) =>
                    setNoticeRateBasis(e.target.value as "basic" | "gross")
                  }
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value="basic">Basic Salary Basis (Lawful Standard / Sec 74 Contract Act)</option>
                  <option value="gross">Gross Salary Basis (Employer Demand Clause)</option>
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Courts hold that recovery on gross salary without proof of actual damage is punitive.
                </span>
              </div>

              <div>
                <label
                  htmlFor={otherDeductionsId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Other Deductions Claimed by Employer (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">
                    ₹
                  </span>
                  <input
                    id={otherDeductionsId}
                    type="number"
                    min={0}
                    step={100}
                    value={otherDeductions}
                    onChange={(e) => setOtherDeductions(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="e.g. 2500"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Salary advances, tax TDS, or disputed asset costs
                </span>
              </div>
            </div>
          </div>
        </form>

        {/* Right Pane: Live Results & Output */}
        <output
          aria-live="polite"
          className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-white space-y-6"
        >
          <div>
            {/* Net Amount Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-lg border border-slate-700 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                  Estimated Net FnF Payout
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Sec 17(2) Due in 2 Days
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formatINR(netFnFPayable)}
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Mandatory payment deadline: Within 2 working days of resignation or termination under Section 17(2) of the Code on Wages, 2019.
              </p>
            </div>

            {/* Warning if Deductions exceed 50% */}
            {isDeductionCapped && (
              <div
                role="alert"
                className="mt-3 bg-amber-50 border border-amber-300 rounded-xl p-3 text-xs text-amber-900 font-medium"
              >
                <strong className="font-bold text-amber-950 block mb-0.5">
                  ⚠️ Section 18 Code on Wages Warning:
                </strong>
                Total deductions ({formatINR(totalDeductions)}) exceed 50% of your total gross exit earnings ({formatINR(totalGrossEarnings)}). Under Section 18(3), aggregate deductions from wages in any wage period cannot lawfully exceed 50%.
              </div>
            )}

            {/* Itemised Breakdown Table */}
            <div className="mt-5 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">
                Itemised Settlement Components
              </h3>

              <div className="space-y-2 text-xs">
                {/* Unpaid Salary */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      1. Unpaid Salary ({unpaidDays} days)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      ({formatINR(grossSalary)} ÷ {daysInMonth}) × {unpaidDays} days
                    </span>
                  </div>
                  <span className="font-bold text-emerald-600">
                    +{formatINR(calculatedUnpaidSalary)}
                  </span>
                </div>

                {/* Leave Encashment */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      2. Leave Encashment ({leaveDays} days)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      ({formatINR(basicSalary)} ÷ {leaveDivisor}) × {leaveDays} days
                    </span>
                  </div>
                  <span className="font-bold text-emerald-600">
                    +{formatINR(calculatedLeaveEncashment)}
                  </span>
                </div>

                {/* Gratuity */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      3. Statutory Gratuity
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {isGratuityEligible
                        ? `(15 ÷ 26) × ${formatINR(basicSalary)} × ${effectiveYears} yrs`
                        : "Not eligible (< 5 yrs regular service)"}
                    </span>
                  </div>
                  <span
                    className={`font-bold ${
                      isGratuityEligible ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    {isGratuityEligible ? `+${formatINR(calculatedGratuity)}` : "₹0"}
                  </span>
                </div>

                {/* Bonus & Reimbursements */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      4. Bonus &amp; Reimbursements
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Statutory bonus, incentives, claims
                    </span>
                  </div>
                  <span className="font-bold text-emerald-600">
                    +{formatINR(bonusAndReimbursements)}
                  </span>
                </div>

                {/* Gross Total */}
                <div className="flex items-center justify-between py-2 bg-slate-50 px-2 rounded-lg font-black text-slate-900 border border-slate-200">
                  <span>Gross Exit Entitlements</span>
                  <span className="text-emerald-700">
                    {formatINR(totalGrossEarnings)}
                  </span>
                </div>

                {/* Notice Shortfall Deduction */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      5. Notice Shortfall Recovery ({shortfallDays} days)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Calculated on {noticeRateBasis} salary rate
                    </span>
                  </div>
                  <span
                    className={`font-bold ${
                      calculatedNoticeRecovery > 0 ? "text-red-600" : "text-slate-400"
                    }`}
                  >
                    {calculatedNoticeRecovery > 0
                      ? `-${formatINR(calculatedNoticeRecovery)}`
                      : "₹0"}
                  </span>
                </div>

                {/* Other Deductions */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      6. Other Deductions Claimed
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Advances, asset damages, tax
                    </span>
                  </div>
                  <span
                    className={`font-bold ${
                      otherDeductions > 0 ? "text-red-600" : "text-slate-400"
                    }`}
                  >
                    {otherDeductions > 0 ? `-${formatINR(otherDeductions)}` : "₹0"}
                  </span>
                </div>

                {/* Total Deductions */}
                <div className="flex items-center justify-between py-2 bg-red-50 px-2 rounded-lg font-black text-red-900 border border-red-200">
                  <span>Total Deductions</span>
                  <span className="text-red-700">-{formatINR(totalDeductions)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/20 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>⚖️</span>
              <span>Send Advocate Legal Notice for Delayed FnF (₹{basePrice})</span>
            </button>
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Includes 15-day statutory demand</span>
              <Link
                href="/legal-notice-for-full-and-final-settlement-delay"
                className="text-red-600 hover:underline font-semibold"
              >
                View Notice Format →
              </Link>
            </div>
          </div>
        </output>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
