import mongoose from "mongoose";    
import dotenv from "dotenv";
dotenv.config();
const dbConnect=async()=>{
    try {
      await mongoose.connect(`${process.env.mongoUrl}`);
      console.log("DB connect");      
    } catch (error) {
        console.log("error in connect Db",error);
    }
  

}
export default dbConnect ;