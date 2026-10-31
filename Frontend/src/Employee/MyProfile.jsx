// import {  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EmployeeSideBar from "./EmployeeSideBar";
import {
  FaUser,
  FaUserCircle,
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaVenusMars,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaIdCard,
  FaUsers,
 
  FaShieldAlt,
  FaLock,
  FaSignOutAlt,

  FaAddressBook,
} from "react-icons/fa";
import {
  FaIdBadge,
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
  FaUserTie,
  FaClock,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useState } from "react";
import { clearEmployee, updateEmployeeProfileImage } from "../Redux/EmployeeSlice";
import { clearUser } from "../Redux/UserSlice";

const EmpProfile = () => {
  const dispatch = useDispatch();
  const [image,setImage]=useState("")
  const emp = useSelector((store) => store.employee.employee);
  console.log("emp--- ",emp);
  const navigate = useNavigate();

  const ProfileHandler = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      const res = await axios.patch(
        `http://localhost:5200/change-profileImage`,
        formData,
        {
          withCredentials: true,
        },
      );
      console.log("res in emp profile", res);
      if (res.data.success) {
        dispatch(updateEmployeeProfileImage({ _id: emp._id,profilePicture:res?.data?.user?.profilePicture}));
       
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("error in update profile picture in emp ", error);
    }
  };

  const LogOutHandler=async()=>{
    try {
        const res=await axios.post('http://localhost:5200/logout',{},{
            withCredentials:true
        })
        console.log("res ---",res);
        if(res.data.success){
            dispatch(clearEmployee());
            dispatch(clearUser());
            navigate("/login");
            toast.success(res.data.message);
        }
        
        
    } catch (error) {
        console.error("error in logout ",error);
    }
  }
  return (
    <>
      <main className="flex w-screen h-screen">
        <EmployeeSideBar />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-full w-full "
        >
          <main className="bg-slate-800 h-[98%] rounded-xl w-[99%]  m-2 p-2">
            <header className="text-white">
              <motion.div className="flex justify-between px-3 py-1">
                <motion.div>
                  <h1 className="text-3xl font-bold">My Profile</h1>
                  <p className="text-slate-400">
                    Manage your personal information and account security
                  </p>
                </motion.div>

                <button
                  onClick={() => navigate("/edite-profile")}
                  className="w-fit cursor-pointer h-fit py-1 flex items-center gap-3 border border-slate-600 bg-blue-600 px-6 font-bold  rounded-xl"
                >
                  <FaEdit />
                  Edite{" "}
                </button>
              </motion.div>
              <motion.div
                whileInView={{
                  boxShadow: "0px 0px 10px rgba(244, 239, 239, 0.5)",
                }}
                className="bg-slate-700 px-2 py-3 mt-1 mb-1 rounded-xl object-cover bg-center flex items-center gap-8"
                style={{ backgroundImage: `url(./adminBackground.png)` }}
              >
                <motion.div className="relative flex">
                  {emp?.profilePicture ? (
                    <motion.img 
                    whileInView={{
                        boxShadow:"0px 0px 15px rgba(248, 242, 242, 0.6)"
                    }}
                    src={emp?.profilePicture} alt=""  className="ml-8 border-4 w-59 h-45 object-cover bg-center rounded-full " />
                  ) : (
                    <FaUserCircle
                      size={179}
                      className="ml-8 border-4 rounded-full "
                    />
                  )}
                  <label htmlFor="file" className="absolute ml-47 mt-26">
                    <FaCamera size={27} className="text-slate-300" />
                  </label>
                  <input
                    type="file"
                    hidden
                    id="file"
                    onChange={(e) => ProfileHandler(e)}
                  />
                </motion.div>
                <motion.div className="space-y-2">
                  <motion.div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-cyan-400">
                      {emp?.name} {emp?.lastName}
                    </h1>
                    <span className="border px-2 border-green-800 rounded-xl bg-green-200 text-green-800 font-bold">
                      {emp?.role}
                    </span>
                  </motion.div>
                  <h1 className="font-bold">{emp?.designation} </h1>
                  <h1 className="font-bold">
                    EMP-{emp?.employeeId?.split("-")[1]}
                  </h1>
                  
                  <p className="font-bold breaks-lines w-[80%]">{emp?.Bio}</p>
                </motion.div>
              </motion.div>
            </header>
            <main className="w-full  my-2 mx-1 flex gap-2 flex-wrap">
              <section className="text-white  w-[49.5%] bg-slate-700 rounded-xl px-2 py-3 ">
                <h1 className="text-xl flex items-center gap-2 font-bold text-blue-400">
                  {" "}
                  <FaUser />
                  Personal Information
                </h1>

                <motion.div className="flex justify-evenly gap-8 font-bold">
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4 text-slate-300 ">
                    <span  className="flex items-center gap-2 "><FaUser className="text-blue-400"/> Full Name </span>
                    <span className="flex items-center gap-2"><FaVenusMars className="text-pink-400"/> Gender</span>
                    <span className="flex items-center gap-2"><FaBirthdayCake className="text-purple-400"/> Date Of Birth</span>
                    <span className="flex items-center gap-2"><FaPhone className="text-green-400"/> Phone Number</span>
                    <span className="flex items-center gap-2"><FaEnvelope className="text-cyan-400"/> Email</span>
                    <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-orange-400" /> Address</span>
                  </motion.div>
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4">
                    <span>
                      {emp?.name} {emp?.lastName}
                    </span>
                    <span>{emp?.gender}</span>

                    <span>
                      {emp?.dateOfBirth
                        ? new Date(emp.joiningDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                    <span>+91 {emp?.phone}</span>
                    <span>{emp?.email} </span>
                    <span>{emp?.address}</span>
                  </motion.div>
                </motion.div>
              </section>
              <section className="text-white  w-[49.5%] bg-slate-700 p-2  font-bold rounded-xl">
                <h1 className="text-xl flex items-center gap-2 text-blue-400">
                  {" "}
                  <FaBriefcase /> Professional Information
                </h1>
                <motion.div className="flex justify-evenly gap-8 ">
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4 text-slate-300">
                    <span className="flex items-center gap-2 "> <FaIdBadge className="text-blue-400" />EmployeeId </span>
                    <span className="flex items-center gap-2 "> <FaBuilding className="text-purple-400" />Department</span>
                    <span className="flex items-center gap-2 "> <FaBriefcase className="text-cyan-400" />Designation</span>
                    <span className="flex items-center gap-2 "> <FaCalendarAlt className="text-green-400" />Joining date</span>
                    <span className="flex items-center gap-2 "> <FaUserTie className="text-yellow-400" />Manager Name</span>
                    <span className="flex items-center gap-2 "> <FaClock className="text-orange-400" />Work Type</span>
                  </motion.div>
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4">
                    <span>EMP-{emp?.employeeId?.split("-")[1]}</span>
                    <span>{emp?.departmentName}</span>
                    <span>{emp?.designation}</span>
                    <span>
                      {emp?.joiningDate
                        ? new Date(emp.joiningDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                    <span>{emp?.managerName}</span>
                    <span>{emp?.employmentType}</span>
                  </motion.div>
                </motion.div>
              </section>
              <section className="text-white w-[99.5%] rounded-xl bg-slate-700 p-2">
                <h1 className="text-xl  font-bold flex items-center gap-2">
                  <FaShieldAlt
                    size={35}
                    className="text-red-600 bg-red-300 p-2 rounded-xl"
                  />{" "}
                  <span className="text-blue-400">Account & Security</span>
                </h1>
                <motion.div className="mt-6 flex gap-4 py-2">
                  <motion.div className="flex items-center gap-3 border bg-slate-600 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]">
                    <FaEnvelope size={25} className="text-blue-400" />
                    <motion.div className="flex flex-col font-bold">
                      <span>Change Email</span>
                      <span className="text-xs text-slate-300">
                        Update your email address
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.div className="flex items-center gap-3 border bg-slate-600 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]">
                    <FaLock size={25} className="text-blue-400" />
                    <motion.div className="flex flex-col font-bold">
                      <span>Change Password</span>
                      <span className="text-xs text-slate-300">
                        Update your password
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                  onClick={LogOutHandler}
                  className="flex items-center gap-3 border bg-slate-600 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]">
                    <FaSignOutAlt size={25} className="text-red-400" />
                    <motion.div className="flex flex-col  font-bold">
                      <span>Logout</span>
                      <span className="text-xs text-slate-300">
                        Sign Out from this device
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </section>
            </main>
          </main>
        </motion.div>
      </main>
    </>
  );
};
export default EmpProfile;
