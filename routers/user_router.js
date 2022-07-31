const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller.js");

router.get("/login", userController.showLoginForm);

router.get("/register", userController.showRegistrationForm);
router.post("/register", userController.register);

module.exports = router;
