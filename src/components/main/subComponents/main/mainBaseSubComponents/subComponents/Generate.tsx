import React from 'react'
import { useDispatch } from 'react-redux'
import "../../../../Scrollbar.css"
import Logo from "../../../../../../assets/images/main/fullLogo.webp"
import { setBaseSubcomponentsShown } from '../../../../../../redux/reducers/BaseSubcomponentsShown'
type Props = {}

const Generate = (props: Props) => {
  const dispatch = useDispatch()

  return (
    <div className='fixed left-0 top-0 z-40 w-full h-full flex justify-center items-center bg-loginBackground'>
        <div className='w-70% h-80% min-w-[800px] min-h-[700px]  relative shadow-bottom-right'>
        <p className='w-full h-10% bg-sidebarChoose text-white flex justify-center items-center text-xl shadow-bottom-right'>დოკუმენტის გენერაცია</p>
        <div className="h-[90%] w-full bg-white overflow-y-auto custom-scrollbar ">
          <img src={Logo} className='left-[-90px] top-[-70px] absolute w-[40%] min-w-[500px] h-90% opacity-15'/>
          {[1,2].map((e, i) => (
            <div key={e} className='h-[200px]'>
              
            </div>
          ))}
        </div>
          <button className=' absolute bottom-5 right-5 text-lg bg-sidebarChoose w-auto-h-auto p-4  mr-4 font-semibold  text-white rounded-lg shadow-bottom-right opacity-90' onClick={() => dispatch(setBaseSubcomponentsShown(""))}> გაუქმება </button>

        </div>
    </div>
  )
}

export default Generate