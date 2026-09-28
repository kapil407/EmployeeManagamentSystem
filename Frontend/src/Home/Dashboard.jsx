import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Dashboard = ({ setShowDashoboard }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[45vh] w-[25vw] bg-[#1E1E28] rounded-lg">
      <div className="flex flex-col shadow-lg w-full h-full justify-evenly ">
        <div className="flex flex-col ml-3 mr-3 mt-2 mb-2 p-2 border border-gray-700 rounded-lg">
          <h1 className="font-black text-lg text-[#60A5FA]">ADMIN</h1>
          <p className="text-[#CBD5E1]">
            Manage employees, departments & system{" "}
          </p>
         <div className="flex justify-end items-center">
             <Link
            to="/Admin-dashboard"
            onClick={() => setShowDashoboard(false)}
          
            className="cursor-pointer text-end mr-2 text-[#38BDF8] hover:hover:text-white"
          >
            Open Dashboard
           
          </Link>
           <IoIosArrowRoundForward className="text-[#38BDF8]" size={25}/>
         </div>
        </div>
        <div className="flex flex-col ml-3 mr-3 mt-2 mb-2 p-2 border border-gray-700 rounded-lg">
          <h1 className="font-black text-lg text-[#60A5FA]">MANAGER</h1>
          <p className="text-[#CBD5E1]">
            {" "}
            Manage team, tasks, leave & attendance{" "}
          </p>
         
         <div className="flex justify-end items-center">
             <Link
            to="/Manager-dashboard"
            onClick={() => setShowDashoboard(false)}
            className="text-[#38BDF8] hover:hover:text-white cursor-pointer text-end mr-2"
          >
            Open Dashboard
            
          </Link>
          <IoIosArrowRoundForward className="text-[#38BDF8]" size={25}/>
         </div>
        </div>
        <div className="flex flex-col ml-3 mr-3 mt-2 mb-2 p-2 border border-gray-700  rounded-lg">
          <h1 className="font-black text-lg text-[#60A5FA]">EMPLOYEE</h1>
          <p className="text-[#CBD5E1]">
            View profile, tasks, attendance & leave{" "}
          </p>
         <div className="flex justify-end items-center">
             <Link
            to="/Employee-dashboard"
            onClick={() => setShowDashoboard(false)}
            className="text-[#38BDF8] hover:hover:text-white cursor-pointer text-end mr-2"
          >
            Open Dashboard
             
          </Link>
          <IoIosArrowRoundForward className="text-[#38BDF8]" size={25}/>
         </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
