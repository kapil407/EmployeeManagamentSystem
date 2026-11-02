import { useState } from "react";
import EmployeeSideBar from "../Employee/EmployeeSideBar";
import { motion } from "motion/react";

import {
  FaCalendarAlt,
  FaUmbrellaBeach,
  FaBriefcaseMedical,
  FaLayerGroup,
  FaCalendarCheck,
  FaArrowRight,
  FaPaperPlane,
  FaTimes,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const EmpApplyLeave = () => {

  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Casual",
      from: "2026-10-10",
      to: "2026-10-12",
      days: 3,
      status: "Pending",
    },
    {
      id: 2,
      type: "Sick",
      from: "2026-09-20",
      to: "2026-09-20",
      days: 1,
      status: "Approved",
    },
    {
      id: 3,
      type: "Casual",
      from: "2026-09-05",
      to: "2026-09-06",
      days: 2,
      status: "Rejected",
    },
  ]);

  const [balances, setBalances] = useState({
    Casual: 6,
    Sick: 4,
    Earned: 10,
  });

  const leaveLimits = {
    Casual: 12,
    Sick: 8,
    Earned: 15,
  };

  // Calculate requested days (calendar days)
  const totalDays =
    fromDate && toDate && new Date(toDate) >= new Date(fromDate)
      ? Math.floor(
          (new Date(toDate + "T00:00:00") -
            new Date(fromDate + "T00:00:00")) /
            (1000 * 60 * 60 * 24)
        ) + 1
      : 0;

  const availableBalance = leaveType
    ? balances[leaveType]
    : 0;

  const totalRemaining =
    Object.values(balances).reduce((sum, value) => sum + value, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!leaveType || !fromDate || !toDate || !reason.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    if (new Date(toDate) < new Date(fromDate)) {
      alert("To Date cannot be earlier than From Date.");
      return;
    }

    if (new Date(fromDate) < new Date(new Date().toDateString())) {
      alert("Past dates cannot be selected.");
      return;
    }

    if (totalDays > availableBalance) {
      alert("Insufficient leave balance.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      type: leaveType,
      from: fromDate,
      to: toDate,
      days: totalDays,
      reason,
      status: "Pending",
    };

    setRequests((prev) => [newRequest, ...prev]);

    // Clear form
    setLeaveType("");
    setFromDate("");
    setToDate("");
    setReason("");

    alert("Leave request submitted successfully!");
  };

  const formatDate = (date) => {
    return new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-600/20 text-green-400 border border-green-600/30";

      case "Pending":
        return "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30";

      case "Rejected":
        return "bg-red-600/20 text-red-400 border border-red-600/30";

      default:
        return "bg-slate-600 text-white";
    }
  };

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
      className="flex-1 min-w-0 p-2 ">

        <div className="border border-slate-700 bg-slate-800 rounded-xl px-2 py-1">

          {/* Page Header */}
          <header className="mb-1">

            <h1 className="text-3xl font-bold text-cyan-400">
              Apply Leave
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Submit a leave request and track its status.
            </p>

          </header>

          {/* Banner */}
          <section className="bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-800 rounded-xl px-3  flex items-center justify-between mb-1">

            <div className="flex items-center gap-4 py-1">

              <FaCalendarAlt className="text-4xl text-blue-300" />

              <div>
                <h2 className="text-xl font-bold text-white">
                  Apply for Leave
                </h2>

                <p className="text-blue-200 text-sm">
                  Manage your leave applications.
                </p>
              </div>

            </div>

           

          </section>

          {/* Leave Balance */}
          <section className="mb-1.5">

            <h2 className="text-xl font-bold text-white mb-1">
              Leave Balance
              <span className="text-gray-400 text-sm font-normal">
                {" "} (This Year)
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">

              
              <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
                <FaUmbrellaBeach size={50} className="text-green-400 bg-green-500/15 p-2 rounded-xl"/>
                <div className="flex items-center gap-3 flex-col">
                    <span className="text-xl font-bold">Casual Leave</span>
                    <span className="text-2xl font-bold"> {12 - balances.Casual}/{12}</span>
                </div>
              </div>

             
               <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
                <FaBriefcaseMedical size={50} className="text-purple-400 bg-purple-500/15 p-2 rounded-xl"/>
                <div className="flex items-center gap-3 flex-col">
                    <span className="text-xl font-bold">Sick Leave</span>
                    <span className="text-2xl font-bold"> {8 - balances.Sick}/{8}</span>
                </div>
              </div>

             
              <div className="bg-slate-700 flex items-center gap-4 justify-center text-white rounded-xl">
                <FaLayerGroup size={50} className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"/>
                <div className="flex items-center gap-3 flex-col">
                    <span className="text-xl font-bold">Earned Leave</span>
                    <span className="text-2xl font-bold"> { 15 - balances.Earned}/{15}</span>
                </div>
              </div>

             
                 <div className="bg-slate-700 flex items-center gap-4 py-1 justify-center text-white rounded-xl">
                <FaCalendarCheck size={50} className="text-yellow-400 bg-yellow-500/15 p-2 rounded-xl"/>
                <div className="flex items-center gap-3 flex-col">
                    <span className="text-xl font-bold">Total Remaining</span>
                    <span className="text-2xl font-bold"> {totalRemaining}/{35}</span>
                </div>
              </div>

            </div>

          </section>

          {/* Main Content */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-2">

            {/* Apply Form */}
            <div className="bg-slate-700 rounded-xl px-3 py-2">

              <h2 className="text-xl font-bold text-white  pb-1 mb-1">
                Apply New Leave
              </h2>

              <form onSubmit={handleSubmit} className="space-y-1.5">

                {/* Leave Type */}
                <div>

                  <label className="text-white text-sm font-semibold block mb-1">
                    Leave Type <span className="text-red-400">*</span>
                  </label>

                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-white outline-none focus:border-cyan-400"
                  >

                    <option value="">Select Leave Type</option>
                    <option value="Casual">Casual Leave</option>
                    <option value="Sick">Sick Leave</option>
                    <option value="Earned">Earned Leave</option>

                  </select>

                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                  <div>

                    <label className="text-white text-sm font-semibold block mb-1">
                      From Date <span className="text-red-400">*</span>
                    </label>

                    <input
                      type="date"
                      value={fromDate}
                      min={new Date().toLocaleDateString("en-CA")}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                        if (toDate && e.target.value > toDate) {
                          setToDate("");
                        }
                      }}
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-white outline-none focus:border-cyan-400"
                    />

                  </div>

                  <div>

                    <label className="text-white text-sm font-semibold block mb-1">
                      To Date <span className="text-red-400">*</span>
                    </label>

                    <input
                      type="date"
                      value={toDate}
                      min={fromDate || new Date().toLocaleDateString("en-CA")}
                      onChange={(e) => setToDate(e.target.value)}
                      required
                      disabled={!fromDate}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-white outline-none focus:border-cyan-400 disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* Total Days */}
                <div className="bg-slate-800 rounded-lg px-4 py-1.5 flex justify-between items-center">

                  <span className="text-gray-300 text-sm">
                    Total Requested Days
                  </span>

                  <span className="text-xl font-bold text-cyan-400">
                    {totalDays} Days
                  </span>

                </div>

                {/* Reason */}
                <div>

                  <label className="text-white text-sm font-semibold block mb-1">
                    Reason <span className="text-red-400">*</span>
                  </label>

                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    maxLength={300}
                    rows={4}
                    required
                    placeholder="Enter reason for leave..."
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-white outline-none resize-none focus:border-cyan-400 placeholder:text-gray-500"
                  />

                  <p className="text-gray-400 text-xs text-right">
                    {reason.length}/300
                  </p>

                </div>

                {/* Available Balance */}
                <div className="bg-slate-800 rounded-lg px-4 py-1.5 flex justify-between items-center">

                  <span className="text-gray-300 text-sm">
                    Available Balance
                  </span>

                  <span className="text-green-400 font-bold">
                    {leaveType ? `${availableBalance} Days` : "--"}
                  </span>

                </div>

                {leaveType && totalDays > availableBalance && (
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <FaExclamationCircle />
                    Insufficient leave balance.
                  </p>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">

                  <button
                    type="button"
                    onClick={() => {
                      setLeaveType("");
                      setFromDate("");
                      setToDate("");
                      setReason("");
                    }}
                    className="flex-1 bg-slate-600 hover:bg-slate-500 text-white rounded-lg py-1 flex items-center justify-center gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={
                      !leaveType ||
                      !fromDate ||
                      !toDate ||
                      !reason.trim() ||
                      totalDays <= 0 ||
                      totalDays > availableBalance
                    }
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-900 font-bold rounded-lg py-1 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Submit Request
                  </button>

                </div>

              </form>

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-2">

              {/* Leave Summary */}
              <div className="bg-slate-700 rounded-xl px-3 py-1.5">

                <div className="flex items-center gap-4 mb-1">

                  <div className="bg-green-500/15 text-green-400 rounded-full px-2 py-2 text-2xl">
                    <FaCalendarCheck />
                  </div>

                  <h2 className="text-xl font-bold text-white">
                    Leave Summary
                  </h2>

                </div>

                <div className="space-y-4 mt-3">

                  <div className="flex justify-between border-b border-slate-600 pb-2">
                    <span className="text-gray-300">Requested Days</span>
                    <span className="text-white font-bold">
                      {totalDays || "--"}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-slate-600 pb-2">
                    <span className="text-gray-300">Available Balance</span>
                    <span className="text-green-400 font-bold">
                      {leaveType ? availableBalance : totalRemaining} Days
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Request Status</span>
                    <span className="text-yellow-400 font-bold">
                      Pending
                    </span>
                  </div>

                </div>

              </div>

              {/* Recent Requests */}
              <div className="bg-slate-700 rounded-xl px-4 py-2 flex-1">

                <header className="flex justify-between items-center mb-5">

                  <h2 className="text-xl font-bold text-white">
                    Recent Leave Requests
                  </h2>

                  <button className="text-cyan-400 text-sm flex items-center gap-2">
                    View All <FaArrowRight />
                  </button>

                </header>

                <div className="overflow-x-auto">

                  <table className="w-full text-left text-sm min-w-[480px]">

                    <thead>

                      <tr className="bg-slate-600 text-gray-200">
                        <th className="p-3">Leave Type</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Days</th>
                        <th className="p-3">Status</th>
                      </tr>

                    </thead>

                    <tbody>

                      {requests.map((request) => (

                        <tr
                          key={request.id}
                          className="border-b border-slate-600 text-white"
                        >

                          <td className="p-3">
                            {request.type}
                          </td>

                          <td className="p-3 text-gray-300 whitespace-nowrap">
                            {formatDate(request.from)}
                            <br />
                            <span className="text-xs text-gray-500">
                              To {formatDate(request.to)}
                            </span>
                          </td>

                          <td className="p-3">
                            {request.days}
                          </td>

                          <td className="p-3">

                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(request.status)}`}>
                              {request.status}
                            </span>

                          </td>

                        </tr>

                      ))}

                      {requests.length === 0 && (
                        <tr>
                          <td colSpan="4" className="p-5 text-center text-gray-400">
                            No leave requests found.
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


// Leave Balance Card
const LeaveBalanceCard = ({
  title,
  used,
  total,
  icon,
  color,
  bg,
  remaining = false,
}) => {

  const value = remaining ? used : `${total - used} / ${total}`;

  return (
    <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">

      <div className={`rounded-full p-4 text-2xl ${color} ${bg}`}>
        {icon}
      </div>

      <div>
        <p className="text-gray-300 text-sm">{title}</p>

        <h2 className="text-2xl font-bold text-white">
          {remaining ? `${value} Days` : value}
        </h2>
      </div>

    </div>
  );
};

export default EmpApplyLeave;
