import React, { Fragment, memo } from "react";
import {
  MainMainHistoryButton,
  MainMainPlusButton,
  MainMainReviewButton,
  MainMainSearchButton,
  MainMainSearchFilterButton,
  MainMainSearchSendButton,
  MainMainSyncButton,
  MainMainToArchive,
} from "./MainMainHeaderSubComponentsButtons";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";

export const MainMainHeaderFirstSection: React.FC = memo(() => {
  return (
    <section className="h-50% w-70% min-h-[30px] flex items-center gap-[0.5%]">
      <MainMainSearchButton />
      <MainMainSearchSendButton />
      <MainMainSearchFilterButton />
    </section>
  );
});

export const MainMainHeaderSecondSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();
  return (
    <section className="h-[50%]  min-h-[30px] w-70% flex items-center  gap-[1%] justify-end">
      {isOption !== "შემოწმებული ობიექტების რეესტრი" ? (
        <Fragment>
          <MainMainSyncButton />
          <MainMainPlusButton />
          <MainMainReviewButton />
          {isOption === "ინსპექტირების ობიექტები" && (
            <Fragment>
              <MainMainHistoryButton />
              <MainMainToArchive />
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <MainMainReviewButton />

          <MainMainHistoryButton />
        </Fragment>
      )}
    </section>
  );
});
