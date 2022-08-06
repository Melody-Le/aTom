const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");
const { authenticatedOnly } = require("../middlewares/middleware");

router.get("/:user_id/new", authenticatedOnly, profileController.new);
router.post("/:user_id/new", authenticatedOnly, profileController.create);
router.put("/:user_id", authenticatedOnly, profileController.updateProfile);
router.get("/:user_id/edit", authenticatedOnly, profileController.editProfile);
router.get("/:user_id", authenticatedOnly, profileController.showProfilePage);

module.exports = router;
