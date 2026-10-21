import NavBarHandler from "../../Home/PrivateNavbar.jsx";
import { easeOut, motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../LandingPages/Footer.jsx";
import { FaEye, FaSearch, FaTrash } from "react-icons/fa"
import { removeManager } from "../../Redux/ManagerSlice.js";
import { useFetchAllManager } from "../../Hooks/useFetchManagers.js";
import { useSelector } from "react-redux";
const AllManagersProfile = () => {
 
  let cnt = 0;
//  const managersData=useFetchAllManager();
  const navigate = useNavigate();
  const managersData=useSelector(store=>store.manager.manager);

 

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
          <h1 className="mt-1 text-2xl font-bold w-[33%]">All Managers</h1>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(194, 235, 238, 0.4)",
            }}
            className="px-4 py-2 flex items-center mt-1 gap-4 mr-4 font-bold rounded-lg border-slate-800 bg-slate-800 border outline-none w-[33%]"
          >
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="Search manager by name"
              className=" font-black rounded-lg  outline-none w-full px-2"
            />
          </motion.div>
        </div>
        <motion.div className="flex w-full">
          <motion.button
            onClick={() => navigate("/add-manager")}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="mb-2 border font-bold  border-slate-600 px-2 py-1 rounded-lg cursor-pointer"
          >
            <span className="text-xl ">+</span> Add new manager
          </motion.button>
        </motion.div>
        <motion.div className="flex   p-2  flex-wrap gap-8 w-full max-h-full overflow-y-auto custom-scrollbar">
          {/* {employee profile card} */}

          {managersData?.map((m) => {
            cnt++;
            return (
              <>
                <motion.div
                  whileInView={
                    cnt > 12
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : undefined
                  }
                  initial={
                    cnt > 12
                      ? {
                          opacity: 0,
                          y: 20,
                        }
                      : undefined
                  }
                  transition={
                    cnt > 12
                      ? {
                          duration: 0.8,
                        }
                      : undefined
                  }
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
                  }}
                  className="rounded-lg border-l   border-r border-slate-600 p-4 min-w-[18.2%] h-auto"
                >
                  <motion.div className="flex mb-2 items-center gap-3 justify-between">
                    <h1 className="font-black text-3xl mb-2 text-cyan-600">
                      {m.name} {m.lastName}
                    </h1>
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 0px 15px rgba(83, 189, 234, 0.7)",
                      }}
                      onClick={() => navigate(`/manager-profile/${m?._id}`)}
                      className=" flex items-center gap-2 cursor-pointer px-2 py-1 rounded-xl"
                    >
                      {" "}
                      <FaEye />
                      View
                    </motion.button>
                  </motion.div>

                  <motion.div className=" flex flex-col gap-3 mb-2">
                    <h1 className="font-bold">
                     <span className="text-gray-400">EmpId:</span>  <span>MGR-{m?.employeeId?.split("-")[1]}</span>
                    </h1>
                    <h1><span className="text-gray-400 font-bold">Designation</span>: <span className="text-lg font-black">{m.designation}</span></h1>
                    <h1><span className="text-gray-400 font-bold">Department:</span> <span className="text-lg font-black">{m.department.departmentName}</span></h1>
                  </motion.div>
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
export default AllManagersProfile;
