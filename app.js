const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));

const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const regRoutes = require("./routes/regRoutes");
const profRoutes = require("./routes/profRoutes");

const port = process.env.PORT || 3000;

app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/register", regRoutes);
app.use("/profile", profRoutes);

const start = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`);
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
