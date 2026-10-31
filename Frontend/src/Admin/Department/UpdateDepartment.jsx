import { FaUser } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { motion, useScroll } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import '../../index.css'
import { useEffect } from "react";

import axios from "axios";
import { updateDepartment, setDepartment } from "../../Redux/DepartmentSlice.js";
const UpdateDepartment = () => {
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");
  const [DepartmentCode, setDepartmentCode] = useState();
  const [manager, setManager] = useState();
  const navigate = useNavigate();
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isDepartmentNameOpen, setIsDepartmentNameOpen] = useState(false);
 
  const departmentData=useSelector(store=>store.department.department);
  const   ManagerData=useSelector(store=>store.manager.manager);     
  const {id} = useParams();
  const updateDepartmentHandler = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:5200/update-department/${id}`,
        {
          departmentName,
          departmentCode: DepartmentCode,
          description,
          manager,
        },
        {
          withCredentials: true,
        },
      );
      console.log(" in update dept ",res);
      if (res.data.success) {
        dispatch(updateDepartment(res.data.department));
        toast.success(res.data.message);
        navigate("/all-department");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <motion.div
        initial={{
            opacity:0,y:0
        }}
        whileInView={{
            opacity:1,y:0
        }}
        transition={{
            duration:0.6
        }}
        className="text-white p-3 w-screen flex justify-center items-center h-screen bg-slate-950 "
      >
        <div className="text-white p-3 w-[60%]  bg-slate-800  h-[97%] flex flex-col justify-evenly rounded-xl">
          <button
            onClick={() => navigate(`/dept-details/${id}`)}
            className="flex items-center cursor-pointer gap-4 pb-8"
          >
            {" "}
            <FaLeftLong /> Back{" "}
          </button>

          <div className="w-full flex flex-col gap-8 p-4">
            <div className="flex items-center gap-4">
              <FaUser size={45} />
              <div>
                <h1 className="text-xl font-bold">Add Manager </h1>
                <h3 className="font-bold text-gray-400">
                  Add manage in your department .
                </h3>
              </div>
            </div>

             <motion.div className="flex flex-col">
              <label className="font-semibold text-lg">
                Department Name
              </label>

              <div className="manager-dropdown">
                <motion.button
                  whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                  type="button"
                  className="manager-select"
                  onClick={() => setIsDepartmentNameOpen(!isDepartmentNameOpen)}
                >
                  <span>{departmentName || "Select department Name"}</span>
                  <span>⌄</span>
                </motion.button>

                {isDepartmentNameOpen && (
                  <div className="dropdown-options">
                    {departmentData?.map((dept) => (
                      <div
                        key={dept?._id}
                        className="dropdown-option"
                        onClick={() => {
                          setDepartmentName(`${dept?.departmentName} `);
                          setIsDepartmentNameOpen(false);
                        }}
                      >
                        {dept?.departmentName} 
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

             <motion.div className="flex flex-col">
              <label className="font-semibold text-lg">
                Department Code
              </label>

              <div className="manager-dropdown">
                <motion.button 
                  whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                  type="button"
                  className="manager-select"
                  onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                >
                  <span>{DepartmentCode || "Select department code"}</span>
                  <span>⌄</span>
                </motion.button>

                {isDepartmentOpen && (
                  <div className="dropdown-options">
                    {departmentData?.map((dept) => (
                      <div
                        key={dept?._id}
                        className="dropdown-option"
                        onClick={() => {
                          setDepartment(`${dept?.departmentCode} `);
                          setIsDepartmentOpen(false);
                        }}
                      >
                        {dept?.departmentCode} 
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div className="flex flex-col">
              <label className="font-semibold text-lg">
                Department Manager Name
              </label>

              <div className="manager-dropdown">
                <motion.button
                  whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                  type="button"
                  className="manager-select"
                  onClick={() => setIsManagerOpen(!isManagerOpen)}
                >
                  <span>{manager || "Select Manager"}</span>
                  <span>⌄</span>
                </motion.button>

                {isManagerOpen && (
                  <div className="dropdown-options">
                    {ManagerData?.map((manag) => (
                      <div
                        key={manag?._id}
                        className="dropdown-option"
                        onClick={() => {
                          setManager(`${manag?.name} ${manag?.lastName}`);
                          setIsManagerOpen(false);
                        }}
                      >
                        {manag?.name} {manag?.lastName}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div className="flex flex-col ">
              <label htmlFor="description" className="font-semibold text-lg">
                Description
              </label>
              <motion.textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                name="description"
                placeholder="Enter a brief description about this department"
                className="font-bold mt-2 p-2 outline-none border border-slate-600 rounded-xl "
                id=""
              >
                {" "}
              </motion.textarea>
            </motion.div>
          </div>
          <div className="flex gap-8 justify-end mt-8 items-center">
            <motion.button
              onClick={() => {
                setDepartmentName("");
                setDescription("");
                setDepartmentCode(null);
                navigate("/all-department");
              }}
              whileTap={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(78, 180, 162, 0.7)",
              }}
              className="border border-slate-600 px-4 py-2 cursor-pointer rounded-xl text-gray-400 font-bold"
            >
              Cancel
            </motion.button>
            <motion.button
              onClick={updateDepartmentHandler}
              whileTap={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(78, 180, 162, 0.7)",
              }}
              className="border border-slate-600 px-4 py-2 cursor-pointer rounded-xl text-gray-400 font-bold"
            >
              {" "}
              <span className="text-xl">+</span> Create Department{" "}
            </motion.button>
          </div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
    </>
  );
};
export default UpdateDepartment;
