import express from "express";
const app = express();

app.get("/login", (_, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
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
