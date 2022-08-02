const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");

const authenticatedOnly = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
    return;
  }
  res.redirect("/authenticated/login");
};

router.get("/new", profileController.new);
router.post("/new", profileController.create);
router.get("/:user_id", authenticatedOnly, profileController.showProfilePage);

module.exports = router;
