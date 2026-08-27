const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

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

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const notifs = await db.collection('notifications').find({ type: 'email_reply' }).toArray();
  console.log('Found', notifs.length, 'email reply notifications.');

  for (const n of notifs) {
    const c = await db.collection('cases').findOne({ caseId: n.caseId });
    let loanId = '';
    let accusedName = n.caseName || '';
    let accusedPhone = '';
    let accusedPhone2 = '';
    let accusedEmail = '';
    let accusedEmail2 = '';
    let clientName = 'Client';
    let clientEmail = '';

    if (c) {
      loanId = c.invoices?.[0]?.invoiceNo || c.invoiceNo || c.loanId || '';
      accusedName = c.defaulterName || n.caseName || '';
      accusedPhone = c.phone || '';
      accusedPhone2 = c.phone2 || '';
      accusedEmail = c.email || '';
      accusedEmail2 = c.email2 || '';
      clientName = c.clientName ? c.clientName.split(',')[0].trim() : 'Client';
      clientEmail = c.clientEmail || '';
    }

    const senderEmail = (n.metadata?.senderEmail || '').toLowerCase().trim();
    const isClient = senderEmail === (clientEmail || '').toLowerCase().trim() || senderEmail.includes('actoloan') || senderEmail.includes('amalegalsolutions');

    let cleanDesc = (n.description || '')
      .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, '')
      .replace(/div\.zm_[^{\n]+\{[^}]*\}/gi, '')
      .trim();

    let title = isClient ? ('Email reply from ' + clientName + ' (Client)') : ('Email reply from ' + accusedName);

    await db.collection('notifications').updateOne(
      { _id: n._id },
      {
        $set: {
          title,
          description: cleanDesc,
          metadata: {
            ...n.metadata,
            senderRole: isClient ? 'client' : 'accused',
            senderDisplayName: isClient ? clientName : accusedName,
            loanId,
            accusedName,
            accusedPhone,
            accusedPhone2,
            accusedEmail,
            accusedEmail2,
            clientName,
            clientEmail
          }
        }
      }
    );
  }

  console.log('Migration complete successfully.');
  await client.close();
}

run().catch(console.error);
