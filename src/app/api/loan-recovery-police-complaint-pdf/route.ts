import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import fs from 'fs'
import { fillLoanRecoveryPoliceComplaintTemplate } from '@/utils/loanRecoveryPoliceComplaintTemplate'
import { verifyAuth } from '@/lib/auth'
import { getDbAndBucket } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export const maxDuration = 60
export const dynamic = 'force-dynamic'

const LOCAL_CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
]

function findLocalChrome(): string | null {
  for (const p of LOCAL_CHROME_PATHS) {
    if (fs.existsSync(p)) return p
  }
  return null
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`
}

function formatCurrencyIndian(amount: any): string {
  const val = typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;
  if (isNaN(val) || val === null || val === undefined) return '0';
  const x = Math.round(val).toString();
  let lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
}

export async function POST(request: NextRequest) {
  const auth = await verifyAuth(request)
  if (auth.error) return auth.error
  const session = auth.session;

  let isSpecialUser = false
  try {
    const { db } = await getDbAndBucket("fs");
    const userIdStr = (session?.user as any)?.id;
    if (userIdStr) {
      const userDoc = await db.collection("users").findOne({ _id: new ObjectId(userIdStr) });
      const userPhone = userDoc?.phone || "";
      isSpecialUser = userPhone.replace(/\D/g, '').endsWith('8700343611') || userPhone.replace(/\D/g, '').endsWith('8130104447');
    }
  } catch (dbErr) {
    console.warn("Could not check special user phone in API:", dbErr);
  }

  try {
    const body = await request.json()
    const {
      clientName,
      clientPhone,
      clientAddress,
      clientEmail,
      amountPending,
      noticeDate,
      noticeRef,
      complainantName,
      complainantPhone,
      complainantEmail,
      complainantAddress,
      policeStationName,
      policeStationAddress,
      policeStationEmail,
      invoiceNo,
      invoiceDate,
      disbursementDate,
      category,
      clientAuthRepName,
      clientAuthRepPhone,
      defaulterName,
    } = body

    if (!clientName || !clientPhone || !amountPending) {
      return NextResponse.json({ error: 'clientName, clientPhone, and amountPending are required.' }, { status: 400 })
    }

    let headerLogoBase64 = ''
    let stampLogoBase64 = ''
    let barStampLogoBase64 = ''
    let signatureBase64 = ''
    let bookmanFontBase64 = ''
    try {
      const headerPath = process.cwd() + '/public/notices/header logo AMA .png'
      if (fs.existsSync(headerPath)) {
        headerLogoBase64 = fs.readFileSync(headerPath, 'base64')
      }
      const stampPath = process.cwd() + '/public/notices/AMA stamp logo.png'
      if (fs.existsSync(stampPath)) {
        stampLogoBase64 = fs.readFileSync(stampPath, 'base64')
      }
      const barStampPath = process.cwd() + '/public/notices/bar_stamp.png'
      if (fs.existsSync(barStampPath)) {
        barStampLogoBase64 = fs.readFileSync(barStampPath, 'base64')
      }
      const sigPath = process.cwd() + '/public/notices/Signature.png'
      if (fs.existsSync(sigPath)) {
        signatureBase64 = fs.readFileSync(sigPath, 'base64')
      }
      const fontPath = process.cwd() + '/public/fonts/LibreBaskerville-Regular.woff2'
      if (fs.existsSync(fontPath)) {
        bookmanFontBase64 = fs.readFileSync(fontPath, 'base64')
      }
    } catch (e) {
      console.warn('Could not read logo PNGs:', e)
    }

    const html = fillLoanRecoveryPoliceComplaintTemplate({
      clientName: defaulterName || clientName,
      clientPhone: clientPhone || '',
      clientAddress: clientAddress || 'Address on file',
      clientEmail: clientEmail || '',
      amountPending: formatCurrencyIndian(amountPending),
      noticeDate: noticeDate ? formatDate(noticeDate) : formatDate(new Date().toISOString()),
      noticeRef,
      complainantName,
      complainantPhone,
      complainantEmail,
      complainantAddress,
      policeStationName,
      policeStationAddress,
      policeStationEmail,
      headerLogoBase64,
      stampLogoBase64,
      barStampLogoBase64,
      signatureBase64,
      bookmanFontBase64,
      isSpecialUser,
      invoiceNo,
      invoiceDate: invoiceDate ? formatDate(invoiceDate) : invoiceDate,
      disbursementDate: disbursementDate ? formatDate(disbursementDate) : disbursementDate,
      category: category || 'loan-recovery',
      clientAuthRepName,
      clientAuthRepPhone,
    })
 
    // Launch Puppeteer
    let browser
    const localChrome = findLocalChrome()

    if (localChrome) {
      browser = await puppeteer.launch({
        executablePath: localChrome,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
      })
    } else {
      const chromium = (await import('@sparticuz/chromium-min')).default as any
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
      } as any)
    }

    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 15000 })

    // Build header HTML for Puppeteer (injected natively on every page)
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
      </div>`

    // Build footer HTML for Puppeteer
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
      </div>`

    const pdf = await page.pdf({
      format: 'A4',
      margin: { top: '58mm', right: '22mm', bottom: '22mm', left: '22mm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate,
      footerTemplate,
    })

    await browser.close()

    const safeClientName = clientName.replace(/[^a-z0-9]/gi, '_')

    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        'Content-Disposition': `attachment; filename="${safeClientName}_police_complaint.pdf"`,
        'Content-Type': 'application/pdf',
      },
    })
  } catch (error: any) {
    console.error('[recovery-notice-week1-pdf] Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
