const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
const controller = {
  async showFreelancerCommunityPage(req, res) {
    const userList = await Users.find({});
    res.render("./pages/freelancer_community.ejs", { userList });
  },
  async showIdeaMarketPage(req, res) {
    try {
      const projects = await Projects.find({}, { photos: 1 });
      res.render("./pages/idea_market.ejs", { projects });
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
};

module.exports = controller;
