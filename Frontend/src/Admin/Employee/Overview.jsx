
import {
  FaArrowLeft,
  FaUserCircle,
  FaCircle,
  FaEdit,
  FaTrash,
  FaUser,
  FaUsers,
  FaShieldAlt 
} from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaBuilding 
} from "react-icons/fa";
import { FaRupeeSign,FaEye  } from "react-icons/fa";
import { FiActivity, FiCalendar, FiFileText } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import {
  LuClipboardCheck,
  LuChartNoAxesColumnIncreasing,
} from "react-icons/lu";
import { motion } from "motion/react";
import { useState } from "react";
const EmployeeOver=()=>{
    return(
        <> 
        
     
                <div className="w-screen h-full ">
                     <div className="w-full bg-slate-950 h-[32%] flex gap-2">
              <div className="w-[50%] border pb-3 rounded-xl  text-white m-1 border-slate-600 bg-slate-800">
                <div className="">
                  <div className="flex justify-between items-center px-4 p-2 ">
                    <div className="flex items-center gap-2 text-white">
                      <FaUser size={25} className="text-blue-800" />
                      <h1 className="font-bold text-xl">
                        Personbal Information
                      </h1>
                    </div>

                    <div className="font-bold border px-4 cursor-pointer py-1 flex gap-3 text-blue-600 rounded-xl ">
                      <FaEdit size={20} />
                      <h1>Edite</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly  px-2 pb-2 font-semibold  w-full">
                  <div className="text-gray-400 flex flex-col gap-2">
                    <h1>FullName</h1>
                    <h1>Email Address </h1>
                    <h1>Phone Number</h1>
                    <h1>Address</h1>
                  </div>
                  <div className="text-white flex flex-col gap-2 ">
                    <h1>kapil kumar</h1>
                    <h1>kapil@gmail.com</h1>
                    <h1>9717828288</h1>
                    <h1>Hapur Uttar Pardesh</h1>
                  </div>
                </div>
              </div>
              <div className="border w-[50%] text-white m-1 rounded-xl border-slate-600 px-2 py-1 bg-slate-800">
                <div className="">
                  <div className="flex justify-between items-center px-4 pt-1 ">
                    <div className="flex items-center gap-2 text-white">
                      <FaCalendarAlt size={25} className="text-blue-800" />
                      <h1 className="font-bold text-xl">
                        Employee Information
                      </h1>
                    </div>

                    <div className="font-bold border  border-slate-600 text-blue-600 px-4 cursor-pointer py-1 flex gap-3  rounded-xl ">
                      <FaEdit size={20} />
                      <h1>Edite</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly  px-2 pb-2 font-semibold  w-full">
                  <div className="text-gray-400 flex flex-col gap-0.3">
                    <h1>EmployeeId</h1>
                    <h1>Role</h1>
                    <h1>Department</h1>
                    <h1>Desination</h1>
                    <h1>Manager</h1>
                    <h1>Joining Date</h1>
                    <h1>Status</h1>
                  </div>
                  <div className="text-white flex flex-col  ">
                    <h1>kapil2026</h1>
                    <h1>Employee</h1>
                    <h1>Software developer</h1>
                    <h1>IT</h1>
                    <h1>Amit Kumar</h1>
                    <h1>02 Oct 2026</h1>
                    <span className="border px-2  font-semibold  rounded-lg bg-green-400 text-green-800 flex items-center gap-1">
                      <FaCircle size={10} />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-950 h-[30%] flex gap-2 p-1 my-2  rounded-xl ">
              <div className="w-[50%] bg-slate-800 rounded-xl">
                <div className="">
                  <div className="flex justify-between items-center px-4 pt-1 ">
                    <div className="flex items-center gap-2 text-white">
                      <FaRupeeSign size={25} className="text-blue-800" />
                      <h1 className="font-bold text-xl">
                        {" "}
                        Compansastion Details
                      </h1>
                    </div>

                    <div className="font-bold border px-4 cursor-pointer py-1 flex gap-3 text-blue-600 rounded-xl ">
                      <FaEdit size={20} />
                      <h1>Edite</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="text-gray-400 flex flex-col gap-2">
                    <h1>Salary(Annual)</h1>
                    <h1>Gross Salary(Monthly)</h1>
                    <h1>Salary(Monthly)</h1>
                    <h1>Bank Account</h1>
                  </div>
                  <div className="text-white flex flex-col gap-2 ">
                    <h1>4,50,000</h1>
                    <h1>37,500</h1>
                    <h1>30,000</h1>
                    <h1>******2569</h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] bg-slate-900 rounded-xl gap-2 flex flex-col">
                <div className="h-[50%]  pl-6 bg-slate-800 text-white rounded-xl">
                  <div className="flex items-center gap-2 text-white ">
                    <FaUsers size={25} className="text-blue-800" />
                    <h1 className="font-bold text-xl">Manager Information</h1>
                  </div>
                  <div className="flex gap-4  items-center justify-between">
                   <div className="flex gap-4 items-center justify-between">
                     <FaUserCircle
                      style={{
                        boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                      }}
                      className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                    />
                   <div className="flex flex-col">
                     <div className="flex gap-4">
                      <h1 className="font-bold text-xl">kapil</h1>
                      <h1 className="font-bold  border border-slate-400 bg-slate-600 rounded-xl px-1 ">Manager</h1>
                    </div>
                    <h1 className="flex items-center gap-4">
                      <FaEnvelope/>
                      <span>kapil@gmail.com</span>
                      <FaPhone/>
                      <span>9717828288</span>
                    </h1>
                   </div>
                   </div>
                   <button className="border border-slate-600 px-1 mr-2 rounded-xl  flex items-center gap-2 text-blue-400">
                    <FaEye />
                    View Profile</button>
                  </div>
                </div>
                <div className="h-[50%] bg-slate-800  rounded-xl text-white px-2 py-1">
                      <div className="flex items-center gap-2">
                        <FaBuilding />
                        <h1>  Department details</h1>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-6">
                          <h1 className="border rounded-full h-10 text-center flex items-center justify-center bg-blue-600 text-lg w-10">IT</h1>
                            <div>
                             <h1> Engineering(IT)</h1>
                             <h1>Technology & Development</h1>
                            </div>
                        </div>
                       <div>
                         <button className="border border-slate-600 px-2 py-1 mr-2 rounded-xl  flex items-center gap-2 text-blue-400">
                    <FaEye />
                    View Department </button>
                
                       </div>
                      </div>
                
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-950 h-[10%] flex  gap-2 ">
              <div className="w-[50%] bg-slate-800 px-2 py-0.3 rounded-xl">
                 <div className="flex items-center gap-2 text-white">
                        <FaBuilding className="text-blue-600 " size={20}/>
                        <h1 className="font-bold">   Account Information</h1>
                      </div>
                     <div className="flex ml-5 gap-8">
                       <div className="text-gray-400">
                       <h1> Account Created</h1>
                       <h1>Last Updated</h1>
                      </div>
                      <div className="text-white">
                       <h1> 05 Oct 2026 11:30 AM</h1>
                       <h1>05 Aug 2026 11:30 AM</h1>
                      </div>
                     </div>
               </div>
              <div className="w-[50%] bg-slate-800 px-2 py-0.3 text-white rounded-xl">
                <div className="flex items-center gap-2 ">
                        <FaShieldAlt className="text-blue-600 " size={20}/>
                        <h1 className="font-bold">   Security Information</h1>
                      </div>
                      <div className="flex ml-5 gap-8">
                       <div className="text-gray-400">
                       <h1>Acive Refresh Token</h1>
                       <h1>Last Login</h1>
                      </div>
                      <div className="text-white">
                       <h1> 3</h1>
                       <h1>05 Aug 2026 11:30 AM</h1>
                      </div>
                     </div>
               </div>
                </div>
            
        </div>
        </>
    )
}
export default EmployeeOver;