import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="h-[14%] bg-slate-950 border-cyan-950  shadow-lg z-50 border-t slate-900 flex justify-between ">
        <div className="flex flex-col  w-[28%] h-full justify-center items-center gap-1">
          <img
            src="./HomeLogo.png"
            alt="Homelogo"
            className=" object-cover h-8 w-[70%] mr-[50%]"
          />
          <h1 className=" text-gray-400 font-bold">
            A modern employee management system <br /> for growing teams.
          </h1>
        </div>
        <div className="flex justify-evenly w-[28%]">
          <div className="flex text-gray-400 flex-col mt-1">
            <h1 className="font-bold">Quick Links</h1>
            <Link to={"/HomeLanding"} >Home</Link>
            <Link to={"/Feature"}>Feature</Link>
            <Link to={"./About-Us"}>About</Link>
          </div>
          <div className="flex text-gray-400 flex-col mt-1">
            <h1 className="font-bold">Support</h1>
            <h1>Help Center</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
        <div className="text-gray-400 w-[28%] flex flex-col justify-center items-center">
          <h1 className="font-bold  text-lg">Connect with us </h1>
          <div className="flex gap-4 mt-2">
            <Link
              to={"https://github.com/kapil407"}  target="_blank"  rel="noopener noreferrer"
              className="text-blue-600 hover:text-gray-400 w-10"
            >
              <FaGithub size={22} />
            </Link>
            <Link
              to={"https://www.linkedin.com/feed/"}  target="_blank"   rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 w-10"
            >
              <FaLinkedinIn size={22} />
            </Link>
            <Link 
              to={"https://kapil-portfolio-mxaw.onrender.com/"}  target="_blank"  rel="noopener noreferrer"
              className="text-blue-600 hover:text-cyan-400 w-10"
            >
              <FaBriefcase size={22} />
            </Link>
            <Link
              to={"https://www.instagram.com/?hl=en"}  target="_blank"  rel="noopener noreferrer"
              className="text-blue-600 hover:text-pink-600 w-10"
            >
              <FaInstagram size={22} />
            </Link>
          </div>
        </div>
        <div className="w-[15%] text-gray-400 flex justify-center items-center">
          <h1>@ 2026 All rights reserved</h1>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
