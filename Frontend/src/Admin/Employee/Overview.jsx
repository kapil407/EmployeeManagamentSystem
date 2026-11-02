import {
  FaArrowLeft,
  FaUserCircle,
  FaCircle,
  FaEdit,
  FaTrash,
  FaUser,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";
import { FaRupeeSign, FaEye } from "react-icons/fa";
import { FiActivity, FiCalendar, FiFileText } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import {
  LuClipboardCheck,
  LuChartNoAxesColumnIncreasing,
} from "react-icons/lu";
import { motion } from "motion/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmpProfile } from "../../Redux/EmployeeSlice";
// import { managers } from "../../data";

const EmployeeOver = ({ empProfile }) => {
  const navigate = useNavigate();
  console.log(empProfile)
 


  const AccountCreateddate = new Date(empProfile?.createdAt);
  const AccountUpdate=new Date(empProfile?.updatedAt);

   
const formattedAccountUpdateDate = AccountUpdate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
});

const formattedAccountCreatedDate = AccountCreateddate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
});




console.log(formattedAccountCreatedDate);

  return (
    <>
      <div className="w-screen h-full ">
        <div className="w-full bg-slate-950 h-[32%] px-1 flex ">
          <div className="w-[50%] border pb-3 rounded-xl  text-white my-1 mx-1 border-slate-600 bg-slate-800">
            <div className="">
              <div className="flex justify-between items-center px-4 p-2 ">
                <div className="flex items-center gap-2 text-white">
                  <FaUser size={25} className="text-blue-800" />
                  <h1 className="font-bold text-xl text-cyan-500">
                    Personal Information
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly  px-2 pb-2 font-semibold  w-full">
              <div className="text-gray-400 flex flex-col gap-2">
                <h1>FullName</h1>
                <h1>Email Address </h1>
                <h1>Phone Number</h1>
                <h1>Address</h1>
                <h1>Bank Account</h1>
              </div>
              <div className="text-white flex flex-col gap-2 ">
                <h1>
                  {empProfile?.name} {empProfile?.lastName}
                </h1>
                <h1>{empProfile?.email}</h1>
                <h1>{empProfile?.phone}</h1>
                <h1>{empProfile?.address || "Not Mention"}</h1>
                <h1>{empProfile?.account || "Not Mention"}</h1>
              </div>
            </div>
          </div>
          <div className="border w-[50%] text-white m-1 rounded-xl border-slate-600 px-2 py-1 bg-slate-800">
            <div className="">
              <div className="flex justify-between items-center px-4 pt-1 ">
                <div className="flex items-center gap-2 text-white">
                  <FaCalendarAlt size={25} className="text-blue-800" />
                  <h1 className="font-bold text-xl text-cyan-500">
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
              <div className="text-gray-400 flex flex-col ">
                <h1>EmployeeId</h1>
                <h1>Role</h1>
                <h1>Department</h1>
                <h1>Desination</h1>
                <h1>Manager</h1>
                <h1>Joining Date</h1>
                <h1>Status</h1>
              </div>
              <div className="text-white flex flex-col  ">
                <h1>EMP-{empProfile?.employeeId?.split("-")[1]}</h1>
                <h1>{empProfile?.role}</h1>
                <h1>{empProfile?.departmentName}</h1>
                <h1>{empProfile?.designation}</h1>
                <h1>{empProfile?.managerName}</h1>
                <h1>{formattedAccountCreatedDate}</h1>
                <span className="border px-2  font-semibold  rounded-lg bg-green-400 text-green-800 flex items-center gap-1 w-fit">
                  <FaCircle size={10} />
                  {empProfile?.status}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-950  flex gap-2  px-2 py-1   rounded-xl ">
          <div className="w-[50%] bg-slate-800 rounded-xl h-auto py-2">
            <div className="">
              <div className="flex justify-between items-center px-4 pt-1 ">
                <div className="flex items-center gap-2 text-white">
                  <FaRupeeSign size={25} className="text-blue-800" />
                  <h1 className="font-bold text-xl text-cyan-500">
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
              </div>
              <div className="text-white flex flex-col gap-2 ">
                <h1>4,50,000</h1>
                <h1>37,500</h1>
                <h1>30,000</h1>
              </div>
            </div>
          </div>
          <div className="w-[50%]  rounded-xl gap-1 flex flex-col">
            <div className="h-[50%]  pl-6 bg-slate-800 text-white rounded-xl">
              <div className="flex items-center gap-2 text-white ">
                <FaUsers size={25} className="text-blue-800" />
                <h1 className="font-bold text-xl text-cyan-500">
                  Manager Information
                </h1>
              </div>
              <div className="flex gap-4 py-1.5 items-center justify-between">
                <div className="flex gap-4 items-center justify-between">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-10 h-10 border-2 border-gray-400 rounded-full  "
                  />
                  <div className="flex flex-col">
                    <div className="flex gap-4">
                      <h1 className="font-bold text-xl">
                        {empProfile?.managerName}
                      </h1>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    navigate(`/manager-profile/${empProfile?.manager}`)
                  }
                  className="border border-slate-600 px-1 mr-2 rounded-xl  flex items-center gap-2 text-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  <FaEye />
                  View Profile
                </button>
              </div>
            </div>
            <div className="h-[50%] bg-slate-800  rounded-xl text-white px-2 py-1">
              <div className="flex items-center gap-2 ">
                <FaBuilding className="text-blue-600" />
                <h1 className="text-cyan-500 font-bold"> Department details</h1>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-6 mt-1 ml-6">
                  <h1 className="border rounded-full h-8 text-center flex items-center justify-center bg-blue-600 text-lg w-8">
                    IT
                  </h1>
                  <div>
                    <h1 className="font-bold">{empProfile?.departmentName}</h1>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() =>
                      navigate(`/dept-details/${empProfile?.department}`)
                    }
                    className="border border-slate-600 px-2 py-1 mr-2 rounded-xl  flex items-center gap-2 text-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    <FaEye />
                    View Department{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-950  flex  gap-2 px-2">
          <div className="w-[50%] bg-slate-800 px-2 py-2.5 rounded-xl">
            <div className="flex items-center gap-2 text-white">
              <FaBuilding className="text-blue-600 " size={20} />
              <h1 className="font-bold text-cyan-500"> Account Information</h1>
            </div>
            <div className="flex ml-5 gap-8 ">
              <div className="text-gray-400 mt-2">
                <h1> Account Created</h1>
                <h1>Last Updated</h1>
              </div>
              <div className="text-white mt-2">
                <h1> {formattedAccountCreatedDate }</h1>
                <h1>{formattedAccountUpdateDate}</h1>
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-slate-800 px-2 py-2.5 text-white rounded-xl">
            <div className="flex items-center gap-2 ">
              <FaShieldAlt className="text-blue-600 " size={20} />
              <h1 className="font-bold text-cyan-500"> Security Information</h1>
            </div>
            <div className="flex ml-5 gap-8">
              <div className="text-gray-400 mt-2">
                <h1>Acive Refresh Token</h1>
                <h1>Last Login</h1>
              </div>
              <div className="text-white mt-2">
                <h1>{EmpProfile?.refreshTokens?.length ||"0"}</h1>
                <h1>05 Aug 2026 11:30 AM</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeOver;
