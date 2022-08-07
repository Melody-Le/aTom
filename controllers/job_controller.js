const Jobs = require("../models/jobs.js");
const Users = require("../models/users.js");

const controller = {
  async showJobPage(req, res) {
    try {
      const jobId = req.params.job_id;
      const job = await Jobs.findById(jobId).populate("author_id");
      res.render("./jobs/index.ejs", { job });
    } catch (error) {
      console.log(error.message);
    }
  },
  //Method GET
  new(req, res) {
    res.render("./jobs/job_new.ejs");
  },

  //Method POST: to create new job
  async create(req, res) {
    const jobData = req.body;
    const profileOwner = await Users.findById(`${req.session?.currentUser?._id}`);
    jobData.author_id = profileOwner._id;
    const newJob = await Jobs.create(jobData);
    res.redirect(`/jobs/${newJob._id}`);
  },

  //Method GET: to Show form to edit Job:
  async edit(req, res) {
    const jobId = req.params.job_id;
    const job = await Jobs.findById(jobId);
    res.render("./jobs/job_edit.ejs", { job });
  },

  //Method PUT: to update job of specific ID
  async update(req, res) {
    const jobId = req.params.job_id;
    const jobUpdate = req.body;
    const newPhotos = jobUpdate.photos;
    const newSkills = jobUpdate.skills;
    const oldjob = await Jobs.findById(jobId);
    const oldjobPhotos = oldjob.photos;
    const oldSkills = oldjob.skills;
    jobUpdate.photos = oldjobPhotos.concat(newPhotos);
    jobUpdate.skills = oldSkills.concat(newSkills);
    jobUpdate.skills = Jobs.findByIdAndUpdate(jobId, jobUpdate, { new: true }, (err, product) => {
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
    job.photos.splice(photoIndex, 1);
    await job.save();
    res.redirect(`/jobs/${job_id}/edit`);
  },

  async deleteSkill(req, res) {
    const { job_id, skillIndex } = req.params;
    const job = await Jobs.findById(job_id);
    job.skills.splice(skillIndex, 1);
    await job.save();
    res.redirect(`/jobs/${job_id}/edit`);
  },
  async deletejob(req, res) {
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
