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
    defaulterName: "Dr. Amrita Sharma",
    phone: "9716030793",
    email: "zumaxaa@gmail.com",
    address: "Metro Pillar Number 461, Zumaxaa Dental, Bahadurgarh, Haryana-124507",
    stuckAmount: 1461994,
    policeStationName: "Director General of Police, Haryana",
    policeStationAddress: "Panchkula, Haryana",
    policeStationEmail: "dgp.police@hry.nic.in",
    createdAt: new Date().toISOString(),
    clientName: "Legal Recovery Advocate",
    clientEmail: "admin@legalrecovery.in",
    clientPhone: "8700343611",
    clientAddress: "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)",
    noticeRef: "LR-0001-11626"
  };

  // Test Case 1: Normal User (No Invoice Details)
  console.log("\nGenerating notices for Normal User (No Invoice)...");
  for (let step = 1; step <= 4; step++) {
    const filename = `normal_user_step_${step}.pdf`;
    const dest = path.join(outDir, filename);
    
    try {
      const buffer = await generateNoticePDFBuffer({
        ...baseParams,
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
  const invoiceNo = "GGN FY 23-24 Sales 5848";
  const invoiceDate = "31-Jan-24";
  
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
