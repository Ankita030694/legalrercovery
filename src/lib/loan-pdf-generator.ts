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
  // Complainant Details
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientAddress?: string;
  noticeRef?: string;
  isSpecialUser?: boolean;
  // Invoice Details
  invoiceNo?: string;
  invoiceDate?: string;
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

  if (step === 4) {
    writer.writeTitle("LOAN RECOVERY POLICE COMPLAINT (CONTENT PENDING)");
  } else {
    writer.writeTitle(`LOAN RECOVERY NOTICE ${step} (CONTENT PENDING)`);
  }
  
  return Buffer.from(await pdfDoc.save());
}
