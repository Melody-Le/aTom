const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job_controller.js");
const { authenticatedOnly } = require("../middlewares/auth_middleware");

router.get("/new", authenticatedOnly, jobController.newJobForm);
router.post("/new", authenticatedOnly, jobController.create);
router.delete("/:job_id/:skillIndex/delete-skill", authenticatedOnly, jobController.deleteSkill);
router.delete("/:job_id/:photoIndex/delete-photo", authenticatedOnly, jobController.deletePhoto);
router.put("/:job_id", authenticatedOnly, jobController.update);
router.get("/:job_id/edit", authenticatedOnly, jobController.edit);
router.delete("/:job_id/delete", authenticatedOnly, jobController.deleteJob);
router.get("/:job_id", authenticatedOnly, jobController.showJobPage);

module.exports = router;
