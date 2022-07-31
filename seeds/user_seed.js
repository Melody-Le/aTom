require("dotenv").config();
const mongoose = require("mongoose");
const user = require("../models/user.js");

const data = [
  {
    project_name: "Private House with Santorini mood",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "3D rendering artist",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "Design Lighting",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "Design Coffee shop",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "Interior Office room for game center",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "Photographer for house seller",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
    project_description: `Every design is treated differently, I highly encourage contacting me first to quote the project. It will only take a few minutes and will be free of charge.\n
      This Project is dedicated to creating the Santorini apartment in Singapore, go from that empty room to the space that best fits your needs, and enjoy this exclusive interior design experience with these prime benefits:\n
      2D layout pack: Furniture layout. NO 3D modeling nor renderings.\n
      Powder room pack: Suitable for small bathrooms/powder rooms.\n
      Master bathroom pack: Suitable for large bathrooms/master bathrooms.\n
    `,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
  },
  {
    project_name: "Design Bedroom for Kid",
    categories: ["santorini", "interior design", "Modern-style", "outdoor"],
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
