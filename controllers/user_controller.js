const bcrypt = require("bcrypt");
const Users = require("../models/user.js");

const controller = {
  // showRegistrationForm(req, res) {
  //   res.render("users/register.ejs");
  // },
  // async register(req, res) {
  //   const { userName, email, password, role } = req.body;
  //   console.log(req.body);
  //   if (!email || !password || !role) {
  //     console.log("");
  //     return res.redirect("/users/redirect");
  //   }
  //   if (role === "freelancer") {
  //     const existingFreelancer = await Freelancer.findOne({ userName });
  //     if (existingFreelancer) {
  //       console.log("already have this account");
  //       return res.redirect("/users/register");
  //     }
  //     const newFreelancer = await Freelancer.create({
  //       userName,
  //       password,
  //       email,
  //       role,
  //     });
  //     res.redirect("/");
  //     return;
  //   }
  //   res.send("hehe");
  // },
  // showLoginForm: (req, res) => {
  //   res.render("users/login.ejs");
  // },
};
module.exports = controller;
