import React from "react";
import CommonAfterChild from "./commonAfterChild";

const CommonAfterClickers: React.FC = () => {
  return (
    <div className="w-98% h-95% bg-white shadow-lg shadow-black flex justify-center items-center">
      <div className="w-98% h-95%  ">
        <div className="border-b-4 border-gray-500 flex justify-center">
          <div className="w-98% h-59px grid grid-cols-7 ">
            <div className="flex justify-start items-center ">
              <p>ს/კ</p>
            </div>
            <div className="flex justify-start items-center">
              <>სრული დასახელება</>
            </div>
            <div className="flex justify-start items-center">
              <>რეგიონი</>
            </div>
            <div className="flex justify-start items-center">
              <>მისამართი</>
            </div>
            <div className="flex justify-start items-center ">
              <p>ბრუნვა</p>
            </div>
            <div className="flex justify-start items-center">
              <p className="">საქმიანობის დასახელება</p>
            </div>
            <div className="flex justify-start items-center ">
              <p>რისკის დონე</p>
            </div>
          </div>
        </div>
        <CommonAfterChild />
      </div>
    </div>
  );
};

export default CommonAfterClickers;
