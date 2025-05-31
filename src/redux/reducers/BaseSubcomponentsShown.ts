import { createSlice } from "@reduxjs/toolkit";

interface BaseSubcomponentsShownState {
  baseSubComponentsState: string;
}
const initialState: BaseSubcomponentsShownState = {
  baseSubComponentsState: "",
};

const baseSubcomponentsShownSlice = createSlice({
  name: "baseSubcomponentsShown",
  initialState,
  reducers: {
    setBaseSubcomponentsShown: (state, action) => {
      state.baseSubComponentsState = action.payload;
    },
  },
});

export const {setBaseSubcomponentsShown} = baseSubcomponentsShownSlice.actions;
export default baseSubcomponentsShownSlice.reducer;
// This code defines a Redux slice for managing the visibility state of base subcomponents in a React application.