import NavBarHandler from "../Home/PrivateNavbar";
import { FaCircle } from "react-icons/fa";
import {motion} from 'motion/react'
import {
  //  🔔 Notification	FaBell
  	FaUser,
  FaHome,
  FaChevronRight,

  // 👥 Employees	FaUsers
  // 👔 Managers	FaUserTie
	FaBuilding,
  // 📊 Reports	FaChartLine
  // 🛡️ Security	FaShieldAlt
  // ⚙️ Preferences	FaCog
  // 💼 Work Information	FaBriefcase
FaLock,
	FaSignOutAlt,
  FaCamera,
 	FaEdit,
  	FaPhone,
	FaEnvelope,
  	FaCalendarAlt,
  	FaIdCard,
  FaUserCircle,
  // ⬆️ Upload image	FaUpload
  // 💻 Desktop session	FaDesktop
  // 📱 Mobile session	FaMobileAlt
  // ✅ Active	FaCheckCircle
  	FaKey,
  FaUserShield,
  FaSignInAlt ,
  FaCalendarPlus ,
  
 
} from "react-icons/fa";
import Footer from "../LandingPages/Footer";

const AdminProfile = () => {
  return (
    <div className="w-screen h-screen">
      <NavBarHandler />
      <div className="w-screen h-[76%] text-white flex justify-center">
        <div className="flex flex-col   h-full w-[80%] px-4 py-2 rounded-lg">
          <div className="flex justify-between w-full items-center   h-[10%]">
            <div className="flex flex-col  h-full gap-1">
              <h1 className="text-2xl font-bold text-cyan-600">Admin Profile</h1>
              <h1 className="text-gray-400">Manage your account information</h1>
            </div>
            <div className="flex  justify-bteween items-center h-full">
              <div className="flex items-center gap-1 mr-1">
                <FaHome />

                <h1>Dashboard</h1>
              </div>
              < motion.div 
              whileHover={{
                scale:1.1
              }}
              className="flex items-center gap-1">
                <FaChevronRight />
                <motion.button
              
                >Admin Profile</motion.button>
              </motion.div>
            </div>
          </div>
          <div className="w-full h-full flex gap-2 ">
            <div className="w-[60%] h-full  rounded-lg gap-2 flex flex-col">
              <div
                style={{
                  backgroundImage: "url('/adminBackground.png')",
               
                 
                }}
                className="w-full bg-cover bg-center overflow-hidden h-[50%] bg-slate-600 rounded-lg"
              >
                <div className="flex items-center h-full justify-between  mx-4">
                  <div className="flex items-center justify-between w-[65%]">
                    <div className="flex items-center  relative">
                      <input type="file" id="file" hidden />
                      <FaUserCircle
                        style={{
                          boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                        }}
                        className="w-35 h-35 border-8 border-gray-400 rounded-full absolute "
                      />
                      <label
                        htmlFor="file"
                        className="cursor-pointer z-[50] abosulte   left-0 ml-30 mt-10 right-0 buttom-0"
                      >
                        <FaCamera
                          className="text-slate-600 text-xl "
                          size={35}
                        />
                      </label>
                    </div>
                    <div>
                      <div>
                        <div className="flex gap-1 items-center">
                          <FaUserShield size={20} />
                          <h1 className="font-bold">Admin</h1>
                        </div>
                        <div>
                          <h1 className="text-3xl font-bold">Kapil Kumar</h1>
                          <h1 className="text-lg font-bold">
                            System Administrator
                          </h1>
                          <h1>Managaing organization and its resources</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 border border-slate-600 px-2 py-1 rounded-xl  bg-blue-800">
                     <FaEdit/>
                    <button className="cursor-pointer">
                       
                      Edit Profile</button>
                  </div>
                </div>
             
              </div>
              <div className="w-full h-[50%] bg-slate-900 rounded-lg px-4 py-2">
               <div className="">
                 <h1 className="text-xl font-bold">Personal information</h1>
                <h1 className="text-gray-200">Your basic details and contact information</h1>
               </div>
               <div className="flex flex-wrap gap-1 mt-2">
               <div  className="flex w-[45%]  px-3 py-2 flex-col  ">
                 <label>First Name</label>
                <motion.h1   
                whileHover={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(234, 182, 182, 0.5)"
                }}
                className="border w-full flex items-center gap-2 px-3 py-2  border-slate-600  rounded-lg bg-gray-800">
                  <FaUser/>
                  Kapil</motion.h1>
               </div>
               <div className="flex w-[45%]  px-3 py-2  flex-col  ">
                 <label>Last Name</label>
                <motion.h1  
                whileHover={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(234, 182, 182, 0.5)"
                }}
                className="border w-full px-3 py-2 border-slate-600 flex items-center gap-2  rounded-lg bg-gray-800">
                  <FaUser/>
                  Kumar</motion.h1>
               </div>
                <div className="flex w-[45%]  px-3 py-2  flex-col  ">
                  <label>Email Address</label>
                <motion.h1 
                whileHover={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(234, 182, 182, 0.5)"
                }}
                className="border w-full px-3 py-2 flex items-center gap-2  border-slate-600 rounded-lg bg-gray-800">
                  <FaEnvelope/>
                  kapil@gmail.com</motion.h1>
                </div>
               <div className="flex w-[45%]  px-3 py-2  flex-col  ">
                 <label>Phone Number</label>
                <motion.h1  
               whileHover={{
                  scale:1.02,
                  boxShadow:"0px 0px 15px rgba(234, 182, 182, 0.5)"
                }}
                className="border w-full px-3 py-2  border-slate-600 rounded-lg flex items-center gap-2 bg-gray-800"> 
                  <FaPhone/>
                  9717828288</motion.h1>
               </div>
               </div>
              </div>
            </div>
            <div className="w-[40%]  h-full rounded-lg bg-slate-900">
                    <div>
                      <div className="flex justify-between mx-2 mt-1">
                        <div className="flex items-center gap-1">
                        
                          <h1 className="font-bold">Account Status</h1>
                        </div>
                      <div className="flex items-center border border-slate-800 px-4 rounded-xl bg-green-500 text-green-900 gap-1">
                          <FaCircle size={10}/>
                          <button>Active</button>
                      </div>
                      </div>
                     <div className="mx-2 mt-2 gap-2">
                       <div className="flex justify-between mt-2 ">
                       <div className="flex items-center gap-2">
                         <FaIdCard className="text-slate-300"/>
                        <h1 className="text-slate-300">EmployeeId</h1>
                       </div>
                          <h1>kapil20213</h1>
                       </div>
                      <div className="flex justify-between mt-2 ">
                      <div className="flex items-center gap-2">
                          <	FaEnvelope className="text-slate-300"/>
                        <h1 className="text-slate-300">email</h1>
                      </div>
                        <h1>kapil@gmail.com</h1>
                      </div>
                     <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                          <	FaPhone className="text-slate-300"/>
                        <h1 className="text-slate-300">Phone</h1>
                      </div>
                        <h1>9717828288</h1>
                      </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                          <	FaBuilding className="text-slate-300"/>
                        <h1 className="text-slate-300">Department</h1>
                      </div>
                        <h1>IT</h1>
                      </div>
                      <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                          <	FaCalendarAlt className="text-slate-300"/>
                        <h1 className="text-slate-300">joining Date</h1>
                      </div>
                        <h1>15 Sep 2026</h1>
                      </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                          <	FaEnvelope className="text-slate-300"/>
                        <h1 className="text-slate-300">Account created</h1>
                      </div>
                        <h1>02 Oct 2026</h1>
                      </div>
                        <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                          <	FaSignInAlt className="text-slate-300"/>
                        <h1 className="text-slate-300">Last login</h1>
                      </div>
                        <h1>03 Oct 2026</h1>
                      </div>

                      <div className="mt-2">
                        <h1 className="text-lg font-bold mt-2">Quick actions</h1>
                        <div className="flex flex-col mt-2 gap-4">
                          <motion.button  
                          whileTap={{
                            scale:1.02,
                            boxShadow:"0px 0px 15px rgba(224, 195, 195, 0.5)"
                          }}
                          className=" text-blue-600 border flex bg-blue-400 items-center justify-center gap-2 border-slate-600 px-2 py-2 font-bold  cursor-pointer rounded-xl ">
                            <	FaLock className="text-blue-600"/>
                            Change password
                            </motion.button>
                            <motion.button 
                            whileTap={{
                              scale:1.02,
                              boxShadow:"0px 0px 15px rgba(224, 195, 195, 0.5)"
                            }}
                            className="border border-slate-600  flex items-center justify-center gap-2 px-2 py-2 font-bold cursor-pointer rounded-xl bg-red-400 text-red-600">
                              <FaSignOutAlt className="text-red-600"/>
                            Logout
                            </motion.button>
                            <motion.button  
                            whileTap={{
                              scale:1.02,
                              boxShadow:"0px 0px 15px rgba(224, 195, 195, 0.5)"
                            }}
                            className="border border-slate-600 flex items-center justify-center gap-2 px-2 py-2 font-bold cursor-pointer rounded-xl bg-red-400 text-red-600">
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
  );
};
export default AdminProfile;
