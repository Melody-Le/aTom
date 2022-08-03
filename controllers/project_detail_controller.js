const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");
const Users = require("../models/user.js");

const controller = {
  async showProjectDetailPage(req, res) {
    const projectId = req.params.project_detail_id;
    const projectDetail = await ProjectDetail.findOne({ _id: projectId }).populate("user_id");
    const projectPhotos = await ProjectPhotos.find({ project_detail_id: projectId }, "photo_url");
    res.render("./project-detail/index.ejs", { projectPhotos, projectDetail });
  },
  newProjectForm(req, res) {
    res.render("./project-detail/project_new.ejs");
  },
  async create(req, res) {
    // const personalData = req.body;
    // const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    // await currentUser.updateOne({
    //   job_title: personalData.job_title,
    //   postal_code: personalData.postal_code,
    //   city: personalData.city,
    //   linkedIn: personalData.linkedIn,
    //   skills: personalData.skills,
    //   about_me: personalData.about_me,
    //   profile_photos_url: personalData.profile_photos_url,
    //   cover_photos_url: personalData.cover_photos_url,
    // });
    // res.redirect(`/profile/${currentUser._id}`);
    console.log(req.session);
    const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    console.log(currentUser);
    res.send("Created Project");
  },
};
module.exports = controller;
