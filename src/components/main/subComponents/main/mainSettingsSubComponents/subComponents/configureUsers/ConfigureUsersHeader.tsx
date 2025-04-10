import React, { Fragment, useCallback, useState } from "react";
import Filter from "../../../../../../../assets/images/main/filter.webp";
import Plus from "../../../../../../../assets/images/main/plus.webp";
import "../../../../../Scrollbar.css";
const ConfigrueUsersHeader: React.FC<{
  setClickAddButton: (arg: boolean, name: string) => void;
}> = ({ setClickAddButton }) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClickAddButton = useCallback(() => {
    setClickAddButton(true, "AddButton");
  }, [setClickAddButton]);
  return (
    <Fragment>
      <div
        className="w-98% h-[5%]
        flex justify-between "
      >
        <div className="w-30% h-full">
          <form
            onSubmit={submitHandler}
            className="w-full min-w-[400px] h-full   rounded-2xl flex items-center px-[1%] gap-[0.5%]  "
          >
            <input
              type="text"
              className="w-[70%] h-full rounded-lg bg-white border-2 border-sidebarChoose text-sm "
              placeholder="...მომხმარებლის სახელი და გვარი"
            />
            <div className="cursor-pointer h-full w-[9%] min-w-[30px] bg-white border-sidebarChoose border-2 flex justify-center items-center rounded-lg hover:opacity-70 transition-all duration-200">
              <img
                className="w-60% h-60% object-contain "
                src={Filter}
                alt="filter"
              />
            </div>
            <div className="h-full w-[20%] min-w-[30px]  flex justify-center items-center rounded-lg ">
              <button
                type="submit"
                className="bg-sidebarChoose text-white w-full h-full px-[3%] font-semibold text-[15px] hover:opacity-70 transition-all duration-200 rounded-lg"
              >
                ძებნა
              </button>
            </div>
          </form>
        </div>
        <p className="font-bold h-full flex justify-center items-center text-md">
          მომხმარებლების სია
        </p>
        <div className="w-30% h-full flex justify-end items-center">
          <div
            className="bg-sidebarChoose text-white p-[1%] h-full rounded-lg text-[13px] font-semibold"
            onClick={handleClickAddButton}
          >
            <img
              src={Plus}
              alt="plus"
              className="w-full h-full cursor-pointer hover:opacity-70 transition-all duration-200"
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfigrueUsersHeader;
