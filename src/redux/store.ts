import { configureStore } from "@reduxjs/toolkit";
import AdditionalInfoOptionReducer from "./reducers/AdditionalDropdownOption";
import BasesChoosedOptionReducer from "./reducers/BasesChoosedOption";
import InspectObjectIdentifierReducer from "./reducers/InspectObjectIdentifierState";
import setConfigureUsersHeaderSubComponentsShow from "./reducers/ConfigureUsersHeaderButOptions";
import baseSubcomponentsShownSlice from "./reducers/BaseSubcomponentsShown";
import AdditionalShowReducer from "./reducers/AdditionalShow"
export const store = configureStore({
  reducer: {
    AdditionalInfoOption: AdditionalInfoOptionReducer, //the purpose of that is to navigate across sidebar options
    BasesChoosedOption: BasesChoosedOptionReducer, // the purpose of that is to identify object which has choosed and acumulate info about that
    inspectObjectIdentifier: InspectObjectIdentifierReducer,
    ConfigureUsersHeaderButOptionSetter:
      setConfigureUsersHeaderSubComponentsShow,
    baseSubComponentOptionsShown: baseSubcomponentsShownSlice, // This reducer manages the visibility state of base subcomponents in the application
    setAdditionalShow: AdditionalShowReducer,
  },
});

// Explicitly typing RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Automatically infers the type of the entire Redux state
export type AppDispatch = typeof store.dispatch; // Infers the dispatch type for dispatching actions
