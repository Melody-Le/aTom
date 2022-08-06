const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
const controller = {
  async showFreelancerCommunityPage(req, res) {
    try {
      const authenticatedUser = req.session.currentUser;
      const userList = await Users.find({});
      res.render("./pages/freelancer_community.ejs", { userList, authenticatedUser });
    } catch (error) {
      console.log(error.message);
    }
  },
  async showIdeaMarketPage(req, res) {
    try {
      const authenticatedUser = req.session.currentUser;
      const projects = await Projects.find({}, { photos: 1 });
      res.render("./pages/idea_market.ejs", { projects, authenticatedUser });
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = controller;
