import React, { Fragment, useCallback, useEffect } from "react";
import { UseContextAuthenticatedUserInfo } from "../../../../../../contextApis/ContextAuthenticatedUserInfo";

export const InspectMainButs: React.FC<{
  selected: Number;
  clicked: boolean;
  baseIdentifier: string;
  setClickedOnSent: (arg: boolean) => void;
  setClickedOnEnd: () => void;
  setClickedOnDeclined: () => void;
}> = ({
  selected,
  clicked,
  setClickedOnSent,
  setClickedOnEnd,
  setClickedOnDeclined,
  baseIdentifier,
}) => {
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();

  const handleSentTask = useCallback(() => {
    if (selected !== -1) {
      setClickedOnSent(true);
    }
  }, [setClickedOnSent, selected]);
  const handleEndTask = useCallback(() => {
    setClickedOnEnd();
  }, [setClickedOnEnd]);
  const handleDeclineTask = useCallback(() => {
    if (selected !== -1) {
      setClickedOnDeclined();
    }
  }, [setClickedOnDeclined]);
  return (
    <Fragment>
      {baseIdentifier === "გაცემული დავალებები" ||
      baseIdentifier === "გაგზავნილი დასრულების მოთხოვნები" ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>
          {authenticatedUserInfo.level !== 1 && (
            <button
              style={{ transition: "0.3s ease-in-out" }}
              className={`w-auto p-[10px] h-1/4 min-h-[45px]  rounded-lg shadow-bottom-right bg-[#05052c] text-white ${
                selected === -1
                  ? "cursor-not-allowed opacity-15 "
                  : "opacity-100 cursor-pointer hover:opacity-70 "
              }`}
              onClick={() =>
                baseIdentifier === "მიმდინარე დავალებები"
                  ? handleSentTask()
                  : handleDeclineTask()
              }
            >
              {baseIdentifier === "მიმდინარე დავალებები"
                ? "დავალების გაგზავნა"
                : "დავალების უარყოფა"}
            </button>
          )}
          <button
            style={{ transition: "0.3s ease-in-out" }}
            className={`w-auto p-[10px] h-1/4 min-h-[45px] rounded-lg shadow-bottom-right bg-[#05052c] text-white ${
              selected === -1
                ? "cursor-not-allowed opacity-15 "
                : "opacity-100 cursor-pointer hover:opacity-70  "
            }`}
            onClick={() => selected !== -1 && handleEndTask()}
          >
            დავალების დასრულება
          </button>
        </Fragment>
      )}
    </Fragment>
  );
};
