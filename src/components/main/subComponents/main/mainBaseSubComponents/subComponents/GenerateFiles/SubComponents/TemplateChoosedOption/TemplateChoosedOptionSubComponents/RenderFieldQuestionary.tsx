import React, { Fragment } from 'react'
import Bold from "../../../../../../../../../../assets/images/main/text.png";
import Italic from "../../../../../../../../../../assets/images/main/italic-button.png";
import Underline from "../../../../../../../../../../assets/images/main/underline.png";

type Props = {
    option: any,
}

const RenderFieldQuestionary = (props: Props) => {
  const { option } = props;
  switch (option.type) {
     case "select":
       return (
         <select
           
           onChange={(e) => {
             
           }}
           className="h-[40px] w-auto text-sm px-4  border rounded"
         >
           <option disabled>აირჩიე</option>
           {option.option?.map((o:any, idx: any) => (
             <option key={idx}>{o}</option>
           ))}
         </select>
       );
     case "input":
       return (
         <input
          
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
           className="h-[40px] w-[70px] text-sm px-4  bg-white border rounded"
         />
       );
     case "multiselect":
       
       return (
         <div className="flex w-full h-[40px] gap-4 ">
           {option.option?.map((style:any, idx:any) => (
             <Fragment key={idx}>
               {style === "bold" ? (
                 <div className="w-1/4 h-full flex justify-center items-center ">
                   <div
                    //  onClick={() => handleClick("bold")}
                     className="w-[40px] h-full cursor-pointer bg-white  p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       src={Bold}
                       alt="bold"
                       className={`w-full cursor-pointer
                           ? "opacity-20"
                           : "opacity-100"
                       }`}
                     />
                   </div>
                 </div>
               ) : style === "italic" ? (
                 <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                   <div
                    //  onClick={() => handleClick("italic")}
                     className="w-[40px] cursor-pointer h-full bg-white  p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       src={Italic}
                       alt="italic"
                       className={`w-full cursor-pointer
                           ? "opacity-20"
                           : "opacity-100"
                       }`}
                     />
                   </div>
                 </div>
               ) : style === "underline" ? (
                 <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                   <div
                    //  onClick={() => handleClick("underline")}
                     className="w-[40px] bg-white h-full p-3 border-2 rounded-lg flex justify-center items-center"
                   >
                     <img
                       alt="underline"
                       src={Underline}
                       className={`w-full 
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
             
           }}
           type="color"
           
           className="h-[40px] min-w-[70px] border rounded "
         />
       );
     default:
       return (
         <span className="text-red-500 text-sm">
           Unknown type: {option.type}
         </span>
       );
   }
}

  export default RenderFieldQuestionary;