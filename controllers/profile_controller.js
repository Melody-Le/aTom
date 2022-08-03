const Users = require("../models/user.js");
const ProjectDetail = require("../models/project_detail.js");
const ProjectPhotos = require("../models/project_photo.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  //Method GET: to Show userProfile
  async showProfilePage(req, res) {
    const userId = req.params.user_id;
    // const currentUser = await await Users.findOne({ _id: userId });
    const currentUser = await (await Users.findOne({ _id: userId })).populate("project_list");
    const projectIds = currentUser.project_list.map((project) => project._id);
    // const projectPhotos = projectIds.map(projectId=> await ProjectPhotos.find({ project_detail_id: projectId }))
    // const projectPhotos = await ProjectPhotos.find({ project_detail_id: proId }, "photo_url");
    // console.log(projectPhotos);
    res.render("./profiles/index.ejs", { currentUser, projectList: currentUser.project_list });
  },
  //Method GET: to Show form for profile perofnal data
  new(req, res) {
    res.render("./profiles/profile_new.ejs");
  },

  //Method POST: to Post data from Personal information Form
  async create(req, res) {
    const personalData = req.body;
    const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    await currentUser.updateOne({
      job_title: personalData.job_title,
      postal_code: personalData.postal_code,
      city: personalData.city,
      linkedIn: personalData.linkedIn,
      skills: personalData.skills,
      about_me: personalData.about_me,
      profile_photos_url: personalData.profile_photos_url,
      cover_photos_url: personalData.cover_photos_url,
    });
    res.redirect(`/profile/${currentUser._id}`);
  },

  //Method GET: to Show form to edit profile:
  async editProfile(req, res) {
    const currentUserId = req.params.user_id;
    res.render("./profiles/profile_edit.ejs", { currentUserId });
  },

  //Method PUT: to update profile of specific ID
  async updateProfile(req, res) {
    Users.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (err, product) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/profile/${currentUserId}`);
    });
  },
};
module.exports = controller;
