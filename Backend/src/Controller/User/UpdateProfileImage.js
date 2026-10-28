import uploadImage from "../../Middleware/Cloudinary.js";

const UpdateProfileImageController=async(req,res)=>{
    try {
       
        // console.log("image ",image);
        if(!req.file){
            console.log("not found file");
            return res.status(400).json({message:"image not found "});
        }
        const user=req.user;
        console.log("user---",user);
        const ImageUrl=await uploadImage(req.file.path);
        console.log("image url",ImageUrl)
        user.profilePicture=ImageUrl;
       await user.save();
        console.log("user---",user);
        return res.status(200).json({message:"Image updated ",user,success:true});
    } catch (error) {
        return res.status(500).json({message:error});
    }
}
export default UpdateProfileImageController;