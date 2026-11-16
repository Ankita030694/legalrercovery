"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface TemplatePreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorUdyam: string;
  creditorCategory: "Micro" | "Small";
  creditorGSTIN: string;
  creditorAddress: string;
  creditorEmail: string;
  creditorPhone: string;
  debtorName: string;
  debtorSignatory: string;
  debtorDesignation: string;
  debtorGSTIN: string;
  debtorAddress: string;
  debtorEmail: string;
  auditorFirm: string;
  auditorEmail: string;
  poReference: string;
  invoiceNumbers: string;
  invoiceDates: string;
  principalAmount: number;
  creditDays: number;
  daysDelayed: number;
  rbiBankRate: number; // e.g. 6.75%
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: TemplatePreset[] = [
  {
    id: "auto-ancillary-oem",
    label: "Auto-Ancillary Stamping Unit to Tier-1 OEM Buyer (₹38.40 Lakh Overdue)",
    badge: "Auto Component OEM",
    creditorName: "Apex Precision Stampings Private Limited",
    creditorUdyam: "UDYAM-MH-19-0028491",
    creditorCategory: "Small",
    creditorGSTIN: "27AABCA4419M1ZP",
    creditorAddress: "Plot C-14, MIDC Industrial Area, Bhosari, Pune, Maharashtra - 411026",
    creditorEmail: "finance@apexstampings.com",
    creditorPhone: "+91 20 2712 4490",
    debtorName: "Bharat Mobility Systems Limited",
    debtorSignatory: "Mr. Sanjeev Kapoor",
    debtorDesignation: "Chief Financial Officer & Executive Director",
    debtorGSTIN: "24AABCB9124L1ZZ",
    debtorAddress: "Automotive Growth Hub, Sector 10, GIDC Industrial Estate, Sanand, Gujarat - 382110",
    debtorEmail: "cfo@bharatmobility.com, accounts.payable@bharatmobility.com",
    auditorFirm: "M/s Singhal & Narang LLP, Statutory Auditors",
    auditorEmail: "audit.engagement@singhalnarang.com",
    poReference: "PO-BMSL/2026/OEM-0842 (Precision Brake Assembly Stampings)",
    invoiceNumbers: "APS/26-27/0412, APS/26-27/0448 & APS/26-27/0491",
    invoiceDates: "18 June 2026, 04 July 2026, and 22 August 2026",
    principalAmount: 3840000,
    creditDays: 45,
    daysDelayed: 114,
    rbiBankRate: 6.75,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/43BH/2026/104",
    noticeDate: "16 November 2026",
  },
  {
    id: "industrial-machinery-spares",
    label: "Industrial Machinery Manufacturer to Chemical Plant (₹24.80 Lakh Overdue)",
    badge: "Plant Spares & Valves",
    creditorName: "ValvTech Industrial Flow Solutions LLP",
    creditorUdyam: "UDYAM-GJ-01-0078231",
    creditorCategory: "Micro",
    creditorGSTIN: "24AAGCV1128F1Z8",
    creditorAddress: "Survey 114/2, Makarpura GIDC, Vadodara, Gujarat - 390010",
    creditorEmail: "accounts@valvtechindia.com",
    creditorPhone: "+91 265 264 8812",
    debtorName: "ChemiSynth Polymers India Private Limited",
    debtorSignatory: "Mr. Rakesh Jhunjhunwala",
    debtorDesignation: "Director - Finance & Supply Chain",
    debtorGSTIN: "27AAACC4918P1ZC",
    debtorAddress: "Express Towers, 14th Floor, Nariman Point, Mumbai, Maharashtra - 400021",
    debtorEmail: "finance@chemisynth.in, ap@chemisynth.in",
    auditorFirm: "M/s Deloitte H & B Associates (Statutory Auditors)",
    auditorEmail: "statutory.audit@dhbassociates.in",
    poReference: "PO-CSPI/VALVES/2026/099 (High-Pressure Teflon Lined Valves)",
    invoiceNumbers: "VT/INV/2026/89 & VT/INV/2026/104",
    invoiceDates: "28 July 2026 and 14 August 2026",
    principalAmount: 2480000,
    creditDays: 45,
    daysDelayed: 79,
    rbiBankRate: 6.75,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/43BH/2026/105",
    noticeDate: "16 November 2026",
  },
  {
    id: "cnc-precision-jobwork",
    label: "CNC Precision Job-Work Unit to Heavy Engineering Unit (₹14.50 Lakh Overdue)",
    badge: "Precision Job-Work",
    creditorName: "Matrix CNC Machining Center",
    creditorUdyam: "UDYAM-KA-03-0091823",
    creditorCategory: "Micro",
    creditorGSTIN: "29AALPM4401C1ZX",
    creditorAddress: "Peenya Industrial Area, 3rd Phase, Bengaluru, Karnataka - 560058",
    creditorEmail: "billing@matrixcnctech.com",
    creditorPhone: "+91 80 4122 9901",
    debtorName: "Zenith Heavy Heavy Gears Private Limited",
    debtorSignatory: "Mr. K. R. Ramanathan",
    debtorDesignation: "Vice President - Operations & Finance",
    debtorGSTIN: "29AACCZ8810K1ZV",
    debtorAddress: "Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka - 560099",
    debtorEmail: "cfo@zenithgears.com, finance@zenithgears.com",
    auditorFirm: "M/s K. Sundaram & Co, Chartered Accountants",
    auditorEmail: "ksundaram.audit@gmail.com",
    poReference: "WO-ZHG/CNC/26/184 (Gear Blank Turning & Grinding Job-Work)",
    invoiceNumbers: "MCNC/JW/26/112 & MCNC/JW/26/128",
    invoiceDates: "10 August 2026 and 29 August 2026",
    principalAmount: 1450000,
    creditDays: 15,
    daysDelayed: 64,
    rbiBankRate: 6.75,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/43BH/2026/106",
    noticeDate: "16 November 2026",
  },
];

export default function Section43bhWorkspace() {
  const [activeStage, setActiveStage] = useState<"stage1" | "stage2">("stage1");
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);

  // Form State initialized from Preset 0
  const [creditorName, setCreditorName] = useState(PRESETS[0].creditorName);
  const [creditorUdyam, setCreditorUdyam] = useState(PRESETS[0].creditorUdyam);
  const [creditorCategory, setCreditorCategory] = useState<"Micro" | "Small">(PRESETS[0].creditorCategory);
  const [creditorGSTIN, setCreditorGSTIN] = useState(PRESETS[0].creditorGSTIN);
  const [creditorAddress, setCreditorAddress] = useState(PRESETS[0].creditorAddress);
  const [creditorEmail, setCreditorEmail] = useState(PRESETS[0].creditorEmail);
  const [creditorPhone, setCreditorPhone] = useState(PRESETS[0].creditorPhone);

  const [debtorName, setDebtorName] = useState(PRESETS[0].debtorName);
  const [debtorSignatory, setDebtorSignatory] = useState(PRESETS[0].debtorSignatory);
  const [debtorDesignation, setDebtorDesignation] = useState(PRESETS[0].debtorDesignation);
  const [debtorGSTIN, setDebtorGSTIN] = useState(PRESETS[0].debtorGSTIN);
  const [debtorAddress, setDebtorAddress] = useState(PRESETS[0].debtorAddress);
  const [debtorEmail, setDebtorEmail] = useState(PRESETS[0].debtorEmail);
  const [auditorFirm, setAuditorFirm] = useState(PRESETS[0].auditorFirm);
  const [auditorEmail, setAuditorEmail] = useState(PRESETS[0].auditorEmail);

  const [poReference, setPoReference] = useState(PRESETS[0].poReference);
  const [invoiceNumbers, setInvoiceNumbers] = useState(PRESETS[0].invoiceNumbers);
  const [invoiceDates, setInvoiceDates] = useState(PRESETS[0].invoiceDates);
  const [principalAmount, setPrincipalAmount] = useState<number>(PRESETS[0].principalAmount);
  const [creditDays, setCreditDays] = useState<number>(PRESETS[0].creditDays);
  const [daysDelayed, setDaysDelayed] = useState<number>(PRESETS[0].daysDelayed);
  const [rbiBankRate, setRbiBankRate] = useState<number>(PRESETS[0].rbiBankRate);

  // Statutory Clause Toggles
  const [enableSection43bhTaxHit, setEnableSection43bhTaxHit] = useState(true);
  const [enableSection23Disallowance, setEnableSection23Disallowance] = useState(true);
  const [enableClause22Form3CD, setEnableClause22Form3CD] = useState(true);
  const [enableSamadhaanWarning, setEnableSamadhaanWarning] = useState(true);
  const [enableBsa63Cert, setEnableBsa63Cert] = useState(true);

  const [advocateName, setAdvocateName] = useState(PRESETS[0].advocateName);
  const [advocateEnrolment, setAdvocateEnrolment] = useState(PRESETS[0].advocateEnrolment);
  const [advocateOffice, setAdvocateOffice] = useState(PRESETS[0].advocateOffice);
  const [noticeRef, setNoticeRef] = useState(PRESETS[0].noticeRef);
  const [noticeDate, setNoticeDate] = useState(PRESETS[0].noticeDate);

  const [copySuccess, setCopySuccess] = useState(false);

  // Load Preset
  const handleSelectPreset = (presetId: string) => {
    const p = PRESETS.find((item) => item.id === presetId);
    if (!p) return;
    setSelectedPresetId(p.id);
    setCreditorName(p.creditorName);
    setCreditorUdyam(p.creditorUdyam);
    setCreditorCategory(p.creditorCategory);
    setCreditorGSTIN(p.creditorGSTIN);
    setCreditorAddress(p.creditorAddress);
    setCreditorEmail(p.creditorEmail);
    setCreditorPhone(p.creditorPhone);
    setDebtorName(p.debtorName);
    setDebtorSignatory(p.debtorSignatory);
    setDebtorDesignation(p.debtorDesignation);
    setDebtorGSTIN(p.debtorGSTIN);
    setDebtorAddress(p.debtorAddress);
    setDebtorEmail(p.debtorEmail);
    setAuditorFirm(p.auditorFirm);
    setAuditorEmail(p.auditorEmail);
    setPoReference(p.poReference);
    setInvoiceNumbers(p.invoiceNumbers);
    setInvoiceDates(p.invoiceDates);
    setPrincipalAmount(p.principalAmount);
    setCreditDays(p.creditDays);
    setDaysDelayed(p.daysDelayed);
    setRbiBankRate(p.rbiBankRate);
    setAdvocateName(p.advocateName);
    setAdvocateEnrolment(p.advocateEnrolment);
    setAdvocateOffice(p.advocateOffice);
    setNoticeRef(p.noticeRef);
    setNoticeDate(p.noticeDate);
  };

  // Statutory 3x RBI Compound Interest Calculation (Monthly rests per Section 16 MSMED Act)
  const financialSummary = useMemo(() => {
    const rateAnnual = rbiBankRate * 3; // e.g., 6.75% * 3 = 20.25% p.a.
    const monthlyRate = rateAnnual / 100 / 12;
    const months = Math.max(0, daysDelayed) / 30;
    // Compound interest with monthly rests: P * ( (1 + r)^n - 1 )
    const compoundFactor = Math.pow(1 + monthlyRate, months);
    const calculatedInterest = Math.round(principalAmount * (compoundFactor - 1));
    const totalDues = principalAmount + calculatedInterest;

    // Corporate Tax Disallowance Hit on Principal under Section 43B(h) (assuming standard 25.17% or ~30% base + cess)
    const corporateTaxRate = 0.2517; // Base corporate 22% + 10% surcharge + 4% cess under s.115BAA
    const taxHitPrincipal = Math.round(principalAmount * corporateTaxRate);

    // Corporate Tax Lost on Interest under Section 23 MSMED Act (Interest is completely non-deductible)
    const taxDeductionLostOnInterest = Math.round(calculatedInterest * corporateTaxRate);

    // Total Financial Exposure to Buyer = Total Dues + Non-Deductible Tax Burdens
    const totalBuyerCostOfDefault = totalDues + taxHitPrincipal;

    return {
      rateAnnual,
      calculatedInterest,
      totalDues,
      taxHitPrincipal,
      taxDeductionLostOnInterest,
      totalBuyerCostOfDefault,
    };
  }, [principalAmount, daysDelayed, rbiBankRate]);

  // Generate Stage 1 Text: Polite CFO Section 43B(h) Advisory
  const stage1Text = useMemo(() => {
    return `URGENT AUDIT RECONCILIATION & STATUTORY INTIMATION
SECTION 43B(h) OF THE INCOME TAX ACT, 1961 READ WITH SECTIONS 15 & 16 OF THE MSMED ACT, 2006

Date: ${noticeDate}
Reference: FIN/MSME-43BH/${noticeRef.replace(/[^0-9]/g, "") || "2026-01"}

To:
The Chief Financial Officer / Head of Accounts Payable
${debtorName}
${debtorAddress}
GSTIN: ${debtorGSTIN}
Attention: ${debtorSignatory}, ${debtorDesignation}
Email: ${debtorEmail}

Subject: Year-End Statutory Intimation under Section 43B(h) of the Income Tax Act, 1961 & MSMED Act, 2006 regarding Overdue Invoices amounting to ₹${principalAmount.toLocaleString("en-IN")} against ${poReference}.

Dear ${debtorSignatory},

We value our longstanding business association with ${debtorName} as an authorized supplier of precision engineering components. 

1. STATUTORY MSME REGISTRATION STATUS:
Please take note that our enterprise, ${creditorName} (GSTIN: ${creditorGSTIN}), is duly registered under the Micro, Small and Medium Enterprises Development Act, 2006 as a "${creditorCategory} Enterprise" under Udyam Registration Number: ${creditorUdyam}. Our Udyam Certificate was furnished at the time of vendor onboarding and is also reflected on our tax invoices.

2. OVERDUE INVOICE PARTICULARS & DEFAULT UNDER SECTION 15:
Under purchase order / work order reference ${poReference}, we manufactured and supplied the agreed goods under the following invoices:
- Invoice Numbers: ${invoiceNumbers}
- Invoice Dates: ${invoiceDates}
- Agreed Payment Terms: ${creditDays} Days from Delivery
- Total Outstanding Principal: ₹${principalAmount.toLocaleString("en-IN")}
- Days Overdue Past Statutory Cutoff: ${daysDelayed} Days

Under Section 15 of the MSMED Act, 2006, the maximum permissible credit period cannot exceed 45 days from the date of acceptance. The aforementioned invoices have crossed the statutory limit and remain completely unpaid on your ledger.

${
  enableSection43bhTaxHit
    ? `3. STATUTORY TAX DISALLOWANCE UNDER SECTION 43B(h) (INCOME TAX ACT, 1961):
As you are aware, Section 43B(h) introduced via Finance Act 2023 mandates that any payment due to a Micro or Small Enterprise outstanding beyond the statutory timeline specified in Section 15 of the MSMED Act CANNOT be claimed as an allowable business expenditure on accrual basis. 
- Disallowance Consequence: If the principal sum of ₹${principalAmount.toLocaleString("en-IN")} is not paid before the close of the financial year (March 31), the entire amount will be added back to the taxable income of ${debtorName}.
- Direct Cash Outflow: At standard corporate tax rates (25.17% to 34.94%), this non-compliance triggers an immediate avoidable cash tax payout of approximately ₹${financialSummary.taxHitPrincipal.toLocaleString("en-IN")} for your company.`
    : ""
}

${
  enableSection23Disallowance
    ? `4. COMPOUND PENAL INTEREST UNDER SECTION 16 & TAX BAR UNDER SECTION 23:
- Mandatory Interest: Section 16 of the MSMED Act mandates payment of compound interest with monthly rests at three times the RBI Bank Rate (${financialSummary.rateAnnual}% per annum). The accrued statutory interest to date stands at ₹${financialSummary.calculatedInterest.toLocaleString("en-IN")}, taking total dues to ₹${financialSummary.totalDues.toLocaleString("en-IN")}.
- Strict Tax Disallowance of Interest: Kindly note that under Section 23 of the MSMED Act, 2006, ANY INTEREST PAID OR PAYABLE TO AN MSME UNDER SECTION 16 IS STATUTORILY BARRED FROM BEING CLAIMED AS A TAX DEDUCTION. It constitutes 100% dead loss from your company's post-tax profits.`
    : ""
}

${
  enableClause22Form3CD
    ? `5. MANDATORY DISCLOSURE IN TAX AUDIT REPORT (FORM 3CD CLAUSE 22):
Your Statutory Tax Auditors are required under Clause 22 of Form 3CD to report all overdue MSME payables, unpaid principal, and accrued Section 16 penal interest. To ensure clean compliance and prevent adverse audit qualifications in your financial statements, we urge you to clear these payables immediately.`
    : ""
}

6. REQUEST FOR EXPEDITED REMITTANCE:
In the spirit of commercial goodwill and mutual cooperation, we request you to instruct your finance desk to release the outstanding principal sum of ₹${principalAmount.toLocaleString("en-IN")} (plus accrued statutory interest) into our designated bank account within seven (7) days of receipt of this intimation.

Please provide the UTR / RTGS remittance confirmation to ${creditorEmail}.

Yours faithfully,
For ${creditorName}

Authorised Signatory / Head of Finance
Contact: ${creditorPhone} | Email: ${creditorEmail}
Udyam Reg: ${creditorUdyam} (${creditorCategory} Enterprise)`;
  }, [
    noticeDate,
    noticeRef,
    debtorName,
    debtorAddress,
    debtorGSTIN,
    debtorSignatory,
    debtorDesignation,
    debtorEmail,
    principalAmount,
    poReference,
    creditorName,
    creditorGSTIN,
    creditorCategory,
    creditorUdyam,
    invoiceNumbers,
    invoiceDates,
    creditDays,
    daysDelayed,
    enableSection43bhTaxHit,
    financialSummary,
    enableSection23Disallowance,
    enableClause22Form3CD,
    creditorEmail,
    creditorPhone,
  ]);

  // Generate Stage 2 Text: Formal Advocate Section 16 & 43B(h) Demand Notice
  const stage2Text = useMemo(() => {
    return `LEGAL DEMAND NOTICE UNDER SECTIONS 15, 16 & 23 OF THE MSMED ACT, 2006 READ WITH SECTION 43B(h) OF THE INCOME TAX ACT, 1961

DISPATCHED VIA REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE (RPAD) + REGISTERED EMAIL + WHATSAPP

Notice Ref No: ${noticeRef}
Date of Notice: ${noticeDate}

FROM:
${advocateName}
Advocate & Legal Consultant
Enrolment No: ${advocateEnrolment}
Chambers: ${advocateOffice}
Contact: legalrecovery@amalegal.in | +91 11 4902 8840

TO:
1. ${debtorName}
   Through its Managing Director / Chief Executive Officer
   Registered Office: ${debtorAddress}
   GSTIN: ${debtorGSTIN}
   Corporate Email: ${debtorEmail}

2. ${debtorSignatory}
   ${debtorDesignation}, ${debtorName}
   Email: ${debtorEmail}

COPY MARKED FOR MANDATORY DISCLOSURE & STATUTORY AUDIT:
3. The Statutory Auditor / Audit Committee
   ${auditorFirm}
   Email: ${auditorEmail}

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT:
${creditorName}
Having its Registered Place of Business at:
${creditorAddress}
GSTIN: ${creditorGSTIN} | Udyam Registration: ${creditorUdyam} (${creditorCategory} Enterprise)
(Hereinafter referred to as "My Client")

I hereby serve upon you this formal Statutory Legal Demand Notice as under:

1. STATUTORY STATUS OF MY CLIENT:
My Client is a duly registered "${creditorCategory} Enterprise" under the Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act) having Udyam Registration No. ${creditorUdyam}. My Client engaged with you for the manufacture, processing, and supply of industrial goods as per purchase order / contractual reference ${poReference}.

2. COMMERCIAL TRANSACTIONS & PARTICULARS OF DEFAULT:
Pursuant to your purchase order and verbal/written releases, My Client punctually manufactured and delivered the ordered consignments to your factory/premises. The consignments were duly inspected, received, and utilized by you in your production cycle without any contemporaneous objection:
- Invoice Numbers: ${invoiceNumbers}
- Invoice Dates: ${invoiceDates}
- Total Principal Sum Withheld: ₹${principalAmount.toLocaleString("en-IN")}
- Permissible Credit Period: ${creditDays} Days
- Period of Default: ${daysDelayed} Days overdue past Section 15 cutoff

3. VIOLATION OF SECTION 15 & MANDATORY 3x RBI INTEREST UNDER SECTION 16:
Under Section 15 of the MSMED Act, 2006, payment was mandatorily due within ${creditDays} days of invoice delivery. Despite repeatedly utilizing the supplied goods, you have defaulted on your statutory payment obligation.
Consequently, under Section 16 of the MSMED Act, 2006, you are statutorily liable to pay compound interest with monthly rests to My Client at three times the Bank Rate notified by the Reserve Bank of India (computed at ${financialSummary.rateAnnual}% per annum). 
- Principal Amount Outstanding: ₹${principalAmount.toLocaleString("en-IN")}
- Accrued Penal Interest (Monthly Rests): ₹${financialSummary.calculatedInterest.toLocaleString("en-IN")}
- Total Liquidated Statutory Debt: ₹${financialSummary.totalDues.toLocaleString("en-IN")}

4. COMPLETE DISALLOWANCE OF INTEREST AS EXPENSE UNDER SECTION 23:
You are placed on express notice of Section 23 of the MSMED Act, 2006, which contains a non-obstante clause overriding the Income Tax Act, 1961:
"Notwithstanding anything contained in the Income-tax Act, 1961, the amount of interest payable or paid by any buyer, under or in accordance with the provisions of this Act, shall not, for the purposes of computation of income under the Income-tax Act, 1961, be allowed as deduction."
Neither the interest accrued (₹${financialSummary.calculatedInterest.toLocaleString("en-IN")}) nor future interest can ever be claimed as a deductible business expenditure by ${debtorName}.

5. INTIMATION OF TAX DISALLOWANCE UNDER SECTION 43B(h) & CLAUSE 22 FORM 3CD:
Under Section 43B(h) of the Income Tax Act, 1961, your company is prohibited from claiming deduction of the principal sum of ₹${principalAmount.toLocaleString("en-IN")} unless actually paid before the close of the financial year.
By a copy of this notice marked to your Statutory Auditors (${auditorFirm}), they are formally informed to reflect this unpaid debt, the non-deductible interest under Section 23, and the principal disallowance under Clause 22 of Form 3CD in your Tax Audit Report. Failure by the management to disclose this liability constitutes professional and statutory non-compliance under the Companies Act, 2013 and Section 44AB of the Income Tax Act, 1961.

${
  enableSamadhaanWarning
    ? `6. STATUTORY ESCALATION TO MSEFC & COMMERCIAL SUIT:
Take notice that if the entire outstanding amount of ₹${financialSummary.totalDues.toLocaleString("en-IN")} along with legal drafting costs of ₹15,000 is not paid within FIFTEEN (15) DAYS of receipt of this notice, My Client has given me peremptory instructions to:
(a) File a statutory reference under Section 18 of the MSMED Act before the Micro and Small Enterprises Facilitation Council (MSEFC) / MSME Samadhaan for an enforceable recovery award with 3x RBI compound interest;
(b) Initiate summary recovery proceedings under Order XXXVII of the Code of Civil Procedure, 1908 / Commercial Courts Act, 2015; and
(c) Seek attachment of your corporate bank accounts and factory assets to realize the decree.`
    : ""
}

${
  enableBsa63Cert
    ? `7. ELECTRONIC EVIDENCE PRESERVATION UNDER SECTION 63 OF BSA, 2023:
This notice is simultaneously served via trackable registered electronic transmission (Email & WhatsApp) accompanied by digital transmission certificates pursuant to Section 63 of Bharatiya Sakshya Adhiniyam, 2023. All server delivery timestamps and SMTP receipts have been cryptographically preserved for evidentiary admissibility.`
    : ""
}

DEMAND:
I, therefore, call upon you to remit the total outstanding amount of ₹${financialSummary.totalDues.toLocaleString("en-IN")} (Rupees ${financialSummary.totalDues.toLocaleString("en-IN")} only) plus legal notice charges of ₹15,000 to My Client within 15 days of this notice, failing which legal proceedings will be launched entirely at your risk, cost, and legal peril.

Yours faithfully,

${advocateName}
Advocate, High Court of Delhi
Counsel for ${creditorName}`;
  }, [
    noticeRef,
    noticeDate,
    advocateName,
    advocateEnrolment,
    advocateOffice,
    debtorName,
    debtorAddress,
    debtorGSTIN,
    debtorEmail,
    debtorSignatory,
    debtorDesignation,
    auditorFirm,
    auditorEmail,
    creditorName,
    creditorAddress,
    creditorGSTIN,
    creditorUdyam,
    creditorCategory,
    poReference,
    invoiceNumbers,
    invoiceDates,
    principalAmount,
    creditDays,
    daysDelayed,
    financialSummary,
    enableSamadhaanWarning,
    enableBsa63Cert,
  ]);

  const activeNoticeContent = activeStage === "stage1" ? stage1Text : stage2Text;

  const handleCopyNotice = () => {
    navigator.clipboard.writeText(activeNoticeContent);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${activeStage === "stage1" ? "Stage 1 Section 43B(h) Advisory" : "Stage 2 Advocate Legal Demand Notice"}</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.6; margin: 40px; color: #111; }
            pre { white-space: pre-wrap; font-family: inherit; }
          </style>
        </head>
        <body>
          <pre>${activeNoticeContent}</pre>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl border border-slate-800 p-4 sm:p-6 lg:p-8 text-white shadow-2xl">
      {/* Header & Stage Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/80 mb-2">
            <span>P1 Notice &amp; Intimation Workspace</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            2-Stage MSME Collection &amp; Section 43B(h) Notice Builder
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Choose Stage 1 for commercial, relationship-preserving CFO audit intimation or escalate to Stage 2 for a formal advocate demand notice with Section 23 non-deductible interest warnings.
          </p>
        </div>

        {/* 2-Stage Toggle Tabs */}
        <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveStage("stage1")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeStage === "stage1"
                ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Stage 1: CFO 43B(h) Advisory
          </button>
          <button
            type="button"
            onClick={() => setActiveStage("stage2")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeStage === "stage2"
                ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Stage 2: Advocate Section 16 Notice
          </button>
        </div>
      </div>

      {/* Preset Selector Bar */}
      <div className="mb-6">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Select Industrial Vertical Preset:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {PRESETS.map((p) => {
            const isSelected = selectedPresetId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectPreset(p.id)}
                className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-800/90 border-[#DC2626] text-white shadow-md"
                    : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-white text-xs">{p.badge}</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">
                    ₹{(p.principalAmount / 100000).toFixed(2)}L
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1">{p.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace 2-Column Split: Form Inputs vs Live Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Form Controls Column (5 cols) */}
        <div className="xl:col-span-5 space-y-5 bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Step 1 &bull; Parties &amp; Udyam Details
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              Statutory creditor &amp; corporate buyer particulars
            </p>
          </div>

          {/* Creditor Fields */}
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Your Company Name (MSME Creditor)
              </label>
              <input
                type="text"
                value={creditorName}
                onChange={(e) => setCreditorName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Udyam Reg. Number
                </label>
                <input
                  type="text"
                  value={creditorUdyam}
                  onChange={(e) => setCreditorUdyam(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  MSME Category
                </label>
                <select
                  value={creditorCategory}
                  onChange={(e) => setCreditorCategory(e.target.value as "Micro" | "Small")}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="Micro">Micro Enterprise</option>
                  <option value="Small">Small Enterprise</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Your GSTIN
                </label>
                <input
                  type="text"
                  value={creditorGSTIN}
                  onChange={(e) => setCreditorGSTIN(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Accounts Email
                </label>
                <input
                  type="email"
                  value={creditorEmail}
                  onChange={(e) => setCreditorEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>
          </div>

          {/* Debtor Fields */}
          <div className="border-t border-slate-800 pt-3 space-y-3">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
              Step 2 &bull; Buyer CFO &amp; Auditor Targets
            </span>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Corporate Buyer Company Name
              </label>
              <input
                type="text"
                value={debtorName}
                onChange={(e) => setDebtorName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  CFO / Signatory Name
                </label>
                <input
                  type="text"
                  value={debtorSignatory}
                  onChange={(e) => setDebtorSignatory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Buyer GSTIN
                </label>
                <input
                  type="text"
                  value={debtorGSTIN}
                  onChange={(e) => setDebtorGSTIN(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Buyer Accounts / CFO Email(s)
              </label>
              <input
                type="text"
                value={debtorEmail}
                onChange={(e) => setDebtorEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Buyer Statutory Auditor
                </label>
                <input
                  type="text"
                  value={auditorFirm}
                  onChange={(e) => setAuditorFirm(e.target.value)}
                  placeholder="M/s ABC & Co, CAs"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Auditor Email
                </label>
                <input
                  type="email"
                  value={auditorEmail}
                  onChange={(e) => setAuditorEmail(e.target.value)}
                  placeholder="audit@ca-firm.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>
          </div>

          {/* Invoice Particulars */}
          <div className="border-t border-slate-800 pt-3 space-y-3">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
              Step 3 &bull; Overdue Invoices &amp; 3x RBI Interest
            </span>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                PO / Work Order Reference
              </label>
              <input
                type="text"
                value={poReference}
                onChange={(e) => setPoReference(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Invoice Numbers
                </label>
                <input
                  type="text"
                  value={invoiceNumbers}
                  onChange={(e) => setInvoiceNumbers(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Principal Amount (&rupee;)
                </label>
                <input
                  type="number"
                  value={principalAmount}
                  onChange={(e) => setPrincipalAmount(Number(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[10px] font-semibold text-slate-300 mb-1">
                  Credit Window
                </label>
                <select
                  value={creditDays}
                  onChange={(e) => setCreditDays(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white focus:outline-none"
                >
                  <option value={15}>15 Days (No Agreement)</option>
                  <option value={45}>45 Days (Max Legal)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-slate-300 mb-1">
                  Days Overdue
                </label>
                <input
                  type="number"
                  value={daysDelayed}
                  onChange={(e) => setDaysDelayed(Number(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-slate-300 mb-1">
                  RBI Rate (3x = {financialSummary.rateAnnual}%)
                </label>
                <input
                  type="number"
                  step="0.25"
                  value={rbiBankRate}
                  onChange={(e) => setRbiBankRate(Number(e.target.value) || 6.75)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Statutory Toggles */}
          <div className="border-t border-slate-800 pt-3 space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
              Step 4 &bull; Statutory Clauses &amp; Hooks
            </span>
            <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={enableSection43bhTaxHit}
                onChange={(e) => setEnableSection43bhTaxHit(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 text-[#DC2626] focus:ring-[#DC2626]"
              />
              <span>
                <strong>Section 43B(h) Corporate Tax Hit Clause</strong>: Highlights ~₹
                {financialSummary.taxHitPrincipal.toLocaleString("en-IN")} immediate cash tax disallowance if unpaid by March 31.
              </span>
            </label>

            <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={enableSection23Disallowance}
                onChange={(e) => setEnableSection23Disallowance(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 text-[#DC2626] focus:ring-[#DC2626]"
              />
              <span>
                <strong>Section 23 MSMED Act Non-Deductible Interest</strong>: Warns buyer that 3x RBI compound penal interest is 100% barred as a tax deduction.
              </span>
            </label>

            <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={enableClause22Form3CD}
                onChange={(e) => setEnableClause22Form3CD(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 text-[#DC2626] focus:ring-[#DC2626]"
              />
              <span>
                <strong>Tax Audit Form 3CD Clause 22 Auditor Alert</strong>: Formal copy marked to buyer's statutory auditor for mandatory reporting.
              </span>
            </label>

            {activeStage === "stage2" && (
              <>
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableSamadhaanWarning}
                    onChange={(e) => setEnableSamadhaanWarning(e.target.checked)}
                    className="mt-0.5 rounded border-slate-700 text-[#DC2626] focus:ring-[#DC2626]"
                  />
                  <span>
                    <strong>MSME Samadhaan &amp; Commercial Suit Escalation</strong>: 15-day peremptory cure period before Section 18 reference and Order 37 filing.
                  </span>
                </label>
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableBsa63Cert}
                    onChange={(e) => setEnableBsa63Cert(e.target.checked)}
                    className="mt-0.5 rounded border-slate-700 text-[#DC2626] focus:ring-[#DC2626]"
                  />
                  <span>
                    <strong>BSA 2023 Section 63 Electronic Delivery</strong>: Digital transmission certification for admissible proof in court.
                  </span>
                </label>
              </>
            )}
          </div>
        </div>

        {/* Right Live Preview Column (7 cols) */}
        <div className="xl:col-span-7 flex flex-col space-y-4">
          {/* Statutory Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
            <div>
              <span className="text-[10px] text-slate-400 block">Principal Overdue</span>
              <span className="text-sm font-black text-white font-mono">
                ₹{principalAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-amber-400 block">3x RBI Interest</span>
              <span className="text-sm font-black text-amber-300 font-mono">
                +₹{financialSummary.calculatedInterest.toLocaleString("en-IN")}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-red-400 block">Buyer Tax Disallowance</span>
              <span className="text-sm font-black text-red-400 font-mono">
                ~₹{financialSummary.taxHitPrincipal.toLocaleString("en-IN")}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-emerald-400 block">Total Buyer Cost</span>
              <span className="text-sm font-black text-emerald-300 font-mono">
                ₹{financialSummary.totalBuyerCostOfDefault.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Action Button Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300">
                {activeStage === "stage1" ? "Stage 1 Preview" : "Stage 2 Notice Preview"}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300">
                {activeStage === "stage1" ? "Company Letterhead" : "Advocate Letterhead"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyNotice}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
              >
                {copySuccess ? "✓ Copied to Clipboard!" : "Copy Full Notice"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          {/* Formatted Text Box */}
          <div className="relative bg-white text-slate-900 rounded-2xl p-5 sm:p-7 shadow-inner max-h-[640px] overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed border border-slate-300">
            <pre className="whitespace-pre-wrap font-sans text-slate-800 text-xs sm:text-[13px] leading-relaxed select-text">
              {activeNoticeContent}
            </pre>
          </div>

          {/* Bottom Advocate Assistance Bridge */}
          <div className="bg-gradient-to-r from-red-950/70 via-slate-900 to-slate-950 p-4 rounded-2xl border border-red-900/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold text-red-300 block">
                Want this vetted &amp; dispatched on High Court Advocate Letterhead?
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Our commercial recovery litigators review your invoices and serve via Registered Speed Post RPAD with BSA s.63 electronic delivery certificate.
              </p>
            </div>
            <Link
              href="/user/new-recovery"
              className="shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-md text-center"
            >
              Issue for ₹999 &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
