import NavBarHandler from "../Home/PrivateNavbar";

import Footer from "../LandingPages/Footer";
import useFetchAllDepartment from "../Hooks/useFetchAllDepartment";
import { useFetchAllManager } from "../Hooks/useFetchManagers";
import { motion } from "motion/react";
import useFetchAllEmployee from "../Hooks/useFetchEmployee";
const AdminDashboard = () => {
  const deptData = useFetchAllDepartment();
  const managerData = useFetchAllManager();
  const employeeData=useFetchAllEmployee();
  console.log("data   "  , employeeData);
  
  return (
    <motion.div className="w-screen h-screen">
      <NavBarHandler />
      <motion.div 
       initial={{
            opacity:0,y:0
        }}
        whileInView={{
            opacity:1,y:0
        }}
        transition={{
            duration:0.4
        }}
      className="h-[76%] flex flex-col   w-full bg-slate-950">
        <motion.div className=" h-[15%] m-4 py-2 w-auto rounded-lg text-white ">
          <motion.div className="text-center text-3xl font-bold">
            Good Morning, Admin{" "}
          </motion.div>
          <motion.div className="ml-4 font-bold text-cyan-400">
            Here's what's happening across your organization.
          </motion.div>
        </motion.div>
        <motion.div className="h-[16%]  rounded-lg text-white font-bold  w-auto rounded-xl  flex mx-4 justify-evenly items-center ">
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(228, 169, 169, 0.7)",
            }}
            transition={{
              duration: 0.5,
            }}
            className="border-r border-l border-slate-600 gap-2 flex rounded-xl items-center justify-center w-[25%] h-full text-center"
          >
            <h1 className="text-xl">Employee</h1>
            <h1 className="text-cyan-600 text-3xl">25</h1>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(228, 169, 169, 0.7)",
            }}
            transition={{
              duration: 0.5,
            }}
            className="border-r border-slate-600 gap-2 rounded-xl border-l flex items-center justify-center w-[25%] h-full text-center"
          >
            <h1 className="text-xl">Manager</h1>
            <h1 className="text-3xl text-cyan-600">35</h1>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(228, 169, 169, 0.7)",
            }}
            transition={{
              duration: 0.5,
            }}
            className="border-r border-slate-600 gap-2 rounded-xl flex border-l items-center justify-center w-[23%] h-full text-center"
          >
            <h1 className="text-xl">Department</h1>
            <h1 className="text-3xl text-cyan-600">65</h1>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(228, 169, 169, 0.7)",
            }}
            transition={{
              duration: 0.5,
            }}
            className=" flex  items-center justify-center gap-2 w-[23%] h-full border-l border-slate-600 border-r rounded-xl text-center"
          >
            <h1 className="text-xl">On Leave</h1>
            <h1 className="text-3xl text-cyan-600">2</h1>
          </motion.div>
        </motion.div>
        <motion.div className="text-white w-auto h-[25%] m-4 flex  justify-evenly gap-8 mt-[4%] mb-[4%]">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(228, 169, 169, 0.5)",
            }}
            transition={{
              duration: 0.5,
            }}
            className=" px-4 py-1 h-full rounded-lg border-r border-l border-slate-600"
          >
            <h1 className="text-xl font-bold">Employee Attendance</h1>
            <motion.div className="text-gray-400">
              <h1>Present</h1>
              <h1>Absent</h1>
              <h1>Late</h1>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(228, 169, 169, 0.5)",
            }}
            transition={{
              duration: 0.5,
            }}
            className=" px-4 py-1 h-full rounded-lg border-r border-l border-slate-600"
          >
            <h1 className="text-xl font-bold">Department Overview</h1>
            <motion.div className="text-gray-400 ">
              <h1>IT</h1>
              <h1>HR</h1>
              <h1>Finance</h1>
              <h1>Sales</h1>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(228, 169, 169, 0.5)",
            }}
            transition={{
              duration: 0.5,
            }}
            className=" px-4 py-1 w-[15%] h-full rounded-lg border-r border-l border-slate-600"
          >
            <h1 className="text-xl font-bold">Employee Status</h1>
            <motion.div className="mt-2 text-gray-400">
              <h1>Active</h1>
              <h1>Inactive</h1>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(228, 169, 169, 0.5)",
            }}
            transition={{
              duration: 0.5,
            }}
            className=" px-4 py-1 h-full rounded-lg border-r border-l border-slate-600"
          >
            <h1 className="text-xl font-bold">Recent Leave Requests</h1>
            <motion.div className="flex gap-4 text-gray-400">
              <h1>kapil</h1>
              <h1>Casual</h1>
              <h1>Pending</h1>
            </motion.div>
            <motion.div className="flex gap-4 text-gray-400">
              <h1>kapil</h1>
              <h1>Casual</h1>
              <h1>Pending</h1>
            </motion.div>
            <motion.div className="flex gap-4 text-gray-400">
              <h1>kapil</h1>
              <h1>Casual</h1>
              <h1>Pending</h1>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="text-white h-[15%] rounded-xl mx-4 w-auto mb-6 flex flex-col items-center text-center px-4 py-1 ">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(228, 169, 169, 0.5)",
            }}
            transition={{
              duration: 0.5,
            }}
            className="border-r flex flex-col justify-between py-2 rounded-xl h-full border-l border-slate-600 w-[40%]"
          >
            <motion.div>
              <h1 className="text-xl font-bold">Recent Activity</h1>
            </motion.div>
            <motion.div className="text-gray-400">
              New employee added • Department created • Leave request submitted
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};
export default AdminDashboard;
