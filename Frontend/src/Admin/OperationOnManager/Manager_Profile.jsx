import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";

import {
  FaArrowLeft,
  FaUserCircle,
  FaCircle,
  FaEdit,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTasks,
  FaCalendarCheck,
  FaCalendarMinus,
  FaRupeeSign,
  FaTrash
} from "react-icons/fa";

import { teamMembers } from "../../data.js";
import axios from "axios";
import DeleteWarning from "./DeleteWarning.jsx";

const ManagerProfile = () => {
  const [manager,setManager]=useState("");

  const navigate = useNavigate();
  const [showAllteamMember, setShowAllteamMember] = useState(false);
    const {id}=useParams();
  
  // Show first few team members initially.
  const visibleTeamMembers = teamMembers.filter((member) => {
    const empid = Number(member.EMPId.substring(3));
    return empid <= 2006 || showAllteamMember;
  });
    const [openWarning,setOpenWarning]=useState(false);

   


  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(`http://localhost:5200/get-managerById/${id}`,{
        withCredentials:true
      })
      console.log("managers->>>>",res);
      if(res.data.success){
        setManager(res.data.manager);
      }

    }
    fetch();
  },[id])

  const stats = [
    {
      title: "Team Members",
      value: teamMembers.length,
      subtitle: "Under Management",
      icon: <FaUsers size={42} />,
      style: "bg-green-200 text-green-800",
    },
    {
      title: "Assigned Tasks",
      value: 28,
      subtitle: "6 pending",
      icon: <FaTasks size={42} />,
      style: "bg-red-100 text-red-600",
    },
    {
      title: "Attendance",
      value: "92%",
      subtitle: "This Month",
      icon: <FaCalendarCheck size={42} />,
      style: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Leave",
      value: 3,
      subtitle: "This Year",
      icon: <FaCalendarMinus size={42} />,
      style: "bg-purple-200 text-purple-800",
    },
  ];

  const tasks = [
    { title: "Android Development Software", progress: 50 },
    { title: "Web Application Development", progress: 70 },
    { title: "iOS Application Development", progress: 35 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex h-dvh w-full flex-col overflow-hidden bg-slate-950 text-white"
    >
      {/* FIXED BACK BUTTON */}
      <header className="flex shrink-0 items-center border-b   border-slate-800 bg-slate-950 px-4 py-3">
        <button
          onClick={() => navigate("/all-manager")}
          className="flex items-center gap-2 font-bold text-white cursor-pointer  hover:text-blue-400"
        >
          <FaArrowLeft size={20} />
          Back to all managers
        </button>
      </header>

      {/* FIXED PROFILE + STATS */}
      <section className="shrink-0 space-y-3 p-3">
        {/* MANAGER PROFILE */}
        <div className="flex  gap-5 rounded-xl border border-slate-700 bg-slate-800 p-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Left profile details */}
          <div className="flex min-w-0 items-center gap-4">
            <FaUserCircle
              className="shrink-0 text-gray-300 h-35 w-35 border-4 border-gray-600 rounded-full"
              
            />

            <div className="min-w-0">
              <h1 className="text-3xl font-bold text-cyan-400">
                {manager?.name} {manager?.lastName}
              </h1>

              <p className="font-semibold text-slate-300">
                {manager?.designation}
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
                <span className="rounded-lg bg-blue-400 px-2 py-1 text-blue-950">
                 {manager?.employeeId}
                </span>

                <span className="rounded-lg border border-slate-600 bg-slate-700 px-2 py-1">
                 {manager?.role}
                </span>

                <span className="flex items-center gap-1 rounded-lg bg-green-400 px-2 py-1 text-green-950">
                  <FaCircle size={10} />
              {manager?.status}
                </span>
              </div>

              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Passionate developer with a strong interest in building
                scalable web applications and solving real-world problems.
              </p>
            </div>
          </div>

          {/* Right contact details */}
          <div className="flex w-[26%] text-lg flex-col gap-3 ">
           <div className="flex items-center gap-2 w-full ">
             <button
              onClick={() => navigate(`/edite-manager/${id}`)}
              className="flex w-fit items-center gap-2 rounded-xl border border-blue-800 bg-blue-600 px-4 py-1 font-semibold transition hover:bg-blue-700"
            >
              <FaEdit />
              Edit Manager
            </button>
               <motion.button
                   
                    onClick={()=>setOpenWarning(prev=>!prev)}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 15px rgba(253, 58, 58, 0.7)",
                    }}
                    className=" w-fit border  bg-red-600 border-red-800 cursor-pointer text-center text-white px-4 py-1 rounded-xl font-semibold flex gap-4  items-center"
                  >
                    <FaTrash />
                    Delete Manager
                  </motion.button>
                  {
                    openWarning && <DeleteWarning setOpenWarning={setOpenWarning} id={id}/>
                  }
           </div>

            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
              <p className="flex items-center gap-3  break-all">
                <FaEnvelope  className="shrink-0" />
               {manager?.email}
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="shrink-0" />
               {manager?.phone}
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0" />
                Hapur, Uttar Pradesh
              </p>

              <p className="flex items-center gap-3">
                <FaCalendarAlt className="shrink-0" />
                Joined on 02 Oct 2026
              </p>
            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-4 gap-3 ">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`flex min-w-0 items-center gap-3 rounded-xl border border-white/10 p-3 sm:gap-4 sm:p-4 ${stat.style}`}
            >
              <div className="shrink-0">
                {stat.icon}
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-bold sm:text-base">
                  {stat.title}
                </h2>

                <p className="text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>

                <p className="text-xs font-semibold sm:text-sm">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONLY THIS LOWER AREA USES THE REMAINING HEIGHT */}
      <main className="grid flex-1 grid-cols-2 gap-3 overflow-hidden px-3 pb-3 ">
        {/* TEAM MEMBERS PANEL */}
        <section className="flex  flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
          {/* Fixed panel header */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-700 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <FaUsers className="shrink-0 text-blue-400" size={28} />

              <h2 className="text-lg font-bold sm:text-xl">
                Team Members
              </h2>

              <span className="rounded-full bg-slate-600 px-2 text-sm font-bold">
                {teamMembers.length}
              </span>
            </div>

            <button
              onClick={() =>
                setShowAllteamMember((previous) => !previous)
              }
              className="shrink-0 rounded-lg border border-slate-600 px-3 py-2 text-sm font-bold text-blue-400 transition hover:bg-slate-700"
            >
              {showAllteamMember ? "Show Less" : "View All"}
            </button>
          </div>

          {/* ONLY TEAM MEMBER LIST SCROLLS */}
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {visibleTeamMembers.map((member) => (
              <div
                key={member.EMPId}
                className="flex items-center justify-between gap-3 border-b border-slate-700/70 px-4 py-3 transition hover:bg-slate-700/40"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <FaUserCircle
                    className="shrink-0 text-slate-300"
                    size={42}
                  />

                  <div className="min-w-0 ">
                    <h3 className="truncate font-semibold  ">
                      {member.name}
                    </h3>

                    <p className="truncate text-sm text-slate-400">
                      {member.role}
                    </p>

                    <p className="text-xs text-slate-500">
                      {member.EMPId}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex shrink-0 items-center gap-2 text-sm font-semibold ${
                    member.status === "Active"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  <FaCircle size={8} />
                  {member.status}
                </div>
              </div>
            ))}

            {visibleTeamMembers.length === 0 && (
              <p className="p-6 text-center text-slate-400">
                No team members found.
              </p>
            )}
          </div>
        </section>

        {/* TASKS OVERVIEW PANEL */}
        <section className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
          {/* Fixed panel header */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-700 px-4 py-3">
            <div className="flex items-center gap-2">
              <FaTasks className="text-blue-400" size={28} />

              <h2 className="text-lg font-bold sm:text-xl">
                Tasks Overview
              </h2>
            </div>

            <button
              onClick={() => navigate("/all-task")}
              className="flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm font-semibold text-blue-400 transition hover:bg-slate-700"
            >
              <FaEdit />
              View Tasks
            </button>
          </div>

          {/* ONLY TASKS CONTENT SCROLLS */}
          <div className="custom-scrollbar min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain p-4">
            {tasks.map((task) => (
              <div key={task.title} className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">
                    {task.title}
                  </h3>

                  <span className="shrink-0 text-sm font-bold text-blue-400">
                    {task.progress}%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-600">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400">
                  Project progress
                </p>
              </div>
            ))}

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <h3 className="font-bold">Task Summary</h3>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xl font-bold">28</p>
                  <p className="text-xs text-slate-400">Total</p>
                </div>

                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xl font-bold text-yellow-400">6</p>
                  <p className="text-xs text-slate-400">Pending</p>
                </div>

                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xl font-bold text-green-400">22</p>
                  <p className="text-xs text-slate-400">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default ManagerProfile;