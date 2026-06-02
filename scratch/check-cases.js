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
  const cases = await db.collection("cases").find({}).toArray();
  console.log(`Total cases: ${cases.length}`);
  if (cases.length > 0) {
    console.log("Sample Case:", JSON.stringify(cases[0], null, 2));
  }
  await client.close();
}
run().catch(console.error);
