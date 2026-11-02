
import { FaUsers, FaBuilding, FaCalendarCheck, FaTasks, FaDownload } from "react-icons/fa";
import NavBarHandler from "../Home/PrivateNavbar";

const Report = () => {

  const reports = [
    {
      title: "Total Employees",
      value: 120,
      icon: FaUsers,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Departments",
      value: 8,
      icon: FaBuilding,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Present Today",
      value: 105,
      icon: FaCalendarCheck,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Completed Tasks",
      value: 85,
      icon: FaTasks,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
  ];

  const reportData = [
    { name: "Present", count: 105, color: "bg-green-500" },
    { name: "Absent", count: 10, color: "bg-red-500" },
    { name: "On Leave", count: 5, color: "bg-yellow-500" },
  ];

  const taskData = [
    { name: "Completed", count: 85, color: "bg-green-500" },
    { name: "In Progress", count: 25, color: "bg-blue-500" },
    { name: "Pending", count: 10, color: "bg-yellow-500" },
  ];

  const totalAttendance = 120;
  const totalTasks = 120;

  return (
    <div className="min-h-screen  text-white">
            <NavBarHandler/>
      {/* Header */}
    <div className="px-4 py-2">
          <div className="flex justify-between items-center mb-7">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-gray-400 text-sm mt-1">
            Organization overview and summary
          </p>
        </div>

        <span className="text-sm text-gray-400 bg-slate-900 px-4 py-2 rounded-lg">
          Overall Summary
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">

        {reports.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-xl p-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
                </div>

                <div className={`${item.bg} ${item.color} p-4 rounded-xl`}>
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Attendance Report */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mb-6">

        <h2 className="text-lg font-semibold mb-5">
          Attendance Report
        </h2>

        <div className="flex h-4 w-full rounded-full overflow-hidden mb-5">
          {reportData.map((item) => (
            <div
              key={item.name}
              className={item.color}
              style={{
                width: `${(item.count / totalAttendance) * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reportData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <div>
                <p className="text-gray-400 text-sm">{item.name}</p>
                <h3 className="font-semibold">{item.count}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Task Report */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">

        <h2 className="text-lg font-semibold mb-5">
          Task Report
        </h2>

        <div className="flex h-4 w-full rounded-full overflow-hidden mb-5">
          {taskData.map((item) => (
            <div
              key={item.name}
              className={item.color}
              style={{
                width: `${(item.count / totalTasks) * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {taskData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <div>
                <p className="text-gray-400 text-sm">{item.name}</p>
                <h3 className="font-semibold">{item.count}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

    </div>
  );
};

export default Report;
