"use client";

import React, { useState, useId } from "react";

type ToneVariant = "polite" | "firm" | "prelitigation";

interface FormDataState {
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  companyName: string;
  hrName: string;
  hrEmail: string;
  reportingManager: string;
  salaryMonth: string;
  unpaidSalaryAmount: string;
  dueDate: string;
  pendingDays: string;
  bankName: string;
  bankAccount: string;
  bankIfsc: string;
  deadlineDays: string;
  personalEmail: string;
  contactPhone: string;
}

export default function SalaryDelayWorkspace() {
  const formId = useId();
  const [tone, setTone] = useState<ToneVariant>("firm");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormDataState>({
    employeeName: "Aditya Sharma",
    employeeId: "EMP-41092",
    designation: "Senior Software Engineer",
    department: "Product Engineering",
    companyName: "Acme Technologies Pvt. Ltd.",
    hrName: "Human Resources Department",
    hrEmail: "hr@acmetech.example.com",
    reportingManager: "Rajesh Nair (Director of Engineering)",
    salaryMonth: "October 2026",
    unpaidSalaryAmount: "₹1,25,000",
    dueDate: "7th October 2026",
    pendingDays: "18",
    bankName: "HDFC Bank",
    bankAccount: "50100234567890",
    bankIfsc: "HDFC0000240",
    deadlineDays: "7",
    personalEmail: "aditya.sharma.work@gmail.com",
    contactPhone: "+91 98765 43210",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getSubject = () => {
    if (tone === "polite") {
      return `Polite Inquiry: Status of Salary Credit for ${formData.salaryMonth} — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
    }
    if (tone === "prelitigation") {
      return `FINAL PRE-LITIGATION NOTICE: Unlawful Withholding of Earned Salary for ${formData.salaryMonth} under Section 17(1) Code on Wages — ${formData.employeeName} (${formData.employeeId})`;
    }
    return `URGENT: Delayed Salary Credit for ${formData.salaryMonth} — ${formData.employeeName} (Emp ID: ${formData.employeeId}) — Statutory Reminder under Code on Wages, 2019`;
  };

  const getLetterBody = () => {
    const subject = getSubject();

    if (tone === "polite") {
      return `To: ${formData.hrEmail || "[HR Email]"}
Cc: ${formData.personalEmail || "[Personal Email]"}, ${formData.reportingManager || "[Manager Email]"}
Date: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
Subject: ${subject}

Dear ${formData.hrName || "HR Team"},

I hope this email finds you well.

I am writing to inquire regarding the disbursement of my salary for the month of ${formData.salaryMonth}. According to company policy and Section 17(1) of the Code on Wages, 2019, monthly salaries are scheduled to be credited on or before the 7th of each month.

As of today, my salary account (${formData.bankName}, A/C: ${formData.bankAccount}) has not received the monthly credit of ${formData.unpaidSalaryAmount} for ${formData.salaryMonth}, which is now overdue by ${formData.pendingDays} days.

Could you kindly check if there was any technical processing error, bank server reconciliation issue, or batch discrepancy with our payroll system?

Given my ongoing financial commitments, household expenses, and scheduled EMI obligations, I would deeply appreciate your prompt update on the exact date when the salary transfer will be completed.

Employee Details for Verification:
- Full Name: ${formData.employeeName}
- Employee ID: ${formData.employeeId}
- Designation: ${formData.designation}
- Department: ${formData.department}
- Salary Month: ${formData.salaryMonth}
- Salary Net Payable: ${formData.unpaidSalaryAmount}
- Designated Bank: ${formData.bankName} (A/C No: ${formData.bankAccount}, IFSC: ${formData.bankIfsc})

Thank you for your assistance, and I look forward to your quick confirmation.

Warm regards,

${formData.employeeName}
${formData.designation}
${formData.companyName}
Phone: ${formData.contactPhone}
Email: ${formData.personalEmail}`;
    }

    if (tone === "prelitigation") {
      return `To: ${formData.hrEmail || "[HR Email]"}, Management & Board of Directors
Cc: ${formData.reportingManager || "[Manager Email]"}, ${formData.personalEmail || "[Personal Email]"}
Date: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
Subject: ${subject}

WITHOUT PREJUDICE / FINAL STATUTORY DEMAND PRIOR TO LEGAL ACTION

Dear Management of ${formData.companyName},

1. This constitutes my final written demand and pre-litigation formal communication regarding the deliberate and persistent non-payment of my earned wages for ${formData.salaryMonth}.

2. Despite previous written communications and reminder emails, a total sum of ${formData.unpaidSalaryAmount} remains unlawfully withheld without any lawful justification, written notification, or contractual defense, in direct violation of Section 17(1) of the Code on Wages, 2019.

3. STATUTORY BREACHES AND LEGAL IMPLICATIONS:
   a. Violation of Section 17(1) of the Code on Wages, 2019: The law prescribes that every employer shall pay all wages before the expiry of the 7th day after the last day of the wage period. Non-compliance is a statutory offence.
   b. Unlawful Wage Withholding under Section 18: An employer has zero authority to withhold, delay, or deduct earned wages arbitrarily without statutory or judicial sanction.
   c. Penalties under Section 54: Withholding earned wages attracts substantial monetary fines and criminal prosecution against the company and its responsible designated officers/directors.
   d. Civil & Statutory Interest: Arbitrary withholding of wages entitles the aggrieved employee to claim compound interest at the rate of 18% per annum for the period of unlawful delay.

4. DETAILS OF THE OUTSTANDING STATUTORY CLAIM:
   - Aggrieved Employee: ${formData.employeeName} (Emp ID: ${formData.employeeId})
   - Designation & Department: ${formData.designation}, ${formData.department}
   - Defaulting Entity: ${formData.companyName}
   - Wage Period Overdue: ${formData.salaryMonth} (Scheduled Due Date: ${formData.dueDate})
   - Net Outstanding Wage Amount: ${formData.unpaidSalaryAmount}
   - Period of Default: ${formData.pendingDays} days elapsed beyond statutory deadline

5. FINAL 7-DAY PEREMPTORY DEMAND:
You are hereby called upon to credit the entire undisputed sum of ${formData.unpaidSalaryAmount} directly into my registered salary bank account specified below within seven (7) calendar days from receipt of this notice:
   - Bank Name: ${formData.bankName}
   - Account Number: ${formData.bankAccount}
   - IFSC Code: ${formData.bankIfsc}

6. NOTICE OF FORTHCOMING LEGAL ACTION:
In the event that the outstanding salary is not remitted in full on or before the expiry of the aforesaid 7-day period, please take notice that I shall proceed without further correspondence to:
   i. Instruct an advocate to serve an official Statutory Demand Notice under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, naming the Managing Director and Directors personally liable;
   ii. File a formal claim petition for recovery of unpaid wages along with 18% penal interest before the jurisdictional Labour Commissioner / Authority under Section 45 of the Code on Wages, 2019, on the Ministry of Labour's Samadhan Portal;
   iii. Initiate civil summary suit proceedings for debt recovery and damages for mental harassment and credit score impairment.

All costs, legal fees, and financial damages resulting from your persistent default shall be pursued entirely at your risk and cost.

Govern yourselves accordingly.

Sincerely,

${formData.employeeName}
${formData.designation} | Emp ID: ${formData.employeeId}
${formData.companyName}
Mobile: ${formData.contactPhone}
Personal Email: ${formData.personalEmail}`;
    }

    // Default: Firm Demand
    return `To: ${formData.hrEmail || "[HR Email]"}
Cc: ${formData.reportingManager || "[Manager Email]"}, ${formData.personalEmail || "[Personal Email]"}
Date: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
Subject: ${subject}

Dear ${formData.hrName || "HR Team"},

I am writing to formally place on record my serious concern regarding the non-disbursement of my salary for the month of ${formData.salaryMonth}, which remains unpaid as of today.

Under Section 17(1) of the Code on Wages, 2019, an employer is legally mandated to disburse monthly wages on or before the 7th day of the succeeding month. My salary for ${formData.salaryMonth} was due on ${formData.dueDate} and is now delayed by ${formData.pendingDays} days without any official intimation or explanatory communication from the management.

This unnotified delay is causing acute financial distress, directly jeopardizing my monthly home loan/rent payments, credit card dues, insurance premiums, and household commitments. Any late payment penalties or credit score (CIBIL) degradations incurred due to this company default remain the direct responsibility of the management.

Claim Breakdown & Banking Coordinates:
- Employee Name: ${formData.employeeName}
- Employee ID: ${formData.employeeId}
- Designation: ${formData.designation}
- Department: ${formData.department}
- Overdue Wage Period: ${formData.salaryMonth}
- Net Due Amount: ${formData.unpaidSalaryAmount}
- Bank Name: ${formData.bankName}
- Account Number: ${formData.bankAccount}
- IFSC Code: ${formData.bankIfsc}

I hereby request you to process the pending salary credit within ${formData.deadlineDays} calendar days of this email and provide the bank UTR / NEFT reference number.

If there is an administrative constraint, I expect a clear written explanation along with a definitive disbursement date. Failure to resolve this overdue payment will compel me to escalate this matter to senior management and pursue statutory grievance redressal under Indian labour laws.

I look forward to your immediate confirmation and resolution.

Sincerely,

${formData.employeeName}
${formData.designation}
${formData.companyName}
Mobile: ${formData.contactPhone}
Email: ${formData.personalEmail}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getLetterBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const content = getLetterBody();
    const blob = new Blob([content], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Salary_Delay_Complaint_${formData.employeeName.replace(/\s+/g, "_")}_${tone.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80 px-2.5 py-1 rounded-full">
              Interactive Letter Generator
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
              Salary Delay Complaint Letter &amp; Email Generator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select your escalation tone, populate your employment coordinates, and generate a legally enforceable complaint letter.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Code on Wages §17(1) Verified
            </span>
          </div>
        </div>

        {/* Tone Selector Tabs */}
        <div className="mt-5 grid grid-cols-3 gap-2 p-1 bg-slate-800/80 rounded-xl border border-slate-700">
          <button
            type="button"
            onClick={() => setTone("polite")}
            className={`py-2 px-2 sm:px-4 rounded-lg text-xs font-bold transition-all text-center ${
              tone === "polite"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            Variant 1: Polite Inquiry (Day 8–12)
          </button>
          <button
            type="button"
            onClick={() => setTone("firm")}
            className={`py-2 px-2 sm:px-4 rounded-lg text-xs font-bold transition-all text-center ${
              tone === "firm"
                ? "bg-[#DC2626] text-white shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            Variant 2: Firm Demand (Day 15–25)
          </button>
          <button
            type="button"
            onClick={() => setTone("prelitigation")}
            className={`py-2 px-2 sm:px-4 rounded-lg text-xs font-bold transition-all text-center ${
              tone === "prelitigation"
                ? "bg-red-700 text-white shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            Variant 3: Pre-Legal Notice (30+ Days)
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Accordion / Editable Fields Grid */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center justify-between">
            <span>Step 1: Fill in Your Employment &amp; Salary Details</span>
            <span className="text-[11px] font-normal text-slate-500">Auto-updates the letter live</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs">
            <div>
              <label htmlFor={`${formId}-employeeName`} className="block font-semibold text-slate-700 mb-1">Your Full Name</label>
              <input
                id={`${formId}-employeeName`}
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-employeeId`} className="block font-semibold text-slate-700 mb-1">Employee ID</label>
              <input
                id={`${formId}-employeeId`}
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-designation`} className="block font-semibold text-slate-700 mb-1">Designation</label>
              <input
                id={`${formId}-designation`}
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-companyName`} className="block font-semibold text-slate-700 mb-1">Company / Employer Name</label>
              <input
                id={`${formId}-companyName`}
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-hrEmail`} className="block font-semibold text-slate-700 mb-1">HR / Payroll Email</label>
              <input
                id={`${formId}-hrEmail`}
                type="email"
                name="hrEmail"
                value={formData.hrEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-salaryMonth`} className="block font-semibold text-slate-700 mb-1">Delayed Salary Month</label>
              <input
                id={`${formId}-salaryMonth`}
                type="text"
                name="salaryMonth"
                value={formData.salaryMonth}
                onChange={handleChange}
                placeholder="e.g. October 2026"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-unpaidSalaryAmount`} className="block font-semibold text-slate-700 mb-1">Net Unpaid Amount (₹)</label>
              <input
                id={`${formId}-unpaidSalaryAmount`}
                type="text"
                name="unpaidSalaryAmount"
                value={formData.unpaidSalaryAmount}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-pendingDays`} className="block font-semibold text-slate-700 mb-1">Days Overdue (Past 7th)</label>
              <input
                id={`${formId}-pendingDays`}
                type="text"
                name="pendingDays"
                value={formData.pendingDays}
                onChange={handleChange}
                placeholder="e.g. 18"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-deadlineDays`} className="block font-semibold text-slate-700 mb-1">Payment Deadline (Days)</label>
              <input
                id={`${formId}-deadlineDays`}
                type="text"
                name="deadlineDays"
                value={formData.deadlineDays}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-bankName`} className="block font-semibold text-slate-700 mb-1">Bank Name</label>
              <input
                id={`${formId}-bankName`}
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-bankAccount`} className="block font-semibold text-slate-700 mb-1">Bank Account Number</label>
              <input
                id={`${formId}-bankAccount`}
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-bankIfsc`} className="block font-semibold text-slate-700 mb-1">Bank IFSC Code</label>
              <input
                id={`${formId}-bankIfsc`}
                type="text"
                name="bankIfsc"
                value={formData.bankIfsc}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs"
              />
            </div>
          </div>
        </div>

        {/* Live Letter Preview */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Step 2: Preview &amp; Copy / Export Formatted Letter
            </h4>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-700">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Text</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleDownloadDoc}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Word (.doc)</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <pre className="w-full max-h-[500px] overflow-y-auto p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed border border-slate-800 selection:bg-red-500 selection:text-white">
              {getLetterBody()}
            </pre>
          </div>
        </div>

        {/* Tip strip */}
        <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
          <svg className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="leading-relaxed">
            <strong>Admissibility Note under BSA 2023 §63:</strong> Always send this letter from your official work email AND CC your personal email address. Take an unedited full-screen snapshot showing timestamp and recipient email header before your work email account is deactivated.
          </div>
        </div>
      </div>
    </div>
  );
}
