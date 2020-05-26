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
});

//seeding database with products
async function seedProduct() {
  await db.sync();
  const product = await Products.create({
    name: "Samsung Galaxy M31 (6GB RAM, 64GB Storage)",
    avatar: "/media/product-12.jpg",
    price: 15999,
  });
  await db.sync();
}
// seedProduct();

module.exports.Products = Products;
