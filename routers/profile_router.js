const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");
const { authenticatedOnly } = require("../middlewares/auth_middleware");
const multer = require("multer");
const upload = multer();

// TODO: REMEMBER TO ADD AUTHENTICATED MIDDELWARE AGAIN FOR NEW AND POST
router.get("/:user_id/new", profileController.new);
router.post(
  "/:user_id/new",
  upload.fields([
    { name: "profile_photos_url", maxCount: 1 },
    { name: "cover_photos_url", maxCount: 1 },
  ]),
  profileController.createProfile
);
router.put(
  "/:user_id",
  upload.fields([
    { name: "profile_photos_url", maxCount: 1 },
    { name: "cover_photos_url", maxCount: 1 },
  ]),
  profileController.updateProfile
);
router.get("/:user_id/edit", profileController.editProfile);
router.get("/:user_id", profileController.showProfilePage);

module.exports = router;
