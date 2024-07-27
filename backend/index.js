import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./models/db.js";
dotenv.config({})



const app = express()


// cheaking value provide or not
// app.get("/home", (req,res)=>{
//     return res.status(200).json({
//         message: "Welcome to home page from backend",
//         success: true
//     })
// })


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})