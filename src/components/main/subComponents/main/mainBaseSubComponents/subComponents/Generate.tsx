import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import "../../../../Scrollbar.css"
import Logo from "../../../../../../assets/images/main/fullLogo.webp"
import { setBaseSubcomponentsShown } from '../../../../../../redux/reducers/BaseSubcomponentsShown'
import Add from '../../../../../../assets/images/main/plus.webp'
import GenerateAddReviewUseTemplate from './GenerateAddReviewUseTemplate'
type Props = {}

const Generate = (props: Props) => {
  const dispatch = useDispatch()
  const [state, setState] = useState<{navState:string, templates:string[], choosedTemplate:string, addNewTemplate: boolean,addNewTemplateNavState: string}>({navState: "შაბლონები",templates:["ინვოისის გაგზავნის შაბლონი","ოქმის შაბლონი"],choosedTemplate:"",addNewTemplate:true, addNewTemplateNavState: "შაბლონი"})


  return (
    <div className='fixed left-0 top-0 z-40 w-full h-full flex justify-center items-center bg-loginBackground'>
        <div className='w-full h-full min-w-[800px] min-h-[700px]  relative shadow-bottom-right flex-col'>
          { state.addNewTemplate && 

            <GenerateAddReviewUseTemplate setState={setState} state={state} />
          }
        <p className='w-full h-10% bg-sidebarChoose text-white flex justify-center items-center text-xl shadow-bottom-right'>{state.navState}</p>
        <div className='flex h-90% '>

        <div className="h-full w-[85%] bg-white overflow-y-auto custom-scrollbar  ">
          {state.navState === "შაბლონები" && (
          <Fragment>
          <div className='gap-2 flex flex-col'>

          {/* <img src={Logo} className='left-[-90px] top-[-70px] absolute w-[40%] min-w-[500px] h-90% opacity-100 -z-10 '/> */}
          
          {state.templates.map((e, i) => (

            <div key={e} onClick={() => e !== state.choosedTemplate ? setState((prev) => ({...prev,choosedTemplate:e})): setState((prev) => ({...prev,choosedTemplate:""}))} className={`h-[100px] ${state.choosedTemplate === e ? "bg-sidebarChoose text-white opacity-90" : "bg-loginBackground text-sidebarChoose hover:opacity-60"}  flex items-center cursor-pointer  transition-all duration-15`}>
              <p className='px-2 0'>
              {i+1}){` ${e}`}
              </p>
            </div>
          ))}
          </div>
          <div className='h-[100px] flex items-center justify-start '>

          <img src={Add} onClick={() => setState((prev) => ({...prev,addNewTemplate:true}))}  className='h-1/2 bg-sidebarChoose rounded-sm cursor-pointer'/>
          </div>

          </Fragment>
          )} 
        </div>

          <div className='w-[20%] h-full z-0  bg-[#f3f1f1]  relative  shadow-left '>
            <ul className='w-full h-auto flex flex-col'>
              {["შაბლონები","კონფიგურაცია"].map((item, idx) => (
                <li onClick={() => setState((prev) => ({...prev,navState:item}))} key={idx} className={` w-full h-[100px] flex justify-center items-center border-b-[1px] border-2  cursor-pointer ${item === state.navState ? "bg-sidebarChoose  text-white opacity-90" : "hover:opacity-50"}`}>{item}</li>
              ))}
            </ul>

              <div className='absolute bottom-4 right-2 w-full flex justify-end gap-2'>

          <button className=' opacity-20     text-lg bg-sidebarChoose w-auto-h-auto p-4  font-semibold  text-white rounded-lg shadow-bottom-right ' onClick={() => dispatch(setBaseSubcomponentsShown(""))}> შენახვა </button>
          <button className='     text-lg bg-sidebarChoose w-auto-h-auto p-4   font-semibold  text-white rounded-lg shadow-bottom-right opacity-90' onClick={() => dispatch(setBaseSubcomponentsShown(""))}> გაუქმება </button>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Generate