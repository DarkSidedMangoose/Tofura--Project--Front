
export {}
// import {createSlice} from '@reduxjs/toolkit';


// interface TemplatePlaceholdersInterface 
//    {uuid:string, name: string, value: string, indexOfSection: number, indexOfParagraph: number, indexOfTextArea: number};

// const initialState: TemplatePlaceholdersInterface[] = [
    
// ];

// const TemplatePlaceholdersInterface = createSlice({
//     name: "TemplatePlaceholders",
//     initialState,
//     reducers: {
//         setTemplatePlaceholders: (state, action): TemplatePlaceholdersInterface[] => {
//             let inserted = false;
//             const newState = [...state];
//             newState.forEach((item, index) => {
//                 if (action.payload.indexOfSection < item.indexOfSection && !inserted) {
//                     newState.splice(index, 0, action.payload);

//                     inserted = true;
//                 }else if(action.payload.indexOfSection === item.indexOfSection && !inserted){
//                     if(action.payload.indexOfParagraph < item.indexOfParagraph) {
//                         newState.splice(index, 0, action.payload);
//                         inserted = true;
//                     }else if(action.payload.indexOfParagraph === item.indexOfParagraph && !inserted){
//                         if(action.payload.indexOfTextArea < item.indexOfTextArea) {
//                             newState.splice(index, 0, action.payload);
//                             inserted = true;
//                         }
//                     }
//                 }
            
//             });
//             if (!inserted) {
//                 newState.push(action.payload);
//             }
//             return newState;
//         },
//         setTemplatePlaceholdersEmpty: (state) => {
//             return [];
//         },
//         updatePlaceholders: (state, action) => {
//             const newState = state.map(item => {
//                 if (item.uuid === action.payload.uuid) {
//                     return {...item, indexOfSection: action.payload.indexOfSection, indexOfParagraph: action.payload.indexOfParagraph, indexOfTextArea: action.payload.indexOfTextArea};
//                 }
//                 return item;
//             });
//             return newState;
//         }
        
        
//     }
// })

// export const {
//   setTemplatePlaceholders,
//   setTemplatePlaceholdersEmpty,
//   updatePlaceholders,
// } = TemplatePlaceholdersInterface.actions;
// export default TemplatePlaceholdersInterface.reducer;