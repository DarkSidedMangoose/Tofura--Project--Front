import React, { useEffect, useState } from "react";
import CommonBaseClickers from "./commonBaseClickers";
import CommonAfterClickers from "./commonAfterClickers";
import Cross from "../../../assets/images/main/cross.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const BaseMain: React.FC = () => {
  const sidebarStore = useSelector((state: RootState) => state.sidebar.data);
  const [mainBaseType, setMainBaseType] = useState<string>("");
  useEffect(() => {
    setMainBaseType(sidebarStore);
  });

  return mainBaseType === "საერთო ობიექტების რეესტრი" ? (
    <div className=" w-95% h-100% min-h-[700px] bg-gray-800   flex justify-center items-center relative shadow-sm shadow-black ">
      <img
        className="absolute w-10 h-10 right-0 top-0  rounded-3xl cursor-pointer"
        src={Cross}
        onClick={() => {}}
        alt="cross"
      />

      <div className="w-98% h-95% min-h-[650px] flex flex-col  bg-gray-500">
        <CommonBaseClickers />
        <div className="w-100% h-100% flex justify-center items-center">
          <CommonAfterClickers />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default BaseMain;
