"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface TransportBiltyRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "compact";
}

export default function TransportBiltyRecoveryCTA({
  buttonText = "₹999 में लीगल नोटिस भेजें (वकील ड्राफ्टेड)",
  className = "",
  variant = "primary",
}: TransportBiltyRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual-Track B2B Freight Recovery &bull; Bilty POD + Carriage by Road Act + Speed Post RPAD
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                ट्रांसपोर्ट का रुका हुआ भाड़ा और गाड़ी हॉल्टिंग तुरंत वसूलें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                अगर कोई फैक्ट्री, व्यापारी या दलाल (Broker) आपकी गाड़ी का भाड़ा या 5-10 दिन की हॉल्टिंग दबाकर बैठा है, तो कानूनन समय न गंवाएं। हमारे अनुभवी एडवोकेट्स द्वारा ड्राफ्ट किया गया मजबूत वैधानिक नोटिस स्पीड पोस्ट, ईमेल और व्हाट्सऐप पर भेजें।
              </p>

              {/* Dual-Track Funnel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900/90 border border-red-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-red-600/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                        Track 1: Single Bilty / Truck Recovery
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        ₹{basePrice} One-Time
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      1 गाड़ी या पार्टी का टेस्ट लीगल नोटिस भेजें
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      सिंगल डिफ़ॉल्टर के खिलाफ ₹{basePrice} में एडवोकेट-ड्राफ्टेड लीगल नोटिस (Speed Post RPAD + WhatsApp + Email + India Post Tracking Barcode)।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full text-center px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {buttonText}
                    </button>
                    <Link
                      href="/user/new-recovery"
                      className="block text-center text-[11px] text-slate-400 hover:text-white underline underline-offset-2"
                    >
                      या पोर्टल पर केस विवरण सीधे दर्ज करें &rarr;
                    </Link>
                  </div>
                </div>

                {/* Track 2: Enterprise / Bulk Fleet Desk */}
                <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Track 2: Fleet Owners & Transport Desks
                      </span>
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        10 से 10,000+ बिल्टी बकाए
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      बल्क लेज़र CSV अपलोड / संस्थागत रिकवरी डेस्क
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      फ्लीट ओनर्स, ट्रांसपोर्ट कांट्रैक्टर्स और लॉजिस्टिक्स कंपनियों के लिए बल्क CSV नोटिस डिस्पैच, MSME समाधान कंसल्टेशन और डेडिकेटेड रिकवरी मैनेजर।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="block w-full text-center px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-all"
                    >
                      बल्क रिकवरी सॉल्यूशंस देखें (CSV Upload)
                    </Link>
                    <Link
                      href="/user/representees"
                      className="block text-center text-[11px] text-slate-400 hover:text-white underline underline-offset-2"
                    >
                      मल्टीपल फ्लीट एंटिटीज़ / ब्रोकर्स मैनेज करें &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Carriage by Road Act 2007 & Contract Act s.170 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>भारतीय साक्ष्य अधिनियम (BSA 2023) सेक्शन 63 सर्टिफिकेट संलग्न</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>भारतीय डाक स्पीड पोस्ट RPAD बारकोड ट्रैकिंग रसीद</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                ट्रांसपोर्ट का रुका भाड़ा या हॉल्टिंग वसूलना है?
              </h4>
              <p className="text-xs text-slate-300">
                ₹{basePrice} में अनुभवी उच्च न्यायालय के वकीलों द्वारा ड्राफ्ट किया गया लीगल नोटिस तुरंत जारी करवाएं।
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all"
              >
                {buttonText}
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full sm:w-auto text-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-lg border border-slate-700 transition-all"
              >
                बल्क CSV
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="ट्रांसपोर्ट भाड़ा व हॉल्टिंग रिकवरी लीगल नोटिस (Bilty / POD Freight Demand)"
        defaultPrice={basePrice}
      />
    </>
  );
}
