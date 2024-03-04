const Cart = require('../models/Cart')

const cartController = async (req, res) => {
  const cart = await Cart.findAll({
    where: {
      user: req.body.user
    }
  })
  res.json(cart)
}

module.exports = cartController
