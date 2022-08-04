const express = require("express");
const router = express.Router();
const pageController = require("../controllers/page_controller.js");

router.get("/freelancer-community", pageController.showFreelancerCommunityPage);
router.get("/idea-market", pageController.showIdeaMarketPage);

module.exports = router;
