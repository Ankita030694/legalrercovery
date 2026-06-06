const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected successfully to server");
    
    const adminDb = client.db().admin();
    const dbsList = await adminDb.listDatabases();
    console.log("Databases:");
    console.log(JSON.stringify(dbsList.databases, null, 2));

    for (const dbInfo of dbsList.databases) {
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      console.log(`Collections in ${dbInfo.name}:`, collections.map(c => c.name));
      
      for (const col of collections) {
        if (col.name === 'users') {
          const count = await db.collection(col.name).countDocuments();
          console.log(`  Count of users in ${dbInfo.name}.${col.name}:`, count);
          if (count > 0) {
            const sample = await db.collection(col.name).find({}).limit(5).toArray();
            console.log(`  Sample users in ${dbInfo.name}:`, JSON.stringify(sample, null, 2));
          }
        }
        if (col.name === 'transactions') {
          const count = await db.collection(col.name).countDocuments();
          console.log(`  Count of transactions in ${dbInfo.name}.${col.name}:`, count);
          if (count > 0) {
            const sample = await db.collection(col.name).find({}).limit(5).toArray();
            console.log(`  Sample transactions in ${dbInfo.name}:`, JSON.stringify(sample, null, 2));
          }
        }
      }
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
