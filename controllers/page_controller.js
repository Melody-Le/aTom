const Users = require("../models/user.js");
const controller = {
  async showFreelancerCommunityPage(req, res) {
    const userList = await Users.find({});
    res.render("./pages/freelancer_community.ejs", { userList });
  },
};
module.exports = controller;
