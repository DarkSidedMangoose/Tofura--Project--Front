import React, { Fragment, memo, useEffect } from "react";
import {
  BaseHistoryButton,
  BasePlusButton,
  BaseReviewButton,
  BaseSearchButton,
  BaseSearchFilterButton,
  BaseSearchSendButton,
  BaseSyncButton,
  BaseToArchive,
} from "../btns/BaseMainHeaderBtns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setInspectBaseIdentifier } from "../../../../../../redux/reducers/InspectObjectIdentifierState";
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
  const dispatch: AppDispatch = useDispatch();

  const clickHandler = (arg: boolean) => {
    dispatch(setInspectBaseIdentifier(arg));
  };
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isIdentifier = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  useEffect(() => {
    console.log(isIdentifier);
  }, [isIdentifier]);
  return (
    <Fragment>
      {isOption === "ინსპექტირების ობიექტები" && (
        <section className="flex w-30%  h-[60%]   justify-center items-center gap-[1%] text-md ">
          <button
            className={` ${
              isIdentifier
                ? "bg-sidebarChoose text-white"
                : "bg-white text-sidebarChoose"
            } border-2  border-sidebarChoose font-semibold rounded-lg w-1/2 h-full`}
            onClick={() => clickHandler(true)}
          >
            მიმდინარე
          </button>
          <button
            className={` ${
              isIdentifier
                ? "bg-white text-sidebarChoose"
                : "bg-sidebarChoose text-white"
            } border-2  border-sidebarChoose font-semibold rounded-lg w-1/2 h-full`}
            onClick={() => clickHandler(false)}
          >
            გაგზავნილი
          </button>
        </section>
      )}
    </Fragment>
  );
});

export const MainMainHeaderThirdSection: React.FC = memo(() => {
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  return (
    <section className="h-[60%]  min-h-[30px] w-30%  flex items-center  gap-[1%] justify-end">
      {isOption !== "შემოწმებული ობიექტების რეესტრი" ? (
        <Fragment>
          <BaseSyncButton />
          <BasePlusButton />
          <BaseReviewButton />
          {isOption === "ინსპექტირების ობიექტები" && (
            <Fragment>
              <BaseHistoryButton />
              <BaseToArchive />
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
