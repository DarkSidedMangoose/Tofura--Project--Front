import React from "react";
import MainMainMainSectionMain from "./BaseMainMain";
import MainMainHeader from "../../../../../reusableComponents/MainMain/MainMainHeader";

export const BaseMain: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center flex-col  rounded-bl-lg rounded-br-lg  ">
      <div
        className={`h-[10%]   w-[98%] flex items-center flex-col  rounded-br-lg rounded-lg shadow-boxShadow`}
      >
        <MainMainHeader
          value={[
            "ს/კ",
            "სრული დასახელება",
            "რეგიონი",
            "მისამართი",
            "ბრუნვა",
            "საქმიანობის დასახელება",
            "რისკის დონე",
          ]}
        />

      </div>
      <div
        className={`h-[80%] bg-white   w-[97.9%] flex items-center flex-col  rounded-br-lg rounded-bl-lg shadow-boxShadow`}
      >
        <MainMainMainSectionMain />
        </div>
    </div>
  );
};
