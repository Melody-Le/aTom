require("dotenv").config();
const mongoose = require("mongoose");
const project = require("../models/projects");
const user_id_1 = "62ea73ff129985ae19e1fcc1";
const user_id_2 = "62ea73ff129985ae19e1fcc2";
const user_id_3 = "62ea73ff129985ae19e1fcc3";

const data = [
  //1
  {
    user_id: user_id_1,
    project_name: "Private House with Santorini mood",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/78/b4/3d/78b43d98cc0e37588f1b0e4ac1ed9ecf.jpg",
      "https://i.pinimg.com/564x/42/da/97/42da97332d9faa0ae4aa62fb6532827c.jpg",
      "https://i.pinimg.com/564x/2d/93/7b/2d937b44a532ae797509887773290666.jpg",
      "https://i.pinimg.com/564x/fe/5d/a0/fe5da0466d29028496817753301b1baf.jpg",
      "https://i.pinimg.com/564x/de/bc/30/debc305fdc415aedcdb1f6732a48c04a.jpg",
      "https://i.pinimg.com/564x/ba/06/83/ba0683e775ae2c132d3bafb0b0f2e5c5.jpg",
    ],
  },
  //2
  {
    user_id: user_id_1,
    project_name: "Design Bedroom for Kid",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Layout plan", "Color Mood for Kids"],
    photos: [
      "https://i.pinimg.com/564x/ca/c9/3c/cac93c57853d30fd09b8d8b9fa1a9de6.jpg",
      "https://i.pinimg.com/564x/97/15/f4/9715f474d37256ce8736925d25d7ac4c.jpg",
      "https://i.pinimg.com/564x/72/4d/3f/724d3fb069f9a6a72bc2383d219bfec7.jpg",
    ],
  },
  //3
  {
    user_id: user_id_1,
    project_name: "Design Lighting",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/9b/ad/d0/9badd0373ca033b7e0358a15cf2f46cc.jpg",
      "https://i.pinimg.com/564x/ed/7f/dd/ed7fdde09195fa938d8ec94591360374.jpg",
      "https://i.pinimg.com/564x/98/fe/ab/98feabf17e0e0b733b7f4aa3a65cec0d.jpg",
      "https://i.pinimg.com/564x/51/ed/34/51ed34635f2694c2fcb33901d4fdf322.jpg",
      "https://i.pinimg.com/564x/9f/25/2c/9f252caccacb163dd10c9a37c365fdd7.jpg",
      "https://i.pinimg.com/564x/8a/16/a7/8a16a7bb39f8d8213181f7ce86a5c20a.jpg",
    ],
  },
  //4
  {
    user_id: user_id_2,
    project_name: "Design Coffee shop",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/1a/a0/0b/1aa00b132d3b70a88792a71aff104d24.jpg",
      "https://i.pinimg.com/564x/83/4b/72/834b72e38af50944faac30359e66a66b.jpg",
      "https://i.pinimg.com/564x/d4/6e/4a/d46e4a8e1439ce329427a12a78cabc9f.jpg",
      "https://i.pinimg.com/564x/64/2c/56/642c56cd56b7adfc31afe86556d6ffc8.jpg",
    ],
  },
  //5
  {
    user_id: user_id_2,
    project_name: "Photographer for house seller",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/d6/fa/83/d6fa836d65cded571617d9bd0c185f99.jpg",
      "https://i.pinimg.com/564x/8d/d1/94/8dd19484c2c7f7b9e9716bc1086e66c7.jpg",
      "https://i.pinimg.com/736x/33/49/9f/33499fffa7862b259dc1d8d1a0ba31f7.jpg",
      "https://i.pinimg.com/736x/66/b9/3b/66b93b582b179b0b647121e7d65106b9.jpg",
      "https://i.pinimg.com/564x/a5/62/15/a562153d93d5bd827f3f3bdc5593b1cd.jpg",
    ],
  },
  //6
  {
    user_id: user_id_2,
    project_name: "3D rendering artist",
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/d0/3a/39/d03a39a2975bca90cf30ed969af12ec5.jpg",
      "https://i.pinimg.com/564x/09/b9/11/09b9114f93ba2f3042557b5635c2f0bc.jpg",
    ],
  },
];

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.17sk9.mongodb.net/?retryWrites=true&w=majority`;
async function init() {
  const DB = await mongoose.connect(connStr, { dbName: "aTom" });

  // data.forEach((project) => {
  //   project.insert({ project_description: project.project_description });
  // });
  // await project.updateMany({ project_description });
  await project.insertMany(data);

  console.log("success!");

  process.exit();
}

init();

// module.exports = DB;
