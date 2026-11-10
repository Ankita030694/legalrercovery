"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { User, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Shield, ArrowLeft, ArrowRight, Lock, LogIn, CreditCard, Banknote } from "lucide-react";
import { fetchWithRetry } from "@/lib/fetchWithRetry";
import { RECOVERY_TYPES } from "@/lib/recoveryTypes";
import { trackMetaEvent } from "@/lib/metaPixel";
import { getStoredAttribution } from "@/lib/attribution";
import { PhysicalDispatchChoice } from "@/components/PhysicalDispatchChoice";
import { calculatePhysicalDispatchFee } from "@/lib/physical-dispatch";

interface RecoveryFormProps {
  /** "quick" splits the details into two short steps and assumes 1 party with no Speed Post (for ad landing pages). */
  variant?: "default" | "quick";
}

export const RecoveryForm = ({ variant = "default" }: RecoveryFormProps) => {
  const isQuick = variant === "quick";
  const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
  const router = useRouter();
  const [step, setStep] = useState(1); // 1 = Details, 2 = OTP Verification, 3 = Existing User Decision
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [recoveryType, setRecoveryType] = useState("");
  const [otp, setOtp] = useState("");
  const [pendingId, setPendingId] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [oppositionCount, setOppositionCount] = useState<number>(1);
  const [physicalDispatch, setPhysicalDispatch] = useState<boolean | null>(isQuick ? false : null);
  const [quickStep, setQuickStep] = useState<1 | 2>(1);
  const showBasicsStep = !isQuick || quickStep === 1;
  const showContactStep = !isQuick || quickStep === 2;
  const [quickStepMotion, setQuickStepMotion] = useState<"forward" | "back" | null>(null);
  const quickStepAnimation = quickStepMotion ? `quick-step-${quickStepMotion}` : "";
  const quickTopRef = useRef<HTMLDivElement>(null);
  const quickEmailRef = useRef<HTMLInputElement>(null);
  
  const [formTouched, setFormTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [payuSession, setPayuSession] = useState<{ action: string; fields: Record<string, string> } | null>(null);

  // Existing user state
  const [existingUserData, setExistingUserData] = useState<{
    autoLoginToken: string;
    hasRemainingQuota: boolean;
    paymentPendingId?: string;
    userName: string;
    remainingSlots?: number | string;
    usedSlots?: number;
    totalSlots?: number;
  } | null>(null);
  const [isAutoLoggingIn, setIsAutoLoggingIn] = useState(false);

  // Helper to execute native PayU form submission (used by both automatic trigger and button click)
  const submitPayUForm = (sessionToSubmit?: { action: string; fields: Record<string, string> } | null) => {
    const session = sessionToSubmit || payuSession;
    if (!session) return;

    try {
      const existingForm = document.getElementById("payu-direct-submit-form");
      if (existingForm) {
        existingForm.remove();
      }

      const form = document.createElement("form");
      form.id = "payu-direct-submit-form";
      form.method = "POST";
      form.action = session.action;
      form.target = "_self";
      // Position off-screen without display:none so WebKit on iOS doesn't suppress it
      form.style.position = "fixed";
      form.style.left = "-9999px";
      form.style.top = "-9999px";
      form.style.width = "1px";
      form.style.height = "1px";
      form.style.opacity = "0";

      Object.entries(session.fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      // Use prototype.submit to guarantee execution regardless of any input field names
      HTMLFormElement.prototype.submit.call(form);
    } catch (err) {
      console.error("PayU form submission error:", err);
    }
  };

  // Keep the quick form's step change in view and put the cursor on the first new field.
  useEffect(() => {
    if (!quickStepMotion) return;
    quickTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (quickStepMotion === "forward") quickEmailRef.current?.focus({ preventScroll: true });
  }, [quickStep, quickStepMotion]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const indianStates = useMemo(() => [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
    "Lakshadweep", "Puducherry"
  ], []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(filteredValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const maxDigits = raw.startsWith("0") ? 11 : 10;
    const filteredValue = raw.slice(0, maxDigits);
    setPhone(filteredValue);
  };

  const isEmailValid = useMemo(() => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const isPhoneValid = useMemo(() => {
    if (phone.startsWith("0")) {
      return phone.length === 11;
    }
    return phone.length === 10;
  }, [phone]);

  const isFormValid = useMemo(() => {
    return name.trim().length > 0 && isEmailValid && isPhoneValid && state !== "" && recoveryType !== "" && physicalDispatch !== null;
  }, [name, isEmailValid, isPhoneValid, state, recoveryType, physicalDispatch]);

  const totalDue = oppositionCount * PRICE_PER_OPPOSITION + calculatePhysicalDispatchFee(oppositionCount, physicalDispatch === true);

  // On the ad landing page the price is highlighted inside the red buttons.
  const renderButtonPrice = (amount: string | number) =>
    isQuick ? (
      <span className="px-2 py-0.5 rounded-md bg-amber-300 text-[#111827] text-sm lg:text-xl font-black leading-tight">₹{amount}</span>
    ) : (
      `₹${amount}`
    );

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setSubmitError(null);

    if (isQuick && quickStep === 1) {
      if (name.trim().length > 0 && isPhoneValid && recoveryType !== "") {
        setFormTouched(false);
        setQuickStepMotion("forward");
        setQuickStep(2);
      }
      return;
    }

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetchWithRetry("/api/users/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, state, recoveryType, oppositionCount, physicalDispatch, attribution: getStoredAttribution() }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Failed to process request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      if (data.pendingId) {
        setPendingId(data.pendingId);
        setStep(2); // Transition to OTP Verification step
        setResendCooldown(60); // 60s cooldown

        // Meta Pixel: AddToCart — fires only once the OTP has actually been sent
        // (not on invalid clicks, rate-limit errors, or "Resend OTP").
        trackMetaEvent(
          "AddToCart",
          {
            value: oppositionCount * PRICE_PER_OPPOSITION,
            currency: "INR",
            num_items: oppositionCount,
            content_type: "product",
            content_name: "Legal Recovery Notice",
            ...(recoveryType ? { content_category: recoveryType } : {}),
          },
          `atc_${data.pendingId}_${Date.now()}`
        );
      } else {
        setSubmitError("Failed to initiate email verification.");
      }
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      setSubmitError("Network error. Please try again.");
    }
  };

  const handleAutoLogin = async (token: string) => {
    setIsAutoLoggingIn(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        token,
      });

      if (res && !res.error) {
        router.push("/user/dashboard");
        router.refresh();
      } else {
        // Fallback: redirect to login page
        router.push("/login");
      }
    } catch {
      router.push("/login");
    }
  };

  const handlePayForMore = async () => {
    if (!existingUserData?.paymentPendingId) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let session = payuSession;

      if (!session) {
        const initiateRes = await fetch("/api/payu/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            name, 
            email, 
            phone, 
            state, 
            paymentPendingId: existingUserData.paymentPendingId,
            oppositionCount,
            physicalDispatch
          }),
        });

        const initiateData = await initiateRes.json().catch(() => ({}));
        if (!initiateRes.ok || !initiateData.fields) {
          setSubmitError(initiateData?.error || "Failed to initialize payment gateway.");
          setIsSubmitting(false);
          return;
        }

        session = {
          action: initiateData.action,
          fields: initiateData.fields,
        };
      }

      setPayuSession(session);
      setIsSubmitting(false);
      submitPayUForm(session);

    } catch {
      setIsSubmitting(false);
      setSubmitError("Network error. Please try again.");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (otp.trim().length !== 6) {
      setSubmitError("Please enter a valid 6-digit OTP code.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/users/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pendingId, otp }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Invalid OTP code. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // ── EXISTING USER DETECTED ──
      if (data.isExistingUser) {
        setExistingUserData({
          autoLoginToken: data.autoLoginToken,
          hasRemainingQuota: data.hasRemainingQuota,
          paymentPendingId: data.paymentPendingId,
          userName: data.userName,
          remainingSlots: data.remainingSlots,
          usedSlots: data.usedSlots,
          totalSlots: data.totalSlots,
        });

        if (data.hasRemainingQuota) {
          // Auto-login directly — user has unused case slots
          setStep(3);
          setIsSubmitting(false);
          // Trigger auto-login after a brief display
          setTimeout(() => handleAutoLogin(data.autoLoginToken), 1500);
        } else {
          // Show decision UI — user has used all slots
          setStep(3);
          setIsSubmitting(false);
          if (data.paymentSession) {
            setPayuSession(data.paymentSession);
          }
        }
        return;
      }

      // ── BRAND NEW USER — proceed to PayU ──
      let session = data.paymentSession;

      // Fallback: If not returned directly by verify-otp, query initiate endpoint
      if (!session && data.paymentPendingId) {
        const initiateRes = await fetch("/api/payu/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            name, 
            email, 
            phone, 
            state, 
            paymentPendingId: data.paymentPendingId,
            oppositionCount,
            physicalDispatch
          }),
        });

        const initiateData = await initiateRes.json().catch(() => ({}));
        if (initiateRes.ok && initiateData.fields) {
          session = {
            action: initiateData.action,
            fields: initiateData.fields,
          };
        }
      }

      if (session) {
        setPayuSession(session);
        setIsSubmitting(false);
        submitPayUForm(session);
      } else {
        setSubmitError("Failed to generate payment session. Please try again.");
        setIsSubmitting(false);
      }

    } catch {
      setIsSubmitting(false);
      setSubmitError("Verification failed due to a network error. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setSubmitError(null);
    setIsResending(true);

    try {
      const res = await fetchWithRetry("/api/users/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, state, recoveryType, oppositionCount, physicalDispatch, attribution: getStoredAttribution() }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Failed to resend OTP. Please try again.");
        setIsResending(false);
        return;
      }

      // Update pendingId — the old record may have been deleted by the server
      // (expired OTP or max failed attempts), so the resend creates a new one
      // with a different _id.
      if (data.pendingId) {
        setPendingId(data.pendingId);
      }

      setOtp(""); // Clear any previously entered OTP digits
      setIsResending(false);
      setResendCooldown(60); // Reset cooldown
    } catch {
      setIsResending(false);
      setSubmitError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <>
      <div ref={quickTopRef} className="text-center mb-6 scroll-mt-4">
        <p key={quickStep} className={`text-xl sm:text-2xl font-black text-[#111827] mb-2 tracking-tight ${quickStepAnimation}`}>
          {payuSession ? "Secure Payment" : step === 1 ? (!isQuick ? "Complete Details" : quickStep === 1 ? "Start Your Recovery" : "Just 2 More Details") : step === 2 ? "Verify Identity" : "Welcome Back!"}
        </p>
        <p key={`subtitle-${quickStep}`} className={`text-xs sm:text-sm text-slate-500 font-semibold ${quickStepAnimation}`}>
          {payuSession
            ? "Your identity has been verified. Redirecting you to PayU..."
            : step === 1 
            ? (!isQuick
              ? "Enter your details to initiate secure legal recovery setup."
              : quickStep === 1
              ? "Step 1 of 2. Takes about a minute."
              : "Step 2 of 2. We'll send your OTP to WhatsApp and email.")
            : step === 2
            ? "Enter the OTP sent to your WhatsApp and email to verify your identity."
            : existingUserData?.hasRemainingQuota
            ? "We found your existing account. Redirecting you to your dashboard..."
            : "You've used all your current case slots."
          }
        </p>
        {isQuick && step === 1 && !payuSession && (
          <div className="flex gap-1.5 mt-3" aria-hidden="true">
            <span className="h-1.5 flex-1 rounded-full bg-[#DC2626]" />
            <span className="h-1.5 flex-1 rounded-full bg-slate-200 overflow-hidden">
              <span
                className={`block h-full rounded-full bg-[#DC2626] transition-all duration-500 ease-out ${
                  quickStep === 2 ? "w-full" : "w-0"
                }`}
              />
            </span>
          </div>
        )}
      </div>

      {submitError && (
        <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-xs sm:text-sm font-semibold text-[#991B1B] mb-4">
          {submitError}
        </div>
      )}

      {payuSession ? (
        <div className="flex flex-col gap-4 sm:gap-5 text-center py-2 animate-in fade-in duration-200">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border-2 border-emerald-100 shadow-sm">
            <CheckCircle className="w-8 h-8 text-[#10B981]" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#111827] tracking-tight">
              Identity Verified Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Proceeding to the 256-bit encrypted PayU payment gateway.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-2 border-b border-slate-200/60">
              <span>Amount Payable</span>
              <span className="text-sm font-extrabold text-[#111827]">
                ₹{payuSession.fields.amount || totalDue}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2">
              <span>Payment Gateway</span>
              <span className="font-bold text-slate-700">PayU Hosted Checkout</span>
            </div>
          </div>

          {/* User click handler directly invokes submitPayUForm */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => submitPayUForm(payuSession)}
              className="w-full py-4 text-sm sm:text-base font-black text-white bg-[#DC2626] active:bg-[#991B1B] hover:bg-[#B91C1C] rounded-xl transition-all duration-200 shadow-lg shadow-red-950/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer touch-manipulation relative z-20"
            >
              <Lock className="w-4 h-4" />
              Proceed to Pay {renderButtonPrice(payuSession.fields.amount || totalDue)} on PayU
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-0.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#DC2626]" />
            <span className="font-medium">If not redirected automatically, tap the button above.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setPayuSession(null);
              setStep(1);
              setOtp("");
              setSubmitError(null);
            }}
            className="text-xs font-bold text-slate-500 hover:text-[#DC2626] flex items-center justify-center gap-1.5 transition-colors mt-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Start over
          </button>
        </div>
      ) : step === 1 ? (
        <form key={quickStep} onSubmit={handleSendOtp} className={`flex flex-col gap-4 sm:gap-5 ${quickStepAnimation}`}>
          {showBasicsStep && (
            <>
              {/* Name Field */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#DC2626]" /> Full Name <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className={`w-full bg-[#F9FAFB] border ${formTouched && name.trim().length === 0 ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E7EB] focus:ring-[#DC2626]/10"} rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold`}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#DC2626]" /> Phone Number <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder={phone.startsWith("0") ? "11-digit mobile number (e.g. 098...)" : "10-digit mobile number"}
                    className={`w-full bg-[#F9FAFB] border ${formTouched && !isPhoneValid ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E7EB] focus:ring-[#DC2626]/10"} rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold`}
                  />
                </div>
              </div>
            </>
          )}

          {showContactStep && (
            <>
              {/* Email Field */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#DC2626]" /> Email Address <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={quickEmailRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full bg-[#F9FAFB] border ${formTouched && !isEmailValid ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E7EB] focus:ring-[#DC2626]/10"} rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold`}
                  />
                </div>
              </div>

              {/* State Dropdown */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DC2626]" /> State / Union Territory <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={`w-full bg-[#F9FAFB] border ${formTouched && state === "" ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E7EB] focus:ring-[#DC2626]/10"} rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold appearance-none cursor-pointer`}
                  >
                    <option value="" disabled hidden>Select your state</option>
                    {indianStates.map((st, idx) => (
                      <option key={idx} value={st}>{st}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}

          {showBasicsStep && (
            <>
              {/* Recovery Type Dropdown */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Banknote className="w-3.5 h-3.5 text-[#DC2626]" /> What do you wish to recover? <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={recoveryType}
                    onChange={(e) => setRecoveryType(e.target.value)}
                    className={`w-full bg-[#F9FAFB] border ${formTouched && recoveryType === "" ? "border-[#DC2626] focus:ring-[#DC2626]/20" : "border-[#E5E7EB] focus:ring-[#DC2626]/10"} rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold appearance-none cursor-pointer`}
                  >
                    <option value="" disabled hidden>Select recovery type</option>
                    {RECOVERY_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {oppositionCount > 1 && (
                  <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                    Recovering from multiple parties for different reasons? Pick the main one — you can set a separate type for each party later.
                  </p>
                )}
              </div>
            </>
          )}

          {!isQuick && (
            <>
              {/* Opposition Count Dropdown */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#DC2626]" /> Number of Opposing Parties <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={oppositionCount}
                    onChange={(e) => setOppositionCount(Number(e.target.value))}
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-[#DC2626]/10 rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold appearance-none cursor-pointer"
                  >
                    <option value={1}>1 Party (₹{1 * PRICE_PER_OPPOSITION})</option>
                    <option value={2}>2 Parties (₹{2 * PRICE_PER_OPPOSITION})</option>
                    <option value={3}>3 Parties (₹{3 * PRICE_PER_OPPOSITION})</option>
                    <option value={4}>4 Parties (₹{4 * PRICE_PER_OPPOSITION})</option>
                    <option value={5}>5 Parties (₹{5 * PRICE_PER_OPPOSITION})</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}

          {showContactStep && (
            <>
              <PhysicalDispatchChoice
                value={physicalDispatch}
                onChange={setPhysicalDispatch}
                oppositionCount={oppositionCount}
                showError={formTouched && physicalDispatch === null}
              />
            </>
          )}

          <div className="mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/80 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending OTP...
                </>
              ) : isQuick && quickStep === 1 ? (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Verify Email & Pay {renderButtonPrice(totalDue)}
                </>
              )}
            </button>
            {isQuick && quickStep === 2 && (
              <button
                type="button"
                onClick={() => {
                  setFormTouched(false);
                  setQuickStepMotion("back");
                  setQuickStep(1);
                }}
                className="w-full text-xs font-bold text-slate-500 hover:text-[#DC2626] flex items-center justify-center gap-1.5 transition-colors mt-3"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            )}
          </div>
          
          <p className="text-[10px] sm:text-[11px] text-center text-slate-500 font-semibold mt-2 px-1 leading-relaxed">
            By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our <Link href="/privacy-policy" className="text-[#DC2626] hover:text-[#B91C1C] transition-colors">Privacy Policy</Link> for more details.
          </p>
          <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
            Payments are securely processed by PayU.
          </p>
        </form>
      ) : step === 2 ? (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4 sm:gap-5 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] mb-2 border border-red-100">
            <Lock className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            We have sent a 6-digit verification code to your WhatsApp at <span className="text-[#111827] font-extrabold">{phone}</span> and email at <span className="text-[#111827] font-extrabold">{email}</span>.
          </p>

          <div className="flex flex-col text-left mt-2">
            <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#DC2626]" /> Enter 6-Digit OTP <span className="text-[#DC2626]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter 6-digit OTP"
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm text-[#111827] text-center tracking-[4px] font-black focus:outline-none focus:ring-4 focus:ring-[#DC2626]/10 transition-all placeholder:tracking-normal placeholder:font-semibold"
              />
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <button
              type="submit"
              disabled={isSubmitting || otp.trim().length !== 6}
              className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer touch-manipulation"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Verify OTP & Pay {renderButtonPrice(totalDue)}
                </>
              )}
            </button>

            <div className="flex items-center justify-between mt-2 px-1">
              <button
                type="button"
                onClick={() => {
                  setPayuSession(null);
                  setStep(1);
                  setOtp("");
                  setSubmitError(null);
                }}
                className="text-xs font-bold text-slate-500 hover:text-[#DC2626] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to details
              </button>

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isSubmitting || isResending || resendCooldown > 0}
                className={`text-xs font-black ${(isResending || resendCooldown > 0) ? "text-slate-400 cursor-not-allowed" : "text-[#DC2626] hover:text-[#B91C1C]"} transition-colors`}
              >
                {isResending ? "Sending..." : resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
              </button>
            </div>
          </div>

          <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
            Your payment is secure. We never share your data.
          </p>
        </form>
      ) : (
        /* ── STEP 3: EXISTING USER DECISION SCREEN ── */
        <div className="flex flex-col gap-4 sm:gap-5 text-center">
          {existingUserData?.hasRemainingQuota ? (
            /* User has unused case slots — auto-logging in */
            <>
              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2 border-2 border-emerald-100">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-emerald-800 mb-2">
                  Welcome back, {existingUserData.userName}!
                </p>
                <p className="text-xs text-emerald-700 font-semibold leading-relaxed">
                  You already have an active recovery plan with{" "}
                  <span className="font-extrabold">
                    {existingUserData.remainingSlots === "unlimited" 
                      ? "unlimited" 
                      : existingUserData.remainingSlots
                    } unused case slot{existingUserData.remainingSlots !== 1 ? "s" : ""}
                  </span>.
                  Signing you in now...
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs font-black">Redirecting to your dashboard...</span>
              </div>
            </>
          ) : (
            /* User has used all case slots — decision required */
            <>
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2 border-2 border-blue-100">
                <User className="w-8 h-8" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-[#111827] mb-2">
                  Welcome back, {existingUserData?.userName}!
                </p>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  You have used all <span className="font-extrabold">{existingUserData?.totalSlots}</span> of your current case slots
                  ({existingUserData?.usedSlots} case{(existingUserData?.usedSlots || 0) !== 1 ? "s" : ""} filed).
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {/* Option 1: Go to Dashboard */}
                <button
                  type="button"
                  disabled={isAutoLoggingIn}
                  onClick={() => {
                    if (existingUserData?.autoLoginToken) {
                      handleAutoLogin(existingUserData.autoLoginToken);
                    }
                  }}
                  className="w-full py-3.5 text-sm font-black text-[#111827] bg-white border-2 border-[#E5E7EB] hover:border-[#DC2626]/30 hover:bg-slate-50 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  {isAutoLoggingIn ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Signing you in...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      Go to My Dashboard
                    </>
                  )}
                </button>

                {/* Option 2: Pay for Additional Case */}
                <button
                  type="button"
                  disabled={isSubmitting || isAutoLoggingIn}
                  onClick={handlePayForMore}
                  className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Initializing Payment...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      Add New Case (₹{totalDue})
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
                Adding a new case will extend your recovery plan with additional opposing party slots.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};
