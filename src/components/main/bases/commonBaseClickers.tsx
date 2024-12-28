import React from "react";
import Search from "../../../assets/images/main/search.png";
import Filter from "../../../assets/images/main/filter.png";

import CommonBaseClickersChild from "./clickersDifferentCases";

const CommonBaseClickers: React.FC = () => {
  return (
    <div className="w-100% h-16 flex justify-center items-center ">
      <div className="flex w-98% justify-between">
        <div className="w-100% h-16 flex items-center mt-2 gap-2 ">
          <input
            className="h-8 border-gray-800  rounded border-2 outline-none w-64  text-sm shadow-lg shadow-black"
            placeholder="მიუთითეთ საძიებო სიტყვა..."
          ></input>
          <div className="h-8 w-8 border-gray-800 bg-white rounded border-2 cursor-pointer flex justify-center items-center shadow-lg shadow-black hover:opacity-90 hover:bg-white ">
            <img src={Search} alt="Search" className="h-4"></img>
          </div>
          <div className="h-8 w-8 border-gray-800 bg-white  rounded border-2 flex justify-center items-center cursor-pointer shadow-lg shadow-black hover:opacity-90 hover:bg-white">
            <img src={Filter} alt="Filter" className="h-4"></img>
          </div>
        </div>
        <CommonBaseClickersChild />
      </div>
    </div>
  );
};

export default CommonBaseClickers;
