"use client";

import React, { useMemo, useState } from "react";

type DocTab = "form3" | "form4" | "computation" | "resolution";

interface IbcPreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorCin: string;
  creditorAddress: string;
  creditorEmail: string;
  signatoryName: string;
  signatoryDesignation: string;
  debtorName: string;
  debtorCin: string;
  debtorAddress: string;
  debtorKmpEmail: string;
  principalAmount: number;
  interestAmount: number;
  interestClause: string;
  defaultDate: string;
  invoiceRefs: string;
  contractRef: string;
  noticeDate: string;
  boardMeetingDate: string;
}

const PRESETS: IbcPreset[] = [
  {
    id: "auto-tier1-supply",
    label: "Industrial Component Supplier vs Listed Auto OEM (₹1.48 Cr)",
    badge: "Manufacturing Supply",
    creditorName: "Vanguard Precision Castings Private Limited",
    creditorCin: "U27109MH2015PTC264812",
    creditorAddress: "Plot E-42, Chakan MIDC Phase II, Pune, Maharashtra - 410501",
    creditorEmail: "legal@vanguardcastings.in",
    signatoryName: "Rajeshwar Kulkarni",
    signatoryDesignation: "Chief Financial Officer & Authorised Signatory",
    debtorName: "Apex Mobility Drivetrain Limited",
    debtorCin: "L34100DL2008PLC178904",
    debtorAddress: "Tower B, 9th Floor, Corporate Park, Okhla Phase III, New Delhi - 110020",
    debtorKmpEmail: "cs@apexdrivetrain.com, cfo@apexdrivetrain.com",
    principalAmount: 12650000,
    interestAmount: 2150000,
    interestClause: "18% p.a. simple interest per Clause 7.3 of Master Supply Agreement dated 14.03.2024",
    defaultDate: "18 July 2025",
    invoiceRefs: "VPC/25-26/0184 (₹44.20L), VPC/25-26/0209 (₹41.80L), VPC/25-26/0231 (₹40.50L)",
    contractRef: "Master Supply Agreement dated 14.03.2024 & Purchase Orders PO-8821 to PO-8849",
    noticeDate: "20 November 2026",
    boardMeetingDate: "12 November 2026",
  },
  {
    id: "epc-subcontractor",
    label: "EPC Infra Subcontractor vs Infrastructure Developer (₹2.14 Cr)",
    badge: "EPC & Infra RA Bills",
    creditorName: "Surya Earthworks & Civil Infrastructure LLP",
    creditorCin: "AAK-8824",
    creditorAddress: "402, Trade Centre, SG Highway, Ahmedabad, Gujarat - 380054",
    creditorEmail: "claims@suryaearthworks.co.in",
    signatoryName: "Devendra Patel",
    signatoryDesignation: "Designated Partner",
    debtorName: "Navaratna Highway Concessions Private Limited",
    debtorCin: "U45203GJ2017PTC098211",
    debtorAddress: "8th Floor, Infra Hub, BKC, Bandra East, Mumbai, Maharashtra - 400051",
    debtorKmpEmail: "companysecretary@navaratnahighways.com, finance@navaratnahighways.com",
    principalAmount: 18500000,
    interestAmount: 2900000,
    interestClause: "15% p.a. contractual interest on certified RA Bills per Sub-Contract Clause 14.2",
    defaultDate: "05 September 2025",
    invoiceRefs: "Certified RA Bill No. 11 (₹92.50L) & RA Bill No. 12 (₹92.50L) with Joint Measurement Sheets",
    contractRef: "EPC Sub-Contract Agreement NH-48/PKG-3 dated 09.01.2024",
    noticeDate: "20 November 2026",
    boardMeetingDate: "14 November 2026",
  },
  {
    id: "saas-cloud-enterprise",
    label: "Enterprise Cloud & SaaS Vendor vs Retail Conglomerate (₹1.18 Cr)",
    badge: "B2B SaaS / Managed IT",
    creditorName: "StrataCloud Enterprise Systems Private Limited",
    creditorCin: "U72900KA2019PTC124509",
    creditorAddress: "Level 6, Prestige Tech Park, Outer Ring Road, Bengaluru, Karnataka - 560103",
    creditorEmail: "gc@stratacloud.io",
    signatoryName: "Meera Subramanian",
    signatoryDesignation: "General Counsel & Authorised Representative",
    debtorName: "Bharati OmniRetail Chains Limited",
    debtorCin: "U52100MH2014PLC255901",
    debtorAddress: "12th Floor, Peninsula Business Park, Lower Parel, Mumbai, Maharashtra - 400013",
    debtorKmpEmail: "legal@bharatiomniretail.com, cs@bharatiomniretail.com",
    principalAmount: 10400000,
    interestAmount: 1400000,
    interestClause: "1.5% per month late fee per Master Subscription Agreement Section 5.4",
    defaultDate: "01 October 2025",
    invoiceRefs: "SC/25-26/INV-904 (₹52.00L) & SC/25-26/INV-988 (₹52.00L) with Usage & SLA Logs",
    contractRef: "Enterprise Master Subscription Agreement dated 22.02.2024",
    noticeDate: "20 November 2026",
    boardMeetingDate: "16 November 2026",
  },
];

function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function IbcNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [activeTab, setActiveTab] = useState<DocTab>("form3");
  const [copied, setCopied] = useState(false);

  const [creditorName, setCreditorName] = useState(PRESETS[0].creditorName);
  const [creditorCin, setCreditorCin] = useState(PRESETS[0].creditorCin);
  const [creditorAddress, setCreditorAddress] = useState(PRESETS[0].creditorAddress);
  const [creditorEmail, setCreditorEmail] = useState(PRESETS[0].creditorEmail);
  const [signatoryName, setSignatoryName] = useState(PRESETS[0].signatoryName);
  const [signatoryDesignation, setSignatoryDesignation] = useState(
    PRESETS[0].signatoryDesignation
  );

  const [debtorName, setDebtorName] = useState(PRESETS[0].debtorName);
  const [debtorCin, setDebtorCin] = useState(PRESETS[0].debtorCin);
  const [debtorAddress, setDebtorAddress] = useState(PRESETS[0].debtorAddress);
  const [debtorKmpEmail, setDebtorKmpEmail] = useState(PRESETS[0].debtorKmpEmail);

  const [principalAmount, setPrincipalAmount] = useState<number>(PRESETS[0].principalAmount);
  const [interestAmount, setInterestAmount] = useState<number>(PRESETS[0].interestAmount);
  const [interestClause, setInterestClause] = useState(PRESETS[0].interestClause);
  const [defaultDate, setDefaultDate] = useState(PRESETS[0].defaultDate);
  const [invoiceRefs, setInvoiceRefs] = useState(PRESETS[0].invoiceRefs);
  const [contractRef, setContractRef] = useState(PRESETS[0].contractRef);
  const [noticeDate, setNoticeDate] = useState(PRESETS[0].noticeDate);
  const [boardMeetingDate, setBoardMeetingDate] = useState(PRESETS[0].boardMeetingDate);

  const totalDefault = useMemo(
    () => (Number(principalAmount) || 0) + (Number(interestAmount) || 0),
    [principalAmount, interestAmount]
  );
  const meetsThreshold = totalDefault >= 10000000;

  const handlePresetChange = (presetId: string) => {
    const p = PRESETS.find((x) => x.id === presetId);
    if (!p) return;
    setSelectedPresetId(p.id);
    setCreditorName(p.creditorName);
    setCreditorCin(p.creditorCin);
    setCreditorAddress(p.creditorAddress);
    setCreditorEmail(p.creditorEmail);
    setSignatoryName(p.signatoryName);
    setSignatoryDesignation(p.signatoryDesignation);
    setDebtorName(p.debtorName);
    setDebtorCin(p.debtorCin);
    setDebtorAddress(p.debtorAddress);
    setDebtorKmpEmail(p.debtorKmpEmail);
    setPrincipalAmount(p.principalAmount);
    setInterestAmount(p.interestAmount);
    setInterestClause(p.interestClause);
    setDefaultDate(p.defaultDate);
    setInvoiceRefs(p.invoiceRefs);
    setContractRef(p.contractRef);
    setNoticeDate(p.noticeDate);
    setBoardMeetingDate(p.boardMeetingDate);
  };

  const documentText = useMemo(() => {
    if (activeTab === "form3") {
      return `FORM 3
[See clause (a) of sub-rule (1) of rule 5]
FORM OF DEMAND NOTICE / INVOICE DEMANDING PAYMENT UNDER THE INSOLVENCY AND BANKRUPTCY CODE, 2016
(Under Rule 5 of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016)

Date: ${noticeDate}

To,
${debtorName}
(CIN: ${debtorCin})
Registered Office: ${debtorAddress}
Email (KMP / Whole-Time Director / Company Secretary): ${debtorKmpEmail}

From,
${creditorName}
(CIN/LLPIN: ${creditorCin})
Registered Office: ${creditorAddress}
Email: ${creditorEmail}

Subject: Demand Notice demanding payment in respect of unpaid operational debt due from ${debtorName} under the Insolvency and Bankruptcy Code, 2016.

Madam / Sir,

1. This letter is a Demand Notice under Section 8 of the Insolvency and Bankruptcy Code, 2016 ("Code") read with Rule 5(1)(a) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 demanding payment of an unpaid operational debt due from ${debtorName}.

2. PARTICULARS OF OPERATIONAL DEBT:
(i) Total amount of debt: ${formatINR(totalDefault)} (Principal: ${formatINR(principalAmount)} + Contractual Interest: ${formatINR(interestAmount)}).
(ii) Details of transactions on account of which debt fell due: ${contractRef}.
(iii) Date from which such debt fell due (Date of Default): ${defaultDate} (Confirming that the default is outside the excluded Section 10A suspension period of 25.03.2020 to 24.03.2021).
(iv) Amount claimed to be in default and the date on which the default occurred (attach the workings for computation of amount and dates of default in tabular form): ${formatINR(totalDefault)} as per Annexure-A (Computation of Default Working Sheet).
(v) Particulars of security held, if any, the date of its creation, its estimated value as per the creditor: Nil / Unsecured Operational Debt.
(vi) Details of retention of title arrangements (if any) in respect of goods to which the operational debt refers: Nil.
(vii) Record of default with the Information Utility (NeSL), if any: Filed / Under Filing in Form C.
(viii) Provision of law, contract or other document under which debt has become due: Section 5(20), Section 5(21) & Section 8 of IBC, 2016; ${contractRef}; Interest basis: ${interestClause}.
(ix) List of documents attached to this application in order to prove the existence of operational debt and the amount in default:
    a) Annexure-A: Tabular Computation of Default Working Sheet & Interest Schedule;
    b) Annexure-B: Copies of Unpaid Invoices (${invoiceRefs}), Purchase Orders, Delivery Challans / E-Way Bills / Certified RA Bills;
    c) Annexure-C: Certified copy of Board Resolution dated ${boardMeetingDate} authorising ${signatoryName} (${signatoryDesignation});
    d) Annexure-D: Statement of Bank Account confirming non-receipt + BSA 2023 Section 63 Certificate for ERP Ledger & Emails.

3. If you dispute the existence or amount of unpaid operational debt, please provide the pending suit or arbitration proceedings filed before receipt of this notice, or record of dispute, within TEN (10) DAYS of the receipt of this notice as mandated under Section 8(2) of the Code.

4. If you believe that the debt has been repaid before the receipt of this notice, please demonstrate such repayment by sending an attested copy of the record of electronic transfer or encashment of cheque within TEN (10) DAYS of receipt.

5. The undersigned is the operational creditor / person authorised to act on behalf of the operational creditor vide Board Resolution dated ${boardMeetingDate} (copy enclosed).

6. Failure to pay the unpaid operational debt or demonstrate a genuine pre-existing dispute within 10 days will constrain the Operational Creditor to initiate Corporate Insolvency Resolution Process (CIRP) against ${debtorName} before the Hon'ble National Company Law Tribunal (NCLT) under Section 9 of the Code without further reference.

Yours faithfully,

_______________________________
${signatoryName}
${signatoryDesignation}
For ${creditorName}`;
    }

    if (activeTab === "form4") {
      return `FORM 4
[See clause (b) of sub-rule (1) of rule 5]
FORM OF NOTICE WITH WHICH INVOICE DEMANDING PAYMENT IS TO BE ATTACHED
(Under Rule 5(1)(b) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016)

Date: ${noticeDate}

To,
${debtorName}
(CIN: ${debtorCin})
Registered Office: ${debtorAddress}
Email (KMP / Whole-Time Director / Company Secretary): ${debtorKmpEmail}

From,
${creditorName}
(CIN/LLPIN: ${creditorCin})
Registered Office: ${creditorAddress}

Subject: Notice attached to unpaid invoices demanding payment under Section 8 of the Insolvency and Bankruptcy Code, 2016 read with Rule 5(1)(b).

Madam / Sir,

1. We hereby serve upon you the enclosed copies of the unpaid tax invoices demanding payment in respect of goods supplied / services rendered under ${contractRef}, totalling ${formatINR(totalDefault)} (Principal: ${formatINR(principalAmount)} + Contractual Interest: ${formatINR(interestAmount)} under ${interestClause}), which fell into default on ${defaultDate}.

2. Invoice Particulars Enclosed Herewith:
${invoiceRefs}

3. Please find enclosed herewith:
   - Certified copies of the above-mentioned unpaid invoices demanding payment;
   - Tabular Computation of Default Working Sheet (Annexure-A);
   - Board Resolution dated ${boardMeetingDate} authorising the undersigned (Annexure-B).

4. Take notice that you are requested to unconditionally pay the unpaid operational debt in full within TEN (10) DAYS from the receipt of this notice, failing which ${creditorName} shall initiate Corporate Insolvency Resolution Process (CIRP) under Section 9 of the Insolvency and Bankruptcy Code, 2016 before the jurisdictional National Company Law Tribunal (NCLT).

Yours faithfully,

_______________________________
${signatoryName}
${signatoryDesignation}
For ${creditorName}`;
    }

    if (activeTab === "computation") {
      return `ANNEXURE-A: TABULAR COMPUTATION OF AMOUNT & DATES OF DEFAULT
[Mandatory Requirement under Item 4 of Form 3, Rule 5(1)(a) & Section 9(3) IBC]

Operational Creditor : ${creditorName} (${creditorCin})
Corporate Debtor     : ${debtorName} (${debtorCin})
Underlying Contract  : ${contractRef}
Section 10A Check    : Default Date (${defaultDate}) is OUTSIDE 25.03.2020 – 24.03.2021 suspension window.

------------------------------------------------------------------------------------------------
S.No | Invoice / RA Bill Reference       | Due Date       | Principal (INR) | Interest (INR) | Total Default (INR)
------------------------------------------------------------------------------------------------
1    | ${invoiceRefs}
     | Default Trigger Date: ${defaultDate}
     | Principal Due                     | ${formatINR(principalAmount)} | ${formatINR(interestAmount)} | ${formatINR(totalDefault)}
------------------------------------------------------------------------------------------------
TOTAL OPERATIONAL DEBT IN DEFAULT (SEC 4 IBC FLOOR >= ₹1,00,00,000): ${formatINR(totalDefault)}
------------------------------------------------------------------------------------------------

Interest Basis: ${interestClause}
Threshold Status: ${meetsThreshold ? "COMPLIANT (>= ₹1,00,00,000 Statutory Minimum under Section 4 IBC)" : "BELOW ₹1,00,00,000 — Club additional overdue invoices or contractual interest before NCLT Section 9 filing"}

Certified True & Correct as per Books of Account (with BSA 2023 Section 63 ERP Ledger Certificate):

_______________________________
${signatoryName}
${signatoryDesignation}
For ${creditorName}
Date: ${noticeDate}`;
    }

    return `CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF ${creditorName.toUpperCase()}
HELD ON ${boardMeetingDate.toUpperCase()} AT THE REGISTERED OFFICE OF THE COMPANY

AUTHORISATION UNDER SECTION 179 OF THE COMPANIES ACT, 2013 READ WITH SECTION 8 & SECTION 9 OF THE INSOLVENCY AND BANKRUPTCY CODE, 2016

"RESOLVED THAT pursuant to the provisions of Section 179 of the Companies Act, 2013 and all other applicable provisions, consent of the Board of Directors be and is hereby accorded to initiate recovery and insolvency proceedings under the Insolvency and Bankruptcy Code, 2016 ("Code") against ${debtorName} (CIN: ${debtorCin}) for recovery of the unpaid operational debt amounting to ${formatINR(totalDefault)} (comprising Principal of ${formatINR(principalAmount)} and Interest of ${formatINR(interestAmount)}).

RESOLVED FURTHER THAT Mr./Ms. ${signatoryName}, ${signatoryDesignation} of the Company, be and is hereby severally authorised on behalf of the Company to:
(a) Issue, sign, verify, and serve the statutory Demand Notice in Form 3 and/or Form 4 under Section 8 of the Code read with Rule 5 of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016;
(b) Engage and instruct Advocates / Insolvency Professionals (including issuing authority letters under Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd. principles) to serve the Demand Notice by Registered Post, Speed Post, and Electronic Mail;
(c) File, sign, verify, and affirm the Application under Section 9 of the Code in Form 5 before the Hon'ble National Company Law Tribunal (NCLT), swear affidavits, file NeSL Form C default records, and represent the Company in all connected proceedings; and
(d) Do all such acts, deeds, and things as may be necessary or incidental to give effect to this resolution.

RESOLVED FURTHER THAT a certified true copy of this resolution be furnished to the Corporate Debtor, the Hon'ble NCLT, and all concerned authorities under the signature of any Director / Company Secretary of the Company."

CERTIFIED TRUE COPY
For ${creditorName}

_______________________________
Director / Company Secretary
DIN / Membership No.: [Insert DIN / ACS-FCS No.]
Date: ${noticeDate}`;
  }, [
    activeTab,
    noticeDate,
    debtorName,
    debtorCin,
    debtorAddress,
    debtorKmpEmail,
    creditorName,
    creditorCin,
    creditorAddress,
    creditorEmail,
    totalDefault,
    principalAmount,
    interestAmount,
    contractRef,
    defaultDate,
    interestClause,
    invoiceRefs,
    boardMeetingDate,
    signatoryName,
    signatoryDesignation,
    meetsThreshold,
  ]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(documentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>IBC Section 8 ${activeTab.toUpperCase()}</title></head>
<body style="font-family: 'Times New Roman', serif; font-size: 11.5pt; line-height: 1.5; white-space: pre-wrap;">
${documentText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `IBC-Section-8-${activeTab}-${debtorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=850,height=950");
    if (!printWindow) return;
    printWindow.document.write(
      `<html><head><title>IBC Section 8 Pack</title><style>body{font-family:Georgia,serif;padding:36px;line-height:1.55;font-size:13px;white-space:pre-wrap;color:#111;}</style></head><body>${documentText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</body></html>`
    );
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-6">
      {/* Preset Selector */}
      <div>
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-2">
          Step 1: Load Corporate Industry Preset or Customize Below
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {PRESETS.map((p) => {
            const active = selectedPresetId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handlePresetChange(p.id)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  active
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                    active ? "bg-[#DC2626] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {p.badge}
                </span>
                <p className="text-xs font-semibold leading-snug">{p.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Document Tabs + Threshold Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-y border-slate-200 py-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "form3", label: "1. Form 3 (Demand Notice)" },
              { id: "form4", label: "2. Form 4 (With Invoice)" },
              { id: "computation", label: "3. Computation Sheet" },
              { id: "resolution", label: "4. Board Resolution" },
            ] as { id: DocTab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
            meetsThreshold
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : "bg-amber-50 border-amber-200 text-amber-700"
          }`}
        >
          Total Claim: {formatINR(totalDefault)}{" "}
          {meetsThreshold ? "(>= ₹1 Cr Eligible)" : "(Below ₹1 Cr Floor)"}
        </div>
      </div>

      {/* Editable Grid + Live Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Form Inputs */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            Customize Statutory Particulars
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Operational Creditor Name
              </label>
              <input
                type="text"
                value={creditorName}
                onChange={(e) => setCreditorName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Creditor CIN / LLPIN
              </label>
              <input
                type="text"
                value={creditorCin}
                onChange={(e) => setCreditorCin(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Authorised Signatory
              </label>
              <input
                type="text"
                value={signatoryName}
                onChange={(e) => setSignatoryName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Board Resolution Date
              </label>
              <input
                type="text"
                value={boardMeetingDate}
                onChange={(e) => setBoardMeetingDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Corporate Debtor Name
              </label>
              <input
                type="text"
                value={debtorName}
                onChange={(e) => setDebtorName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Debtor KMP / CS Email
              </label>
              <input
                type="text"
                value={debtorKmpEmail}
                onChange={(e) => setDebtorKmpEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Principal Default (₹)
              </label>
              <input
                type="number"
                min={0}
                value={principalAmount}
                onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Contractual Interest (₹)
              </label>
              <input
                type="number"
                min={0}
                value={interestAmount}
                onChange={(e) => setInterestAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Date of Default
              </label>
              <input
                type="text"
                value={defaultDate}
                onChange={(e) => setDefaultDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Notice Date
              </label>
              <input
                type="text"
                value={noticeDate}
                onChange={(e) => setNoticeDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">
              Unpaid Invoice / RA Bill Numbers
            </label>
            <textarea
              rows={2}
              value={invoiceRefs}
              onChange={(e) => setInvoiceRefs(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">
              Contract / PO Reference &amp; Interest Basis
            </label>
            <textarea
              rows={2}
              value={contractRef}
              onChange={(e) => setContractRef(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            />
          </div>
        </div>

        {/* Live Document Preview */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold tracking-wide">
              Live Rule 5 Draft Preview ({activeTab.toUpperCase()})
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copied ? "Copied!" : "Copy Text"}
              </button>
              <button
                type="button"
                onClick={handleDownloadDoc}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Download .doc (Word)
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Print / PDF
              </button>
            </div>
          </div>
          <pre className="p-4 sm:p-5 text-xs leading-relaxed text-slate-800 font-mono whitespace-pre-wrap max-h-[540px] overflow-y-auto bg-white">
            {documentText}
          </pre>
        </div>
      </div>
    </div>
  );
}
