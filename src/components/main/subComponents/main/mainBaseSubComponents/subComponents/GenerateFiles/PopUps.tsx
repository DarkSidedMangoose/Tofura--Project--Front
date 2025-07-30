import React, { useCallback } from 'react'
import { TemplatePopUpProps } from './TemplateChoosedOption'

export type PopUpsAddNewParagraphProps = {}


// This component is a placeholder for the AddNewParagraph functionality
const PopUpsAddNewParagraph:React.FC = (props: PopUpsAddNewParagraphProps) => {
  return (
    <div>AddNewParagraph</div>
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
