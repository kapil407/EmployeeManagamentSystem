import NavBarHandler from "../Home/PrivateNavbar";
import Footer from "../LandingPages/Footer";

const Notification=()=>{
    return (
        <>
        <div className="h-screen w-screen" >
        <NavBarHandler/>
       <div className="w-screen text-white h-[76%]">
        Notification 
       </div>
        <Footer/>
        </div >
        </>
    )
}
export default Notification;