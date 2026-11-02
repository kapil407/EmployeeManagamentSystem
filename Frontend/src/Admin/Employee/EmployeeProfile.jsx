import {
  FaArrowLeft,
  FaUserCircle,
  FaCircle,
  FaEdit,
  FaTrash,
  FaUser,
  FaUsers,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaBuilding,
  FaTasks,
} from "react-icons/fa";
import { FaRupeeSign, FaEye } from "react-icons/fa";
import { FiActivity, FiCalendar, FiFileText } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import {
  LuClipboardCheck,
  LuChartNoAxesColumnIncreasing,
} from "react-icons/lu";
import { easeOut, motion } from "motion/react";
import { useState } from "react";
import EmployeeOver from "./Overview.jsx";
import EmployeeAttendence from "./EmployeeAttendence.jsx";
import EmployeeLeaveHistory from "./EmployeeLeaveHistory.jsx";

import EmployeeTasks from "./EmployeeTasks.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { clearEmployee } from "../../Redux/EmployeeSlice.js";
import { useEffect } from "react";
import axios from "axios";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [empProfile,setEmpProfile]=useState("");
  // console.log("emp profile ",empProfile);
  const dispatch=useDispatch();
useEffect(()=>{
  
  const FetchEmpProfile = async () => {
    try {
      const res = await axios.get(`http://localhost:5200/get-empById/${id}`, {
        withCredentials: true,
      });
      // console.log("res  ", res);
      if (res.data.success) {
        dispatch(clearEmployee());
        setEmpProfile(res.data.emp);
      }
      
    } catch (error) {
      console.error("show emp error", error);
    }
  };
  FetchEmpProfile();
},[id])
 
  const employee = useSelector((store) => store.employee.employee);
  const date = new Date(empProfile?.joiningDate);

  const formattedDate = date.toLocaleDateString("en-GB");

  // console.log("employee->>>>> ", employee);
  const navigate = useNavigate();
  const [path_1, setPath_1] = useState("overview");
  const [path_2, setPath_2] = useState("");
  const [path_3, setPath_3] = useState("");
  const [path_4, setPath_4] = useState("");

  return (
    <>
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
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-screen h-screen  bg-slate-950"
      >
        <div className="p-2 bg-slate-950 w-full h-auto rounded-xl">
          <h1 className="flex font-bold  h-[2%] hover:text-cyan-400  rounded-xl px-2 text-white items-center gap-2 cursor-pointer">
            {" "}
            <FaArrowLeft
              onClick={() => navigate("/all-employee")}
              className=""
              size={20}
            />
            Back to all employee
          </h1>
          <div className="w-full h-[95%]    flex flex-col rounded-xl">
            <motion.div
              whileInView={{
                boxShadow: "0px 0px 15px rgba(240, 243, 248, 0.6)",
              }}
              className="flex w-full bg-slate-800 h-[35%] border border-slate-800 mt-1 px-4 py-3 justify-evenly rounded-xl  text-white "
              style={{
                backgroundImage: `url(${`/adminBackground.png`})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex gap-8 w-[65%] items-center justify-center">
                <div>
                  {empProfile?.profilePicture ? (
                    <img
                      src={empProfile?.profilePicture}
                      alt=""
                      className="w-74 bg-center object-cover h-42 border-4 border-gray-400 relative rounded-full  "
                    />
                  ) : (
                    <FaUserCircle
                      size={168}
                      style={{
                        boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                      }}
                      className=" border-4  border-gray-400 relative rounded-full  "
                    />
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-3xl text-cyan-500">
                    {empProfile?.name} {empProfile?.lastName}
                  </h1>
                  <h1 className="font-bold">{empProfile?.designation}</h1>
                  <h1 className="flex gap-6">
                    {/* <span className="border font-semibold px-2 py-1 rounded-lg bg-blue-400 text-blue-600">
                      kapil2026
                    </span> */}
                    <span className="border px-2  font-semibold py-1 rounded-lg bg-gray-600 border-gray-800">
                      {empProfile?.role}
                    </span>
                    <span className="border px-2  font-semibold py-1 rounded-lg bg-green-400 text-green-800 flex items-center gap-1">
                      <FaCircle size={10} />
                      Active
                    </span>
                  </h1>
                  <h1 className="font-semibold w-full">{empProfile?.Bio}</h1>
                </div>
              </div>
              <div className="w-[35%] flex flex-col items-center justify-center">
                {/*  */}
                <div className="flex flex-col font-bold mt-2 py-2 gap-2">
                  <h1 className="flex items-center gap-4 mb-0.5">
                    {" "}
                    <FaEnvelope /> {empProfile?.email}
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaPhone /> {empProfile?.phone}
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaMapMarkerAlt /> {empProfile?.address}
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaCalendarAlt />
                    {formattedDate}
                  </h1>
                </div>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(253, 58, 58, 0.7)",
                }}
                className=" w-50 gap-2 h-fit border  bg-red-600 border-red-800 cursor-pointer text-center text-white px-2 py-2 rounded-xl font-bold flex   items-center"
              >
                <FaTrash />
                Delete Employee
              </motion.button>
            </motion.div>

            <div className="w-full bg-slate-950 flex justify-evenly items-center text-gray-400 mt-2 ">
              <motion.button
                onClick={() => {
                  setPath_1("overview");
                  setPath_2("");
                  setPath_3("");
                  setPath_4("");
                }}
                className="  font-bold flex items-center gap-2 relative"
              >
                <FiActivity size={25} />
                Overview{" "}
                {path_1 === "overview" && (
                  <motion.div
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="h-[2.5px] left-0 right-0 -bottom-1.5 bg-gray-600 absolute"
                    layoutId="outline"
                  />
                )}
              </motion.button>
              <motion.button
                onClick={() => {
                  setPath_1("");
                  setPath_2("attendence");
                  setPath_3("");
                  setPath_4("");
                }}
                className=" font-bold flex items-center gap-2 relative"
              >
                <FiCalendar size={25} />
                Attendence
                {path_2 === "attendence" && (
                  <motion.div
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="h-[2.5px] left-0 right-0 -bottom-1.5 bg-gray-600 absolute"
                    layoutId="outline"
                  />
                )}
              </motion.button>
              <motion.button
                onClick={() => {
                  setPath_1("");
                  setPath_2("");
                  setPath_3("leave-history");
                  setPath_4("");
                }}
                className="font-bold flex items-center gap-2 relative"
              >
                <LuClipboardCheck size={25} />
                Leave History
                {path_3 === "leave-history" && (
                  <motion.div
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="h-[2.5px] left-0 right-0 -bottom-1.5 bg-gray-600 absolute"
                    layoutId="outline"
                  />
                )}
              </motion.button>
              <motion.button
                onClick={() => {
                  setPath_1("");
                  setPath_2("");
                  setPath_3("");
                  setPath_4("tasks");
                }}
                className="font-bold flex items-center gap-2 relative"
              >
                <FaTasks size={25} />
                Tasks
                {path_4 === "tasks" && (
                  <motion.div
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="h-[2.5px] left-0 right-0 -bottom-1.5 bg-gray-600 absolute"
                    layoutId="outline"
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>
        {
          <AnimatePresence mode="wait">
            <motion.div
              key={path_1 || path_2 || path_3 || path_4}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.4,
              }}
              className="h-auto"
            >
              {path_1 === "overview" && <EmployeeOver empProfile={empProfile} />}
              {path_2 === "attendence" && <EmployeeAttendence />}
              {path_3 === "leave-history" && <EmployeeLeaveHistory />}
              {path_4 === "tasks" && <EmployeeTasks />}
            </motion.div>
          </AnimatePresence>
        }
      </motion.div>
    </>
  );
};
export default EmployeeProfile;
