import { createSlice } from "@reduxjs/toolkit";

interface Identifier {
  data: boolean;
}

const initialState: Identifier = {
  data: false,
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
