import React, { memo } from "react";
import {
  MainMainPlusButton,
  MainMainReviewButton,
  MainMainSearchButton,
  MainMainSearchFilterButton,
  MainMainSearchSendButton,
  MainMainSyncButton,
} from "./MainMainHeaderSubComponentsButtons";

export const MainMainHeaderFirstSection: React.FC = memo(() => {
  return (
    <section className="h-full w-70% min-h-[30px] flex items-center gap-[0.5%]">
      <MainMainSearchButton />
      <MainMainSearchSendButton />
      <MainMainSearchFilterButton />
    </section>
  );
});

export const MainMainHeaderSecondSection: React.FC = memo(() => {
  return (
    <section className="h-full min-h-[30px] w-70% flex items-center gap-[1%] justify-end">
      <MainMainSyncButton />
      <MainMainPlusButton />
      <MainMainReviewButton />
    </section>
  );
});
