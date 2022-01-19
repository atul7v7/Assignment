require('dotenv').config()


module.exports = {
    SECRET : process.env.APP_SECRET,
    DB: process.env.DB,
    PORT: process.env.PORT
}