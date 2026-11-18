"use client";

import React, { useMemo, useState } from "react";

interface SchoolNoticePreset {
  id: string;
  label: string;
  badge: string;
  noticeTitle: string;
  institutionName: string;
  trustEntity: string;
  affiliationDetails: string;
  institutionAddress: string;
  institutionEmail: string;
  parentNames: string;
  parentAddress: string;
  parentContact: string;
  studentReference: string;
  tcStatusNote: string;
  feeSchedule: string;
  principalAmount: number;
  interestRate: number;
  cureDays: number;
  includeChildSafeDisclaimer: boolean;
  includeContractUndertaking: boolean;
  includeOrder37Clause: boolean;
  includeChequeBounceClause: boolean;
  chequeDetails: string;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: SchoolNoticePreset[] = [
  {
    id: "school-parent-post-tc",
    label: "1. Private School Parent Fee Arrears (Active or Post-TC Issued)",
    badge: "RTE & NCPCR Safe",
    noticeTitle:
      "CONFIDENTIAL CIVIL DEMAND NOTICE — CONTRACTUAL SCHOOL FEE ARREARS (STRICTLY ADDRESSED TO PARENTS / GUARDIANS)",
    institutionName: "Oakridge International Public School",
    trustEntity: "Oakridge Educational & Charitable Trust (Regd. under Indian Trusts Act / Societies Reg. Act)",
    affiliationDetails: "CBSE Affiliation No. 2730841 | UDISE Code: 07010409211",
    institutionAddress: "Sector 24, Institutional Area, Gurugram, Haryana - 122017",
    institutionEmail: "accounts.trust@oakridgepublic.edu.in",
    parentNames: "Mr. Arvind Khurana (Father / Primary Signatory) & Mrs. Meera Khurana (Mother / Co-Signatory)",
    parentAddress: "Flat 904, Tower C, Palm Residency, DLF Phase IV, Gurugram - 122009",
    parentContact: "arvind.khurana@corpdomain.in | +91-98110-44219",
    studentReference: "Master Aarav Khurana (Admission No. OIS/2023/1148, Class VII-B)",
    tcStatusNote:
      "Transfer Certificate (TC) No. TC/2026/0419 and Annual Report Card were unconditionally issued on 14.04.2026 in strict compliance with RTE Act s.5(3).",
    feeSchedule:
      "1) Q3 & Q4 Academic Tuition Fee (AY 2025-26): ERP Inv. OIS/25-26/4102 & 5219 — ₹1,42,000.00\n2) Annual Smart-Lab, Activity & Examination Fee: ERP Inv. OIS/25-26/5304 — ₹28,500.00\n3) School Bus Transport Fee (Oct 2025 – Mar 2026): ERP Inv. OIS/25-26/5490 — ₹36,000.00",
    principalAmount: 206500,
    interestRate: 12.0,
    cureDays: 15,
    includeChildSafeDisclaimer: true,
    includeContractUndertaking: true,
    includeOrder37Clause: true,
    includeChequeBounceClause: false,
    chequeDetails: "N/A (Open ERP Fee Ledger + Signed Admission Fee Undertaking dt. 05.03.2023)",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Gurugram Chambers",
    noticeRef: "LR/IND17/SCH/2026/210-A",
    noticeDate: "18 November 2026",
  },
  {
    id: "university-hostel-semester-fee",
    label: "2. Private University / College Unpaid Semester & Hostel Fee Notice",
    badge: "University / Hostel",
    noticeTitle:
      "LEGAL DEMAND NOTICE — OVERDUE SEMESTER TUITION & HOSTEL ACCOMMODATION DUES UNDER ENROLLMENT UNDERTAKING",
    institutionName: "Meridian Institute of Technology & Management (Private University)",
    trustEntity: "Meridian Higher Education Foundation (Sec. 8 Company / State Private University Act)",
    affiliationDetails: "UGC / AICTE Approved Campus | Regn. No. MH/UNI/2018/44",
    institutionAddress: "Knowledge Park III, Hinjewadi Phase II, Pune, Maharashtra - 411057",
    institutionEmail: "registrar.finance@meridianuni.ac.in",
    parentNames: "Mr. Prakash Deshpande (Father & Financial Guarantor) & Mr. Rohan Deshpande (Adult Student / Co-Obligor)",
    parentAddress: "Bunglow 18, Prabhat Road, Deccan Gymkhana, Pune - 411004",
    parentContact: "prakash.deshpande@gmail.com | +91-98220-77310",
    studentReference: "Mr. Rohan Deshpande (Enrollment ID: MITM/BTECH/2024/0892, Sem V)",
    tcStatusNote:
      "Academic progression, examination hall tickets, and degree/migration rights remain insulated per UGC norms; financial recovery is pursued strictly as a civil debt.",
    feeSchedule:
      "1) Semester IV & V B.Tech Tuition Fee Arrears: Ledger Ref. UNI/26/8821 — ₹2,65,000.00\n2) Boys Hostel & Mess Charges (2 Semesters): Ledger Ref. HST/26/1904 — ₹1,18,000.00",
    principalAmount: 383000,
    interestRate: 15.0,
    cureDays: 15,
    includeChildSafeDisclaimer: true,
    includeContractUndertaking: true,
    includeOrder37Clause: true,
    includeChequeBounceClause: false,
    chequeDetails: "N/A (Signed Hostel & Semester Fee Financial Undertaking dt. 12.07.2024)",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Pune Chambers",
    noticeRef: "LR/IND17/UNI/2026/210-B",
    noticeDate: "18 November 2026",
  },
  {
    id: "fee-cheque-nach-bounce",
    label: "3. Dishonoured School Fee Cheque / ECS Mandate (NI s.138 / PSS s.25)",
    badge: "Cheque / NACH s.138",
    noticeTitle:
      "STATUTORY DEMAND NOTICE U/S 138 NI ACT, 1881 (R/W PSS ACT s.25) — DISHONOURED SCHOOL FEE INSTRUMENT",
    institutionName: "St. Xavier's Modern Academy",
    trustEntity: "Xavier Educational Society (Regd. under Societies Registration Act, 1860)",
    affiliationDetails: "CISCE / ICSE Affiliation No. UP/2012/908 | UDISE: 09100204418",
    institutionAddress: "Gomti Nagar Extension, Lucknow, Uttar Pradesh - 226010",
    institutionEmail: "fee.legal@xavierslucknow.org",
    parentNames: "Mr. Vivek Tiwari (Drawer of Dishonoured Cheque / Parent & Guardian)",
    parentAddress: "House No. 4/112, Viram Khand, Gomti Nagar, Lucknow - 226010",
    parentContact: "vivek.tiwari.lko@yahoo.in | +91-94150-33891",
    studentReference: "Miss Ananya Tiwari (Admission No. SXA/2022/0514, Class IX-A)",
    tcStatusNote:
      "Student's classroom attendance, board registration, and Transfer Certificate rights remain 100% unaffected; criminal/civil liability attaches solely to the Cheque Drawer.",
    feeSchedule:
      "1) Annual Tuition & Transport Consolidated Fee Arrears (AY 2025-26): Inv. SXA/26/1142 — ₹1,15,000.00\n2) Bank Return Charges & Dishonour Processing Cost: — ₹1,500.00",
    principalAmount: 116500,
    interestRate: 18.0,
    cureDays: 15,
    includeChildSafeDisclaimer: true,
    includeContractUndertaking: true,
    includeOrder37Clause: true,
    includeChequeBounceClause: true,
    chequeDetails:
      "Cheque No. 441902 dated 25.10.2026 for ₹1,15,000/- drawn on HDFC Bank, Gomti Nagar Branch; dishonoured on 02.11.2026 with Return Memo 'Funds Insufficient / Payment Stopped by Drawer'.",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Lucknow Chambers",
    noticeRef: "LR/IND17/S138/2026/210-C",
    noticeDate: "18 November 2026",
  },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(amount || 0)));
}

export default function SchoolFeeNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<SchoolNoticePreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handlePresetChange = (preset: SchoolNoticePreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    setCopied(false);
  };

  const updateField = <K extends keyof SchoolNoticePreset>(
    key: K,
    value: SchoolNoticePreset[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const generatedNoticeText = useMemo(() => {
    const lines: string[] = [
      "WITHOUT PREJUDICE — CONFIDENTIAL CIVIL RECOVERY COMMUNICATION",
      "ADDRESSED STRICTLY TO PARENTS / LEGAL GUARDIANS (ZERO CHILD-IMPACT NOTICE)",
      `Ref. No.: ${form.noticeRef}                                        Date: ${form.noticeDate}`,
      "Mode of Dispatch: Official Parent Email + WhatsApp PDF + Speed Post RPAD (Confidential)",
      "",
      form.noticeTitle,
      "",
      "TO,",
      form.parentNames,
      `Address: ${form.parentAddress}`,
      `Email / Contact: ${form.parentContact}`,
      "",
      "FROM / ON BEHALF OF OUR CLIENT:",
      `${form.institutionName}`,
      `Managed by: ${form.trustEntity}`,
      `Regulatory Details: ${form.affiliationDetails}`,
      `Campus Address: ${form.institutionAddress}`,
      `Accounts Email: ${form.institutionEmail}`,
      "",
      `SUBJECT: Formal Civil Demand Notice for Contractual Fee Arrears of ₹${formatINR(form.principalAmount)}/- (Student Ref: ${form.studentReference})`,
      "",
      "Dear Sir / Madam,",
      "",
      `Under instructions from and on behalf of our Client, ${form.trustEntity} (running ${form.institutionName}), we hereby serve upon you this formal, confidential Legal Demand Notice strictly in your personal capacity as contracting Parents / Legal Guardians:`,
      "",
      "1. EXPLICIT CHILD-SAFE HARBOUR & RTE s.5(3) / NCPCR COMPLIANCE STATEMENT:",
      `   (a) Our Client strictly adheres to Section 5(3) of the Right of Children to Free and Compulsory Education Act, 2009, NCPCR Child Protection Guidelines, and binding High Court mandates. ${form.tcStatusNote}`,
      "   (b) Nothing in this Notice shall ever be construed as threatening expulsion, withholding of Transfer Certificate (TC), marksheets, admit cards, or board roll numbers, nor shall any recovery step be communicated to or executed against the minor student. The present demand is purely a civil contractual recovery addressed strictly to you as earning Parents / Guardians.",
      "",
      "2. FEE ARREARS & LEDGER SCHEDULE:",
      `   Despite repeated courtesy reminders from the School Accounts Office, an undisputed sum of ₹${formatINR(form.principalAmount)}/- remains overdue against ${form.studentReference} as detailed below:`,
      ...form.feeSchedule.split("\n").map((l) => `   ${l}`),
      "",
    ];

    let clauseNum = 3;

    if (form.includeContractUndertaking) {
      lines.push(
        `${clauseNum}. PARENT CONTRACTUAL LIABILITY & ENROLLMENT UNDERTAKING:`,
        "   At the time of admission/enrollment, you voluntarily executed the School Admission & Financial Undertaking agreeing to remit tuition, activity, transport, and/or hostel charges on due dates under Sections 10, 63, and 73 of the Indian Contract Act, 1872. Multiple High Courts, while protecting the child's TC rights, have consistently affirmed the Trust's independent civil right to recover fee arrears from defaulting parents.",
        ""
      );
      clauseNum++;
    }

    if (form.includeChequeBounceClause) {
      lines.push(
        `${clauseNum}. STATUTORY DEMAND U/S 138 NI ACT, 1881 / SECTION 25 PSS ACT, 2007:`,
        `   The instrument tendered by you towards fee discharge (${form.chequeDetails}) has been returned unpaid. You are hereby called upon to make payment of the cheque/ECS amount within 15 (fifteen) days of receipt of this statutory notice, failing which our Client shall institute criminal prosecution under Section 138 NI Act (or Section 25 PSS Act for NACH/ECS mandates) and seek 20% interim compensation under Section 143A solely against you as Drawer.`,
        ""
      );
      clauseNum++;
    }

    if (form.includeOrder37Clause) {
      lines.push(
        `${clauseNum}. ORDER XXXVII CPC SUMMARY SUIT & ELECTRONIC EVIDENCE (BSA 2023 s.63):`,
        `   Because the fee schedule and signed Admission Undertaking constitute a written contract for a liquidated sum, our Client reserves the right to institute an Order XXXVII CPC Summary Suit before the competent Civil Court, relying upon ERP fee ledgers, admission forms, and delivery logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, together with interest @ ${form.interestRate}% p.a. and legal costs.`,
        ""
      );
      clauseNum++;
    }

    lines.push(
      `${clauseNum}. DEMAND & ${form.cureDays}-DAY CURE WINDOW:`,
      `   You are hereby called upon to remit the total outstanding sum of ₹${formatINR(form.principalAmount)}/- (plus applicable contractual interest @ ${form.interestRate}% p.a. where applicable) within ${form.cureDays} days of receipt of this Notice via NEFT/RTGS/UPI to our Client's official Trust bank account and share the UTR reference at ${form.institutionEmail}.`,
      "",
      "   Upon failure to remit or propose a structured written settlement within the aforesaid period, our Client shall initiate appropriate civil recovery proceedings strictly against you at your sole risk as to costs and consequences.",
      "",
      "Yours faithfully,",
      "",
      `${form.advocateName}`,
      `Advocate (Enrolment No. ${form.advocateEnrolment})`,
      `${form.advocateOffice}`,
      "Counsel for the Institution / Educational Trust",
    );

    return lines.join("\n");
  }, [form]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-6">
      {/* Preset Switcher */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Select Education Recovery Scenario
          </span>
          <span className="text-[11px] text-slate-400">
            Updates live draft &amp; child-safe clauses below
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {PRESETS.map((preset) => {
            const active = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset)}
                className={`text-left p-3 rounded-xl border transition-all ${
                  active
                    ? "bg-[#DC2626] border-[#DC2626] text-white shadow-md"
                    : "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-500"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 ${
                    active ? "bg-white/20 text-white" : "bg-slate-900 text-red-400"
                  }`}
                >
                  {preset.badge}
                </span>
                <span className="block text-xs font-bold leading-snug">{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form + Preview Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Editable Fields */}
        <div className="xl:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Customize School &amp; Parent Details
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              RTE-Safe
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                School / University Name
              </label>
              <input
                type="text"
                value={form.institutionName}
                onChange={(e) => updateField("institutionName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Registered Trust / Society / Sec. 8 Entity
              </label>
              <input
                type="text"
                value={form.trustEntity}
                onChange={(e) => updateField("trustEntity", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Parent / Guardian Names (Strictly Addressed To)
              </label>
              <input
                type="text"
                value={form.parentNames}
                onChange={(e) => updateField("parentNames", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Student Admission / Roll Reference (Confidential)
              </label>
              <input
                type="text"
                value={form.studentReference}
                onChange={(e) => updateField("studentReference", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                TC / Academic Rights Compliance Statement
              </label>
              <textarea
                rows={2}
                value={form.tcStatusNote}
                onChange={(e) => updateField("tcStatusNote", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                ERP Fee Arrears Schedule (Invoices &amp; Terms)
              </label>
              <textarea
                rows={3}
                value={form.feeSchedule}
                onChange={(e) => updateField("feeSchedule", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none font-mono text-[11px]"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Arrears (₹)</label>
                <input
                  type="number"
                  value={form.principalAmount}
                  onChange={(e) => updateField("principalAmount", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Interest %</label>
                <input
                  type="number"
                  step="0.5"
                  value={form.interestRate}
                  onChange={(e) => updateField("interestRate", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Cure Days</label>
                <input
                  type="number"
                  value={form.cureDays}
                  onChange={(e) => updateField("cureDays", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <span className="block font-bold text-slate-700">Statutory Clauses Included:</span>
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeContractUndertaking}
                  onChange={(e) => updateField("includeContractUndertaking", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span>Parent Admission Fee Undertaking (Contract Act)</span>
              </label>
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeOrder37Clause}
                  onChange={(e) => updateField("includeOrder37Clause", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span>Order XXXVII CPC Summary Suit &amp; BSA s.63</span>
              </label>
              <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeChequeBounceClause}
                  onChange={(e) => updateField("includeChequeBounceClause", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span>NI Act s.138 / PSS Act s.25 Dishonour Clause</span>
              </label>
            </div>
          </div>
        </div>

        {/* Live Notice Preview */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Live Advocate-Vetted Draft Preview
              </span>
              <span className="text-[11px] text-slate-300">
                Child-Insulated · Zero Threat to TC / Marksheet / Board Roll No.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
              >
                {copied ? "Copied Notice!" : "Copy Word / Text"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          <pre className="p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto bg-slate-50/50">
            {generatedNoticeText}
          </pre>
        </div>
      </div>
    </div>
  );
}
