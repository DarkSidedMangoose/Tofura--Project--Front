import React from "react";
import "./CssForThatComponents.css";

const MonthlyCellDiagrams: React.FC = () => {
  return (
    <section className="w-full h-full bg-white rounded-2xl flex flex-col ">
      <header className="w-full h-20%  text-sm flex flex-col items-end  text-white font-bold">
        <article className="w-full h-1/2 rounded-tl-2xl rounded-tr-2xl bg-sidebarChoose flex items-center justify-center">
          <p>დიაგრამა თვეების მიხედვით</p>
        </article>
        <div className="w-1/3 h-1/2 text-sidebarChoose text-[10px] font-bold flex flex-col justify-center   ">
          <section className="w-full h-[47.5%] flex items-center gap-[5%]">
            <div className="aspect-1 w-[8%] bg-sidebarChoose"></div>
            <p>გეგმიური</p>
          </section>
          <section className="w-full h-[47.5%] flex items-center gap-[5%]">
            <div
              style={{ backgroundColor: "rgba(0, 0, 75, 0.387)" }}
              className="aspect-1 w-[8%] "
            ></div>
            <p>არაგეგმიური</p>
          </section>
        </div>
      </header>
      <MonthlyDiagram />
    </section>
  );
};

export default MonthlyCellDiagrams;

const MonthlyDiagram: React.FC = () => {
  const months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];
  const percentages = [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ];

  return (
    <main className="w-full h-80% flex   ">
      {/* <section className="w-10% h-full flex flex-col justify-end ">
        <article className="w-full h-[65%] bg-white relative text-[12px] text-sidebarChoose font-bold flex justify-center  border-r-[2px] border-sidebarChoose">
          <p className="absolute top-[30%] m-0 p-0">70</p>
          <p className="absolute top-[70%] m-0 p-0">30</p>
          <p className="absolute top-[90%] m-0 p-0">10</p>
        </article>

        <div className="w-full h-[25%] max-h-[25%]">
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
        </div>
      </section> */}
      <section className="w-full h-full overflow-auto flex flex-col justify-end  ">
        <div className="w-full h-[calc(65%)] ">
          <div className="flex transition-transform duration-300 w-full h-full">
            {percentages.map((info, index) => (
              <div
                key={index}
                className="h-full  min-w-[calc(100%/3)] flex justify-center items-end border-b-2 border-sidebarChoose   "
              >
                <div
                  style={{
                    height: `${info.planned}%`,
                    backgroundColor: "rgba(0, 0, 75, 0.387)",
                  }}
                  className={`w-20%  flex items-center flex-col relative `}
                >
                  <p className="absolute top-[-20px] ">{info.planned}</p>
                  <div className="w-full h-full "></div>
                </div>
                <div
                  style={{ height: `${info.unplanned}%` }}
                  className={`w-20%  flex items-center flex-col relative `}
                >
                  <p className="absolute top-[-20px] ">{info.unplanned}</p>
                  <div className="w-full h-full bg-sidebarChoose"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <article className="h-[calc(15%)] flex     relative w-full  ">
          <div className="flex transition-transform duration-300 w-full">
            {months.map((e, i) => (
              <p
                key={i}
                className="min-w-[calc(100%/3)]   flex justify-center items-center   m-0 p-0"
              >
                {e}
              </p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};
