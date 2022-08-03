const express = require("express");
const router = express.Router();
const projectDetailController = require("../controllers/project_detail_controller.js");

router.get("/:project_detail_id", projectDetailController.showProjectDetailPage);

module.exports = router;
