import { Schema, model, connect } from "mongoose";

const connectString = "mongodb+srv://tuanstvn1214:W8uIcf5MEuMlTUnU@cluster0.4hiz7.gcp.mongodb.net/?retryWrites=true&w=majority";

export async function run(): Promise<typeof import("mongoose")> {
  // 4. Connect to MongoDB
  const db = await connect(connectString, { dbName: "12k" });
  return db;
}
