import React, { Fragment, useEffect, useState } from 'react'

type Props = {
  state: any;
}

type Placeholder = {
  uuid: string;
  sectionIndex: number;
  childIndex: number;
  textAreaIndex: number;
};

const Questionary = (props: Props) => {
  const [placeholders, setPlaceholders] = useState<Placeholder[]>([])

  useEffect(() => {
    setPlaceholders([])
    props.state.forEach((section: any, sectionIndex:number) => {
      section.children.forEach((child: any, childIndex:number) => {
       child.textArea.forEach((textArea: any, textAreaIndex:number) => {
        if(textArea.type === 'placeholder'){
          setPlaceholders((prev) => [...prev, {uuid: textArea.uuid, sectionIndex, childIndex, textAreaIndex}] )
        }
      })

      })
    })
  },[props.state])
  useEffect(() => {
    console.log(placeholders)
  }, [placeholders])
  return (
    <div className='w-full bg-white h-full'>
      {placeholders.map((placeholders, index) => (
        <Fragment key={placeholders.uuid}>
          <div className='w-full p-5 border-b border-gray-300 flex justify-between items-center'>
            <div className='font-bold'>Placeholder {index + 1}</div>
            <div className='text-sm text-gray-500'>Section {placeholders.sectionIndex + 1} - Child {placeholders.childIndex + 1} - TextArea {placeholders.textAreaIndex + 1}</div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Questionary