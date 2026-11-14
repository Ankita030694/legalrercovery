"use client";

import React, { useState } from "react";
import {
  PayerSegmentBenchmark,
  BedCapacityBenchmark,
} from "@/data/reports/healthcareTpaReportLoader";

interface HealthcareTpaDataDownloadProps {
  payerSegments: PayerSegmentBenchmark[];
  benchmarksByBedCapacity: BedCapacityBenchmark[];
  lastUpdated: string;
}

export default function HealthcareTpaDataDownload({
  payerSegments,
  benchmarksByBedCapacity,
  lastUpdated,
}: HealthcareTpaDataDownloadProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadDataset = () => {
    const payload = {
      reportId: "B2B-052",
      series: "The 2026–2027 Indian Hospital Receivables & TPA/CGHS Delay Index",
      license: "Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)",
      publisher: "LegalRecovery.in Healthcare RCM Research Bureau",
      edition: "2026–2027 Healthcare Industry Benchmark Edition",
      lastUpdated,
      payerSegments,
      benchmarksByBedCapacity,
      statutoryAnchors: [
        "Insurance Regulatory and Development Authority of India (IRDAI) Master Circular on Health Insurance Business (Bank Rate + 2% Penal Interest)",
        "Code of Civil Procedure, 1908 — Section 80 (Mandatory Notice to Government Instrumentalities) & Order XXXVII (Summary Suits)",
        "Constitution of India — Article 21 (Right to Liberty; Strict Bar on Detaining Patients or Withholding Dead Bodies)",
        "Indian Contract Act, 1872 — Section 126 (Contract of Guarantee) & Section 73 (Compensation for Breach of Contract)",
        "Negotiable Instruments Act, 1881 — Section 4 (Promissory Note) & Section 138 (Dishonour of Cheque)",
        "Commercial Courts Act, 2015 — Section 2(1)(c)(xx) & Section 12A (Mandatory Pre-Institution Mediation)",
        "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records)",
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
      `indian_hospital_receivables_tpa_cghs_dso_index_${lastUpdated}.json`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyCitation = (type: "apa" | "bibtex") => {
    const citation =
      type === "apa"
        ? `LegalRecovery Research Bureau. (2026). The 2026–2027 Indian Hospital Receivables & TPA/CGHS Delay Index: DSO Benchmarks Across Private Healthcare. LegalRecovery.in. https://www.legalrecovery.in/reports/healthcare-tpa-settlement-delay-hospital-receivables-india`
        : `@techreport{legalrecovery_hospital_dso_index_2026,
  author = {LegalRecovery Research Bureau},
  title = {The 2026--2027 Indian Hospital Receivables \\& TPA/CGHS Delay Index: DSO Benchmarks Across Private Healthcare},
  institution = {LegalRecovery.in},
  year = {2026},
  url = {https://www.legalrecovery.in/reports/healthcare-tpa-settlement-delay-hospital-receivables-india},
  note = {Accessed: 2026-11-14}
}`;

    navigator.clipboard.writeText(citation).then(() => {
      setCopiedFormat(type);
      setTimeout(() => setCopiedFormat(null), 2500);
    });
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 mb-2">
            Open Access Research Asset &bull; CC BY-NC 4.0
          </span>
          <p className="text-xl sm:text-2xl font-black text-white">
            Download Schema.org/Dataset &amp; Citation Sheet
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Free machine-readable JSON data for hospital CFOs, AHPI/IMA researchers, healthcare journalists, and equity analysts.
          </p>
        </div>

        <button
          type="button"
          onClick={downloadDataset}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-colors shadow-lg shadow-emerald-900/30 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Raw JSON Dataset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* APA Citation */}
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/70 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                APA 7th Edition Citation
              </span>
              {copiedFormat === "apa" && (
                <span className="text-[10px] text-emerald-400 font-bold">
                  Copied to Clipboard!
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 font-mono leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              LegalRecovery Research Bureau. (2026). The 2026–2027 Indian Hospital Receivables &amp; TPA/CGHS Delay Index: DSO Benchmarks Across Private Healthcare. LegalRecovery.in.
            </p>
          </div>
          <button
            type="button"
            onClick={() => copyCitation("apa")}
            className="self-start px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-colors cursor-pointer"
          >
            Copy APA Citation
          </button>
        </div>

        {/* BibTeX Citation */}
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/70 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                BibTeX Format (Academic / Policy Papers)
              </span>
              {copiedFormat === "bibtex" && (
                <span className="text-[10px] text-emerald-400 font-bold">
                  Copied to Clipboard!
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 font-mono leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 overflow-x-auto whitespace-pre">
              {`@techreport{legalrecovery_hospital_dso_2026,
  author = {LegalRecovery Research Bureau},
  title  = {Indian Hospital Receivables Index},
  year   = {2026}
}`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => copyCitation("bibtex")}
            className="self-start px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-colors cursor-pointer"
          >
            Copy BibTeX
          </button>
        </div>
      </div>
    </div>
  );
}
