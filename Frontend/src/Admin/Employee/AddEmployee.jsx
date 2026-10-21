import NavBarHandler from "../../Home/PrivateNavbar.jsx";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import {
  FaUser,FaUserTie,FaHome, FaChevronRight,FaBuilding,FaBriefcase,FaLock,FaSignOutAlt,FaCamera,FaEdit,FaPhone,FaEnvelope,FaCalendarAlt,FaIdCard, FaUserCircle, FaKey, FaUserShield, FaSignInAlt, FaCalendarPlus, FaArrowLeft,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useDispatch } from "react-redux";
import {setUser} from '../../Redux/UserSlice.js'

const AddEmployee = () => {

  const [openManagerDropdown, setOpenManagerDropdown] = useState(false);
  const [openDeptDropdown, setOpenDeptDropdown] = useState(false);
  const [manager, setManager] = useState("");
  const [name,setName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [phone ,setPhone]=useState("");
const [joiningDate,setJoiningDate]=useState("");
const [salary,setSalary]=useState("");
const [department, setDepartment] = useState("");
const [designation,setdesignation]=useState("")
  const navigate = useNavigate();
  const dispatch=useDispatch();

  // console.log(name,lastName,email,password,phone,department,designation,joiningDate,salary,manager)

  const CreateEmployeeHandler=async()=>{
    try {
      const res=await axios.post('http://localhost:5200/create-employee',{
            name,lastName,email,password,phone,department,designation,joiningDate,salary,manager
      },{
        withCredentials:true
      })
      console.log("res in create emp ",res);
      if(res.data.success){
          toast.success(res.data.message);
            dispatch(setUser(res.data.user));
          navigate('/all-employee');
      }
    } catch (error) {
      console.log("error in create employee ",error);
    }
  }


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
              <h1 className=" text-2xl font-bold">Add employee</h1>

              <h1>Create a new employee account and assign their details</h1>
            </div>
          </div>
          <div className="h-[86%] rounded-lg bg-slate-900 text-white border-2 border-slate-700 py-2 px-2 flex flex-col justify-evenly">
            <div>
              <div className="flex items-center gap-3 px-2 py-1">
                <FaUser
                  className="w-12 h-12 text-blue-600 bg-blue-300 rounded-xl p-2"
                  size={25}
                />
                <div>
                  <h1 className="font-bold">Personal Information</h1>
                  <h1>Basic details about the employee.</h1>
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
                    value={name}
                   onChange={(e)=> setName(e.target.value)}
                    placeholder="Enter firstName of employee"
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
                    onChange={(e)=>setLastName(e.target.value)}
                    placeholder="Enter lastName of employee"
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
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter employee email "
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
                    type="Number"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Enter Phone Number of employee"
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
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password of employee "
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
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600 rounded-xl  flex gap-2 
                 items-center"
                  >
                    <FaUser size={25} />
                    <div className="relative w-full">
                      <button
                        type="button"
                        onClick={(e) => setOpenDeptDropdown(!openDeptDropdown)}
                        className="w-full flex items-center justify-between
                          px-4 
                          bg-slate-900
                      
                          rounded-xl
                          text-gray-300"
                      >
                        <span>{department || "Select Department"}</span>

                        <span className={openDeptDropdown ? "rotate-180" : ""}>
                          ▼
                        </span>
                      </button>

                      {openDeptDropdown && (
                        <div
                          className="absolute z-50 mt-2 w-full
                            bg-slate-900
                            border border-slate-600
                            rounded-xl
                            overflow-hidden
                            shadow-lg"
                        >
                          {["IT ", "Sales", "Marketing", "Digital"].map(
                            (name) => (
                              <button
                                key={name}
                                type="button"
                                onClick={() => {
                                  setDepartment(name);
                                  setOpenDeptDropdown(false);
                                }}
                                className="w-full text-left px-4 py-3
                                text-gray-300
                                hover:bg-blue-600
                                hover:text-white
                                transition"
                              >
                                {name}
                              </button>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className="w-[30%] rounded-xl  flex flex-col gap-2">
                  <h1 className="font-bold">Select Manager</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600 rounded-xl  flex gap-2 
                 items-center"
                  >
                    <FaUserTie size={25} />
                    <div className="relative w-full">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenManagerDropdown(!openManagerDropdown)
                        }
                        className="w-full flex items-center justify-between
                          px-4 
                          bg-slate-900
                      
                          rounded-xl
                          text-gray-300"
                      >
                        <span>{manager || "Select manager"}</span>

                        <span
                          className={openManagerDropdown ? "rotate-180" : ""}
                        >
                          ▼
                        </span>
                      </button>

                      {openManagerDropdown && (
                        <div
                          className="absolute z-50 mt-2 w-full
                            bg-slate-900
                            border border-slate-600
                            rounded-xl
                            overflow-hidden
                            shadow-lg"
                        >
                          {[
                            "Rahul Sharma",
                            "Amit Kumar",
                            "Rohit Singh",
                            "Vikas Kumar",
                          ].map((name) => (
                            <button
                              key={name}
                              type="button"
                              onClick={() => {
                                setManager(name);
                                setOpenManagerDropdown(false);
                              }}
                              className="w-full text-left px-4 py-3
                                text-gray-300
                                hover:bg-blue-600
                                hover:text-white
                                transition"
                            >
                              {name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
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
                      onChange={(e)=>setJoiningDate(e.target.value)}
                      placeholder="Joining date "
                      className="outline-none w-full "
                    />
                  </motion.div>
                </div>
                <div className=" w-[30%] border-slate-600    flex gap-1 flex-col">
                  <h1 className="font-bold">Employee Designation</h1>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 15px rgba(237, 231, 231, 0.5)",
                    }}
                    className="border py-4 font-bold px-3 w-full border-slate-600 rounded-xl  flex gap-4 
                 items-center"
                  >
                    <FaUser size={25} />
                    <input
                      type="text"
                      value={designation}
                      onChange={(e)=>setdesignation(e.target.value)}
                      placeholder="Enter Phone Number of employee"
                      className="outline-none w-full"
                    />
                  </motion.div>
                </div>

                <div className=" w-[30%] border-slate-600  flex gap-1  flex-col">
                  <h1 className="font-bold">Employee Salary</h1>
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
                      onChange={(e)=>setSalary(e.target.value)}
                      placeholder="Enter employee salary"
                      className="outline-none w-full"
                    />
                  </motion.div>
                </div>
                <div className="flex items-center gap-8 text-end justify-between w-screen">
                  <div></div>
                  <div className="flex gap-4">
                    <motion.button
                      whileTap={{
                        scale: 1.04,
                        boxShadow: "0px 0px 15px rgba(246, 235, 235, 0.6)",
                      }}
                      className="font-bold cursor-pointer hover:bg-red-600 border border-slate-600 px-4 py-1 rounded-xl"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                    onClick={CreateEmployeeHandler}
                      whileTap={{
                        scale: 1.04,
                        boxShadow: "0px 0px 15px rgba(246, 235, 235, 0.6)",
                      }}
                      className="flex items-center gap-2 cursor-pointer  border border-slate-600 px-4 py-1 rounded-xl bg-blue-600 font-bold"
                    >
                      <FaPlusCircle size={25} />
                      Create Employee
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
export default AddEmployee;
