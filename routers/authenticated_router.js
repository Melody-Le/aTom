const express = require("express");
const router = express.Router();
const authenticatedController = require("../controllers/authenticated_controller.js");

router.get("/login", authenticatedController.showLoginForm);

router.get("/register", authenticatedController.showRegistrationForm);
router.post("/register", authenticatedController.newRegister);

module.exports = router;
