import fs from 'fs';
import path from 'path';
import { generateNoticePDFBuffer } from '../src/lib/pdf-generator';

async function testGeneration() {
  console.log("=== STARTING NOTICE PDF GENERATION TEST ===");
  
  const outDir = path.join(__dirname, 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const baseParams = {
    defaulterName: "Imran Shaikh",
    phone: "8178310300",
    email: "tech.ama123@gmail.com",
    address: "GHAR NO-468, SERVE NO-187 ASHIYANA NIWAS, GANESH HSG SOCIETY, NEAR COD ROAD, CHINCHOLI DEHUROAD, dehuroad, PO:Dehu Road Cantt, DIST:Pune, Maharashtra, 412101",
    stuckAmount: 111000,
    policeStationName: "Director General of Police, Maharashtra",
    policeStationAddress: "Maharashtra State Police Headquarters, Old Council Hall, Shaheed Bhagat Singh Marg, Mumbai-1, Maharashtra",
    policeStationEmail: "tech.ama123@gmail.com",
    createdAt: "2026-08-12T11:55:04.727Z",
    clientName: "ACTOLOAN, in c/0 Prakash Chemtex India",
    clientEmail: "tech.ama123@gmail.com",
    clientPhone: "9896197115",
    clientAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
    noticeRef: "LR-0063-12826",
    category: "loan-recovery",
    complainantName: "ACTOLOAN, in c/0 Prakash Chemtex India",
    complainantAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
    complainantEmail: "tech.ama123@gmail.com",
    clientAuthRepName: "Raman Jhakal",
    clientAuthRepPhone: "9896197115"
  };

  // Test Case 1: Normal User (No Invoice Details)
  console.log("\nGenerating notices for Normal User (No Invoice)...");
  for (let step = 1; step <= 4; step++) {
    const filename = `normal_user_step_${step}.pdf`;
    const dest = path.join(outDir, filename);
    
    try {
      const buffer = await generateNoticePDFBuffer({
        ...baseParams,
        clientPhone: "9999999999", // Non-special user
        step
      });
      fs.writeFileSync(dest, buffer);
      console.log(`  [PASS] Generated ${filename} (${buffer.length} bytes)`);
    } catch (err: any) {
      console.error(`  [FAIL] Failed to generate ${filename}:`, err);
      process.exit(1);
    }
  }

  // Test Case 2: Advocate User (With Invoice Details)
  console.log("\nGenerating notices for Advocate User (With Invoice)...");
  const invoiceNo = "ACT262042";
  const invoiceDate = "2026-05-26";
  
  for (let step = 1; step <= 4; step++) {
    const filename = `advocate_user_step_${step}.pdf`;
    const dest = path.join(outDir, filename);
    
    try {
      const buffer = await generateNoticePDFBuffer({
        ...baseParams,
        step,
        invoiceNo,
        invoiceDate
      });
      fs.writeFileSync(dest, buffer);
      console.log(`  [PASS] Generated ${filename} (${buffer.length} bytes)`);
    } catch (err: any) {
      console.error(`  [FAIL] Failed to generate ${filename}:`, err);
      process.exit(1);
    }
  }

  console.log("\n=== ALL GENERATION TESTS COMPLETED SUCCESSFULLY ===");
}

testGeneration().catch(err => {
  console.error("Test execution crashed:", err);
  process.exit(1);
});
