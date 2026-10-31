import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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
  FaWallet,
} from "react-icons/fa";

const MotionNavLink = motion.create(NavLink);
const links = [
  { name: "Dashboard", path: "/", icon: FaHome },
  { name: "My Profile", path: "/my-profile", icon: FaUser },
  { name: "Attendence", path: "/my-attendence", icon: FaCalendarCheck },
  { name: "Apply Leave", path: "/apply-leave", icon: FaCalendarAlt },
  { name: "My Salary", path: "/salary", icon: FaWallet },
  { name: "My Tasks", path: "/tasks", icon: FaTasks },
  { name: "Notifiction", path: "/notification", icon: FaBell },
];

const EmployeeSideBar = () => {
  return (
    <motion.aside className="border border-slate-700 m-2 rounded-xl min-w-[16%] shrink-0 p-1 bg-slate-800 justify-between flex flex-col">
      <img
        src="./ManagerLogo.png"
        alt="#logo"
        className="rounded-xl h-15 object-cover bg-center w-full"
      />
      <nav className="flex flex-col mb-8 text-white  gap-8">
        {links.map(({ name, path, icon: Icon }) => (
          <MotionNavLink
            key={path}
            to={path}
            className="relative flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-semibold text-gray-300"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-white/8 "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 50,
                    }}
                  />
                )}

                <Icon className="relative z-10" size={25} />
                <span className="relative z-10">{name}</span>
              </>
            )}
          </MotionNavLink>
        ))}
      </nav>
      <footer className="flex bg-slate-900 text-white items-center p-3 gap-4 text-xl rounded-xl">
        <FaHeadset />
        Need Help ? <br /> Contact HR
      </footer>
    </motion.aside>
  );
};
export default EmployeeSideBar;
