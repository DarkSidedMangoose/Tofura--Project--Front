import React, { Fragment, memo, useEffect } from "react";
import "./BaseHeaderSections.css";
import {
  BaseHistoryButton,
  BasePlusButton,
  BaseReviewButton,
  BaseSearchButton,
  BaseSearchFilterButton,
  BaseSearchSendButton,
  BaseSyncButton,
} from "../btns/BaseMainHeaderBtns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setInspectBaseIdentifier } from "../../../../../../redux/reducers/InspectObjectIdentifierState";
import { UseContextAuthenticatedUserInfo } from "../../../../../../contextApis/ContextAuthenticatedUserInfo";
// import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";

export const MainMainHeaderFirstSection: React.FC = memo(() => {
  return (
    <section className="h-60% w-30% min-h-[30px] flex items-center gap-[0.5%]">
      <BaseSearchButton />
      <BaseSearchSendButton />
      <BaseSearchFilterButton />
    </section>
  );
});

export const MainMainHeaderSecondSection: React.FC = memo(() => {
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();

  const dispatch: AppDispatch = useDispatch();

  const clickHandler = (arg: string) => {
    dispatch(setInspectBaseIdentifier(arg));
    localStorage.setItem("inspetBaseIdentifier", arg);
  };
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  return (
    <Fragment>
      {isOption === "ინსპექტირების ობიექტები" && (
        <section className="flex w-30%  h-[60%]   justify-center items-center gap-[1%] text-md ">
          <select
            id="dropdown"
            name="options"
            value={isIdentifierInspetObject}
            className="bg-sidebarChoose text-white w-full h-full font-semibold opacity-90 rounded-xl text-sm custom-select  "
            onChange={(e) => clickHandler(e.target.value)}
          >
            <option
              value="მიმდინარე დავალებები"
              className="bg-white text-sidebarChoose text-start  "
            >
              მიმდინარე დავალებები
            </option>
            {authenticatedUserInfo.level !== 1 && (
              <Fragment>
                <option
                  value="გაცემული დავალებები"
                  className="bg-white text-sidebarChoose"
                >
                  გაცემული დავალებები
                </option>
                <option
                  value="გამოგზავნილი დასრულების მოთხოვნები"
                  className="bg-white text-sidebarChoose"
                >
                  გამოგზავნილი დასრულების მოთხოვნები
                </option>
              </Fragment>
            )}
            <option
              value="გაგზავნილი დასრულების მოთხოვნები"
              className="bg-white text-sidebarChoose"
            >
              გაგზავნილი დასრულების მოთხოვნები
            </option>
          </select>
        </section>
      )}
    </Fragment>
  );
});
export const MainMainHeaderThirdSection: React.FC = memo(() => {
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();
  useEffect(() => {
    console.log("authenticatedUserInfo", authenticatedUserInfo);
  }, [authenticatedUserInfo]);
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  return (
    <section className="h-[60%]  min-h-[30px] w-30%  flex items-center  gap-[1%] justify-end">
      {isOption !== "შემოწმებული ობიექტების რეესტრი" ? (
        <Fragment>
          {isIdentifierInspetObject === "მიმდინარე დავალებები" && (
            <BaseSyncButton />
          )}
          {authenticatedUserInfo.level === 1 &&
            isIdentifierInspetObject === "მიმდინარე დავალებები" && (
              <BasePlusButton />
            )}
          <BaseReviewButton />
          {isOption === "ინსპექტირების ობიექტები" && (
            <Fragment>
              <BaseHistoryButton />
              {/* <BaseToArchive /> */}
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <BaseReviewButton />

          <BaseHistoryButton />
        </Fragment>
      )}
    </section>
  );
});
