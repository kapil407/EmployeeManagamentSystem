import { FaSearch, FaUserCircle } from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
const LeaveComponent = () => {
  const leaveRequests = [
    {
      _id: "1",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      _id: "2",
      name: "Rahul Sharma",
      employeeId: "Emp-12361",
      leaveType: "Sick Leave",
      from: "2026-10-23",
      to: "2026-10-24",
      days: 2,
      reason: "Fever and headache",
      status: "Pending",
    },
    {
      _id: "3",
      name: "Aman Verma",
      employeeId: "Emp-12362",
      leaveType: "Earned Leave",
      from: "2026-10-26",
      to: "2026-10-28",
      days: 3,
      reason: "Family function",
      status: "Pending",
    },
    {
      _id: "4",
      name: "Priya Singh",
      employeeId: "Emp-12363",
      leaveType: "Casual Leave",
      from: "2026-10-22",
      to: "2026-10-22",
      days: 1,
      reason: "Medical appointment",
      status: "Pending",
    },
    {
      _id: "5",
      name: "Rohit Kumar",
      employeeId: "Emp-12364",
      leaveType: "Sick Leave",
      from: "2026-10-27",
      to: "2026-10-29",
      days: 3,
      reason: "Health issues",
      status: "Pending",
    },
    {
      _id: "6",
      name: "Neha Gupta",
      employeeId: "Emp-12365",
      leaveType: "Earned Leave",
      from: "2026-11-02",
      to: "2026-11-05",
      days: 4,
      reason: "Family vacation",
      status: "Pending",
    },
    {
      _id: "7",
      name: "Vikas Yadav",
      employeeId: "Emp-12366",
      leaveType: "Casual Leave",
      from: "2026-10-30",
      to: "2026-10-30",
      days: 1,
      reason: "Urgent personal work",
      status: "Pending",
    },
    {
      _id: "8",
      name: "Anjali Verma",
      employeeId: "Emp-12367",
      leaveType: "Sick Leave",
      from: "2026-11-03",
      to: "2026-11-04",
      days: 2,
      reason: "Doctor consultation",
      status: "Pending",
    },
    {
      _id: "9",
      name: "Mohit Singh",
      employeeId: "Emp-12368",
      leaveType: "Earned Leave",
      from: "2026-11-09",
      to: "2026-11-11",
      days: 3,
      reason: "Out of station",
      status: "Pending",
    },
    {
      _id: "10",
      name: "Sneha Sharma",
      employeeId: "Emp-12369",
      leaveType: "Casual Leave",
      from: "2026-11-12",
      to: "2026-11-13",
      days: 2,
      reason: "Family commitments",
      status: "Pending",
    },
    {
      _id: "11",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      _id: "12",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      _id: "13",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      _id: "14",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      _id: "15",
      name: "Kapil Kumar",
      employeeId: "Emp-12360",
      leaveType: "Casual Leave",
      from: "2026-10-21",
      to: "2026-10-22",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
  ];
  return (
    <>
      <div className="flex justify-between  bg-slate-950 text-white h-screen w-screen">
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
          className="m-2   w-full "
        >
          <section className="w-full  px-2 h-[100%]  bg-slate-900 py-1 rounded-xl pb-1">
            <div className="flex items-center justify-between mb-1">
              <div className="">
                <h1 className="text-4xl font-bold text-cyan-300">
                Leave Requests
              </h1>
              <p>Review and manage leave requests for your team </p>
              </div>
              <div className="flex items-center gap-3 border px-3 py-2 w-[40%] rounded-xl border-slate-700">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search team member..."
                  className="outline-none"
                />
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="cursor-pointer border px-4 w-[10%] rounded-t-xl bg-slate-800 border-slate-700 py-3">
                Pending
              </button>
              <button className="cursor-pointer border px-4 w-[10%] rounded-t-xl bg-slate-800 border-slate-700 py-3">
                Approved
              </button>
              <button className="cursor-pointer border px-4 w-[10%] rounded-t-xl bg-slate-800 border-slate-700 py-3">
                Rejected
              </button>
              <button className="cursor-pointer border px-4 w-[10%] rounded-t-xl bg-slate-800 border-slate-700 py-3">
                All
              </button>
            </div>
            <div className="border border-slate-700 mt-1 h-[79.5%] rounded-xl ">
              <div className=" py-4 pb-3 px-4 rounded-t-xl flex items-center justify-between  bg-slate-800">
                <span className="min-w-[4%] ">Sr. No.</span>
                <span className="min-w-[12%] text-center">Name</span>
                <span className="min-w-[11%] text-center ">Leave Type</span>
                <span className="min-w-[11%] text-center">From</span>
                <span className="min-w-[11%] ">To</span>
                <span className="min-w-[5%] ">Days</span>
                <span className="min-w-[17%] ">Reason</span>
                <span className="min-w-[5%] ">Status</span>
                <span className="min-w-[20%] border-l px-2 border-slate-700">Action</span>
                
              </div>
              <div className="overflow-y-auto custom-scrollbar h-[90%] px-2 gap-1 flex flex-col rounded-xl">
                {leaveRequests.map((emp) => {
                  return (
                    <>
                      <div
                        key={emp.empId}
                        className="mt-1 flex justify-between items-center py-2 bg-white/5 rounded-xl "
                      >
                        <span className="min-w-[4%] px-4">{emp._id}</span>
                        <span className="min-w-[12%] ml-3  flex items-center gap-3 cursor-pointer">
                          <FaUserCircle size={35} /> {emp.name}
                        </span>
                        <span className="min-w-[11%]  text-center ">{emp.leaveType}</span>
                        <span className="min-w-[11%]  text-center ">{emp.from}</span>
                        <span className="min-w-[11%]  ">{emp.to}</span>
                        <span className="min-w-[5%] text-center ">{emp.days}</span>
                        <span className="min-w-[17%]   ">{emp.reason}</span>
                        <span className="w-[5%] px-3 py-1 rounded-xl font-bold bg-yellow-600 w-fit ">{emp.status}</span>
                       <div className="w-[20%]   items-center justify-between flex">
                         <button className="border px-3 py-1  font-bold rounded-xl ml-2 text-center bg-green-600 border-green-800">Approve</button>
                        <button className="border px-6 mr-2 py-1 font-bold bg-red-600 rounded-xl border-red-900 ">Reject</button>
                       </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
export default LeaveComponent;
