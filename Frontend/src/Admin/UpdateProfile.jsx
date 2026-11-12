import axios from "axios";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUser } from "../Redux/UserSlice";
import { motion } from "motion/react";
const UpdateAdminProfile = () => {
  const user=useSelector(store=>store.user.user);
  const dispatch = useDispatch();
  const [name, setName] = useState( user.name||"");
  const [lastName, setLastName] = useState(user.lastName||"");
  const [address, setAddress] = useState( user.address||"");
  const [phone, setPhone] = useState( user.phone||"");
  const [email, setEmail] = useState(user.email||"");
  const [bio, setBio] = useState( user.Bio||"");
  console.log(name, lastName, email, bio, phone, address);
  const naviagte = useNavigate();

  const UpdateHandler = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:5200/update-myProfile",
        {
          name,
          lastName,
          address,
          phone,
          email,
          Bio: bio,
        },
        {
          withCredentials: true,
        },
      );
      console.log("res", res);
      if (res.data.success) {
        dispatch(updateUser(res.data.updateMyProfile));
        toast.success(res.data.message);
        naviagte("/admin-profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="text-white bg-slate-900 h-screen w-screen p-2 flex justify-center items-center"
      >
        <motion.div
          whileInView={{
            boxShadow: "0px 0px 15px rgba(18, 137, 240, 0.7)",
          }}
          className="w-[60%] h-[88%] bg-white/2 border border-slate-500 p-1 rounded-xl"
        >
          <div className="hover:text-cyan-400">
            <h1
              onClick={() => naviagte("/admin-profile")}
              className="flex items-center gap-3 px-2 font-bold cursor-pointer"
            >
              <FaArrowLeft /> Back
            </h1>
            <h1 className="text-center text-3xl font-bold text-cyan-400">
              Update Your Profile
            </h1>
          </div>
          <div className="w-[99.5%] h-[99%] mx-1 mt-1 flex-col flex items-center">
            <motion.div className="flex flex-col flex  justify-center w-[60%] mt-4">
              <label htmlFor="firstName" className="ml-2">
                firstName
              </label>
              <motion.input
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.5)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter firstName "
                className="outline-none px-2 py-3 border hover:border-cyan-600 w-full rounded-xl border-slate-600"
              />
            </motion.div>
            <div className="flex flex-col flex  justify-center w-[60%] mt-4">
              <label htmlFor="firstName" className="ml-2">
                lastName
              </label>
              <motion.input
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.4)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter FirstName "
                className="outline-none px-2 py-3 border w-full rounded-xl border-slate-600 hover:border-cyan-600"
              />
            </div>
            <div className="flex flex-col flex  justify-center w-[60%] mt-4">
              <label htmlFor="firstName" className="ml-2">
                Email
              </label>
              <motion.input
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.4)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email "
                className="outline-none px-2 py-3 border w-full rounded-xl border-slate-600 hover:border-cyan-600"
              />
            </div>
            <div className="flex flex-col flex  justify-center w-[60%] mt-4">
              <label htmlFor="firstName" className="ml-2">
                Phone Number
              </label>
              <motion.input
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.4)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number "
                className="outline-none px-2 py-3 border w-full rounded-xl border-slate-600 hover:border-cyan-600"
              />
            </div>
            <div className="flex flex-col flex  justify-center w-[60%] mt-4">
              <label htmlFor="firstName" className="ml-2">
                Address
              </label>
              <motion.input
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.4)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address "
                className="outline-none px-2 py-3 border w-full rounded-xl border-slate-600 hover:border-cyan-600"
              />
            </div>
            <div className="flex flex-col flex  justify-center w-[60%] mt-4 ">
              <label htmlFor="firstName" className="ml-2">
                Bio
              </label>
              <motion.textarea
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(27, 187, 240, 0.4)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                type="text"
                value={bio}
                m
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter Bio "
                className="outline-none px-2 py-2 hover:border-cyan-600 min-h-[99%] border custom-scrollbar w-full rounded-xl border-slate-600"
              />
            </div>
            <div className="text-right  w-full mt-1">
              <motion.button
                whileTap={{
                  scale: 1.02,
                  boxShadow: "0px 0px 15px rgba(10, 212, 47, 0.4)",
                }}
                onClick={UpdateHandler}
                className="border px-3 py-1 font-bold hover:bg-green-700 rounded-xl bg-green-600 border-green-900 mr-6 cursor-pointer"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default UpdateAdminProfile;
