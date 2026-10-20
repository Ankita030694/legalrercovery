const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// Manually read .env.local to ensure variables are parsed
const envPath = path.resolve(__dirname, ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

async function runTest() {
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const siteUrl = process.env.GSC_SITE_URL || "sc-domain:legalrecovery.in";

  console.log("=========================================");
  console.log("Testing Google Search Console API Connection");
  console.log("=========================================");
  console.log("Client Email:", clientEmail);
  console.log("Site Property:", siteUrl);

  if (!clientEmail || !privateKey) {
    console.error("❌ ERROR: Missing GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY in .env.local");
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/webmasters.readonly",
      "https://www.googleapis.com/auth/webmasters",
    ],
  });

  const searchconsole = google.searchconsole({ version: "v1", auth });

  try {
    console.log("\n1. Fetching list of verified properties accessible to this Service Account...");
    const sitesRes = await searchconsole.sites.list();
    const sites = sitesRes.data.siteEntry || [];

    if (sites.length === 0) {
      console.warn("⚠️  Connected to Google Cloud successfully, BUT no sites are listed yet!");
      console.warn("👉 REMINDER: Make sure you added the service account email to Google Search Console:");
      console.warn(`   Email: ${clientEmail}`);
      console.warn("   Go to: GSC > Settings > Users and permissions > Add user");
      return;
    }

    console.log("✅ Accessible properties in GSC:");
    sites.forEach((s) => console.log(`   - ${s.siteUrl} (Permission: ${s.permissionLevel})`));

    console.log(`\n2. Querying Search Performance for '${siteUrl}' (Last 28 Days)...`);
    const today = new Date();
    const prior28Days = new Date();
    prior28Days.setDate(today.getDate() - 28);

    const queryRes = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: prior28Days.toISOString().split("T")[0],
        endDate: today.toISOString().split("T")[0],
        dimensions: ["query"],
        rowLimit: 5,
      },
    });

    console.log("✅ Query successful!");
    if (queryRes.data.rows && queryRes.data.rows.length > 0) {
      console.log("Top queries sample:");
      queryRes.data.rows.forEach((r) => {
        console.log(`   - Query: "${r.keys[0]}", Clicks: ${r.clicks}, Impressions: ${r.impressions}`);
      });
    } else {
      console.log("   (No impressions/clicks recorded in this timeframe or data is still processing)");
    }

    console.log("\n🎉 ALL TESTS PASSED: Google Search Console API is fully connected and working!");
  } catch (err) {
    console.error("\n❌ API Request Failed:");
    console.error(err.message);
    if (err.message.includes("User does not have sufficient permissions")) {
      console.log("\n💡 Solution: Open Google Search Console -> Settings -> Users and permissions, and add:");
      console.log(`   ${clientEmail}`);
    }
  }
}

runTest();
