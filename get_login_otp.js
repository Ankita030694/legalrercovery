const { MongoClient } = require('mongodb');

async function run() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("No MONGODB_URI found");
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    
    // Get the most recently requested login OTP
    const user = await db.collection("users").findOne(
      { loginOtp: { $exists: true } },
      { sort: { loginOtpCreatedAt: -1 } }
    );
    
    if (user) {
      console.log("----------------------------------------");
      console.log("LATEST LOGIN OTP:", user.loginOtp);
      console.log("For Phone:", user.phone);
      console.log("----------------------------------------");
    } else {
      console.log("No login OTP found in the database.");
    }
    await client.close();
  } catch (error) {
    console.error(error);
  }
}
run();
