const express = require("express");
const router = express.Router();

let alert = {
  message: "",
  type: "",
};

router.get("/", (_, res) => {
  res.render("login", { alert });
  alert.message = "";
  alert.type = "";
});

router.post("/", (req, res) => {
  let { email, password } = req.body;

  const parseData = res.locals.parseData;

  for (let user of parseData.users) {
    if (user.email === email && user.password === password) {
      alert.message = "User exists";
      alert.type = "success";
    } else {
      alert.message = "User does not exist";
      alert.type = "danger";
    }
  }

  res.render("home", { alert });
});

module.exports = router;
