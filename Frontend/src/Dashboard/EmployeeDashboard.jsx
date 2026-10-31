import { useState } from "react";
import EmployeeSideBar from "../Employee/EmployeeSideBar";

import {
  FaTasks,
  FaCalendarAlt,
  FaPlane,
  FaWallet,
  FaUser,
  FaCalendarCheck,
  FaRupeeSign,
  FaArrowRight,
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "motion/react";
import { useSelector } from "react-redux";

const EmployeeDashboard = () => {
  const emp=useSelector(store=>store.employee.employee);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 1));

  // Demo Attendance Data
  const attendanceData = {
    "2026-10-01": "present",
    "2026-10-02": "present",
    "2026-10-03": "absent",
    "2026-10-05": "present",
    "2026-10-06": "present",
    "2026-10-07": "present",
    "2026-10-08": "present",
    "2026-10-09": "present",
    "2026-10-10": "absent",
    "2026-10-12": "present",
    "2026-10-13": "present",
    "2026-10-14": "present",
    "2026-10-15": "present",
    "2026-10-16": "present",
    "2026-10-17": "leave",
    "2026-10-19": "present",
    "2026-10-20": "present",
    "2026-10-21": "present",
    "2026-10-22": "present",
    "2026-10-23": "present",
    "2026-10-26": "present",
    "2026-10-27": "present",
    "2026-10-28": "present",
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getAttendance = (day) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    return attendanceData[dateKey] || "none";
  };

  const getDateStyle = (status) => {
    switch (status) {
      case "present":
        return "text-green-600  ";

      case "absent":
        return " text-red-600 ";

      case "leave":
        return " text-yellow-600";

      default:
        return "text-white hover:bg-slate-600";
    }
  };

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <motion.div className="w-screen min-h-screen flex bg-slate-900 overflow-x-hidden">
      <EmployeeSideBar />

      <motion.div 
       initial={{opacity:0,y:0}}
        whileInView={{
            opacity:1,y:0
        }}
        transition={{
            duration:.3
        }}
      className="flex-1 min-w-0 p-2">
        <motion.div className="border border-slate-700 rounded-xl bg-slate-800 p-4 min-h-full">
          {/* Dashboard Header */}
          <header className="p-2">
            <h1 className="text-3xl font-bold text-cyan-500">
              Welcome Back, {emp?.name} {emp?.lastName}
            </h1>

            <span className="text-slate-400">
              Here's what's happening with your work today
            </span>

            {/* Summary Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
              {/* Tasks */}
              <motion.div className="text-white bg-slate-700 rounded-xl p-3 flex items-center gap-3">
                <FaTasks
                  size={55}
                  className="shrink-0 rounded-xl text-blue-600 bg-blue-200 p-2"
                />

                <motion.div>
                  <h1 className="text-lg font-bold">My Tasks</h1>
                  <h1 className="text-4xl font-bold">08</h1>
                  <span className="text-gray-300 text-sm">
                    5 Completed · 3 Pending
                  </span>
                </motion.div>
              </motion.div>

              {/* Attendance */}
              <motion.div className="text-white bg-slate-700 rounded-xl p-3 flex items-center gap-3">
                <FaCalendarAlt
                  size={55}
                  className="shrink-0 rounded-xl text-green-600 bg-green-200 p-2"
                />

                <motion.div>
                  <h1 className="text-lg font-bold">Present Days</h1>
                  <h1 className="text-4xl font-bold">18</h1>
                  <span className="text-gray-300 text-sm">
                    Out of 22 working days
                  </span>
                </motion.div>
              </motion.div>

              {/* Leave */}
              <motion.div className="text-white bg-slate-700 rounded-xl p-3 flex items-center gap-3">
                <FaPlane
                  size={55}
                  className="shrink-0 rounded-xl text-yellow-600 bg-yellow-100 p-2"
                />

                <motion.div>
                  <h1 className="text-lg font-bold">Leave Remaining</h1>
                  <h1 className="text-4xl font-bold">06</h1>
                  <span className="text-gray-300 text-sm">Out of 12 days</span>
                </motion.div>
              </motion.div>

              {/* Salary */}
              <motion.div className="text-white bg-slate-700 rounded-xl p-3 flex items-center gap-3">
                <FaWallet
                  size={55}
                  className="shrink-0 rounded-xl text-purple-600 bg-purple-200 p-2"
                />

                <motion.div>
                  <h1 className="text-lg font-bold">Monthly Salary</h1>

                  <h1 className="text-3xl font-bold flex items-center gap-1">
                    <FaRupeeSign size={22} />
                    45000
                  </h1>

                  <span className="text-gray-300 text-sm">
                    Credited on 1st Oct.
                  </span>
                </motion.div>
              </motion.div>
            </section>
          </header>

          {/* Dashboard Main Content */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-0.5 mx-1.5">
            {/* Task Overview */}
            <motion.div className="text-white bg-slate-700 p-4 rounded-xl">
              <header className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-xl font-bold">
                  <FaUser className="text-blue-600" size={25}/> Task Overview
                </h1>

                <button className="flex items-center gap-2 text-sm hover:text-cyan-400">
                  View All <FaArrowRight />
                </button>
              </header>

              <motion.div className="mt-5 space-y-5">
                {[
                  { name: "Completed", count: 5, color: "text-green-500" },
                  { name: "In Progress", count: 2, color: "text-blue-500" },
                  { name: "Pending", count: 1, color: "text-yellow-500" },
                  { name: "Overdue", count: 0, color: "text-red-500" },
                ].map((task) => (
                  <motion.div
                    key={task.name}
                    className="flex justify-between items-center px-4"
                  >
                    <span className="flex items-center gap-3 font-semibold">
                      <FaCircle className={task.color} />
                      {task.name}
                    </span>

                    <span className="font-bold">{task.count}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Attendance Calendar */}
            <motion.div className="text-white bg-slate-700 p-4 rounded-xl">
              <header className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-xl font-bold">
                  <FaCalendarAlt className="text-blue-600" size={25}/> Attendance
                </h1>

                <button className="flex items-center gap-2 text-sm hover:text-cyan-400">
                  View All <FaArrowRight />
                </button>
              </header>

              {/* Month Navigation */}
              <motion.div className="flex justify-between items-center mt-2 mb-2">
                <button
                  onClick={previousMonth}
                  className="p-1 rounded-lg bg-slate-600 hover:bg-slate-500"
                >
                  <FaChevronLeft />
                </button>

                <h2 className="text-sm font-bold">
                  {monthName} {year}
                </h2>

                <button
                  onClick={nextMonth}
                  className="p-1 rounded-lg bg-slate-600 hover:bg-slate-500"
                >
                  <FaChevronRight />
                </button>
              </motion.div>

              {/* Week Days */}
              <motion.div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <span key={day}>{day}</span>
                  ),
                )}
              </motion.div>

              {/* Calendar Dates */}
              <motion.div className="grid grid-cols-7 gap-y-2 text-center">
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <motion.div key={`empty-${index}`} />;
                  }

                  const status = getAttendance(day);

                  return (
                    <motion.div key={day} className="flex justify-center">
                      <span
                        title={status}
                        className={`w-3 h-3  flex items-center justify-center rounded-full text-sm  font-semibold cursor-pointer transition ${getDateStyle(status)}`}
                      >
                        {day}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Calendar Legend */}
              <motion.div className="flex flex-wrap justify-center gap-3 mt-4 text-xs">
                <span className="flex items-center gap-1">
                  <FaCircle className="text-green-500" /> Present
                </span>

                <span className="flex items-center gap-1">
                  <FaCircle className="text-red-500" /> Absent
                </span>

                <span className="flex items-center gap-1">
                  <FaCircle className="text-yellow-500" /> Leave
                </span>
              </motion.div>
            </motion.div>

            {/* Recent Tasks */}
            <motion.div className="text-white bg-slate-700 p-4 rounded-xl">
              <header className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-xl font-bold">
                  <FaCalendarCheck className="text-blue-600" size={25} /> Recent Tasks
                </h1>

                <button className="flex items-center gap-2 text-sm hover:text-cyan-400">
                  View All <FaArrowRight />
                </button>
              </header>

              <motion.div className="mt-5 space-y-4">
                {[
                  {
                    name: "Homepage UI Design",
                    status: "Completed",
                    color: "text-green-400",
                  },
                  {
                    name: "API Integration",
                    status: "In Progress",
                    color: "text-blue-400",
                  },
                  {
                    name: "Testing Dashboard",
                    status: "Pending",
                    color: "text-yellow-400",
                  },
                ].map((task) => (
                  <motion.div key={task.name} className="border-b border-slate-600 ">
                    <h2 className="font-semibold">{task.name}</h2>

                    <span className={`text-sm ${task.color}`}>
                      {task.status}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="text-white bg-slate-700 px-2 py-4  rounded-xl">
              <header className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-xl font-bold">
                  <FaUser className="text-blue-600" size={25} />
                  Leave Balance
                </h1>

                <button className="flex items-center gap-2 text-sm hover:text-cyan-400">
                  View All <FaArrowRight />
                </button>
              </header>

              <motion.div className="flex  justify-evenly mt-4">
                <h1 className="flex items-center gap-4">
                  <FaCircle className="text-green-600" /> Casual Leave{" "}
                </h1>{" "}
                <span>3/6</span>
              </motion.div>

              <motion.div className="flex  justify-evenly mt-4">
                <h1 className="flex items-center gap-4">
                  <FaCircle className="mr-5 text-blue-600" /> Sick Leave{" "}
                </h1>{" "}
                <span>2/4</span>
              </motion.div>

              <motion.div className="flex  justify-evenly mt-4">
                <h1 className="flex items-center gap-4">
                  <FaCircle className="text-yellow-400" /> Earned Leave{" "}
                </h1>{" "}
                <span>1/2</span>
              </motion.div>
            </motion.div>

            <motion.div className="text-white bg-slate-700 px-2   rounded-xl py-3">
              <header className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-xl font-bold">
                  <FaWallet size={25} className="text-blue-600"/>
                  Salary Overview 
                </h1>

                <button className="flex items-center gap-2 text-sm hover:text-cyan-400">
                  View All <FaArrowRight />
                </button>
              </header>
                <h1 className="flex items-center gap-2 text-2xl px-2 mb-1"><FaRupeeSign/> 45000  </h1>
              <motion.div className="bg-slate-600 space-y-1  rounded-xl pt-1">
                <motion.div className="flex  justify-evenly ">
                <h1 className="flex items-center gap-3">
                  <FaCircle className="text-green-600" /> Basic Salary{" "}
                </h1>{" "}
                <span className="flex items-center gap-2"><FaRupeeSign/>30000</span>
              </motion.div>

              <motion.div className="flex  justify-evenly gap-14">
                <h1 className="flex items-center gap-3">
                  <FaCircle className=" text-blue-600" /> HRA
                </h1>{" "}
                 <span className="flex items-center gap-2"><FaRupeeSign/>8000</span>
              </motion.div>

              <motion.div className="flex  justify-evenly ">
                <h1 className="flex items-center gap-3">
                  <FaCircle className="text-yellow-400" /> Allowances{" "}
                </h1>{" "}
                 <span className="flex items-center gap-2"><FaRupeeSign/>5000</span>
              </motion.div>
              <motion.div className="flex  justify-evenly gap-2">
                <h1 className="flex items-center gap-3">
                  <FaCircle className="text-yellow-400" /> Deduction {" "}
                </h1>{" "}
                 <span className="flex items-center gap-2"><FaRupeeSign/>2000</span>
              </motion.div>
            <motion.div className="flex items-center gap-2 bg-blue-200 text-blue-800 p-1 rounded-b-xl font-bold justify-evenly ">
                  <h1>Net Salary </h1>
             <span className="flex items-center gap-2"><FaRupeeSign/>45000</span>
            </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EmployeeDashboard;
