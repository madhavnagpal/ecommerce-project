const { db } = require("./db");
const Sequelize = require("sequelize");

//defining product modal
const Products = db.define("products", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false,
  },
  avatar: {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false,
  },
  price: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
});

//seeding database with products
async function seedProduct() {
  await db.sync();
  const product = await Products.create({
    name:
      "Lenovo Ideapad S145 8th Generation Intel Core i3 15.6 inch FHD Thin and Light Laptop (4GB/1TB/Windows 10/Grey/1.85Kg), 81VD0082IN",
    avatar: "/media/product1.jpg",
    price: 29990,
    discount: 20,
  });
  await db.sync();
}
// seedProduct();

module.exports.Products = Products;
