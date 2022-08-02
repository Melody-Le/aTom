const bcrypt = require("bcrypt");
const Users = require("../models/user.js");

const controller = {
  async showRegistrationForm(req, res) {
    res.render("authenticated/register.ejs", { error: false });
  },
  async newRegister(req, res) {
    const {
      user_name: userName,
      email,
      password,
      is_freelancer: isFreelancer,
      confirm_password: confirmPassword,
    } = req.body;
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
      // // log the user in by creating a session
      req.session.regenerate(function (err) {
        if (err) {
          res.send("unable to regenerate session");
          return;
        }

        // store user information in session, typically a user id
        req.session.currentUser = newUser;
        // console.log(req.session.currentUser._id);
        const currentUser = req.session.currentUser;

        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) {
            res.send("unable to save session");
            return;
          }

          res.redirect(`/`);
        });
      });
      // req.session.currentUser = newUser;
      // console.log(req.session.currentUser);
      // res.redirect(`/profile/new`);
    } catch (error) {
      return res.render("authenticated/register.ejs", { error: error.message });
    }

    // const newUser = {
    //   user_name: userName,
    //   password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    // };

    // Users.create(newUser, (err, createdUser) => {
    //   req.session.currentUser = createdUser;
    //   // res.redirect("/profile/new");
    //   console.log(req.session.currentUser._id);
    //   res.redirect("/profile/62e72b143455ee46984e9e02");
    // });

    // if (role === "freelancer") {
    //   const existingFreelancer = await Freelancer.findOne({ userName });
    //   if (existingFreelancer) {
    //     console.log("already have this account");
    //     return res.redirect("/users/register");
    //   }
    //   const newFreelancer = await Freelancer.create({
    //     userName,
    //     password,
    //     email,
    //     role,
    //   });
    //   res.redirect("/");
    //   return;
    // }
  },
  showLoginForm: (req, res) => {
    res.render("authenticated/login.ejs", { error: false });
  },
};
module.exports = controller;
