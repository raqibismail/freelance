import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import db from "../dbcon.js";

export async function seederUser() {
  try {
    // User credentials
    // const userId = randomUUID();
    const userEmail = "user@example.com";
    const userUsername = "user";
    const userName = "User";
    const userHashedPassword = await bcrypt.hash("password", 10);

    // Check if user already exists
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      userEmail,
    ]);

    if (rows.length > 0) {
      console.log("✅ User already exists.");
      process.exit(0);
    }

    // Insert user
    await db.execute(
      `INSERT INTO users (email,username, password_hash, name)
       VALUES (?, ?, ?, ?)`,
      [userEmail, userUsername, userHashedPassword, userName]
    );

    console.log("🎉 User seeded successfully!");
  } catch (err) {
    console.error("❌ Failed to seed user:", err);
  } finally {
    await db.end();
    process.exit(0);
  }
}
