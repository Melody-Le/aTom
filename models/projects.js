const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    project_name: { type: String, require: true },
    author_id: { type: Schema.Types.ObjectId, ref: "Users" },
    project_description: { type: String },
    skills: [{ type: String }],
    photos: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema);
