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
  console.error("MONGODB_URI is not defined");
  process.exit(1);
}

async function run() {
  console.log("Connecting to:", mongoUri.replace(/:([^@]+)@/, ":****@"));
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();
  console.log("Connected DB Name:", db.databaseName);
  const collections = await db.listCollections().toArray();
  console.log("Collections:", collections.map(c => c.name));
  
  // Find a user
  const user = await db.collection("users").findOne({});
  console.log("Found User:", user);
  
  await client.close();
}
run().catch(console.error);
