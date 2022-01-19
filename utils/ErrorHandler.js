const {promisify} = require("util")
const writeFile = promisify(require("fs").appendFile);

const errorHandler = (err, req, res, next) =>{
    console.log("error Logger executed");
    if(!err.message){
        writeToFile("something went wrong!!!", req);
        return res.json({
            message : "Something went wrong !!!!"
        })
    }
    writeToFile(err.message,req)
    res.json({
        message : err.message,
        data : err
    })
}



const writeToFile = async(error,req) =>{
    try {
        let data = `${new Date()} ${req.path} ${error.message} \n`
        await writeFile('ErrorLogger.txt', data);
    } catch (error) {
        console.log("error in writting in Error LOgger", error);
    }
}

module.exports = errorHandler;