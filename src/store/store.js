import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./userSlice";

const store = configureStore({
  reducer: { PersonSlice: PersonSlice.reducer },
});

export default store;
