import {
  FaUsers,
  FaCalendarCheck,
  FaCalendarAlt,
  FaTasks,
  FaChartPie,
  FaClock,
  FaCheckCircle,
  FaHome,
  FaUser,
  FaBell,
  FaHeadset,
  FaSearch,
  FaCircle,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "motion/react";
import SideBar from "../Manager/SideBar";

const ManagerDashboard = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <main className="w-screen h-screen justify-between flex bg-slate-950">
      <SideBar />
      <motion.section
        initial={{
            opacity:0,y:0
        }}
        whileInView={{
            opacity:1,y:0
        }}
        transition={{
            duration:0.4
        }}
        className="  text-white min-w-0 min-w-[82%] rounded-xl m-2 border-slate-700 overflow-hidden "
      >
        <header className="">
          <div className="flex  justify-between item-center">
            <div className="">
              <h1 className="text-4xl font-black text-cyan-400">
                Welcome Back, Rahul
              </h1>
              <p className="text-lg font-semibold">
                Here's your team overview today.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold">
                Thursday , 12 Oct 2026
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap gap-6 mt-1">
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
        <div
          className="flex w-full justify-between  gap-2 mt-4  max-h-[70%]
                overflow-y-hidden min-h-0"
        >
          <section className="w-full flex max-h-[80%] flex-col bg-slate-900 p-2 rounded-xl overflow-y-hidden min-h-0">
            <h1 className="text-2xl font-bold text-cyan-600">
              Team Attendence(Today)
            </h1>
            <div className="mt-3 flex-1 min-h-0 px-2 overflow-y-auto custom-scrollbar max-h-[86%]">
              <div className="flex items-center  justify-between custom-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>

              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center  justify-between custom-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between ">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>

              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between gap-2">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
              <div className="flex items-center mt-2 justify-between ">
                <div className="flex items-center gap-4">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <h1>Kapil kumar</h1>
                </div>
                <h1>Present</h1>
                <h1>09:45 AM</h1>
              </div>
            </div>
          </section>
          <section className="w-full p-2 rounded-xl max-h-[80%] bg-slate-900 min-h-0 overflow-y-hidden overflow-y-auto ">
            <h1 className="text-2xl font-bold text-cyan-600">
              Pending leave Request
            </h1>
            <div className="mt-2 flex-1 min-h-0 overflow-y-auto custom-scrollbar max-h-[86%]">
              <div className="flex items-center justify-between mt-2 w-full min-h-0 px-3 overscroll-contain overflow-y-hidden custom-scrollbar">
                <div className="flex items-center gap-6 ">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="  px-2 rounded-xl py-1 bg-green-800">
                    Approve
                  </button>
                  <button className="bg-red-600 px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="  px-2 rounded-xl py-1 bg-green-800">
                    Approve
                  </button>
                  <button className="bg-red-600 px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="  px-2 rounded-xl py-1 bg-green-800">
                    Approve
                  </button>
                  <button className="bg-red-600 px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6 ">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="  px-2 rounded-xl py-1 bg-green-800">
                    Approve
                  </button>
                  <button className="bg-red-600 px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full min-h-0 px-3 overscroll-contain overflow-y-hidden custom-scrollbar">
                <div className="flex items-center gap-6 ">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6 ">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="  px-2 rounded-xl py-1 bg-green-800">
                    Approve
                  </button>
                  <button className="bg-red-600 px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 w-full px-3">
                <div className="flex items-center gap-6">
                  <FaUserCircle
                    style={{
                      boxShadow: "0px 0px 10px rgba(230, 220, 220, 0.4)",
                    }}
                    className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                  />

                  <div>
                    <h1>Neha Verma</h1>
                    <h1>12 Oct-15 Oct </h1>
                    <h1>Personal Leave</h1>
                  </div>
                </div>
                <div className="space-x-6">
                  <button className="border  px-2 rounded-xl py-1">
                    Approve
                  </button>
                  <button className="border  px-3 rounded-xl py-1">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full  p-2 rounded-xl h-auto  overflow-hidden  bg-slate-900 flex  flex-col">
            <h1 className="text-2xl font-bold text-cyan-600">
              Team Tasks Status
            </h1>
            <div className="flex items-center justify-evenly h-auto mt-8 p-2 py-12 gap-14 flex-col overflow-hidden max-h-[86%] ">
              <div className="w-full  flex flex-col items-center">
                <div className="flex w-full  justify-between text-xl mb-2">
                  <h1>Pending</h1>
                  <span>10%</span>
                </div>
                <div className="w-full h-[14px]  bg-slate-700 rounded-full">
                  <div className="w-[10%] h-[14px] bg-cyan-400 rounded-full absolute" />
                </div>
              </div>
              <div className="w-full  flex flex-col items-center">
                <div className="flex w-full  justify-between text-xl mb-2">
                  <h1>In Progress</h1>
                  <span>10%</span>
                </div>
                <div className="w-full h-[14px]  bg-slate-700 rounded-full">
                  <div className="w-[10%] h-[14px] bg-blue-800 rounded-full absolute" />
                </div>
              </div>
              <div className="w-full  flex flex-col items-center">
                <div className="flex w-full  justify-between text-xl mb-2">
                  <h1>Completed</h1>
                  <span>10%</span>
                </div>
                <div className="w-full h-[14px]  bg-slate-700 rounded-full">
                  <div className="w-[10%] h-[14px] bg-green-800 rounded-full absolute" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    </main>
  );
};
export default ManagerDashboard;
