import { useState } from "react";
import { Link } from "react-router-dom";

const PublicNavbar=()=>{

    return (
        <>
        <nav className=" flex justify-between items-center h-[8%] bg-slate-900">
            <img src="./HomeLogo.png" alt="HomeLogo" className="h-15 w-auto object-cover" />
            <div className="flex justify-between w-[25%] text-white">
                <Link to={'/HomeLanding'} className="hover:border-b-2 px-1 hover:border-blue-600 hover:text-blue-400 font-bold">
                Home
                </Link>
                <Link to={'/Feature'} className="hover:border-b-2 px-1 hover:border-blue-600 hover:text-blue-400 font-bold">
                Feature
                </Link>
                <Link to={'/About-Us'} className="hover:border-b-2 px-1 hover:border-blue-600 hover:text-blue-400 font-bold">
                About
                </Link>
            </div>
            <div className="flex  justify-between w-[12%]">
                <Link to={'/login'} className=" bg-slate-800 items-center px-4 shadow-lg border-2 hover:bg-blue-600 font-bold border-blue-600 text-white rounded-lg py-1.5">
                Login
                </Link>
                <Link to={'/sign-up'} className="mr-4 bg-blue-500 items-center px-3 text-white rounded-lg py-1.5 font-bold">
                Sign Up
                </Link>
            </div>
        </nav>
        </>
    )
}
export default PublicNavbar;