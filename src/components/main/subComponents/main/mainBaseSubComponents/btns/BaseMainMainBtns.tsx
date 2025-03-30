import React, { Fragment, useCallback, useEffect } from "react";
import { UseContextAuthenticatedUserInfo } from "../../../../../../contextApis/ContextAuthenticatedUserInfo";
import axios from "axios";

export const InspectMainButs: React.FC<{
  selected: Number;
  clicked: boolean;
  setClicked: (arg: boolean) => void;
}> = ({ selected, clicked, setClicked }) => {
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();

  useEffect(() => {}, []);
  const clickHandler = useCallback(
    (arg: boolean) => {
      setClicked(arg);
    },
    [setClicked]
  );
  const handleEndTask = useCallback(() => {
    const checkFuntion = async () => {
      try {
        await axios.put(
          "https://localhost:7205/api/tasks/endTask",

          {
            taskId: "67e0844bf7057b99cd3ee584",
          },

          {
            withCredentials: true,
          }
        );
        console.log("s");
      } catch (error) {
        console.error("Error ending task:", error);
      }
    };
    checkFuntion();
  }, []);
  return (
    <Fragment>
      {authenticatedUserInfo.level !== 1 && (
        <button
          style={{ transition: "0.3s ease-in-out" }}
          className={`w-auto p-[10px] h-1/4 min-h-[45px]  rounded-lg shadow-bottom-right bg-[#05052c] text-white ${
            selected === -1
              ? "cursor-not-allowed opacity-15 "
              : "opacity-100 cursor-pointer hover:opacity-70 "
          }`}
          onClick={() => clickHandler(true)}
        >
          დავალების გაცემა
        </button>
      )}
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className={`w-auto p-[10px] h-1/4 min-h-[45px] rounded-lg shadow-bottom-right bg-[#05052c] text-white ${
          selected === -1
            ? "cursor-not-allowed opacity-15 "
            : "opacity-100 cursor-pointer hover:opacity-70  "
        }`}
        onClick={() => handleEndTask()}
      >
        დავალების დასრულება
      </button>
    </Fragment>
  );
};
