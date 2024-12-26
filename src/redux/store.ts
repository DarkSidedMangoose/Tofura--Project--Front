import { configureStore } from "@reduxjs/toolkit";
import sidebarBaseReducer from "./reducers/sidebarBasesReducer"; // Ensure this path is correct
import sidebarChooseReducer from "./reducers/sidebarChooseReducer";

export const store = configureStore({
  reducer: {
    sidebarBase: sidebarBaseReducer,
    sidebarChoose: sidebarChooseReducer,
  },
});

// Explicitly typing RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Automatically infers the type of the entire Redux state
export type AppDispatch = typeof store.dispatch; // Infers the dispatch type for dispatching actions
