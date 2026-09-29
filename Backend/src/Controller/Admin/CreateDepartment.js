const CreateDepartement=async(req,res)=>{
    try {
        
    } catch (error) {
        console.error("error in create Departemnt ", error);
    return res.status(500).json({message:"error in create Department",error});
    }
}
export default CreateDepartement;