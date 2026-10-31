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
    addEmployee:(state,action)=>{
        state.employee=action.payload
    },
    updateEmployeeProfileImage: (state, action) => {
  const emp = state.employee.find(
    (e) => e._id === action.payload._id
  );

  if (emp) {
    emp.profilePicture = action.payload.profilePicture;
  }
},

    clearEmployee: (state) => {
      state.employee = [];
    },
   
  },
});

export const { setEmployee, clearEmployee, updateEmployee,addEmployee,updateEmployeeProfileImage } =
  employeeSlice.actions;

export default employeeSlice.reducer;
