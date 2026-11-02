import { useState } from "react";
import EmployeeSideBar from "../Employee/EmployeeSideBar";

import {
  FaCalendarCheck,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCoffee,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const EmpAttendence = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(null);

  // Demo attendance records
  const attendanceData = {
    "2026-10-01": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:10 PM",
      hours: "09h 05m",
    },
    "2026-10-02": {
      status: "Present",
      checkIn: "09:10 AM",
      checkOut: "06:00 PM",
      hours: "08h 50m",
    },
    "2026-10-05": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:15 PM",
      hours: "09h 15m",
    },
    "2026-10-06": {
      status: "Present",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      hours: "08h 45m",
    },
    "2026-10-07": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:05 PM",
      hours: "09h 00m",
    },
    "2026-10-08": {
      status: "Half Day",
      checkIn: "09:00 AM",
      checkOut: "01:00 PM",
      hours: "04h 00m",
    },
    "2026-10-09": {
      status: "Present",
      checkIn: "09:10 AM",
      checkOut: "06:00 PM",
      hours: "08h 50m",
    },
    "2026-10-12": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "09h 00m",
    },
    "2026-10-13": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:10 PM",
      hours: "09h 05m",
    },
    "2026-10-14": {
      status: "Present",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      hours: "08h 45m",
    },
    "2026-10-15": { status: "Absent", checkIn: "-", checkOut: "-", hours: "-" },
    "2026-10-16": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "09h 00m",
    },
    "2026-10-19": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:10 PM",
      hours: "09h 05m",
    },
    "2026-10-20": {
      status: "Present",
      checkIn: "09:10 AM",
      checkOut: "06:00 PM",
      hours: "08h 50m",
    },
    "2026-10-21": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "09h 00m",
    },
    "2026-10-22": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:05 PM",
      hours: "09h 00m",
    },
    "2026-10-23": {
      status: "Present",
      checkIn: "09:10 AM",
      checkOut: "06:00 PM",
      hours: "08h 50m",
    },
    "2026-10-26": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "09h 00m",
    },
    "2026-10-27": {
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:10 PM",
      hours: "09h 05m",
    },
    "2026-10-28": {
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "09h 00m",
    },
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const today = new Date();

  const dateKey = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const records = Object.entries(attendanceData)
    .filter(([date]) =>
      date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`),
    )
    .sort((a, b) => b[0].localeCompare(a[0]));

  const presentDays = records.filter(
    ([, data]) => data.status === "Present",
  ).length;
  const absentDays = records.filter(
    ([, data]) => data.status === "Absent",
  ).length;
  const halfDays = records.filter(
    ([, data]) => data.status === "Half Day",
  ).length;

  const totalDays = presentDays + absentDays + halfDays;

  const percentage = totalDays
    ? Math.round(((presentDays + halfDays * 0.5) / totalDays) * 100)
    : 0;

  const getStatus = (day) => attendanceData[dateKey(day)]?.status;

  const getColor = (status) => {
    switch (status) {
      case "Present":
        return "bg-green-600 hover:bg-green-500 text-white";
      case "Absent":
        return "bg-red-600 hover:bg-red-500 text-white";
      case "Half Day":
        return "bg-yellow-500 hover:bg-yellow-400 text-black";
      default:
        return "bg-slate-700 hover:bg-slate-600 text-white";
    }
  };

  const selectedRecord = selectedDate
    ? attendanceData[dateKey(selectedDate)]
    : null;

  return (
    <div className="min-h-screen w-full flex bg-slate-900">
      <EmployeeSideBar />

      <motion.main 
      initial={{
        opacity:0,y:0
      }}
      whileInView={{opacity:1,y:0}}
      transition={{
        duration:.4
      }}
      className="flex-1 min-w-0 p-2">
        <div className="border border-slate-700 bg-slate-800 rounded-xl p-2">
          {/* Page Heading */}
          <header className="mb-1">
            <h1 className="text-3xl font-bold text-cyan-400">My Attendance</h1>

            <p className="text-gray-400 text-sm mt-1">
              Track your attendance and working hours.
            </p>
          </header>

          {/* Summary Cards */}
          <section className="flex gap-6 mb-1 w-full">
            <div className=" bg-slate-500/15 flex items-center gap-8 px-3 py-1 rounded-xl justify-center w-[24%]">
              <FaCheckCircle size={45} className="text-green-400 bg-green-500/15 p-2 rounded-xl" />
              <div className="flex flex-col text-slate-100">
                <span className="text-xl font-bold">Present Days</span>
                <span className="text-2xl font-bold">{presentDays}</span>
              </div>
            </div>

            <div className="text-red-400 bg-slate-500/15 justify-center rounded-xl flex items-center gap-8 px-3 py-1 w-[24%]">
              <FaClock size={45} className="text-green-400 bg-green-500/15 p-2 rounded-xl" />
              <div className="flex flex-col text-slate-100">
                <span className="text-xl font-bold">Absent Days</span>
                <span className="text-2xl font-bold">{absentDays}</span>
              </div>
            </div>

            <div className="text-red-400 bg-slate-500/15 flex items-center rounded-xl gap-3 px-3 py-1 w-[24%] gap-8 justify-center">
              <FaCoffee size={45} className="text-yellow-400 bg-yellow-500/15 p-2 rounded-xl" />
              <div className="flex flex-col text-slate-100">
                <span className="text-xl font-bold">Half Days</span>
                <span className="text-2xl font-bold">{halfDays}</span>
              </div>
            </div>

            <div className="text-red-400 bg-slate-500/15 flex items-center rounded-xl gap-8 justify-center px-3 py-1 w-[24%]">
              <FaCalendarAlt size={45} className="text-blue-400 bg-blue-500/15 p-2 rounded-xl" />
              <div className="flex flex-col text-slate-100">
                <span className="text-xl font-bold">Total Marked Days</span>
                <span className="text-2xl font-bold">{totalDays}</span>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            {/* Calendar */}
            <div className="bg-slate-700 rounded-xl p-2">
              <header className="flex justify-between items-center border-b border-slate-600 pb-1">
                <h2 className="text-xl font-bold text-white">
                  Attendance Calendar
                </h2>

                <span className="text-xs text-gray-400">Monthly View</span>
              </header>

              {/* Month Navigation */}
              <div className="flex items-center justify-between my-1">
                <button
                  onClick={previousMonth}
                  className="p-1 rounded-lg bg-slate-600 text-white hover:bg-slate-500"
                >
                  <FaChevronLeft />
                </button>

                <h2 className="text-lg font-bold text-white">
                  {monthName} {year}
                </h2>

                <button
                  onClick={nextMonth}
                  className="p-1 rounded-lg bg-slate-600 text-white hover:bg-slate-500"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 text-center mb-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <span
                      key={day}
                      className="text-gray-400 text-xs  font-semibold"
                    >
                      {day}
                    </span>
                  ),
                )}
              </div>

              {/* Calendar Dates */}
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const status = getStatus(day);

                  const isToday =
                    today.getDate() === day &&
                    today.getMonth() === month &&
                    today.getFullYear() === year;

                  const isSelected = selectedDate === day;

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        p-3 rounded-lg flex items-center justify-center
                        text-xs sm:text-base font-semibold transition
                        ${getColor(status)}
                        ${isToday ? "ring-1 ring-blue-400 ring-offset-1 ring-offset-slate-700" : ""}
                        ${isSelected ? "outline outline-2 outline-white" : ""}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-4 mt-1 border-t border-slate-600 pt-4">
                <Legend color="bg-green-500" label="Present" />
                <Legend color="bg-red-500" label="Absent" />
                <Legend color="bg-yellow-500" label="Half Day" />
                <Legend color="bg-blue-500" label="Today" />
              </div>

              {/* Selected Date Details */}
              {selectedDate && (
                <div className="mt-1 bg-slate-800 rounded-lg p-2">
                  <h3 className="font-bold text-white mb-1">
                    {selectedDate} {monthName} {year}
                  </h3>

                  {selectedRecord ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">Status</p>
                        <p className="text-white font-semibold">
                          {selectedRecord.status}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Check In</p>
                        <p className="text-white font-semibold">
                          {selectedRecord.checkIn}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Check Out</p>
                        <p className="text-white font-semibold">
                          {selectedRecord.checkOut}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Work Hours</p>
                        <p className="text-white font-semibold">
                          {selectedRecord.hours}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      No attendance record found for this date.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Monthly Summary + History */}
            <div className="flex flex-col gap-1.5">
              {/* Monthly Summary */}
              <div className="bg-slate-700 rounded-xl px-2 py-1">
                <h2 className="text-xl font-bold text-white mb-5">
                  This Month Summary
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-around gap-5">
                  {/* Circular Progress */}
                  <div
                    className="w-40 h-40 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: `conic-gradient(#22c55e ${percentage}%, #334155 0)`,
                    }}
                  >
                    <div className="w-32 h-32 bg-slate-800 rounded-full flex flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold text-white">
                        {percentage}%
                      </h1>

                      <p className="text-gray-400 text-xs">Attendance</p>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="w-full space-y-4">
                    <SummaryRow
                      color="bg-green-500"
                      label="Present"
                      count={presentDays}
                    />
                    <SummaryRow
                      color="bg-yellow-500"
                      label="Half Day"
                      count={halfDays}
                    />
                    <SummaryRow
                      color="bg-red-500"
                      label="Absent"
                      count={absentDays}
                    />
                    <SummaryRow
                      color="bg-blue-500"
                      label="Total Days"
                      count={totalDays}
                    />
                  </div>
                </div>
              </div>

              {/* Attendance History */}
              <div className="bg-slate-700 rounded-xl px-2 flex-1">
                <header className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">
                    Attendance History
                  </h2>

                  <button className="text-cyan-400 text-sm flex items-center gap-2">
                    View All <FaArrowRight />
                  </button>
                </header>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm min-w-[450px]">
                    <thead>
                      <tr className="bg-slate-600 text-gray-200">
                        <th className="p-3">Date</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Work Hours</th>
                      </tr>
                    </thead>

                    <tbody>
                      {records.slice(0, 6).map(([date, data]) => (
                        <tr
                          key={date}
                          className="border-b border-slate-600 text-white"
                        >
                          <td className="p-3">
                            {new Date(date + "T00:00:00").toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </td>

                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold
                              ${data.status === "Present" ? "bg-green-600" : ""}
                              ${data.status === "Absent" ? "bg-red-600" : ""}
                              ${data.status === "Half Day" ? "bg-yellow-500 text-black" : ""}
                            `}
                            >
                              {data.status}
                            </span>
                          </td>

                          <td className="p-3 text-gray-300">{data.hours}</td>
                        </tr>
                      ))}

                      {records.length === 0 && (
                        <tr>
                          <td
                            colSpan="3"
                            className="p-5 text-center text-gray-400"
                          >
                            No attendance records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.main>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ title, count, icon, color, bg }) => (
  <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">
    <div className={`p-4 rounded-full text-2xl ${color} ${bg}`}>{icon}</div>

    <div>
      <p className="text-gray-300 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-white">{count}</h2>
    </div>
  </div>
);

// Calendar Legend
const Legend = ({ color, label }) => (
  <span className="flex items-center gap-2 text-gray-300 text-xs">
    <FaCircle className={color} />
    {label}
  </span>
);

// Summary Row
const SummaryRow = ({ color, label, count }) => (
  <div className="flex items-center justify-between border-b border-slate-600 pb-2">
    <span className="flex items-center gap-2 text-gray-200 text-sm">
      <FaCircle className={color} />
      {label}
    </span>

    <span className="font-bold text-white">{count}</span>
  </div>
);

export default EmpAttendence;
