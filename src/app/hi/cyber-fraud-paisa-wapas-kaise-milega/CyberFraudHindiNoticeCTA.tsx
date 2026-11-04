"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface CyberFraudHindiNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CyberFraudHindiNoticeCTA({
  buttonText = "साइबर फ्रॉड रिकवरी हेतु बैंक को लीगल नोटिस भेजें",
  className = "",
  variant = "primary",
}: CyberFraudHindiNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                आरबीआई जीरो लायबिलिटी नियम (RBI Zero Liability Circular 2017) • 3 दिन की समय सीमा
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                साइबर फ्रॉड में डूबा पैसा वापस पाना बैंक का वैधानिक दायित्व है — आज ही कानूनी कदम उठाएं
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                भारतीय रिज़र्व बैंक के नियमों के अनुसार 3 वर्किंग दिनों के भीतर बैंक को अनधिकृत फ्रॉड की सूचना देने पर ग्राहक की देनदारी शून्य होती है और बैंक को 10 दिनों में शैडो क्रेडिट (Shadow Credit) देना अनिवार्य है। यदि बैंक टालमटोल कर रहा है या रिफंड देने से मना कर रहा है, तो हमारे विशेषज्ञ एडवोकेट्स से बैंक के नोडल ऑफिसर को लीगल नोटिस भिजवाएं और आरबीआई लोकपाल में शिकायत दर्ज कराएं।
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
                  <span>✓ 24 घंटे में एडवोकेट ड्राफ्टिंग</span>
                  <span>•</span>
                  <span>✓ स्पीड पोस्ट + डिजिटल तामील</span>
                  <span>•</span>
                  <span>✓ कुल शुल्क ₹{basePrice} (स्पष्ट कीमत)</span>
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
