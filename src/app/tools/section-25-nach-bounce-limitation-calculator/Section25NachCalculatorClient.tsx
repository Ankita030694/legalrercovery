"use client";

import React, { useState, useId, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type InstrumentMode = "enach_pss25" | "upi_autopay_pss25" | "cheque_ni138";
type ReturnReasonCode = "01_funds" | "02_arrangement" | "04_cancelled" | "08_closed" | "99_technical";
type DeliveryChannel = "electronic_same_day" | "rpad_pod" | "rpad_refused_deemed";
type LendingStructure = "direct_nbfc" | "colending_poa";

interface BatchRowResult {
  loanId: string;
  borrowerName: string;
  returnMemoDate: string;
  noticeCutOff: string;
  dispatchDate: string;
  deliveryMode: string;
  serviceDate: string;
  cureExpiryDate: string;
  causeOfActionDate: string;
  complaintDeadline: string;
  status: "NOTICE_LAPSED" | "FILING_LAPSED" | "READY_TO_FILE" | "IN_CURE_PERIOD" | "DISPATCH_PENDING";
  statusLabel: string;
}

const SAMPLE_CSV = `LoanID,BorrowerName,ReturnMemoDate,NoticeDispatchDate,DeliveryMode,DeliveryDate,EMIAmount
LN-88412,Rohan Sharma,2026-10-15,2026-10-22,Electronic,2026-10-22,24500
LN-88419,Meera Logistics Pvt Ltd,2026-10-10,2026-10-28,RPAD_POD,2026-11-02,118000
LN-88425,Vikram Traders,2026-09-20,2026-09-28,RPAD_Refused,2026-10-03,42000
LN-88431,Anil Kumar,2026-09-10,2026-10-18,Electronic,2026-10-18,15800`;

function parseISODate(dateStr: string): Date {
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date(2026, 10, 14);
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function isValidISODate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr.trim())) return false;
  const d = parseISODate(dateStr);
  return !Number.isNaN(d.getTime());
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateIN(date: Date): string {
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

function diffDays(later: Date, earlier: Date): number {
  const utc1 = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate());
  const utc2 = Date.UTC(later.getFullYear(), later.getMonth(), later.getDate());
  return Math.round((utc2 - utc1) / (1000 * 60 * 60 * 24));
}

function formatINR(val: number): string {
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function computeStatutoryDates(
  returnMemoStr: string,
  dispatchStr: string,
  serviceStr: string,
  referenceTodayStr: string
) {
  const returnMemoDate = parseISODate(returnMemoStr);
  const dispatchDate = parseISODate(dispatchStr);
  const serviceDate = parseISODate(serviceStr);
  const refToday = parseISODate(referenceTodayStr);

  // Econ Antri (2014) & Saketh India (1999): Day 0 (Return Memo receipt) excluded -> Day 1 = +1, Day 30 = +30
  const noticeDay1 = addDays(returnMemoDate, 1);
  const noticeCutOff = addDays(returnMemoDate, 30);
  const noticeSentOnTime = diffDays(noticeCutOff, dispatchDate) >= 0;
  const noticeDaysRemainingFromToday = diffDays(noticeCutOff, refToday);

  // 15-Day Cure Period: Day 0 (Service / Deemed Service Date) excluded -> Day 1 = +1, Day 15 = +15
  const cureDay1 = addDays(serviceDate, 1);
  const cureExpiryDate = addDays(serviceDate, 15);

  // Cause of action arises on Day 16 after service
  const causeOfActionDate = addDays(serviceDate, 16);

  // Saketh India day-exclusion on 30-day / 1-month complaint window: Day 16 excluded -> +30 days from Cause of Action
  const complaintWindowDay1 = addDays(causeOfActionDate, 1);
  const complaintDeadline = addDays(causeOfActionDate, 30);
  const filingDaysRemaining = diffDays(complaintDeadline, refToday);
  const isInCurePeriod = diffDays(cureExpiryDate, refToday) >= 0 && diffDays(refToday, serviceDate) >= 0;
  const isReadyToFile = diffDays(refToday, causeOfActionDate) >= 0 && filingDaysRemaining >= 0;
  const isFilingLapsed = filingDaysRemaining < 0;

  return {
    returnMemoDate,
    dispatchDate,
    serviceDate,
    noticeDay1,
    noticeCutOff,
    noticeSentOnTime,
    noticeDaysRemainingFromToday,
    cureDay1,
    cureExpiryDate,
    causeOfActionDate,
    complaintWindowDay1,
    complaintDeadline,
    filingDaysRemaining,
    isInCurePeriod,
    isReadyToFile,
    isFilingLapsed,
  };
}

export default function Section25NachCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");

  // Single-account state
  const [instrumentMode, setInstrumentMode] = useState<InstrumentMode>("enach_pss25");
  const [returnReason, setReturnReason] = useState<ReturnReasonCode>("01_funds");
  const [returnMemoStr, setReturnMemoStr] = useState<string>("2026-10-15");
  const [dispatchStr, setDispatchStr] = useState<string>("2026-10-22");
  const [deliveryChannel, setDeliveryChannel] = useState<DeliveryChannel>("electronic_same_day");
  const [rpadTransitDays, setRpadTransitDays] = useState<number>(5);
  const [manualServiceStr, setManualServiceStr] = useState<string>("2026-10-27");
  const [emiAmount, setEmiAmount] = useState<number>(24500);
  const [bouncedCycles, setBouncedCycles] = useState<number>(2);
  const [lendingStructure, setLendingStructure] = useState<LendingStructure>("direct_nbfc");
  const [referenceTodayStr, setReferenceTodayStr] = useState<string>("2026-11-14");

  // Batch CSV state
  const [csvInput, setCsvInput] = useState<string>(SAMPLE_CSV);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const instrumentId = useId();
  const reasonId = useId();
  const memoDateId = useId();
  const dispatchDateId = useId();
  const channelId = useId();
  const serviceDateId = useId();
  const emiId = useId();
  const cyclesId = useId();
  const structureId = useId();
  const todayId = useId();
  const csvId = useId();

  const effectiveServiceStr = useMemo(() => {
    if (deliveryChannel === "electronic_same_day") {
      return dispatchStr;
    }
    if (deliveryChannel === "rpad_refused_deemed") {
      return toISODate(addDays(parseISODate(dispatchStr), rpadTransitDays));
    }
    return manualServiceStr;
  }, [deliveryChannel, dispatchStr, rpadTransitDays, manualServiceStr]);

  const calc = useMemo(() => {
    return computeStatutoryDates(returnMemoStr, dispatchStr, effectiveServiceStr, referenceTodayStr);
  }, [returnMemoStr, dispatchStr, effectiveServiceStr, referenceTodayStr]);

  const totalExposure = Math.max(0, emiAmount) * Math.max(1, bouncedCycles);
  const isTechnicalReturn = returnReason === "99_technical";

  const statusBadge = useMemo(() => {
    if (!calc.noticeSentOnTime) {
      return {
        tone: "red",
        title: "30-Day Notice Window Lapsed",
        desc: `Notice dispatch (${formatDateIN(calc.dispatchDate)}) exceeds Day-30 cut-off (${formatDateIN(calc.noticeCutOff)}). Re-present e-NACH mandate under MSR Leathers rule to generate a fresh cause of action.`,
      };
    }
    if (calc.isFilingLapsed) {
      return {
        tone: "red",
        title: "30-Day Complaint Window Lapsed",
        desc: `Statutory filing deadline (${formatDateIN(calc.complaintDeadline)}) has passed. File Condonation of Delay application under PSS Act s.28(1)(b) proviso OR re-present active e-NACH mandate.`,
      };
    }
    if (calc.isReadyToFile) {
      return {
        tone: "emerald",
        title: `Ready for Magistrate Filing (${calc.filingDaysRemaining}d Left)`,
        desc: `15-day cure expired on ${formatDateIN(calc.cureExpiryDate)}. Cause of action arose ${formatDateIN(calc.causeOfActionDate)}. File s.25/s.138 complaint on or before ${formatDateIN(calc.complaintDeadline)}.`,
      };
    }
    if (calc.isInCurePeriod) {
      const cureDaysLeft = diffDays(calc.cureExpiryDate, parseISODate(referenceTodayStr));
      return {
        tone: "amber",
        title: `15-Day Cure Period Active (${cureDaysLeft}d Left)`,
        desc: `Borrower cure window runs until ${formatDateIN(calc.cureExpiryDate)}. Do not file Magistrate complaint before ${formatDateIN(calc.causeOfActionDate)} (Day 16) or it is premature.`,
      };
    }
    return {
      tone: "slate",
      title: "Notice Validly Dispatched — Awaiting Service",
      desc: `Notice sent within 30-day statutory cut-off (${formatDateIN(calc.noticeCutOff)}). Cure clock starts on delivery/deemed-service date.`,
    };
  }, [calc, referenceTodayStr]);

  // Batch CSV Parser
  const batchResults: BatchRowResult[] = useMemo(() => {
    const lines = csvInput
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length <= 1) return [];

    const rows: BatchRowResult[] = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",").map((c) => c.trim());
      if (cols.length < 4) continue;
      const [loanId, borrowerName, memoStr, dispStr, delMode = "Electronic", delDateStr = dispStr] = cols;
      if (!isValidISODate(memoStr) || !isValidISODate(dispStr)) continue;
      const validServiceStr = isValidISODate(delDateStr) ? delDateStr : dispStr;

      const rowCalc = computeStatutoryDates(memoStr, dispStr, validServiceStr, referenceTodayStr);

      let status: BatchRowResult["status"] = "DISPATCH_PENDING";
      let statusLabel = "Awaiting Service";
      if (!rowCalc.noticeSentOnTime) {
        status = "NOTICE_LAPSED";
        statusLabel = "Notice Lapsed (Re-present)";
      } else if (rowCalc.isFilingLapsed) {
        status = "FILING_LAPSED";
        statusLabel = "Filing Lapsed (Condonation / Re-present)";
      } else if (rowCalc.isReadyToFile) {
        status = "READY_TO_FILE";
        statusLabel = `Ready to File (${rowCalc.filingDaysRemaining}d left)`;
      } else if (rowCalc.isInCurePeriod) {
        status = "IN_CURE_PERIOD";
        statusLabel = "In 15-Day Cure";
      }

      rows.push({
        loanId,
        borrowerName,
        returnMemoDate: formatDateIN(rowCalc.returnMemoDate),
        noticeCutOff: formatDateIN(rowCalc.noticeCutOff),
        dispatchDate: formatDateIN(rowCalc.dispatchDate),
        deliveryMode: delMode,
        serviceDate: formatDateIN(rowCalc.serviceDate),
        cureExpiryDate: formatDateIN(rowCalc.cureExpiryDate),
        causeOfActionDate: formatDateIN(rowCalc.causeOfActionDate),
        complaintDeadline: formatDateIN(rowCalc.complaintDeadline),
        status,
        statusLabel,
      });
    }
    return rows;
  }, [csvInput, referenceTodayStr]);

  const handleCopySummary = () => {
    const statuteLabel =
      instrumentMode === "cheque_ni138"
        ? "NI Act 1881 Section 138 & 142"
        : "Payment and Settlement Systems (PSS) Act 2007 Section 25 & 28";

    const lines = [
      `LEGALRECOVERY.IN — ${statuteLabel.toUpperCase()} TIMELINE DOCKET`,
      `Instrument: ${instrumentMode} | Return Reason: ${returnReason} | Structure: ${lendingStructure}`,
      `Total Bounced Exposure: ${formatINR(totalExposure)} (${bouncedCycles} x ${formatINR(emiAmount)})`,
      `------------------------------------------------------------`,
      `1. NPCI Return Memo Receipt (Day 0 Excluded): ${formatDateIN(calc.returnMemoDate)}`,
      `2. Last Date for 30-Day Statutory Notice: ${formatDateIN(calc.noticeCutOff)}`,
      `3. Actual Notice Dispatch Date: ${formatDateIN(calc.dispatchDate)} (${calc.noticeSentOnTime ? "ON TIME" : "LAPSED"})`,
      `4. Delivery / Deemed Service Date (Day 0 Excluded): ${formatDateIN(calc.serviceDate)} (${deliveryChannel})`,
      `5. 15-Day Cure Expiry Date: ${formatDateIN(calc.cureExpiryDate)}`,
      `6. Cause of Action Accrual (Day 16): ${formatDateIN(calc.causeOfActionDate)}`,
      `7. Last Date for Magistrate Complaint (Day 30 Excl. COA): ${formatDateIN(calc.complaintDeadline)}`,
      `Status as of ${formatDateIN(parseISODate(referenceTodayStr))}: ${statusBadge.title}`,
    ];
    navigator.clipboard?.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCsv = () => {
    const header =
      "LoanID,BorrowerName,ReturnMemoDate,Notice30DayCutOff,DispatchDate,DeliveryMode,ServiceDate,Cure15DayExpiry,CauseOfActionDate,Complaint30DayDeadline,LitigationStatus\n";
    const body = batchResults
      .map((r) =>
        [
          r.loanId,
          `"${r.borrowerName}"`,
          r.returnMemoDate,
          r.noticeCutOff,
          r.dispatchDate,
          r.deliveryMode,
          r.serviceDate,
          r.cureExpiryDate,
          r.causeOfActionDate,
          r.complaintDeadline,
          `"${r.statusLabel}"`,
        ].join(",")
      )
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "section-25-enach-statutory-calendar.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="calculator-tool"
      aria-labelledby="calculator-tool-title"
      className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
            1
          </span>
          <div>
            <h2
              id="calculator-tool-title"
              className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
            >
              Section 25 e-NACH &amp; AutoPay Statutory Deadline Calculator
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              PSS Act 2007 s.25(1) &amp; s.28 &bull; Saketh India / Econ Antri Day-Exclusion Engine &bull; Single &amp; Batch CSV Modes
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("single")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "single"
                ? "bg-[#DC2626] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Single Mandate
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("batch")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "batch"
                ? "bg-[#DC2626] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Batch CSV Validator
          </button>
        </div>
      </div>

      {activeTab === "single" ? (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Inputs */}
          <div className="xl:col-span-6 space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Mandate &amp; Service Inputs
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={instrumentId} className="block text-xs font-bold text-slate-700 mb-1">
                  Instrument &amp; Statute
                </label>
                <select
                  id={instrumentId}
                  value={instrumentMode}
                  onChange={(e) => setInstrumentMode(e.target.value as InstrumentMode)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="enach_pss25">e-NACH / NACH Mandate (PSS s.25)</option>
                  <option value="upi_autopay_pss25">UPI AutoPay / SI (PSS s.25)</option>
                  <option value="cheque_ni138">Security / PDC Cheque (NI s.138)</option>
                </select>
              </div>

              <div>
                <label htmlFor={reasonId} className="block text-xs font-bold text-slate-700 mb-1">
                  NPCI / Bank Return Reason
                </label>
                <select
                  id={reasonId}
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value as ReturnReasonCode)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="01_funds">01 &ndash; Funds Insufficient</option>
                  <option value="02_arrangement">02 &ndash; Exceeds Arrangement</option>
                  <option value="04_cancelled">04 &ndash; Mandate Cancelled / Stopped</option>
                  <option value="08_closed">08 &ndash; Account Closed / Frozen</option>
                  <option value="99_technical">99 &ndash; Technical / Signature Mismatch</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={memoDateId} className="block text-xs font-bold text-slate-700 mb-1">
                  NPCI Return Memo Receipt Date
                </label>
                <input
                  id={memoDateId}
                  type="date"
                  value={returnMemoStr}
                  onChange={(e) => setReturnMemoStr(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={dispatchDateId} className="block text-xs font-bold text-slate-700 mb-1">
                  Legal Notice Dispatch Date
                </label>
                <input
                  id={dispatchDateId}
                  type="date"
                  value={dispatchStr}
                  onChange={(e) => setDispatchStr(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={channelId} className="block text-xs font-bold text-slate-700 mb-1">
                  Notice Service / Delivery Rule
                </label>
                <select
                  id={channelId}
                  value={deliveryChannel}
                  onChange={(e) => setDeliveryChannel(e.target.value as DeliveryChannel)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="electronic_same_day">Email + WhatsApp (Same-Day Receipt)</option>
                  <option value="rpad_pod">Speed Post RPAD (Actual POD Date)</option>
                  <option value="rpad_refused_deemed">RPAD Refused/Unclaimed (Deemed)</option>
                </select>
              </div>

              {deliveryChannel === "rpad_refused_deemed" ? (
                <div>
                  <label htmlFor={serviceDateId} className="block text-xs font-bold text-slate-700 mb-1">
                    Postal Transit Offset (Days)
                  </label>
                  <select
                    id={serviceDateId}
                    value={rpadTransitDays}
                    onChange={(e) => setRpadTransitDays(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                  >
                    <option value={3}>+3 Days (Metro Speed Post)</option>
                    <option value={5}>+5 Days (Standard Tier-2 RPAD)</option>
                    <option value={7}>+7 Days (Rural / Remote RPAD)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label htmlFor={serviceDateId} className="block text-xs font-bold text-slate-700 mb-1">
                    {deliveryChannel === "electronic_same_day"
                      ? "Electronic Receipt Date (Auto)"
                      : "RPAD POD Delivery Date"}
                  </label>
                  <input
                    id={serviceDateId}
                    type="date"
                    value={effectiveServiceStr}
                    disabled={deliveryChannel === "electronic_same_day"}
                    onChange={(e) => setManualServiceStr(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#DC2626] focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label htmlFor={emiId} className="block text-xs font-bold text-slate-700 mb-1">
                  EMI Amount (&rupee;)
                </label>
                <input
                  id={emiId}
                  type="number"
                  min={100}
                  step={500}
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={cyclesId} className="block text-xs font-bold text-slate-700 mb-1">
                  Bounced Cycles
                </label>
                <input
                  id={cyclesId}
                  type="number"
                  min={1}
                  max={24}
                  value={bouncedCycles}
                  onChange={(e) => setBouncedCycles(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={todayId} className="block text-xs font-bold text-slate-700 mb-1">
                  Audit Reference Date
                </label>
                <input
                  id={todayId}
                  type="date"
                  value={referenceTodayStr}
                  onChange={(e) => setReferenceTodayStr(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor={structureId} className="block text-xs font-bold text-slate-700 mb-1">
                Lender &amp; Co-Lending Structure
              </label>
              <select
                id={structureId}
                value={lendingStructure}
                onChange={(e) => setLendingStructure(e.target.value as LendingStructure)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
              >
                <option value="direct_nbfc">Direct NBFC / Fintech Payee</option>
                <option value="colending_poa">Co-Lending (CLM-1/CLM-2) with Servicing POA</option>
              </select>
            </div>
          </div>

          {/* Right Live Statutory Output */}
          <div className="xl:col-span-6 space-y-4">
            {/* Status Banner */}
            <div
              className={`rounded-2xl p-4 sm:p-5 border ${
                statusBadge.tone === "red"
                  ? "bg-red-50 border-red-200 text-red-950"
                  : statusBadge.tone === "emerald"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                  : statusBadge.tone === "amber"
                  ? "bg-amber-50 border-amber-200 text-amber-950"
                  : "bg-slate-100 border-slate-200 text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider">
                  Litigation Desk Verdict
                </span>
                <span className="text-xs font-mono font-bold">
                  Exposure: {formatINR(totalExposure)}
                </span>
              </div>
              <p className="text-base sm:text-lg font-black">{statusBadge.title}</p>
              <p className="text-xs leading-relaxed mt-1 opacity-90">{statusBadge.desc}</p>
            </div>

            {isTechnicalReturn && (
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900">
                <strong>Technical Return Alert:</strong> Section 25 PSS Act criminal liability applies primarily to insufficiency of funds, exceeds arrangement, or deliberate mandate cancellation/account closure. Verify whether bank technical error requires re-presentation rather than criminal notice.
              </div>
            )}

            {lendingStructure === "colending_poa" && (
              <div className="rounded-xl bg-slate-900 text-slate-100 p-3.5 text-xs">
                <strong className="text-red-400">Co-Lending Locus Standi Check:</strong> Ensure the Section 25 notice annexes the Bank&ndash;NBFC Servicing Power of Attorney (POA) and specifies the exact sponsor-bank payee whose e-NACH mandate bounced.
              </div>
            )}

            {/* 4 Statutory Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  1. 30-Day Notice Cut-Off (s.25(1)(b))
                </p>
                <p className="text-lg font-black text-slate-900 mt-1">
                  {formatDateIN(calc.noticeCutOff)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Day 1: {formatDateIN(calc.noticeDay1)} &bull;{" "}
                  <span className={calc.noticeSentOnTime ? "text-emerald-700 font-bold" : "text-[#DC2626] font-bold"}>
                    {calc.noticeSentOnTime ? "Dispatched Within 30d" : "Missed 30d Window"}
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  2. Effective Service Date (Day 0)
                </p>
                <p className="text-lg font-black text-slate-900 mt-1">
                  {formatDateIN(calc.serviceDate)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  {deliveryChannel === "electronic_same_day"
                    ? "Same-day BSA s.63 electronic delivery"
                    : deliveryChannel === "rpad_pod"
                    ? "Actual Speed Post RPAD POD receipt"
                    : `Deemed service (+${rpadTransitDays}d postal transit)`}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  3. 15-Day Cure Expiry (s.25(1)(c))
                </p>
                <p className="text-lg font-black text-amber-700 mt-1">
                  {formatDateIN(calc.cureExpiryDate)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Cause of Action arises Day 16: <strong>{formatDateIN(calc.causeOfActionDate)}</strong>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-3.5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  4. Magistrate Filing Deadline (s.28)
                </p>
                <p className="text-lg font-black text-white mt-1">
                  {formatDateIN(calc.complaintDeadline)}
                </p>
                <p className="text-[11px] text-slate-300 mt-1">
                  Day 1 of 30d filing: {formatDateIN(calc.complaintWindowDay1)} (Saketh rule)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={handleCopySummary}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {copied ? "Copied Statutory Docket!" : "Copy Timeline Docket"}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Dispatch s.25 Notice (&rupee;{basePrice}) &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors"
              >
                Bulk CSV Desk
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Batch CSV Validator Mode */
        <div className="space-y-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor={csvId} className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Paste NPCI / LMS Bounce CSV (Client-Side Only &mdash; Zero Data Leaves Browser)
              </label>
              <button
                type="button"
                onClick={() => setCsvInput(SAMPLE_CSV)}
                className="text-xs font-bold text-[#DC2626] hover:underline cursor-pointer self-start"
              >
                Reset Sample CSV
              </button>
            </div>
            <textarea
              id={csvId}
              rows={5}
              value={csvInput}
              onChange={(e) => setCsvInput(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 focus:border-[#DC2626] focus:outline-none"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-slate-500">
                Columns: <code>LoanID,BorrowerName,ReturnMemoDate(YYYY-MM-DD),NoticeDispatchDate,DeliveryMode,DeliveryDate,EMIAmount</code>
              </p>
              <button
                type="button"
                onClick={handleDownloadCsv}
                disabled={batchResults.length === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Export Validated Calendar CSV ({batchResults.length} Rows)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-3 font-bold">Loan ID</th>
                  <th className="p-3 font-bold">Borrower</th>
                  <th className="p-3 font-bold">Return Memo</th>
                  <th className="p-3 font-bold">30d Notice Cut-Off</th>
                  <th className="p-3 font-bold">Service Date</th>
                  <th className="p-3 font-bold">15d Cure Expiry</th>
                  <th className="p-3 font-bold">30d Filing Deadline</th>
                  <th className="p-3 font-bold">Desk Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {batchResults.map((row) => (
                  <tr key={row.loanId} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-slate-900">{row.loanId}</td>
                    <td className="p-3 font-semibold text-slate-800">{row.borrowerName}</td>
                    <td className="p-3 text-slate-600">{row.returnMemoDate}</td>
                    <td className="p-3 font-semibold text-slate-900">{row.noticeCutOff}</td>
                    <td className="p-3 text-slate-600">{row.serviceDate}</td>
                    <td className="p-3 font-semibold text-amber-700">{row.cureExpiryDate}</td>
                    <td className="p-3 font-bold text-slate-900">{row.complaintDeadline}</td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          row.status === "READY_TO_FILE"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : row.status === "IN_CURE_PERIOD"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-[#DC2626] border border-red-200"
                        }`}
                      >
                        {row.statusLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
