import { MongoClient, GridFSBucket } from "mongodb";
import dns from "dns";

// Ensure resilient DNS resolution for MongoDB Atlas SRV/shard hostnames across local/ISP resolvers
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch (e) {
  // Ignore in environments where setting DNS servers is restricted
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

// Options tuned for resilient cloud & serverless operations
const options = {
  serverSelectionTimeoutMS: 15000, // 15 seconds to gracefully handle cold starts & multi-shard handshakes
  connectTimeoutMS: 15000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
  minPoolSize: 0,
  retryWrites: true,
  retryReads: true,
};

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient> | null;
};

export async function getMongoClient(): Promise<MongoClient> {
  if (!globalWithMongo._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client
      .connect()
      .catch((err) => {
        // Clear cached promise on failure so next request doesn't stay permanently rejected
        globalWithMongo._mongoClientPromise = null;
        console.error("[MongoDB] Connection error, resetting connection pool cache:", err);
        throw err;
      });
  }

  try {
    return await globalWithMongo._mongoClientPromise;
  } catch (err) {
    globalWithMongo._mongoClientPromise = null;
    throw err;
  }
}

// Helper function to get database and gridfs bucket with automatic self-healing
export async function getDbAndBucket(bucketName: string = "fs") {
  const client = await getMongoClient();
  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName });
  return { db, bucket };
}

export default getMongoClient();
