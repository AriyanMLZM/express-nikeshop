const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Cart = db.define(
  'carts',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    srcImg: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Cart
