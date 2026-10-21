import axios from "axios";
import { useState, useEffect } from "react";
import { setManager } from "../Redux/ManagerSlice";
import { useDispatch } from "react-redux";

export const useFetchAllManager = () => {
  const dispatch = useDispatch();
  const [managers, setManagers] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:5200/get-all-manager", {
        withCredentials: true,
      });

      if (res.data.success) {
        setManagers(res.data.AllProfile);
        dispatch(setManager(res.data.AllProfile));
      }
    };
    fetch();
  }, []);
  return managers;
};
