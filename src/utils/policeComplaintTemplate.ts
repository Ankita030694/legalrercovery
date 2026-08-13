export interface PoliceComplaintData {
  clientName: string      // Accused Name
  clientPhone: string     // Accused Phone
  clientAddress: string   // Accused Address
  clientEmail?: string    // Accused Email
  amountPending: string   // Pending amount
  noticeDate: string      // Date
  policeStationName: string
  policeStationAddress: string
  policeStationEmail?: string
  headerLogoBase64?: string
  stampLogoBase64?: string
  signatureBase64?: string
  // Dynamic Complainant Details
  complainantName?: string
  complainantPhone?: string
  complainantEmail?: string
  complainantAddress?: string
  category?: string
  noticeRef?: string
}

export function fillPoliceComplaintTemplate(data: PoliceComplaintData): string {
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
    headerLogoBase64,
    stampLogoBase64,
    signatureBase64,
    complainantName = "Tech AMA",
    complainantPhone = "+91-XXXXXXXXXX",
    complainantEmail = "notice@amalegalsolutions.com",
    complainantAddress = "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)",
    category,
    noticeRef
  } = data



  // Convert amount to words helper
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

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>SHO Police Complaint</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-size: 11.5pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
    padding: 0;
  }

  .page {
    width: 100%;
    margin: 0 auto;
    background: #fff;
  }

  /* === TABLE-BASED LAYOUT FOR REPEATING HEADER/FOOTER === */
  table.page-layout {
    width: 100%;
    border-collapse: collapse;
  }
  table.page-layout thead td,
  table.page-layout tfoot td,
  table.page-layout tbody td {
    padding: 0;
    border: none;
  }

  /* Header Layout */
  .header-wrapper {
    padding-bottom: 8px;
  }
  .header-logo-img {
    width: 260px;
    height: 72px;
    display: block;
    margin: 0 auto 6px auto;
  }
  .header-address {
    text-align: center;
    font-size: 10.5pt;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  .advocate-name {
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3px;
  }
  .header-divider {
    border-bottom: 2px solid #000;
    margin-bottom: 15px;
  }

  /* Footer Layout */
  .footer-wrapper {
    padding-top: 10px;
  }
  .footer-inner {
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 6px 0;
  }
  .footer-table {
    width: 100%;
    border-collapse: collapse;
    border: none;
  }
  .footer-table td {
    border: none;
    padding: 0;
    vertical-align: middle;
  }
  .footer-cities {
    font-size: 8.5pt;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .footer-stamp-img {
    width: 50px;
    height: 50px;
    opacity: 0.9;
    display: block;
    margin-left: auto;
    margin-right: 5px;
  }
  
  .content-area {
    padding: 0 5px;
  }

  /* Notice title */
  .notice-title {
    text-align: center;
    font-size: 12.5pt;
    font-weight: bold;
    text-transform: uppercase;
    margin: 14px 0 6px;
    letter-spacing: 0.5px;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    padding: 6px 0;
  }
  .addressee {
    margin-bottom: 15px;
    font-size: 11pt;
    font-weight: bold;
    line-height: 1.4;
  }
  .addressee p {
    margin-bottom: 2px;
  }
  .addressee-label {
    font-weight: bold;
  }
  .subject-line {
    margin: 10px 0;
    font-size: 11.5pt;
    font-weight: bold;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 4px;
    text-align: justify;
  }
  .salutation {
    margin: 10px 0 8px;
  }
  .notice-body {
    text-align: justify;
  }
  .notice-body p {
    margin-bottom: 12px;
    text-indent: 0;
  }
  .signature-block {
    margin-top: 20px;
    text-align: left;
  }
  .signature-firm {
    font-weight: bold;
    font-size: 11.5pt;
  }
  .signature-sub {
    font-size: 10.5pt;
    margin-top: 4px;
    color: #333;
  }
  .details-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
  }
  .details-table td {
    padding: 3px 0;
    vertical-align: top;
    font-size: 11pt;
  }
  .details-title {
    font-size: 11.5pt;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
    margin-top: 10px;
  }
</style>
</head>
<body>

<div class="page">
  <table class="page-layout">
    <!-- REPEATING HEADER -->
    <thead>
      <tr>
        <td>
          <div class="header-wrapper">
            ${headerLogoBase64 ? `<img class="header-logo-img" src="data:image/png;base64,${headerLogoBase64}" width="260" height="72" alt="AMA Logo" />` : ''}
            <div class="header-address">
              <div style="font-weight: bold; font-size: 11.5pt; margin-bottom: 3px;">Advocate & Solicitors</div>
              <div>2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</div>
              <div style="font-size: 10pt; font-weight: bold; color: #333; margin-top: 3px;">
                E: <span class="blue" style="color: #0066cc; text-decoration: underline;">notice@amalegalsolutions.com</span>
              </div>
            </div>
            <table style="width: 100%; border-collapse: collapse; border: none; font-size: 10.5pt; margin-top: 10px;">
              <tr style="vertical-align: middle;">
                <td style="text-align: left; font-weight: bold; border: none; padding: 2px 0;">Advocate Anuj Anand Malik</td>
                <td style="text-align: right; font-weight: bold; border: none; padding: 2px 0; font-size: 9pt;"><strong>MEMBER - BAR COUNCIL OF DELHI</strong></td>
              </tr>
              <tr style="vertical-align: middle;">
                <td style="text-align: left; font-weight: bold; border: none; padding: 2px 0;">Advocate Shrey Arora</td>
                <td style="text-align: right; font-weight: bold; border: none; padding: 2px 0; font-size: 9pt;"><strong>MEMBER - MCIA (MUMBAI)</strong></td>
              </tr>
              <tr style="vertical-align: middle;">
                <td style="text-align: left; border: none; padding: 2px 0;"></td>
                <td style="text-align: right; font-weight: bold; border: none; padding: 2px 0; font-size: 9pt;"><strong>ASSOCIATION MEMBER - IACC</strong></td>
              </tr>
            </table>
            <table style="width: 100%; border-collapse: collapse; border: none; font-size: 10.5pt; margin-top: 12px; margin-bottom: 5px; font-weight: bold; color: #333;">
              <tr>
                <td style="text-align: left; border: none; padding: 2px 0;">Ref: <strong>${noticeRef || "AMA/COMP-POLICE"}</strong></td>
                <td style="text-align: right; border: none; padding: 2px 0;">Date: <strong>${noticeDate}</strong></td>
              </tr>
            </table>
            <div class="header-divider"></div>
          </div>
        </td>
      </tr>
    </thead>

    <!-- REPEATING FOOTER -->
    <tfoot>
      <tr>
        <td>
          <div class="footer-wrapper">
            <div class="footer-inner">
              <table class="footer-table">
                <tr>
                  <td style="width: 50px;"></td>
                  <td style="text-align: center; white-space: nowrap;">
                    <span class="footer-cities">GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI</span>
                  </td>
                  <td style="width: 50px; text-align: right; vertical-align: middle;">
                    ${stampLogoBase64 ? `<img class="footer-stamp-img" src="data:image/png;base64,${stampLogoBase64}" alt="Stamp" />` : ''}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>

    <!-- MAIN CONTENT -->
    <tbody>
      <tr>
        <td>
          <div class="content-area">

  <!-- Addressee -->
  <div class="addressee">
    <p>TO,</p>
    <p>The Station House Officer,</p>
    <p>${policeStationName},</p>
    <p>${policeStationAddress}</p>
  </div>

  <!-- Subject -->
  <div class="subject-line">
    <strong>Subject: Complaint Against ${clientName} for Cheating, Criminal Breach of Trust, Dishonest Non-Payment and Other Applicable Offences Under Bharatiya Nyaya Sanhita (BNS)</strong>
  </div>

  <!-- Complainant details -->
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
      <td><strong>${complainantEmail}</strong></td>
    </tr>
    <tr>
      <td style="font-weight: bold;">Address:</td>
      <td><strong>${complainantAddress}</strong></td>
    </tr>
  </table>

  <!-- Accused details -->
  <div class="details-title">ACCUSED DETAILS</div>
  <table class="details-table">
    <tr>
      <td style="width: 140px; font-weight: bold;">Name:</td>
      <td><strong>${clientName}</strong></td>
    </tr>
    ${clientPhone ? `<tr><td style="font-weight: bold;">Phone Number:</td><td><strong>${clientPhone}</strong></td></tr>` : ''}
    ${clientEmail ? `<tr><td style="font-weight: bold;">Email ID:</td><td><strong>${clientEmail}</strong></td></tr>` : ''}
    <tr>
      <td style="font-weight: bold;">Address:</td>
      <td><strong>${clientAddress}</strong></td>
    </tr>
  </table>

  <!-- Salutation -->
  <div class="salutation" style="font-weight: bold;">Respected Sir/Madam,</div>

  <!-- Body -->
  <div class="notice-body">

    <p>Under instructions from and on behalf of our client, namely <strong>${complainantName}</strong>, we, AMA Legal Solutions, through our authorized legal representatives, hereby submit the present complaint against the above-mentioned accused for acts involving deliberate non-payment of legitimate dues, cheating, dishonest inducement, criminal breach of trust, and wrongful financial loss caused to our client.</p>

    <p>That the accused had entered into a transaction/understanding with our client, pursuant to which an amount of <strong>INR ${amountPending}/- (Rupees ${pendingWords} Only)</strong> became legally due and payable to our client.</p>

    <p>Despite repeated follow-ups, calls, messages, reminders, and legal notices issued on behalf of our client, the accused has intentionally failed and neglected to clear the outstanding dues. The conduct of the accused clearly demonstrates dishonest intention from the very inception of the transaction and reflects wilful default and deliberate evasion of liability.</p>

    <p>It is pertinent to mention that the accused has continuously avoided communication and has failed to provide any lawful justification for withholding the legitimate dues of our client. Such conduct has caused severe financial loss, mental harassment, business disruption, and unnecessary hardship to our client.</p>

    <p>The actions of the accused prima facie attract offences punishable under the applicable provisions of the <strong>Bharatiya Nyaya Sanhita (BNS)</strong>, including but not limited to offences relating to:</p>
    <p style="margin-left: 20px; margin-bottom: 8px;">
      1. Cheating;<br/>
      2. Criminal Breach of Trust;<br/>
      3. Dishonest Misappropriation;<br/>
      4. Fraudulent and dishonest inducement; and<br/>
      5. Other allied offences as may be made out during investigation.
    </p>

    <p>In view of the foregoing, we respectfully request your good office to:</p>
    <p style="margin-left: 20px; margin-bottom: 8px;">
      1. Take cognizance of the present complaint;<br/>
      2. Initiate appropriate inquiry/investigation against the accused;<br/>
      3. Summon/call the accused for questioning;<br/>
      4. Take necessary legal action in accordance with law; and<br/>
      5. Protect the rights and interests of our client.
    </p>


    <p>Kindly treat this matter as urgent and take appropriate action at the earliest.</p>

  </div>

  <!-- Closing & Signature -->
  <div style="margin-top: 15px; margin-bottom: 25px;">
    <p>Thanking You,</p>
  </div>

  <!-- Signature Block with Stamp right beside the signature -->
  <div class="signature-block">
    <div style="margin-bottom: 8px; white-space: nowrap; width: fit-content; text-align: left;">
      ${signatureBase64 ? `<img src="data:image/png;base64,${signatureBase64}" alt="Signature" style="height: 50px; width: auto; display: inline-block; vertical-align: bottom; margin-right: 15px;" />` : ''}
      ${stampLogoBase64 ? `<img src="data:image/png;base64,${stampLogoBase64}" alt="Stamp" style="height: 65px; width: auto; display: inline-block; vertical-align: bottom;" />` : ''}
    </div>
    <p class="signature-firm">For AMA Legal Solutions<sup>®</sup></p>
    <p class="signature-sub">Authorized Legal Representative</p>
  </div>

          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</body>
</html>`
}
