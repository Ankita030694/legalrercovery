"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  badge: string;
  scenarioTitle: string;
  problemSummary: string;
  immediateAction: string;
  legalBasis: string;
  recoveryStep: string;
  successRate: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "tab-wrong-upi-id",
    tabLabel: "Wrong UPI ID / VPA Mistake",
    badge: "1-Character Typo / Misdirected VPA",
    scenarioTitle: "Transferred Money to a Similar or Mistyped UPI Virtual Payment Address (VPA)",
    problemSummary:
      "You intended to pay 'rahul.sharma@okaxis' but typed 'rahul.sharma1@okaxis' or selected the wrong auto-suggested contact. The money successfully transferred instantly to an unknown stranger's bank account linked to that handle.",
    immediateAction:
      "Screenshot the transaction page with the 12-digit UPI Reference / UTR Number. Open your UPI app (GPay / PhonePe / Paytm / BHIM) > Transaction History > 'Report a Problem' > select 'Money transferred to wrong person / incorrect UPI ID'. Simultaneously raise a complaint on the NPCI Portal (npci.org.in > UPI Dispute Redressal).",
    legalBasis:
      "Section 72 of the Indian Contract Act, 1872 creates an involuntary quasi-contract obliging the recipient to restore money paid by mistake. Under RBI circulars, beneficiary banks must freeze or initiate consent-based debit reversal when alerted.",
    recoveryStep:
      "Submit an official written dispute to your bank manager attaching the UTR. Remitter bank issues an inter-bank reversal message to the beneficiary bank. If the receiver refuses to give debit consent, have an advocate issue an unassailable statutory legal notice under Section 72 and Section 316 BNS.",
    successRate: "High (82% resolved via NPCI / bank recall within 3–7 business days; remainder via legal notice).",
  },
  {
    id: "tab-wrong-account-ifsc",
    tabLabel: "Wrong Account / IFSC Input",
    badge: "Direct Bank Transfer Error",
    scenarioTitle: "Entered Wrong Beneficiary Account Number or Inaccurate IFSC Code",
    problemSummary:
      "While conducting a peer-to-peer or merchant bank transfer via UPI using Account + IFSC, you entered an incorrect digit. If the destination account exists in the destination bank, funds are credited instantly without recipient name matching.",
    immediateAction:
      "Physically visit your bank branch or email their grievance cell immediately. Provide transaction UTR, remitter account, destination account, timestamp, and amount. Request the branch manager to place an immediate inter-bank recall (CBSS debit hold) with the beneficiary bank branch.",
    legalBasis:
      "Under RBI Circular DPSS.CO.CHD.No./2010 on electronic payments, while banks execute transfers based solely on account numbers, beneficiary banks are legally obligated to act as facilitators for reversing mistaken entries once put on notice by the remitter bank.",
    recoveryStep:
      "Beneficiary bank branch contacts the account holder for consent to debit. If the beneficiary withdraws or refuses to return funds, submit a formal grievance. After 30 days without recovery, escalate to the RBI Integrated Ombudsman or file a civil recovery suit (Order 37 CPC).",
    successRate: "Moderate to High (75% resolved when flagged within 24 hours before funds are withdrawn).",
  },
  {
    id: "tab-receiver-refusing",
    tabLabel: "Receiver Refuses to Return",
    badge: "Unlawful Retention / Defiance",
    scenarioTitle: "Beneficiary Contacted but Explicitly Refuses or Ignores Requests to Refund",
    problemSummary:
      "The bank or you contacted the unintended recipient via phone/SMS, but they switch off their phone, claim the money was a gift/due payment, or adamantly refuse to authorize the bank's debit reversal.",
    immediateAction:
      "Do NOT engage in abusive or threatening communication. Secure the beneficiary's name, bank branch, and masked contact details via your bank's grievance officer or the NPCI dispute response.",
    legalBasis:
      "Criminal Breach of Trust under Section 316 and Dishonest Misappropriation of Property under Section 314 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Sections 403 & 406). Retention of mistakenly paid money is an actionable civil and criminal offence.",
    recoveryStep:
      "Serve an advocate-drafted Statutory Legal Demand Notice giving a strict 15-day deadline to refund the amount with 18% statutory interest. If they fail to comply, lodge an e-FIR / police complaint for dishonest misappropriation and file a Summary Suit under Order 37 of the CPC.",
    successRate: "Very High (94% of defiant recipients settle and transfer the amount back once an advocate notice arrives).",
  },
  {
    id: "tab-bank-non-cooperation",
    tabLabel: "Bank Refuses Inter-Bank Recall",
    badge: "Deficiency in Banking Service",
    scenarioTitle: "Remitter or Beneficiary Bank Dismisses Dispute Citing 'Customer's Own Mistake'",
    problemSummary:
      "Branch officials dismiss your request, stating 'Since you entered the UPI PIN, the bank has zero liability and cannot help you contact the beneficiary or reverse the funds.'",
    immediateAction:
      "Demand the formal CRM Complaint Reference Number or Grievance Ticket ID in writing. Cite RBI Ombudsman guidelines mandating institutional facilitation for inter-bank erroneous transfers.",
    legalBasis:
      "Section 2(11) of the Consumer Protection Act, 2019 defines bank apathy as 'Deficiency in Service'. Reserve Bank - Integrated Ombudsman Scheme, 2021 (Clause 10) explicitly covers non-adherence to RBI directives on payment reversals.",
    recoveryStep:
      "Send a formal statutory grievance letter to the bank's Principal Nodal Officer (PNO). If unresolved within 30 days, submit a zero-cost online complaint on the RBI CMS Portal (cms.rbi.org.in). Consumer courts also penalize banks with compensation for refusing inter-bank coordination.",
    successRate: "High (RBI Ombudsman orders beneficiary bank to freeze disputed funds or penalizes negligent banks).",
  },
];

export default function WrongUpiProblemTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-sm">
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        {SCENARIOS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
            {current.badge}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Estimated Resolution: <strong className="text-emerald-600 dark:text-emerald-400">{current.successRate}</strong>
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          {current.scenarioTitle}
        </h3>

        <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white block mb-1">Scenario Anatomy:</strong>
          {current.problemSummary}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1.5">
              1. Immediate Redressal Action
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {current.immediateAction}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 block mb-1.5">
              2. Governing Law &amp; Section
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1.5">
              3. Legal Escalation &amp; Recovery
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {current.recoveryStep}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
