const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller.js");
const { authenticatedOnly } = require("../middlewares/auth_middleware");

router.get("/new", authenticatedOnly, projectController.newProjectForm);
router.post("/new", authenticatedOnly, projectController.create);
router.delete("/:project_id/:skillIndex/delete-skill", authenticatedOnly, projectController.deleteSkill);
router.delete("/:project_id/:photoIndex/delete-photo", authenticatedOnly, projectController.deletePhoto);
router.put("/:project_id", authenticatedOnly, projectController.update);
router.get("/:project_id/edit", authenticatedOnly, projectController.edit);
router.delete("/:project_id/delete", authenticatedOnly, projectController.deleteProject);
router.get("/:project_id", authenticatedOnly, projectController.showProjectPage);

module.exports = router;
