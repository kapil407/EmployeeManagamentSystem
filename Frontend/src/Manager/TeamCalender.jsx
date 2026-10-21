import { useEffect, useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaUmbrellaBeach,
} from "react-icons/fa";

const employees = [
  { _id: "1", employeeId: "EMP1001", name: "Rahul Sharma" },
  { _id: "2", employeeId: "EMP1002", name: "Amit Kumar" },
  { _id: "3", employeeId: "EMP1003", name: "Priya Singh" },
  { _id: "4", employeeId: "EMP1004", name: "Neha Verma" },
  { _id: "5", employeeId: "EMP1005", name: "Rohit Gupta" },
  { _id: "6", employeeId: "EMP1006", name: "Anjali Sharma" },
];

// Demo attendance data. Replace this with your API response.
const attendanceRecords = {
  "2026-10-19": {
    1: { status: "PRESENT", checkIn: "09:05 AM", checkOut: "06:02 PM" },
    2: { status: "PRESENT", checkIn: "09:15 AM", checkOut: "06:10 PM" },
    3: { status: "LEAVE", checkIn: "-", checkOut: "-" },
    4: { status: "ABSENT", checkIn: "-", checkOut: "-" },
    5: { status: "HALF_DAY", checkIn: "09:30 AM", checkOut: "01:30 PM" },
    6: { status: "PRESENT", checkIn: "09:00 AM", checkOut: "06:00 PM" },
    7: { status: "ABSENT", checkIn: "-", checkOut: "-" },
    8: { status: "HALF_DAY", checkIn: "09:30 AM", checkOut: "01:30 PM" },
    9: { status: "PRESENT", checkIn: "09:00 AM", checkOut: "06:00 PM" },
  },
};

const statusStyles = {
  PRESENT: "bg-emerald-500/15 text-emerald-400",
  ABSENT: "bg-red-500/15 text-red-400",
  HALF_DAY: "bg-amber-500/15 text-amber-400",
  LEAVE: "bg-blue-500/15 text-blue-400",
};

const statusLabels = {
  PRESENT: "Present",
  ABSENT: "Absent",
  HALF_DAY: "Half Day",
  LEAVE: "Leave",
};

const pad = (number) => String(number).padStart(2, "0");

const makeDateKey = (year, month, day) =>
  `${year}-${pad(month + 1)}-${pad(day)}`;

const todayKey = (date) =>
  makeDateKey(date.getFullYear(), date.getMonth(), date.getDate());

const TeamAttendanceCalendar = () => {
  const [calendarDate, setCalendarDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const selectedKey = todayKey(selectedDate);
  const today = todayKey(new Date());

  const monthName = calendarDate.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];
  }, [year, month]);

  const changeMonth = (amount) => {
    setCalendarDate(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + amount, 1),
    );
  };

  const selectedAttendance = attendanceRecords[selectedKey] || {};

  const getStatus = (employee) =>
    selectedAttendance[employee._id]?.status || "ABSENT";

  const counts = employees.reduce((result, employee) => {
    const status = getStatus(employee);
    result[status] = (result[status] || 0) + 1;
    return result;
  }, {});

  const legend = [
    { label: "Present", color: "bg-emerald-400" },
    { label: "Absent", color: "bg-red-400" },
    { label: "Half Day", color: "bg-amber-400" },
    { label: "Leave", color: "bg-blue-400" },
  ];
  const [clickBtn, setClickBtn] = useState(false);
  useEffect(() => {
    if (!clickBtn) return;

    const timer = setTimeout(() => {
      setClickBtn(false); // State change → re-render
    }, 10000);

    return () => clearTimeout(timer);
  }, [clickBtn]);
  return (
    <div className="w-full min-w-0 flex flex-col gap-1 text-slate-100">
      {/* Calendar heading */}
      <div className={` `}>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-xl bg-indigo-500/15 text-indigo-400">
              <FaCalendarAlt size={15} />
            </div>

            <div>
              <h2 className=" font-bold text-cyan-400">Team Attendance</h2>
              {/* <p className="text-xs text-slate-400">
              Select a date to view attendance
            </p> */}
            </div>
          </div>

          <button
            onClick={() => {
              const now = new Date();
              setCalendarDate(now);
              setSelectedDate(now);
            }}
            className="px-3 py-0.3 cursor-pointer rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
          >
            Today
          </button>
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between rounded-lg bg-slate-800/70 p-.5">
          <button
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="p-2 rounded-lg hover:bg-slate-700"
          >
            <FaChevronLeft />
          </button>

          <h3 className="font-semibold text-base">{monthName}</h3>

          <button
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="p-2 rounded-lg hover:bg-slate-700"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Weekday headings */}
        <div className="grid grid-cols-7  gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center  text-sm font-semibold text-slate-400 py-.5"
            >
              {day}
            </div>
          ))}

          {days.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} />;
            }

            const key = makeDateKey(year, month, day);
            const isSelected = key === selectedKey;
            const isToday = key === today;
            const dayRecords = attendanceRecords[key] || {};

            const presentCount = employees.filter(
              (employee) => dayRecords[employee._id]?.status === "PRESENT",
            ).length;

            const absentCount = employees.filter(
              (employee) => dayRecords[employee._id]?.status === "ABSENT",
            ).length;

            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedDate(new Date(year, month, day));
                  setClickBtn(true);
                }}
                className={`relative h-8 w-13 ml-6 aspect-square rounded-lg flex flex-col items-center justify-center gap-1 transition
                ${
                  isSelected
                    ? "bg-indigo-600 text-white ring-1 ring-indigo-400"
                    : "bg-slate-800 hover:bg-slate-700"
                }
                ${isToday && !isSelected ? "ring-1 ring-indigo-400" : ""}
              `}
              >
                <span className="text-xs font-semibold">{day}</span>

                {Object.keys(dayRecords).length > 0 && (
                  <span className="flex items-center gap-1">
                    {presentCount > 0 && (
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    )}
                    {absentCount > 0 && (
                      <span className="w-1 h-1 rounded-full bg-red-400" />
                    )}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className={`w-full h-full overflow-hidden`}>
        {/* Legend */}
        {clickBtn && (
          <>
            {/* Selected date */}
            <div className="border-t border-slate-800 ">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                <div>
                  <h3 className="font-bold text-lg">
                    {selectedDate.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <p className="text-xs text-slate-400 ">
                    Team attendance overview
                  </p>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <FaUsers />
                  {employees.length} Employees
                </div>
              </div>

              {/* Attendance summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-1.5">
                {[
                  {
                    label: "Present",
                    value: counts.PRESENT || 0,
                    icon: <FaCheckCircle />,
                    color: "text-emerald-400",
                  },
                  {
                    label: "Absent",
                    value: counts.ABSENT || 0,
                    icon: <FaTimesCircle />,
                    color: "text-red-400",
                  },
                  {
                    label: "Half Day",
                    value: counts.HALF_DAY || 0,
                    icon: <FaClock />,
                    color: "text-amber-400",
                  },
                  {
                    label: "On Leave",
                    value: counts.LEAVE || 0,
                    icon: <FaUmbrellaBeach />,
                    color: "text-blue-400",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-800/70 rounded-xl  px-2 pb-1 flex items-center gap-2"
                  >
                    <div className={`${item.color} flex flex-col `}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{item.value}</p>
                      <p className="text-xs text-slate-400">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default TeamAttendanceCalendar;
