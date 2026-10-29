import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    clearUser: (state) => {
      state.user = null;
    },
    updateUserProfileImage: (state, action) => {
      if (state.user) {
        state.user.profilePicture = action.payload;
      }
    },
  },
});

export const { setUser, clearUser, updateUser, updateUserProfileImage } =
  userSlice.actions;

export default userSlice.reducer;
