const express = require("express");
const app = express();
const fs = require("fs");

app.get("/register", (req, res) => {
  res.render("reg");
});

app.post("/register", (req, res) => {
  let { email, password, password2 } = req.body;
  console.log(email, password, password2);
  console.log(parseData);

  if (password !== password2) {
    res.render("reg");
    return;
  }

  let userExists = false;

  for (let user of parseData.users) {
    if (user.email === email) {
      userExists = true;
      break;
    }
  }

  if (userExists) {
    res.send("User already exists!");
    res.redirect("/");
  } else {
    parseData.users.push({ email, password });
    fs.writeFileSync("db.json", JSON.stringify(parseData, null, 2));
  }
});
