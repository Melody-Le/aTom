const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job_controller.js");

router.get("/new", jobController.new);
router.post("/new", jobController.create);
router.delete("/:job_id/:skillIndex/delete-skill", jobController.deleteSkill);
router.delete("/:job_id/:photoIndex/delete-photo", jobController.deletePhoto);
router.put("/:job_id", jobController.update);
router.get("/:job_id/edit", jobController.edit);
router.delete("/:job_id/delete", jobController.deletejob);
router.get("/:job_id", jobController.showJobPage);

module.exports = router;
