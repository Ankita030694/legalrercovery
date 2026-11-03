"use client";

import React, { useState, useId } from "react";

type ToneVariant = "polite" | "firm" | "final";

interface FormDataState {
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  companyName: string;
  hrName: string;
  hrEmail: string;
  reportingManager: string;
  resignationDate: string;
  lastWorkingDay: string;
  handoverDate: string;
  handoverReceiver: string;
  newEmployerJoiningDate: string;
  deadlineDays: string;
  personalEmail: string;
  contactPhone: string;
}

export default function RelievingLetterWorkspace() {
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
    reportingManager: "Rajesh Nair (Engineering Director)",
    resignationDate: "15 September 2026",
    lastWorkingDay: "15 October 2026",
    handoverDate: "15 October 2026",
    handoverReceiver: "Karan Mehta (Tech Lead) & IT Asset Desk",
    newEmployerJoiningDate: "17 November 2026",
    deadlineDays: "5",
    personalEmail: "aditya.sharma.work@gmail.com",
    contactPhone: "+91 98765 43210",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getSubject = () => {
    if (tone === "polite") {
      return `Request for Relieving Letter and Experience Certificate — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
    }
    if (tone === "final") {
      return `FINAL PRE-NOTICE DEMAND: Unlawful Withholding of Relieving & Experience Letters — ${formData.employeeName} (${formData.employeeId}) — Breach of Article 21 & Model Standing Orders`;
    }
    return `URGENT: Formal Request for Issuance of Relieving Letter & Service Certificate — ${formData.employeeName} (Emp ID: ${formData.employeeId})`;
  };

  const getEmailText = () => {
    const subject = getSubject();
    const toneIntro =
      tone === "polite"
        ? `I hope this email finds you well. I am writing to politely follow up regarding the issuance of my formal Relieving Letter and Experience Certificate following my smooth separation from ${formData.companyName}.`
        : tone === "final"
        ? `This constitutes my final written demand before initiating statutory and constitutional legal proceedings against ${formData.companyName} and its management for the malicious and unlawful withholding of my vital employment records, Relieving Letter, and Experience Certificate.`
        : `I am writing to formally place on record that despite the complete fulfillment of all contractual exit formalities, my official Relieving Letter and Experience Certificate remain unissued by ${formData.companyName}.`;

    const toneLegalHook =
      tone === "polite"
        ? `As all project handovers, asset clearances, and exit documentation were formally accepted by ${formData.handoverReceiver} on my last working day (${formData.lastWorkingDay}), I request you to kindly generate and email the digitally signed PDF copies of my service certificates.`
        : tone === "final"
        ? `Please take formal notice that an employer has no legal authority to hold exit documentation to ransom. An Experience Certificate is an incontrovertible statement of historical fact and service rendered. Withholding it constitutes an unlawful restraint of trade under Section 27 of the Indian Contract Act, 1872, and a direct infringement of my fundamental right to livelihood under Article 21 of the Constitution of India. The Hon'ble High Courts have repeatedly held that financial or administrative disputes cannot be leveraged to block an employee's professional transition.`
        : `Under standard employment jurisprudence and Model Standing Orders Rule 16, a departing employee who has handed over company assets is statutorily entitled to a Service Certificate documenting their tenure, designation, and conduct. Severance documents cannot be conditioned on internal settlement reconciliations or delayed without cause.`;

    const toneImpact =
      tone === "polite"
        ? `My next employer requires these documents as mandatory compliance for background verification and onboarding by ${formData.newEmployerJoiningDate}. Timely receipt will ensure my career progression is not disrupted.`
        : tone === "final"
        ? `My prospective employer requires these credentials for onboarding scheduled on ${formData.newEmployerJoiningDate}. Any further obstruction will cause irreparable career damage, termination of my job offer, and severe financial injury. Should my offer be jeopardized, ${formData.companyName} and its officers shall be held personally and financially liable for total loss of earnings, general damages, and litigation expenses.`
        : `My prospective employer has stipulated a strict onboarding deadline of ${formData.newEmployerJoiningDate} for submission of my relieving documents. Any delay puts my new appointment at risk through no fault of mine.`;

    const toneDeadline =
      tone === "polite"
        ? `I kindly request you to release the letters within ${formData.deadlineDays} business days to my personal email address (${formData.personalEmail}).`
        : tone === "final"
        ? `You are hereby called upon to issue my official Relieving Letter and Experience Certificate within forty-eight (48) hours of receipt of this notice, failing which I shall immediately instruct my legal counsel to serve a statutory Advocate Demand Notice under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and file an urgent complaint before the Labour Commissioner and competent judicial forums without further notice.`
        : `In view of the above, I request management to issue and transmit my signed Relieving Letter and Experience Certificate within ${formData.deadlineDays} business days of this communication.`;

    return `To: ${formData.hrEmail || "[HR Email]"}
Cc: ${formData.personalEmail || "[Your Personal Email]"}, ${formData.reportingManager || "[Reporting Manager Email]"}
Subject: ${subject}

Dear ${formData.hrName || "HR Team"},

${toneIntro}

EMPLOYMENT PARTICULARS:
• Full Name: ${formData.employeeName}
• Employee ID: ${formData.employeeId}
• Designation: ${formData.designation}
• Department: ${formData.department}
• Date of Resignation: ${formData.resignationDate}
• Last Working Day (LWD): ${formData.lastWorkingDay}
• Assets & Handover Sign-off: Completed on ${formData.handoverDate} with ${formData.handoverReceiver}

${toneLegalHook}

${toneImpact}

${toneDeadline}

Thank you for your prompt cooperation.

Sincerely,

${formData.employeeName}
Former ${formData.designation}
Emp ID: ${formData.employeeId}
Email: ${formData.personalEmail}
Phone: ${formData.contactPhone}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getEmailText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const text = getEmailText();
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Relieving & Experience Letter Request Email</title>
        <style>
          body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #111827; }
          h2 { font-size: 14pt; color: #B91C1C; margin-bottom: 8pt; }
          .header-box { background: #f3f4f6; border-left: 4pt solid #B91C1C; padding: 10pt; margin-bottom: 12pt; }
          pre { font-family: Calibri, Arial, sans-serif; white-space: pre-wrap; word-wrap: break-word; }
        </style>
      </head>
      <body>
        <div class="header-box">
          <h2>Relieving & Experience Letter Formal Demand — ${formData.employeeName}</h2>
          <p><strong>Company:</strong> ${formData.companyName} | <strong>Employee ID:</strong> ${formData.employeeId} | <strong>Tone:</strong> ${tone.toUpperCase()}</p>
        </div>
        <pre>${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      </body>
      </html>
    `;
    const blob = new Blob(["\ufeff" + htmlContent], {
      type: "application/msword;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Relieving_Letter_Request_${formData.employeeName.replace(/\s+/g, "_")}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Letter: ${formData.employeeName}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #0F172A; line-height: 1.6; }
            h2 { color: #DC2626; margin-bottom: 6px; }
            pre { white-space: pre-wrap; font-family: inherit; font-size: 14px; }
            .header { border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Formal Exit Documentation Demand</h2>
            <p>Employee: <strong>${formData.employeeName}</strong> (${formData.employeeId}) &bull; Company: <strong>${formData.companyName}</strong></p>
          </div>
          <pre>${getEmailText().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Tone Selection Tabs */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-0.5">
              Select Demand Stage &amp; Tone
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Interactive Email Workspace (Archetype P1)
            </h3>
          </div>

          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setTone("polite")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                tone === "polite"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              1. Polite Reminder
            </button>
            <button
              type="button"
              onClick={() => setTone("firm")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                tone === "firm"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              2. Firm Statutory
            </button>
            <button
              type="button"
              onClick={() => setTone("final")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                tone === "final"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              3. Final Pre-Notice
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-2">
          {tone === "polite" &&
            "Best for: Days 7–14 after your Last Working Day. Courteous tone assuming an administrative delay."}
          {tone === "firm" &&
            "Best for: Days 15–30 after relieving. Cites Model Standing Orders, Article 21, and Section 27 Contract Act."}
          {tone === "final" &&
            "Best for: 30+ days overdue, or when HR ties letter release to disputed FnF deductions. Pre-litigation notice before legal action."}
        </p>
      </div>

      {/* Two Column Grid: Inputs on Left, Real-Time Letter Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Form Inputs (5 cols on lg) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-5 space-y-4 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Your Employment Particulars
            </span>
            <span className="text-[10px] text-slate-500">Live Updates Preview</span>
          </div>

          <div className="space-y-3 text-xs">
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
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="e.g. Aditya Sharma"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-employeeId`} className="block font-semibold text-slate-700 mb-1">
                  Employee ID
                </label>
                <input
                  id={`${formId}-employeeId`}
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="EMP-41092"
                />
              </div>
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
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-companyName`} className="block font-semibold text-slate-700 mb-1">
                Employer / Company Name
              </label>
              <input
                id={`${formId}-companyName`}
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Acme Technologies Pvt. Ltd."
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
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
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="hr@company.com"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-reportingManager`} className="block font-semibold text-slate-700 mb-1">
                  Reporting Manager (Cc)
                </label>
                <input
                  id={`${formId}-reportingManager`}
                  type="text"
                  name="reportingManager"
                  value={formData.reportingManager}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Manager Name / Email"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-lastWorkingDay`} className="block font-semibold text-slate-700 mb-1">
                  Last Working Day (LWD)
                </label>
                <input
                  id={`${formId}-lastWorkingDay`}
                  type="text"
                  name="lastWorkingDay"
                  value={formData.lastWorkingDay}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="15 October 2026"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-handoverReceiver`} className="block font-semibold text-slate-700 mb-1">
                  Asset Handover To
                </label>
                <input
                  id={`${formId}-handoverReceiver`}
                  type="text"
                  name="handoverReceiver"
                  value={formData.handoverReceiver}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Lead / IT Desk"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-newEmployerJoiningDate`} className="block font-semibold text-slate-700 mb-1">
                  Next Joining Date
                </label>
                <input
                  id={`${formId}-newEmployerJoiningDate`}
                  type="text"
                  name="newEmployerJoiningDate"
                  value={formData.newEmployerJoiningDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="17 November 2026"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-deadlineDays`} className="block font-semibold text-slate-700 mb-1">
                  Response Window (Days)
                </label>
                <input
                  id={`${formId}-deadlineDays`}
                  type="text"
                  name="deadlineDays"
                  value={formData.deadlineDays}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="5"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-personalEmail`} className="block font-semibold text-slate-700 mb-1">
                  Personal Email
                </label>
                <input
                  id={`${formId}-personalEmail`}
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your.email@gmail.com"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-contactPhone`} className="block font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  id={`${formId}-contactPhone`}
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Live Letter Preview (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Live Generated Email Preview</span>
            </span>

            {/* Action Buttons: Copy, Word Doc, Print */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-md text-[11px] transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
              <button
                type="button"
                onClick={handleDownloadDoc}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-md text-[11px] transition-colors cursor-pointer"
                title="Download formatted Word document"
              >
                📥 Word (.doc)
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-md text-[11px] transition-colors cursor-pointer"
                title="Print formatted letter"
              >
                🖨️ Print
              </button>
            </div>
          </div>

          {/* Letter Body Rendered as <article> with Real Letter Structure */}
          <article
            aria-label="Email Draft Preview"
            className="bg-white border-2 border-slate-300 rounded-xl p-4 sm:p-6 shadow-xs font-mono text-xs sm:text-[13px] leading-relaxed text-slate-800 space-y-4 max-h-[580px] overflow-y-auto whitespace-pre-wrap selection:bg-red-100"
          >
            {getEmailText()}
          </article>
        </div>
      </div>
    </div>
  );
}
