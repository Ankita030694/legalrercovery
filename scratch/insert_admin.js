const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Xerxes:utOxExsp6b5Xdpdv@crm.pvhmw.mongodb.net/?appName=CRM";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('test'); 
    const usersCollection = db.collection('users');

    const newUser = {
      name: "Shrey Arora",
      phone: "8130104447",
      email: "shrey@amalegalsolutions.com", 
      state: "Delhi",
      isPaid: true,
      oppositionCount: 999, 
      amountPaid: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await usersCollection.updateOne(
      { phone: newUser.phone },
      { $set: newUser },
      { upsert: true }
    );

    console.log("User upserted successfully:", result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
