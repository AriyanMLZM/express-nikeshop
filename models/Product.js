const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Product = db.define(
  'products',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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

module.exports = Product
