const Users = require("../models/user.js");
const ProjectDetail = require("../models/project_detail.js");

const controller = {
  async showProfilePage(req, res) {
    const userId = "62e72b143455ee46984e9e02";
    const userData = await Users.findOne({ _id: userId });
    const userProjectList = await ProjectDetail.find({ user_id: userId });
    // const projectPhotos = (await ProjectDetail.find({ user_id: userId })).populate("user_id");
    // console.log(projectPhotos);
    // const projectPhotos = await ProjectPhotos.find({ project_detail_id: projectId }, "photo_url");
    res.render("./profiles/index.ejs", { userData, userProjectList });
  },
};
module.exports = controller;
