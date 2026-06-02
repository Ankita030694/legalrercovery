const https = require('https');

const triggerProdEmail = () => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      from: "tech.ama123@gmail.com",
      subject: "Re: Legal Demand Notice 1... Ref: LR-0002-020626",
      body: "Hello! This is a test of the live production webhook to verify end-to-end routing.",
      messageId: `msg-zoho-prod-${Date.now()}`
    });

    const options = {
      hostname: 'www.legalrecovery.in',
      port: 443,
      path: '/api/webhooks/inbound-email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    console.log("Sending POST request to https://www.legalrecovery.in/api/webhooks/inbound-email...");
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`[Production Webhook Test] Status: ${res.statusCode}`);
        console.log(`[Production Webhook Test] Response: ${data}`);
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', (e) => {
      console.error(`[Production Webhook Test] Error: ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
};

triggerProdEmail().catch(console.error);
