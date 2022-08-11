const express = require("express");
const router = express.Router();
const authenticatedController = require("../controllers/authenticated_controller.js");

router.get("/login", authenticatedController.showLoginForm);
router.post("/login", authenticatedController.login);

router.get("/register", authenticatedController.showRegistrationForm);
router.post("/register", authenticatedController.newRegister);

router.post("/logout", authenticatedController.logout);
router.delete("/:user_id/delete", authenticatedController.deleteAccount);

module.exports = router;
