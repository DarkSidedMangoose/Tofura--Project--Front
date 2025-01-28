import React, { memo } from "react";
import MainMainMainSectionHeader from "./MainMainMainSubComponents/MainMainMainSectionHeader";
import MainMainMainSectionMain from "./MainMainMainSubComponents/MainMainMainSectionMain";

export const MainMainMainSection: React.FC = memo(() => {
  return (
    <div className="w-98% h-[80%] bg-white rounded-[3%] shadow-boxShadow flex items-center flex-col">
      <MainMainMainSectionHeader />
      <MainMainMainSectionMain />
    </div>
  );
});
