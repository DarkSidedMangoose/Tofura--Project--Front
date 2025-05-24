import React, { Fragment, memo } from "react";
import FilterIcon from "../../../assets/images/main/filter.webp";

export const Filter: React.FC = memo(() => {
  return (
    <Fragment>
      <button
        style={{ transition: "0.3s ease-in-out" }}
        className="bg-white h-full rounded-[14%] w-[7%] min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom hover:opacity-70"
      >
        <img
          className="w-60% h-60% object-contain"
          src={FilterIcon}
          alt="filter"
        />
      </button>
    </Fragment>
  );
});
