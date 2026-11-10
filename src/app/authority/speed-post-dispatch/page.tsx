"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Download, Loader2, RefreshCw, Send } from "lucide-react";
import { DispatcherEmailSetting } from "@/components/DispatcherEmailSetting";
import { postDispatchBatch } from "@/lib/dispatch-client";

interface SpeedPostCase {
  id: string;
  caseId: string;
  defaulterName: string;
  address: string;
  phone: string;
  clientName: string;
  status: string;
  completedNotices?: number[];
  dispatchedSteps?: number[];
}

interface SpeedPostBatch {
  batchId: string;
  source?: "auto" | "manual";
  failedNotices?: { caseRef: string; noticeNumber: number; reason: string }[];
  emailSent: boolean;
  downloadUrl: string;
  dispatcherEmail: string;
  createdAt: string;
  downloadCount: number;
  matchedCasesCount: number;
  stepBreakdown: { step: number; label: string; count: number }[];
}

type NoticeNumber = 1 | 2 | 3;

const NOTICE_NUMBERS: NoticeNumber[] = [1, 2, 3];

export default function SpeedPostDispatchPage() {
  const [cases, setCases] = useState<SpeedPostCase[]>([]);
  const [batches, setBatches] = useState<SpeedPostBatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [selectedNotice, setSelectedNotice] = useState<NoticeNumber>(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [dispatcherEmail, setDispatcherEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setLoadError("");
    try {
      const res = await fetch(`/api/notice-dispatch?scope=physical&_t=${Date.now()}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        setLoadError(data?.error || "Could not load Speed Post cases.");
        return;
      }
      setCases(data.cases || []);
      setBatches(data.dispatchBatches || []);
    } catch (err: any) {
      setLoadError(err?.message || "Could not load Speed Post cases.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isMailed = (c: SpeedPostCase, n: NoticeNumber) => (c.dispatchedSteps || []).includes(n);

  const noticeSummary = useMemo(
    () =>
      NOTICE_NUMBERS.map(n => {
        const eligible = cases.filter(c => (c.completedNotices || []).includes(n));
        return {
          notice: n,
          total: eligible.length,
          pending: eligible.filter(c => !isMailed(c, n)).length,
        };
      }),
    [cases]
  );

  const visibleCases = useMemo(
    () => cases.filter(c => (c.completedNotices || []).includes(selectedNotice)),
    [cases, selectedNotice]
  );

  const pendingIds = useMemo(
    () => visibleCases.filter(c => !isMailed(c, selectedNotice)).map(c => c.id),
    [visibleCases, selectedNotice]
  );

  const handleSelectNotice = (n: NoticeNumber) => {
    setSelectedNotice(n);
    setSelectedIds([]);
    setResult(null);
  };

  const toggleCase = (id: string) => {
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const handleSendBatch = async () => {
    if (selectedIds.length === 0 || !dispatcherEmail.includes("@")) return;
    setIsSending(true);
    setResult(null);

    try {
      const { ok, data } = await postDispatchBatch({
        caseIds: selectedIds,
        dispatcherEmail,
        targetNotice: selectedNotice,
      });
      setResult({
        success: ok,
        message: data?.message || data?.error || "Failed to send the batch.",
      });
      if (ok) setSelectedIds([]);
      if (ok || data?.emailFailed) fetchData();
    } catch (err: any) {
      setResult({ success: false, message: err?.message || "Failed to send the batch." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Speed Post Dispatch</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Retail cases that paid for physical notices. A notice appears here after it has been emailed.
            Police complaints are never posted.
          </p>
        </div>
        <button
          type="button"
          onClick={fetchData}
          disabled={isLoading}
          className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer disabled:opacity-60"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} /> Refresh
        </button>
      </div>

      {loadError && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0" /> {loadError}
        </div>
      )}

      <DispatcherEmailSetting onChange={setDispatcherEmail} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {noticeSummary.map(s => (
          <button
            key={s.notice}
            type="button"
            onClick={() => handleSelectNotice(s.notice)}
            className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-colors ${
              selectedNotice === s.notice ? "border-[#DC2626] bg-red-50/50" : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="text-sm font-black text-slate-900">Notice {s.notice}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              {s.pending} to send • {s.total} emailed
            </div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col lg:flex-row lg:items-end gap-3">
        <div className="flex-1">
          <label htmlFor="speed-post-dispatcher" className="block text-xs font-black text-slate-900 mb-1.5">
            Dispatcher email
          </label>
          <input
            id="speed-post-dispatcher"
            type="email"
            value={dispatcherEmail}
            onChange={e => setDispatcherEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#DC2626]"
          />
        </div>
        <button
          type="button"
          onClick={() => setSelectedIds(pendingIds)}
          disabled={pendingIds.length === 0}
          className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer disabled:opacity-50"
        >
          Select all to send ({pendingIds.length})
        </button>
        <button
          type="button"
          onClick={handleSendBatch}
          disabled={isSending || selectedIds.length === 0 || !dispatcherEmail.includes("@")}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl cursor-pointer disabled:opacity-50"
        >
          {isSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          Send Notice {selectedNotice} ({selectedIds.length})
        </button>
      </div>

      {result && (
        <div
          className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-bold ${
            result.success ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {result.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
          {result.message}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-black uppercase tracking-wider text-[10px]">
            <tr>
              <th className="px-4 py-3 w-10"><span className="sr-only">Select</span></th>
              <th className="px-4 py-3">Case</th>
              <th className="px-4 py-3">Send to</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-400 font-semibold">
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                </td>
              </tr>
            ) : visibleCases.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-400 font-semibold">
                  No Speed Post cases have had Notice {selectedNotice} emailed yet.
                </td>
              </tr>
            ) : (
              visibleCases.map(c => {
                const mailed = isMailed(c, selectedNotice);
                return (
                  <tr key={c.id} className="align-top">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        aria-label={`Select ${c.caseId}`}
                        checked={selectedIds.includes(c.id)}
                        onChange={() => toggleCase(c.id)}
                        className="w-4 h-4 accent-[#DC2626] cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 whitespace-nowrap">{c.caseId}</td>
                    <td className="px-4 py-3 min-w-[240px]">
                      <div className="font-black text-slate-900">{c.defaulterName}</div>
                      <div className="text-slate-500 font-medium mt-0.5">{c.address}</div>
                      <div className="text-slate-500 font-medium mt-0.5">{c.phone}</div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-700">{c.clientName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-md text-[10px] font-black ${
                          mailed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {mailed ? "Sent to dispatcher" : "To send"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {batches.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
          <h2 className="text-sm font-black text-slate-900 mb-3">Batches sent</h2>
          <ul className="divide-y divide-slate-100">
            {batches.map(b => (
              <li key={b.batchId} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-mono font-bold text-slate-800">{b.batchId}</span>
                  <span className="text-slate-500 font-medium">
                    {" "}
                    • {b.stepBreakdown.map(s => `${s.label}: ${s.count}`).join(", ")} • {b.dispatcherEmail} •{" "}
                    {new Date(b.createdAt).toLocaleDateString("en-IN")} • {b.downloadCount} downloads
                  </span>
                  {!b.emailSent && (
                    <span className="ml-2 px-2 py-0.5 rounded-md bg-red-50 text-red-700 text-[10px] font-black">Email failed • Still pending</span>
                  )}
                  {(b.failedNotices?.length || 0) > 0 && (
                    <span className="ml-2 px-2 py-0.5 rounded-md bg-red-50 text-red-700 text-[10px] font-black">
                      {b.failedNotices!.length} PDF(s) failed • Still pending
                    </span>
                  )}
                </div>
                <a
                  href={b.downloadUrl}
                  className="inline-flex items-center gap-1.5 font-bold text-[#DC2626] hover:underline shrink-0"
                >
                  <Download className="w-3.5 h-3.5" /> {b.source === "auto" ? "Download PDF" : "Download ZIP"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
