import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { clerkUserId, email, name, role } = req.body;

    if (!clerkUserId || !email || !name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = new User({ clerkUserId, email, name, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
