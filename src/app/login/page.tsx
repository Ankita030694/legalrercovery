"use client";

import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Phone, ShieldAlert, Loader2, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Key } from "lucide-react";
import { PaymentModal } from "@/components/PaymentModal";

export default function LoginPage() {
  const [loginMode, setLoginMode] = useState<"otp" | "password">("otp");
  const [step, setStep] = useState(1); // 1 = Phone, 2 = OTP (only for "otp" mode)
  
  // Input fields
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [maskedEmail, setMaskedEmail] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const router = useRouter();

  // Cooldown countdown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Reset inputs when switching login modes
  useEffect(() => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setPhone("");
    setOtp("");
    setEmail("");
    setPassword("");
    setStep(1);
    setResendCooldown(0);
  }, [loginMode]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
  };

  // Step 1: Request OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/send-login-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(data?.error || "Failed to request login OTP. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setMaskedEmail(data.maskedEmail || "your registered email address");
      setSuccessMessage("OTP sent successfully!");
      setStep(2);
      setResendCooldown(60);
      setIsSubmitting(false);

    } catch {
      setIsSubmitting(false);
      setErrorMessage("Network error. Please try again.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (otp.length !== 6) {
      setErrorMessage("Please enter the 6-digit verification code.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        phone,
        otp,
      });

      if (!res) {
        setErrorMessage("Verification failed due to a server error.");
        setIsSubmitting(false);
        return;
      }

      if (res.error) {
        setErrorMessage("Invalid OTP code or it has expired. Please try again.");
        setIsSubmitting(false);
      } else {
        setSuccessMessage("Authentication successful! Welcome back.");
        localStorage.setItem("lr_cases", JSON.stringify([]));
        setTimeout(() => {
          router.push("/user/dashboard");
          router.refresh();
        }, 1500);
      }
    } catch {
      setIsSubmitting(false);
      setErrorMessage("Authentication failed due to a network connection error.");
    }
  };

  // Password / Admin Login
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email.trim().toLowerCase(),
        password,
      });

      if (!res) {
        setErrorMessage("An unexpected server error occurred.");
        setIsSubmitting(false);
        return;
      }

      if (res.error) {
        setErrorMessage("Invalid email or password credentials.");
        setIsSubmitting(false);
      } else {
        setSuccessMessage("Admin authentication successful! Redirecting...");
        localStorage.setItem("lr_cases", JSON.stringify([]));
        setTimeout(() => {
          router.push("/user/dashboard");
          router.refresh();
        }, 1500);
      }
    } catch {
      setIsSubmitting(false);
      setErrorMessage("Connection failed. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4 relative overflow-hidden select-none py-28">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[450px] bg-white rounded-3xl border border-[#E5E7EB] shadow-[0_25px_60px_rgba(0,0,0,0.04)] p-8 sm:p-10 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Subtle top red highlight bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#DC2626] rounded-t-3xl" />

        {/* Dynamic Headers */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] mb-4 border border-red-100">
            {loginMode === "otp" ? <Phone className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
          </div>
          <h2 className="text-2xl font-black text-[#111827] tracking-tight mb-2">
            {loginMode === "otp" ? "Secure Portal Sign In" : "Admin Sign In"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            {loginMode === "otp"
              ? "Access your dashboard securely via dynamic WhatsApp and email OTP."
              : "Login using your administrator credentials."
            }
          </p>
        </div>

        {/* Alerts */}
        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50/50 px-4 py-3 flex items-start gap-2.5 mb-6 animate-in fade-in slide-in-from-top-1 duration-200">
            <ShieldAlert className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
            <span className="text-xs font-semibold text-[#991B1B]">{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="rounded-xl border border-green-200 bg-green-50/50 px-4 py-3 flex items-start gap-2.5 mb-6 animate-in fade-in slide-in-from-top-1 duration-200">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
            <span className="text-xs font-semibold text-green-800">{successMessage}</span>
          </div>
        )}

        {/* Sign In Interface Modes */}
        {loginMode === "otp" ? (
          /* OTP LOGIN FLOW */
          step === 1 ? (
            /* STEP 1: ENTER PHONE */
            <form onSubmit={handleSendOtp} className="flex flex-col gap-5">
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#DC2626]" /> Registered Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    disabled={isSubmitting}
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || phone.length !== 10}
                className="w-full py-3.5 mt-2 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Requesting OTP...
                  </>
                ) : (
                  <>
                    Request Secure OTP
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* STEP 2: ENTER OTP */
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5 text-center">
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-1">
                We have successfully generated a login OTP code. Please enter the 6-digit number sent to your WhatsApp at <span className="text-[#111827] font-extrabold">{phone}</span> and email at:<br />
                <span className="text-[#111827] font-extrabold">{maskedEmail}</span>
              </p>

              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#DC2626]" /> Enter 6-Digit OTP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter login OTP"
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm text-[#111827] text-center tracking-[4px] font-black focus:outline-none focus:ring-4 focus:ring-[#DC2626]/10 transition-all placeholder:tracking-normal placeholder:font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || otp.length !== 6}
                  className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Verifying login...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Verify & Sign In
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between px-1 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setOtp("");
                      setErrorMessage(null);
                    }}
                    className="text-xs font-bold text-slate-500 hover:text-[#DC2626] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Phone
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting || resendCooldown > 0}
                    onClick={handleSendOtp}
                    className={`text-xs font-black ${resendCooldown > 0 ? "text-slate-400 cursor-not-allowed" : "text-[#DC2626] hover:text-[#B91C1C]"} transition-colors cursor-pointer`}
                  >
                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend OTP"}
                  </button>
                </div>
              </div>
            </form>
          )
        ) : (
          /* PASSWORD LOGIN FLOW (ADMIN) */
          <form onSubmit={handlePasswordLogin} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#DC2626]" /> Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-black text-[#111827] mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#DC2626]" /> Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  disabled={isSubmitting}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-4 transition-all font-semibold"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 mt-2 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/60 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Toggle between OTP and Password modes */}
        <div className="mt-6 pt-4 border-t border-[#F3F4F6] text-center">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => setLoginMode(loginMode === "otp" ? "password" : "otp")}
            className="text-xs font-bold text-slate-500 hover:text-[#DC2626] flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer focus:outline-none"
          >
            <Key className="w-3.5 h-3.5" />
            {loginMode === "otp" ? "Are you an Admin? Sign in with password" : "User login? Sign in via OTP"}
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-xs text-center text-slate-500 font-semibold mt-4">
          Not registered yet?{" "}
          <button
            type="button"
            onClick={() => setIsPaymentModalOpen(true)}
            className="text-[#DC2626] hover:text-[#B91C1C] font-extrabold transition-colors cursor-pointer focus:outline-none"
          >
            Start Recovery
          </button>
        </p>
      </div>

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </div>
  );
}
