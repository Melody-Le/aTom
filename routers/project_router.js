const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller.js");

router.get("/new", projectController.newProjectForm);
router.post("/new", projectController.create);
router.get("/:project_id", projectController.showProjectPage);
router.get("/:project_id", projectController.showProjectPage);

module.exports = router;
