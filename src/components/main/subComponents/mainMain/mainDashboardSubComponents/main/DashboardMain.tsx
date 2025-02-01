import React from "react";
import Diagram from "../subComponents/Diagram";
import MonthlyCellDiagrams from "../subComponents/MonthlyCellDiagrams";

const DashboardMain: React.FC = () => {
  return (
    <section className="w-full h-full grid  grid-rows-2 gap-[2%]">
      <div className="w-full h-full grid grid-cols-2 gap-[2%]">
        <Diagram />
        <Diagram />
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-[2%]">
        <MonthlyCellDiagrams />
        <Diagram />
        <Diagram />
      </div>
    </section>
  );
};

export default DashboardMain;
