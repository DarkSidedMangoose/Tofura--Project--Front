import React from "react";
import CountryWithRegions from "../subComponents/MapCountryWithRegions/CountryWithRegions";
import "../../../../Scrollbar.css";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
// import Diagram from "../subComponents/Diagram";
// import MonthlyCellDiagrams from "../subComponents/MonthlyCellDiagrams";
const DashboardMain: React.FC = () => {
  const { isOption } = useAdditionalOption();

  return (
    <section className="w-full h-full flex flex-col gap-[5%] justify-center items-center  ">
      <div className="w-full h-full flex gap-[5%]  ">
        {isOption === "ობიექტების რეგიონალური რუკა" ? (
          <CountryWithRegions />
        ) : null}
      </div>
    </section>
  );
};

export default DashboardMain;
