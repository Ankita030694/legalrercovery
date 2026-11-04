"use client";

import React, { useState, useMemo } from "react";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import { PaymentModal } from "@/components/PaymentModal";

export type ClaimMode = "refund_withdrawal" | "delay_possession";

export interface PaymentInstalment {
  id: string;
  label: string;
  paymentDate: string;
  amount: number;
}

export interface StateRulePreset {
  id: string;
  name: string;
  ruleCitation: string;
  spreadOverMclr: number;
  fixedRate: number | null;
  note: string;
}

export const STATE_RERA_PRESETS: StateRulePreset[] = [
  {
    id: "model_mclr_2",
    name: "Standard State RERA Rule (SBI Highest MCLR + 2%) — MahaRERA, HRERA, R-RERA, KRERA, TNRERA, GUJRERA",
    ruleCitation: "Rule 18 MahaRERA / Rule 15 HRERA / Central RERA Model Rules",
    spreadOverMclr: 2.0,
    fixedRate: null,
    note: "Most State Real Estate (Regulation and Development) Rules prescribe simple interest at SBI's highest Marginal Cost of Funds-based Lending Rate (MCLR) plus 2% per annum.",
  },
  {
    id: "up_rera_mclr_1",
    name: "Uttar Pradesh RERA (SBI MCLR + 1%) — UP RERA (Noida, Greater Noida, Ghaziabad, Lucknow)",
    ruleCitation: "Rule 15 UP RERA Rules & UP Agreement for Sale Rules, 2018",
    spreadOverMclr: 1.0,
    fixedRate: null,
    note: "Under Uttar Pradesh RERA rules and standard allotment terms, refund and delay interest is computed at SBI MCLR plus 1% per annum from each payment date.",
  },
  {
    id: "ncdrc_9_flat",
    name: "Consumer Commission Benchmark (9.00% p.a. Simple) — NCDRC / e-Jagriti (Experion Developers SC)",
    ruleCitation: "Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286",
    spreadOverMclr: 0,
    fixedRate: 9.0,
    note: "In consumer complaints under the Consumer Protection Act, 2019, the Supreme Court has standardised refund restitution at 9% p.a. simple interest from each deposit date.",
  },
  {
    id: "custom_rate",
    name: "Custom Interest Rate (Enter Specific Tribunal Order or BBA Rate)",
    ruleCitation: "Custom / Specific Adjudication Rate",
    spreadOverMclr: 2.0,
    fixedRate: null,
    note: "Manually adjust the SBI MCLR base rate and statutory spread below to match a specific state circular or appellate tribunal direction.",
  },
];

const INITIAL_INSTALMENTS: PaymentInstalment[] = [
  {
    id: "inst-1",
    label: "Booking Advance (10% Allotment Token)",
    paymentDate: "2022-03-15",
    amount: 500000,
  },
  {
    id: "inst-2",
    label: "Post-Agreement for Sale (BBA Execution 20%)",
    paymentDate: "2022-07-10",
    amount: 1500000,
  },
  {
    id: "inst-3",
    label: "Excavation & Plinth Foundation Milestone",
    paymentDate: "2023-01-20",
    amount: 1250000,
  },
  {
    id: "inst-4",
    label: "5th Floor Superstructure Slab Demand",
    paymentDate: "2023-08-05",
    amount: 1250000,
  },
];

function formatINR(value: number): string {
  return Math.round(value).toLocaleString("en-IN");
}

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Invalid Date";
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ReraRefundCalculatorClient() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [claimMode, setClaimMode] = useState<ClaimMode>("refund_withdrawal");
  const [presetId, setPresetId] = useState<string>("model_mclr_2");
  const [sbiMclr, setSbiMclr] = useState<number>(8.95);
  const [spreadRate, setSpreadRate] = useState<number>(2.0);
  const [promisedDate, setPromisedDate] = useState<string>("2025-03-31");
  const [refundDate, setRefundDate] = useState<string>("2026-11-04");
  const [instalments, setInstalments] = useState<PaymentInstalment[]>(INITIAL_INSTALMENTS);
  const [copied, setCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const activePreset = useMemo(
    () => STATE_RERA_PRESETS.find((p) => p.id === presetId) || STATE_RERA_PRESETS[0],
    [presetId]
  );

  const handlePresetChange = (newPresetId: string) => {
    setPresetId(newPresetId);
    const found = STATE_RERA_PRESETS.find((p) => p.id === newPresetId);
    if (!found) return;
    if (found.fixedRate !== null) {
      setSbiMclr(found.fixedRate);
      setSpreadRate(0);
    } else {
      setSbiMclr(8.95);
      setSpreadRate(found.spreadOverMclr);
    }
  };

  const effectiveAnnualRate = useMemo(() => {
    return Math.max(0, Number((sbiMclr + spreadRate).toFixed(2)));
  }, [sbiMclr, spreadRate]);

  const addInstalmentRow = () => {
    const nextIndex = instalments.length + 1;
    setInstalments([
      ...instalments,
      {
        id: `inst-${Date.now()}`,
        label: `Instalment #${nextIndex} (Construction Demand)`,
        paymentDate: "2024-02-15",
        amount: 500000,
      },
    ]);
  };

  const removeInstalmentRow = (id: string) => {
    if (instalments.length <= 1) return;
    setInstalments(instalments.filter((row) => row.id !== id));
  };

  const updateInstalment = (
    id: string,
    field: keyof PaymentInstalment,
    value: string | number
  ) => {
    setInstalments(
      instalments.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const calculationResult = useMemo(() => {
    const endD = new Date(refundDate);
    const promisedD = new Date(promisedDate);
    const msPerDay = 1000 * 60 * 60 * 24;

    const rows = instalments.map((item, idx) => {
      const payD = new Date(item.paymentDate);
      const safeAmount = Math.max(0, Number(item.amount) || 0);

      // In Refund mode (s.18(1)(a)), interest runs from each payment date to refund date
      // (Experion Developers SC & Newtech Promoters SC).
      // In Delay Possession mode (s.18(1) proviso), interest runs from promised possession date
      // (or payment date if paid after promised date) to actual handover/calculation date.
      let startD = payD;
      if (claimMode === "delay_possession" && !isNaN(promisedD.getTime())) {
        startD = payD > promisedD ? payD : promisedD;
      }

      let daysElapsed = 0;
      if (!isNaN(startD.getTime()) && !isNaN(endD.getTime()) && endD > startD) {
        daysElapsed = Math.floor((endD.getTime() - startD.getTime()) / msPerDay);
      }

      const yearsElapsed = daysElapsed / 365;
      const simpleInterest = safeAmount * (effectiveAnnualRate / 100) * yearsElapsed;
      const totalRowClaim = safeAmount + simpleInterest;

      return {
        index: idx + 1,
        id: item.id,
        label: item.label || `Payment #${idx + 1}`,
        paymentDate: item.paymentDate,
        interestStartDate: !isNaN(startD.getTime())
          ? startD.toISOString().split("T")[0]
          : item.paymentDate,
        endDate: refundDate,
        daysElapsed,
        yearsElapsed,
        principal: safeAmount,
        interest: simpleInterest,
        total: totalRowClaim,
      };
    });

    const totalPrincipal = rows.reduce((acc, r) => acc + r.principal, 0);
    const totalInterest = rows.reduce((acc, r) => acc + r.interest, 0);
    const grandTotal = totalPrincipal + totalInterest;

    const monthlyRecurringInterest = (totalPrincipal * (effectiveAnnualRate / 100)) / 12;

    let possessionDelayDays = 0;
    if (!isNaN(promisedD.getTime()) && !isNaN(endD.getTime()) && endD > promisedD) {
      possessionDelayDays = Math.floor((endD.getTime() - promisedD.getTime()) / msPerDay);
    }

    return {
      rows,
      totalPrincipal,
      totalInterest,
      grandTotal,
      monthlyRecurringInterest,
      possessionDelayDays,
    };
  }, [instalments, refundDate, promisedDate, claimMode, effectiveAnnualRate]);

  const copySummaryToClipboard = () => {
    const lines = [
      `--- RERA SECTION 18 STATUTORY INTEREST SCHEDULE ---`,
      `Claim Mode: ${
        claimMode === "refund_withdrawal"
          ? "Complete Withdrawal & Full Refund With Interest (Section 18(1)(a))"
          : "Monthly Delay Possession Interest (Section 18(1) Proviso)"
      }`,
      `Applicable Rule: ${activePreset.name}`,
      `Interest Rate Applied: ${effectiveAnnualRate}% p.a. Simple Interest (Base ${sbiMclr}% + Spread ${spreadRate}%)`,
      `Promised Possession Date: ${formatDateDisplay(promisedDate)} | Calculation Date: ${formatDateDisplay(refundDate)}`,
      ``,
      `PER-INSTALMENT BREAKDOWN:`,
      ...calculationResult.rows.map(
        (r) =>
          `${r.index}. ${r.label} | Paid: ${formatDateDisplay(r.paymentDate)} | Days: ${
            r.daysElapsed
          }d | Principal: ₹${formatINR(r.principal)} | Interest: ₹${formatINR(
            r.interest
          )} | Total: ₹${formatINR(r.total)}`
      ),
      ``,
      `SUMMARY TOTALS:`,
      `• Total Principal Paid to Builder: ₹${formatINR(calculationResult.totalPrincipal)}`,
      `• Statutory Interest Accrued (@ ${effectiveAnnualRate}% p.a.): ₹${formatINR(
        calculationResult.totalInterest
      )}`,
      `• Total Statutory Claim Payable: ₹${formatINR(calculationResult.grandTotal)}`,
      `• Ongoing Monthly Interest Accrual: ₹${formatINR(
        calculationResult.monthlyRecurringInterest
      )}/month`,
      ``,
      `Computed via LegalRecovery.in RERA Interest Calculator`,
      `https://www.legalrecovery.in/tools/rera-refund-interest-calculator`,
    ];

    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const downloadCsvSchedule = () => {
    const headers = [
      "Instalment No",
      "Milestone / Receipt Description",
      "Payment Date",
      "Interest Start Date",
      "Calculation End Date",
      "Days Elapsed",
      "Principal Paid (INR)",
      "Annual Interest Rate (%)",
      "Simple Interest Accrued (INR)",
      "Total Payable (INR)",
    ];
    const csvRows = calculationResult.rows.map((r) => [
      r.index,
      `"${r.label.replace(/"/g, '""')}"`,
      r.paymentDate,
      r.interestStartDate,
      r.endDate,
      r.daysElapsed,
      Math.round(r.principal),
      effectiveAnnualRate,
      Math.round(r.interest),
      Math.round(r.total),
    ]);
    csvRows.push([
      "TOTAL",
      '"GRAND TOTAL STATUTORY CLAIM"',
      "-",
      "-",
      refundDate,
      "-",
      Math.round(calculationResult.totalPrincipal),
      effectiveAnnualRate,
      Math.round(calculationResult.totalInterest),
      Math.round(calculationResult.grandTotal),
    ]);

    const csvString = [headers.join(","), ...csvRows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rera-section-18-interest-schedule-${refundDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="rera-calculator-wizard"
      className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden scroll-mt-28"
    >
      {/* Wizard Header + Stepper Progress */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1">
              Section 18 RERA Act 2016 • Multi-Instalment Engine
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
              RERA Refund &amp; Delay Interest Step Wizard (SBI MCLR + 2%)
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-700/60 px-3 py-1 rounded-lg block">
              Effective Rate: {effectiveAnnualRate}% p.a.
            </span>
          </div>
        </div>

        {/* Stepper Navigation with aria-current="step" */}
        <nav aria-label="RERA Interest Calculator Steps" className="w-full">
          <ol className="grid grid-cols-3 gap-2 sm:gap-4 text-xs font-bold">
            <li
              aria-current={currentStep === 1 ? "step" : undefined}
              onClick={() => setCurrentStep(1)}
              className={`p-2.5 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
                currentStep === 1
                  ? "bg-red-600/20 border-red-500 text-white shadow-xs"
                  : currentStep > 1
                  ? "bg-slate-800/80 border-emerald-500/50 text-emerald-400"
                  : "bg-slate-800/40 border-slate-700 text-slate-400"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  currentStep === 1
                    ? "bg-red-600 text-white"
                    : currentStep > 1
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {currentStep > 1 ? "✓" : "1"}
              </span>
              <span className="text-center sm:text-left text-[11px] sm:text-xs leading-tight">
                1. Dates &amp; State MCLR Rule
              </span>
            </li>

            <li
              aria-current={currentStep === 2 ? "step" : undefined}
              onClick={() => setCurrentStep(2)}
              className={`p-2.5 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
                currentStep === 2
                  ? "bg-red-600/20 border-red-500 text-white shadow-xs"
                  : currentStep > 2
                  ? "bg-slate-800/80 border-emerald-500/50 text-emerald-400"
                  : "bg-slate-800/40 border-slate-700 text-slate-400"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  currentStep === 2
                    ? "bg-red-600 text-white"
                    : currentStep > 2
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {currentStep > 2 ? "✓" : "2"}
              </span>
              <span className="text-center sm:text-left text-[11px] sm:text-xs leading-tight">
                2. Instalments Paid ({instalments.length})
              </span>
            </li>

            <li
              aria-current={currentStep === 3 ? "step" : undefined}
              onClick={() => setCurrentStep(3)}
              className={`p-2.5 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
                currentStep === 3
                  ? "bg-red-600/20 border-red-500 text-white shadow-xs"
                  : "bg-slate-800/40 border-slate-700 text-slate-400"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  currentStep === 3 ? "bg-red-600 text-white" : "bg-slate-700 text-slate-300"
                }`}
              >
                3
              </span>
              <span className="text-center sm:text-left text-[11px] sm:text-xs leading-tight">
                3. Schedule &amp; Total Claim
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Persistent Live Summary Strip Across All Steps */}
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <span>
            <strong className="text-slate-600">Principal Paid:</strong>{" "}
            <span className="font-black text-slate-900">
              ₹{formatINR(calculationResult.totalPrincipal)}
            </span>
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-600">Accrued Interest ({effectiveAnnualRate}%):</strong>{" "}
            <span className="font-black text-emerald-700">
              +₹{formatINR(calculationResult.totalInterest)}
            </span>
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-600">Total Claim:</strong>{" "}
            <span className="font-black text-[#DC2626]">
              ₹{formatINR(calculationResult.grandTotal)}
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="text-[#DC2626] font-extrabold hover:underline cursor-pointer"
        >
          View Full Schedule →
        </button>
      </div>

      {/* STEP 1: Dates, Claim Mode & State MCLR Rule */}
      {currentStep === 1 && (
        <div className="p-5 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Step 1: Choose Section 18 Remedy, State RERA Rule &amp; Key Dates
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Under Section 18(1) of RERA 2016, a homebuyer facing delayed possession has two distinct statutory choices: withdraw completely for a full refund with interest from each payment date, or stay in the project and claim monthly delay interest from the promised handover date.
            </p>
          </div>

          {/* Remedy Mode Toggle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <button
              type="button"
              onClick={() => setClaimMode("refund_withdrawal")}
              className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                claimMode === "refund_withdrawal"
                  ? "border-[#DC2626] bg-red-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Option A • Section 18(1)(a) Exit
                </span>
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    claimMode === "refund_withdrawal"
                      ? "border-[#DC2626] bg-[#DC2626] text-white"
                      : "border-slate-400"
                  }`}
                >
                  {claimMode === "refund_withdrawal" && "✓"}
                </span>
              </div>
              <p className="font-bold text-sm text-slate-900">
                Complete Withdrawal &amp; 100% Refund With Interest
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Computes simple interest on <strong>each instalment from its exact date of payment</strong> until the refund/calculation date.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setClaimMode("delay_possession")}
              className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                claimMode === "delay_possession"
                  ? "border-[#DC2626] bg-red-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                  Option B • Section 18(1) Proviso
                </span>
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    claimMode === "delay_possession"
                      ? "border-[#DC2626] bg-[#DC2626] text-white"
                      : "border-slate-400"
                  }`}
                >
                  {claimMode === "delay_possession" && "✓"}
                </span>
              </div>
              <p className="font-bold text-sm text-slate-900">
                Stay in Project &amp; Claim Delay Possession Interest
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Computes interest from the <strong>Agreement for Sale promised possession date</strong> to actual handover or today.
              </p>
            </button>
          </div>

          {/* State RERA Rule Preset */}
          <div className="space-y-2">
            <label
              htmlFor="stateReraPreset"
              className="block text-xs font-bold text-slate-700 uppercase"
            >
              Select State RERA / Consumer Forum Interest Formula *
            </label>
            <select
              id="stateReraPreset"
              value={presetId}
              onChange={(e) => handlePresetChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
            >
              {STATE_RERA_PRESETS.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.name}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">
              <strong>Statutory Citation:</strong> {activePreset.ruleCitation} — {activePreset.note}
            </p>
          </div>

          {/* Editable MCLR Rate, Spread & Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="sbiMclrInput"
                className="block text-xs font-bold text-slate-700 mb-1 uppercase"
              >
                SBI Highest MCLR (% p.a.)
              </label>
              <input
                id="sbiMclrInput"
                type="number"
                step="0.05"
                min="1"
                max="25"
                value={sbiMclr}
                onChange={(e) => setSbiMclr( parseFloat(e.target.value) || 0 )}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                8.95% (3-Yr Tenor as of Oct/Nov 2026,{" "}
                <a
                  href="https://sbi.co.in/web/interest-rates/interest-rates/mclr-historical-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  SBI MCLR
                </a>
                )
              </p>
            </div>

            <div>
              <label
                htmlFor="spreadInput"
                className="block text-xs font-bold text-slate-700 mb-1 uppercase"
              >
                Statutory Margin (+% p.a.)
              </label>
              <input
                id="spreadInput"
                type="number"
                step="0.25"
                min="0"
                max="15"
                value={spreadRate}
                onChange={(e) => setSpreadRate(parseFloat(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                +2.00% under Model RERA Rules (+1.00% in UP RERA)
              </p>
            </div>

            <div>
              <label
                htmlFor="promisedDateInput"
                className="block text-xs font-bold text-slate-700 mb-1 uppercase"
              >
                Promised Possession Date
              </label>
              <input
                id="promisedDateInput"
                type="date"
                value={promisedDate}
                onChange={(e) => setPromisedDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Handover date in Builder-Buyer Agreement (BBA)
              </p>
            </div>

            <div>
              <label
                htmlFor="refundDateInput"
                className="block text-xs font-bold text-slate-700 mb-1 uppercase"
              >
                Refund / Claim Cut-Off Date *
              </label>
              <input
                id="refundDateInput"
                type="date"
                value={refundDate}
                onChange={(e) => setRefundDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Date up to which interest is computed
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Continue to Step 2: Enter Payment Instalments →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Payment Instalments Ledger */}
      {currentStep === 2 && (
        <div className="p-5 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Step 2: Enter Amounts Paid to Builder With Payment Dates
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Add every booking cheque, RTGS/NEFT transfer, or bank home-loan disbursement released to the promoter. Interest is computed individually on each row.
              </p>
            </div>
            <button
              type="button"
              onClick={addInstalmentRow}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors cursor-pointer shrink-0"
            >
              + Add Instalment Row
            </button>
          </div>

          <div className="space-y-3">
            {instalments.map((inst, index) => {
              const previewRow = calculationResult.rows[index];
              return (
                <div
                  key={inst.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
                >
                  <div className="md:col-span-5">
                    <label
                      htmlFor={`label-${inst.id}`}
                      className="block text-[11px] font-bold text-slate-700 mb-1 uppercase"
                    >
                      Instalment #{index + 1} Milestone / Receipt Label
                    </label>
                    <input
                      id={`label-${inst.id}`}
                      type="text"
                      value={inst.label}
                      onChange={(e) => updateInstalment(inst.id, "label", e.target.value)}
                      placeholder="e.g. Booking Amount / 1st Slab Demand"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label
                      htmlFor={`date-${inst.id}`}
                      className="block text-[11px] font-bold text-slate-700 mb-1 uppercase"
                    >
                      Date of Payment
                    </label>
                    <input
                      id={`date-${inst.id}`}
                      type="date"
                      value={inst.paymentDate}
                      onChange={(e) => updateInstalment(inst.id, "paymentDate", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label
                      htmlFor={`amount-${inst.id}`}
                      className="block text-[11px] font-bold text-slate-700 mb-1 uppercase"
                    >
                      Amount Paid (₹)
                    </label>
                    <input
                      id={`amount-${inst.id}`}
                      type="number"
                      min="0"
                      step="1000"
                      value={inst.amount}
                      onChange={(e) =>
                        updateInstalment(inst.id, "amount", parseFloat(e.target.value) || 0)
                      }
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div className="md:col-span-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeInstalmentRow(inst.id)}
                      disabled={instalments.length <= 1}
                      aria-label={`Remove Instalment ${index + 1}`}
                      className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-red-50 hover:border-red-300 text-slate-600 hover:text-red-700 text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  {previewRow && (
                    <div className="md:col-span-12 pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                      <span>
                        Interest Period:{" "}
                        <strong>{formatDateDisplay(previewRow.interestStartDate)}</strong> to{" "}
                        <strong>{formatDateDisplay(previewRow.endDate)}</strong> (
                        <strong>{previewRow.daysElapsed} days</strong> /{" "}
                        {previewRow.yearsElapsed.toFixed(2)} yrs)
                      </span>
                      <span className="font-bold text-emerald-700">
                        Accrued Interest: +₹{formatINR(previewRow.interest)} → Row Total: ₹
                        {formatINR(previewRow.total)}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              ← Back to Step 1
            </button>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={addInstalmentRow}
                className="px-4 py-2.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-bold text-xs transition-colors cursor-pointer"
              >
                + Add Another Payment
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm transition-colors cursor-pointer shadow-lg shadow-red-900/20"
              >
                Calculate Per-Instalment Claim Schedule →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Per-Instalment Table & Summary Results */}
      {currentStep === 3 && (
        <div className="p-5 sm:p-8 space-y-6">
          {/* Summary Cards */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-red-400 block mb-0.5">
                  {claimMode === "refund_withdrawal"
                    ? "Section 18(1)(a) Total Refund + Interest Computation"
                    : "Section 18(1) Proviso Delayed Possession Interest Computation"}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Statutory Builder Liability @ {effectiveAnnualRate}% p.a. (SBI MCLR {sbiMclr}% +{" "}
                  {spreadRate}%)
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={copySummaryToClipboard}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? "✓ Copied!" : "📋 Copy Claim Summary"}
                </button>
                <button
                  type="button"
                  onClick={downloadCsvSchedule}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700 transition-colors cursor-pointer"
                >
                  ⬇ Download CSV (Excel)
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  🖨 Print
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Total Principal Paid
                </span>
                <p className="text-xl sm:text-2xl font-black text-white mt-1">
                  ₹{formatINR(calculationResult.totalPrincipal)}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Across {instalments.length} verified payment{instalments.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                  Statutory Section 18 Interest
                </span>
                <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                  +₹{formatINR(calculationResult.totalInterest)}
                </p>
                <p className="text-[11px] text-emerald-200/80 mt-0.5">
                  Simple interest @ {effectiveAnnualRate}% p.a.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/60 border border-red-700/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 block">
                  Total Refund Claim Payable
                </span>
                <p className="text-xl sm:text-2xl font-black text-white mt-1">
                  ₹{formatINR(calculationResult.grandTotal)}
                </p>
                <p className="text-[11px] text-red-200/80 mt-0.5">
                  Principal + Statutory Interest
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                  Monthly Delay Interest
                </span>
                <p className="text-xl sm:text-2xl font-black text-amber-400 mt-1">
                  ₹{formatINR(calculationResult.monthlyRecurringInterest)}/mo
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Possession Delay: {calculationResult.possessionDelayDays} days
                </p>
              </div>
            </div>
          </div>

          {/* Per-Instalment Breakdown Table */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Itemised Per-Instalment Interest Schedule (Attachable to Legal Notice &amp; RERA Form &apos;M&apos;)
            </h4>
            <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full min-w-[680px] text-left text-xs sm:text-sm text-slate-700">
                <caption className="sr-only">
                  Per-instalment RERA Section 18 refund and interest calculation table
                </caption>
                <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-3 px-3">
                      #
                    </th>
                    <th scope="col" className="py-3 px-3">
                      Milestone / Receipt Description
                    </th>
                    <th scope="col" className="py-3 px-3">
                      Interest Start Date
                    </th>
                    <th scope="col" className="py-3 px-3">
                      Cut-Off Date
                    </th>
                    <th scope="col" className="py-3 px-3 text-right">
                      Days
                    </th>
                    <th scope="col" className="py-3 px-3 text-right">
                      Principal Paid
                    </th>
                    <th scope="col" className="py-3 px-3 text-right">
                      Interest ({effectiveAnnualRate}%)
                    </th>
                    <th scope="col" className="py-3 px-3 text-right">
                      Total Claim
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {calculationResult.rows.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">{r.index}</td>
                      <td className="py-3 px-3 font-semibold text-slate-900">{r.label}</td>
                      <td className="py-3 px-3 text-xs">{formatDateDisplay(r.interestStartDate)}</td>
                      <td className="py-3 px-3 text-xs">{formatDateDisplay(r.endDate)}</td>
                      <td className="py-3 px-3 text-right font-mono text-xs">{r.daysElapsed}d</td>
                      <td className="py-3 px-3 text-right font-semibold">
                        ₹{formatINR(r.principal)}
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-emerald-700">
                        +₹{formatINR(r.interest)}
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-slate-900">
                        ₹{formatINR(r.total)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-900 text-white font-bold">
                    <td colSpan={5} className="py-3.5 px-3">
                      GRAND TOTAL STATUTORY REFUND / COMPENSATION CLAIM
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      ₹{formatINR(calculationResult.totalPrincipal)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-emerald-400">
                      +₹{formatINR(calculationResult.totalInterest)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-amber-300 text-base">
                      ₹{formatINR(calculationResult.grandTotal)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                ← Edit Instalments
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                ⚙ Change State / MCLR Rate
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm transition-all shadow-lg shadow-red-900/30 cursor-pointer text-center"
            >
              Serve Section 18 Builder Refund Legal Notice — ₹{basePrice}
            </button>
          </div>
        </div>
      )}

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
