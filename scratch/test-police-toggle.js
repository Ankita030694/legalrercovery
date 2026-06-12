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
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('test');

  const phoneNum = "8700343611";
  console.log(`Finding user with phone: ${phoneNum}`);
  
  let user = await db.collection("users").findOne({ phone: phoneNum });
  if (!user) {
    console.error(`User with phone ${phoneNum} not found!`);
    await client.close();
    return;
  }

  console.log("Found User before update:", {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    sendPoliceComplaints: user.sendPoliceComplaints
  });

  // Toggle sendPoliceComplaints to false
  await db.collection("users").updateOne(
    { _id: user._id },
    { $set: { sendPoliceComplaints: false } }
  );

  user = await db.collection("users").findOne({ _id: user._id });
  console.log("Found User after updating to false:", {
    _id: user._id,
    sendPoliceComplaints: user.sendPoliceComplaints
  });

  // Toggle sendPoliceComplaints back to true
  await db.collection("users").updateOne(
    { _id: user._id },
    { $set: { sendPoliceComplaints: true } }
  );

  user = await db.collection("users").findOne({ _id: user._id });
  console.log("Found User after resetting to true:", {
    _id: user._id,
    sendPoliceComplaints: user.sendPoliceComplaints
  });

  await client.close();
}

run().catch(console.error);
