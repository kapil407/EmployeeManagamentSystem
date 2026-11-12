import {
  FaUserCircle,
  FaUser,
  FaIdBadge,
  FaCircle,
  FaEdit,
  FaBriefcase,
} from "react-icons/fa";
import SideBar from "./SideBar";

import { motion } from "motion/react";
import { MdLockReset, MdOutlineMail } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCircleUser, FaLeftLong } from "react-icons/fa6";
const TeamEmployeeProfile = () => {
  const { id } = useParams();

const navigate=useNavigate();
  const [empProfileData, setEmpProfileData] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5200/get-team-empprofile/${id}`,
        { withCredentials: true },
      );
      console.log("res in get emp data ", res);
      if (res.data.success) {
        setEmpProfileData(res.data.profileData);
      }
    };
    fetchData();
  }, [id]);
  const joiningDate = new Date(empProfileData?.joiningDate);

const formattedDate = joiningDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}).replace(",", ".");
 
  return (
    <main className="flex justify-between bg-slate-950 text-white h-screen w-screen">
      <SideBar />
      <motion.div
        initial={{
          opacity: 0,
          y: 5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="m-2  min-w-[82%] p-2 "
      >
        <button onClick={()=>navigate('/team-member')} className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer"><FaLeftLong/> Back</button>
        <header className="mt-2 ml-2 flex justify-between items-center">
         
          <div>
            <h1 className="text-4xl font-bold text-cyan-500">Employee Profile</h1>
            <h1>View and manage your personal information.</h1>
          </div>
        </header>
        <motion.div
          whileInView={{
            boxShadow: "0px 0px 20px rgba(241, 236, 236, 0.6)",
          }}
          className="mt-2  flex justify-between  px-2 py-6 rounded-xl bg-center object-cover"
          style={{ backgroundImage: `url(./adminBackground.png)` }}
        >
          <div className="flex items-center gap-8">
            <div className="px-2    relative flex">
              {empProfileData?.profilePicture ? (
                <motion.img
                  whileInView={{
                    boxShadow: "0px 0px 15px rgba(246, 226, 226, 0.6)",
                  }}
                  src={empProfileData?.profilePicture}
                  alt="profile Image"
                  className={`h-48 ${empProfileData.Bio ? "w-64" : "w-48"}  text-blue-400 object-cover border bg-center rounded-full`}
                />
              ) : (
                <FaCircleUser className={` ${empProfileData.Bio?'w-50 h-50':'h-48 w-48'} border-2 p-1 rounded-full text-blue-400 `} />
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-cyan-500">
                  {empProfileData?.name} {empProfileData?.lastName}
                </span>
                <span className="font-semibold px-2 py-1 ml-2 rounded-xl bg-green-600">
                  EMPLOYEE
                </span>
              </div>
              <h1 className="text-gray-300 mt-2 font-bold">
                <span className="text-cyan-400 font-bold">EMP</span> - {empProfileData?.employeeId?.split("-")[1]}
              </h1>
              <p className="font-bold break-lines max-w-[80%]">
                {" "}
              <span className="text-cyan-400"> Bio</span> : {empProfileData?.Bio}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex min-h-[45%] mt-6 rounded-xl gap-4">
          <section className=" rounded-xl min-w-[50%] bg-slate-800 px-3 py-4 ">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold flex items-center gap-2 text-cyan-500">
                <FaUser size={25} /> Personal Information
              </h1>

            
            </div>
            <div className="mt-8 flex justify-between">
              <div className="text-gray-300 flex flex-col gap-3 ml-4 text-xl">
                <span>Full Name </span>
                <span>Gender</span>
                <span>Address</span>
                <span>Phone Number</span>
                <span>Email</span>

                <span>Date of birth</span>
              </div>
              <div className="text-gray-400 flex flex-col text-xl gap-3 mr-12 max-w-[35%]">
                <span>
                  {empProfileData.name} {empProfileData.lastName}
                </span>
                <span>Male</span>
                <span className="break-lines">{empProfileData?.address || 'N/A'}</span>
                <span>{empProfileData?.phone}</span>
                <span>{empProfileData?.email}</span>

                <span>15 Jun. 1999</span>
              </div>
            </div>
          </section>
          <section className=" rounded-xl min-w-[49%] flex gap-2 ">
            <div className="bg-slate-800 w-full px-2 py-4 rounded-xl">
              <h1 className="text-3xl font-bold text-cyan-500 flex items-center gap-2">
                {" "}
                <FaBriefcase /> Professional Information
              </h1>
              <div className="mt-8 w-full flex justify-between ">
                <div className="text-gray-300 flex w-full pl-2 flex-col gap-5 text-xl">
                  <span>EmployeeId </span>
                  <span>Joining Date</span>
                  <span>Department</span>
                  <span>Designation</span>
                  <span>Reporting To </span>
                </div>
                <div className="text-gray-400 flex flex-col  gap-5 text-xl w-full">
                  <span>EMP-{empProfileData?.employeeId?.split("-")[1]}</span>
                  <span>{formattedDate}</span>
                  <span className="break-lines">IT</span>
                  <span>{empProfileData?.designation}</span>
                  <span className="text-blue-600">Manager</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
};
export default TeamEmployeeProfile;
