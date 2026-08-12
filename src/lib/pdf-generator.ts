import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont, PDFImage } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

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
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
}

function amountToWords(amount: string): string {
  const num = parseFloat(amount.replace(/,/g, ''));
  if (isNaN(num)) return amount;
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  function convert(n: number): string {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convert(n % 100) : '');
    if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '');
    if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + convert(n % 100000) : '');
    return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + convert(n % 10000000) : '');
  }
  return convert(Math.round(num)) + ' Only';
}

export interface PDFGeneratorParams {
  defaulterName: string;
  phone: string;
  email?: string;
  address: string;
  stuckAmount: number;
  policeStationName: string;
  policeStationAddress: string;
  policeStationEmail?: string;
  createdAt: string;
  step: number;
  category?: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientAddress?: string;
  clientAuthRepName?: string;
  clientAuthRepPhone?: string;
  noticeRef?: string;
  isSpecialUser?: boolean;
  // Invoice Details
  invoiceNo?: string;
  invoiceDate?: string;
  disbursementDate?: string;
  asOnDate?: string;
  disbursedAmount?: string | number;
  invoices?: { invoiceNo: string; invoiceDate: string; amount: number; dueDate?: string }[];
}

// --- Letterhead Header and Cities Footer Draw Helpers ---

function drawLetterhead(
  page: PDFPage,
  fontRegular: PDFFont,
  fontBold: PDFFont,
  headerImage: PDFImage | null,
  noticeRef: string,
  noticeDate: string
): number {
  const { width, height } = page.getSize();
  
  let logoBottom = height - 55;
  if (headerImage) {
    const imgWidth = 220;
    const imgScale = imgWidth / headerImage.width;
    const imgHeight = headerImage.height * imgScale;
    page.drawImage(headerImage, {
      x: (width - imgWidth) / 2,
      y: height - 20 - imgHeight,
      width: imgWidth,
      height: imgHeight,
    });
    logoBottom = height - 20 - imgHeight;
  }

  // 2. Draw address lines
  page.drawText("Advocate & Solicitors", {
    x: (width - fontBold.widthOfTextAtSize("Advocate & Solicitors", 10.5)) / 2,
    y: logoBottom - 17,
    size: 10.5,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  
  const addr = "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)";
  page.drawText(addr, {
    x: (width - fontRegular.widthOfTextAtSize(addr, 9.5)) / 2,
    y: logoBottom - 30,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });

  const emailText = "E: notice@amalegalsolutions.com";
  page.drawText(emailText, {
    x: (width - fontBold.widthOfTextAtSize(emailText, 9.5)) / 2,
    y: logoBottom - 43,
    size: 9.5,
    font: fontBold,
    color: rgb(0.0, 0.4, 0.8), // Blue link color
  });

  // 3. Draw Advocate lists
  page.drawText("Advocate Anuj Anand Malik", { x: 50, y: logoBottom - 63, size: 9.5, font: fontBold });
  page.drawText("MEMBER - BAR COUNCIL OF DELHI", { x: width - 50 - fontBold.widthOfTextAtSize("MEMBER - BAR COUNCIL OF DELHI", 8), y: logoBottom - 63, size: 8, font: fontBold });

  page.drawText("Advocate Shrey Arora", { x: 50, y: logoBottom - 75, size: 9.5, font: fontBold });
  page.drawText("MEMBER - MCIA (MUMBAI)", { x: width - 50 - fontBold.widthOfTextAtSize("MEMBER - MCIA (MUMBAI)", 8), y: logoBottom - 75, size: 8, font: fontBold });

  page.drawText("ASSOCIATION MEMBER - IACC", { x: width - 50 - fontBold.widthOfTextAtSize("ASSOCIATION MEMBER - IACC", 8), y: logoBottom - 87, size: 8, font: fontBold });

  // 4. Divider Line
  page.drawLine({
    start: { x: 50, y: logoBottom - 97 },
    end: { x: width - 50, y: logoBottom - 97 },
    thickness: 1.5,
    color: rgb(0, 0, 0),
  });

  // 5. Ref and Date
  page.drawText(`Ref: ${noticeRef}`, { x: 50, y: logoBottom - 113, size: 9.5, font: fontBold });
  page.drawText(`Date: ${noticeDate}`, { x: width - 50 - fontBold.widthOfTextAtSize(`Date: ${noticeDate}`, 9.5), y: logoBottom - 113, size: 9.5, font: fontBold });

  // 6. Header divider second line
  page.drawLine({
    start: { x: 50, y: logoBottom - 121 },
    end: { x: width - 50, y: logoBottom - 121 },
    thickness: 0.5,
    color: rgb(0.5, 0.5, 0.5),
  });

  return logoBottom - 140;
}

function drawFooter(page: PDFPage, fontBold: PDFFont, stampImage: PDFImage | null) {
  const { width } = page.getSize();
  
  // Draw footer divider line
  page.drawLine({
    start: { x: 50, y: 55 },
    end: { x: width - 50, y: 55 },
    thickness: 1.5,
    color: rgb(0, 0, 0),
  });

  // Draw cities text
  const cities = "GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI";
  page.drawText(cities, {
    x: (width - fontBold.widthOfTextAtSize(cities, 8)) / 2,
    y: 42,
    size: 8,
    font: fontBold,
    color: rgb(0, 0, 0),
  });

  // Draw stamp if present
  if (stampImage) {
    page.drawImage(stampImage, {
      x: width - 50 - 45,
      y: 10,
      width: 45,
      height: 45,
    });
  }
}

// --- Notice Canvas Programmatic Writer Class ---

class NoticePDFWriter {
  private pdfDoc: PDFDocument;
  private currentPage!: PDFPage;
  public currentY!: number;
  private fontRegular: PDFFont;
  private fontBold: PDFFont;
  private headerImage: PDFImage | null;
  private stampImage: PDFImage | null;
  private signatureImage: PDFImage | null;
  private noticeRef: string;
  private noticeDate: string;

  constructor(
    pdfDoc: PDFDocument,
    fontRegular: PDFFont,
    fontBold: PDFFont,
    headerImage: PDFImage | null,
    stampImage: PDFImage | null,
    signatureImage: PDFImage | null,
    noticeRef: string,
    noticeDate: string
  ) {
    this.pdfDoc = pdfDoc;
    this.fontRegular = fontRegular;
    this.fontBold = fontBold;
    this.headerImage = headerImage;
    this.stampImage = stampImage;
    this.signatureImage = signatureImage;
    this.noticeRef = noticeRef;
    this.noticeDate = noticeDate;
    
    this.addNewPage();
  }

  private addNewPage() {
    this.currentPage = this.pdfDoc.addPage([595.276, 841.890]);
    this.currentY = drawLetterhead(
      this.currentPage,
      this.fontRegular,
      this.fontBold,
      this.headerImage,
      this.noticeRef,
      this.noticeDate
    );
    drawFooter(this.currentPage, this.fontBold, this.stampImage);
  }

  // Draw text paragraph with automatic wrapping and inline bold support (**text**)
  writeParagraph(text: string, size: number = 10.5, defaultBold: boolean = false, textIndent: number = 0) {
    // Sanitize Rupee symbol and newline characters to prevent WinAnsi encoding crashes
    const sanitizedText = text
      .replace(/₹/g, "Rs.")
      .replace(/\r\n/g, " ")  // Windows line endings
      .replace(/\n/g, " ")    // Unix line endings
      .replace(/\r/g, " ");   // Old Mac line endings
    const maxWidth = 595.276 - 100; // Left margin 50, right margin 50

    // Parse paragraph into WordTokens
    interface WordToken {
      text: string;
      isBold: boolean;
      hasTrailingSpace: boolean;
    }

    const words: WordToken[] = [];
    let isBold = defaultBold;
    let index = 0;
    while (index < sanitizedText.length) {
      if (sanitizedText.substring(index, index + 2) === "**") {
        isBold = !isBold;
        index += 2;
        continue;
      }

      let word = "";
      while (index < sanitizedText.length && sanitizedText[index] !== " " && sanitizedText.substring(index, index + 2) !== "**") {
        word += sanitizedText[index];
        index++;
      }

      let hasSpace = false;
      if (index < sanitizedText.length && sanitizedText[index] === " ") {
        hasSpace = true;
        index++;
      }

      if (word !== "" || hasSpace) {
        words.push({ text: word, isBold, hasTrailingSpace: hasSpace });
      }
    }

    // Group WordTokens into wrapped lines
    const lines: WordToken[][] = [];
    let currentLine: WordToken[] = [];
    let currentLineWidth = 0;
    const spaceWidthRegular = this.fontRegular.widthOfTextAtSize(" ", size);
    const spaceWidthBold = this.fontBold.widthOfTextAtSize(" ", size);

    for (const word of words) {
      const font = word.isBold ? this.fontBold : this.fontRegular;
      const wordWidth = font.widthOfTextAtSize(word.text, size);
      const spaceWidth = word.isBold ? spaceWidthBold : spaceWidthRegular;
      const addedWidth = wordWidth + (word.hasTrailingSpace ? spaceWidth : 0);
      const indent = (lines.length === 0) ? textIndent : 0;

      if (currentLineWidth + addedWidth > maxWidth - indent) {
        lines.push(currentLine);
        currentLine = [word];
        currentLineWidth = addedWidth;
      } else {
        currentLine.push(word);
        currentLineWidth += addedWidth;
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    const leading = size * 1.4;

    for (let i = 0; i < lines.length; i++) {
      if (this.currentY < 75) {
        this.addNewPage();
      }

      const line = lines[i];
      const indent = (i === 0) ? textIndent : 0;
      let currentX = 50 + indent;

      const isLastLine = i === lines.length - 1;
      const hasGaps = line.length > 1;

      if (!isLastLine && hasGaps) {
        // Calculate total width of all words in the line (without spaces)
        let totalWordsWidth = 0;
        let gapCount = 0;
        for (let j = 0; j < line.length; j++) {
          const word = line[j];
          const font = word.isBold ? this.fontBold : this.fontRegular;
          totalWordsWidth += font.widthOfTextAtSize(word.text, size);
          if (j < line.length - 1) {
            gapCount++;
          }
        }
        
        // Remaining width to distribute
        const remainingWidth = maxWidth - indent - totalWordsWidth;
        const spaceWidth = gapCount > 0 ? (remainingWidth / gapCount) : 0;
        
        // Draw the words with the distributed spaceWidth
        for (let j = 0; j < line.length; j++) {
          const word = line[j];
          const font = word.isBold ? this.fontBold : this.fontRegular;
          if (word.text) {
            this.currentPage.drawText(word.text, {
              x: currentX,
              y: this.currentY,
              size,
              font,
            });
            currentX += font.widthOfTextAtSize(word.text, size);
          }
          if (j < line.length - 1) {
            currentX += spaceWidth;
          }
        }
      } else {
        // Left-align (original logic)
        for (const word of line) {
          const font = word.isBold ? this.fontBold : this.fontRegular;
          
          if (word.text) {
            this.currentPage.drawText(word.text, {
              x: currentX,
              y: this.currentY,
              size,
              font,
            });
            currentX += font.widthOfTextAtSize(word.text, size);
          }
          
          if (word.hasTrailingSpace) {
            const spaceWidth = font.widthOfTextAtSize(" ", size);
            currentX += spaceWidth;
          }
        }
      }

      this.currentY -= leading;
    }
    
    this.currentY -= size * 0.8;
  }

  // Write title with border
  writeTitle(text: string, size: number = 12.5) {
    const sanitizedText = text.replace(/₹/g, "Rs.");
    if (this.currentY < 120) {
      this.addNewPage();
    }

    this.currentY -= 15;
    
    // Draw top line border
    this.currentPage.drawLine({
      start: { x: 50, y: this.currentY + 12 },
      end: { x: 595.276 - 50, y: this.currentY + 12 },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });

    const font = this.fontBold;
    const textWidth = font.widthOfTextAtSize(sanitizedText, size);
    
    this.currentPage.drawText(sanitizedText, {
      x: (595.276 - textWidth) / 2,
      y: this.currentY,
      size,
      font,
    });

    this.currentY -= 12;

    // Draw bottom line border
    this.currentPage.drawLine({
      start: { x: 50, y: this.currentY },
      end: { x: 595.276 - 50, y: this.currentY },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });

    this.currentY -= 20;
  }

  // Write simple centered dispatch mode text
  writeDispatchMode(text: string, size: number = 10.5) {
    const sanitizedText = text.replace(/₹/g, "Rs.");
    if (this.currentY < 80) {
      this.addNewPage();
    }

    const textWidth = this.fontBold.widthOfTextAtSize(sanitizedText, size);
    this.currentPage.drawText(sanitizedText, {
      x: (595.276 - textWidth) / 2,
      y: this.currentY,
      size,
      font: this.fontBold,
    });

    this.currentY -= size * 2.2;
  }

  // Write bullet items
  writeBulletPoint(numberText: string, text: string, size: number = 10.5) {
    if (this.currentY < 80) {
      this.addNewPage();
    }
    
    // Bullet number/prefix on the left
    this.currentPage.drawText(numberText, {
      x: 50,
      y: this.currentY,
      size,
      font: this.fontBold,
    });

    // Write bullet body with left indent of 20 points
    this.writeParagraph(text, size, false, 20);
  }

  // Write signature block
  writeSignatureBlock(firmName: string, subText: string, stampOverrideImage?: PDFImage | null) {
    // If the signature block cannot fit (needs at least 150 points), start a new page
    if (this.currentY < 160) {
      this.addNewPage();
    }

    this.currentY -= 30;

    // Draw Signature Image & Stamp Image side-by-side
    if (this.signatureImage) {
      this.currentPage.drawImage(this.signatureImage, {
        x: 50,
        y: this.currentY,
        width: 110,
        height: 38,
      });
    }

    const activeStamp = stampOverrideImage !== undefined ? stampOverrideImage : this.stampImage;
    if (activeStamp) {
      this.currentPage.drawImage(activeStamp, {
        x: 180,
        y: this.currentY - 12,
        width: 55,
        height: 55,
      });
    }

    this.currentY -= 15;

    this.currentPage.drawText(firmName, {
      x: 50,
      y: this.currentY,
      size: 11,
      font: this.fontBold,
    });

    this.currentY -= 14;

    this.currentPage.drawText(subText, {
      x: 50,
      y: this.currentY,
      size: 9.5,
      font: this.fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // Draw table for complainant and accused details in step 4
  writeDetailsTable(title: string, rows: { label: string; value: string }[], size: number = 10.5) {
    const sanitizedTitle = title.replace(/₹/g, "Rs.");
    const sanitizedRows = rows.map(r => ({
      label: r.label,
      value: (r.value || "")
        .replace(/₹/g, "Rs.")
        .replace(/\r\n/g, " ")  // Windows line endings
        .replace(/\n/g, " ")    // Unix line endings
        .replace(/\r/g, " ")    // Old Mac line endings
    }));

    if (this.currentY < 130) {
      this.addNewPage();
    }

    this.currentY -= 15;

    // Table Title
    this.currentPage.drawText(sanitizedTitle, {
      x: 50,
      y: this.currentY,
      size: 11.5,
      font: this.fontBold,
    });

    this.currentY -= 4;

    // Title underline
    this.currentPage.drawLine({
      start: { x: 50, y: this.currentY },
      end: { x: 595.276 - 50, y: this.currentY },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    this.currentY -= 16;

    const labelWidth = 140;

    for (const row of sanitizedRows) {
      if (!row.value) continue;

      if (this.currentY < 65) {
        this.addNewPage();
      }

      // Draw label
      this.currentPage.drawText(row.label, {
        x: 50,
        y: this.currentY,
        size,
        font: this.fontBold,
      });

      // Wrap value column text
      const valueMaxWidth = 595.276 - 100 - labelWidth;
      const words = row.value.split(" ");
      let currentLine = "";
      const lines: string[] = [];

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (this.fontBold.widthOfTextAtSize(testLine, size) > valueMaxWidth) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        lines.push(currentLine);
      }

      const leading = size * 1.3;
      for (const line of lines) {
        if (this.currentY < 65) {
          this.addNewPage();
        }
        this.currentPage.drawText(line, {
          x: 50 + labelWidth,
          y: this.currentY,
          size,
          font: this.fontBold,
        });
        this.currentY -= leading;
      }
      this.currentY -= 3; // Gap between rows
    }

    this.currentY -= 10;
  }
  writeInvoiceTable(invoices: { invoiceNo: string; invoiceDate: string; amount: number; dueDate?: string }[], size: number = 10.5) {
    if (this.currentY < 150) {
      this.addNewPage();
    }

    this.currentY -= 15;

    // Title
    const titleText = "Annexure - A";
    const titleWidth = this.fontBold.widthOfTextAtSize(titleText, 11.5);
    this.currentPage.drawText(titleText, {
      x: (595.276 - titleWidth) / 2,
      y: this.currentY,
      size: 11.5,
      font: this.fontBold,
    });

    this.currentY -= 4;

    // Underline
    this.currentPage.drawLine({
      start: { x: 50, y: this.currentY },
      end: { x: 595.276 - 50, y: this.currentY },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    this.currentY -= 16;

    // Headers
    const col1 = 50;
    const col2 = 90;
    const col3 = 200;
    const col4 = 310;
    const col5 = 420;

    this.currentPage.drawText("S.No.", { x: col1, y: this.currentY, size, font: this.fontBold });
    this.currentPage.drawText("Invoice No.", { x: col2, y: this.currentY, size, font: this.fontBold });
    this.currentPage.drawText("Date", { x: col3, y: this.currentY, size, font: this.fontBold });
    this.currentPage.drawText("Due Date", { x: col4, y: this.currentY, size, font: this.fontBold });
    this.currentPage.drawText("Amount", { x: col5, y: this.currentY, size, font: this.fontBold });

    this.currentY -= size * 1.5;

    let idx = 1;
    let totalAmount = 0;
    const maxInvWidth = 100; // col3 is 200, col2 is 90. 200 - 90 - 10(margin) = 100
    
    for (const inv of invoices) {
      if (this.currentY < 65) {
        this.addNewPage();
      }

      let invNoStr = inv.invoiceNo || "-";
      let lines: string[] = [];
      let words = invNoStr.split(' ');
      let currentLine = "";
      
      for (const word of words) {
         if (currentLine === "") {
             if (this.fontRegular.widthOfTextAtSize(word, size) > maxInvWidth) {
                 let charLine = "";
                 for (let i = 0; i < word.length; i++) {
                     let testLine = charLine + word[i];
                     if (this.fontRegular.widthOfTextAtSize(testLine, size) > maxInvWidth && charLine.length > 0) {
                         lines.push(charLine);
                         charLine = word[i];
                     } else {
                         charLine = testLine;
                     }
                 }
                 currentLine = charLine; 
             } else {
                 currentLine = word;
             }
         } else {
             let testLine = currentLine + " " + word;
             if (this.fontRegular.widthOfTextAtSize(testLine, size) > maxInvWidth) {
                 lines.push(currentLine);
                 
                 if (this.fontRegular.widthOfTextAtSize(word, size) > maxInvWidth) {
                     let charLine = "";
                     for (let i = 0; i < word.length; i++) {
                         let testLineChar = charLine + word[i];
                         if (this.fontRegular.widthOfTextAtSize(testLineChar, size) > maxInvWidth && charLine.length > 0) {
                             lines.push(charLine);
                             charLine = word[i];
                         } else {
                             charLine = testLineChar;
                         }
                     }
                     currentLine = charLine;
                 } else {
                     currentLine = word;
                 }
             } else {
                 currentLine = testLine;
             }
         }
      }
      if (currentLine) {
        lines.push(currentLine);
      }
      if (lines.length === 0) lines.push("-");

      this.currentPage.drawText(String(idx) + ".", { x: col1, y: this.currentY, size, font: this.fontRegular });
      this.currentPage.drawText(inv.invoiceDate || "-", { x: col3, y: this.currentY, size, font: this.fontRegular });
      this.currentPage.drawText(inv.dueDate || "-", { x: col4, y: this.currentY, size, font: this.fontRegular });
      this.currentPage.drawText("Rs. " + Number(inv.amount).toLocaleString("en-IN"), { x: col5, y: this.currentY, size, font: this.fontRegular });
      
      let invoiceY = this.currentY;
      for (let j = 0; j < lines.length; j++) {
        this.currentPage.drawText(lines[j], { x: col2, y: invoiceY, size, font: this.fontRegular });
        invoiceY -= size * 1.2;
      }
      
      totalAmount += Number(inv.amount);
      
      const rowHeight = Math.max(size * 1.5, size * 1.2 * lines.length + size * 0.3);
      this.currentY -= rowHeight;
      idx++;
    }

    // Total Row
    if (this.currentY < 65) {
      this.addNewPage();
    }
    
    this.currentPage.drawLine({
      start: { x: col5, y: this.currentY + 12 },
      end: { x: 595.276 - 50, y: this.currentY + 12 },
      thickness: 0.5,
      color: rgb(0, 0, 0),
    });

    this.currentPage.drawText("Total:", { x: col4, y: this.currentY, size, font: this.fontBold });
    this.currentPage.drawText("Rs. " + totalAmount.toLocaleString("en-IN"), { x: col5, y: this.currentY, size, font: this.fontBold });

    this.currentY -= 10;
  }
}

// --- Main Programmatic PDF Generator ---

export async function generateNoticePDFBuffer(params: PDFGeneratorParams): Promise<Buffer> {
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
    category
  } = params;

  let invoiceSuffix = "";
  if (params.invoices && params.invoices.length > 0) {
    invoiceSuffix = ` against Invoices mentioned in Annexure - A`;
  } else if (params.invoiceNo && params.invoiceNo.trim()) {
    invoiceSuffix = ` against Invoice No: ${params.invoiceNo.trim()}${params.invoiceDate && params.invoiceDate.trim() ? ` dated ${params.invoiceDate.trim()}` : ""}`;
  }

  const pdfDoc = await PDFDocument.create();
  
  // Embed core fonts (Times Roman matches original visual design perfectly)
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  let headerImage: PDFImage | null = null;
  let stampImage: PDFImage | null = null;
  let signatureImage: PDFImage | null = null;
  let barStampImage: PDFImage | null = null;

  // Load logo, stamp, and signature assets dynamically
  try {
    const publicPath = path.join(process.cwd(), 'public');
    
    const headerPath = path.join(publicPath, 'notices', 'header logo AMA .png');
    if (fs.existsSync(headerPath)) {
      headerImage = await pdfDoc.embedPng(fs.readFileSync(headerPath));
    }
    
    const stampPath = path.join(publicPath, 'notices', 'AMA stamp logo.png');
    if (fs.existsSync(stampPath)) {
      stampImage = await pdfDoc.embedPng(fs.readFileSync(stampPath));
    }
    
    const sigPath = path.join(publicPath, 'notices', 'Signature.png');
    if (fs.existsSync(sigPath)) {
      signatureImage = await pdfDoc.embedPng(fs.readFileSync(sigPath));
    }

    const barStampPath = path.join(publicPath, 'notices', 'bar_stamp.png');
    if (fs.existsSync(barStampPath)) {
      barStampImage = await pdfDoc.embedPng(fs.readFileSync(barStampPath));
    }
  } catch (e) {
    console.warn('[PDF-Generator] Warning: Could not load PNG asset:', e);
  }

  const noticeDate = formatDate(new Date().toISOString());
  const noticeRef = params.noticeRef || `LR-0000-0000-${step === 4 ? 'C4' : 'N' + step}`;

  const isSpecialUser = params.isSpecialUser || params.clientPhone?.replace(/\D/g, '').endsWith('8700343611') || params.clientPhone?.replace(/\D/g, '').endsWith('8130104447');
  const stampImageToUse = isSpecialUser ? barStampImage : stampImage;

  const writer = new NoticePDFWriter(
    pdfDoc,
    fontRegular,
    fontBold,
    headerImage,
    stampImage,
    signatureImage,
    noticeRef,
    noticeDate
  );

  const formattedAmount = formatCurrencyIndian(stuckAmount);
  const pendingWords = amountToWords(formattedAmount);

    if (step === 1) {
    writer.writeTitle("LEGAL DEMAND NOTICE");
    writer.writeDispatchMode("THROUGH EMAIL/WHATSAPP");

    // Addressee Block
    writer.writeParagraph("To,", 10.5, true);
    writer.writeParagraph(defaulterName, 10.5, true);
    if (phone) writer.writeParagraph(`Mobile: ${phone}`, 10.5, true);
    if (email) writer.writeParagraph(`Email: ${email}`, 10.5, true);
    writer.writeParagraph(address || "Address on file", 10.5, true);

    writer.currentY -= 10;

    // Subject
    writer.writeParagraph(`Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹${formattedAmount} Towards ${params.clientName || 'Tech AMA'}${invoiceSuffix}`, 11, true);

    // Salutation
    writer.writeParagraph("Dear Sir/Madam,", 10.5);

    // Body text
    writer.writeParagraph(`Under instructions from and on behalf of our client **${params.clientName || 'Tech AMA'}**, residing at **${params.clientAddress || 'Delhi, India'}**, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.`, 10.5);

    writer.writeParagraph(`It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of **INR ${formattedAmount}/- (Rupees ${pendingWords})** as mentioned in **Annexure - A** is still due/pending towards our client.`, 10.5);

    writer.writeParagraph(`Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.`, 10.5);

    writer.writeParagraph(`You are therefore hereby requested to:`, 10.5);
    writer.writeBulletPoint("1.", `Clear/pay the outstanding amount of **INR ${formattedAmount}/- (Rupees ${pendingWords})**; and/or`);
    writer.writeBulletPoint("2.", `Resolve the matter amicably within 7 (Seven) days from the receipt of this notice.`);

    writer.writeParagraph(`In the event that you dispute the claim or amount, you are requested to provide your written response along with supporting documents within the aforesaid period for appropriate consideration.`, 10.5);

    writer.writeParagraph(`Please take notice that failure to respond or resolve the matter within the stipulated time may compel our client to initiate appropriate legal proceedings and remedies available under applicable laws, entirely at your own risk as to costs and consequences.`, 10.5);

    writer.writeParagraph(`This notice is being issued without prejudice to all rights, claims, remedies, and legal actions available to our client under law.`, 10.5);

    writer.writeParagraph(`A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.`, 10.5);

    if (params.invoices && params.invoices.length > 0) {
      writer.writeInvoiceTable(params.invoices);
    }
    writer.writeSignatureBlock("For AMA Legal Solutions®", "Through Authorized Signatory", stampImageToUse);

  } else if (step === 2) {
    writer.writeTitle("SECOND LEGAL DEMAND NOTICE");
    writer.writeDispatchMode("THROUGH EMAIL/WHATSAPP");

    // Addressee Block
    writer.writeParagraph("To,", 10.5, true);
    writer.writeParagraph(defaulterName, 10.5, true);
    if (phone) writer.writeParagraph(`Mobile: ${phone}`, 10.5, true);
    if (email) writer.writeParagraph(`Email: ${email}`, 10.5, true);
    writer.writeParagraph(address || "Address on file", 10.5, true);

    writer.currentY -= 10;

    // Subject
    writer.writeParagraph(`Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹${formattedAmount} Towards ${params.clientName || 'Tech AMA'}${invoiceSuffix}`, 11, true);

    // Salutation
    writer.writeParagraph("Dear Sir/Madam,", 10.5);

    // Body text
    writer.writeParagraph(`Under instructions and authority from our client **${params.clientName || 'Tech AMA'}**, residing/having office at **${params.clientAddress || 'Delhi, India'}**, we hereby issue the present Second and Final Legal Notice calling upon you to immediately clear the outstanding dues/claim amounting to **INR ${formattedAmount}/- (Rupees ${pendingWords})** as mentioned in **Annexure - A** payable towards our client arising out of transactions, services, agreements, commitments, business dealings, or financial obligations undertaken by you.`, 10.5);

    writer.writeParagraph(`Despite repeated reminders, communications, and an earlier legal notice served upon you, you have failed to regularize the matter or provide any satisfactory response. Your conduct clearly reflects deliberate negligence, avoidance, and non-compliance towards lawful obligations owed to our client.`, 10.5);

    writer.writeParagraph(`It is pertinent to mention that if any person dishonestly retains money, intentionally avoids payment despite liability, induces another party under false assurances, or causes wrongful financial loss, such actions may attract legal consequences under applicable provisions of the Bharatiya Nyaya Sanhita, 2023, including but not limited to provisions relating to:`, 10.5);
    
    writer.writeBulletPoint("1.", "Cheating and dishonest inducement;");
    writer.writeBulletPoint("2.", "Criminal breach of trust;");
    writer.writeBulletPoint("3.", "Fraudulent or dishonest conduct causing wrongful loss.");

    writer.writeParagraph(`Our client still wishes to provide you with a final opportunity to amicably resolve the matter without initiating formal legal proceedings.`, 10.5);

    writer.writeParagraph(`You are therefore finally called upon to:`, 10.5);
    writer.writeBulletPoint("1.", `Make payment of the outstanding amount of **INR ${formattedAmount}/- (Rupees ${pendingWords})** within 4 (Four) days from receipt of this notice; OR`);
    writer.writeBulletPoint("2.", `Provide a written explanation along with documentary proof disputing the claim within the aforesaid period.`);

    writer.writeParagraph(`Kindly take notice that upon failure to comply, our client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent authorities/courts/forum, including filing complaints before the appropriate police authorities and legal forums, entirely at your own risk as to costs, liabilities, and consequences.`, 10.5);

    writer.writeParagraph(`Please further note that any continued avoidance, non-response, or intentional withholding of payment may be relied upon as adverse conduct in future legal proceedings.`, 10.5);

    writer.writeParagraph(`This notice is issued without prejudice to all legal rights and remedies available to our client under applicable law.`, 10.5);
    
    writer.writeParagraph(`A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.`, 10.5);

    if (params.invoices && params.invoices.length > 0) {
      writer.writeInvoiceTable(params.invoices);
    }
    writer.writeSignatureBlock("For AMA Legal Solutions®", "Through Authorized Signatory", stampImageToUse);

  } else if (step === 3) {
    writer.writeTitle("FINAL LEGAL DEMAND NOTICE");
    writer.writeDispatchMode("THROUGH EMAIL & WHATSAPP");

    // Addressee Block
    writer.writeParagraph("To,", 10.5, true);
    writer.writeParagraph(defaulterName, 10.5, true);
    if (phone) writer.writeParagraph(`Mobile: ${phone}`, 10.5, true);
    if (email) writer.writeParagraph(`Email: ${email}`, 10.5, true);
    writer.writeParagraph(address || "Address on file", 10.5, true);

    writer.currentY -= 10;

    // Subject
    writer.writeParagraph(`Subject: Final Pre-Litigation and Police Complaint Notice for Recovery of ₹${formattedAmount} Under Applicable Provisions of Bharatiya Nyaya Sanhita (BNS)${invoiceSuffix}`, 11, true);

    // Salutation
    writer.writeParagraph("Dear Sir/Madam,", 10.5);

    // Body text
    writer.writeParagraph(`Under instructions from and on behalf of my client **${params.clientName || 'Tech AMA'}**, I hereby issue the present Final Legal Notice against you with respect to the outstanding amount/claim of **INR ${formattedAmount}/- (Rupees ${pendingWords})** as mentioned in **Annexure - A** arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.`, 10.5);

    writer.writeParagraph(`It is pertinent to note that despite repeated reminders, follow-ups, and opportunities extended to you for amicable resolution, you have deliberately failed and neglected to clear the outstanding liability and/or honour your commitments. Your conduct has caused substantial financial loss, harassment, mental agony, and inconvenience to my client.`, 10.5);

    writer.writeParagraph(`Your actions prima facie disclose elements of:`, 10.5);
    writer.writeBulletPoint("-", "dishonest intention,");
    writer.writeBulletPoint("-", "wrongful withholding of money/property,");
    writer.writeBulletPoint("-", "misrepresentation,");
    writer.writeBulletPoint("-", "criminal breach of trust,");
    writer.writeBulletPoint("-", "cheating, and");
    writer.writeBulletPoint("-", "intentional non-compliance despite repeated demands.");

    writer.writeParagraph(`Accordingly, your acts may attract penal consequences under the relevant provisions of the Bharatiya Nyaya Sanhita, 2023 including but not limited to:`, 10.5);
    writer.writeBulletPoint("-", "Section 316 BNS – Criminal Breach of Trust");
    writer.writeBulletPoint("-", "Section 318 BNS – Cheating");
    writer.writeBulletPoint("-", "Section 351 BNS – Criminal Intimidation (where applicable)");
    writer.writeBulletPoint("-", "Any other applicable civil and criminal provisions based upon the facts and documents available on record.");

    writer.writeParagraph(`You are therefore called upon for the FINAL time to:`, 10.5);
    writer.writeBulletPoint("1.", `Clear/pay the outstanding amount of **INR ${formattedAmount}/- (Rupees ${pendingWords})**;`);
    writer.writeBulletPoint("2.", `Provide written confirmation of settlement; and`);
    writer.writeBulletPoint("3.", `Resolve the matter within 72 HOURS from receipt of this notice.`);

    writer.writeParagraph(`Please take notice that in the event of your failure to comply within the aforesaid period, my client shall be constrained to initiate appropriate legal proceedings against you, including but not limited to:`, 10.5);
    writer.writeBulletPoint("-", "filing of Police Complaint/FIR before the competent Police Authorities;");
    writer.writeBulletPoint("-", "initiation of criminal proceedings under applicable provisions of BNS;");
    writer.writeBulletPoint("-", "civil recovery proceedings before appropriate courts/forums;");
    writer.writeBulletPoint("-", "recovery of interest, damages, litigation costs, and legal expenses.");

    writer.writeParagraph(`Kindly note that the entire risk as to costs and legal consequences arising therefrom shall solely be attributable to you.`, 10.5);

    writer.writeParagraph(`This notice is issued without prejudice to all other legal rights and remedies available to my client under applicable law.`, 10.5);
    
    writer.writeParagraph(`A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.`, 10.5);

    if (params.invoices && params.invoices.length > 0) {
      writer.writeInvoiceTable(params.invoices);
    }
    writer.writeSignatureBlock("For AMA Legal Solutions®", "Through Authorized Signatory", stampImageToUse);

  } else if (step === 4) {
    // Step 4: SHO Criminal Complaint
    writer.writeTitle("CRIMINAL POLICE COMPLAINT");
    writer.currentY -= 10;

    // Addressee Block
    writer.writeParagraph("TO,", 10.5, true);
    writer.writeParagraph("The Station House Officer,", 10.5, true);
    writer.writeParagraph(policeStationName || "Competent Police Station", 10.5, true);
    writer.writeParagraph(policeStationAddress || "Address on file", 10.5, true);

    writer.currentY -= 10;

    // Subject
    writer.writeParagraph(`Subject: Complaint Against ${defaulterName} for Cheating, Criminal Breach of Trust, Dishonest Non-Payment and Other Applicable Offences Under Bharatiya Nyaya Sanhita (BNS)${invoiceSuffix}`, 11, true);

    // Complainant Details Table
    writer.writeDetailsTable("COMPLAINANT DETAILS", [
      { label: "Name:", value: params.clientName || "No Name Provided"},
      { label: "Phone Number:", value: params.clientPhone || "No Phone Number Provided"},
      { label: "Email ID:", value: params.clientEmail || "No Email Provided"},
      { label: "Address:", value: params.clientAddress || "No Address Provided"}
    ]);

    // Accused Details Table
    writer.writeDetailsTable("ACCUSED DETAILS", [
      { label: "Name:", value: defaulterName },
      { label: "Phone Number:", value: phone },
      { label: "Email ID:", value: email || "No Email Provided" },
      { label: "Address:", value: address || "Address on file" }
    ]);

    // Salutation
    writer.writeParagraph("Respected Sir/Madam,", 10.5, true);

    // Body text
    writer.writeParagraph(`Under instructions from and on behalf of our client, namely **${params.clientName || "Tech AMA"}**, we, AMA Legal Solutions, through our authorized legal representatives, hereby submit the present complaint against the above-mentioned accused for acts involving deliberate non-payment of legitimate dues, cheating, dishonest inducement, criminal breach of trust, and wrongful financial loss caused to our client.`, 10.5);

    writer.writeParagraph(`That the accused had entered into a transaction/understanding with our client, pursuant to which an amount of **INR ${formattedAmount}/- (Rupees ${pendingWords})** became legally due and payable to our client.`, 10.5);

    writer.writeParagraph(`Despite repeated follow-ups, calls, messages, reminders, and legal notices issued on behalf of our client, the accused has intentionally failed and neglected to clear the outstanding dues. The conduct of the accused clearly demonstrates dishonest intention from the very inception of the transaction and reflects wilful default and deliberate evasion of liability.`, 10.5);

    writer.writeParagraph(`It is pertinent to mention that the accused has continuously avoided communication and has failed to provide any lawful justification for withholding the legitimate dues of our client. Such conduct has caused severe financial loss, mental harassment, business disruption, and unnecessary hardship to our client.`, 10.5);

    writer.writeParagraph(`The actions of the accused prima facie attract offences punishable under the applicable provisions of the Bharatiya Nyaya Sanhita (BNS), including but not limited to offences relating to:`, 10.5);
    writer.writeBulletPoint("1.", "Cheating;");
    writer.writeBulletPoint("2.", "Criminal Breach of Trust;");
    writer.writeBulletPoint("3.", "Dishonest Misappropriation;");
    writer.writeBulletPoint("4.", "Fraudulent and dishonest inducement; and");
    writer.writeBulletPoint("5.", "Other allied offences as may be made out during investigation.");

    writer.writeParagraph(`In view of the foregoing, we respectfully request your good office to:`, 10.5);
    writer.writeBulletPoint("1.", "Take cognizance of the present complaint;");
    writer.writeBulletPoint("2.", "Initiate appropriate inquiry/investigation against the accused;");
    writer.writeBulletPoint("3.", "Summon/call the accused for questioning;");
    writer.writeBulletPoint("4.", "Take necessary legal action in accordance with law; and");
    writer.writeBulletPoint("5.", "Protect the rights and interests of our client.");

    writer.writeParagraph(`Kindly treat this matter as urgent and take appropriate action at the earliest.`, 10.5);

    writer.currentY -= 10;
    writer.writeParagraph("Thanking You,", 10.5);
    writer.currentY += 10;

    writer.writeSignatureBlock("For AMA Legal Solutions®", "Authorized Legal Representative");
    }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
