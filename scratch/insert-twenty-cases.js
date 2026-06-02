// Scratch Database Reset & Scale Testing Case Insertion Script
// Connects to MongoDB, deletes previous test cases, and inserts 20 active test cases with step 1 scheduled.

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
if (!mongoUri) {
  console.error("MONGODB_URI environment variable is missing.");
  process.exit(1);
}

async function run() {
  console.log("Connecting to MongoDB...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();

  // Find a valid userId from existing users to link cases to
  const firstUser = await db.collection("users").findOne({});
  if (!firstUser) {
    console.error("No users found in database. Cannot create cases without a valid userId.");
    await client.close();
    process.exit(1);
  }
  const userId = firstUser._id;
  console.log(`Linking all test cases to active userId: ${userId} (${firstUser.email || firstUser.name})`);

  // Clean out any old test dispatches and logs
  console.log("Clearing old scale test dispatches and logs...");
  const deleteCasesResult = await db.collection("cases").deleteMany({
    $or: [
      { email: "tech.ama123@gmail.com" },
      { phone: "8178310300" }
    ]
  });
  console.log(`Deleted ${deleteCasesResult.deletedCount} existing test cases.`);

  // Also clear dispatch logs to start with a fresh slate for scale audit
  const deleteLogsResult = await db.collection("dispatch_logs").deleteMany({});
  console.log(`Cleared ${deleteLogsResult.deletedCount} history dispatch log entries.`);

  // Generate 20 test cases
  console.log("Generating 20 new test cases scheduled for immediate dispatch...");
  const today = new Date();
  const dateString = `${String(today.getDate()).padStart(2, '0')}${String(today.getMonth() + 1).padStart(2, '0')}${today.getFullYear().toString().slice(-2)}`;
  
  const cases = [];
  for (let i = 1; i <= 20; i++) {
    const numStr = String(i).padStart(3, '0');
    const caseId = `LR-T${numStr}-${dateString}`;
    
    // Past date to trigger cron execution instantly
    const scheduledAt = new Date(Date.now() - 60000 * i).toISOString(); 

    cases.push({
      userId: userId,
      caseId: caseId,
      defaulterName: `Defaulter Scale Test #${i}`,
      entityType: "Individual",
      phone: "8178310300",
      email: "tech.ama123@gmail.com",
      address: "101, Innovator Tower, Sector 62, Noida, UP, 201301",
      stuckAmount: 1000 + i * 150,
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
          scheduledAt: scheduledAt
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
    });
  }

  const insertResult = await db.collection("cases").insertMany(cases);
  console.log(`Successfully inserted ${insertResult.insertedCount} new scale test cases!`);

  await client.close();
  console.log("Database reset and scale setup complete.");
}

run().catch(console.dir);
