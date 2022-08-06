const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
// const ProjectPhotos = require("../models/project_photo.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  //Method GET: to Show userProfile
  async showProfilePage(req, res) {
    try {
      const userId = req.params.user_id;
      const currentUser = await await Users.findOne({ _id: userId });
      const projects = await Projects.find({ author_id: userId });
      res.render("./profiles/index.ejs", { currentUser, projects });
    } catch (error) {
      console.log(error);
      return;
    }
  },
  //Method GET: to Show form for profile perofnal data
  new(req, res) {
    res.render("./profiles/profile_new.ejs");
  },

  //Method POST: to Post data from Personal information Form
  async create(req, res) {
    const personalData = req.body;
    const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    await currentUser.updateOne({ personalData });
    res.redirect(`/profiles/${currentUser._id}`);
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
      res.redirect(`/profiles/${currentUserId}`);
    });
  },
};
module.exports = controller;
