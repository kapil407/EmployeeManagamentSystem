import {motion} from 'motion/react'
import PublicNavbar from '../Home/PublicNavbar';
import Footer from './Footer';
const FeaturesLandingPage = () => {
  return (
    <div className='w-screen h-screen flex   justify-center flex-col bg-slate-950 overflow-y-hidden '>
    {/* <PublicNavbar/> */}
      <div className="text-white flex flex-col gap-2 bg-slate-950 h-[95%]  w-full justify-evenly items-center ">
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    
        className="flex flex-col justify-center w-full items-center h-full ">
          <motion.h1 
          animate={{
            boxShadow:"0px 0px 15px rgba(34, 149, 199, 0.7)"
          }}
          className="text-cyan-400 border px-2 py-1 rounded-lg">
            Features
          </motion.h1>
          <h1 className="text-3xl font-bold">
            Everything <span className="text-cyan-400">You Need</span>{" "}
          </h1>
          <h1 className="text-gray-400">
            A complete solution to manage your organization efficiently.
          </h1>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
     
        className="flex  justify-center gap-8 w-full
         mt-1 items-center">
          < motion.div 
          animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
          whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 bg-white/5 rounded-lg border-slate-600 justify-center items-center  px-3  py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Employee </h1>
            <h1 className="text-gray-400">
              Manage employee <br />
              profiles, departments,
              <br />
              and roles
            </h1>
          </motion.div>
          <motion.div 
           animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 bg-white/5 rounded-lg border-slate-600 justify-center items-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Attendance </h1>
            <h1 className="text-gray-400">
              Track daily attendance <br /> and working hours <br />{" "}
              efficiently.
            </h1>
          </motion.div >
          <motion.div  
           animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 bg-white/5 rounded-lg border-slate-600 justify-center items-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Leave </h1>
            <h1 className="text-gray-400">
              Apply, approve <br /> and manage employee <br /> leaves.
            </h1>
          </motion.div >
          <motion.div 
           animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 bg-white/5 rounded-lg border-slate-600 justify-center items-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Task </h1>
            <h1 className="text-gray-400">
              Assign and track tasks <br /> with deadlines and <br />{" "}
              priorities.
            </h1>
          </motion.div >
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    
        className="flex flex-col justify-center  items-center mt-4 mb-2">
          <motion.h1 
         animate={{
            boxShadow:"0px 0px 15px rgba(34, 149, 199, 0.7)"
          }}
          className="border border-cyan-600 px-2 py-1 mb-2 rounded-xl text-cyan-400">
            Role-Based Access
          </motion.h1>
          <h1 className="text-3xl font-bold">
            Built For <span className="text-cyan-400"> Every Role</span>
          </h1>
          <h1 className="text-gray-400">
            Different dashboards for different responsibilties
          </h1>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      
        className="flex justify-center h-full items-center gap-8">
          <motion.div 
            animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 border-slate-600 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-600">Admin</h1>
            <h1>Manage your organization</h1>
            <h1>Manage employees</h1>
            <h1> Create departments</h1>
            <h1>View reports</h1>
            <h1>System settings</h1>
          </motion.div>
          <motion.div 
            animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 border-slate-600 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-600">Manager</h1>
            <h1>Manage your team</h1>
            <h1>View team members</h1>
            <h1>Assign tasks</h1>
            <h1>Approve leave requests</h1>
            <h1>Track attendence</h1>
          </motion.div>
          <motion.div 
            animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8
          }}
          className="flex flex-col border-2 border-slate-600 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-400">Employee</h1>
            <h1>View Profile</h1>
            <h1>Track Attendance</h1>
            <h1>Manage Your Tasks</h1>
            <h1>Apply for Leave</h1>
            <h1>View Leave Status</h1>
          </motion.div>
        </motion.div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default FeaturesLandingPage;
