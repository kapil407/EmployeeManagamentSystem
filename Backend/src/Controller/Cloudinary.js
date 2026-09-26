import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


const uploadFile=async(fileImage)=>{
  try {
      const url=await cloudinary.uploader.upload(fileImage);
      return url.secure_url;
  } catch (error) {
        console.log({message:"cloudinary error",error});
  }
}
export default uploadFile ;