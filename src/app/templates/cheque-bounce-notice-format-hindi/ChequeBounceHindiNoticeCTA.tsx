"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface ChequeBounceHindiNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ChequeBounceHindiNoticeCTA({
  buttonText = "अधिवक्ता द्वारा चेक बाउंस नोटिस तैयार करवाएं",
  className = "",
  variant = "primary",
}: ChequeBounceHindiNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                धारा 138 एनआई एक्ट • सुप्रीम कोर्ट दिशानिर्देश 2026 अनुसार
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                चेक बाउंस होने पर कानूनी नोटिस भेजने में देरी न करें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                बैंक मेमो मिलने के 30 दिनों के भीतर कानूनी नोटिस भेजना अनिवार्य है। LegalRecovery के विशेषज्ञ अधिवक्ताओं द्वारा 24 घंटे में वैधानिक मांग नोटिस तैयार करवाएं, ईमेल/व्हाट्सएप से भेजें और धारा 63 बीएसए (BSA 2023) के तहत इलेक्ट्रॉनिक प्रमाण दर्ज करें। स्पीड पोस्ट (AD सहित) वैकल्पिक है, ₹450 प्रति पार्टी।
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 24 घंटे में ड्राफ्ट</span>
                  <span>•</span>
                  <span>✓ ईमेल + WhatsApp ट्रैकिंग</span>
                  <span>•</span>
                  <span>✓ केवल ₹{basePrice}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
