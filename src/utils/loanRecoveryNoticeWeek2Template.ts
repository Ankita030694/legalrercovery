import { getTimesFontFaceCSS, getBookmanFontFaceCSS } from './noticeFonts'

export interface LoanRecoveryNoticeWeek2Data {
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
  timesRegularBase64?: string
  timesBoldBase64?: string
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
  disbursedAmount?: number | string
}

export function fillLoanRecoveryNoticeWeek2Template(data: LoanRecoveryNoticeWeek2Data): string {
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
    timesRegularBase64,
    timesBoldBase64,
    noticeRef,
    complainantName = "ActoLoan",
    complainantAddress = "SHOP NO-4, GROUND FLOOR, EXTN-2, NEAR NEW SARASWATI PUBLIC SCHOOL NANGLOI, Nangloi, West Delhi, New Delhi, Delhi, India,110041",
    isSpecialUser = false,
    invoiceNo,
    invoiceDate,
    disbursementDate,
    asOnDate,
    disbursedAmount,
    clientAuthRepName,
    clientAuthRepPhone,
  } = data

  const repName = clientAuthRepName ? (clientAuthRepName.toLowerCase().startsWith('mr.') ? clientAuthRepName : `Mr. ${clientAuthRepName}`) : 'Mr. Raman Jhakal'
  const repPhone = clientAuthRepPhone || '9896197115'

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

  ${getTimesFontFaceCSS(timesRegularBase64, timesBoldBase64)}
  ${getBookmanFontFaceCSS(bookmanFontBase64)}

  body {
    text-align: justify;
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

<div class="notice-title">RECALL NOTICE</div>
<div class="dispatch-mode">THROUGH EMAIL / WHATSAPP / SPEED POST</div>

<div class="addressee">
  <p>To,</p>
  <p><strong>${clientName}</strong></p>
  ${clientPhone ? `<p>Mobile: <strong>${clientPhone}</strong></p>` : ''}
  ${clientEmail ? `<p>Email: <strong>${clientEmail}</strong></p>` : ''}
  <p><strong>${clientAddress}</strong></p>
</div>

<div class="subject-line">
  <strong>Subject: Loan Recall-cum-Recovery Notice and Intimation of Filing Complaint before the Commissioner of Police for Offences under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023</strong>
</div>

<div class="salutation">Dear Sir/Madam,</div>

<div class="notice-body">
  <p>Under the instructions and authority of our client, <strong>${complainantName}</strong> ("Our Client") having its registered address at <strong>${complainantAddress}</strong>, we hereby issue this Final Demand Cum Legal Action Notice, calling upon you to immediately discharge your outstanding financial obligations arising from the loan facility availed by you from Our Client.</p>

  <p>Reference is invited to the loan bearing Loan ID <strong>${invoiceNo || "__________"}</strong>, sanctioned by Our Client on <strong>${disbursementDate || "__________"}</strong> (Disbursement Date) for a sum of <strong>&#8377;${disbursedAmount ? parseFloat(String(disbursedAmount)).toLocaleString('en-IN') : "__________"} (Rupees ${disbursedAmount ? amountToWords(String(disbursedAmount)) : "__________________"} Only)</strong> (Disbursed Amount) and disbursed to you on <strong>${disbursementDate || "__________"}</strong> (Disbursement Date) pursuant to the Loan Agreement, repayment schedule, sanction terms and other connected transaction documents executed/accepted by you ("Loan Documents"). The terms, conditions, rights and obligations governing the said loan facility are exhaustively detailed in the Loan Documents, which you have read, understood and voluntarily agreed to be bound by.</p>

  <p>By voluntarily executing and accepting the Loan Documents, you unequivocally agreed to repay the loan amount together with contractual interest, default interest, penal charges, processing fees, taxes, and all other contractual dues in accordance with the agreed repayment schedule and the terms and conditions governing the loan facility.</p>

  <p>Despite your contractual obligations, you committed an Event of Default by persistently failing to adhere to the agreed repayment schedule. Consequently, Our Client previously issued a <strong>First Legal Demand Notice</strong>, followed by this notice, whereby the entire loan facility was recalled and the entire outstanding liability was declared immediately due and payable.</p>

  <p>Despite repeated telephonic calls, recovery calls, emails, SMS notifications, WhatsApp communications (where applicable), reminder communications, and other electronic correspondence, you have neither responded nor made any sincere effort to regularize your loan account. Even the references and contact details voluntarily furnished by you during the loan application process were contacted solely for facilitating communication with you. However, no response or payment has been received from your end.</p>

  <p>Our records further indicate that your income continues to be received by you in the bank account disclosed during the loan application process. Despite having a regular source of income, you have deliberately failed to honour your repayment obligations and have chosen to ignore every opportunity extended by Our Client for an amicable resolution.</p>

  <p>Further, at the time of applying for the loan, you voluntarily furnished your income details, including statement of accounts and a stable source of income and expressly consented to the verification and use of such information in accordance with the Loan Documents and applicable law. In the event of your continued default, Our Client reserves its right, to the extent legally permissible and contractually authorized, to communicate with your references provided by you at the time of taking the loan.</p>

  <p>As per the books of accounts, loan records and electronic records maintained by Our Client, as on <strong>${asOnDate || noticeDate}</strong>, an amount of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> ("Outstanding Amount including 2% penalty") remains due and payable by you in respect of Loan ID <strong>${invoiceNo || "__________"}</strong>. The Outstanding Amount comprises the principal outstanding, accrued contractual interest, overdue interest, default interest, penal charges, processing charges, applicable taxes and all other contractual dues payable under the Loan Documents. Your liability continues to increase every day on account of continuing contractual interest, default interest and other applicable contractual charges until full realization.</p>

  <p>Your continued failure to honour your contractual obligations despite repeated opportunities demonstrates complete disregard for the contractual commitments voluntarily undertaken by you while availing the loan facility. Your persistent default has caused substantial financial loss and prejudice to Our Client and has compelled Our Client to initiate formal legal action.</p>

  <p>It is further brought to your notice that despite repeated opportunities and prior legal notices, Our Client has already lodged a complaint before the jurisdictional Police Station having territorial jurisdiction over the address furnished by you at the time of availing the loan facility, placing on record the complete factual matrix together with supporting documentary material. The said complaint has been lodged without prejudice to Our Client's contractual and civil remedies and shall be pursued in accordance with applicable law.</p>

  <p>Our Client has preserved complete documentary and electronic evidence relating to the loan transaction, including but not limited to the loan application, KYC documents, sanction records, repayment history, account statements, digitally executed Loan Documents, OTP authentication logs, IP logs, electronic execution records, correspondence, emails, SMS communications, WhatsApp communications, payment records, bank records and all other electronic evidence. Our Client expressly reserves its right to rely upon all such records before the competent Courts, Arbitration Tribunal, Police Authorities and all other judicial or quasi-judicial forums.</p>

  <p><strong>Please further note that your continued default may be reported to one or more Credit Information Companies including TransUnion CIBIL Limited, Experian Credit Information Company of India Private Limited, CRIF High Mark Credit Information Services Private Limited and Equifax Credit Information Services Private Limited in accordance with the Credit Information Companies (Regulation) Act, 2005, applicable Reserve Bank of India directions and other applicable laws. Such reporting may seriously and adversely affect your credit score, financial reputation and future eligibility to obtain loans, credit cards or any other banking or financial facilities.</strong></p>

  <p>This Notice constitutes your final and non-extendable opportunity to discharge your contractual liability.</p>

  <p>You are hereby finally called upon to:</p>
  <ol>
    <li>Pay the entire Outstanding Amount (including 2% penalty) of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> within Seven (7) days from the date of receipt of this Notice; or</li>
    <li>If you dispute the Outstanding Amount or any component thereof, submit a detailed written representation supported by complete documentary evidence within the aforesaid period on <strong>${clientEmail || 'Legal@actoloan.com'}</strong>. For an amicable solution you can also reach out to <strong>${repName}</strong> on <strong>${repPhone}</strong>.</li>
  </ol>

  <p class="take-notice-heading"><strong>TAKE FURTHER NOTICE</strong></p>

  <p>Upon your failure to comply with this Final Notice within the stipulated period, Our Client shall, without issuing any further notice or granting any further opportunity, initiate all appropriate legal proceedings before the competent Court(s), Arbitration Tribunal(s), Recovery Forum(s) and other competent judicial or quasi-judicial authorities for recovery of its lawful dues and shall seek, inter alia:</p>
  <ol>
    <li>Recovery of the entire Outstanding Amount;</li>
    <li>Continuing contractual interest, overdue interest, default interest and all contractual charges until full realization;</li>
    <li>Penal charges and all other dues payable under the Loan Documents;</li>
    <li>Advocate's fees, court fees, arbitration costs, execution expenses, recovery charges, litigation expenses and all incidental costs;</li>
    <li>Attachment, enforcement and execution of all orders, decrees or arbitral awards as may be passed by the competent authority;</li>
    <li>Any other monetary, contractual, statutory or equitable relief available under the Loan Documents and applicable law.</li>
  </ol>

  <p>Further, where the facts and material available disclose dishonest intention, fraudulent inducement, dishonest retention or misappropriation of entrusted funds, deception, or acts amounting to unlawful intimidation, Our Client shall initiate appropriate criminal proceedings before the competent authorities, including for offences punishable under <strong>Section 318 of the Bharatiya Nyaya Sanhita, 2023</strong> (Cheating), carrying punishment of imprisonment up to seven (7) years and fine; <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023</strong> (Criminal Breach of Trust), punishable with imprisonment, fine, or both; and <strong>Section 351 of the Bharatiya Nyaya Sanhita, 2023</strong> (Criminal Intimidation), punishable with imprisonment, fine, or both, together with such other civil and criminal proceedings and offences as may be disclosed during investigation or otherwise permissible in law.</p>

  <p>You are further informed that Our Client shall continue to pursue every remedy available under the Loan Documents and applicable law, including reliance upon the police complaint already lodged, institution of civil recovery proceedings, arbitration proceedings, execution proceedings and all other legal remedies available for enforcement of its rights.</p>

  <p>Your continued failure to respond despite repeated telephonic calls, recovery efforts, legal notices and opportunities for amicable settlement shall be placed on record before the competent forum as evidence that you were afforded every reasonable opportunity to regularize your account, which you consciously failed to avail.</p>

  <p>Any delay caused solely due to your conduct shall render you liable for all additional contractual interest, legal costs, advocate's fees, court fees, arbitration costs, recovery charges, execution expenses and all incidental expenses incurred by Our Client in enforcing its lawful rights.</p>

  <p>Nothing contained herein shall be construed as limiting, waiving, relinquishing, novating or otherwise prejudicing any contractual, statutory, equitable or other rights, claims, causes of action or remedies available to Our Client, all of which are expressly reserved.</p>

  <p>This Notice is issued without prejudice to all rights and remedies available to Our Client under the Loan Documents, applicable statutes, common law, equity and the applicable regulatory framework governing lending, recovery and enforcement proceedings.</p>

  <p>Govern yourself accordingly. Failing compliance within the time stipulated herein, Our Client shall proceed strictly in accordance with law without any further correspondence, and entirely at your risk as to costs and legal consequences.</p>

  <p><strong>Further take notice that</strong>, in the event you fail to liquidate the Outstanding Amount within Seven (7) days from the date of receipt of this Notice, Our Client shall, without any further reference to you, be constrained to lodge an appropriate complaint before the office of the jurisdictional Commissioner of Police, as applicable, having territorial jurisdiction over the residential address furnished by you in your Aadhaar and other KYC documents at the time of availing the loan facility, together with all supporting documentary and electronic evidence. Such complaint shall be in addition to, and not in derogation of, Our Client's rights to initiate civil, contractual, arbitral, recovery, or any other proceedings available under applicable law.</p>

  <p>A copy of this Notice is retained in our office for future reference and legal proceedings.</p>
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
