
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import departmentReducer from "./DepartmentSlice.js";
import managerReducer from "./ManagerSlice.js";
import employeeSlice from './EmployeeSlice.js'

import { persistStore, persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage";

const storage = storageModule.default;


const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(
  { ...persistConfig, key: "user" },
  userReducer
);

const persistedDepartmentReducer = persistReducer(
  { ...persistConfig, key: "department" },
  departmentReducer
);

const persistedManagerReducer = persistReducer(
  { ...persistConfig, key: "manager" },
  managerReducer
);

const persistedEmployeeReducer = persistReducer(
  { ...persistConfig, key: "employee" },
  employeeSlice
);
const store = configureStore({
  reducer: {
   user: persistedUserReducer,
    department: persistedDepartmentReducer,
    manager: persistedManagerReducer,
    employee:persistedEmployeeReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;