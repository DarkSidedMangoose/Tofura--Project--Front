import React from "react";
import Search from "../../../../assets/images/main/search.png";
import Filter from "../../../../assets/images/main/filter.png";

const MainMainHeaderSection: React.FC = () => {
  return (
    <div className="w-98% h-5/6 ">
      <section className="w-full h-1/6  flex flex-col justify-evenly">
        <header>
          <h1 className="text-xl text-blue-950 font-bold">
            ობიექტების რეესტრი
          </h1>
        </header>
        <nav className="h-30% w-full flex items-center justify-between  ">
          <section className="h-full w-70% flex items-center gap-[0.5%]">
            <input
              className="w-[25%] min-w-[200px] h-full rounded-[8px] border-[1px] border-solid   border-mainButBorders  focus:outline-none  "
              type="text"
              placeholder="ძიება..."
            />
            <button className="bg-white h-full rounded-[8px] w-[6%] min-w-[40px] border-[1px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Search} alt="search"></img>
            </button>
            <button className="bg-white h-full rounded-[8px] w-[6%] min-w-[40px] border-[1px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Filter} alt="search"></img>
            </button>
          </section>
          <section className="h-full w-70% flex items-center gap-[1%] justify-end">
            <button className="bg-white h-full rounded-[8px] w-[10%] min-w-[40px] border-[1px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Search} alt="search"></img>
            </button>
            <button className="bg-white h-full rounded-[8px] w-[6%] min-w-[40px] border-[1px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Filter} alt="search"></img>
            </button>
            <button className="bg-white w-[25%] min-w-[200px] h-full rounded-[8px] border-[1px] border-solid   border-mainButBorders    ">
              სრულად ნახვა
            </button>
          </section>
        </nav>
      </section>
    </div>
  );
};

export default MainMainHeaderSection;
