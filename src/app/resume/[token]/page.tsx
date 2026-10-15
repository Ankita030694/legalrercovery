"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Sparkles,
  Lock,
  AlertCircle,
  Loader2,
  Users,
  LogIn,
  PlusCircle,
} from "lucide-react";

interface ResumePayload {
  success: boolean;
  status: "ready_for_payment" | "already_paid";
  paymentPendingId?: string;
  autoLoginToken?: string;
  lead?: {
    name: string;
    email: string;
    phone: string;
    state: string;
    oppositionCount: number;
    verifiedVia: string;
  };
  user?: {
    name: string;
    email: string;
    phone: string;
    state: string;
    amountPaid: number;
    oppositionCount: number;
    usedSlots: number;
    totalSlots: number;
    remainingSlots: number | "unlimited";
  };
  pricing: {
    oppositionCount: number;
    discountPercent: number;
    unitOriginalPrice: number;
    unitDiscountedPrice: number;
    totalOriginal: number;
    totalPayable: number;
    totalSavings: number;
  };
  discount?: {
    effectiveDiscountPercent: number;
    rawDiscountPercent: number;
    isExpired: boolean;
    graceApplied: boolean;
    discountExpiresAt: string | null;
  };
  discountExpiresAt?: string | null;
  sessionConflict?: {
    loggedInName: string;
    loggedInEmail: string;
  } | null;
}

export default function ExpressResumeCheckoutPage() {
  const params = useParams();
  const token = (params?.token as string) || "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ResumePayload | null>(null);

  const [oppositionCount, setOppositionCount] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [stateRegion, setStateRegion] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [showBuyMore, setShowBuyMore] = useState(false);
  const [countdownText, setCountdownText] = useState<string>("");

  useEffect(() => {
    if (!token) return;
    let active = true;

    async function loadResumeSession() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/funnel/resume/${encodeURIComponent(token)}`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (!res.ok || !json.success) {
          if (active) setError(json.error || "Invalid or expired recovery link.");
          return;
        }
        if (active) {
          setData(json);
          if (json.lead) {
            setOppositionCount(Number(json.lead.oppositionCount) || 1);
            setName(json.lead.name || "");
            setStateRegion(json.lead.state || "");
          } else {
            setOppositionCount(1);
          }
        }
      } catch (err: any) {
        if (active) setError("Unable to load your saved registration details. Please try again.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadResumeSession();
    return () => {
      active = false;
    };
  }, [token]);

  // Live Countdown Timer for Discount Urgency
  useEffect(() => {
    const expiryIso = data?.discount?.discountExpiresAt || data?.discountExpiresAt;
    if (!expiryIso) {
      setCountdownText("23h 59m 45s");
      return;
    }

    const updateTimer = () => {
      const target = new Date(expiryIso).getTime();
      const diff = target - Date.now();
      if (diff <= 0) {
        setCountdownText("Final Grace Window Active");
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdownText(
        `${String(hours).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`
      );
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [data]);

  // Live Multi-Party Price Calculation
  const livePricing = useMemo(() => {
    const baseUnit = data?.pricing?.unitOriginalPrice || 999;
    const discountPct = data?.discount?.effectiveDiscountPercent ?? data?.pricing?.discountPercent ?? 0;
    const discountedUnit =
      discountPct > 0 ? Math.round(baseUnit * (1 - discountPct / 100)) : baseUnit;
    const totalOriginal = oppositionCount * baseUnit;
    const totalPayable = oppositionCount * discountedUnit;
    const totalSavings = Math.max(0, totalOriginal - totalPayable);

    return {
      baseUnit,
      discountedUnit,
      discountPct,
      totalOriginal,
      totalPayable,
      totalSavings,
    };
  }, [data, oppositionCount]);

  const submitPayUForm = (actionUrl: string, fields: Record<string, string>) => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = actionUrl;
    Object.entries(fields).forEach(([k, v]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = k;
      input.value = v ?? "";
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
  };

  const handleProceedToPayment = async (isBuyMoreSlots = false) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/funnel/resume/${encodeURIComponent(token)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oppositionCount,
          name,
          state: stateRegion,
          action: isBuyMoreSlots ? "buy_more_slots" : "checkout",
        }),
      });
      const json = await res.json();

      if (res.status === 409 && json.alreadyPaid) {
        // User just paid on another device! Reload state to show 1-tap login
        window.location.reload();
        return;
      }

      if (!res.ok || !json.success || !json.action || !json.fields) {
        setError(json.error || "Could not initialize payment gateway. Please try again.");
        setSubmitting(false);
        return;
      }

      submitPayUForm(json.action, json.fields);
    } catch (err: any) {
      setError("Network error while connecting to PayU. Please try again.");
      setSubmitting(false);
    }
  };

  const handleOneTapDashboardLogin = async () => {
    if (!data?.autoLoginToken) return;
    setLoggingIn(true);
    await signIn("credentials", {
      token: data.autoLoginToken,
      callbackUrl: "/user/dashboard",
      redirect: true,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-xl border border-slate-100">
          <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin mx-auto mb-4" />
          <h2 className="text-lg font-black text-[#111827]">
            Restoring Your Saved Recovery Setup...
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Verifying your registration details and applying your unlocked pricing.
          </p>
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full text-center shadow-xl border border-red-100">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-[#111827] mb-2">Link Unavailable</h1>
          <p className="text-sm text-slate-600 font-medium mb-6">{error}</p>
          <Link
            href="/"
            className="w-full py-3.5 px-6 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md"
          >
            Start Fresh on Homepage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // ── CASE A: ALREADY PAID ON ANOTHER DEVICE (DECISION #8) ──
  if (data?.status === "already_paid" && data.user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 py-12">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-emerald-100 overflow-hidden">
          <div className="bg-[#111827] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-xl">
                <Image
                  src="/lrlogo.png"
                  alt="Legal Recovery"
                  width={130}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" /> Account Active
            </span>
          </div>

          <div className="p-6 sm:p-10 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-emerald-100">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Your Registration Is Already Active!
            </h1>
            <p className="text-sm text-slate-600 font-medium mt-2 max-w-md mx-auto">
              Hi <strong className="text-[#111827]">{data.user.name}</strong>, your payment for{" "}
              <strong className="text-[#111827]">{data.user.phone}</strong> is already confirmed. You
              can log in on this device with one tap below.
            </p>

            <div className="mt-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Registered Phone
                </span>
                <span className="text-sm font-extrabold text-[#111827]">{data.user.phone}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Available Case Slots
                </span>
                <span className="text-sm font-extrabold text-emerald-600">
                  {data.user.remainingSlots === "unlimited"
                    ? "Unlimited Slots"
                    : `${data.user.remainingSlots} of ${data.user.totalSlots} Remaining`}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={handleOneTapDashboardLogin}
                disabled={loggingIn}
                className="w-full py-4 px-6 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-base shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                {loggingIn ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Signing You In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" /> 1-Tap Login to Dashboard on This Device
                  </>
                )}
              </button>

              <button
                onClick={() => setShowBuyMore((prev) => !prev)}
                className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-[#DC2626]" />
                {showBuyMore
                  ? "Hide Additional Slot Options"
                  : "Need to File Against Another Party? Buy Additional Case Slots"}
              </button>
            </div>

            {showBuyMore && (
              <div className="mt-6 pt-6 border-t border-slate-200 text-left space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-600">
                    Additional Opposing Parties
                  </label>
                  <select
                    value={oppositionCount}
                    onChange={(e) => setOppositionCount(Number(e.target.value))}
                    className="px-3 py-2 border border-slate-300 rounded-xl text-xs font-extrabold text-[#111827] bg-white"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Opposing Party" : "Opposing Parties"}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => handleProceedToPayment(true)}
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Redirecting to PayU...
                    </>
                  ) : (
                    <>
                      Add {oppositionCount} {oppositionCount === 1 ? "Slot" : "Slots"} for ₹
                      {livePricing.totalPayable.toLocaleString("en-IN")} <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── CASE B: EXPRESS RESUME CHECKOUT (READY FOR PAYMENT) ──
  const hasDiscount = livePricing.discountPct > 0;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-5">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/lrlogo.png"
              alt="Legal Recovery"
              width={145}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Details Saved • No OTP Required</span>
          </div>
        </div>

        {/* Discount Unlocked Banner */}
        {hasDiscount && (
          <div className="bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#111827] text-white rounded-2xl p-4 sm:p-5 border border-red-500/30 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DC2626] flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-md">
                    INSTANT {livePricing.discountPct}% FEE DROP APPLIED
                  </span>
                </div>
                <p className="text-sm sm:text-base font-black text-white mt-0.5">
                  You save ₹{livePricing.totalSavings.toLocaleString("en-IN")} on your registration today!
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2 shrink-0 self-start sm:self-center">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-bold">
                  Offer Expires In
                </span>
                <span className="text-xs font-mono font-black text-amber-300">{countdownText}</span>
              </div>
            </div>
          </div>
        )}

        {/* Cross-Device / Different User Session Conflict Notice */}
        {data?.sessionConflict && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 font-medium leading-relaxed">
              <strong>Cross-Device Session Notice:</strong> This browser is currently signed in as{" "}
              <span className="font-bold">{data.sessionConflict.loggedInEmail}</span>. Completing this
              payment will automatically activate and sign in{" "}
              <span className="font-bold">{data.lead?.name}</span> ({data.lead?.phone}) on this device.
            </div>
          </div>
        )}

        {/* Main Express Checkout Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-100">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-3">
              <Zap className="w-3.5 h-3.5" /> Final Step • 30-Second Activation
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Complete Your Money Recovery Setup
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Zero waiting and zero paperwork. Dispatch formal recovery notices &amp; police intimations
              on autopilot in just a few clicks.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Pre-filled User Details */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Saved Registration Profile
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Identity Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-[#111827] focus:outline-none focus:border-[#DC2626]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Verified Mobile Number
                  </label>
                  <div className="px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-extrabold text-slate-700 flex items-center justify-between">
                    <span>+91 {data?.lead?.phone}</span>
                    <span className="text-[10px] font-black text-emerald-600 uppercase">Verified ✓</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Email Address
                  </label>
                  <div className="px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 truncate">
                    {data?.lead?.email}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    State / Jurisdiction
                  </label>
                  <input
                    type="text"
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-[#111827] focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
              </div>
            </div>

            {/* Opposing Parties Selector (1 to 5 Parties) */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#DC2626]" />
                    <span className="text-xs sm:text-sm font-black text-[#111827]">
                      Number of Opposing Parties (Defaulters)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Select how many parties you want to recover money from.
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((count) => {
                    const active = oppositionCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setOppositionCount(count)}
                        className={`w-10 h-10 rounded-xl font-black text-xs transition-all cursor-pointer border ${
                          active
                            ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-600/20 scale-105"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price Breakdown Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>
                  Standard Activation ({oppositionCount}{" "}
                  {oppositionCount === 1 ? "Opposing Party" : "Opposing Parties"} × ₹
                  {livePricing.baseUnit})
                </span>
                <span className={hasDiscount ? "line-through text-slate-400" : "font-bold text-white"}>
                  ₹{livePricing.totalOriginal.toLocaleString("en-IN")}
                </span>
              </div>

              {hasDiscount && (
                <div className="flex items-center justify-between text-xs font-extrabold text-emerald-400">
                  <span>Unlocked {livePricing.discountPct}% Fee Drop Savings</span>
                  <span>- ₹{livePricing.totalSavings.toLocaleString("en-IN")}</span>
                </div>
              )}

              <div className="pt-3 border-t border-white/15 flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-black uppercase tracking-wider text-white block">
                    Total Payable Now
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    One-time flat activation • All taxes included
                  </span>
                </div>
                <div className="text-right">
                  {hasDiscount && (
                    <span className="text-xs text-slate-400 line-through mr-2 font-bold">
                      ₹{livePricing.totalOriginal.toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    ₹{livePricing.totalPayable.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#DC2626] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Primary 1-Click PayU CTA */}
            <button
              type="button"
              onClick={() => handleProceedToPayment(false)}
              disabled={submitting}
              className="w-full py-4 px-6 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base sm:text-lg shadow-xl shadow-red-600/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Opening Secure PayU Checkout...
                </>
              ) : (
                <>
                  <span>
                    Complete ₹{livePricing.totalPayable.toLocaleString("en-IN")} Activation Now
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit PayU Secured Checkout
              </span>
              <span>•</span>
              <span>UPI, Cards &amp; NetBanking Supported</span>
              <span>•</span>
              <span>Instant Automated Dispatch Portal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
