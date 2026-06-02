// Diagnostic script to analyze dispatch queue execution speed from MongoDB logs
// Updated to match the active dispatch_logs collection schema

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
  console.log("Connecting to MongoDB to analyze dispatch logs...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();

  // Fetch all dispatch logs sorted by dispatchedAt
  const logs = await db.collection("dispatch_logs").find({}).sort({ dispatchedAt: 1 }).toArray();
  
  if (logs.length === 0) {
    console.log("No dispatch logs found in database. Please run the cron dispatch-queue first!");
    await client.close();
    process.exit(0);
  }

  console.log(`Found ${logs.length} dispatch log entries.\n`);
  
  console.log("---------------------------------------------------------------------------------------------");
  console.log("Case ID        | Step | Notice Ref       | Email Status | WA Status | Dispatched At");
  console.log("---------------------------------------------------------------------------------------------");
  
  logs.forEach(log => {
    const caseId = (log.caseId || "N/A").padEnd(14, ' ');
    const step = String(log.step || "N/A").padEnd(4, ' ');
    const noticeRef = (log.noticeRef || "N/A").padEnd(16, ' ');
    
    let emailStatus = "N/A";
    let waStatus = "N/A";
    if (log.channels) {
      if (log.channels.email) emailStatus = log.channels.email.status || "N/A";
      if (log.channels.whatsapp) waStatus = log.channels.whatsapp.status || "N/A";
    }
    
    emailStatus = emailStatus.padEnd(12, ' ');
    waStatus = waStatus.padEnd(9, ' ');
    const dateStr = log.dispatchedAt || "N/A";
    
    console.log(`${caseId} | ${step} | ${noticeRef} | ${emailStatus} | ${waStatus} | ${dateStr}`);
  });
  console.log("---------------------------------------------------------------------------------------------");

  // Calculate speed if there are multiple entries and timestamps are valid
  const validLogs = logs.filter(l => l.dispatchedAt && l.dispatchedAt !== "N/A");
  if (validLogs.length > 1) {
    const firstTime = new Date(validLogs[0].dispatchedAt);
    const lastTime = new Date(validLogs[validLogs.length - 1].dispatchedAt);
    const diffMs = lastTime - firstTime;
    const uniqueCases = new Set(validLogs.map(l => l.caseId)).size;
    
    console.log(`\nTotal unique cases processed: ${uniqueCases}`);
    console.log(`Total duration: ${(diffMs / 1000).toFixed(2)} seconds`);
    console.log(`Average time per case: ${(diffMs / uniqueCases).toFixed(0)} ms`);
    console.log(`Throughput: ${(uniqueCases / (diffMs / 1000)).toFixed(2)} cases/second`);
  } else {
    console.log("\nNot enough valid time logs to calculate overall throughput.");
  }

  await client.close();
}

run().catch(console.dir);
