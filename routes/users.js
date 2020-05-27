// all /user routes are diverted here
const route = require("express").Router();
const { db, Users } = require("../database/db");

/* register route for creating a account
  /user/register  POST route  */
route.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await Users.findOne({ where: { email } });

    //user already exists
    if (user) {
      res.json({ isRegistered: false, user });
    } else {
      user = await Users.create({
        username,
        email,
        password,
      });
      res.status(201).json({ isRegistered: true, user });
    }
  } catch (e) {
    console.log(e);
  }
});

/* login route for user to login in his account
   /login POST route */
route.post("/login", async (req, res) => {});
module.exports = route;
