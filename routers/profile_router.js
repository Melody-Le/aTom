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

router.get("/new", authenticatedOnly, profileController.new);
router.post("/new", authenticatedOnly, profileController.create);
// router.edit("/user_id/edit", authenticatedOnly, profileController.create);
router.get("/:user_id", authenticatedOnly, profileController.showProfilePage);

module.exports = router;
