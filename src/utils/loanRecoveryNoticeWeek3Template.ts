export interface LoanRecoveryNoticeWeek3Data {
  clientName: string
  clientPhone: string
  clientAddress: string
  clientEmail?: string
  startDate: string
  amountPending: string
  noticeDate: string
  headerLogoBase64?: string
  stampLogoBase64?: string
  barStampLogoBase64?: string
  signatureBase64?: string
  bookmanFontBase64?: string
  noticeRef?: string
  complainantName?: string
  complainantAddress?: string
  isSpecialUser?: boolean
  invoiceNo?: string
  invoiceDate?: string
  disbursementDate?: string
  invoices?: { invoiceNo: string; invoiceDate: string; amount: number }[]
  category?: string
  clientAuthRepName?: string
  clientAuthRepPhone?: string
  asOnDate?: string
}

export function fillLoanRecoveryNoticeWeek3Template(data: LoanRecoveryNoticeWeek3Data): string {
  const {
    clientName,
    clientPhone,
    clientAddress,
    clientEmail,
    amountPending,
    noticeDate,
    headerLogoBase64,
    stampLogoBase64,
    barStampLogoBase64,
    signatureBase64,
    bookmanFontBase64,
    noticeRef,
    complainantName = "ActoLoan",
    complainantAddress = "SHOP NO-4, GROUND FLOOR, EXTN-2, NEAR NEW SARASWATI PUBLIC SCHOOL NANGLOI, Nangloi, West Delhi, New Delhi, Delhi, India,110041",
    isSpecialUser = false,
    invoiceNo,
    invoiceDate,
    disbursementDate,
    asOnDate,
  } = data

  function amountToWords(amount: string): string {
    const num = parseFloat(amount.replace(/,/g, ''))
    if (isNaN(num)) return amount
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    function convert(n: number): string {
      if (n < 20) return ones[n]
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '')
      if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convert(n % 100) : '')
      if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '')
      if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + convert(n % 100000) : '')
      return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + convert(n % 10000000) : '')
    }
    return convert(Math.round(num))
  }

  const pendingWords = amountToWords(amountPending)
  const parsedAmount = parseFloat(amountPending.toString().replace(/,/g, ''))
  const formattedAmount = isNaN(parsedAmount) ? amountPending : parsedAmount.toLocaleString('en-IN')

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Loan Recall Notice</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  ${bookmanFontBase64 ? `@font-face {
    font-family: 'BookmanStyle';
    src: url('data:font/woff2;base64,${bookmanFontBase64}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }` : ''}

  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.6;
    color: #000;
    background: #fff;
  }
  .notice-title {
    text-align: center;
    font-size: 14pt;
    font-weight: bold;
    text-transform: uppercase;
    margin: 14px 0 6px;
    letter-spacing: 0.5px;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    padding: 6px 0;
  }
  .dispatch-mode {
    text-align: center;
    font-size: 12pt;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .addressee {
    margin-bottom: 15px;
    font-size: 12pt;
    font-weight: bold;
    line-height: 1.4;
  }
  .addressee p { margin-bottom: 2px; }
  .subject-line {
    margin: 10px 0;
    font-size: 12pt;
    font-weight: bold;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 4px;
    text-transform: uppercase;
  }
  .salutation { margin: 10px 0 8px; }
  .notice-body { text-align: justify; }
  .notice-body p { margin-bottom: 12px; text-align: justify; }
  .notice-body ol, .notice-body ul { margin-bottom: 12px; padding-left: 24px; }
  .notice-body li { margin-bottom: 6px; }
  .take-notice-heading { font-weight: bold; font-size: 12pt; margin-bottom: 8px; text-decoration: underline; }
  .signature-block { margin-top: 24px; }
  .signature-firm { font-weight: bold; font-size: 12pt; }
</style>
</head>
<body>

<div class="notice-title">FULL AND FINAL LEGAL NOTICE</div>
<div class="dispatch-mode">THROUGH EMAIL/WHATSAPP</div>

<div class="addressee">
  <p>To,</p>
  <p><strong>${clientName}</strong></p>
  ${clientPhone ? `<p>Mobile: <strong>${clientPhone}</strong></p>` : ''}
  ${clientEmail ? `<p>Email: <strong>${clientEmail}</strong></p>` : ''}
  <p><strong>${clientAddress}</strong></p>
</div>

<div class="subject-line">
  <strong>Subject: Final Demand Cum Legal Action Notice Prior to Commencement of Recovery Proceedings and Invocation of Arbitration.</strong>
</div>

<div class="salutation">Dear Sir/Madam,</div>

<div class="notice-body">
  <p>Under the strict instructions and express authority of our Client, <strong>${complainantName}</strong> ("Our Client") having its registered address at <strong>${complainantAddress}</strong>, we hereby issue this Final Demand Cum Legal Action Notice, which shall constitute your final, irrevocable and absolute opportunity to discharge your outstanding financial liabilities. Upon expiry of the period stipulated herein, Our Client shall, without any further notice, reminder or correspondence, initiate all civil, arbitral and other legal proceedings available in law for the recovery of its lawful dues, entirely at your sole risk as to costs, liabilities and legal consequences.</p>

  <p>Reference is invited to the loan bearing the following particulars:</p>
  <ul>
    <li>Loan ID: <strong>${invoiceNo || "__________"}</strong>;</li>
    <li>Sanction Date: <strong>${invoiceDate || "__________"}</strong>;</li>
    <li>Disbursed Amount: <strong>__________</strong>;</li>
    <li>Outstanding Amount (Including 2% Penalty): <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong>.</li>
  </ul>

  <p>The aforesaid loan was sanctioned and disbursed pursuant to the Loan Agreement, Sanction Letter, repayment schedule, declarations, mandates, electronic records, digital consents and all ancillary documentation (collectively referred to as the "Loan Documents"). By voluntarily applying for, executing and accepting the loan facility, you entered into a valid, binding and legally enforceable contract and unequivocally undertook to repay the principal amount together with contractual interest, default interest, penal charges, taxes and all other applicable dues in accordance with the agreed repayment schedule. Your obligations under the Loan Documents are absolute, unconditional and continue to remain fully enforceable.</p>
  
  <p class="take-notice-heading">Wilful and Deliberate Default</p>

  <p>Despite having received and enjoyed the entire benefit of the loan facility, you have wilfully, deliberately and continuously defaulted in the repayment of your admitted financial obligations. Your persistent failure to honour the repayment schedule constitutes a material breach of the Loan Documents and has caused substantial financial loss and prejudice to Our Client.</p>

  <p>Our Client has acted with utmost fairness and patience by extending repeated opportunities to you to regularise your account. A First Legal Demand Notice was served upon you, followed by a Loan Recall Cum Recovery Notice, whereby the entire loan facility was recalled and immediate repayment was demanded. Thereafter, numerous reminders were communicated through telephone calls, emails, SMS messages and electronic communication platforms. Despite repeated demands and sufficient opportunities, you have consciously chosen to ignore your contractual obligations and have failed to liquidate your outstanding liability.</p>

  <p>Our Client's verification records further indicate that income credits, business receipts and/or other income continue to be received by you in the bank account furnished at the time of availing the loan. Your continued refusal to discharge your lawful liability, despite having an apparent financial capacity to do so, demonstrates a deliberate disregard of your contractual obligations and reflects conduct lacking in bona fides.</p>

  <p>Take notice that, as on <strong>${asOnDate || "__________"}</strong>, a sum of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> remains outstanding and legally recoverable from you ("Outstanding Amount including 2% Penalty"), comprising principal, accrued contractual interest, default interest, penal charges, processing charges, taxes and all other contractual dues. The Outstanding Amount continues to accrue additional interest and contractual charges on a daily basis until the date of actual realization.</p>

  <p class="take-notice-heading">Final Opportunity</p>

  <p>You are hereby called upon to, within Seven (7) Days from the date of receipt of this Notice:</p>
  <ol>
    <li>Pay the entire Outstanding Amount (Including 2% Penalty) of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> through a verified mode of payment acceptable to Our Client; or</li>
    <li>Produce documentary evidence establishing any bona fide dispute regarding the Outstanding Amount on <strong>${clientEmail || 'Legal@actoloan.com'}</strong>. For an amicable solution you can also reach out to Mr. Raman Jhakal on 9896197115.</li>
  </ol>

  <p>Your failure to respond within the aforesaid period shall leave no room for any inference other than your intentional refusal to honour your legally enforceable obligations, and Our Client shall proceed against you without any further opportunity.</p>

  <p class="take-notice-heading">Legal Consequences of Continued Default</p>

  <p>Upon your failure to comply, Our Client shall immediately invoke arbitration in accordance with the Loan Documents and/or institute appropriate recovery proceedings before the competent court or tribunal. Our Client shall seek a decree and/or award for recovery of the entire Outstanding Amount together with continuing contractual interest, default interest, litigation expenses, advocate's fees, arbitration costs, court fees and all other incidental and consequential costs.</p>

  <p>Our Client shall further seek every interim and final relief available in law, including attachment of your bank accounts, salary, receivables and such movable and immovable assets as may be legally attachable in execution of any award or decree obtained against you.</p>

  <p>Further, where the facts and material available disclose dishonest intention, fraudulent inducement, dishonest retention or misappropriation of entrusted funds, deception, or acts amounting to unlawful intimidation, Our Client shall initiate appropriate criminal proceedings before the competent authorities, including for offences punishable under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (Cheating), carrying punishment of imprisonment up to seven (7) years and fine; Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust), punishable with imprisonment, fine, or both; and Section 351 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Intimidation), punishable with imprisonment, fine, or both, together with such other civil and criminal proceedings and offences as may be disclosed during investigation or otherwise permissible in law.</p>

  <p>Our Client also reserves its right to report your continuing default to the appropriate Credit Information Companies, including TransUnion CIBIL, Experian, CRIF High Mark and Equifax, in accordance with applicable law and regulatory requirements. Such reporting may significantly impair your credit profile and materially affect your ability to obtain future loans, credit cards and other financial facilities.</p>

  <p class="take-notice-heading">Final Intimation</p>

  <p>Treat this Notice as your last and final opportunity.</p>

  <p>If the entire Outstanding Amount is not received by Our Client within Seven (7) Days from receipt of this Notice, legal proceedings shall be commenced forthwith without any further communication. Once such proceedings are initiated, Our Client shall pursue recovery of the entire outstanding liability together with all accrued interest, legal costs, advocate's fees, arbitration expenses and every other relief available in law, and shall not be responsible for any additional financial exposure or legal consequences arising therefrom.</p>

  <p>This Notice is issued without prejudice to all contractual, statutory, civil, criminal and equitable rights and remedies available to Our Client, all of which are expressly reserved. Nothing contained herein shall be construed as a waiver or abandonment of any right or remedy available to Our Client.</p>

  <p>A copy of this Notice is retained in our office for future reference and for production before the appropriate judicial, arbitral or statutory authorities, if required.</p>

</div>

<table style="width: 100%; border: none; margin-top: 25px;">
  <tr>
      <td style="width: 50%; vertical-align: bottom; text-align: left;">
          <div style="margin-bottom: 8px; white-space: nowrap; width: fit-content; text-align: left;">
              ${signatureBase64 ? `<img src="data:image/png;base64,${signatureBase64}" alt="Signature" style="height: 50px; width: auto; display: inline-block; vertical-align: bottom;" />` : ''}
              ${stampLogoBase64 ? `<img src="data:image/png;base64,${stampLogoBase64}" alt="Stamp" style="height: 65px; width: auto; display: inline-block; vertical-align: bottom; margin-left: 15px;" />` : ''}
          </div>
          <p class="signature-firm">Advocate, Anuj Anand Malik</p>
          <p class="signature-firm">AMA Legal Solutions<sup>&#174;</sup></p>
      </td>
      <td style="width: 50%; vertical-align: bottom; text-align: right; font-family: ${bookmanFontBase64 ? "'BookmanStyle'" : "'Bookman Old Style', Bookman, serif"}; font-size: 12pt;">
          <p style="margin-bottom: 2px;">Digitally Signed by</p>
          <p style="margin-bottom: 2px;">Anuj Anand Malik</p>
          <p style="margin-bottom: 2px;">${noticeDate}</p>
          <p style="margin-bottom: 2px;">Authorised Signature</p>
      </td>
  </tr>
</table>

</body>
</html>`
}
