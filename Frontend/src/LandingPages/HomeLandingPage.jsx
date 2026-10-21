import { Link, useLocation } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Feature, motion } from "motion/react";
import PublicNavbar from "../Home/PublicNavbar";
import Footer from "./Footer";
import FeaturesLandingPage from "./FeaturesPage";
import AboutUs from "./AboutUs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const HomeLandingPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <div
        id="Home"
        className="h-screen w-screen  overflow-x-hidden bg-slate-950"
      >
        <PublicNavbar />

        <div className="flex justify-between w-full  h-full items-center overflow-x-hidden">
          {/* left side box */}
          <div className="w-[45%] h-full text-white flex flex-col justify-evenly items-center">
            <div className="h-[10%]"></div>
            <motion.div
              animate={{
                boxShadow: "0px 0px 20px rgba(15, 127, 239, 0.7)",
              }}
               transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-2 items-center border font-bold border-blue-600 px-3 rounded-xl bg-slate-800 text-blue-400 py-2"
            >
              <FaCircle className="text-blue-400" />
              <h1>Employee Management System</h1>
            </motion.div>
            <motion.div
              animate={{
                boxShadow: "0px 0px 15px rgba(22, 142, 201, 0.7)",
              }}
               transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
              className="flex border border-slate-600 flex-col gap-2 p-2.5 rounded-lg"
            >
              <h1 className="text-5xl font-black">Managae Your Team.</h1>
              <h1 className="text-5xl font-black text-blue-600">
                Simplify Your Work.
              </h1>
            </motion.div>
            <motion.div 
             transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-xl text-gray-400 mr-15">
                One plateform to manage employees, attendence, <br /> tasks,
                leaves and departments efficiently{" "}
              </h1>
            </motion.div>
            <div className="flex gap-2 justify-evenly w-[50%]">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
               
                animate={{
                  boxShadow: "0px 0px 15px rgba(201, 233, 240, 0.4)",
                }}
                 transition={{
            duration:.7,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
                className="flex  justify-center items-center px-2 bg-blue-600 font-bold  rounded-xl"
              >
                <Link to={"/sign-up"} className=" px-3 py-2">
                  Get Started
                </Link>
                <IoIosArrowRoundForward size={20} />
              </motion.div>
              <motion.div
                animate={{
                  boxShadow: "0px 0px 15px rgba(62, 84, 228, 0.7)",
                }}
                 transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
                className="flex rounded-xl border-2 justify-center items-center px-4 border-blue-600"
              >
                <Link to={"/login"} className=" px-3 py-2 font-bold">
                  Login
                </Link>
              </motion.div>
            </div>
            <motion.div 
             transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-4">
              <div className="flex  justify-center gap-2 items-center">
                <FaCircleCheck size={38} className="text-green-500" />
                <div className="flex w-auto  flex-col  justify-center">
                  <h1 className="text-xl">Easy to use</h1>
                  <h1 className="text-gray-400">clean and modern UI</h1>
                </div>
              </div>
              <div className="flex  justify-center gap-2 items-center">
                <FaShieldAlt size={38} className="text-purple-500 " />
                <div className="flex w-auto  flex-col  justify-center">
                  <h1 className="text-xl">Secure</h1>
                  <h1 className="text-gray-400">Your data is safe</h1>
                </div>
              </div>
              <div className="flex  justify-center gap-2 items-center">
                <FaBolt size={38} className="text-yellow-400 " />
                <div className="flex w-auto  flex-col  justify-center">
                  <h1 className="text-xl">For Every Team </h1>
                  <h1 className="text-gray-400">Admin, Manager, Employee</h1>
                </div>
              </div>
            </motion.div>
          </div>
          {/* right image box  */}
          <motion.div 
           transition={{
            duration:.8,
            ease: "easeOut",
          }}
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
          className="w-[53%] mr-8 mt-4 h-[82%] flex items-center justify-center  overflow-x-hidden">
            <div className="h-[10%] w-full"></div>
            <img
              src="./HomepageImage.png"
              alt="image"
              className="h-full w-full"
            />
          </motion.div>
        </div>
        {/* <Footer/> */}
      </div>
      <div id="Feature" className="overflow-x-hidden w-full">
        <FeaturesLandingPage />
      </div>
      <div id="AboutUs" className="overflow-x-hidden w-full">
        <AboutUs />
      </div>
    </>
  );
};
export default HomeLandingPage;
