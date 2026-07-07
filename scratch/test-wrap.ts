import { PDFDocument, StandardFonts } from 'pdf-lib';

async function main() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const size = 10.5;
  const maxInvWidth = 105;
  
  const tests = [
    "GGN FY 24-25 Sales 7348",
    "INV-20230001234567890ABCDEFGHIJKLMNOP",
    "SHORT",
    "SOME VERY LONG INVOICE NUMBER WITH SPACES"
  ];
  
  for (const invNoStr of tests) {
      let lines: string[] = [];
      let words = invNoStr.split(' ');
      let currentLine = "";
      
      for (const word of words) {
         if (currentLine === "") {
             if (fontRegular.widthOfTextAtSize(word, size) > maxInvWidth) {
                 let charLine = "";
                 for (let i = 0; i < word.length; i++) {
                     let testLine = charLine + word[i];
                     if (fontRegular.widthOfTextAtSize(testLine, size) > maxInvWidth && charLine.length > 0) {
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
             if (fontRegular.widthOfTextAtSize(testLine, size) > maxInvWidth) {
                 lines.push(currentLine);
                 
                 if (fontRegular.widthOfTextAtSize(word, size) > maxInvWidth) {
                     let charLine = "";
                     for (let i = 0; i < word.length; i++) {
                         let testLineChar = charLine + word[i];
                         if (fontRegular.widthOfTextAtSize(testLineChar, size) > maxInvWidth && charLine.length > 0) {
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
      
      console.log(`Original: ${invNoStr}`);
      console.log(`Lines:`, lines);
      console.log('---');
  }
}

main().catch(console.error);
