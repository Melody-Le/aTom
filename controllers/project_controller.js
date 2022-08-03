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
    res.render("./project-detail/project_new.ejs");
  },
  async create(req, res) {
    // const personalData = req.body;
    // await currentUser.updateOne({
    //   job_title: personalData.job_title,
    //   postal_code: personalData.postal_code,
    //   city: personalData.city,
    //   linkedIn: personalData.linkedIn,
    //   skills: personalData.skills,
    //   about_me: personalData.about_me,
    //   profile_photos_url: personalData.profile_photos_url,
    //   cover_photos_url: personalData.cover_photos_url,
    // });
    // res.redirect(`/profile/${currentUser._id}`);
    const projectData = req.body;
    const currentUser = await Users.findById(`${req.session?.currentUser._id}`);
    res.send("Created Project");
  },
};
module.exports = controller;
