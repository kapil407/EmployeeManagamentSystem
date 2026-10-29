import { Routes, Route } from "react-router-dom";
import LoginHandler from "./Auth/Login.jsx";
import RegisterController from "./Auth/Register.jsx";
import Homepage from "./Home/HomePage.jsx";
import AdminDashboard from "./Dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./Dashboard/EmployeeDashboard.jsx";
import ManagerDashboard from "./Dashboard/ManagerDashboard.jsx";
import Dashboard from "./Home/Dashboard.jsx";
import HomeLandingPage from "./LandingPages/HomeLandingPage.jsx";
import FeaturesLandingPage from "./LandingPages/FeaturesPage.jsx";
import AboutUs from "./LandingPages/AboutUs.jsx";
import AllEmployee from './Admin/Employee/EmployeeProfileCard.jsx'
import AllManagerProfile from './Admin/OperationOnManager/Managers_Profile.jsx'
import AllDepartment from "./Admin/Department/departmentCard.jsx";
import Report from "./Admin/Report.jsx";
import Notification from "./Admin/Notification.jsx";

import AdminProfile from "./Admin/Profile.jsx";
import { useSelector } from "react-redux";
import AddEmployee from "./Admin/Employee/AddEmployee.jsx";
import UpdateEmployee from "./Admin/Employee/UpdateEmployee.jsx";
import AddManager from "./Admin/OperationOnManager/AddManager.jsx";
import ManagerProfile from "./Admin/OperationOnManager/Manager_Profile.jsx";
import AddNewDepartment from "./Admin/Department/AddDepartment.jsx";
import UpdateDepartment from "./Admin/Department/UpdateDepartment.jsx";
import EditeManagerDetails from "./Admin/OperationOnManager/EditeManagerDetails.jsx";
import DepartmentDetails from "./Admin/Department/DepartmentDetails.jsx";
import MyProfileComponent from "./Manager/MyProfile.jsx";
import TeamMembersComponent from "./Manager/TeamMemebers.jsx";
import AttendenceComponent from "./Manager/Attendence.jsx";
import LeaveComponent from "./Manager/Leave.jsx";
import MyTaskComponent from "./Manager/MyTasks.jsx";
import NotificationComponent from "./Manager/Notification.jsx";
import UpdateProfile from "./Manager/UpdateProfile.jsx";
import UpdateAdminProfile from "./Admin/UpdateProfile.jsx";


const Body = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <Routes>
      {/* Public pages */}
      <Route path="/login" element={<LoginHandler />} />
      <Route path="/sign-up" element={<RegisterController />} />
       
      {!user && (
        <>
          <Route path="/" element={<HomeLandingPage />} />
        
        </>
      )}

      {/* Logged-in pages */}
      {user && (
        <Route path="/" element={<Homepage />}>
          {/* Dashboard */}
          {user.role === "ADMIN" && (
            <Route index element={<AdminDashboard />} />
          )}

          {user.role === "MANAGER" && (
            <Route index element={<ManagerDashboard />} />
          )}

          {user.role === "EMPLOYEE" && (
            <Route index element={<EmployeeDashboard />} />
          )}
          {
            user.role==="MANAGER" && (
              <>
             
              <Route path="/my-profile" element={<MyProfileComponent/>}/>
              <Route path="team-member" element={<TeamMembersComponent/>}/>
              <Route path="attendence" element={<AttendenceComponent/>}/>
              <Route path="leave" element={<LeaveComponent/>}/>
              <Route path="my-tasks" element={<MyTaskComponent/>}/>
              <Route path="notification" element={<NotificationComponent/>}/>
              <Route path="edite-profile" element={<UpdateProfile/>}/>
              </>
            )
          }

          {/* Admin operations */}
          {user.role === "ADMIN" && (
            <>
              <Route path="/update-employee" element={<UpdateEmployee/>}/>
              <Route path="all-employee" element={<AllEmployee />} />
               
              <Route path="all-manager" element={<AllManagerProfile />} />
              <Route path="all-department" element={<AllDepartment />} />
              <Route path="report" element={<Report />} />
              <Route path="admin-notification" element={<Notification />} />
              <Route path="admin-profile" element={<AdminProfile />} />
              <Route path="/add-employee" element={<AddEmployee/>}/>
              <Route path="/add-manager" element={<AddManager/>}/>
               <Route path="/add-department" element={<AddNewDepartment/>}/>
              <Route path="/manager-profile/:id" element={<ManagerProfile/>}/>
               <Route path="/update-dept/:id" element={<UpdateDepartment/>}/>
               <Route path="edite-manager/:id" element={<EditeManagerDetails/>}/>
               <Route path="dept-details/:id" element={<DepartmentDetails/>}/>
                <Route path="edite-profile" element={<UpdateAdminProfile/>}/>
              
            </>
          )}
        </Route>
      )}
    </Routes>
  );
};

export default Body;
