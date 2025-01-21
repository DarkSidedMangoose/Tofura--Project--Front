import React from "react";
import Search from "../../../../assets/images/main/search.png";
import Filter from "../../../../assets/images/main/filter.png";

export const MainMainHeaderSection: React.FC = () => {
  return (
    <div className="w-98% h-[15%]  ">
      <section className="w-full h-100%  flex flex-col justify-evenly">
        <header className="flex justify-center">
          <h1 className="text-xl text-blue-950 font-bold">
            ობიექტების რეესტრი
          </h1>
        </header>
        <nav className="h-[25%] w-full flex items-center justify-between  ">
          <section className="h-full w-70% flex items-center gap-[0.5%]">
            <input
              className="w-[25%] min-w-[200px] h-full rounded-[8px] border-[1.5px] border-solid   border-mainButBorders  focus:outline-none  "
              type="text"
              placeholder="ძიება..."
            />
            <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[40px] border-[1.5px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Search} alt="search"></img>
            </button>
            <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[40px] border-[1.5px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Filter} alt="search"></img>
            </button>
          </section>
          <section className="h-full w-70% flex items-center gap-[1%] justify-end">
            <button className="bg-white h-full rounded-[8px] w-[8%] min-w-[70px] border-[1.5px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Search} alt="search"></img>
            </button>
            <button className="bg-white h-full rounded-[8px] w-[4.5%] min-w-[40px] border-[1.5px] border-solid   border-mainButBorders flex justify-center items-center">
              <img className="w-60% h-60%" src={Filter} alt="search"></img>
            </button>
            <button className="bg-white w-[25%] min-w-[200px] h-full rounded-[8px] border-[1.5px] border-solid   border-mainButBorders font-bold text-blue-950 text-[15px]   ">
              სრულად ნახვა
            </button>
          </section>
        </nav>
      </section>
    </div>
  );
};

export const MainMainMainSection: React.FC = () => {
  return <div className="w-98% h-[85%] bg-white"></div>;
};
