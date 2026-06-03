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
    
    // First, let's clean up any bad fields
    const unsetResult = await db.collection("cases").updateOne(
      { caseId: "LR-0001-3626" },
      { $unset: { "`timeline": "" } }
    );
    console.log("Unset bad timeline fields result:", unsetResult.modifiedCount);

    // Perform the correct update
    const result = await db.collection("cases").updateOne(
      { caseId: "LR-0001-3626" },
      {
        $set: {
          status: "active",
          currentStep: 4,
          "timeline.0.status": "completed",
          "timeline.1.status": "completed",
          "timeline.2.status": "completed",
          "timeline.3.status": "scheduled",
          "timeline.3.scheduledAt": "2026-06-01T00:00:00.000Z",
          "timeline.3.completedAt": null,
          "timeline.3.error": null
        },
        $unset: {
          recoveredAmount: ""
        }
      }
    );
    console.log("Matched documents:", result.matchedCount);
    console.log("Modified documents:", result.modifiedCount);

    // Verify the document
    const updatedCase = await db.collection("cases").findOne({ caseId: "LR-0001-3626" });
    console.log("Updated case timeline:", JSON.stringify(updatedCase.timeline, null, 2));
    console.log("Updated case status:", updatedCase.status);
    console.log("Updated case currentStep:", updatedCase.currentStep);
    console.log("Updated case recoveredAmount:", updatedCase.recoveredAmount);
    console.log("Root keys:", Object.keys(updatedCase));
  } finally {
    await client.close();
  }
}

main().catch(console.error);
