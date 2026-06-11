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
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('test');

  console.log("\n=== Finding references to user ID 6a1b1b6ba5c3d24fcc346759 or phone 8700343611 in all collections ===");
  const collections = await db.listCollections().toArray();
  for (const col of collections) {
    const name = col.name;
    const query = {
      $or: [
        { userId: '6a1b1b6ba5c3d24fcc346759' },
        { userId: { $in: [ '6a1b1b6ba5c3d24fcc346759', '6a22974eecb8c68ecfd6e769' ] } },
        { phone: '8700343611' },
        { clientPhone: '8700343611' }
      ]
    };
    const matches = await db.collection(name).find(query).toArray();
    if (matches.length > 0) {
      console.log(`\nMatch found in collection: ${name}`);
      console.log(JSON.stringify(matches, null, 2));
    }
  }

  await client.close();
}

run().catch(err => {
  console.error("Error running script:", err);
  process.exit(1);
});
