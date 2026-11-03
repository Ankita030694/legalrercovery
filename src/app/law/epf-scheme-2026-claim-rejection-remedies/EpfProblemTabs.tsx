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

const EPF_PROBLEMS: ProblemTab[] = [
  {
    id: "name-dob-mismatch",
    tabLabel: "Details Mismatch",
    title: "Member Details Mismatch: Name, Father's Name or DOB Discrepancy",
    cause:
      "Automated rejection by EPFO's computerized validation system occurs when spelling, initials, father's name, or date of birth in your Aadhaar card do not match the exact character string in the EPFO UAN database. Even a single space, dot, or phonetic variation triggers immediate automated repudiation of Form 19, Form 10C, or Form 31 without human scrutiny.",
    legalBasis:
      "Under the EPFO Standard Operating Procedure (SOP) for Joint Declarations and Section 142 of the Code on Social Security, 2020, clerical inconsistencies in personal profiles must be corrected via online Joint Declaration backed by valid government identity documents (Aadhaar, PAN, Passport, or Birth Certificate). The Delhi High Court in multiple rulings has held that technical clerical errors cannot be made a pretext for denying a citizen's fundamental social security corpus.",
    steps: [
      {
        step: "Initiate Online Joint Declaration on Member Portal",
        description:
          "Log into the Unified Member Portal (unifiedportal-mem.epfindia.gov.in) > Manage > Joint Declaration. Select the active Member ID, choose the incorrect fields (Name/DOB/Father's Name), and enter the correct data matching Aadhaar.",
      },
      {
        step: "Upload Certified Identity Proofs & Track Employer Approval",
        description:
          "Attach color scans of Aadhaar, PAN card, or School Certificate. Intimate your current or previous employer to approve the electronic request using their Digital Signature Certificate (DSC) in the Employer Portal.",
      },
      {
        step: "Escalate via EPFiGMS if Employer or Field Office Stalls",
        description:
          "If the employer delays approval beyond 7 days or the Regional PF Office fails to update the records within the 15-day citizen charter SLA, file a formal escalation on epfigms.gov.in attaching your submitted Joint Declaration PDF.",
      },
    ],
    statutoryRule: "Para 26B EPF Scheme & EPFO Joint Declaration SOP (Circular No. WSU/2022/1/JD)",
  },
  {
    id: "exit-date-missing",
    tabLabel: "Date of Exit Missing",
    title: "Date of Exit (DOE) Not Marked or Incorrectly Recorded by Ex-Employer",
    cause:
      "To file final settlement Form 19 (PF withdrawal) or Form 10C (Pension withdrawal), the Member Portal requires a registered Date of Exit. Disgruntled, inactive, or negligent employers frequently fail to mark the date of relief on the employer dashboard, or wrongfully record reason for exit as 'dismissal' or 'absconding', completely blocking online claim submission.",
    legalBasis:
      "Under Para 36(2) of the EPF Scheme and Section 17(2) of the Code on Wages 2019, employers are legally obligated to clear all exit clearances and wage entitlements within 2 working days. Furthermore, EPFO empowers members to independently mark their own Date of Exit on the Unified Portal once 60 days have elapsed since the last contribution date, without requiring employer sign-off.",
    steps: [
      {
        step: "Utilize Member Self-Exit Feature After 60-Day Cooling Period",
        description:
          "Log into Unified Member Portal > Manage > Mark Exit. Select your employment ID. If 2 months have elapsed since your last salary month, select your actual date of exit and verify via Aadhaar OTP.",
      },
      {
        step: "Formally Challenge Erroneous Exit Reason (e.g. Absconding Tag)",
        description:
          "If your employer marked 'Ceased/Dismissed' or entered an erroneous date that curtails your pension eligibility, serve a formal demand email citing your resignation acceptance and relieving letter.",
      },
      {
        step: "Serve Advocate Legal Notice for Employer Default",
        description:
          "If the employer refuses to correct the exit date or submit clarification to the Regional PF Commissioner (RPFC), serve a 15-day statutory legal notice under Section 14B of the EPF Act and Section 316 of the Bharatiya Nyaya Sanhita (BNS) for criminal breach of trust.",
      },
    ],
    statutoryRule: "Para 36(2) EPF Scheme 1952, Section 17(2) Code on Wages & EPFO Self-Exit Facility",
  },
  {
    id: "bank-kyc-cheque-rejected",
    tabLabel: "Bank KYC / Cheque",
    title: "Bank KYC Rejected: Name Not Printed, Blurred Passbook or IFSC Error",
    cause:
      "EPFO claims are routinely rejected by field clerks citing 'Cancelled cheque without printed name', 'Branch IFSC mismatch due to PSU bank mergers', or 'Passbook image blurred / missing official bank seal'. Even when funds are available, the automated system rejects transfers if the account name does not match the UAN record letter-for-letter.",
    legalBasis:
      "Under EPFO Citizen Charter guidelines and Digital India banking directives, a digitally approved bank KYC in the Member Portal bearing the employer's digital signature constitutes conclusive proof of bank account ownership. Field offices cannot arbitrarily reject claims when a member provides an attested passbook or bank statement bearing an IFSC certificate.",
    steps: [
      {
        step: "Obtain Personalized Cheque Leaf or Attested Passbook",
        description:
          "Order a chequebook from your bank with your full name pre-printed. If unavailable, get your physical bank passbook updated with photo, account number, current IFSC, and an authorized branch manager round seal.",
      },
      {
        step: "Re-Seed Bank KYC in Unified Portal with Current IFSC",
        description:
          "Go to Manage > KYC > Bank. Enter your correct account number and current active IFSC (check for post-merger IFSC changes). Request HR to approve the KYC pending with employer using their DSC/e-Sign.",
      },
      {
        step: "Re-Submit Form 19 / 10C with High-Resolution Color Scan",
        description:
          "Upload a crystal-clear JPEG/PDF (under 500 KB) showing all 4 corners of the cheque leaf. Ensure the account number, pre-printed name, and IFSC match the portal KYC exactly.",
      },
    ],
    statutoryRule: "EPFO Banking Circular WSU/10(1)2013 & Section 63 BSA 2023 for Digital Records",
  },
  {
    id: "pf-not-deposited",
    tabLabel: "PF Not Deposited",
    title: "PF Deducted on Monthly Payslip but Never Deposited with EPFO",
    cause:
      "An employer deducts the 12% employee provident fund contribution from your monthly gross pay, issues salary slips showing the deduction, but embezzles or diverts the funds instead of depositing them into the EPFO central account by the 15th of the succeeding month.",
    legalBasis:
      "This is a non-bailable criminal offense under Section 405/406 of the Indian Penal Code (now Section 316 of the Bharatiya Nyaya Sanhita, 2023) and Section 14/14B of the EPF & MP Act, 1952. The Supreme Court of India in multiple decisions has held that defaulting on employee PF contributions is a grave socio-economic crime. The Regional PF Commissioner has statutory powers under Section 7A to attach company bank accounts and arrest directors.",
    steps: [
      {
        step: "Download Member Passbook and Match Monthly Contribution Gaps",
        description:
          "Access passbook.epfindia.gov.in. Compare every uncredited month against your bank salary credits and corresponding monthly payslips showing PF deductions.",
      },
      {
        step: "Lodge Non-Deposit Complaint on EPFiGMS & CPGRAMS",
        description:
          "Register a formal grievance under 'Non-deposit of PF by Employer'. Attach all relevant payslips. Demand immediate initiation of Section 7A / 14B penal proceedings against the establishment.",
      },
      {
        step: "Dispatch Advocate Statutory Notice & Demand Section 7A Attachment",
        description:
          "Serve an advocate demand notice to the Board of Directors and Regional PF Commissioner demanding remittance of withheld corpus with 12% annual compound interest under Section 7Q and damages under Section 14B.",
      },
    ],
    statutoryRule: "Section 7A, 7Q, 14B EPF & MP Act 1952 & Section 316/318 Bharatiya Nyaya Sanhita",
  },
  {
    id: "multi-uan-transfer-stuck",
    tabLabel: "Multi-UAN / Transfer",
    title: "Multiple UANs Created & Previous Service Not Transferred / Merged",
    cause:
      "When switching employers, human resource departments often generate a new UAN instead of linking your existing Universal Account Number. When filing for full withdrawal or pension, EPFO rejects the claim because previous service is unlinked, resulting in service break errors or non-fulfilment of the continuous 10-year pension threshold.",
    legalBasis:
      "Under EPFO 'One Member - One EPF Account' guidelines and Para 57 of the EPF Scheme, every employee is entitled to have all historic service periods and provident fund accumulations consolidated into a single active UAN without forfeiture of interest or pension service continuity.",
    steps: [
      {
        step: "Submit Online Transfer Request (Form 13) via Member Portal",
        description:
          "Navigate to Online Services > One Member - One EPF Account (Transfer Request). Enter your previous Member ID / UAN and select either your previous or current employer for digital attestation.",
      },
      {
        step: "Ensure Employer DSC Attestation and Field Office Processing",
        description:
          "Follow up with employer HR to sign the Form 13 in the Unified Employer Portal within 3 working days. Track the transfer until previous accumulations reflect in your current passbook.",
      },
      {
        step: "File Form 19 & 10C Only After Successful Passbook Merger",
        description:
          "Never submit final withdrawal while a transfer is pending. Wait until the previous balance shows zero and the consolidated balance reflects in your active Member ID.",
      },
    ],
    statutoryRule: "Para 57 EPF Scheme 1952 & EPFO One Member One Account Directives",
  },
];

export default function EpfProblemTabs() {
  const [activeTab, setActiveTab] = useState(EPF_PROBLEMS[0].id);
  const currentProblem =
    EPF_PROBLEMS.find((p) => p.id === activeTab) || EPF_PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-8 shadow-sm">
      {/* Navigation Pills */}
      <div
        role="tablist"
        aria-label="EPF Claim Rejection Dispute Scenarios"
        className="flex flex-wrap gap-2 pb-4 border-b border-slate-200"
      >
        {EPF_PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel Content */}
      <div
        role="tabpanel"
        id={`panel-${currentProblem.id}`}
        aria-labelledby={`tab-${currentProblem.id}`}
        className="mt-6 space-y-6"
      >
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full">
            Statutory Dispute Scenario
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <strong className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
              Why EPFO System Rejects This Claim:
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-red-50/50 rounded-xl border border-red-200/60">
            <strong className="text-xs sm:text-sm font-bold text-red-950 uppercase tracking-wider block mb-1.5">
              Statutory Basis &amp; Legal Protection:
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 uppercase tracking-wider">
            Mandatory 3-Step Escalation Protocol:
          </h4>
          <div className="space-y-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
              >
                <span className="shrink-0 w-6 h-6 rounded-lg bg-[#111827] text-white font-extrabold text-xs flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {s.step}
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-900 text-slate-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs">
            <span className="text-slate-400 block font-semibold text-[10px] uppercase tracking-wider">
              Enforceable Statutory Section:
            </span>
            <span className="font-bold text-slate-200">{currentProblem.statutoryRule}</span>
          </div>
          <Link
            href="/legal-notice-for-full-and-final-settlement-delay"
            className="text-xs font-bold text-red-400 hover:text-red-300 underline shrink-0"
          >
            Related: Full &amp; Final Settlement Delay Remedies →
          </Link>
        </div>
      </div>
    </div>
  );
}
