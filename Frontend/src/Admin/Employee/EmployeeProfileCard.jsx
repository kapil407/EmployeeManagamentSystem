import NavBarHandler from "../../Home/PrivateNavbar";
import { easeOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Footer from "../../LandingPages/Footer";
import { FaCircle, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { employeesData } from "../../data";

import { useDispatch, useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";

const AllEmployee = () => {
  const employee=useSelector(store=>store.employee.employee);
  console.log("emp  ",employee);
  let cnt = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SHowEmloyeeHandler = () => {
    try {
      navigate("/employee-profile");
    } catch (error) {
      console.error("show emp error", error); 
    }
  };

  return (
    <div className="w-screen h-screen">
      <NavBarHandler />
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
          duration: 0.7,
          ease: "easeOut",
        }}
        className="text-white  w-screen p-2 flex flex-col h-[76%] gap-2 items-center bg-slate-950"
      >
        <div className="flex justify-between w-screen items-center text-center">
          <div className="w-[33%]"></div>
          <h1 className="mt-1 text-2xl font-bold w-[33%]">All Employees</h1>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(241, 116, 104, 0.4)",
            }}
            className="px-4 py-2 flex items-center gap-4 mr-4 font-bold rounded-lg border-slate-700 bg-slate-600 border outline-none w-[33%]"
          >
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="Search employee by name or emailId"
              className=" font-bold rounded-lg  outline-none w-full px-2"
            />
          </motion.div>
        </div>
        <motion.div className="flex w-full">
          <motion.button
            onClick={() => navigate("/add-employee")}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="mb-2 border font-bold  border-slate-600 px-2 py-1 rounded-lg cursor-pointer"
          >
            <span className="text-xl">+</span> Add new employee
          </motion.button>
        </motion.div>
        <motion.div className="flex   p-2  flex-wrap gap-8 w-full max-h-full overflow-y-auto custom-scrollbar">
          {/* {employee profile card} */}
          {employee.map((emp) => {
            cnt++;
            return (
              <>
                <motion.div
                  initial={cnt > 10 ? { opacity: 0, y: 50 } : undefined}
                  whileInView={cnt > 10 ? { opacity: 1, y: 0 } : undefined}
                  transition={
                    cnt > 10
                      ? {
                          duration:0.8
                        }
                      : undefined
                  }
                  key={emp.empId}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
                  }}
                  className="rounded-lg border-l  border-r border-slate-600 px-3 py-4  min-w-[15%]  h-auto"
                >
                  <div className="flex items-center  justify-between ">
                    <div></div>
                    {true?<img src={'./Logo.png'} className="h-22 w-22 object-cover rounded-xl ml-12" alt="" /> :<h1 className="text-center flex ml-10  items-center justify-center">
                      {" "}
                      <FaCircleUser size={85} />
                    </h1>}
                    <motion.h1
                      onClick={SHowEmloyeeHandler}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0px 0px 20px rgba(35, 191, 226, 0.7)",
                      }}
                      className="px-2 py-1 flex items-center gap-1 rounded-xl cursor-pointer"
                    >
                      <FaEye />View
                    </motion.h1>
                  </div>
                  <div className="text-center space-y-1">
                    <h1 className="font-bold text-3xl mt-2 text-cyan-400">
                      {emp.name} {emp.lastName}
                    </h1>

                    {/* <motion.div className="font-semibold bg-red-900 flex flex-col gap-2 min-w-0"> */}
                    <h1>
                      <span className="text-gray-400 font-bold"> EmpId:</span>{" "}
                      <span className=" font-bold text-lg">
                        EMP-{emp.employeeId.split("-")[1]}
                      </span>
                    </h1>
                    <h1>
                      <span className="text-gray-400 font-bold">
                        Designation:{" "}
                      </span>{" "}
                      <span className=" font-bold text-lg">{emp.designation}</span>
                    </h1>
                    <h1>
                      <span className="text-gray-400 font-bold">
                        Department:
                      </span>{" "}
                      <span className=" font-bold text-lg">{emp.departmentName}</span>
                    </h1>
                  </div>
                  {/* </motion.div> */}
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};
export default AllEmployee;
