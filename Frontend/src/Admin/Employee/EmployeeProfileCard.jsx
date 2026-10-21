import NavBarHandler from "../../Home/PrivateNavbar";
import { easeOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Footer from "../../LandingPages/Footer";
import { FaSearch, FaTrash } from "react-icons/fa";
import { employeesData } from "../../data";

import { useDispatch } from "react-redux";

const AllEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SHowEmloyeeHandler = () => {
    try {
      navigate("/update-employee");
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
          {employeesData.map((emp) => {
            return (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  onClick={SHowEmloyeeHandler}
                  key={emp.empId}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
                  }}
                  className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
                >
                  <h1 className="font-bold text-lg mb-2">
                    {emp.firstName} {emp.lastName}
                  </h1>

                  <motion.div className="font-semibold flex flex-col gap-2">
                    <h1>
                      EmpId: <span>{emp.empId}</span>
                    </h1>
                    <h1>{emp.role}</h1>
                    <h1>{emp.dept}</h1>
                  </motion.div>
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 15px rgba(253, 58, 58, 0.7)",
                    }}
                    className=" mt-2 w-full border  bg-red-600 border-red-800 cursor-pointer text-center text-white px-4 py-1 rounded-xl font-semibold flex gap-4  items-center"
                  >
                    <FaTrash />
                    Delete Employee
                  </motion.button>
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
