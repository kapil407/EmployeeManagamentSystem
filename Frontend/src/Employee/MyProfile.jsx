// import {  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EmployeeSideBar from "./EmployeeSideBar";
import {
  FaUser,
  FaUserCircle,
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaVenusMars,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaIdCard,
  FaUsers,
  FaShieldAlt,
  FaLock,
  FaSignOutAlt,
  FaAddressBook,
  FaEye,
} from "react-icons/fa";
import {
  FaIdBadge,
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

import { toast } from "react-toastify";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import {
  clearEmployee,
  updateEmployee,
  updateEmployeeProfileImage,
} from "../Redux/EmployeeSlice";
import { clearUser } from "../Redux/UserSlice";
import { IoClose, IoEyeOff } from "react-icons/io5";

const EmpProfile = () => {
  const dispatch = useDispatch();
  const emp = useSelector((store) => store.employee.employee);
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [selectEmail, setSelectEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [selectPassword, setSelectPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const ProfileHandler = async (e) => {
    try {
      setImageLoading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      const res = await axios.patch(
        `http://localhost:5200/change-profileImage`,
        formData,
        {
          withCredentials: true,
        },
      );
      console.log("res in emp profile", res);
      if (res.data.success) {
        dispatch(updateEmployeeProfileImage(res?.data?.user?.profilePicture));

        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("error in update profile picture in emp ", error);
    } finally {
      setImageLoading(false);
    }
  };

  const LogOutHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5200/logout",
        {},
        {
          withCredentials: true,
        },
      );
      console.log("res ---", res);
      if (res.data.success) {
        dispatch(clearEmployee());
        dispatch(clearUser());
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("error in logout ", error);
    }
  };

  const ChangeEmailHandler = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:5200/change-email",
        {
          email,
        },
        { withCredentials: true },
      );
      console.log("res in change emp email", res);
      if (res.data.success) {
        dispatch(updateEmployee(res.data.user));
        setSelectEmail((prev) => !prev);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("error in change password", error);
    }
  };

  const ChangePasswordHandler = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:5200/change-password",
        {
          password,
        },
        { withCredentials: true },
      );
      console.log("res in change emp password", res);
      if (res.data.success) {
        dispatch(updateEmployee(res.data.user));
        setSelectPassword((prev) => !prev);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("error in change password", error);
    }
  };
  return (
    <>
      <main className="flex w-screen h-screen">
        <EmployeeSideBar />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-full w-full "
        >
          <main className="bg-slate-900 h-[98%] rounded-xl w-[99%]  m-2 p-2">
            <header className="text-white">
              <motion.div className="flex justify-between px-3 py-1">
                <motion.div>
                  <h1 className="text-3xl font-bold">My Profile</h1>
                  <p className="text-slate-400">
                    Manage your personal information and account security
                  </p>
                </motion.div>

                <button
                  onClick={() => navigate("/edite-profile")}
                  className="w-fit cursor-pointer h-fit py-1 flex items-center gap-3 border border-slate-600 bg-blue-600 px-6 font-bold  rounded-xl"
                >
                  <FaEdit />
                  Edite{" "}
                </button>
              </motion.div>
              <motion.div
                whileInView={{
                  boxShadow: "0px 0px 10px rgba(244, 239, 239, 0.5)",
                }}
                className="bg-slate-700 px-2 py-3 mt-1 mb-1 rounded-xl object-cover bg-center flex items-center gap-8"
                style={{ backgroundImage: `url(./adminBackground.png)` }}
              >
                <motion.div className="relative flex min-w-[10%]  ml-4">
                  {!emp?.profilePicture ? (
                    <FaUserCircle
                      size={186}
                      className={` border-4 rounded-full ${emp.Bio?'w-56':"w-56"} `}
                    />
                  ) : imageLoading ? (
                    <motion.div
                      whileInView={{
                        boxShadow: "0px 0px 15px rgba(248, 242, 242, 0.6)",
                      }}
                      className={` border-4  ${emp?.Bio ? "w-56" : "w-45"} text-white justify-center bg-white/15 flex items-center h-45  rounded-full `}
                    >
                      <ClipLoader />
                    </motion.div>
                  ) : (
                    <motion.img
                      whileInView={{
                        boxShadow: "0px 0px 15px rgba(248, 242, 242, 0.6)",
                      }}
                      src={emp?.profilePicture}
                      alt=""
                      className={` border-4  ${emp?.Bio ? "w-60 h-49" : "w-55 h-45"}  object-cover bg-center rounded-full `}
                    />
                  )}
                  <label htmlFor="file" className="absolute ml-45 mt-26">
                    <FaCamera size={27} className="text-slate-300" />
                  </label>
                  <input
                    type="file"
                    hidden
                    id="file"
                    onChange={(e) => ProfileHandler(e)}
                  />
                </motion.div>
                <motion.div className="space-y-2 w-full">
                  <motion.div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-cyan-400">
                      {emp?.name} {emp?.lastName}
                    </h1>
                    <span className="border px-2 border-green-800 rounded-xl bg-green-200 text-green-800 font-bold">
                      {emp?.role}
                    </span>
                  </motion.div>
                  <h1 className="font-bold">{emp?.designation} </h1>
                  <h1 className="font-bold">
                   <span className="text-cyan-400"> EMP</span> - {emp?.employeeId?.split("-")[1]}
                  </h1>

                  <p className="font-bold breaks-lines w-[85%]"><span className="text-cyan-400">Bio</span>: {emp?.Bio || 'N/A'}</p>
                </motion.div>
              </motion.div>
            </header>
            <main className="w-full  my-2 mx-1 flex gap-2 flex-wrap">
              <section className="text-white  w-[49.5%] bg-slate-800 mt-2 rounded-xl px-2 py-3 ">
                <h1 className="text-xl flex items-center gap-2 font-bold text-blue-400">
                  {" "}
                  <FaUser />
                  Personal Information
                </h1>

                <motion.div className="flex justify-evenly gap-8 font-bold">
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4 text-slate-300 ">
                    <span className="flex items-center gap-2 ">
                      <FaUser className="text-blue-400" /> Full Name{" "}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaVenusMars className="text-pink-400" /> Gender
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBirthdayCake className="text-purple-400" /> Date Of
                      Birth
                    </span>
                    <span className="flex items-center gap-2">
                      <FaPhone className="text-green-400" /> Phone Number
                    </span>
                    <span className="flex items-center gap-2">
                      <FaEnvelope className="text-cyan-400" /> Email
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-orange-400" /> Address
                    </span>
                  </motion.div>
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4">
                    <span>
                      {emp?.name} {emp?.lastName}
                    </span>
                    <span>{emp?.gender}</span>

                    <span>
                      {emp?.dateOfBirth
                        ? new Date(emp.joiningDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                    <span>+91 {emp?.phone}</span>
                    <span>{emp?.email} </span>
                    <span>{emp?.address || 'N/A'}</span>
                  </motion.div>
                </motion.div>
              </section>
              <section className="text-white  w-[49.5%] bg-slate-800 mt-2 p-2  font-bold rounded-xl">
                <h1 className="text-xl flex items-center gap-2 text-blue-400">
                  {" "}
                  <FaBriefcase /> Professional Information
                </h1>
                <motion.div className="flex justify-evenly gap-8 ">
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4 text-slate-300">
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaIdBadge className="text-blue-400" />
                      EmployeeId{" "}
                    </span>
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaBuilding className="text-purple-400" />
                      Department
                    </span>
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaBriefcase className="text-cyan-400" />
                      Designation
                    </span>
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaCalendarAlt className="text-green-400" />
                      Joining date
                    </span>
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaUserTie className="text-yellow-400" />
                      Manager Name
                    </span>
                    <span className="flex items-center gap-2 ">
                      {" "}
                      <FaClock className="text-orange-400" />
                      Work Type
                    </span>
                  </motion.div>
                  <motion.div className="flex flex-col gap-3 ml-4 mt-4">
                    <span>EMP-{emp?.employeeId?.split("-")[1]}</span>
                    <span>{emp?.departmentName}</span>
                    <span>{emp?.designation}</span>
                    <span>
                      {emp?.joiningDate
                        ? new Date(emp.joiningDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                    <span>{emp?.managerName}</span>
                    <span>{emp?.employmentType}</span>
                  </motion.div>
                </motion.div>
              </section>
              <section className="text-white w-[99.5%] rounded-xl bg-slate-800 p-2">
                <h1 className="text-xl  font-bold flex items-center gap-2">
                  <FaShieldAlt
                    size={35}
                    className="text-red-600 bg-red-300 p-2 rounded-xl"
                  />{" "}
                  <span className="text-blue-400">Account & Security</span>
                </h1>
                <motion.div className=" flex gap-4 py-2">
                  <motion.div
                    onClick={() => setSelectEmail((prev) => !prev)}
                    className="flex items-center gap-3 border bg-slate-700 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]"
                  >
                    <FaEnvelope
                      size={45}
                      className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"
                    />
                    <motion.div className="flex flex-col font-bold">
                      <span>Change Email</span>
                      <span className="text-xs text-slate-300">
                        Update your email address
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    onClick={() => setSelectPassword((prev) => !prev)}
                    className="flex items-center gap-3 border bg-slate-700 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]"
                  >
                    <FaLock
                      size={45}
                      className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"
                    />
                    <motion.div className="flex flex-col font-bold">
                      <span className="text-xl">Change Password</span>
                      <span className="text-xs text-slate-300">
                        Update your password
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    onClick={LogOutHandler}
                    className="flex items-center gap-3 border bg-slate-700 py-3 border-slate-700 cursor-pointer px-2 rounded-xl w-[20%]"
                  >
                    <FaSignOutAlt
                      size={45}
                      className="text-red-400 bg-red-500/19 p-2 rounded-xl"
                    />
                    <motion.div className="flex flex-col  font-bold">
                      <span className="text-xl">Logout</span>
                      <span className="text-xs text-slate-300">
                        Sign Out from this device
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </section>
            </main>
          </main>
        </motion.div>
        {selectEmail && (
          <div className="flex inset-0 z-50 absolute backdrop-blur-sm items-center justify-center">
            <IoClose
              onClick={() => setSelectEmail((prev) => !prev)}
              size={35}
              className="absolute ml-188 mb-82 text-white/25 cursor-pointer"
            />
            <motion.div
              whileInView={{
                boxShadow: "0px 0px 15px rgba(253, 205, 205, 0.6)",
              }}
              className="w-[40%] rounded-xl p-2 h-[40%] bg-white/15 border border-white/30"
            >
              <h1 className="text-xl font-bold text-center text-white">
                Update Email Address
              </h1>
              <div className="flex items-center justify-center h-[50%]">
                <motion.input
                  whileHover={{
                    boxShadow: "0px 0px 15px rgba(155, 231, 239, 0.6)",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter your new email "
                  className="outline-none border border-white/25 hover:border-cyan-400 px-2 py-3 font-bold text-white w-[80%] rounded-xl"
                />
              </div>
              <div className="w-full space-x-10 text-center">
                <motion.button
                  onClick={ChangeEmailHandler}
                  whileTap={{
                    scale: 1.02,
                  }}
                  className="text-center bg-green-600 px-4 text-white hover:bg-green-700 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Save Changes{" "}
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}

        {selectPassword && (
          <div className="inset-0 z-50 backdrop-blur-sm flex items-center justify-center absolute">
            <IoClose
              onClick={() => setSelectPassword((prev) => !prev)}
              size={35}
              className="absolute ml-188 mb-82 text-white/25 cursor-pointer"
            />
            <motion.div
              whileInView={{
                boxShadow: "0px 0px 15px rgba(240, 234, 234, 0.6)",
              }}
              className="w-[40%] rounded-xl p-2 h-[35%] bg-white/15 border border-white/30"
            >
              <h1 className="text-xl text-white font-bold text-center">
                Update Password
              </h1>
              <div className="flex items-center justify-center gap-4 h-[50%] px-4">
                <motion.div
                  whileHover={{
                    boxShadow: "0px 0px 19px rgba(106, 215, 249, 0.6)",
                  }}
                  className="flex w-full text-lg items-center justify-evenly   rounded-xl backdrop-blur-xl border border-white/15 hover:border-cyan-400"
                >
                  <motion.input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password "
                    className="outline-none rounded-l-xl px-2 text-white py-3 font-bold w-[90%] "
                  />
                  <span onClick={() => setShowPassword((prev) => !prev)} className="text-white/45">
                    {showPassword ? (
                      <IoEyeOff size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </span>
                </motion.div>
              </div>
              <div className="w-full space-x-10 text-center">
                <motion.button
                  onClick={ChangePasswordHandler}
                  whileTap={{
                    scale: 1.02,
                  }}
                  className="text-center bg-green-600 px-4 text-white hover:bg-green-700 py-2 rounded-xl font-bold cursor-pointer"
                >
                  Save Changes
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
};
export default EmpProfile;
