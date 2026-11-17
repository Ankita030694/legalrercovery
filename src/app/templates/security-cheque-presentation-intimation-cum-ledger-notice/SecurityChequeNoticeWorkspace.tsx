"use client";

import React, { useState, useId } from "react";

interface NoticeAnnotation {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  annotations: NoticeAnnotation[];
  generateNotice: (formData: WorkspaceFormData) => string;
}

interface WorkspaceFormData {
  creditorName: string;
  creditorAddress: string;
  creditorGstin: string;
  creditorAuthorisedSignatory: string;
  dealerFirmName: string;
  dealerProprietorName: string;
  dealerAddress: string;
  dealerEmail: string;
  dealerPhone: string;
  dealershipAgreementDate: string;
  securityChequeNumber: string;
  securityChequeDate: string;
  securityChequeBank: string;
  securityChequeBranch: string;
  crystallizedPrincipalAmount: string;
  accruedInterestAmount: string;
  totalDemandAmount: string;
  interestRateAnnual: string;
  cureDaysLimit: string;
  accountantPhone: string;
  companyBankName: string;
  companyAccountNumber: string;
  companyIfscCode: string;
}

const DEFAULT_FORM_DATA: WorkspaceFormData = {
  creditorName: "Himalayan Consumer Goods Private Limited",
  creditorAddress: "Plot No. 42, Okhla Industrial Area Phase-III, New Delhi - 110020",
  creditorGstin: "07AAACH1234F1Z8",
  creditorAuthorisedSignatory: "Rajesh Kumar (Senior Credit Control Manager)",
  dealerFirmName: "M/s Jai Laxmi Enterprises",
  dealerProprietorName: "Shri Ramesh Chand Gupta (Proprietor / Partner / Director)",
  dealerAddress: "Shop No. 14, Main Mandi Road, Sector 12, Karnal, Haryana - 132001",
  dealerEmail: "ramesh.gupta.karnal@gmail.com",
  dealerPhone: "+91 98765 43210",
  dealershipAgreementDate: "15 April 2024",
  securityChequeNumber: "004812",
  securityChequeDate: "24 November 2026",
  securityChequeBank: "State Bank of India",
  securityChequeBranch: "Railway Road Branch, Karnal",
  crystallizedPrincipalAmount: "14,85,620",
  accruedInterestAmount: "1,33,705",
  totalDemandAmount: "16,19,325",
  interestRateAnnual: "18%",
  cureDaysLimit: "7",
  accountantPhone: "+91 11 4567 8900",
  companyBankName: "HDFC Bank Ltd",
  companyAccountNumber: "50200012345678",
  companyIfscCode: "HDFC0000123",
};

const TEMPLATE_VARIANTS: TemplateVariant[] = [
  {
    id: "fmcg-dealership",
    title: "FMCG & Consumer Durables Dealer Default",
    subtitle: "Standard 7-Day ledger crystallization before presenting signed dealership security cheque",
    badge: "Primary Commercial Standard",
    annotations: [
      {
        marker: "①",
        title: "Statutory Section 20 NI Act Authority Recital",
        explanation:
          "Records that the drawer signed and delivered an inchoate instrument with the express legal authority granted to the creditor to complete the instrument up to the crystallized balance.",
        statuteRef: "Section 20 Negotiable Instruments Act, 1881",
      },
      {
        marker: "②",
        title: "Ledger Crystallization & Reconciled Debt Fixation",
        explanation:
          "Furnishes the itemized statement of invoices, acknowledged deliveries, and credit notes, fixing the exact legally enforceable debt existing on the date of cheque presentation.",
        statuteRef: "Bir Singh v. Mukesh Kumar (2019) 4 SCC 197",
      },
      {
        marker: "③",
        title: "7-Day Cure Window & Dispute Pre-emption Window",
        explanation:
          "Provides the debtor a reasonable commercial opportunity to reconcile accounts or point out discrepancies. Silence or failure to dispute invokes adverse inference under BSA 2023.",
        statuteRef: "Section 119 & 121 Bharatiya Sakshya Adhiniyam, 2023",
      },
      {
        marker: "④",
        title: "Intimation of Cheque Particulars & Banking Presentation",
        explanation:
          "Explicitly notifies the drawer that Cheque No. [Number] will be completed for ₹[Amount] and presented for clearing on the specified date, defeating any claim of surprise or fraud.",
        statuteRef: "Sripati Singh v. State of Jharkhand (2021) SCC OnLine SC 1002",
      },
      {
        marker: "⑤",
        title: "Section 56 Part-Payment Compliance Assurance",
        explanation:
          "Certifies that all part-payments, debit notes, and inventory returns have been credited, ensuring the cheque is not presented for an unadjusted gross face sum.",
        statuteRef: "Dashrathbhai Trikambhai Patel v. Hitesh Patel (2022) 10 SCC 742",
      },
      {
        marker: "⑥",
        title: "Pre-Warning of Section 138 & Section 143A 20% Interim Payout",
        explanation:
          "Notifies the debtor and its directors of impending criminal prosecution, arrest warrants, and mandatory 20% interim deposit if the cheque is dishonoured or stopped.",
        statuteRef: "Section 138, 141 & 143A Negotiable Instruments Act, 1881",
      },
    ],
    generateNotice: (f) => `FORMAL 7-DAY INTIMATION CUM LEDGER CRYSTALLIZATION NOTICE
PRIOR TO PRESENTATION OF SECURITY CHEQUE UNDER SECTION 20 & 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881

ISSUED VIA REGISTERED SPEED POST WITH A.D., OFFICIAL CORPORATE EMAIL & WHATSAPP
(CERTIFIED UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023)

Date: [CURRENT DATE]
Notice Ref. No.: HCG/REC/2026/SEC-CHQ/089

To,
1. ${f.dealerFirmName}
   Through its Proprietor / Managing Partner / Directors
   Address: ${f.dealerAddress}
   Email: ${f.dealerEmail}
   Mobile / WhatsApp: ${f.dealerPhone}

2. ${f.dealerProprietorName}
   (In personal capacity and as Authorized Signatory / Person-in-Charge of business affairs)
   Address: ${f.dealerAddress}

FROM:
${f.creditorName}
Registered Office: ${f.creditorAddress}
GSTIN: ${f.creditorGstin}
Authorized Official: ${f.creditorAuthorisedSignatory}

SUBJECT: 
FORMAL 7-DAY NOTICE FOR CRYSTALLIZATION OF OUTSTANDING RUNNING LEDGER DUES OF RS. ${f.crystallizedPrincipalAmount}/- (PLUS ACCRUED CONTRACTUAL INTEREST OF RS. ${f.accruedInterestAmount}/-, TOTALING RS. ${f.totalDemandAmount}/-) AND PRIOR INTIMATION OF FILLING AND PRESENTATION OF BLANK SIGNED SECURITY CHEQUE NO. ${f.securityChequeNumber} DRAWN ON ${f.securityChequeBank.toUpperCase()} UNDER SECTION 20 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881.

Sir / Madam,

Under instructions and on behalf of our client, ${f.creditorName} (hereinafter referred to as "Our Client"), this formal commercial and statutory intimation notice is hereby served upon you:

1. APPOINTMENT & BUSINESS RELATIONSHIP:
That under and pursuant to the Dealership / Distribution Agreement dated ${f.dealershipAgreementDate}, you were appointed as an authorized non-exclusive dealer / stockist for the distribution of products manufactured and marketed by Our Client against mutually agreed credit terms and payment cycles.

2. DELIVERY OF INCHOATE SECURITY CHEQUE UNDER SECTION 20 NI ACT:
That in terms of Clause [X] of the Dealership Agreement and standard commercial channel protocol, at the time of commencement of business credit lines, you voluntarily handed over to Our Client a signed, undated security cheque bearing Cheque No. ${f.securityChequeNumber}, drawn on your account maintained with ${f.securityChequeBank}, ${f.securityChequeBranch} ①. In terms of Section 20 of the Negotiable Instruments Act, 1881, as authoritatively interpreted by the Hon'ble Supreme Court of India in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197, the delivery of a signed blank instrument confers prima facie and express legal authority upon the holder to complete the instrument and fill up the payee name, date, and amount up to the legally enforceable debt existing on the date of presentation ①.

3. SUPPLY OF GOODS & RUNNING LEDGER ACCUMULATION:
That from time to time, Our Client supplied commercial consignments of goods against your specific purchase orders and indents under regular tax invoices accompanied by statutory E-Way Bills and clean Proof of Delivery (POD) acknowledgments duly signed and stamped by your authorized store representatives. The verified running ledger maintained by Our Client in the regular course of business reflects a crystallized principal debit balance of Rs. ${f.crystallizedPrincipalAmount}/- overdue and unpaid as on date ②.

4. COMPLIANCE WITH DASHRATHBHAI PATEL (SECTION 56 PART-PAYMENT AUDIT):
That in strict compliance with the mandate of the Hon'ble Supreme Court of India in Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022) 10 SCC 742, Our Client has conducted a thorough pre-presentation audit of the ledger accounts. All payments received on account, authorized credit notes for damaged goods/schemes, and approved returns have been fully adjusted and credited in the ledger statement annexed hereto as ANNEXURE-A ⑤. There are no pending returns or unadjusted credits. The sum of Rs. ${f.crystallizedPrincipalAmount}/- represents the net, crystallized, and undisputed principal debt legally due and payable by you to Our Client ②.

5. CONTRACTUAL INTEREST ON DELAYED OVERDUE PAYMENTS:
That in accordance with the credit policy agreed upon between the parties, delayed payments attract commercial interest @ ${f.interestRateAnnual} per annum. The accrued interest computed up to [CURRENT DATE] amounts to Rs. ${f.accruedInterestAmount}/-, resulting in a total crystallized debt of Rs. ${f.totalDemandAmount}/- (Rupees [TOTAL AMOUNT IN WORDS] only).

6. FORMAL 7-DAY CURE AND RECONCILIATION WINDOW:
That Our Client hereby calls upon you to discharge the aforesaid crystallized liability of Rs. ${f.totalDemandAmount}/- within a period of 7 (seven) days from the receipt of this notice, either by direct RTGS / NEFT transfer into Our Client's bank account (Details: Bank: ${f.companyBankName}, A/c No.: ${f.companyAccountNumber}, IFSC: ${f.companyIfscCode}) or by contacting Our Client's Finance Desk at ${f.accountantPhone} for any bona fide documentary reconciliation ③.

7. ADVANCE INTIMATION OF CHEQUE FILLING AND PRESENTATION:
PLEASE TAKE SPECIFIC NOTICE that if you fail to clear the outstanding crystallized dues or fail to point out any genuine, documented ledger error within the stipulated 7 (seven) days:
a) Our Client shall, on ${f.securityChequeDate}, exercise its statutory authority under Section 20 of the Negotiable Instruments Act, 1881, and fill up Cheque No. ${f.securityChequeNumber} for the sum of Rs. ${f.totalDemandAmount}/- (or the principal sum of Rs. ${f.crystallizedPrincipalAmount}/-) in favor of "${f.creditorName}" bearing date ${f.securityChequeDate} ④;
b) The said completed cheque will be presented for encashment through Our Client's bankers, ${f.companyBankName} ④;
c) As held by the Hon'ble Supreme Court in Sripati Singh v. State of Jharkhand (2021) SCC OnLine SC 1002, a cheque issued as security matures into a live, enforceable negotiable instrument the moment there is a default in repayment of the underlying commercial credit ④.

8. CONSEQUENCES OF DISHONOUR OR STOP-PAYMENT (SECTION 138 & 143A NI ACT):
Please be advised that if the said cheque is returned unpaid by your banker for "Funds Insufficient", "Account Closed", "Refer to Drawer", or if you issue wrongful "Stop Payment" instructions to evade liability, Our Client shall immediately initiate criminal prosecution against you, your firm, and all Directors/Partners in charge under Section 138 and Section 141 of the Negotiable Instruments Act, 1881 ⑥. Furthermore, in the said proceedings, Our Client shall immediately apply for an order directing you to deposit 20% of the cheque amount as interim compensation under Section 143A of the NI Act ⑥, in addition to initiating summary recovery suits under Order XXXVII CPC and corporate insolvency proceedings where applicable.

This notice is issued without prejudice to all other rights, remedies, and causes of action available to Our Client under civil, criminal, and commercial law.

Yours faithfully,

For ${f.creditorName}

______________________________________
${f.creditorAuthorisedSignatory}
(Authorized Officer & Credit Control Manager)

ANNEXURES ATTACHED:
1. Annexure-A: Certified Running Account Ledger Statement (Date Range: 01 April 2024 to Date)
2. Annexure-B: Itemized Invoice Schedule with E-Way Bill & Delivery Acknowledgment References
3. Annexure-C: Photocopy of Blank Signed Security Cheque No. ${f.securityChequeNumber}
4. Annexure-D: Certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for Electronic Dispatch`,
  },
  {
    id: "super-stockist-recall",
    title: "C&F Agent / Super-Stockist Credit Recall Notice",
    subtitle: "For large ticket wholesale channel credit recall and security cheque encashment",
    badge: "Enterprise Channel Credit",
    annotations: [
      {
        marker: "①",
        title: "Credit Limit Expiry & Immediate Recall Clause",
        explanation:
          "Formally terminates the credit facility due to continuous payment breaches and demands immediate settlement of the entire outstanding exposure.",
        statuteRef: "Section 39 Indian Contract Act, 1872",
      },
      {
        marker: "②",
        title: "Reconciled Distributor Ledger & GST-2B Match",
        explanation:
          "Establishes that all supplies were declared in GSTR-1, the dealer availed ITC in GSTR-2B/3B, and therefore the physical receipt and debt are admitted under GST records.",
        statuteRef: "Section 16(2) Central Goods and Services Tax Act, 2017",
      },
      {
        marker: "③",
        title: "Prior Intimation to Fill Security Instrument",
        explanation:
          "Records that the security cheque is being converted to an active instrument under Section 20 NI Act pursuant to contractual credit default.",
        statuteRef: "Section 20 Negotiable Instruments Act, 1881",
      },
      {
        marker: "④",
        title: "Joint & Several Liability of Directors / Partners",
        explanation:
          "Notifies directors/partners of vicarious criminal liability under Section 141 NI Act and personal guarantee enforcement under Section 128 Contract Act.",
        statuteRef: "Section 141 NI Act & Section 128 Contract Act, 1872",
      },
    ],
    generateNotice: (f) => `REGISTERED DEMAND CUM BALANCE CRYSTALLIZATION NOTICE
FOR IMMEDIATE CREDIT RECALL AND EXERCISE OF SECURITY CHEQUE ENCASHMENT UNDER SECTION 20 & 138 NI ACT

DISPATCHED VIA REGISTERED SPEED POST WITH AD, CORPORATE EMAIL & WHATSAPP

Date: [CURRENT DATE]
Notice Ref. No.: LR/B2B/CREDIT-RECALL/${f.securityChequeNumber}

To,
1. ${f.dealerFirmName}
   Address: ${f.dealerAddress}
   Email: ${f.dealerEmail}
   Contact: ${f.dealerPhone}

2. ${f.dealerProprietorName}
   (Managing Director / Partner / Personal Guarantor)
   Address: ${f.dealerAddress}

FROM:
${f.creditorName}
Registered Office: ${f.creditorAddress}
GSTIN: ${f.creditorGstin}

SUBJECT: 
IMMEDIATE RECALL OF COMMERCIAL CHANNEL CREDIT FACILITY, CRYSTALLIZATION OF OUTSTANDING AGING ARREARS OF RS. ${f.crystallizedPrincipalAmount}/- (PLUS INTEREST OF RS. ${f.accruedInterestAmount}/-), AND 7-DAY INTIMATION OF FILLING AND DEPOSITING SECURITY CHEQUE NO. ${f.securityChequeNumber} DRAWN ON ${f.securityChequeBank.toUpperCase()}.

Sir / Madam,

1. That under the Super-Stockist / C&F Agreement dated ${f.dealershipAgreementDate}, you were extended an unsecured running credit facility for secondary redistribution. Pursuant to mutual terms, you furnished blank signed Cheque No. ${f.securityChequeNumber} drawn on ${f.securityChequeBank}, ${f.securityChequeBranch}, to secure payment obligations ①.

2. That your account currently displays unpaid invoices exceeding standard 30-day payment cycles. Despite multiple field visits and telephonic reminders, the principal overdue sum of Rs. ${f.crystallizedPrincipalAmount}/- remains unliquidated. Furthermore, all said invoices stand reflected in your GSTR-2B, confirming unimpeachable acceptance and receipt of inventory under statutory tax filings ②.

3. That Our Client has credited all authorized secondary scheme claims, freight subsidies, and return debit notes as detailed in the attached reconciled statement. The net balance standing to your debit is Rs. ${f.crystallizedPrincipalAmount}/-, along with contractual interest of Rs. ${f.accruedInterestAmount}/- calculated @ ${f.interestRateAnnual} p.a., bringing the total recoverable debt to Rs. ${f.totalDemandAmount}/-.

4. In exercise of powers conferred under Section 20 of the Negotiable Instruments Act, 1881 and the binding law declared in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 and Sripati Singh v. State of Jharkhand (2021), Our Client hereby formally intimates that:
   a) You are provided a final period of 7 days from the receipt of this notice to remit the sum of Rs. ${f.totalDemandAmount}/- to Our Client's account (${f.companyBankName}, A/c No. ${f.companyAccountNumber}, IFSC: ${f.companyIfscCode});
   b) In the event of non-payment by ${f.securityChequeDate}, Our Client shall fill in Cheque No. ${f.securityChequeNumber} for the sum of Rs. ${f.totalDemandAmount}/- and present the same to its banker for encashment ③;
   c) If the instrument is dishonoured for any reason whatsoever, criminal proceedings under Section 138 read with Section 141 of the NI Act shall be instituted against you and each active director/partner individually, alongside seeking 20% interim compensation under Section 143A NI Act ④.

Yours sincerely,

For ${f.creditorName}

______________________________________
${f.creditorAuthorisedSignatory}`,
  },
  {
    id: "raw-material-supply",
    title: "Raw Material & Industrial Supplier Default",
    subtitle: "For manufacturing inputs, packaging, chemicals, and industrial credit defaults",
    badge: "B2B Manufacturing & MSME",
    annotations: [
      {
        marker: "①",
        title: "Quality Acceptance & Bar on Belated Rejections",
        explanation:
          "Records that the buyer processed raw material consignments without raising statutory rejection notices within 15–30 days, invoking Sale of Goods Act deemed acceptance.",
        statuteRef: "Section 41 & 42 Sale of Goods Act, 1930",
      },
      {
        marker: "②",
        title: "MSMED Act Section 16 Statutory Interest Hook",
        explanation:
          "Notifies the buyer that overdue delayed payments attract compound interest with monthly rests at 3x RBI bank rate under the MSME Act.",
        statuteRef: "Section 16 Micro, Small & Medium Enterprises Development Act, 2006",
      },
      {
        marker: "③",
        title: "Section 20 Cheque Completion Mandate",
        explanation:
          "Notifies the presentation of the security cheque up to the crystallized invoice value plus compound statutory interest.",
        statuteRef: "Section 20 Negotiable Instruments Act, 1881",
      },
    ],
    generateNotice: (f) => `STATUTORY INTIMATION CUM LEDGER RECONCILIATION NOTICE
PRIOR TO PRESENTATION OF PDC / SECURITY CHEQUE UNDER SECTION 20 & 138 NI ACT READ WITH MSMED ACT, 2006

VIA SPEED POST RPAD, COURIER & OFFICIAL REGISTERED EMAIL

Date: [CURRENT DATE]
Reference: IND/SUPPLY/SEC-CHQ/${f.securityChequeNumber}

To,
${f.dealerFirmName}
Attn: ${f.dealerProprietorName}
Address: ${f.dealerAddress}
Email: ${f.dealerEmail}

FROM:
${f.creditorName}
Address: ${f.creditorAddress}
GSTIN: ${f.creditorGstin}

SUBJECT: 7-DAY NOTICE PRIOR TO PRESENTATION OF SECURITY CHEQUE NO. ${f.securityChequeNumber} FOR DISCHARGE OF UNPAID RAW MATERIAL SUPPLIES OF RS. ${f.totalDemandAmount}/-.

Sir / Madam,

1. That between [START DATE] and [END DATE], Our Client supplied specialized industrial raw materials / packaging goods to your manufacturing facility against your confirmed Purchase Orders. The consignments were duly accepted, inspected, and consumed in your manufacturing operations without any demur, protest, or quality rejection ①.

2. That your running ledger displays an undisputed overdue balance of Rs. ${f.crystallizedPrincipalAmount}/- against Tax Invoices listed in Annexure-A. Under Section 16 of the MSMED Act, 2006, delayed payments are statutorily subject to compound interest with monthly rests @ 3 times the RBI Bank Rate, totaling Rs. ${f.accruedInterestAmount}/- ②.

3. That to secure ongoing deliveries, you provided Cheque No. ${f.securityChequeNumber} drawn on ${f.securityChequeBank}, ${f.securityChequeBranch}. 

4. Take notice that you are afforded 7 days from service hereof to pay the crystallized sum of Rs. ${f.totalDemandAmount}/- via RTGS/NEFT. Failing payment by ${f.securityChequeDate}, Our Client shall fill in Cheque No. ${f.securityChequeNumber} for the said crystallized amount under Section 20 of the NI Act and present it for payment ③. In case of dishonour, immediate legal proceedings under Section 138 NI Act and MSEFC arbitration shall be initiated at your sole risk, cost, and legal peril.

For ${f.creditorName}
Authorized Signatory`,
  },
];

export default function SecurityChequeNoticeWorkspace() {
  const [activeTab, setActiveTab] = useState<string>("fmcg-dealership");
  const [formData, setFormData] = useState<WorkspaceFormData>(DEFAULT_FORM_DATA);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeAnnotation, setActiveAnnotation] = useState<NoticeAnnotation | null>(null);

  const activeTemplate =
    TEMPLATE_VARIANTS.find((t) => t.id === activeTab) || TEMPLATE_VARIANTS[0];

  const handleInputChange = (field: keyof WorkspaceFormData, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto-recalculate total if principal or interest changes
      if (field === "crystallizedPrincipalAmount" || field === "accruedInterestAmount") {
        const p = parseFloat(updated.crystallizedPrincipalAmount.replace(/,/g, "")) || 0;
        const i = parseFloat(updated.accruedInterestAmount.replace(/,/g, "")) || 0;
        if (!isNaN(p) && !isNaN(i)) {
          updated.totalDemandAmount = (p + i).toLocaleString("en-IN");
        }
      }
      return updated;
    });
  };

  const currentNoticeText = activeTemplate.generateNotice(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentNoticeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>7-Day Section 20 NI Act Crystallization Notice - ${formData.dealerFirmName}</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #111827; line-height: 1.5; font-size: 12pt; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: "Courier New", Courier, monospace; font-size: 10pt; line-height: 1.4; }
              @media print {
                body { padding: 0; }
              }
            </style>
          </head>
          <body>
            <pre>${currentNoticeText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([currentNoticeText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `7-Day-Security-Cheque-Crystallization-Notice-${formData.dealerFirmName.replace(/[^a-zA-Z0-9]/g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full space-y-6">
      {/* Variant Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
        {TEMPLATE_VARIANTS.map((v) => {
          const isActive = activeTab === v.id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                setActiveTab(v.id);
                setActiveAnnotation(null);
              }}
              className={`flex-1 min-w-[200px] text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span>{v.title}</span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                    isActive ? "bg-red-100 text-[#DC2626]" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {v.badge}
                </span>
              </div>
              <p className="text-[11px] font-normal text-slate-500 line-clamp-1">{v.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Main Workspace Split: Controls on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form Fields & Legal Knobs (5 cols) */}
        <div className="lg:col-span-5 space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
              Notice Field Customization
            </h4>
            <span className="text-[10px] text-slate-500 font-medium">Real-time sync</span>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Creditor Details */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Creditor / Manufacturer Entity
              </label>
              <input
                type="text"
                value={formData.creditorName}
                onChange={(e) => handleInputChange("creditorName", e.target.value)}
                placeholder="Your Company Name"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] font-medium"
              />
              <input
                type="text"
                value={formData.creditorAddress}
                onChange={(e) => handleInputChange("creditorAddress", e.target.value)}
                placeholder="Creditor Registered Office Address"
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 text-[11px]"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={formData.creditorGstin}
                  onChange={(e) => handleInputChange("creditorGstin", e.target.value)}
                  placeholder="GSTIN"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
                <input
                  type="text"
                  value={formData.creditorAuthorisedSignatory}
                  onChange={(e) =>
                    handleInputChange("creditorAuthorisedSignatory", e.target.value)
                  }
                  placeholder="Authorised Officer Name"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
              </div>
            </div>

            {/* Defaulting Dealer Details */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Defaulting Dealer / Stockist Details
              </label>
              <input
                type="text"
                value={formData.dealerFirmName}
                onChange={(e) => handleInputChange("dealerFirmName", e.target.value)}
                placeholder="M/s Dealer Firm Name"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] font-medium"
              />
              <input
                type="text"
                value={formData.dealerProprietorName}
                onChange={(e) => handleInputChange("dealerProprietorName", e.target.value)}
                placeholder="Proprietor / Partner / Director Name"
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
              />
              <input
                type="text"
                value={formData.dealerAddress}
                onChange={(e) => handleInputChange("dealerAddress", e.target.value)}
                placeholder="Dealer Shop / Office Address"
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  value={formData.dealerEmail}
                  onChange={(e) => handleInputChange("dealerEmail", e.target.value)}
                  placeholder="Dealer Email"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
                <input
                  type="text"
                  value={formData.dealerPhone}
                  onChange={(e) => handleInputChange("dealerPhone", e.target.value)}
                  placeholder="WhatsApp / Mobile"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
              </div>
            </div>

            {/* Financials & Cheque Particulars */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Crystallized Dues &amp; Cheque Metadata
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold mb-1">
                    PRINCIPAL DUE (₹)
                  </span>
                  <input
                    type="text"
                    value={formData.crystallizedPrincipalAmount}
                    onChange={(e) =>
                      handleInputChange("crystallizedPrincipalAmount", e.target.value)
                    }
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold text-xs"
                  />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold mb-1">
                    INTEREST ACCRUED (₹)
                  </span>
                  <input
                    type="text"
                    value={formData.accruedInterestAmount}
                    onChange={(e) =>
                      handleInputChange("accruedInterestAmount", e.target.value)
                    }
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold mb-1">
                    CHEQUE NUMBER
                  </span>
                  <input
                    type="text"
                    value={formData.securityChequeNumber}
                    onChange={(e) =>
                      handleInputChange("securityChequeNumber", e.target.value)
                    }
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono text-xs"
                  />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold mb-1">
                    PROPOSED FILL DATE
                  </span>
                  <input
                    type="text"
                    value={formData.securityChequeDate}
                    onChange={(e) => handleInputChange("securityChequeDate", e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={formData.securityChequeBank}
                  onChange={(e) => handleInputChange("securityChequeBank", e.target.value)}
                  placeholder="Drawer Bank (e.g. SBI)"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
                <input
                  type="text"
                  value={formData.securityChequeBranch}
                  onChange={(e) => handleInputChange("securityChequeBranch", e.target.value)}
                  placeholder="Bank Branch"
                  className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-[11px]"
                />
              </div>
            </div>

            {/* Bank RTGS Details for Pay-in */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Creditor Bank RTGS Details for Cure
              </label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  value={formData.companyBankName}
                  onChange={(e) => handleInputChange("companyBankName", e.target.value)}
                  placeholder="Bank"
                  className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px]"
                />
                <input
                  type="text"
                  value={formData.companyAccountNumber}
                  onChange={(e) => handleInputChange("companyAccountNumber", e.target.value)}
                  placeholder="Account No."
                  className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px]"
                />
                <input
                  type="text"
                  value={formData.companyIfscCode}
                  onChange={(e) => handleInputChange("companyIfscCode", e.target.value)}
                  placeholder="IFSC"
                  className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px]"
                />
              </div>
            </div>
          </div>

          {/* Statutory Annotations Key */}
          <div className="pt-3 border-t border-slate-200">
            <span className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
              Statutory Protection Clauses in this Draft:
            </span>
            <div className="space-y-1.5">
              {activeTemplate.annotations.map((ann) => (
                <button
                  key={ann.marker}
                  type="button"
                  onClick={() =>
                    setActiveAnnotation(
                      activeAnnotation?.marker === ann.marker ? null : ann
                    )
                  }
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg border text-[11px] transition-all flex items-start gap-2 ${
                    activeAnnotation?.marker === ann.marker
                      ? "bg-red-50 border-red-300 text-slate-900"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="font-bold text-[#DC2626] shrink-0">{ann.marker}</span>
                  <div className="flex-1 truncate">
                    <span className="font-semibold block truncate">{ann.title}</span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {ann.statuteRef}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {activeAnnotation && (
              <div className="mt-3 p-3 bg-red-950/90 text-white rounded-xl text-xs space-y-1 animate-fadeIn border border-red-800">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-300">
                    {activeAnnotation.marker} {activeAnnotation.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveAnnotation(null)}
                    className="text-slate-400 hover:text-white text-[10px]"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-slate-200 text-[11px] leading-relaxed">
                  {activeAnnotation.explanation}
                </p>
                <span className="block text-[10px] text-amber-300 font-mono pt-1">
                  Authority: {activeAnnotation.statuteRef}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Statutory Notice Preview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Live Notice Preview
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                title="Copy full text to clipboard"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-400">✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy Text</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                title="Print notice"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadTxt}
                className="px-3 py-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                title="Download .txt"
              >
                <span>Download .txt</span>
              </button>
            </div>
          </div>

          <div className="relative border border-slate-300 rounded-2xl bg-white shadow-inner p-4 sm:p-6 overflow-x-auto max-h-[700px] overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 selection:bg-red-100 selection:text-red-900 whitespace-pre-wrap">
            {currentNoticeText}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3">
            <span className="text-amber-600 font-bold text-base mt-0.5">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Mandatory Practice Note:</strong> Always annex your certified running account ledger, list of tax invoices with E-Way bills, and photocopy of the blank signed cheque. Send via Speed Post RPAD and simultaneously forward via Official Email and WhatsApp to generate electronic delivery proof under Section 63 BSA 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
