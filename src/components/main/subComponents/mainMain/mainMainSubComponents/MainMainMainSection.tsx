import React, { useState } from "react";

export const MainMainMainSection: React.FC = () => {
  const [states] = useState<{
    header: string[];
    main: {
      identifyCode: string;
      wholeName: string;
      region: string;
      fizAddress: string;
      turnover: string;
      jobType: string;
      riskLevel: string;
    }[];
  }>({
    header: [
      "ს/კ",
      "სრული დასახელება",
      "რეგიონი",
      "მისამართი",
      "ბრუნვა",
      "საქმიანობის დასახელება",
      "რისკის დონე",
    ],
    main: [
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
  });

  return (
    <div className="w-98% h-[80%] bg-white rounded-[3%] shadow-boxShadow flex items-center flex-col">
      <div className="w-98% grid grid-cols-7 h-10% mt-[2%] border-[2px] rounded-[10px] border-blue-950">
        {states.header.map((e, i) => (
          <div
            key={i}
            className={`flex ${
              i === 0 ? "ml-[5%]" : ""
            } justify-start items-center text-[16px] text-blue-950 font-bold`}
          >
            {e}
          </div>
        ))}
      </div>
      {states.main.map((e, i) => (
        <div
          key={i}
          className="w-98% grid grid-cols-7 h-10% mt-[1%] border-b-[2px] border-black text-gray-700"
        >
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.identifyCode}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.wholeName}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.region}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.fizAddress}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.turnover}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.jobType}
          </div>
          <div className="flex justify-start items-center text-[14px] w-[95%] overflow-x-auto whitespace-nowrap font-bold">
            {e.riskLevel}
          </div>
        </div>
      ))}
    </div>
  );
};
