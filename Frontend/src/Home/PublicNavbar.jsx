import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MotionLink = motion(Link);

const PublicNavbar = () => {

    const navigate=useNavigate();
  // const location = useLocation();
  const [path ,setPath]=useState("Home");

  const handleNav = (id) => {
     setPath(id);
  if (window.location.pathname !== "/") {
    navigate("/", {
      state: {
        scrollTo: id,
      },
    });
    return;
  }
 

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <>
      <nav className=" flex justify-between items-center h-[10%] bg-slate-900 fixed w-[100%]  ">
        <img
          src="./HomeLogo.png"
          alt="HomeLogo"
          className="h-22 w-auto object-cover"
        />
        <div className="flex justify-between w-[20%] relative text-white">
          <motion.button
         onClick={() => handleNav("Home")}
            className="font-bold text-center text-lg"
          >
            Home
            {
              path==="Home" && (
                
                <motion.div className="absolute left-0 right-0 -bottom-0 bg-gray-200 h-[2px]  w-[16%] text-center" layoutId="outline"/>
              )
            }
          </motion.button>
          <motion.button
         onClick={() => handleNav("Feature")}
            className="px-1 text-lg relative hover:border-blue-600 hover:text-blue-400 font-bold"
          >
            Feature
             {
              path==="Feature" && (
                
                <motion.div className="absolute  left-0 right-0 -bottom-0 bg-gray-200 h-[2px] " layoutId="outline"/>
              )
            }
          
          </motion.button>
          <motion.button
       onClick={() => handleNav("AboutUs")}
            className="text-lg px-1 relative hover:border-blue-600 hover:text-blue-400 font-bold"
          >
            About
             {
              path==="AboutUs" && (
                
                <motion.div className="absolute  left-0 right-0 -bottom-0 bg-gray-200 h-[2px] " layoutId="outline"/>
              )
            }
         
          </motion.button>
        </div>
        <div className="flex  justify-between w-[12%]">
          <MotionLink
            to={"/login"}
            className=" bg-slate-800 items-center px-4 shadow-lg border-2 hover:bg-blue-600 font-bold border-blue-600 text-white rounded-lg py-1.5"
          >
            Login
          </MotionLink>
          <MotionLink
            to={"/sign-up"}
            className="mr-4 bg-blue-500 items-center px-3 text-white rounded-lg py-1.5 font-bold"
          >
            Sign Up
          </MotionLink>
        </div>
      </nav>
    </>
  );
};
export default PublicNavbar;
