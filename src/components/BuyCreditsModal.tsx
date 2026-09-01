"use client";

import React, { useState, useEffect } from "react";
import { X, Shield, Check, Loader2, CreditCard, Sparkles } from "lucide-react";

interface BuyCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsed?: number;
  currentTotal?: number;
  remainingCredits?: number;
}

export const BuyCreditsModal: React.FC<BuyCreditsModalProps> = ({
  isOpen,
  onClose,
  currentUsed,
  currentTotal,
  remainingCredits,
}) => {
  const PRICE_PER_CASE = 999;
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setError(null);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalAmount = selectedCount * PRICE_PER_CASE;

  const handlePurchase = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/payu/buy-credits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oppositionCount: selectedCount }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setError(data.error || "Failed to initiate payment. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Auto-submit PayU form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.action;

      Object.keys(data.fields).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data.fields[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err: any) {
      console.error("Buy Credits payment initiation failed:", err);
      setError("Network error occurred. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const presetOptions = [
    { count: 1, label: "1 Case", badge: null },
    { count: 2, label: "2 Cases", badge: null },
    { count: 3, label: "3 Cases", badge: "Popular" },
    { count: 5, label: "5 Cases", badge: "Best Value" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-[520px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[120px] bg-red-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-3 shadow-inner">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
              Add Case Credits
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Purchase additional recovery cases at ₹{PRICE_PER_CASE} per case / opposing party.
            </p>
          </div>

          {/* Current Quota Status Info (if available) */}
          {typeof remainingCredits === "number" && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 mb-5 flex items-center justify-between text-xs">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400">Current Status</span>
                <span className="font-extrabold text-slate-700">
                  {typeof currentTotal === "number" && typeof currentUsed === "number" 
                    ? `${currentUsed} of ${currentTotal} Cases Used`
                    : "Active Account"}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400">Remaining</span>
                <span className={`block font-black text-sm ${remainingCredits > 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {remainingCredits} {remainingCredits === 1 ? "Case" : "Cases"}
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-800 mb-4 text-left">
              {error}
            </div>
          )}

          {/* Quantity Selector Cards */}
          <div className="mb-6">
            <label className="text-xs font-black text-[#111827] mb-2.5 block text-left">
              Select Number of Cases to Add:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {presetOptions.map((opt) => {
                const isSelected = selectedCount === opt.count;
                return (
                  <button
                    key={opt.count}
                    type="button"
                    onClick={() => setSelectedCount(opt.count)}
                    className={`relative p-3 rounded-2xl border-2 transition-all duration-150 flex flex-col items-center justify-center text-center cursor-pointer ${
                      isSelected
                        ? "border-[#DC2626] bg-red-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    {opt.badge && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-900 text-white shadow-sm flex items-center gap-0.5 whitespace-nowrap">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                        {opt.badge}
                      </span>
                    )}
                    <span className="text-sm font-black text-[#111827]">{opt.label}</span>
                    <span className="text-xs font-bold text-slate-500 mt-0.5">
                      ₹{opt.count * PRICE_PER_CASE}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* What's Included Card */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 mb-6 text-left">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#DC2626]" /> Each Case Credit Includes:
            </div>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>3 Formal Legal Demand Notices sent to the defaulter</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dual Delivery: High-priority WhatsApp + Registered Email</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Drafted SHO Criminal Police Complaint Copy</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Real-time dispatch status tracking on your dashboard</span>
              </li>
            </ul>
          </div>

          {/* Checkout CTA */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handlePurchase}
            className="w-full py-4 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/70 rounded-2xl transition-all duration-200 shadow-lg shadow-red-950/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Redirecting to Secure Gateway...
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Proceed to Pay ₹{totalAmount.toLocaleString("en-IN")}
              </>
            )}
          </button>

          <p className="text-[10px] text-center text-slate-400 font-semibold mt-3">
            Payments are securely processed by PayU 256-bit encrypted gateway.
          </p>
        </div>
      </div>
    </div>
  );
};
