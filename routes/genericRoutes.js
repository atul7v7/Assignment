const router = require("express").Router()
const {home, pageNotFound}  =require("../controller/generiController")

router.get('/home',home)
router.use('*',pageNotFound);
module.exports = router;