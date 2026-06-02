const fs = require('fs');
const path = require('path');

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

const clientId = process.env.NOTICE_CLIENT_ID;
const clientSecret = process.env.NOTICE_CLIENT_SECRET;
const refreshToken = process.env.NOTICE_REFRESH_TOKEN;

async function testOAuthEndpoint(domain) {
  console.log(`\nTesting Zoho OAuth token exchange via ${domain}...`);
  try {
    const url = `https://${domain}/oauth/v2/token`;
    
    // Using standard node https to avoid dependencies
    const https = require('https');
    const querystring = require('querystring');
    
    const postData = querystring.stringify({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token'
    });
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    return new Promise((resolve) => {
      const req = https.request(url, options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          console.log(`[${domain}] Response Status: ${res.statusCode}`);
          console.log(`[${domain}] Response Body: ${body}`);
          try {
            resolve({ success: res.statusCode === 200, data: JSON.parse(body) });
          } catch (e) {
            resolve({ success: false, error: 'Failed to parse JSON' });
          }
        });
      });
      
      req.on('error', (e) => {
        console.error(`[${domain}] Request Error: ${e.message}`);
        resolve({ success: false, error: e.message });
      });
      
      req.write(postData);
      req.end();
    });
  } catch (err) {
    console.error(`[${domain}] Fatal error:`, err);
    return { success: false, error: err.message };
  }
}

async function run() {
  console.log("Starting Zoho OAuth Credentials Audit...");
  console.log("Client ID Prefix:", clientId ? clientId.substring(0, 10) + "..." : "undefined");
  console.log("Client Secret Prefix:", clientSecret ? clientSecret.substring(0, 5) + "..." : "undefined");
  console.log("Refresh Token Prefix:", refreshToken ? refreshToken.substring(0, 10) + "..." : "undefined");

  if (!clientId || !clientSecret || !refreshToken) {
    console.error("Missing one or more Zoho environment credentials.");
    process.exit(1);
  }

  const inResult = await testOAuthEndpoint("accounts.zoho.in");
  const comResult = await testOAuthEndpoint("accounts.zoho.com");
  
  console.log("\n--- OAuth Audit Summary ---");
  if (inResult.success) {
    console.log("✅ OAuth Token Exchange SUCCEEDED via accounts.zoho.in!");
  } else if (comResult.success) {
    console.log("✅ OAuth Token Exchange SUCCEEDED via accounts.zoho.com!");
  } else {
    console.log("❌ OAuth Token Exchange FAILED on both domains.");
    console.log("This indicates that the Client ID, Client Secret, or Refresh Token is officially invalid in Zoho.");
  }
}

run();
