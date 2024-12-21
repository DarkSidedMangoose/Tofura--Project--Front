import React from "react";
import CommonBaseClickers from "./commonBaseClickers";
import CommonAfterClickers from "./commonAfterClickers";

const BaseMain: React.FC = () => {
  return (
    <div className=" w-95% h-100% min-h-[700px] bg-gray-800   flex justify-center items-center relative shadow-sm shadow-black ">
      <div className="w-98% h-95% min-h-[650px] flex flex-col  bg-gray-500">
        <CommonBaseClickers />
        <div className="w-100% h-100% flex justify-center items-center">
          <CommonAfterClickers />
        </div>
      </div>
    </div>
  );
};

export default BaseMain;
