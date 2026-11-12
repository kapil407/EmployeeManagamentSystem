import axios from "axios";
import { useEffect, useState } from "react";

const useFetchMyTeam = () => {
  const [teamMember, setTeamMembers] = useState([]);
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get("http://localhost:5200/get-myteam", {
          withCredentials: true,
        });
        console.log("res in get team ", res);
        setTeamMembers(res.data.teamMembers || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchTeam();
  }, []);
  return teamMember;
};
export default useFetchMyTeam;
