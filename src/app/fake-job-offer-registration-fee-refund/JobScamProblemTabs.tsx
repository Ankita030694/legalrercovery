"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "bogus-registration",
    tabLabel: "Registration Fee",
    title: "Placement Agency Extracted 'Registration & Resume Verification Fee'",
    cause:
      "Physical or online placement consultancies lure candidates with promises of guaranteed executive or entry-level placements at major tech or corporate firms. They demand an upfront 'candidate onboarding' or 'resume grooming' fee ranging from ₹3,000 to ₹25,000. Once the fee is paid, either no interviews take place, or the candidate is sent to fake informal telephonic rounds before the agency stops answering calls.",
    legalBasis:
      "Under Section 2(47) of the Consumer Protection Act, 2019, making deceptive representations about guaranteed employment or taking consideration without rendering actual service constitutes an Unfair Trade Practice. Furthermore, under Section 318(4) of Bharatiya Nyaya Sanhita, 2023 (BNS), dishonestly inducing a person to transfer money based on a false promise constitutes criminal cheating. Because the consultancy has a physical address, bank account, or GST registration, they can be traced and compelled to refund.",
    steps: [
      {
        step: "Gather Payment UTR & Registration Invoices",
        description:
          "Preserve the transaction receipt, bank statement showing the beneficiary account name, GST invoice (if issued), and the registration receipt or brochure.",
      },
      {
        step: "Issue a 7-Day Written Revocation Notice",
        description:
          "Send an email demanding a 100% refund of the registration fee due to complete non-performance of placement services within the agreed timeframe.",
      },
      {
        step: "Serve an Advocate Statutory Legal Notice",
        description:
          "If the agency refuses or claims the fee is 'non-refundable', have an advocate serve a formal legal notice. Under consumer court precedents, unilateral 'non-refundable' clauses in consumer contracts are void ab initio.",
      },
    ],
    statutoryRule: "Section 2(47) Consumer Protection Act 2019 & Section 318(4) BNS 2023",
  },
  {
    id: "laptop-kit-deposit",
    tabLabel: "Laptop Security Deposit",
    title: "Bogus Work-From-Home 'Laptop & IT Equipment Security Deposit' Scam",
    cause:
      "Job seekers are sent a counterfeit offer letter for remote data entry, content editing, or IT support. The scammer claims the company provides a brand-new MacBook Pro or Dell corporate laptop, ID card, and headset, but requires a 'refundable equipment insurance/security deposit' of ₹15,000 to ₹35,000 prior to courier dispatch. After payment, the scammer either demands more funds for 'courier clearance' or disappears.",
    legalBasis:
      "Legitimate enterprise corporations never require candidates to transfer funds to individual savings accounts or UPI IDs for company-issued hardware. This is an organized cyber fraud actionable under Section 66D of the Information Technology Act, 2000 (cheating by personation using computer resource) and Section 318(4) of BNS 2023. Immediate inter-bank freezing via the 1930 National Cyber Crime Reporting Portal is vital.",
    steps: [
      {
        step: "Call National Cyber Crime Helpline 1930 Immediately",
        description:
          "Report the beneficiary UPI ID, bank account number, and transaction UTR within the golden hour (2–4 hours) to trigger automatic lien marking on the recipient's bank account.",
      },
      {
        step: "File Formal Cyber Crime Complaint on cybercrime.gov.in",
        description:
          "Submit full WhatsApp/Telegram chat logs, fraudulent offer letter PDFs, and payment debits to generate an official Cyber Crime Acknowledgement Number.",
      },
      {
        step: "Lodge Written Dispute with Your Bank for Chargeback",
        description:
          "Submit a written cyber complaint acknowledgement to your home bank's fraud branch requesting an immediate recall / inter-bank stop payment.",
      },
    ],
    statutoryRule: "Section 66D Information Technology Act 2000 & 1930 NCRP Freeze Protocol",
  },
  {
    id: "corporate-impersonation",
    tabLabel: "Corporate Impersonation",
    title: "Counterfeit Offer Letter Impersonating TCS, Infosys, Tech Mahindra or MNCs",
    cause:
      "Cyber criminals clone official corporate logos, letterheads, and HR signatures. They send unsolicited offer letters claiming the recipient was shortlisted based on their profile on job portals (Naukri, Indeed, LinkedIn). The letter instructs the victim to deposit funds for mandatory pre-employment medical examinations, uniform charges, or background verification into a specified account.",
    legalBasis:
      "This constitutes identity theft, trademark infringement, and cyber fraud under Section 66C and 66D of the IT Act, 2000, as well as Section 319 (Cheating by personation) and Section 336 (Forgery) of BNS 2023. Major corporations maintain explicit public notices confirming that they do not charge any fee at any stage of recruitment.",
    steps: [
      {
        step: "Verify the Domain Header of the Sender Email",
        description:
          "Check the sender's email domain. Official communications originate from corporate domains (e.g., @tcs.com). Fraudsters use look-alike domains (e.g., @tcs-careers-india.org) or free Gmail/Yahoo handles.",
      },
      {
        step: "Forward Evidence to Corporate Anti-Fraud Cell",
        description:
          "Forward the counterfeit letter to the official ethics and recruitment fraud email of the targeted enterprise (e.g., careers@tcs.com) to obtain confirmation of forgery.",
      },
      {
        step: "Lodge Police Cyber FIR & Seek Account Freeze",
        description:
          "Use the company's written confirmation of forgery as evidence in your police complaint under Section 318(4) & 336 BNS 2023 to enable police to freeze the mule account.",
      },
    ],
    statutoryRule: "Section 66C/66D IT Act 2000, Section 319 & 336 BNS 2023",
  },
  {
    id: "overseas-visa-fraud",
    tabLabel: "Gulf & Overseas Visa",
    title: "Unauthorized Foreign Employment Consultancy Took Visa & Ticket Charges",
    cause:
      "Consultancies promising high-paying employment in Dubai, Saudi Arabia, Singapore, or European nations extract ₹50,000 to ₹3,00,000 as 'visa processing', 'work permit', and 'airfare booking' charges. Victims are either provided with forged tourist visas or face endless postponement, leaving them stranded without jobs.",
    legalBasis:
      "Under Sections 10, 16, and 24 of the Emigration Act, 1983, no person can function as an overseas recruiting agent without a valid Registration Certificate (RC) issued by the Protector General of Emigrants (PGE), Ministry of External Affairs (MEA). Collecting recruitment fees without MEA authorization is a cognizable criminal offence. Furthermore, registered agents cannot charge more than the statutory ceiling (maximum ₹30,000 plus GST).",
    steps: [
      {
        step: "Verify Agency License on MEA e-Migrate Portal",
        description:
          "Search the e-Migrate portal (emigrate.gov.in) to verify whether the agency holds an active MEA Recruiting Agent (RA) license or is on the government's illegal agency blacklist.",
      },
      {
        step: "Lodge Complaint with Protector of Emigrants (POE)",
        description:
          "File a formal complaint with the regional POE office under the Ministry of External Affairs, which has statutory powers to suspend agency licenses and initiate police prosecution.",
      },
      {
        step: "Serve Advocate Legal Notice & Consumer Complaint",
        description:
          "If the consultancy has an operational office in India, serve an advocate legal notice citing Section 24 Emigration Act and file a petition before the District Consumer Commission on e-Jagriti.",
      },
    ],
    statutoryRule: "Sections 10 & 24 Emigration Act 1983 & Section 318(4) BNS 2023",
  },
];

export default function JobScamProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-2 sm:p-3">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PROBLEMS.map((problem) => {
            const isSelected = activeTab === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setActiveTab(problem.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {problem.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-md mb-2">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {currentProblem.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <h4 className="font-bold text-slate-900 uppercase tracking-wide text-[11px] mb-1">
              Modus Operandi &amp; Dispute Background:
            </h4>
            <p>{currentProblem.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <h4 className="font-bold text-slate-900 uppercase tracking-wide text-[11px] mb-1">
              Statutory Position &amp; Enforceability:
            </h4>
            <p>{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps Sequence */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            Recommended Statutory Action Sequence:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-extrabold text-xs mb-2">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-snug">
                    {st.step}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
