import Department from '../../Models/Department.js'

// create Department 

export  const createDepartmentController=async(req,res)=>{

    try {
        const{name ,manager,description} =req.body;
        if(!name || !manager || !description){
            return res.json(403).json({message:"all fields are required "});
        }
        const newDepartment =new Department({
            name ,
            manager,
            description
        })
        await newDepartment.save();
        return res.status(200).json({message:"create department ",success:true,newDepartment});
        
    } 
    catch (error) {
        console.error("error in create dept ",error);
        return res.status(500).json({message:"error in create department ", error ,success:false});
    }
}

// update dept 

export const updateDepartmentController=async(req,res)=>{
    try {

        const updateDepartment= await Department.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        return res.status(200).json({message:"update dept ",success:true,updateDepartment});

    } catch (error) {
        console.log("error in update dept",error);
        return res.status(500).json({message:"error in update dept",error,success:false});
    }
}

// get all department 

export const getAllDepartmentController=async(req,res)=>{
    try {
        const getAllDepartment=await Department.find();
        return res.status(200).json({message:"get all department ",getAllDepartment,success:true});
    } catch (error) {
        console.error("error in getall dept ",error);
        return res.status(500).json({message:"error in det all department ",error,success:false});
    }
}

// delete department 

export const deleteDepartmentController=async(req,res)=>{
    try {
            const deleteDepartment=await Department.findByIdAndDelete(req.params.id,{
                new:true,
                runValidators:true
            });
             return res.status(200).json({message:"delete department ",deleteDepartment,success:true});
            
    } catch (error) {
        console.log("error in delete department ",error);
        return res.status(500).json({message:"error in delete department ",error,success:false});
    }
}