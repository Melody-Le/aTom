require("dotenv").config();
const mongoose = require("mongoose");
const projectDetail = require("../models/project_detail");
const user_id_1 = "62e72b143455ee46984e9e02";
const user_id_2 = "62e72b143455ee46984e9e03";
const user_id_3 = "62e72b143455ee46984e9e04";

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
  },
];

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.17sk9.mongodb.net/?retryWrites=true&w=majority`;
async function init() {
  const DB = await mongoose.connect(connStr, { dbName: "aTom" });

  // data.forEach((project) => {
  //   projectDetail.insert({ project_description: project.project_description });
  // });
  // await projectDetail.updateMany({ project_description });
  await projectDetail.insertMany(data);

  console.log("success!");

  process.exit();
}

init();

// module.exports = DB;
