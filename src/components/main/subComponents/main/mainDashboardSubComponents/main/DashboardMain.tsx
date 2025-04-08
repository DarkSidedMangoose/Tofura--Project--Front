import React from "react";
import CountryWithRegions from "../subComponents/MapCountryWithRegions/CountryWithRegions";
import "../../../../Scrollbar.css";
// import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
import Diagram from "../subComponents/Diagram";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
// import Diagram from "../subComponents/Diagram";
// import MonthlyCellDiagrams from "../subComponents/MonthlyCellDiagrams";
const DashboardMain: React.FC = () => {
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  return (
    <div className="w-full h-full flex flex-col gap-[5%] justify-center items-center  ">
      <div className="w-full h-full flex gap-[5%]  ">
        {isOption === "ობიექტების რეგიონალური რუკა" ? (
          <CountryWithRegions />
        ) : isOption === "ობიექტების დიაგრამული გამოსახულება" ? (
          <Diagram />
        ) : null}
      </div>
    </div>
  );
};

export default DashboardMain;
