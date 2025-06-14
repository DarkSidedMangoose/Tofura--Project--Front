import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
    data: boolean
}

const initialState : InitialState = {
    data: false
} 


const AdditionalShowSlice = createSlice({
    name: "additional data show unshown",
    initialState,
    reducers: {
       setAdditionalShow: (state, action): InitialState => ({
         ...state,
         data: action.payload
       })
       
    }
})

export const { setAdditionalShow } = AdditionalShowSlice.actions;
export default AdditionalShowSlice.reducer