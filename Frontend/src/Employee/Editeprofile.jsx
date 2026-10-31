import { FaLeftLong } from "react-icons/fa6";
import EmployeeSideBar from "./EmployeeSideBar";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../Redux/EmployeeSlice";

const EditeEmpProfile=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
  
    const [address,setAddress]=useState("");
    const [bio,setBio]=useState("");
    const [phone,setPhone]=useState("")


    const SaveChangesHandler=async()=>{
        try {
            const res=await axios.patch(`http://localhost:5200/update-myProfile`,{name,lastName,address,Bio:bio,phone},{
                withCredentials:true
            })
            console.log("res ",res);
            if(res.data.success){
               
                dispatch(updateEmployee(res.data.updateMyProfile));
                navigate('/my-profile');
                 toast.success(res.data.message);
            }
        } catch (error) {
            console.log("res of edite emp",error)
        }
    }
    return<>
    <motion.main className="flex w-screen h-screen ">
        <EmployeeSideBar/>
        <motion.div 
        initial={{
            opacity:0,y:0
        }}
        whileInView={{
            opacity:1,y:0
        }}
        transition={{
            duration:0.4
        }}
        className="w-[99%] h-[98%] rounded-xl bg-slate-800 m-2 text-white p-2">
            <button className="flex items-center gap-2 cursor-pointer hover:text-cyan-400" onClick={()=>navigate('/my-profile')}><FaLeftLong/>Back  </button>
             <motion.main 
             
             className="w-full h-[97%]  flex items-center justify-center">
               <motion.div 
               whileInView={{
                boxShadow:"0px 0px 15px rgba(238, 226, 226, 0.5)"
               }}
               className="w-[70%] h-[70%] rounded-xl p-2 bg-white/5">
                 <h1 className="text-center text-2xl text-cyan-400 font-bold">Edite your profile</h1>
                 <motion.div className="flex flex-col gap-6 mt-6 w-[80%] items-center justify-center font-bold">
                    <motion.input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    whileHover={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(227, 218, 218, 0.3)"
                    }}
                    transition={{
                        duration:.5
                    }}
                    type="text" placeholder="Enter FirstName"  className="w-[70%] ml-50 border-slate-600 outline-none border px-2 py-3 rounded-xl"/>
                     <motion.input 
                     value={lastName}
                     onChange={(e)=>setLastName(e.target.value)}
                     whileHover={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(227, 218, 218, 0.3)"
                    }}
                    transition={{
                        duration:.5
                    }}
                     type="text" placeholder="Enter lastName"  className="w-[70%] ml-50 border-slate-600 outline-none border px-2 py-3 rounded-xl"/>
                      
                       <motion.input 
                       value={phone}
                       onChange={(e)=>setPhone(e.target.value)}
                       whileHover={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(227, 218, 218, 0.3)"
                    }}
                    transition={{
                        duration:.5
                    }}
                       type="Number" placeholder="Enter Phone Number" className="w-[70%] ml-50 border-slate-600 outline-none border px-2 py-3 rounded-xl" />
                        <motion.input 
                        value={address}
                        onChange={e=>setAddress(e.target.value)}
                        whileHover={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(227, 218, 218, 0.3)"
                    }}
                    transition={{
                        duration:.5
                    }}
                        type="text" placeholder="Enter Address"  className="w-[70%] ml-50 border-slate-600 outline-none border px-2 py-3 rounded-xl"/>
                         <motion.textarea 
                         value={bio}
                         onChange={e=>setBio(e.target.value)}
                          whileHover={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(227, 218, 218, 0.3)"
                    }}
                    transition={{
                        duration:.5
                    }}
                         type="text" placeholder="Enter Bio" className="w-[70%] ml-50 border-slate-600 outline-none border px-2 py-3 rounded-xl" />
                 </motion.div>
                <motion.div className="w-full items-center flex justify-center">
                     <motion.button 
                     onClick={SaveChangesHandler}
                     whileTap={{
                        scale:1.03,
                        boxShadow:"0px 0px 10px rgba(31, 234, 234, 0.5)"
                     }} className="bg-green-800 cursor-pointer rounded-xl font-bold w-fit py-1.5 px-2  mt-6">Save Changes</motion.button>
                </motion.div>
               </motion.div>
            </motion.main>
        </motion.div>
    </motion.main>
    </>
}
export default EditeEmpProfile;