import { FaTasks, FaCheckCircle, FaClock, FaRegCircle } from "react-icons/fa";
import { LuClipboardPlus, LuSearch } from "react-icons/lu";

const EmployeeTasks = () => {
  return (
    <>
      <div className="w-screen h-full">
        <div className="flex gap-5 w-full h-full flex-wrap px-2">
          <div className="flex items-center border border-slate-600 bg-slate-800 w-[24%]  rounded-xl text-white py-1  justify-center gap-6">
            <FaTasks
              size={59}
              className="text-blue-600 bg-blue-400 p-2 rounded-xl "
            />
            <div>
              <h1 className="text-xl font-bold">Total Tasks</h1>
              <h1 className="font-bold text-2xl">20</h1>
              <h1 className="font-semibold">Assigned to this employee</h1>
            </div>
          </div>
          <div className="flex items-center border border-slate-600 bg-slate-800 w-[24%]  text-white rounded-xl py-1   h-[25%] justify-center gap-6">
            <FaCheckCircle
              size={59}
              className="bg-green-200 text-green-600 rounded-xl p-2"
            />
            <div>
              <h1 className="text-xl font-bold">Compeleted</h1>
              <h1 className="font-bold text-2xl">8</h1>
              <h1 className="font-semibold">{(8 / 20) * 100}%</h1>
            </div>
          </div>
          <div className="flex items-center border border-slate-600 bg-slate-800 w-[24%]  rounded-xl py-1 text-white  h-[25%] justify-center gap-6">
            <FaClock
              size={59}
              className="bg-yellow-200 p-2 rounded-xl text-yellow-600"
            />
            <div>
              <h1 className="text-xl font-bold">In Progress</h1>
              <h1 className="font-bold text-2xl">12</h1>
              <h1 className="font-semibold">{(12 / 20) * 100}%</h1>
            </div>
          </div>
          <div className="flex items-center border border-slate-600 bg-slate-800 w-[24%] text-white rounded-xl py-1   h-[25%] justify-center gap-6">
            <FaRegCircle
              size={59}
              className="text-gray-600 bg-gray-200 p-2 rounded-xl"
            />
            <div>
              <h1 className="text-xl font-bold">To Do</h1>
              <h1 className="font-bold text-2xl">3</h1>
              <h1 className="font-semibold">{(3 / 20) * 100}%</h1>
            </div>
          </div>
        </div>
        <div className="text-white justify-between flex flex-col  bg-slate-800 p-2 bg-red-800 m-2 rounded-xl ">
          <div className="flex w-full justify-between rounded-xl ">
            <div className="flex items-center gap-6 px-4  bg-slate-800">
              <LuClipboardPlus size={35} />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-cyan-400"> Assigned Tasks</h1>
                <h1>Tasks assign to kapil</h1>
              </div>
            </div>
            <div className=" flex   justify-evenly gap-4 items-center bg-slate-800 w-[70%] ">
              <div className="flex items-center border border-slate-800  py-2 px-2 w-[50%]  gap-2 rounded-xl text-gray-950  bg-slate-600 font-semibold ">
                <LuSearch size={25} />
                <input
                  type="text"
                  placeholder="Search  tasks "
                  className="outline-none text-gray-950 font-semibold"
                />
              </div>
              <div className="  bg-slate-600 font-semibold items-center  justify-center py-2 px-6 text-gray-950 rounded-xl">
                <select name="" id="" className="outline-none">
                  <option value="">All Status </option>
                  <option value="In Progress">In Progress</option>
                  <option value="To Do">To Do</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="text-gray-950 font-semibold border border-slate-600 px-8 flex  items-center justify-center py-2 rounded-xl bg-slate-600">
                <select
                  name="All Priority"
                  id=""
                  className="outline-none bg-slate-600"
                >
                  <option value="">All Priority</option>
                  <option value="">High</option>
                  <option value="">Medium</option>
                  <option value="">Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full h-82 gap-2 mt-1 overflow-hidden">
            <div className="flex  justify-between w-full bg-slate-600 py-2">
              <span className="w-[16%] text-center  ">Sr. No.</span>
              <span className="w-[16%] text-center  ">Tasks</span>
              <span className="w-[16%] text-center  ">Periority</span>
              <span className="w-[16%] text-center  ">Due Date</span>
              <span className="w-[16%] text-center  ">Status</span>
              <span className="w-[16%] text-center  ">Progress</span>
            </div>
            <div className="h-full overflow-auto custom-scrollbar space-y-1">
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
              <div className="flex justify-between w-full bg-white/5 py-1 ">
                <span className="w-[16%] text-center  ">1.</span>
                <span className="flex-col flex w-[16%] text-center  ">
                  Development Authentication Module{" "}
                  <span className="text-gray-400">
                    Implement JWT based authentication
                  </span>
                </span>
                <span className="w-[16%] text-center  ">Hight</span>
                <span className="w-[16%] text-center  ">05 Oct 2026</span>
                <span className="w-[16%] text-center  ">In Progress</span>
                <div className=" w-[10%] bg-slate-600 h-3   mr-2 mt-2.5 rounded-xl flex items-center w-[16%] text-center  ">
                  <div className="h-3 bg-blue-600 w-[10%] flex rounded-xl" />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeTasks;
