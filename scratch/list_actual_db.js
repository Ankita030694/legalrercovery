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

async function run() {
  console.log("Connecting to actual MongoDB...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  
  // List all databases
  const adminDb = client.db().admin();
  const dbs = await adminDb.listDatabases();
  console.log("\nDatabases in Cluster:");
  for (const dbInfo of dbs.databases) {
    console.log(`- ${dbInfo.name} (${(dbInfo.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`);
    const db = client.db(dbInfo.name);
    const collections = await db.listCollections().toArray();
    for (const col of collections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`    * ${col.name}: ${count} documents`);
    }
  }
  
  await client.close();
}

run().catch(err => {
  console.error("Failed to fetch database information:", err);
  process.exit(1);
});
