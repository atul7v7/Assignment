const router = require("express").Router()
const {login, register} = require("../controller/userController")


router.get("/test",(req, res) => res.send("Hello working"))

router.post('/register',register)

router.post('/login',login)

module.exports = router