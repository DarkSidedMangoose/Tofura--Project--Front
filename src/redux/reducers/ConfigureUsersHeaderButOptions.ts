import { createSlice } from "@reduxjs/toolkit";

export interface ConfigureUsersHeaderButOptionsState {
    show: boolean; 
    identifier: string
}

const initialState = { 
    show: false,
    identifier: ""
}

const ConfigureUsersHeaderButOptionsSlice = createSlice({
  name: "ConfigureUsersHeaderButOptions When we Click Configure users header button",
  initialState,
  reducers: {
    setConfigureUsersHeaderButOptions: (
      state: ConfigureUsersHeaderButOptionsState,
      action: { payload: ConfigureUsersHeaderButOptionsState }
    ): ConfigureUsersHeaderButOptionsState => ({
      ...state,
      show: action.payload.show,
      identifier: action.payload.identifier,
    }),
  },
});

export const { setConfigureUsersHeaderButOptions } =
  ConfigureUsersHeaderButOptionsSlice.actions;

export default ConfigureUsersHeaderButOptionsSlice.reducer;
