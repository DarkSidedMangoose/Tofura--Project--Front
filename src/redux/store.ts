import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebarReducer"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

// Explicitly typing RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Automatically infers the type of the entire Redux state
export type AppDispatch = typeof store.dispatch; // Infers the dispatch type for dispatching actions
