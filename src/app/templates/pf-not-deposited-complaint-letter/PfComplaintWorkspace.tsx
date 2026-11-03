"use client";

import React, { useState, useId } from "react";

type TemplateType = "employer" | "rpfc" | "epfigms";
type ToneVariant = "firm" | "prelitigation";

interface FormDataState {
  employeeName: string;
  uan: string;
  memberId: string;
  companyName: string;
  establishmentId: string;
  employerEmail: string;
  employerAddress: string;
  directorName: string;
  periodOfDefault: string;
  monthlyPfDeducted: string;
  totalEmployeeWithheld: string;
  totalEmployerWithheld: string;
  totalDue: string;
  lastWorkingDay: string;
  employmentStatus: "active" | "relieved";
  epfoOffice: string;
  personalEmail: string;
  contactPhone: string;
  deadlineDays: string;
}

export default function PfComplaintWorkspace() {
  const formId = useId();
  const [templateType, setTemplateType] = useState<TemplateType>("employer");
  const [tone, setTone] = useState<ToneVariant>("firm");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormDataState>({
    employeeName: "Siddharth Menon",
    uan: "100984729184",
    memberId: "MH/BAN/0045812/000/0034912",
    companyName: "Zenith Digital Solutions Pvt. Ltd.",
    establishmentId: "MHBAN0045812000",
    employerEmail: "hr@zenithdigital.example.com, payroll@zenithdigital.example.com",
    employerAddress: "Level 5, Cyber Park, Electronic City Phase 1, Bengaluru, Karnataka 560100",
    directorName: "Board of Directors & Managing Director",
    periodOfDefault: "October 2025 to October 2026 (13 Months)",
    monthlyPfDeducted: "₹3,600",
    totalEmployeeWithheld: "₹46,800",
    totalEmployerWithheld: "₹46,800",
    totalDue: "₹93,600",
    lastWorkingDay: "31 October 2026",
    employmentStatus: "relieved",
    epfoOffice: "Regional Office, Bengaluru Central (Bhavishya Nidhi Bhawan, Raja Rammohan Roy Road, Bengaluru)",
    personalEmail: "siddharth.menon.work@gmail.com",
    contactPhone: "+91 98450 12345",
    deadlineDays: "7",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Subject line computation based on template
  const getSubject = () => {
    if (templateType === "rpfc") {
      return `STATUTORY COMPLAINT: Non-Remittance of Deducted PF Contributions under Section 7A & Section 14 EPF Act — Est. ID: ${formData.establishmentId} — UAN: ${formData.uan}`;
    }
    if (templateType === "epfigms") {
      return `EPFiGMS Grievance: PF Deducted from Salary but Not Deposited by ${formData.companyName} (UAN: ${formData.uan})`;
    }
    if (tone === "prelitigation") {
      return `FINAL PRE-LITIGATION DEMAND: Non-Deposit of Deducted Employee PF — Criminal Breach of Trust under Section 316 BNS & Section 14 EPF Act 1952 — ${formData.employeeName} (UAN: ${formData.uan})`;
    }
    return `URGENT DEMAND: Unremitted PF Deductions Reflected on Salary Slips — Request for Immediate Deposit & Passbook Updation — ${formData.employeeName} (UAN: ${formData.uan})`;
  };

  // Full body text computation
  const getLetterText = () => {
    const currentDate = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    if (templateType === "rpfc") {
      return `DATE: ${currentDate}

TO:
The Regional Provident Fund Commissioner (RPFC),
Employees' Provident Fund Organisation (EPFO),
${formData.epfoOffice}

SUBJECT: ${getSubject()}

Respected Sir / Madam,

I, ${formData.employeeName}, holding Universal Account Number (UAN) ${formData.uan} and EPF Member ID ${formData.memberId}, am submitting this formal complaint under Section 7A, Section 14, and Section 14B of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952 regarding gross statutory non-compliance and misappropriation of employee provident fund contributions by my employer:

ESTABLISHMENT DETAILS:
• Establishment Name: ${formData.companyName}
• Establishment PF Code: ${formData.establishmentId}
• Registered Address: ${formData.employerAddress}
• Management / Directors: ${formData.directorName}

SUMMARY OF STATUTORY DEFAULT:
1. Month after month, the establishment has systematically deducted the statutory 12% employee share of Provident Fund from my gross wages, as evidenced by my official monthly salary slips.
2. The default period extends across: ${formData.periodOfDefault}.
3. The monthly employee deduction averages ${formData.monthlyPfDeducted}, amounting to an aggregate employee contribution of ${formData.totalEmployeeWithheld} deducted from my wages.
4. Upon verifying my EPFO Member Passbook via the official Unified Member Portal (passbook.epfindia.gov.in), I discovered with shock that the establishment has failed to remit both the deducted employee share (${formData.totalEmployeeWithheld}) and the mandatory matching employer contribution (${formData.totalEmployerWithheld}), totaling an unpaid arrears amount of ₹${formData.totalDue} (exclusive of statutory interest and administrative charges).
5. The employer's failure to deposit deducted employee contributions by the 15th of the succeeding month violates Paragraph 38 of the Employees' Provident Funds Scheme, 1952 and constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023.

RELIEFS AND STATUTORY ACTIONS PRAYED FOR:
In light of the documentary evidence annexed hereto, I respectfully pray that the Regional Provident Fund Commissioner may be pleased to:
a) Initiate immediate quasi-judicial assessment proceedings under Section 7A of the EPF Act, 1952 against ${formData.companyName} and summon their wage registers, payroll accounts, and electronic bank remittance logs.
b) Levy statutory simple interest at 12% per annum under Section 7Q of the Act and penal damages ranging up to 100% of arrears under Section 14B read with Paragraph 32A of the Scheme.
c) Sanction prosecution of the defaulting establishment, Managing Director, and responsible officers under Section 14(1A) of the EPF Act, 1952 and register a First Information Report (FIR) under Section 316 / Section 318 of the Bharatiya Nyaya Sanhita, 2023 for misappropriation of entrusted wages.
d) Direct the establishment to immediately credit all pending contributions to my UAN (${formData.uan}) along with accrued statutory interest.

ANNEXURES ENCLOSED:
1. Copies of monthly salary slips establishing PF deductions for ${formData.periodOfDefault}.
2. Certified download of EPFO Unified Member Passbook showing zero contribution deposits.
3. Copy of Appointment Letter and Proof of Employment / Relieving.
4. Copy of formal written demand notice sent to the employer on ${currentDate}.

Yours faithfully,

${formData.employeeName}
UAN: ${formData.uan}
Member ID: ${formData.memberId}
Mobile: ${formData.contactPhone}
Email: ${formData.personalEmail}`;
    }

    if (templateType === "epfigms") {
      return `EPFiGMS GRIEVANCE PORTAL SUBMISSION DRAFT (Category: Employer Not Depositing PF)

UAN: ${formData.uan}
PF Member ID: ${formData.memberId}
Establishment Name: ${formData.companyName}
Establishment Code: ${formData.establishmentId}

GRIEVANCE DESCRIPTION (Copy & Paste directly into epfigms.gov.in):
Respected Commissioner,
I am registered under UAN ${formData.uan} with Member ID ${formData.memberId} under establishment ${formData.companyName} (Code: ${formData.establishmentId}). 

My employer has been deducting employee provident fund contributions of ${formData.monthlyPfDeducted} every month directly from my salary for the period ${formData.periodOfDefault}. The total employee share deducted from my salary is ${formData.totalEmployeeWithheld}. However, as per my online EPFO Member Passbook, the employer has NOT deposited either my deducted employee contribution or the matching employer contribution (${formData.totalDue} total arrears) into my EPF account. 

This is a serious statutory violation under Paragraph 38 of the EPF Scheme, 1952 and Criminal Breach of Trust under Section 316 BNS. I have attached my salary slips and EPFO passbook proving monthly deductions with zero ledger credit. 

I request the EPFO Regional Office to initiate inquiry under Section 7A, recover the dues with Section 7Q interest and Section 14B damages, and prosecute the defaulting directors under Section 14 EPF Act.

Complainant: ${formData.employeeName} | Mobile: ${formData.contactPhone} | Email: ${formData.personalEmail}`;
    }

    // Template 1: Employer Letter (Firm or Pre-litigation)
    const legalIntro =
      tone === "prelitigation"
        ? `This communication serves as a formal PRE-LITIGATION STATUTORY DEMAND before initiating criminal prosecution under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust) and moving the Regional Provident Fund Commissioner under Section 7A & Section 14 of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952.`
        : `I am writing to formally place on record a grave statutory discrepancy regarding the non-remittance of my Provident Fund contributions deducted by ${formData.companyName} from my monthly salary.`;

    const legalWarning =
      tone === "prelitigation"
        ? `Please take strict legal notice that under Explanation 1 to Section 405 IPC (now Section 316 of the Bharatiya Nyaya Sanhita, 2023), an employer who deducts the employee's contribution from wages and fails to deposit it with the EPFO is deemed to have dishonestly used that amount in violation of law and committed CRIMINAL BREACH OF TRUST—a cognizable and non-bailable offense. Furthermore, under Section 14(1A) of the EPF Act, 1952, failure to remit deducted employee PF is punishable with imprisonment up to three (3) years and mandatory fines. The company and each of its Directors are also liable for mandatory 12% simple interest under Section 7Q and punitive damages up to 100% under Section 14B.`
        : `Under Paragraph 38 of the Employees' Provident Funds Scheme, 1952, the employer is statutory obligated to deposit both the employee's deducted contribution (12%) and the employer's matching contribution (12%) to the EPFO within 15 days of the close of each pay month. Retaining deducted PF funds without depositing them with the EPFO constitutes an unlawful retention of employee wages and invites penal action under Section 14 of the EPF Act, 1952.`;

    return `DATE: ${currentDate}

TO:
The Human Resources Department, Head of Payroll &
${formData.directorName}
${formData.companyName}
${formData.employerAddress}
Email: ${formData.employerEmail}

SUBJECT: ${getSubject()}

Dear Management & HR Team,

${legalIntro}

I am an employee (${formData.employmentStatus === "relieved" ? `relieved on ${formData.lastWorkingDay}` : "currently employed"}) of ${formData.companyName}, covered under Universal Account Number (UAN) ${formData.uan} and EPF Member ID ${formData.memberId}.

STATUTORY AUDIT & DEFAULT PARTICULARS:
1. Default Period: ${formData.periodOfDefault}
2. Monthly Employee Deduction on Pay Slip: ${formData.monthlyPfDeducted}
3. Total Employee Share Deducted But Not Deposited: ${formData.totalEmployeeWithheld}
4. Total Matching Employer Share Withheld: ${formData.totalEmployerWithheld}
5. Total Statutory Arrears Due to EPFO: ${formData.totalDue} (Exclusive of s.7Q interest)

While my monthly salary slips clearly record that ${formData.monthlyPfDeducted} was systematically deducted towards Provident Fund from my hard-earned earnings each month, a certified extract of my EPFO Member Passbook reveals that NO remittances have been credited to my account for the aforementioned period.

${legalWarning}

FINAL DEMAND & RESOLUTION WINDOW:
I hereby call upon the management of ${formData.companyName} to:
1. Immediately deposit the full outstanding sum of ${formData.totalDue} (both employee and employer shares) with the Employees' Provident Fund Organisation under my UAN (${formData.uan}).
2. Pay the statutory interest accrued thereon under Section 7Q of the EPF Act, 1952.
3. Furnish the electronic Electronic Challan cum Return (ECR) receipt and bank transaction acknowledgement within ${formData.deadlineDays} calendar days of receipt of this notice.

In the event of failure to rectify this default within seven (7) days, I shall immediately:
a) File a statutory complaint on the EPFO EPFiGMS portal and petition the Regional Provident Fund Commissioner for a Section 7A inquiry and Section 14B damages.
b) Instruct my legal counsel to serve a formal Advocate Legal Notice and lodge a criminal complaint for Criminal Breach of Trust under Section 316 BNS with the competent jurisdictional police station and Economic Offences Wing.
c) Disclose this statutory default to the Income Tax authorities under Section 36(1)(va) of the Income Tax Act, 1961, disqualifying the company from claiming tax deductions on employee contributions.

I trust the management will treat this matter with the utmost statutory urgency and prevent adverse legal and penal repercussions.

Yours sincerely,

${formData.employeeName}
UAN: ${formData.uan}
Member ID: ${formData.memberId}
Phone: ${formData.contactPhone}
Email: ${formData.personalEmail}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getLetterText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadDoc = () => {
    const emailContent = getLetterText().replace(/\n/g, "<br/>");
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${getSubject()}</title>
<style>
body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #111827; padding: 36px; max-width: 800px; margin: auto; }
h2 { color: #DC2626; border-bottom: 2px solid #E5E7EB; padding-bottom: 8px; font-size: 20px; }
.meta { background: #F3F4F6; padding: 14px; border-radius: 8px; margin-bottom: 24px; font-size: 13px; border-left: 4px solid #DC2626; }
.content { font-size: 13.5px; white-space: pre-wrap; line-height: 1.7; }
</style>
</head>
<body>
<h2>Formal Complaint: Non-Deposit of Deducted Provident Fund (EPF)</h2>
<div class="meta">
<strong>Subject:</strong> ${getSubject()}<br/>
<strong>Date:</strong> ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}<br/>
<strong>UAN:</strong> ${formData.uan} | <strong>Establishment:</strong> ${formData.companyName}
</div>
<div class="content">${emailContent}</div>
</body>
</html>`;

    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `PF_Complaint_Letter_${formData.employeeName.replace(/\s+/g, "_")}.doc`;
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
      {/* Workspace Header with Template & Tone Selector */}
      <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/80 mb-2">
              <span>Interactive Generator</span>
              <span>•</span>
              <span>EPF Act 1952 &amp; BNS 316</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              PF Complaint Letter Workspace
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Select your recipient, fill in your UAN &amp; default details, and copy or download an airtight legal notice.
            </p>
          </div>

          {/* Template Format Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/90 rounded-xl border border-slate-700">
            <button
              type="button"
              onClick={() => setTemplateType("employer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                templateType === "employer"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              1. To Employer / HR
            </button>
            <button
              type="button"
              onClick={() => setTemplateType("rpfc")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                templateType === "rpfc"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              2. To EPFO / RPFC
            </button>
            <button
              type="button"
              onClick={() => setTemplateType("epfigms")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                templateType === "epfigms"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              3. EPFiGMS Portal Text
            </button>
          </div>
        </div>

        {/* Tone Selector for Employer Template */}
        {templateType === "employer" && (
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Legal Tone:
            </span>
            <div className="inline-flex rounded-lg p-0.5 bg-slate-800 border border-slate-700">
              <button
                type="button"
                onClick={() => setTone("firm")}
                className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                  tone === "firm" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Firm Formal Demand (7-Day Notice)
              </button>
              <button
                type="button"
                onClick={() => setTone("prelitigation")}
                className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                  tone === "prelitigation" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Pre-Litigation Criminal Notice (BNS 316)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Grid: Form Left, Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Controls (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/70 space-y-4 max-h-[820px] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Your Particulars
            </span>
            <span className="text-[10px] text-slate-500 font-semibold">Updates live on right →</span>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor={`${formId}-employeeName`} className="block text-xs font-bold text-slate-700 mb-1">
                Your Full Name
              </label>
              <input
                id={`${formId}-employeeName`}
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-uan`} className="block text-xs font-bold text-slate-700 mb-1">
                  12-Digit UAN
                </label>
                <input
                  id={`${formId}-uan`}
                  type="text"
                  name="uan"
                  value={formData.uan}
                  onChange={handleChange}
                  placeholder="e.g. 100984729184"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-memberId`} className="block text-xs font-bold text-slate-700 mb-1">
                  EPF Member ID
                </label>
                <input
                  id={`${formId}-memberId`}
                  type="text"
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                  placeholder="e.g. MH/BAN/0045812..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-companyName`} className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Employer Name
                </label>
                <input
                  id={`${formId}-companyName`}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-establishmentId`} className="block text-xs font-bold text-slate-700 mb-1">
                  Est. PF Code (Optional)
                </label>
                <input
                  id={`${formId}-establishmentId`}
                  type="text"
                  name="establishmentId"
                  value={formData.establishmentId}
                  onChange={handleChange}
                  placeholder="e.g. MHBAN0045812000"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-periodOfDefault`} className="block text-xs font-bold text-slate-700 mb-1">
                Default Period (Months Withheld)
              </label>
              <input
                id={`${formId}-periodOfDefault`}
                type="text"
                name="periodOfDefault"
                value={formData.periodOfDefault}
                onChange={handleChange}
                placeholder="e.g. October 2025 to October 2026 (13 Months)"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label htmlFor={`${formId}-monthlyPfDeducted`} className="block text-[11px] font-bold text-slate-700 mb-1 truncate" title="Monthly Deduction on Pay Slip">
                  Monthly Deducted
                </label>
                <input
                  id={`${formId}-monthlyPfDeducted`}
                  type="text"
                  name="monthlyPfDeducted"
                  value={formData.monthlyPfDeducted}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-totalEmployeeWithheld`} className="block text-[11px] font-bold text-slate-700 mb-1 truncate" title="Total Employee Share Deducted">
                  Total Employee Share
                </label>
                <input
                  id={`${formId}-totalEmployeeWithheld`}
                  type="text"
                  name="totalEmployeeWithheld"
                  value={formData.totalEmployeeWithheld}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-totalDue`} className="block text-[11px] font-bold text-slate-700 mb-1 truncate" title="Total Due (Emp + Employer)">
                  Total Due (Both)
                </label>
                <input
                  id={`${formId}-totalDue`}
                  type="text"
                  name="totalDue"
                  value={formData.totalDue}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none font-bold text-red-600"
                />
              </div>
            </div>

            {templateType === "employer" ? (
              <>
                <div>
                  <label htmlFor={`${formId}-employerEmail`} className="block text-xs font-bold text-slate-700 mb-1">
                    HR &amp; Management Emails (Comma Separated)
                  </label>
                  <input
                    id={`${formId}-employerEmail`}
                    type="text"
                    name="employerEmail"
                    value={formData.employerEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-employerAddress`} className="block text-xs font-bold text-slate-700 mb-1">
                    Company Registered Address
                  </label>
                  <input
                    id={`${formId}-employerAddress`}
                    type="text"
                    name="employerAddress"
                    value={formData.employerAddress}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
              </>
            ) : (
              <div>
                <label htmlFor={`${formId}-epfoOffice`} className="block text-xs font-bold text-slate-700 mb-1">
                  Jurisdictional EPFO Regional Office
                </label>
                <input
                  id={`${formId}-epfoOffice`}
                  type="text"
                  name="epfoOffice"
                  value={formData.epfoOffice}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label htmlFor={`${formId}-personalEmail`} className="block text-xs font-bold text-slate-700 mb-1">
                  Your Personal Email
                </label>
                <input
                  id={`${formId}-personalEmail`}
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-contactPhone`} className="block text-xs font-bold text-slate-700 mb-1">
                  Your Mobile Number
                </label>
                <input
                  id={`${formId}-contactPhone`}
                  type="text"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Preview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-slate-900 text-slate-100">
          {/* Action Toolbar */}
          <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                {templateType === "employer"
                  ? "Employer Demand Preview"
                  : templateType === "rpfc"
                  ? "RPFC Statutory Complaint"
                  : "EPFiGMS Portal Submission"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                {copied ? "✓ Copied to Clipboard!" : "Copy Text"}
              </button>

              <button
                type="button"
                onClick={handleDownloadDoc}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                title="Download formatted Word Document (.doc)"
              >
                Download Word (.doc)
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                title="Print Document"
              >
                Print
              </button>
            </div>
          </div>

          {/* Letter Preview Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-y-auto max-h-[740px] whitespace-pre-wrap select-text selection:bg-red-800 selection:text-white">
            {getLetterText()}
          </div>

          {/* Footer Bar inside Preview */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>
              Section 63 BSA Admissibility: Dispatched via registered electronic mail creates an immutable timestamped trail.
            </span>
            <span className="text-red-400 font-bold">100% Free Public Legal Resource</span>
          </div>
        </div>
      </div>
    </div>
  );
}
