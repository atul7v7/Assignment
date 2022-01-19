const mongoose = require('mongoose')
const {promisify} = require("util")
const {DB} = require('../config/index')

const connect = promisify(mongoose.connect)

const connnectToDB = async() =>{
    const connection = await connect(DB);
    console.log("connected to DB");
    return;
}

module.exports = connnectToDB;