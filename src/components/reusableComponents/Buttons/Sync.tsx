import React, { Fragment, memo } from "react";
import ScrollArrow from "../../../assets/images/main/scrollArrows.webp";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import sync from "../../../assets/images/main/sync.webp";
export const Sync: React.FC = memo(() => {
  const isChoosed = useSelector(
    (state: RootState) => state.BasesChoosedOption.data
  );

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
        <img className="w-60% h-60% object-contain" src={sync} alt="sync" />

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
