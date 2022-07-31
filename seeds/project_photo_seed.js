require("dotenv").config();
const mongoose = require("mongoose");
const projectPhoto = require("../models/project_photo");

const data = [
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/78/b4/3d/78b43d98cc0e37588f1b0e4ac1ed9ecf.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/42/da/97/42da97332d9faa0ae4aa62fb6532827c.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/2d/93/7b/2d937b44a532ae797509887773290666.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/fe/5d/a0/fe5da0466d29028496817753301b1baf.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/de/bc/30/debc305fdc415aedcdb1f6732a48c04a.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    project_detail_id: "62e5ee63767fa1299ea95b18",
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/ba/06/83/ba0683e775ae2c132d3bafb0b0f2e5c5.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/d0/3a/39/d03a39a2975bca90cf30ed969af12ec5.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/d6/fa/83/d6fa836d65cded571617d9bd0c185f99.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/8d/d1/94/8dd19484c2c7f7b9e9716bc1086e66c7.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/736x/33/49/9f/33499fffa7862b259dc1d8d1a0ba31f7.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/736x/66/b9/3b/66b93b582b179b0b647121e7d65106b9.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/a5/62/15/a562153d93d5bd827f3f3bdc5593b1cd.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/1a/a0/0b/1aa00b132d3b70a88792a71aff104d24.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/64/2c/56/642c56cd56b7adfc31afe86556d6ffc8.jpg",
    categories: ["living-room", "interior-design"],
  },

  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/d4/6e/4a/d46e4a8e1439ce329427a12a78cabc9f.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/83/4b/72/834b72e38af50944faac30359e66a66b.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/0f/d1/f4/0fd1f4e8061efe6c3acfa1928235457c.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/09/b9/11/09b9114f93ba2f3042557b5635c2f0bc.jpg",
    categories: ["living-room", "interior-design"],
  },
  {
    photo_name: "Random Photo",
    photo_url: "https://i.pinimg.com/564x/25/a1/24/25a1246634acb27b26c75c1493f3b554.jpg",
    categories: ["living-room", "interior-design"],
  },
];

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.17sk9.mongodb.net/?retryWrites=true&w=majority`;
async function init() {
  const DB = await mongoose.connect(connStr, { dbName: "aTom" });
  await projectPhoto.insertMany(data);

  console.log("success!");

  process.exit();
}

init();

// module.exports = DB;
