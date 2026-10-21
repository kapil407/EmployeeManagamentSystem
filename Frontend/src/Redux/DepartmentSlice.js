import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  department: [],
};

const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    addDepartment: (state, action) => {
      state.department.push(action.payload);
    },
    updateDepartment: (state, action) => {
      const index = state.department.findIndex(
        (dept) => dept._id === action.payload._id,
      );
      if (index !== -1) {
        state.department[index] = action.payload;
      }
    },
    clearDepartment: (state) => {
      state.department = [];
    },
    removeInvalidDepartments: (state) => {
      state.department = state.department.filter(
        (dept) => dept !== null && dept !== undefined,
      );
    },
  },
});
export const {
  setDepartment,
  clearDepartment,
  addDepartment,
  removeInvalidDepartments,
  updateDepartment,
} = departmentSlice.actions;
export default departmentSlice.reducer;
