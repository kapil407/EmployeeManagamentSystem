import {
  FaPlus,
  FaSearch,
  FaTasks,
  FaCalendarAlt,
  FaCalendarCheck,
  FaUsers,
  FaUserCircle,
} from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
const TeamMembersComponent = () => {
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
          className="m-2  min-w-[82%] p-2"
        >
          <header className="flex justify-between flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold">Team Members</h1>
                <h1>View and manage your team members</h1>
              </div>
              <div className="flex items-center gap-6 mr-4 min-w-[45%]">
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl border border-slate-700 font-bold min-w-[70%] bg-slate-800">
                  <FaSearch />
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Search team member"
                  />
                </div>
                <button className="flex items-center bg-green-600 font-semibold gap-3 border border-green-900 px-2 py-1.5 rounded-xl">
                  <FaPlus />
                  Add Member
                </button>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap   min-w-full mt-2">
              <div className="flex items-center gap-5  bg-slate-800 p-6 rounded-xl ">
                <FaUsers size={85} className="bg-blue-600 p-1 rounded-xl " />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Team Members</span>
                  <span className="text-4xl font-bold">12</span>
                  <span className="font-semibold">Total Members</span>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaCalendarCheck
                  size={85}
                  className="bg-green-600 p-1 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Present Today</span>
                  <span className="text-4xl font-bold">10/12</span>
                  <span className="font-semibold">Total Members</span>
                </div>
                <div
                  className="w-23 h-23 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(#22c55e ${50}%, #334155 ${50}%)`,
                  }}
                >
                  <div className="w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-white font-bold">50%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaCalendarAlt
                  size={85}
                  className="bg-yellow-600 p-1 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Leave Request</span>
                  <span className="text-4xl font-bold">3</span>
                  <span className="font-semibold">Total Members</span>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaTasks size={85} className="bg-purple-600 p-1.5 rounded-xl" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">My Tasks</span>
                  <span className="text-4xl font-bold">8</span>
                  <span className="font-semibold">Total Members</span>
                </div>
              </div>
            </div>
          </header>
          <div className="overflow-hidden h-[71%] rounded-xl border mt-2 border-slate-700">
            <div className="pt-3 px-4 pb-4 flex items-center justify-between bg-slate-800 ">
              <span className="min-w-[5%] ">Sr. No.</span>
              <span className="min-w-[15%]">Name</span>
              <span className="min-w-[15%] ">EmpId</span>
              <span className="min-w-[15%] ">Department</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[15%] ">Status</span>
            </div>

          <div className="overflow-y-auto custom-scrollbar max-h-[89%]">
            
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
            <div className="mt-3 flex justify-between mx-2 items-center py-3 rounded-xl bg-white/8">
              <span className="min-w-[5%] px-4">1.</span>
              <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                <FaUserCircle size={35} /> Kapil Kumar
              </span>
              <span className="min-w-[15%] ">kapilkeer@gmail.com</span>
              <span className="min-w-[15%] ">Information Technologies</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl bg-green-600   w-fit ">
                Active
              </span>
            </div>
          </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};
export default TeamMembersComponent;
