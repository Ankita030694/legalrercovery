"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "unresponsive-abroad",
    tabLabel: "Blocked & Ghosted Abroad",
    title: "Borrower Blocked WhatsApp and Calls After Relocating Overseas",
    cause:
      "A common tactic among borrowers who move to the UK, Canada, the US, Australia, or the Gulf is cutting off communication once settled abroad. They assume physical distance shields them from Indian legal recovery mechanisms, leaving the lender with unanswered messages and deactivated Indian SIM numbers.",
    legalBasis:
      "Under Order V Rule 25 CPC, Indian courts can order service of notice and summons directly to an overseas defendant by international registered post, verified email, or diplomatic channels. High Courts across India (including Delhi and Bombay High Courts) routinely recognize service through electronic means such as email and WhatsApp under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Additionally, a legal demand notice can be concurrently served at their permanent parental or ancestral address in India.",
    steps: [
      {
        step: "Collate Digital Footprint & Overseas Coordinates",
        description:
          "Gather their overseas LinkedIn profile, foreign employer website, overseas address (from mutual friends or social media), foreign phone number, and primary email ID.",
      },
      {
        step: "Dispatch Dual-Jurisdiction Legal Demand Notice",
        description:
          "Engage an Indian recovery advocate to draft and dispatch a formal statutory notice sent via International Speed Post/Courier to their overseas address, email with delivery acknowledgment, and Speed Post to their registered permanent address in India.",
      },
      {
        step: "File Indian Civil Suit with Electronic Service Certification",
        description:
          "Institute a summary suit under Order XXXVII CPC or ordinary money suit in the court having local jurisdiction over the lending transaction, producing a Section 63 BSA certificate for all electronic service.",
      },
    ],
    statutoryRule: "Order V Rule 25 CPC & Section 63 Bharatiya Sakshya Adhiniyam, 2023",
  },
  {
    id: "jurisdiction-challenge",
    tabLabel: "Claims No Jurisdiction",
    title: "Borrower Claims Indian Courts Have No Jurisdiction Once They Settle Abroad",
    cause:
      "Borrowers frequently assert a false legal defense: 'I am a Permanent Resident/Citizen abroad now, so Indian law cannot touch me.' This misconception leads them to ignore formal payment demands, mistakenly believing an Indian court cannot entertain a suit against an overseas resident.",
    legalBasis:
      "Under Section 20(c) of the Code of Civil Procedure, 1908, a civil court possesses unquestioned jurisdiction if the cause of action wholly or in part arose within its local territorial limits. Because the funds were disbursed from an Indian bank account, lent in India, or agreed to be repaid into an Indian bank account, the cause of action firmly arose in India. The physical residence or foreign nationality of the borrower does not divest the Indian court of subject-matter jurisdiction.",
    steps: [
      {
        step: "Establish Territorial Banking Nexus",
        description:
          "Extract bank statement copies showing the exact Indian branch from which the funds were transferred (NEFT/RTGS/IMPS/UPI) to establish Section 20(c) CPC jurisdiction.",
      },
      {
        step: "Highlight Foreign Jurisdiction Fallacy in Demand Notice",
        description:
          "Advocate notice explicitly rebuts extraterritorial immunity, citing Section 20(c) CPC and precedents establishing Indian court authority over cross-border debtor obligations.",
      },
      {
        step: "Secure Ex-Parte Decree if Summons are Ignored",
        description:
          "If the overseas defendant fails to appear after valid service under Order V Rule 25 CPC, the Indian court proceeds ex-parte and issues a binding money decree with statutory interest.",
      },
    ],
    statutoryRule: "Section 20(c) CPC & Order XXXVII Rule 2 CPC",
  },
  {
    id: "limitation-worries",
    tabLabel: "Over 3 Years Elapsed",
    title: "More Than 3 Years Have Passed Since the Loan Was Disbursed",
    cause:
      "Lenders often hesitate to initiate legal action because more than 3 years have elapsed since the money was transferred. In domestic disputes, Article 19 of the Limitation Act, 1963 imposes a standard 3-year deadline, leading lenders to prematurely write off their funds as time-barred.",
    legalBasis:
      "Section 15(5) of the Limitation Act, 1963 creates a powerful statutory exception: 'In computing the period of limitation for any suit, the time during which the defendant has been absent from India... shall be excluded.' Consequently, the entire period your friend has resided outside India is legally excluded from the 3-year calculation. Furthermore, any written WhatsApp message, email, or partial repayment acknowledging the debt resets the 3-year limitation clock under Sections 18 and 19.",
    steps: [
      {
        step: "Document Departure Date & Passport/Immigration Timeline",
        description:
          "Preserve flight dates, social media announcements, or visa timestamps showing when the borrower departed India to invoke Section 15(5) exclusion.",
      },
      {
        step: "Audit WhatsApp & Email Chats for Written Acknowledgments",
        description:
          "Identify any message where the borrower promised repayment (e.g., 'Will send after next month's salary') to reset limitation under Section 18 of the Limitation Act.",
      },
      {
        step: "Draft Time-Extension Pleadings in the Notice",
        description:
          "Frame the legal notice with express statutory reliance on Section 15(5) and Section 18, putting the borrower on notice that their limitation defense is dead on arrival.",
      },
    ],
    statutoryRule: "Section 15(5), Section 18 & Section 19 of Limitation Act, 1963",
  },
  {
    id: "assets-in-india",
    tabLabel: "Indian Assets & Property",
    title: "Borrower Left India but Owns Ancestral Land, Flats or Bank Accounts in India",
    cause:
      "Even when a borrower moves their primary livelihood abroad, the majority of NRIs retain significant financial and real estate ties in India, including ancestral residential property, agricultural land, NRE/NRO bank accounts, demat accounts, or fixed deposits.",
    legalBasis:
      "Under Order XXI of the Code of Civil Procedure, 1908, a civil court money decree is enforceable through the attachment and court-monitored auction of any property owned by the judgment debtor within India. Under Order XXXVIII Rule 5 CPC, an Indian court can even order attachment before judgment (freezing Indian assets) if there is reasonable apprehension that the defendant is liquidating Indian assets to defeat decree execution.",
    steps: [
      {
        step: "Identify Indian Real Estate & Bank Details",
        description:
          "Collate property registration numbers, ancestral village/district land registry records, and bank account numbers held by the borrower in India.",
      },
      {
        step: "Issue Legal Demand with Asset Attachment Warning",
        description:
          "Explicitly warn the borrower that non-payment within 15 days will trigger civil recovery proceedings accompanied by an application under Order XXXVIII Rule 5 to attach their Indian property.",
      },
      {
        step: "Execute Court Decree via Order XXI Attachment",
        description:
          "Following decree passage, initiate execution proceedings in the District Court where the asset is situated to attach bank accounts or auction real property.",
      },
    ],
    statutoryRule: "Order XXXVIII Rule 5 & Order XXI Rule 54 CPC",
  },
  {
    id: "cheque-or-bns",
    tabLabel: "Cheque Bounced / Cheating",
    title: "Borrower Issued a Cheque That Bounced or Took Funds Under Fraudulent Pretenses",
    cause:
      "In many cross-border disputes, the borrower handed over a signed cheque before boarding their flight, which subsequently bounced, or deliberately solicited the loan with no intention to repay, immediately vanishing abroad with the funds.",
    legalBasis:
      "Under Section 138 of the Negotiable Instruments Act, 1881, cheque dishonour triggers criminal liability with up to 2 years imprisonment. If the borrower induced the loan with fraudulent deception from inception (e.g., fictitious medical emergencies, fake visa funding), Section 318(4) of the Bharatiya Nyaya Sanhita, 2023 (BNS) applies. Upon issuance of an arrest warrant by an Indian Magistrate, law enforcement can request a Look Out Circular (LOC) and passport impoundment under Section 10(3)(h) of the Passports Act, 1967.",
    steps: [
      {
        step: "Serve Statutory 30-Day Cheque Demand Notice",
        description:
          "For bounced cheques, dispatch the mandatory Section 138 demand notice within 30 days of receiving the bank memo via International Post and email.",
      },
      {
        step: "Initiate Criminal Complaint Before Judicial Magistrate",
        description:
          "File the Section 138 NI Act or Section 318 BNS complaint in the jurisdictional court; non-appearance leads to Non-Bailable Warrants (NBW).",
      },
      {
        step: "Initiate Look Out Circular (LOC) & Passport Restrictions",
        description:
          "Under Section 10(3)(h) of the Passports Act, 1967, criminal warrants can trigger an LOC at Indian immigration checkpoints, preventing the borrower from leaving or renewing travel documents.",
      },
    ],
    statutoryRule: "Section 138 NI Act, Section 318(4) BNS & Section 10(3)(h) Passports Act",
  },
];

export default function AbroadScenariosTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Scrollable Tabs Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`shrink-0 px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-2xs"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Body */}
      <div className="p-5 sm:p-7 space-y-5">
        <div>
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-full">
            {currentScenario.statutoryRule}
          </span>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-2.5">
            {currentScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide text-slate-500">
              The Reality &amp; Cross-Border Challenge:
            </strong>
            <p className="text-slate-700">{currentScenario.cause}</p>
          </div>

          <div className="p-4 bg-red-50/60 rounded-xl border border-red-200/70">
            <strong className="block text-[#991B1B] font-bold mb-1 text-xs uppercase tracking-wide">
              The Statutory Counter-Remedy:
            </strong>
            <p className="text-slate-800">{currentScenario.legalBasis}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3">
            Recommended Action Steps:
          </h4>
          <ol className="space-y-2.5">
            {currentScenario.steps.map((st, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs sm:text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-[#111827] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-slate-900 font-bold">{st.step}: </strong>
                  <span className="text-slate-700">{st.description}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
          <span className="text-slate-500">
            Need legal counsel to review your cross-border loan papers?
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-[#DC2626] font-bold hover:underline"
          >
            Review Transparent Legal Notice Charges →
          </Link>
        </div>
      </div>
    </div>
  );
}
