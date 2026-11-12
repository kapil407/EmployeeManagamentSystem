import {
  FaPlus,
  FaSearch,
  FaTasks,
  FaCalendarAlt,
  FaCalendarCheck,
  FaUsers,
  FaUserCircle,
} from "react-icons/fa";
import SideBar from "./SideBar";
import { motion } from "motion/react";
import useFetchMyTeam from "../Hooks/useFetchMyTeam";
import { useNavigate } from "react-router-dom";
import useFetchTeamLeave from "../Hooks/useFetchLeave";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const TeamMembersComponent = () => {
  const [loading, setLoading] = useState(false);
  const teamMembers = useFetchMyTeam();

  const teamLeave = useFetchTeamLeave();
  const PendingLeave = teamLeave.filter((leave) => leave.status === "Pending");
  const navigate = useNavigate();
  let cnt = 0;

  const [searchText, setSearchText] = useState("");
  const [searchedMember, setSearchedMember] = useState([]);

  useEffect(() => {
    if (!searchText.trim()) {
      setSearchedMember([]);
      return;
    }
    setLoading((prev) => !prev);

    const timer = setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5200/search-team-member",
          { value: searchText.trim() },
          { withCredentials: true },
        );
        console.log("res in search members", res);
        if (res.data.success) {
          setSearchedMember(res.data.SearchMembers);
          // setLoading(prev=>!prev)
        }
      } catch (error) {
        setSearchedMember([]);
        console.error("error", error);
      } finally {
        setLoading((prev) => !prev);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <>
      <main className="flex justify-between bg-slate-950 text-white h-screen w-screen">
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
          className="m-2  min-w-[82%] p-2"
        >
          <header className="flex justify-between flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold">Team Members</h1>
                <h1>View and manage your team members</h1>
              </div>
              <div className="flex items-center gap-6 mr-4 min-w-[45%]">
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl border border-slate-700 font-bold min-w-full bg-slate-800">
                  <FaSearch />
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="outline-none"
                    placeholder="Search team member"
                  />
                </div>
                {/* <button className="flex items-center bg-green-600 font-semibold gap-3 border border-green-900 px-2 py-1.5 rounded-xl">
                  <FaPlus />
                  Add Member
                </button> */}
              </div>
            </div>
            <div className="flex gap-4 flex-wrap   min-w-full mt-2">
              <div className="flex items-center gap-5  bg-slate-800 p-6 rounded-xl ">
                <FaUsers size={85} className="bg-blue-600 p-1 rounded-xl " />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Team Members</span>
                  <span className="text-4xl font-bold">
                    {teamMembers?.length}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaCalendarCheck
                  size={85}
                  className="bg-green-600 p-1 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Present Today</span>
                  <span className="text-4xl font-bold">10/12</span>
                </div>
                <div
                  className="w-23 h-23 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(#22c55e ${50}%, #334155 ${50}%)`,
                  }}
                >
                  <div className="w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-white font-bold">50%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaCalendarAlt
                  size={85}
                  className="bg-yellow-600 p-1 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Leave Request</span>
                  <span className="text-4xl font-bold">
                    {PendingLeave?.length}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-xl ">
                <FaTasks size={85} className="bg-purple-600 p-1.5 rounded-xl" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">My Tasks</span>
                  <span className="text-4xl font-bold">8</span>
                </div>
              </div>
            </div>
          </header>
          <div className="overflow-hidden h-[71%] rounded-xl border mt-2 border-slate-700">
            <div className="pt-3 px-4 pb-4 flex items-center justify-between bg-slate-800 ">
              <span className="min-w-[5%] ">Sr. No.</span>
              <span className="min-w-[15%]">Name</span>
              <span className="min-w-[15%] ">EmpId</span>
              <span className="min-w-[15%] ">Department</span>
              <span className="min-w-[15%] ">Designation</span>
              <span className="min-w-[15%] ">Status</span>
            </div>

            <div className="overflow-y-auto custom-scrollbar max-h-[89%]">
              {!searchedMember.length && searchText.length ? (
                <h1 className="w-full font-bold h-full flex items-center justify-center mt-50">
                  {loading
                    ? "searching..."
                    : searchedMember.length === 0 && searchText.length > 0
                      ? "Not Found"
                      : null}
                </h1>
              ) : (
                (searchedMember?.length ? searchedMember : teamMembers)?.map(
                  (memeber) => {
                    cnt++;
                    return (
                      <div className="mt-3 font-bold flex justify-between mx-2 items-center py-1.5 rounded-xl bg-white/8">
                        <span className="w-[1%] px-4 font-bold">{cnt}.</span>
                        <span
                          onClick={() =>
                            navigate(`/emp-profile/${memeber?._id}`)
                          }
                          className="flex items-center gap-4 font-bold text-xl text-cyan-400"
                        >
                          {memeber.profilePicture ? (
                            <img
                              src={memeber?.profilePicture}
                              className="w-14 h-14 object-cover bg-center border rounded-full"
                            />
                          ) : (
                            <FaUserCircle size={35} />
                          )}
                          {memeber?.name} {memeber?.lastName}
                        </span>

                        <span className="min-w-[15%] ">{memeber?.email}</span>
                        <span className="min-w-[15%] ">
                          {memeber.departmentName}
                        </span>
                        <span className="min-w-[15%] ">
                          {memeber.designation}
                        </span>
                        <span className="min-w-[4%] mr-34 px-3 py-1 rounded-xl text-sm bg-green-600 font-bold   w-fit ">
                          {memeber?.status}
                        </span>
                      </div>
                    );
                  },
                )
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};
export default TeamMembersComponent;
