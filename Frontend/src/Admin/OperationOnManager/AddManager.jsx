import NavBarHandler from "../../Home/PrivateNavbar";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import {
  FaUser,
  FaUserTie,
  FaHome,
  FaChevronRight,
  FaBuilding,
  FaBriefcase,
  FaLock,
  FaSignOutAlt,
  FaCamera,
  FaEdit,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaIdCard,
  FaUserCircle,
  FaKey,
  FaUserShield,
  FaSignInAlt,
  FaCalendarPlus,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addManager, updateManager } from "../../Redux/ManagerSlice.js";
import { toast } from "react-toastify";
import { setDepartment } from "../../Redux/DepartmentSlice.js";


const AddManager = () => {
const Departments=useSelector(store=>store.department.department);

  const [department, setDepartmentName] = useState(""); // ObjectId string
  const [employmentType, setEmploymentType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  console.log(
    department,
    employmentType,
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    designation,
    salary,
    role,
  );

  const CreateManagerHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5200/create-manager",
        {
          name: firstName,
          lastName,
          email,
          password,
          phone: phoneNumber,
          department,
          designation,
          joiningDate,
          salary,
          role,
        },
        {
          withCredentials: true,
        },
      );
      console.log("res in add manager ", res);
      if (res.data.success) {
        dispatch(addManager(res.data.managers));
        toast.success(res.data.message);
        navigate("/all-manager");
      }
    } catch (error) {
      console.log(error);
    }
  };


   

  return (
    <>
      <div className="w-screen h-screen bg-slate-980 ">
        <NavBarHandler />
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-[90%] w-screen  p-2 bg-center overflow-hidden object-cover"
          style={{
            backgroundImage: `url('/adminBackground.png')`,
          }}
        >
          <h1 className="flex font-bold  h-auto  px-2 text-white items-center gap-2 cursor-pointer">
            {" "}
            <FaArrowLeft
              onClick={() => navigate("/all-manager")}
              className=""
              size={20}
            />
            Back to all manager
          </h1>
          <div className="flex items-center gap-2  h-[12%] text-white px-2 rounded-lg">
            <FaUserPlus className="h-12 w-12 p-2 rounded-xl border bg-blue-300 text-blue-600" />
            <div>
              <h1 className=" text-3xl text-cyan-400 font-bold">Create manager</h1>

              <h1>Create a new manager account and assign their details</h1>
            </div>
          </div>
          <div className="h-[86%] rounded-lg bg-slate-900 text-white border-2 border-slate-700 py-1 px-2 flex flex-col justify-evenly">
            <div>
              <div className="flex items-center gap-3 px-2 py-1">
                <FaUser
                  className="w-12 h-12 text-blue-600 bg-blue-300 rounded-xl p-2"
                  size={25}
                />
                <div>
                  <h1 className="font-bold">Personal Information</h1>
                  <h1>Basic details about the manager.</h1>
                </div>
              </div>

              <div className="flex flex-wrap w-screen p-3 gap-4 mt-2">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                  }}
                  className="border py-4 font-bold px-3 w-[30%] border-slate-600 rounded-xl  flex gap-4 
                 items-center"
                >
                  <FaUser size={25} />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter firstName of manager"
                    className="outline-none w-full"
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                  }}
                  className="border py-4 font-bold px-3 w-[30%] border-slate-600 rounded-xl  flex gap-4 
                 items-center"
                >
                  <FaUser size={25} />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter lastName of manager"
                    className="outline-none w-full"
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                  }}
                  className="border py-4 font-bold px-3 w-[30%] border-slate-600 rounded-xl flex gap-4 
                 items-center "
                >
                  <FaEnvelope size={25} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter manager email "
                    className="outline-none w-full"
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                  }}
                  className="border py-4 font-bold px-3 w-[30%] border-slate-600 rounded-xl  flex gap-4 
                 items-center"
                >
                  <FaPhone size={25} />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Phone Number of manager"
                    className="outline-none w-full"
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                  }}
                  className="border py-4 font-bold px-3 w-[30%] border-slate-600  rounded-xl  flex gap-4  items-center"
                >
                  <FaKey size={25} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password of manager "
                    className="outline-none w-full"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-4 border-t pt-4 border-slate-600">
              <div className="flex items-center gap-2 px-2 py-1">
                <FaBriefcase className="w-12 h-12 text-blue-600 bg-blue-300 rounded-xl p-2" />
                <div>
                  <h1 className="font-bold">Work Information</h1>
                  <h1>
                    Assign department, role and other work related details.
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap w-full gap-4 p-3">
                <div className=" font-bold  w-[30%] flex-col flex gap-1">
                  <h1 className="text-start">Select Department</h1>
                  <select
                    value={department}
                    type="text"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 py-4 px-3  text-white outline-none"
                  >
                    <option value="">{department || "Select Department"}</option>
                    {
                    Array.isArray(Departments) && Departments?.map((dept)=>(
                      
                     
                         <option key={dept?._id} value={`${dept?.departmentName}`}>{dept?.departmentName}</option>
                     
                    ))
                   }
                  </select>
                </div>

                <div className=" w-[30%] border-slate-600 rounded-xl flex gap-2 flex-col">
                  <h1 className="font-bold">Select Joining date</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600 rounded-xl flex gap-4 
                 items-center "
                  >
                    <FaEnvelope size={25} />
                    <input
                      type="date"
                      value={joiningDate}
                      onChange={(e) => setJoiningDate(e.target.value)}
                      placeholder="Joining date "
                      className="outline-none w-full "
                    />
                  </motion.div>
                </div>
                <div className=" w-[30%] border-slate-600    flex gap-1 flex-col">
                  <h1 className="font-bold">Manager Designation</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600 rounded-xl  flex gap-4 
                 items-center"
                  >
                    <MdWorkOutline size={25} />
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="Enter Manager Designation"
                      className="outline-none w-full"
                    />
                  </motion.div>
                </div>

                <div className=" w-[30%] border-slate-600  flex gap-1  flex-col">
                  <h1 className="font-bold">Manager Salary</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600  rounded-xl  flex gap-4  items-center"
                  >
                    <FaRupeeSign size={25} />
                    <input
                      type="Number"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="Enter manager salary"
                      className="outline-none w-full"
                    />
                  </motion.div>
                </div>
                <div className=" w-[30%] border-slate-600  flex gap-1  flex-col ">
                  <h1 className="font-bold">Select Employment Typey</h1>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 py-4 px-3 text-white"
                  >
                    <option value="">Select Employment Type</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="PART_TIME">Part-time</option>
                    <option value="INTERN">Intern</option>
                    <option value="CONTRACT">Contract</option>
                  </select>
                </div>
                <div className=" w-[30%] border-slate-600  flex gap-1  flex-col">
                  <h1 className="font-bold">Role</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600  rounded-xl  flex gap-4  items-center"
                  >
                    <FaUser size={25} />
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Enter Role"
                      className="outline-none w-full"
                    />
                  </motion.div>
                </div>
                <div className="flex items-center gap-8 text-end justify-end w-screen">
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => {
                        setDepartment("");
                        setEmploymentType("");
                        setRole("");
                        setFirstName("");
                        setDesignation("");
                        setEmail("");
                        setJoiningDate("");
                        setSalary("");
                        setLastName("");
                        setPassword("");
                        setPhoneNumber("");
                      }}
                      whileTap={{
                        scale: 1.04,
                        boxShadow: "0px 0px 15px rgba(246, 235, 235, 0.6)",
                      }}
                      className="font-bold cursor-pointer hover:bg-red-600 border border-slate-600 px-4 py-1 rounded-xl"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      onClick={CreateManagerHandler}
                      whileTap={{
                        scale: 1.04,
                        boxShadow: "0px 0px 15px rgba(246, 235, 235, 0.6)",
                      }}
                      className="flex items-center gap-2 cursor-pointer  border border-slate-600 px-4 py-1 rounded-xl bg-blue-600 font-bold"
                    >
                      <FaPlusCircle size={25} />
                      Create Manager
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default AddManager;
