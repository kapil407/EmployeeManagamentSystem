import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    updateEmployee: (state, action) => {
      state.employee = {
        ...state.employee,
        ...action.payload,
      };
    },
    EmpProfile:(state,action)=>{
      state.employee.push(action.payload)
    },
    addEmployee:(state,action)=>{
        state.employee=action.payload
    },
    updateEmployeeProfileImage: (state, action) => {
        state.employee.profilePicture=action.payload
},

    clearEmployee: (state) => {
      state.employee = [];
    },
   
  },
});

export const { setEmployee, clearEmployee, updateEmployee,addEmployee,updateEmployeeProfileImage ,EmpProfile} =
  employeeSlice.actions;

export default employeeSlice.reducer;
