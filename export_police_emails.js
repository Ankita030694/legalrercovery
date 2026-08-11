const { MongoClient } = require('mongodb');
const fs = require('fs');

async function run() {
  const uri = "mongodb+srv://Xerxes:utOxExsp6b5Xdpdv@crm.pvhmw.mongodb.net/?appName=CRM";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const stations = await db.collection("police_stations").find({}).toArray();
    
    if (stations.length === 0) {
      console.log("No police stations found.");
      return;
    }
    
    // Collect all unique keys for header
    const headersSet = new Set();
    stations.forEach(s => {
      Object.keys(s).forEach(k => headersSet.add(k));
    });
    const headers = Array.from(headersSet);
    
    // Convert to CSV
    let csv = headers.join(',') + '\n';
    stations.forEach(s => {
      const row = headers.map(h => {
        let val = s[h];
        if (val === null || val === undefined) val = '';
        else if (typeof val === 'object') val = JSON.stringify(val);
        // Escape quotes
        val = String(val).replace(/"/g, '""');
        return `"${val}"`;
      });
      csv += row.join(',') + '\n';
    });
    
    fs.writeFileSync('police_emails_data.csv', csv);
    console.log(`Saved ${stations.length} records to police_emails_data.csv`);
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
run();
