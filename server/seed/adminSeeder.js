import { randomUUID } from "crypto";
import db from "../dbcon.js";
import bcrypt from "bcryptjs";

export async function seederAdmin() {
  try {
    // Admin credentials
    const adminId = randomUUID();
    const adminEmail = "admin@example.com";
    const adminUsername = "admin";
    const adminName = "Admin";
    const adminHashedPassword = await bcrypt.hash("password", 10);

    // Check if admin already exists
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      adminEmail,
    ]);
    if (rows.length > 0) {
      console.log("✅ Admin user already exists.");
      process.exit(0);
    }

    // Insert admin
    await db.execute(
      `INSERT INTO users (id, email, username, password_hash, name)
       VALUES (?, ?, ?, ?, ?)`,
      [adminId, adminEmail, adminUsername, adminHashedPassword, adminName]
    );

    console.log("🎉 Admin user seeded successfully!");
  } catch (err) {
    console.error("❌ Failed to seed admin:", err);
  } finally {
    process.exit(0);
  }
}
