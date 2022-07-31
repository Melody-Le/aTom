const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema(
  {
    userName: { type: String, min: 3, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    role: { type: String, required: true },
    password: { type: String, required: true },
    // hash: { type: String, required: true },
    createAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Freelancer", freelancerSchema);
