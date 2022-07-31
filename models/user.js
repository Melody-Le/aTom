const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectDetailSchema = new Schema(
  {
    user_name: { type: String, require: true },
    // project_photo_id: [{ type: Schema.Types.ObjectId, ref: "ProjectPhotos" }],
    // author_id: { type: Schema.Types.ObjectId, ref: "User" },
    categories: { type: Array },
    about_me: { type: String },
    skills: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectDetail", projectDetailSchema);
