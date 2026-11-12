import { createSlice } from "@reduxjs/toolkit";

const initialState={
   Leave:[]
}

const leaveSlice=createSlice({
    name:"Leave",
     initialState,
     reducers:{
        setLeave:(state,action)=>{
            state.Leave=action.payload
        },
        addLeave:(state,action)=>{
            state.Leave.push(action.payload)
        },
        updateLeaveStatus:(state,action)=>{
            state.Leave.status=action.payload
        },
        clearLeave:(state,action)=>{
            state.Leave=[];
        }
     }

})
 export const {setLeave,addLeave,clearLeave,updateLeaveStatus}=leaveSlice.actions;
 export default leaveSlice.reducer;
