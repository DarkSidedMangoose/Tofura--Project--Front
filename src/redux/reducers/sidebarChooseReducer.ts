import { createSlice } from "@reduxjs/toolkit";

interface sidebarChoose {
  data: string;
}

const initialState: sidebarChoose = {
  data: "",
};

const sidebarChooseSlice = createSlice({
  name: "sidebarChoose",
  initialState,
  reducers: {
    setChooseSidebar: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setChooseSidebar } = sidebarChooseSlice.actions;
export default sidebarChooseSlice.reducer;
