"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  RotateCw,
  Search,
  X,
  Mail,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Ban,
  Link2,
  ArrowUpRight,
  ShieldAlert,
  Undo2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import EmailBodyViewer from "@/components/EmailBodyViewer";

interface CaseSummary {
  caseId: string;
  defaulterName: string;
  clientName: string;
  clientEmail: string;
  accusedEmail: string;
  accusedEmail2: string;
  accusedPhone: string;
  stuckAmount: number;
  status: string;
  hasOwner: boolean;
  isRepresentation: boolean;
  loanId: string;
}

interface Candidate {
  caseId: string;
  score: number;
  reasons: string[];
  case: CaseSummary | null;
}

interface InboundItem {
  _id: string;
  receivedAt: string;
  fromEmail: string;
  fromName: string;
  to: string[];
  cc: string[];
  subject: string;
  cleanBody: string;
  classification: string;
  source: string;
  notificationId: string | null;
  routing: {
    status: string;
    method: string | null;
    caseId: string | null;
    reason: string;
    decidedBy?: string | null;
    decidedAt?: string;
    linkedCase: CaseSummary | null;
    candidates: Candidate[];
  };
}

const TABS: { key: string; label: string }[] = [
  { key: "open", label: "Needs Action" },
  { key: "auto_linked", label: "Auto-linked" },
  { key: "assigned", label: "Manually Assigned" },
  { key: "recorded", label: "Bounces / System" },
  { key: "dismissed", label: "Dismissed" },
];

const METHOD_LABELS: Record<string, string> = {
  thread: "Reply in notice thread",
  plus_address: "Plus-addressed reply",
  subject_ref: "Case ref in subject",
  body_ref: "Case ref in body",
  loan_id: "Loan / Invoice ID",
  participant_email: "Sender/recipient email",
  "participant_email+invoice": "Shared email + invoice no.",
  client_email: "Sent by client",
  dispatcher: "Dispatcher",
  manual: "Assigned by admin",
  manual_cleanup: "Corrected during cleanup",
};

function formatDateTime(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-IN", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true,
    });
  } catch {
    return iso;
  }
}

function CaseLine({ c }: { c: CaseSummary }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
      <Link
        href={`/authority/cases?id=${c.caseId}`}
        target="_blank"
        className="inline-flex items-center gap-1 font-extrabold text-slate-900 hover:text-[#DC2626]"
      >
        {c.caseId} <ArrowUpRight className="w-3 h-3 opacity-60" />
      </Link>
      <span>Accused: <strong className="text-slate-800">{c.defaulterName}</strong></span>
      <span>Client: <strong className="text-slate-800">{c.clientName}</strong></span>
      {c.stuckAmount > 0 && <span>₹{Number(c.stuckAmount).toLocaleString("en-IN")}</span>}
      {c.loanId && <span>ID: {c.loanId}</span>}
      {c.accusedEmail && <span className="text-slate-400">{c.accusedEmail}</span>}
      {!c.hasOwner && <span className="text-red-600 font-bold">No owner account</span>}
    </div>
  );
}

export default function InboundTriagePage() {
  const [tab, setTab] = useState("open");
  const [items, setItems] = useState<InboundItem[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [busyId, setBusyId] = useState<string | null>(null);

  // Manual case search (per item)
  const [searchFor, setSearchFor] = useState<string | null>(null);
  const [caseQuery, setCaseQuery] = useState("");
  const [caseResults, setCaseResults] = useState<CaseSummary[]>([]);

  const fetchCounts = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/inbound-emails?type=counts&_t=${Date.now()}`);
      const data = await res.json();
      if (data.success) setCounts(data.counts || {});
    } catch {}
  }, []);

  const fetchItems = useCallback(async (p = 1) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ status: tab, page: String(p), limit: "25", search: search.trim(), _t: String(Date.now()) });
      const res = await fetch(`/api/admin/inbound-emails?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}: failed to load inbound emails`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to load");
      setItems(data.data || []);
      setTotalPages(data.totalPages || 1);
      setPage(data.page || 1);
    } catch (e: any) {
      setError(e.message || "Failed to load inbound emails");
    } finally {
      setLoading(false);
    }
  }, [tab, search]);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  useEffect(() => {
    const t = setTimeout(() => fetchItems(1), 350);
    return () => clearTimeout(t);
  }, [fetchItems]);

  useEffect(() => {
    if (!searchFor || caseQuery.trim().length < 2) {
      setCaseResults([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/admin/inbound-emails?type=caseSearch&q=${encodeURIComponent(caseQuery.trim())}`);
        const data = await res.json();
        if (data.success) setCaseResults(data.data || []);
      } catch {}
    }, 300);
    return () => clearTimeout(t);
  }, [caseQuery, searchFor]);

  const act = async (inboundId: string, body: any, confirmText?: string) => {
    if (confirmText && !confirm(confirmText)) return;
    setBusyId(inboundId);
    try {
      const res = await fetch("/api/admin/inbound-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inboundId, ...body }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Action failed");
      setSearchFor(null);
      setCaseQuery("");
      await Promise.all([fetchItems(page), fetchCounts()]);
    } catch (e: any) {
      alert(e.message || "Action failed");
    } finally {
      setBusyId(null);
    }
  };

  const assign = (item: InboundItem, c: CaseSummary) =>
    act(
      item._id,
      { action: "assign", caseId: c.caseId },
      `Link this email to ${c.caseId} (${c.defaulterName})?\n\nThe owner of that case will see it in their notifications.`
    );

  const openCount = (counts.needs_review || 0) + (counts.unmatched || 0);

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-16 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <Inbox className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Inbound Email Triage</h1>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
              Emails the system could not link to exactly one case. Nothing is delivered to a client until it is matched with certainty or assigned here.
            </p>
          </div>
        </div>
        <button
          onClick={() => { fetchCounts(); fetchItems(page); }}
          disabled={loading}
          className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-2 cursor-pointer disabled:opacity-50 self-start sm:self-center"
        >
          <RotateCw className={`w-4 h-4 ${loading ? "animate-spin text-[#DC2626]" : "text-slate-500"}`} />
          Refresh
        </button>
      </div>

      {/* Tabs + search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
        <div className="flex flex-wrap items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold gap-1">
          {TABS.map((t) => {
            const n = t.key === "open" ? openCount : counts[t.key] || 0;
            return (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setPage(1); }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  tab === t.key ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {t.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${t.key === "open" && n > 0 ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-600"}`}>{n}</span>
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:max-w-sm">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sender, subject, text, case ID..."
            className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#DC2626] rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-16 text-center">
            <RotateCw className="w-8 h-8 text-slate-400 animate-spin mx-auto" />
          </div>
        ) : error ? (
          <div className="bg-white border border-red-200 rounded-2xl p-12 text-center">
            <ShieldAlert className="w-10 h-10 text-red-500 mx-auto mb-2" />
            <p className="text-sm font-bold text-red-700">{error}</p>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-16 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <p className="text-sm font-black text-slate-800">Nothing here</p>
            <p className="text-xs text-slate-400 font-semibold mt-1">{tab === "open" ? "Every inbound email is linked to a case." : "No emails in this view."}</p>
          </div>
        ) : (
          items.map((item) => {
            const r = item.routing;
            const isOpen = r.status === "needs_review" || r.status === "unmatched";
            const isBusy = busyId === item._id;
            return (
              <div key={item._id} className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 flex flex-col gap-3">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-blue-50 border border-blue-200 text-blue-800">
                      <Mail className="w-3.5 h-3.5" /> {item.classification.replace("_", " ").toUpperCase()}
                    </span>
                    {r.status === "needs_review" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                        <AlertTriangle className="w-3 h-3" /> NEEDS REVIEW
                      </span>
                    )}
                    {r.status === "unmatched" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                        NO MATCH
                      </span>
                    )}
                    {(r.status === "auto_linked" || r.status === "assigned") && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Link2 className="w-3 h-3" /> {r.method ? METHOD_LABELS[r.method] || r.method : "Linked"}
                      </span>
                    )}
                    {item.source === "backfill" && (
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Recovered from mailbox</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {formatDateTime(item.receivedAt)}
                  </span>
                </div>

                {/* Sender + subject */}
                <div className="text-xs text-slate-700 space-y-1">
                  <div>
                    <span className="text-slate-400 font-extrabold uppercase text-[10px] mr-1.5">From</span>
                    <strong className="text-slate-900">{item.fromName || item.fromEmail}</strong>
                    {item.fromName && <span className="text-slate-500"> &lt;{item.fromEmail}&gt;</span>}
                  </div>
                  {(item.to.length > 0 || item.cc.length > 0) && (
                    <div className="text-[11px] text-slate-500 break-all">
                      {item.to.length > 0 && <span><span className="font-extrabold uppercase text-[10px] mr-1">To</span>{item.to.join(", ")}</span>}
                      {item.cc.length > 0 && <span className="ml-3"><span className="font-extrabold uppercase text-[10px] mr-1">Cc</span>{item.cc.join(", ")}</span>}
                    </div>
                  )}
                  <div>
                    <span className="text-slate-400 font-extrabold uppercase text-[10px] mr-1.5">Subject</span>
                    <span className="font-bold text-slate-900">{item.subject || "(no subject)"}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80 max-h-64 overflow-y-auto text-xs sm:text-[13px] text-slate-800">
                  <EmailBodyViewer content={item.cleanBody || "(empty body)"} />
                </div>

                {/* Routing info */}
                <div className="text-[11px] text-slate-500">
                  <span className="font-extrabold uppercase text-[10px] text-slate-400 mr-1.5">Routing</span>
                  {r.reason}
                  {r.decidedBy && r.decidedBy !== "system" && <span className="ml-2">· by {r.decidedBy}</span>}
                </div>

                {r.linkedCase && (
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3">
                    <div className="text-[10px] font-extrabold uppercase text-emerald-700 mb-1">Linked case</div>
                    <CaseLine c={r.linkedCase} />
                  </div>
                )}

                {/* Candidates */}
                {r.candidates.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-extrabold uppercase text-slate-400">Suggested cases (verify before assigning)</div>
                    {r.candidates.map((c) => (
                      <div key={c.caseId} className="border border-slate-200 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex flex-col gap-1 min-w-0">
                          {c.case ? <CaseLine c={c.case} /> : <span className="text-xs font-bold">{c.caseId}</span>}
                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-[10px] font-black text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">Score {c.score}</span>
                            {c.reasons.map((reason, i) => (
                              <span key={i} className="text-[10px] font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded">{reason}</span>
                            ))}
                          </div>
                        </div>
                        {c.case && item.classification !== "dispatcher" && r.caseId !== c.caseId && (
                          <button
                            disabled={isBusy || !c.case.hasOwner}
                            onClick={() => assign(item, c.case!)}
                            className="shrink-0 px-3 py-1.5 bg-slate-900 hover:bg-black text-white text-[11px] font-extrabold rounded-lg disabled:opacity-40 cursor-pointer"
                          >
                            Assign to {c.caseId}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                {item.classification !== "dispatcher" && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      onClick={() => { setSearchFor(searchFor === item._id ? null : item._id); setCaseQuery(""); setCaseResults([]); }}
                      className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold rounded-lg border border-slate-200 cursor-pointer flex items-center gap-1.5"
                    >
                      <Search className="w-3.5 h-3.5" /> {r.caseId ? "Reassign to another case" : "Find case manually"}
                    </button>
                    {isOpen && (
                      <button
                        disabled={isBusy}
                        onClick={() => act(item._id, { action: "dismiss" }, "Dismiss this email as not related to any case?")}
                        className="px-3 py-1.5 bg-white hover:bg-red-50 text-slate-600 hover:text-red-700 text-[11px] font-bold rounded-lg border border-slate-200 cursor-pointer flex items-center gap-1.5 disabled:opacity-40"
                      >
                        <Ban className="w-3.5 h-3.5" /> Not related to a case
                      </button>
                    )}
                    {r.status === "dismissed" && (
                      <button
                        disabled={isBusy}
                        onClick={() => act(item._id, { action: "reopen" })}
                        className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold rounded-lg border border-slate-200 cursor-pointer flex items-center gap-1.5 disabled:opacity-40"
                      >
                        <Undo2 className="w-3.5 h-3.5" /> Reopen
                      </button>
                    )}
                  </div>
                )}

                {searchFor === item._id && (
                  <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/60 flex flex-col gap-2">
                    <input
                      autoFocus
                      value={caseQuery}
                      onChange={(e) => setCaseQuery(e.target.value)}
                      placeholder="Case ID, accused name, client name, email, phone, loan ID..."
                      className="w-full px-3 py-2 bg-white border border-slate-200 focus:border-[#DC2626] rounded-lg text-xs focus:outline-none"
                    />
                    {caseResults.map((c) => (
                      <div key={c.caseId} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white border border-slate-200 rounded-lg p-2.5">
                        <CaseLine c={c} />
                        <button
                          disabled={isBusy || !c.hasOwner || r.caseId === c.caseId}
                          onClick={() => assign(item, c)}
                          className="shrink-0 px-3 py-1.5 bg-slate-900 hover:bg-black text-white text-[11px] font-extrabold rounded-lg disabled:opacity-40 cursor-pointer"
                        >
                          {r.caseId === c.caseId ? "Current" : `Assign to ${c.caseId}`}
                        </button>
                      </div>
                    ))}
                    {caseQuery.trim().length >= 2 && caseResults.length === 0 && (
                      <p className="text-[11px] text-slate-400 font-semibold">No cases found.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => fetchItems(page - 1)}
            disabled={page <= 1}
            className="px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-xl disabled:opacity-40 flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <span className="text-xs font-bold text-slate-600">Page {page} of {totalPages}</span>
          <button
            onClick={() => fetchItems(page + 1)}
            disabled={page >= totalPages}
            className="px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-xl disabled:opacity-40 flex items-center gap-1 cursor-pointer"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
