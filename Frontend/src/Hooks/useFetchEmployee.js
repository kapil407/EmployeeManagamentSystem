import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmployee } from "../Redux/EmployeeSlice";
const useFetchAllEmployee = () => {
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    const fetchDept = async () => {
      const res = await axios.get("http://localhost:5200/get-all-employee", {
        withCredentials: true,
      });
      if (res.data.success) {
        setEmpData(res?.data?.AllProfile);
        dispatch(setEmployee(res.data.AllProfile));
      }
    };
    fetchDept();
  }, []);
  return empData;
};
export default useFetchAllEmployee;
