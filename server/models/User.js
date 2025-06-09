import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true },
  email: String,
  name: String,
  role: { type: String, enum: ["farmer", "customer"], default: "customer" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //lastLogin: Date,
});

/*userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
});*/

const User = mongoose.model("User", userSchema);
export default User;
