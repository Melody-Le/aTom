const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
// const ProjectPhotos = require("../models/project_photo.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  //Method GET: to Show userProfile
  async showProfilePage(req, res) {
    try {
      const userId = req.params.user_id;
      const profileOwner = await Users.findOne({ _id: userId });
      const currentUser = req.session.currentUser;
      const projects = await Projects.find({ author_id: userId });
      res.render("./profiles/index.ejs", { profileOwner, projects, currentUser });
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
    const currentUser = await Users.findById(req.params.user_id);
    res.render("./profiles/profile_edit.ejs", { currentUser });
  },

  //Method PUT: to update profile of specific ID
  async updateProfile(req, res) {
    Users.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (err, product) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/profiles/${req.params.user_id}`);
    });
  },
};
module.exports = controller;
