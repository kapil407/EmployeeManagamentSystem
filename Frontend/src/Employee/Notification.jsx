
import { useState } from "react";
import {
  FaBell,
  FaCheckCircle,
  FaClipboardList,
  FaWallet,
  FaCalendarAlt,
  FaBullhorn,
  FaUser,
  FaTrash,
  FaCheckDouble,
  FaClock,
} from "react-icons/fa";
import EmployeeSideBar from "./EmployeeSideBar";
import { motion } from "motion/react";

const initialNotifications = [
  {
    id: 1,
    title: "Leave Approved",
    message: "Your leave request has been approved by your manager.",
    type: "leave",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "New Task Assigned",
    message: "A new task has been assigned to you by your manager.",
    type: "task",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Attendance Reminder",
    message: "Don't forget to mark your attendance today.",
    type: "attendance",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    title: "Salary Credited",
    message: "Your monthly salary has been credited successfully.",
    type: "salary",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "Company Announcement",
    message: "A new company announcement has been published.",
    type: "announcement",
    time: "Yesterday",
    read: true,
  },
  {
    id: 6,
    title: "Profile Updated",
    message: "Your profile information has been updated.",
    type: "profile",
    time: "2 days ago",
    read: true,
  },
];

const notificationStyles = {
  leave: {
    icon: FaCheckCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  task: {
    icon: FaClipboardList,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  attendance: {
    icon: FaClock,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  salary: {
    icon: FaWallet,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  announcement: {
    icon: FaBullhorn,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  profile: {
    icon: FaUser,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
};

const EmpNotification = () => {
  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [activeFilter, setActiveFilter] = useState("All");

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  const readCount = notifications.filter(
    (n) => n.read
  ).length;

  const filteredNotifications = notifications.filter((n) => {
    if (activeFilter === "Unread") return !n.read;
    if (activeFilter === "Read") return n.read;
    return true;
  });

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  return (
    <div className="w-screen flex h-screen bg-slate-900 text-white ">
            <EmployeeSideBar/>
      {/* Header */}
      <motion.div 
      initial={{
        opacity:0,y:0
      }}
      whileInView={{opacity:1,y:0}}
      transition={{
        duration:.4
      }}
      className="flex flex-col w-full p-2 bg-slate-800 rounded-xl my-2">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-2">

        <div>
          <h1 className="text-2xl font-bold">
            Notifications
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Stay updated with your latest activities.
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="flex items-center justify-center gap-2 px-4  
          bg-blue-500 hover:bg-blue-600 disabled:opacity-40 
          disabled:cursor-not-allowed rounded-lg text-sm font-medium 
          transition"
        >
          <FaCheckDouble />
          Mark all as read
        </button>

      </div>

      {/* Summary Cards */}
      <div className="grid  grid-cols-1 gap-2 mb-2">

        <div className="bg-slate-900 rounded-xl px-5 py-1 border border-slate-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Total Notifications</p>
              <h2 className="text-2xl font-bold mt-">
                {notifications.length}
              </h2>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400">
              <FaBell size={20} />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl px-5 py-1 border border-slate-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Unread</p>
              <h2 className="text-2xl font-bold mt- text-blue-400">
                {unreadCount}
              </h2>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400">
              <FaBell size={20} />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl px-5 py-1 border border-slate-700">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Read</p>
              <h2 className="text-2xl font-bold mt- text-green-400">
                {readCount}
              </h2>
            </div>
            <div className="px-3 py-2 rounded-lg bg-green-500/10 text-green-400">
              <FaCheckCircle size={20} />
            </div>
          </div>
        </div>

      </div>

      {/* Notification List */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">

          <div>
            <h2 className="text-lg font-semibold">
              Recent Notifications
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              You have {unreadCount} unread notifications
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2">

            {["All", "Unread", "Read"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm transition
                  ${
                    activeFilter === filter
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-gray-400 hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}

          </div>

        </div>

        {/* Notifications */}
        <div className=" overflow-hidden h-[85%]">

          <div className="h-full overflow-auto custom-scrollbar space-y-2">
            {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {

              const style =
                notificationStyles[notification.type];

              const Icon = style.icon;

              return (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`group flex items-start gap-3  px-4 py-2 rounded-xl 
                    border transition cursor-pointer
                    ${
                      notification.read
                        ? "bg-slate-800/50 border-slate-700"
                        : "bg-slate-800 border-blue-500/30"
                    }`}
                >

                  {/* Icon */}
                  <div className={`p-3 rounded-lg ${style.bg}`}>
                    <Icon className={`${style.color} text-lg`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="font-semibold text-sm">
                        {notification.title}
                      </h3>

                      {!notification.read && (
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      )}

                    </div>

                    <p className="text-gray-400 text-sm mt-1">
                      {notification.message}
                    </p>

                    <p className="text-gray-500 text-xs mt-3 flex items-center gap-2">
                      <FaClock />
                      {notification.time}
                    </p>

                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">

                    {!notification.read && (
                      <button
                        title="Mark as read"
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notification.id);
                        }}
                        className="p-2 rounded-lg text-blue-400 
                        hover:bg-blue-500/10 transition"
                      >
                        <FaCheckDouble />
                      </button>
                    )}

                    <button
                      title="Delete notification"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                      className="p-2 rounded-lg text-gray-500 
                      hover:text-red-400 hover:bg-red-500/10 transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>
              );
            })
          ) : (

            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">

              <div className="bg-slate-800 p-5 rounded-full mb-4">
                <FaBell className="text-gray-500 text-3xl" />
              </div>

              <h3 className="text-lg font-semibold">
                No Notifications Found
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                You're all caught up!
              </p>

            </div>

          )}

          </div>
        </div>



      </div>
      </motion.div>

    </div>
  );
};

export default EmpNotification;
