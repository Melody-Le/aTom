const Users = require("../models/user.js");
const ProjectDetail = require("../models/project_detail.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  //Method GET: to Show userProfile
  async showProfilePage(req, res) {
    const userId = req.params.user_id;
    const currentUser = await Users.findOne({ _id: userId });
    const userProjectList = await ProjectDetail.find({ user_id: userId });
    res.render("./profiles/index.ejs", { currentUser, userProjectList });
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
    const currentUser = await Users.findByIdAndUpdate(req.params.user_id, req.body);
    res.render("./profiles/profile_edit.ejs", { currentUser });
  },
};
module.exports = controller;
