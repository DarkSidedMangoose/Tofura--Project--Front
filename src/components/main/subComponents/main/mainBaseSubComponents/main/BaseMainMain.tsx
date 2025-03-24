import React, { useEffect, useState } from "react";
// import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";
import "../../../../Scrollbar.css";
import { InspectMainButs } from "../btns/BaseMainHeaderBtns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setChoose } from "../../../../../../redux/reducers/BasesChoosedOption";
import axios from "axios";

interface states {
  id: string;
  identifyCode: string;
  wholeName: string;
  region: string;
  fizAddress: string;
  turnover: string;
  jobType: string;
  riskLevel: string;
}

const MainMainMainSectionMain: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  const [selected, setSelected] = useState<number>(-1);

  const [state, setState] = useState<states[] | []>([]);

  useEffect(() => {
    const takeTasksFromDb = async (arg: string) => {
      try {
        const response = await axios.get(
          `https://localhost:7205/api/tasks/${arg}`,
          {
            withCredentials: true,
          }
        );
        setState(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (isIdentifierInspetObject === true) {
      takeTasksFromDb("onGoing");
    } else {
      setState([]);
    }
  }, [isIdentifierInspetObject]);

  const handleRowClick = (index: number) => {
    if (selected !== index) {
      setSelected(index);
      dispatch(setChoose(true));
    } else {
      setSelected(-1);
      dispatch(setChoose(false));
    }
  };

  return (
    <div className="w-full h-90% flex flex-col justify-start items-center">
      <div className="mt-[0.3%] h-70% w-full grid grid-rows-5 gap-[1%]">
        {state &&
          state.map((item, index) => (
            <DataRow
              key={index}
              item={item}
              selected={selected === index}
              onClick={() => handleRowClick(index)}
            />
          ))}
      </div>
      {isOption === "ინსპექტირების ობიექტები" && (
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
