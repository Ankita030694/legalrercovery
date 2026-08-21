import { getTimesFontFaceCSS } from './noticeFonts'

export interface RecoveryNoticeWeek1Data {
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
  timesRegularBase64?: string
  timesBoldBase64?: string
  noticeRef?: string
  complainantName?: string
  complainantAddress?: string
  isSpecialUser?: boolean
  invoiceNo?: string
  invoiceDate?: string
  invoices?: { invoiceNo: string; invoiceDate: string; amount: number }[]
  category?: string
}

export function fillWeek1NoticeTemplate(data: RecoveryNoticeWeek1Data): string {
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
    timesRegularBase64,
    timesBoldBase64,
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
    // Simple conversion for common values — expand as needed
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
<title>Legal Demand Notice – Notice 1</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  ${getTimesFontFaceCSS(timesRegularBase64, timesBoldBase64)}

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
  .advocates-row {
    display: flex;
    justify-content: space-between;
    font-size: 10.5pt;
    margin-bottom: 6px;
    margin-top: 10px;
  }
  .advocate-col-left {
    text-align: left;
    margin-left: 10px;
  }
  .advocate-col-right {
    text-align: right;
    margin-right: 10px;
    font-weight: bold;
    font-size: 9pt;
    line-height: 1.4;
  }
  .advocate-name {
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3px;
  }
  .advocate-email {
    color: #000;
  }
  .advocate-email.blue {
    color: #0066cc;
    text-decoration: underline;
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
                <td style="text-align: left; border: none; padding: 2px 0;">Ref: <strong>${noticeRef || "AMA/LRN-WEEK1"}</strong></td>
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
  <div class="notice-title">LEGAL DEMAND NOTICE</div>
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

    <p>Under instructions from and on behalf of our client <strong>${complainantName}</strong>, residing at <strong>${complainantAddress}</strong>, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.</p>

    <p>It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of <strong>INR ${amountPending}/- (Rupees ${pendingWords} Only)</strong>${annexureReference} is still due/pending towards our client.</p>

    <p>Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.</p>

    <p>You are therefore hereby requested to:</p>
    <p>1. Clear/pay the outstanding amount of <strong>INR ${amountPending}/- (Rupees ${pendingWords} Only)</strong>; and/or</p>
    <p>2. Resolve the matter amicably within 7 (Seven) days from the receipt of this notice.</p>

    <p>In the event that you dispute the claim or amount, you are requested to provide your written response along with supporting documents within the aforesaid period for appropriate consideration.</p>

    <p>Please take notice that failure to respond or resolve the matter within the stipulated time may compel our client to initiate appropriate legal proceedings and remedies available under applicable laws, entirely at your own risk as to costs and consequences.</p>

    <p>This notice is being issued without prejudice to all rights, claims, remedies, and legal actions available to our client under law.</p>

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
