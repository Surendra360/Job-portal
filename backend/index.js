import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()

app.get("/home", (req,res)=>{
    return res.status(200).json({
        message: "Welcome to home page from backend",
        success: true
    })
})

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOption));

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})