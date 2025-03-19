import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            require:true,
            unique: true,
        },
        fullName:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
            minlength:6,
        },
        profilePic:{
            type:String,
            default:"",
        }
    },
    {timestamps:true}
);

const User = mongoose.model("User",userSchema);

export default User;