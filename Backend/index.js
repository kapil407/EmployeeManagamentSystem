import express from "express";
import dbConnect from "./config/Db.js";
import cors from "cors";
import authRouter from "./src/Routes/AuthRoute.js";

import cookieParser from "cookie-parser";
import profileRouter from "./src/Routes/UserRoutes.js";
import GeminiRouter from "./src/Routes/Gemini.js";
import adminauthRouter from "./src/Routes/AdminRoute.js";
import User from "./src/Models/User.js";
import Department from "./src/Models/Department.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
let port = 5173 || 5172 || 5171;

app.use(
  cors({
    origin: `http://localhost:${port}`,
    credentials: true,
  }),
);


// Get all departments
app.get("/api/departments", async (req, res) => {
  try {
    const department = await Department.find();

    return res.status(200).json({ department });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});





app.use("/", authRouter);

app.use("/", profileRouter);
app.use("/", GeminiRouter);
app.use("/", adminauthRouter);

dbConnect().then(() => {
  app.listen(5200, () => {
    console.log("server is listening at port 5200");
  });
});
