const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    role:{
        type : String,
        required:true,
        default : 'user',
        enum : ["user","admin","superAdmin"]
    },
    username : {
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    }
},
{timestamps : true}
)

module.exports = model('users', userSchema);