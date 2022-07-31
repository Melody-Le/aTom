const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");
const controller = {
  async showProjectDetailPage(req, res) {
    const projectDetail = await ProjectDetail.findOne({ _id: "62e61267af093b53dde5f5c8" });
    const projectPhotos = await ProjectPhotos.find({ project_detail_id: "62e61267af093b53dde5f5c8" }, "photo_url");
    console.log(projectDetail);
    res.render("./project-detail/index.ejs", { projectPhotos, projectDetail });
  },
};
module.exports = controller;
