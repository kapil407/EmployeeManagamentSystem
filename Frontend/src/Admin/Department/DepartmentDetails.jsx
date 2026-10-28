import {
  FaBuilding,
  FaHashtag,
  FaTag,
  FaFileAlt,
  FaUserTie,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaEdit,
  FaTrash,
  FaTimes,
  FaArrowRight,
  FaPlus,
  FaCheckCircle,
  FaSearch,
  FaChevronRight,
  FaCircle,
  FaUserCircle,
  FaSitemap,
} from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { easeInOut, motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const DepartmentDetails = () => {
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5200/get-deptById/${id}`,
          {
            withCredentials: true,
          },
        );
        console.log("res fetch dept by id ", res);
        if (res.data.success) {
          setDepartment(res?.data?.departmentData);
          setManager(res?.data?.managerData);
        }
      } catch (error) {
        console.log("erro in fetch dept by Id ", error);
      }
    };
    fetchDepartment();
  }, [id]);

  return (
    <>
      <motion.main
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: easeInOut,
        }}
        className="w-screen h-screen shrink-0 bg-slate-950 text-white p-2 space-y-3"
      >
        <header
          className="flex shrink-0 w-full min-h-[15%] p-2 rounded-xl flex-col justify-center gap-5 bg-slate-800"
          style={{
            backgroundImage: "url('/adminBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            onClick={() => navigate("/all-department")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaLeftLong size={20} />
            <span className="text-lg font-bold">Back</span>
          </div>
          <div className="flex gap-4">
            <FaSitemap size={75} className="bg-blue-400 p-2 rounded-xl" />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-cyan-400">
                Department Details
              </h1>
              <span className="font-semibold text-gray-400">
                View complete information about this department
              </span>
            </div>
          </div>

          <div className="flex justify-between px-2">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-purple-600">
                {department?.departmentName}
              </h1>
              <p className="font-semibold text-gray-400">
                {department?.description}
              </p>
            </div>
            <span className="font-semibold border border-slate-600 px-4 py-1 h-fit rounded-xl bg-green-700 ">
              Active
            </span>
          </div>
        </header>
        <div className="grid grid-cols-2 bg-slate-950 min-h-[62%] rounded-xl w-full">
          <section className="bg-green-400 p-2 bg-slate-800 rounded-l-xl space-y-6">
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl mt-1">
              <FaHashtag size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div>
                <h1 className="text-lg font-semibold text-slate-400">
                  DepartmentID
                </h1>
                <span className="text-xl font-black">
                  {department?.departmentCode}-{department?._id}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl">
              <FaBuilding size={60} className="bg-gray-800 p-2 rounded-xl" />

              <div>
                <h1 className="text-lg font-semibold text-slate-400">
                  DepartmentName
                </h1>
                <span className="text-xl font-black">
                  {department?.departmentName}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-700 max-h-[17%] p-2 rounded-xl shrink-0">
              <FaUserTie size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div className="flex gap-3 items-center">
               {manager?.profilePicture ?<img onClick={()=>navigate(`/manager-profile/${manager?._id}`)} src={manager?.profilePicture} alt=""  className="h-15 w-15 object-cover cursor-pointer rounded-full"/>:
               
               <FaUserCircle size={48} />}
                <div className="flex flex-col">
                  <h1 className="font-semibold text-gray-300">
                    Assigned Manager
                  </h1>
                  <h1 className="text-xl font-bold">
                    {department?.managerName} 
                  </h1>
                  <h1 className="font-semibold text-gray-300">
                    MNG-{manager?.employeeId?.split("-")[1]}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl">
              <FaCalendarAlt size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div>
                <h1 className="text-lg font-semibold text-slate-400">
                  Date Created
                </h1>
                <span className="text-xl font-black">
                  15 Mar 2026, 10:30 AM
                </span>
              </div>
            </div>
            <div className="bg-slate-800 gap-8 flex justify-end ">
              <motion.button
                onClick={() => navigate(`/update-dept/${id}`)}
                whileTap={{
                  scale: 1.02,
                  boxShadow: "0px 0px 15px rgba(31, 81, 246, 0.7)",
                }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut,
                }}
                className="border border-blue-600 bg-blue-600 flex gap-2 items-center px-2 py-1 font-bold rounded-xl cursor-pointer"
              >
                <FaEdit />
                Update Department
              </motion.button>

              {/* <motion.button
                whileTap={{
                  scale: 1.02,
                  boxShadow: "0px 0px 15px rgba(232, 50, 50, 0.7)",
                }}
                transition={{
                  duration: 0.2,
                  ease: easeInOut,
                }}
                className=" bg-red-600 flex gap-2 py-2 items-center px-2 rounded-xl cursor-pointer"
              >
                <FaTrash /> Delete Department
              </motion.button> */}
            </div>
          </section>
          <section className="bg-green-400 p-2 bg-slate-800 rounded-r-xl space-y-3">
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl mt-1">
              <FaTag size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div>
                <h1 className="text-lg font-semibold text-slate-400">
                  DepartmentCode
                </h1>
                <span className="text-xl font-black">
                  {department?.departmentCode}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10 bg-slate-700  p-2 rounded-xl">
              <FaFileAlt
                size={60}
                className="bg-gray-800 p-2 rounded-xl shrink-0"
              />

              <div className="min-h-[15%]">
                <h1 className="text-lg font-semibold text-slate-400">
                  Description
                </h1>
                <p className="text-lg font-bold">{department?.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl">
              <FaUsers size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div>
                <h1 className="font-bold text-slate-400">Total Employees</h1>
                <span className="text-xl font-bold">25</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-xl">
              <FaClock size={60} className="bg-gray-800 p-2 rounded-xl" />
              <div>
                <h1 className="text-lg font-semibold text-slate-400">
                  Last Updated
                </h1>
                <span className="text-xl font-black">
                  15 Mar 2026, 10:30 AM
                </span>
              </div>
            </div>
          </section>
        </div>
      </motion.main>
    </>
  );
};
export default DepartmentDetails;
