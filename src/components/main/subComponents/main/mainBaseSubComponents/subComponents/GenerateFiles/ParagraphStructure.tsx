import React, { useEffect } from 'react'

type Props = {
  stateOfParagraph: any;

}

const ParagraphStructure = (props: Props) => {
  useEffect(() => {
    console.log("ParagraphStructure props: ", props.stateOfParagraph);
    // You can add any additional logic here that needs to run when the component mounts or props change
  },[props.stateOfParagraph])
  return (
    <div className='fixed z-50 bg-loginBackground left-0 flex justify-center items-center w-full h-full'>
      <div className='w-[1000px] h-[700px] bg-white rounded-xl shadow-lg flex flex-col  items-center gap-4'>
        {props.stateOfParagraph.map((paragraph: any, index: number) => (
          <div className='w-full h-[50px] bg-sidebarChoose text-white flex items-center font-bold justify-center'>{paragraph.name}</div>
        ))}
      </div>
    </div>
  )
}

export default ParagraphStructure