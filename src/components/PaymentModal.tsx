"use client";

import React, { useState, useMemo } from "react";
import { User, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, X, Shield } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  
  const [formTouched, setFormTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    const filteredValue = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(filteredValue);
  };

  const isEmailValid = useMemo(() => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const isPhoneValid = useMemo(() => {
    return phone.length === 10;
  }, [phone]);

  const isFormValid = useMemo(() => {
    return name.trim().length > 0 && isEmailValid && isPhoneValid && state !== "";
  }, [name, isEmailValid, isPhoneValid, state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setSubmitError(null);

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      // 1. Save user to database to get a unique ID
      const res = await fetch("/api/users/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, state }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Failed to process request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const userId = data.userId;

      // 2. Redirect to PayU Static Link with udf1=userId
      if (userId) {
        window.location.href = `https://u.payu.in/TrB7lGSHFV8s?udf1=${userId}`;
      } else {
        setSubmitError("Failed to generate user identifier.");
        setIsSubmitting(false);
      }
      
    } catch {
      setIsSubmitting(false);
      setSubmitError("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-3xl w-full max-w-[500px] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 relative">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#111827] mb-2 tracking-tight">
              Complete Payment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              Enter your details to proceed to secure checkout.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 select-none">
            {submitError && (
              <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-xs sm:text-sm font-semibold text-[#991B1B]">
                {submitError}
              </div>
            )}

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
                  placeholder="10-digit mobile number"
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

            <div className="mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/80 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    Pay ₹999 Securely
                  </>
                )}
              </button>
            </div>
            
            <p className="text-[10px] text-center text-slate-400 font-semibold mt-1">
              Payments are securely processed by PayU.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
