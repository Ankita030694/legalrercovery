"use client";

import React, { useState } from "react";
import { ChannelBenchmark, DpdBucketBenchmark } from "@/data/reports/nbfcBenchmarksLoader";

interface NbfcBenchmarksDataDownloadProps {
  dpdBuckets: DpdBucketBenchmark[];
  channelBenchmarks: ChannelBenchmark[];
  lastUpdated: string;
}

export default function NbfcBenchmarksDataDownload({
  dpdBuckets,
  channelBenchmarks,
  lastUpdated,
}: NbfcBenchmarksDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadDataset = () => {
    const payload = {
      reportId: "B2B-036",
      series: "2026–2027 India NBFC & Fintech Pre-Litigation Recovery Benchmark Study",
      cohort: "May 25, 2026 – Present (Post-Launch Institutional Telemetry)",
      status: "compiling",
      dpdBuckets,
      channelBenchmarks,
      statutoryAnchors: [
        "Payment and Settlement Systems Act, 2007 — Section 25 & 28",
        "Negotiable Instruments Act, 1881 — Section 138 & 143A",
        "Bharatiya Sakshya Adhiniyam, 2023 — Section 63",
        "General Clauses Act, 1897 — Section 27",
        "Arbitration and Conciliation Act, 1996 — Section 12(5) & 21",
        "SARFAESI Act, 2002 — Section 13(2)",
      ],
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `nbfc_digital_lending_recovery_benchmarks_${lastUpdated}.json`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyCitation = (type: "apa" | "bibtex") => {
    const citation =
      type === "apa"
        ? `LegalRecovery Research Bureau. (2026). 2026–2027 India NBFC & Fintech Pre-Litigation Recovery Benchmark Study: Cure Rates Across Email, WhatsApp & Speed Post Waves. LegalRecovery.in. https://www.legalrecovery.in/reports/nbfc-digital-lending-legal-recovery-benchmarks-india`
        : `@techreport{legalrecovery_nbfc_benchmarks_2026,
  author = {LegalRecovery Research Bureau},
  title = {2026--2027 India NBFC & Fintech Pre-Litigation Recovery Benchmark Study: Cure Rates Across Email, WhatsApp & Speed Post Waves},
  institution = {LegalRecovery.in},
  year = {2026},
  url = {https://www.legalrecovery.in/reports/nbfc-digital-lending-legal-recovery-benchmarks-india}
}`;

    navigator.clipboard.writeText(citation).then(() => {
      setCopiedFormat(type);
      setTimeout(() => setCopiedFormat(null), 3000);
    });
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-[10px] font-black tracking-widest uppercase text-red-400 block mb-1">
            Open Research &amp; Press Dataset (B2B-036)
          </span>
          <p className="text-xl sm:text-2xl font-black text-white">
            Download NBFC Benchmark Schema &amp; Citation Metadata
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Schema.org/Dataset &bull; CC BY-NC 4.0 &bull; Post-May 2026 Institutional Cohort
          </p>
        </div>

        <button
          type="button"
          onClick={downloadDataset}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-all shadow-lg shadow-red-900/40 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Benchmark Schema (JSON)
        </button>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Cite This Benchmark Study (Banking &amp; Fintech Media)
        </span>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed break-all">
          LegalRecovery Research Bureau. (2026). 2026–2027 India NBFC &amp; Fintech Pre-Litigation Recovery Benchmark Study: Cure Rates Across Email, WhatsApp &amp; Speed Post Waves. LegalRecovery.in. https://www.legalrecovery.in/reports/nbfc-digital-lending-legal-recovery-benchmarks-india
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => copyCitation("apa")}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "apa" ? "Copied APA ✓" : "Copy APA Citation"}
          </button>
          <button
            type="button"
            onClick={() => copyCitation("bibtex")}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            {copiedFormat === "bibtex" ? "Copied BibTeX ✓" : "Copy BibTeX"}
          </button>
        </div>
      </div>
    </div>
  );
}
