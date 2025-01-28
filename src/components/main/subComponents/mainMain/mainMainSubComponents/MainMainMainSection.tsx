import React, { memo, useState } from "react";
import MainMainMainSectionHeader from "./MainMainMainSubComponents/MainMainMainSectionHeader";
import MainMainMainSectionMain from "./MainMainMainSubComponents/MainMainMainSectionMain";

export const MainMainMainSection: React.FC = memo(() => {
  const [states] = useState<{
    header: string[];
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
  });

  return (
    <div className="w-98% h-[80%] bg-white rounded-[3%] shadow-boxShadow flex items-center flex-col">
      <MainMainMainSectionHeader />
      <MainMainMainSectionMain />
    </div>
  );
});
