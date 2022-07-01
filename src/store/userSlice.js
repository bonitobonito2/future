import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: false,
};

const PersonSlice = createSlice({
  name: "Person",
  initialState,
  reducers: {
    changeLoginStatus(state) {
      state.isLogined = !state.isLogined;
    },
  },
});

export const PersonActions = PersonSlice.actions;
export default PersonSlice;
