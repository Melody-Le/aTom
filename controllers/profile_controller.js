const Users = require("../models/user.js");
const ProjectDetail = require("../models/project_detail.js");
const { CLIENT_RENEG_LIMIT } = require("tls");

const controller = {
  async showProfilePage(req, res) {
    const userId = req.params.user_id;
    const userData = await Users.findOne({ _id: userId });
    const userProjectList = await ProjectDetail.find({ user_id: userId });
    res.render("./profiles/index.ejs", { userData, userProjectList });
  },
  new(req, res) {
    res.render("./profiles/profile_new.ejs");
  },
  async create(req, res) {
    console.log("user data when haven't filled the form: ", req.session.body); //BUG: Can not get the session information
    const data = req.body;
    console.log(data);
    res.send("Done filling peofile information");
  },
};
module.exports = controller;
