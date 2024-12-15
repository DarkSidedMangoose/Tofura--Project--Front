import React from 'react'
import './MainMain.css'
import CommonBaseClickers from './baseClickers/commonBaseClickers'
export {}

const MainMain: React.FC = () => {
  return (
    <div className=" w-90% h-100% bg-gray-800 z-10  flex justify-center items-center relative ">
      <div className="w-98% h-95% flex  bg-white">
        <CommonBaseClickers />
      </div>
    </div>
  )
}

export default MainMain
