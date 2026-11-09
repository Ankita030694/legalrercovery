"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import ConsumerCommissionNoticeCTA from "./ConsumerCommissionNoticeCTA";

interface JurisdictionFeeResult {
  forumName: string;
  forumCode: "DCDRC" | "SCDRC" | "NCDRC";
  forumFullTitle: string;
  pecuniaryCeiling: string;
  courtFee: number;
  courtFeeLabel: string;
  isFeeExempt: boolean;
  statutoryRule: string;
  paymentModeAdvice: string;
  limitationDaysLeft: number | null;
  limitationStatus: "valid" | "warning" | "expired" | "not_set";
  territorialNote: string;
}

export default function ConsumerCommissionCalculatorClient() {
  const considerationId = useId();
  const compensationId = useId();
  const dateId = useId();
  const locationId = useId();
  const filingModeId = useId();

  // Inputs
  const [consideration, setConsideration] = useState<number>(350000); // Default ₹3.5 Lakh (small claim)
  const [compensation, setCompensation] = useState<number>(50000); // Default ₹50k compensation
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [complainantLocation, setComplainantLocation] = useState<string>("New Delhi");
  const [filingMode, setFilingMode] = useState<"online" | "physical">("online");
  const [copied, setCopied] = useState<boolean>(false);

  // Quick preset buttons
  const PRESETS = [
    { label: "₹2.5 Lakh (E-Com/Phone)", value: 250000, comp: 25000 },
    { label: "₹8.5 Lakh (Car Defect)", value: 850000, comp: 100000 },
    { label: "₹35 Lakh (Medical/Travel)", value: 3500000, comp: 500000 },
    { label: "₹85 Lakh (Flat Delay)", value: 8500000, comp: 1500000 },
    { label: "₹2.5 Crore (Luxury Flat)", value: 25000000, comp: 5000000 },
  ];

  // Helper calculation
  const calculateJurisdictionAndFee = (): JurisdictionFeeResult => {
    const amount = Number(consideration) || 0;

    let forumCode: "DCDRC" | "SCDRC" | "NCDRC" = "DCDRC";
    let forumName = "District Consumer Disputes Redressal Commission (DCDRC)";
    let forumFullTitle = "District Consumer Disputes Redressal Commission";
    let pecuniaryCeiling = "Up to ₹50,00,000 (₹50 Lakh)";
    let courtFee = 0;
    let isFeeExempt = false;
    let statutoryRule = "Section 34(1) CPA 2019 r/w Notification S.O. 5444(E)";

    if (amount <= 5000000) {
      // District Commission: <= ₹50 Lakh
      forumCode = "DCDRC";
      forumName = "District Consumer Disputes Redressal Commission (DCDRC)";
      forumFullTitle = "District Consumer Commission";
      pecuniaryCeiling = "Up to ₹50 Lakh (Section 34(1) as amended by S.O. 5444(E))";

      if (amount <= 500000) {
        courtFee = 0;
        isFeeExempt = true;
      } else if (amount <= 1000000) {
        courtFee = 200;
      } else if (amount <= 2000000) {
        courtFee = 400;
      } else {
        courtFee = 1000;
      }
    } else if (amount <= 20000000) {
      // State Commission: > ₹50 Lakh to <= ₹2 Crore
      forumCode = "SCDRC";
      forumName = "State Consumer Disputes Redressal Commission (SCDRC)";
      forumFullTitle = "State Consumer Commission";
      pecuniaryCeiling = "Above ₹50 Lakh up to ₹2 Crore (Section 47(1)(a)(i))";

      if (amount <= 10000000) {
        courtFee = 2000;
      } else {
        courtFee = 2500;
      }
      statutoryRule = "Section 47(1)(a)(i) CPA 2019 r/w S.O. 5444(E)";
    } else {
      // National Commission: > ₹2 Crore
      forumCode = "NCDRC";
      forumName = "National Consumer Disputes Redressal Commission (NCDRC)";
      forumFullTitle = "National Consumer Commission (New Delhi)";
      pecuniaryCeiling = "Exceeds ₹2 Crore (Section 58(1)(a)(i))";
      courtFee = 7500;
      statutoryRule = "Section 58(1)(a)(i) CPA 2019 r/w S.O. 5444(E)";
    }

    // Fee label
    const courtFeeLabel = isFeeExempt
      ? "NIL (₹0 Free Filing)"
      : `₹${courtFee.toLocaleString("en-IN")}`;

    // Limitation calculation (2 years = 730 days from date under Section 69)
    let limitationDaysLeft: number | null = null;
    let limitationStatus: "valid" | "warning" | "expired" | "not_set" = "not_set";

    if (incidentDate) {
      const incDate = new Date(incidentDate);
      if (!isNaN(incDate.getTime())) {
        const twoYearsLater = new Date(incDate);
        twoYearsLater.setFullYear(twoYearsLater.getFullYear() + 2);
        const today = new Date();
        const diffTime = twoYearsLater.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        limitationDaysLeft = diffDays;

        if (diffDays <= 0) {
          limitationStatus = "expired";
        } else if (diffDays <= 90) {
          limitationStatus = "warning";
        } else {
          limitationStatus = "valid";
        }
      }
    }

    // Payment mode advice
    const paymentModeAdvice =
      filingMode === "online"
        ? "Payable electronically via e-Jagriti Payment Gateway (Debit Card, Net Banking, UPI, or Bharatkosh portal)."
        : `Crossed Demand Draft / Banker's Cheque drawn on a nationalised bank in favour of 'President, ${forumFullTitle}' payable at the district or state capital registry.`;

    // Territorial note
    const territorialNote = complainantLocation
      ? `Under Section 34(2)(d) / Section 47(4) CPA 2019, you have statutory right to institute your complaint in ${complainantLocation} where you reside or personally work for gain, regardless of where the opposite party's head office is located.`
      : "Under Section 34(2)(d) CPA 2019, you can file directly in the commission where you reside or work.";

    return {
      forumName,
      forumCode,
      forumFullTitle,
      pecuniaryCeiling,
      courtFee,
      courtFeeLabel,
      isFeeExempt,
      statutoryRule,
      paymentModeAdvice,
      limitationDaysLeft,
      limitationStatus,
      territorialNote,
    };
  };

  const result = calculateJurisdictionAndFee();

  const handleCopySummary = () => {
    const textToCopy = `Consumer Court Fee & Jurisdiction Summary:
- Consideration Paid: ₹${Number(consideration).toLocaleString("en-IN")}
- Compensation Demanded: ₹${Number(compensation).toLocaleString("en-IN")}
- Appropriate Forum: ${result.forumName}
- Pecuniary Authority: ${result.statutoryRule}
- Statutory Court Fee: ${result.courtFeeLabel} (Schedule, CPA Regulations 2020)
- Territorial Filing Right: Section 34(2)(d) at complainant's residence (${complainantLocation || "Local District"})
- Filing Mode: ${filingMode === "online" ? "e-Jagriti Online Portal" : "Physical Counter (Demand Draft)"}
- Limitation Period: 2 Years under Section 69 Consumer Protection Act 2019.`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-slate-900 text-white px-5 sm:px-7 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-800/50 inline-block mb-1">
            Consumer Protection Act 2019 &amp; 2021 Rules
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white">
            Consumer Forum &amp; Filing Fee Calculator (Pecuniary &amp; Territorial)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-medium hidden sm:inline">
            Notification S.O. 5444(E) Compliant
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ✓ Updated for 2026
          </span>
        </div>
      </div>

      {/* Two-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: Inputs Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-6 p-5 sm:p-7 space-y-6 bg-slate-50/50"
        >
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Quick Claim Presets
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setConsideration(p.value);
                    setCompensation(p.comp);
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                    consideration === p.value
                      ? "bg-red-600 text-white border-red-600 shadow-sm"
                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input 1: Consideration Paid */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor={considerationId}
                className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5"
              >
                <span>Total Consideration Paid (Value of Goods / Services)</span>
                <span className="text-red-500">*</span>
              </label>
              <span className="text-xs font-extrabold text-red-600">
                ₹{Number(consideration || 0).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="relative rounded-xl shadow-xs">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                ₹
              </span>
              <input
                id={considerationId}
                type="number"
                min="0"
                step="1000"
                value={consideration}
                onChange={(e) => setConsideration(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                placeholder="e.g. 350000"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Under Section 34/47/58 of CPA 2019, forum jurisdiction is determined solely by the actual
              consideration paid, NOT by the compensation claimed.
            </p>
          </div>

          {/* Input 2: Compensation Claimed (Optional) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor={compensationId}
                className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5"
              >
                <span>Compensation / Damages Claimed (Optional)</span>
                <span className="text-[10px] text-slate-400 font-normal">relief prayer</span>
              </label>
              <span className="text-xs font-medium text-slate-600">
                ₹{Number(compensation || 0).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="relative rounded-xl shadow-xs">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                ₹
              </span>
              <input
                id={compensationId}
                type="number"
                min="0"
                step="5000"
                value={compensation}
                onChange={(e) => setCompensation(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                placeholder="e.g. 50000"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Unlike the 1986 Act, adding compensation does NOT inflate court fee or push your claim to a higher commission.
            </p>
          </div>

          {/* Input 3: Cause of Action Date */}
          <div className="space-y-1.5">
            <label
              htmlFor={dateId}
              className="text-xs sm:text-sm font-semibold text-slate-800 block"
            >
              Date of Cause of Action (Deficiency / Refund Refusal Date)
            </label>
            <input
              id={dateId}
              type="date"
              value={incidentDate}
              onChange={(e) => setIncidentDate(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
            />
            <p className="text-[11px] text-slate-500">
              Section 69 prescribes a strict 2-year limitation window from this date.
            </p>
          </div>

          {/* Input 4 & 5 Grid: Location & Filing Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor={locationId}
                className="text-xs sm:text-sm font-semibold text-slate-800 block"
              >
                Complainant City / State
              </label>
              <input
                id={locationId}
                type="text"
                value={complainantLocation}
                onChange={(e) => setComplainantLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                placeholder="e.g. Mumbai, Bengaluru"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor={filingModeId}
                className="text-xs sm:text-sm font-semibold text-slate-800 block"
              >
                Filing Method
              </label>
              <select
                id={filingModeId}
                value={filingMode}
                onChange={(e) => setFilingMode(e.target.value as "online" | "physical")}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
              >
                <option value="online">Online via e-Jagriti Portal</option>
                <option value="physical">Physical Filing (Registry Counter)</option>
              </select>
            </div>
          </div>
        </form>

        {/* Right Pane: Live Results Output */}
        <output
          aria-live="polite"
          className="lg:col-span-6 p-5 sm:p-7 space-y-6 flex flex-col justify-between bg-white"
        >
          <div className="space-y-5">
            {/* Forum Result Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-md border border-slate-700 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/70">
                  Designated Forum
                </span>
                <span className="text-xs font-mono font-semibold text-slate-300">
                  {result.pecuniaryCeiling}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1">
                {result.forumName}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Authority: <span className="font-semibold text-slate-100">{result.statutoryRule}</span>
              </p>
            </div>

            {/* Key Metric Blocks: Court Fee & Forum Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Fee Block */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                  Statutory Filing Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-2xl sm:text-3xl font-black ${
                      result.isFeeExempt ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {result.courtFeeLabel}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  {result.isFeeExempt
                    ? "✓ Zero court fee up to ₹5 Lakh under CPA 2020 Regulations"
                    : "Payable under Schedule to Commission Procedure Regulations"}
                </p>
              </div>

              {/* Forum Tier Block */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                  Commission Tier
                </span>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  {result.forumCode === "DCDRC" && "District Commission"}
                  {result.forumCode === "SCDRC" && "State Commission"}
                  {result.forumCode === "NCDRC" && "National Commission"}
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  {result.forumCode === "DCDRC" && "Headed by District Judge or equivalent"}
                  {result.forumCode === "SCDRC" && "Headed by retired High Court Judge"}
                  {result.forumCode === "NCDRC" && "Headed by retired Supreme Court Judge"}
                </p>
              </div>
            </div>

            {/* Limitation Tracker Block */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Limitation Status (Section 69 CPA)
                </span>
                {result.limitationStatus === "valid" && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Within Limitation ({result.limitationDaysLeft} days left)
                  </span>
                )}
                {result.limitationStatus === "warning" && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    Urgent: {result.limitationDaysLeft} days remaining
                  </span>
                )}
                {result.limitationStatus === "expired" && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-800 border border-red-300">
                    Expired (Condonation Application Req.)
                  </span>
                )}
                {result.limitationStatus === "not_set" && (
                  <span className="text-[11px] text-slate-400 italic">
                    Select date to track days
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {result.limitationStatus === "expired"
                  ? "The statutory 2-year period has passed. You must file a separate Section 69(2) condonation application demonstrating 'sufficient cause' for the delay."
                  : "You have 2 years from the date the cause of action arose to file on e-Jagriti or at the physical registry."}
              </p>
            </div>

            {/* Territorial & Payment Mode Advice */}
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p>
                <strong className="text-slate-900 font-bold">Territorial Right:</strong>{" "}
                {result.territorialNote}
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Payment Method:</strong>{" "}
                {result.paymentModeAdvice}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopySummary}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-emerald-700 font-bold">Copied Summary!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  <span>Copy Jurisdiction &amp; Fee Summary</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-500 text-center sm:text-right">
              Need to establish deficiency? Serve a{" "}
              <Link
                href="/send-legal-notice-online-india"
                className="text-red-600 font-bold hover:underline"
              >
                15-Day Legal Notice
              </Link>
            </span>
          </div>
        </output>
      </div>
    </div>
  );
}
