"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faUsers,
  faFunnelDollar,
  faChartLine,
  faHourglassHalf,
  faWallet,
  faRefresh,
  faCoins,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { Loader2 } from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface DashboardStats {
  totalRevenue: number;
  totalUsers: number;
  totalLeads: number;
  pendingVerificationCount: number;
  pendingPaymentCount: number;
  conversionRate: number;
  totalClaimed: number;
  totalRecovered: number;
}

/* ── Animated counter ────────────────────────────────── */

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) { setDisplay(0); return; }
    const start = performance.now();
    const from = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ── Component ───────────────────────────────────────── */

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async (silent = false) => {
    if (!silent) setIsLoading(true);
    else setRefreshing(true);

    try {
      const res = await fetch(`/api/admin/dashboard?_t=${Date.now()}`);
      if (!res.ok) throw new Error("Failed to load dashboard stats.");
      const data = await res.json();
      if (data.success) setStats(data.stats);
    } catch (err) {
      console.error("Error loading dashboard:", err);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  /* ── Render ─────────────────────────────────────────── */

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative max-w-8xl mx-auto select-none text-left"
      style={{ zoom: 0.8 }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6 mb-8">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Real-time overview of platform revenue, users, and conversion
            metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchStats(true)}
            disabled={refreshing}
            className="flex items-center justify-center p-2.5 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 cursor-pointer disabled:opacity-50 transition-colors bg-white"
            title="Refresh stats"
          >
            <FontAwesomeIcon
              icon={faRefresh}
              className={refreshing ? "animate-spin" : ""}
            />
          </button>
        </div>
      </div>

      {/* ── Loading ── */}
      {isLoading || !stats ? (
        <div className="py-32 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Loading dashboard metrics...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* ── Primary KPI Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Total Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden group"
            >
              {/* Decorative glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="flex items-start justify-between relative">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    Total Revenue
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                    <AnimatedNumber
                      value={stats.totalRevenue}
                      prefix="₹"
                    />
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">
                    Lifetime platform earnings from{" "}
                    <span className="text-emerald-600 font-bold">
                      {stats.totalUsers}
                    </span>{" "}
                    paid subscriptions
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className="text-emerald-600 text-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Total Users */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="flex items-start justify-between relative">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    Total Paid Users
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                    <AnimatedNumber value={stats.totalUsers} />
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">
                    Active subscribed clients with legal cases
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-blue-600 text-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Total Amount Claimed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="flex items-start justify-between relative">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    Total Amount Claimed
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                    <AnimatedNumber
                      value={stats.totalClaimed}
                      prefix="₹"
                    />
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">
                    Outstanding dues registered by all clients
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    className="text-amber-600 text-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Total Amount Recovered */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="flex items-start justify-between relative">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    Total Amount Recovered
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                    <AnimatedNumber
                      value={stats.totalRecovered}
                      prefix="₹"
                    />
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">
                    Defaulter payments resolved ({stats.totalClaimed > 0 ? ((stats.totalRecovered / stats.totalClaimed) * 100).toFixed(1) : "0"}% recovery rate)
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="text-indigo-600 text-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Secondary Metric Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Total Leads */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faFunnelDollar}
                    className="text-slate-500 text-sm"
                  />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Total Leads
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#111827]">
                <AnimatedNumber value={stats.totalLeads} />
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-1">
                All signup forms submitted
              </p>
            </motion.div>

            {/* Conversion Rate */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-emerald-500 text-sm"
                  />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Conversion Rate
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#111827]">
                {stats.conversionRate}%
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-1">
                Leads → paid customers
              </p>
            </motion.div>

            {/* Pending Verification */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHourglassHalf}
                    className="text-amber-500 text-sm"
                  />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Pending OTP
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#111827]">
                <AnimatedNumber value={stats.pendingVerificationCount} />
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-1">
                Awaiting phone verification
              </p>
            </motion.div>

            {/* Pending Payment */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="text-orange-500 text-sm"
                  />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Pending Payment
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#111827]">
                <AnimatedNumber value={stats.pendingPaymentCount} />
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-1">
                Verified, awaiting checkout
              </p>
            </motion.div>
          </div>

          {/* ── Revenue Breakdown ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
          >
            <h3 className="text-sm font-black text-gray-700 uppercase tracking-widest mb-6">
              Revenue Breakdown
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                  Avg. Revenue per User
                </span>
                <h4 className="text-xl font-black text-slate-800">
                  ₹
                  {stats.totalUsers > 0
                    ? Math.round(
                        stats.totalRevenue / stats.totalUsers
                      ).toLocaleString("en-IN")
                    : "0"}
                </h4>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                  Potential Pipeline Revenue
                </span>
                <h4 className="text-xl font-black text-amber-700">
                  ₹
                  {(
                    (stats.pendingVerificationCount +
                      stats.pendingPaymentCount) *
                    999
                  ).toLocaleString("en-IN")}
                </h4>
                <p className="text-[9px] text-slate-400 font-semibold mt-1">
                  If all pending leads convert @ ₹999
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                  Total Leads Lost (Dropoff)
                </span>
                <h4 className="text-xl font-black text-red-600">
                  <AnimatedNumber
                    value={stats.totalLeads - stats.totalUsers}
                  />
                </h4>
                <p className="text-[9px] text-slate-400 font-semibold mt-1">
                  Leads that never completed payment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
