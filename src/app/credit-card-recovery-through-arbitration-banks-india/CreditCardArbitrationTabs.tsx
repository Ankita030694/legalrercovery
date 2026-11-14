"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ArbitrationScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ArbitrationScenarioTab[] = [
  {
    id: "arbitration-clause-challenge",
    tabLabel: "Unilateral Appointment Risk",
    title: "Cardholder Challenges Sole Arbitrator Appointment Under Perkins Eastman",
    cause:
      "Following the Supreme Court rulings in TRF Ltd. and Perkins Eastman Architects, an interested party (such as a bank officer or internal manager) cannot unilaterally appoint a sole arbitrator. When delinquent cardholders appear or challenge notices alleging bias or unilateral nomination, improperly constituted tribunals face dismissal or have their awards set aside under Section 34.",
    legalBasis:
      "Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996 invalidates any arbitrator whose relationship falls under conflicted categories. To ensure unassailable proceedings, banks must route appointments through accredited independent ADR institutions or follow institutional rosters with mutual consent or Section 11 High Court protocols.",
    steps: [
      {
        step: "Institutional ADR Panel Nomination",
        description:
          "Rather than naming a single arbitrator internally, invoke institutional arbitration rules where an accredited neutral institution appoints an independent former judicial officer or advocate.",
      },
      {
        step: "Disclosure of Independence under Section 12(1)",
        description:
          "Mandate that the appointed arbitrator execute a formal Sixth Schedule declaration confirming absolute independence and absence of prior representation for the bank.",
      },
      {
        step: "Issue Section 21 Invocation with Institutional Referral",
        description:
          "Serve the Section 21 notice giving the cardholder 30 days to assent to the institutional administration, neutralizing subsequent Section 34 set-aside petitions.",
      },
    ],
    statutoryRule: "Section 12(5), Seventh Schedule ACA 1996 & Perkins Eastman Doctrine",
  },
  {
    id: "cardholder-absconding",
    tabLabel: "Cardholder Untraceable",
    title: "Defaulter Avoids Service or Physical Address Has Changed",
    cause:
      "Retail credit card borrowers frequently relocate, disconnect registered mobile numbers, or refuse to accept physical postal delivery of statutory notices. When postal summons return with remarks like 'Left Without Address' or 'Unclaimed', conventional civil suits stall for months awaiting paper publication.",
    legalBasis:
      "Section 3 of the Arbitration and Conciliation Act, 1996 provides deemed service when written communications are delivered to the addressee's last known place of business, habitual residence, or mailing address. Coupled with Section 63 of Bharatiya Sakshya Adhiniyam, 2023, electronic delivery via registered email and WhatsApp constitutes legally complete service.",
    steps: [
      {
        step: "Multi-Channel Digital & Physical Dispatch",
        description:
          "Dispatch the Section 21 Notice and Statement of Claim concurrently via Speed Post with tracking, registered KYC email address, and verified WhatsApp with delivery ticks.",
      },
      {
        step: "File Affidavit of Deemed Service under Section 3",
        description:
          "Submit postal tracking reports showing delivery attempts and digital transmission logs with SHA-256 hash timestamps to the arbitral tribunal.",
      },
      {
        step: "Tribunal Orders Ex-Parte Proceedings under Section 25(c)",
        description:
          "Upon satisfaction of statutory service, the arbitrator forfeits the cardholder's right to file a statement of defence and proceeds to pass an enforceable ex-parte award.",
      },
    ],
    statutoryRule: "Section 3 & Section 25(c) Arbitration and Conciliation Act, 1996",
  },
  {
    id: "contested-fraud-charges",
    tabLabel: "Disputed Charges / Fraud",
    title: "Cardholder Alleges Unauthorized Transactions or Excessive Finance Fees",
    cause:
      "Defaulters often attempt to derail recovery proceedings by alleging unauthorized transactions, fraudulent POS/e-commerce swipes, or disputing compound interest rates, late payment fees, and GST levies charged during the default period.",
    legalBasis:
      "Under Section 4 of the Bankers' Books Evidence Act, 1891 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, certified electronic ledger statements accompanied by systemic two-factor authentication (2FA/OTP) logs establish a statutory presumption of debt. RBI Master Direction on Credit Card Issuance (2022/2026) upholds contractual interest rates agreed in the Most Important Terms and Conditions (MITC).",
    steps: [
      {
        step: "Produce Certified MITC & Digital Cardholder Agreement",
        description:
          "Submit the executed card application form, digital onboarding audit trail, and signed MITC containing explicit credit terms and the Section 7 arbitration clause.",
      },
      {
        step: "Furnish IP & SMS Gateway OTP Dispatch Certificates",
        description:
          "Provide telecom gateway logs demonstrating successful transmission of OTPs to the cardholder's registered mobile number for every disputed transaction.",
      },
      {
        step: "File Section 65B / BSA Section 63 Electronic Evidence Certificate",
        description:
          "Attach the mandatory compliance certificate from the bank's IT system administrator verifying the integrity of the core banking software ledger.",
      },
    ],
    statutoryRule: "Bankers' Books Evidence Act 1891 & Section 63 BSA 2023",
  },
  {
    id: "post-award-execution",
    tabLabel: "Award Execution & Recovery",
    title: "Cardholder Ignores Arbitral Award: Executing under Section 36 & Order XXI CPC",
    cause:
      "Even after an arbitral award is passed directing the borrower to pay principal dues, penal interest, and arbitration costs, delinquent cardholders rarely pay voluntarily unless legal coercive execution is initiated.",
    legalBasis:
      "Section 36(1) of the Arbitration Act mandates that upon expiry of the 90-day limitation window under Section 34 (where no stay has been granted by a competent court), the award is directly executable as a decree of a Civil Court under Order XXI of the Code of Civil Procedure, 1908.",
    steps: [
      {
        step: "Issue Section 36 Demand Letter",
        description:
          "Upon receipt of the signed award copy under Section 31(5), issue a final 15-day compliance notice notifying the borrower of impending civil execution.",
      },
      {
        step: "File Execution Petition in Competent District Court",
        description:
          "File an Execution Petition under Order XXI Rule 11 of the CPC in the District Court having jurisdiction over the borrower's assets or residence.",
      },
      {
        step: "Obtain Garnishee Orders & Asset Attachment Warrants",
        description:
          "Petition the executing court for attachment of the judgment debtor's secondary bank accounts (Order XXI Rule 46), salary attachment (Rule 48), or movable assets.",
      },
    ],
    statutoryRule: "Section 36 ACA 1996 read with Order XXI Code of Civil Procedure 1908",
  },
];

export default function CreditCardArbitrationTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Display */}
      <div className="mt-6 space-y-5 animate-fadeIn">
        <div>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
            {currentScenario.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 mt-2">
            {currentScenario.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <strong className="text-slate-900 block font-bold mb-1">Root Problem &amp; Recovery Barrier:</strong>
            <p className="leading-relaxed">{currentScenario.cause}</p>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-xl text-blue-950">
            <strong className="text-blue-900 block font-bold mb-1">Statutory Authority &amp; Judicial Protection:</strong>
            <p className="leading-relaxed">{currentScenario.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
            Institutional Action Steps for Recovery Counsel:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center mb-2">
                    {i + 1}
                  </span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{st.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>Need bulk automated dispute administration for 500+ delinquent credit card portfolios?</span>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="text-red-600 hover:text-red-700 font-bold underline shrink-0"
          >
            Explore Bulk Recovery Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
}
