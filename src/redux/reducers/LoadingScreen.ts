import { createSlice } from "@reduxjs/toolkit";

interface loadingInterface {
  data: boolean;
}

const initialState: loadingInterface = {
  data: true,
};

const loadingScreenSlice = createSlice({
  name: "LoadingScreen",
  initialState,
  reducers: {
    setLoadingTrue: (state, action): loadingInterface => ({
      ...state,
      data: action.payload,
    }),
    setLoadingFalse: (state, action): loadingInterface => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setLoadingTrue, setLoadingFalse } = loadingScreenSlice.actions;

export default loadingScreenSlice.reducer;
