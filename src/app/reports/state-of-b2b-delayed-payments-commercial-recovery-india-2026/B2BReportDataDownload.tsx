"use client";

import React, { useState } from "react";
import { IndustryBenchmark, ForumBenchmark } from "@/data/reports/b2bDelayedPaymentsLoader";

interface B2BReportDataDownloadProps {
  industries: IndustryBenchmark[];
  forums: ForumBenchmark[];
  lastUpdated: string;
}

export default function B2BReportDataDownload({
  industries,
  forums,
  lastUpdated,
}: B2BReportDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<"apa" | "bibtex" | null>(null);

  const downloadJsonDataset = () => {
    const payload = {
      reportId: "B2B-300",
      title: "State of B2B Delayed Payments & Commercial Recovery in India (2026–27)",
      publisher: "LegalRecovery Research Bureau",
      url: "https://www.legalrecovery.in/reports/state-of-b2b-delayed-payments-commercial-recovery-india-2026",
      license: "CC BY-NC 4.0",
      lastUpdated,
      rbiBankRatePercent: 6.75,
      msmeSection16CompoundRatePercent: 20.25,
      industries,
      forums,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `legalrecovery_b2b_25_industry_benchmark_${lastUpdated}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadCsvMatrix = () => {
    const headers = [
      "Industry Code",
      "Sector",
      "Cluster",
      "Statutory Credit Window",
      "DSO Risk Tier",
      "Primary Statute",
      "Secondary Remedy",
      "Key Evidence (BSA s.63)",
      "Pre-Litigation Cure Trigger",
    ];
    const escapeCsv = (val: string) => `"${val.replace(/"/g, '""')}"`;
    const rows = industries.map((item) =>
      [
        item.code,
        item.sector,
        item.cluster,
        item.statutoryCreditWindow,
        item.dsoRiskTier,
        item.primaryStatute,
        item.secondaryRemedy,
        item.keyEvidence,
        item.cureTrigger,
      ]
        .map(escapeCsv)
        .join(",")
    );
    const csvContent = [headers.map(escapeCsv).join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `legalrecovery_b2b_25_industry_dso_matrix_${lastUpdated}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyCitation = (type: "apa" | "bibtex") => {
    const text =
      type === "apa"
        ? `LegalRecovery Research Bureau. (2026). State of B2B Delayed Payments & Commercial Recovery in India (2026–27): 25-Industry Statutory Benchmark Study. LegalRecovery.in. https://www.legalrecovery.in/reports/state-of-b2b-delayed-payments-commercial-recovery-india-2026`
        : `@techreport{legalrecovery_b2b_2026,
  author = {LegalRecovery Research Bureau},
  title = {State of B2B Delayed Payments and Commercial Recovery in India (2026--27)},
  institution = {LegalRecovery.in},
  year = {2026},
  url = {https://www.legalrecovery.in/reports/state-of-b2b-delayed-payments-commercial-recovery-india-2026}
}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedFormat(type);
      setTimeout(() => setCopiedFormat(null), 2500);
    });
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-[10px] font-black tracking-widest uppercase text-red-400 block mb-1">
            Open-Access Economist &amp; Press Dataset
          </span>
          <p className="text-lg sm:text-xl font-black text-white">
            Download 25-Industry Benchmark Dataset (CSV &amp; JSON)
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Schema.org/Dataset &bull; CC BY-NC 4.0 &bull; Updated {lastUpdated}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={downloadCsvMatrix}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors cursor-pointer"
          >
            Download 25-Sector CSV
          </button>
          <button
            type="button"
            onClick={downloadJsonDataset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors cursor-pointer"
          >
            Download JSON Schema
          </button>
        </div>
      </div>

      <div className="space-y-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Press &amp; Academic Citation
        </span>
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed break-all">
          LegalRecovery Research Bureau. (2026). State of B2B Delayed Payments &amp; Commercial Recovery in India (2026–27). LegalRecovery.in. https://www.legalrecovery.in/reports/state-of-b2b-delayed-payments-commercial-recovery-india-2026
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => copyCitation("apa")}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
          >
            {copiedFormat === "apa" ? "Copied APA Citation" : "Copy APA Citation"}
          </button>
          <button
            type="button"
            onClick={() => copyCitation("bibtex")}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
          >
            {copiedFormat === "bibtex" ? "Copied BibTeX" : "Copy BibTeX"}
          </button>
        </div>
      </div>
    </div>
  );
}
