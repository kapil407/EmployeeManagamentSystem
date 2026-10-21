import NavBarHandler from "../../Home/PrivateNavbar.jsx";
import { easeOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Footer from "../../LandingPages/Footer.jsx";
import { FaEye, FaSearch, FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeInvalidDepartments } from "../../Redux/DepartmentSlice.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const AllDepartment = () => {

const deptData=useSelector(store=>store.department.department);
console.log("dpetData ",deptData);
  const navigate = useNavigate();
 const managerData=useSelector(store=>store.manager.manager);

console.log("manager data ",managerData);
      let cnt=0;
  return (
    <div className="w-screen h-screen">
      <NavBarHandler />
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="text-white  w-screen p-2 flex flex-col h-[76%] gap-2 items-center bg-slate-950"
      >
        <div className="flex justify-between w-screen items-center text-center">
          <div className="w-[33%]"></div>
          <h1 className="mt-1 text-2xl font-bold w-[33%]">All Department</h1>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(134, 213, 232, 0.4)",
            }}
            className="px-4 py-2 flex items-center gap-4 mr-4 font-bold rounded-lg border-slate-700 bg-slate-800 border outline-none w-[33%]"
          >
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="Search Department "
              className=" font-black rounded-lg  outline-none w-full px-2"
            />
          </motion.div>
        </div>
        <motion.div className="flex w-full">
          <motion.button
          onClick={()=>navigate('/add-department')}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="mb-2 border font-bold  border-slate-600 px-2 py-1 rounded-lg cursor-pointer"
          >
            <span className="text-xl ">+</span> Add New Department
          </motion.button>
        </motion.div>
        <motion.div className="flex   p-2  flex-wrap gap-8 w-full max-h-full overflow-y-auto custom-scrollbar">
          {/* {employee profile card} */}

          {Array.isArray(deptData) && deptData?.map((dept) => {
           
              cnt++;
            return (
              <>
                <motion.div
                key={dept?._id}
               
                 whileInView={
                   cnt>6 ?{
                        opacity:1,y:0
                    }:undefined
                 }
                    initial={
                        cnt>6 ?{
                            opacity:0,y:20
                            }:undefined
                    }
                    transition={
                       cnt>6 ?{
                            duration:0.8
                    }:undefined}

                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
                  }}
                  className="rounded-lg border-l   border-r border-slate-600 p-4  w-[32%] h-auto"
                >
                 <div className="flex items-center justify-between">
                   <h1 className="font-black text-2xl text-cyan-600 mb-2">{dept?.departmentName}</h1>
                  <motion.button
                  onClick={()=>navigate(`/dept-details/${dept._id}`)}
                  whileHover={{
                    scale:1.03,
                    boxShadow:"0px 0px 20px rgba(140, 225, 240, 0.7)"
                  }}
                  className="flex items-center gap-3 px-2 py-1 rounded-xl cursor-pointer">
                     <FaEye/>
                   <span>View</span>
                  </motion.button>
                 </div>

                  <motion.div className="font-semibold flex flex-col gap-2">
                    <h1>
                     <span className="text-gray-400"> DeparmentCode:</span> <span>{dept?.departmentCode}</span>
                    </h1>
                    {
                      dept.manager ? 
                    <h1 ><span className="text-gray-400">MANAGER :</span> <span className="text-xl font-black">{dept?.manager?.name } {dept?.manager?.lastName}</span> </h1> :<h1><span className="text-gray-400">MANAGER :</span> <span className="text-xl font-black">Not Assigned</span> </h1>
          }
                    <h1 className="text-gray-400">{dept?.description}</h1>
                  
                  </motion.div>
                 
                
                </motion.div>
              </>
            );
          })}

        
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};
export default AllDepartment ;
