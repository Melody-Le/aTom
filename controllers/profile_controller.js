// const Profile = require("../models/user.js");
// const ProjectDetail = require("../models/project_detail.js");

const controller = {
  async showProfilePage(req, res) {
    // const projectId = req.params.project_detail_id;
    // const projectDetail = await ProjectDetail.findOne({ _id: projectId });
    // const projectPhotos = await ProjectPhotos.find({ project_detail_id: projectId }, "photo_url");
    res.render("./profiles/index.ejs");
  },
};
module.exports = controller;
