import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required:[true,"password is required"]
    },
    role:{
        type: String
    }
},{timestamps:true})

export const User = mongoose.model('User', userSchema);