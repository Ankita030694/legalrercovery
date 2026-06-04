"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  IndianRupee,
  CheckCircle2,
  XCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Mail,
  Phone,
  FileSpreadsheet,
  Info,
  Calendar,
  AlertTriangle,
  CreditCard
} from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface TransactionMetrics {
  totalTxns: number;
  totalRevenue: number;
  txnsToday: number;
  totalFailed: number;
}

interface TransactionRecord {
  _id: string;
  userId: string;
  clientName: string;
  phone: string;
  email: string;
  payuTxnId: string;
  amount: number;
  status: string;
  oppositionCount: number;
  createdAt: string;
}

export default function TransactionsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  // Data & States
  const [metrics, setMetrics] = useState<TransactionMetrics | null>(null);
  const [transactions, setTransactions] = useState<TransactionRecord[]>([]);
  
  // Loading states
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  // Selected Transaction Modal
  const [selectedTxn, setSelectedTxn] = useState<TransactionRecord | null>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset page to 1 on new search
    }, 600);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Metrics
  const fetchMetrics = async () => {
    setIsLoadingMetrics(true);
    try {
      const res = await fetch(`/api/admin/transactions?type=metrics&_t=${Date.now()}`);
      if (!res.ok) throw new Error("Failed to load metrics");
      const data = await res.json();
      if (data.success) {
        setMetrics(data.metrics);
      }
    } catch (err) {
      console.error("Error loading transaction metrics:", err);
    } finally {
      setIsLoadingMetrics(false);
    }
  };

  // Fetch Transaction List
  const fetchTransactions = async () => {
    setIsLoadingData(true);
    try {
      const queryParams = new URLSearchParams({
        search: debouncedSearch,
        page: page.toString(),
        limit: limit.toString(),
        _t: Date.now().toString()
      });
      const res = await fetch(`/api/admin/transactions?${queryParams.toString()}`);
      if (!res.ok) throw new Error("Failed to load transactions");
      const data = await res.json();
      if (data.success) {
        setTransactions(data.data);
        setTotalPages(Math.ceil(data.total / limit) || 1);
      }
    } catch (err) {
      console.error("Error loading transactions list:", err);
    } finally {
      setIsLoadingData(false);
    }
  };

  // Run on mount
  useEffect(() => {
    fetchMetrics();
  }, []);

  // Run when search or page changes
  useEffect(() => {
    fetchTransactions();
  }, [debouncedSearch, page]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([fetchMetrics(), fetchTransactions()]);
    setIsRefreshing(false);
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <div className="relative max-w-8xl mx-auto select-none text-left p-2 sm:p-4" style={{ zoom: 0.8 }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-5 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Subscription Payments & Transactions
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Track user checkouts, verify PayU transaction reference keys, and audit revenue streams.
          </p>
        </div>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-xs cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Registry
        </button>
      </div>

      {/* KPI metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Metric: Total Revenue */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-24 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-[#111827]">
              ₹{metrics?.totalRevenue.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            All successful platform sales
          </p>
        </div>

        {/* Metric: Successful count */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Paid Subscriptions
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-[#111827]">
              {metrics?.totalTxns.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Successful checkouts generated
          </p>
        </div>

        {/* Metric: Volume Today */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Payments Today
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-amber-600">
              {metrics?.txnsToday || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            New transactions logged today
          </p>
        </div>

        {/* Metric: Unsuccessful checkout attempts */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Unsuccessful
            </span>
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-red-600">
              {metrics?.totalFailed || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Abandoned or failed checkouts
          </p>
        </div>
      </div>

      {/* Search Filter Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-5">
        <h2 className="text-sm font-black text-gray-700 uppercase tracking-widest self-center">
          Payment Records Registry
        </h2>

        {/* User Search Input */}
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search by client name, email, phone or transaction ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-white"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-sm">✕</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Table section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden">
        {isLoadingData ? (
          <div className="py-24 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Retrieving Payment Transactions...
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            {transactions.length === 0 ? (
              <div className="py-24 text-center">
                <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-semibold">No transaction records found matching the search criteria.</p>
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-wider text-left">
                    <th className="px-6 py-4">Transaction Date</th>
                    <th className="px-6 py-4">PayU Reference ID</th>
                    <th className="px-6 py-4">Client Onboard Details</th>
                    <th className="px-6 py-4">Plan / opposition</th>
                    <th className="px-6 py-4">Gross Amount</th>
                    <th className="px-6 py-4">Payment Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                  {transactions.map((txn) => {
                    const isSuccess = txn.status.toLowerCase() === "success";
                    return (
                      <tr key={txn._id} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-555">
                          {formatDate(txn.createdAt)}
                        </td>
                        <td className="px-6 py-4 font-mono text-[10px] text-slate-500 select-all">
                          {txn.payuTxnId}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-extrabold text-[#111827]">{txn.clientName}</div>
                          <div className="flex flex-col gap-0.5 mt-0.5 text-slate-400 text-[10px]">
                            <span className="flex items-center gap-0.5"><Phone className="w-2.5 h-2.5" />{txn.phone}</span>
                            <span className="flex items-center gap-0.5"><Mail className="w-2.5 h-2.5" />{txn.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            <CreditCard className="w-3 h-3 text-slate-400" />
                            {txn.oppositionCount} Case {txn.oppositionCount > 1 ? "Credits" : "Credit"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-black text-slate-900 text-sm">
                          ₹{txn.amount.toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            isSuccess
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                              : "bg-red-50 text-red-700 border border-red-100"
                          }`}>
                            {isSuccess ? "Success" : "Failed / Pending"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedTxn(txn)}
                            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] cursor-pointer hover:underline"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Server Side Pagination Controls */}
        {totalPages > 1 && !isLoadingData && (
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 bg-slate-50/50">
            <span className="text-xs text-slate-500 font-semibold">
              Page <span className="text-gray-900 font-bold">{page}</span> of{" "}
              <span className="text-gray-900 font-bold">{totalPages}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="p-1.5 border border-gray-200 rounded-lg text-gray-500 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="p-1.5 border border-gray-200 rounded-lg text-gray-500 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Transaction Inspector Modal ── */}
      <AnimatePresence>
        {selectedTxn && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-2xl max-w-md w-full overflow-hidden text-left"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-slate-50/75">
                <div>
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                    Transaction Invoice audit
                  </h3>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    PayU Settlement Reference Record
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTxn(null)}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-500 font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 text-slate-700">
                {/* Status bar */}
                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  selectedTxn.status.toLowerCase() === "success" 
                    ? "bg-emerald-50/50 border-emerald-100/50" 
                    : "bg-red-50/50 border-red-100/50"
                }`}>
                  {selectedTxn.status.toLowerCase() === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                  <div>
                    <span className="font-extrabold text-slate-900 text-xs block">Payment Cleared Successfully</span>
                    <span className="text-[10px] text-slate-500 font-semibold">User credited with {selectedTxn.oppositionCount} notice credits</span>
                  </div>
                </div>

                <div className="space-y-3.5 divide-y divide-gray-50 text-xs">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">Charged Amount</span>
                    <span className="font-black text-slate-900 text-sm">₹{selectedTxn.amount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">PayU Txn ID</span>
                    <span className="font-mono text-[10px] text-slate-700 select-all font-bold bg-slate-50 border border-gray-100 p-1 rounded-md">{selectedTxn.payuTxnId}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">Client Name</span>
                    <span className="font-bold text-slate-800">{selectedTxn.clientName}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">Client Contact</span>
                    <span className="font-semibold text-slate-700">{selectedTxn.phone} | {selectedTxn.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">Payment Timestamp</span>
                    <span className="font-semibold text-slate-700">{formatDate(selectedTxn.createdAt)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 font-semibold">Database user ID</span>
                    <span className="font-mono text-[9px] text-slate-400 select-all">{selectedTxn.userId}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end bg-slate-50/50">
                <button
                  onClick={() => setSelectedTxn(null)}
                  className="px-4 py-2 bg-[#111827] text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Invoice
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
