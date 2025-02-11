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
        identifyCode: "საკდლასკდლაკსლდკლ sadasd asd asd asdas",
        wholeName: "ასდას",
        region: "მუხრანის დასახლება ნ: 78მუხრანის დsdldllsdlds;ald",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
      {
        identifyCode: "",
        wholeName: "ასდას sadsad asd sadas sad sad a das sad sad adsadassa",
        region: "მუხრანის დასახლება ნ: 78",
        fizAddress: "მუხრანის მე-4 პლატო",
        turnover: "<500 000",
        jobType: "ნავთობწარმოება",
        riskLevel: "მაღალი",
      },
      {
        identifyCode: "sadadadadas",
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
        identifyCode:
          "0231888213sadadsadadadadsadsadsakdkjlsakdlaskdlka sadsakldkaslkdassadasda;lkdl;ask;ldka;ldk;lsakd;lska;ldkla; sadsadasdasdadaskdl;askdlkaslkdlalkasl sadkjsajdkjaskdjkajdkjakjdka sjadkjaskdjkasjdkajdkj",
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
        identifyCode: "sadadada",
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
    <div className="h-70% w-full flex  flex-col">
      {state[identifier].map((e, i) => (
        <div
          key={i}
          className="w-full grid grid-cols-7 h-20% mt-[1%] border-b-[2px] text-gray-700 bg-loginBackground"
        >
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.identifyCode}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.wholeName}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-auto custom-scrollbar font-bold"
          >
            {e.region}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.fizAddress}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.turnover}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.jobType}
          </div>
          <div
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
            className="flex justify-start  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
          >
            {e.riskLevel}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainMainMainSectionMain;
