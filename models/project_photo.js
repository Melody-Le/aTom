const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectPhotoSchema = new Schema(
  {
    photo_name: { type: String, require: true },
    photo_url: { type: String },
    projects_id: { type: Schema.Types.ObjectId, ref: "ProjectDetail" },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectPhotos", projectPhotoSchema);
