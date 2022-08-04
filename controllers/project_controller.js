const Projects = require("../models/projects.js");
const Users = require("../models/users.js");

const controller = {
  async showProjectPage(req, res) {
    try {
      const projectId = req.params.project_id;
      const project = await Projects.findById(projectId).populate("author_id");
      res.render("./projects/index.ejs", { project, project });
    } catch (error) {
      console.log(error.message);
    }
  },
  newProjectForm(req, res) {
    console.log(req.session);
    res.render("./projects/project_new.ejs");
  },
  async create(req, res) {
    const projectData = req.body;
    const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    projectData.author_id = currentUser._id;
    await Projects.create(projectData);
    res.redirect(`/profiles/${currentUser._id}`);
  },
  //Method GET: to Show form to edit profile:
  editProject(req, res) {
    const projectId = req.params.project_id;
    res.render("./projects/project_edit.ejs", { projectId });
  },
};
module.exports = controller;
