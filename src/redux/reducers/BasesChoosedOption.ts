import { createSlice } from "@reduxjs/toolkit";

// this slice identify if in bases component choose one of the option which on buttons and which accumulate information about that object which has choose

interface BasesChoosedOptionInterface {
  data: number;
}

const initialState: BasesChoosedOptionInterface = {
  data: -1,
};

const BasesChoosedOptionSlice = createSlice({
  name: "index of choosed From Bases",
  initialState,
  reducers: {
    setChoose: (state, action): BasesChoosedOptionInterface => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setChoose } = BasesChoosedOptionSlice.actions;
export default BasesChoosedOptionSlice.reducer;
