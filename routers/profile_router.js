const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");
const { authenticatedOnly } = require("../middlewares/auth_middleware");

router.get("/:user_id/new", profileController.new);
router.post("/:user_id/new", profileController.create);
router.put("/:user_id", profileController.updateProfile);
router.get("/:user_id/edit", profileController.editProfile);
router.get("/:user_id", profileController.showProfilePage);

module.exports = router;
