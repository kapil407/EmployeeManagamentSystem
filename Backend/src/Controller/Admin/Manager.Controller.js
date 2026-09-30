import User from "../../Models/User.js";
import bcrypt ,{hash} from 'bcrypt';
export const createManagerController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      role,
    } = req.body;
    if(!name ||!email ||!password ||!phone ||!department ||!designation ||!joiningDate ||!salary||!role){
    return res.status(403).json({message:"all fields are required"});
     const hashedPasword=await bcrypt.hash(password,10);
}
    const NewManager = new User({
      name,
      email,
      password:hashedPasword,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      role: "MANAGER",
    });
     return res.status(200).json({message:"manager create sucessfully ",success:true,NewManager});

  } catch (error) {
    console.error("error in create manager",error);
     return res.status(500).json({message:"error manager create  ",error});
  }
};




export const updateManager=async(req,res)=>{
    try {
        const UpdateManager=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                runValidators:true,
                new:true
            }
        )
    } catch (error) {
        console.error("error in update manager",error);
        return res.status(500).json({message:"error in update manager ",error});
    }
}



export const getAllManager = async (req, res) => {
  try {
        const AllProfile=await User.find({
           role:"MANAGER"
        }).select("-password");
        console.log("All Users");
        return res.status(200).json({message:"All Managers",AllProfile,success:true});
  }     
  catch (error) {
    console.error("GetAllprofile of Manager error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};



export const deleteManager=async(req,res)=>{
        try {
            const {id}=params.id;
           const deleteManager= await User.findByIdAndDelete({_id:id});
            return res.status(200).json({message:"delete manager ",success:true});
        } catch (error) {
            console.error("error in delete manager",error)
             return res.status(500).json({message:" error in delete manager ",error});
        }
}
