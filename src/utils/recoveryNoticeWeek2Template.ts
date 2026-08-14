export interface RecoveryNoticeWeek2Data {
  clientName: string
  clientPhone: string
  clientAddress: string
  clientEmail?: string
  startDate: string       // engagement date e.g. "01/01/2026"
  amountPending: string   // outstanding e.g. "30,000"
  noticeDate: string      // date of notice e.g. "30/04/2026"
  headerLogoBase64?: string
  stampLogoBase64?: string
  barStampLogoBase64?: string
  signatureBase64?: string
  noticeRef?: string
  complainantName?: string
  complainantAddress?: string
  isSpecialUser?: boolean
  invoiceNo?: string
  invoiceDate?: string
  invoices?: { invoiceNo: string; invoiceDate: string; amount: number }[]
  category?: string
}

export function fillWeek2NoticeTemplate(data: RecoveryNoticeWeek2Data): string {
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
    noticeRef,
    complainantName = "Tech AMA",
    complainantAddress = "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)",
    isSpecialUser = false,
    invoiceNo,
    invoiceDate,
    invoices,
    category,
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
  let invoiceSuffix = "";
  let annexureReference = "";
  if (invoices && invoices.length > 0) {
    invoiceSuffix = ` against Invoices mentioned in Annexure - A`;
    annexureReference = ` as mentioned in Annexure - A`;
  } else if (invoiceNo && invoiceNo.trim()) {
    invoiceSuffix = ` against Invoice No: <strong>${invoiceNo.trim()}</strong>${invoiceDate && invoiceDate.trim() ? ` dated <strong>${invoiceDate.trim()}</strong>` : ""}`;
  }


  let invoicesTableHTML = "";
  if (invoices && invoices.length > 0) {
    let rows = invoices.map((inv, idx) => {
      return `
        <tr>
          <td style="border: 1px solid #000; padding: 4px; text-align: center;">${idx + 1}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: center;">${inv.invoiceNo || "-"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: center;">${inv.invoiceDate || "-"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">Rs. ${inv.amount.toLocaleString("en-IN")}</td>
        </tr>
      `;
    }).join("");

    invoicesTableHTML = `
      <div style="page-break-before: always; margin-top: 20px;">
        <h3 style="text-align: center; margin-bottom: 10px; text-decoration: underline;">Annexure - A</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 10.5pt;">
          <thead>
            <tr>
              <th style="border: 1px solid #000; padding: 6px; background: #f0f0f0;">S.No.</th>
              <th style="border: 1px solid #000; padding: 6px; background: #f0f0f0;">Invoice No.</th>
              <th style="border: 1px solid #000; padding: 6px; background: #f0f0f0;">Date</th>
              <th style="border: 1px solid #000; padding: 6px; background: #f0f0f0;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Legal Demand Notice – Notice 2</title>
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
  .dispatch-mode {
    text-align: center;
    font-size: 10.5pt;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
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
    text-transform: uppercase;
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
    text-align: justify;
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
                <td style="text-align: left; border: none; padding: 2px 0;">Ref: <strong>${noticeRef || "AMA/LRN-WEEK2"}</strong></td>
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

  <!-- Notice Title -->
  <div class="notice-title">SECOND LEGAL DEMAND NOTICE</div>
  <div class="dispatch-mode">THROUGH EMAIL/WHATSAPP</div>

  <!-- Addressee -->
  <div class="addressee">
    <p><span class="addressee-label">To,</span></p>
    <p><strong>${clientName}</strong></p>
    ${clientPhone ? `<p>Mobile: <strong>${clientPhone}</strong></p>` : ''}
    ${clientEmail ? `<p>Email: <strong>${clientEmail}</strong></p>` : ''}
    <p><strong>${clientAddress}</strong></p>
  </div>

  <!-- Subject -->
  <div class="subject-line">
    <strong>Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹<strong>${amountPending}</strong> Towards <strong>${complainantName}</strong>${invoiceSuffix}</strong>
  </div>

  <!-- Salutation -->
  <div class="salutation">Dear Sir/Madam,</div>

  <!-- Body -->
  <div class="notice-body">

    <p>Under instructions and authority from our client <strong>${complainantName}</strong>, residing/having office at <strong>${complainantAddress}</strong>, we hereby issue the present Second and Final Legal Notice calling upon you to immediately clear the outstanding dues/claim amounting to <strong>INR ${amountPending}/- (Rupees ${pendingWords} Only)</strong>${annexureReference} payable towards our client arising out of transactions, services, agreements, commitments, business dealings, or financial obligations undertaken by you.</p>

    <p>Despite repeated reminders, communications, and an earlier legal notice served upon you, you have failed to regularize the matter or provide any satisfactory response. Your conduct clearly reflects deliberate negligence, avoidance, and non-compliance towards lawful obligations owed to our client.</p>

    <p>It is pertinent to mention that if any person dishonestly retains money, intentionally avoids payment despite liability, induces another party under false assurances, or causes wrongful financial loss, such actions may attract legal consequences under applicable provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong>, including but not limited to provisions relating to:</p>
    
    <p style="margin-left: 20px; margin-bottom: 8px;">1. Cheating and dishonest inducement;<br/>
    2. Criminal breach of trust;<br/>
    3. Fraudulent or dishonest conduct causing wrongful loss.</p>

    <p>Our client still wishes to provide you with a final opportunity to amicably resolve the matter without initiating formal legal proceedings.</p>

    <p>You are therefore finally called upon to:</p>
    <p style="margin-left: 20px; margin-bottom: 8px;">1. Make payment of the outstanding amount of <strong>INR ${amountPending}/- (Rupees ${pendingWords} Only)</strong> within 7 (Seven) days from receipt of this notice; OR<br/>
    2. Provide a written explanation along with documentary proof disputing the claim within the aforesaid period.</p>

    <p>Kindly take notice that upon failure to comply, our client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent authorities/courts/forum, including filing complaints before the appropriate police authorities and legal forums, entirely at your own risk as to costs, liabilities, and consequences.</p>

    <p>Please further note that any continued avoidance, non-response, or intentional withholding of payment may be relied upon as adverse conduct in future legal proceedings.</p>

    <p>This notice is issued without prejudice to all legal rights and remedies available to our client under applicable law.</p>
    
    <p>A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.</p>

  </div>

  ${invoicesTableHTML}

  <!-- Signature Block with Stamp right beside the signature -->
  <div class="signature-block">
    <div style="margin-bottom: 8px; white-space: nowrap; width: fit-content; text-align: left;">
      ${signatureBase64 ? `<img src="data:image/png;base64,${signatureBase64}" alt="Signature" style="height: 50px; width: auto; display: inline-block; vertical-align: bottom; margin-right: 15px;" />` : ''}
      ${isSpecialUser && barStampLogoBase64 ? `<img src="data:image/png;base64,${barStampLogoBase64}" alt="Stamp" style="height: 65px; width: auto; display: inline-block; vertical-align: bottom;" />` : (stampLogoBase64 ? `<img src="data:image/png;base64,${stampLogoBase64}" alt="Stamp" style="height: 65px; width: auto; display: inline-block; vertical-align: bottom;" />` : '')}
    </div>
    <p class="signature-firm">For AMA Legal Solutions<sup>®</sup></p>
    <p class="signature-sub">Through Authorized Signatory</p>
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
