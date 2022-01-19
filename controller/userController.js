const userModel = require("../model/userModel")
const {generateToken, verifyToken}  = require("../utils/jwtToken")
const bcrypt = require("bcrypt");




exports.register = async(req, res, next) =>{
    try {
        const {username, email, password} = req.body;

        let user = await userModel.findOne({username,email});
        if(user){
            throw new Error("user already registered with provided email or username, please select select unique");
        }
        const hashedPassword = await bcrypt.hash(password,12)
        user = await new userModel({...req.body, password:hashedPassword})
        user = await user.save()
        const token = await generateToken(user, res, next);
        // attach token to response
        res.append("Authentication", `Bearer ${token}`)
       res.status(201).json({
            message : "user created successfully",
            data : user
        })
    } catch (error) {
        
        if(!error.message){
            error.message = "Error occured while saving user";
        }
        next(error)
    }
}


exports.login = async(req, res, next) =>{
    
    try {
        const{username,password} = req.body;
        if(!(req.body.username && req.body.password)){
            throw new Error("Please provide credentials");
        }
        const user = await userModel.findOne({username})
        if(!user){
            throw new Error("user not registered")
        }
        const isEqual = await bcrypt.compare(password,user.password);
        if(!isEqual){
            throw new Error("Invalid credential, please input correct credentials");
        }
        // credential verified successfully
        // generate token and attach to header
        let token = await generateToken(user, res);
        res.append('Authorization', `Bearer ${token}`);
        res.send("You have logged in successfully");
        
        
        
    } catch (error) {
        next(error)
    }
}



