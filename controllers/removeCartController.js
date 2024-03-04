const Cart = require('../models/Cart')

const removeCartController = async (req) => {
  await Cart.destroy({
    where: {
      user: req.body.user,
      title: req.body.title
    }
  })
}

module.exports = removeCartController
