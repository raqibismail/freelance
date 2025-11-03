// server/index.js
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL!");
  }
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Yeay berjaya!" });
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
