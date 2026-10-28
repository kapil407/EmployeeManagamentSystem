import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDepartment } from "../Redux/DepartmentSlice";

const useFetchAllDepartment = () => {
  const dispatch = useDispatch();
  const [deptData, setDeptData] = useState([]);
  useEffect(() => {
    const fetchDept = async () => {
      const res = await axios.get("http://localhost:5200/get-all-department", {
        withCredentials: true,
      });

      if (res.data.success) {
        setDeptData(res?.data?.getAllDepartment);
        dispatch(setDepartment(res.data.getAllDepartment));
      }
    };
    fetchDept();
  }, []);
  return deptData;
};
export default useFetchAllDepartment;
