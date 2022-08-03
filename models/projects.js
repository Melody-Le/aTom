const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    project_name: { type: String, require: true },
    // project_photo_id: [{ type: Schema.Types.ObjectId, ref: "ProjectPhotos" }],
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    project_description: { type: String },
    skills: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectDetail", projectSchema);
