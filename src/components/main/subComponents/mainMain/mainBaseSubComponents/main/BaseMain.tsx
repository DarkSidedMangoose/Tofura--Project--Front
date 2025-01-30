import React from "react";
import MainMainMainSectionHeader from "./BaseMainHeader";
import MainMainMainSectionMain from "./BaseMainMain";

export const BaseMain: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center flex-col  rounded-bl-lg rounded-br-lg  ">
      <MainMainMainSectionHeader />
      <MainMainMainSectionMain />
    </div>
  );
};
