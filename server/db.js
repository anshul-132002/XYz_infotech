import mongoose from "mongoose";

const URL = process.env.DB_URL

export const db = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); 
  }
};
