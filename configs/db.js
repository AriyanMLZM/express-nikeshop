const Sequelize = require('sequelize')

const db = new Sequelize('nike-shop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307
})

try {
  db.authenticate()
  console.log('Connection to the database was successful.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = db
