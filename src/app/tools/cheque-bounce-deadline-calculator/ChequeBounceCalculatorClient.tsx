"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import { PaymentModal } from "@/components/PaymentModal";

interface CalculatorDates {
  chequeDate: string;
  presentationDate: string;
  chequeAmount: number;
  chequeNumber: string;
  returnMemoDate: string;
  returnReason: string;
  noticeDispatched: boolean;
  noticeDispatchDate: string;
  noticeDeliveredDate: string;
}

const RETURN_REASONS = [
  { code: "01", label: "Funds Insufficient (Code 01) — Core Section 138", valid138: true },
  { code: "02", label: "Exceeds Arrangement (Code 02) — Core Section 138", valid138: true },
  { code: "11", label: "Account Closed (Code 11) — Covered under NEPC Micon (SC)", valid138: true },
  { code: "12", label: "Signature Differs / Incomplete (Code 12) — Covered under Laxmi Dyechem (SC)", valid138: true },
  { code: "21", label: "Payment Stopped by Drawer (Code 21) — Covered under Goaplast (SC)", valid138: true },
  { code: "03", label: "Refer to Drawer (Code 03) — Covered under Section 138", valid138: true },
  { code: "14", label: "Post-Dated Cheque / Stale Cheque (Code 14) — Stale if > 3 Months", valid138: false },
  { code: "99", label: "Other / Technical Return Reason", valid138: true },
];

function formatDate(date: Date): string {
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export default function ChequeBounceCalculatorClient() {
  const today = new Date();
  const defaultChequeDate = addDays(today, -18).toISOString().split("T")[0];
  const defaultPresentationDate = addDays(today, -12).toISOString().split("T")[0];
  const defaultReturnMemoDate = addDays(today, -8).toISOString().split("T")[0];

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const [form, setForm] = useState<CalculatorDates>({
    chequeDate: defaultChequeDate,
    presentationDate: defaultPresentationDate,
    chequeAmount: 250000,
    chequeNumber: "450912",
    returnMemoDate: defaultReturnMemoDate,
    returnReason: "01",
    noticeDispatched: false,
    noticeDispatchDate: "",
    noticeDeliveredDate: "",
  });

  const calculations = useMemo(() => {
    const chqDate = new Date(form.chequeDate);
    const presDate = new Date(form.presentationDate);
    const memoDate = new Date(form.returnMemoDate);

    // 1. Cheque Validity: 3 calendar months from cheque date
    const chequeExpiryDate = addMonths(chqDate, 3);
    const isChequePresentedInTime = presDate <= chequeExpiryDate;

    // 2. 30-Day Notice Deadline: Return memo date + 30 calendar days (s.138(b))
    const noticeDeadline = addDays(memoDate, 30);
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntilNoticeDeadline = Math.ceil(
      (noticeDeadline.getTime() - todayMidnight.getTime()) / msPerDay
    );
    const isNoticeExpired = daysUntilNoticeDeadline < 0;
    const isNoticeUrgent = daysUntilNoticeDeadline >= 0 && daysUntilNoticeDeadline <= 7;

    // 3. Notice Delivery & 15-Day Cure Window
    let effectiveDeliveryDate: Date;
    if (form.noticeDispatched && form.noticeDeliveredDate) {
      effectiveDeliveryDate = new Date(form.noticeDeliveredDate);
    } else if (form.noticeDispatched && form.noticeDispatchDate) {
      // Presume 3 days Postal Transit if delivery tracking not yet confirmed
      effectiveDeliveryDate = addDays(new Date(form.noticeDispatchDate), 3);
    } else {
      // Projected: Assume sent today
      effectiveDeliveryDate = addDays(todayMidnight, 3);
    }

    const curePeriodDeadline = addDays(effectiveDeliveryDate, 15);
    const causeOfActionDate = addDays(curePeriodDeadline, 1);
    const complaintFilingDeadline = addMonths(causeOfActionDate, 1);

    // 4. Civil Limitation: 3 years from Cheque Date under Limitation Act
    const civilLimitationExpiry = addMonths(chqDate, 36);

    // 5. Compensation Potential
    const maxFine = form.chequeAmount * 2;
    const interimComp = Math.round(form.chequeAmount * 0.2);

    return {
      chequeExpiryDate,
      isChequePresentedInTime,
      noticeDeadline,
      daysUntilNoticeDeadline,
      isNoticeExpired,
      isNoticeUrgent,
      effectiveDeliveryDate,
      curePeriodDeadline,
      causeOfActionDate,
      complaintFilingDeadline,
      civilLimitationExpiry,
      maxFine,
      interimComp,
    };
  }, [form]);

  const copySummary = () => {
    const summaryText = `--- SECTION 138 CHEQUE BOUNCE STATUTORY TIMELINE ---
Cheque Amount: ₹${form.chequeAmount.toLocaleString("en-IN")} (Cheque No: ${form.chequeNumber || "N/A"})
Cheque Date: ${formatDate(new Date(form.chequeDate))}
Bank Return Memo Date: ${formatDate(new Date(form.returnMemoDate))}

CRITICAL DEADLINES:
1. 30-Day Legal Notice Deadline (s.138(b)): ${formatDate(calculations.noticeDeadline)} [${
      calculations.isNoticeExpired
        ? "EXPIRED"
        : `${calculations.daysUntilNoticeDeadline} Days Remaining`
    }]
2. 15-Day Drawer Payment Window (s.138(c)): ${formatDate(calculations.curePeriodDeadline)}
3. Cause of Action Arises: ${formatDate(calculations.causeOfActionDate)}
4. Section 142(1)(b) Court Complaint Deadline: ${formatDate(calculations.complaintFilingDeadline)}
5. Civil Suit 3-Year Limitation Expiry: ${formatDate(calculations.civilLimitationExpiry)}

Statutory Penalties under NI Act:
- Maximum Criminal Fine: ₹${calculations.maxFine.toLocaleString("en-IN")} (2x Cheque Amount)
- Maximum Imprisonment: Up to 2 Years
- Interim Compensation under s.143A: Up to ₹${calculations.interimComp.toLocaleString("en-IN")} (20%)

Calculated via LegalRecovery.in Section 138 Calculator
https://www.legalrecovery.in/tools/cheque-bounce-deadline-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      id="cheque-calculator-tool"
      className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden scroll-mt-28"
    >
      {/* Wizard Header with Stepper Progress */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1">
              Interactive Section 138 NI Act Engine
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white">
              Cheque Dishonour Statutory Deadline Calculator
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-lg">
            3-Step Compliance Wizard
          </span>
        </div>

        {/* Stepper Navigation with aria-current */}
        <nav aria-label="Calculator Progress" className="w-full">
          <ol className="grid grid-cols-3 gap-2 sm:gap-4 text-xs font-bold">
            <li
              aria-current={currentStep === 1 ? "step" : undefined}
              onClick={() => setCurrentStep(1)}
              className={`p-2 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
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
                Cheque &amp; Presentation
              </span>
            </li>

            <li
              aria-current={currentStep === 2 ? "step" : undefined}
              onClick={() => setCurrentStep(2)}
              className={`p-2 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
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
                Return Memo &amp; Notice
              </span>
            </li>

            <li
              aria-current={currentStep === 3 ? "step" : undefined}
              onClick={() => setCurrentStep(3)}
              className={`p-2 sm:p-3 rounded-xl border flex flex-col sm:flex-row items-center gap-2 cursor-pointer transition-all ${
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
                Results &amp; Deadlines
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Step 1: Cheque and Presentation Details */}
      {currentStep === 1 && (
        <div className="p-5 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Step 1: Enter Cheque Date, Amount &amp; Bank Presentation Details
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Under RBI directives, cheques in India remain valid for exactly 3 calendar months from the date written on the face of the cheque.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="chequeDate" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Date Written on Cheque *
              </label>
              <input
                id="chequeDate"
                type="date"
                value={form.chequeDate}
                onChange={(e) => setForm({ ...form, chequeDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Validity ends on: <strong>{formatDate(calculations.chequeExpiryDate)}</strong> (3 Months)
              </p>
            </div>

            <div>
              <label htmlFor="presentationDate" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Date Cheque Presented to Bank *
              </label>
              <input
                id="presentationDate"
                type="date"
                value={form.presentationDate}
                onChange={(e) => setForm({ ...form, presentationDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Date your bank processed or cleared the instrument for collection.
              </p>
            </div>

            <div>
              <label htmlFor="chequeAmount" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Cheque Face Value Amount (₹) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </span>
                <input
                  id="chequeAmount"
                  type="number"
                  min="1"
                  value={form.chequeAmount}
                  onChange={(e) => setForm({ ...form, chequeAmount: Number(e.target.value) || 0 })}
                  className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Enter exact dishonoured amount without comma separators.
              </p>
            </div>

            <div>
              <label htmlFor="chequeNumber" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                6-Digit Cheque Number (Optional)
              </label>
              <input
                id="chequeNumber"
                type="text"
                maxLength={8}
                value={form.chequeNumber}
                onChange={(e) => setForm({ ...form, chequeNumber: e.target.value })}
                placeholder="e.g. 450912"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Found at the bottom left of the MICR strip on your cheque leaf.
              </p>
            </div>
          </div>

          {/* Cheque Validity Warning */}
          {!calculations.isChequePresentedInTime ? (
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-900 text-xs sm:text-sm">
              <strong className="font-bold block text-amber-950">
                ⚠ Stale Cheque Alert (Presented Beyond 3-Month Window)
              </strong>
              <p className="mt-1">
                Under Reserve Bank of India notification DBOD.AML.BC.No.47/14.01.001/2011-12, cheques presented after 3 months from their issuance date are invalid for clearance. A criminal case under Section 138 is maintainable only if presented within 3 months. However, the civil underlying debt is still recoverable via a regular recovery suit or summary suit under Order 37 CPC within 3 years.
              </p>
            </div>
          ) : (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
              <span className="font-bold text-base">✓</span>
              <span>
                Cheque was presented within the statutory 3-month validity window. Valid for Section 138 action.
              </span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              Continue to Step 2: Return Memo Details →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Dishonour Memo & Notice Details */}
      {currentStep === 2 && (
        <div className="p-5 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Step 2: Enter Bank Return Memo Date &amp; Notice Status
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              The 30-day statutory notice countdown under Section 138(b) starts from the exact date you received information of dishonour (the bank return memo).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="returnMemoDate" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Date Return Memo Received *
              </label>
              <input
                id="returnMemoDate"
                type="date"
                value={form.returnMemoDate}
                onChange={(e) => setForm({ ...form, returnMemoDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Day 0 of your statutory 30-day legal notice window.
              </p>
            </div>

            <div>
              <label htmlFor="returnReason" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Bank Dishonour Reason *
              </label>
              <select
                id="returnReason"
                value={form.returnReason}
                onChange={(e) => setForm({ ...form, returnReason: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
              >
                {RETURN_REASONS.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.label}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                As stated on the original paper slip or CTS digital return memo.
              </p>
            </div>
          </div>

          {/* Notice Status Toggle */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase block">
                  Have You Already Dispatched a Statutory Demand Notice?
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select &quot;Yes&quot; if your advocate has already served a demand notice under Section 138(b).
                </p>
              </div>

              <div className="inline-flex rounded-xl bg-slate-200 p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, noticeDispatched: false })}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    !form.noticeDispatched
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Not Yet Sent
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, noticeDispatched: true })}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    form.noticeDispatched
                      ? "bg-red-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Already Sent
                </button>
              </div>
            </div>

            {form.noticeDispatched && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                <div>
                  <label htmlFor="noticeDispatchDate" className="block text-xs font-bold text-slate-700 mb-1">
                    Notice Dispatch Date (Speed Post Date)
                  </label>
                  <input
                    id="noticeDispatchDate"
                    type="date"
                    value={form.noticeDispatchDate}
                    onChange={(e) => setForm({ ...form, noticeDispatchDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label htmlFor="noticeDeliveredDate" className="block text-xs font-bold text-slate-700 mb-1">
                    Notice Delivery Date (Postal Tracking / Blue Tick)
                  </label>
                  <input
                    id="noticeDeliveredDate"
                    type="date"
                    value={form.noticeDeliveredDate}
                    onChange={(e) => setForm({ ...form, noticeDeliveredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Leave blank to assume standard 3-day postal transit.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              ← Back to Step 1
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors cursor-pointer flex items-center gap-2 shadow-lg shadow-red-900/20"
            >
              Generate Section 138 Deadlines →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Calculation Results and Action Timeline */}
      {currentStep === 3 && (
        <div className="p-5 sm:p-8 space-y-6">
          {/* Top Status Alert Banner */}
          {calculations.isNoticeExpired ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-red-950/90 border-2 border-red-600 text-white space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-black text-sm uppercase tracking-wider">
                <span className="text-xl">⛔</span>
                <span>Section 138 Notice Deadline Has Expired</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                The 30-day statutory notice period under Section 138(b) expired on{" "}
                <strong>{formatDate(calculations.noticeDeadline)}</strong>. Under Supreme Court precedent, delay in issuing the statutory demand notice cannot be condoned by any court. However, your right to recover ₹{form.chequeAmount.toLocaleString("en-IN")} remains active via a <strong>Summary Suit under Order 37 CPC</strong> or an ordinary civil recovery suit until{" "}
                <strong>{formatDate(calculations.civilLimitationExpiry)}</strong>.
              </p>
            </div>
          ) : calculations.isNoticeUrgent ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/90 border-2 border-amber-500 text-white space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-black text-sm uppercase tracking-wider">
                <span className="text-xl">⚠</span>
                <span>Urgent: Notice Deadline in {calculations.daysUntilNoticeDeadline} Days</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                You have only <strong>{calculations.daysUntilNoticeDeadline} calendar days</strong> remaining before your Section 138 criminal remedy expires on{" "}
                <strong>{formatDate(calculations.noticeDeadline)}</strong>. Dispatch your advocate demand notice immediately via Registered Speed Post.
              </p>
            </div>
          ) : (
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-white space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-black text-sm uppercase tracking-wider">
                <span className="text-xl">✓</span>
                <span>Notice Window Active ({calculations.daysUntilNoticeDeadline} Days Left)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Your 30-day statutory notice window is open until{" "}
                <strong>{formatDate(calculations.noticeDeadline)}</strong>. Issue your statutory demand notice promptly to prevent last-minute delivery disputes.
              </p>
            </div>
          )}

          {/* Statutory Milestone Timeline Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-red-400 block mb-0.5">
                  Statutory Countdown Schedule
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Binding Deadlines for ₹{form.chequeAmount.toLocaleString("en-IN")} Cheque Dishonour
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copySummary}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? "✓ Copied!" : "📋 Copy Timeline"}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  🖨 Print / PDF
                </button>
              </div>
            </div>

            {/* Stepper Timeline Visual */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
              {/* Event 1: Dishonour Memo Receipt */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-slate-700 border-2 border-slate-400 text-[10px] flex items-center justify-center font-bold text-white">
                  0
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Day 0 • Receipt of Dishonour Information
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {formatDate(new Date(form.returnMemoDate))}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Payee bank returned cheque with reason:{" "}
                    <span className="text-red-400 font-semibold">
                      {RETURN_REASONS.find((r) => r.code === form.returnReason)?.label || "Dishonoured"}
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Event 2: Notice Deadline */}
              <div className="relative">
                <span
                  className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 text-[10px] flex items-center justify-center font-bold text-white ${
                    calculations.isNoticeExpired
                      ? "bg-red-600 border-red-400"
                      : "bg-amber-600 border-amber-400"
                  }`}
                >
                  30
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Day 30 • Statutory Notice Deadline (Section 138(b))
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                        calculations.isNoticeExpired
                          ? "bg-red-950 text-red-400 border border-red-800"
                          : "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      }`}
                    >
                      {calculations.isNoticeExpired
                        ? "Expired"
                        : `${calculations.daysUntilNoticeDeadline} Days Left`}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {formatDate(calculations.noticeDeadline)}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    The written demand notice must be dispatched on or before this date via Registered Speed Post. Delay beyond this date is fatal to Section 138 maintainability.
                  </p>
                </div>
              </div>

              {/* Event 3: Cure Period */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-blue-400 text-[10px] flex items-center justify-center font-bold text-white">
                  15
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    15-Day Drawer Cure / Payment Window (Section 138(c))
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Ends on: {formatDate(calculations.curePeriodDeadline)}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    The drawer has 15 calendar days from receipt of notice to make full payment. No court complaint can be filed before this window closes.
                  </p>
                </div>
              </div>

              {/* Event 4: Cause of Action & Court Complaint */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-emerald-600 border-2 border-emerald-400 text-[10px] flex items-center justify-center font-bold text-white">
                  §
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Cause of Action &amp; Section 142(1)(b) Court Filing Window
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Cause of Action: {formatDate(calculations.causeOfActionDate)} • Filing Deadline: {formatDate(calculations.complaintFilingDeadline)}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Complaint must be filed within 1 month before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM). Delay is condonable upon proving sufficient cause.
                  </p>
                </div>
              </div>

              {/* Event 5: Civil Limitation Fallback */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-purple-600 border-2 border-purple-400 text-[10px] flex items-center justify-center font-bold text-white">
                  3Y
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    Civil Recovery Suit Limitation (Limitation Act 1963)
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Active Until: {formatDate(calculations.civilLimitationExpiry)} (3 Years)
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Order 37 CPC summary suit for debt recovery remains actionable even if criminal notice window was missed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statutory Penalties & Recovery Potential Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Max Penal Fine
              </span>
              <p className="text-xl font-black text-slate-900 mt-1">
                ₹{calculations.maxFine.toLocaleString("en-IN")}
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">Up to 2x cheque face value</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Interim Relief (s.143A)
              </span>
              <p className="text-xl font-black text-emerald-700 mt-1">
                ₹{calculations.interimComp.toLocaleString("en-IN")}
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">Up to 20% payable within 60 days</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Criminal Sentence
              </span>
              <p className="text-xl font-black text-red-700 mt-1">Up to 2 Years</p>
              <p className="text-[11px] text-slate-600 mt-0.5">Imprisonment under Section 138</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              ← Edit Dates &amp; Reason
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-900/30 cursor-pointer text-center"
            >
              Draft Section 138 Notice Now — ₹{basePrice}
            </button>
          </div>
        </div>
      )}

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
