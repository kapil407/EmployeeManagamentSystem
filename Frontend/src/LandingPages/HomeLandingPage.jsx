import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const HomeLandingPage=()=>{


    return (
        <>
       <div className="flex justify-between w-screen h-full ">
        <div className="w-[55%] h-full text-white flex flex-col justify-evenly items-center">
            <div className="flex gap-2 items-center border font-bold border-blue-600 px-3 rounded-xl bg-slate-800 text-blue-400 py-2">
                <FaCircle className="text-blue-400"/>
                <h1>Employee Management System</h1>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-black">Managae Your Team.</h1>
                 <h1 className="text-5xl font-black text-blue-600">Simplify Your Work.</h1>
            </div>
            <div>
                <h1 className="text-xl text-gray-400 mr-15">One plateform to manage employees, attendence, <br/> tasks, leaves and departments efficiently </h1>
            </div>
            <div className="flex gap-2 justify-evenly w-[50%]">
                <div className="flex  justify-center items-center px-2 bg-blue-600 font-bold rounded-xl">
                    <Link to={'/sign-up'} className=" px-3 py-2">Get Started 
                
                </Link>
                <IoIosArrowRoundForward size={20}/>

                </div>
               <div className="flex rounded-xl border-2 justify-center items-center px-4 border-blue-600">
                 <Link to={'/login'} className=" px-3 py-2 font-bold">Login</Link>
                   
               </div>
            </div>
            <div className="flex gap-4">

                <div className="flex  justify-center gap-2 items-center">
                     <FaCircleCheck className="text-green-500 text-2xl" />
                   <div className="flex w-auto  flex-col  justify-center">
                     
                    <h1 className="text-xl">Easy to use</h1>
                     <h1 className="text-gray-400">clean and modern UI</h1>
                   </div>
                   
                </div>
                <div className="flex  justify-center gap-2 items-center">
                     <FaShieldAlt className="text-purple-500 text-2xl" />
                    <div className="flex w-auto  flex-col  justify-center">
                        <h1 className="text-xl">Secure</h1>
                    <h1 className="text-gray-400">Your data is safe</h1>
                    </div>
                    </div>
                <div className="flex  justify-center gap-2 items-center">
                      <FaBolt className="text-yellow-400 text-2xl" />
                  <div className="flex w-auto  flex-col  justify-center">
                      <h1 className="text-xl">For Every Team </h1>
                    <h1 className="text-gray-400">Admin, Manager, Employee</h1>
                  </div>


                </div>
            </div>
        </div>
        <div>
            <img src='./HomepageImage.png' alt="image" className="h-full w-auto"/>
        </div>
       </div>
        </>
    )
}
export default HomeLandingPage;