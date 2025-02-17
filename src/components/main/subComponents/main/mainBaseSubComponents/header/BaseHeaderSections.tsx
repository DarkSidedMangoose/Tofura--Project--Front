import React, { Fragment, memo } from "react";
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
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";

export const MainMainHeaderFirstSection: React.FC = memo(() => {
  return (
    <section className="h-60% w-70% min-h-[30px] flex items-center gap-[0.5%]">
      <BaseSearchButton />
      <BaseSearchSendButton />
      <BaseSearchFilterButton />
    </section>
  );
});

export const MainMainHeaderSecondSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();
  return (
    <section className="h-[60%]  min-h-[30px] w-70% flex items-center  gap-[1%] justify-end">
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
