import { useState } from "react";
import EmployeeSideBar from "../Employee/EmployeeSideBar";

import {
  FaTasks,
  FaCheckCircle,
  FaLayerGroup,
  FaClock,
  FaExclamationCircle,
  FaSearch,
  FaCalendarAlt,
  FaArrowRight,
  FaCircle,
  FaPlay,
  FaCheck,
  FaEllipsisV,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { motion } from "motion/react";

const EmployeeTasks = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Implement User Authentication",
      description: "Add login, register and role-based access.",
      priority: "High",
      status: "In Progress",
      dueDate: "2026-10-30",
      progress: 60,
    },
    {
      _id: "2",
      title: "Design Dashboard UI",
      description: "Create responsive dashboard for employee.",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-11-02",
      progress: 0,
    },
    {
      _id: "3",
      title: "Fix Attendance Bug",
      description: "Resolve date filter issue in attendance.",
      priority: "High",
      status: "Overdue",
      dueDate: "2026-10-28",
      progress: 30,
    },
    {
      _id: "4",
      title: "API Integration for Leave",
      description: "Integrate apply leave API with frontend.",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2026-11-03",
      progress: 45,
    },
    {
      _id: "5",
      title: "Update Profile Module",
      description: "Allow users to update profile information.",
      priority: "Low",
      status: "Completed",
      dueDate: "2026-10-25",
      progress: 100,
    },
    {
      _id: "6",
      title: "Salary Page Integration",
      description: "Connect employee salary page with backend.",
      priority: "High",
      status: "Pending",
      dueDate: "2026-11-05",
      progress: 0,
    },
    {
      _id: "7",
      title: "Notification System",
      description: "Implement employee notification functionality.",
      priority: "Low",
      status: "Completed",
      dueDate: "2026-10-20",
      progress: 100,
    },
  ]);

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Task Statistics
  const completed = tasks.filter((task) => task.status === "Completed").length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const pending = tasks.filter((task) => task.status === "Pending").length;

  const overdue = tasks.filter((task) => task.status === "Overdue").length;

  const totalTasks = tasks.length;

  const completionPercentage = totalTasks
    ? Math.round((completed / totalTasks) * 100)
    : 0;

  // Upcoming Deadlines
  const upcomingTasks = tasks
    .filter((task) => task.status !== "Completed")
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 3);

  const formatDate = (date) => {
    return new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400";

      case "In Progress":
        return "bg-blue-500/20 text-blue-400";

      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "Overdue":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-600 text-white";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400";

      case "Medium":
        return "bg-yellow-500/20 text-yellow-400";

      case "Low":
        return "bg-green-500/20 text-green-400";

      case "Urgent":
        return "bg-purple-500/20 text-purple-400";

      default:
        return "bg-slate-600 text-white";
    }
  };

  // Update Task Status
  const updateTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === id
          ? {
              ...task,
              status,
              progress:
                status === "Completed"
                  ? 100
                  : status === "In Progress"
                    ? Math.max(task.progress, 10)
                    : 0,
            }
          : task,
      ),
    );

    setSelectedTask(null);
  };

  return (
    <div className="h-screen w-full flex bg-slate-900">
      <EmployeeSideBar />

      <motion.main 
      initial={{
        opacity:0,y:0
      }}
      whileInView={{opacity:1,y:0}}
      transition={{
        duration:.4
      }}
      className="flex-1  px-3 py-2.5 overflow-hidden">
        <div className="border border-slate-700 bg-slate-800 h-[100%] rounded-xl px-4 py-1">
          {/* Header */}
          <header className="mb-1">
            <h1 className="text-3xl font-bold text-cyan-400">My Tasks</h1>

            <p className="text-gray-400 text-sm mt-1">
              View, manage and track your assigned tasks.
            </p>
          </header>

          {/* Banner */}
          <section className="bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-800 rounded-xl px-3 py-1 flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-4">
              <FaTasks className="text-4xl text-blue-300" />

              <div>
                <h2 className="text-xl font-bold text-white">My Tasks</h2>

                <p className="text-blue-200 text-sm">
                  Stay organized and complete your work on time.
                </p>
              </div>
            </div>
          </section>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-1.5">
            <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
              <FaCheckCircle
                size={50}
                className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"
              />
              <div className="flex items-center gap-1 flex-col">
                <span className="text-xl font-bold">completed</span>
                <span className="text-2xl font-bold"> {completed}</span>
              </div>
            </div>

            <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
              <FaLayerGroup
                size={50}
                className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"
              />
              <div className="flex items-center gap-1 flex-col">
                <span className="text-xl font-bold">In Progress</span>
                <span className="text-2xl font-bold"> {inProgress}</span>
              </div>
            </div>

            <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
              <FaClock
                size={50}
                className="text-yellow-400 bg-yellow-500/15 p-2 rounded-xl"
              />
              <div className="flex items-center gap-1 flex-col">
                <span className="text-xl font-bold">Pending</span>
                <span className="text-2xl font-bold"> {pending}</span>
              </div>
            </div>

            <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
              <FaExclamationCircle
                size={50}
                className="text-red-400 bg-red-500/15 p-2 rounded-xl"
              />
              <div className="flex items-center gap-2 flex-col">
                <span className="text-xl font-bold">overdue</span>
                <span className="text-2xl font-bold"> {overdue}</span>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-1.5 ">
            {/* Task List */}
            <div className="xl:col-span-2 bg-slate-700 h-[52.5%] rounded-xl px-2 py-1">
              <header className="flex justify-between items-center pb-2">
                <h2 className="text-xl font-bold text-white">My Task List</h2>

                <span className="text-xs text-gray-400">
                  {filteredTasks.length} Tasks
                </span>
              </header>

              {/* Search & Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mb-1">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search task..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-3 py-2 text-white text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-1 text-white text-sm outline-none focus:border-cyan-400"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Overdue">Overdue</option>
                </select>

                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3  text-white text-sm outline-none focus:border-cyan-400"
                >
                  <option value="All">All Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>

              {/* Tasks */}
              <div className="space-y-1 h-[85%] overflow-hidden ">
                <div className="space-y-1 h-full custom-scrollbar overflow-auto">
                  {filteredTasks.map((task) => (
                    <div
                      key={task._id}
                      className="bg-slate-800 border border-slate-600 rounded-xl px-4 py-1.5 hover:border-cyan-500/50 transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Task Details */}
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <span
                            className={`w-1 h-16 rounded-full shrink-0 ${
                              task.status === "Completed"
                                ? "bg-green-500"
                                : task.status === "Overdue"
                                  ? "bg-red-500"
                                  : task.status === "Pending"
                                    ? "bg-yellow-500"
                                    : "bg-blue-500"
                            }`}
                          />

                          <div className="min-w-0">
                            <h3 className="text-white font-bold">
                              {task.title}
                            </h3>

                            <p className="text-gray-400 text-xs mt-1">
                              {task.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 mt-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs ${getPriorityStyle(task.priority)}`}
                              >
                                {task.priority}
                              </span>

                              <span
                                className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(task.status)}`}
                              >
                                {task.status}
                              </span>
                            </div>

                            {/* Progress */}
                            <div className="mt-3 max-w-xs">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Progress</span>
                                <span className="text-cyan-400">
                                  {task.progress}%
                                </span>
                              </div>

                              <div className="w-full h-1.5 bg-slate-600 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-cyan-400 rounded-full"
                                  style={{ width: `${task.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Due Date and Actions */}
                        <div className="flex items-center justify-between md:flex-col md:items-end gap-3">
                          <span className="text-gray-300 text-xs flex items-center gap-2 whitespace-nowrap">
                            <FaCalendarAlt className="text-cyan-400" />
                            {formatDate(task.dueDate)}
                          </span>

                          <button
                            onClick={() => setSelectedTask(task)}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                          >
                            Update Task <FaArrowRight className="inline ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredTasks.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <FaSearch className="text-3xl mx-auto mb-3" />

                      <p>No tasks found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col h-[46%] gap-1.5">
              {/* Progress Overview */}
              <div className="bg-slate-700 rounded-xl px-4 py-1">
                <h2 className="text-lg font-bold text-white ">
                  Task Progress
                </h2>

                <div className="flex gap-10  ">
                  <div
                    className="w-40 h-40 mt-2 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(#22c55e ${completionPercentage}%, #334155 0)`,
                    }}
                  >
                    <div className="w-[152px] h-[152px] rounded-full bg-slate-800 flex flex-col items-center justify-center">
                      <h2 className="text-3xl font-bold text-white">
                        {completionPercentage}%
                      </h2>

                      <p className="text-gray-400 text-xs">Completed</p>
                    </div>
                  </div>

                  <div className="w-full  space-y-3">
                    <ProgressRow
                      label="Completed"
                      count={completed}
                      color="text-green-400"
                    />

                    <ProgressRow
                      label="In Progress"
                      count={inProgress}
                      color="text-blue-400"
                    />

                    <ProgressRow
                      label="Pending"
                      count={pending}
                      color="text-yellow-400"
                    />

                    <ProgressRow
                      label="Overdue"
                      count={overdue}
                      color="text-red-400"
                    />
                  </div>

                 
                </div>
                 <div className=" mt-1 pt-1 w-full flex justify-end gap-32 text-white font-bold">
                    <span>Total Tasks</span>
                    <span>{totalTasks}</span>
                  </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-slate-700 rounded-xl px-4 py-2">
                <header className="flex justify-between items-center mb-1.5">
                  <h2 className="text-lg font-bold text-white">
                    Upcoming Deadlines
                  </h2>

                  <FaCalendarAlt className="text-cyan-400" />
                </header>

                <div className=" overflow-hiddden h-[30%]">
                  <div className="space-y-2 overflow-auto custom-scrollbar h-auto">
                    {upcomingTasks.map((task) => (
                    <div
                      key={task._id}
                      className="bg-slate-800 border border-slate-600 rounded-lg p-3"
                    >
                      <h3 className="text-white text-sm font-semibold">
                        {task.title}
                      </h3>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-400 text-xs">
                          Due: {formatDate(task.dueDate)}
                        </span>

                        <span
                          className={`text-xs ${getPriorityStyle(task.priority)} px-2 py-1 rounded-full`}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}

                  {upcomingTasks.length === 0 && (
                    <p className="text-gray-400 text-sm">
                      No upcoming deadlines.
                    </p>
                  )}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              {/* <div className="bg-slate-700 rounded-xl p-4">
                <h2 className="text-lg font-bold text-white mb-5">
                  Recent Activity
                </h2>

                <div className="space-y-5">
                  <ActivityItem
                    icon={<FaCheck />}
                    color="bg-green-600"
                    title='Completed "Update Profile Module"'
                    date="25 Oct, 2026"
                  />

                  <ActivityItem
                    icon={<FaPlay />}
                    color="bg-blue-600"
                    title='Started "API Integration for Leave"'
                    date="24 Oct, 2026"
                  />

                  <ActivityItem
                    icon={<FaCircle />}
                    color="bg-slate-500"
                    title='Assigned "Design Dashboard UI"'
                    date="22 Oct, 2026"
                  />
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </motion.main>

      {/* Update Task Modal */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3">
          <div className="bg-slate-800 border border-slate-600 rounded-xl p-5 w-full max-w-md">
            <header className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-white">Update Task</h2>

              <button
                onClick={() => setSelectedTask(null)}
                className="text-gray-400 hover:text-red-400"
              >
                <FaTimes />
              </button>
            </header>

            <h3 className="text-white font-semibold mb-2">
              {selectedTask.title}
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              {selectedTask.description}
            </p>

            <label className="text-gray-300 text-sm block mb-2">
              Update Status
            </label>

            <select
              value={selectedTask.status}
              onChange={(e) => {
                setSelectedTask({
                  ...selectedTask,
                  status: e.target.value,
                });
              }}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white outline-none mb-5"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedTask(null)}
                className="flex-1 bg-slate-600 text-white rounded-lg py-3"
              >
                Cancel
              </button>

              <button
                onClick={() =>
                  updateTaskStatus(selectedTask._id, selectedTask.status)
                }
                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg py-3"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Progress Row
const ProgressRow = ({ label, count, color }) => (
  <div className="flex justify-between items-center">
    <span className="flex items-center gap-2 text-gray-300 text-sm">
      <FaCircle className={color} />
      {label}
    </span>

    <span className="font-bold text-white">{count}</span>
  </div>
);


export default EmployeeTasks;
