"use client";

import React, { useState } from "react";
import { RefundDelayReportData } from "@/data/reports/refundDataLoader";

interface RefundDelayDataDownloadProps {
  reportData: RefundDelayReportData;
}

export default function RefundDelayDataDownload({ reportData }: RefundDelayDataDownloadProps) {
  const [citationFormat, setCitationFormat] = useState<"apa" | "bibtex" | "harvard">("apa");
  const [copied, setCopied] = useState(false);

  const getCitationText = () => {
    switch (citationFormat) {
      case "apa":
        return `LegalRecovery Research. (2026). Refund Delay Index India: Days to Refund by Company (Post-Launch Benchmark Report Series). LegalRecovery.in. https://www.legalrecovery.in/reports/refund-delay-index-india`;
      case "bibtex":
        return `@report{legalrecovery2026refunddelay,
  title={Refund Delay Index India: Days to Refund by Company},
  author={{LegalRecovery Research Team}},
  year={2026},
  institution={LegalRecovery.in},
  url={https://www.legalrecovery.in/reports/refund-delay-index-india},
  note={Post-launch cohort initiated May 25, 2026; empirical verification active}
}`;
      case "harvard":
        return `LegalRecovery Research (2026) 'Refund Delay Index India: Days to Refund by Company', LegalRecovery.in. Available at: https://www.legalrecovery.in/reports/refund-delay-index-india (Accessed: 9 November 2026).`;
    }
  };

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadSchema = () => {
    const schemaDoc = {
      series: "LegalRecovery Refund Delay Index",
      identifier: "LR-165",
      cohort: "May 25, 2026 – Present",
      status: "compiling",
      dataDictionary: [
        { variable: "company", definition: "Corporate entity or platform against which legal notice was dispatched" },
        { variable: "sector", definition: "Commercial vertical (E-Commerce, Aviation, FinTech, EdTech, Electronics)" },
        { variable: "statutoryLimit", definition: "Statutory SLA mandated under governing Indian regulations" },
        { variable: "preNoticeDelayDays", definition: "Calendar days between initial refund request and advocate notice service" },
        { variable: "postNoticeResolutionDays", definition: "Business days between notice delivery and verified inward refund credit" },
        { variable: "noticeResolutionRate", definition: "Percentage of claims settled pre-litigation within 15-day statutory window" },
      ],
      sectorsTracked: reportData.sectors.map((s) => ({
        name: s.name,
        regulator: s.regulator,
        statutoryLimit: s.statutoryLimit,
        primaryCause: s.primaryCause,
      })),
      statutoryFramework: [
        "Consumer Protection Act, 2019 (Act No. 35 of 2019)",
        "Consumer Protection (E-Commerce) Rules, 2020",
        "DGCA Civil Aviation Requirements (CAR) Section 3 Series M Part II",
        "RBI Failed Transaction TAT Harmonisation Circular DPSS.CO.PD No.629",
      ],
    };

    const jsonContent = JSON.stringify(schemaDoc, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `legalrecovery-refund-index-methodology-2026.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 px-2.5 py-1 rounded-full">
            Open Research Asset • CC BY-ND 4.0
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
            Research Citation &amp; Methodology Schema
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Methodological framework and variable definitions for academic researchers, legal scholars, consumer journalists, and regulatory authorities.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownloadSchema}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer shadow-lg shadow-red-900/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Methodology Schema (JSON)
        </button>
      </div>

      {/* Citation Box */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300">Format:</span>
            <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs">
              {(["apa", "bibtex", "harvard"] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider text-[10px] transition-colors ${
                    citationFormat === fmt
                      ? "bg-red-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyCitation}
            className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Citation
              </>
            )}
          </button>
        </div>

        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {getCitationText()}
        </pre>
      </div>

      <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-2">
        <p>
          Data integrity: LegalRecovery commenced operations on May 25, 2026. Production dataset ingestion covers cases post-launch.
        </p>
        <span className="text-slate-500 font-mono">Series ID: LR-165</span>
      </div>
    </div>
  );
}
