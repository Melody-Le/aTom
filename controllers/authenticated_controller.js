const bcrypt = require("bcrypt");
const Users = require("../models/users.js");

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
        console.log("currentUser in register: ", req.session.currentUser);
        req.session.save(function (err) {
          if (err) {
            res.send("unable to save session");
            return;
          }
          const currentUserId = req.session.currentUser._id;
          res.redirect(`/profiles/${currentUserId}/new`);
        });
      });
    } catch (error) {
      return res.render("authenticated/register.ejs", { error: error.message });
    }
  },
  showLoginForm(req, res) {
    res.render("authenticated/login.ejs", { error: false });
  },
  async login(req, res) {
    try {
      let errorMsg = null;
      const { email, password } = req.body;
      const foundUser = await Users.findOne({ email: req.body.email });
      if (!foundUser) {
        errorMsg = "Account dont have";
        return res.render("authenticated/login.ejs", { error: errorMsg });
      }
      const isMatch = bcrypt.compareSync(password, foundUser.password);
      if (!isMatch) {
        errorMsg = "Password not match";
        return res.render("authenticated/login.ejs", { error: errorMsg });
      }
      req.session.currentUser = foundUser;
      res.redirect(`/profiles/${req.session.currentUser._id}`);
    } catch (err) {
      console.log(err.message);
      return;
    }
  },
  async logout(req, res) {
    req.session.user = null;

    req.session.save(function (err) {
      if (err) {
        res.redirect("/users/login");
        return;
      }

      req.session.regenerate(function (err) {
        if (err) {
          res.redirect("/authenticated/login");
          return;
        }

        res.redirect("/");
      });
    });
  },
};
module.exports = controller;
