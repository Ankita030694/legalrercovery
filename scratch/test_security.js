const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

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

const BASE_URL = 'http://localhost:3000';

async function main() {
  console.log("Connecting to Database...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();
  console.log(`Connected to DB: ${db.databaseName}`);

  try {
    // ----------------------------------------------------
    // TEST 1: OTP Send Cooldown (Rate Limiting - Signup)
    // ----------------------------------------------------
    console.log("\n--- TEST 1: OTP Send Cooldown (Rate Limiting - Signup) ---");
    const testPhone1 = "9999999999";
    
    // Clear existing record to start fresh
    await db.collection("pending_verification").deleteMany({ phone: testPhone1 });
    console.log(`Cleared pending_verification for phone: ${testPhone1}`);

    // Send first OTP request
    console.log("Sending first OTP request...");
    const res1 = await fetch(`${BASE_URL}/api/users/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test User 1",
        email: "test1@example.com",
        phone: testPhone1,
        state: "Delhi",
        oppositionCount: 1
      })
    });
    
    console.log(`First request status: ${res1.status}`);
    const data1 = await res1.json();
    console.log("First request response:", data1);
    
    if (res1.status !== 200 || !data1.pendingId) {
      throw new Error(`Failed to send initial OTP. Status: ${res1.status}`);
    }

    // Send second OTP request immediately
    console.log("Sending second OTP request immediately (cooldown check)...");
    const res2 = await fetch(`${BASE_URL}/api/users/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test User 1",
        email: "test1@example.com",
        phone: testPhone1,
        state: "Delhi",
        oppositionCount: 1
      })
    });

    console.log(`Second request status (expected 429): ${res2.status}`);
    const data2 = await res2.json();
    console.log("Second request response:", data2);

    if (res2.status !== 429) {
      throw new Error(`Expected 429 Too Many Requests, got ${res2.status}`);
    }
    console.log("TEST 1 PASSED: Signup Cooldown rate-limiting triggered successfully!");

    // ----------------------------------------------------
    // TEST 2: OTP Brute-Force Limits (Max 5 failed attempts - Signup)
    // ----------------------------------------------------
    console.log("\n--- TEST 2: OTP Brute-Force Limit ---");
    const testPhone2 = "9999999998";
    
    // Clear existing record to start fresh
    await db.collection("pending_verification").deleteMany({ phone: testPhone2 });
    await db.collection("pending_payment").deleteMany({ phone: testPhone2 });
    console.log(`Cleared collections for phone: ${testPhone2}`);

    // Request new OTP
    console.log("Requesting OTP for session...");
    const resSend = await fetch(`${BASE_URL}/api/users/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test User 2",
        email: "test2@example.com",
        phone: testPhone2,
        state: "Delhi",
        oppositionCount: 1
      })
    });
    
    const dataSend = await resSend.json();
    const pendingId = dataSend.pendingId;
    console.log(`New pending session ID: ${pendingId}`);

    if (!pendingId) {
      throw new Error("Failed to get pendingId for OTP brute force test");
    }

    // Try incorrect OTP 5 times
    for (let i = 1; i <= 5; i++) {
      console.log(`Attempt ${i}/5 with incorrect OTP...`);
      const resVerify = await fetch(`${BASE_URL}/api/users/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pendingId: pendingId,
          otp: "000000" // Always incorrect
        })
      });

      console.log(`Attempt ${i} response status: ${resVerify.status}`);
      const dataVerify = await resVerify.json();
      console.log(`Attempt ${i} response body:`, dataVerify);

      if (i < 5) {
        if (resVerify.status !== 400 || !dataVerify.error.includes("Invalid OTP code")) {
          throw new Error(`Attempt ${i}: Expected 400 with invalid OTP code error, got status ${resVerify.status}`);
        }
        
        // Verify attempts count in DB
        const record = await db.collection("pending_verification").findOne({ _id: new ObjectId(pendingId) });
        if (!record || record.failedAttempts !== i) {
          throw new Error(`Attempt ${i}: Database failedAttempts is ${record ? record.failedAttempts : 'undefined'}, expected ${i}`);
        }
      } else {
        // 5th attempt
        if (resVerify.status !== 400 || !dataVerify.error.includes("Too many failed verification attempts")) {
          throw new Error(`5th attempt: Expected 400 with too many failed attempts error, got status ${resVerify.status}`);
        }

        // Verify session is deleted in DB
        const record = await db.collection("pending_verification").findOne({ _id: new ObjectId(pendingId) });
        if (record) {
          throw new Error("5th attempt: Session document was not deleted from database!");
        }
      }
    }
    console.log("TEST 2 PASSED: OTP brute-force limits triggered and session was deleted on 5th failed attempt!");

    // ----------------------------------------------------
    // TEST 3: PayU Webhook Verification Bypass Check
    // ----------------------------------------------------
    console.log("\n--- TEST 3: PayU Webhook Verification Bypass Check ---");
    const testPhone3 = "9999999997";

    // Clear and create a pending payment record
    await db.collection("pending_payment").deleteMany({ phone: testPhone3 });
    await db.collection("users").deleteMany({ phone: testPhone3 });
    await db.collection("payment_debug_logs").deleteMany({ "data.phone": testPhone3 });
    await db.collection("payment_debug_logs").deleteMany({ "data.udf1": testPhone3 });
    
    const insertPending = await db.collection("pending_payment").insertOne({
      name: "Spoof Target",
      email: "spoof@example.com",
      phone: testPhone3,
      state: "Delhi",
      oppositionCount: 1,
      verified: true,
      createdAt: new Date()
    });
    
    const udf1Val = insertPending.insertedId.toString();
    console.log(`Inserted pending_payment with ID: ${udf1Val}`);

    // Send a webhook notification indicating success but with a fake transaction ID that cannot be verified
    console.log("Sending spoofed successful webhook post request...");
    
    // Format body as form data urlencoded
    const spoofTxnId = `fake-txn-${Date.now()}`;
    const payloadParams = new URLSearchParams();
    payloadParams.append("status", "success");
    payloadParams.append("txnid", spoofTxnId);
    payloadParams.append("amount", "999.00");
    payloadParams.append("productinfo", "Paid With ButtonId 111293057");
    payloadParams.append("firstname", "Spoof Target");
    payloadParams.append("email", "spoof@example.com");
    payloadParams.append("udf1", udf1Val);
    payloadParams.append("key", "dummy_key");

    const resWebhook = await fetch(`${BASE_URL}/api/webhooks/payu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payloadParams.toString()
    });

    console.log(`Webhook status code: ${resWebhook.status}`);
    const dataWebhook = await resWebhook.json();
    console.log("Webhook response body:", dataWebhook);

    if (resWebhook.status !== 200) {
      throw new Error(`Webhook request failed with status: ${resWebhook.status}`);
    }

    // Verify user is NOT migrated to 'users'
    const migratedUser = await db.collection("users").findOne({ phone: testPhone3 });
    if (migratedUser) {
      throw new Error("VULNERABILITY DETECTED: Spoofed webhook successfully migrated pending user to 'users' collection despite verification failing!");
    }

    // Verify pending_payment record still exists
    const stillPending = await db.collection("pending_payment").findOne({ _id: new ObjectId(udf1Val) });
    if (!stillPending) {
      throw new Error("Error: The pending_payment record was deleted or modified despite spoofed webhook!");
    }

    // Check debug logs for webhook_verification_failed
    const logs = await db.collection("payment_debug_logs").find({ step: "webhook_verification_failed", "data.txnid": spoofTxnId }).toArray();
    if (logs.length === 0) {
      throw new Error("Error: No webhook_verification_failed log was found in payment_debug_logs!");
    }

    console.log("Logged verification failure info:", logs[0]);
    console.log("TEST 3 PASSED: Spoofed webhooks are properly rejected and logged without migrating the user!");

    // ----------------------------------------------------
    // TEST 4: Strict Cron Queue Security
    // ----------------------------------------------------
    console.log("\n--- TEST 4: Strict Cron Queue Security ---");
    const cronSecret = process.env.CRON_SECRET;
    console.log(`CRON_SECRET status: ${cronSecret ? "Defined" : "UNDEFINED!"}`);

    // Call without authorization header
    console.log("1. Triggering cron without Authorization header...");
    const resCron1 = await fetch(`${BASE_URL}/api/cron/dispatch-queue`, {
      method: 'POST'
    });
    console.log(`Response status: ${resCron1.status}`);
    const bodyCron1 = await resCron1.text();
    console.log(`Response body: ${bodyCron1}`);

    // Call with invalid token
    console.log("2. Triggering cron with invalid Authorization token...");
    const resCron2 = await fetch(`${BASE_URL}/api/cron/dispatch-queue`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer invalid_token_123456'
      }
    });
    console.log(`Response status: ${resCron2.status}`);
    const bodyCron2 = await resCron2.text();
    console.log(`Response body: ${bodyCron2}`);

    // Expect 401 Unauthorized for both if we are running in production
    console.log("Note: This test runs against the server. If the server is in production mode, both must return 401.");
    
    // Call with valid token (if defined)
    if (cronSecret) {
      console.log("3. Triggering cron with valid Authorization token...");
      const resCron3 = await fetch(`${BASE_URL}/api/cron/dispatch-queue`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${cronSecret}`
        }
      });
      console.log(`Response status (expected 200): ${resCron3.status}`);
      const bodyCron3 = await resCron3.json();
      console.log("Response body:", bodyCron3);

      if (resCron3.status !== 200) {
        throw new Error(`Expected 200 OK for valid cron secret, got status ${resCron3.status}`);
      }
    } else {
      console.log("Skipping step 3 because CRON_SECRET is not defined in .env.local");
    }

    console.log("TEST 4 RUN COMPLETE!");

    // ----------------------------------------------------
    // TEST 5: Login OTP Send Cooldown (Rate Limiting - Login)
    // ----------------------------------------------------
    console.log("\n--- TEST 5: Login OTP Send Cooldown (Rate Limiting) ---");
    const testPhone5 = "9999999995";
    
    // Create a dummy registered user (since login requires a registered user)
    await db.collection("users").deleteMany({ phone: testPhone5 });
    await db.collection("users").insertOne({
      name: "Test Login User",
      email: "testlogin@example.com",
      phone: testPhone5,
      state: "Delhi",
      isPaid: true,
      createdAt: new Date()
    });
    console.log(`Prepared users collection with registered phone: ${testPhone5}`);

    // Send first login OTP request
    console.log("Sending first login OTP request...");
    const resLogin1 = await fetch(`${BASE_URL}/api/auth/send-login-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: testPhone5 })
    });
    
    console.log(`First login OTP status: ${resLogin1.status}`);
    const dataLogin1 = await resLogin1.json();
    console.log("First login OTP response:", dataLogin1);
    
    if (resLogin1.status !== 200 || !dataLogin1.success) {
      throw new Error(`Failed to send initial login OTP. Status: ${resLogin1.status}`);
    }

    // Send second login OTP request immediately
    console.log("Sending second login OTP request immediately (cooldown check)...");
    const resLogin2 = await fetch(`${BASE_URL}/api/auth/send-login-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: testPhone5 })
    });

    console.log(`Second login OTP status (expected 429): ${resLogin2.status}`);
    const dataLogin2 = await resLogin2.json();
    console.log("Second login OTP response:", dataLogin2);

    if (resLogin2.status !== 429) {
      throw new Error(`Expected 429 Too Many Requests for login OTP, got ${resLogin2.status}`);
    }
    console.log("TEST 5 PASSED: Login OTP Cooldown rate-limiting triggered successfully!");

    // ----------------------------------------------------
    // CLEANUP
    // ----------------------------------------------------
    console.log("\nCleaning up test database records...");
    await db.collection("pending_verification").deleteMany({ phone: testPhone1 });
    await db.collection("pending_verification").deleteMany({ phone: testPhone2 });
    await db.collection("pending_payment").deleteMany({ phone: testPhone3 });
    await db.collection("payment_debug_logs").deleteMany({ "data.txnid": spoofTxnId });
    await db.collection("users").deleteMany({ phone: testPhone5 });
    console.log("Cleanup complete.");

  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

main().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
