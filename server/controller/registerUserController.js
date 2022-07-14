const User  = require("../models/userModel.js")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
  const user = req.body
  const takeUsername = await User.findOne({ username: user.username })
  const takeEmail = await User.findOne({ email: user.email })
  if (takeUsername || takeEmail) {
    res.json({ message: "Username or email taken" })
  } else {
    user.password = await bcrypt.hash(req.body.password, 10)
    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    })
    dbUser.save()
    res.json({ 
        message: "added user",
        dbUser
    })
  }
}

module.exports= register
