import bcrypt from "bcryptjs";
import { signToken } from "../utils/jwt.js";
import db from "../dbcon.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (existing.length > 0)
    return res.status(400).json({ message: "Email already exists" });

  const hashed = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
    name,
    email,
    hashed,
  ]);

  res.json({ success: true, message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  if (rows.length === 0)
    return res.status(400).json({ message: "User not found" });

  const user = rows[0];
  
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  // const token = signToken({ id: user.id, username: user.username });
  // res.cookie("token", token, {
  //   httpOnly: true,
  //   sameSite: "lax",
  //   secure: false,
  // });
  res.json({
    success: true,
    user: { id: user.id, name: user.name, username: user.username },
  });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ success: true, message: "Logged out" });
};
