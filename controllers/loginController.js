const User = require('../models/User')

const loginController = async (req, res) => {
  const user = await User.findOne({
    where: {
      name: req.body.name
    }
  })
  if (user) {
    if (req.body.pass === user.password) {
      res.json({ error: false, msg: 'logedin' })
    } else {
      res.json({ error: true, msg: 'Invalid Password!' })
    }
  } else {
    res.json({ error: true, msg: 'User was not found!' })
  }
}

module.exports = loginController
