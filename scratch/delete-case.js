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

  // Delete case by name
  const result = await db.collection("cases").deleteMany({ defaulterName: "Defaulter Scale Test #2" });
  console.log(`Deleted ${result.deletedCount} cases with name 'Defaulter Scale Test #2'.`);

  // Optionally delete any associated dispatch logs or notifications for a clean slate
  const dispatchResult = await db.collection("dispatch_logs").deleteMany({});
  console.log(`Cleared ${dispatchResult.deletedCount} dispatch logs.`);
  
  const notificationsResult = await db.collection("notifications").deleteMany({});
  console.log(`Cleared ${notificationsResult.deletedCount} notifications.`);

  const pendingPaymentResult = await db.collection("pending_payment").deleteMany({});
  console.log(`Cleared ${pendingPaymentResult.deletedCount} pending payments.`);

  const pendingVerificationResult = await db.collection("pending_verification").deleteMany({});
  console.log(`Cleared ${pendingVerificationResult.deletedCount} pending verifications.`);

  await client.close();
}

run().catch(console.error);
