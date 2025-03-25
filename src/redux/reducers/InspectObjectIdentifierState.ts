import { createSlice } from "@reduxjs/toolkit";

interface Identifier {
  data: string;
}

const initialState: Identifier = {
  data: "მიმდინარე დავალებები",
};

const InspectObjectIdentifierSlice = createSlice({
  name: "Identifier onGoing or onPending tasks",
  initialState,
  reducers: {
    setInspectBaseIdentifier: (state, action): Identifier => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setInspectBaseIdentifier } =
  InspectObjectIdentifierSlice.actions;
export default InspectObjectIdentifierSlice.reducer;
