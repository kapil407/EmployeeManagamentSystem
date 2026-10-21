import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  manager: [],
};
const ManagerSlice = createSlice({
  name: "manager",
  initialState,

  reducers: {
    setManager: (state, action) => {
      state.manager = action.payload;
    },
    addManager:(state,action)=>{
      state.manager.push(action.payload)
    },
    updateManager:(state,action)=>{
      const idx=state.manager.findIndex((m)=>m._id===action.payload._id);
      if(idx!=-1){
        state.manager[idx]=action.payload;
      }
    },
    clearManager: (state) => {
      state.manager = [];
    },
    removeManager: (state, action) => {
      state.manager = state.manager.filter(
        (manag) => manag._id !== action.payload,
      );
    },
     removeInvalidManager: (state) => {
      state.manager = state.manager.filter(
        (m) => m !== null && m !== undefined,
      );
    },
  },
});
export const { setManager, clearManager,removeManager,removeInvalidManager ,addManager,updateManager} = ManagerSlice.actions;
export default ManagerSlice.reducer;
