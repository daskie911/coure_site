const express = require("express");
const router = express.Router();

let alert = {
  message: "",
  type: "",
};

router.get("/", (_, res) => {
  res.render("login");
  alert.message = "";
  alert.type = "";
});

router.post("/", (req, res) => {
  let { email, password } = req.body;

  const parseData = res.locals.parseData;

  for (let user of parseData.users) {
    if (user.email === email && user.password === password) {
      alert.type = "success";
      alert.message = "User exists";
      return res.redirect("/");
    } else {
      alert.type = "danger";
      alert.message = "User does not exist";
      return res.redirect("/");
    }
  }
});

module.exports = router;
