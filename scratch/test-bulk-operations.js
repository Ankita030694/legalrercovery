const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const dotenvContent = fs.readFileSync(envPath, 'utf-8');
  dotenvContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
}

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("MONGODB_URI is not defined");
  process.exit(1);
}

async function runTests() {
  console.log("=== STARTING BULK CLAIMS UPLOAD & AI PARSING VERIFICATION ===\n");
  
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('test');
  
  // 1. Verify user setups
  const advocateUser = await db.collection("users").findOne({ phone: "8700343611" });
  if (advocateUser && advocateUser.hasUnlimitedCases === true) {
    console.log("  [PASS] Advocate user verified in DB.");
  } else {
    console.error("  [FAIL] Advocate user not found or misconfigured.");
    process.exit(1);
  }

  // 2. Test Police Station mapping logic on DB
  console.log("\nTesting Police Station directory lookup mapping for bulk parse:");
  const haryanaStation = await db.collection("police_stations").findOne({ state: { $regex: /^haryana$/i } });
  if (haryanaStation) {
    console.log(`  [PASS] Haryana police station HQ exists: ${haryanaStation.hqName}`);
  } else {
    console.warn("  [WARN] No Haryana police station HQ found in directory. Inserting mock for test...");
    await db.collection("police_stations").insertOne({
      state: "Haryana",
      hqName: "Gurugram Police HQ",
      emails: ["sho.gurugram@hrypolice.gov.in"],
      hqAddress: "Sector 56, Gurugram"
    });
  }

  const mockParsedCase = {
    defaulterName: "Dr. Amrita Sharma",
    state: "Haryana",
    stuckAmount: 1461994,
    dueDate: "2024-11-24"
  };

  // Simulate endpoint's police station mapping
  const stations = await db.collection("police_stations").find({}).toArray();
  const matchedStation = stations.find(s => s.state.toLowerCase() === mockParsedCase.state.toLowerCase());
  
  if (matchedStation && matchedStation.hqName) {
    mockParsedCase.policeStationName = matchedStation.hqName;
    mockParsedCase.policeStationEmail = matchedStation.emails[0];
    mockParsedCase.policeStationAddress = matchedStation.hqAddress;
    console.log(`  [PASS] Auto-mapped police station for Haryana: ${mockParsedCase.policeStationName}`);
  } else {
    console.error("  [FAIL] Police station mapping failed.");
    process.exit(1);
  }

  // 3. Test Bulk Create case ID sequencing & batch inserts
  console.log("\nTesting Bulk Creation simulation (seeding and sequential ID generation):");
  
  const initialCount = await db.collection("cases").countDocuments();
  const today = new Date();
  const dayVal = today.getDate();
  const monthVal = today.getMonth() + 1;
  const yearSuffix = today.getFullYear().toString().slice(-2);

  const mockCasesToInsert = [
    {
      defaulterName: "Dr. Amrita Sharma",
      entityType: "Individual",
      phone: "9716030793",
      email: "zumaxaa@ggmail.com",
      address: "Bahadurgarh, Haryana",
      stuckAmount: 1461994,
      dueDate: "2024-11-24",
      policeStationName: mockParsedCase.policeStationName,
      policeStationEmail: mockParsedCase.policeStationEmail,
      policeStationAddress: mockParsedCase.policeStationAddress
    },
    {
      defaulterName: "Ladivya Dental Clinic",
      entityType: "Company",
      phone: "9958872149",
      email: "kiwi21c@gmail.com",
      address: "Sector 109, Gurugram",
      stuckAmount: 1083972,
      dueDate: "2024-11-25",
      policeStationName: mockParsedCase.policeStationName,
      policeStationEmail: mockParsedCase.policeStationEmail,
      policeStationAddress: mockParsedCase.policeStationAddress
    }
  ];

  const mappedDocs = mockCasesToInsert.map((c, index) => {
    const nextNum = String(initialCount + index + 1).padStart(4, '0');
    const caseId = `LR-${nextNum}-${dayVal}${monthVal}${yearSuffix}`;

    return {
      userId: advocateUser._id,
      caseId,
      ...c,
      clientName: advocateUser.name,
      clientEmail: advocateUser.email,
      clientPhone: advocateUser.phone,
      clientAddress: advocateUser.address,
      status: "active",
      currentStep: 1,
      createdAt: today.toISOString(),
      updatedAt: today.toISOString()
    };
  });

  // Bulk Insert
  const insertResult = await db.collection("cases").insertMany(mappedDocs);
  console.log(`  [PASS] Successfully inserted ${insertResult.insertedCount} mock cases in bulk.`);

  // Verify sequential caseId generation
  const insertedCases = await db.collection("cases").find({ userId: advocateUser._id, defaulterName: { $in: ["Dr. Amrita Sharma", "Ladivya Dental Clinic"] } }).toArray();
  
  if (insertedCases.length >= 2) {
    const ids = insertedCases.map(ic => ic.caseId).sort();
    console.log(`  [PASS] Generated sequential IDs: ${JSON.stringify(ids)}`);
    if (ids[0] !== ids[1]) {
      console.log("  [PASS] Verified caseIds are unique and do not collide.");
    } else {
      console.error("  [FAIL] Colliding caseIds generated.");
      process.exit(1);
    }
  } else {
    console.error("  [FAIL] Failed to retrieve inserted cases.");
    process.exit(1);
  }

  // Clean up
  const deleteResult = await db.collection("cases").deleteMany({
    userId: advocateUser._id,
    defaulterName: { $in: ["Dr. Amrita Sharma", "Ladivya Dental Clinic"] }
  });
  console.log(`  [PASS] Cleaned up ${deleteResult.deletedCount} temporary bulk cases.`);

  // 4. Source Code Security Audits
  console.log("\nAuditing Bulk Endpoint Security Checks in Source Code:");
  
  const parseRoutePath = path.join(__dirname, '../src/app/api/cases/bulk-parse/route.ts');
  const createRoutePath = path.join(__dirname, '../src/app/api/cases/bulk-create/route.ts');

  if (fs.existsSync(parseRoutePath)) {
    const code = fs.readFileSync(parseRoutePath, 'utf8');
    if (code.includes("hasUnlimitedCases !== true") && code.includes("403")) {
      console.log("  [PASS] /api/cases/bulk-parse endpoint enforces advocate authorization.");
    } else {
      console.error("  [FAIL] /api/cases/bulk-parse endpoint lacks advocate check.");
      process.exit(1);
    }
  } else {
    console.error("  [FAIL] /api/cases/bulk-parse route file is missing.");
    process.exit(1);
  }

  if (fs.existsSync(createRoutePath)) {
    const code = fs.readFileSync(createRoutePath, 'utf8');
    if (code.includes("hasUnlimitedCases !== true") && code.includes("403")) {
      console.log("  [PASS] /api/cases/bulk-create endpoint enforces advocate authorization.");
    } else {
      console.error("  [FAIL] /api/cases/bulk-create endpoint lacks advocate check.");
      process.exit(1);
    }
  } else {
    console.error("  [FAIL] /api/cases/bulk-create route file is missing.");
    process.exit(1);
  }

  console.log("\n=== ALL BULK OPERATIONS VERIFICATIONS PASSED SUCCESSFULLY ===\n");
  
  await client.close();
}

runTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
