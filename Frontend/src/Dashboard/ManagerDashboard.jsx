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
  FaEye,
} from "react-icons/fa";
import { motion } from "motion/react";
import SideBar from "../Manager/SideBar";
import { useSelector } from "react-redux";
import useFetchTeamLeave from "../Hooks/useFetchLeave";
import { useNavigate } from "react-router-dom";
import useFetchMyTeam from "../Hooks/useFetchMyTeam";

const ManagerDashboard = () => {
  const TeamLeave = useFetchTeamLeave();
  const team=useFetchMyTeam();
  const PendingLeave=TeamLeave.filter((leave)=>leave.status==='Pending');
  console.log("pending leave",team);
  const user = useSelector((store) => store.user.user);
  
  const navigate = useNavigate();
  

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",

      timeZone: "UTC",
    });
  };
  const pending = 40;
  const progress = 30;
  const completed = 30;
  return (
    <main className="w-screen h-screen justify-between flex bg-slate-950">
      <SideBar />
      <motion.section
        initial={{
          opacity: 0,
          y: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="  text-white min-w-0 min-w-[82%] rounded-xl m-2 border-slate-700 overflow-hidden "
      >
        <header className="">
          <div className="flex  justify-between item-center">
            <div className="">
              <h1 className="text-4xl font-black text-cyan-400">
                Welcome Back, {user?.name} {user?.lastName}
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
                <span className="text-4xl font-bold">{team.length}</span>
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
                <span className="text-4xl font-bold">{PendingLeave.length}</span>
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
          <section className="w-[35%] flex max-h-[80%] flex-col bg-slate-900 p-2 rounded-xl overflow-y-hidden min-h-0">
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
          <section className="w-[35%] p-2 rounded-xl max-h-[80%] bg-slate-900 min-h-0 overflow-y-hidden overflow-y-auto ">
            <h1 className="text-2xl font-bold text-cyan-600">
              Pending leave Request
            </h1>
            <div className="mt-2 flex-1 min-h-0 overflow-y-auto custom-scrollbar max-h-[86%]">
              <div className="flex flex-col items-center justify-between mt-2 w-full min-h-0 px-3 overscroll-contain  custom-scrollbar">
             {!PendingLeave.length &&  <div className="flex mt-45 py-2 border-slate-700 rounded-xl  w-full h-full items-center justify-center">
                  <h1 className="font-bold text-xl">No Pending Leave</h1>
               </div>}
                {PendingLeave?.map((leave) => {
                  return (
                    <div className="flex justify-between w-full mb-2 bg-white/5 px-2 py-2 rounded-xl">
                      <div className="flex items-center gap-6 ">
                        {!leave.profilePicture ? (
                          <FaUserCircle
                            style={{
                              boxShadow:
                                "0px 0px 10px rgba(230, 220, 220, 0.4)",
                            }}
                            className="w-12 h-12 border-2 border-gray-400 rounded-full  "
                          />
                        ) : (
                          <motion.img
                            whileInView={{
                              boxShadow:
                                "0px 0px 12px rgba(235, 219, 219, 0.4)",
                            }}
                            src={leave?.profilePicture}
                            className="w-12 rounded-full object-cover border h-12"
                          />
                        )}

                        <div>
                          <h1 className="font-bold text-cyan-400 text-xl">
                            {leave?.name}
                          </h1>
                          <h1>
                            {formatDate(leave.startDate)} -{" "}
                            {formatDate(leave.endDate)}
                          </h1>
                          <h1>{leave.leaveType}</h1>
                        </div>
                      </div>
                      <div className="space-x-6 ml-8 items-center flex">
                        <button
                          onClick={() => navigate("/leave")}
                          className="flex items-center gap-3  px-4 cursor-pointer rounded-xl py-1 bg-slate-600 hover:bg-slate-700 font-bold"
                        >
                          <FaEye /> View
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="w-[30%]  p-2 rounded-xl h-auto  overflow-hidden  bg-slate-900 flex  flex-col">
            <h1 className="text-2xl font-bold text-cyan-600">
              Team Tasks Status
            </h1>
            <div className="flex w-full items-center justify-center mt-8 p-6">
              <div
                className="w-64 h-64 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(
        #06b6d4 0% 40%,
        #2563eb 40% 70%,
        #16a34a 70% 100%
      )`,
                }}
              >
                {/* Center Content */}
                <div className="w-40 h-40 rounded-full bg-slate-900 flex flex-col items-center justify-center text-white gap-2">
                  <h1 className="text-3xl font-bold">100</h1>
                  <span className="text-gray-400 text-sm">Total Tasks</span>
                </div>
              </div>
            </div>

            {/* Status Labels */}
            <div className="flex justify-center gap-6 mt-6 text-white">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                Pending
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                In Progress
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
                Completed
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    </main>
  );
};
export default ManagerDashboard;
