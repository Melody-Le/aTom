const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectPhotoSchema = new Schema(
  {
    photo_name: { type: String, require: true },
    photo_url: { type: String },
    project_detail_id: { type: Schema.Types.ObjectId, ref: "ProjectDetail" },
    // author_id: { type: Schema.Types.ObjectId, ref: "User" },
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectPhotos", projectPhotoSchema);
