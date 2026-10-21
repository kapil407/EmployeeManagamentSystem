import { FaLeftLong } from "react-icons/fa6";
import {motion} from 'motion/react'
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { updateManager } from "../../Redux/ManagerSlice";
import { useDispatch } from "react-redux";

const EditeManagerDetails = () => {
  const dispatch=useDispatch();

    const navigate=useNavigate();
    const [designation,setDesignation]=useState("");
    const [department,setDepartment]=useState("");
    const [salary,setSalary]=useState("")
    const [address,setAddress]=useState("");
    const [joiningDate,setJoiningDate]=useState("");
  
            const {id}=useParams();
    const EditeHandler=async()=>{
    try {
        const res=await axios.patch(`http://localhost:5200/update-manager/${id}`,{
            designation,department,salary,address,joiningDate
        },{
            withCredentials:true
        })
        console.log("res in edite Handler ",res);
        if(res.data.success){
          dispatch(updateManager(res.data.manager));
        }
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
      <motion.div 
      initial={{
        opacity:0,y:8
      }}
      whileInView={{
            opacity:1,y:0
      }}
      transition={{
        duration:0.4
      }}
      className="text-white w-screen h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-[60%] h-[70%] bg-slate-800 p-4 rounded-xl">
          <div className="flex gap-4 items-center pb-8">
           
           <button onClick={()=>navigate(`/manager-profile/${id}`)} className="flex items-center gap-2  cursor-pointer font-semibold"> <FaLeftLong size={20}/> Back</button>
          </div>
          <div className="flex flex-col w-full bg-slate-800 gap-4">
            <div className="flex flex-col">
                <label htmlFor="Designation" className="font-bold">Update Designation</label>
              <motion.input 
              value={designation}
              onChange={(e)=>setDesignation(e.target.value)}
              whileHover={{
                scale:1.015,
                boxShadow:"0px 0px 15px rgba(87, 190, 237, 0.5)"
              }}
              transition={{
                duration:0.4
              }}
              type="text" id=""Designation placeholder="Update Designation" className="py-4 mt-1 border rounded-xl px-4 outline-none font-bold  border-slate-600" /> 
            </div>
             <div className="flex flex-col">
                  <label htmlFor="Department" className="font-bold">Update Department </label>
              <motion.input 
              value={department}
              onChange={(e)=>setDepartment(e.target.value)}
               whileHover={{
                scale:1.015,
                boxShadow:"0px 0px 15px rgba(87, 190, 237, 0.5)"
              }}
              transition={{
                duration:0.4
              }}
              type="text" id="Department" placeholder="Update Department " className="py-4 border mt-1 rounded-xl px-4 outline-none font-bold  border-slate-600" />
             </div>
             <div className="flex flex-col">
                  <label htmlFor="Salary" className="font-bold" >Update Salary</label>
              <motion.input 
              value={salary}
              onChange={(e)=>setSalary(e.target.value)}
                whileHover={{
                scale:1.015,
                boxShadow:"0px 0px 15px rgba(87, 190, 237, 0.5)"
              }}
              transition={{
                duration:0.4
              }}
              type="text" id="Salary" placeholder="Update Salary" className="py-4 border mt-1 rounded-xl px-4 outline-none font-bold  border-slate-600"/>
             </div>
           <div className="flex flex-col">
                <label htmlFor="Address" className="font-bold">Update Address</label>
              <motion.input 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}    
               whileHover={{
                scale:1.015,
                boxShadow:"0px 0px 15px rgba(87, 190, 237, 0.5)"
              }}
              transition={{
                duration:0.4,
                ease:"easeInOut"
              }}
              type="text" id="Addrees" placeholder="Update Address" className="py-4 mt-1 border rounded-xl px-4 outline-none font-bold  border-slate-600" />
           
           </div>
          </div>
          <div className="flex mt-2  w-full">
            <motion.button 
            onClick={EditeHandler}
            whileTap={{
                scale:1.03,
                boxShadow:"0px 0px 25px rgba(237, 228, 228, 0.7)"
            }}
            className="bg-blue-600 font-bold px-4 py-2 rounded-xl cursor-pointer "> Save Changes</motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default EditeManagerDetails;
