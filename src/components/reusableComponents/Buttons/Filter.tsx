import React, {  memo, useCallback } from "react";
import FilterIcon from "../../../assets/images/main/filter.webp";
import FilterForBase from "../MainHeaders/FilterForBase";


export const Filter: React.FC<{ identifier: string }> = memo(({ identifier }) => {
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const handleFilterClose = useCallback(() => {
    setShowFilter(false);
  },[showFilter])
  return (
    <div className="h-full w-[7%] min-w-[30px] flex justify-center items-center relative">
      <button
        onClick={() => setShowFilter(!showFilter)}
        style={{ transition: "0.3s ease-in-out" }}
        className="bg-white h-full rounded-[14%] w-full min-w-[30px] border-[2px] border-solid border-sidebarChoose flex justify-center items-center shadow-bottom hover:opacity-70 "
      >
        <img
          className="w-60% h-60% object-contain"
          src={FilterIcon}
          alt="filter"
        />
      </button>
      {identifier === "base" && showFilter && (
        <FilterForBase onClickClose={handleFilterClose} />
      )}
    </div>
  );
});
