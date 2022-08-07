const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
const controller = {
  async showFreelancerCommunityPage(req, res) {
    try {
      const users = await Users.find({});
      res.render("./pages/freelancer_community.ejs", { users });
    } catch (error) {
      console.log(error.message);
    }
  },
  async showJobs(req, res) {
    try {
      const clients = await Users.where("isFreelancer").equals(false);
      res.render("./pages/jobs.ejs", { clients });
    } catch (error) {
      console.log(error.message);
    }
  },
  async showIdeaMarketPage(req, res) {
    try {
      const projects = await Projects.find({}, { photos: 1 });
      res.render("./pages/idea_market.ejs", { projects });
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = controller;
