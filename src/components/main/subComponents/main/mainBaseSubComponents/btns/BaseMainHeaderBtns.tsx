import React, { Fragment, memo, useEffect, useState } from "react";
import Search from "../../../../../../assets/images/main/search.webp";
import Filter from "../../../../../../assets/images/main/filter.webp";
import Sync from "../../../../../../assets/images/main/sync.webp";
import ScrollArrow from "../../../../../../assets/images/main/scrollArrows.webp";
import Plus from "../../../../../../assets/images/main/plus.webp";
import Review from "../../../../../../assets/images/main/review.webp";
import Archive from "../../../../../../assets/images/main/archive.webp";
import History from "../../../../../../assets/images/main/history.webp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setTaskLogInfo } from "../../../../../../redux/reducers/TaskLogsInfo";
// import { useAdditionalOption } from "../../../../../../contextApis/ContextChooseFromAdditional";

export const BaseSearchButton: React.FC = memo(() => {
  return (
    <Fragment>
      <input
        style={{ transition: "0.3s ease-in-out" }}
        className="w-[50%] min-w-[200px] text-sm h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose focus:outline-none shadow-bottom hover:opacity-70"
        type="text"
        placeholder="შეიყვანეთ საძიებო სიტყვა..."
      />
    </Fragment>
  );
});

export const BaseSearchSendButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className="bg-white h-full rounded-[14%] w-[7%] min-w-[30px]   border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom hover:opacity-70"
      >
        <img className="w-60% h-60% object-contain" src={Search} alt="search" />
      </button>
    </Fragment>
  );
});

export const BaseSearchFilterButton: React.FC = memo(() => {
  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className="bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom hover:opacity-70"
      >
        <img className="w-60% h-60% object-contain" src={Filter} alt="filter" />
      </button>
    </Fragment>
  );
});

export const BaseSyncButton: React.FC = memo(() => {
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );
  // const { isChoosed } = useAdditionalOption();

  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed"
            : "opacity-85 cursor-pointer hover:opacity-70"
        } bg-sidebarChoose h-full rounded-[14%] w-10%  min-w-[55px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom`}
      >
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
  // const { isOption } = useAdditionalOption();
  // const { isChoosed } = useAdditionalOption();

  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

  useEffect(() => {
    if (isChoosed !== -1) {
      setShowDropdown(false);
    }
  }, [isChoosed]);

  const handleClick = (arg: any) => {
    setShowDropdown(false);
  };
  return (
    <div className={` h-full w-[7%] min-w-[30px] z-30 relative`}>
      <button
        onClick={() => {
          if (isOption === "ინსპექტირების ობიექტები") {
            if (isChoosed !== -1) {
              setShowDropdown(!showDropdown);
            }
          }
        }}
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1 ? "opacity-20 " : "opacity-85 hover:opacity-70"
        } bg-sidebarChoose h-full rounded-[14%] w-full border-[2px] border-solid border-sidebarChoose flex justify-center items-center  shadow-bottom ${
          isChoosed === -1 ? "cursor-not-allowed" : "cursor-pointer "
        }`}
      >
        <img className="w-70% h-70% object-contain" src={Plus} alt="plus" />
      </button>

      {showDropdown && (
        <div className="bg-white w-[200px] mt-[20%] h-[100px] border-[1px] border-solid border-sidebarChoose rounded-[8px]">
          <p
            className="font-semibold text-sidebarChoose text-[13px] h-1/2 flex justify-center items-center border-b-sidebarChoose border-b-[1px] cursor-pointer "
            onClick={(arg) => handleClick(arg)}
          >
            დოკუმენტის გენერირება
          </p>
          <p
            className="font-semibold text-sidebarChoose text-[13px] h-1/2 flex justify-center items-center  cursor-pointer"
            onClick={(arg) => handleClick(arg)}
          >
            ატვირთვა
          </p>
        </div>
      )}
    </div>
  );
});
export const BaseReviewButton: React.FC = memo(() => {
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );
  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed "
            : "opacity-100 cursor-pointer hover:opacity-70 "
        } bg-white flex gap-[2%] items-center w-[28%] min-w-[150px] h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose font-semibold text-sidebarChoose text-[14px] shadow-bottom`}
      >
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
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <Fragment>
      <button
        onClick={() => dispatch(setTaskLogInfo(true))}
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed "
            : "opacity-100 cursor-pointer hover:opacity-70 "
        } bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom`}
      >
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
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className={`${
          isChoosed === -1
            ? "opacity-20 cursor-not-allowed "
            : "opacity-100 cursor-pointer hover:opacity-70  "
        } bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom`}
      >
        <img
          className="w-60% h-60% object-contain"
          src={Archive}
          alt="search"
        />
      </button>
    </Fragment>
  );
});
