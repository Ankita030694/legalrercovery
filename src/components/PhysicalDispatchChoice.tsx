"use client";

import React from "react";
import { Mail, Truck } from "lucide-react";
import {
  PHYSICAL_DISPATCH_FEE_PER_NOTICE,
  PHYSICAL_NOTICES_PER_PARTY,
  calculatePhysicalDispatchFee,
} from "@/lib/physical-dispatch";

interface PhysicalDispatchChoiceProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
  oppositionCount?: number;
  showError?: boolean;
}

export const PhysicalDispatchChoice: React.FC<PhysicalDispatchChoiceProps> = ({
  value,
  onChange,
  oppositionCount = 1,
  showError = false,
}) => {
  const fee = calculatePhysicalDispatchFee(oppositionCount, true);

  const options = [
    {
      answer: true,
      title: "Yes",
      detail: `+₹${fee.toLocaleString("en-IN")} by Speed Post`,
      Icon: Truck,
    },
    {
      answer: false,
      title: "No",
      detail: "Email & WhatsApp only",
      Icon: Mail,
    },
  ];

  return (
    <div className="flex flex-col text-left">
      <span id="physical-dispatch-label" className="text-xs font-black text-[#111827] mb-1.5">
        Send your legal notices physically too? <span className="text-[#DC2626]">*</span>
      </span>
      <div role="radiogroup" aria-labelledby="physical-dispatch-label" className="grid grid-cols-2 gap-2.5">
        {options.map(({ answer, title, detail, Icon }) => {
          const selected = value === answer;
          return (
            <button
              key={title}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(answer)}
              className={`p-3 rounded-xl border-2 text-left transition-colors cursor-pointer ${
                selected
                  ? "border-[#DC2626] bg-red-50/50"
                  : showError
                  ? "border-red-300 bg-white"
                  : "border-[#E5E7EB] bg-[#F9FAFB] hover:border-slate-300"
              }`}
            >
              <span className="flex items-center gap-1.5 text-sm font-black text-[#111827]">
                <Icon className="w-3.5 h-3.5 text-[#DC2626]" /> {title}
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 mt-0.5">{detail}</span>
            </button>
          );
        })}
      </div>
      {showError && (
        <p className="text-[11px] text-[#DC2626] font-semibold mt-1.5">Please choose Yes or No.</p>
      )}
      <p className="text-[11px] text-slate-500 font-semibold mt-1.5 leading-relaxed">
        {`₹${PHYSICAL_DISPATCH_FEE_PER_NOTICE} per notice × ${PHYSICAL_NOTICES_PER_PARTY} notices for each party, charged at cost. Discounts don't apply and it's non-refundable once paid. Police complaints are never posted.`}
      </p>
    </div>
  );
};
