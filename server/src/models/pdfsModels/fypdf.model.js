import mongoose from "mongoose";

const fypdfSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    pdfUrl:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    faculty:{
        type:String,
        required:true
    }
},{timestamps: true})

export const FyPdf = mongoose.model("FyPdf", fypdfSchema)