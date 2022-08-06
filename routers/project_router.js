const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller.js");

router.get("/new", projectController.newProjectForm);
router.post("/new", projectController.create);
router.delete("/:project_id/:skillIndex/delete-skill", projectController.deleteSkill);
router.delete("/:project_id/:photoIndex/delete-photo", projectController.deletePhoto);
router.put("/:project_id", projectController.update);
router.get("/:project_id/edit", projectController.edit);
router.delete("/:project_id/delete", projectController.delete);
router.get("/:project_id", projectController.showProjectPage);

module.exports = router;
