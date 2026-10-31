import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../Redux/UserSlice.js";

import PublicNavbar from "../Home/PublicNavbar.jsx";
import { setEmployee } from "../Redux/EmployeeSlice.js";
// import Footer from "../LandingPages/Footer.jsx";

const LoginHandler = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [FocusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5200/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log("res in login ", res);
      if (res.data.success) {
       
        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
         dispatch(setEmployee(res.data.user));

        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("error in login ");
    }
  };
  const signUpHandler = () => {
    navigate("/sign-up");
  };
  return (
    <div className="w-screen h-screen">
      <PublicNavbar />
      <div className="h-[15%]"></div>
      <motion.div initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, }} className=" flex justify-center   items-center h-[81%] w-screen text-white  ">
        <div className="border border-cyan-950 h-full w-[35%] flex flex-col rounded-l-xl  justify-between items-center">
          <div>
            <motion.h1
              animate={{
                textShadow: "0px 0px 10px rgba(12, 126, 239, 0.8)",
              }}
              className="text-4xl font-black mr-10 mt-2"
            >
              Employee <br />{" "}
              <span className="text-blue-400">Management System</span>
            </motion.h1>
            <p className="font-bold text-gray-400 mr-9">
              Manage people, streamline operations, and <br />
              build a productive workplace.
            </p>
          </div>
          <img
            src={`./RegisterImage.png`}
            alt="photo"
            className="h-[77%] w-full rounded-l-xl  "
          />
        </div>
        <div className="border-b border-t border-r h-full w-[50%] rounded-r-xl  border-cyan-950 flex flex-col  justify-center items-center bg-slate-950 ">
          <motion.div
            animate={{
              boxShadow: "0px 0px 15px rgba(21, 144, 172, 0.6)",
            }}
            className="bg-slate-900  border border-slate-600 bg-blur-sm w-[70%] h-[95%] flex justify-center flex-col items-center rounded-xl"
          >
            <motion.strong
              animate={{
                textShadow: "0px 0px 10px rgba(49, 196, 233, 0.8)",
              }}
              className="text-center text-4xl mb-4  text-white"
            >
              Welcome Back
            </motion.strong>
            <p className="text-gray-400 ">
              Login to your Employee Management System
            </p>
            <div className="flex flex-col gap-6  w-[70%] ">
              <motion.div
                animate={{
                  scale: FocusedInput == "Email" ? 1.06 : 1,
                  boxShadow:
                    FocusedInput == "Email"
                      ? "0px 0px 15px rgba(55, 162, 233, 0.6)"
                      : "",
                }}
                transition={{
                  duration: 1,
                }}
                className="flex mb-6 border h-[65%] mt-4 rounded-lg justify-center items-center  border border-slate-600 hover:border-blue-400"
              >
                <MdOutlineEmail className="ml-2" size={22} />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput("Email")}
                  onBlur={() => setFocusedInput(null)}
                  type="email"
                  placeholder="Enter Email "
                  className=" outline-none font-black text-lg py-3 px-2 w-full "
                />
              </motion.div>
              <div className="">
                <motion.div
                  animate={{
                    scale: FocusedInput == "Password" ? 1.06 : 1,
                    boxShadow:
                      FocusedInput == "Password"
                        ? "0px 0px 15px rgba(55, 162, 233, 0.6)"
                        : "",
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="flex border rounded-lg border-slate-600 hover:border-blue-400  h-[65%] justify-center font-black text-lg items-center"
                >
                  <RiLockPasswordLine className="ml-2" size={22} />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput("Password")}
                    onBlur={() => setFocusedInput(null)}
                    type={`${showPassword ? "password" : "text"}`}
                    placeholder="Enter password "
                    className=" outline-none py-3 px-2 w-full "
                  />
                  <span
                    onClick={showPasswordHandler}
                    className="mr-2 cursor-pointer "
                  >
                    {showPassword ? (
                      <BiShow className="mr-2" />
                    ) : (
                      <BiSolidHide className="mr-2" />
                    )}
                  </span>
                </motion.div>
                <span className="text-blue-600 font-bold ml-[68%]  cursor-pointer">
                  Forgot Password
                </span>
              </div>
              <motion.button
                onClick={loginHandler}
                whileTap={{
                  scale: 1.05,
                }}
                whileHover={{
                  boxShadow: "0px 0px 10px rgba(248, 245, 244, 0.5)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="bg-blue-600 py-3 text-xl rounded-lg font-bold cursor-pointer"
              >
                Login
              </motion.button>
            </div>
            <div className="text-lg mt-2">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={signUpHandler}
                  className=" text-blue-600 underline cursor-pointer"
                >
                  Sign-up
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <Footer/> */}
    </div>
  );
};
export default LoginHandler;
