const Sequelize = require("sequelize");

//exporting db for making modals etc
module.exports.db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/products.db",
});

const { Products } = require("./products");

//exporting Products
module.exports.Products = Products;
