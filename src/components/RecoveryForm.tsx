"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { User, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Shield, ArrowLeft, Lock, LogIn, CreditCard } from "lucide-react";

export const RecoveryForm = () => {
  const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
  const router = useRouter();
  const [step, setStep] = useState(1); // 1 = Details, 2 = OTP Verification, 3 = Existing User Decision
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [otp, setOtp] = useState("");
  const [pendingId, setPendingId] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [oppositionCount, setOppositionCount] = useState<number>(1);
  
  const [formTouched, setFormTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    return name.trim().length > 0 && isEmailValid && isPhoneValid && state !== "";
  }, [name, isEmailValid, isPhoneValid, state]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setSubmitError(null);

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/users/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, state, oppositionCount }),
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
      const initiateRes = await fetch("/api/payu/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name, 
          email, 
          phone, 
          state, 
          paymentPendingId: existingUserData.paymentPendingId,
          oppositionCount
        }),
      });

      const initiateData = await initiateRes.json().catch(() => ({}));
      if (!initiateRes.ok) {
        setSubmitError(initiateData?.error || "Failed to initialize payment gateway.");
        setIsSubmitting(false);
        return;
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = initiateData.action;

      Object.keys(initiateData.fields).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = initiateData.fields[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
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
        }
        return;
      }

      // ── BRAND NEW USER — proceed to PayU ──
      if (data.paymentPendingId) {
        const initiateRes = await fetch("/api/payu/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            name, 
            email, 
            phone, 
            state, 
            paymentPendingId: data.paymentPendingId,
            oppositionCount
          }),
        });

        const initiateData = await initiateRes.json().catch(() => ({}));
        if (!initiateRes.ok) {
          setSubmitError(initiateData?.error || "Failed to initialize payment gateway.");
          setIsSubmitting(false);
          return;
        }

        const form = document.createElement("form");
        form.method = "POST";
        form.action = initiateData.action;

        Object.keys(initiateData.fields).forEach((key) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = initiateData.fields[key];
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        
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
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/users/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, state, oppositionCount }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Failed to resend OTP. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setResendCooldown(60); // Reset cooldown
    } catch {
      setIsSubmitting(false);
      setSubmitError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        <p className="text-xl sm:text-2xl font-black text-[#111827] mb-2 tracking-tight">
          {step === 1 ? "Complete Details" : step === 2 ? "Verify Identity" : "Welcome Back!"}
        </p>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold">
          {step === 1 
            ? "Enter your details to initiate secure legal recovery setup." 
            : step === 2
            ? "Enter the OTP sent to your WhatsApp and email to verify your identity."
            : existingUserData?.hasRemainingQuota
            ? "We found your existing account. Redirecting you to your dashboard..."
            : "You've used all your current case slots."
          }
        </p>
      </div>

      {submitError && (
        <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-xs sm:text-sm font-semibold text-[#991B1B] mb-4">
          {submitError}
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleSendOtp} className="flex flex-col gap-4 sm:gap-5 select-none">
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

          {/* Email Field */}
          <div className="flex flex-col text-left">
            <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#DC2626]" /> Email Address <span className="text-[#DC2626]">*</span>
            </label>
            <div className="relative">
              <input
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
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Verify Email & Pay ₹{oppositionCount * PRICE_PER_OPPOSITION}
                </>
              )}
            </button>
          </div>
          
          <p className="text-[10px] sm:text-[11px] text-center text-slate-500 font-semibold mt-2 px-1 leading-relaxed">
            By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our <Link href="/privacy-policy" className="text-[#DC2626] hover:text-[#B91C1C] transition-colors">Privacy Policy</Link> for more details.
          </p>
          <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
            Payments are securely processed by PayU.
          </p>
        </form>
      ) : step === 2 ? (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4 sm:gap-5 select-none text-center">
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
              className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Verify OTP & Pay ₹{oppositionCount * PRICE_PER_OPPOSITION}
                </>
              )}
            </button>

            <div className="flex items-center justify-between mt-2 px-1">
              <button
                type="button"
                onClick={() => {
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
                disabled={isSubmitting || resendCooldown > 0}
                className={`text-xs font-black ${resendCooldown > 0 ? "text-slate-400 cursor-not-allowed" : "text-[#DC2626] hover:text-[#B91C1C]"} transition-colors`}
              >
                {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
              </button>
            </div>
          </div>

          <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
            Your payment is secure. We never share your data.
          </p>
        </form>
      ) : (
        /* ── STEP 3: EXISTING USER DECISION SCREEN ── */
        <div className="flex flex-col gap-4 sm:gap-5 select-none text-center">
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
                      Add New Case (₹{oppositionCount * PRICE_PER_OPPOSITION})
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
