"use client";

import React, { useState, useId, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface MonthlyScheduleRow {
  monthNumber: number;
  periodLabel: string;
  daysInPeriod: number;
  isFullMonth: boolean;
  openingBalance: number;
  interestAccrued: number;
  closingBalance: number;
}

function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return new Date(2026, 4, 1);
  return new Date(y, m - 1, d);
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function addOneMonth(date: Date): Date {
  const next = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return next;
}

function diffDays(start: Date, end: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.max(0, Math.round((utc2 - utc1) / msPerDay));
}

export default function MsmeInterestCalculatorClient() {
  const [invoiceAmount, setInvoiceAmount] = useState<number>(500000);
  const [acceptanceDateStr, setAcceptanceDateStr] = useState<string>("2026-05-01");
  const [hasWrittenAgreement, setHasWrittenAgreement] = useState<"yes" | "no">("yes");
  const [agreedCreditDays, setAgreedCreditDays] = useState<number>(45);
  const [paymentDateStr, setPaymentDateStr] = useState<string>("2026-10-18");
  const [udyamTier, setUdyamTier] = useState<"micro" | "small" | "medium">("small");
  const [rbiBankRate, setRbiBankRate] = useState<number>(6.75);
  const [buyerTaxRate, setBuyerTaxRate] = useState<number>(25.17);

  const [copied, setCopied] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Form field IDs
  const invoiceAmountId = useId();
  const acceptanceDateId = useId();
  const agreementTypeId = useId();
  const agreedDaysId = useId();
  const paymentDateId = useId();
  const udyamTierId = useId();
  const rbiRateId = useId();
  const buyerTaxId = useId();

  const calculation = useMemo(() => {
    const principal = Math.max(0, invoiceAmount);
    const acceptanceDate = parseLocalDate(acceptanceDateStr);
    const paymentDate = parseLocalDate(paymentDateStr);

    // Section 15 statutory cap: 15 days if no written agreement; up to max 45 days if written agreement exists
    const rawAgreed = Math.max(0, agreedCreditDays);
    const isCappedAt45 = hasWrittenAgreement === "yes" && rawAgreed > 45;
    const effectiveCreditDays =
      hasWrittenAgreement === "no" ? 15 : Math.min(45, Math.max(1, rawAgreed));

    // Credit period expires after effectiveCreditDays from date of acceptance
    const creditExpiryDate = addDays(acceptanceDate, effectiveCreditDays);
    // Appointed Day under Section 2(b) is the day immediately following the expiry of the statutory period
    const appointedDay = addDays(creditExpiryDate, 1);

    const overdueDays = diffDays(creditExpiryDate, paymentDate);
    const effectiveAnnualRatePct = Number((rbiBankRate * 3).toFixed(4));
    const annualRateDecimal = effectiveAnnualRatePct / 100;
    const monthlyRateDecimal = annualRateDecimal / 12;

    const schedule: MonthlyScheduleRow[] = [];
    let currentBalance = principal;

    if (overdueDays > 0 && principal > 0 && udyamTier !== "medium") {
      let cursor = new Date(creditExpiryDate.getTime());
      let monthIndex = 1;

      // Guard against huge date ranges (> 240 months / 20 years)
      while (cursor < paymentDate && monthIndex <= 240) {
        const nextMonth = addOneMonth(cursor);
        if (nextMonth <= paymentDate) {
          const daysInRest = diffDays(cursor, nextMonth);
          const interest = currentBalance * monthlyRateDecimal;
          const closing = currentBalance + interest;
          schedule.push({
            monthNumber: monthIndex,
            periodLabel: `${formatDateShort(addDays(cursor, 1))} – ${formatDateShort(nextMonth)}`,
            daysInPeriod: daysInRest,
            isFullMonth: true,
            openingBalance: currentBalance,
            interestAccrued: interest,
            closingBalance: closing,
          });
          currentBalance = closing;
          cursor = nextMonth;
          monthIndex++;
        } else {
          const remainingDays = diffDays(cursor, paymentDate);
          if (remainingDays > 0) {
            const interest = currentBalance * annualRateDecimal * (remainingDays / 365);
            const closing = currentBalance + interest;
            schedule.push({
              monthNumber: monthIndex,
              periodLabel: `${formatDateShort(addDays(cursor, 1))} – ${formatDateShort(paymentDate)} (${remainingDays}d stub)`,
              daysInPeriod: remainingDays,
              isFullMonth: false,
              openingBalance: currentBalance,
              interestAccrued: interest,
              closingBalance: closing,
            });
            currentBalance = closing;
          }
          break;
        }
      }
    }

    const totalCompoundInterest = Math.max(0, currentBalance - principal);
    const totalClaimPayable = principal + totalCompoundInterest;
    const simpleInterestEquivalent =
      overdueDays > 0 && udyamTier !== "medium"
        ? principal * annualRateDecimal * (overdueDays / 365)
        : 0;
    const compoundingAdvantage = Math.max(0, totalCompoundInterest - simpleInterestEquivalent);

    // Section 43B(h) corporate tax disallowance impact on buyer if unpaid across FY close
    const section43BhTaxHit = principal * (buyerTaxRate / 100);
    // Under Section 23 MSMED Act, Section 16 interest is NEVER deductible under the Income-tax Act
    const nonDeductibleInterestTaxLoss = totalCompoundInterest * (buyerTaxRate / 100);

    return {
      principal,
      acceptanceDate,
      paymentDate,
      isCappedAt45,
      effectiveCreditDays,
      creditExpiryDate,
      appointedDay,
      overdueDays,
      effectiveAnnualRatePct,
      monthlyRatePct: Number((effectiveAnnualRatePct / 12).toFixed(4)),
      schedule,
      totalCompoundInterest,
      totalClaimPayable,
      simpleInterestEquivalent,
      compoundingAdvantage,
      section43BhTaxHit,
      nonDeductibleInterestTaxLoss,
    };
  }, [
    invoiceAmount,
    acceptanceDateStr,
    hasWrittenAgreement,
    agreedCreditDays,
    paymentDateStr,
    udyamTier,
    rbiBankRate,
    buyerTaxRate,
  ]);

  const formatINR = (val: number, decimals = 0) =>
    "₹" +
    val.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const handleCopySummary = () => {
    const lines = [
      "--- MSME SECTION 16 DELAYED PAYMENT INTEREST CLAIM SUMMARY ---",
      `Supplier Classification: Udyam Registered (${udyamTier.toUpperCase()} Enterprise)`,
      `Principal Invoice Amount: ${formatINR(calculation.principal, 2)}`,
      `Date of Invoice / Acceptance: ${formatDateShort(calculation.acceptanceDate)}`,
      `Statutory Credit Period (Sec 15): ${calculation.effectiveCreditDays} Days (Due by ${formatDateShort(calculation.creditExpiryDate)})`,
      `Statutory Appointed Day (Sec 2(b)): ${formatDateShort(calculation.appointedDay)}`,
      `Calculation / Payment Date: ${formatDateShort(calculation.paymentDate)}`,
      `Total Overdue Delay: ${calculation.overdueDays} Days (${calculation.schedule.length} compounding rests)`,
      `RBI Bank Rate Applied: ${rbiBankRate}% p.a. | Section 16 Rate (3x): ${calculation.effectiveAnnualRatePct}% p.a. (compounded monthly)`,
      `---`,
      `1. Principal Invoice Due: ${formatINR(calculation.principal, 2)}`,
      `2. Section 16 Compound Interest (Monthly Rests): ${formatINR(calculation.totalCompoundInterest, 2)}`,
      `TOTAL STATUTORY CLAIM PAYABLE: ${formatINR(calculation.totalClaimPayable, 2)}`,
      `---`,
      `Buyer Tax Warning: Under Sec 23 MSMED Act, ${formatINR(calculation.totalCompoundInterest, 0)} interest is non-deductible for income tax. Under Sec 43B(h) Income-tax Act, overdue MSME principal incurs ${formatINR(calculation.section43BhTaxHit, 0)} tax disallowance if unpaid across financial year-end.`,
      `Generated via LegalRecovery.in MSME Interest Calculator`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadCSV = () => {
    const csvRows: string[] = [
      "MSME Delayed Payment Interest Claim Schedule (Section 16 MSMED Act 2006)",
      `Supplier Tier,${udyamTier.toUpperCase()} Enterprise`,
      `Principal Invoice Amount (INR),${calculation.principal.toFixed(2)}`,
      `Invoice / Acceptance Date,${acceptanceDateStr}`,
      `Statutory Credit Period (Days),${calculation.effectiveCreditDays}`,
      `Due Date,${formatDateShort(calculation.creditExpiryDate)}`,
      `Appointed Day (Sec 2b),${formatDateShort(calculation.appointedDay)}`,
      `Payment / Calculation Date,${paymentDateStr}`,
      `Overdue Days,${calculation.overdueDays}`,
      `RBI Bank Rate (% p.a.),${rbiBankRate}%`,
      `Section 16 Statutory Rate (3x Bank Rate % p.a.),${calculation.effectiveAnnualRatePct}%`,
      `Total Compound Interest (INR),${calculation.totalCompoundInterest.toFixed(2)}`,
      `Total Claim Payable (INR),${calculation.totalClaimPayable.toFixed(2)}`,
      "",
      "Month Rest #,Period,Days,Rest Type,Opening Balance (INR),Interest Accrued (INR),Closing Compounded Balance (INR)",
      ...calculation.schedule.map(
        (row) =>
          `${row.monthNumber},"${row.periodLabel}",${row.daysInPeriod},${
            row.isFullMonth ? "Monthly Rest (1/12)" : "Pro-Rata Stub (Days/365)"
          },${row.openingBalance.toFixed(2)},${row.interestAccrued.toFixed(2)},${row.closingBalance.toFixed(2)}`
      ),
    ];

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `msme-section16-interest-schedule-${acceptanceDateStr}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="msme-calculator-tool"
      className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Top Dark Header Bar */}
      <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white p-5 sm:p-6 border-b border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1.5">
              <span>Section 15 &amp; 16 MSMED Act, 2006</span>
              <span>•</span>
              <span>3× RBI Bank Rate (Monthly Rests)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              MSME Delayed Payment Compound Interest Split Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Compute your Appointed Day, month-by-month compounded interest schedule, and buyer Section 43B(h) tax disallowance exposure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <span className="text-emerald-400">✓</span> Copied Claim
                </>
              ) : (
                <>
                  <span>📋</span> Copy Summary
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-red-500 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>⬇️</span> Download Claim CSV
            </button>
          </div>
        </div>
      </div>

      {/* Split Pane: Form Left, Live Output Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: Form Inputs */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-6 p-5 sm:p-7 space-y-6 bg-slate-50/50"
        >
          {/* Step 1: Invoice & Dates */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] inline-flex items-center justify-center text-[11px] font-black">
                1
              </span>
              Invoice Principal &amp; Delivery / Acceptance Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label
                  htmlFor={invoiceAmountId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Unpaid Invoice Amount (₹ — Inclusive of GST)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">
                    ₹
                  </span>
                  <input
                    id={invoiceAmountId}
                    type="number"
                    min={0}
                    step={1000}
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                    placeholder="e.g. 500000"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Enter the unpaid invoice balance owed by the buyer.
                </span>
              </div>

              <div>
                <label
                  htmlFor={acceptanceDateId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Invoice / Goods Acceptance Date
                </label>
                <input
                  id={acceptanceDateId}
                  type="date"
                  value={acceptanceDateStr}
                  onChange={(e) => setAcceptanceDateStr(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Date of delivery or deemed acceptance under Sec 2(b)
                </span>
              </div>

              <div>
                <label
                  htmlFor={paymentDateId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Actual or Target Payment Date
                </label>
                <input
                  id={paymentDateId}
                  type="date"
                  value={paymentDateStr}
                  onChange={(e) => setPaymentDateStr(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Date buyer paid or date of your legal demand notice
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Credit Period & Section 15 Cap */}
          <div className="pt-3 border-t border-slate-200">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] inline-flex items-center justify-center text-[11px] font-black">
                2
              </span>
              Section 15 Credit Period &amp; Udyam Registration Tier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={agreementTypeId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Written Credit Agreement in PO / Contract?
                </label>
                <select
                  id={agreementTypeId}
                  value={hasWrittenAgreement}
                  onChange={(e) =>
                    setHasWrittenAgreement(e.target.value as "yes" | "no")
                  }
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value="yes">Yes — Written Credit Term (Max 45 Days)</option>
                  <option value="no">No Written Credit Term (Statutory 15 Days)</option>
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Without a written agreement, Sec 15 fixes credit at 15 days.
                </span>
              </div>

              <div>
                <label
                  htmlFor={agreedDaysId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Agreed Credit Days (PO / Invoice Terms)
                </label>
                <input
                  id={agreedDaysId}
                  type="number"
                  min={1}
                  max={180}
                  disabled={hasWrittenAgreement === "no"}
                  value={hasWrittenAgreement === "no" ? 15 : agreedCreditDays}
                  onChange={(e) => setAgreedCreditDays(Number(e.target.value) || 0)}
                  className={`w-full px-3 py-2 text-sm font-semibold border rounded-xl outline-none ${
                    hasWrittenAgreement === "no"
                      ? "bg-slate-100 text-slate-500 border-slate-200 cursor-not-allowed"
                      : "bg-white text-slate-900 border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  }`}
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  {calculation.isCappedAt45 ? (
                    <span className="text-[#DC2626] font-bold">
                      ⚠️ Capped at 45 days under Section 15 proviso (PO says {agreedCreditDays}d)
                    </span>
                  ) : (
                    `Statutory credit period applied: ${calculation.effectiveCreditDays} days`
                  )}
                </span>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor={udyamTierId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Supplier Udyam Registration Classification (At Time of Contract)
                </label>
                <select
                  id={udyamTierId}
                  value={udyamTier}
                  onChange={(e) =>
                    setUdyamTier(e.target.value as "micro" | "small" | "medium")
                  }
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value="micro">
                    Micro Enterprise (Turnover ≤ ₹5 Cr) — Eligible for Sec 16 &amp; Sec 43B(h)
                  </option>
                  <option value="small">
                    Small Enterprise (Turnover ≤ ₹50 Cr) — Eligible for Sec 16 &amp; Sec 43B(h)
                  </option>
                  <option value="medium">
                    Medium Enterprise (Turnover ≤ ₹250 Cr) — Not Eligible for Sec 16 MSEFC
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: RBI Bank Rate & Buyer Tax Rate */}
          <div className="pt-3 border-t border-slate-200">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] inline-flex items-center justify-center text-[11px] font-black">
                3
              </span>
              RBI Bank Rate &amp; Buyer Section 43B(h) Tax Slab
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor={rbiRateId}
                    className="block text-xs font-bold text-slate-700"
                  >
                    RBI Bank Rate (% p.a.)
                  </label>
                  <a
                    href="https://www.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#DC2626] hover:underline"
                  >
                    Verify on RBI.org.in ↗
                  </a>
                </div>
                <input
                  id={rbiRateId}
                  type="number"
                  min={1}
                  max={25}
                  step={0.05}
                  value={rbiBankRate}
                  onChange={(e) => setRbiBankRate(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Default <strong>6.75%</strong> (RBI Bank Rate as of Nov 2026) → 3× ={" "}
                  <strong>{calculation.effectiveAnnualRatePct}% p.a.</strong>
                </span>
              </div>

              <div>
                <label
                  htmlFor={buyerTaxId}
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Buyer Corporate Income Tax Slab
                </label>
                <select
                  id={buyerTaxId}
                  value={buyerTaxRate}
                  onChange={(e) => setBuyerTaxRate(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900"
                >
                  <option value={25.17}>25.17% (Domestic Co. under Sec 115BAA)</option>
                  <option value={31.2}>31.20% (Partnership / LLP / 30% Slab + Cess)</option>
                  <option value={34.94}>34.94% (Corporate 30% + Surcharge + Cess)</option>
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Used to preview Buyer&apos;s Section 43B(h) tax disallowance hit
                </span>
              </div>
            </div>
          </div>
        </form>

        {/* Right Pane: Live Output */}
        <output
          aria-live="polite"
          className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between bg-white space-y-5"
        >
          <div className="space-y-5">
            {udyamTier === "medium" && (
              <div
                role="alert"
                className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs text-amber-950"
              >
                <strong className="font-bold block mb-1">
                  ⚠️ Medium Enterprises Excluded From Section 16 &amp; MSEFC:
                </strong>
                Under Section 2(n) of the MSMED Act, 2006, a &ldquo;supplier&rdquo; entitled to 3× RBI Bank Rate compound interest under Section 16 and MSEFC arbitration under Section 18 includes only <strong>Micro</strong> and <strong>Small</strong> enterprises. Medium enterprises must recover unpaid invoices through contractual interest, Commercial Courts, or IBC proceedings.
              </div>
            )}

            {/* Main Claim Banner */}
            <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 shadow-lg border border-slate-700 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                  Total Statutory Claim (Principal + Sec 16 Interest)
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {calculation.effectiveAnnualRatePct}% p.a. Monthly Compounded
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formatINR(calculation.totalClaimPayable, 0)}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-700/80 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    Principal Due
                  </span>
                  <span className="font-bold text-white">
                    {formatINR(calculation.principal, 0)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    3× Compound Interest
                  </span>
                  <span className="font-bold text-emerald-400">
                    +{formatINR(calculation.totalCompoundInterest, 0)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    Appointed Day
                  </span>
                  <span className="font-bold text-amber-300">
                    {formatDateShort(calculation.appointedDay)}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Statutory Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">
                  Sec 15 Due Date
                </span>
                <span className="font-black text-slate-900 mt-0.5 block">
                  {formatDateShort(calculation.creditExpiryDate)}
                </span>
                <span className="text-[10px] text-slate-500">
                  ({calculation.effectiveCreditDays} days credit)
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">
                  Overdue Duration
                </span>
                <span className="font-black text-[#DC2626] mt-0.5 block">
                  {calculation.overdueDays} Days
                </span>
                <span className="text-[10px] text-slate-500">
                  ({calculation.schedule.length} monthly rests)
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">
                  Monthly Rest Rate
                </span>
                <span className="font-black text-slate-900 mt-0.5 block">
                  {calculation.monthlyRatePct}% / mo
                </span>
                <span className="text-[10px] text-slate-500">
                  ({calculation.effectiveAnnualRatePct}% ÷ 12)
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">
                  Compound Bonus
                </span>
                <span className="font-black text-emerald-700 mt-0.5 block">
                  +{formatINR(calculation.compoundingAdvantage, 0)}
                </span>
                <span className="text-[10px] text-slate-500">
                  vs simple interest
                </span>
              </div>
            </div>

            {/* Buyer Section 43B(h) & Section 23 Tax Disallowance Box */}
            {udyamTier !== "medium" && calculation.principal > 0 && (
              <div className="bg-red-50/80 border border-red-200 rounded-xl p-3.5 text-xs text-slate-800">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-black text-[#DC2626] uppercase tracking-wider text-[11px]">
                    ⚡ Buyer CFO Leverage: Sec 43B(h) + Sec 23 Tax Penalty
                  </span>
                  <span className="text-[11px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded">
                    +{formatINR(calculation.section43BhTaxHit, 0)} Tax Hit
                  </span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  1) Under <strong>Section 43B(h) of the Income-tax Act, 1961</strong>, if your buyer fails to pay this invoice within {calculation.effectiveCreditDays} days across the financial year-end, the entire <strong>{formatINR(calculation.principal, 0)}</strong> expense is disallowed—forcing the buyer to pay <strong>{formatINR(calculation.section43BhTaxHit, 0)}</strong> in extra corporate income tax (@ {buyerTaxRate}%).{" "}
                  2) Under <strong>Section 23 of the MSMED Act</strong>, the <strong>{formatINR(calculation.totalCompoundInterest, 0)}</strong> compound interest is permanently non-deductible as a tax expense.
                </p>
              </div>
            )}

            {/* Month-by-Month Compounding Schedule Table */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Month-by-Month Compounding Schedule (Section 16)
                </h3>
                <span className="text-[11px] text-slate-500">
                  {calculation.schedule.length} rest periods
                </span>
              </div>

              {calculation.schedule.length === 0 ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 text-center">
                  {udyamTier === "medium"
                    ? "Switch Udyam Tier to Micro or Small Enterprise to view the Section 16 monthly compounding schedule."
                    : "Payment date is within the statutory credit period (0 overdue days). Increase the Payment Date beyond the Due Date to compute compound interest."}
                </div>
              ) : (
                <div className="max-h-60 overflow-y-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead className="bg-slate-100 text-slate-700 sticky top-0 border-b border-slate-200">
                      <tr>
                        <th className="py-2 px-2.5 font-bold">Rest #</th>
                        <th className="py-2 px-2.5 font-bold">Compounding Period</th>
                        <th className="py-2 px-2.5 font-bold text-right">Opening (₹)</th>
                        <th className="py-2 px-2.5 font-bold text-right">Interest (₹)</th>
                        <th className="py-2 px-2.5 font-bold text-right">Closing (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {calculation.schedule.map((row) => (
                        <tr key={row.monthNumber} className="hover:bg-slate-50">
                          <td className="py-2 px-2.5 font-bold text-slate-900">
                            M{row.monthNumber}
                          </td>
                          <td className="py-2 px-2.5 text-slate-600">
                            {row.periodLabel}
                          </td>
                          <td className="py-2 px-2.5 text-right font-medium text-slate-700">
                            {formatINR(row.openingBalance, 0)}
                          </td>
                          <td className="py-2 px-2.5 text-right font-bold text-emerald-600">
                            +{formatINR(row.interestAccrued, 0)}
                          </td>
                          <td className="py-2 px-2.5 text-right font-bold text-slate-900">
                            {formatINR(row.closingBalance, 0)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA inside Calculator */}
          <div className="space-y-2.5 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-900/20 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>⚖️</span>
              <span>
                Serve Advocate MSME Notice for {formatINR(calculation.totalClaimPayable, 0)} (₹{basePrice})
              </span>
            </button>
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Attaches Sec 16 schedule + Sec 43B(h) CFO tax warning</span>
              <Link
                href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                className="text-[#DC2626] hover:underline font-semibold"
              >
                Samadhaan vs Notice →
              </Link>
            </div>
          </div>
        </output>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
