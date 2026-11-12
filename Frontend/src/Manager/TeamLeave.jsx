import { FaSearch, FaUserCircle } from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import useFetchTeamLeave from "../Hooks/useFetchLeave";
import axios from "axios";
import { useEffect, useState } from "react";
import { updateLeaveStatus } from "../Redux/LeaveSlice";
const TeamLeaveComponent = () => {
  const [flage, setFlage] = useState(false);
  const leaveRequests = useFetchTeamLeave(flage);

  const leaveDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    });
  };

  const [activeTab, setActiveTab] = useState("Pending");

  const filteredLeaves =
    activeTab === "All"
      ? leaveRequests
      : leaveRequests.filter((leave) => leave.status === activeTab);
  const LeaveStatusChangedHandler = async (id, status) => {
    try {
      console.log("id---", id);
      const res = await axios.patch(
        `http://localhost:5200/Update-Leavestatus`,
        { id, status: status },
        { withCredentials: true },
      );
      console.log("res in status change", res);
      if (res.data.success) {
        setFlage((prev) => !prev);
        updateLeaveStatus(res.data.LeaveData.status);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const [searchLeave, setSearchLeave] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText?.trim()) {
      setSearchLeave([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5200/search-leave",
          { value: searchText?.trim() },
          { withCredentials: true },
        );

        setSearchLeave(res.data.FilterLeave || []);
        console.log("res search ", res.data);
      } catch (error) {
        console.log("Search error:", error);
        setSearchLeave([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  let cnt = 0;
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
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  placeholder="Search team member..."
                  className="outline-none"
                />
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => {
                  (setActiveTab("Pending"), setFlage((prev) => !prev),setSearchText(""));
                }}
                className={` ${activeTab === "Pending" ? "bg-cyan-500/15 text-cyan-400 border-cyan-400" : "bg-slate-800 border-slate-700"} hover:bg-cyan-500/15 font-bold hover:text-cyan-400 hover:border-cyan-400 cursor-pointer border px-4 w-[10%] rounded-t-xl  py-3`}
              >
                Pending
              </button>
              <button
                onClick={() => {
                  (setActiveTab("Approved"), setFlage((prev) => !prev),setSearchText(""));
                }}
                className={` ${activeTab === "Approved" ? "bg-cyan-500/15 text-cyan-400 border-cyan-400" : "bg-slate-800 border-slate-700"} hover:bg-cyan-500/15 font-bold hover:text-cyan-400 hover:border-cyan-400 cursor-pointer border px-4 w-[10%] rounded-t-xl  py-3`}
              >
                Approved
              </button>
              <button
                onClick={() => {
                  (setActiveTab("Rejected"), setFlage((prev) => !prev),setSearchText(""));
                }}
                className={` ${activeTab === "Rejected" ? "bg-cyan-500/15 text-cyan-400 border-cyan-400" : "bg-slate-800 border-slate-700"} hover:bg-cyan-500/15 font-bold hover:text-cyan-400 hover:border-cyan-400 cursor-pointer border px-4 w-[10%] rounded-t-xl  py-3`}
              >
                Rejected
              </button>
              <button
                onClick={() => {
                  (setActiveTab("All"), setFlage((prev) => !prev),setSearchText(""));
                }}
                className={` ${activeTab === "All" ? "bg-cyan-500/15 text-cyan-400 border-cyan-400" : "bg-slate-800 border-slate-700"} hover:bg-cyan-500/15 font-bold hover:text-cyan-400 hover:border-cyan-400 cursor-pointer border px-4 w-[10%] rounded-t-xl  py-3`}
              >
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
                <span className="min-w-[20%] border-l px-2 border-slate-700">
                  Action
                </span>
              </div>
              <div className="overflow-y-auto custom-scrollbar h-[90%] px-2 gap-1 flex flex-col rounded-xl">
                {!filteredLeaves.length && activeTab === "Pending" && (
                  <h1 className="w-full  h-full text-center flex items-center justify-center font-bold">
                    No Pending Leave
                  </h1>
                )}
                {!filteredLeaves.length && activeTab === "Rejected" && (
                  <h1 className="w-full  h-full text-center flex items-center justify-center font-bold">
                    No Rejected Leave
                  </h1>
                )}
                {!filteredLeaves.length && activeTab === "Approved" && (
                  <h1 className="w-full  h-full text-center flex items-center justify-center font-bold">
                    No Approved Leave
                  </h1>
                )}

                {searchText.trim() && searchLeave.length === 0 ? (
                  <h1 className="w-full h-full flex items-center justify-center font-bold">
                    No leave request available 
                  </h1>
                ) : (
                  (searchText.trim() ? searchLeave : filteredLeaves).map(
                    (leave) => {
                      cnt++;

                      return (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            key={leave._id}
                            className="mt-1 flex justify-between items-center py-2 bg-white/5 rounded-xl "
                          >
                            <span className="min-w-[4%] px-4">{cnt}</span>

                            {!leave.profilePicture ? (
                              <FaUserCircle size={35} />
                            ) : (
                              <img
                                src={leave?.profilePicture}
                                className="w-12 h-12 object-cover rounded-full"
                              />
                            )}

                            <span className="min-w-[10%] text-cyan-400 text-center font-bold text-xl ml-3 ">
                              {leave.name}
                            </span>
                            <span className="min-w-[9%]  text-center ">
                              {leave.leaveType}
                            </span>
                            <span className="min-w-[11%] pr-5 text-center ">
                              {leaveDate(leave.startDate)}
                            </span>
                            <span className="min-w-[11%]  ">
                              {leaveDate(leave?.endDate)}
                            </span>
                            <span className="min-w-[5%] font-bold text-center ">
                              {leave?.totalDays}
                            </span>
                            <span
                              className={` ${leave?.status === "Approved" ? " min-w-[24%]" : "min-w-[17%]"} ${leave?.status === "Rejected" ? "min-w-[24%]  " : "min-w-[17%]"}`}
                            >
                              {leave?.reason}
                            </span>
                            <span
                              className={`w-[5%] ${leave?.status === "Approved" ? "hidden " : ""} ${leave?.status === "Rejected" ? "hidden " : ""} px-3 py-1 rounded-xl font-bold bg-yellow-600 w-fit `}
                            >
                              {leave.status}
                            </span>
                            <div className="w-[20%]   items-center justify-between flex">
                              <button
                                onClick={() =>
                                  LeaveStatusChangedHandler(
                                    leave?._id,
                                    "Approved",
                                  )
                                }
                                className={`border px-3 py-1  font-bold rounded-xl ml-2 text-center  ${leave?.status === "Rejected" ? " bg-red-600 border-red-800 " : "bg-green-600 border-green-800"}`}
                              >
                                {leave.status === "Pending"
                                  ? "Approve"
                                  : `${leave?.status}`}
                              </button>
                              <button
                                onClick={() =>
                                  LeaveStatusChangedHandler(
                                    leave?._id,
                                    "Rejected",
                                  )
                                }
                                className={`border ${leave?.status === "Approved" ? "hidden" : ""} ${leave?.status === "Rejected" ? "hidden  " : ""} px-6 mr-2 py-1 font-bold bg-red-600 rounded-xl border-red-900 `}
                              >
                                Reject
                              </button>
                            </div>
                          </motion.div>
                        </>
                      );
                    },
                  )
                )}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
export default TeamLeaveComponent;
