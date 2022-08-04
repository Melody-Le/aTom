const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");

const authenticatedOnly = (req, res, next) => {
  if (req.session && req.session.currentUser) {
    next();
    return;
  }
  res.redirect("/authenticated/login");
};

router.get("/new", profileController.new);
router.post("/new", profileController.create);
router.put("/:user_id", profileController.updateProfile);
router.get("/:user_id/edit", profileController.editProfile);
router.get("/:user_id", profileController.showProfilePage);

module.exports = router;
