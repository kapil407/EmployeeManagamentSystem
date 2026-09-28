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
const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/HomeLanding" element={<HomeLandingPage />} />
          <Route path="/Feature" element={<FeaturesLandingPage />} />

          <Route path="Admin-dashboard" element={<AdminDashboard />} />
          <Route path="Employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="Manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/sign-up" element={<RegisterController />} />
          <Route path="/login" element={<LoginHandler />} />
          <Route path="/About-Us" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
};
export default Body;
