"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faFilter, faCalendarAlt,
  faEnvelope, faMapMarkerAlt, faPhone,
  faEye, faRefresh, faClipboardList, faLaptop, faNetworkWired
} from "@fortawesome/free-solid-svg-icons";
import { Loader2 } from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  state: string;
  message: string;
  source: string;
  userAgent: string;
  ip: string;
  createdAt: string;
}

interface Summary {
  totalSubmissions: number;
  categoriesStats: Record<string, number>;
}

const ITEMS_PER_PAGE = 50;

/* ── Component ───────────────────────────────────────── */

export default function ContactSubmissions() {
  const [items, setItems] = useState<ContactSubmission[]>([]);
  const [summary, setSummary] = useState<Summary>({
    totalSubmissions: 0,
    categoriesStats: {},
  });
  const [totalFiltered, setTotalFiltered] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
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
          category: categoryFilter,
          search: debouncedSearch,
        });

        const res = await fetch(`/api/admin/contact-submissions?${params}`, { signal });
        if (!res.ok) throw new Error("Failed to load contact submissions.");
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
              totalSubmissions: 0,
              categoriesStats: {},
            }
          );
        }
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        console.error("Error loading submissions:", err);
      } finally {
        setIsInitialLoad(false);
        setIsSearching(false);
        setIsLoadingMore(false);
        setRefreshing(false);
      }
    },
    [categoryFilter, debouncedSearch]
  );

  // ── Reset & fetch page 1 whenever filter or search changes ──
  useEffect(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPage(1);
    setExpandedItemId(null);
    fetchPage(1, false, controller.signal);

    return () => controller.abort();
  }, [debouncedSearch, categoryFilter, fetchPage]);

  // ── Manual refresh ──
  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchPage(1, false);
  };

  // ── Load-more via ref ──
  const loadMoreRef = useRef<() => void>();
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
  }, [isInitialLoad]);

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
            Contact Form Submissions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Audit customer inquiries, support queries, and consulting requests submitted from the landing page.
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

      {/* ── Initial Loader ── */}
      {isInitialLoad ? (
        <div className="py-32 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
          <p className="text-xs font-bold text-gray-450 uppercase tracking-widest">
            Introspecting Inquiries...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* ── Metrics Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Submissions</span>
              <div className="text-2xl font-black text-gray-900 mt-1">
                {summary.totalSubmissions}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Loan Settlement</span>
              <div className="text-2xl font-black text-[#DC2626] mt-1">
                {summary.categoriesStats["loan-settlement"] || summary.categoriesStats["Loan Settlement"] || 0}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Banking &amp; Finance</span>
              <div className="text-2xl font-black text-blue-600 mt-1">
                {summary.categoriesStats["banking-and-finance"] || summary.categoriesStats["Banking and Finance"] || 0}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Corporate &amp; Others</span>
              <div className="text-2xl font-black text-emerald-600 mt-1">
                {Object.entries(summary.categoriesStats).reduce((acc, [cat, val]) => {
                  if (
                    cat !== "loan-settlement" &&
                    cat !== "Loan Settlement" &&
                    cat !== "banking-and-finance" &&
                    cat !== "Banking and Finance"
                  ) {
                    return acc + val;
                  }
                  return acc;
                }, 0)}
              </div>
            </div>
          </div>

          {/* ── Filters & List Table ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Fuzzy Search */}
              <div className="flex items-center gap-3 w-full max-w-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus-within:bg-white focus-within:border-[#DC2626] transition-colors shadow-sm">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, state, category..."
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

              {/* Counts & Categories Dropdown Filter */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  {totalFiltered.toLocaleString("en-IN")} inquiry{totalFiltered !== 1 ? "ies" : ""}
                </span>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FontAwesomeIcon
                      icon={faFilter}
                      className="text-gray-400"
                    />
                    Category
                  </span>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 bg-white rounded-xl text-xs font-bold text-gray-700 focus:outline-none cursor-pointer hover:border-gray-300"
                  >
                    <option value="all">All Categories</option>
                    <option value="banking-and-finance">Banking &amp; Finance</option>
                    <option value="loan-settlement">Loan Settlement</option>
                    <option value="intellectual-property-rights">IPR</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="criminal-law">Criminal Law</option>
                    <option value="corporate">Corporate</option>
                    <option value="arbitration">Arbitration</option>
                    <option value="cyber">Cyber</option>
                    <option value="civil">Civil</option>
                    <option value="drafting">Drafting</option>
                    <option value="litigation">Litigation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Inline search loading */}
            {isSearching ? (
              <div className="py-16 flex flex-col items-center justify-center gap-2">
                <Loader2 className="w-6 h-6 text-[#DC2626] animate-spin" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Loading submissions...
                </span>
              </div>
            ) : items.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-black uppercase tracking-wider bg-gray-50/40">
                      <th className="py-4 px-6">Client Details</th>
                      <th className="py-4 px-6">Service Area</th>
                      <th className="py-4 px-6">State / Region</th>
                      <th className="py-4 px-6">Submitted At</th>
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
                              <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                                <FontAwesomeIcon
                                  icon={faClipboardList}
                                  className="text-[10px] text-slate-450"
                                />
                                {item.serviceCategory}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[10px] text-slate-400" />
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
                                    className="overflow-hidden py-5 border-t border-dashed border-gray-200/70"
                                  >
                                    <div className="space-y-4">
                                      {/* Message Details */}
                                      <div className="bg-white border border-gray-200/60 p-5 rounded-2xl shadow-sm text-left">
                                        <h5 className="font-black text-gray-800 uppercase tracking-wider text-[9px] border-b border-gray-100 pb-2 mb-3 flex items-center gap-1">
                                          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                                          Client Message Message Description
                                        </h5>
                                        <p className="text-xs text-gray-700 whitespace-pre-wrap leading-relaxed">
                                          {item.message || "No message description was entered."}
                                        </p>
                                      </div>

                                      {/* Technical audit fields */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm text-left space-y-2">
                                          <h6 className="font-black text-gray-850 uppercase tracking-wider text-[8.5px] border-b border-gray-50 pb-1 flex items-center gap-1.5">
                                            <FontAwesomeIcon icon={faLaptop} className="text-slate-400" />
                                            User Agent Client Details
                                          </h6>
                                          <span className="text-[10px] font-mono text-gray-500 break-words block leading-relaxed">
                                            {item.userAgent || "Unknown User Agent"}
                                          </span>
                                        </div>

                                        <div className="bg-white border border-gray-200/60 p-4 rounded-xl shadow-sm text-left space-y-2">
                                          <h6 className="font-black text-gray-850 uppercase tracking-wider text-[8.5px] border-b border-gray-50 pb-1 flex items-center gap-1.5">
                                            <FontAwesomeIcon icon={faNetworkWired} className="text-slate-400" />
                                            Technical Audit Network Info
                                          </h6>
                                          <div className="space-y-1 text-xs">
                                            <div className="flex justify-between text-slate-500">
                                              <span>Source Reference:</span>
                                              <span className="font-bold text-gray-700">{item.source}</span>
                                            </div>
                                            <div className="flex justify-between text-slate-500">
                                              <span>IP Address:</span>
                                              <span className="font-mono text-gray-700 font-bold">{item.ip || "Direct/Internal"}</span>
                                            </div>
                                            <div className="flex justify-between text-slate-500">
                                              <span>Record ID:</span>
                                              <span className="font-mono text-gray-500 text-[10px]">{item.id}</span>
                                            </div>
                                          </div>
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

                {/* Sentinel */}
                <div ref={sentinelRef} className="h-1" />

                {/* Loading more */}
                {isLoadingMore && (
                  <div className="flex items-center justify-center gap-2 py-6">
                    <Loader2 className="w-5 h-5 text-[#DC2626] animate-spin" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Loading more submissions...
                    </span>
                  </div>
                )}

                {/* End of list */}
                {!hasMore && items.length > 0 && (
                  <div className="text-center py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100">
                    Showing all {items.length.toLocaleString("en-IN")} of {totalFiltered.toLocaleString("en-IN")} submissions
                  </div>
                )}
              </div>
            ) : (
              <div className="py-20 text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest border border-dashed border-gray-200 rounded-2xl bg-gray-50/30">
                No contact submissions matched your filters.
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
