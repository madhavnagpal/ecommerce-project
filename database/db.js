const Sequelize = require("sequelize");

//exporting db for making modals etc
module.exports.db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/ecommerce.db",
});

const { Products } = require("./products");
const { Users } = require("./users");

//exporting Products and Users
module.exports.Products = Products;
module.exports.Users = Users;
