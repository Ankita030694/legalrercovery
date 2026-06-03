const { MongoClient } = require('mongodb');
const fs = require('fs');

async function main() {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  let uri = '';
  for (const line of envContent.split('\n')) {
    if (line.startsWith('MONGODB_URI=')) {
      uri = line.substring('MONGODB_URI='.length).trim();
      break;
    }
  }

  if (!uri) {
    console.error("No MONGODB_URI found");
    return;
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    console.log("Connected DB Name:", db.databaseName);
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
  } finally {
    await client.close();
  }
}

main().catch(console.error);
