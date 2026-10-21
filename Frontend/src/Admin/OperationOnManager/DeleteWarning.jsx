import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearManager, removeInvalidManager, removeManager } from "../../Redux/ManagerSlice";
const DeleteWarning=({setOpenWarning,id})=>{

   
    const dispatch=useDispatch();
 const deleteManagerHandler = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5200/delete-manager/${id}`,
        {
          withCredentials: true,
        },
      );
      console.log("res in delete manager ", res);
      if (res.data.success) {
        dispatch(clearManager());
        // dispatch(removeInvalidManager());
      
        toast.success(res.data.message);
        navigate(`/all-manager`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

    const navigate=useNavigate();
    return <>
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
  <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">

    <div className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500 text-2xl">
        ⚠
      </div>

      <h1 className="text-3xl font-black text-red-500">
        Warning!
      </h1>
    </div>

    <p className="mb-6 leading-7 text-slate-300">
      All the data of this manager will be permanently deleted
      and cannot be recovered. Are you sure you want to continue?
    </p>

    <div className="flex justify-end gap-3">
      <button  onClick={()=>setOpenWarning(false)} className="rounded-lg border border-slate-600 px-5 py-2 font-semibold text-slate-300 transition hover:bg-slate-700 cursor-pointer">
        Cancel
      </button>

      <button 
       onClick={deleteManagerHandler}
      className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 cursor-pointer">
        Delete
      </button>
    </div>

  </div>
</div>
    </>
}
export default DeleteWarning;