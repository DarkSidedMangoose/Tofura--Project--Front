import React, { useCallback, useEffect, useState } from "react";
import "../../../../Scrollbar.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setChoose } from "../../../../../../redux/reducers/BasesChoosedOption";
import axios from "axios";
import GiveTask from "../subComponents/GiveTask";
import { useSignalR } from "../../../../../../contextApis/ContextSignalR";
import { DataLogs } from "../subComponents/DataLogs";
import Comment from "../subComponents/comment";
import { setInspectBaseIdentifier } from "../../../../../../redux/reducers/InspectObjectIdentifierState";
import { OnGoingInspectButtons } from "../../../../../reusableComponents/MainMain/OngoingInspectButtons";

//take url for tasks axios requests from env file
const apiUrl = process.env.REACT_APP_API_BASE_URL;

//interfaces for state which we receive from backend
export interface DataLog {
  timestamp: string;
  addedByName: string;
  description: string;
  receiverName: string;
  imgUrl: string;
  comment: string;
}

interface states {
  id: string;
  identifyCode: string;
  wholeName: string;
  region: string;
  fizAddress: string;
  turnover: string;
  jobType: string;
  riskLevel: string;
  dataLogs: DataLog[];
}
// endpoint for interfacing with backend

//MainComponent of that file
const MainMainMainSectionMain: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // dispatch for redux

  const [declineTaskComment, setDeclineTaskComment] = useState<string>("");

  //message functionality for signalR message receiving
  const { message } = useSignalR(); // signalR message which we receive from backend to update database when task is received
  const [signalMessage, setSignalMessage] = useState<boolean>(false);
  useEffect(() => {
    if (message.startsWith("Update database")) {
      setSignalMessage(!signalMessage);
    }
  }, [message]);
  //end of signalR message functionalityh

  // take sidebar option(what is state of our sidebar and content) from redux
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  //
  useEffect(() => {
    if (isOption !== "ინსპექტირების ობიექტები") {
    dispatch(setInspectBaseIdentifier("მიმდინარე დავალებები"));
    localStorage.setItem("inspetBaseIdentifier", "მიმდინარე დავალებები");
    console.log("mimdinare");
    }
  }, [isOption]);

  // take identifier of which kind of data is selected in tasks(onGoing, onPending, onApproval, pendingApproval) from redux
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );

  // take selected task from redux (which task we selected in the base)
  const isSelected = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

  // take taskLogs from redux (taskLogs like history of Task from birth to data flow every step what happened to it)
  const taskLog = useSelector((state: RootState) => state.TaskLogInfo.data);

  const [sentBtnClicked, setSentBtnClicked] = useState<boolean>(false); // state for TaskSent component when that component is opened or closed
  const [comment, setComment] = useState<boolean>(false); // state for comment which we send to backend when we send task to someone

  const [state, setState] = useState<states[] | []>([]); // state for tasks which we receive from backend

  // useEffect for taking tasks from backend when component is mounted and when we change identifier of tasks
  useEffect(() => {
    if (sentBtnClicked === false) {
      const takeTasksFromDb = async (arg: string) => {
        try {
          const response = await axios.get(`${apiUrl}/tasks/${arg}`, {
            withCredentials: true,
          });
          setState(response.data);
          dispatch(setChoose(-1)); // for buttons to be disabled when we take new data from backend
        } catch (err: any) {
          // Chek if the error is 401(unauthorized) and if it is then redirect to login page
          if (err.response.status === 401) {
            window.location.href = "/";
          } else {
            console.error("Error fetching tasks:", err);
          }
        }
      };
      // check which identifier is selected and take tasks from backend according to that identifier
      if (isIdentifierInspetObject === "მიმდინარე დავალებები") {
        takeTasksFromDb("onGoing");
      } else if (isIdentifierInspetObject === "გაცემული დავალებები") {
        takeTasksFromDb("onPending");
      } else if (
        isIdentifierInspetObject === "გამოგზავნილი დასრულების მოთხოვნები"
      ) {
        takeTasksFromDb("receiveApproval");
      } else if (
        isIdentifierInspetObject === "გაგზავნილი დასრულების მოთხოვნები"
      ) {
        takeTasksFromDb("waitApproval");
      }
    }
  }, [isIdentifierInspetObject, sentBtnClicked, signalMessage]); // databases changes SentTask component open and close and signalR message receiving is cause re-render

  //when we click on the row of the table we set the selected task in redux and if we click again on the same task we unselect it
  const handleRowClick = (index: number) => {
    if (isSelected !== index) {
      dispatch(setChoose(index));
    } else {
      dispatch(setChoose(-1));
    }
  };

  //when we click on the send button we set the state of the button to be clicked and open the task sent component
  const handleSetSentButton = useCallback(
    (arg: boolean) => {
      setSentBtnClicked(arg);
    },
    [setSentBtnClicked]
  );

  //when we click on the end task button we send the request to the backend to end the task and remove it from the state
  const handleEndTask = useCallback(() => {
    console.log(state[isSelected].id);
    const checkFuntion = async () => {
      try {
        await axios.put(
          "https://localhost:7205/api/tasks/endTask",

          {
            taskId: state[isSelected].id,
          },

          {
            withCredentials: true,
          }
        );
        setState((prev) => prev.filter((_, index) => index !== isSelected)); // remove task from state when we end it
        dispatch(setChoose(-1)); // make buttons disabled when we end task
      } catch (err: any) {
        // Chek if the error is 401(unauthorized) and if it is then redirect to login page
        if (err.response.status === 401) {
          window.location.href = "/";
        } else {
          console.error("Error fetching tasks:", err);
        }
      }
    };
    checkFuntion();
  }, [isSelected, state]);

  const closeComment = useCallback(
    (arg?: string) => {
      setComment(false);
      if (arg) {
        setDeclineTaskComment(arg);
      }
    },
    [setComment]
  );

  useEffect(() => {
    if (declineTaskComment !== "") {
      const DeclinedRequest = async () => {
        try {
          await axios.put(
            `${apiUrl}/tasks/declineTask`,
            {
              taskId: state[isSelected].id,
              comment: declineTaskComment,
            },
            {
              withCredentials: true,
            }
          );
          console.log("declined sent succesfully to the server");
          setState((prev) => prev.filter((_, index) => index !== isSelected));
          dispatch(setChoose(-1));
          setDeclineTaskComment("");
        } catch (err: any) {
          // Chek if the error is 401(unauthorized) and if it is then redirect to login page
          if (err.response.status === 401) {
            window.location.href = "/";
          } else {
            console.error("Error fetching tasks:", err);
          }
        }
      };
      DeclinedRequest();
    }
  }, [declineTaskComment]);

  //when we click on the declined button we send the request to the backend to decline the task and remove it from the state and send back to the sender
  const handleClickDeclinedButton = useCallback(() => {
    setComment(!comment);
  }, [state, isSelected, comment]);

  return (
    <div className="w-full h-90% flex flex-col justify-start items-center">
      <div className="mt-[0.3%] h-70% w-full grid grid-rows-5 gap-[1%]">
        {state &&
          state.map((item, index) => (
            <DataRow
              key={index}
              item={item}
              selected={isSelected === index}
              onClick={() => handleRowClick(index)}
            />
          ))}
      </div>
      {isOption === "ინსპექტირების ობიექტები" && (
        <section className="w-98% h-[29.7%] flex justify-end gap-[1%] items-center">
          <OnGoingInspectButtons
            setClickedOnEnd={handleEndTask}
            selected={isSelected}
            clicked={sentBtnClicked}
            baseIdentifier={isIdentifierInspetObject}
            setClickedOnSent={handleSetSentButton}
            setClickedOnDeclined={handleClickDeclinedButton}
          />
        </section>
      )}

      {sentBtnClicked && (
        <GiveTask setClick={handleSetSentButton} id={state[isSelected].id} />
      )}
      {taskLog && (
        <DataLogs
          data={state[isSelected].dataLogs}
          name={state[isSelected].wholeName}
        />
      )}
      {comment && (
        <Comment
          id={state[isSelected].id}
          name={state[isSelected].wholeName}
          onClick={closeComment}
        />
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
