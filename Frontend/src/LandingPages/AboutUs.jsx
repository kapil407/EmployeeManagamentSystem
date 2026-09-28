import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer.jsx";
const AboutUs=()=>{
    

    return (
        <>
    
       <section  className="bg-slate-950 text-white h-full py-20 px-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          About EmpManage
        </h1>

        <p className="text-slate-400 text-center max-w-3xl mx-auto text-lg">
          EmpManage is a modern employee management system designed to
          simplify how organizations manage their employees and daily
          operations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-[#111C2E] p-6 rounded-xl border-2 border-cyan-950">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Simple
            </h2>
            <p className="text-slate-400">
              Manage employees, tasks, attendance and leaves from one
              easy-to-use platform.
            </p>
          </div>

          <div className="bg-[#111C2E] p-6 rounded-xl border-2 border-cyan-950">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Secure
            </h2>
            <p className="text-slate-400">
              Role-based access and secure authentication help protect
              organizational data.
            </p>
          </div>

          <div className="bg-[#111C2E] p-6 rounded-xl border-2 border-cyan-950">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Organized
            </h2>
            <p className="text-slate-400">
              Keep employee information, attendance, tasks and leave
              management organized in one place.
            </p>
          </div>

        </div>

      </div>
    </section>
  
        </>
    )
}
export default AboutUs;