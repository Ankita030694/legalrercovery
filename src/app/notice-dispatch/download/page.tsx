"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileArchive,
  Download,
  ArrowDownToLine,
  ShieldCheck,
  Clock,
  RefreshCw,
  FileText
} from "lucide-react";

function DownloadBatchContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"initializing" | "generating" | "completed" | "error">("initializing");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [downloadBlobUrl, setDownloadBlobUrl] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string>("Notice_Dispatch_Batch.zip");
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [progressStep, setProgressStep] = useState<number>(1);

  const fetchTriggeredRef = useRef(false);

  // Timer for elapsed seconds while generating
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === "generating") {
      timer = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status]);

  // Dynamic step simulation to keep user engaged during PDF generation
  useEffect(() => {
    let stepTimer: NodeJS.Timeout;
    if (status === "generating") {
      stepTimer = setInterval(() => {
        setProgressStep(prev => (prev < 4 ? prev + 1 : prev));
      }, 7000);
    }
    return () => clearInterval(stepTimer);
  }, [status]);

  // Auto-trigger background generation and download
  useEffect(() => {
    if (!token || token.length < 16) {
      setStatus("error");
      setErrorMessage("Invalid or missing dispatch authorization token. Please check your email link.");
      return;
    }

    if (fetchTriggeredRef.current) return;
    fetchTriggeredRef.current = true;

    setStatus("generating");

    const startDownload = async () => {
      try {
        const res = await fetch(`/api/notice-dispatch/download-zip?token=${encodeURIComponent(token)}`);

        if (!res.ok) {
          let errText = "Failed to generate batch download package.";
          try {
            const body = await res.text();
            if (body.includes("<p>")) {
              const match = body.match(/<p>(.*?)<\/p>/);
              if (match && match[1]) errText = match[1];
            } else {
              const json = JSON.parse(body);
              if (json.error) errText = json.error;
            }
          } catch {
            // keep fallback errText
          }
          setStatus("error");
          setErrorMessage(errText);
          return;
        }

        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        // Resolve filename from Content-Disposition header if present
        const cd = res.headers.get("content-disposition");
        let filename = "Notice_Dispatch_Batch.zip";
        if (cd) {
          const match = cd.match(/filename="?([^";]+)"?/);
          if (match && match[1]) {
            filename = match[1].trim();
          }
        }

        setDownloadBlobUrl(blobUrl);
        setDownloadFilename(filename);

        // Automatically trigger browser download
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setStatus("completed");
      } catch (err: any) {
        console.error("Batch download error:", err);
        setStatus("error");
        setErrorMessage(err?.message || "A network error occurred while generating the ZIP archive.");
      }
    };

    startDownload();
  }, [token]);

  const handleManualDownload = () => {
    if (downloadBlobUrl) {
      const a = document.createElement("a");
      a.href = downloadBlobUrl;
      a.download = downloadFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (token) {
      window.location.href = `/api/notice-dispatch/download-zip?token=${encodeURIComponent(token)}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] flex flex-col justify-between items-center px-4 py-8 sm:py-14 text-[#2A2421]">
      {/* Brand Header */}
      <div className="w-full max-w-xl flex flex-col items-center text-center mb-6">
        <img
          src="/notices/header logo AMA .png"
          alt="AMA Legal Solutions"
          className="h-14 sm:h-16 w-auto object-contain mb-4"
        />
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#FDF7E7] text-[#8C6806] border border-[#F3DB9A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D29E0D]" />
          Physical Dispatch Fulfillment Desk
        </div>
      </div>

      {/* Main Status Container */}
      <div className="w-full max-w-xl bg-white border-2 border-[#D29E0D] rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#D29E0D]" />

        {/* 1. Generating / Loading State */}
        {(status === "initializing" || status === "generating") && (
          <div className="flex flex-col items-center text-center py-4">
            {/* Animated Golden Pulse Ring */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-[#FFF9E6] border-2 border-[#F3DB9A] flex items-center justify-center animate-pulse">
                <Loader2 className="w-10 h-10 text-[#D29E0D] animate-spin" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#D29E0D] text-white p-1.5 rounded-full shadow-md">
                <ArrowDownToLine className="w-4 h-4 animate-bounce" />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-[#2A2421] mb-2 tracking-tight">
              Generating Notice Package
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#8C6806] bg-[#FFFDF7] border border-[#F3DB9A] rounded-xl px-5 py-3.5 mb-6 max-w-md">
              ⏳ <strong className="text-[#2A2421]">Hold on,</strong> this download will take a few minutes as high-resolution legal notice PDFs and postal address manifests are being rendered...
            </p>

            {/* Compilation Stages */}
            <div className="w-full bg-[#FFFDF7] border border-[#F6E6BC] rounded-xl p-4 sm:p-5 text-left mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#8C6806] pb-2 border-b border-[#F6E6BC]">
                <span>Compilation Status</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Elapsed: {elapsedSeconds}s
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D29E0D] shrink-0" />
                  <span className="font-semibold text-[#2A2421]">Authorized batch access verified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {progressStep >= 2 ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D29E0D] shrink-0" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-[#D29E0D] animate-spin shrink-0" />
                  )}
                  <span className={progressStep >= 2 ? "font-semibold text-[#2A2421]" : "font-medium text-[#8C6806]"}>
                    Rendering individual legal notice PDFs...
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {progressStep >= 3 ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D29E0D] shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-[#D29E0D]/40 shrink-0" />
                  )}
                  <span className={progressStep >= 3 ? "font-semibold text-[#2A2421]" : "text-[#A89F91]"}>
                    Generating envelope address manifest CSV
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {progressStep >= 4 ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D29E0D] shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-[#D29E0D]/40 shrink-0" />
                  )}
                  <span className={progressStep >= 4 ? "font-semibold text-[#2A2421]" : "text-[#A89F91]"}>
                    Packaging into compressed ZIP archive
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8C6806]/80">
              Please do not close or refresh this tab while the files are being compiled.
            </p>
          </div>
        )}

        {/* 2. Completed State */}
        {status === "completed" && (
          <div className="flex flex-col items-center text-center py-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#ECFDF5] border-2 border-[#A7F3D0] flex items-center justify-center mb-5 text-[#059669] shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#065F46] mb-2 tracking-tight">
              Your download is completed!
            </h1>

            <p className="text-sm sm:text-base font-medium text-[#2A2421] mb-6 max-w-md">
              The physical notice archive <span className="font-bold text-[#D29E0D]">({downloadFilename})</span> containing individual PDFs and the envelope address manifest has been saved to your device.
            </p>

            <div className="w-full bg-[#FFFDF7] border-2 border-[#F3DB9A] rounded-xl p-4 sm:p-5 text-left mb-6 space-y-2">
              <div className="text-xs font-bold text-[#8C6806] uppercase tracking-wider">Package Contents:</div>
              <div className="text-xs sm:text-sm text-[#2A2421] space-y-1 font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D29E0D]" />
                  <span>High-resolution notice PDFs (ready for single/bulk printing)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileArchive className="w-4 h-4 text-[#D29E0D]" />
                  <span><code className="bg-white px-1.5 py-0.5 rounded border border-[#E8DFCE] text-xs font-mono font-bold">00_ENVELOPE_ADDRESS_MANIFEST.csv</code> for dispatch labels</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleManualDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D29E0D] hover:bg-[#B58406] text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#D29E0D]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Click here if your download didn't start automatically
            </button>
          </div>
        )}

        {/* 3. Error State */}
        {status === "error" && (
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-20 h-20 rounded-full bg-[#FEF2F2] border-2 border-[#FECACA] flex items-center justify-center mb-5 text-[#DC2626]">
              <AlertCircle className="w-12 h-12" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-[#991B1B] mb-2 tracking-tight">
              Unable to Download Batch
            </h1>

            <p className="text-sm font-medium text-[#7F1D1D] bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-4 mb-6 max-w-md">
              {errorMessage}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D29E0D] hover:bg-[#B58406] text-white font-bold text-sm rounded-xl shadow transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="w-full max-w-xl text-center mt-6 text-xs text-[#8C6806] font-semibold">
        AMA Legal Solutions • Dispatch Management Desk
        <div className="text-[11px] text-[#A67D0A] font-normal mt-0.5">
          Confidential &amp; Privileged Physical Notice Fulfillment
        </div>
      </div>
    </div>
  );
}

export default function NoticeDispatchDownloadPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFFDF7] flex flex-col items-center justify-center p-6 text-[#8C6806]">
          <Loader2 className="w-10 h-10 animate-spin text-[#D29E0D] mb-3" />
          <p className="text-sm font-bold">Loading dispatch package...</p>
        </div>
      }
    >
      <DownloadBatchContent />
    </Suspense>
  );
}
