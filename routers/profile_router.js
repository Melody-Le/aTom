const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");

router.get("/:user_id", profileController.showProfilePage);

module.exports = router;
