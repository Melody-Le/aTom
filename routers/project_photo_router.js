const express = require("express");
const router = express.Router();
const projectPhotoController = require("../controllers/project_photo.js");

router.get("/", projectPhotoController.showIdeaMarketPage);

module.exports = router;
