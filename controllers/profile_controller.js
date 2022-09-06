const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
const Jobs = require("../models/jobs.js");
const { CLIENT_RENEG_LIMIT } = require("tls");
const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey: "public_5JloxLGz+odY9AEkpTU5uIOjgzs=",
  privateKey: "private_1e1fJgBaoYs2zE4MAY1JXcuyDYM=",
  urlEndpoint: "https://ik.imagekit.io/omjgl1fsu8",
});

const controller = {
  //Method GET: to Show userProfile
  async showProfilePage(req, res) {
    try {
      const userId = req.params.user_id;
      const profileOwner = await Users.findOne({ _id: userId });
      const authenticatedUser = req.session.currentUser;
      const projects = await Projects.find({ author_id: userId });
      const jobs = await Jobs.find({ author_id: userId });
      res.render("./profiles/index.ejs", { profileOwner, projects, authenticatedUser, jobs });
    } catch (error) {
      console.log(error);
      return;
    }
  },
  //Method GET: to Show form for profile perofnal data
  async new(req, res) {
    const profileOwnerId = req.params.user_id;
    const profileOwner = await Users.findById(profileOwnerId);
    res.render("./profiles/profile_new.ejs", { profileOwner });
  },

  //Method POST: to Post data from Personal information Form
  async createProfile(req, res) {
    const photoUrl = {};
    // console.log(req.files);
    if (req.files) {
      const photoObj = req.files;
      console.log(req.files);
      for (let field in req.files) {
        const result = await imageKit.upload({
          file: photoObj[field][0].buffer,
          fileName: photoObj[field][0].originalname,
          folder: field,
        });
        photoUrl[field] = result.url;
      }
    }
    const personalData = req.body;
    personalData.profile_photos_url =
      photoUrl.profile_photos_url || req.body.profile_photos_url || "/assets/images/profile-img.jpeg";
    personalData.cover_photos_url =
      photoUrl.cover_photos_url ||
      req.body.cover_photos_url ||
      "https://i.pinimg.com/564x/78/76/8f/78768f0ce9056d53e0216e73a9c8cfc8.jpg";
    // run the code below to update image into Locals User Variable
    res.locals.authUser.profile_photos_url = personalData.profile_photos_url;
    // personalData.skills = personalData?.skills?.filter((skill) => !!skill);
    Users.findByIdAndUpdate(req.params.user_id, personalData, { new: true }, (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/profiles/${req.params.user_id}`);
    });
  },
  //Method GET: to Show form to edit ppersonalDatarofile:
  async editProfile(req, res) {
    const profileOwner = await Users.findById(req.params.user_id);
    // console.log(profileOwner);
    res.render("./profiles/profile_edit.ejs", { profileOwner });
  },

  //Method PUT: to update profile of specific ID
  async updateProfile(req, res) {
    const photoUrl = {};
    if (req.files) {
      const photoObj = req.files;
      for (let field in req.files) {
        const result = await imageKit.upload({
          file: photoObj[field][0].buffer,
          fileName: photoObj[field][0].originalname,
          folder: field,
        });
        console.log(`result is: ${result[field]}`);
        photoUrl[field] = result.url;
      }
    }
    const personalData = req.body;
    personalData.profile_photos_url =
      photoUrl.upload_profile_photos_url || req.body.profile_photos_url || "/assets/images/profile-img.jpeg";
    personalData.cover_photos_url =
      photoUrl.upload_cover_photos_url ||
      req.body.cover_photos_url ||
      "https://i.pinimg.com/564x/78/76/8f/78768f0ce9056d53e0216e73a9c8cfc8.jpg";

    const newSkills = personalData.skills;
    const profileOwner = await Users.findById(req.params.user_id);
    const oldSkills = profileOwner.skills;
    personalData.skills = oldSkills.concat(newSkills).filter((skill) => !!skill);
    // run the code below to update image into Locals User Variable
    res.locals.authUser.profile_photos_url = personalData.profile_photos_url;
    Users.findByIdAndUpdate(req.params.user_id, personalData, { new: true }, (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/profiles/${req.params.user_id}`);
    });
  },
  async deleteSkill(req, res) {
    const { _id, skillIndex } = req.params;
    const profileOwner = await Users.findById(_id);
    profileOwner?.skills.splice(skillIndex, 1);
    await profileOwner.save();
    res.redirect(`/profiles/${profileOwner._id}/edit`);
  },
};
module.exports = controller;
