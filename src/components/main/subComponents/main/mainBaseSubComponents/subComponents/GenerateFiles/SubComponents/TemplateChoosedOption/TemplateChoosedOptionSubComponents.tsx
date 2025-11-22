import React, { Fragment } from 'react'
import { templateItemObjectProps } from '../GenerateAddRewievUseTemplate/GenerateAddReviewUseTemplateInterfaces';
import Bold from "../../../../../../../../../assets/images/main/text.png";
import Italic from "../../../../../../../../../assets/images/main/italic-button.png";
import Underline from "../../../../../../../../../assets/images/main/underline.png";


 export const RenderField = (
   option: templateItemObjectProps,
   optionSelection: number,
   templateIndex: number,
   childIndex: number,
   optionIndex: number,
   templateState: any[],
   setTemplateState: React.Dispatch<React.SetStateAction<any[]>>,
   setShodPlaceholderQuestion: React.Dispatch<React.SetStateAction<any>>,
   setQuestionaryQuestion: React.Dispatch<React.SetStateAction<any>>,
   HandleChangeType: any,
   handleChangeSelectOption: any
 ) => {
   switch (option.type) {
     case "select":
       return (
         <select
           value={
             option.name === "alignment"
               ? templateState[templateIndex].children[childIndex].justify
               : typeof option.value?.stringValue === "string" ||
                 typeof option.value?.numberValue === "number"
               ? option.value.stringValue ||
                 option.value.numberValue ||
                 option.value.objectValue
               : ""
           }
           onChange={(e) => {
             option.name === "type"
               ? HandleChangeType(
                   e.target.value,
                   templateIndex,
                   childIndex,
                   optionIndex,
                   setTemplateState,
                   setShodPlaceholderQuestion,
                   setQuestionaryQuestion
                 )
               : handleChangeSelectOption(
                   templateIndex,
                   childIndex,
                   optionIndex,
                   optionSelection,
                   e,
                   option.name
                 );
           }}
           className="h-[50px] text-sm px-4  border rounded"
         >
           <option disabled>აირჩიე</option>
           {option.option?.map((o, idx) => (
             <option key={idx}>{o}</option>
           ))}
         </select>
       );
     case "input":
       return (
         <input
           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
             setTemplateState((prev) => {
               const newState = JSON.parse(JSON.stringify(prev));
               newState[templateIndex].children[childIndex].children[
                 optionIndex
               ][optionSelection].value.numberValue = Number(
                 event.target.value
               );
               if (option.name === "font size") {
                 const index =
                   newState[templateIndex].children[childIndex].index;
                 newState[templateIndex].children[childIndex].textArea[
                   index
                 ].className.fontSize = Number(event.target.value);
               }
               return newState;
             });
           }}
           type="number"
           style={{
             appearance: "auto",
           }}
           placeholder={option.placeholder}
           value={
             typeof option.value?.stringValue === "string"
               ? option.value.stringValue
               : typeof option.value?.numberValue === "number"
               ? option.value.numberValue
               : ""
           }
           className="h-[50px] w-[70px] text-sm px-4  bg-white border rounded"
         />
       );
     case "multiselect":
       const handleClick = (arg: string) => {
         setTemplateState((prev) => {
           const newState = JSON.parse(JSON.stringify(prev));
           const currentOption =
             newState[templateIndex].children[childIndex].textArea[optionIndex]
               .className.fontStyle;
           if (currentOption.bold !== undefined && arg === "bold") {
             currentOption.bold = !currentOption.bold;
           } else if (currentOption.bold !== undefined && arg === "italic") {
             currentOption.italic = !currentOption.italic;
           } else if (currentOption.bold !== undefined && arg === "underline") {
             currentOption.underline = !currentOption.underline;
           }

           return newState;
         });
       };
       return (
         <div className="flex w-full h-full gap-4 bg-">
           {option.option?.map((style, idx) => (
             <Fragment key={idx}>
               {style === "bold" ? (
                 <div className="w-1/4 h-full flex justify-center items-center ">
                   <div
                     onClick={() => handleClick("bold")}
                     className="w-[90%] cursor-pointer bg-white h-2/3 p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       src={Bold}
                       alt="bold"
                       className={`w-full cursor-pointer ${
                         !templateState[templateIndex].children[childIndex]
                           .textArea[optionIndex].className.fontStyle.bold
                           ? "opacity-20"
                           : "opacity-100"
                       }`}
                     />
                   </div>
                 </div>
               ) : style === "italic" ? (
                 <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                   <div
                     onClick={() => handleClick("italic")}
                     className="w-[90%] cursor-pointer h-2/3 bg-white  p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       src={Italic}
                       alt="italic"
                       className={`w-full cursor-pointer ${
                         !templateState[templateIndex].children[childIndex]
                           .textArea[optionIndex].className.fontStyle.italic
                           ? "opacity-20"
                           : "opacity-100"
                       }`}
                     />
                   </div>
                 </div>
               ) : style === "underline" ? (
                 <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                   <div
                     onClick={() => handleClick("underline")}
                     className="w-[90%] bg-white h-2/3 p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       alt="underline"
                       src={Underline}
                       className={`w-full ${
                         !templateState[templateIndex].children[childIndex]
                           .textArea[optionIndex].className.fontStyle.underline
                           ? "opacity-20"
                           : "opacity-100"
                       }`}
                     />
                   </div>
                 </div>
               ) : null}
             </Fragment>
           ))}
         </div>
       );
     case "color":
       return (
         <input
           onChange={(e) => {
             setTemplateState((prev) => {
               const newState = JSON.parse(JSON.stringify(prev));
               newState[templateIndex].children[childIndex].children[
                 optionIndex
               ][optionSelection].value.stringValue = e.target.value;
               const index = newState[templateIndex].children[childIndex].index;

               if (option.name === "color") {
                 newState[templateIndex].children[childIndex].textArea[
                   index
                 ].className.fontColor = e.target.value;
               }
               return newState;
             });
           }}
           type="color"
           value={
             option.name === "color"
               ? templateState[templateIndex].children[childIndex].textArea[
                   templateState[templateIndex].children[childIndex].index
                 ].className.fontColor
               : templateState[templateIndex].children[childIndex].textArea[
                   templateState[templateIndex].children[childIndex].index
                 ].className.bgColor
           }
           className="h-[40px] w-[60px] border rounded"
         />
       );
     default:
       return (
         <span className="text-red-500 text-sm">
           Unknown type: {option.type}
         </span>
       );
   }
 };