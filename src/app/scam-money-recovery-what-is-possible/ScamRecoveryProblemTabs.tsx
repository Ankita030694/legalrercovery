"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScamScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  fraudModus: string;
  recoverabilityRating: "High" | "Moderate" | "Low / Rare";
  realisticOutcome: string;
  remedySteps: {
    step: string;
    description: string;
  }[];
  statutoryBasis: string;
}

const SCAM_SCENARIOS: ScamScenarioTab[] = [
  {
    id: "digital-arrest",
    tabLabel: "Digital Arrest",
    title: "Digital Arrest & Fake Law Enforcement Extortion",
    fraudModus:
      "Victims receive calls from fraudsters impersonating CBI, ED, Telecom Department, or Mumbai Police, alleging an illegal parcel containing narcotics or money laundering linked to their Aadhaar. Under continuous video surveillance ('digital arrest'), victims are coerced into transferring savings into 'government verification accounts' (which are actually current accounts of cyber mule networks).",
    recoverabilityRating: "Moderate",
    realisticOutcome:
      "If reported to 1930 within 2 hours, intermediate beneficiary accounts in Indian private/PSU banks are frequently frozen before withdrawal. Recovery occurs through a Magisterial court de-freezing and refund order under Section 503 BNSS, 2023. If funds reached crypto conversions or hawala ATM withdrawals, recovery probability drops to near zero.",
    remedySteps: [
      {
        step: "Instant 1930 Emergency Ticket Generation",
        description:
          "Dial 1930 or log on to cybercrime.gov.in within the 'Golden Hour' (under 2 hours). Provide transaction UTRs, remitter bank, recipient account numbers, and exact timestamps.",
      },
      {
        step: "Track Layered Lien-Marked Accounts via I4C Portal",
        description:
          "Obtain the formal National Cybercrime Reporting Portal (NCRP) Acknowledgement Number. Note the intermediate Layer-1 and Layer-2 accounts where debit freezes are confirmed.",
      },
      {
        step: "File Section 503 BNSS Restitution Application",
        description:
          "Engage an advocate to move an application under Section 503 Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 457 CrPC) before the jurisdictional Judicial Magistrate to release frozen mule funds back to your bank account against an indemnity bond.",
      },
    ],
    statutoryBasis: "Section 503 BNSS 2023 & Section 318(4) BNS 2023 (Cheating)",
  },
  {
    id: "telegram-task",
    tabLabel: "Telegram Task Scam",
    title: "Telegram Part-Time Job, Google Review & Task Scams",
    fraudModus:
      "Begins with unsolicited WhatsApp/Telegram offers to earn ₹2,000–₹5,000 daily by liking YouTube videos or rating hotels on Google Maps. Initial ₹150–₹500 payouts build trust. Victims are then inducted into Telegram VIP channels and asked to deposit 'prepaid task funds' of ₹10,000, ₹50,000, or ₹2,00,000 onto a fictitious website. When attempting withdrawal, victims are told their 'credit score is damaged' or 'tax of 30% is due', trapping further funds.",
    recoverabilityRating: "Moderate",
    realisticOutcome:
      "The offshore syndicates operate dozens of domestic mule accounts rented from individuals or shell firms. Money can only be recovered if frozen while still in domestic transit banks. The fake website balance cannot be claimed from the scammer directly.",
    remedySteps: [
      {
        step: "Cease All Payments Immediately",
        description:
          "Never pay 'withdrawal fees', 'unlock fees', or 'tax payments'. Every extra rupee sent to an offshore task portal is permanently forfeited.",
      },
      {
        step: "Lodge 1930 Complaint with All UPI VPA Beneficiaries",
        description:
          "List every distinct UPI ID and account number to which money was transferred. Cyber cells issue simultaneous lien notices to recipient banks.",
      },
      {
        step: "Serve Notice to Beneficiary Bank for KYC Negligence",
        description:
          "If the beneficiary mule account was opened with forged KYC or bypassed mule-monitoring alerts, serve a legal notice holding the bank answerable for deficiency in anti-money laundering (AML) controls.",
      },
    ],
    statutoryBasis: "RBI Master Direction on KYC & Section 318(4) BNS 2023",
  },
  {
    id: "trading-app",
    tabLabel: "Fake Stock / IPO Trading",
    title: "Fake Stock Market, Institutional Trading & Crypto App Scams",
    fraudModus:
      "Victims are added to WhatsApp groups run by fake 'Professors' or 'VIP Stock Advisors' promising 200%–500% returns or guaranteed allotment in pre-IPO shares. Victims are instructed to install an APK file or visit an unlisted trading portal showing simulated multi-lakh profits. When withdrawal is requested, the platform demands a 20% 'management fee' or 'SEBI clearance deposit'.",
    recoverabilityRating: "Low / Moderate",
    realisticOutcome:
      "If the platform is an unregulated, unlisted entity operating overseas, recovery depends solely on domestic mule account lien marking. However, if the entity operated through a registered Indian merchant aggregator or SEBI-registered intermediary, regulatory complaints via SEBI SCORES 2.0 or SMART ODR can enforce restitution.",
    remedySteps: [
      {
        step: "Verify SEBI Registration Number",
        description:
          "Check whether the firm or individual holds a genuine SEBI Research Analyst (RA) or Investment Adviser (IA) registration at sebi.gov.in. If unregistered, it is a criminal offence under SEBI Act Section 12.",
      },
      {
        step: "File Formal Complaint on SEBI SCORES 2.0 & SMART ODR",
        description:
          "If an Indian registered broker or clearing member was involved in settling or transferring securities, initiate institutional dispute resolution via the SEBI SMART ODR portal.",
      },
      {
        step: "Lodge Police Cyber FIR & Petition Magistrate",
        description:
          "Register a formal cyber police FIR under Sections 318(4) and 319(2) BNS 2023 and move an urgent petition to freeze linked domestic current accounts before Hawala conversion.",
      },
    ],
    statutoryBasis: "SEBI Act, 1992 & SMART ODR Circular SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131",
  },
  {
    id: "unauthorised-debit",
    tabLabel: "Unauthorised Debit / Phishing",
    title: "Unauthorised Bank Debits, SIM Swap & Screen-Share Hacks",
    fraudModus:
      "Money is transferred from your savings or current account without your deliberate consent—via cloned SIM cards, malware APKs (e.g. fake electricity bill or courier APKs), remote screen sharing (AnyDesk, TeamViewer), or banking credential interception without two-factor authentication (2FA).",
    recoverabilityRating: "High",
    realisticOutcome:
      "This category has the highest statutory recoverability in India. Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, customers enjoy Zero Customer Liability if the breach was due to third-party fraud or bank negligence, provided the customer notifies the bank within 3 working days.",
    remedySteps: [
      {
        step: "Notify Your Bank Within 72 Hours (Golden Window)",
        description:
          "Immediately block your net banking, UPI, and debit cards. Send an official written notification to your branch manager and customer care via email, obtaining an incident ticket number.",
      },
      {
        step: "Demand Shadow Credit / Provisional Reversal Within 10 Days",
        description:
          "Under Paragraph 9 of RBI Zero Liability directions, the bank is statutorily mandated to credit the disputed amount back to your account provisionally within 10 working days, pending investigation.",
      },
      {
        step: "Escalate to RBI Ombudsman (CMS Portal)",
        description:
          "If the bank rejects your claim blaming you without forensic proof that you shared the OTP, escalate to the RBI Integrated Ombudsman on cms.rbi.org.in or serve a formal legal notice.",
      },
    ],
    statutoryBasis: "RBI Zero Liability Circular (DBR.No.Leg.BC.78/09.07.005/2017-18)",
  },
  {
    id: "gaming-wallet",
    tabLabel: "Gaming & Crypto Balances",
    title: "Frozen Wallet Balances on Gaming Apps & Crypto Exchanges",
    fraudModus:
      "Users have liquid money trapped in online real-money gaming apps following regulatory enforcement, license cancellations, or sudden platform shutdowns. Alternatively, domestic crypto traders face blocked Indian Rupee (INR) or crypto withdrawals on exchanges that experienced insolvency, security breaches, or regulatory freezes.",
    recoverabilityRating: "Moderate",
    realisticOutcome:
      "For Indian incorporated gaming and wallet companies, balance retention constitutes deficiency of service and unfair trade practice under Section 2(47) Consumer Protection Act, 2019. Consumer courts routinely direct 100% refund of unutilized deposits. For offshore crypto exchanges lacking FIU-IND compliance, domestic recovery is highly constrained.",
    remedySteps: [
      {
        step: "Extract Ledger & Deposit Proofs",
        description:
          "Download complete transaction receipts, bank debit statements, UPI UTR numbers, and wallet balance screenshots before platform servers become inaccessible.",
      },
      {
        step: "Issue Advocate Demand Notice for Refund of Principal",
        description:
          "Serve a formal statutory notice under Section 2(11) of the Consumer Protection Act demanding the return of pure deposited principal within 15 calendar days.",
      },
      {
        step: "File e-Jagriti Consumer Complaint",
        description:
          "Initiate an online consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) claiming full refund with interest and punitive compensation.",
      },
    ],
    statutoryBasis: "Consumer Protection Act 2019 (s.2(11), s.2(47)) & FIU-IND Directives",
  },
];

export default function ScamRecoveryProblemTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCAM_SCENARIOS[0].id);

  const activeScenario =
    SCAM_SCENARIOS.find((tab) => tab.id === activeTabId) || SCAM_SCENARIOS[0];

  const getRatingBadgeClass = (rating: ScamScenarioTab["recoverabilityRating"]) => {
    switch (rating) {
      case "High":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Moderate":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Low / Rare":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto scrollbar-thin">
        {SCAM_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                isActive
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Scam Profile Analysis
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {activeScenario.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Recovery Probability:</span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-extrabold border ${getRatingBadgeClass(
                activeScenario.recoverabilityRating
              )}`}
            >
              {activeScenario.recoverabilityRating}
            </span>
          </div>
        </div>

        {/* Modus Operandi */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            Modus Operandi (How the Trap Works)
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeScenario.fraudModus}
          </p>
        </div>

        {/* Realistic Outcome */}
        <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200/70">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            The Honest Reality: What Can Realistically Be Recovered
          </h4>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
            {activeScenario.realisticOutcome}
          </p>
        </div>

        {/* Action Steps */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
            Immediate Statutory Escalation Steps
          </h4>
          <div className="space-y-3">
            {activeScenario.remedySteps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                    {s.step}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Footnote */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>
            Primary Statutory Anchor:{" "}
            <strong className="text-slate-600">{activeScenario.statutoryBasis}</strong>
          </span>
          <Link
            href="/how-to-recover-money-stuck-in-online-cyber-fraud"
            className="text-red-600 hover:text-red-700 font-semibold hover:underline inline-flex items-center gap-1"
          >
            Detailed Cyber Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
