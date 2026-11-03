"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  ctsCode: string;
  section138Status: "APPLIES FULLY" | "APPLIES WITH PRESUMPTION" | "TECHNICAL / CONDITIONAL";
  summary: string;
  supremeCourtRuling: string;
  statutoryAction: {
    step: string;
    detail: string;
  }[];
  trapToAvoid: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "account-closed",
    tabLabel: "Account Closed",
    title: "Cheque Dishonoured Due to 'Account Closed' (CTS Return Code 20)",
    ctsCode: "CTS Return Code 20 (Account Closed) / Code 21 (Account Transferred)",
    section138Status: "APPLIES FULLY",
    summary:
      "When a cheque returns unpaid marked 'Account Closed', drawers often falsely claim that no transaction could take place because the bank account ceased to exist. The Supreme Court has unequivocally settled that closing an account prior to presenting or clearing the cheque is an explicit default under Section 138 of the Negotiable Instruments Act, 1881.",
    supremeCourtRuling:
      "NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253: A two-judge bench of the Supreme Court held that dishonour of a cheque on the ground of 'account closed' falls squarely within the ambit of Section 138. The Court ruled that closing the account is an aggressive act demonstrating that there are no funds or arrangement to honour the instrument.",
    statutoryAction: [
      {
        step: "Capture Bank Return Memo Date",
        detail:
          "Preserve the official paper or digital CTS return memo bearing the bank's clearing seal, return code 20, and the exact date of dishonour. Your statutory 30-day notice limitation starts from this date.",
      },
      {
        step: "Dispatch Statutory 15-Day Demand Notice",
        detail:
          "Engage an advocate to serve a formal demand notice under Section 138(b) via Registered Speed Post and Section 63 BSA electronic mail demanding payment within 15 calendar days of receipt.",
      },
      {
        step: "File Section 142 Criminal Complaint",
        detail:
          "If the drawer fails to tender payment within 15 days, institute a criminal complaint before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate within 30 days of the cause of action.",
      },
    ],
    trapToAvoid:
      "Do not represent an 'Account Closed' cheque to the bank. A closed account will never re-open, and presenting it repeatedly wastes your precious 30-day statutory notice clock.",
  },
  {
    id: "signature-mismatch",
    tabLabel: "Signature Mismatch",
    title: "Cheque Dishonoured Due to 'Signature Differs' (CTS Return Code 01/02)",
    ctsCode: "CTS Return Code 01 (Drawer's Signature Differs) / Code 02 (Signature Incomplete)",
    section138Status: "APPLIES FULLY",
    summary:
      "Drawers frequently attempt to evade payment by deliberately scribbling a distorted or slightly modified signature. They assume that a bank remark stating 'drawer signature differs' shields them from criminal prosecution. The Supreme Court 3-Judge Bench has firmly closed this loophole.",
    supremeCourtRuling:
      "Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375: The Supreme Court held that dishonour on the grounds that 'signatures do not match' or 'signature differs' falls within the penal provisions of Section 138. The expression 'amount of money is insufficient' must be given purposive interpretation. An authorized account holder cannot escape statutory liability by intentionally altering their own signature.",
    statutoryAction: [
      {
        step: "Verify Account Ownership & Cheque Leaf Source",
        detail:
          "Confirm that the cheque belongs to the drawer's active or held account. If the drawer voluntarily handed over the cheque in discharge of a debt, the presumption under Section 139 NI Act applies in your favor.",
      },
      {
        step: "Explicitly Address Signature Mismatch in Legal Notice",
        detail:
          "In the Section 138 demand notice, explicitly allege that the signature disparity was an intentional, fraudulent act executed to defraud the payee, citing the Laxmi Dyechem ruling.",
      },
      {
        step: "FSL Handwriting Expert Comparison in Court",
        detail:
          "If the accused falsely denies execution in trial, petition the court under Section 45 Indian Evidence Act / Section 39 BSA 2023 for forensic comparison against bank specimen cards and admitted signatures.",
      },
    ],
    trapToAvoid:
      "If the drawer claims the cheque was forged or stolen by a third party, demand proof of an earlier police complaint filed BEFORE the cheque was presented. Bare oral denial is routinely rejected by magistrate courts.",
  },
  {
    id: "stop-payment",
    tabLabel: "Stop Payment",
    title: "Cheque Dishonoured Due to 'Payment Stopped by Drawer' (CTS Return Code 10)",
    ctsCode: "CTS Return Code 10 (Payment Stopped by Drawer)",
    section138Status: "APPLIES WITH PRESUMPTION",
    summary:
      "Issuing a 'Stop Payment' instruction to the bank does not insulate the drawer from criminal liability under Section 138. Unless the drawer proves that there was no existing debt or that the stoppage was justified by a total failure of consideration, Section 138 applies in full force.",
    supremeCourtRuling:
      "MMTC Ltd. v. Medchl Chemicals & Pharma (P) Ltd. (2002) 1 SCC 234 & Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232: The Supreme Court held that even when a cheque is dishonoured because of 'stop payment', the offence under Section 138 is attracted. The statutory presumption under Section 139 holds that the cheque was issued for an enforceable liability.",
    statutoryAction: [
      {
        step: "Examine Reason for Stoppage in Notice",
        detail:
          "Serve the 30-day notice immediately upon receipt of return memo code 10. Call upon the drawer to state the exact contractual justification for issuing the stop payment instruction.",
      },
      {
        step: "Produce Invoices, Agreements & Acknowledgments",
        detail:
          "Gather signed delivery challans, tax invoices, ledger statements, or promissory notes proving the existence of a legally enforceable debt at the time the cheque was issued.",
      },
      {
        step: "Claim 20% Interim Compensation Under Section 143A",
        detail:
          "Once the summons is served and the accused enters appearance in magistrate court, file an immediate application under Section 143A NI Act seeking a deposit of up to 20% of the cheque amount.",
      },
    ],
    trapToAvoid:
      "Do not accept the drawer's verbal excuse that they stopped payment due to an accounting error. Always serve the statutory demand notice within 30 days to keep Section 138 alive.",
  },
  {
    id: "refer-to-drawer",
    tabLabel: "Refer to Drawer",
    title: "Cheque Dishonoured Due to 'Refer to Drawer' (CTS Return Code 06/07)",
    ctsCode: "CTS Return Code 06 (Refer to Drawer) / Code 07 (Exceeds Arrangement)",
    section138Status: "APPLIES FULLY",
    summary:
      "'Refer to Drawer' is a traditional banking euphemism used by financial institutions when they decline to honour an instrument, most commonly due to inadequate funds, lack of credit line, or operational restrictions on the account.",
    supremeCourtRuling:
      "Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249 & Laxmi Dyechem (2012): The Supreme Court clarified that 'Refer to Drawer' is synonymous with insufficiency of funds or absence of arrangements to pay. Courts have rejected technical arguments that Section 138 requires the literal words 'funds insufficient' on the bank slip.",
    statutoryAction: [
      {
        step: "Obtain Written Clarification If Disputed",
        detail:
          "While Section 138 notice can be issued directly on the 'Refer to Drawer' memo, asking the clearing bank branch manager for a confirmation slip stating fund insufficiency provides airtight trial proof.",
      },
      {
        step: "Serve Section 138 Statutory Notice Within 30 Days",
        detail:
          "Do not delay. Issue the statutory 15-day demand notice via Speed Post and WhatsApp/Email under Sanjabij Tari (SC 2025) e-service guidelines.",
      },
      {
        step: "Track 15-Day Cure Period",
        detail:
          "Allow exactly 15 clear days from the date of notice delivery. If unpaid by Day 16, the statutory cause of action crystallizes, opening the 30-day court filing window under Section 142.",
      },
    ],
    trapToAvoid:
      "Never wait for the drawer to 'call their bank'. The 30-day clock from the memo date does not freeze for informal discussions.",
  },
  {
    id: "technical-defect",
    tabLabel: "Technical Defects",
    title: "Cheque Returned for Stale Date, Overwriting or Instrument Damage",
    ctsCode: "CTS Codes 30 (Stale Cheque), 31 (Post-Dated), 33 (Instrument Mutilated)",
    section138Status: "TECHNICAL / CONDITIONAL",
    summary:
      "Certain cheque return reasons do NOT automatically attract Section 138 criminal liability because they represent technical defects, premature presentation, or expired instrument validity under RBI CTS guidelines.",
    supremeCourtRuling:
      "Section 138(a) NI Act: To invoke criminal prosecution, the cheque MUST be presented to the bank within a period of three months from the date on which it is drawn or within the period of its validity, whichever is earlier. Presentation after 3 months renders Section 138 legally void.",
    statutoryAction: [
      {
        step: "Check Cheque Date Against Presentation Date",
        detail:
          "If the cheque is returned as 'Stale' (presented past 90 days), criminal prosecution under Section 138 is barred. However, you can still recover the money via an Order 37 CPC summary suit within 3 years.",
      },
      {
        step: "Demand Fresh Cheque or Immediate Wire Transfer",
        detail:
          "For technical defects like 'Instrument Mutilated' or 'Overwriting not signed', issue a formal demand calling upon the debtor to issue a replacement cheque within 7 days.",
      },
      {
        step: "Assess BNS Section 318 (Cheating) if Dishonest Intent Existed",
        detail:
          "If the debtor intentionally handed over a stale or defaced cheque to deceive you into parting with goods or property, initiate criminal action for cheating under Section 318 BNS 2023.",
      },
    ],
    trapToAvoid:
      "Do not file a Section 138 complaint for a cheque presented beyond 90 days of its date. The magistrate will dismiss it at the preliminary stage, wasting court fees and litigation time.",
  },
];

export default function ChequeReturnTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
              {currentScenario.ctsCode}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-0.5">
              {currentScenario.title}
            </h3>
          </div>
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase ${
                currentScenario.section138Status === "APPLIES FULLY"
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : currentScenario.section138Status === "APPLIES WITH PRESUMPTION"
                  ? "bg-blue-100 text-blue-800 border border-blue-300"
                  : "bg-amber-100 text-amber-800 border border-amber-300"
              }`}
            >
              Section 138: {currentScenario.section138Status}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
          {currentScenario.summary}
        </p>

        {/* Supreme Court Ruling Callout */}
        <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-900 text-xs sm:text-sm text-slate-800">
          <strong className="block text-slate-900 font-bold mb-1">
            Binding Supreme Court Precedent:
          </strong>
          <p className="leading-relaxed italic">{currentScenario.supremeCourtRuling}</p>
        </div>

        {/* Action Steps Sequence */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Recommended Statutory Action Sequence:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.statutoryAction.map((act, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{act.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{act.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trap to Avoid */}
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-950">
          <span className="text-base shrink-0">⚠️</span>
          <div>
            <strong className="font-bold block">Critical Legal Mistake to Avoid:</strong>
            <p className="mt-0.5 leading-relaxed">{currentScenario.trapToAvoid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
