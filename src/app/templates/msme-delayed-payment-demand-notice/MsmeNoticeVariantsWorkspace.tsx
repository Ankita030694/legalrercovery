"use client";

import React, { useState, useId } from "react";

type NoticeVariantKey = "polite" | "firm" | "final" | "affidavit";

interface MsmeNoticeFields {
  supplierFirmName: string;
  udyamNumber: string;
  enterpriseCategory: string;
  supplierAddress: string;
  supplierSignatory: string;
  supplierContact: string;
  buyerCompanyName: string;
  buyerCinOrGstin: string;
  buyerAddress: string;
  buyerDirectorOrCfo: string;
  poNumberAndDate: string;
  invoiceNumber: string;
  invoiceDate: string;
  deliveryChallanDate: string;
  creditPeriodDays: string;
  appointedDayDate: string;
  principalAmount: string;
  rbiBankRate: string;
  msmeInterestRate: string;
  interestAccrued: string;
  totalClaimAmount: string;
  bankAccountDetails: string;
  noticeCureDays: string;
}

export default function MsmeNoticeVariantsWorkspace() {
  const formId = useId();
  const [activeVariant, setActiveVariant] = useState<NoticeVariantKey>("firm");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [fields, setFields] = useState<MsmeNoticeFields>({
    supplierFirmName: "[SUPPLIER ENTERPRISE NAME, e.g., Apex Precision Components Pvt. Ltd.]",
    udyamNumber: "[UDYAM-XX-00-0000000]",
    enterpriseCategory: "Small Enterprise (Manufacturing)",
    supplierAddress: "[Registered Factory / Office Address with PIN]",
    supplierSignatory: "[Name & Designation of Authorised Partner / Director]",
    supplierContact: "[Email ID & Mobile Number]",
    buyerCompanyName: "[BUYER COMPANY NAME, e.g., Orion Heavy Engineering Ltd.]",
    buyerCinOrGstin: "[BUYER GSTIN / CIN NUMBER]",
    buyerAddress: "[Buyer Registered Office Address with PIN]",
    buyerDirectorOrCfo: "[Managing Director / Chief Financial Officer / Accounts Payable Head]",
    poNumberAndDate: "[PO No. PO/2026/1142 dated 10 May 2026]",
    invoiceNumber: "[Tax Invoice No. INV/26-27/089]",
    invoiceDate: "[18 May 2026]",
    deliveryChallanDate: "[20 May 2026 (E-Way Bill & GRN Verified)]",
    creditPeriodDays: "[45 Days (Statutory Cap under Section 15)]",
    appointedDayDate: "[05 July 2026]",
    principalAmount: "[₹8,50,000]",
    rbiBankRate: "[6.75% p.a.]",
    msmeInterestRate: "[20.25% p.a. (3× RBI Bank Rate, Monthly Compounded)]",
    interestAccrued: "[₹59,340]",
    totalClaimAmount: "[₹9,09,340]",
    bankAccountDetails: "[Bank Name, A/c No., IFSC Code, Branch]",
    noticeCureDays: "15",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const buildPoliteText = () => `SUBJECT: Payment Reminder & Section 43B(h) Tax Compliance Advisory — Overdue Invoice ${fields.invoiceNumber} (${fields.principalAmount}) — Udyam Reg: ${fields.udyamNumber}

Date: [DD Month YYYY]

To,
${fields.buyerDirectorOrCfo}
${fields.buyerCompanyName}
Address: ${fields.buyerAddress}
GSTIN / CIN: ${fields.buyerCinOrGstin}

Dear Sir / Madam,

We write on behalf of ${fields.supplierFirmName}, a registered ${fields.enterpriseCategory} under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 bearing Udyam Registration No. ${fields.udyamNumber}.

1. SUPPLY & INVOICE PARTICULARS:
Pursuant to your Purchase Order ${fields.poNumberAndDate}, we supplied and delivered conforming goods/services under Tax Invoice ${fields.invoiceNumber} dated ${fields.invoiceDate} for a principal value of ${fields.principalAmount}. Delivery was duly accepted at your site on ${fields.deliveryChallanDate} without any written objection within the statutory 15-day inspection window under Section 2(b) of the MSMED Act, 2006.

2. LAPSE OF 45-DAY STATUTORY PAYMENT PERIOD:
Under Section 15 of the MSMED Act, 2006, the maximum permissible credit period cannot exceed ${fields.creditPeriodDays} from the date of acceptance. Accordingly, the statutory "Appointed Day" occurred on ${fields.appointedDayDate}. As of today, the principal sum of ${fields.principalAmount} remains unpaid past the mandatory statutory deadline.

3. ADVISORY ON SECTION 16 INTEREST & SECTION 43B(h) TAX DISALLOWANCE:
As a valued commercial partner, we wish to gently flag two mandatory statutory compliances for your Finance and Tax Audit teams:
(a) Under Section 16 of the MSMED Act, 2006, any payment delayed beyond the Appointed Day automatically attracts compound interest with monthly rests at three times (3×) the RBI Bank Rate (${fields.msmeInterestRate}), which currently stands at ${fields.interestAccrued} and cannot be waived even by contract.
(b) Under Section 43B(h) of the Income-tax Act, 1961, sums payable to a registered Micro or Small Enterprise remaining unpaid beyond the Section 15 time limit are disallowed as an expense deduction in the relevant assessment year and must be reported by your tax auditor in Form 3CD Clause 22.

4. REQUEST FOR IMMEDIATE SETTLEMENT:
In the spirit of continuing our commercial relationship amicably, we request your Finance Department to release the overdue principal of ${fields.principalAmount} (along with accrued statutory interest of ${fields.interestAccrued}, totaling ${fields.totalClaimAmount}) to our designated bank account (${fields.bankAccountDetails}) within seven (7) calendar days, and share the NEFT/RTGS UTR reference.

Yours faithfully,

For ${fields.supplierFirmName}
${fields.supplierSignatory}
Udyam Registration No.: ${fields.udyamNumber}
Address: ${fields.supplierAddress}
Contact: ${fields.supplierContact}`;

  const buildFirmText = () => `REGISTERED POST WITH ACKNOWLEDGMENT DUE (RPAD) & ELECTRONIC MAIL
FORMAL STATUTORY DEMAND NOTICE UNDER SECTIONS 15, 16, 22 & 23 OF THE MSMED ACT, 2006 READ WITH SECTION 43B(h) OF THE INCOME-TAX ACT, 1961

Date: [DD Month YYYY]
Ref No.: [MSME/DEMAND/2026/01]

To,
1. ${fields.buyerCompanyName}
   Through its Managing Director / Principal Officer
   Registered Office: ${fields.buyerAddress}
   GSTIN / CIN: ${fields.buyerCinOrGstin}

2. ${fields.buyerDirectorOrCfo}
   ${fields.buyerCompanyName}
   Address: ${fields.buyerAddress}

FROM:
${fields.supplierFirmName}
(A Registered ${fields.enterpriseCategory} under the Ministry of MSME, Govt. of India)
Udyam Registration No.: ${fields.udyamNumber}
Registered Address: ${fields.supplierAddress}

SUBJECT: STATUTORY DEMAND FOR OVERDUE PRINCIPAL OF ${fields.principalAmount} PLUS SECTION 16 MONTHLY COMPOUND INTEREST OF ${fields.interestAccrued} (TOTAL: ${fields.totalClaimAmount}) AGAINST INVOICE ${fields.invoiceNumber}.

Sir / Madam,

Take formal notice that we, ${fields.supplierFirmName}, hereby serve upon you this Statutory Demand Notice under Sections 15 and 16 of the Micro, Small and Medium Enterprises Development Act, 2006 ("MSMED Act"), and state as follows:

1. SUPPLIER'S STATUTORY STATUS:
That our enterprise is a duly registered ${fields.enterpriseCategory} holding valid Udyam Registration No. ${fields.udyamNumber}, and was holding active MSE status prior to the issuance of the Purchase Order and supply of goods/services forming the subject matter of this demand.

2. UNDISPUTED DELIVERY & ACCEPTANCE OF SUPPLY:
That against your confirmed Purchase Order ${fields.poNumberAndDate}, we supplied goods/services accompanied by GST Tax Invoice ${fields.invoiceNumber} dated ${fields.invoiceDate} for ${fields.principalAmount}. The said consignment/service was delivered and accepted on ${fields.deliveryChallanDate}. Under Section 2(b) Explanation (ii) of the MSMED Act, since no written objection regarding quality or quantity was raised by your company within 15 days of delivery, the goods/services stand statutorily deemed accepted in full.

3. BREACH OF SECTION 15 MANDATORY PAYMENT DEADLINE:
That under Section 15 of the MSMED Act, 2006, a buyer is statutorily bound to make payment on or before the agreed date, which in no case can exceed forty-five (45) days from the day of acceptance (or 15 days where no written credit agreement exists). The statutory "Appointed Day" under Section 2(b) expired on ${fields.appointedDayDate}. Your company has defaulted in clearing the invoice despite repeated reminders.

4. MANDATORY SECTION 16 COMPOUND INTEREST SCHEDULE (NON-WAIVABLE):
That Section 16 of the MSMED Act mandates that notwithstanding anything contained in any agreement between the buyer and the supplier, the buyer shall be liable to pay compound interest with monthly rests to the supplier on the unpaid amount from the Appointed Day (${fields.appointedDayDate}) at three times (3×) the Bank Rate notified by the Reserve Bank of India:
   • Invoice Principal Overdue: ${fields.principalAmount}
   • Statutory Appointed Day: ${fields.appointedDayDate}
   • Notified RBI Bank Rate: ${fields.rbiBankRate}
   • Applicable Section 16 Rate (3× RBI Bank Rate): ${fields.msmeInterestRate}
   • Monthly Compounded Interest Accrued to Date: ${fields.interestAccrued}
   • Total Statutory Liability Payable: ${fields.totalClaimAmount}

5. STATUTORY TAX & AUDIT CONSEQUENCES (SECTIONS 22 & 23 MSMED ACT + SECTION 43B(h) IT ACT):
Take further notice that:
(a) Under Section 43B(h) of the Income-tax Act, 1961, the unpaid principal of ${fields.principalAmount} is disallowed as a business expenditure deduction in your income-tax computation, exposing your company to ~25.17% to 31.2% direct cash tax liability;
(b) Under Section 23 of the MSMED Act, the Section 16 compound interest of ${fields.interestAccrued} is permanently non-deductible as an expense under the Income-tax Act; and
(c) Under Section 22 of the MSMED Act, your company is legally required to disclose this unpaid principal and interest default in your audited annual financial statements filed with the Ministry of Corporate Affairs (MCA), failing which penal liability is attracted.

6. FINAL STATUTORY DEMAND:
You are hereby called upon to remit the total outstanding sum of ${fields.totalClaimAmount} (comprising ${fields.principalAmount} principal plus ${fields.interestAccrued} Section 16 compound interest calculated up to date, together with further interest at ${fields.msmeInterestRate} until actual realization) into our bank account (${fields.bankAccountDetails}) within ${fields.noticeCureDays} calendar days from the receipt of this notice.

Signed and dispatched on this [DD] day of [Month, YYYY].

For ${fields.supplierFirmName}
${fields.supplierSignatory}
Authorised Signatory
Contact: ${fields.supplierContact}`;

  const buildFinalText = () => `WITHOUT PREJUDICE • FINAL PRE-LITIGATION & PRE-ODR STATUTORY NOTICE
(Prior to Reference under Section 18 MSMED Act, 2006 / MSME ODR Portal & MSMED Amendment Act, 2026)

Date: [DD Month YYYY]
BY REGISTERED SPEED POST (RPAD) / EMAIL / WHATSAPP

To,
1. The Board of Directors & Managing Director, ${fields.buyerCompanyName}
   Registered Office: ${fields.buyerAddress}
   CIN / GSTIN: ${fields.buyerCinOrGstin}

2. The Chief Financial Officer & Statutory Compliance Officer, ${fields.buyerCompanyName}
   Address: ${fields.buyerAddress}

SUBJECT: FINAL ${fields.noticeCureDays}-DAY NOTICE BEFORE FILING COMPULSORY CONCILIATION & ARBITRATION REFERENCE ON THE MSME ODR PORTAL (SECTION 18) FOR RECOVERY OF ${fields.totalClaimAmount}.

Sir / Madam,

This serves as our FINAL PRE-LITIGATION NOTICE on behalf of ${fields.supplierFirmName} (Udyam Reg. No.: ${fields.udyamNumber}, Category: ${fields.enterpriseCategory}) regarding your continuing willful default in paying Tax Invoice ${fields.invoiceNumber} dated ${fields.invoiceDate}.

1. SUMMARY OF ADMITTED DEBT & STATUTORY DEFAULT:
• Purchase Order Reference: ${fields.poNumberAndDate}
• Tax Invoice & Delivery Date: ${fields.invoiceNumber} dated ${fields.invoiceDate}; Delivered & Accepted on ${fields.deliveryChallanDate}
• Statutory Appointed Day (Section 2(b) / Section 15): ${fields.appointedDayDate}
• Unpaid Invoice Principal: ${fields.principalAmount}
• Section 16 Monthly Compounded Interest (@ ${fields.msmeInterestRate}): ${fields.interestAccrued}
• Total Enforceable Debt as of Today: ${fields.totalClaimAmount}

2. OVERRIDING STATUTORY JURISDICTION (SECTION 24 MSMED ACT & SUPREME COURT PRECEDENT):
Please be advised that under Section 24 of the MSMED Act, 2006, the provisions of Sections 15 to 23 have overriding legal effect notwithstanding anything inconsistent in any private Purchase Order, unilateral 60/90-day payment clause, or private arbitration clause (as affirmed by the Hon'ble Supreme Court of India in Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd., (2023) 6 SCC 401). Furthermore, any belated attempt to manufacture a post-facto quality dispute after the expiry of 15 days from ${fields.deliveryChallanDate} is barred by Section 2(b).

3. CONSEQUENCES OF NON-PAYMENT WITHIN ${fields.noticeCureDays} DAYS:
Should you fail to credit the entire sum of ${fields.totalClaimAmount} to our account (${fields.bankAccountDetails}) within ${fields.noticeCureDays} calendar days of receiving this Final Notice, we shall immediately and without further reference to you:
(i) Lodge a formal Delayed Payment Reference under Section 18 of the MSMED Act on the Government of India MSME Online Dispute Resolution (ODR) Portal / Micro and Small Enterprises Facilitation Council (MSEFC) for time-bound statutory mediation and compulsory arbitration;
(ii) Pray for a binding Arbitral Decree under Section 36 of the Arbitration and Conciliation Act, 1996 for principal, pendente lite monthly compound interest at 3× RBI Bank Rate, and full legal costs;
(iii) Enforce the mandatory 75% pre-deposit rule under Section 19 of the MSMED Act (Tirupati Steels v. Shubh Industrial Component, (2022) 7 SCC 429) should your company attempt to challenge the award; and
(iv)Serve a formal copy of this default notice and Section 22/23 non-disclosure intimate upon your Statutory Auditors for mandatory reporting under Form 3CD Clause 22 and Section 43B(h) of the Income-tax Act, 1961.

Govern yourselves accordingly.

For ${fields.supplierFirmName}
${fields.supplierSignatory}
Udyam Registration No.: ${fields.udyamNumber}
Address: ${fields.supplierAddress}
Contact: ${fields.supplierContact}`;

  const buildAffidavitText = () => `BEFORE THE MICRO AND SMALL ENTERPRISES FACILITATION COUNCIL (MSEFC) / MSME ODR PORTAL
(Under Section 18 of the Micro, Small and Medium Enterprises Development Act, 2006)

AFFIDAVIT IN SUPPORT OF DELAYED PAYMENT APPLICATION / REFERENCE

I, ${fields.supplierSignatory}, aged about [Age] years, occupying the office of Authorised Signatory / Partner / Director of ${fields.supplierFirmName}, having its registered office/works at ${fields.supplierAddress}, do hereby solemnly affirm and declare on oath as under:

1. That I am the duly authorised signatory of the Applicant / Supplier Enterprise (${fields.supplierFirmName}) and am well-conversant with the commercial books of account, invoices, and facts of the transaction, and am competent to swear this Affidavit.

2. That the Applicant is a duly registered ${fields.enterpriseCategory} holding Udyam Registration Certificate No. ${fields.udyamNumber} issued by the Ministry of Micro, Small and Medium Enterprises, Government of India, which was valid and subsisting at the time of the supply of goods/services to the Respondent Buyer (${fields.buyerCompanyName}).

3. That pursuant to Purchase Order / Work Order ${fields.poNumberAndDate} placed by the Respondent (${fields.buyerCompanyName}, GSTIN/CIN: ${fields.buyerCinOrGstin}), the Applicant supplied conforming goods/services under GST Tax Invoice ${fields.invoiceNumber} dated ${fields.invoiceDate} for ${fields.principalAmount}, which were duly delivered and accepted by the Respondent on ${fields.deliveryChallanDate}.

4. That the Respondent raised no written objection regarding any defect in goods or deficiency in services within fifteen (15) days from the date of delivery (${fields.deliveryChallanDate}) as stipulated under Section 2(b) of the MSMED Act, 2006.

5. That the statutory payment deadline under Section 15 of the MSMED Act expired on ${fields.appointedDayDate} ("the Appointed Day"), and despite the service of formal demand notices, the Respondent has wrongfully withheld the principal sum of ${fields.principalAmount} along with accrued Section 16 monthly compound interest of ${fields.interestAccrued} (computed at ${fields.msmeInterestRate}, being 3× the RBI Bank Rate of ${fields.rbiBankRate}), aggregating to ${fields.totalClaimAmount} as on date.

6. That the electronic records annexed herewith (GST Tax Invoices, E-Way Bills, GSTR-1 / GSTR-3B filings, ledger statements, and email/WhatsApp demand notices) are true outputs produced from computer systems regularly maintained in the ordinary course of business, and this declaration satisfies the requirements of Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

7. That no other suit or proceeding regarding the same cause of action and invoice is pending decision before any other court or tribunal.

DEPONENT
(${fields.supplierSignatory} — For ${fields.supplierFirmName})

VERIFICATION:
Verified at [City/Place] on this [DD] day of [Month, YYYY] that the contents of Paragraphs 1 to 7 of my above Affidavit are true and correct to my personal knowledge and based on official company records, and nothing material has been concealed therefrom.

DEPONENT`;

  const allDocuments: Record<
    NoticeVariantKey,
    {
      badge: string;
      title: string;
      subtitle: string;
      whenToUse: string;
      content: string;
      filename: string;
    }
  > = {
    polite: {
      badge: "Variant 1 • Gentle / Relationship-Preserving",
      title: "Polite 45-Day Reminder & Section 43B(h) Tax Advisory",
      subtitle: "Best for Day 46–60 when you want to preserve ongoing purchase orders while nudging the buyer's CFO.",
      whenToUse: "Day 46 to Day 60 past invoice delivery (First written escalation)",
      content: buildPoliteText(),
      filename: "MSME_Polite_Demand_Reminder.doc",
    },
    firm: {
      badge: "Variant 2 • Recommended Statutory Notice",
      title: "Firm Statutory Demand Notice Under Sections 15–16 MSMED Act (With Interest Schedule)",
      subtitle: "Formal RPAD + Email demand invoking Section 16 monthly compounding (3× RBI rate), Section 22 audit disclosure, and Section 43B(h).",
      whenToUse: "Day 60+ or when buyer ignores informal reminders / stretches credit past 45 days",
      content: buildFirmText(),
      filename: "MSME_Statutory_Demand_Notice_Sec16.doc",
    },
    final: {
      badge: "Variant 3 • Pre-ODR / Pre-LitigationUltimatum",
      title: "Final 15-Day Notice Before MSME ODR Portal / MSEFC Filing",
      subtitle: "Cites Section 24 overriding effect, Supreme Court Mahakali Foods & Tirupati Steels (75% pre-deposit) rulings.",
      whenToUse: "Final 15-day ultimatum before filing a Section 18 reference on the MSME ODR Portal",
      content: buildFinalText(),
      filename: "MSME_Final_Pre_ODR_Legal_Notice.doc",
    },
    affidavit: {
      badge: "Bonus Annexure • Section 18 Filing Format",
      title: "MSME Delayed Payment Affidavit Format (With Section 63 BSA Verification)",
      subtitle: "Sworn affidavit format required when uploading your delayed payment reference on the MSME ODR / Samadhaan portal.",
      whenToUse: "Attach with your online claim when the 15-day demand notice expires unpaid",
      content: buildAffidavitText(),
      filename: "MSME_Delayed_Payment_Affidavit_Format.doc",
    },
  };

  const handleCopy = async (key: NoticeVariantKey) => {
    try {
      await navigator.clipboard.writeText(allDocuments[key].content);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleDownloadDoc = (key: NoticeVariantKey) => {
    const docItem = allDocuments[key];
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      `<head><meta charset='utf-8'><title>${docItem.title}</title></head><body style='font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5;'>`;
    const footer = "</body></html>";
    const formattedHtml = docItem.content.replace(/\n/g, "<br/>");
    const sourceHtml = header + formattedHtml + footer;

    const source =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHtml);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = docItem.filename;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  const handlePrint = (key: NoticeVariantKey) => {
    const docItem = allDocuments[key];
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${docItem.title}</title>
            <style>
              body { font-family: Georgia, serif; padding: 36px; font-size: 12.5px; line-height: 1.65; color: #0f172a; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${docItem.content}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-8">
      {/* Quick Placeholder Customizer Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1.5">
                Interactive Placeholder Customizer • Updates All 4 Formats Below
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Fill Your Udyam, Invoice &amp; Section 16 Interest Figures (Optional)
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Leave brackets as-is to copy raw <code className="text-red-300">[SQUARE BRACKET]</code> templates, or type your details once to populate all three tone variants and the affidavit.
              </p>
            </div>
            <div
              role="tablist"
              aria-label="Jump to Notice Tone Variant"
              className="flex flex-wrap items-center gap-1.5 bg-slate-800/90 p-1 rounded-xl border border-slate-700"
            >
              {(["polite", "firm", "final", "affidavit"] as NoticeVariantKey[]).map((key) => {
                const labels: Record<NoticeVariantKey, string> = {
                  polite: "1. Polite Reminder",
                  firm: "2. Firm Statutory",
                  final: "3. Final Pre-ODR",
                  affidavit: "4. ODR Affidavit",
                };
                const isSelected = activeVariant === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setActiveVariant(key);
                      const el = document.getElementById(`template-card-${key}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#DC2626] text-white shadow-xs"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {labels[key]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-slate-50/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label htmlFor={`${formId}-supplierFirmName`} className="block font-bold text-slate-700 mb-1">
              Supplier MSME Name
            </label>
            <input
              id={`${formId}-supplierFirmName`}
              type="text"
              name="supplierFirmName"
              value={fields.supplierFirmName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-udyamNumber`} className="block font-bold text-slate-700 mb-1">
              Udyam Registration No.
            </label>
            <input
              id={`${formId}-udyamNumber`}
              type="text"
              name="udyamNumber"
              value={fields.udyamNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-buyerCompanyName`} className="block font-bold text-slate-700 mb-1">
              Buyer Company Name
            </label>
            <input
              id={`${formId}-buyerCompanyName`}
              type="text"
              name="buyerCompanyName"
              value={fields.buyerCompanyName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-invoiceNumber`} className="block font-bold text-slate-700 mb-1">
              Invoice No. &amp; Date
            </label>
            <input
              id={`${formId}-invoiceNumber`}
              type="text"
              name="invoiceNumber"
              value={fields.invoiceNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-appointedDayDate`} className="block font-bold text-slate-700 mb-1">
              Appointed Day (Day 46)
            </label>
            <input
              id={`${formId}-appointedDayDate`}
              type="text"
              name="appointedDayDate"
              value={fields.appointedDayDate}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-principalAmount`} className="block font-bold text-slate-700 mb-1">
              Unpaid Principal (₹)
            </label>
            <input
              id={`${formId}-principalAmount`}
              type="text"
              name="principalAmount"
              value={fields.principalAmount}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-interestAccrued`} className="block font-bold text-slate-700 mb-1">
              Sec 16 Compound Interest (₹)
            </label>
            <input
              id={`${formId}-interestAccrued`}
              type="text"
              name="interestAccrued"
              value={fields.interestAccrued}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-totalClaimAmount`} className="block font-bold text-slate-700 mb-1">
              Total Claim (Principal + Int.)
            </label>
            <input
              id={`${formId}-totalClaimAmount`}
              type="text"
              name="totalClaimAmount"
              value={fields.totalClaimAmount}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-emerald-800 font-extrabold focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      {/* Stacked Server-Rendered Complete Letters (Archetype P2 Core Requirement: All 3 tone variants + Affidavit visible in DOM) */}
      <div className="space-y-6">
        {(["polite", "firm", "final", "affidavit"] as NoticeVariantKey[]).map((key) => {
          const item = allDocuments[key];
          const isHighlighted = activeVariant === key;
          return (
            <article
              key={key}
              id={`template-card-${key}`}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isHighlighted
                  ? "border-[#DC2626] ring-2 ring-red-500/15 shadow-md"
                  : "border-slate-200 shadow-xs"
              }`}
            >
              <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      • Use when: {item.whenToUse}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.subtitle}</p>
                </div>

                {/* Action Buttons: Copy / Download .doc / Print */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(key)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    <span>{copiedKey === key ? "✓ Copied!" : "Copy Format"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadDoc(key)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                  >
                    <span>Download .doc</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePrint(key)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                  >
                    <span>Print / PDF</span>
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-slate-50/50">
                <pre className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[540px] overflow-y-auto select-all">
                  {item.content}
                </pre>
                <p className="text-[11px] text-slate-500 mt-3 flex flex-wrap items-center justify-between gap-2">
                  <span>
                    <strong>Legal Validity Note:</strong> Dispatch on your company letterhead via Registered Post (RPAD) AND official email/WhatsApp (admissible under Section 63 BSA, 2023). Never insert an advocate&apos;s name or enrolment number unless formally issued by a licensed advocate.
                  </span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
