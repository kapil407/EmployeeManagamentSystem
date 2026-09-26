import User from "../Models/User.js";  
const Authorization=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req?.user?.role) ){
            return res.status(403).json({message:"access Denied"});
        }
        next();
    }
}
export default Authorization;