"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faUserCheck,
  faWallet,
  faMobileAlt,
  faEye,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import {
  Loader2,
  Settings,
  Zap,
  Copy,
  Check,
  Send,
  Sparkles,
  Clock,
  MousePointerClick,
  CheckCircle2,
  AlertCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Tag,
  MessageSquare,
  Mail,
} from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface WaveExecutionInfo {
  wave: number;
  sentAt?: string;
  lastAttemptAt?: string;
  whatsappSent?: boolean;
  emailSent?: boolean;
  attempts?: number;
  discountPercent?: number;
  templateName?: string;
  lastError?: string | null;
}

interface NextWaveInfo {
  wave: 1 | 2 | 3;
  discountPercent: number;
  dueAt: string;
  dueInMinutes: number;
  isOverdue: boolean;
}

interface FunnelItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  oppositionCount: number;
  status: "pending_verification" | "pending_payment" | "completed";
  visualStep: number; // 1..6
  createdAt: string;
  funnelStartedAt: string;
  resumeToken: string | null;
  magicLink: string | null;
  discountPercent: number;
  discountUnlockedAt: string | null;
  discountExpiresAt: string | null;
  pricing: {
    oppositionCount: number;
    discountPercent: number;
    unitOriginalPrice: number;
    unitDiscountedPrice: number;
    totalOriginal: number;
    totalPayable: number;
    totalSavings: number;
  };
  clickCount: number;
  linkClickedAt: string | null;
  verifiedVia: string | null;
  currentWave: number;
  waves: {
    "1": WaveExecutionInfo | null;
    "2": WaveExecutionInfo | null;
    "3": WaveExecutionInfo | null;
  };
  nextWave: NextWaveInfo | null;
  recoveredViaFunnel: boolean;
  recoveredAtWave: number;
  details: {
    failedAttempts?: number;
    otpExpired?: boolean;
    otpLocked?: boolean;
    otpExpires?: string | null;
    verifiedAt?: string | null;
    txnid?: string | null;
    expectedAmount?: number;
    amountPaid?: number;
    originalAmount?: number;
    payuTxnId?: string | null;
    paymentDate?: string | null;
    caseId?: string | null;
    lastLoginAt?: string | null;
  };
}

interface Summary {
  totalSubmitted: number;
  pendingVerificationCount: number;
  pendingPaymentCount: number;
  retargetedCount: number;
  wave1SentCount: number;
  wave2SentCount: number;
  wave3SentCount: number;
  clickedOrDiscountCount: number;
  completedCount: number;
  recoveredPaidCount: number;
  conversionRate: number;
}

interface FunnelWaveConfig {
  wave: 1 | 2 | 3;
  enabled: boolean;
  delayMinutes: number;
  discountPercent: number;
  watiTemplate: string;
}

interface FunnelSettings {
  enabled: boolean;
  basePricePerOpposition: number;
  discountExpiryHours: number;
  honorExpiredDiscounts: boolean;
  waves: [FunnelWaveConfig, FunnelWaveConfig, FunnelWaveConfig];
}

const ITEMS_PER_PAGE = 200;

const STEP_LABELS = [
  { num: 1, short: "Form" },
  { num: 2, short: "OTP" },
  { num: 3, short: "Wave 1" },
  { num: 4, short: "Wave 2 (15%)" },
  { num: 5, short: "Wave 3" },
  { num: 6, short: "Paid" },
];

function formatDurationMinutes(mins: number): string {
  const abs = Math.abs(mins);
  if (abs < 60) return `${abs}m`;
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export default function ConversionFunnel() {
  const [items, setItems] = useState<FunnelItem[]>([]);
  const [summary, setSummary] = useState<Summary>({
    totalSubmitted: 0,
    pendingVerificationCount: 0,
    pendingPaymentCount: 0,
    retargetedCount: 0,
    wave1SentCount: 0,
    wave2SentCount: 0,
    wave3SentCount: 0,
    clickedOrDiscountCount: 0,
    completedCount: 0,
    recoveredPaidCount: 0,
    conversionRate: 0,
  });
  const [settings, setSettings] = useState<FunnelSettings>({
    enabled: true,
    basePricePerOpposition: 999,
    discountExpiryHours: 48,
    honorExpiredDiscounts: true,
    waves: [
      {
        wave: 1,
        enabled: true,
        delayMinutes: 30,
        discountPercent: 0,
        watiTemplate: "signup_recovery_wave_1",
      },
      {
        wave: 2,
        enabled: true,
        delayMinutes: 360,
        discountPercent: 15,
        watiTemplate: "signup_recovery_discount_wave_2_v2",
      },
      {
        wave: 3,
        enabled: true,
        delayMinutes: 1440,
        discountPercent: 15,
        watiTemplate: "signup_recovery_final_wave_3",
      },
    ],
  });

  const [totalFiltered, setTotalFiltered] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [runningQueue, setRunningQueue] = useState(false);
  const [actionLoadingKey, setActionLoadingKey] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.text === text ? null : prev));
    }, 4500);
  };

  // ── Debounce search input (600ms) ──
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 600);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // ── Fetch helper ──
  const fetchPage = useCallback(
    async (pageNum: number, append: boolean, signal?: AbortSignal) => {
      if (append) {
        setIsLoadingMore(true);
      } else {
        setIsSearching(true);
      }

      try {
        const params = new URLSearchParams({
          page: String(pageNum),
          limit: String(ITEMS_PER_PAGE),
          status: statusFilter,
          search: debouncedSearch,
        });

        const res = await fetch(`/api/admin/funnel?${params}`, { signal });
        if (!res.ok) throw new Error("Failed to load funnel data.");
        const data = await res.json();

        if (data.success) {
          if (append) {
            setItems((prev) => [...prev, ...(data.items || [])]);
          } else {
            setItems(data.items || []);
          }
          setHasMore(data.hasMore ?? false);
          setTotalFiltered(data.totalFiltered ?? 0);
          if (data.summary) setSummary(data.summary);
          if (data.settings) setSettings(data.settings);
        }
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        console.error("Error loading funnel data:", err);
      } finally {
        setIsInitialLoad(false);
        setIsSearching(false);
        setIsLoadingMore(false);
        setRefreshing(false);
      }
    },
    [statusFilter, debouncedSearch]
  );

  useEffect(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPage(1);
    setExpandedItemId(null);
    fetchPage(1, false, controller.signal);

    return () => controller.abort();
  }, [debouncedSearch, statusFilter, fetchPage]);

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchPage(1, false);
  };

  const loadMoreRef = useRef<() => void>(undefined);
  loadMoreRef.current = () => {
    if (!hasMore || isSearching || isLoadingMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPage(nextPage, true);
  };

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMoreRef.current?.();
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isInitialLoad]);

  // ── Admin Actions ──
  const handleCopyMagicLink = async (item: FunnelItem) => {
    const link =
      item.magicLink ||
      (item.resumeToken ? `https://legalrecovery.in/resume/${item.resumeToken}` : null);
    if (!link) {
      showToast("No resume link available for this record.", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(item.id);
      showToast(`Copied personal checkout link for ${item.name}!`);
      setTimeout(() => setCopiedId((prev) => (prev === item.id ? null : prev)), 2500);
    } catch {
      showToast("Failed to copy link to clipboard.", "error");
    }
  };

  const handleSaveSettings = async () => {
    setSavingSettings(true);
    try {
      const res = await fetch("/api/admin/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_settings", settings }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast(json.error || "Failed to save settings.", "error");
      } else {
        setSettings(json.settings);
        showToast("Retargeting & discount settings saved!");
        fetchPage(1, false);
      }
    } catch {
      showToast("Network error while saving settings.", "error");
    } finally {
      setSavingSettings(false);
    }
  };

  const handleRunQueueNow = async () => {
    setRunningQueue(true);
    try {
      const res = await fetch("/api/admin/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "run_queue_now" }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast(json.error || "Failed to run retargeting queue.", "error");
      } else {
        showToast(json.message || `Dispatched due retargeting waves!`);
        fetchPage(1, false);
      }
    } catch {
      showToast("Error triggering retargeting queue.", "error");
    } finally {
      setRunningQueue(false);
    }
  };

  const handleSendWave = async (
    item: FunnelItem,
    wave: 1 | 2 | 3,
    discountPercent?: number
  ) => {
    const key = `${item.id}_wave_${wave}`;
    setActionLoadingKey(key);
    try {
      const res = await fetch("/api/admin/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "send_wave",
          id: item.id,
          status: item.status,
          wave,
          discountPercent,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast(json.error || `Failed to send Wave ${wave}`, "error");
      } else {
        showToast(json.message || `Wave ${wave} sent to ${item.name}!`);
        fetchPage(1, false);
      }
    } catch {
      showToast(`Network error while sending Wave ${wave}.`, "error");
    } finally {
      setActionLoadingKey(null);
    }
  };

  const handleUnlockDiscountOnly = async (item: FunnelItem, discountPercent = 15) => {
    const key = `${item.id}_unlock`;
    setActionLoadingKey(key);
    try {
      const res = await fetch("/api/admin/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "unlock_discount",
          id: item.id,
          status: item.status,
          discountPercent,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast(json.error || "Failed to unlock discount.", "error");
      } else {
        if (json.magicLink) {
          try {
            await navigator.clipboard.writeText(json.magicLink);
          } catch {}
        }
        showToast(`${json.message} (Link copied to clipboard!)`);
        fetchPage(1, false);
      }
    } catch {
      showToast("Network error while unlocking discount.", "error");
    } finally {
      setActionLoadingKey(null);
    }
  };

  const updateWaveSetting = (
    idx: 0 | 1 | 2,
    field: keyof FunnelWaveConfig,
    value: any
  ) => {
    setSettings((prev) => {
      const nextWaves = [...prev.waves] as [
        FunnelWaveConfig,
        FunnelWaveConfig,
        FunnelWaveConfig
      ];
      nextWaves[idx] = { ...nextWaves[idx], [field]: value };
      return { ...prev, waves: nextWaves };
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none text-left"
    >
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-5 right-5 z-50 px-5 py-3.5 rounded-2xl shadow-xl border flex items-center gap-2.5 text-xs font-extrabold ${
              toastMessage.type === "error"
                ? "bg-red-950 text-red-100 border-red-700"
                : "bg-[#111827] text-white border-emerald-500/40"
            }`}
          >
            {toastMessage.type === "error" ? (
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E5E7EB]/60 pb-6 mb-6">
        <div className="text-left">
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Automated Sales &amp; Conversion Funnel
            </h1>
            <span
              className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                settings.enabled
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              }`}
            >
              {settings.enabled ? "● 24/7 Autopilot Active" : "○ Automation Paused"}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Live 6-step user progression, Legal Recovery WATI + Email retargeting waves, and
            1-click 15% fee drop links.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowSettingsDrawer((prev) => !prev)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-extrabold text-slate-700 flex items-center gap-2 cursor-pointer transition-all shadow-sm"
          >
            <Settings className="w-4 h-4 text-[#DC2626]" />
            <span>Retargeting &amp; Discount Settings</span>
            {showSettingsDrawer ? (
              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          <button
            onClick={handleRunQueueNow}
            disabled={runningQueue}
            className="px-4 py-2.5 rounded-xl bg-[#111827] hover:bg-slate-800 text-white text-xs font-black flex items-center gap-2 cursor-pointer transition-all shadow-sm disabled:opacity-60"
          >
            {runningQueue ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
            ) : (
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            )}
            <span>Run Retargeting Queue Now</span>
          </button>

          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center justify-center p-2.5 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 cursor-pointer disabled:opacity-50 transition-colors bg-white"
            title="Refresh database records"
          >
            <FontAwesomeIcon
              icon={faRefresh}
              className={refreshing ? "animate-spin" : ""}
            />
          </button>
        </div>
      </div>

      {/* ── Collapsible Superadmin Retargeting & Discount Settings Drawer ── */}
      <AnimatePresence>
        {showSettingsDrawer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-base font-black text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#DC2626]" />
                    Automated Retargeting Waves &amp; Discount Configuration
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    All WhatsApp messages dispatch exclusively via the{" "}
                    <strong className="text-white">Legal Recovery WATI</strong> account. Amounts
                    scale automatically by opposing party count.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2.5 cursor-pointer bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                    <input
                      type="checkbox"
                      checked={settings.enabled}
                      onChange={(e) =>
                        setSettings((p) => ({ ...p, enabled: e.target.checked }))
                      }
                      className="accent-[#10B981] w-4 h-4"
                    />
                    <span className="text-xs font-black text-white">
                      24/7 Autopilot {settings.enabled ? "ON" : "OFF"}
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                    <input
                      type="checkbox"
                      checked={settings.honorExpiredDiscounts}
                      onChange={(e) =>
                        setSettings((p) => ({
                          ...p,
                          honorExpiredDiscounts: e.target.checked,
                        }))
                      }
                      className="accent-[#10B981] w-4 h-4"
                    />
                    <span className="text-xs font-bold text-slate-200">
                      Grace Extension on Expired Links
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {settings.waves.map((w, idx) => {
                  const waveIdx = idx as 0 | 1 | 2;
                  return (
                    <div
                      key={w.wave}
                      className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                          Wave {w.wave}{" "}
                          {w.wave === 1
                            ? "(Warm Setup Nudge)"
                            : w.wave === 2
                            ? "(Instant Fee Drop)"
                            : "(Final Expiry Call)"}
                        </span>
                        <input
                          type="checkbox"
                          checked={w.enabled}
                          onChange={(e) =>
                            updateWaveSetting(waveIdx, "enabled", e.target.checked)
                          }
                          className="accent-[#10B981] w-4 h-4 cursor-pointer"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                            Delay (Minutes)
                          </label>
                          <input
                            type="number"
                            min={1}
                            value={w.delayMinutes}
                            onChange={(e) =>
                              updateWaveSetting(
                                waveIdx,
                                "delayMinutes",
                                Number(e.target.value)
                              )
                            }
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                            Discount %
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={90}
                            value={w.discountPercent}
                            onChange={(e) =>
                              updateWaveSetting(
                                waveIdx,
                                "discountPercent",
                                Number(e.target.value)
                              )
                            }
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-emerald-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Legal Recovery WATI Template Name
                        </label>
                        <input
                          type="text"
                          value={w.watiTemplate}
                          onChange={(e) =>
                            updateWaveSetting(waveIdx, "watiTemplate", e.target.value)
                          }
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleSaveSettings}
                  disabled={savingSettings}
                  className="px-6 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-black flex items-center gap-2 cursor-pointer transition-all disabled:opacity-60"
                >
                  {savingSettings && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Funnel Configuration</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 6-Stage KPI Pipeline Bar (Click Any Stage to Filter) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-8">
        <button
          onClick={() => setStatusFilter("all")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "all"
              ? "bg-[#111827] text-white border-[#111827] shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-slate-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            1. Total Leads
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.totalSubmitted.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            100% Entered Funnel
          </span>
        </button>

        <button
          onClick={() => setStatusFilter("pending_verification")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "pending_verification"
              ? "bg-amber-600 text-white border-amber-600 shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-amber-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            2. Step 1 Drop-Off
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.pendingVerificationCount.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            Pending OTP Verification
          </span>
        </button>

        <button
          onClick={() => setStatusFilter("pending_payment")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "pending_payment"
              ? "bg-orange-600 text-white border-orange-600 shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-orange-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            3. Step 2 Drop-Off
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.pendingPaymentCount.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            OTP Done • Unpaid
          </span>
        </button>

        <button
          onClick={() => setStatusFilter("retargeted")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "retargeted"
              ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-indigo-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            4. Retargeted
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.retargetedCount.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            W1:{summary.wave1SentCount} • W2:{summary.wave2SentCount} • W3:
            {summary.wave3SentCount}
          </span>
        </button>

        <button
          onClick={() => setStatusFilter("clicked")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "clicked"
              ? "bg-[#DC2626] text-white border-[#DC2626] shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-red-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            5. Link Clicked / 15%
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.clickedOrDiscountCount.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            Magic Link / Fee Drop
          </span>
        </button>

        <button
          onClick={() => setStatusFilter("completed")}
          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "completed"
              ? "bg-emerald-600 text-white border-emerald-600 shadow-lg"
              : "bg-white text-[#111827] border-slate-200/80 hover:border-emerald-300"
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block">
            6. Converted (Paid)
          </span>
          <span className="text-2xl font-black mt-1 block">
            {summary.completedCount.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-bold opacity-75 mt-1 block">
            {summary.conversionRate}% Conv ({summary.recoveredPaidCount} Recovered)
          </span>
        </button>
      </div>

      {/* ── Initial full-page loader ── */}
      {isInitialLoad ? (
        <div className="py-32 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
          <p className="text-xs font-bold text-gray-450 uppercase tracking-widest">
            Introspecting Conversion Funnel...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] space-y-6">
            {/* Search + Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full max-w-md border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus-within:bg-white focus-within:border-[#DC2626] transition-colors shadow-sm">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, phone, email, or state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold focus:outline-none text-gray-800"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-gray-400 hover:text-gray-600 text-xs font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  {totalFiltered.toLocaleString("en-IN")} user
                  {totalFiltered !== 1 ? "s" : ""}
                </span>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
                    Stage
                  </span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 bg-white rounded-xl text-xs font-bold text-gray-700 focus:outline-none cursor-pointer hover:border-gray-300"
                  >
                    <option value="all">All Funnel Users</option>
                    <option value="pending_verification">
                      Step 1 Drop: Pending OTP Verification
                    </option>
                    <option value="pending_payment">
                      Step 2 Drop: Pending Checkout Payment
                    </option>
                    <option value="retargeted">Retargeted (Waves Sent)</option>
                    <option value="clicked">Magic Link Clicked / 15% Unlocked</option>
                    <option value="completed">Step 6: Completed &amp; Paid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ── Table ── */}
            {isSearching ? (
              <div className="py-16 flex flex-col items-center justify-center gap-2">
                <Loader2 className="w-6 h-6 text-[#DC2626] animate-spin" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Loading funnel pipeline...
                </span>
              </div>
            ) : items.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-black uppercase tracking-wider bg-gray-50/60">
                      <th className="py-4 px-5">Client Details</th>
                      <th className="py-4 px-5">Live 6-Step Funnel Pipeline</th>
                      <th className="py-4 px-5">Current Step &amp; Wave Status</th>
                      <th className="py-4 px-5">Price, Channels &amp; Clicks</th>
                      <th className="py-4 px-5 text-right">Quick Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      const isExpanded = expandedItemId === item.id;
                      const w1 = item.waves?.["1"];
                      const w2 = item.waves?.["2"];
                      const w3 = item.waves?.["3"];

                      return (
                        <React.Fragment key={`${item.status}_${item.id}`}>
                          <tr
                            className={`border-b border-gray-100 hover:bg-gray-50/40 transition-colors ${
                              isExpanded ? "bg-slate-50/70" : ""
                            }`}
                          >
                            {/* 1. Client Details */}
                            <td className="py-4 px-5 align-top">
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                                  {item.name}
                                </span>
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                  {item.oppositionCount}{" "}
                                  {item.oppositionCount === 1 ? "Party" : "Parties"}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-500 font-semibold mt-1 flex flex-col gap-0.5">
                                <span>📞 {item.phone}</span>
                                <span className="truncate max-w-[200px]">
                                  📧 {item.email}
                                </span>
                                <span className="text-slate-400">
                                  📍 {item.state} •{" "}
                                  {new Date(item.createdAt).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            </td>

                            {/* 2. Live 6-Step Visual Pipeline */}
                            <td className="py-4 px-5 align-middle">
                              <div className="flex items-center gap-1 min-w-[270px]">
                                {STEP_LABELS.map((stepObj, sIdx) => {
                                  const w1Sent = Boolean(
                                    w1?.whatsappSent ||
                                      w1?.emailSent ||
                                      w1?.sentAt ||
                                      item.recoveredAtWave === 1
                                  );
                                  const w2Sent = Boolean(
                                    w2?.whatsappSent ||
                                      w2?.emailSent ||
                                      w2?.sentAt ||
                                      item.recoveredAtWave === 2
                                  );
                                  const w3Sent = Boolean(
                                    w3?.whatsappSent ||
                                      w3?.emailSent ||
                                      w3?.sentAt ||
                                      item.recoveredAtWave === 3
                                  );

                                  const isCompleted =
                                    stepObj.num === 1
                                      ? true
                                      : stepObj.num === 2
                                      ? item.status !== "pending_verification"
                                      : stepObj.num === 3
                                      ? w1Sent
                                      : stepObj.num === 4
                                      ? w2Sent
                                      : stepObj.num === 5
                                      ? w3Sent
                                      : stepObj.num === 6
                                      ? item.status === "completed"
                                      : false;

                                  const isSkippedWave =
                                    item.status === "completed" &&
                                    (stepObj.num === 3 ||
                                      stepObj.num === 4 ||
                                      stepObj.num === 5) &&
                                    !isCompleted;

                                  const isCurrent =
                                    item.status !== "completed" &&
                                    stepObj.num === item.visualStep;

                                  return (
                                    <React.Fragment key={stepObj.num}>
                                      <div className="flex flex-col items-center">
                                        <div
                                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border transition-all ${
                                            isCompleted
                                              ? "bg-emerald-500 text-white border-emerald-500 shadow-xs"
                                              : isCurrent
                                              ? "bg-[#DC2626] text-white border-[#DC2626] ring-4 ring-red-100 animate-pulse"
                                              : isSkippedWave
                                              ? "bg-slate-50 text-slate-300 border-slate-200 border-dashed"
                                              : "bg-slate-100 text-slate-400 border-slate-200"
                                          }`}
                                          title={
                                            isSkippedWave
                                              ? `${stepObj.short}: Not sent (user paid without this wave)`
                                              : `Step ${stepObj.num}: ${stepObj.short}`
                                          }
                                        >
                                          {isCompleted
                                            ? "✓"
                                            : isSkippedWave
                                            ? "—"
                                            : stepObj.num}
                                        </div>
                                        <span
                                          className={`text-[9px] font-extrabold mt-1 whitespace-nowrap ${
                                            isCompleted
                                              ? "text-emerald-700"
                                              : isCurrent
                                              ? "text-[#DC2626]"
                                              : isSkippedWave
                                              ? "text-slate-300"
                                              : "text-slate-400"
                                          }`}
                                        >
                                          {stepObj.short}
                                        </span>
                                      </div>
                                      {sIdx < STEP_LABELS.length - 1 && (
                                        <div
                                          className={`h-0.5 w-3.5 -mt-3 rounded-full ${
                                            isCompleted
                                              ? "bg-emerald-400"
                                              : "bg-slate-200"
                                          }`}
                                        />
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </td>

                            {/* 3. Current Step & Wave Status */}
                            <td className="py-4 px-5 align-middle">
                              <div className="space-y-1.5">
                                {item.status === "pending_verification" ? (
                                  <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-800">
                                    <FontAwesomeIcon
                                      icon={faMobileAlt}
                                      className="text-[10px]"
                                    />
                                    Step 1: OTP Pending
                                    {item.details.otpExpired ? " (Expired)" : ""}
                                  </span>
                                ) : item.status === "pending_payment" ? (
                                  <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-800">
                                    <FontAwesomeIcon
                                      icon={faWallet}
                                      className="text-[10px]"
                                    />
                                    Step 2: Payment Pending
                                    {item.verifiedVia === "magic_link"
                                      ? " (Auto-Verified)"
                                      : ""}
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                                    <FontAwesomeIcon
                                      icon={faUserCheck}
                                      className="text-[10px]"
                                    />
                                    Step 6: Paid ₹
                                    {(
                                      item.details.amountPaid ||
                                      item.pricing.totalPayable
                                    ).toLocaleString("en-IN")}
                                  </span>
                                )}

                                {/* Wave Status Sub-line */}
                                <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5">
                                  {item.status === "completed" ? (
                                    item.recoveredViaFunnel ? (
                                      <span className="text-emerald-600 font-extrabold">
                                        🎯 Recovered via Funnel{" "}
                                        {item.recoveredAtWave > 0
                                          ? `(Wave ${item.recoveredAtWave})`
                                          : "(Magic Link)"}
                                      </span>
                                    ) : (
                                      <span className="text-slate-400">
                                        Direct Checkout Conversion
                                      </span>
                                    )
                                  ) : item.currentWave > 0 ? (
                                    <span className="text-indigo-600 font-extrabold">
                                      📨 Wave {item.currentWave} Dispatched
                                      {item.nextWave
                                        ? ` • Next: W${item.nextWave.wave} ${
                                            item.nextWave.isOverdue
                                              ? "Due Now"
                                              : `in ${formatDurationMinutes(
                                                  item.nextWave.dueInMinutes
                                                )}`
                                          }`
                                        : " • All 3 Waves Sent"}
                                    </span>
                                  ) : item.nextWave ? (
                                    <span className="text-slate-500 flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-amber-500" />
                                      Wave 1{" "}
                                      {item.nextWave.isOverdue
                                        ? "Due in Queue Now"
                                        : `in ${formatDurationMinutes(
                                            item.nextWave.dueInMinutes
                                          )}`}
                                    </span>
                                  ) : (
                                    <span className="text-slate-400">Awaiting Queue</span>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* 4. Discount, Channels & Clicks */}
                            <td className="py-4 px-5 align-middle">
                              <div className="space-y-1.5">
                                {/* Price & Discount Badge */}
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {item.discountPercent > 0 ? (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                                      <Tag className="w-3 h-3" />
                                      {item.discountPercent}% OFF: ₹
                                      {item.pricing.totalPayable.toLocaleString("en-IN")}
                                      <span className="line-through text-slate-400 font-semibold ml-0.5">
                                        ₹{item.pricing.totalOriginal.toLocaleString("en-IN")}
                                      </span>
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                                      Standard: ₹
                                      {item.pricing.totalOriginal.toLocaleString("en-IN")}
                                    </span>
                                  )}
                                </div>

                                {/* Channel Delivery Status & Link Clicks */}
                                <div className="flex items-center gap-2 flex-wrap text-[10px] font-bold">
                                  {(w1 || w2 || w3) && (
                                    <span className="inline-flex items-center gap-1 text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                      <MessageSquare className="w-2.5 h-2.5 text-emerald-600" />
                                      {[w1, w2, w3]
                                        .filter(Boolean)
                                        .map(
                                          (w) =>
                                            `W${w!.wave}:${
                                              w!.whatsappSent ? "✅" : "❌"
                                            }`
                                        )
                                        .join(" ")}
                                    </span>
                                  )}
                                  {item.clickCount > 0 ? (
                                    <span className="inline-flex items-center gap-1 text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md font-extrabold">
                                      <MousePointerClick className="w-3 h-3" />
                                      Clicked {item.clickCount}x
                                    </span>
                                  ) : (
                                    <span className="text-slate-400">No link clicks</span>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* 5. Quick Actions */}
                            <td className="py-4 px-5 text-right align-middle">
                              <div className="flex items-center justify-end gap-1.5">
                                {item.status !== "completed" && (
                                  <>
                                    <button
                                      onClick={() => handleCopyMagicLink(item)}
                                      className="px-2.5 py-1.5 border border-slate-200 rounded-xl text-[10px] font-extrabold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer bg-white"
                                      title="Copy Personal Express Checkout Link"
                                    >
                                      {copiedId === item.id ? (
                                        <>
                                          <Check className="w-3 h-3 text-emerald-600" />
                                          <span className="text-emerald-700">Copied</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3 h-3 text-slate-500" />
                                          <span>Link</span>
                                        </>
                                      )}
                                    </button>

                                    <button
                                      onClick={() => handleSendWave(item, 2, 15)}
                                      disabled={actionLoadingKey === `${item.id}_wave_2`}
                                      className="px-2.5 py-1.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[10px] font-black transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50 shadow-xs"
                                      title="Instantly Unlock 15% Discount & Send Wave 2 WATI + Email"
                                    >
                                      {actionLoadingKey === `${item.id}_wave_2` ? (
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                      ) : (
                                        <Zap className="w-3 h-3" />
                                      )}
                                      <span>Send 15% Off</span>
                                    </button>
                                  </>
                                )}

                                <button
                                  onClick={() =>
                                    setExpandedItemId(isExpanded ? null : item.id)
                                  }
                                  className={`p-2 border rounded-xl transition-colors cursor-pointer ${
                                    isExpanded
                                      ? "bg-[#111827] text-white border-[#111827]"
                                      : "border-gray-200 text-gray-500 hover:text-white hover:bg-gray-800 hover:border-gray-800"
                                  }`}
                                  title="Expand Full Step Timeline & Controls"
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* ── Expanded Row: Full Chronological Step Timeline & Manual Wave Controls ── */}
                          <AnimatePresence>
                            {isExpanded && (
                              <tr>
                                <td
                                  colSpan={5}
                                  className="py-0 px-6 border-b border-gray-200 bg-slate-50/90"
                                >
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden py-5 space-y-5"
                                  >
                                    {/* 6-Step Chronological Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-left">
                                      {/* Step 1: Details Submitted */}
                                      <div className="bg-white border border-emerald-200 rounded-2xl p-3.5 shadow-xs">
                                        <div className="flex items-center justify-between text-[10px] font-black uppercase text-emerald-700 mb-1">
                                          <span>Step 1: Form</span>
                                          <span>✓ Done</span>
                                        </div>
                                        <p className="text-xs font-extrabold text-slate-800">
                                          Details Submitted
                                        </p>
                                        <p className="text-[10px] text-slate-500 font-semibold mt-1">
                                          {new Date(item.createdAt).toLocaleString(
                                            "en-IN",
                                            {
                                              day: "numeric",
                                              month: "short",
                                              hour: "2-digit",
                                              minute: "2-digit",
                                            }
                                          )}
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-0.5">
                                          {item.oppositionCount}{" "}
                                          {item.oppositionCount === 1
                                            ? "Opposing Party"
                                            : "Opposing Parties"}{" "}
                                          (₹{item.pricing.totalOriginal.toLocaleString("en-IN")})
                                        </p>
                                      </div>

                                      {/* Step 2: Identity Verification */}
                                      <div
                                        className={`bg-white border rounded-2xl p-3.5 shadow-xs ${
                                          item.status !== "pending_verification"
                                            ? "border-emerald-200"
                                            : "border-amber-200"
                                        }`}
                                      >
                                        <div className="flex items-center justify-between text-[10px] font-black uppercase mb-1">
                                          <span
                                            className={
                                              item.status !== "pending_verification"
                                                ? "text-emerald-700"
                                                : "text-amber-700"
                                            }
                                          >
                                            Step 2: Identity
                                          </span>
                                          <span
                                            className={
                                              item.status !== "pending_verification"
                                                ? "text-emerald-700"
                                                : "text-amber-700"
                                            }
                                          >
                                            {item.status !== "pending_verification"
                                              ? "✓ Verified"
                                              : "● Pending"}
                                          </span>
                                        </div>
                                        <p className="text-xs font-extrabold text-slate-800">
                                          {item.status === "pending_verification"
                                            ? "Awaiting OTP / Link Click"
                                            : item.verifiedVia === "magic_link"
                                            ? "Verified via Magic Link"
                                            : "Verified via OTP"}
                                        </p>
                                        <p className="text-[10px] text-slate-500 font-semibold mt-1">
                                          {item.status === "pending_verification"
                                            ? `Failed Attempts: ${
                                                item.details.failedAttempts || 0
                                              }/5`
                                            : item.details.verifiedAt
                                            ? new Date(
                                                item.details.verifiedAt
                                              ).toLocaleString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                              })
                                            : "Verified"}
                                        </p>
                                      </div>

                                      {/* Step 3, 4, 5: Retargeting Waves 1, 2, 3 */}
                                      {([1, 2, 3] as const).map((wNum) => {
                                        const wData = item.waves?.[String(wNum) as "1" | "2" | "3"];
                                        const isSent = Boolean(
                                          wData?.whatsappSent ||
                                            wData?.emailSent ||
                                            wData?.sentAt ||
                                            item.recoveredAtWave === wNum
                                        );
                                        return (
                                          <div
                                            key={wNum}
                                            className={`bg-white border rounded-2xl p-3.5 shadow-xs ${
                                              isSent
                                                ? "border-emerald-200"
                                                : "border-slate-200/80"
                                            }`}
                                          >
                                            <div className="flex items-center justify-between text-[10px] font-black uppercase mb-1">
                                              <span
                                                className={
                                                  isSent
                                                    ? "text-emerald-700"
                                                    : "text-slate-400"
                                                }
                                              >
                                                Step {wNum + 2}: Wave {wNum}
                                              </span>
                                              <span
                                                className={
                                                  isSent
                                                    ? "text-emerald-700"
                                                    : "text-slate-400"
                                                }
                                              >
                                                {isSent
                                                  ? "✓ Sent"
                                                  : item.status === "completed"
                                                  ? "— Not Sent"
                                                  : "○ Pending"}
                                              </span>
                                            </div>
                                            <p className="text-xs font-extrabold text-slate-800">
                                              {wNum === 1
                                                ? "30m Setup Reminder"
                                                : wNum === 2
                                                ? "6h 15% Fee Drop"
                                                : "24h Expiry Warning"}
                                            </p>
                                            {isSent ? (
                                              <div className="mt-1 space-y-0.5 text-[10px] font-semibold text-slate-600">
                                                <div>
                                                  WATI:{" "}
                                                  {wData?.whatsappSent ? "✅" : "❌"} •
                                                  Email:{" "}
                                                  {wData?.emailSent ? "✅" : "❌"}
                                                </div>
                                                {wData?.sentAt && (
                                                  <div className="text-slate-400">
                                                    {new Date(
                                                      wData.sentAt
                                                    ).toLocaleString("en-IN", {
                                                      day: "numeric",
                                                      month: "short",
                                                      hour: "2-digit",
                                                      minute: "2-digit",
                                                    })}
                                                  </div>
                                                )}
                                                {wData?.lastError && (
                                                  <div
                                                    className="text-red-500 truncate"
                                                    title={wData.lastError}
                                                  >
                                                    {wData.lastError}
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              <p className="text-[10px] text-slate-400 font-semibold mt-1">
                                                {item.status === "completed"
                                                  ? "Skipped — Paid directly"
                                                  : item.nextWave?.wave === wNum
                                                  ? item.nextWave.isOverdue
                                                    ? "Due in Queue Now"
                                                    : `Scheduled in ${formatDurationMinutes(
                                                        item.nextWave.dueInMinutes
                                                      )}`
                                                  : "Not Dispatched Yet"}
                                              </p>
                                            )}
                                          </div>
                                        );
                                      })}

                                      {/* Step 6: Payment Completed */}
                                      <div
                                        className={`bg-white border rounded-2xl p-3.5 shadow-xs ${
                                          item.status === "completed"
                                            ? "border-emerald-300 bg-emerald-50/30"
                                            : "border-slate-200/80"
                                        }`}
                                      >
                                        <div className="flex items-center justify-between text-[10px] font-black uppercase mb-1">
                                          <span
                                            className={
                                              item.status === "completed"
                                                ? "text-emerald-700"
                                                : "text-slate-400"
                                            }
                                          >
                                            Step 6: Payment
                                          </span>
                                          <span
                                            className={
                                              item.status === "completed"
                                                ? "text-emerald-700"
                                                : "text-slate-400"
                                            }
                                          >
                                            {item.status === "completed"
                                              ? "✓ Paid"
                                              : "○ Unpaid"}
                                          </span>
                                        </div>
                                        <p className="text-xs font-extrabold text-slate-800">
                                          {item.status === "completed"
                                            ? `Paid ₹${(
                                                item.details.amountPaid ||
                                                item.pricing.totalPayable
                                              ).toLocaleString("en-IN")}`
                                            : `Payable: ₹${item.pricing.totalPayable.toLocaleString(
                                                "en-IN"
                                              )}`}
                                        </p>
                                        <p className="text-[10px] text-slate-500 font-semibold mt-1">
                                          {item.status === "completed"
                                            ? `Txn: ${item.details.payuTxnId || "N/A"}`
                                            : item.clickCount > 0
                                            ? `Link Clicked ${item.clickCount}x`
                                            : "Awaiting Checkout"}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Manual Override & Testing Controls Bar */}
                                    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                      <div className="space-y-1 text-left">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                                          Personal Cross-Device Express Checkout Link (Auto-Verifies &amp; Applies Discount)
                                        </span>
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <code className="text-xs font-mono font-bold text-[#111827] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 break-all">
                                            {item.magicLink || "Generating..."}
                                          </code>
                                          <button
                                            onClick={() => handleCopyMagicLink(item)}
                                            className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
                                          >
                                            <Copy className="w-3 h-3" /> Copy Link
                                          </button>
                                          {item.status !== "completed" &&
                                            item.discountPercent < 15 && (
                                              <button
                                                onClick={() =>
                                                  handleUnlockDiscountOnly(item, 15)
                                                }
                                                disabled={
                                                  actionLoadingKey === `${item.id}_unlock`
                                                }
                                                className="px-3 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-extrabold flex items-center gap-1.5 cursor-pointer"
                                              >
                                                <Tag className="w-3 h-3" /> Unlock 15% Off on
                                                Link Only
                                              </button>
                                            )}
                                        </div>
                                      </div>

                                      {item.status !== "completed" && (
                                        <div className="flex flex-wrap items-center gap-2">
                                          <button
                                            onClick={() => handleSendWave(item, 1, 0)}
                                            disabled={
                                              actionLoadingKey === `${item.id}_wave_1`
                                            }
                                            className="px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                                          >
                                            {actionLoadingKey === `${item.id}_wave_1` ? (
                                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                            ) : (
                                              <Send className="w-3.5 h-3.5 text-slate-600" />
                                            )}
                                            <span>Send Wave 1 Now</span>
                                          </button>

                                          <button
                                            onClick={() => handleSendWave(item, 2, 15)}
                                            disabled={
                                              actionLoadingKey === `${item.id}_wave_2`
                                            }
                                            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-sm"
                                          >
                                            {actionLoadingKey === `${item.id}_wave_2` ? (
                                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                            ) : (
                                              <Sparkles className="w-3.5 h-3.5" />
                                            )}
                                            <span>Send Wave 2 (15% Off) Now</span>
                                          </button>

                                          <button
                                            onClick={() => handleSendWave(item, 3, 15)}
                                            disabled={
                                              actionLoadingKey === `${item.id}_wave_3`
                                            }
                                            className="px-3.5 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-sm"
                                          >
                                            {actionLoadingKey === `${item.id}_wave_3` ? (
                                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                            ) : (
                                              <Zap className="w-3.5 h-3.5" />
                                            )}
                                            <span>Send Wave 3 (Last Call) Now</span>
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                </td>
                              </tr>
                            )}
                          </AnimatePresence>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>

                <div ref={sentinelRef} className="h-1" />

                {isLoadingMore && (
                  <div className="flex items-center justify-center gap-2 py-6">
                    <Loader2 className="w-5 h-5 text-[#DC2626] animate-spin" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Loading more records...
                    </span>
                  </div>
                )}

                {!hasMore && items.length > 0 && (
                  <div className="text-center py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100">
                    Showing all {items.length.toLocaleString("en-IN")} of{" "}
                    {totalFiltered.toLocaleString("en-IN")} records
                  </div>
                )}
              </div>
            ) : (
              <div className="py-20 text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest border border-dashed border-gray-200 rounded-2xl bg-gray-50/30">
                No matching funnel records found for this stage.
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
