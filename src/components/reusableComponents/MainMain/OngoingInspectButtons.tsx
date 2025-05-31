import React, { Fragment, useCallback, useEffect } from "react";
import { UseContextAuthenticatedUserInfo } from "../../../contextApis/ContextAuthenticatedUserInfo";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setBaseSubcomponentsShown } from "../../../redux/reducers/BaseSubcomponentsShown";

export const OnGoingInspectButtons: React.FC<{
  selected: Number;
  clicked: boolean;
  setClickedOnEnd: () => void;
}> = ({
  selected,
  setClickedOnEnd,
}) => {

  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();
  const  isIdentifierOfInspectObject  = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  useEffect(() => {
    console.log("Inspect Object Identifier:", isIdentifierOfInspectObject);
  },[isIdentifierOfInspectObject]);
  const dispatch = useDispatch();

  const handleEndTask = useCallback(() => {
    setClickedOnEnd();
  }, [setClickedOnEnd]);
 
  return (
    <Fragment>
      {isIdentifierOfInspectObject === "გაცემული დავალებები" ||
      isIdentifierOfInspectObject === "გაგზავნილი დასრულების მოთხოვნები" ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>
          {authenticatedUserInfo.level !== 1 && (
            <button
              style={{ transition: "0.3s ease-in-out" }}
              className={`w-auto  p-[10px] h-1/4 min-h-[45px]  rounded-lg shadow-bottom-right bg-[#05052c] text-white ${
                selected === -1
                  ? "cursor-not-allowed opacity-15 "
                  : "opacity-100 cursor-pointer hover:opacity-70 "
              }`}
              onClick={() =>
                isIdentifierOfInspectObject === "მიმდინარე დავალებები" && selected !== -1
                  ?  dispatch(setBaseSubcomponentsShown("sendTask"))
                  : (isIdentifierOfInspectObject === "გამოგზავნილი დასრულების მოთხოვნები" && selected !== -1 )&& dispatch(setBaseSubcomponentsShown("comment"))
              }
            >
              {isIdentifierOfInspectObject === "მიმდინარე დავალებები"
                ? "დავალების გაგზავნა"
                : isIdentifierOfInspectObject ===
                    "გამოგზავნილი დასრულების მოთხოვნები" && "დავალების უარყოფა"}
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
