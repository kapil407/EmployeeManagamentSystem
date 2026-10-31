import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice.js";
import PublicNavbar from "../Home/PublicNavbar.jsx";
import Footer from "../LandingPages/Footer.jsx";
const RegisterController = () => {
  const dispatch=useDispatch();
  const [FocuseInput, setFocusInput] = useState(null);
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [lastName,setLastName]=useState();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
    const registerHandler=async()=>{
       try {
        console.log("error");
         const res=await axios.post('http://localhost:5200/register',{
           name,lastName,email,password
         },
         {
          withCredentials:true
         }

        )
         console.log("res register->> ",res);
         if(res.data.succes){
            toast.success(res.data.message);
            dispatch(setUser(res.data.user));
            navigate('/login');
         }
       } catch (error) {
       toast.error(error.response?.data?.message || "Registration failed");
          console.error("register error ",error);
       }

    }

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen ">
    <PublicNavbar/>
     <div className="h-[15%]"></div>
      <motion.div initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, }} className=" flex justify-center  items-center h-[81%] w-screen  text-white  ">
         
        <div className="border border-cyan-950 h-full  w-[35%] flex flex-col rounded-l-xl  justify-between items-center">
          
          <div>
            <motion.h1
              animate={{
                textShadow: "0px 0px 15px rgba(15, 73, 235, 0.7)",
              }}
              className="text-4xl font-black mt-2 mr-10"
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
            className="h-[77%] w-full rounded-l-xl"
          />
        </div>
        <motion.div className="border-b border-t border-r h-full  w-[35%] w-[50%] border-cyan-950 flex flex-col rounded-r-xl  justify-center items-center bg-slate-950 ">
        
          <motion.div
            animate={{
              boxShadow: "0px 0px 15px rgba(21, 144, 172, 0.6)",
            }}
            className="bg-slate-900 border border-slate-600 bg-blur-sm w-[70%] h-[95%] py-2 flex justify-center  flex-col items-center rounded-xl"
          >
            <motion.strong
              animate={{
                textShadow: "0px 0px 20px rgba(157, 183, 239, 0.7)",
              }}
              className="text-center text-4xl mb-4 text-slate-200"
            >
              Create an Account
            </motion.strong>
            <p className="text-gray-400">Get started with your free account</p>
            <div className="flex flex-col gap-6  w-[70%] ">
              <motion.div
                animate={{
                  scale: FocuseInput === "FirstName" ? 1.05 : 1,
                  boxShadow:
                    FocuseInput === "FirstName"
                      ? "0px 0px 15px rgba(7, 85, 162, 0.5)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex mb-4 border h-[13%] justify-center items-center mt-6 border border-slate-600 rounded-lg hover:border-blue-400"
              >
                <IoPersonOutline className="ml-2 " size={22} />
                <motion.input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                  onFocus={() => setFocusInput("FirstName")}
                  onBlur={() => setFocusInput(null)}
                  type="text"
                  placeholder="Enter FirstName "
                  className=" font-black text-lg  outline-none py-3 px-2 w-full "
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: FocuseInput === "LastName" ? 1.05 : 1,
                  boxShadow:
                    FocuseInput === "LastName"
                      ? "0px 0px 15px rgba(7, 85, 162, 0.5)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex mb-4 border h-[13%] justify-center items-center border border-slate-600 rounded-lg hover:border-blue-400"
              >
                <IoPersonOutline className="ml-2" size={22} />
                <motion.input
                value={lastName}

                onChange={e=>setLastName(e.target.value)}
                  onFocus={() => setFocusInput("LastName")}
                  onBlur={() => setFocusInput(null)}
                  type="text"
                  placeholder="Enter LastName "
                  className=" outline-none font-black text-lg py-3 px-2 w-full "
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: FocuseInput == "Email" ? 1.05 : 1,
                  boxShadow:
                    FocuseInput === "Email"
                      ? "0px 0px 15px rgba(7, 85, 162, 0.5)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex mb-4 border h-[13%] justify-center items-center  border border-slate-600 rounded-lg hover:border-blue-400"
              >
                <MdOutlineEmail className="ml-2" size={22} />
                <motion.input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                  onFocus={() => setFocusInput("Email")}
                  onBlur={() => setFocusInput(null)}
                  type="email"
                  placeholder="Enter Email "
                  className=" outline-none font-black text-lg py-3 px-2 w-full "
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: FocuseInput == "Password" ? 1.05 : 1,
                  boxShadow:
                    FocuseInput === "Password"
                      ? "0px 0px 15px rgba(7, 85, 162, 0.5)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex rounded-lg border border-slate-600 hover:border-blue-400  h-[13%] justify-center font-black text-lg items-center"
              >
                <RiLockPasswordLine className="ml-2" size={22} />
                <motion.input
                value={password}
                onChange={e=>setPassword(e.target.value)}

                  onFocus={() => setFocusInput("Password")}
                  onBlur={() => setFocusInput(null)}
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
              <motion.button
              onClick={registerHandler}
                whileTap={{
                  scale: 1.05,
                }}
                whileHover={{
                  boxShadow: "0px 0px 10px rgba(248, 245, 244, 0.5)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="bg-blue-600 py-3 text-lg rounded-lg font-black cursor-pointer"
              >
                Create Account
              </motion.button>
            </div>
            <div className="text-lg mt-2">
              <p>
                Already have an account?{" "}
                <span
                  onClick={loginHandler}
                  className=" text-blue-600 underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <Footer/> */}
    </div>
  );
};
export default RegisterController;
