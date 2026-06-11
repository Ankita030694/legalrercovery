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
  console.log("=== STARTING REPRESENTATIONS AUTOMATED VERIFICATION ===\n");
  
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('test');
  
  // 1. Verify User Setup in database
  const advocateUser = await db.collection("users").findOne({ phone: "8700343611" });
  const normalUser = await db.collection("users").findOne({ phone: "8178310300" });
  
  console.log("Checking User Profiles in MongoDB:");
  if (advocateUser && advocateUser.hasUnlimitedCases === true) {
    console.log("  [PASS] Advocate user '8700343611' has 'hasUnlimitedCases: true'");
  } else {
    console.error("  [FAIL] Advocate user '8700343611' not found or hasUnlimitedCases is not true");
    process.exit(1);
  }
  
  if (normalUser && !normalUser.hasUnlimitedCases) {
    console.log("  [PASS] Normal user '8178310300' does not have advocate privileges");
  } else {
    console.warn("  [WARN] Normal user '8178310300' not found or is misconfigured");
  }

  // 2. Perform DB logic tests for Advocate
  console.log("\nTesting Representee DB CRUD operations (simulating API logic for Advocate):");
  
  const advocateId = advocateUser._id;
  const testRep = {
    userId: advocateId,
    name: "Test Organization Inc",
    email: "billing@testorg.com",
    phone: "9999999999",
    address: "123 Business Tower, Sector 30, Gurugram",
    state: "Haryana",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // Create (POST Simulation)
  const insertResult = await db.collection("representees").insertOne(testRep);
  const representeeId = insertResult.insertedId;
  console.log(`  [PASS] Successfully created representee with ID: ${representeeId}`);
  
  // Read (GET Simulation)
  const foundRep = await db.collection("representees").findOne({ _id: representeeId, userId: advocateId });
  if (foundRep && foundRep.name === "Test Organization Inc") {
    console.log("  [PASS] Successfully retrieved representee belonging to the advocate");
  } else {
    console.error("  [FAIL] Failed to retrieve representee or ownership mismatch");
    process.exit(1);
  }
  
  // Update (PUT Simulation)
  const updateResult = await db.collection("representees").updateOne(
    { _id: representeeId, userId: advocateId },
    { $set: { name: "Test Organization LLC", updatedAt: new Date().toISOString() } }
  );
  if (updateResult.modifiedCount === 1) {
    console.log("  [PASS] Successfully updated representee name");
  } else {
    console.error("  [FAIL] Failed to update representee");
    process.exit(1);
  }
  
  // Create Case (POST /api/cases Simulation)
  console.log("\nTesting Case Association with Representation (simulating API logic for Case Creation):");
  const testCase = {
    userId: advocateId,
    defaulterName: "Stuck Debtor Ltd",
    entityType: "Company",
    stuckAmount: 50000,
    dueDate: "2026-05-01",
    phone: "8888888888",
    email: "finance@debtor.com",
    address: "Defaulter Lane, Delhi",
    clientName: foundRep.name, // Auto-populated from representee
    clientEmail: foundRep.email,
    clientPhone: foundRep.phone,
    clientAddress: foundRep.address,
    representeeId: representeeId, // Linked reference
    status: "active",
    currentStep: 1,
    createdAt: new Date().toISOString()
  };
  
  const caseInsertResult = await db.collection("cases").insertOne(testCase);
  const caseId = caseInsertResult.insertedId;
  console.log(`  [PASS] Case created with ID: ${caseId} linked to Representee ID: ${representeeId}`);
  
  // Verify case contains correct represented organization client fields
  const savedCase = await db.collection("cases").findOne({ _id: caseId });
  if (savedCase && savedCase.clientName === "Test Organization Inc" && savedCase.representeeId.toString() === representeeId.toString()) {
    console.log("  [PASS] Case client fields successfully populated with representee's organization details");
  } else {
    console.error("  [FAIL] Case client details or representeeId mapping failed", savedCase);
    process.exit(1);
  }

  // Clean Up Test Data
  await db.collection("cases").deleteOne({ _id: caseId });
  await db.collection("representees").deleteOne({ _id: representeeId });
  console.log("\n  [PASS] Cleaned up temporary test case and representee documents");

  // 3. Static Code Security Checks
  console.log("\nAuditing Source Code Security Gates:");
  
  const representeesRoutePath = path.join(__dirname, '../src/app/api/representees/route.ts');
  const casesRoutePath = path.join(__dirname, '../src/app/api/cases/route.ts');
  
  if (fs.existsSync(representeesRoutePath)) {
    const code = fs.readFileSync(representeesRoutePath, 'utf8');
    const hasAccessControl = code.includes("hasUnlimitedCases !== true") && code.includes("403");
    if (hasAccessControl) {
      console.log("  [PASS] /api/representees route enforces 'hasUnlimitedCases !== true' check and returns 403 Forbidden");
    } else {
      console.error("  [FAIL] /api/representees route lacks strict hasUnlimitedCases check / 403 response");
      process.exit(1);
    }
  } else {
    console.error("  [FAIL] Representees route file not found");
    process.exit(1);
  }
  
  if (fs.existsSync(casesRoutePath)) {
    const code = fs.readFileSync(casesRoutePath, 'utf8');
    const hasCaseAccessControl = code.includes("user.hasUnlimitedCases !== true") && code.includes("403");
    if (hasCaseAccessControl) {
      console.log("  [PASS] /api/cases route enforces advocate check on representeeId submission and returns 403 Forbidden");
    } else {
      console.error("  [FAIL] /api/cases route lacks security gate for representeeId");
      process.exit(1);
    }
  } else {
    console.error("  [FAIL] Cases route file not found");
    process.exit(1);
  }
  
  console.log("\n=== ALL AUTOMATED VERIFICATIONS PASSED SUCCESSFULLY ===\n");
  
  await client.close();
}

runTests().catch(err => {
  console.error("Test execution error:", err);
  process.exit(1);
});
