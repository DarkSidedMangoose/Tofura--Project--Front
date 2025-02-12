import React, { useEffect, useState } from "react";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
import "../../../../Scrollbar.css";
import { bases, stateInterface } from "./BasesObjects";

const MainMainMainSectionMain: React.FC = () => {
  const [selected, setSelected] = useState<Number>(-1);
  const [state] = useState<stateInterface>(bases);
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
  return (
    <div className="w-full h-90%">
      <div className="mt-[0.3%] h-70% w-full grid  grid-rows-5 gap-[1%]  ">
        {state[identifier].map((e, i) => (
          <div
            onClick={() => {
              if (selected !== i) {
                setSelected(i);
              } else {
                setSelected(-1);
              }
            }}
            key={i}
            style={{ transition: "0.5s" }}
            className={`w-full grid grid-cols-7  h-full border-b-[2px] text-gray-700 bg-loginBackground cursor-pointer ${
              selected === i ? "bg-sidebarChoose text-white" : ""
            } `}
          >
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center    text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.identifyCode}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.wholeName}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.region}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.fizAddress}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.turnover}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.jobType}</p>
            </div>
            <div
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
              className="flex justify-center items-center  text-[12px] w-[95%]  overflow-x-auto custom-scrollbar font-bold"
            >
              <p className="max-h-full w-90%">{e.riskLevel}</p>
            </div>
          </div>
        ))}
      </div>
      {identifier === "inspectBase" && (
        <section className="w-full h-[29.7%] flex justify-end gap-[1%] items-center  ">
          <button
            className={`w-auto p-[10px] h-1/4 min-h-[45px] bg-[#05052c] text-white ${
              selected === -1
                ? "cursor-not-allowed opacity-15 "
                : "opacity:100 cursor-pointer"
            }`}
          >
            დავალების გაცემა
          </button>
          <button
            className={`w-auto p-[10px] h-1/4 min-h-[45px] bg-[#05052c] text-white ${
              selected === -1
                ? "cursor-not-allowed opacity-15 "
                : "opacity:100 cursor-pointer"
            } `}
          >
            დავალების დასრულება
          </button>
        </section>
      )}
    </div>
  );
};

export default MainMainMainSectionMain;
