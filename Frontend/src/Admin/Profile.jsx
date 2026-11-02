import NavBarHandler from "../Home/PrivateNavbar";
import {
  FaAddressBook,
  FaCircle,
  FaEye,
  FaEyeSlash,
  FaGenderless,
  FaVenusMars,
} from "react-icons/fa";
import { motion } from "motion/react";
import {
  FaUser,
  FaHome,
  FaChevronRight,
  FaBuilding,
  FaLock,
  FaSignOutAlt,
  FaCamera,
  FaEdit,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaIdCard,
  FaUserCircle,
  FaKey,
  FaUserShield,
  FaSignInAlt,
  FaCalendarPlus,
} from "react-icons/fa";
import Footer from "../LandingPages/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearUser, updateUserProfileImage } from "../Redux/UserSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearManager } from "../Redux/ManagerSlice.js";
import { clearDepartment } from "../Redux/DepartmentSlice.js";
import { FaLeftLong } from "react-icons/fa6";
import { useState } from "react";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [selected, setSelected] = useState(false);

  const { user } = useSelector((store) => store.user);
  console.log("user  ", user);
  const navigate = useNavigate();

  const ProfileImageHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.patch(
        "http://localhost:5200/change-profileImage",
        formData,
        {
          withCredentials: true,
        },
      );
      console.log("res in admin profilr ", res);
      if (res.data.success) {
        dispatch(updateUserProfileImage(res?.data?.user?.profilePicture));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  const LogoutHandler = async () => {
    try {
      console.log("kapil");
      const res = await axios.post(
        "http://localhost:5200/logout",
        {},
        { withCredentials: true },
      );
      console.log(res);
      if (res.data.success) {
        dispatch(clearUser());
        dispatch(clearManager());
        dispatch(clearDepartment());
        toast.success(res.data.message);

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="w-screen h-screen">
      <NavBarHandler />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="w-screen h-[76%] bg-slate-900 text-white flex justify-center"
      >
        <div className="flex flex-col   h-full w-[90%] px-4 py-1.5 rounded-lg">
          <header className="flex justify-between w-full items-center px-2 bg-white/8  rounded-xl mb-2 h-[10%]">
            <div className="flex items-center gap-8 h-full gap-1">
              <button className="flex items-center gap-2 cursor-pointer hover:text-cyan-500 font-bold">
                <FaLeftLong /> Back{" "}
              </button>
              <div>
                <h1 className="text-2xl font-bold text-cyan-500">
                  Admin Profile
                </h1>
                <h1 className="text-gray-400 ">
                  Manage your account information
                </h1>
              </div>
            </div>
            <div className="flex  justify-bteween items-center h-full">
              <div className="flex items-center gap-1 mr-1">
                <FaHome />

                <h1>Dashboard</h1>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                className="flex items-center gap-1"
              >
                <FaChevronRight />
                <motion.button>Admin Profile</motion.button>
              </motion.div>
            </div>
          </header>

          <div className="w-full h-full flex gap-2 ">
            <div className="w-full h-full   rounded-lg gap-2 flex flex-col">
              <motion.div
                whileInView={{
                  boxShadow: "0px 0px 10px rgba(239, 233, 233, 0.5)",
                }}
                style={{
                  backgroundImage: "url('/adminBackground.png')",
                }}
                className="w-full bg-cover bg-center overflow-hidden py-8  bg-slate-600 rounded-lg"
              >
                <div className="flex items-center h-full justify-between  mx-4">
                  <div className="flex items-center justify-between w-[85%]">
                    <div className="flex items-center  relative">
                      <input
                        type="file"
                        id="file"
                        hidden
                        onChange={(e) => ProfileImageHandler(e)}
                      />
                      {!user?.profilePicture ? (
                        <FaUserCircle
                          style={{
                            boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                          }}
                          className="w-39 h-39 border-4 border-gray-400 rounded-full absolute "
                        />
                      ) : (
                        <motion.img
                          whileInView={{
                            boxShadow: "0px 0px 15px rgba(23, 140, 243, 0.7)",
                          }}
                          src={user?.profilePicture}
                          alt=""
                          className="w-43 h-43 border-4 border-gray-400 object-cover bg-center rounded-full absolute "
                        />
                      )}
                      <label
                        htmlFor="file"
                        className="cursor-pointer z-[50] abosulte   left-0 ml-38 mt-10 right-0 buttom-0"
                      >
                        <FaCamera
                          className="text-slate-600 text-xl "
                          size={35}
                        />
                      </label>
                    </div>

                    <div className="w-full  pl-4">
                      <div className="flex gap-1 items-center">
                        <FaUserShield size={20} />
                        <h1 className="font-bold">Admin</h1>
                      </div>
                      <div className="w-full">
                        <h1 className="text-3xl font-bold">
                          {user.name} {user.lastName}
                        </h1>
                        <h1 className="text-lg font-bold text-gray-400">
                          System Administrator
                        </h1>
                        <p className="font-bold w-full mt-2">{user.Bio}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => navigate("/edite-profile")}
                    className="flex items-center gap-1 border border-slate-600 px-2 py-1 rounded-xl  bg-blue-800"
                  >
                    <FaEdit />
                    <button className="cursor-pointer">Edit Profile</button>
                  </div>
                </div>
              </motion.div>

              <div className="flex gap-4">
                <div className="w-[50%] h-auto bg-slate-800 mt-2 rounded-lg px-4 py-2">
                  <div className="">
                    <h1 className="text-xl font-bold">Personal information</h1>
                    <h1 className="text-gray-200">
                      Your basic details and contact information
                    </h1>
                  </div>
                  <div className="flex justify-evenly  gap-1 py-2 mt-2 font-bold">
                    <div className="flex flex-col gap-4 px-2 text-slate-400">
                      <span className="flex items-center gap-2">
                        <FaUser /> Full Name
                      </span>
                      <span className="flex items-center gap-2">
                        <FaEnvelope /> Email
                      </span>
                      <span className="flex items-center gap-2">
                        {" "}
                        <FaVenusMars /> Gender
                      </span>
                      <span className="flex items-center gap-2">
                        <FaPhone /> Phone Number
                      </span>

                      <span className="flex items-center gap-2">
                        {" "}
                        <FaAddressBook /> Address
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                      <span>
                        {user.name} {user.lastName}
                      </span>
                      <span>{user.email}</span>
                      <span>{user?.gender} Male</span>
                      <span>{user.phone}</span>

                      <span>{user.address} Sultanpur</span>
                    </div>
                  </div>
                </div>
                <div className="w-[50%]  h-auto rounded-lg mt-1 py-2 bg-slate-800">
                  <div className="flex  flex-col ">
                    <div className="flex justify-between mx-2 ">
                      <div className="flex items-center gap-1">
                        <h1 className="font-bold text-xl">Account Status</h1>
                      </div>
                      <div className="flex items-center border border-slate-800 px-4 rounded-xl bg-green-500 text-green-900 gap-1">
                        <FaCircle size={10} />
                        <button>Active</button>
                      </div>
                    </div>
                    <div className="mx-2 mt-2 px-8 gap-2">
                      <div className="flex justify-between mt-2 ">
                        <div className="flex items-center gap-2">
                          <FaIdCard className="text-slate-300" />
                          <h1 className="text-slate-300">EmployeeId</h1>
                        </div>
                        <h1>ADM-{user.employeeId.split("-")[1]}</h1>
                      </div>

                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <FaBuilding className="text-slate-300" />
                          <h1 className="text-slate-300">Role</h1>
                        </div>
                        <h1>{user.role}</h1>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-slate-300" />
                          <h1 className="text-slate-300">joining Date</h1>
                        </div>
                        <h1>15 Sep 2026</h1>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-slate-300" />
                          <h1 className="text-slate-300">Account created</h1>
                        </div>
                        <h1>02 Oct 2026</h1>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <FaSignInAlt className="text-slate-300" />
                          <h1 className="text-slate-300">Last login</h1>
                        </div>
                        <h1>03 Oct 2026</h1>
                      </div>

                      <div className="mt-1">
                        <h1 className="text-lg font-bold ">Quick actions</h1>
                        <div className="flex flex-wrap mt-2 gap-4">
                          <motion.button
                            onClick={() => setSelected((prev) => !prev)}
                            whileTap={{
                              scale: 1.02,
                              boxShadow:
                                "0px 0px 15px rgba(224, 195, 195, 0.5)",
                            }}
                            className=" text-blue-600 border flex bg-blue-400 items-center justify-center gap-2 border-slate-600 px-2 py-2 font-bold  cursor-pointer rounded-xl "
                          >
                            <FaLock className="text-blue-600" />
                            Change password
                          </motion.button>
                          <motion.button
                            onClick={LogoutHandler}
                            whileTap={{
                              scale: 1.02,
                              boxShadow:
                                "0px 0px 15px rgba(224, 195, 195, 0.5)",
                            }}
                            className="border border-slate-600  flex items-center justify-center gap-2 px-2 py-2 font-bold cursor-pointer rounded-xl bg-red-400 text-red-600"
                          >
                            <FaSignOutAlt className="text-red-600" />
                            Logout
                          </motion.button>
                          <motion.button
                            whileTap={{
                              scale: 1.02,
                              boxShadow:
                                "0px 0px 15px rgba(224, 195, 195, 0.5)",
                            }}
                            className="border border-slate-600 flex items-center justify-center gap-2 px-2 py-2 font-bold cursor-pointer rounded-xl bg-red-400 text-red-600"
                          >
                            <FaSignOutAlt className="text-red-600" />
                            Logout from all devices
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />

      {selected && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-3">
          <motion.div whileInView={{
            boxShadow:"0px 0px 17px rgba(248, 193, 193, 0.6)"
          }} className="text-white gap-4 flex-col py-8 w-[40%] p-2 rounded-xl h-[30%] flex items-center justify-center bg-white/15">
            <div className="border flex items-center gap-4 w-[70%] rounded-xl">
              <input
                type={showPass ? "text" : `password`}
                placeholder="Enter new password "
                className="outline-none  w-[90%] px-3 font-bold rounded-xl  py-2"
              />
              <span
                onClick={() => setShowPass((prev) => !prev)}
                className="cursor-pointer"
              > 
               {showPass?<FaEyeSlash />: <FaEye />}
              </span>
            </div>
            <div className="flex gap-8">
              <button className="border border-gray-500 cursor-pointer px-2 py-1 rounded-xl bg-slate-700 hover:bg-slate-600 text-gray-200" onClick={()=>setSelected(prev=>!prev)}>
                Cancel Changes
              </button>
              <button className="border border-blue-400 rounded-xl px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer ">
                Update Password
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default AdminProfile;
