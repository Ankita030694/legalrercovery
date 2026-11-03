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
  unpaidSalary: string;
  gratuityAmount: string;
  leaveEncashment: string;
  unpaidExpenses: string;
  bonusVariable: string;
  bankName: string;
  bankAccount: string;
  bankIfsc: string;
  deadlineDays: string;
  personalEmail: string;
  contactPhone: string;
}

export default function FnfEmailWorkspace() {
  const formId = useId();
  const [tone, setTone] = useState<ToneVariant>("firm");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormDataState>({
    employeeName: "Aditya Sharma",
    employeeId: "EMP-41092",
    designation: "Senior Software Engineer",
    department: "Engineering",
    companyName: "Acme Technologies Pvt. Ltd.",
    hrName: "Human Resources Department",
    hrEmail: "hr@acmetech.example.com",
    reportingManager: "Rajesh Nair (Director of Engineering)",
    lastWorkingDay: "15 October 2026",
    resignationDate: "15 September 2026",
    unpaidSalary: "₹1,25,000",
    gratuityAmount: "₹92,500",
    leaveEncashment: "₹38,200",
    unpaidExpenses: "₹14,800",
    bonusVariable: "₹45,000",
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

  // Tone-specific Subject Line and Body Adjustments
  const getSubject = () => {
    if (tone === "gentle") {
      return `Follow-up: Full & Final Settlement Status — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
    }
    if (tone === "prelitigation") {
      return `FINAL PRE-NOTICE DEMAND: Overdue Full & Final Settlement under Section 17(2) Code on Wages — ${formData.employeeName} (${formData.employeeId})`;
    }
    return `URGENT: Settlement of Full & Final (FnF) Dues — ${formData.employeeName} (Emp ID: ${formData.employeeId}) — Statutory Demand under Section 17(2) Code on Wages`;
  };

  const getEmailText = () => {
    const subject = getSubject();
    const toneIntro =
      tone === "gentle"
        ? `I hope this email finds you well. I am writing to politely follow up on the status of my Full and Final (FnF) settlement, relieving documents, and experience certificate following the successful completion of my notice period.`
        : tone === "prelitigation"
        ? `This constitutes my final written demand before initiating statutory legal action against ${formData.companyName} for unlawful withholding of earned wages, terminal benefits, and exit documentation in direct violation of Indian labour statutes.`
        : `I am writing to formally place on record that my Full and Final (FnF) settlement remains outstanding despite the lapse of statutory and contractual timelines following my relieving from ${formData.companyName}.`;

    const toneLegalHook =
      tone === "gentle"
        ? `As per company policy and standard employment regulations, terminal dues are typically processed within 30 to 45 days. Since my last working day was on ${formData.lastWorkingDay}, I request you to kindly confirm the disbursement schedule and share the draft FnF statement for my verification.`
        : tone === "prelitigation"
        ? `Please take formal notice that under Section 17(2) of the Code on Wages, 2019, all wages, terminal benefits, and statutory dues are mandated to be paid within two (2) working days of an employee's resignation or exit. Furthermore, withholding gratuity beyond thirty (30) days attracts mandatory compound interest at 10% per annum under Section 7(3A) of the Payment of Gratuity Act, 1972. Any arbitrary deductions towards notice period buyout without contractual justification constitute an unfair labour practice.`
        : `As you are aware, under Section 17(2) of the Code on Wages, 2019, an employer is statutory bound to settle and disburse all outstanding wages and terminal dues within two (2) working days of an employee ceasing employment. It has now been substantial time since my formal release, yet neither the itemized settlement statement nor the inward credit has been received.`;

    const toneDeadline =
      tone === "gentle"
        ? `I kindly request you to process the pending settlement within ${formData.deadlineDays} business days and share the bank UTR reference number along with my Relieving Letter and Form 16 Part B.`
        : tone === "prelitigation"
        ? `You are hereby called upon to credit the entire undisputed sum of my terminal dues to the bank account specified below within seven (7) calendar days of receipt of this notice, failing which I shall instruct my legal counsel to serve a formal Advocate Statutory Demand Notice under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and file formal wage recovery proceedings before the Labour Commissioner on the Ministry of Labour's Samadhan portal without further reference.`
        : `In view of the above, I hereby request the management of ${formData.companyName} to expedite and disburse my complete, unwithheld settlement within seven (7) calendar days from receipt of this communication, along with my signed Relieving Letter and Experience Certificate.`;

    return `To: ${formData.hrEmail || "[HR Email]"}
Cc: ${formData.personalEmail || "[Your Personal Email]"}, ${formData.reportingManager || "[Reporting Manager Email]"}
Subject: ${subject}

Dear ${formData.hrName || "HR Team"},

${toneIntro}

For your immediate reference, my employment details and official exit records are outlined below:
• Full Employee Name: ${formData.employeeName}
• Employee Code / Staff ID: ${formData.employeeId}
• Designation & Department: ${formData.designation} (${formData.department})
• Date of Resignation Submission: ${formData.resignationDate}
• Last Working Day (LWD): ${formData.lastWorkingDay}
• Asset & Knowledge Handover Status: 100% Completed, Cleared & Confirmed by Department Head

${toneLegalHook}

ITEMIZED STATEMENT OF PENDING SETTLEMENT DUES:
1. Earned Salary for Unpaid Period: ${formData.unpaidSalary || "Pending"}
2. Statutory Gratuity Entitlement: ${formData.gratuityAmount || "Applicable as per service records"}
3. Encashment of Accumulated Privileged / Earned Leaves: ${formData.leaveEncashment || "As per leave ledger"}
4. Approved Business Reimbursements / Travel Claims: ${formData.unpaidExpenses || "Pending claim approval"}
5. Due Bonus / Variable Pay / Performance Incentives: ${formData.bonusVariable || "As per performance cycle"}

DESIGNATED SETTLEMENT BANK ACCOUNT:
• Account Holder Name: ${formData.employeeName}
• Bank Name: ${formData.bankName}
• Account Number: ${formData.bankAccount}
• IFSC Code: ${formData.bankIfsc}

${toneDeadline}

In the event of continued default or arbitrary withholding, I explicitly reserve all legal rights available under law, including claiming penal interest at 18% per annum, reporting non-compliance to the jurisdictional Labour Authorities, and initiating summary recovery proceedings before the competent court of law at your sole risk and costs.

Looking forward to your prompt response, the itemized FnF worksheet, and the bank transaction UTR.

Yours sincerely,

${formData.employeeName}
Ex-${formData.designation}, ${formData.companyName}
Phone: ${formData.contactPhone}
Email: ${formData.personalEmail}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getEmailText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadDoc = () => {
    const emailContent = getEmailText().replace(/\n/g, "<br/>");
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${getSubject()}</title>
<style>
body { font-family: Arial, sans-serif; line-height: 1.6; color: #111827; padding: 30px; }
h2 { color: #DC2626; border-bottom: 2px solid #E5E7EB; padding-bottom: 8px; }
.meta { background: #F3F4F6; padding: 12px; border-radius: 6px; margin-bottom: 20px; font-size: 13px; }
.content { font-size: 14px; white-space: pre-wrap; }
</style>
</head>
<body>
<h2>Formal FnF Settlement Demand Letter</h2>
<div class="meta">
<strong>Subject:</strong> ${getSubject()}<br/>
<strong>Date:</strong> ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
</div>
<div class="content">${emailContent}</div>
</body>
</html>`;

    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `FnF_Demand_Email_${formData.employeeName.replace(/\s+/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Workspace Header with Tone Selector */}
      <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-1 rounded-full border border-red-800">
              Interactive Letter Workspace (Archetype P1)
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mt-2">
              Fill Your Exit Details to Live-Generate Your FnF Demand Email
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Live updates the formal template below. Edit fields, toggle tones, copy with one click, or export to Word (.doc) / Print.
            </p>
          </div>

          {/* Tone Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700 shrink-0">
            <button
              type="button"
              onClick={() => setTone("firm")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tone === "firm"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Firm Statutory (Recommended)
            </button>
            <button
              type="button"
              onClick={() => setTone("gentle")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tone === "gentle"
                  ? "bg-slate-700 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Gentle Follow-Up
            </button>
            <button
              type="button"
              onClick={() => setTone("prelitigation")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tone === "prelitigation"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Pre-Litigation Final Demand
            </button>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Left Form Inputs, Right Live Article Letter Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Fields (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/70 space-y-4 max-h-[850px] overflow-y-auto scrollbar-thin">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            1. Employee &amp; Employer Information
          </h4>

          <div className="space-y-3 text-xs">
            <div>
              <label htmlFor={`${formId}-employeeName`} className="block font-bold text-slate-700 mb-1">
                Your Full Legal Name:
              </label>
              <input
                id={`${formId}-employeeName`}
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                placeholder="e.g. Aditya Sharma"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-employeeId`} className="block font-bold text-slate-700 mb-1">
                  Employee ID / Staff Code:
                </label>
                <input
                  id={`${formId}-employeeId`}
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="e.g. EMP-41092"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-designation`} className="block font-bold text-slate-700 mb-1">
                  Designation / Role:
                </label>
                <input
                  id={`${formId}-designation`}
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="e.g. Senior Software Engineer"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-companyName`} className="block font-bold text-slate-700 mb-1">
                  Company / Employer Name:
                </label>
                <input
                  id={`${formId}-companyName`}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Tech Pvt Ltd"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-hrEmail`} className="block font-bold text-slate-700 mb-1">
                  HR Email Address:
                </label>
                <input
                  id={`${formId}-hrEmail`}
                  type="email"
                  name="hrEmail"
                  value={formData.hrEmail}
                  onChange={handleChange}
                  placeholder="e.g. hr@company.com"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-lastWorkingDay`} className="block font-bold text-slate-700 mb-1">
                  Last Working Day (LWD):
                </label>
                <input
                  id={`${formId}-lastWorkingDay`}
                  type="text"
                  name="lastWorkingDay"
                  value={formData.lastWorkingDay}
                  onChange={handleChange}
                  placeholder="e.g. 15 October 2026"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-resignationDate`} className="block font-bold text-slate-700 mb-1">
                  Resignation Date:
                </label>
                <input
                  id={`${formId}-resignationDate`}
                  type="text"
                  name="resignationDate"
                  value={formData.resignationDate}
                  onChange={handleChange}
                  placeholder="e.g. 15 September 2026"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>
          </div>

          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 pt-2 border-t border-slate-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            2. Pending Settlement Component Amounts
          </h4>

          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-unpaidSalary`} className="block font-bold text-slate-700 mb-1">
                  Earned Salary (₹):
                </label>
                <input
                  id={`${formId}-unpaidSalary`}
                  type="text"
                  name="unpaidSalary"
                  value={formData.unpaidSalary}
                  onChange={handleChange}
                  placeholder="e.g. ₹1,25,000"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-gratuityAmount`} className="block font-bold text-slate-700 mb-1">
                  Gratuity (if 5+ yrs service):
                </label>
                <input
                  id={`${formId}-gratuityAmount`}
                  type="text"
                  name="gratuityAmount"
                  value={formData.gratuityAmount}
                  onChange={handleChange}
                  placeholder="e.g. ₹92,500 or N/A"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-leaveEncashment`} className="block font-bold text-slate-700 mb-1">
                  Leave Encashment (EL/PL):
                </label>
                <input
                  id={`${formId}-leaveEncashment`}
                  type="text"
                  name="leaveEncashment"
                  value={formData.leaveEncashment}
                  onChange={handleChange}
                  placeholder="e.g. ₹38,200"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-bonusVariable`} className="block font-bold text-slate-700 mb-1">
                  Variable / Bonus Dues:
                </label>
                <input
                  id={`${formId}-bonusVariable`}
                  type="text"
                  name="bonusVariable"
                  value={formData.bonusVariable}
                  onChange={handleChange}
                  placeholder="e.g. ₹45,000"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>
          </div>

          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 pt-2 border-t border-slate-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            3. Bank Account &amp; Response Deadline
          </h4>

          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-bankName`} className="block font-bold text-slate-700 mb-1">
                  Bank Name:
                </label>
                <input
                  id={`${formId}-bankName`}
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="e.g. HDFC Bank"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-bankAccount`} className="block font-bold text-slate-700 mb-1">
                  Account Number:
                </label>
                <input
                  id={`${formId}-bankAccount`}
                  type="text"
                  name="bankAccount"
                  value={formData.bankAccount}
                  onChange={handleChange}
                  placeholder="e.g. 50100234567890"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-bankIfsc`} className="block font-bold text-slate-700 mb-1">
                  Bank IFSC Code:
                </label>
                <input
                  id={`${formId}-bankIfsc`}
                  type="text"
                  name="bankIfsc"
                  value={formData.bankIfsc}
                  onChange={handleChange}
                  placeholder="e.g. HDFC0000240"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-deadlineDays`} className="block font-bold text-slate-700 mb-1">
                  Demand Deadline (Days):
                </label>
                <select
                  id={`${formId}-deadlineDays`}
                  name="deadlineDays"
                  value={formData.deadlineDays}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-hidden text-slate-900"
                >
                  <option value="7">7 Calendar Days (Standard Legal Bench)</option>
                  <option value="3">3 Business Days (Urgent Default)</option>
                  <option value="10">10 Calendar Days (Grace Period)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Letter Preview (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            {/* Action Bar: Copy / Word .doc / Print */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Live Article Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                  aria-label="Copy Email Text to Clipboard"
                >
                  {copied ? (
                    <>
                      <span>✓</span>
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Download as Microsoft Word Document"
                >
                  <span>📄</span>
                  <span>Word (.doc)</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Print or Save as PDF"
                >
                  <span>🖨️</span>
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Email Metadata Header Preview */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 sm:p-4 text-xs font-mono space-y-1.5 text-slate-700">
              <div>
                <strong className="text-slate-900 font-bold">To:</strong> {formData.hrEmail || "[HR Email Address]"}
              </div>
              <div>
                <strong className="text-slate-900 font-bold">Cc:</strong> {formData.personalEmail || "[Your Personal Email]"}, {formData.reportingManager || "[Reporting Manager]"}
              </div>
              <div className="text-slate-900 font-bold border-t border-slate-200 pt-1.5 break-words">
                <strong className="text-slate-600 font-normal">Subject:</strong> {getSubject()}
              </div>
            </div>

            {/* Formatted Letter Body Rendered inside semantic <article> */}
            <article
              aria-label="Generated Full and Final Settlement Email Letter"
              className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-6 shadow-xs text-xs sm:text-sm text-slate-800 leading-relaxed font-sans space-y-3.5 max-h-[560px] overflow-y-auto scrollbar-thin select-text"
            >
              <p>Dear {formData.hrName || "HR Team"},</p>

              {tone === "gentle" ? (
                <p>
                  I hope this email finds you well. I am writing to politely follow up on the status of my Full and Final (FnF) settlement, relieving documents, and experience certificate following the successful completion of my notice period.
                </p>
              ) : tone === "prelitigation" ? (
                <p className="text-red-950 font-medium bg-red-50 p-2.5 rounded-lg border-l-4 border-red-600">
                  This constitutes my final written demand before initiating statutory legal action against <strong>{formData.companyName}</strong> for unlawful withholding of earned wages, terminal benefits, and exit documentation in direct violation of Indian labour statutes.
                </p>
              ) : (
                <p>
                  I am writing to formally place on record that my Full and Final (FnF) settlement remains outstanding despite the lapse of statutory and contractual timelines following my formal relieving from <strong>{formData.companyName}</strong>.
                </p>
              )}

              <p>For your immediate reference, my employment details and official exit records are outlined below:</p>

              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <li><strong>Full Employee Name:</strong> {formData.employeeName}</li>
                <li><strong>Employee Code / Staff ID:</strong> {formData.employeeId}</li>
                <li><strong>Designation &amp; Department:</strong> {formData.designation} ({formData.department})</li>
                <li><strong>Date of Resignation:</strong> {formData.resignationDate}</li>
                <li><strong>Last Working Day (LWD):</strong> {formData.lastWorkingDay}</li>
                <li><strong>Asset &amp; Knowledge Handover:</strong> 100% Completed, Cleared &amp; Confirmed by Department Head</li>
              </ul>

              {tone === "gentle" ? (
                <p>
                  As per company policy and standard employment regulations, terminal dues are typically processed within 30 to 45 days. Since my last working day was on <strong>{formData.lastWorkingDay}</strong>, I request you to kindly confirm the disbursement schedule and share the draft FnF statement for my verification.
                </p>
              ) : tone === "prelitigation" ? (
                <p>
                  Please take formal notice that under <strong>Section 17(2) of the Code on Wages, 2019</strong>, all wages, terminal benefits, and statutory dues are mandated to be paid within <strong>two (2) working days</strong> of an employee&apos;s resignation or exit. Furthermore, withholding gratuity beyond thirty (30) days attracts mandatory compound interest at 10% per annum under Section 7(3A) of the Payment of Gratuity Act, 1972. Any arbitrary deductions towards notice period buyout without contractual justification constitute an unfair labour practice.
                </p>
              ) : (
                <p>
                  As you are aware, under <strong>Section 17(2) of the Code on Wages, 2019</strong>, an employer is statutory bound to settle and disburse all outstanding wages and terminal dues within <strong>two (2) working days</strong> of an employee ceasing employment. It has now been substantial time since my formal release, yet neither the itemized settlement statement nor the inward credit has been received.
                </p>
              )}

              <div>
                <strong className="text-slate-900 block mb-1">Itemized Statement of Pending Settlement Dues:</strong>
                <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-2 px-3">Component Description</th>
                        <th className="py-2 px-3 text-right">Outstanding Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-1.5 px-3">Earned Salary for Unpaid Period</td>
                        <td className="py-1.5 px-3 text-right font-semibold">{formData.unpaidSalary || "Pending"}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Statutory Gratuity Entitlement</td>
                        <td className="py-1.5 px-3 text-right font-semibold">{formData.gratuityAmount || "As per service"}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Encashment of Earned / Privilege Leaves (EL/PL)</td>
                        <td className="py-1.5 px-3 text-right font-semibold">{formData.leaveEncashment || "As per leave record"}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Approved Official Business Expenses / Travel Reimbursements</td>
                        <td className="py-1.5 px-3 text-right font-semibold">{formData.unpaidExpenses || "Pending claims"}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3">Due Bonus / Variable Pay / Performance Incentive</td>
                        <td className="py-1.5 px-3 text-right font-semibold">{formData.bonusVariable || "As per cycle"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Designated Settlement Bank Account:</strong>
                <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-mono">
                  Holder: {formData.employeeName} | Bank: {formData.bankName} | A/c No: {formData.bankAccount} | IFSC: {formData.bankIfsc}
                </p>
              </div>

              {tone === "gentle" ? (
                <p>
                  I kindly request you to process the pending settlement within <strong>{formData.deadlineDays} business days</strong> and share the bank UTR reference number along with my Relieving Letter and Form 16 Part B.
                </p>
              ) : tone === "prelitigation" ? (
                <p className="font-semibold text-slate-900">
                  You are hereby called upon to credit the entire undisputed sum of my terminal dues to the bank account specified above within <strong>{formData.deadlineDays} calendar days</strong> of receipt of this notice, failing which I shall instruct my legal counsel to serve a formal Advocate Statutory Demand Notice under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and file formal wage recovery proceedings before the Labour Commissioner on the Ministry of Labour&apos;s Samadhan portal without further reference.
                </p>
              ) : (
                <p>
                  In view of the above, I hereby request the management of <strong>{formData.companyName}</strong> to expedite and disburse my complete, unwithheld settlement within <strong>{formData.deadlineDays} calendar days</strong> from receipt of this communication, along with my signed Relieving Letter and Experience Certificate.
                </p>
              )}

              <p className="text-xs text-slate-600">
                In the event of continued default or arbitrary withholding, I explicitly reserve all legal rights available under law, including claiming penal interest at 18% per annum, reporting non-compliance to the jurisdictional Labour Authorities, and initiating summary recovery proceedings before the competent court of law at your sole risk and costs.
              </p>

              <div className="pt-2 text-slate-900">
                <p>Yours sincerely,</p>
                <p className="font-bold">{formData.employeeName}</p>
                <p className="text-xs text-slate-600">Ex-{formData.designation}, {formData.companyName}</p>
                <p className="text-xs text-slate-600">Phone: {formData.contactPhone} | Email: {formData.personalEmail}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
