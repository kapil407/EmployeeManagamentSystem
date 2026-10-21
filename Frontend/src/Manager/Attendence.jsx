import SideBar from "./SideBar";
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
import { calcGeneratorDuration, motion } from "motion/react";
import { useEffect, useState } from "react";
import TeamAttendanceCalendar from "./TeamCalender";
const AttendenceComponent = () => {
  const employees = [
    {
      _id: "1",
      name: "Kapil Kumar",
      empId: "Emp-12360",
      department: "IT",
      designation: "Software Developer",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "2",
      name: "Rahul Sharma",
      empId: "Emp-12361",
      department: "HR",
      designation: "HR Executive",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "3",
      name: "Aman Verma",
      empId: "Emp-12362",
      department: "IT",
      designation: "Frontend Developer",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "4",
      name: "Priya Singh",
      empId: "Emp-12363",
      department: "Finance",
      designation: "Accountant",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "5",
      name: "Rohit Kumar",
      empId: "Emp-12364",
      department: "IT",
      designation: "Backend Developer",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "6",
      name: "Neha Gupta",
      empId: "Emp-12365",
      department: "Marketing",
      designation: "Marketing Executive",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "7",
      name: "Vikas Yadav",
      empId: "Emp-12366",
      department: "Sales",
      designation: "Sales Manager",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "8",
      name: "Anjali Verma",
      empId: "Emp-12367",
      department: "HR",
      designation: "Recruiter",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "9",
      name: "Mohit Singh",
      empId: "Emp-12368",
      department: "IT",
      designation: "Full Stack Developer",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
    {
      _id: "10",
      name: "Sneha Sharma",
      empId: "Emp-12369",
      department: "Finance",
      designation: "Financial Analyst",
      attendence: {
        Present: false,
        Absent: false,
        "On Leave": false,
      },
    },
  ];

  const [openDropDown, setOpenDropDown] = useState(null);
  const [attendanceByEmp, setAttendanceByEmp] = useState({});

  console.log("attendence ", attendanceByEmp);

  return (
    <main className="w-screen h-screen justify-between flex bg-slate-950">
      <SideBar />
      <motion.section
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
        className="  text-white min-w-0 min-w-[82%] rounded-xl m-2 border-slate-700 overflow-hidden "
      >
        <header className="">
          <div className="flex  justify-between item-center">
            <div className="">
              <h1 className="text-4xl font-black text-cyan-400">Attendence</h1>
              <p className="text-lg font-semibold">
                View your team's attendence.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold">
                Thursday , 12 Oct 2026
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <div className="flex items-center  gap-3  bg-slate-800 px-4  min-w-[24%] rounded-xl ">
              <FaUsers size={55} className="bg-blue-600 p-1 rounded-xl " />
              <div className="w-[80%]">
                <div className="flex flex-col">
                  <span className="text-3xl  font-bold">10</span>
                  <span className="font-semibold">Present</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[90%] bg-red-600 h-[4px] rounded-xl">
                    <div className="w-[25%] bg-green-600 h-[4px] rounded-xl" />
                  </div>
                  <span className="text-sm">{parseInt((10 / 12) * 100)}%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-slate-800 px-4  min-w-[24%] rounded-xl ">
              <FaCalendarCheck
                size={55}
                className="bg-green-600 p-1 rounded-xl"
              />
              <div className="w-[80%]">
                <div className="flex flex-col">
                  <span className="text-3xl  font-bold">2</span>
                  <span className="font-semibold">Absent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[90%] bg-red-600 h-[4px] rounded-xl">
                    <div className="w-[25%] bg-green-600 h-[4px] rounded-xl" />
                  </div>
                  <span className="text-sm">{parseInt((2 / 12) * 100)}%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-slate-800 px-4  min-w-[24%] rounded-xl ">
              <FaCalendarAlt
                size={55}
                className="bg-yellow-600 p-1 rounded-xl"
              />
              <div className="w-[80%]">
                <div className="flex flex-col">
                  <span className="text-3xl  font-bold">3</span>
                  <span className="font-semibold">On Leave</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[90%] bg-red-600 h-[4px] rounded-xl">
                    <div className="w-[25%] bg-green-600 h-[4px] rounded-xl" />
                  </div>
                  <span className="text-sm">{parseInt((3 / 12) * 100)}%</span>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 items-center gap-5 bg-slate-800 px-4  min-w-[24%] rounded-xl ">
              <FaTasks
                size={55}
                className="bg-purple-600 p-1.5 min-w-0 rounded-xl"
              />
              <div className="w-[80%]">
                <div className="flex flex-col">
                  <span className="text-3xl  font-bold">1</span>
                  <span className="font-semibold">On Holiday</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[90%] bg-red-600 h-[4px] rounded-xl">
                    <div className="w-[25%] bg-green-600 h-[4px] rounded-xl" />
                  </div>
                  <span className="text-sm">{parseInt((1 / 12) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className="flex w-full justify-between  gap-2 mt-1  max-h-[70%]
                overflow-y-hidden min-h-0"
        >
          <section className="w-full flex  flex-col bg-slate-900 p-2 rounded-xl overflow-y-hidden min-h-0">
            {/* calender  */}
           <TeamAttendanceCalendar/>

          </section>
          {/* {right} */}
          <section className="w-full p-1 rounded-xl  px-4 bg-slate-900  ">
            <h1 className="text-xl font-bold text-cyan-600">
              Attendence Summary (October 2026)
            </h1>
            <div className="mt-1 mb-2 flex gap-1 flex-col">
              <div>
                <div className="flex w-full justify-between  text-xl">
                  <h1>Present</h1>
                  <span className="text-green-400 font-bold">
                    {parseInt((10 / 12) * 100)}%
                  </span>
                </div>
                <div className="w-full h-[6px] rounded-xl bg-slate-700 ">
                  <div className="w-[20%] bg-green-400 absolute  h-[6px] rounded-xl" />
                </div>
                <h1>10/12</h1>
              </div>
              <div>
                <div className="flex w-full justify-between  text-xl">
                  <h1>Absent</h1>
                  <span className="text-red-400 font-bold">
                    {parseInt((2 / 12) * 100)}%
                  </span>
                </div>
                <div className="w-full h-[6px] rounded-xl bg-slate-700 ">
                  <div className="w-[20%] bg-red-400 absolute  h-[6px] rounded-xl" />
                </div>
                <h1>2/12</h1>
              </div>
              <div>
                <div className="flex w-full justify-between  text-xl">
                  <h1>Leave</h1>
                  <span className="text-yellow-400 font-bold">
                    {parseInt((3 / 12) * 100)}%
                  </span>
                </div>
                <div className="w-full h-[6px] rounded-xl bg-slate-700 ">
                  <div className="w-[20%] bg-yellow-400 absolute  h-[6px] rounded-xl" />
                </div>
                <h1>3/12</h1>
              </div>
              <div>
                <div className="flex w-full justify-between mb-1 text-xl">
                  <h1>Holiday</h1>
                  <span className="text-blue-400 font-bold">25%</span>
                </div>
                <div className="w-full h-[6px] rounded-xl bg-slate-700 ">
                  <div className="w-[20%] bg-blue-400 absolute  h-[6px] rounded-xl" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full min-h-0  h-[45%] ">
          <section className="w-full  px-1 h-[100%] mt-1 bg-slate-900 py-1">
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-2xl font-bold text-cyan-300">
                Marks Attendence (15 Oct 2026)
              </h1>
              <div className="flex items-center gap-3 border px-3 py-1 w-[40%] rounded-xl border-slate-700">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search team member..."
                  className="outline-none"
                />
              </div>
              <button className="bg-green-800 cursor-pointer px-2 py-1 rounded-xl">
                Save Attendence
              </button>
            </div>
            <div className="mt-1 pb-3 flex items-center justify-between ml-8 mr-8">
              <span className="min-w-[5%] ">Sr. No.</span>
              <span className="min-w-[15%]">Name</span>
              <span className="min-w-[15%] ">EmpId</span>
              <span className="min-w-[15%] ">Department</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[15%] ">Status</span>
            </div>
            <div className="overflow-y-auto custom-scrollbar max-h-[72%] rounded-xl">
              {employees.map((emp) => {
                return (
                  <>
                    <div
                      key={emp.empId}
                      className="mt-1 flex justify-between ml-8  mr-8 items-center py-1 rounded-xl "
                    >
                      <span className="min-w-[5%] px-4">{emp._id}</span>
                      <span className="min-w-[15%] flex items-center gap-3 cursor-pointer">
                        <FaUserCircle size={35} /> {emp.name}
                      </span>
                      <span className="min-w-[15%] ">{emp.empId}</span>
                      <span className="min-w-[15%]  ">{emp.department}</span>
                      <span className="min-w-[15%]  ">{emp.designation}</span>
                      <span
                        className={`w-[10%] mr-15 px-3 py-1 rounded-xl bg-green-600 ${attendanceByEmp[emp.empId] == "Absent" ? "bg-red-600" : ""} ${attendanceByEmp[emp.empId] == "Present" ? "bg-green-600" : ""} ${attendanceByEmp[emp.empId] == "On Leave" ? "bg-yellow-600" : ""}  text-center`}
                      >
                        <span
                          className={`cursor-pointer relative   rounded-xl  `}
                          onClick={() => {
                            setOpenDropDown((prev) =>
                              prev === emp.empId ? null : emp.empId,
                            );
                          }}
                        >
                          {attendanceByEmp[emp.empId] || "Attendance"}
                          {openDropDown === emp.empId ? " v" : " ^"}
                        </span>
                        {openDropDown === emp.empId && (
                          <div className="flex flex-col gap-1  z-50 bg-green-900 font-bold w-full w-fit px-3.5 py-1 rounded-xl">
                            {["Present", "Absent", "On Leave"].map((status) => (
                              <span
                                key={status}
                                onClick={() => {
                                  setAttendanceByEmp((prev) => ({
                                    ...prev,
                                    [emp.empId]: status,
                                  }));

                                  setOpenDropDown(null);
                                }}
                                className="cursor-pointer"
                              >
                                {status}
                              </span>
                            ))}
                          </div>
                        )}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        
        </div>
      </motion.section>
    </main>
  );
};
export default AttendenceComponent;
