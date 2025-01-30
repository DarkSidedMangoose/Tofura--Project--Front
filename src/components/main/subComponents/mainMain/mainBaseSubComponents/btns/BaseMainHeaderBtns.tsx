import React, { Fragment, memo } from "react";
import Search from "../../../../../../assets/images/main/search.png";
import Filter from "../../../../../../assets/images/main/filter.png";
import Sync from "../../../../../../assets/images/main/sync.png";
import ScrollArrow from "../../../../../../assets/images/main/scrollArrows.png";
import Plus from "../../../../../../assets/images/main/plus.png";
import Pen from "../../../../../../assets/images/main/pen.png";
import Archive from "../../../../../../assets/images/main/archive.png";
import History from "../../../../../../assets/images/main/history.png";

export const BaseSearchButton: React.FC = memo(() => {
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

export const BaseSearchSendButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Search} alt="search" />
      </button>
    </Fragment>
  );
});

export const BaseSearchFilterButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Filter} alt="filter" />
      </button>
    </Fragment>
  );
});

export const BaseSyncButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-sidebarChoose h-full rounded-[14%] w-[7%] min-w-[60px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85 shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Sync} alt="sync" />

        <div className="flex w-40% h-full justify-center items-center">
          <div className="w-90% h-60%  border-l-[1.5px] border-l-solid  flex justify-center items-center">
            <img
              className=" w-90% h-90% object-contain   "
              src={ScrollArrow}
              alt="scrollArrow"
            />
          </div>
        </div>
      </button>
    </Fragment>
  );
});

export const BasePlusButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-sidebarChoose h-full rounded-[14%] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85 shadow-bottom">
        <img className="w-70% h-70% object-contain" src={Plus} alt="plus" />
      </button>
    </Fragment>
  );
});

export const BaseReviewButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white flex gap-[2%] items-center w-[17.5%] min-w-[170px] h-full rounded-[8px] border-[1.5px] border-solid border-mainButBorders font-bold text-blue-950 text-[14px] shadow-bottom ">
        <img className=" h-70% object-contain" src={Pen} alt="plus" />
        დათვალიერება
      </button>
    </Fragment>
  );
});

export const BaseHistoryButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img
          className="w-60% h-60% object-contain"
          src={History}
          alt="search"
        />
      </button>
    </Fragment>
  );
});

export const BaseToArchive: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[1.5px] border-solid border-mainButBorders flex justify-center items-center shadow-bottom">
        <img
          className="w-60% h-60% object-contain"
          src={Archive}
          alt="search"
        />
      </button>
    </Fragment>
  );
});
