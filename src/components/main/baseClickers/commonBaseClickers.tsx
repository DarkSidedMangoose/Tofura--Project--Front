import React from 'react'
import Search from '../../../assets/images/main/search.png'
import Filter from '../../../assets/images/main/filter.png'

const CommonBaseClickers: React.FC = () => {
  return (
    <div className="w-100% h-16 flex items-center mt-2 gap-2">
      <input
        className="h-8 border-gray-800  rounded border-4 outline-none w-64 ml-2 text-sm"
        placeholder="მიუთითეთ საძიებო სიტყვა..."
      ></input>
      <div className="h-8 w-8 border-gray-800  rounded border-2 cursor-pointer flex justify-center items-center">
        <img src={Search} className="h-4   "></img>
      </div>
      <div className="h-8 w-8 border-gray-800  rounded border-2 flex justify-center items-center cursor-pointer">
        <img src={Filter} className="h-4   "></img>
      </div>
    </div>
  )
}

export default CommonBaseClickers
