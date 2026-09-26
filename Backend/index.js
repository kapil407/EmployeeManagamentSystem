import express from "express";
import dbConnect from "./config/Db.js";
import cors from 'cors'
import authRouter from "./src/Routes/AuthRoute.js";
import deleteRoute from "./src/Routes/DeleteEmpRoute.js";
import cookieParser from "cookie-parser";
import profileRouter from "./src/Routes/ProfileRoute.js";
import GeminiRouter from "./src/Routes/Gemini.js";
const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use('/',authRouter);
app.use('/',deleteRoute);
app.use('/',profileRouter);
app.use('/',GeminiRouter);
dbConnect().then(()=>{
    app.listen( 5200,()=>{
    console.log("server is listening at port 5200");
})
})

