// for sidebar - for state which has been choosed

import { createSlice } from "@reduxjs/toolkit";
interface SidebarBaseState {
  data: string;
}

const initialState: SidebarBaseState = {
  data: "საერთო ობიექტების რეესტრი",
};

// Explicitly typing the action as SidebarActionTypes
const sidebarBaseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBase: (state, action): SidebarBaseState => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setBase } = sidebarBaseSlice.actions;
export default sidebarBaseSlice.reducer;
