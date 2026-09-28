import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const RegisterController = () => {
  const navigate =useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = () => {
    navigate('/login');
  };
  return (
    <>
      <div className=" flex justify-center  items-center h-[99%] w-screen  text-white  ">
        <div className="border border-cyan-950 h-full w-[30%] flex flex-col rounded-l-xl  justify-between items-center">
            <div>
                <h1 className="text-4xl font-black mt-2 mr-10">Employee <br/> <span className="text-blue-400">Management System</span></h1>
            <p className="font-bold text-gray-400 mr-9">Manage people, streamline operations, and <br/>build a productive workplace.</p>
            </div>
         <img src={`./RegisterImage.png`} alt="photo"  className="h-[77%] w-full rounded-l-xl"/>
        </div>
        <div className="border-b border-t border-r h-full w-[50%] border-cyan-950 flex flex-col rounded-r-xl  justify-center items-center bg-slate-950 ">
          <div className="bg-slate-900  bg-blur-sm w-[70%] h-[95%] flex justify-center  flex-col items-center rounded-xl">
            <strong className="text-center text-4xl mb-4 text-slate-200">
              Create an Account
            </strong>
            <p className="text-gray-400">Get started with your free account</p>
            <div className="flex flex-col gap-6  w-[70%] ">
             <div className="flex mb-4 border h-[13%] justify-center items-center mt-6 border border-slate-600 rounded hover:border-blue-400">
                 <IoPersonOutline className="ml-2 " size={22}/>
              <input
                type="text"
                placeholder="Enter FirstName "
                className=" font-black text-lg  outline-none py-3 px-2 w-full "
              />
             </div>
              <div className="flex mb-4 border h-[13%] justify-center items-center border border-slate-600 rounded hover:border-blue-400">
                <IoPersonOutline className="ml-2" size={22}/>
              <input
                type="text"
                placeholder="Enter LastName "
                className=" outline-none font-black text-lg py-3 px-2 w-full "
              />
              </div>
             <div className="flex mb-4 border h-[13%] justify-center items-center  border border-slate-600 rounded hover:border-blue-400">
                 <MdOutlineEmail className="ml-2" size={22} />
              <input
                type="email"
                placeholder="Enter Email "
                className=" outline-none font-black text-lg py-3 px-2 w-full "
              />
             </div>
              <div className="flex border border-slate-600 hover:border-blue-400  h-[13%] justify-center font-black text-lg items-center">
                <RiLockPasswordLine className="ml-2" size={22}/>
                <input
                  type={`${showPassword ? "password" : "text"}`}
                  placeholder="Enter password "
                  className=" outline-none py-3 px-2 w-full "
                />
                <span
                  onClick={showPasswordHandler}
                  className="mr-2 cursor-pointer "
                >
                  {showPassword ? <BiShow className="mr-2" /> : <BiSolidHide  className="mr-2"/>}
                </span>
              </div>
              <button className="bg-blue-600 py-3 text-lg rounded font-black cursor-pointer">
                Create Account
              </button>
            </div>
            <div className="text-lg mt-2">
              <p>
                Already have an account?{" "}
                <span
                  onClick={loginHandler}
                  className=" text-blue-600 underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterController;
