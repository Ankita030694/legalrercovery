"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  situation: string;
  legalViolation: string;
  statute: string;
  recoveryOdds: "High (75%–90%)" | "Moderate to High (60%–75%)" | "Moderate (40%–60%)" | "Complex / Conditional";
  oddsBadgeColor: string;
  actionSteps: {
    step: string;
    description: string;
  }[];
  statutoryPrecedent: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "unauthorised-trading",
    tabLabel: "Unauthorised Trades",
    title: "Broker or Relationship Manager Executed Trades Without Prior Consent",
    situation:
      "Your trading terminal shows intraday or derivative (F&O) transactions that you never placed, or your dealer / relationship manager (RM) placed high-volume trades without your explicit confirmation, causing severe capital drawdown or margin wipeout.",
    legalViolation:
      "SEBI Master Circular CIR/HO/MIRSD/MIRSD2/CIR/P/2017/108 mandates that stockbrokers must maintain contemporaneous recorded audio lines, SMS logs, or digital audit trails for every order instruction. Execution of verbal orders without voice recording places the entire burden of proof on the broker.",
    statute: "SEBI Stock Brokers Regulations 1992 (Schedule II Code of Conduct) & SEBI Circular CIR/HO/MIRSD/MIRSD2/CIR/P/2017/108",
    recoveryOdds: "High (75%–90%)",
    oddsBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    actionSteps: [
      {
        step: "Demand Telephonic Call Logs & Voice Recordings",
        description:
          "Immediately send an email to the broker's compliance department demanding the exact voice recording, IP log, and order placement timestamp for each disputed trade.",
      },
      {
        step: "Dispute Contract Notes within 24 Hours",
        description:
          "Object in writing to the contract notes within 24 hours of generation, stating that the orders were placed without consent and demanding immediate reversal of debit.",
      },
      {
        step: "Escalate to SMART ODR Conciliation",
        description:
          "If the broker fails to provide verified voice logs within 7 business days, lodge an online dispute on smartodr.in requesting full reimbursement of trade losses plus brokerage.",
      },
    ],
    statutoryPrecedent: "Angel Broking v. SEBI (SAT Ruling) — Absence of call log shifts total financial liability onto broker",
  },
  {
    id: "illegal-square-off",
    tabLabel: "Illegal Square-Off",
    title: "Broker Prematurely or Arbitrarily Squared Off Positions Without Margin Call",
    situation:
      "During market fluctuations, the broker forcefully liquidated your delivery shares or open intraday/options positions without issuing a mandatory margin shortfall intimation or before the designated peak margin cutoff time.",
    legalViolation:
      "Under NSE/BSE clearing corporation guidelines and SEBI Master Circulars, brokers must provide an intimation of margin shortfall and a reasonable window to replenish collateral before executing liquidation. Forceful auto-liquidation when margin buffer was intact constitutes gross breach of fiduciary contract.",
    statute: "NSE Circular Ref. No. 044/2020 & SEBI Master Circular SEBI/HO/MRD/DP/CIR/P/2016/135",
    recoveryOdds: "Moderate to High (60%–75%)",
    oddsBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    actionSteps: [
      {
        step: "Retrieve Margin Statement & Collateral Snapshot",
        description:
          "Download the end-of-day (EOD) margin statement and peak margin snapshot for the trading date to prove your ledger was within acceptable threshold.",
      },
      {
        step: "Verify Shortfall Notice Delivery Timestamp",
        description:
          "Check email and SMS records to establish whether the broker issued a margin call and whether adequate notice period was provided before triggering the square-off.",
      },
      {
        step: "File Formal Complaint on SCORES 2.0",
        description:
          "Lodge a complaint on scores.sebi.gov.in seeking compensation for the loss suffered between the forced liquidation price and subsequent market value.",
      },
    ],
    statutoryPrecedent: "ICICI Securities v. IGRC — Broker held liable for unnotified intraday position liquidation",
  },
  {
    id: "demat-misappropriation",
    tabLabel: "Demat Share Fraud",
    title: "Shares Transferred, Pledged or Debited from Demat Account Unlawfully",
    situation:
      "Shares held in your CDSL or NSDL demat account were debited, pledged to third-party NBFCs, or moved without your generating an electronic Delivery Instruction Slip (DIS) or TPIN / OTP authorisation.",
    legalViolation:
      "The Depositories Act, 1996 (Section 16) and SEBI (Depositories and Participants) Regulations, 2018 establish strict depository participant (DP) liability. The depository must immediately make good any loss caused by an unauthorised transfer or pledge.",
    statute: "Section 16 Depositories Act 1996 & SEBI Circular SEBI/HO/MIRSD/DOP/CIR/P/2020/158",
    recoveryOdds: "High (75%–90%)",
    oddsBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    actionSteps: [
      {
        step: "Obtain CDSL/NSDL Transaction Statement (CAS)",
        description:
          "Log in to your depository portal (CDSL Easiest or NSDL IDeAS) and download the Consolidated Account Statement showing recipient DP ID and transfer time.",
      },
      {
        step: "Freeze Demat Account Immediately",
        description:
          "Issue a formal stop-transfer / freeze instruction to CDSL/NSDL to prevent further share alienation or pledge invocation.",
      },
      {
        step: "Serve Statutory Demand Notice & Escalate to SMART ODR",
        description:
          "Serve a legal notice demanding immediate credit of shares back to your demat and simultaneously lodge a SMART ODR claim against the Depository Participant.",
      },
    ],
    statutoryPrecedent: "Karvy Stock Broking Resolution — SEBI & SAT mandates for restitution of client securities",
  },
  {
    id: "blocked-funds",
    tabLabel: "Funds Not Returned",
    title: "Broker Withheld Payouts, Delayed Quarterly Settlement or Blocked Withdrawal",
    situation:
      "You submitted a withdrawal request for clear unencumbered ledger balance, but the broker rejected the transfer, blocked payouts under vague 'risk reviews', or violated the mandatory quarterly account settlement rule.",
    legalViolation:
      "SEBI circulars mandate that client funds must be segregated from proprietary funds and settled on the first Friday of the quarter (or monthly as opted). Retaining client funds without open margin commitments constitutes unlawful conversion and attracts penal interest.",
    statute: "SEBI Circular SEBI/HO/MIRSD/DOP/P/CIR/2022/101 (Running Account Settlement)",
    recoveryOdds: "High (75%–90%)",
    oddsBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    actionSteps: [
      {
        step: "Generate Verified Ledger Statement",
        description:
          "Download the official ledger showing net unencumbered credit balance with zero open derivative exposure or pending settlement cycle.",
      },
      {
        step: "Serve Notice to Principal & Compliance Officers",
        description:
          "Issue a statutory demand notice citing SEBI Running Account rules, demanding funds release within 48 hours to avoid exchange penalty.",
      },
      {
        step: "Trigger Exchange Redressal & SMART ODR",
        description:
          "File directly on smartodr.in; stock exchanges enforce automatic penalty deductions from broker security deposits for clear fund non-releases.",
      },
    ],
    statutoryPrecedent: "NSE Member Grievance Cell Arbitral Awards on Unlawful Fund Retention",
  },
  {
    id: "technical-glitch",
    tabLabel: "Technical Outages",
    title: "Trading App Crashed During Market Hours Causing Stop-Loss Failures",
    situation:
      "The broker's trading app or web platform froze, experienced server crashes, or rejected stop-loss orders during market opening or high volatility events, resulting in major financial losses.",
    legalViolation:
      "SEBI Circular SEBI/HO/MRD1/DSAP/CIR/P/2021/660 mandates robust business continuity and disaster recovery frameworks. Brokers must report major technical glitches to exchanges within 2 hours and maintain seamless order execution infrastructure.",
    statute: "SEBI Framework on Technical Glitches SEBI/HO/MRD1/DSAP/CIR/P/2021/660",
    recoveryOdds: "Moderate (40%–60%)",
    oddsBadgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    actionSteps: [
      {
        step: "Document App Error Screenshots & Screen Recording",
        description:
          "Preserve timestamped screenshots showing server error messages ('Gateway Timeout', 'Orders Offline', 'Session Expired') during live trading.",
      },
      {
        step: "Secure Call & Support Ticket Timestamps",
        description:
          "Log an immediate ticket with customer support or phone call to the dealing desk attempting to execute or close the position manually.",
      },
      {
        step: "Lodge Dispute for Glitch Loss Compensation",
        description:
          "Lodge a claim via SMART ODR conciliation presenting server downtime logs and proof of attempted stop-loss order placement.",
      },
    ],
    statutoryPrecedent: "IGRC Technical Glitch Adjudications — Reversal granted when investor proves active order attempts",
  },
  {
    id: "excess-brokerage",
    tabLabel: "Hidden Charges",
    title: "Unauthorized Ledger Debits, Inactive Account Charges or Excess Brokerage",
    situation:
      "Your trading ledger reflects unauthorized maintenance fees, exorbitant call-and-trade charges, non-agreed interest on delayed payment, or brokerage exceeding maximum regulatory limits.",
    legalViolation:
      "SEBI caps total brokerage at 2.5% of contract value and mandates complete disclosure of all tariff schedules in the Rights & Obligations document during KYC onboarding. Unilateral revision of tariffs without express notice is illegal.",
    statute: "SEBI (Stock Brokers) Regulations 1992 & Exchange Tariff Schedule Guidelines",
    recoveryOdds: "High (75%–90%)",
    oddsBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    actionSteps: [
      {
        step: "Audit 12-Month Ledger & Contract Note Tariff",
        description:
          "Cross-reference your signed Client Registration Form (CRF) tariff schedule against the actual debited brokerage and turnover charges.",
      },
      {
        step: "Demand Itemized Reversal of Uncontracted Fees",
        description:
          "Send a formal dispute itemizing every arbitrary ledger entry, demanding immediate credit adjustment with interest.",
      },
      {
        step: "File Through SCORES 2.0 Fast-Track Rail",
        description:
          "Escalate via SCORES 2.0; brokers are forced to refund fees that deviate from the registered tariff sheet within 21 days.",
      },
    ],
    statutoryPrecedent: "BSE Investor Services Committee Rulings on Tariff Schedule Deviations",
  },
];

export default function SebiOdrScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-8 shadow-xs">
      <div className="mb-6">
        <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
          Archetype G2 • Broker Dispute Scenarios
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
          Select Your Stockbroker Dispute Type
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore realistic recovery prospects, the exact governing SEBI statute, and immediate tactical steps for each scenario.
        </p>
      </div>

      {/* Scenario Pill Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-100">
        {SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <article
        key={currentScenario.id}
        className="space-y-6 animate-fadeIn"
        aria-label={currentScenario.title}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h4>
          <span
            className={`self-start text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${currentScenario.oddsBadgeColor}`}
          >
            Outcome Odds: {currentScenario.recoveryOdds}
          </span>
        </div>

        {/* Factual Situation & Violation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Factual Ground &amp; Investor Grievance:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.situation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/70">
            <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block mb-1">
              Statutory SEBI Violation &amp; Broker Burden:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentScenario.legalViolation}
            </p>
          </div>
        </div>

        {/* Statute Quote Banner */}
        <blockquote className="border-l-4 border-slate-900 bg-slate-100/80 p-3.5 sm:p-4 rounded-r-xl text-xs sm:text-sm text-slate-800 italic">
          <strong className="not-italic font-bold text-slate-900 block mb-0.5">
            Governing Legal Provision:
          </strong>
          {currentScenario.statute} — {currentScenario.statutoryPrecedent}.
        </blockquote>

        {/* Action Steps */}
        <div className="space-y-3">
          <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            Mandatory Tactical Action Steps:
          </h5>
          <ol className="space-y-2.5">
            {currentScenario.actionSteps.map((stepItem, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <strong className="font-bold text-slate-900 block mb-0.5">
                    {stepItem.step}
                  </strong>
                  <span className="text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Quick Link Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 font-medium">
            Need advocate support with official notices before SMART ODR?
          </span>
          <Link
            href="#heading-filing-playbook"
            className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>View Full Filing Playbook</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
