const items = require('../jsons/items.json')
const Product = require('../models/Product')

const importToDatabase = () => {
  items.forEach((item) => {
    Product.create(item)
  })
}

importToDatabase()
