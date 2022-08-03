const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_name: { type: String, min: 3 },
    email: {
      type: String,
      lowercase: true,
    },
    password: { type: String },
    isFreelancer: { type: Boolean },
    job_title: { type: String },
    postal_code: { type: String },
    city: { type: String },
    linkedIn: { type: String },
    skills: { type: Array },
    about_me: { type: String },
    profile_photos_url: { type: String },
    cover_photos_url: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
