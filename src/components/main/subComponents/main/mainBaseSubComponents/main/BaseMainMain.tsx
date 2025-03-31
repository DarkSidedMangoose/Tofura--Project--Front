import React, { useCallback, useEffect, useState } from "react";
import "../../../../Scrollbar.css";
import { InspectMainButs } from "../btns/BaseMainMainBtns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setChoose } from "../../../../../../redux/reducers/BasesChoosedOption";
import axios from "axios";
import GiveTask from "../subComponents/GiveTask";
import { useSignalR } from "../../../../../../contextApis/ContextSignalR";

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

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const MainMainMainSectionMain: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  const { message } = useSignalR();
  const [signalMessage, setSignalMessage] = useState<boolean>(false);

  useEffect(() => {
    if (message.startsWith("Update database")) {
      setSignalMessage(!signalMessage);
    }
  }, [message]);

  const [isIdentifierObjectState, setIsIdentifierObject] = useState<string>(
    isIdentifierInspetObject
  );
  const [selected, setSelected] = useState<number>(-1);
  const [sentBtnClicked, setSentBtnClicked] = useState<boolean>(false);
  const [state, setState] = useState<states[] | []>([]);

  useEffect(() => {
    if (sentBtnClicked === false) {
      const takeTasksFromDb = async (arg: string) => {
        try {
          const response = await axios.get(`${apiUrl}/tasks/${arg}`, {
            withCredentials: true,
          });
          setState([]);
          setState(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      if (isIdentifierObjectState === "მიმდინარე დავალებები") {
        takeTasksFromDb("onGoing");
      } else if (isIdentifierObjectState === "გაცემული დავალებები") {
        takeTasksFromDb("onPending");
      } else if (isIdentifierObjectState === "დასადასტურებელი დავალებები") {
        takeTasksFromDb("pendingApproval");
      } else if (
        isIdentifierObjectState === "გაგზავნილი დასრულების მოთხოვნები"
      ) {
        takeTasksFromDb("waitApproval");
      }
    }
  }, [isIdentifierObjectState, sentBtnClicked, signalMessage]);

  useEffect(() => {
    setIsIdentifierObject(isIdentifierInspetObject);
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
  const handleSetSentButton = useCallback((arg: boolean) => {
    setSentBtnClicked(arg);
  }, []);
  const handleEndTask = useCallback(() => {
    console.log(state[selected].id);
    const checkFuntion = async () => {
      try {
        await axios.put(
          "https://localhost:7205/api/tasks/endTask",

          {
            taskId: state[selected].id,
          },

          {
            withCredentials: true,
          }
        );
        setState((prev) => prev.filter((_, index) => index !== selected));
      } catch (error) {
        console.error("Error ending task:", error);
      }
    };
    checkFuntion();
  }, [selected, state]);

  const handleClickDeclinedButton = useCallback(() => {
    const DeclinedRequest = async () => {
      try {
        await axios.put(
          `${apiUrl}/tasks/declineTask`,
          {
            taskId: state[selected].id,
          },
          {
            withCredentials: true,
          }
        );
        console.log("declined sent succesfully to the server");
        setState((prev) => prev.filter((_, index) => index !== selected));
      } catch (error) {
        console.error("Error declining task:", error);
      }
    };
    DeclinedRequest();
  }, [state, selected]);
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
          <InspectMainButs
            setClickedOnEnd={handleEndTask}
            selected={selected}
            clicked={sentBtnClicked}
            baseIdentifier={isIdentifierObjectState}
            setClickedOnSent={handleSetSentButton}
            setClickedOnDeclined={handleClickDeclinedButton}
          />
        </section>
      )}

      {sentBtnClicked && (
        <GiveTask setClick={handleSetSentButton} id={state[selected].id} />
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
