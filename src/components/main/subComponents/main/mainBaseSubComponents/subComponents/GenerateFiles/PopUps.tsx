import React, { useCallback, useState } from 'react'
import { TemplatePopUpProps } from './TemplateChoosedOption'

export type PopUpsAddNewParagraphProps = {
  setPopUpsState: React.Dispatch<React.SetStateAction<TemplatePopUpProps>>;
  handleClick: (text:string) => void
}


// This component is a placeholder for the AddNewParagraph functionality
const PopUpsAddNewParagraph: React.FC<PopUpsAddNewParagraphProps> = (props) => {
  const [inputState, setInputState] = useState<string>("")
    const handleClosePopUp = useCallback(() => {
        
        props.setPopUpsState((prev) => ({...prev, paragraphAddNew: false}))
    },[props.setPopUpsState])
  return (
   <div className='fixed z-50 bg-loginBackground left-0 flex justify-center items-center w-full h-full'>
      <div className='w-[400px] h-[200px] bg-white rounded-xl shadow-lg flex flex-col  justify-between items-center gap-4'>
              <div className='w-full h-60% flex justify-center items-center flex-col gap-4 '>
                  <h1 className='w-auto h-auto text-md text-sidebarChoose font-bold'> შეიყვანეთ აბზაცის სახელი</h1>
                  <input type='text' className='border-2 w-80% h-50%' onChange={(e) => setInputState(e.target.value)}/>
        </div>
              <div className='w-80% h-40%  flex items-center gap-2 justify-end'>
                  <button onClick={() => handleClosePopUp()} className='w-auto px-4 bg-sidebarChoose text-white h-2/3 rounded-lg'>გაუქმება</button>
                  <button onClick={() => props.handleClick(inputState)} className='w-auto px-4 bg-sidebarChoose text-white h-2/3 rounded-lg'>დამატება</button>
        </div>
      </div>
    </div>
  )
}




export type ParagraphStructureProps = {
    stateOfParagraph: any;
    popUpsState: TemplatePopUpProps;
    setPopUpsState: React.Dispatch<React.SetStateAction<TemplatePopUpProps>>;

}

// This component displays the structure of paragraphs

export const ParagraphStructure = (props: ParagraphStructureProps) => {
 
    const handleClosePopUp = useCallback(() => {
        props.setPopUpsState((prev) => ({...prev, paragraphStructureShow: false}))
    },[props.setPopUpsState])

  return (
    <div className='fixed z-50 bg-loginBackground left-0 flex justify-center items-center w-full h-full'>
      <div className='w-[1000px] h-[700px] bg-white rounded-xl shadow-lg flex flex-col  justify-between items-center gap-4'>
        {props.stateOfParagraph.map((paragraph: any, index: number) => (
          <div className='w-full h-[50px] bg-sidebarChoose text-white flex items-center font-bold justify-center'>{paragraph.name}</div>
        ))}
              <div className='w-full h-10% bg-white flex justify-end px-4'>
                  <button onClick={() => handleClosePopUp()} className='w-auto h-2/3 bg-sidebarChoose text-white px-4 rounded-lg shadow-bottom-right'>გაუქმება</button>
              </div>
      </div>
    </div>
  )
}


export default PopUpsAddNewParagraph
