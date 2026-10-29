import {  FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../Redux/UserSlice.js";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  // console.log(name,lastName,phone,address)
  const navigate = useNavigate();

  const EditeProfileHandler = async () => {
    try {
      console.log("kapi");
      const res = await axios.patch(
        "http://localhost:5200/update-myProfile",
        {
          name,
          lastName,
          address,
          phone,
          Bio: bio,
        },
        {
          withCredentials: true,
        },
      );
      console.log("re in edite profile ", res);
      if (res.data.success) {
        dispatch(updateUser(res?.data?.updateMyProfile));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("error in profile update ", error);
    }
  };
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="text-white w-screen h-screen bg-slate-900 p-2 flex items-center justify-center flex-col"
      >
        <div className="w-[60%] h-[88%] bg-slate-800 rounded-xl p-2">
          <h1
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/my-profile")}
          >
            <FaArrowLeft />
            Back
          </h1>

          <h1 className="text-center text-2xl font-bold text-cyan-500">
            Edite Your Profile
          </h1>

          <div className=" mt-8  flex items-center justify-center flex-col gap-6">
            <div className="flex  flex-col w-[60%] gap-1">
              <label htmlFor="firstName" className="font-bold text-gray-400">
                firstName
              </label>
              <input
                type="text"
                placeholder="Enter FirstName"
                id="firstName"
                className="w-full outline-none border px-2 py-3 font-bold border-slate-600 rounded-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex  flex-col w-[60%] gap-1">
              <label htmlFor="firstName" className="font-bold text-gray-400">
                lastName
              </label>
              <input
                type="text"
                placeholder="Enter lastName"
                id="firstName"
                className="w-full outline-none border px-2 py-3 font-bold border-slate-600 rounded-xl"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex  flex-col w-[60%] gap-1">
              <label htmlFor="firstName" className="font-bold text-gray-400">
                Phone Number
              </label>
              <input
                type="Number"
                placeholder="Enter Phone Number"
                id="firstName"
                className="w-full outline-none border px-2 py-3 font-bold border-slate-600 rounded-xl"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex  flex-col w-[60%] gap-1">
              <label htmlFor="firstName" className="font-bold text-gray-400">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                id="firstName"
                className="w-full outline-none border px-2 py-3 font-bold border-slate-600 rounded-xl"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex  flex-col w-[60%] gap-1">
              <label htmlFor="firstName" className="font-bold text-gray-400">
                Bio
              </label>
              <textarea
                type="text"
                placeholder="Enter Bio"
                id="firstName"
                className="w-full outline-none border px-2 py-3 font-bold border-slate-600 rounded-xl"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 text-right font-bold">
            <button
              className="border border-green-900 cursor-pointer px-2 py-1 mr-4 rounded-xl bg-green-600"
              onClick={EditeProfileHandler}
            >
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default UpdateProfile;
