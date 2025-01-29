import React, { Fragment, memo } from "react";
import Search from "../../../../../../assets/images/main/search.png";
import Filter from "../../../../../../assets/images/main/filter.png";
import Sync from "../../../../../../assets/images/main/sync.png";
import ScrollArrow from "../../../../../../assets/images/main/scrollArrows.png";
import Plus from "../../../../../../assets/images/main/plus.png";
import Pen from "../../../../../../assets/images/main/pen.png";

export const MainMainSearchButton: React.FC = memo(() => {
  return (
    <Fragment>
      <input
        className="w-[25%] min-w-[200px] text-sm h-full rounded-[8px] border-[1.5px] border-solid border-mainButBorders focus:outline-none shadow-bottom"
        type="text"
        placeholder="შეიყვანეთ საძიებო სიტყვა..."
      />
    </Fragment>
  );
});

export const MainMainSearchSendButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[30px]   border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Search} alt="search" />
      </button>
    </Fragment>
  );
});

export const MainMainSearchFilterButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Filter} alt="filter" />
      </button>
    </Fragment>
  );
});

export const MainMainSyncButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-sidebarChoose h-full rounded-[8px] w-[7%] min-w-[60px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85 shadow-bottom">
        <img className="w-70% h-70% object-contain" src={Sync} alt="sync" />

        <div className="flex h-full justify-center items-center">
          <p className="h-full text-white ">|</p>
          <img
            className="w-60% h-80% object-contain mb-[5%] "
            src={ScrollArrow}
            alt="scrollArrow"
          />
        </div>
      </button>
    </Fragment>
  );
});

export const MainMainPlusButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-sidebarChoose h-full rounded-[8px] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85 shadow-bottom">
        <img className="w-70% h-70% object-contain" src={Plus} alt="plus" />
      </button>
    </Fragment>
  );
});

export const MainMainReviewButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white flex gap-[2%] items-center w-[17.5%] min-w-[170px] h-full rounded-[8px] border-[1.5px] border-solid border-mainButBorders font-bold text-blue-950 text-[14px] shadow-bottom ">
        <img className=" h-70% object-contain" src={Pen} alt="plus" />
        დათვალიერება
      </button>
    </Fragment>
  );
});
