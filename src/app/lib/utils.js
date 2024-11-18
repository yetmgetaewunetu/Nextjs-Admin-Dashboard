import mongoose from "mongoose";
import { config, configDotenv } from "dotenv";
config(".env");
export const dbConnection = async () => {
  const connection = {};
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.CONNSTR);
    connection.isConnected = db.connections[0].readyState;
    console.log("connection to db successful!");
  } catch (error) {
    throw new Error(error);
  }
};
