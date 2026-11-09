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
  lastUpdated,
}: LegalNoticeDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadSchema = () => {
    const schemaDoc = {
      series: "LegalRecovery Legal Notice Outcomes Study",
      identifier: "LR-166",
      cohort: "May 25, 2026 – Present (Post-Launch Ingestion)",
      status: "compiling",
      dataDictionary: [
        { variable: "disputeCategory", definition: "Category of dispute (Salary/FnF, Consumer, Cheque Bounce, Tenancy, B2B, RERA)" },
        { variable: "primaryStatutoryLeverage", definition: "Governing statutory sections cited in advocate notice" },
        { variable: "cureWindowDays", definition: "Statutory notice cure period (15 days under NI Act / General Clauses Act)" },
        { variable: "escalationForum", definition: "Competent judicial forum or tribunal if notice is unheeded" },
      ],
      disputeSegmentsTracked: segments.map((s) => ({
        id: s.id,
        name: s.name,
        primaryLeverage: s.primaryLeverage,
        commonDebtorResponse: s.commonDebtorResponse,
        escalationForum: s.escalationForum,
      })),
      statutoryFramework: [
        "Negotiable Instruments Act, 1881 — Section 138",
        "Consumer Protection Act, 2019 — Section 35 & 2(11)",
        "Code on Wages, 2019 — Section 17(2)",
        "MSMED Act, 2006 — Section 15 & 16",
        "General Clauses Act, 1897 — Section 27",
        "Bharatiya Sakshya Adhiniyam, 2023 — Section 63",
      ],
    };

    const jsonContent = JSON.stringify(schemaDoc, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `legalrecovery_notice_study_schema_${lastUpdated}.json`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
  note = {Post-launch cohort initiated May 25, 2026; empirical verification active}
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
            Download Study Schema &amp; Citation Metadata
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Schema: Schema.org/Dataset &bull; License: CC BY-NC 4.0 &bull; Post-May 2026 Cohort
          </p>
        </div>

        <button
          type="button"
          onClick={downloadSchema}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-all shadow-lg shadow-red-900/40 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Study Schema (JSON)
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
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "apa" ? "✓ Copied APA" : "Copy APA"}
          </button>
          <button
            type="button"
            onClick={() => copyCitation("bibtex")}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "bibtex" ? "✓ Copied BibTeX" : "Copy BibTeX"}
          </button>
        </div>
      </div>
    </div>
  );
}
