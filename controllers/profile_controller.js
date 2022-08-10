const Users = require("../models/users.js");
const Projects = require("../models/projects.js");
const Jobs = require("../models/jobs.js");
const { CLIENT_RENEG_LIMIT } = require("tls");
const multer = require("multer");
const upload = multer();
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
    const file = req.file;
    if (req.file) {
      imageKit.upload(
        {
          file: req.file.buffer,
          fileName: req.file.originalname,
          folder: "user_avatars",
        },
        async function (error, response) {
          if (error) {
            console.log(error);
          } else {
            const personalData = req.body;
            personalData.profile_photos_url = response.url;
            const profileOwnerId = req.params.user_id;
            const profileOwner = await Users.findById(profileOwnerId);
            await profileOwner.updateOne({ personalData });
            res.redirect(`/profiles/${profileOwner._id}`);
          }
        }
      );
    }
  },
  // const result = await cloudinaryServices.uploadImage(req,res)
  //Method GET: to Show form to edit profile:
  async editProfile(req, res) {
    const profileOwner = await Users.findById(req.params.user_id);
    res.render("./profiles/profile_edit.ejs", { profileOwner });
  },

  //Method PUT: to update profile of specific ID
  async updateProfile(req, res) {
    Users.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (err, product) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/profiles/${req.params.user_id}`);
    });
  },
};
module.exports = controller;
