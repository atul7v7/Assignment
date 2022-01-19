// ROUTES COLLECTOR

const router = require("express").Router()
const userRoutes = require("./userRoutes");
const genericRoutes = require("./genericRoutes")

router.use('/user',userRoutes);



router.use('/',genericRoutes)
module.exports = router