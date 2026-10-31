import {
  FaCamera,
  FaEdit,
  FaInbox,
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaEye,
  FaUsers,
  FaUser,
  FaBox,
  FaBriefcase,
  FaShieldAlt,
} from "react-icons/fa";
import {toast} from 'react-toastify'
import SideBar from "./SideBar";
import { motion, steps } from "motion/react";
import { FaLock, FaKey } from "react-icons/fa";
import { MdOutlineMail, MdLockReset } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { RiLockUnlockLine } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { clearUser, updateUser,updateUserProfileImage } from "../Redux/UserSlice.js";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const MyProfileComponent = () => { 
  const [image,setImage]=useState("")
  const dispatch=useDispatch();
const navigate=useNavigate();
const user=useSelector(store=>store.user.user);
console.log("user  ",user)
  const ImageHandler=async(e)=>{
    try {
      const file = e.target.files[0];
      console.log("kapil",file);
      const formData=new FormData();
      formData.append("image",file);
      const res=await axios.patch('http://localhost:5200/change-profileImage',formData,{
        withCredentials:true
      })
      console.log("res in image controller ",res);
      if(res.data.success){
        toast.success(res.data.message);
        setImage(res?.data?.user?.profilePicture)
        dispatch(updateUserProfileImage(res.data.user.profilePicture));
      }
    } catch (error) {
      console.log("error in imageHandler ",error);
    }
  }
   
  // console.log(image)
  const logoutHandler=async()=>{
    try {
      const res=await axios.post('http://localhost:5200/logout',{},{
        withCredentials:true
      })
      console.log("res in logout ",res);
      if(res.data.success){
          toast.success(res.data.message);
          dispatch(clearUser());
          navigate('/');
      }
      
    } catch (error) {
      console.log("error in logout handler ",error);
    }
  }
  const date = new Date(user.joiningDate);

console.log(date.toLocaleDateString("en-GB"));
  

  return (
    <>
      <main className="flex justify-between bg-slate-950 text-white h-screen w-screen">
        <SideBar />
        <motion.div
          initial={{
            opacity: 0,
            y: 5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="m-2  min-w-[82%] p-2 "
        >
          <header className="mt-2 ml-2 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-cyan-500">My Profile</h1>
              <h1>View and manage your personal information.</h1>
            </div>
           
          </header>
          <motion.div whileInView={
            {
              boxShadow:"0px 0px 20px rgba(241, 236, 236, 0.6)"
            }
          } className="mt-2  flex justify-between  px-2 py-6 rounded-xl bg-center object-cover" 
          style={{backgroundImage:`url(./adminBackground.png)`}}
          >
            <div className="flex items-center gap-4">
              <div className="px-2   w-fit relative flex">
                { 
                  user?.profilePicture? <img src={user?.profilePicture} alt="profile Image" className="h-48 w-82 text-blue-400 object-cover bg-center rounded-full"/> 
                 :<FaUserCircle className="h-39 w-39 text-blue-400 " />}
                
                
                <div className=" p-1 rounded-xl absolute w-fit h-fit ml-43">
                  <input type="file" id="img" accept="image/*" hidden  onChange={(e)=>ImageHandler(e)}/>
                  <label htmlFor="img" className="">
                    {" "}
                    <FaCamera size={30} className="  mt-26   rounded-xl" />
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-cyan-500">{user?.name} {user?.lastName}</span>
                <span className="font-semibold px-2 py-1 ml-2 rounded-xl bg-green-600">
                  Manager
                </span>
                </div>
                <h1 className="text-gray-300 mt-2">MGR-{user?.employeeId.split("-")[1]}</h1>
                <p className="font-bold break-lines max-w-[70%]">
                  {" "}
                 {user?.Bio}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex min-h-[45%] mt-6 rounded-xl gap-4">
            <section className=" rounded-xl min-w-[35.5%] bg-slate-800 px-3 ">
             <div className="flex items-center justify-between">
              
               <h1 className="text-3xl font-bold flex items-center gap-2 text-cyan-500"><FaUser size={25}/> Personal Information</h1>
              
               <motion.button onClick={()=>navigate('/edite-profile')}
              whileTap={{
                scale: 1.01,
                boxShadow: "0px 0px 15px rgba(242, 237, 237, 0.7)",
              }}
              className="flex gap-2 items-center mr-2   px-2 py-1 cursor-pointer rounded-xl  bg-green-800 "
            >
              <FaEdit />
              <span>Edit Profile</span>
            </motion.button>
             </div>
              <div className="mt-8 flex justify-between">
                <div className="text-gray-300 flex flex-col gap-3 text-xl">
                  <span>Full Name </span>
                  <span>Gender</span>
                  <span>Address</span>
                  <span>Phone Number</span>
                  <span>Email</span>
                  
                  <span>Date of birth</span>
                </div>
                <div className="text-gray-400 flex flex-col gap-3 max-w-[35%]">
                  <span>{user.name} {user.lastName}</span>
                  <span>Male</span>
                  <span className="break-lines">
                   {user?.address}
                  </span>
                  <span>{user?.phone}</span>
                  <span>{user?.email}</span>
                  
                  <span>15 Jun. 1999</span>
                </div>
              </div>
            </section>
            <section className=" rounded-xl min-w-[63.5%] flex gap-2">
              <div className="bg-slate-800 w-[60%] p-2 rounded-xl">
              
                <h1 className="text-3xl font-bold text-cyan-500 flex items-center gap-2">  <FaBriefcase/> Professional Information</h1>
              <div className="mt-8 w-full flex justify-between ">
                <div className="text-gray-300 flex w-full pl-2 flex-col gap-5 text-xl">
                  <span>EmployeeId </span>
                  <span>Joining Date</span>
                  <span>Department</span>
                  <span>Designation</span>
                  <span>Reporting To </span>
                </div>
                <div className="text-gray-400 flex flex-col  gap-5 text-xl w-full">
                  <span>MGR-{user?.employeeId.split("-")[1]}</span>
                  <span>{date.toLocaleDateString("en-GB")}</span>
                  <span className="break-lines">IT</span>
                  <span >{user?.designation}</span>
                  <span className="text-blue-600">Admin</span>
                </div>
              </div>
              </div>
              <div className="flex w-[40%] rounded-xl flex-col gap-8 bg-slate-800 h-full p-2 border-slate-600">
               
                <h1 className="text-2xl gap-2 text-cyan-500 font-bold flex items-center">  <FaShieldAlt/>Account & Security</h1>
               
                <motion.button  
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(76, 142, 235, 0.7)"
                }}
                className=" flex gap-2 mt-8 font-bold justify-center items-center cursor-pointer  px-4 py-2 rounded-xl bg-blue-600 hover:brightness-110"><FaLock size={15}/> Change Password</motion.button>
                <motion.button  
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(84, 241, 152, 0.7)"
                }}
                className=" flex gap-2 font-bold justify-center items-center cursor-pointer  px-4 py-2 rounded-xl bg-teal-600 hover:brightness-110"><MdOutlineMail size={19}/> Change Email </motion.button>
                <motion.button 
                onClick={logoutHandler}
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(238, 85, 238, 0.7)"
                }}
                className=" flex gap-2 font-bold justify-center items-center cursor-pointer  px-4 py-2 rounded-xl bg-violet-600 hover:brightness-110"><MdLockReset size={19}/> Logout</motion.button>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </>
  );
};
export default MyProfileComponent;
