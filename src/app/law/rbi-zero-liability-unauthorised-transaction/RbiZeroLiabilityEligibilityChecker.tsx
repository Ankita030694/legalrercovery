"use client";

import React, { useState } from "react";

interface DisputeScenario {
  id: string;
  badge: string;
  title: string;
  cause: string;
  rbiClause: string;
  customerLiability: string;
  escalationFix: string;
}

const DISPUTE_SCENARIOS: DisputeScenario[] = [
  {
    id: "apk-sim-swap",
    badge: "1. Remote APK / SIM-Swap",
    title: "Money Siphoned via Malicious APK, Screen-Sharing App, or SIM-Swap Without Voluntarily Sharing OTP",
    cause:
      "Fraudsters trick the account holder into installing a fake courier/bank/utility APK or execute a SIM-swap, intercepting SMS alerts and draining funds via UPI, IMPS, or NetBanking without the customer consciously entering an MPIN or reading out an OTP.",
    rbiClause:
      "Paragraph 6(b) & Paragraph 12 of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 + Supreme Court in State Bank of India v. Pallabh Bhowmick (2025).",
    customerLiability:
      "₹0 (Zero Liability) if notified within 3 working days; capped at ₹5,000–₹25,000 if notified in 4–7 working days.",
    escalationFix:
      "Demand immediate 10-working-day shadow reversal under Paragraph 9. Cite the Supreme Court's January 2025 Pallabh Bhowmick ruling holding that downloading an app during a customer-care inquiry is not 'deliberate credential sharing' and the bank is liable for failing to block anomalous high-velocity transfers.",
  },
  {
    id: "post-reporting-debits",
    badge: "2. Debits After Reporting",
    title: "Customer Was Tricked Into Sharing First OTP, But More Debits Occurred After Alerting the Bank",
    cause:
      "Victim realizes they were phished on the first debit and immediately calls the bank's 24x7 toll-free fraud helpline or uses the SMS block code, yet the bank fails to freeze the account/card promptly and subsequent tranches are debited.",
    rbiClause:
      "Paragraph 7(a)(i) Second Sentence of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 ('Any loss occurring after the reporting of the unauthorised transaction shall be borne by the bank').",
    customerLiability:
      "100% Bank Liability (₹0 Customer Loss) for every single rupee debited after the timestamp of the customer's first reporting call, SMS, or email.",
    escalationFix:
      "Extract your cellular call log and the 1930 / bank helpline complaint timestamp. Serve a statutory demand notice separating Pre-Notification Debits from Post-Notification Debits; under Paragraph 7(a)(i), the bank has an absolute, unconditional duty to refund 100% of post-reporting debits.",
  },
  {
    id: "card-international-pos",
    badge: "3. Card / International Swipe",
    title: "Unauthorised Credit/Debit Card International POS or E-Commerce Transaction Without 2FA / AFA",
    cause:
      "Customer's domestic credit or debit card is charged overnight on an overseas merchant gateway (in USD/EUR/GBP) without any Additional Factor of Authentication (OTP) while the card is physically in the customer's possession in India.",
    rbiClause:
      "Paragraph 6(a)/(b) of RBI Circular 2017-18/15 + RBI Card Tokenisation & Default International Off Directions (DPSS.CO.PD No.1343/02.14.003/2019-20).",
    customerLiability:
      "₹0 (Zero Liability). Transactions processed without mandatory RBI Additional Factor of Authentication (AFA) or without explicit customer opt-in for international usage constitute bank/gateway system deficiency.",
    escalationFix:
      "File a formal Chargeback Dispute Form with your card-issuing bank within 3 working days, demand provisional shadow credit within 10 working days so no 36%–42% credit card finance charges accrue, and serve a legal notice if the bank bills the disputed sum in your monthly statement.",
  },
  {
    id: "no-sms-alert-sent",
    badge: "4. No SMS Alert Delivered",
    title: "Unauthorised Withdrawals Discovered Weeks Later Because Bank Failed to Send Mandatory SMS Alerts",
    cause:
      "Bank claims the customer reported the fraud after 10 or 20 days (beyond the 7-day window), but the customer never received real-time SMS transaction alerts for those electronic debits.",
    rbiClause:
      "Paragraph 5 & Footnote 1 to Paragraph 6(b) of RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18.",
    customerLiability:
      "₹0 (Zero Liability) from the date of communication. The 3-working-day reporting clock starts strictly from the date of receiving the communication FROM THE BANK—excluding the date of communication.",
    escalationFix:
      "Put the bank to strict proof of telecom SMS delivery logs under Paragraph 12. If the bank did not send a real-time SMS alert (or if the fraudster altered the registered mobile number without mandatory cooling-off alerts), the 3-day clock only begins when you first received the account statement.",
  },
];

export default function RbiZeroLiabilityEligibilityChecker() {
  const [breachType, setBreachType] = useState<"bank-fault" | "third-party" | "shared-otp" | "post-report">("third-party");
  const [reportingDays, setReportingDays] = useState<"within-3" | "4-to-7" | "above-7">("within-3");
  const [accountTier, setAccountTier] = useState<"bsbda" | "savings-standard" | "current-high">("savings-standard");
  const [lossAmount, setLossAmount] = useState<number>(85000);
  const [activeTab, setActiveTab] = useState<string>(DISPUTE_SCENARIOS[0].id);

  const getMaxCap = () => {
    if (accountTier === "bsbda") return 5000;
    if (accountTier === "savings-standard") return 10000;
    return 25000;
  };

  const computeLiability = () => {
    if (breachType === "bank-fault") {
      return {
        customerBears: 0,
        bankRefunds: lossAmount,
        rule: "Paragraph 6(a) — Zero Liability (Contributory Bank Negligence / System Deficiency)",
        verdict:
          "Because the unauthorised debit arose from a bank security lapse, non-OTP international swipe, or system deficiency, your liability is ₹0 regardless of when you reported it.",
        badgeColor: "bg-emerald-50 border-emerald-300 text-emerald-950",
      };
    }
    if (breachType === "post-report") {
      return {
        customerBears: 0,
        bankRefunds: lossAmount,
        rule: "Paragraph 7(a)(i) — Zero Liability for All Post-Reporting Debits",
        verdict:
          "Even if you were tricked on an earlier debit, the RBI Circular mandates that 100% of any loss occurring AFTER you notified the bank must be borne unconditionally by the bank.",
        badgeColor: "bg-emerald-50 border-emerald-300 text-emerald-950",
      };
    }
    if (breachType === "shared-otp") {
      const eligible2027 = lossAmount <= 50000 ? Math.min(25000, Math.round(lossAmount * 0.85)) : 0;
      return {
        customerBears: lossAmount,
        bankRefunds: 0,
        rule: "Paragraph 7(a) (2017 Circular) vs 1 Jan 2027 Revised Framework†",
        verdict: `Under Paragraph 7(a) of the 2017 Circular, if the bank proves you voluntarily shared an OTP/PIN, you bear the loss until reporting (unless the bank failed fraud-velocity checks per SBI v. Pallabh Bhowmick). Note: Under the 1 Jan 2027 RBI Framework†, losses ≤ ₹50,000 reported within 5 days qualify for a one-time 85% payout (up to ₹25,000, i.e., ₹${eligible2027.toLocaleString("en-IN")} here).`,
        badgeColor: "bg-amber-50 border-amber-300 text-amber-950",
      };
    }

    // third-party breach
    if (reportingDays === "within-3") {
      return {
        customerBears: 0,
        bankRefunds: lossAmount,
        rule: "Paragraph 6(b) & Table 2 — 100% Zero Customer Liability (Reported Within 3 Working Days)",
        verdict:
          "Because neither you nor the bank was at fault and you notified the bank within 3 working days (excluding the date of SMS alert), your liability is ₹0. The bank must credit 100% shadow reversal within 10 working days.",
        badgeColor: "bg-emerald-50 border-emerald-300 text-emerald-950",
      };
    }
    if (reportingDays === "4-to-7") {
      const cap = getMaxCap();
      const customerBears = Math.min(lossAmount, cap);
      const bankRefunds = Math.max(0, lossAmount - customerBears);
      return {
        customerBears,
        bankRefunds,
        rule: `Paragraph 7(b) & Table 1 — Limited Customer Liability Capped at ₹${cap.toLocaleString("en-IN")} (Reported in 4–7 Working Days)`,
        verdict: `Because you reported between 4 and 7 working days after receiving the bank's alert, your maximum per-transaction liability is capped at ₹${cap.toLocaleString("en-IN")} (or transaction value if lower). The bank must refund the remaining ₹${bankRefunds.toLocaleString("en-IN")} within 10 working days.`,
        badgeColor: "bg-sky-50 border-sky-300 text-sky-950",
      };
    }

    return {
      customerBears: lossAmount,
      bankRefunds: 0,
      rule: "Paragraph 7(b) & Table 2 — Reported Beyond 7 Working Days (Bank Board-Approved Policy)",
      verdict:
        "When reported after 7 working days of receiving the bank alert, liability is governed by your bank's Board-approved policy. However, if the bank failed to send a real-time SMS alert, the 3-day clock only started when you received your statement!",
      badgeColor: "bg-amber-50 border-amber-300 text-amber-950",
    };
  };

  const result = computeLiability();
  const activeScenario = DISPUTE_SCENARIOS.find((s) => s.id === activeTab) || DISPUTE_SCENARIOS[0];

  return (
    <div className="space-y-6">
      {/* Interactive Customer Liability & Shadow Reversal Calculator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
              Interactive RBI Rulebook Calculator (Table 1 &amp; Table 2)
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Calculate Your Exact Liability &amp; Bank Refund Under the RBI Circular
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            Clauses 6, 7 &amp; 9
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1. Nature of Unauthorised Transaction */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              1. How Did the Unauthorised Debit Occur?
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {[
                { val: "third-party", label: "Third-Party Breach / APK / SIM-Swap (No OTP Shared)" },
                { val: "bank-fault", label: "Bank Security Lapse / No-OTP International Swipe" },
                { val: "post-report", label: "Debited AFTER I Already Notified the Bank" },
                { val: "shared-otp", label: "Tricked Into Sharing OTP / PIN (Before Reporting)" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setBreachType(opt.val as typeof breachType)}
                  className={`px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors cursor-pointer ${
                    breachType === opt.val
                      ? "bg-[#404447] text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Reporting Window + Account Type */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-800">
                2. Working Days Taken to Report After Bank SMS Alert:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { val: "within-3", label: "≤ 3 Working Days" },
                  { val: "4-to-7", label: "4 to 7 Working Days" },
                  { val: "above-7", label: "> 7 Working Days" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setReportingDays(opt.val as typeof reportingDays)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      reportingDays === opt.val
                        ? "bg-[#DC2626] text-white"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-800">
                3. Account / Card Tier (Table 1 Cap):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { val: "bsbda", label: "BSBDA (₹5k Cap)" },
                  { val: "savings-standard", label: "Savings / Card ≤₹5L / MSME CC (₹10k Cap)" },
                  { val: "current-high", label: "Card >₹5L / Large Current (₹25k Cap)" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setAccountTier(opt.val as typeof accountTier)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      accountTier === opt.val
                        ? "bg-[#404447] text-white"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Amount Slider */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="rbi-loss-amount" className="text-xs font-bold text-slate-800">
              4. Unauthorised Transaction Amount Debited:
            </label>
            <span className="text-sm font-black text-[#DC2626]">
              ₹{lossAmount.toLocaleString("en-IN")}
            </span>
          </div>
          <input
            id="rbi-loss-amount"
            type="range"
            min={5000}
            max={500000}
            step={5000}
            value={lossAmount}
            onChange={(e) => setLossAmount(Number(e.target.value))}
            className="w-full accent-[#DC2626] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-semibold text-slate-500">
            <span>₹5,000</span>
            <span>₹50,000 (2027 Cap†)</span>
            <span>₹1,00,000</span>
            <span>₹2,50,000</span>
            <span>₹5,00,000</span>
          </div>
        </div>

        {/* Output Summary Banner */}
        <div className={`p-4 sm:p-5 rounded-xl border ${result.badgeColor} space-y-3`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">
              {result.rule}
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-white/80 border border-current/20">
              Shadow Credit Due: Within 10 Working Days (Para 9)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white/90 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Mandatory Bank Refund / Reversal
              </span>
              <span className="text-lg sm:text-xl font-black text-emerald-700">
                ₹{result.bankRefunds.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/90 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Maximum Customer Liability
              </span>
              <span className="text-lg sm:text-xl font-black text-slate-900">
                ₹{result.customerBears.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed">{result.verdict}</p>
        </div>
      </div>

      {/* Interactive Dispute Scenario Picker Tabs (strictly styled like IrctcProblemTabs) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 p-3 sm:p-4 border-b border-slate-800">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-2">
            Select Your Unauthorised Transaction Dispute Scenario
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Banking Fraud Scenarios">
            {DISPUTE_SCENARIOS.map((tab) => {
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#DC2626] text-white shadow-sm"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {tab.badge}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                How the Dispute Happens
              </strong>
              <p className="text-slate-700 leading-relaxed">{activeScenario.cause}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                Governing RBI Circular Clause &amp; Case Law
              </strong>
              <p className="text-slate-800 font-semibold leading-relaxed">{activeScenario.rbiClause}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-emerald-800 font-extrabold">
                Statutory Customer Liability
              </strong>
              <p className="text-emerald-950 font-bold leading-relaxed">{activeScenario.customerLiability}</p>
            </div>

            <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-[#DC2626] font-extrabold">
                3-Step Legal Escalation Fix
              </strong>
              <p className="text-slate-800 leading-relaxed">{activeScenario.escalationFix}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
