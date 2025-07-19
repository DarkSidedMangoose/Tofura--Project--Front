import React, { useCallback } from 'react'

interface Props  {
    setTemplateShowState: React.Dispatch<React.SetStateAction<boolean>>;
    
}

const GenerateAddNewSection: React.FC<Props> = ({ setTemplateShowState }) => {
    const CancelAddNewSection = useCallback(() => {
        setTemplateShowState(false)
    },[setTemplateShowState])
  return (
      <div className='w-full h-full fixed left-0 top-0 bg-loginBackground flex justify-center items-center z-50'>
          <div className='bg-white w-[400px] h-[150px] flex flex-col items-center '>
              <h1 className='text-md font-bold mb-4 h-auto'>ახალი სექციის დამატება</h1>
              <input className='w-1/2 min-h-[35px] border text-sm px-2 ' placeholder='...სექციის სახელი' />
              <div className='w-full  h-full flex justify-end gap-2 items-center'>
                  <button className='h-[35px] px-4 bg-sidebarChoose text-white font-bold'>დამატება</button>
                  <button className='h-[35px] px-4 bg-white text-sidebarChoose border-2 font-bold' onClick={()=> CancelAddNewSection()}>გაუქმება</button>
              </div>
          </div>
    </div>
  )
}

export default GenerateAddNewSection