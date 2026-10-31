const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    content.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        }
        process.env[key] = val;
      }
    });
  }
}

async function submitLegalRecoverySitemaps(liveUrlToInspect) {
  loadEnv();
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const siteUrl = process.env.GSC_SITE_URL || "sc-domain:legalrecovery.in";

  if (!clientEmail || !privateKey) {
    throw new Error("Missing GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY in .env.local");
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
  const sitemapUrl = "https://www.legalrecovery.in/sitemap.xml";

  console.log(`📡 Submitting sitemap (${sitemapUrl}) to Google Search Console (${siteUrl})...`);
  await searchconsole.sitemaps.submit({
    siteUrl,
    feedpath: sitemapUrl,
  });
  console.log(`✅ Sitemap successfully submitted to Google Search Console!`);

  if (liveUrlToInspect) {
    try {
      console.log(`🔎 Inspecting URL in GSC (${liveUrlToInspect})...`);
      const inspectRes = await searchconsole.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: liveUrlToInspect,
          siteUrl,
        },
      });
      const verdict = inspectRes.data?.inspectionResult?.indexStatusResult?.verdict || "UNKNOWN";
      const coverageState = inspectRes.data?.inspectionResult?.indexStatusResult?.coverageState || "N/A";
      console.log(`✅ GSC URL Inspection Verdict: ${verdict} (${coverageState})`);
    } catch (inspErr) {
      console.warn(`⚠️ Non-fatal URL inspection warning: ${inspErr.message}`);
    }
  }
}

if (require.main === module) {
  const targetUrl = process.argv[2];
  submitLegalRecoverySitemaps(targetUrl).catch((err) => {
    console.error("❌ GSC Sitemap Submission Error:", err.message);
    process.exit(1);
  });
}

module.exports = { submitLegalRecoverySitemaps };
