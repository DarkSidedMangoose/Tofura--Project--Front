import React, { useEffect, useState } from "react";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
import "../../../../Scrollbar.css";

interface stateInterface {
  mainBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
  inspectBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
  overBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
  newBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
  checkedBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
  removeBase: {
    identifyCode: string;
    wholeName: string;
    region: string;
    fizAddress: string;
    turnover: string;
    jobType: string;
    riskLevel: string;
  }[];
}

const MainMainMainSectionMain: React.FC = () => {
  const { isOption } = useAdditionalOption();
  const [identifier, setIdentifier] =
    useState<keyof stateInterface>("mainBase");
  useEffect(() => {
    if (isOption === "ობიექტების რეესტრი") {
      setIdentifier("mainBase");
    } else if (isOption === "ინსპექტირების ობიექტები") {
      setIdentifier("inspectBase");
    } else if (isOption === "შემოწმებული ობიექტების რეესტრი") {
      setIdentifier("overBase");
    } else if (isOption === "ახალი ობიექტები") {
      setIdentifier("newBase");
    } else if (isOption === "შემოწმებული ობიექტები") {
      setIdentifier("checkedBase");
    } else if (isOption === "წაშლილი ობიექტები") {
      setIdentifier("removeBase");
    }
  }, [isOption]);
  const [state] = useState<stateInterface>({
    mainBase: [
      {
        identifyCode: "sadadadadasdsssssssssssssssssssssssssssss",
        wholeName: "ასდას",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
      {
        identifyCode: "0231888213",
        wholeName: "შპს რერო",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
      {
        identifyCode: "0231888213",
        wholeName: "შპს რერო",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
    ],
    inspectBase: [
      {
        identifyCode: "sadadadadasdsssssssssssssssssssssssssssss",
        wholeName: "ასდას",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
    ],
    overBase: [
      {
        identifyCode: "0231888213",
        wholeName: "შპს რერო",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
      {
        identifyCode: "0231888213",
        wholeName: "შპს რერო",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
    ],
    newBase: [],
    checkedBase: [],
    removeBase: [],
  });
  return (
    <>
      {state[identifier].map((e, i) => (
        <div
          key={i}
          className="w-98% grid grid-cols-7 h-10% mt-[1%] border-b-[2px] border-black text-gray-700"
        >
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar  font-bold">
            {e.identifyCode}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.wholeName}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.region}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.fizAddress}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.turnover}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.jobType}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap custom-scrollbar font-bold">
            {e.riskLevel}
          </div>
        </div>
      ))}
    </>
  );
};

export default MainMainMainSectionMain;
