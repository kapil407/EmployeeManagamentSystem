import { useState } from "react"

const RegisterController=()=>{
    const [showPassword,setShowPassword]=useState(true);
    const showPasswordHandler=()=>{
        setShowPassword(!showPassword);
    }
    return(
        <>
        <div className=" flex justify-center  items-center h-screen w-screen pt-[2%] text-white  ">
            <div className="border h-[80%] w-[30%]">
                    <h1>kapil</h1>
            </div>
            <div className="border-b border-t border-r h-[80%] w-[50%] flex flex-col justify-between justify-center items-center">
                    <h1 className="text-center text-xl mb-4">Regiter</h1>
                    <div className="flex flex-col gap-6  w-[50%] ">
                        <input type="text" placeholder="Enter FirstName " className="mt-6 mb-6 border-1 py-3 px-2 w-full rounded hover:border-blue-400"/>
                         <input type="text" placeholder="Enter LastName " className="mb-6 border-1 py-3 px-2 w-full rounded hover:border-blue-400" />
                          <input type="email" placeholder="Enter Email " className="mb-6 border-1 py-3 px-2 w-full rounded hover:border-blue-400"/>
                          <div className="flex border mb-6 h-[13%] justify-center items-center">
                             <input type={`${showPassword ? 'password' :'text'}`} placeholder="Enter password " className=" outline-none py-3 px-2 w-full "/>
                             <span onClick={showPasswordHandler} className="mr-2 cursor-pointer">show</span>
                          </div>
                    </div>
            </div>
        </div>
        </>
    )

}
export default RegisterController