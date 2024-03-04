const Cart = require('../models/Cart')

const addCartController = async (req) => {
  await Cart.create(req.body)
}

module.exports = addCartController
