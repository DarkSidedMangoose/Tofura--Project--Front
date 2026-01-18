import React from 'react'
import { TopTableChildrenInterface } from './TableComponent';

type Props = {
    identifier: string;
    option: TopTableChildrenInterface;
    optionIndex: number;
    state: TopTableChildrenInterface[] | any[];
    setState: React.Dispatch<React.SetStateAction<TopTableChildrenInterface[] | any[]>>;
}

const RenderFieldTable = (props: Props) => {
    const { option, identifier, setState, state, optionIndex} = props;
    const handleSetStateHeaderTable = (e: React.ChangeEvent<HTMLInputElement>) => {
         if (Number(e.target.value )< 0) {
                
         } else {
             
             setState((prev: TopTableChildrenInterface[]) => {
                 var newState = [...prev]
                 
                 if (optionIndex !== 0) {
                     
                     newState[optionIndex].value.numberValue = Number(e.target.value)
                     if (optionIndex === 2) {
                         newState[1].value.numberValue = 100 - Number(e.target.value)
                        }
                        if (optionIndex === 1) {
                            newState[2].value.numberValue = 100 - Number(e.target.value)
                        }
                        
                    }
                 
           
            return newState
        })
    }
    }
    switch (option.type) {
    
     case "input":
       return (
         <input
          
           type="number"
           style={{
             appearance: "auto",
               }}
               onChange={(e) => {
                   identifier === "headerTable" && handleSetStateHeaderTable(e)
               }}
           value={identifier === "headerTable" ? option.value.numberValue : ""}
           
           className="h-[40px] w-[80px] text-sm px-4  bg-white border rounded"
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

export default RenderFieldTable