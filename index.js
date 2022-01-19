const express = require('express')
const connnectToDB = require('./config/DBConnection')
let {PORT} = require("./config/index") || 3000
const routes = require("./routes/index")
const app = express()

// UTIL IMPORT
const errorHandler = require('./utils/ErrorHandler')
const logger = require('./utils/RequestLogger')

app.use(express.json())
app.use(logger);
app.use(routes)
app.use(errorHandler);


// server started listening
app.listen(PORT, async() =>{
    await connnectToDB();
    console.log(`server up and running at port ${PORT}`)
})

