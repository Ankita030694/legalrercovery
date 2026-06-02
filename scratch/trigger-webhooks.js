const http = require('http');

const triggerWati = () => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      eventType: "messageReceived",
      senderPhone: "8178310300",
      senderName: "Defaulter Scale Test #1",
      text: "I am very sorry for the delay. I will make the payment of Rs. 1150 by tomorrow morning.",
      whatsappMessageId: `msg-wati-${Date.now()}`
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/webhooks/wati',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`[WATI Webhook Trigger] Status: ${res.statusCode}`);
        console.log(`[WATI Webhook Trigger] Response: ${data}`);
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', (e) => {
      console.error(`[WATI Webhook Trigger] Error: ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
};

const triggerEmail = () => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      from: "tech.ama123@gmail.com",
      subject: "Re: Legal Demand Notice 1... Ref: LR-T001-020626",
      body: "Dear Legal Team, I received the notice Ref: LR-T001-020626. Please find attached the payment receipt for Rs. 1150.\n\nSent from my iPhone\n-----Original Message-----\nOn Tue, Jun 2, 2026 at 12:46 PM notice@amalegalsolutions.com wrote:",
      messageId: `msg-zoho-${Date.now()}`
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/webhooks/inbound-email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`[Inbound Email Webhook Trigger] Status: ${res.statusCode}`);
        console.log(`[Inbound Email Webhook Trigger] Response: ${data}`);
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', (e) => {
      console.error(`[Inbound Email Webhook Trigger] Error: ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
};

async function run() {
  console.log("Triggering mock webhooks...");
  try {
    await triggerWati();
    await triggerEmail();
  } catch (err) {
    console.error("Failed to run webhook triggers:", err);
  }
}

run();
