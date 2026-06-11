const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

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
  const db = client.db('test');

  console.log("\n=== All Users ===");
  const users = await db.collection("users").find({}).toArray();
  console.log(JSON.stringify(users.map(u => ({
    _id: u._id,
    phone: u.phone,
    name: u.name,
    email: u.email,
    hasUnlimitedCases: u.hasUnlimitedCases,
    isPaid: u.isPaid
  })), null, 2));

  await client.close();
}

run().catch(console.error);
