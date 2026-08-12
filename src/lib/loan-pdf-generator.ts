import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

import { fillLoanRecoveryNoticeWeek1Template } from '@/utils/loanRecoveryNoticeWeek1Template';
import { fillLoanRecoveryNoticeWeek2Template } from '@/utils/loanRecoveryNoticeWeek2Template';
import { fillLoanRecoveryNoticeWeek3Template } from '@/utils/loanRecoveryNoticeWeek3Template';
import { fillLoanRecoveryPoliceComplaintTemplate } from '@/utils/loanRecoveryPoliceComplaintTemplate';

// Reuse the interface from pdf-generator.ts
import { PDFGeneratorParams } from '@/lib/pdf-generator';

const LOCAL_CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];

function findLocalChrome(): string | null {
  for (const p of LOCAL_CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}

function formatCurrencyIndian(amount: any): string {
  const val = typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;
  if (isNaN(val) || val === null || val === undefined) return '0';
  const x = Math.round(val).toString();
  let lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return otherNumbers.replace(/\\B(?=(\\d{2})+(?!\\d))/g, ',') + lastThree;
}

export async function generateLoanNoticePDFBuffer(params: PDFGeneratorParams): Promise<Buffer> {
  const {
    defaulterName,
    phone,
    email,
    address,
    stuckAmount,
    policeStationName,
    policeStationAddress,
    policeStationEmail,
    createdAt,
    step,
    category,
    clientName = "Actoloan",
    clientAddress = "SHOP NO-4, GROUND FLOOR, EXTN-2, NEAR NEW SARASWATI PUBLIC SCHOOL NANGLOI, Nangloi, West Delhi, New Delhi, Delhi, India,110041",
    clientAuthRepName,
    clientAuthRepPhone,
    invoiceNo,
    invoiceDate,
    disbursementDate,
    asOnDate,
    disbursedAmount,
    invoices
  } = params;

  let headerLogoBase64 = '';
  let stampLogoBase64 = '';
  let barStampLogoBase64 = '';
  let signatureBase64 = '';
  let bookmanFontBase64 = '';
  
  try {
    const publicPath = path.join(process.cwd(), 'public');
    
    const headerPath = path.join(publicPath, 'notices', 'header logo AMA .png');
    if (fs.existsSync(headerPath)) headerLogoBase64 = fs.readFileSync(headerPath, 'base64');
    
    const stampPath = path.join(publicPath, 'notices', 'AMA stamp logo.png');
    if (fs.existsSync(stampPath)) stampLogoBase64 = fs.readFileSync(stampPath, 'base64');
    
    const barStampPath = path.join(publicPath, 'notices', 'bar_stamp.png');
    if (fs.existsSync(barStampPath)) barStampLogoBase64 = fs.readFileSync(barStampPath, 'base64');
    
    const sigPath = path.join(publicPath, 'notices', 'Signature.png');
    if (fs.existsSync(sigPath)) signatureBase64 = fs.readFileSync(sigPath, 'base64');
    
    const fontPath = path.join(publicPath, 'fonts', 'LibreBaskerville-Regular.woff2');
    if (fs.existsSync(fontPath)) bookmanFontBase64 = fs.readFileSync(fontPath, 'base64');
  } catch (e) {
    console.warn('[PDF-Generator] Could not read logo PNGs:', e);
  }

  const noticeDate = formatDate(new Date().toISOString());
  const noticeRef = params.noticeRef || `LR-0000-0000-${step === 4 ? 'C4' : 'N' + step}`;

  const isSpecialUser = params.isSpecialUser || params.clientPhone?.replace(/\\D/g, '').endsWith('8700343611') || params.clientPhone?.replace(/\\D/g, '').endsWith('8130104447');

  const templateArgs = {
    clientName: defaulterName,
    clientPhone: phone,
    clientAddress: address || 'Address on file',
    clientEmail: email,
    startDate: createdAt ? formatDate(createdAt) : noticeDate,
    amountPending: formatCurrencyIndian(stuckAmount),
    noticeDate,
    headerLogoBase64,
    stampLogoBase64,
    barStampLogoBase64,
    signatureBase64,
    bookmanFontBase64,
    noticeRef,
    complainantName: clientName,
    complainantAddress: clientAddress,
    isSpecialUser,
    invoiceNo: invoiceNo || (invoices?.[0]?.invoiceNo),
    invoiceDate,
    invoices,
    category: category || 'loan-recovery',
    clientAuthRepName,
    clientAuthRepPhone,
    disbursementDate,
    asOnDate,
    disbursedAmount,
  };

  let html = '';
  if (step === 1) {
    html = fillLoanRecoveryNoticeWeek1Template(templateArgs as any);
  } else if (step === 2) {
    // Police complaint template uses different property names for the SHO details
    const policeTemplateArgs = {
      ...templateArgs,
      policeStationName: policeStationName || 'Station House Officer',
      policeStationAddress: policeStationAddress || 'Jurisdictional Police Station',
      policeStationEmail: policeStationEmail || '',
      disbursementDate: disbursementDate || (invoices?.[0]?.invoiceDate ? formatDate(invoices[0].invoiceDate) : '__________'),
    };
    html = fillLoanRecoveryPoliceComplaintTemplate(policeTemplateArgs as any);
  } else if (step === 3) {
    html = fillLoanRecoveryNoticeWeek2Template(templateArgs as any);
  } else if (step === 4) {
    html = fillLoanRecoveryNoticeWeek3Template(templateArgs as any);
  } else {
    html = fillLoanRecoveryNoticeWeek1Template(templateArgs as any);
  }

  let browser;
  const localChrome = findLocalChrome();

  if (localChrome) {
    browser = await puppeteer.launch({
      executablePath: localChrome,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });
  } else {
    const chromium = (await import('@sparticuz/chromium-min')).default as any;
    browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-zygote',
        '--single-process',
      ],
      defaultViewport: (chromium as any).defaultViewport || { width: 800, height: 600 },
      executablePath: await chromium.executablePath(
        'https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'
      ),
      headless: true,
    } as any);
  }

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 15000 });

  const headerTemplate = `
    <div style="width:100%; font-family:'Times New Roman',Times,serif; font-size:11pt; padding: 8px 22mm 0 22mm; box-sizing:border-box;">
      ${headerLogoBase64 ? `<div style="text-align:center; margin-bottom:4px;"><img src="data:image/png;base64,${headerLogoBase64}" style="height:60px; width:auto;" /></div>` : ''}
      <div style="text-align:center; font-size:11pt; margin-bottom:3px;"><strong>Advocate &amp; Solicitors</strong></div>
      <div style="text-align:center; font-size:11pt; margin-bottom:2px;">2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</div>
      <div style="text-align:center; font-size:11pt; margin-bottom:4px;">E: <span style="color:#0066cc; text-decoration:underline;">notice@amalegalsolutions.com</span></div>
      <table style="width:100%; font-size:11pt; border-collapse:collapse;">
        <tr>
          <td style="text-align:left; font-weight:bold;">Advocate Anuj Anand Malik</td>
          <td style="text-align:right; font-weight:bold; font-size:11pt;">MEMBER - BAR COUNCIL OF DELHI</td>
        </tr>
        <tr>
          <td style="text-align:left; font-weight:bold;">Advocate Shrey Arora</td>
          <td style="text-align:right; font-weight:bold; font-size:11pt;">MEMBER - MCIA (MUMBAI)</td>
        </tr>
        <tr>
          <td></td>
          <td style="text-align:right; font-weight:bold; font-size:11pt;">ASSOCIATION MEMBER - IACC</td>
        </tr>
      </table>
      <div style="border-bottom:1.5px solid #000; margin-top:4px;"></div>
    </div>`;

  const footerTemplate = `
    <div style="width:100%; font-family:'Times New Roman',Times,serif; padding: 0 22mm 6px 22mm; box-sizing:border-box;">
      <div style="border-top:1.5px solid #000; border-bottom:1.5px solid #000; padding:4px 0;">
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="width:50px;"></td>
            <td style="text-align:center; font-size:12pt; font-weight:bold; letter-spacing:0.3px; white-space:nowrap;">GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI</td>
            <td style="width:50px; text-align:right; vertical-align:middle;">
              ${stampLogoBase64 ? `<img src="data:image/png;base64,${stampLogoBase64}" style="height:40px; width:auto;" />` : ''}
            </td>
          </tr>
        </table>
      </div>
    </div>`;

  const pdfArray = await page.pdf({
    format: 'A4',
    margin: { top: '58mm', right: '18mm', bottom: '22mm', left: '22mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
  });

  await browser.close();
  return Buffer.from(pdfArray);
}
