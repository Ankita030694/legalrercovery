"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { RecoveryForm } from "./RecoveryForm";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  // Reset scroll lock and track global modal state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (typeof window !== "undefined") {
        (window as any).__isPaymentModalOpen = true;
        try {
          sessionStorage.setItem("hasOpenedPaymentModal", "true");
        } catch (_) {}
        window.dispatchEvent(new CustomEvent("paymentModalStateChange", { detail: { isOpen: true } }));
      }
    } else {
      document.body.style.overflow = 'unset';
      if (typeof window !== "undefined") {
        (window as any).__isPaymentModalOpen = false;
        window.dispatchEvent(new CustomEvent("paymentModalStateChange", { detail: { isOpen: false } }));
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (typeof window !== "undefined") {
        (window as any).__isPaymentModalOpen = false;
        window.dispatchEvent(new CustomEvent("paymentModalStateChange", { detail: { isOpen: false } }));
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white rounded-3xl w-full max-w-[500px] shadow-2xl relative my-auto max-h-[92dvh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="p-5 sm:p-8 relative overflow-y-auto overscroll-contain">
          <RecoveryForm />
        </div>
      </div>
    </div>
  );
};
