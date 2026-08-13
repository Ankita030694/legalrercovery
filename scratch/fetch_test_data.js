const { MongoClient } = require('mongodb');
const fs = require('fs');

async function run() {
  const envFile = fs.readFileSync('.env.local', 'utf8');
  const match = envFile.match(/MONGODB_URI=(.*)/);
  if (!match) {
    console.error("No MONGODB_URI found");
    process.exit(1);
  }
  const uri = match[1].replace(/['"]/g, '').trim();

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const representee = await db.collection('representees').findOne({ $or: [{ name: /actoloan/i }, { displayName: /actoloan/i }, { companyName: /actoloan/i }] });
    console.log("Representee:");
    console.log(JSON.stringify(representee, null, 2));

    const caseDoc = await db.collection('cases').findOne({ defaulterName: /Imran/i });
    console.log("\nCase:");
    console.log(JSON.stringify(caseDoc, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();
