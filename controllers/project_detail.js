const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");
const controller = {
  async showProjectDetailPage(req, res) {
    // const projectPhotos = await ProjectPhotos.find({}, "photo_url");
    // res.render("./idea-markets/index.ejs", {
    //   projectPhotos,
    // });
    res.render("./project-detail/index.ejs");
  },
};
module.exports = controller;
