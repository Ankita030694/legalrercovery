const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Load environment variables from .env.local in the lr directory
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

async function run() {
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();
  
  let output = `Connected to database: ${db.databaseName}\n\n`;

  const collections = [
    'users',
    'cases',
    'police_stations',
    'notifications',
    'pending_verification',
    'pending_payment',
    'transactions',
    'dispatch_logs',
    'payment_debug_logs',
    'blogs'
  ];

  for (const colName of collections) {
    const col = db.collection(colName);
    const doc = await col.findOne({});
    output += `========================================\n`;
    output += `Collection: ${colName}\n`;
    output += `========================================\n`;
    if (doc) {
      const schema = {};
      for (const [k, v] of Object.entries(doc)) {
        if (k === 'password' || k === 'otp' || k === 'loginOtp') {
          schema[k] = `${typeof v} (HIDDEN)`;
        } else if (v instanceof Date) {
          schema[k] = 'Date';
        } else if (v && typeof v === 'object' && !Array.isArray(v)) {
          schema[k] = Object.keys(v);
        } else if (Array.isArray(v)) {
          schema[k] = `Array (length: ${v.length})`;
        } else {
          schema[k] = `${typeof v} (${String(v).substring(0, 100)}${String(v).length > 100 ? '...' : ''})`;
        }
      }
      output += `Sample Keys & Value Types:\n${JSON.stringify(schema, null, 2)}\n\n`;
      
      const sanitizedDoc = JSON.parse(JSON.stringify(doc, (key, value) => {
        if (key === 'password' || key === 'otp' || key === 'loginOtp' || key === 'passwordHash' || key === 'content' || key === 'description') {
          return '[REDACTED_OR_SHORTENED_FOR_BREVITY]';
        }
        return value;
      }));
      output += `Sample Document (Sanitized):\n${JSON.stringify(sanitizedDoc, null, 2)}\n\n`;
    } else {
      output += `No documents found (collection empty).\n\n`;
    }
  }

  const outPath = path.join(__dirname, 'schema_dump.txt');
  fs.writeFileSync(outPath, output, 'utf-8');
  console.log("Schema dump written to:", outPath);

  await client.close();
}

run().catch(console.error);
