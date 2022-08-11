const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller.js");
const { authenticatedOnly } = require("../middlewares/auth_middleware");
const multer = require("multer");
const upload = multer();

// TODO: REMEMBER TO ADD AUTHENTICATED MIDDELWARE AGAIN FOR NEW AND POST
router.get("/:user_id/new", authenticatedOnly, profileController.new);
router.post(
  "/:user_id/new",
  authenticatedOnly,
  upload.fields([
    { name: "profile_photos_url", maxCount: 1 },
    { name: "cover_photos_url", maxCount: 1 },
  ]),
  profileController.createProfile
);
router.put(
  "/:user_id",
  authenticatedOnly,
  upload.fields([
    { name: "upload_profile_photos_url", maxCount: 1 },
    { name: "upload_cover_photos_url", maxCount: 1 },
  ]),
  profileController.updateProfile
);
router.get("/:user_id/edit", authenticatedOnly, profileController.editProfile);
router.get("/:user_id", authenticatedOnly, profileController.showProfilePage);

module.exports = router;
