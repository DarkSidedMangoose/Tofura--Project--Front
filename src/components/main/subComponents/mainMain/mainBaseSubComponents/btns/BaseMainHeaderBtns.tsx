import React, { Fragment, memo, useState } from "react";
import Search from "../../../../../../assets/images/main/search.png";
import Filter from "../../../../../../assets/images/main/filter.png";
import Sync from "../../../../../../assets/images/main/sync.png";
import ScrollArrow from "../../../../../../assets/images/main/scrollArrows.png";
import Plus from "../../../../../../assets/images/main/plus.png";
import Review from "../../../../../../assets/images/main/review.png";
import Archive from "../../../../../../assets/images/main/archive.png";
import History from "../../../../../../assets/images/main/history.png";
import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";

export const BaseSearchButton: React.FC = memo(() => {
  return (
    <Fragment>
      <input
        className="w-[25%] min-w-[200px] text-sm h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose focus:outline-none shadow-bottom"
        type="text"
        placeholder="შეიყვანეთ საძიებო სიტყვა..."
      />
    </Fragment>
  );
});

export const BaseSearchSendButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Search} alt="search" />
      </button>
    </Fragment>
  );
});

export const BaseSearchFilterButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom">
        <img className="w-60% h-60% object-contain" src={Filter} alt="filter" />
      </button>
    </Fragment>
  );
});

export const BaseSyncButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-sidebarChoose h-full rounded-[14%] w-[7%] min-w-[60px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center opacity-85 shadow-bottom">
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
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { isOption } = useAdditionalOption();
  return (
    <div className="h-full w-[4.5%] min-w-[30px]  relative">
      <button
        onClick={() => {
          if (isOption === "ინსპექტირების ობიექტები") {
            setShowDropdown(!showDropdown);
          }
        }}
        className="bg-sidebarChoose h-full rounded-[14%] w-full border-[2px] border-solid border-sidebarChoose flex justify-center items-center opacity-85 shadow-bottom"
      >
        <img className="w-70% h-70% object-contain" src={Plus} alt="plus" />
      </button>
      {showDropdown && (
        <div className="bg-loginBackground w-[200px] mt-[20%] h-[100px]  border-sidebarChoose border-2">
          <p className="font-semibold text-sidebarChoose text-sm h-1/2 flex justify-center items-center border-b-sidebarChoose border-2 cursor-pointer rounded-tl-2xl rounded-tr-2xl">
            დოკუმენტის გენერირება
          </p>
          <p className="font-semibold text-sidebarChoose text-sm h-1/2 flex justify-center items-center   rounded-bl-2xl rounded-br-2xl cursor-pointer">
            ატვირთვა
          </p>
        </div>
      )}
    </div>
  );
});

export const BaseReviewButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white flex gap-[2%]  items-center w-auto min-w-[150px]  h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose font-semibold text-sidebarChoose text-[14px] shadow-bottom ">
        <img
          className=" h-60% object-contain ml-[2%]"
          src={Review}
          alt="plus"
        />
        <p className="text-sm ">სრულად ნახვა</p>
      </button>
    </Fragment>
  );
});

export const BaseHistoryButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom">
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
      <button className="bg-white h-full rounded-[14%] w-[4.5%] min-w-[30px]   border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom">
        <img
          className="w-60% h-60% object-contain"
          src={Archive}
          alt="search"
        />
      </button>
    </Fragment>
  );
});
