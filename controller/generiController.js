// controller for welcome page or home page


exports.home = (req, res, next) =>{
    res.send("Welcome to home")
}
exports.pageNotFound = (req, res, next) =>{
    res.send("Page not found");
}


// controller for page not foud;