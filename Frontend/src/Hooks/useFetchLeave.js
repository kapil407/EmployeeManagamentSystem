import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLeave } from "../Redux/LeaveSlice";
const useFetchTeamLeave = (flage) => {
  const dispatch = useDispatch();
  const [teamLeave, setTeamLeave] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data ");
        const res = await axios.get("http://localhost:5200/get-All-teamleave", {
          withCredentials: true,
        });
        console.log("res in fetch team leave ", res);
        if (res.data.success) {
          dispatch(setLeave(res.data.EmployeeLeave));
          setTeamLeave(res.data.EmployeeLeave);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [flage]);
  return teamLeave;
};
export default useFetchTeamLeave;
