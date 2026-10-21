import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer.jsx";
import {motion } from 'motion/react'
import PublicNavbar from "../Home/PublicNavbar.jsx";
const AboutUs=()=>{
    

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col bg-slate-950 ">
        {/* <PublicNavbar/> */}
       <section  className="bg-slate-950 flex items-center text-white w-screen  h-[85%] py-20 px-10  ">
      <div className="max-w-6xl mx-auto">

        <motion.h1 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
        className="text-4xl font-bold text-center mb-6">
          About EmpManage
        </motion.h1>

        <motion.p 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
        className="text-slate-400 text-center max-w-3xl mx-auto text-lg">
          EmpManage is a modern employee management system designed to
          simplify how organizations manage their employees and daily
          operations.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          <motion.div 
             animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
     
          className="bg-[#111C2E] p-6 rounded-xl border-2 border-slate-600">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Simple
            </h2>
            <p className="text-slate-400">
              Manage employees, tasks, attendance and leaves from one
              easy-to-use platform.
            </p>
          </motion.div>

          <motion.div 
             animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
         
           transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
     
          
          className="bg-[#111C2E] p-6 rounded-xl border-2 border-slate-600">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Secure
            </h2>
            <p className="text-slate-400">
              Role-based access and secure authentication help protect
              organizational data.
            </p>
          </motion.div>

          <motion.div 
             animate={{
            boxShadow:"0px 0px 15px rgba(29, 195, 233, 0.5)"
          }}
            whileHover={{
            scale:1.09,
           
          }}
          
           transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
     
          className="bg-[#111C2E] p-6 rounded-xl border-2 border-slate-600">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Organized
            </h2>
            <p className="text-slate-400">
              Keep employee information, attendance, tasks and leave
              management organized in one place.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
    <Footer/>
  
        </div>
    )
}
export default AboutUs;