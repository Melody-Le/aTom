const ProjectPhotos = require("../models/project_photo.js");
const controller = {
  async showIdeaMarketPage(req, res) {
    // const projectPhotos = (await IdeaMarket.find({})).map((photo) => photo.photo_url);

    const projectPhotos = await ProjectPhotos.find({}, "photo_url project_detail_id");

    res.render("./idea-markets/index.ejs", {
      projectPhotos,
    });
  },
};
module.exports = controller;
