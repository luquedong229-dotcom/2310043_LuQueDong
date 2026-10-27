
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
}));

app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "HR Management API is running" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected"
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Chua cau hinh MONGODB_URI trong file .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Khoi dong that bai:", error.message);
    process.exit(1);
  }
}

startServer();
