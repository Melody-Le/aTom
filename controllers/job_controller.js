const Jobs = require("../models/jobs.js");
const Users = require("../models/users.js");

const controller = {
  async showJobPage(req, res) {
    try {
      const jobId = req.params.job_id;
      const job = await Jobs.findById(jobId).populate("author_id");
      const profileOwnerId = job.author_id;
      const profileOwner = await Users.findOne({ _id: profileOwnerId });
      const authenticatedUser = req.session.currentUser;
      res.render("./jobs/index.ejs", { job, profileOwner, authenticatedUser });
    } catch (error) {
      console.log(error.message);
    }
  },

  //Method GET
  newJobForm(req, res) {
    res.render("./jobs/job_new.ejs");
  },

  //Method POST: to create new job
  async createJob(req, res) {
    const jobData = req.body;
    const profileOwner = await Users.findById(`${req.session?.currentUser?._id}`);
    jobData.author_id = profileOwner._id;
    const newJob = await Jobs.create(jobData);
    res.redirect(`/jobs/${newJob._id}`);
  },

  //Method GET: to Show form to edit Job:
  async editJob(req, res) {
    const jobId = req.params.job_id;
    const job = await Jobs.findById(jobId);
    res.render("./jobs/job_edit.ejs", { job });
  },

  //Method PUT: to update job of specific ID
  async updateJob(req, res) {
    const jobId = req.params.job_id;
    const jobUpdate = req.body;
    const newPhotos = jobUpdate.photos;
    const newSkills = jobUpdate.skills;
    const oldJob = await Jobs.findById(jobId);
    const oldJobPhotos = oldJob.photos;
    const oldSkills = oldJob.skills;
    jobUpdate.photos = oldJobPhotos.concat(newPhotos).filter((photo) => !!photo);
    jobUpdate.skills = oldSkills.concat(newSkills).filter((skill) => !!skill);
    Jobs.findByIdAndUpdate(jobId, jobUpdate, (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/jobs/${jobId}`);
    });
  },

  //Method DELETE:  delete photo
  async deletePhoto(req, res) {
    const { job_id, photoIndex } = req.params;
    const job = await Jobs.findById(job_id);
    await Jobs.findByIdAndUpdate(job_id, { $pull: { photos: job.photos[photoIndex] } });
    res.redirect(`/jobs/${job_id}/edit`);
  },

  async deleteSkill(req, res) {
    const { job_id, skillIndex } = req.params;
    const job = await Jobs.findById(job_id);
    await Jobs.findByIdAndUpdate(job_id, { $pull: { skills: job.skills[skillIndex] } });
    res.redirect(`/jobs/${job_id}/edit`);
  },
  async deleteJob(req, res) {
    const jobId = req.params.job_id;
    const profileOwnerId = req.session.currentUser._id;
    try {
      await Jobs.findByIdAndRemove(jobId);
      res.redirect(`/profiles/${profileOwnerId}`);
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = controller;
