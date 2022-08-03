const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller.js");

router.get("/new", projectController.newProjectForm);
router.post("/new", projectController.create);
router.get("/:project_id/edit", projectController.editProject);
router.get("/:project_id", projectController.showProjectPage);

module.exports = router;
