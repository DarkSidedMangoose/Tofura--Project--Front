import { createSlice } from "@reduxjs/toolkit";

interface AdditionalInfoOptionInterface {
  data: string;
}

const initialState: AdditionalInfoOptionInterface = {
  data: "ობიექტების რეესტრი",
};

const AdditionalInfoOptionSlice = createSlice({
  name: "AdditionalInfoOption",
  initialState,
  reducers: {
    setAdditionalInfoOption: (
      state,
      action
    ): AdditionalInfoOptionInterface => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setAdditionalInfoOption } = AdditionalInfoOptionSlice.actions;
export default AdditionalInfoOptionSlice.reducer;
