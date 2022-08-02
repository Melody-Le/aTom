const bcrypt = require("bcrypt");
const Users = require("../models/user.js");

const controller = {
  async showRegistrationForm(req, res) {
    res.render("authenticated/register.ejs", { error: false });
  },
  async newRegister(req, res) {
    const { user_name: userName, email, password, confirm_password: confirmPassword } = req.body;
    isFreelancer = Boolean(req.body.isFreelancer);
    let errorMsg = null;
    if (!userName || !email || !password || !confirmPassword) {
      errorMsg = "Please fill in your email and password";
      return res.render("authenticated/register.ejs", { error: errorMsg });
    }
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      errorMsg = "Already have this account";
      return res.render("authenticated/register.ejs", { error: errorMsg });
    }
    if (password !== confirmPassword) {
      errorMsg = "Your confirm password is not matched";
      return res.render("authenticated/register.ejs", { error: errorMsg });
    }

    try {
      const newUser = await Users.create({
        user_name: userName,
        email,
        password: await bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        isFreelancer,
      });
      req.session.regenerate(function (err) {
        if (err) {
          res.send("unable to regenerate session");
          return;
        }
        req.session.currentUser = newUser;
        console.log(req.session);
        req.session.save(function (err) {
          if (err) {
            res.send("unable to save session");
            return;
          }
          res.redirect(`/profile/new`);
        });
      });
    } catch (error) {
      return res.render("authenticated/register.ejs", { error: error.message });
    }
  },
  showLoginForm: (req, res) => {
    res.render("authenticated/login.ejs", { error: false });
  },
};
module.exports = controller;
