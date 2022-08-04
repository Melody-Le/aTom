const express = require("express");
const router = express.Router();
const projectPhotoController = require("../controllers/project_photo_controller.js");

router.get("/", projectPhotoController.showIdeaMarketPage);
// router.get("/new", projectPhotoController.showIdeaMarketPage);

module.exports = router;
