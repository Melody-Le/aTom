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
  //Method GET
  newProjectForm(req, res) {
    res.render("./projects/project_new.ejs");
  },

  //Method POST: to create new project
  async create(req, res) {
    const projectData = req.body;
    const currentUser = await Users.findById(`${req.session?.currentUser?._id}`);
    projectData.author_id = currentUser._id;
    const newProject = await Projects.create(projectData);
    res.redirect(`/projects/${newProject._id}`);
  },

  //Method GET: to Show form to edit profile:
  async editProject(req, res) {
    const projectId = req.params.project_id;
    const project = await Projects.findById(projectId);
    res.render("./projects/project_edit.ejs", { project });
  },

  //Method PUT: to update project of specific ID
  async updateProject(req, res) {
    const projectId = req.params.project_id;
    const projectUpdate = req.body;
    Projects.findByIdAndUpdate(projectId, projectUpdate, { new: true }, (err, product) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/projects/${projectId}`);
    });
  },
  //Method DELETE:  delete photo
  async deletePhoto(req, res) {
    const { project_id, photoIndex } = req.params;
    const project = await Projects.findById(project_id);
    project.photos.splice(photoIndex, 1);
    await project.save();
    res.redirect(`/projects/${project_id}/edit`);
  },
};
module.exports = controller;
