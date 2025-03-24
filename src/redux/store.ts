import { configureStore } from "@reduxjs/toolkit";
import AdditionalInfoOptionReducer from "./reducers/AdditionalDropdownOption";
import BasesChoosedOptionReducer from "./reducers/BasesChoosedOption";
import LoadingScreenReducer from "./reducers/LoadingScreen";
import InspectObjectIdentifier from "./reducers/InspectObjectIdentifierState";

export const store = configureStore({
  reducer: {
    AdditionalInfoOption: AdditionalInfoOptionReducer, //the purpose of that is to navigate across sidebar options
    BasesChoosedOption: BasesChoosedOptionReducer, // the purpose of that is to identify object which has choosed and acumulate info about that
    LoadingScreen: LoadingScreenReducer,
    inspectObjectIdentifier: InspectObjectIdentifier,
  },
});

// Explicitly typing RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Automatically infers the type of the entire Redux state
export type AppDispatch = typeof store.dispatch; // Infers the dispatch type for dispatching actions
