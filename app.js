const express = require("express");
const app = express();
const fs = require("fs");
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));

let data = fs.readFileSync("db.json");
let parseData = JSON.parse(data);

const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");


let alert = {
  message: "",
  type: "",
};

app.use("/", homeRoutes);

app.get("/users", (req, res) => {
  res.render("users", { users: data });
});

app.use("/login", loginRoutes);


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
