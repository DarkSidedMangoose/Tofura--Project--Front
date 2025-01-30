import React from "react";
import MainMainMainSectionHeader from "./BaseMainHeader";
import MainMainMainSectionMain from "./BaseMainMain";

export const BaseMain: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center flex-col border-t-[1.5px] rounded-bl-lg rounded-br-lg  border-blue-950">
      <MainMainMainSectionHeader />
      <MainMainMainSectionMain />
    </div>
  );
};
