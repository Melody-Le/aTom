const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    job_title: { type: String, require: true },
    author_id: { type: Schema.Types.ObjectId, ref: "Users" },
    job_description: { type: String },
    skills: [{ type: String }],
    photos: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", jobSchema);
