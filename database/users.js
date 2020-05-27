const { db } = require("./db");
const Sequelize = require("sequelize");

const Users = db.define("users", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false,
  },
});

module.exports.Users = Users;
