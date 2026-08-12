export interface LoanRecoveryNoticeWeek1Data {
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
  invoices?: { invoiceNo: string; invoiceDate: string; amount: number }[]
  category?: string
  clientAuthRepName?: string
  clientAuthRepPhone?: string
  disbursementDate?: string
  asOnDate?: string
}

export function fillLoanRecoveryNoticeWeek1Template(data: LoanRecoveryNoticeWeek1Data): string {
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
    complainantName = "Actoloan",
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
<title>Legal Demand Notice</title>
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
  .notice-body p {
    margin-bottom: 12px;
    text-align: justify;
  }
  .notice-body ol, .notice-body ul {
    margin-bottom: 12px;
    padding-left: 24px;
  }
  .notice-body li { margin-bottom: 6px; }
  .signature-block { margin-top: 24px; }
  .signature-firm { font-weight: bold; font-size: 12pt; }
  .signature-sub { font-size: 12pt; margin-top: 4px; color: #333; }
</style>
</head>
<body>

<div class="notice-title">LEGAL DEMAND NOTICE</div>
<div class="dispatch-mode">THROUGH EMAIL/WHATSAPP</div>

<div class="addressee">
  <p>To,</p>
  <p><strong>${clientName}</strong></p>
  ${clientPhone ? `<p>Mobile: <strong>${clientPhone}</strong></p>` : ''}
  ${clientEmail ? `<p>Email: <strong>${clientEmail}</strong></p>` : ''}
  <p><strong>${clientAddress}</strong></p>
</div>

<div class="subject-line">
  <strong>Subject: Legal Demand Notice for Recovery of Outstanding Loan Amount &amp; Filing of Police Complaint.</strong>
</div>

<div class="salutation">Dear Sir/Madam,</div>

<div class="notice-body">
  <p>Under the instructions and authority of our client, <strong>${complainantName}</strong> ("Our Client") having its registered address at <strong>${complainantAddress}</strong>, we hereby issue this First Legal Demand Notice, calling upon you to immediately discharge your outstanding financial obligations arising from the loan facility availed by you from Our Client.</p>

  <p>You had approached Our Client for financial assistance and, pursuant to your request, Our Client sanctioned a loan bearing Loan ID <strong>${invoiceNo || "__________"}</strong>, vide Disbursement Date <strong>${disbursementDate || invoiceDate || "__________"}</strong>, for a sum of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong>, which was duly disbursed to you on Disbursement Date <strong>${disbursementDate || invoiceDate || "__________"}</strong>, upon your acceptance and execution of the Loan Agreement, repayment schedule, sanction terms, declarations, mandates, electronic records, and all other ancillary loan documents (collectively referred to as the "Loan Documents"), whether executed physically, electronically, or through any digital mode made available by Our Client.</p>

  <p>By voluntarily executing and accepting the Loan Documents, you unequivocally agreed to comply with all contractual obligations, including timely repayment of the loan together with applicable interest, penal interest, default charges, processing fees, taxes, and all other contractual dues in accordance with the agreed repayment schedule.</p>

  <p>Despite availing and utilizing the financial assistance extended by Our Client, you have wilfully failed to honour your repayment obligations. Your repeated defaults have rendered your loan account irregular, and in terms of the Loan Agreement, the entire outstanding liability has become immediately due and payable.</p>

  <p>As per the books of accounts and electronic records maintained by Our Client, as on <strong>${asOnDate || noticeDate}</strong>, an amount of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> ("Outstanding Amount including 2% Penalty") remains due and payable under Loan ID <strong>${invoiceNo || "__________"}</strong>. The Outstanding Amount comprises the outstanding principal, accrued contractual interest, overdue interest, default interest, penal charges, processing charges, applicable taxes, and all other contractual dues. Your liability continues to increase each day until full realization of the dues.</p>

  <p>Prior to issuing this Notice, Our Client made several bona fide attempts to resolve the matter through calls, SMS, WhatsApp messages, emails, and payment reminders. Despite repeated opportunities, you have willfully failed to regularize your account, constituting a material breach of your contractual obligations and compelling Our Client to initiate appropriate legal proceedings.</p>

  <p>Your deliberate failure to discharge the outstanding dues, despite repeated opportunities, constitutes a clear breach of your contractual obligations, leaving Our Client with no option but to initiate appropriate legal proceedings for recovery of its lawful dues.</p>

  <p>Our Client is in possession of complete documentary and electronic records relating to the loan transaction, including the Loan Documents, KYC records, account statements, repayment history, digital execution records, electronic consent, bank records, and all other relevant evidence. The same shall be duly relied upon before the competent judicial, arbitral, or statutory authorities in support of Our Client's claims.</p>

  <p>You are further put to notice that your continued default may be reported to the relevant Credit Information Companies in accordance with the Credit Information Companies (Regulation) Act, 2005, applicable RBI guidelines, and other governing laws. Such reporting may adversely affect your creditworthiness, CIBIL score, and future eligibility to obtain loans, credit facilities, or other banking services.</p>

  <p>Further, where the facts and material available disclose dishonest intention, fraudulent inducement, dishonest retention or misappropriation of entrusted funds, deception, or acts amounting to unlawful intimidation, Our Client shall initiate appropriate criminal proceedings before the competent authorities, including for offences punishable under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (Cheating), carrying punishment of imprisonment up to seven (7) years and fine; Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust), punishable with imprisonment, fine, or both; and Section 351 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Intimidation), punishable with imprisonment, fine, or both, together with such other civil and criminal proceedings and offences as may be disclosed during investigation or otherwise permissible in law.</p>

  <p>Kindly note that Our Client is no longer inclined to extend unlimited opportunities for repayment. This Notice constitutes your final opportunity to avoid legal consequences.</p>

  <p>Accordingly, you are hereby finally called upon to:</p>
  <ol>
    <li>Pay the Outstanding Amount (Including 2% Penalty) of <strong>&#8377;${formattedAmount} (Rupees ${pendingWords} Only)</strong> within Three (3) days from the date of receipt of this Notice; or</li>
    <li>If you dispute the Outstanding Amount or any component thereof, submit a detailed written representation along with complete documentary evidence within the aforesaid period on <strong><a href="mailto:${data.clientEmail || 'Legal@actoloan.com'}" style="color: blue; text-decoration: underline;">${data.clientEmail || 'Legal@actoloan.com'}</a></strong>. For an amicable solution you can also reach out to <strong>Mr. Raman Jhakal</strong> on <strong>9896197115</strong>.</li>
  </ol>

  <p>TAKE FURTHER NOTICE that if you fail to clear the Outstanding Amount or submit a valid written response within Three (3) days from receipt of this Notice, Our Client shall, without any further notice, initiate all appropriate legal proceedings available under law, including but not limited to:</p>
  <ol>
    <li>Recovery proceedings before the competent Court, Arbitral Tribunal, or other judicial/quasi-judicial authority having jurisdiction;</li>
    <li>Lodging of an appropriate complaint before the competent Police Authorities, wherever warranted by the facts and applicable law; and</li>
    <li>Communication with the references furnished by you at the time of availing the loan facility, strictly in accordance with applicable law.</li>
  </ol>

  <p>Our Client further reserves all civil, contractual, statutory, criminal, arbitral, and other legal remedies available under law and shall rely upon all documentary and electronic evidence in support of its claims.</p>

  <p>Our Client shall seek recovery of, inter alia:</p>
  <ul>
    <li>The entire Outstanding Amount;</li>
    <li>Continuing contractual interest, overdue interest and default interest until full realization;</li>
    <li>Penal charges and all other contractual dues;</li>
    <li>Advocate's fees, legal expenses, court fees, arbitration costs, recovery expenses, execution charges and all incidental costs;</li>
    <li>Attachment, execution and enforcement of all remedies available under the Loan Documents and applicable law; and</li>
    <li>Any other reliefs, damages, compensation and remedies available under the Loan Documents and applicable law.</li>
  </ul>

  <p>Please further note that once legal proceedings are initiated, you may become liable for substantial additional financial liabilities towards litigation costs, legal representation, arbitration fees, execution expenses and other incidental charges, all of which shall be claimed from you in accordance with law.</p>

  <p>Nothing contained herein shall be construed as a waiver of any rights or remedies available to Our Client, all of which are expressly reserved.</p>

  <p>This Notice is issued without prejudice to all rights, remedies, and causes of action available to Our Client under the Loan Documents and applicable law.</p>

  <p>Govern yourself accordingly, failing which Our Client shall proceed strictly in accordance with law without any further correspondence or indulgence.</p>

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
