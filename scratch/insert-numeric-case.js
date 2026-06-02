const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

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

async function run() {
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();

  // Find a valid userId
  const firstUser = await db.collection("users").findOne({});
  if (!firstUser) {
    console.error("No users found in database.");
    await client.close();
    process.exit(1);
  }
  const userId = firstUser._id;

  // Clean out any old test cases
  console.log("Clearing old test cases...");
  const deleteResult = await db.collection("cases").deleteMany({
    $or: [
      { email: "tech.ama123@gmail.com" },
      { phone: "8178310300" }
    ]
  });
  console.log(`Deleted ${deleteResult.deletedCount} existing test cases.`);

  // Generate 1 single fresh numeric case matching the old production regex: LR-\d{4}-\d{6}
  const today = new Date();
  const dateString = `${String(today.getDate()).padStart(2, '0')}${String(today.getMonth() + 1).padStart(2, '0')}${today.getFullYear().toString().slice(-2)}`;
  const caseId = `LR-0002-${dateString}`; // e.g. LR-0002-020626
  
  const singleCase = {
    userId: userId,
    caseId: caseId,
    defaulterName: "Defaulter Scale Test #2",
    entityType: "Individual",
    phone: "8178310300",
    email: "tech.ama123@gmail.com",
    address: "101, Innovator Tower, Sector 62, Noida, UP, 201301",
    stuckAmount: 1150,
    dueDate: "2026-05-10",
    policeStationName: "Gurugram Sector 62",
    policeStationEmail: "sector62gurgaon@police.com",
    policeStationAddress: "Sector 62, Gurugram, Haryana",
    status: "active",
    currentStep: 1,
    createdAt: today.toISOString(),
    updatedAt: today.toISOString(),
    timeline: [
      {
        step: 1,
        label: "First Notice",
        description: "Notice drafted. Ready to dispatch.",
        date: "Awaiting dispatch",
        status: "scheduled",
        scheduledAt: new Date(Date.now() - 60000).toISOString()
      },
      {
        step: 2,
        label: "Second Notice",
        description: "Dispatched exactly 1 week after",
        date: "Locked",
        status: "locked"
      },
      {
        step: 3,
        label: "Third Notice",
        description: "Final demand notice prior to filing",
        date: "Locked",
        status: "locked"
      },
      {
        step: 4,
        label: "SHO Criminal Complaint",
        description: "Drafted complaint copy shared",
        date: "Locked",
        status: "locked"
      }
    ]
  };

  const insertResult = await db.collection("cases").insertOne(singleCase);
  console.log(`Successfully inserted 1 new fresh numeric test case: ${caseId}`);

  await client.close();
}
run().catch(console.error);
