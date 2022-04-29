const  bcrypt = require("bcrypt")
const User = require("../models/users")
const jwt = require("jsonwebtoken")

exports.create = async (req, res, next )  => {

  const userExist = await User.findOne({email: req.body.email})

  if (userExist) {
    res.send(409).send("User already exists")
  }

  let encryptedPassword = await bcrypt.hash(req.body.password, 10)

  let user = new User({
    name: req.body.name, 
    email: req.body.email, 
    password: encryptedPassword
  })

  user.save(err => {
    if (err){
      return next(err)
    }

    res.send("User registered successfully")
  })
}

exports.login = async (req, res, next )  => {

  const{ email, password } = req.body

  if (!email || !password){
    res.status(400).send("Email and password are required")
  }

  const user = await User.findOne({email})

  if (user && bcrypt.compare(password, user.password)) {
    const token = jwt.sign({user_id: user._id, email}, process.env.TOKENSECRET, {expiresIn: "2h" })
    user.token = token
    user.password = null

    res.status(200).send(user)
  }else{
    res.status(400).send("Invalid Credentials")
  }

}


