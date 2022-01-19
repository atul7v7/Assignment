const jwt =  require("jsonwebtoken")
const {SECRET} = require("../config/index")

const generateToken = async(user,res,next) =>{
    try {
        const token = await jwt.sign({
            _id : user._id,
            role : user.role,
            email : user.email,  
            name:user.name,
            username:user.username      
        },`${SECRET}`)
        return token;
    } catch (error) {
        throw new Error("Error in generating jwt token",error.message)
    }
}


// function to add user detail to req.user;
const verifyToken = async(token, req) => {
    try {
        console.log("token recieved ", token)
        const decodeToken = await jwt.verify(token,`${SECRET}`);
        req.user = decodeToken;
        console.log("req.user", req.user);
    } catch (error) {
        console.log("error", error)
        if(!error)
        throw new Error("Error in verifying token");
    }

}

module.exports = {
    generateToken,verifyToken
}