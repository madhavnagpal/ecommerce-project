const express = require("express");
const app = express();
const path = require("path");

const { db, Products, Users } = require("./database/db");
const userRoute = require("./routes/users");

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET all products from db
app.get("/api/products", async (req, res) => {
  const products = await Products.findAll();
  res.status(200).send(products);
});

//all /user routes
app.use("/user", userRoute);

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
  })
  .catch((e) => console.log(e));
