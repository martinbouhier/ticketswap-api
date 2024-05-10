import { MongoClient } from "mongodb";

let client = null;

export default async function connectToDB() {
  const uri = process.env.MONGODB;
  const client = new MongoClient(uri, { connectTimeoutMS: 1000 });
  try {
    await client.connect();
    console.log("Connected to DB successfully!");
    return client;
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    throw error;
  }
}