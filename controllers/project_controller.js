const Projects = require("../models/projects.js");
const Users = require("../models/users.js");

const controller = {
  async showProjectPage(req, res) {
    try {
      const projectId = req.params.project_id;
      const project = await Projects.findById(projectId).populate("author_id");
      const profileOwnerId = project.author_id;
      const profileOwner = await Users.findOne({ _id: profileOwnerId });
      const authenticatedUser = req.session.currentUser;
      res.render("./projects/index.ejs", { project, profileOwner, authenticatedUser });
    } catch (error) {
      console.log(error.message);
    }
  },
  //Method GET.
  newProjectForm(req, res) {
    res.render("./projects/project_new.ejs");
  },

  //Method POST: to create new project
  async createProject(req, res) {
    const projectData = req.body;
    const profileOwner = await Users.findById(`${req.session?.currentUser?._id}`);
    projectData.author_id = profileOwner._id;
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
    const newPhotos = projectUpdate.photos;
    const newSkills = projectUpdate.skills;
    const oldProject = await Projects.findById(projectId);
    const oldProjectPhotos = oldProject.photos;
    const oldSkills = oldProject.skills;
    projectUpdate.photos = oldProjectPhotos.concat(newPhotos).filter((photo) => !!photo);
    projectUpdate.skills = oldSkills.concat(newSkills).filter((skill) => !!skill);
    Projects.findByIdAndUpdate(projectId, projectUpdate, { new: true }, (err) => {
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
    // project.photos.splice(photoIndex, 1);
    // await project.save();
    await Projects.findByIdAndUpdate(project_id, { $pull: { photos: project.photos[photoIndex] } });
    res.redirect(`/projects/${project_id}/edit`);
  },

  async deleteSkill(req, res) {
    const { project_id, skillIndex } = req.params;
    const project = await Projects.findById(project_id);
    project.skills.splice(skillIndex, 1);
    await project.save();
    res.redirect(`/projects/${project_id}/edit`);
  },
  async deleteProject(req, res) {
    const projectId = req.params.project_id;
    const profileOwnerId = req.session.currentUser._id;
    try {
      await Projects.findByIdAndRemove(projectId);
      res.redirect(`/profiles/${profileOwnerId}`);
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = controller;
