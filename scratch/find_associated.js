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

  const targetId = '6a1b1b6ba5c3d24fcc346759';
  console.log(`\n=== Finding all documents associated with ID: ${targetId} ===`);
  
  const collections = await db.listCollections().toArray();
  for (const col of collections) {
    const name = col.name;
    const matches = await db.collection(name).find({
      $or: [
        { _id: targetId },
        { userId: targetId },
        { user: targetId },
        { clientEmail: 'anujmalik2008@gmail.com' },
        { email: 'anujmalik2008@gmail.com' }
      ]
    }).toArray();
    
    if (matches.length > 0) {
      console.log(`\nMatch found in collection: ${name}`);
      console.log(JSON.stringify(matches, null, 2));
    }
  }

  await client.close();
}

run().catch(console.error);
