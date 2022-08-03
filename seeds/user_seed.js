require("dotenv").config();
const mongoose = require("mongoose");
const user = require("../models/user.js");

const data = [
  {
    user_name: "Clara J",
    email: "clara@gmail.com",
    password: 123,
    isFreelancer: true,
    job_title: "Interior Design",
    postal_code: 570133,
    city: "Singapore",
    linkedIn: "https://www.linkedin.com/feed/",
    skills: ["Concept Design", "Revit", "Lighting Desgin", "3DSmax Rendering", "Layout plan", "Santorini Mood"],
    about_me:
      "Takes a broader approach to architecture that incorporates research, design thinking and technology to drive positive change for people and environments. Possesses broad competencies from architecture, interior and urban design, to branding, experience design, agile and lean business and management, with a keen interest in the circular economy and industry 4.0 developments.",
    profile_photos_url: "https://i.pinimg.com/564x/97/28/6c/97286c914f0906307803fca0e9ef94d2.jpg",
    cover_photos_url: "https://i.pinimg.com/564x/30/f3/65/30f365e5c2df89bc2813161592715bfd.jpg",
  },
  {
    user_name: "Carol Q",
    email: "carol@gmail.com",
    password: 123,
    isFreelancer: true,
    job_title: "3D Artist | Photographer | Designer",
    postal_code: 32131,
    city: "Singapore",
    linkedIn: "https://www.linkedin.com/feed/",
    skills: ["3DSmax Rendering", "Layout plan", "Lumion", "Concept design"],
    about_me:
      "I'm a professional 3D artist and interior designer. I specialize in residential space planning, custom kitchen and bath design, and cohesive interiors. Having a multi-cultural background has allowed me to understand my client's needs and requirements, performing over 130 successful projects all around the globe. Overdeliver, overachieve, and outstanding are the three O's my clients always say about me. I'm always open to working opportunities and collaborations. Do not hesitate to contact me, we could do great things together!",
    profile_photos_url: "https://i.pinimg.com/564x/ea/9b/c6/ea9bc65fb7c880f715532880410a0f73.jpg",
    cover_photos_url: "https://i.pinimg.com/564x/1f/97/c1/1f97c1df051bde2435c3648f127be91e.jpg",
  },
  {
    user_name: "Joice L",
    email: "joice@gmail.com",
    password: 123,
    isFreelancer: true,
    job_title: "Full stack web developer | Designer",
    postal_code: 32131,
    city: "Singapore",
    linkedIn: "https://www.linkedin.com/feed/",
    skills: ["3DSmax Rendering", "Layout plan", "Lumion", "Concept design", "BIM"],
    about_me:
      "I'm a professional 3D artist and interior designer. I specialize in residential space planning, custom kitchen and bath design, and cohesive interiors. Having a multi-cultural background has allowed me to understand my client's needs and requirements, performing over 130 successful projects all around the globe. Overdeliver, overachieve, and outstanding are the three O's my clients always say about me. I'm always open to working opportunities and collaborations. Do not hesitate to contact me, we could do great things together!",
    profile_photos_url: "https://i.pinimg.com/564x/90/b7/62/90b762c1436b620eae93ec1db63a8171.jpg",
    cover_photos_url: "https://i.pinimg.com/564x/78/76/8f/78768f0ce9056d53e0216e73a9c8cfc8.jpg",
  },
];
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.17sk9.mongodb.net/?retryWrites=true&w=majority`;
async function init() {
  const DB = await mongoose.connect(connStr, { dbName: "aTom" });
  await user.insertMany(data);

  console.log("success!");

  process.exit();
}

init();
