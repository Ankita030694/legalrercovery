"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faFilter, faCalendarAlt,
  faUserCheck, faWallet, faMobileAlt,
  faEye, faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { Loader2 } from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface FunnelItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  oppositionCount: number;
  status: "pending_verification" | "pending_payment" | "completed";
  createdAt: string;
  details: {
    failedAttempts?: number;
    otpExpires?: string | null;
    verifiedAt?: string | null;
    txnid?: string | null;
    amountPaid?: number;
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
  completedCount: number;
  conversionRate: number;
}

const ITEMS_PER_PAGE = 200;

/* ── Component ───────────────────────────────────────── */

export default function ConversionFunnel() {
  const [items, setItems] = useState<FunnelItem[]>([]);
  const [summary, setSummary] = useState<Summary>({
    totalSubmitted: 0,
    pendingVerificationCount: 0,
    pendingPaymentCount: 0,
    completedCount: 0,
    conversionRate: 0,
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

  const sentinelRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Debounce search input (800ms) ──
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 800);
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
          setSummary(
            data.summary || {
              totalSubmitted: 0,
              pendingVerificationCount: 0,
              pendingPaymentCount: 0,
              completedCount: 0,
              conversionRate: 0,
            }
          );
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

  // ── Reset & fetch page 1 whenever filter or search changes ──
  useEffect(() => {
    // Cancel any in-flight request before starting a new one
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPage(1);
    setExpandedItemId(null);
    fetchPage(1, false, controller.signal);

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, statusFilter]);

  // ── Manual refresh ──
  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchPage(1, false);
  };

  // ── Load-more via ref (avoids stale closures) ──
  const loadMoreRef = useRef<() => void>(undefined);
  loadMoreRef.current = () => {
    if (!hasMore || isSearching || isLoadingMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPage(nextPage, true);
  };

  // ── Infinite scroll observer ──
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
  }, [isInitialLoad]); // reconnect after initial load

  /* ── Render ─────────────────────────────────────────── */

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none text-left"
      style={{ zoom: 0.8 }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6 mb-6">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Conversion Funnel
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Monitor the registration funnel, from submitted signup forms to
            payment checkouts and active cases.
          </p>
        </div>

        <div className="flex items-center gap-3">
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

      {/* ── Initial full-page loader (first mount only) ── */}
      {isInitialLoad ? (
        <div className="py-32 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
          <p className="text-xs font-bold text-gray-450 uppercase tracking-widest">
            Introspecting Conversion Funnel...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* ── List & Filters ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] space-y-6">
            {/* Search + Filter Bar (always mounted) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full max-w-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus-within:bg-white focus-within:border-[#DC2626] transition-colors shadow-sm">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Fuzzy search by name, phone, email, state..."
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
                {/* Filtered count badge */}
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  {totalFiltered.toLocaleString("en-IN")} result{totalFiltered !== 1 ? "s" : ""}
                </span>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FontAwesomeIcon
                      icon={faFilter}
                      className="text-gray-400"
                    />
                    Status
                  </span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 bg-white rounded-xl text-xs font-bold text-gray-700 focus:outline-none cursor-pointer hover:border-gray-300"
                  >
                    <option value="all">All Forms (Leads)</option>
                    <option value="pending_verification">
                      Pending OTP Verification
                    </option>
                    <option value="pending_payment">
                      Pending Checkout Payment
                    </option>
                    <option value="completed">Completed &amp; Paid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ── Inline search/filter loading ── */}
            {isSearching ? (
              <div className="py-16 flex flex-col items-center justify-center gap-2">
                <Loader2 className="w-6 h-6 text-[#DC2626] animate-spin" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Searching records...
                </span>
              </div>
            ) : items.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-black uppercase tracking-wider bg-gray-50/40">
                      <th className="py-4 px-6">Client Details</th>
                      <th className="py-4 px-6">State / Region</th>
                      <th className="py-4 px-6">Submitted Date</th>
                      <th className="py-4 px-6">Funnel Status</th>
                      <th className="py-4 px-6 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      const isExpanded = expandedItemId === item.id;
                      return (
                        <React.Fragment key={item.id}>
                          <tr
                            className={`border-b border-gray-100 hover:bg-gray-50/20 transition-colors ${
                              isExpanded ? "bg-slate-50/40" : ""
                            }`}
                          >
                            <td className="py-4 px-6">
                              <div className="text-xs sm:text-sm font-extrabold text-gray-800">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-400 font-semibold mt-0.5 flex flex-wrap gap-x-3">
                                <span>📞 {item.phone}</span>
                                <span>📧 {item.email}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-xs font-semibold text-gray-600">
                                {item.state}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                                <FontAwesomeIcon
                                  icon={faCalendarAlt}
                                  className="text-[10px] text-slate-350"
                                />
                                {new Date(item.createdAt).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </div>
                              <span className="text-[9px] text-gray-400 font-medium">
                                {new Date(item.createdAt).toLocaleTimeString(
                                  "en-IN",
                                  { hour: "2-digit", minute: "2-digit" }
                                )}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              {item.status === "pending_verification" ? (
                                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-yellow-250 bg-yellow-50 text-yellow-800">
                                  <FontAwesomeIcon
                                    icon={faMobileAlt}
                                    className="text-[10px]"
                                  />
                                  Pending OTP
                                </span>
                              ) : item.status === "pending_payment" ? (
                                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-250 bg-orange-50 text-orange-850">
                                  <FontAwesomeIcon
                                    icon={faWallet}
                                    className="text-[10px]"
                                  />
                                  Pending Payment
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-green-200 bg-green-50 text-[#10B981]">
                                  <FontAwesomeIcon
                                    icon={faUserCheck}
                                    className="text-[10px]"
                                  />
                                  Completed &amp; Paid
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button
                                onClick={() =>
                                  setExpandedItemId(
                                    isExpanded ? null : item.id
                                  )
                                }
                                className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-colors cursor-pointer"
                                title="Expand Details"
                              >
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                            </td>
                          </tr>

                          {/* Expanded Details */}
                          <AnimatePresence>
                            {isExpanded && (
                              <tr>
                                <td
                                  colSpan={5}
                                  className="py-0 px-6 border-b border-gray-100 bg-slate-50/50"
                                >
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden py-4 border-t border-dashed border-gray-200/70"
                                  >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-left">
                                      {/* Account Status */}
                                      <div className="space-y-2 bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm">
                                        <h5 className="font-black text-gray-800 uppercase tracking-wider text-[9px] border-b border-gray-100 pb-1 flex justify-between">
                                          <span>Account Status Info</span>
                                          <span className="text-[#DC2626] font-mono font-extrabold">
                                            {item.status.toUpperCase()}
                                          </span>
                                        </h5>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-slate-500 font-medium">
                                            <span>Database Ref ID:</span>
                                            <span className="font-mono text-gray-700">
                                              {item.id}
                                            </span>
                                          </div>
                                          <div className="flex justify-between text-slate-500 font-medium">
                                            <span>Oppositions Limit:</span>
                                            <span className="font-bold text-gray-700">
                                              {item.oppositionCount} Parties
                                            </span>
                                          </div>
                                          <div className="flex justify-between text-slate-500 font-medium">
                                            <span>State Region:</span>
                                            <span className="font-bold text-gray-700">
                                              {item.state}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Verification Details */}
                                      <div className="space-y-2 bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm">
                                        <h5 className="font-black text-gray-800 uppercase tracking-wider text-[9px] border-b border-gray-100 pb-1">
                                          Verification Details
                                        </h5>
                                        <div className="space-y-1">
                                          {item.status ===
                                          "pending_verification" ? (
                                            <>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  Failed Verification Attempts:
                                                </span>
                                                <span
                                                  className={`font-bold ${
                                                    Number(
                                                      item.details
                                                        .failedAttempts
                                                    ) > 2
                                                      ? "text-red-500"
                                                      : "text-gray-700"
                                                  }`}
                                                >
                                                  {item.details
                                                    .failedAttempts || 0}{" "}
                                                  / 5
                                                </span>
                                              </div>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  Verification Session Expiry:
                                                </span>
                                                <span className="font-semibold text-gray-700">
                                                  {item.details.otpExpires
                                                    ? new Date(
                                                        item.details.otpExpires
                                                      ).toLocaleTimeString(
                                                        "en-IN",
                                                        {
                                                          hour: "2-digit",
                                                          minute: "2-digit",
                                                          second: "2-digit",
                                                        }
                                                      )
                                                    : "N/A"}
                                                </span>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  OTP Phone Verification:
                                                </span>
                                                <span className="text-[#10B981] font-black">
                                                  VERIFIED SUCCESS
                                                </span>
                                              </div>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  Verification Timestamp:
                                                </span>
                                                <span className="font-bold text-gray-700">
                                                  {item.details.verifiedAt
                                                    ? new Date(
                                                        item.details.verifiedAt
                                                      ).toLocaleString(
                                                        "en-IN",
                                                        {
                                                          day: "numeric",
                                                          month: "short",
                                                          hour: "2-digit",
                                                          minute: "2-digit",
                                                        }
                                                      )
                                                    : "Before timestamp tracking"}
                                                </span>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>

                                      {/* Payment & Subscription */}
                                      <div className="space-y-2 bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm">
                                        <h5 className="font-black text-gray-800 uppercase tracking-wider text-[9px] border-b border-gray-100 pb-1">
                                          Payment &amp; Subscription
                                        </h5>
                                        <div className="space-y-1">
                                          {item.status === "completed" ? (
                                            <>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>Amount Paid:</span>
                                                <span className="text-green-600 font-black">
                                                  ₹
                                                  {item.details.amountPaid?.toLocaleString(
                                                    "en-IN"
                                                  )}
                                                </span>
                                              </div>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  PayU Transaction ID:
                                                </span>
                                                <span className="font-mono text-gray-700 font-bold">
                                                  {item.details.payuTxnId}
                                                </span>
                                              </div>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  Associated Case ID:
                                                </span>
                                                <span className="text-blue-600 font-extrabold">
                                                  {item.details.caseId}
                                                </span>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>Checkout Status:</span>
                                                <span className="text-red-500 font-extrabold uppercase">
                                                  AWAITING PAYMENT
                                                </span>
                                              </div>
                                              <div className="flex justify-between text-slate-500 font-medium">
                                                <span>
                                                  PayU Session txnid:
                                                </span>
                                                <span className="font-mono text-gray-600 font-bold">
                                                  {item.details.txnid ||
                                                    "Not initialized"}
                                                </span>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
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

                {/* ── Infinite scroll sentinel ── */}
                <div ref={sentinelRef} className="h-1" />

                {/* ── Loading more indicator ── */}
                {isLoadingMore && (
                  <div className="flex items-center justify-center gap-2 py-6">
                    <Loader2 className="w-5 h-5 text-[#DC2626] animate-spin" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Loading more records...
                    </span>
                  </div>
                )}

                {/* ── End-of-list indicator ── */}
                {!hasMore && items.length > 0 && (
                  <div className="text-center py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100">
                    Showing all {items.length.toLocaleString("en-IN")} of{" "}
                    {totalFiltered.toLocaleString("en-IN")} records
                  </div>
                )}
              </div>
            ) : (
              <div className="py-20 text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest border border-dashed border-gray-200 rounded-2xl bg-gray-50/30">
                No matching funnel records found.
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
