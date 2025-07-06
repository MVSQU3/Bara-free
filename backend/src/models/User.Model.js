import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    nom: { type: String, require: true },
    prenom: { type: String, require: true },
    age: { type: Number },
    numero: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    compte: {
      type: String,
      enum: ["freelance", "client"],
      default: "client",
      require: true,
    },
    profile: {
      competences: [{ type: String }],
      bio: { type: String },
      tarif: { type: Number },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;