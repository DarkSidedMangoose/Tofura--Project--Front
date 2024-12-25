// for sidebar - for state which has been choosed

import { createSlice } from "@reduxjs/toolkit";
interface SidebarState {
  data: string;
}

const initialState: SidebarState = {
  data: "საერთო ობიექტების რეესტრი",
};

// Explicitly typing the action as SidebarActionTypes
const sidebarSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setString: (state, action): SidebarState => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setString } = sidebarSlice.actions;
export default sidebarSlice.reducer;
