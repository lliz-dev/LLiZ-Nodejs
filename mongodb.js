const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err; // ❗ don't process.exit on Vercel
  }
}

module.exports = connectDB;
