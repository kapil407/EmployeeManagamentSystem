import EmployeeSideBar from "./EmployeeSideBar";

const EmpAttendence=()=>{
    return<>
   <main className="flex w-screen h-screen">
    <EmployeeSideBar/>
   <div className="h-full w-full ">
    <main className="bg-slate-800 h-[98%] rounded-xl w-[99%]  m-2 p-2">
          <h1 className="text-white">My Attendence </h1>
    </main>
   </div>
   </main>
    </>
}
export default EmpAttendence ;