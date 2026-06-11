const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Load environment variables from .env.local in the lr directory
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

function formatDate(date) {
  return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
}

async function run() {
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('test');

  const today = new Date();
  const oneWeekLater = new Date();
  oneWeekLater.setDate(today.getDate() + 7);
  const twoWeeksLater = new Date();
  twoWeeksLater.setDate(today.getDate() + 14);
  const threeWeeksLater = new Date();
  threeWeeksLater.setDate(today.getDate() + 21);

  const resetTimeline = [
    { 
      step: 1, 
      label: "First Notice", 
      description: "Notice drafted. Ready to dispatch.", 
      date: "Awaiting dispatch", 
      status: "pending" 
    },
    { 
      step: 2, 
      label: "Second Notice", 
      description: "Dispatched exactly 1 week after", 
      date: formatDate(oneWeekLater), 
      status: "locked" 
    },
    { 
      step: 3, 
      label: "Third Notice", 
      description: "Final demand notice prior to filing", 
      date: formatDate(twoWeeksLater), 
      status: "locked" 
    },
    { 
      step: 4, 
      label: "Police Complaint Draft", 
      description: "Drafted complaint copy shared with SHO", 
      date: formatDate(threeWeeksLater), 
      status: "locked" 
    }
  ];

  console.log("=== Resetting all cases in the database to start fresh from step 1 ===");
  
  // Reset all documents in the cases collection
  const result = await db.collection("cases").updateMany(
    {},
    {
      $set: {
        currentStep: 1,
        status: "active",
        updatedAt: today.toISOString(),
        timeline: resetTimeline
      },
      $unset: {
        lastLedger: "" // Clear any dispatch logs on the case
      }
    }
  );

  console.log(`Successfully reset ${result.matchedCount} cases in the database. Modified: ${result.modifiedCount}`);

  await client.close();
}

run().catch(err => {
  console.error("Error resetting cases:", err);
  process.exit(1);
});
