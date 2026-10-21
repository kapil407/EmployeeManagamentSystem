import { useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarTimes,
  FaPlane,
  FaClock,
} from "react-icons/fa";

const EmployeeAttendence = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const previousMonth = () => {
  setCurrentDate(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    )
  );
};

const nextMonth = () => {
  setCurrentDate(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    )
  );
};
const year = currentDate.getFullYear();
const month = currentDate.getMonth();

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();
  return (
    <>
      <div className="text-white w-screen h-full  p-2">
        <div className="bg-slate-950 w-full h-full">
          <div className="flex gap-4 w-full h-full flex-wrap">
            <div className="flex items-center border w-[32%] bg-green-200 rounded-xl text-green-800 py-8  justify-center gap-6">
              <FaCalendarCheck size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Present</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[32%] bg-red-100 text-red-600 rounded-xl py-8   h-[25%] justify-center gap-6">
              <FaCalendarTimes size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Absent</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[32%] bg-yellow-100  text-yellow-800 rounded-xl py-8   h-[25%] justify-center gap-6">
              <FaPlane size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Leave</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[30%] bg-purple-200 text-purple-800 rounded-xl py-8   h-[25%] justify-center gap-6">
              <FaClock size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Present</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
             <div className=" w-[68%] bg-slate-600 h-auto p-1 rounded-xl ">
              <h1 className="px-2 text-xl py-1 font-bold">Attendence Calendar</h1>
            
                <div className="bg-slate-900 border h-auto border-slate-800 rounded-2xl px-2 py-1">
                  {/* Header */}
                  <div className="flex items-center justify-between ">
                    <button
                      onClick={previousMonth}
                      className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                    >
                      ←
                    </button>

                    <h2 className="text-xl font-semibold text-white">
                      {currentDate.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h2>

                    <button
                      onClick={nextMonth}
                      className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                    >
                      →
                    </button>
                  </div>

                  {/* Week days */}
                  <div className="grid grid-cols-7 ">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-sm text-slate-400 py-1"
                        >
                          {day}
                        </div>
                      ),
                    )}
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty spaces before 1st date */}
                    {Array.from({ length: firstDay }).map((_, index) => (
                      <div key={`empty-${index}`} />
                    ))}

                    {/* Days */}
                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1;

                      return (
                        <div
                          key={day}
                          className="h-8 flex items-center justify-center rounded-lg
                     text-slate-300 hover:bg-slate-800 cursor-pointer"
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
            
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default EmployeeAttendence;
