const Users = require("../models/user.js");
const ProjectDetail = require("../models/project_detail.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  async showProfilePage(req, res) {
    const userId = req.params.user_id;
    const userData = await Users.findOne({ _id: userId });
    const userProjectList = await ProjectDetail.find({ user_id: userId });
    res.render("./profiles/index.ejs", { userData, userProjectList });
  },

  new(req, res) {
    res.render("./profiles/profile_new.ejs");
  },

  //Post data from Personal information Form
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
    console.log("Done");
    res.redireact(`/profile/${currentUser._id}`);
  },
};
module.exports = controller;
