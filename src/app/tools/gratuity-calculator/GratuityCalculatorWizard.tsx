"use client";

import React, { useState, useId } from "react";

type EmploymentType = "regular" | "fixed_term" | "seasonal";

export default function GratuityCalculatorWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [empType, setEmpType] = useState<EmploymentType>("regular");
  const [joiningDate, setJoiningDate] = useState<string>("");
  const [leavingDate, setLeavingDate] = useState<string>("");
  const [yearsManual, setYearsManual] = useState<number>(5);
  const [monthsManual, setMonthsManual] = useState<number>(0);
  const [useDateInput, setUseDateInput] = useState<boolean>(false);

  const [basicSalary, setBasicSalary] = useState<number>(45000);
  const [daAllowance, setDaAllowance] = useState<number>(5000);
  const [statutoryCeiling, setStatutoryCeiling] = useState<number>(2000000);
  const [delayDays, setDelayDays] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Generate unique IDs for accessibility
  const baseId = useId();
  const empTypeId = `${baseId}-emp-type`;
  const joiningDateId = `${baseId}-joining-date`;
  const leavingDateId = `${baseId}-leaving-date`;
  const yearsManualId = `${baseId}-years-manual`;
  const monthsManualId = `${baseId}-months-manual`;
  const basicSalaryId = `${baseId}-basic-salary`;
  const daAllowanceId = `${baseId}-da-allowance`;
  const ceilingId = `${baseId}-ceiling`;
  const delayDaysId = `${baseId}-delay-days`;

  // Calculate tenure in years & months
  let effectiveYears = yearsManual;
  let effectiveMonths = monthsManual;

  if (useDateInput && joiningDate && leavingDate) {
    const start = new Date(joiningDate);
    const end = new Date(leavingDate);
    if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
      let y = end.getFullYear() - start.getFullYear();
      let m = end.getMonth() - start.getMonth();
      const d = end.getDate() - start.getDate();
      if (d < 0) {
        m -= 1;
      }
      if (m < 0) {
        y -= 1;
        m += 12;
      }
      effectiveYears = Math.max(0, y);
      effectiveMonths = Math.max(0, m);
    }
  }

  // Gratuity calculation logic
  const totalMonthlyPay = Math.max(0, Number(basicSalary || 0)) + Math.max(0, Number(daAllowance || 0));

  // Eligibility check
  let isEligible = false;
  let eligibilityNote = "";
  let roundedTenureYears = effectiveYears;

  if (empType === "regular") {
    // Rounding rule: >= 6 months rounds up to next full year
    if (effectiveMonths >= 6) {
      roundedTenureYears += 1;
    }
    // General rule: 5 continuous years (or 4 years 240 days)
    if (effectiveYears > 4 || (effectiveYears === 4 && effectiveMonths >= 8)) {
      isEligible = true;
      eligibilityNote = "Eligible under Section 4(1) of the Payment of Gratuity Act, 1972 (tenure meets continuous 5-year benchmark).";
    } else {
      isEligible = false;
      eligibilityNote = "Less than 5 continuous years of service. Under Section 4(1), gratuity is generally payable only upon completion of 5 continuous years (except in cases of death, disabling injury, or contractual clauses).";
    }
  } else if (empType === "fixed_term") {
    // Code on Social Security 2020, Section 53(2)
    if (effectiveYears >= 1 || (effectiveYears === 0 && effectiveMonths >= 12)) {
      isEligible = true;
      eligibilityNote = "Eligible under the Fixed-Term Employee rule (Section 53(2) Code on Social Security, 2020), which waives the 5-year vesting requirement for fixed-term contracts.";
      roundedTenureYears = effectiveYears + effectiveMonths / 12;
    } else {
      isEligible = false;
      eligibilityNote = "Fixed-term employee tenure is less than 1 year (12 months). Fixed-term gratuity mandates minimum 1 full year of continuous service.";
    }
  } else if (empType === "seasonal") {
    // Seasonal: 7 days wages per season
    isEligible = effectiveYears >= 1;
    eligibilityNote = "Eligible under Section 4(2) Proviso for seasonal establishment employees (calculated at 7 days wages per season).";
    roundedTenureYears = effectiveYears;
  }

  // Gratuity base amount
  let calculatedGratuity = 0;
  if (empType === "seasonal") {
    calculatedGratuity = Math.round((7 * totalMonthlyPay * roundedTenureYears) / 26);
  } else if (empType === "fixed_term") {
    calculatedGratuity = Math.round((15 * totalMonthlyPay * roundedTenureYears) / 26);
  } else {
    calculatedGratuity = Math.round((15 * totalMonthlyPay * roundedTenureYears) / 26);
  }

  const cappedGratuity = Math.min(calculatedGratuity, statutoryCeiling);
  const isCapped = calculatedGratuity > statutoryCeiling;

  // Delayed interest: 10% per annum simple interest under Section 7(3A)
  const interestPerDay = (cappedGratuity * 0.10) / 365;
  const delayedInterestAmount = Math.max(0, Math.round(interestPerDay * (delayDays || 0)));
  const totalDuesWithInterest = cappedGratuity + delayedInterestAmount;

  // Tax free amount
  const taxFreeLimit = 2000000;
  const taxableAmount = Math.max(0, cappedGratuity - taxFreeLimit);

  const handleCopySummary = () => {
    const text = `GRATUITY CALCULATION BREAKDOWN (LegalRecovery.in):
- Employment Type: ${empType.toUpperCase()}
- Tenure: ${effectiveYears} Years, ${effectiveMonths} Months (Rounded for formula: ${roundedTenureYears} Years)
- Last Drawn Monthly (Basic + DA): ₹${totalMonthlyPay.toLocaleString("en-IN")}
- Formula: (15 × ₹${totalMonthlyPay.toLocaleString("en-IN")} × ${roundedTenureYears}) ÷ 26
- Calculated Gratuity: ₹${calculatedGratuity.toLocaleString("en-IN")}
- Statutory Ceiling: ₹${statutoryCeiling.toLocaleString("en-IN")}
- Payable Gratuity: ₹${cappedGratuity.toLocaleString("en-IN")}
${delayDays > 0 ? `- Statutory Delayed Interest (10% p.a. for ${delayDays} days): ₹${delayedInterestAmount.toLocaleString("en-IN")}\n- Total Dues with Penal Interest: ₹${totalDuesWithInterest.toLocaleString("en-IN")}` : ""}
- Tax Status: ${taxableAmount === 0 ? "100% Tax-Exempt under Section 10(10)" : `₹${taxFreeLimit.toLocaleString("en-IN")} Tax-Exempt, ₹${taxableAmount.toLocaleString("en-IN")} Taxable`}
Verified under Payment of Gratuity Act, 1972 & Code on Social Security 2020.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Wizard Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800 mb-2">
              <span>Interactive Step Wizard</span>
              <span>•</span>
              <span>15/26 Statutory Engine</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
              Gratuity Entitlement &amp; Delay Interest Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Compliant with Section 4(2) of Payment of Gratuity Act, 1972 &amp; Section 53(2) Code on Social Security
            </p>
          </div>

          {/* Stepper Progress Pill Navigation */}
          <nav aria-label="Calculator Steps" className="flex items-center gap-1.5 sm:gap-2 self-start sm:self-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                step === 1
                  ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              aria-current={step === 1 ? "step" : undefined}
            >
              1. Tenure
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                step === 2
                  ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              aria-current={step === 2 ? "step" : undefined}
            >
              2. Salary
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                step === 3
                  ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              aria-current={step === 3 ? "step" : undefined}
            >
              3. Results
            </button>
          </nav>
        </div>
      </div>

      {/* Wizard Interactive Form Body */}
      <div className="p-5 sm:p-8">
        {/* STEP 1: SERVICE DATES & TENURE */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Step 1: Select Employment Type &amp; Duration of Service
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                The formula and eligibility thresholds differ between regular, fixed-term, and seasonal roles.
              </p>
            </div>

            {/* Employment Type Radio Cards */}
            <div className="space-y-2">
              <label htmlFor={empTypeId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Type of Employment
              </label>
              <div id={empTypeId} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setEmpType("regular")}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    empType === "regular"
                      ? "border-red-600 bg-red-50/60 ring-2 ring-red-600/30 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-slate-900">Regular / Permanent</span>
                    {empType === "regular" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Standard 5-year vesting. Service of ≥ 6 months rounds up to next full year.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setEmpType("fixed_term")}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    empType === "fixed_term"
                      ? "border-red-600 bg-red-50/60 ring-2 ring-red-600/30 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-slate-900">Fixed-Term Contract †</span>
                    {empType === "fixed_term" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eligible pro-rata after 1 year under Section 53(2) of Code on Social Security.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setEmpType("seasonal")}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    empType === "seasonal"
                      ? "border-red-600 bg-red-50/60 ring-2 ring-red-600/30 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-slate-900">Seasonal Industry</span>
                    {empType === "seasonal" && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sugar mills, tea gardens, etc. Calculated at 7 days wages per season worked.
                  </p>
                </button>
              </div>
            </div>

            {/* Input Mode Toggle */}
            <div className="flex items-center gap-3 pt-2">
              <label className="text-xs font-semibold text-slate-700 cursor-pointer flex items-center gap-2 select-none">
                <input
                  type="checkbox"
                  checked={useDateInput}
                  onChange={(e) => setUseDateInput(e.target.checked)}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer"
                />
                Calculate exact duration using Joining &amp; Exit Dates
              </label>
            </div>

            {/* Date Inputs Mode */}
            {useDateInput ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div>
                  <label htmlFor={joiningDateId} className="block text-xs font-bold text-slate-700 mb-1">
                    Joining Date
                  </label>
                  <input
                    id={joiningDateId}
                    type="date"
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={leavingDateId} className="block text-xs font-bold text-slate-700 mb-1">
                    Relieving / Last Working Date (LWD)
                  </label>
                  <input
                    id={leavingDateId}
                    type="date"
                    value={leavingDate}
                    onChange={(e) => setLeavingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                  Calculated Duration: <strong className="text-slate-900">{effectiveYears} Years and {effectiveMonths} Months</strong>
                </div>
              </div>
            ) : (
              /* Manual Years & Months Mode */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={yearsManualId} className="block text-xs font-bold text-slate-700 mb-1">
                    Completed Full Years
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id={yearsManualId}
                      type="number"
                      min="0"
                      max="50"
                      value={yearsManual}
                      onChange={(e) => setYearsManual(Math.max(0, parseInt(e.target.value, 10) || 0))}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                    <span className="text-xs font-bold text-slate-500">Years</span>
                  </div>
                </div>

                <div>
                  <label htmlFor={monthsManualId} className="block text-xs font-bold text-slate-700 mb-1">
                    Additional Months in Final Year
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id={monthsManualId}
                      type="number"
                      min="0"
                      max="11"
                      value={monthsManual}
                      onChange={(e) => setMonthsManual(Math.min(11, Math.max(0, parseInt(e.target.value, 10) || 0)))}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                    <span className="text-xs font-bold text-slate-500">Months</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Tip: 6 or more months in the final year automatically rounds up to a full year under Section 4(2).
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Navigation Next */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Effective Tenure: <strong>{effectiveYears} yrs {effectiveMonths} mos</strong>
              </span>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md shadow-red-900/20"
              >
                Next: Salary Details →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SALARY & PARAMETERS */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Step 2: Enter Last Drawn Basic Pay, Allowances &amp; Statutory Parameters
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Under Section 2(s) of the Payment of Gratuity Act, only <strong>Basic Pay</strong> and <strong>Dearness Allowance (DA)</strong> are counted. HRA, Special Allowance, and bonuses are strictly excluded.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor={basicSalaryId} className="block text-xs font-bold text-slate-700 mb-1">
                  Last Drawn Monthly Basic Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    id={basicSalaryId}
                    type="number"
                    min="1000"
                    step="1000"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-bold focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="e.g. 50000"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">From your final monthly payslip.</p>
              </div>

              <div>
                <label htmlFor={daAllowanceId} className="block text-xs font-bold text-slate-700 mb-1">
                  Monthly Dearness Allowance (DA) (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    id={daAllowanceId}
                    type="number"
                    min="0"
                    step="500"
                    value={daAllowance}
                    onChange={(e) => setDaAllowance(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-bold focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="0 if not applicable"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Common in PSUs, government &amp; older contracts.</p>
              </div>

              <div>
                <label htmlFor={ceilingId} className="block text-xs font-bold text-slate-700 mb-1">
                  Statutory Gratuity Ceiling Limit (₹) <span className="font-normal text-slate-500">(Editable)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    id={ceilingId}
                    type="number"
                    min="500000"
                    step="50000"
                    value={statutoryCeiling}
                    onChange={(e) => setStatutoryCeiling(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Statutory cap is ₹20 Lakh as of 2026. If your employment contract or gratuity trust offers higher coverage without ceiling, increase accordingly.
                </p>
              </div>

              <div>
                <label htmlFor={delayDaysId} className="block text-xs font-bold text-slate-700 mb-1">
                  Delay Past 30 Days (For Penal Interest @ 10% p.a.)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={delayDaysId}
                    type="number"
                    min="0"
                    max="1800"
                    value={delayDays}
                    onChange={(e) => setDelayDays(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="e.g. 60"
                  />
                  <span className="text-xs font-bold text-slate-500">Days</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Under Section 7(3A), employer owes 10% annual simple interest for every day of delay after 30 days.
                </p>
              </div>
            </div>

            {/* Total Monthly Base Bar */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-slate-600">
                Total Monthly Base for Calculation (Basic + DA):
              </span>
              <strong className="text-base sm:text-lg font-black text-slate-900">
                ₹{totalMonthlyPay.toLocaleString("en-IN")}
              </strong>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl transition-colors cursor-pointer"
              >
                ← Back to Tenure
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md shadow-red-900/20"
              >
                Calculate Gratuity Now →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: RESULTS SUMMARY CARD */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Step 3: Gratuity Entitlement &amp; Statutory Breakdown
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Full mathematical breakdown under Section 4(2) of the Payment of Gratuity Act, 1972.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                >
                  {isCopied ? "✓ Copied to Clipboard" : "📋 Copy Breakdown"}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  🖨️ Print / Save
                </button>
              </div>
            </div>

            {/* Eligibility Banner */}
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed flex items-start gap-3 ${
                isEligible
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : "bg-amber-50 border-amber-300 text-amber-900"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                  isEligible ? "bg-emerald-600 text-white" : "bg-amber-600 text-white"
                }`}
              >
                {isEligible ? "✓" : "!"}
              </span>
              <div>
                <strong className="block font-bold mb-0.5">
                  {isEligible ? "Statutory Eligibility Confirmed" : "Eligibility Notice / Special Conditions"}
                </strong>
                <p>{eligibilityNote}</p>
              </div>
            </div>

            {/* Primary Result Figures Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Statutory Gratuity */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-red-400 block mb-1">
                  Payable Gratuity
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  ₹{cappedGratuity.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  {isCapped
                    ? `Capped at statutory ceiling of ₹${statutoryCeiling.toLocaleString("en-IN")} (Raw: ₹${calculatedGratuity.toLocaleString("en-IN")})`
                    : `Calculated at 15/26 for ${roundedTenureYears} effective years`}
                </p>
              </div>

              {/* Box 2: Delayed Interest */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500 block mb-1">
                  Section 7(3A) Delayed Interest
                </span>
                <p className="text-2xl sm:text-3xl font-black text-emerald-700">
                  {delayDays > 0 ? `₹${delayedInterestAmount.toLocaleString("en-IN")}` : "₹0"}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  {delayDays > 0
                    ? `Accrued for ${delayDays} days of delay past 30 days @ 10% p.a.`
                    : "No delay entered. Applies if unpaid beyond 30 days."}
                </p>
              </div>

              {/* Box 3: Total Employer Obligation */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500 block mb-1">
                  Total Legal Recovery Claim
                </span>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">
                  ₹{totalDuesWithInterest.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Principal gratuity plus accrued statutory simple interest.
                </p>
              </div>
            </div>

            {/* Formula Step-by-Step Table */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 space-y-3">
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                Detailed Formula Breakdown
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-2 font-semibold text-slate-900 w-1/3">Statutory Formula</td>
                      <td className="py-2 text-slate-700 font-mono">
                        {empType === "seasonal"
                          ? "(7 × [Basic + DA] × Seasons) ÷ 26"
                          : "(15 × [Last Drawn Basic + DA] × Tenure) ÷ 26"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-900">Monthly Base (Basic + DA)</td>
                      <td className="py-2 text-slate-700">
                        ₹{basicSalary.toLocaleString("en-IN")} + ₹{daAllowance.toLocaleString("en-IN")} = <strong>₹{totalMonthlyPay.toLocaleString("en-IN")}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-900">One Day Wage (divided by 26)</td>
                      <td className="py-2 text-slate-700 font-mono">
                        ₹{totalMonthlyPay.toLocaleString("en-IN")} ÷ 26 = ₹{(totalMonthlyPay / 26).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-900">15 Days Wage Multiplier</td>
                      <td className="py-2 text-slate-700 font-mono">
                        15 × ₹{(totalMonthlyPay / 26).toFixed(2)} = ₹{((15 * totalMonthlyPay) / 26).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-900">Recognized Service Tenure</td>
                      <td className="py-2 text-slate-700">
                        {effectiveYears} Years, {effectiveMonths} Months → <strong>{roundedTenureYears} Years</strong> (under Section 4(2) rounding / fixed-term rule)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-slate-900">Income Tax Status</td>
                      <td className="py-2 text-slate-700">
                        {taxableAmount === 0 ? (
                          <span className="text-emerald-700 font-bold">100% Tax-Exempt under Section 10(10)(ii) (Below ₹20,00,000 threshold)</span>
                        ) : (
                          <span className="text-amber-800 font-bold">₹{taxFreeLimit.toLocaleString("en-IN")} Exempt; ₹{taxableAmount.toLocaleString("en-IN")} subject to income tax</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl transition-colors cursor-pointer"
              >
                ← Modify Salary Details
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setYearsManual(5);
                  setMonthsManual(0);
                  setBasicSalary(45000);
                  setDaAllowance(5000);
                  setDelayDays(0);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                🔄 Reset Calculator
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
