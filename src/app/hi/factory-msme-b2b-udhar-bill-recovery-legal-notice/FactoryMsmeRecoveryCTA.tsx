"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface FactoryMsmeRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "compact";
}

export default function FactoryMsmeRecoveryCTA({
  buttonText = "₹999 में लीगल नोटिस भेजें (वकील ड्राफ्टेड)",
  className = "",
  variant = "primary",
}: FactoryMsmeRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual-Track B2B Recovery &bull; MSME Samadhaan + Legal Notice + Speed Post RPAD
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                फैक्ट्री और व्यापार का रुका हुआ GST बिल तुरंत वसूलें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                अगर कोई खरीदार या बड़ी कंपनी आपका माल लेकर 45 दिन से ज्यादा पेमेंट अटकाए बैठी है, तो कानूनी नोटिस और MSME समाधान की कार्रवाई शुरू करें। हमारे अनुभवी एडवोकेट्स द्वारा ड्राफ्ट किया गया लीगल नोटिस स्पीड पोस्ट, ईमेल और व्हाट्सऐप पर डिलीवर कराएं।
              </p>

              {/* Dual-Track Funnel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900/90 border border-red-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-red-600/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                        Track 1: Single Invoice Recovery
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        ₹{basePrice} One-Time
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      1 फंसे हुए बिल का टेस्ट लीगल नोटिस भेजें
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      सिंगल डिफ़ॉल्टर के खिलाफ ₹{basePrice} में एडवोकेट-ड्राफ्टेड लीगल नोटिस (Speed Post RPAD + WhatsApp + Email + Tracking Slip)।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-md shadow-red-900/30 text-xs sm:text-sm cursor-pointer text-center"
                    >
                      {buttonText}
                    </button>
                    <Link
                      href="/user/new-recovery"
                      className="block text-center text-[11px] text-slate-400 hover:text-red-300 transition-colors"
                    >
                      या सीधे क्लाइंट पोर्टल पर केस रजिस्टर करें &rarr;
                    </Link>
                  </div>
                </div>

                {/* Track 2: Enterprise / Bulk Institutional Desk */}
                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Track 2: Bulk Defaulters (10 to 1,000+)
                      </span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        Bulk CSV Desk
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      व्यापारियों और फ़ैक्ट्रियों का बल्क रिकवरी डेस्क
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      क्या आपके 10 से 10,000+ बकाएदार ग्राहक हैं? सीधे एक्सेल/CSV शीट अपलोड करें और एक साथ ऑटोमेटेड लीगल नोटिस और फॉलो-अप शुरू करें।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 text-xs sm:text-sm text-center"
                    >
                      बल्क रिकवरी डेस्क (CSV Upload) &rarr;
                    </Link>
                    <Link
                      href="/user/representees"
                      className="block text-center text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      संस्थागत प्रतिनिधि खाता (Representee Portal) &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&check;</span> MSMED Act s.15-18 कम्प्लायंट
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&check;</span> 3x RBI बैंक ब्याज का क्लेम
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&check;</span> भारतीय साक्ष्य अधिनियम s.63 वैध डिजिटल तामील
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
            >
              {buttonText}
            </button>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
            >
              बल्क रिकवरी (CSV)
            </Link>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
