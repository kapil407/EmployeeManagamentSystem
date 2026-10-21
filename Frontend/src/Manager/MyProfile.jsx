import {
  FaCamera,
  FaEdit,
  FaInbox,
  FaUserCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
import { FaLock, FaKey } from "react-icons/fa";
import { MdOutlineMail, MdLockReset } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { RiLockUnlockLine } from "react-icons/ri";
import { useState } from "react";
const MyProfileComponent = () => {
  const [image,setImage]=useState("")
    const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  console.log(image)
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
          <div className="mt-2  flex justify-between bg-slate-800 p-2 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-4   w-fit relative flex">
                { 
                  image && <img src={image} alt="profile Image" className="h-39 w-39 text-blue-400 object-cover bg-center rounded-full"/> }
                {!image && <FaUserCircle className="h-39 w-39 text-blue-400 " />
                }
                
                <div className=" p-1 rounded-xl absolute w-fit h-fit ml-32">
                  <input type="file" id="img" accept="image/*" hidden  onChange={handleImage}/>
                  <label htmlFor="img" className="">
                    {" "}
                    <FaCamera size={30} className="  mt-25   rounded-xl" />
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-3xl font-bold">Rahul Sharma</span>
                <span className="font-semibold px-2 py-1 ml-2 rounded-xl bg-green-600">
                  Manager
                </span>
                <h1 className="text-gray-300 mt-2">MGR2026</h1>
                <p className="font-bold">
                  {" "}
                  A MERN Stack Developer skilled in MongoDB, Express.js,
                  React.js, and Node.js, with knowledge of Java and SQL.
                  <br /> Passionate about building responsive web applications,
                  developing RESTful APIs, managing databases, and writing
                  clean, <br />
                  efficient code to create scalable and user-friendly software
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-h-[61%] mt-2 rounded-xl gap-4">
            <section className=" rounded-xl min-w-[35.5%] bg-slate-800 p-3">
             <div className="flex items-center justify-between">
               <h1 className="text-3xl font-bold">Personal Information</h1>
               <motion.button
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
                </div>
                <div className="text-gray-400 flex flex-col gap-3 max-w-[35%]">
                  <span>Kapil Kumar</span>
                  <span>Male</span>
                  <span className="break-lines">
                    225, Sultanpur Hapur Uttar Pardehs 245101
                  </span>
                  <span>9717828288</span>
                  <span>Kapil@gmail.com</span>
                </div>
              </div>
            </section>
            <section className=" rounded-xl min-w-[63.5%] bg-slate-800 p-3">
              <h1 className="text-3xl font-bold">Account & Security</h1>
              <div className="mt-8 flex justify-between">
                <div className="text-gray-300 flex flex-col gap-3 text-xl">
                  <span>EmployeeId </span>
                  <span>Joining Date</span>
                  <span>Department</span>
                  <span>Designation</span>
                  <span>Reporting To </span>
                </div>
                <div className="text-gray-400 flex flex-col gap-3 text-xl max-w-[35%]">
                  <span>MGR_3652</span>
                  <span>21 Sept 2025</span>
                  <span className="break-lines">IT</span>
                  <span>Software Developer Engineer</span>
                  <span className="text-blue-600">Admin</span>
                </div>
              </div>
              <div className="flex mt-18 gap-8 border-t  pt-4 border-slate-600">
                <motion.button  
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(76, 142, 235, 0.7)"
                }}
                className=" flex gap-2 items-center cursor-pointer  px-4 py-2 rounded-xl bg-blue-600 hover:brightness-110"><FaLock size={15}/> Change Password</motion.button>
                <motion.button  
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(84, 241, 152, 0.7)"
                }}
                className=" flex gap-2 items-center cursor-pointer  px-4 py-2 rounded-xl bg-teal-600 hover:brightness-110"><MdOutlineMail size={19}/> Update Email</motion.button>
                <motion.button 
                whileTap={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(238, 85, 238, 0.7)"
                }}
                className=" flex gap-2 items-center cursor-pointer  px-4 py-2 rounded-xl bg-violet-600 hover:brightness-110"><MdLockReset size={19}/> Logout</motion.button>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </>
  );
};
export default MyProfileComponent;
