const User = require('../models/User')

const signupController = async (req, res) => {
  const user = await User.findOne({
    where: {
      name: req.body.name
    }
  })
  if (user) {
    res.json({ error: true, msg: 'This username was taken!' })
  } else {
    await User.create({ name: req.body.name, password: req.body.pass })
    res.json({ error: false, msg: 'signedup' })
  }
}

module.exports = signupController
