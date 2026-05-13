import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectToDb = async () => {
  const db_url = process.env.DATABASE_URL as string;
  try {
    if (!db_url) {
      console.error("MongoDb url is required.");
    }
    await mongoose.connect(db_url);
    console.log("MongoDb connected.");
  } catch (error) {
    throw new Error("Mongodb disconnect.");
  }
};
