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
        return `LegalRecovery Research. (2026). Refund Delay Index India: Days to Refund by Company (Annual & Quarterly Benchmark Report). LegalRecovery.in. https://www.legalrecovery.in/reports/refund-delay-index-india`;
      case "bibtex":
        return `@report{legalrecovery2026refunddelay,
  title={Refund Delay Index India: Days to Refund by Company},
  author={{LegalRecovery Research Team}},
  year={2026},
  institution={LegalRecovery.in},
  url={https://www.legalrecovery.in/reports/refund-delay-index-india},
  note={Sample: 4,820 consumer refund claims across India}
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

  const handleDownloadCsv = () => {
    const headers = [
      "Company",
      "Sector",
      "Sample Size",
      "Pre-Notice Median Days",
      "Post-Notice Median Days",
      "Notice Resolution Rate (%)",
      "Primary Dispute Reason",
      "Designated Notice Target",
    ];

    const rows = reportData.companyBenchmarks.map((b) => [
      `"${b.company}"`,
      `"${b.sector}"`,
      b.sampleSize,
      b.medianPreNoticeDays,
      b.medianPostNoticeDays,
      b.resolutionRate,
      `"${b.primaryDisputeReason.replace(/"/g, '""')}"`,
      `"${b.commonEscalationNoticeTarget.replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `legalrecovery-refund-delay-index-india-2026.csv`);
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
            Open Data Asset • CC BY-ND 4.0
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
            Download Index Dataset &amp; Academic Citation
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Empirical benchmark dataset is freely accessible for academic researchers, legal scholars, consumer journalists, and regulatory authorities.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownloadCsv}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer shadow-lg shadow-red-900/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Full CSV (13 Benchmarks)
        </button>
      </div>

      {/* Citation Box */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Cite This Report:
            </span>
            <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
              {(["apa", "bibtex", "harvard"] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md uppercase transition-colors ${
                    citationFormat === fmt
                      ? "bg-slate-700 text-white shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
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
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Citation</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap select-all">
          {getCitationText()}
        </div>
      </div>
    </div>
  );
}
