import { FaTasks,FaCalendarAlt,FaCalendarCheck,FaBell } from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
const NotificationComponent = () => {
  return (
    <>
      <div className="flex justify-between bg-white-950 text-white h-screen w-screen">
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
          className="m-2 border w-full border-slate-700 rounded-xl p-2"
        >
          <header>
            <div className="mt-2">
              <h1 className="text-4xl font-bold text-cyan-400">
                Notifications
              </h1>
              <p className="font-semibold">
                View your recent notifications and announcements.
              </p>
            </div>
          </header>
          <div className="m-6  h-[89%] ">
            <div className="flex gap-3">
              <button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">All</button>
              <button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">Leave</button>
              <button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">Tasks</button>
              <button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">Attendence</button>
              <button className="border px-8 font-bold rounded-t-xl bg-slate-800 cursor-pointer border-slate-700 py-2">Announcements.</button>
            </div>
            <div className="border h-[85%] rounded-xl mt-1 border-slate-700 px-3  py-3 gap-2 flex flex-col">
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaTasks size={35} className="bg-purple-400 p-1 rounded-sm"/>
                  <div className="flex justify-between items-center w-full">
                   <div className="flex flex-col">
                     <h1 className="text-xl font-bold">Akash Kumar</h1>
                   <p className="font-semibold text-gray-400">You have been assigned a new task.Update project documentation</p>
                   </div>
                   <span>2 hours ago.</span>
                  </div>
                </div>
                 <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaCalendarAlt size={35} className="bg-green-400 p-1 rounded-sm"/>
                  <div className="flex justify-between items-center w-full">
                   <div className="flex flex-col">
                     <h1 className="text-xl font-bold">Kapil George</h1>
                   <p className="font-semibold text-gray-400">Your leave request from 5 Oct 2026 to 7 Oct 2026  has been approved.</p>
                   </div>
                   <span>2 hours ago.</span>
                  </div>
                </div>
                 <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaCalendarCheck size={35} className="bg-blue-400 p-1 rounded-sm"/>
                  <div className="flex justify-between items-center w-full">
                   <div className="flex flex-col">
                     <h1 className="text-xl font-bold">Kapil George</h1>
                   <p className="font-semibold text-gray-400">Your attendence for 12 Oct.  has been marked as Present.</p>
                   </div>
                   <span>2 hours ago.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full bg-white/10 px-2 rounded-xl py-1">
                  <FaBell size={35} className="bg-yellow-400 p-1 rounded-sm"/>
                  <div className="flex justify-between items-center w-full">
                   <div className="flex flex-col">
                     <h1 className="text-xl font-bold">Kapil George</h1>
                   <p className="font-semibold text-gray-400">Office will remain  closed on 2 Nov 2026(Diwali).</p>
                   </div>
                   <span>2 hours ago.</span>
                  </div>
                </div>
               
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default NotificationComponent;
