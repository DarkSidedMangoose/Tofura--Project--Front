import React, { useEffect, useState } from "react";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
import "../../../../Scrollbar.css";
import { bases, stateInterface } from "./BasesObjects";
import { InspectMainButs } from "../btns/BaseMainHeaderBtns";

const MainMainMainSectionMain: React.FC = () => {
  const { setChoose, isOption } = useAdditionalOption();
  const [selected, setSelected] = useState<number>(-1);
  const [identifier, setIdentifier] =
    useState<keyof stateInterface>("mainBase");
  const [state] = useState<stateInterface>(bases);

  useEffect(() => {
    switch (isOption) {
      case "ობიექტების რეესტრი":
        setIdentifier("mainBase");
        break;
      case "ინსპექტირების ობიექტები":
        setIdentifier("inspectBase");
        break;
      case "შემოწმებული ობიექტების რეესტრი":
        setIdentifier("overBase");
        break;
      case "ახალი ობიექტები":
        setIdentifier("newBase");
        break;
      case "შემოწმებული ობიექტები":
        setIdentifier("checkedBase");
        break;
      case "წაშლილი ობიექტები":
        setIdentifier("removeBase");
        break;
      default:
        setIdentifier("mainBase");
        break;
    }
  }, [isOption]);

  const handleRowClick = (index: number) => {
    if (selected !== index) {
      setSelected(index);
      setChoose(true);
    } else {
      setSelected(-1);
      setChoose(false);
    }
  };

  return (
    <div className="w-full h-90% flex flex-col justify-start items-center">
      <div className="mt-[0.3%] h-70% w-full grid grid-rows-5 gap-[1%]">
        {state[identifier].map((item, index) => (
          <DataRow
            key={index}
            item={item}
            selected={selected === index}
            onClick={() => handleRowClick(index)}
          />
        ))}
      </div>
      {identifier === "inspectBase" && (
        <section className="w-98% h-[29.7%] flex justify-end gap-[1%] items-center">
          <InspectMainButs selected={selected} />
        </section>
      )}
    </div>
  );
};

export default MainMainMainSectionMain;

interface Base {
  identifyCode: string;
  wholeName: string;
  region: string;
  fizAddress: string;
  turnover: string;
  jobType: string;
  riskLevel: string;
}

const DataRow: React.FC<{
  item: Base;
  selected: boolean;
  onClick: () => void;
}> = ({ item, selected, onClick }) => {
  const divState: Array<keyof Base> = [
    "identifyCode",
    "wholeName",
    "region",
    "fizAddress",
    "turnover",
    "jobType",
    "riskLevel",
  ];

  return (
    <div
      onClick={onClick}
      style={{ transition: "0.5s" }}
      className={`w-full grid grid-cols-7 h-full border-b-[2px] text-gray-700 bg-loginBackground cursor-pointer ${
        selected
          ? " bg-sidebarChoose opacity-95 text-white"
          : "hover:opacity-60"
      }`}
    >
      {divState.map((key) => (
        <div
          key={key as string}
          className="flex bg-blue justify-center items-center text-[12px] w-[95%] overflow-x-auto custom-scrollbar font-bold"
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          <p className="max-h-full w-90%">{item[key]}</p>
        </div>
      ))}
    </div>
  );
};
