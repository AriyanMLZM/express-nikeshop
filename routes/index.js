const express = require('express')
const {
  homepageController,
  itemsController,
  signupController,
  cartController,
  addCartController,
  removeCartController
} = require('../controllers')
const loginController = require('../controllers/loginController')

const router = express.Router()

router.get('/', homepageController)
router.get('/items', itemsController)

router.post('/login', loginController)
router.post('/signup', signupController)
router.post('/cart', cartController)
router.post('/addCart', addCartController)
router.post('/removeCart', removeCartController)

module.exports = router
