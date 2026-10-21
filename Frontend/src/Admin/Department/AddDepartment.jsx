import { FaUser } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { motion, useScroll } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addDepartment, setDepartment,removeInvalidDepartments } from "../../Redux/DepartmentSlice.js";
const AddNewDepartment = () => {
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");
  const [DepartmentCode, setDepartmentCode] = useState();
  const [manager,setManager]=useState("")
  const navigate = useNavigate();
  console.log(departmentName, DepartmentCode, description);

  const createDepartmentHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5200/create-department",
        {
          departmentName,
          DepartmentCode,
          description,
          manager
        },
        {
          withCredentials: true,
        },
      );
      console.log(res);
      if (res.data.success) {
        dispatch(addDepartment(res.data.newDepartment));
        
      // dispatch(removeInvalidDepartments());
  
        toast.success(res.data.message);
        navigate("/all-department");
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-white p-3 w-screen flex justify-center items-center h-screen bg-slate-950 "
      >
        <div className="text-white p-3 w-[60%]  bg-slate-800  h-[80%] flex flex-col justify-evenly rounded-xl">
          <button
            onClick={() => navigate("/all-department")}
            className="flex items-center cursor-pointer gap-4 pb-8"
          >
            {" "}
            <FaLeftLong /> Back{" "}
          </button>

          <div className="w-full flex flex-col gap-8 p-3">
            <div className="flex items-center gap-4">
              <FaUser size={45} />
              <div>
                <h1 className="text-3xl font-bold text-cyan-400">Add Department </h1>
                <h3 className="font-bold text-gray-400">
                  Create new department in your organization .
                </h3>
              </div>
            </div>

            <motion.div className="flex flex-col ">
              <label htmlFor="deptName " className="font-semibold text-lg">
                Department Name <span className="text-red-600 text-xl">*</span>
              </label>
              <motion.input
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                type="text"
                id="deptName"
                placeholder="Enter Department Name "
                className="rounded-xl font-bold mt-1 outline-none p-3  border border-slate-600"
              />
            </motion.div>
            <motion.div className="flex flex-col ">
              <label htmlFor="deptName " className="font-semibold text-lg">
                DepartmentCode <span className="text-red-600 text-xl">*</span>
              </label>
              <motion.input
                value={DepartmentCode}
                onChange={(e) => setDepartmentCode(e.target.value)}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 15px rgba(233, 147, 147, 0.7)",
                }}
                transition={{
                  duration: 0.5,
                }}
                type="text"
                id="deptName"
                placeholder="Enter DepartmentCode"
                className="rounded-xl font-bold mt-1 outline-none p-3  border border-slate-600"
              />
            </motion.div>
           

            <motion.div className="flex flex-col ">
              <label htmlFor="description" className="font-semibold text-lg">
                Description <span className="text-red-600 text-xl">*</span>{" "}
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
                className="font-bold mt-2 p-2 shrink-0 outline-none border border-slate-600 rounded-xl "
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
                setDepartmentCode("");
                setManager("");
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
              onClick={createDepartmentHandler}
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
export default AddNewDepartment;
