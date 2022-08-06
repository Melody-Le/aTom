const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller.js");

router.get("/new", projectController.newProjectForm);
router.post("/new", projectController.create);
router.put("/:project_id", projectController.updateProject);
router.get("/:project_id/edit", projectController.editProject);
router.delete("/:project_id/delete/:photoIndex", projectController.deletePhoto);
router.get("/:project_id", projectController.showProjectPage);

module.exports = router;
