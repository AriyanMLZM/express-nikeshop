const Product = require('../models/Product')

const itemsController = async (req, res) => {
  const product = await Product.findAll()
  res.json(product)
}

module.exports = itemsController
