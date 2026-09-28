import mongoose from "mongoose";
import config from "./config.js";

export const connectDB = async () => {
  try {

    await mongoose.connect(config.MONGO_URI);
    console.log("Database connected successfully");

  } catch (error) {
    console.log("Error connecting to database", error);
  };
};