import { useState } from "react";
import EmployeeSideBar from "./EmployeeSideBar";
import { motion } from "motion/react";
import { FaLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../Redux/EmployeeSlice";
import { toast } from "react-toastify";
const UpdateEmpEmail=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
     const [focusedInput, setFocusedInput] = useState(null);
    const [email,setEmail]=useState("");
     
     const ChangeEmailHandler=async()=>{
        try {
            const res=await axios.patch('http://localhost:5200/change-email',{
                    email
            },{withCredentials:true})
            console.log("res in change emp email",res);
            if(res.data.success){
                dispatch(updateEmployee(res.data.user));
                toast.success(res.data.message);
                navigate('/my-profile');
            }
             
        } catch (error) {
            console.error("error in change password",error);
        }
     }
    return<>
   <main className="flex w-screen h-screen text-white">
    <EmployeeSideBar/>
    
    <div className="bg-slate-900 m-2 w-[99%] h-[98%] rounded-xl flex items-center justify-center">
        
        <motion.div 
        whileInView={{
            boxShadow:"0px 0px 15px rgba(240, 234, 234, 0.6)"
        }}
        className="w-[40%] rounded-xl p-2 h-[40%] bg-slate-800">
          
            <h1 className="text-xl font-bold text-center">Update Email Address</h1>
            <div className="flex items-center justify-center h-[50%]">
                <motion.input 
                 animate={{
                    scale: focusedInput == "email" ? 1.01 : 1,
                    boxShadow:
                      focusedInput == "email"
                        ? "0px 0px 15px rgba(55, 162, 233, 0.6)"
                        : "",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  onChange={e=>setEmail(e.target.value)}
               value={email}
                type="email" placeholder="Enter your new email " className="outline-none border border-slate-600 hover:border-cyan-400 px-2 py-3 font-bold w-[80%] rounded-xl"/>
            </div>
           <div className="w-full space-x-10 text-center">
             <motion.button 
             onClick={()=>navigate("/my-profile")}
             whileTap={{
                scale:1.02
             }}
             className="text-center bg-red-600 px-2 py-2 rounded-xl font-bold cursor-pointer">Cancel Changes </motion.button>
             <motion.button 
             onClick={ChangeEmailHandler}
             whileTap={{
                scale:1.02
             }}
             className="text-center bg-green-600 px-2 py-2 rounded-xl font-bold cursor-pointer">Save Changes </motion.button>
             
           </div>
        </motion.div>
    </div>
   </main>
    </>
}
export default UpdateEmpEmail;