const http = require('http');

const triggerDispatch = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/cron/dispatch-queue',
      method: 'GET'
    };

    console.log("Calling /api/cron/dispatch-queue on localhost:3000...");
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`[Dispatch Trigger] Status: ${res.statusCode}`);
        console.log(`[Dispatch Trigger] Response: ${data}`);
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', (e) => {
      console.error(`[Dispatch Trigger] Error: ${e.message}`);
      reject(e);
    });

    req.end();
  });
};

triggerDispatch().catch(console.error);
