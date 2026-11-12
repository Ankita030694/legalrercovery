'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { DEFAULT_FUNNEL_SETTINGS } from '@/lib/funnel-config';

const PaymentModal = dynamic(() => import('@/components/PaymentModal'), {
  ssr: false,
});

interface Section43bhNoticeCTAProps {
  variant?: 'primary' | 'inline';
}

export default function Section43bhNoticeCTA({ variant = 'primary' }: Section43bhNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const noticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const formattedPrice = noticePrice.toLocaleString('en-IN');

  if (variant === 'inline') {
    return (
      <>
        <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Pre-Audit Section 43B(h) + Section 16 Leverage Notice
            </div>
            <p className="text-sm sm:text-base font-bold text-white">
              Buyer Holding Your MSE Invoice Past 15 / 45 Days?
            </p>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Serve an advocate-signed statutory notice citing Income-tax Act Section 43B(h) (100% expense disallowance), Form 3CD Clause 22 disclosure, and MSMED Act Section 16 (3× RBI Bank Rate compound interest) to the buyer&apos;s Directors and CFO.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 w-full sm:w-auto px-5 py-3 rounded-xl bg-[#C92A2A] hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer text-center"
          >
            Serve 43B(h) Notice — ₹{formattedPrice} →
          </button>
        </div>

        {isModalOpen && (
          <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="rounded-3xl bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] text-white p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-400/30">
              Section 43B(h) Income-Tax Act + Section 16 MSMED Act
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-slate-200">
              Form 3CD Clause 22 Audit Notice
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Turn Your Buyer&apos;s Late Payment Into an Immediate Tax &amp; Audit Priority
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
            Corporate buyers routinely ignore polite payment reminders from Micro and Small vendors—until their CFO and Statutory Auditor receive a formal legal demand notice quantifying the <strong>30% Income-tax disallowance under Section 43B(h)</strong>, mandatory reporting in <strong>Form 3CD Clause 22</strong>, and <strong>non-deductible compound interest at 3× RBI Bank Rate under Sections 16 &amp; 23</strong> of the MSMED Act, 2006.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-extrabold text-amber-400 uppercase">Step 1: Tax + Interest Computation</div>
              <p className="text-xs text-slate-300 mt-1">
                We calculate exact Section 15 appointed-day breach, Section 16 monthly compound interest, and Section 43B(h) tax disallowance exposure.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-extrabold text-emerald-400 uppercase">Step 2: Multi-Channel Service</div>
              <p className="text-xs text-slate-300 mt-1">
                Sent on advocate letterhead by email and WhatsApp to the Buyer&apos;s MD, CFO &amp; Compliance Officer. Speed Post is optional at ₹450 per party.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-extrabold text-sky-400 uppercase">Step 3: MSME ODR / MSEFC Ready</div>
              <p className="text-xs text-slate-300 mt-1">
                Creates an ironclad statutory paper trail for immediate settlement or rapid reference on the MSME ODR Portal if unpaid in 15 days.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-4 rounded-xl bg-[#C92A2A] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-red-900/40 transition-all cursor-pointer text-center"
            >
              Draft &amp; Dispatch Section 43B(h) Legal Notice — ₹{formattedPrice}
            </button>
            <div className="text-xs text-slate-400 space-y-0.5">
              <div className="font-semibold text-slate-200">
                ✓ Advocate Review &amp; Approval Before Dispatch
              </div>
              <div>
                ✓ Email &amp; WhatsApp Service Proof
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
