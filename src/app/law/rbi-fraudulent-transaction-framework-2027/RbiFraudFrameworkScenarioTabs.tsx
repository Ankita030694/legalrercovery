"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FraudScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  bankExcuse: string;
  legalCounter: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: FraudScenarioTab[] = [
  {
    id: "otp-shared-excuse",
    tabLabel: "Bank Says 'OTP Shared'",
    title: "Bank Rejects Claim Saying '2FA / OTP Was Validated, Hence Customer Negligence'",
    bankExcuse:
      "Commercial banks routinely issue a standard rejection template stating: 'Transaction was authenticated using valid 2-Factor Authentication (OTP / MPIN) delivered to your registered mobile number; hence the debit is authorised and the bank has zero liability.' Banks rarely share the underlying SMS gateway delivery logs, IP addresses, or device-binding change logs.",
    legalCounter:
      "Under both Clause 12 of the 2017 RBI Circular and the explicit Burden-of-Proof mandate in the 2027 Revised Framework†, the onus of proving customer negligence rests 100% on the bank. In State Bank of India v. Pallabh Bhowmick (2025 SC) and HDFC Bank v. Jesna Jose (NCDRC), courts ruled that mere generation of an OTP does not prove voluntary customer sharing—especially where trojan APK malware, call-forwarding, or SIM-cloning intercepted the SMS.",
    steps: [
      {
        step: "Demand Complete Digital Audit Trail",
        description:
          "Write to the bank's Principal Nodal Officer demanding the IP address, MAC/device ID, new beneficiary cooling-period log, and SMS delivery timestamp for the disputed debit.",
      },
      {
        step: "Invoke Burden of Proof & Anomaly Failure",
        description:
          "Highlight if the bank's fraud-monitoring system failed to flag an abnormal high-value transfer from an unfamiliar device or foreign IP address.",
      },
      {
        step: "Serve 15-Day Statutory Notice Before Ombudsman",
        description:
          "Dispatch an advocate legal notice citing SBI v. Pallabh Bhowmick (2025 SC) and demanding full reversal plus 9% interest before filing on cms.rbi.org.in.",
      },
    ],
    statutoryRule: "RBI Burden-of-Proof Mandate (2017 Cl. 12 / 2027 Framework†) & SBI v. Pallabh Bhowmick (2025 SC)",
  },
  {
    id: "small-value-50k-claim",
    tabLabel: "Loss ≤ ₹50,000 (85% Payout)",
    title: "Claiming the Up to ₹25,000 (85%) Small-Value Fraud Compensation From Jan 2027†",
    bankExcuse:
      "In low-value UPI, phishing, or vishing scams under ₹50,000 where a customer was tricked into approving a collect request or entering a PIN, banks previously rejected 100% of claims on Day 1 by classifying them as 'customer-induced negligence' with zero relief.",
    legalCounter:
      "From 1 January 2027†, the RBI's Revised Framework introduces a no-fault safety net for bona fide individual victims (including sole proprietors) suffering gross losses up to ₹50,000. Eligible victims receive 85% of the net loss or ₹25,000 (whichever is lower) once in their lifetime, funded via a tripartite sharing model (RBI DEAF + Issuing Bank + Beneficiary Bank), provided the fraud is reported within 5 calendar days†.",
    steps: [
      {
        step: "Dual Reporting Within 5 Calendar Days",
        description:
          "Report the fraud within 5 calendar days both to your home bank (obtain ticket ID) and to the National Cyber Crime Portal (cybercrime.gov.in or call 1930).",
      },
      {
        step: "Submit Bona Fide Individual Claim Application",
        description:
          "File a written claim with your branch and Nodal Officer invoking the 2027 Small-Value Fraud Compensation provision (85% of net loss capped at ₹25,000).",
      },
      {
        step: "Escalate Refusal to RBI Integrated Ombudsman",
        description:
          "If the bank withholds the 85% payout despite timely 5-day reporting on 1930 and to the bank, serve a legal notice and lodge a complaint on cms.rbi.org.in.",
      },
    ],
    statutoryRule: "RBI 2027 Revised Framework† — 85% / ₹25,000 Compensation on Losses ≤ ₹50,000",
  },
  {
    id: "sim-swap-malware",
    tabLabel: "SIM-Swap / APK Malware",
    title: "Unauthorized RTGS/NEFT/UPI Draining via SIM-Swap or Malicious APK Screen-Share",
    bankExcuse:
      "When fraudsters obtain a duplicate SIM card or install a malicious .apk file that silently forwards SMS alerts while your phone has no network, banks argue that the security breach happened on the telecom operator's network or your handset—not on the bank's core server.",
    legalCounter:
      "Under Clause 6(ii) of the RBI Circular (and reinforced under the 2027 Third-Party Breach provisions), where the deficiency lies neither with the bank nor with the customer but elsewhere in the system (such as a telecom SIM-swap or third-party payment gateway breach), the customer has ZERO LIABILITY if reported within the prescribed window. In Tony Enterprises v. RBI (2019 Ker HC), the court held banks strictly liable to restore funds lost to SIM-swap frauds.",
    steps: [
      {
        step: "Obtain Telecom Operator SIM-Replacement Log",
        description:
          "Request a certified letter or CDR/SIM-deactivation timestamp from Airtel, Jio, Vi, or BSNL proving a duplicate SIM was issued or your SIM went dead without authorisation.",
      },
      {
        step: "Challenge Cooling-Period & Velocity Breaches",
        description:
          "Point out if the bank allowed fraudsters to add a new beneficiary and transfer lakhs immediately upon new-device login, violating RBI's mandatory post-registration cooling limits.",
      },
      {
        step: "Demand 10-Day Shadow Reversal via Legal Notice",
        description:
          "Serve a statutory notice on the bank demanding value-dated shadow credit within 10 working days and full restitution under Zero-Liability rules.",
      },
    ],
    statutoryRule: "Zero Liability for Third-Party System Breach & Tony Enterprises v. RBI (2019 Ker HC)",
  },
  {
    id: "delayed-reporting-window",
    tabLabel: "Reported After 3–5 Days",
    title: "Fraud Discovered & Reported After 4 to 7 Days (Or Beyond 7 Days)",
    bankExcuse:
      "Elderly depositors, NRIs, or business owners who do not receive an instant SMS alert often discover unauthorized withdrawals only when updating their passbook days later. Banks summarily reject such claims stating the 3-working-day (or 5-calendar-day†) window has expired.",
    legalCounter:
      "First, under the RBI framework, the reporting clock starts from the date the customer RECEIVES the transaction notification/SMS from the bank—not the transaction date if the bank failed to send an instant SMS/email alert! Second, for third-party breaches reported within 4 to 7 working days, customer liability is statutorily capped at ₹5,000 to ₹25,000 (by account type)—the bank must refund every rupee above that cap. Third, if bank negligence caused the fraud, customer liability is ZERO regardless of delay.",
    steps: [
      {
        step: "Verify Whether Mandatory SMS Alert Was Delivered",
        description:
          "If you did not receive an SMS alert (or the fraudster changed your mobile number/email via net banking without branch verification), the reporting clock never began.",
      },
      {
        step: "Enforce the ₹10,000 / ₹25,000 Maximum Liability Cap",
        description:
          "Even if reported between Day 4 and Day 7, demand that the bank refund the entire balance above the statutory ₹10,000 (Savings) or ₹25,000 (Current/CC) ceiling.",
      },
      {
        step: "Challenge Arbitrary 'Board-Approved Policy' Denials",
        description:
          "For delays beyond 7 days, banks cannot apply a blanket zero-refund policy without a formal assessment of systemic security lapses.",
      },
    ],
    statutoryRule: "RBI Limited Liability Slabs (Day 4–7 Cap) & Mandatory Instant SMS Alert Rule",
  },
  {
    id: "shadow-credit-denied",
    tabLabel: "No 10-Day Shadow Credit",
    title: "Bank Fails to Credit 10-Working-Day Shadow Reversal During Investigation",
    bankExcuse:
      "After you lodge a timely fraud complaint, the bank keeps the ticket 'Under Investigation' for 2 to 6 months without crediting a single rupee back to your account, forcing you to pay credit card interest at 42% p.a. or suffer working-capital starvation.",
    legalCounter:
      "Under Clause 10 of the RBI Customer Protection Circular (carried forward into the 2027 Framework), the bank MUST credit (shadow reversal) the amount involved in the unauthorized electronic transaction to the customer's account within 10 working days from the date of notification, value-dated to the date of the unauthorized debit. Furthermore, banks cannot levy interest or late-payment penalties on disputed credit card fraud amounts.",
    steps: [
      {
        step: "Put the Bank on Formal Notice on Day 11",
        description:
          "Once 10 working days pass from your complaint timestamp without notional credit, write to the Nodal Officer citing violation of RBI's mandatory 10-day shadow reversal rule.",
      },
      {
        step: "Demand Waiver of Credit Card Interest & CIBIL Protection",
        description:
          "If the fraud occurred on a credit card or overdraft account, demand immediate reversal of finance charges, GST, late fees, and protection against CIBIL default reporting.",
      },
      {
        step: "Claim Compensation for Deficiency in Service",
        description:
          "Include a specific claim for mental agony and statutory interest in your Advocate Legal Notice and RBI Ombudsman / e-Jagriti consumer complaint.",
      },
    ],
    statutoryRule: "Mandatory 10-Working-Day Value-Dated Shadow Reversal & 90-Day Disposal Cap",
  },
];

export default function RbiFraudFrameworkScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const selectedScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Bank Defense Counter-Matrix
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Bank&apos;s Rejection Excuse or Fraud Scenario
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click the situation matching your dispute to see how the RBI 2017/2027 rules and Supreme Court judgments dismantle the bank&apos;s refusal:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Bank Fraud Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              role="tab"
              id={`tab-${scenario.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${scenario.id}`}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedScenario.id}`}
        aria-labelledby={`tab-${selectedScenario.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedScenario.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Standard Bank Rejection Excuse
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedScenario.bankExcuse}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
              Statutory Rebuttal Under RBI 2017 / 2027 Rules
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedScenario.legalCounter}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Legal Escalation For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedScenario.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Bank still refusing to credit your account?</strong> Serve a formal 15-day Advocate Legal Notice demanding server logs and statutory reversal before approaching the RBI Ombudsman.
          </span>
          <Link
            href="/recovery/fraud-transaction-amount"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Fraud Transaction Recovery Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
