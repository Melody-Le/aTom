const Users = require("../models/user.js");
const controller = {
  async showFreelancerCommunityPage(req, res) {
    res.render("./pages/freelancer_community.ejs", {});
  },
};
module.exports = controller;
