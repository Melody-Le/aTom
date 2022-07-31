const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");
const controller = {
  async showProjectDetailPage(req, res) {
    const projectPhotos = await ProjectPhotos.find({ project_detail_id: "62e5ee63767fa1299ea95b18" }, "photo_url");
    // res.render("./idea-markets/index.ejs", {
    //   projectPhotos,
    // });
    console.log(projectPhotos);
    res.render("./project-detail/index.ejs", { projectPhotos });
  },
};
module.exports = controller;
