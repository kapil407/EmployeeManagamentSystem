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
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const [path_1, setPath_1] = useState("overview");
  const [path_2, setPath_2] = useState("");
  const [path_3, setPath_3] = useState("");
  const [path_4, setPath_4] = useState("");

  return (
    <>
      <motion.div 
      initial={{
        opacity:0,y:8
      }}
      animate={{
        opacity:1,y:0
      }}
      transition={{
        duration:0.3,
        ease:"easeOut"
      }}
      className="w-screen h-screen  bg-slate-950">
        <div className="p-3 bg-slate-950 w-full h-auto rounded-xl">
          <h1 className="flex font-bold  h-[5%] bg-slate-800 rounded-xl px-2 text-white items-center gap-2 cursor-pointer">
            {" "}
            <FaArrowLeft onClick={() => navigate("/all-employee")} className="" size={20} />
            Back to all employee
          </h1>
          <div className="w-full h-[95%]  my-2  flex flex-col rounded-xl">
            <div className="flex w-full bg-slate-800 h-[25%] p-1 justify-evenly rounded-t-xl  text-white ">
              <div className="flex gap-4 w-[50%] items-center justify-center">
                <FaUserCircle
                  style={{
                    boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                  }}
                  className="w-35 h-35 border-8 border-gray-400 rounded-full  "
                />
                <div>
                  <h1 className="font-bold text-3xl">kapil</h1>
                  <h1 className="font-bold">software developer</h1>
                  <h1 className="flex gap-6">
                    <span className="border font-semibold px-2 py-1 rounded-lg bg-blue-400 text-blue-600">
                      kapil2026
                    </span>
                    <span className="border px-2  font-semibold py-1 rounded-lg bg-gray-600 border-gray-800">
                      Employee
                    </span>
                    <span className="border px-2  font-semibold py-1 rounded-lg bg-green-400 text-green-800 flex items-center gap-1">
                      <FaCircle size={10} />
                      Active
                    </span>
                  </h1>
                  <h1 className="font-semibold">
                    Passionate developer with strong interest in buiding <br />{" "}
                    scalable web application and solving real-world problem
                  </h1>
                </div>
              </div>
              <div className="w-[50%] flex flex-col items-center justify-center">
                <div className="flex gap-6">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 15px rgba(119, 140, 247, 0.7)",
                    }}
                    className="border  px-3 py-1 cursor-pointer rounded-xl font-semibold flex gap-2 items-center bg-blue-600 border-blue-800"
                  >
                    <FaEdit />
                    Edite Employee
                  </motion.button>
                 
                </div>
                <div className="flex flex-col font-bold mt-2 py-2">
                  <h1 className="flex items-center gap-4 mb-0.5">
                    {" "}
                    <FaEnvelope /> kapil@gmail.com
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaPhone /> 9717828288
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaMapMarkerAlt /> hapur uttar pardesh
                  </h1>
                  <h1 className="flex items-center gap-4 mb-0.5">
                    <FaCalendarAlt />
                    Joined on 02 oct 2026
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-950 h-[6%] flex justify-evenly items-center text-gray-400 mt-1">
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
                      duration: 1,
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
                      duration: 1,
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
                      duration: 1,
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
                      duration: 1,
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="h-auto"
            >
              {path_1 === "overview" && <EmployeeOver />}
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
export default UpdateEmployee;
