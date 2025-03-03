const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    designation:String,
    yoj:String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    }
})
const UserModel=mongoose.model("hii",userSchema);
module.exports=UserModel;