import {
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

const EmployeeLeaveHistory = () => {
  let Casual_leave_used = 6;
  let total_casual_leave = 12;
  let Sick_leave_used = 2;
  let total_sick_leave = 10;
  let Earned_leave_used = 4;
  let total_earned_leave = 15;

  const percentage1 = (Casual_leave_used / total_casual_leave) * 100;
  const percentage2 = (Sick_leave_used / total_sick_leave) * 100;
  const percentage3 = (Casual_leave_used / total_casual_leave) * 100;
  return (
    <>
      <div className="text-white w-screen h-full  p-2 ">
        <div className="bg-slate-950 w-full h-full ">
          <div className="flex gap-5 w-full h-full flex-wrap ">
            <div className="flex items-center border w-[24%] bg-green-200 rounded-xl text-green-800 py-2  justify-center gap-6">
              <FaFileAlt size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Present</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[24%] bg-red-100 text-red-600 rounded-xl py-2   h-[25%] justify-center gap-6">
              <FaCheckCircle size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Absent</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[24%] bg-yellow-100  text-yellow-800 rounded-xl py-2   h-[25%] justify-center gap-6">
              <FaClock size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Leave</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
            <div className="flex items-center border w-[24%] bg-purple-200 text-purple-800 rounded-xl py-2   h-[25%] justify-center gap-6">
              <FaTimesCircle size={55} />
              <div>
                <h1 className="text-3xl font-bold">22</h1>
                <h1 className="font-semibold">Present</h1>
                <h1 className="font-semibold">This Month</h1>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col w-full bg-slate-800 p-2 mr-2.5 my-2 rounded-xl">
            <h1 className="font-bold text-lg">Leave Balance</h1>
            <div className="flex w-full bg-slate-800 justify-evenly p-2">
              <div className="flex flex-col gap-4 w-[25%]">
                <h1>Casual leave(CL)</h1>
                <h1>Sick Leave</h1>
                <h1>Earned Leave</h1>
              </div>
              <div className="flex flex-col gap-3 h-auto w-[25%]">
                <h1 className="border-b-3 border-blue-600 w-[18%]">
                  6/12 used
                </h1>

                <h1 className="border-b-2 border-green-600 w-[18%]">
                  2/10 used
                </h1>
                <h1 className="border-b-2 border-purple-600 w-[18%]">
                  4/15 used
                </h1>
              </div>
              <div className="flex flex-col gap-8 w-[25%] justify-center items-center ">
                <div className="h-3 bg-slate-600 w-full rounded-full">
                  <div
                    style={{
                      width: `${percentage1}%`,
                    }}
                    className="  bg-blue-600 h-full rounded-full"
                  />
                </div>
                <div className="h-3 bg-slate-600 w-full rounded-full">
                  <div
                    style={{
                      width: `${percentage2}%`,
                    }}
                    className="  bg-green-600 h-full rounded-full"
                  />
                </div>
                <div className="h-3 bg-slate-600 w-full rounded-full">
                  <div
                    style={{
                      width: `${percentage3}%`,
                    }}
                    className="  bg-purple-600 h-full rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-auto items-center justify-center">
                <h1>6 left</h1>
                <h1>8 left</h1>
                <h1>11 left</h1>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-1 w-full flex-wrap ">
            <h1>Leave History</h1>
            <div className="w-full max-h-[80%] p-1 overflow-y-auto overflow-x-hidden ">
              <div className="flex w-full justify-evenly">
                <span className="text-lg w-[12%]">Sr. No.</span>
                <span className="text-lg w-[12%]">Leave Type</span>
                <span className="text-lg w-[12%]">From</span>
                <span className="text-lg w-[12%]">To</span>
                <span className="text-lg w-[12%]">No. of Days</span>
                <span className="text-lg w-[12%]">Reason</span>
                <span className="text-lg w-[12%]">Status</span>
                <span className="text-lg w-[12%]">Applied On</span>
              </div>
              <div className="flex w-full justify-evenly pt-2 ">
                <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
              <div className="flex w-full justify-evenly">
                 <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
              <div className="flex w-full justify-evenly">
                 <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
               <div className="flex w-full justify-evenly pt-2 ">
                <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
              <div className="flex w-full justify-evenly">
                 <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
              <div className="flex w-full justify-evenly">
                 <span className=" text-lg   w-[12%]">1.</span>
                <span className=" text-lg   w-[12%]">Casual Leave</span>
                <span className="text-lg   w-[12%]">02 Oct 2026</span>
                <span className="text-lg   w-[12%]">05 Oct 2026 </span>
                <span className="text-lg   w-[12%]">2</span>
                <span className="text-lg    w-[12%]">Fever</span>
                <span className="text-lg  w-[12%]">Approved</span>

                <span className="text-lg  w-[12%]">28 Sept 2026</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeLeaveHistory;
