import { Outlet } from "react-router-dom";
import NavBarHandler from "./PrivateNavbar.jsx";
import PublicNavbar from "./PublicNavbar.jsx";

import Footer from "../LandingPages/Footer.jsx";

const Homepage=()=>{



    return(
        <div className="w-screen h-screen">
         {/*
            Show after login in to application
         <NavBarHandler/>   */}
         <PublicNavbar/>
       <div className="w-screen h-[78%] ">
        
        <Outlet/>
       </div>
      <Footer/>
        </div>
    )
}
export default Homepage;