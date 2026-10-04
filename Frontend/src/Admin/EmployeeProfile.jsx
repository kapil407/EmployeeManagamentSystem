import NavBarHandler from "../Home/PrivateNavbar";
import {motion} from 'motion/react'
const AllEmployee = () => {
  return (
    <>
      <NavBarHandler />
      <motion.div className="text-white  w-screen p-2 flex flex-col h-[90%] gap-2 items-center bg-slate-950">
        <h1 className="mt-1 text-2xl font-bold">All Employees</h1>
        <motion.div className="flex w-full">
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="mb-2 border  border-slate-600 px-2 py-1 rounded-lg cursor-pointer"
          >
            <span className="text-xl">+</span> Add new employee
          </motion.button>
        </motion.div>
        <motion.div className="flex   p-2  flex-wrap gap-8 w-full max-h-full overflow-y-auto custom-scrollbar">
          {/* {employee profile card} */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer  border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 15px rgba(58, 152, 223, 0.7)",
            }}
            className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto"
          >
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
                  <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>

            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>
            <motion.div 
          whileHover={{
            scale:1.02,
            boxShadow:"0px 0px 15px rgba(58, 152, 223, 0.7)"
          }}
          className="rounded-lg border-l cursor-pointer border-r border-slate-600 p-4  w-[15%] h-auto">
            <h1 className="font-bold text-lg mb-2">kapil kumar</h1>

            <motion.div className="font-semibold flex flex-col gap-2">
              <h1>
                EmpId: <span>1102</span>
              </h1>
              <h1>Software Engineer</h1>
              <h1>IT Department</h1>
            </motion.div>
          </motion.div>


        </motion.div>
      </motion.div>
    </>
  );
};
export default AllEmployee;
