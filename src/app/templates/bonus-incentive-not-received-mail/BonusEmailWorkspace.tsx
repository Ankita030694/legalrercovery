"use client";

import React, { useState, useId } from "react";

type ToneVariant = "firm" | "gentle" | "prelitigation";

interface FormDataState {
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  companyName: string;
  hrName: string;
  hrEmail: string;
  reportingManager: string;
  lastWorkingDay: string;
  resignationDate: string;
  claimType: string;
  amountClaimed: string;
  performancePeriod: string;
  targetAchievement: string;
  bankName: string;
  bankAccount: string;
  bankIfsc: string;
  deadlineDays: string;
  personalEmail: string;
  contactPhone: string;
}

export default function BonusEmailWorkspace() {
  const formId = useId();
  const [tone, setTone] = useState<ToneVariant>("firm");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormDataState>({
    employeeName: "Rohan Kapoor",
    employeeId: "EMP-38419",
    designation: "Key Account Manager",
    department: "Enterprise Sales",
    companyName: "Zenith Business Solutions Pvt. Ltd.",
    hrName: "Human Resources Department",
    hrEmail: "hr@zenithbiz.example.com",
    reportingManager: "Vikram Malhotra (VP - Commercial)",
    lastWorkingDay: "30 September 2026",
    resignationDate: "01 August 2026",
    claimType: "Quarterly Sales Incentive & Annual Statutory Bonus",
    amountClaimed: "₹1,85,000",
    performancePeriod: "FY 2025-26 (Q3 & Q4)",
    targetAchievement: "118% quota closed (₹42.5 Lakhs revenue verified in CRM)",
    bankName: "HDFC Bank",
    bankAccount: "50100492837410",
    bankIfsc: "HDFC0000128",
    deadlineDays: "7",
    personalEmail: "rohan.kapoor.work@gmail.com",
    contactPhone: "+91 98112 34567",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getSubject = () => {
    if (tone === "gentle") {
      return `Follow-up: Pending ${formData.claimType} Disbursement — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
    }
    if (tone === "prelitigation") {
      return `FINAL PRE-LITIGATION DEMAND: Non-Payment of Earned ${formData.claimType} — ${formData.employeeName} (${formData.employeeId}) — Violation of Wage Statutes`;
    }
    return `FORMAL DEMAND: Non-Disbursement of Earned ${formData.claimType} — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
  };

  const getEmailText = () => {
    const subject = getSubject();
    const toneIntro =
      tone === "gentle"
        ? `I hope this email finds you well. I am writing to politely follow up regarding the disbursement of my earned ${formData.claimType} for ${formData.performancePeriod}, which remains uncredited to my registered bank account.`
        : tone === "prelitigation"
        ? `This constitutes my final written statutory demand prior to initiating formal legal proceedings against ${formData.companyName} for unlawful withholding and arbitrary forfeiture of earned wages, statutory bonus, and contractual incentives.`
        : `I am writing to formally place on record that my earned ${formData.claimType} for ${formData.performancePeriod} has not been credited, despite full achievement of assigned performance milestones and the lapse of scheduled payroll disbursement cycles.`;

    const toneLegalHook =
      tone === "gentle"
        ? `As per company policy and my compensation structure, incentive cycles are processed upon milestone completion. During the period under review (${formData.performancePeriod}), my verified achievement was: ${formData.targetAchievement}. I request you to kindly confirm when this payout will be released.`
        : tone === "prelitigation"
        ? `Please take note that under the Code on Wages, 2019 (Section 17 & Section 26) and the Payment of Bonus Act, 1965, bonus and performance-linked compensation form an integral component of earned remuneration once eligibility criteria are satisfied. The Supreme Court of India and various High Courts have consistently held that earned variable pay, incentives, or commissions cannot be forfeited merely because an employee has resigned or exited prior to the formal payout date. Any clause in an HR manual seeking to deny earned dues is void under Section 23 and Section 27 of the Indian Contract Act, 1872.`
        : `As you are aware, under Indian employment jurisprudence and Section 17(2) of the Code on Wages, 2019, all accrued wages, statutory bonuses, and contractual dues must be fully cleared without arbitrary deduction. Having completed all contractual targets (${formData.targetAchievement}), withholding this earned payout constitutes an unlawful deduction under Section 18 of the Code.`;

    const toneDeadline =
      tone === "gentle"
        ? `I kindly request you to look into this matter and confirm the credit date within ${formData.deadlineDays} business days, along with the calculation breakdown sheet.`
        : tone === "prelitigation"
        ? `You are hereby called upon to disburse the entire outstanding amount of ${formData.amountClaimed} to the bank account specified below within seven (7) calendar days of receipt of this notice. Should ${formData.companyName} fail to remit this amount, I will instruct my legal counsel to serve a formal Advocate Statutory Legal Notice under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and initiate recovery proceedings before the jurisdictional Labour Commissioner under Section 33C(2) of the Industrial Disputes Act, claiming 18% penal interest and litigation costs without further notice.`
        : `In view of the above facts, I request the HR and Finance management of ${formData.companyName} to release the pending sum of ${formData.amountClaimed} to my bank account within seven (7) calendar days from receipt of this communication, along with the detailed incentive computation sheet.`;

    return `To: ${formData.hrEmail || "[HR Email]"}
Cc: ${formData.personalEmail || "[Your Personal Email]"}, ${formData.reportingManager || "[Reporting Manager / HOD Email]"}
Subject: ${subject}

Dear ${formData.hrName || "HR Team"},

${toneIntro}

1. EMPLOYMENT & CLAIM PARTICULARS:
• Employee Name: ${formData.employeeName || "[Your Name]"}
• Employee ID: ${formData.employeeId || "[Your Employee ID]"}
• Designation: ${formData.designation || "[Your Designation]"}
• Department: ${formData.department || "[Your Department]"}
• Claim Category: ${formData.claimType || "[Statutory Bonus / Sales Incentive / Performance Commission]"}
• Target / Appraisal Period: ${formData.performancePeriod || "[Relevant Quarter / Financial Year]"}
• Performance Milestone Achieved: ${formData.targetAchievement || "[Target vs Achievement details]"}
• Net Claimed Amount: ${formData.amountClaimed || "[Amount in ₹]"}
• Last Working Day (if exited): ${formData.lastWorkingDay || "[Last Working Day or 'Currently Employed']"}

2. FACTUAL & STATUTORY BASIS:
${toneLegalHook}

I have previously submitted all relevant proof of performance, CRM closure reports, and manager approvals. Withholding earned compensation causes substantial financial hardship and represents an actionable breach of employment terms.

3. DISBURSEMENT DETAILS:
Please credit the due amount of ${formData.amountClaimed || "[Amount]"} via NEFT/IMPS to my designated bank account:
• Account Holder Name: ${formData.employeeName || "[Your Name]"}
• Bank Name: ${formData.bankName || "[Bank Name]"}
• Account Number: ${formData.bankAccount || "[Bank Account Number]"}
• IFSC Code: ${formData.bankIfsc || "[Bank IFSC Code]"}

4. TIME-BOUND DEMAND:
${toneDeadline}

Thank you for your prompt cooperation in bringing this matter to an amicable and immediate closure.

Yours sincerely,

${formData.employeeName || "[Your Name]"}
${formData.designation || "[Your Designation]"}
Contact: ${formData.contactPhone || "[Phone Number]"}
Email: ${formData.personalEmail || "[Personal Email]"}`;
  };

  const emailContent = getEmailText();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadDoc = () => {
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Bonus Incentive Claim Mail</title></head><body>";
    const footer = "</body></html>";
    const formattedHtml = emailContent.replace(/\n/g, "<br/>");
    const sourceHtml = header + formattedHtml + footer;

    const source =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHtml);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `Bonus_Incentive_Mail_${formData.employeeName.replace(/\s+/g, "_")}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Bonus / Incentive Claim Mail - ${formData.employeeName}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 30px; font-size: 13px; line-height: 1.6; color: #1e293b; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${emailContent}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-2">
              Free Interactive Template Island • Appendix H Compliant
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Bonus &amp; Incentive Unpaid Mail Generator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select your tone, fill in your target and amount particulars, and instantly copy or export a legally grounded email to HR.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-300">Format Tone:</span>
            <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setTone("gentle")}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  tone === "gentle"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Gentle
              </button>
              <button
                type="button"
                onClick={() => setTone("firm")}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  tone === "firm"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Firm (Statutory)
              </button>
              <button
                type="button"
                onClick={() => setTone("prelitigation")}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  tone === "prelitigation"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Pre-Litigation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace: 2 Columns (Form + Live Preview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Form: Editable Fields (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/60 max-h-[720px] overflow-y-auto space-y-4 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Step 1: Your Details &amp; Claim Particulars
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Updates preview live</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-employeeName`} className="block font-semibold text-slate-700 mb-1">
                Your Full Name
              </label>
              <input
                id={`${formId}-employeeName`}
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-employeeId`} className="block font-semibold text-slate-700 mb-1">
                Employee ID / Staff Code
              </label>
              <input
                id={`${formId}-employeeId`}
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-designation`} className="block font-semibold text-slate-700 mb-1">
                Designation
              </label>
              <input
                id={`${formId}-designation`}
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-department`} className="block font-semibold text-slate-700 mb-1">
                Department
              </label>
              <input
                id={`${formId}-department`}
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-companyName`} className="block font-semibold text-slate-700 mb-1">
              Company / Employer Name
            </label>
            <input
              id={`${formId}-companyName`}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-hrEmail`} className="block font-semibold text-slate-700 mb-1">
                HR Email Address
              </label>
              <input
                id={`${formId}-hrEmail`}
                type="email"
                name="hrEmail"
                value={formData.hrEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-reportingManager`} className="block font-semibold text-slate-700 mb-1">
                Reporting Manager / HOD
              </label>
              <input
                id={`${formId}-reportingManager`}
                type="text"
                name="reportingManager"
                value={formData.reportingManager}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-2">
              Claim Components &amp; Amounts
            </span>
          </div>

          <div>
            <label htmlFor={`${formId}-claimType`} className="block font-semibold text-slate-700 mb-1">
              Dues Category
            </label>
            <select
              id={`${formId}-claimType`}
              name="claimType"
              value={formData.claimType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium"
            >
              <option value="Annual Statutory Bonus (Payment of Bonus Act)">
                Annual Statutory Bonus (Payment of Bonus Act / Code on Wages)
              </option>
              <option value="Quarterly Sales Incentive & Commission">
                Quarterly Sales Incentive &amp; Commission
              </option>
              <option value="Annual Performance Linked Variable Pay (PLI)">
                Annual Performance Linked Variable Pay (PLI)
              </option>
              <option value="Retention Bonus / Milestone Joining Bonus">
                Retention Bonus / Milestone Joining Bonus
              </option>
              <option value="Unpaid Commission Post-Resignation">
                Unpaid Commission Post-Resignation (Exit Dues)
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-amountClaimed`} className="block font-semibold text-slate-700 mb-1">
                Amount Claimed (₹)
              </label>
              <input
                id={`${formId}-amountClaimed`}
                type="text"
                name="amountClaimed"
                value={formData.amountClaimed}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-performancePeriod`} className="block font-semibold text-slate-700 mb-1">
                Target / Review Period
              </label>
              <input
                id={`${formId}-performancePeriod`}
                type="text"
                name="performancePeriod"
                value={formData.performancePeriod}
                onChange={handleChange}
                placeholder="e.g. FY 2025-26 (Q3 & Q4)"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-targetAchievement`} className="block font-semibold text-slate-700 mb-1">
              Milestone / Target Achievement Proof
            </label>
            <input
              id={`${formId}-targetAchievement`}
              type="text"
              name="targetAchievement"
              value={formData.targetAchievement}
              onChange={handleChange}
              placeholder="e.g. 118% quota closed (₹42.5L revenue verified in CRM)"
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-lastWorkingDay`} className="block font-semibold text-slate-700 mb-1">
                Last Working Day (if exited)
              </label>
              <input
                id={`${formId}-lastWorkingDay`}
                type="text"
                name="lastWorkingDay"
                value={formData.lastWorkingDay}
                onChange={handleChange}
                placeholder="or 'Currently Employed'"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-deadlineDays`} className="block font-semibold text-slate-700 mb-1">
                Demand Window (Days)
              </label>
              <select
                id={`${formId}-deadlineDays`}
                name="deadlineDays"
                value={formData.deadlineDays}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="5">5 Business Days</option>
                <option value="7">7 Calendar Days (Recommended)</option>
                <option value="15">15 Calendar Days</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-2">
              Bank Details for Direct Credit
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label htmlFor={`${formId}-bankName`} className="block font-semibold text-slate-700 mb-1">
                Bank Name
              </label>
              <input
                id={`${formId}-bankName`}
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-bankAccount`} className="block font-semibold text-slate-700 mb-1">
                Account Number
              </label>
              <input
                id={`${formId}-bankAccount`}
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-bankIfsc`} className="block font-semibold text-slate-700 mb-1">
                IFSC Code
              </label>
              <input
                id={`${formId}-bankIfsc`}
                type="text"
                name="bankIfsc"
                value={formData.bankIfsc}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {/* Right Preview: Formatted Mail + Action Buttons (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Step 2: Live Generated Email Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copied ? "Copied to Clipboard!" : "Copy Text"}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors border border-slate-300 cursor-pointer"
                  title="Download Microsoft Word .doc"
                >
                  <svg className="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download .doc
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors border border-slate-300 cursor-pointer"
                  title="Print or Save PDF"
                >
                  <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print / PDF
                </button>
              </div>
            </div>

            {/* Read-only / auto-updating code box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[560px] overflow-y-auto select-all">
              {emailContent}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Standard 7-Day Legal Notice Trigger Included
            </span>
            <span className="italic text-[11px]">
              Ready to send directly from your personal email client
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
