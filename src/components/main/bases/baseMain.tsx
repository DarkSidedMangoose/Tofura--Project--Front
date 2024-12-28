import React, { useEffect, useState } from "react";
import CommonBaseClickers from "./commonBaseClickers";
import CommonAfterClickers from "./commonAfterClickers";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const BaseMain: React.FC = () => {
  // redux store reducers
  const sidebarChoose = useSelector(
    (state: RootState) => state.sidebarChoose.data
  );

  /* */

  // states of that redux reducers for updating conditions
  const [mainSidebarChoose, setMainSidebarChoose] =
    useState<string>(sidebarChoose);
  /* */
  // handling on every change

  useEffect(() => {
    setMainSidebarChoose(sidebarChoose);
  }, [sidebarChoose]);
  /* */

  return mainSidebarChoose === "base" ? (
    <div className="w-95% h-100% min-h-[700px] bg-gray-800 flex justify-center items-center relative shadow-sm shadow-black">
      <div className="w-98% h-95% min-h-[650px] flex flex-col bg-gray-500">
        <CommonBaseClickers />
        <div className="w-100% h-100% flex justify-center items-center">
          <CommonAfterClickers />
        </div>
      </div>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default BaseMain;
