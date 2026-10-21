import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

const NavBarHandler = () => {
    const navigate=useNavigate();
    const location=useLocation();
  return (
    <>
      <div className="w-screen h-[10%] ">
        <div className="flex  items-center h-full justify-between bg-slate-800">
          <Link to="/" className="ml-2 pt-2 pb-2 object-cover">
            <img
              src={`./Logo.png`}
              alt="logo"
              className="h-15 w-20 object-cover rounded-lg"
            />
          </Link>
             <button  
            onClick={()=>navigate('/')}
            className="text-white relative px-2 cursor-pointer py-2.5 rounded-md  font-semibold   cursor-pointer">
              Dashboard
              {
                location.pathname==='/' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0   mt-2.5 h-[2px] bg-white" layoutId="underline"/>

                  
                )
              }
            </button>
            <button  
            onClick={()=>navigate('/all-employee')}
            className="text-white relative px-2 cursor-pointer py-2.5 rounded-md  font-semibold   cursor-pointer">
              Employees
              {
                location.pathname==='/all-employee' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0   mt-2.5 h-[2px] bg-white" layoutId="underline"/>

                  
                )
              }
            </button>
        
          <motion.button
            onClick={()=>navigate('/all-manager')}
            className="  text-white relative px-2 cursor-pointer py-2.5 rounded-md font-semibold  "
          >
            Manager
               {
                location.pathname==='/all-manager' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0  mt-2.5 h-[2px] bg-white " layoutId="underline"/>

                  
                )
              }
          </motion.button>
          <motion.button
            onClick={()=>navigate('/all-department')}
            className="   text-white px-2 cursor-pointer relative py-2.5 rounded-md font-semibold  "
          >
            Department
               {
                location.pathname==='/all-department' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0  mt-2.5 h-[2px] bg-white " layoutId="underline"/>

                  
                )
              }
          </motion.button>
          <motion.button
              onClick={()=>navigate('/report')}
            className="    text-white px-2 cursor-pointer relative py-2.5 rounded-md font-semibold  "
          >
            Report
               {
                location.pathname==='/report' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0  mt-2.5 h-[2px] bg-white " layoutId="underline"/>

                  
                )
              }
          </motion.button>
          <motion.button
              onClick={()=>navigate('/admin-notification')}
            className=" text-white rounded-md font-semibold relative cursor-pointer  "
          >
            <IoNotifications size={25} className=" text-red-500 object-cover" />
               {
                location.pathname==='/admin-notification' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0  mt-2.5 h-[2px] bg-red-600 " layoutId="underline"/>

                  
                )
              }
          </motion.button>
        
            <motion.button
              onClick={()=>navigate('/admin-profile')}
            className=" text-white mr-4 rounded-md font-semibold cursor-pointer relative "
          >
            <IoPerson className="text-blue-500 text-2xl" />
               {
                location.pathname==='/admin-profile' && (
                  <motion.div className="absolute left-0 right-0 -buttom-0  mt-2.5 h-[2px] bg-blue-600 " layoutId="underline"/>

                  
                )
              }
          </motion.button>
         
        </div>
      </div>
    </>
  );
};
export default NavBarHandler;
