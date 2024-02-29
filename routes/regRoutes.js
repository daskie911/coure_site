// regRoutes.js
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/register", (req, res) => { // Fix: Added req parameter
  res.render("reg");
});

router.post("/register", (req, res) => {
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
    res.redirect("/"); // Fix: Redirect after writing to db.json
  }
});

module.exports = router;
