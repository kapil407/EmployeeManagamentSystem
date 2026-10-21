import { Outlet } from "react-router-dom";
import NavBarHandler from "./PrivateNavbar.jsx";


import Footer from "../LandingPages/Footer.jsx";

const Homepage=()=>{



    return(
        <div className="w-screen h-screen">
         
            {/* Show after login in to application */}
        
       
       <div className="w-screen h-[86%] ">
        
        <Outlet/>
       </div>
     
        </div>
    )
}
export default Homepage;