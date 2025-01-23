import React from "react";
import Search from "../../../../assets/images/main/search.png";
import Filter from "../../../../assets/images/main/filter.png";
import Sync from "../../../../assets/images/main/sync.png";
import ScrollArrow from "../../../../assets/images/main/scrollArrows.png";
import Plus from "../../../../assets/images/main/plus.png";
import Pen from "../../../../assets/images/main/pen.png";
import "./mainMainSubCompenents.css";

export const MainMainHeaderSection: React.FC = () => {
  return (
    <div className="w-98% h-[15%]">
      <section className="w-full h-100% flex flex-col justify-evenly">
        <header className="flex items-center">
          <h1 className="text-xl text-blue-950 font-bold">
            ობიექტების რეესტრი
          </h1>
        </header>
        <nav className="h-[25%] w-full flex items-center justify-between ">
          <section className="h-full w-70% min-h-[30px] flex items-center gap-[0.5%]">
            <input
              className="w-[25%] min-w-[200px] h-full rounded-[8px] border-[1.5px] border-solid border-mainButBorders focus:outline-none"
              type="text"
              placeholder="ძიება..."
            />
            <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[30px]   border-[1.5px] border-solid border-mainButBorders flex justify-center items-center">
              <img
                className="w-60% h-60% object-contain"
                src={Search}
                alt="search"
              />
            </button>
            <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center">
              <img
                className="w-60% h-60% object-contain"
                src={Filter}
                alt="filter"
              />
            </button>
          </section>
          <section className="h-full min-h-[30px] w-70% flex items-center gap-[1%] justify-end">
            <button className="bg-sidebarChoose h-full rounded-[8px] w-[7%] min-w-[60px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85">
              <img
                className="w-70% h-70% object-contain"
                src={Sync}
                alt="sync"
              />

              <div className="flex h-full justify-center items-center">
                <p className="h-full text-white ">|</p>
                <img
                  className="w-60% h-80% object-contain mb-[5%] "
                  src={ScrollArrow}
                  alt="scrollArrow"
                />
              </div>
            </button>
            <button className="bg-sidebarChoose h-full rounded-[8px] w-[4.5%] min-w-[30px] border-[1.5px] border-solid border-mainButBorders flex justify-center items-center opacity-85">
              <img
                className="w-70% h-70% object-contain"
                src={Plus}
                alt="plus"
              />
            </button>
            <button className="bg-white flex gap-[2%] items-center w-[17.5%] min-w-[170px] h-full rounded-[8px] border-[1.5px] border-solid border-mainButBorders font-bold text-blue-950 text-[14px] ">
              <img className=" h-70% object-contain" src={Pen} alt="plus" />
              დათვალიერება
            </button>
          </section>
        </nav>
      </section>
    </div>
  );
};

export const MainMainMainSection: React.FC = () => {
  return (
    <div className="w-98% h-[85%] bg-white rounded-[0.5%] shadow-boxShadow"></div>
  );
};
