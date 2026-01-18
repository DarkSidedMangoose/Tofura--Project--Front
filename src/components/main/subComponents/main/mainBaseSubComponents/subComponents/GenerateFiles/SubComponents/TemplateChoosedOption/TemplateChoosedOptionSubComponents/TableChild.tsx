import React from 'react'
import AddNew from '../../../../../../../../../../assets/images/generateWordFiles/add.png';
import Remove from '../../../../../../../../../../assets/images/generateWordFiles/minus-button.png';
type Props = {}

const TableChild = (props: Props) => {
    return (
      <div className='w-full min-h-[350px]'>
            
      <div className='w-full h-[200px] flex flex-col justify-center items-center gap-4'>
          <label>შეიყვანეთ კითხვა</label>
          <input placeholder='შეიყვანეთ კითხვა' className='w-3/4 min-h-[70px] border-2' />
          
            </div>
            <div className='w-full min-h-[350px] flex items-center flex-col  '>
                <p> კითხვები </p> 
                <div className='min-w-[250px] h-[150px] flex justify-center items-center max-w-[1000px] overflow-x-auto gap-2   '>
                    <div className={`min-w-[200px] h-full flex flex-col items-center justify-center gap-4 border-b-2  relative`}>
                        <label className='font-bold text-sidebarChoose '>პასუხი 1</label>
                        <input className='w-3/4 h-1/3 text-sm px-2 border-2' placeholder='შეიყვანეთ პასუხი...' />
                    </div>
                    <div className='min-w-[50px] h-full flex flex-col justify-evenly py-2 items-center'>
                          <img  className='w-[30px] h-[30px] cursor-pointer hover:opacity-90' src={Remove} />
                          <img  className='w-[32px] h-[32px] cursor-pointer hover:opacity-90' src={AddNew} />
                      </div>
                </div>
        </div>
      </div>
  )
}

export default TableChild