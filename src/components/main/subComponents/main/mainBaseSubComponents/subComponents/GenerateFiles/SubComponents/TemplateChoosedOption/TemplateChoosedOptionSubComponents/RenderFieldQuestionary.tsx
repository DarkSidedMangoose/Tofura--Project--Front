import React, { Fragment, useEffect } from 'react'
import Bold from "../../../../../../../../../../assets/images/main/text.png";
import Italic from "../../../../../../../../../../assets/images/main/italic-button.png";
import Underline from "../../../../../../../../../../assets/images/main/underline.png";

type Props = {
  option?: any,
  item?: any,
  setWholeState?: React.Dispatch<React.SetStateAction<any>>,
  wholeState?: any,
  stInd?: number,
  ndInd?: number,
  setHandleAddNewPlaceholder?: React.Dispatch<React.SetStateAction<any>>,
}

const RenderFieldQuestionary = (props: Props) => {
  const { option } = props;
  const { item } = props;
  
  const handleSelectHandler = (e: string,) => {
    if (props.setWholeState) {
      
      props.setWholeState((prev: any) => {
        const updatedState = JSON.parse(JSON.stringify(prev));
        if (option.name === "type" && e === "placeholder" && props.setHandleAddNewPlaceholder) {
          props.setHandleAddNewPlaceholder({
            questionIndex: updatedState.questionIndex,
            questionName: "",
            stInd: props.stInd,
            ndInd: props.ndInd,
            bool: true
          });
        }
        if (option.name === "element tag") {
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].fontElement = e; 
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0].forEach((elem: any, index: number) => {
            if (elem.name === option.name) {
              updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.stringValue = e;
            }
          });
          return updatedState;
        }
        if (option.name === "alignment") {
          
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].justify = e;
          return updatedState;
        } else if (option.name === "font family") {
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontFamily = e;
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0].forEach((elem: any, index: number) => {
            if (elem.name === option.name) {
              updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.stringValue = e;
            }
            
          });
        } else if (option.name === "font size") {
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontSize = Number(e);
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0].forEach((elem: any, index: number) => {
            if (elem.name === option.name) {
              updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.numberValue = Number(e);
            }
  
          });
        } else if (option.name === "color") {
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontColor = e;
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0].forEach((elem: any, index: number) => {
            if (elem.name === option.name) {
              updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.stringValue = e;
            }
            console.log(props.wholeState)
          });
        }
        else if (option.name === "text style") {
          if (e === "bold"  ) {
            updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.bold = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.bold;
          }else if( e === "italic" ){
            updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.italic = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.italic;
          } else if( e === "underline" ){
            updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.underline = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle.underline;
          }
          updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0].forEach((elem: any, index: number) => {
            if (elem.name === option.name) {
              if (e === "bold") {
                updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.bold = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.bold;
              }
              if (e === "italic") {
                updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.italic = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.italic;
              }
              if (e === "underline") {
                updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.underline = !updatedState.context[updatedState.questionIndex].answeredQuestionInner[props.stInd || 0].children[props.ndInd || 0][index].value.objectValue.underline;
              }
            }
          });
        }
        return updatedState
      });
    }
    }
  switch (option.type) {
    case "select":
       return (
         <select
           value={option.name === "element tag" ? props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].fontElement : option.name === "alignment" ? item.justify : typeof option.value?.stringValue === "string" ||
                 typeof option.value?.numberValue === "number"
               ? option.value.stringValue ||
                 option.value.numberValue ||
                 option.value.objectValue
               : ""}
           onChange={(e) => {
             handleSelectHandler(e.target.value, );
           }}
           className="h-[40px] w-auto text-sm px-4  border rounded"
         >
           <option disabled>აირჩიე</option>
           {option.option?.map((o:any, idx: any) => (
             <option key={idx} >{o}</option>
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
           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
             handleSelectHandler(event.target.value, )
           }
            }
           placeholder={option.placeholder}
           value={
             typeof option.value?.stringValue === "string"
               ? option.value.stringValue
               : typeof option.value?.numberValue === "number"
               ? props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontSize
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
                     onClick={() => handleSelectHandler("bold")}
                     className={`w-[40px] h-full ${props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle?.bold ? "opacity-100" : "opacity-40"} cursor-pointer bg-white  p-3 border-2 rounded-lg flex justify-center items-center`}
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
                 <div className={`w-1/4 h-full ${props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle?.italic ? "opacity-100" : "opacity-40"} flex justify-center items-center cursor-pointer`}>
                     <div
                     onClick={() => handleSelectHandler("italic")}
                       
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
                         onClick={() => handleSelectHandler("underline")}
                         className={`w-[40px] ${props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontStyle?.underline ? "opacity-100" : "opacity-40"} bg-white h-full p-3 border-2 rounded-lg flex justify-center items-center`}
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
             handleSelectHandler(e.target.value, )
           }}
           type="color"
           value={props.wholeState.context[props.wholeState.questionIndex].answeredQuestionInner[props.stInd || 0].textArea[props.ndInd || 0].className.fontColor || "#000000"}
           
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