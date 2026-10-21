import { FaCalendarAlt, FaCalendarCheck, FaPlus, FaSearch, FaTasks, FaUserCircle, FaUsers } from "react-icons/fa"
import SideBar from "./SideBar"
import {  FaClock, FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react"
const MyTaskComponent=()=>{

  const tasks = [
  {
    Sr_No:"1",
    _id: "TASK001",
    title: "Attendance Module",
    description: "Build UI and integrate attendance API",
    assignedTo: "EMP1001",
    assignedToName: "Aarav Singh",
    assignedBy: "MGR001",
    department: "IT",
    priority: "High",
    dueDate: "2026-10-25",
    status: "In Progress",
  },
  { Sr_No:"2",
    _id: "TASK002",
    title: "Fix Login API Bug",
    description: "Resolve 500 error in login API",
    assignedTo: "EMP1002",
    assignedToName: "Priya Sharma",
    assignedBy: "MGR001",
    department: "IT",
    priority: "High",
    dueDate: "2026-10-22",
    status: "Pending",
  },
  { Sr_No:"3",
    _id: "TASK003",
    title: "Employee List UI",
    description: "Design and implement employee listing page",
    assignedTo: "EMP1003",
    assignedToName: "Neha Verma",
    assignedBy: "MGR001",
    department: "HR",
    priority: "Medium",
    dueDate: "2026-10-24",
    status: "In Progress",
  },
  { Sr_No:"4",
    _id: "TASK004",
    title: "Department Filter",
    description: "Add department-wise filtering to team list",
    assignedTo: "EMP1004",
    assignedToName: "Amit Kumar",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Medium",
    dueDate: "2026-10-26",
    status: "Pending",
  },
  { Sr_No:"5",
    _id: "TASK005",
    title: "Write Test Cases",
    description: "Create test cases for authentication module",
    assignedTo: "EMP1005",
    assignedToName: "Sneha Gupta",
    assignedBy: "MGR001",
    department: "Finance",
    priority: "Low",
    dueDate: "2026-10-28",
    status: "Completed",
  },
  { Sr_No:"6",
    _id: "TASK006",
    title: "API Documentation",
    description: "Document all employee management endpoints",
    assignedTo: "EMP1006",
    assignedToName: "Rohan Mehta",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Low",
    dueDate: "2026-10-30",
    status: "Completed",
  },
  {
     Sr_No:"7",
    _id: "TASK007",
    title: "Leave Module",
    description: "Implement leave request and approval workflow",
    assignedTo: "EMP1007",
    assignedToName: "Kavya Singh",
    assignedBy: "MGR001",
    department: "HR",
    priority: "High",
    dueDate: "2026-10-29",
    status: "Pending",
  },
  {
     Sr_No:"8",
    _id: "TASK008",
    title: "Dashboard Charts",
    description: "Create attendance and performance analytics charts",
    assignedTo: "EMP1008",
    assignedToName: "Vikram Yadav",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Medium",
    dueDate: "2026-11-02",
    status: "In Progress",
  },
  {
     Sr_No:"9",
    _id: "TASK009",
    title: "Payroll Report",
    description: "Generate monthly employee payroll report",
    assignedTo: "EMP1009",
    assignedToName: "Pooja Patel",
    assignedBy: "MGR001",
    department: "Finance",
    priority: "High",
    dueDate: "2026-10-31",
    status: "Pending",
  },
  {
     Sr_No:"10",
    _id: "TASK010",
    title: "Notification System",
    description: "Implement email notifications for leave requests",
    assignedTo: "EMP1010",
    assignedToName: "Manish Tiwari",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Medium",
    dueDate: "2026-11-05",
    status: "Pending",
  },
  {
     Sr_No:"11",
    _id: "TASK011",
    title: "Employee Onboarding",
    description: "Prepare onboarding checklist for new employees",
    assignedTo: "EMP1003",
    assignedToName: "Neha Verma",
    assignedBy: "MGR001",
    department: "HR",
    priority: "High",
    dueDate: "2026-10-27",
    status: "In Progress",
  },
  {
     Sr_No:"12",
    _id: "TASK012",
    title: "Salary Verification",
    description: "Verify salary records and identify discrepancies",
    assignedTo: "EMP1009",
    assignedToName: "Pooja Patel",
    assignedBy: "MGR001",
    department: "Finance",
    priority: "High",
    dueDate: "2026-11-03",
    status: "Pending",
  },
  {
     Sr_No:"13",
    _id: "TASK013",
    title: "Profile Update Form",
    description: "Add employee profile editing functionality",
    assignedTo: "EMP1001",
    assignedToName: "Aarav Singh",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Medium",
    dueDate: "2026-10-30",
    status: "Pending",
  },
  {
     Sr_No:"14",
    _id: "TASK014",
    title: "Performance Review",
    description: "Collect and organize quarterly performance reviews",
    assignedTo: "EMP1003",
    assignedToName: "Neha Verma",
    assignedBy: "MGR001",
    department: "HR",
    priority: "Medium",
    dueDate: "2026-11-06",
    status: "Pending",
  },
  {
     Sr_No:"15",
    _id: "TASK015",
    title: "Database Optimization",
    description: "Optimize employee queries and database indexes",
    assignedTo: "EMP1006",
    assignedToName: "Rohan Mehta",
    assignedBy: "MGR001",
    department: "IT",
    priority: "High",
    dueDate: "2026-11-04",
    status: "In Progress",
  },
  {
     Sr_No:"16",
    _id: "TASK016",
    title: "Expense Report",
    description: "Review and reconcile monthly expense submissions",
    assignedTo: "EMP1005",
    assignedToName: "Sneha Gupta",
    assignedBy: "MGR001",
    department: "Finance",
    priority: "Medium",
    dueDate: "2026-11-07",
    status: "Pending",
  },
  {
     Sr_No:"17",
    _id: "TASK017",
    title: "Attendance Export",
    description: "Implement attendance report export to CSV",
    assignedTo: "EMP1002",
    assignedToName: "Priya Sharma",
    assignedBy: "MGR001",
    department: "IT",
    priority: "Low",
    dueDate: "2026-11-01",
    status: "In Progress",
  },
  {
     Sr_No:"18",
    _id: "TASK018",
    title: "Recruitment Tracker",
    description: "Create a tracker for candidate applications",
    assignedTo: "EMP1007",
    assignedToName: "Kavya Singh",
    assignedBy: "MGR001",
    department: "HR",
    priority: "Medium",
    dueDate: "2026-11-08",
    status: "Pending",
  },
  {
     Sr_No:"19",
    _id: "TASK019",
    title: "Payment Reconciliation",
    description: "Match payment records against monthly invoices",
    assignedTo: "EMP1004",
    assignedToName: "Amit Kumar",
    assignedBy: "MGR001",
    department: "Finance",
    priority: "High",
    dueDate: "2026-11-09",
    status: "In Progress",
  },
  {
     Sr_No:"20",
    _id: "TASK020",
    title: "Security Audit",
    description: "Review access permissions and API security",
    assignedTo: "EMP1010",
    assignedToName: "Manish Tiwari",
    assignedBy: "MGR001",
    department: "IT",
    priority: "High",
    dueDate: "2026-11-10",
    status: "Pending",
  },
];


    return(
        <>
      <div className="flex justify-between bg-slate-950 text-white h-screen w-screen">
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
          className="m-2  w-[95%] "
        >
         <header className="flex justify-between flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-4xl font-bold text-cyan-400">Team Tasks</h1>
                        <h1>View and manage your tasks assigned to each team member</h1>
                      </div>
                      <div className="flex items-center gap-2 mr-4 min-w-[45%]">
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
                          Add Task
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-10 flex-wrap   min-w-full mt-2 ">
                      <div className="flex w-[22.5%] justify-center items-center gap-5  bg-slate-800 py-3 px-6 rounded-xl ">
                        <FaTasks size={65} className="bg-blue-600 p-1 rounded-xl " />
                        <div className="flex flex-col">
                          {/* <span className="font-bold text-2xl">Team Members</span> */}
                          <span className="text-4xl font-bold">12</span>
                          <span className="font-semibold">Total Tasks</span>
                        </div>
                      </div>
                      <div className="flex  w-[22.5%] justify-center  items-center gap-5 bg-slate-800 py-3 px-6 rounded-xl ">
                        <FaClock
                          size={65}
                          className="bg-green-600 p-1 rounded-xl"
                        />
                        <div className="flex flex-col">
                          {/* <span className="font-bold text-2xl">Present Today</span> */}
                          <span className="text-4xl font-bold">4</span>
                          <span className="font-semibold">Pending</span>
                        </div>
                       
                      </div>
                      <div className="flex  w-[22.5%] justify-center  items-center gap-5 bg-slate-800 py-3 px-6 rounded-xl ">
                        <FaPlayCircle
                          size={65}
                          className="bg-yellow-600 p-1 rounded-xl"
                        />
                        <div className="flex flex-col">
                          {/* <span className="font-bold text-2xl">Leave Request</span> */}
                          <span className="text-4xl font-bold">2</span>
                          <span className="font-semibold">In Progress</span>
                        </div>
                      </div>
                      <div className="flex  w-[22.5%] justify-center  items-center gap-5 bg-slate-800 py-3 px-6 rounded-xl ">
                        <FaCheckCircle size={65} className="bg-purple-600 p-1.5 rounded-xl" />
                        <div className="flex flex-col">
                          {/* <span className="font-bold text-2xl">My Tasks</span> */}
                          <span className="text-4xl font-bold">8</span>
                          <span className="font-semibold">Completed</span>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="overflow-hidden h-[77.5%] rounded-xl border mt-2 border-slate-700">
                    <div className="pt-3 px-4 pb-4 flex items-center justify-between bg-slate-800 mb-1 font-bold">
                      <span className="min-w-[4%] ">Sr. No.</span>
                      <span className="min-w-[13%]">Name</span>
                      <span className="min-w-[15%] ">Task Title</span>
                      <span className="min-w-[30%] ">Respnsibility/description</span>
                      <span className="min-w-[5%] ">Priority</span>
                      <span className="min-w-[11%] text-center">Due date</span>
                        <span className="min-w-[7%] ">Status</span>
                          <span className="min-w-[13%] ">Action</span>
                    </div>
        
                  <div className="overflow-y-auto custom-scrollbar max-h-[90%] flex flex-col gap-2">
                   {
                    tasks?.map((task)=>{
                      return   <div className="px-4 py-1 flex items-center justify-between bg-white/10 mx-1 rounded-xl">
                      <span className="min-w-[4%] ">{task.Sr_No}</span>
                      <span className="min-w-[13%] flex flex-col ">{task.assignedToName} <span className="text-xs text-gray-500 ml-4">{task.assignedTo}</span></span>
                      <span className="min-w-[15%] ">{task.title}</span>
                      <span className="min-w-[30%] ">{task.description}</span>
                      <span className={`min-w-[5%] ${task.priority=="High"?"bg-red-600 px-3 py-1 rounded-xl":""} ${task.priority=="Medium"?"bg-yellow-600 px-3 py-1 rounded-xl":""}${task.priority=="Low"?"bg-blue-600 px-3 py-1 rounded-xl":""}`}>{task.priority}</span>
                      <span className="min-w-[11%] text-center ">{task.dueDate}</span>
                        <span className={`min-w-[7%] text-center ${task.status=="Completed"?"bg-cyan-600 py-1 rounded-xl":""} ${task.status=="Pending"?"bg-yellow-600 py-1 rounded-xl":""} ${task.status=="In Progress"?"bg-blue-600 py-1 rounded-xl":""}`}>{task.status}</span>
                          <span className="min-w-[13%] "></span>
                    </div>
                    })
                  }
                   
                  </div>
                  </div>
        </motion.div>
      </div>
        </>
    )
}
export default MyTaskComponent