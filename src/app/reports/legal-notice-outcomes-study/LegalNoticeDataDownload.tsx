"use client";

import React, { useState } from "react";
import { DisputeSegment, TimeframeComparison } from "@/data/reports/legalNoticeOutcomesLoader";

interface LegalNoticeDataDownloadProps {
  segments: DisputeSegment[];
  timeframes: TimeframeComparison[];
  lastUpdated: string;
}

export default function LegalNoticeDataDownload({
  segments,
  timeframes,
  lastUpdated,
}: LegalNoticeDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadCSV = () => {
    const headers = [
      "Dispute_Segment_ID",
      "Dispute_Category_Name",
      "Tracked_Sample_Count",
      "Settlement_Rate_15_Days_Pct",
      "Settlement_Rate_30_Days_Pct",
      "Settlement_Rate_60_Days_Pct",
      "Total_PreLitigation_Settlement_Pct",
      "Median_Days_To_Settlement",
      "Median_Disputed_Claim_INR",
      "Primary_Statutory_Leverage",
      "Escalation_Forum",
    ];

    const rows = segments.map((s) => [
      `"${s.id}"`,
      `"${s.name.replace(/"/g, '""')}"`,
      s.sampleCount,
      s.settlement15Days,
      s.settlement30Days,
      s.settlement60Days,
      s.totalSettledRate,
      s.medianDays,
      s.medianClaim,
      `"${s.primaryLeverage.replace(/"/g, '""')}"`,
      `"${s.escalationForum.replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `legalrecovery_legal_notice_outcomes_study_${lastUpdated}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyCitation = (type: "apa" | "bibtex") => {
    const citation =
      type === "apa"
        ? `LegalRecovery Research Bureau. (2026). Legal Notice Outcomes Study: Settlement Rates by Dispute Type (Edition 2026.1). LegalRecovery.in. https://www.legalrecovery.in/reports/legal-notice-outcomes-study`
        : `@misc{legalrecovery_notice_study_2026,
  author = {LegalRecovery Research Bureau},
  title = {Legal Notice Outcomes Study: Settlement Rates by Dispute Type},
  year = {2026},
  url = {https://www.legalrecovery.in/reports/legal-notice-outcomes-study},
  note = {Dataset edition 2026.1; N=6,740 tracked legal notices}
}`;

    navigator.clipboard.writeText(citation).then(() => {
      setCopiedFormat(type);
      setTimeout(() => setCopiedFormat(null), 3000);
    });
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-[10px] font-black tracking-widest uppercase text-red-400 block mb-1">
            Open Access Research Asset
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Download Study Dataset &amp; Citation Metadata
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Format: RFC 4180 CSV &bull; Schema: Schema.org/Dataset &bull; License: CC BY-NC 4.0
          </p>
        </div>

        <button
          type="button"
          onClick={downloadCSV}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-all shadow-lg shadow-red-900/40 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Dataset (.CSV)
        </button>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Cite This Report
        </span>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed break-all">
          LegalRecovery Research Bureau. (2026). Legal Notice Outcomes Study: Settlement Rates by Dispute Type (Edition 2026.1). LegalRecovery.in. https://www.legalrecovery.in/reports/legal-notice-outcomes-study
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => copyCitation("apa")}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "apa" ? "✓ APA Copied to Clipboard" : "Copy APA Citation"}
          </button>
          <button
            type="button"
            onClick={() => copyCitation("bibtex")}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "bibtex" ? "✓ BibTeX Copied" : "Copy BibTeX Entry"}
          </button>
        </div>
      </div>
    </div>
  );
}
