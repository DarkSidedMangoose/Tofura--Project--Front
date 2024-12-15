import React from 'react'
import Search from '../../../assets/images/main/search.png'
import Filter from '../../../assets/images/main/filter.png'
import Sync from '../../../assets/images/main/sync.png'
import Add from '../../../assets/images/main/add.png'
import Info from '../../../assets/images/main/info.png'

const CommonBaseClickers: React.FC = () => {
  return (
    <div className="w-100% h-16 ">
      <div className="flex w-100% justify-between">
        <div className="w-100% h-16 flex items-center mt-2 gap-2 ">
          <input
            className="h-8 border-gray-800  rounded border-2 outline-none w-64 ml-2 text-sm"
            placeholder="მიუთითეთ საძიებო სიტყვა..."
          ></input>
          <div className="h-8 w-8 border-gray-800 bg-white rounded border-2 cursor-pointer flex justify-center items-center">
            <img src={Search} className="h-4"></img>
          </div>
          <div className="h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer">
            <img src={Filter} className="h-4   "></img>
          </div>
        </div>
        <div className=" h-16 flex items-center mt-2 gap-2 ">
          <div className="h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer">
            <img src={Sync} className="h-4   "></img>
          </div>
          <div className="h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer">
            <img src={Add} className="h-4   "></img>
          </div>
          <div className="h-8 w-36 mr-2 border-gray-800 bg-white  rounded border-2 flex justify-evenly items-center cursor-pointer">
            <p className="text-sm text-gray-800 ">სრულად ნახვა</p>
            <img src={Info} className="h-4"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonBaseClickers