import {
  FaBell,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserCircle,
} from "react-icons/fa";
import NavBarHandler from "../Home/PrivateNavbar";
import Footer from "../LandingPages/Footer";
import { motion } from "motion/react";

const Notification = () => {
  return (
    <>
      <main className="h-screen w-screen ">
        <NavBarHandler />
        {/* <div className="w-screen text-white h-[76%]">
        Notification 
       </div> */}
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="w-screen text-white h-[76%] px-4 flex justify-between"
        >
          <div className="min-h-0 h-full min-w-[50%]">
            <header className="w-full ">
              <div className="mt-2">
                <h1 className="text-4xl font-bold text-cyan-400">
                  Notifications
                </h1>
                <p className="font-semibold">
                  View your recent notifications and announcements.
                </p>
              </div>
            </header>
            <div className="m-2 w-full  h-[91%] ">
              <div className="flex gap-3">
                <motion.button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">
                  All
                </motion.button>
                <motion.button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">
                  Leave
                </motion.button>
                <motion.button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">
                  Tasks
                </motion.button>
                <motion.button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">
                  Attendence
                </motion.button>
                <motion.button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">
                  Announcements.
                </motion.button>
              </div>
              <div className="border h-[85%] rounded-xl mt-1 border-slate-700 px-3  py-3 gap-2 flex flex-col">
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaTasks size={35} className="bg-purple-400 p-1 rounded-sm" />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Akash Kumar</h1>
                      <p className="font-semibold text-gray-400">
                        You have been assigned a new task.Update project
                        documentation
                      </p>
                    </div>
                    <span>2 hours ago.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaCalendarAlt
                    size={35}
                    className="bg-green-400 p-1 rounded-sm"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Kapil George</h1>
                      <p className="font-semibold text-gray-400">
                        Your leave request from 5 Oct 2026 to 7 Oct 2026 has
                        been approved.
                      </p>
                    </div>
                    <span>2 hours ago.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaCalendarCheck
                    size={35}
                    className="bg-blue-400 p-1 rounded-sm"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Kapil George</h1>
                      <p className="font-semibold text-gray-400">
                        Your attendence for 12 Oct. has been marked as Present.
                      </p>
                    </div>
                    <span>2 hours ago.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaBell size={35} className="bg-yellow-400 p-1 rounded-sm" />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Kapil George</h1>
                      <p className="font-semibold text-gray-400">
                        Office will remain closed on 2 Nov 2026(Diwali).
                      </p>
                    </div>
                    <span>2 hours ago.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="w-[48.5%] rounded-xl p-2 m-2 bg-slate-800">
            <header className="flex  gap-3 w-full flex-col  items-center border-b border-slate-700 py-4 ">
              <FaUserCircle
                size={75}
                className="bg-blue-600 outline-2 rounded-full  "
              />
              <h1 className="text-2xl font-bold">Amit Kumar</h1>
             <div className="flex items-center gap-8">
                 <span className="text-gray-400">MANAGER . IT Department</span>
              <span className=" px-3 py-1 rounded-xl text-red-800 bg-red-300 font-bold">
                Pending Approval
              </span>
             </div>
            </header>
            <section className="py-2 border-b border-slate-700">
              <h1>MANAGER DETAILS</h1>
              <div className="flex flex-col gap-1 ml-6 mt-2">
                <span className="text-gray-400">ManagerId</span>
                <span>MGR-1253</span>
              </div>
              <div className="flex flex-col gap-1 ml-6 mt-2">
                <span className="text-gray-400">Department</span>
                <span>Information Technology</span>
              </div>
              <div className="flex flex-col gap-1 ml-6 mt-2">
                <span className="text-gray-400">Leave Dates</span>
                <span>25 Oct 2026</span>
              </div>
            </section>
            <footer>
              <h1> Request reason </h1>
              <p className="text-gray-400">Personal work - 3 days leave requested.</p>
              <div className="flex flex-col items-center gap-2 mt-2">
                <motion.button 
                whileTap={{
                    scale:1.04,
                    boxShadow:"0px 0px 20px rgba(19, 219, 76, 0.7)"
                }}
                className="bg-green-500 font-bold w-[30%] py-1 rounded-xl cursor-pointer">Approve Request</motion.button>
                <motion.button 
                 whileHover={{
                    scale:1.04,
                    backgroundColor:"red",

                }}
        
                className=" w-[30%] border py-1 font-bold rounded-xl hover:border-red-800 cursor-pointer">Reject Request</motion.button>
              </div>
            </footer>
          </aside>
        </motion.div>

        <Footer />
      </main>
    </>
  );
};
export default Notification;
