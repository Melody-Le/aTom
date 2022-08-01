require("dotenv").config();

const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const session = require("express-session");

// const setRoutes = require("./setRoutes");
//NOTE: ROUTER:
const authenticatedRouter = require("./routers/authenticated_router");
const projectPhotoRouter = require("./routers/project_photo_router");
const projectDetailRouter = require("./routers/project_detail_router");
const profileRouter = require("./routers/profile_router");

const app = express();
const port = 8080;

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.17sk9.mongodb.net/?retryWrites=true&w=majority`;

// Set view engine
app.set("view engine", "ejs");

// Apply middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },
  })
);

//=======ROUTER:

app.use("/authenticated", authenticatedRouter);
app.use("/idea-market", projectPhotoRouter);
app.use("/project-detail", projectDetailRouter);
app.use("/profile", profileRouter);
app.get("/", (req, res) => res.send("Welcome"));

app.listen(port, async () => {
  try {
    await mongoose.connect(connStr, { dbName: "aTom" });
  } catch (err) {
    console.log(`Failed to connect to DB`);
    process.exit(1);
  }
  console.log(`Example app listening on port ${port}`);
});
