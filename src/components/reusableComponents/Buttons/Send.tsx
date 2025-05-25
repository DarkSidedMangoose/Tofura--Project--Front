import React, { Fragment, memo, useCallback } from "react";
import Search from "../../../assets/images/main/search.webp";

export const Send: React.FC<{onClick: () => void}> = memo(({onClick}) => {
  const onClickHandler = useCallback(() => {
    onClick();
  },[onClick]);
  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        style={{ transition: "0.3s ease-in-out" }}
        className="bg-white h-full  rounded-[14%] w-[7%] min-w-[30px]   border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom hover:opacity-70"
      >
        <img className="w-60% h-60% object-contain" src={Search} alt="search" />
      </button>
    </Fragment>
  );
});


