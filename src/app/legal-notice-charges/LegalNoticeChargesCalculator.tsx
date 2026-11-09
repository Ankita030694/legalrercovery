"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface DisputeOption {
  id: string;
  name: string;
  typicalAdvocateMin: number;
  typicalAdvocateMax: number;
}

const DISPUTE_TYPES: DisputeOption[] = [
  { id: "salary", name: "Salary & F&F Settlement Dues", typicalAdvocateMin: 3500, typicalAdvocateMax: 10000 },
  { id: "tenant", name: "Security Deposit Refund (Tenant/Landlord)", typicalAdvocateMin: 3000, typicalAdvocateMax: 8500 },
  { id: "cheque", name: "Cheque Bounce (Section 138 NI Act)", typicalAdvocateMin: 4500, typicalAdvocateMax: 15000 },
  { id: "consumer", name: "Consumer Defect & Stuck E-Commerce Refund", typicalAdvocateMin: 3000, typicalAdvocateMax: 7500 },
  { id: "freelancer", name: "Unpaid Client Invoices / Contractor Fees", typicalAdvocateMin: 4000, typicalAdvocateMax: 12000 },
  { id: "builder", name: "Builder Delay & Flat Possession (RERA/CPA)", typicalAdvocateMin: 8000, typicalAdvocateMax: 25000 },
  { id: "loan", name: "Friendly Loan & Personal Money Recovery", typicalAdvocateMin: 5000, typicalAdvocateMax: 15000 },
];

const CITY_MULTIPLIERS: Record<string, { label: string; multiplier: number }> = {
  delhi: { label: "Delhi NCR (High Court / District Chambers)", multiplier: 1.25 },
  mumbai: { label: "Mumbai & MMR (Fort / BKC / Suburbs)", multiplier: 1.35 },
  bengaluru: { label: "Bengaluru (CBD / Outer Ring Road)", multiplier: 1.2 },
  tier1: { label: "Hyderabad / Chennai / Pune / Kolkata", multiplier: 1.05 },
  tier2: { label: "Tier-2 / Tier-3 Cities & District Courts", multiplier: 0.85 },
};

export default function LegalNoticeChargesCalculator() {
  const [selectedDispute, setSelectedDispute] = useState<string>("salary");
  const [selectedCity, setSelectedCity] = useState<string>("delhi");
  const [claimAmount, setClaimAmount] = useState<number>(75000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const currentDispute = DISPUTE_TYPES.find((d) => d.id === selectedDispute) || DISPUTE_TYPES[0];
  const cityMult = CITY_MULTIPLIERS[selectedCity]?.multiplier || 1.0;

  // Compute estimated traditional advocate charges
  const claimScale = claimAmount > 500000 ? 1.3 : claimAmount > 200000 ? 1.15 : 1.0;
  const minEstimated = Math.round((currentDispute.typicalAdvocateMin * cityMult * claimScale) / 500) * 500;
  const maxEstimated = Math.round((currentDispute.typicalAdvocateMax * cityMult * claimScale) / 500) * 500;
  const avgTraditional = Math.round((minEstimated + maxEstimated) / 2);
  const estimatedSavings = Math.max(0, avgTraditional - basePrice);
  const savingsPercent = Math.round((estimatedSavings / avgTraditional) * 100);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-7 md:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-full">
              Interactive Fee Estimator
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Updated for 2026 Legal Notice Rates
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2">
            Estimate Advocate Notice Charges vs LegalRecovery Flat Price
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Calculate what independent advocates typically charge in your city based on your dispute nature and claim value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Dispute Type Selector */}
          <div>
            <label htmlFor="dispute-type" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              1. Dispute Category
            </label>
            <select
              id="dispute-type"
              value={selectedDispute}
              onChange={(e) => setSelectedDispute(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] outline-none transition-all"
            >
              {DISPUTE_TYPES.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* City / Jurisdiction Selector */}
          <div>
            <label htmlFor="city-type" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              2. City / Court Jurisdiction
            </label>
            <select
              id="city-type"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] outline-none transition-all"
            >
              {Object.entries(CITY_MULTIPLIERS).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Claim Amount Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="claim-amount" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                3. Claim Amount (₹)
              </label>
              <span className="text-xs font-bold text-[#DC2626]">
                ₹{claimAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              id="claim-amount"
              type="range"
              min={5000}
              max={2500000}
              step={5000}
              value={claimAmount}
              onChange={(e) => setClaimAmount(Number(e.target.value))}
              className="w-full accent-[#DC2626] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
              <span>₹5,000</span>
              <span>₹10,00,000</span>
              <span>₹25,00,000+</span>
            </div>
          </div>
        </div>

        {/* Calculation Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {/* Traditional Lawyer Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                Typical City Chambers Fee
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-800">
                ₹{minEstimated.toLocaleString("en-IN")} – ₹{maxEstimated.toLocaleString("en-IN")}
              </p>
              <ul className="text-xs text-slate-600 mt-3 space-y-1.5 font-medium">
                <li>• In-person chamber consultations</li>
                <li>• Variable typing &amp; clerkage fees (₹500–₹1,500)</li>
                <li>• Separate speed post / courier fee billed</li>
                <li>• 4 to 10 working days turnaround</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
              Average Market Rate: <span className="font-bold text-slate-700">₹{avgTraditional.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* LegalRecovery Flat Card */}
          <div className="bg-red-50/60 border-2 border-[#DC2626]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white px-2 py-0.5 rounded-full">
                Transparent
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#DC2626] block mb-1">
                LegalRecovery Transparent Flat Fee
              </span>
              <p className="text-2xl sm:text-3xl font-black text-[#DC2626]">
                ₹{basePrice}
              </p>
              <ul className="text-xs text-slate-700 mt-3 space-y-1.5 font-medium">
                <li>✓ High Court Advocate verified drafting</li>
                <li>✓ Speed post delivery with postal tracking slip</li>
                <li>✓ Electronic dispatch under Section 63 BSA 2023</li>
                <li>✓ Fast 24–48 hour drafting turnaround</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-red-200/80">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors text-center"
              >
                Start Legal Notice (₹{basePrice})
              </button>
            </div>
          </div>

          {/* Direct Savings Card */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 block mb-1">
                Your Estimated Direct Savings
              </span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700">
                ₹{estimatedSavings.toLocaleString("en-IN")}
              </p>
              <p className="text-xs font-semibold text-emerald-800 mt-1">
                Save approximately {savingsPercent}% compared to private retainers
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                By standardising pre-litigation documentation with digital workflows, LegalRecovery eliminates chamber overheads while preserving advocate legal weight.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/80 text-[11px] text-emerald-900 font-semibold">
              Zero contingent commission • No percentage deductions
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
