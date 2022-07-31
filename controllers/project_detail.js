const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");

const controller = {
  async showProjectDetailPage(req, res) {
    const projectId = req.params.project_detail_id;
    const projectDetail = await ProjectDetail.findOne({ _id: projectId });
    const projectPhotos = await ProjectPhotos.find({ project_detail_id: projectId }, "photo_url");
    res.render("./project-detail/index.ejs", { projectPhotos, projectDetail });
  },
};
module.exports = controller;
