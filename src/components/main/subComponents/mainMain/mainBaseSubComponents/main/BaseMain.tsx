import React from "react";
import MainMainMainSectionHeader from "./BaseMainHeader";
import MainMainMainSectionMain from "./BaseMainMain";

export const BaseMain: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center flex-col  rounded-bl-lg rounded-br-lg  ">
      <div
        className={`h-[90%]  w-[98%] flex items-center flex-col bg-white rounded-br-lg rounded-lg shadow-boxShadow`}
      >
        <MainMainMainSectionHeader />
        <MainMainMainSectionMain />
      </div>
    </div>
  );
};
