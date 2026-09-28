import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import Dashboard from "./Dashboard";

const NavBarHandler = () => {
    const [ShowDashboard, setShowDashoboard]=useState(false);
  return (
    <>
      <div className="w-screen ">
        <div className="flex  items-center justify-between bg-slate-800">
          <Link to="/" className="ml-2 pt-2 pb-2 object-cover">
            <img
              src={`./Logo.png`}
              alt="logo"
              className="h-15 w-15 object-cover rounded"
            />
          </Link>
        <div className="relative  bg-[#0F1B2D] hover:bg-[#243B5A] text-white  h-full  rounded-md font-semibold  transition">
           <button 
                onMouseEnter={()=>setShowDashoboard(true)}
              
              
            className="  bg-[#0F1B2D] hover:bg-[#243B5A] text-white px-10 py-2.5 rounded-md font-semibold  transition"
          >
            Dashboard
           
          </button>
           {ShowDashboard &&(
               <div className="absolute  z-50  mt-7 "
                onMouseLeave={() => setShowDashoboard(false)} >
                  <Dashboard setShowDashoboard={setShowDashoboard}/> 
               </div>
            )}
        </div>
          <button
            className=" bg-[#0F1B2D] hover:bg-[#243B5A] text-white px-10 py-2.5 rounded-md font-semibold  transition"
          >
            Employee
          </button>
          <button
            className=" bg-[#0F1B2D] hover:bg-[#243B5A] text-white px-10 py-2.5 rounded-md font-semibold  transition"
          >
            Tasks
          </button>
          <button
            className=" bg-[#0F1B2D] hover:bg-[#243B5A] text-white px-10 py-2.5 rounded-md font-semibold  transition"
          >
            Leave
          </button>
           <button
            className=" text-white rounded-md font-semibold cursor-pointer  transition"
          >
           <IoNotifications size={25} className=" text-red-500 object-cover" />
          </button>
           <button
            className=" text-white mr-4 rounded-md font-semibold cursor-pointer transition"
          >
          <IoPerson className="text-blue-500 text-2xl" />
          </button>
         
         
        </div>
      </div>
    </>
  );
};
export default NavBarHandler;
