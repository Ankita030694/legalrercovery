const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

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

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("MONGODB_URI is not defined");
  process.exit(1);
}

const POLICE_HQ_DATA = [
  {
    state: "Andhra Pradesh",
    hqName: "Director General of Police, Andhra Pradesh",
    hqAddress: "Police Headquarters, Hyderabad-500004, Andhra Pradesh",
    emails: ["dgp@appolice.gov.in", "ig@pcs.appolice.gov.in"],
    phone: "040-23235170",
    website: "www.apstatepolice.com",
  },
  {
    state: "Arunachal Pradesh",
    hqName: "Director General of Police, Arunachal Pradesh",
    hqAddress: "Police Headquarters, Itanagar-791113, Arunachal Pradesh",
    emails: ["arpolice@rediffmail.com"],
    phone: "0360-2218190",
    website: "arunpol.nic.in",
  },
  {
    state: "Assam",
    hqName: "Director General of Police, Assam",
    hqAddress: "Uluvari, Guwahati-781007, Assam",
    emails: ["dgp@assampolice.com", "admin@assampolice.com"],
    phone: "0361-2450555",
    website: "www.assampolice.com",
  },
  {
    state: "Bihar",
    hqName: "Director General of Police, Bihar",
    hqAddress: "Police Headquarters, Old Secretariat, Patna, Bihar-800015",
    emails: ["dgp-bih@nic.in", "dgp_biha@nic.in"],
    phone: "0612-2217833",
    website: "www.biharpolice.bih.nic.in",
  },
  {
    state: "Chhattisgarh",
    hqName: "Director General of Police, Chhattisgarh",
    hqAddress: "Police Headquarters, Chhattisgarh-492001",
    emails: ["dgp-chattisgarh@yahoo.co.in", "anil.navaney@gmail.com"],
    phone: "0771-4240001",
    website: "www.cgpolice.gov.in",
  },
  {
    state: "Goa",
    hqName: "Director General of Police, Goa",
    hqAddress: "Police Headquarters, Panjim-403001, Goa",
    emails: ["goagp@rediffmail.com", "goapol@bsnl.in"],
    phone: "0832-2428360",
    website: "www.goapolice.nic.in",
  },
  {
    state: "Gujarat",
    hqName: "Director General of Police, Gujarat",
    hqAddress: "Gujarat State Police Bhawan, Sector-18, Gandhinagar, Gujarat",
    emails: ["dgp-gs@gujarat.gov.in", "dgp-scr@gujarat.gov.in", "edpcell-pb@gujarat.gov.in"],
    phone: "079-23246333",
    website: "www.police.gujarat.gov.in",
  },
  {
    state: "Haryana",
    hqName: "Director General of Police, Haryana",
    hqAddress: "Police Headquarters, Sector – 6, Panchkulla, Haryana-134109",
    emails: ["police@hry.nic.in"],
    phone: "0172-2740239",
    website: "www.haryanapolice.nic.in",
  },
  {
    state: "Himachal Pradesh",
    hqName: "Director General of Police, Himachal Pradesh",
    hqAddress: "Police Headquarters, Nigam Vihar, Shimla – 171002",
    emails: ["dgp-hp@nic.in", "Police_statecr_hp@nic.in"],
    phone: "0177-2626222",
    website: "www.hppolice.nic.in",
  },
  {
    state: "Jammu & Kashmir",
    hqName: "Director General of Police, Jammu and Kashmir",
    hqAddress: "Police Headquarters, Peer Bagh, Airport Road, Srinagar, J&K",
    emails: ["jkpolice@nic.in"],
    phone: "0194-2443011",
    website: "www.jandkpolice.org",
  },
  {
    state: "Jharkhand",
    hqName: "Director General of Police, Jharkhand",
    hqAddress: "Police Headquarters, DPRD Building, HEC Dhurwa, Ranchi, Jharkhand-834004",
    emails: ["dgpjharkhand@gmail.com"],
    phone: "0651-2400737",
    website: "www.jharkhandpolice.govt.in",
  },
  {
    state: "Karnataka",
    hqName: "Director General of Police, Karnataka",
    hqAddress: "No. 2, Nrupathunga Road, Bangalore-1, Karnataka",
    emails: ["dgpcrblore@ksp.gov.in"],
    phone: "080-22211803",
    website: "www.ksp.gov.in",
  },
  {
    state: "Kerala",
    hqName: "Director General of Police, Kerala",
    hqAddress: "Police Headquarters, Trivandrum – 695010, Kerala",
    emails: ["dgp@keralapolice.gov.in"],
    phone: "0471-2721601",
    website: "www.keralapolice.gov.in",
  },
  {
    state: "Madhya Pradesh",
    hqName: "Director General of Police, Madhya Pradesh",
    hqAddress: "Police Headquarters, Jehangirbad, Bhopal – 462008, Madhya Pradesh",
    emails: ["dgpmp@mppolice.gov.in"],
    phone: "0755-2443500",
    website: "www.mppolice.gov.in",
  },
  {
    state: "Maharashtra",
    hqName: "Director General of Police, Maharashtra",
    hqAddress: "Maharashtra State Police Headquarters, Old Council Hall, Shaheed Bhagat Singh Marg, Mumbai-1, Maharashtra",
    emails: ["dgpms.mumbai@mahapolice.gov.in", "Compell.dgoffice@mahapolice.gov.in"],
    phone: "022-22026672",
    website: "www.mahapolice.gov.in",
  },
  {
    state: "Manipur",
    hqName: "Director General of Police, Manipur",
    hqAddress: "Police Headquarters, Imphal – 795001, Manipur",
    emails: ["dgp-mnp@nic.in", "Dgp.mnp@nic.in"],
    phone: "0385-2450289",
    website: "www.manipurpolice.org",
  },
  {
    state: "Meghalaya",
    hqName: "Director General of Police, Meghalaya",
    hqAddress: "Police Headquarters, Shillong, Meghalaya",
    emails: ["meghpol@hotmail.com"],
    phone: "0364-2224879",
    website: "www.megpolice.gov.in",
  },
  {
    state: "Mizoram",
    hqName: "Director General of Police, Mizoram",
    hqAddress: "Police Headquarters, Aizawl-796001, Mizoram",
    emails: ["mizopol@rediffmail.com", "scrbmizoram@yahoo.com"],
    phone: "0389-2334682",
    website: "www.police.mizoram.gov.in",
  },
  {
    state: "Nagaland",
    hqName: "Director General of Police, Nagaland",
    hqAddress: "Police Headquarters, Kohima-797001, Nagaland",
    emails: ["dgpnld@yahoo.co.in", "Scrb-ngl@nic.in"],
    phone: "0370-2242889",
    website: "www.nagapol.gov.in",
  },
  {
    state: "Odisha",
    hqName: "Director General of Police, Odisha",
    hqAddress: "Odisha State Police Headquarters, Bakshi Bazar, Cuttack-753001",
    emails: ["dgofpoliceorissa@sify.com", "sphqrs.orpol@nic.in"],
    phone: "0671-2304451",
    website: "www.orissapolice.nic.in",
  },
  {
    state: "Punjab",
    hqName: "Director General of Police, Punjab",
    hqAddress: "Police Headquarters, Sec-9, Chandigarh-160009",
    emails: ["dgp.punjab.police@punjab.gov.in"],
    phone: "0172-2743272",
    website: "www.punjabpolice.gov.in",
  },
  {
    state: "Rajasthan",
    hqName: "Director General of Police, Rajasthan",
    hqAddress: "Police Headquarters, Jaipur, Rajasthan-303002",
    emails: ["dgp-rj@nic.in"],
    phone: "0141-2606657",
    website: "www.rajpolice.nic.in",
  },
  {
    state: "Sikkim",
    hqName: "Director General of Police, Sikkim",
    hqAddress: "Police Headquarters, Gangtok – 737101, Sikkim",
    emails: ["sikphq@hotmail.com", "sikphq@bsnl.in"],
    phone: "03592-202747",
    website: "www.sikkimpolice.nic.in",
  },
  {
    state: "Tamil Nadu",
    hqName: "Director General of Police, Tamil Nadu",
    hqAddress: "No. 1, Kamaraja Salai, Mylapore, Chennai-600004, Tamil Nadu",
    emails: ["phq@tn.nic.in", "adr200910@yahoo.co.in"],
    phone: "044-28447755",
    website: "www.tnpolice.gov.in",
  },
  {
    state: "Telangana",
    hqName: "Director General of Police, Telangana",
    hqAddress: "Police Headquarters, Hyderabad, Telangana",
    emails: ["dgp@tspolice.gov.in"],
    phone: "040-23243804",
    website: "www.tspolice.gov.in",
  },
  {
    state: "Tripura",
    hqName: "Director General of Police, Tripura",
    hqAddress: "Police Headquarters, Agartala – 799001, Tripura",
    emails: ["dgptripura@yahoo.co.in", "tripurapolice@yahoo.com"],
    phone: "0381-2324079",
    website: "www.tripurapolice.nic.in",
  },
  {
    state: "Uttar Pradesh",
    hqName: "Director General of Police, Uttar Pradesh",
    hqAddress: "Police Headquarters, 1, Tilak Marg, Lucknow-226001, Uttar Pradesh",
    emails: ["dgp@up.nic.in", "dgpolice@sify.com"],
    phone: "0522-2206104",
    website: "www.uppolice.up.nic.in",
  },
  {
    state: "Uttarakhand",
    hqName: "Director General of Police, Uttarakhand",
    hqAddress: "12 - Subhash Road, Dehradun-248001, Uttarakhand",
    emails: ["dgc.Police-ua@nic.in"],
    phone: "0135-2712082",
    website: "www.uttaranchalpolice.com",
  },
  {
    state: "West Bengal",
    hqName: "Director General of Police, West Bengal",
    hqAddress: "Writer's Building, Kolkata, West Bengal-700001",
    emails: ["dgpwestbengal@gmail.com", "policewb@yahoo.com"],
    phone: "033-22145400",
    website: "www.policewb.gov.in",
  },
  // ── Union Territories ──
  {
    state: "Andaman & Nicobar Islands",
    hqName: "Director General of Police, Andaman & Nicobar Islands",
    hqAddress: "Police Headquarters, Port Blair-744104, Andaman & Nicobar Islands",
    emails: ["dgp@and.nic.in", "police@and.nic.in"],
    phone: "03192-230216",
    website: "police.and.nic.in",
  },
  {
    state: "Chandigarh",
    hqName: "Inspector General of Police, Chandigarh",
    hqAddress: "Police Headquarters, Sector-9 D, Multi Storeyed Building, Chandigarh",
    emails: ["police-chd@nic.in", "chd_police@nic.in"],
    phone: "0172-2740106",
    website: "www.chandigarhpolice.nic.in",
  },
  {
    state: "Dadra & Nagar Haveli and Daman & Diu",
    hqName: "Deputy Inspector General of Police, Daman and Diu, Dadra and Nagar Haveli",
    hqAddress: "Police Headquarters, Panchrasta, Near State Bank of India, Daman & Diu",
    emails: ["policedept-dnh@nic.in", "pcrdamandiu@yahoo.com"],
    phone: "0260-2254400",
    website: "",
  },
  {
    state: "Delhi",
    hqName: "Commissioner of Police, Delhi",
    hqAddress: "Delhi Police Headquarters, I.P. Estate, ITO, New Delhi-110002",
    emails: ["delpol@vsnl.com"],
    phone: "011-23490201",
    website: "www.delhipolice.nic.in",
  },
  {
    state: "Lakshadweep",
    hqName: "Administrator & Ex-officio IG (P), Lakshadweep",
    hqAddress: "UT of Lakshadweep, Kavaratti-682555",
    emails: ["lk-admin@nic.in", "lak_sop@nic.in"],
    phone: "04896-262255",
    website: "www.lakshadweep.nic.in",
  },
  {
    state: "Puducherry",
    hqName: "Director General of Police, Puducherry",
    hqAddress: "Police Headquarters, No. 4, Dumas Street, Puducherry – 605001",
    emails: ["dgp.pon@nic.in", "igp.pon@nic.in"],
    phone: "0413-2334006",
    website: "www.police.pondicherry.gov.in",
  },
  {
    state: "Ladakh",
    hqName: "Inspector General of Police, Ladakh",
    hqAddress: "Police Headquarters, Leh, Ladakh",
    emails: ["igp-ladakh@nic.in"],
    phone: "",
    website: "",
  },
];

async function run() {
  console.log("Connecting to MongoDB...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();
  
  console.log(`Connected to database: ${db.databaseName}`);
  const collection = db.collection("police_stations");
  
  console.log("Clearing existing police_stations collection...");
  await collection.deleteMany({});
  
  console.log(`Inserting ${POLICE_HQ_DATA.length} police headquarters entries...`);
  const result = await collection.insertMany(POLICE_HQ_DATA);
  console.log(`Seeding successful! Inserted count: ${result.insertedCount}`);
  
  await client.close();
  console.log("Database connection closed.");
}

run().catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
