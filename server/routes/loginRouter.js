const express = require('express')
const router = express.Router()
const loginController = require("../controller/loginUserController.js")

router.post("/", loginController)

module.exports = router
