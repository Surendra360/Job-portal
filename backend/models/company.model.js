import mongoose from "mongoose";

const companySchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    website:[{
        type:String,
    }],
    location:{
        type:Number,
    },
    logo:{
        type:String,
    },
   
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Application",
    }]
     
},{timestamps:true});

export const Company =  mongoose.model("Company", companySchema)