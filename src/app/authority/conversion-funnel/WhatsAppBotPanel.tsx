"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Loader2, MessageSquare, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";

/* WhatsApp chatbot progress: where each person is in the bot, and how many reach each step. */

interface FunnelBar {
  key: string;
  label: string;
  count: number;
  percent: number;
}

interface BotItem {
  phone: string;
  contactName: string;
  currentStepKey: string | null;
  currentStepLabel: string;
  currentStepStage: "browse" | "signup" | "done" | null;
  stepNumber: number | null;
  stepsSeen: { key: string; label: string; at: string }[];
  answers: { name?: string; email?: string; state?: string; parties?: string; speedPost?: string };
  outcome: "in_bot" | "link_sent" | "lead_created" | "already_registered" | "details_rejected";
  leadStatus: "paid" | "payment_pending" | null;
  isStale: boolean;
  lastActivityAt: string | null;
  confirmedAt: string | null;
  linkClaimedAt: string | null;
}

interface BotData {
  days: number;
  totalSteps: number;
  funnel: FunnelBar[];
  items: BotItem[];
  total: number;
  sync: {
    lastRunAt: string | null;
    lastRunSummary: { error?: string } | null;
    apiCallsThisMonth: number;
    botDetected: boolean;
  };
}

const GROWTH_PLAN_API_CALLS = 10_000;

function timeAgo(iso: string | null): string {
  if (!iso) return "—";
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `${hours} h ago`;
  return `${Math.round(hours / 24)} days ago`;
}

function statusChip(item: BotItem): { label: string; className: string } {
  if (item.leadStatus === "paid") return { label: "Paid", className: "bg-emerald-50 text-emerald-700 border-emerald-200" };
  if (item.outcome === "already_registered")
    return { label: "Already a client", className: "bg-slate-50 text-slate-600 border-slate-200" };
  if (item.outcome === "details_rejected")
    return { label: "Details looked wrong · asked to redo", className: "bg-red-50 text-red-700 border-red-200" };
  if (item.leadStatus === "payment_pending" || item.outcome === "lead_created")
    return { label: "Link tapped · payment pending", className: "bg-orange-50 text-orange-700 border-orange-200" };
  if (item.outcome === "link_sent")
    return item.isStale
      ? { label: "Got link · never tapped", className: "bg-slate-100 text-slate-600 border-slate-200" }
      : { label: "Got link in chat", className: "bg-sky-50 text-sky-700 border-sky-200" };
  if (item.isStale) return { label: "Dropped off", className: "bg-slate-100 text-slate-500 border-slate-200" };
  return { label: "In the bot now", className: "bg-blue-50 text-blue-700 border-blue-200" };
}

const STAGE_LABEL: Record<string, string> = { browse: "Questions", signup: "Sign-up", done: "Finished" };

export default function WhatsAppBotPanel() {
  const [data, setData] = useState<BotData | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(30);
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/whatsapp-bot?days=${days}`, { cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not load WhatsApp bot data");
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load WhatsApp bot data");
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    load();
  }, [load]);

  const syncNow = async () => {
    setSyncing(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/whatsapp-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sync" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Sync failed");
      if (json.summary?.error) setError(`Sync stopped: ${json.summary.error}`);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sync failed");
    } finally {
      setSyncing(false);
    }
  };

  const items = data?.items || [];
  const visible = showAll ? items : items.slice(0, 15);
  const maxCount = Math.max(1, ...(data?.funnel || []).map((bar) => bar.count));
  const apiCalls = data?.sync.apiCallsThisMonth || 0;

  return (
    <section className="mb-8 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-left">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-black text-[#111827]">WhatsApp chatbot</h2>
          </div>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Where each person is in the sign-up bot. Updated from WATI every 30 minutes
            {data?.sync.lastRunAt ? ` · last update ${timeAgo(data.sync.lastRunAt)}` : " · not updated yet"}.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <span
            className="text-[10px] font-bold text-slate-500 px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200"
            title="WATI API calls used by this sync this month. The Growth plan allows 10,000 a month across everything the site sends."
          >
            Sync API calls this month: {apiCalls.toLocaleString("en-IN")} / {GROWTH_PLAN_API_CALLS.toLocaleString("en-IN")}
          </span>
          <button
            onClick={syncNow}
            disabled={syncing}
            className="px-3.5 py-2 rounded-xl bg-[#111827] text-white text-xs font-black flex items-center gap-1.5 disabled:opacity-60 cursor-pointer"
          >
            {syncing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            Update now
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
          {error}
        </div>
      )}

      {loading && !data ? (
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 py-6">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading WhatsApp bot activity…
        </div>
      ) : !data || data.total === 0 ? (
        <p className="text-xs font-semibold text-slate-500 py-4">
          No one has used the WhatsApp bot in this period yet
          {data && !data.sync.botDetected ? " (the bot has not been seen in WATI so far)" : ""}.
        </p>
      ) : (
        <>
          {/* Step-by-step drop-off */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 mb-6">
            {data.funnel.map((bar, index) => (
              <div key={bar.key} className="flex items-center gap-3">
                <span className="w-5 text-[10px] font-black text-slate-400 text-right">{index + 1}</span>
                <span className="w-36 text-xs font-bold text-slate-700 truncate">{bar.label}</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${bar.key === "paid" ? "bg-emerald-500" : "bg-[#DC2626]/80"}`}
                    style={{ width: `${(bar.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="w-20 text-right text-xs font-black text-[#111827]">
                  {bar.count} <span className="text-slate-400 font-bold">({bar.percent}%)</span>
                </span>
              </div>
            ))}
          </div>

          {/* People */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="text-left font-black px-3 py-2.5">Contact</th>
                  <th className="text-left font-black px-3 py-2.5">Current step</th>
                  <th className="text-left font-black px-3 py-2.5">Answers so far</th>
                  <th className="text-left font-black px-3 py-2.5">Last activity</th>
                  <th className="text-left font-black px-3 py-2.5">Status</th>
                  <th className="px-2" />
                </tr>
              </thead>
              <tbody>
                {visible.map((item) => {
                  const chip = statusChip(item);
                  const isOpen = expanded === item.phone;
                  const answers = [
                    item.answers.name,
                    item.answers.email,
                    item.answers.state,
                    item.answers.parties,
                    item.answers.speedPost,
                  ].filter(Boolean);
                  return (
                    <React.Fragment key={item.phone}>
                      <tr className="border-t border-slate-100 align-top">
                        <td className="px-3 py-2.5">
                          <div className="font-bold text-[#111827]">{item.answers.name || item.contactName || "Unknown"}</div>
                          <div className="text-slate-500 font-semibold">+91 {item.phone}</div>
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="font-bold text-[#111827]">{item.currentStepLabel}</div>
                          <div className="text-[10px] font-bold text-slate-400">
                            {item.stepNumber ? `Step ${item.stepNumber} of ${data.totalSteps}` : ""}
                            {item.currentStepStage ? ` · ${STAGE_LABEL[item.currentStepStage]}` : ""}
                          </div>
                        </td>
                        <td className="px-3 py-2.5 text-slate-600 font-semibold max-w-[260px]">
                          {answers.length ? answers.join(" · ") : <span className="text-slate-400">—</span>}
                        </td>
                        <td className="px-3 py-2.5 text-slate-600 font-semibold whitespace-nowrap">
                          {timeAgo(item.lastActivityAt)}
                        </td>
                        <td className="px-3 py-2.5">
                          <span className={`inline-block text-[10px] font-black px-2 py-1 rounded-full border ${chip.className}`}>
                            {chip.label}
                          </span>
                        </td>
                        <td className="px-2 py-2.5">
                          <button
                            onClick={() => setExpanded(isOpen ? null : item.phone)}
                            className="p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
                            aria-label={isOpen ? "Hide steps" : "Show steps"}
                          >
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-slate-50/60">
                          <td colSpan={6} className="px-4 py-3">
                            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                              Steps in the latest visit
                            </div>
                            <ol className="flex flex-wrap gap-1.5">
                              {item.stepsSeen.map((seen) => (
                                <li
                                  key={seen.key}
                                  className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1"
                                  title={new Date(seen.at).toLocaleString("en-IN")}
                                >
                                  {seen.label}
                                </li>
                              ))}
                              {item.confirmedAt && (
                                <li className="text-[11px] font-bold bg-white border border-emerald-200 text-emerald-700 rounded-lg px-2 py-1">
                                  Confirmed details · {new Date(item.confirmedAt).toLocaleString("en-IN")}
                                </li>
                              )}
                              {item.linkClaimedAt && (
                                <li className="text-[11px] font-bold bg-white border border-orange-200 text-orange-700 rounded-lg px-2 py-1">
                                  Tapped link · {new Date(item.linkClaimedAt).toLocaleString("en-IN")}
                                </li>
                              )}
                            </ol>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          {items.length > 15 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-3 text-xs font-black text-[#DC2626] cursor-pointer"
            >
              {showAll ? "Show fewer" : `Show all ${items.length}`}
            </button>
          )}
        </>
      )}
    </section>
  );
}
