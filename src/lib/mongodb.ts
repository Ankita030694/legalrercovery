import { MongoClient, GridFSBucket } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
// maxIdleTimeMS: 10000 ensures idle connections are closed before the serverless function freezes,
// forcing a fresh connection on cold starts and preventing "Internal server error".
// serverSelectionTimeoutMS: 5000 fails fast instead of hanging for 30s if a connection issue occurs.
const options = {
  maxIdleTimeMS: 10000,
  serverSelectionTimeoutMS: 5000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across hot reloads to prevent saturating database connections.
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Helper function to get database and gridfs bucket
export async function getDbAndBucket(bucketName: string = "fs") {
  const client = await clientPromise;
  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName });
  return { db, bucket };
}

export default clientPromise;
