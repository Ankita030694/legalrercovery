"use client";

import React, { useState } from "react";
import {
  EpcBenchmarkEntry,
  PaymentTermBenchmark,
  TradeCorridorBenchmark,
} from "@/data/reports/exporterDefaultsReportLoader";

interface ExporterReportDataDownloadProps {
  paymentTerms: PaymentTermBenchmark[];
  tradeCorridors: TradeCorridorBenchmark[];
  epcMatrix: EpcBenchmarkEntry[];
  lastUpdated: string;
}

export default function ExporterReportDataDownload({
  paymentTerms,
  tradeCorridors,
  epcMatrix,
  lastUpdated,
}: ExporterReportDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadDataset = () => {
    const payload = {
      reportId: "B2B-189",
      series:
        "2026–2027 Indian Export Receivables Risk Report: Default Rates by Trade Corridor, Payment Term & EDPMS Closure",
      cohort: "May 25, 2026 – Present (Post-Launch Export Cohort Telemetry)",
      status: "compiling",
      paymentTerms,
      tradeCorridors,
      epcMatrix,
      statutoryAnchors: [
        "Foreign Exchange Management Act (FEMA), 1999 — Section 7 & 8",
        "RBI Master Direction on Export of Goods and Services — Para C.20, C.23 & C.24",
        "Customs Act, 1962 — Section 75 & Drawback Rules, 2017 Rule 18(2)",
        "ICC Uniform Customs and Practice for Documentary Credits (UCP 600) — Art. 14 & 16",
        "Code of Civil Procedure, 1908 — Section 44A (Reciprocating Territories)",
        "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Evidence)",
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
      `indian_exporter_payment_defaults_edpms_report_${lastUpdated}.json`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyCitation = (type: "apa" | "bibtex") => {
    const citation =
      type === "apa"
        ? `LegalRecovery Research Bureau. (2026). 2026–2027 Indian Export Receivables Risk Report: Default Rates by Trade Corridor, Payment Term (CAD vs DA vs Open Account) & EDPMS Closure. LegalRecovery.in. https://www.legalrecovery.in/reports/indian-exporter-payment-defaults-edpms-trends-report`
        : `@techreport{legalrecovery_exporter_edpms_2026,
  author = {LegalRecovery Research Bureau},
  title = {2026--2027 Indian Export Receivables Risk Report: Default Rates by Trade Corridor, Payment Term (CAD vs DA vs Open Account) & EDPMS Closure},
  institution = {LegalRecovery.in},
  year = {2026},
  url = {https://www.legalrecovery.in/reports/indian-exporter-payment-defaults-edpms-trends-report}
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
            Open EPC &amp; Trade Media Dataset (B2B-189)
          </span>
          <p className="text-xl sm:text-2xl font-black text-white">
            Download Export Risk &amp; EDPMS Schema (JSON)
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Schema.org/Dataset &bull; CC BY-NC 4.0 &bull; Prepared for FIEO, EEPC, APEDA, CHEMEXCIL &amp; AEPC Members
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
          Download Dataset Schema (JSON)
        </button>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Cite This Study (Trade Journals, EPC Circulars &amp; CFO Memos)
        </span>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed break-all">
          LegalRecovery Research Bureau. (2026). 2026–2027 Indian Export Receivables Risk Report: Default Rates by Trade Corridor, Payment Term (CAD vs DA vs Open Account) &amp; EDPMS Closure. LegalRecovery.in. https://www.legalrecovery.in/reports/indian-exporter-payment-defaults-edpms-trends-report
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
