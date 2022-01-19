const fs = require('fs')
const {promisify} = require('util')
const appendFile = promisify(fs.appendFile);

const logger = (req, res, next) =>{
let data = `${new Date()} ${req.path}`
writeToFile(data); 
next()
}

const writeToFile = async(data) =>{
    const writeRes = await appendFile('RequestLogger.txt',data+'\n')
}


module.exports = logger;