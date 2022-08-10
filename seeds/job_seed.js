require("dotenv").config();
const mongoose = require("mongoose");
const jobs = require("../models/jobs");
const author_id_1 = "62ef11b0bb2db84e23d2df46";
const author_id_2 = "62ef5d5a7b94b1f8a104219b";

const data = [
  //1
  {
    author_id: author_id_1,
    job_title: "Interior Design or a Western restaurant",
    job_description: `Create a unique design for a western restaurant, with santorini design style. Below are some existing photo of that restaurant`,
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    photos: [
      "https://i.pinimg.com/564x/aa/32/7c/aa327c16c46fa1980cebf50b7e0c9d54.jpg",
      "https://i.pinimg.com/564x/ae/7e/77/ae7e778e9c15b1a7ffce9cd8dea3deec.jpg",
      "https://i.pinimg.com/736x/62/c2/02/62c20286c60bcbb14dc38b34cb4ebaf5.jpg",
    ],
  },
  //2
  {
    author_id: author_id_2,
    job_title: "Interior Design for a private flat 3 bedroom",
    job_description: `Create a warm cozy place for a family, with 3 bedroom, 1 kitchen. Decoration in scandinavian style.`,
    skills: ["Concept Design", "Scadinavian Style", "Lighting Desgin", "Layout plan"],
    photos: [
      "https://i.pinimg.com/564x/81/9b/05/819b057f7123b3430d2f3a17b00f9792.jpg",
      "http://www.homeanddecor.com.sg/sites/default/files/imagecache/large/prof/2015/06/crop_1433589056_27536.jpg",
      "https://stackedhomes.com/editorial/wp-content/uploads/2022/06/choa-chu-kang-street-64-design-1.jpg",
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
  await jobs.insertMany(data);

  console.log("success!");

  process.exit();
}

init();

// module.exports = DB;
