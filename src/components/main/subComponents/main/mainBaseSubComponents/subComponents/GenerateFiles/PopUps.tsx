import React, { useCallback, useState } from 'react'
import { TemplatePopUpProps } from './TemplateChoosedOption'
import Arrow from '../../../../../../../assets/images/main/down-arrow.png'

export type PopUpsAddNewParagraphProps = {
  setPopUpsState: React.Dispatch<React.SetStateAction<TemplatePopUpProps>>;
  handleClick: (text: string) => void
}


// This component is a placeholder for the AddNewParagraph functionality
const PopUpsAddNewParagraph: React.FC<PopUpsAddNewParagraphProps> = (props) => {
  const [inputState, setInputState] = useState<string>("")
  
    const handleClosePopUp = useCallback(() => {
        
        props.setPopUpsState((prev) => ({...prev, paragraphAddNew: false}))
    },[props.setPopUpsState])
  return (
   <div className='  flex flex-col justify-center items-center w-full h-full'>
              <div className='w-full h-60% flex justify-center items-center flex-col gap-4 '>
                  <h1 className='w-auto h-auto text-md text-white font-bold'> შეიყვანეთ აბზაცის სახელი</h1>
                  <input placeholder='...აბზაცის სახელი' type='text' className='border-2 w-80% h-50%' onChange={(e) => setInputState(e.target.value)}/>
        </div>
              <div className='w-80% h-40%  flex items-center gap-2 justify-end'>
                  <button onClick={() => handleClosePopUp()} className='w-auto px-4 bg-white text-sidebarChoose h-2/3 font-semibold rounded-lg'>გაუქმება</button>
                  <button onClick={() => props.handleClick(inputState)} className='w-auto px-4 bg-white text-sidebarChoose font-semibold h-2/3 rounded-lg'>დამატება</button>
        </div>
    </div>
  )
}




export type ParagraphStructureProps = {
    stateOfParagraph: any;
  popUpsState: TemplatePopUpProps;
  handleChangeParagraphAligment: ( oldIndex: number, newIndex:number) => void; // Optional prop for handling paragraph alignment changes
    
    setPopUpsState: React.Dispatch<React.SetStateAction<TemplatePopUpProps>>;

}

// This component displays the structure of paragraphs

export const ParagraphStructure = (props: ParagraphStructureProps) => {
 
    const handleClosePopUp = useCallback(() => {
        props.setPopUpsState((prev) => ({...prev, paragraphStructureShow: false}))
    },[props.setPopUpsState])

  
  const handleArrowClick = useCallback(() => {

  }, []);
  return (
    <div className='fixed z-50 bg-loginBackground left-0 flex justify-center items-center w-full h-full'>
      <div className='w-[1000px] h-[700px] bg-white  flex flex-col  justify-between items-center gap-4 shadow-bottom-right'>
        <div className='w-full h-90% flex flex-col gap-2 overflow-y-scroll'>

        {props.stateOfParagraph.map((paragraph: any, index: number) => (
          
          <div className='w-full h-[50px] bg-loginBackground text-sidebarChoose border-2 flex items-center font-bold justify-center relative'>
            <p>
            {paragraph.name}
            </p> 
              <div className='w-[40px] absolute right-0 h-full '>
              <div className='w-full h-full  flex-col  flex justify-center items-center'>
                <img src={Arrow} className={`h-1/2 w-full rotate-180 cursor-pointer hover:opacity-50 transition-all duration-200 ${index === 0 && "hover:cursor-not-allowed opacity-10 hover:opacity-10"}`} onClick={() => props.handleChangeParagraphAligment(index,index-1 )} />
                <img src={Arrow} className={`h-1/2 w-full cursor-pointer hover:opacity-50 transition-all duration-200 ${props.stateOfParagraph.length === index +1 && "hover:cursor-not-allowed opacity-10 hover:opacity-10"}  `} onClick={() => props.handleChangeParagraphAligment(index,index+1 )}/>
                </div> 
              </div>
          </div>
        ))}
        </div>
              <div className='w-full h-10% bg-white flex justify-end px-4'>
                  <button onClick={() => handleClosePopUp()} className='w-auto h-2/3 bg-sidebarChoose text-white px-4 rounded-lg shadow-bottom-right'>გაუქმება</button>
              </div>
      </div>
    </div>
  )
}


export default PopUpsAddNewParagraph
