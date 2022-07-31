const express = require("express");
const router = express.Router();
const projectDetailController = require("../controllers/project_detail.js");

router.get("/:project_detail_id", projectDetailController.showProjectDetailPage);

module.exports = router;
