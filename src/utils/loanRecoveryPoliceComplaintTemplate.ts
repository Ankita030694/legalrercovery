import { getTimesFontFaceCSS, getBookmanFontFaceCSS } from './noticeFonts'

export interface LoanRecoveryPoliceComplaintData {
  clientName: string
  clientPhone: string
  clientAddress: string
  clientEmail?: string
  amountPending: string
  noticeDate: string
  noticeRef?: string
  complainantName?: string
  complainantPhone?: string
  complainantEmail?: string
  complainantAddress?: string
  policeStationName: string
  policeStationAddress: string
  policeStationEmail?: string
  invoiceNo?: string
  invoiceDate?: string
  disbursementDate?: string
  headerLogoBase64?: string
  stampLogoBase64?: string
  barStampLogoBase64?: string
  signatureBase64?: string
  bookmanFontBase64?: string
  timesRegularBase64?: string
  timesBoldBase64?: string
  isSpecialUser?: boolean
  category?: string
  clientAuthRepName?: string
  clientAuthRepPhone?: string
  disbursedAmount?: number | string
}

export function fillLoanRecoveryPoliceComplaintTemplate(data: LoanRecoveryPoliceComplaintData): string {
  const {
    clientName,
    clientPhone,
    clientAddress,
    clientEmail,
    amountPending,
    noticeDate,
    policeStationName,
    policeStationAddress,
    policeStationEmail,
    complainantName = "ActoLoan",
    clientAuthRepPhone,
    complainantPhone = clientAuthRepPhone || "+91-XXXXXXXXXX",
    complainantEmail = "Legal@actoloan.com",
    complainantAddress = "SHOP NO-4, GROUND FLOOR, EXTN-2, NEAR NEW SARASWATI PUBLIC SCHOOL NANGLOI, Nangloi, West Delhi, New Delhi, Delhi, India,110041",
    invoiceNo,
    invoiceDate,
    disbursementDate,
    disbursedAmount,
    headerLogoBase64,
    stampLogoBase64,
    barStampLogoBase64,
    signatureBase64,
    bookmanFontBase64,
    timesRegularBase64,
    timesBoldBase64,
    isSpecialUser,
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
  
  // Clean up the formatting for the number
  const formattedAmount = amountPending

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Loan Recovery Police Complaint</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  ${getTimesFontFaceCSS(timesRegularBase64, timesBoldBase64)}
  ${getBookmanFontFaceCSS(bookmanFontBase64)}

  body {
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
    padding: 0;
  }
  .notice-title {
    text-align: center;
    font-size: 14pt;
    font-weight: bold;
    text-decoration: underline;
    margin: 10px 0 15px;
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
  .details-title {
    font-size: 12pt;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
    margin-top: 15px;
  }
  .details-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
  }
  .details-table td {
    padding: 3px 0;
    vertical-align: top;
    font-size: 12pt;
  }
  .salutation { margin: 15px 0 8px; font-weight: bold; }
  .notice-body { text-align: justify; }
  .notice-body p { margin-bottom: 12px; text-align: justify; }
  .notice-body ol, .notice-body ul { margin-bottom: 12px; padding-left: 24px; }
  .notice-body li { margin-bottom: 6px; }
  .section-heading { font-weight: bold; font-size: 12pt; margin: 15px 0 8px 0; text-transform: uppercase; }
  .signature-block { margin-top: 24px; text-align: right; }
  .signature-firm { font-weight: bold; font-size: 12pt; }
</style>
</head>
<body>

<div class="notice-title">CRIMINAL POLICE COMPLAINT</div>

<div class="addressee">
  <p>TO,</p>
  <p>The Station House Officer,</p>
  <p>${policeStationName},</p>
  <p>${policeStationAddress}</p>
</div>

<div class="subject-line">
  <strong>SUBJECT: COMPLAINT ON BEHALF OF ${complainantName.toUpperCase()} AGAINST ${clientName.toUpperCase()} FOR NON-PAYMENT OF DUES AND BREACH OF TRUST AND CHEATING</strong>
</div>

<div class="details-title">COMPLAINANT DETAILS</div>
<table class="details-table">
  <tr>
    <td style="width: 140px; font-weight: bold;">Name:</td>
    <td><strong>${complainantName}</strong></td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Phone Number:</td>
    <td><strong>${complainantPhone}</strong></td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Email ID:</td>
    <td><strong><a href="mailto:${complainantEmail}">${complainantEmail}</a></strong></td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Address:</td>
    <td><strong>${complainantAddress}</strong></td>
  </tr>
</table>

<div class="details-title">ACCUSED DETAILS</div>
<table class="details-table">
  <tr>
    <td style="width: 140px; font-weight: bold;">Name:</td>
    <td><strong>${clientName}</strong></td>
  </tr>
  ${clientPhone ? `<tr><td style="font-weight: bold;">Phone Number:</td><td><strong>${clientPhone}</strong></td></tr>` : ''}
  ${clientEmail ? `<tr><td style="font-weight: bold;">Email ID:</td><td><strong><a href="mailto:${clientEmail}">${clientEmail}</a></strong></td></tr>` : ''}
  <tr>
    <td style="font-weight: bold;">Address:</td>
    <td><strong>${clientAddress}</strong></td>
  </tr>
</table>

<div class="salutation">Respected Sir/Madam,</div>

<div class="notice-body">
  <p>Under the instructions and authority of our client, <strong>${complainantName}</strong> (“Our Client”), we, through our authorised legal representatives, hereby submit the present complaint against the above-named borrower/defaulter (“Accused”) in relation to the loan facility availed by the Accused from Our Client and the subsequent deliberate and wilful failure to discharge the outstanding financial liability arising therefrom.</p>

  <p class="section-heading">1. LOAN FACILITY AVAILED BY THE ACCUSED</p>
  <p>That the Accused had approached and availed a loan facility from Our Client, ${complainantName}, pursuant to the terms and conditions governing the said loan facility and the documents, declarations, undertakings and agreements executed/accepted by the Accused in connection therewith.</p>
  
  <p>The loan was duly sanctioned and disbursed to the Accused in accordance with the applicable terms and conditions.</p>
  <ul>
    <li><strong>Loan ID:</strong> ${invoiceNo || "__________"}</li>
    <li><strong>Disbursement Date:</strong> ${disbursementDate || "__________"}</li>
    <li><strong>Loan Amount:</strong> INR ${disbursedAmount ? parseFloat(String(disbursedAmount)).toLocaleString('en-IN') : "__________"}/-</li>
    <li><strong>Outstanding Amount including 2% Penalty:</strong> INR ${formattedAmount}/- (Rupees ${pendingWords} Only)</li>
  </ul>
  
  <p>The Accused was contractually and legally bound to repay the loan amount together with applicable interest, charges and other amounts payable under the agreed repayment schedule.</p>

  <p class="section-heading">2. DEFAULT IN REPAYMENT</p>
  <p>That despite having availed and utilised the loan facility extended by Our Client, the Accused has failed and neglected to honour the agreed repayment obligations and has committed persistent default in repayment of the outstanding dues.</p>
  
  <p>The amount presently outstanding and payable by the Accused is <strong>INR ${formattedAmount}/- (Rupees ${pendingWords} Only)</strong>, excluding such further interest, applicable charges and other contractual amounts as may continue to accrue in accordance with the governing loan documents.</p>
  
  <p>The default is not a mere isolated delay but constitutes a continuing failure to discharge the financial obligations undertaken by the Accused towards Our Client.</p>

  <p class="section-heading">3. DELIBERATE FAILURE DESPITE REPEATED DEMANDS</p>
  <p>That Our Client, through its authorised representatives, made repeated attempts to contact the Accused and called upon the Accused to regularise the account and clear the outstanding dues.</p>
  
  <p>Despite repeated calls, messages, reminders, communications and demands, the Accused has failed and/or refused to make payment of the outstanding amount.</p>
  
  <p>The Accused has also failed to provide any lawful or bona fide justification for withholding the legitimate dues payable to Our Client.</p>
  
  <p>Such continued conduct, coupled with the circumstances surrounding the transaction and the conduct of the Accused, gives rise to serious apprehension regarding the Accused's intention and warrants appropriate inquiry and investigation by the competent authorities.</p>

  <p class="section-heading">4. DISHONEST CONDUCT AND WRONGFUL LOSS</p>
  <p>That Our Client had extended the loan facility relying upon the representations, declarations, information, documents and undertakings furnished by the Accused at the time of availing the loan.</p>
  
  <p>However, after obtaining the financial benefit of the loan facility, the Accused has failed to comply with the corresponding repayment obligations and has continued to withhold the legitimate dues of Our Client.</p>
  
  <p>As a consequence, Our Client has suffered financial loss and the Accused has wrongfully retained the amount legally payable to Our Client.</p>
  
  <p>If, upon investigation, it is found that the Accused had obtained the loan facility by furnishing false information, making dishonest representations, concealing material facts, or with a dishonest intention not to honour the repayment obligations from the inception, the same may attract the applicable penal provisions relating to cheating, dishonest inducement and other offences under the Bharatiya Nyaya Sanhita, 2023 (“BNS”) and other applicable laws.</p>

  <p class="section-heading">5. PRIMA FACIE OFFENCES DISCLOSED</p>
  <p>In view of the facts and circumstances stated hereinabove, the conduct of the Accused, subject to investigation and determination by the competent authorities, may attract offences under the applicable provisions of law, including provisions relating to:</p>
  <ul>
    <li>Cheating and dishonest inducement;</li>
    <li>Criminal breach of trust, wherever the ingredients thereof are established;</li>
    <li>Dishonest misappropriation, wherever applicable;</li>
    <li>Fraudulent or dishonest conduct in connection with the obtaining or utilisation of the loan facility;</li>
    <li>Furnishing false or misleading information/documents, if established during investigation; and</li>
    <li>Such other allied offences as may be disclosed from the facts, documents, electronic records and evidence collected during investigation.</li>
  </ul>
  
  <p>It is respectfully submitted that the present complaint is not being instituted merely on account of a civil dispute concerning recovery of money. The complaint is necessitated by the circumstances surrounding the Accused's conduct, representations, obtaining of the loan facility, subsequent conduct, persistent avoidance and other facts which require examination by the competent investigating authority.</p>

  <p class="section-heading">6. REQUEST FOR INVESTIGATION</p>
  <p>In view of the foregoing facts and circumstances, we respectfully request your good office to:</p>
  <ol>
    <li>Take cognizance of the present complaint and the allegations contained herein;</li>
    <li>Conduct an appropriate preliminary inquiry/investigation into the conduct of the Accused and the circumstances in which the loan facility was obtained and subsequently defaulted upon;</li>
    <li>Call upon and examine the Accused in relation to the loan transaction, repayment obligations and continued non-payment of the outstanding dues;</li>
    <li>Examine the relevant loan documents, KYC records, application forms, declarations, repayment records, communications, electronic records and other material evidence maintained in relation to the loan account;</li>
    <li>Take appropriate action in accordance with law if the investigation discloses the commission of any cognizable offence;</li>
    <li>Direct the Accused to cooperate with the investigation and produce such information and documents as may be lawfully required by the investigating authority; and</li>
    <li>Take such further and other action as may be deemed appropriate in accordance with law for protecting the lawful rights and interests of Our Client, ${complainantName}.</li>
  </ol>
  
  <p>Our Client reserves its right to pursue all other remedies available to it in law, including appropriate civil, contractual, arbitral and recovery proceedings for recovery of the outstanding loan dues, interest, applicable charges, costs and other amounts payable by the Accused.</p>
  
  <p>The present complaint may kindly be treated as urgent, and appropriate action may be taken in accordance with law at the earliest.</p>

  <p style="margin-top: 15px;">Thanking You,</p>
  <p style="font-weight: bold; margin-top: 5px;">For ${complainantName}</p>
  <p>Through its Authorised Legal Representatives</p>

  <div class="signature-block" style="margin-top: 30px; text-align: left;">
    <div style="margin-bottom: 8px; white-space: nowrap; width: fit-content; text-align: left;">
      ${signatureBase64 ? `<img src="data:image/png;base64,${signatureBase64}" alt="Signature" style="height: 50px; width: auto; display: inline-block; vertical-align: bottom;" />` : ''}
      ${stampLogoBase64 ? `<img src="data:image/png;base64,${stampLogoBase64}" alt="Stamp" style="height: 65px; width: auto; display: inline-block; vertical-align: bottom; margin-left: 15px;" />` : ''}
    </div>
    <p class="signature-firm">Advocate, Anuj Anand Malik</p>
    <p class="signature-firm">AMA Legal Solutions<sup>&#174;</sup></p>
  </div>

</div>

</body>
</html>`
}
