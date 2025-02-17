import React, { useEffect, useState } from "react";
import { object } from "./DashboardObjects";
import "../../../../Scrollbar.css";

const MonthlyCellDiagrams: React.FC = () => {
  const objectLength = Object.keys(object).length;
  const [year, setYear] = useState<number>(Number(Object.keys(object)[0]));
  const [yearNd, setYearNd] = useState<number>(Number(Object.keys(object)[0]));
  const years = Array.from(
    { length: objectLength },
    (_, i) => Number(Object.keys(object)[0]) + i
  );
  const [yearsNd, setYearsNd] = useState<number[]>(
    Array.from(
      { length: Number(Object.keys(object)[objectLength - 1]) - year + 1 },
      (_, i) => year + i
    )
  );
  useEffect(
    () => {
      setYearsNd(
        Array.from(
          { length: Number(Object.keys(object)[objectLength - 1]) - year + 1 },
          (_, i) => year + i
        )
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [year]
  );
  useEffect(() => {
    if (yearNd < year) {
      setYearNd(yearsNd[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearsNd]);
  const handleFirstYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setYear(Number(event.target.value));
  };
  const handleSecondChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYearNd(Number(event.target.value));
  };
  return (
    <section className="z-10 w-full h-full bg-white rounded-2xl flex flex-col">
      <header className="w-full h-[10%] text-sm flex flex-col items-end text-white font-bold">
        <article className="w-full h-full  rounded-tl-2xl rounded-tr-2xl bg-sidebarChoose flex items-center justify-center">
          <p>წლიური დიაგრამა თვეების მიხედვით</p>
        </article>
      </header>
      <div className="flex w-full  h-[15%]  justify-between ">
        <div className="h-full flex justify-start items-center w-2/3 ">
          <select
            className="p-2 border ml-[2%] focus:border-sidebarChoose outline-none h-80% w-1/3 border-sidebarChoose rounded bg-white text-sidebarChoose cursor-pointer"
            onChange={handleFirstYearChange}
            value={year}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            className="p-2 border ml-[2%] focus:border-sidebarChoose outline-none h-80% w-1/3 border-sidebarChoose rounded bg-white text-sidebarChoose cursor-pointer"
            value={yearNd}
            onChange={handleSecondChange}
          >
            {yearsNd.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[calc(100%/3)] h-full text-sidebarChoose flex flex-col justify-center items-end  text-[10.5px] font-bold">
          <div className="w-full  h-80% flex flex-col  justify-center items-end  ">
            <section className="w-full h-[47.5%] flex items-center gap-[5%] justify-end ">
              <p>გეგმიური</p>
              <div className="aspect-1 h-full bg-sidebarChoose"></div>
            </section>
            <section className="w-full h-[47.5%] flex  gap-[5%] justify-end">
              <p>არაგეგმიური</p>
              <div
                style={{ backgroundColor: "rgba(0, 0, 75, 0.387)" }}
                className="aspect-1 h-full"
              ></div>
            </section>
          </div>
        </div>
      </div>
      <MonthlyDiagram year={year} yearNd={yearNd} />
    </section>
  );
};

export default MonthlyCellDiagrams;

const MonthlyDiagram: React.FC<{ year: number; yearNd: number }> = ({
  year,
  yearNd,
}) => {
  const [trys, setTrys] = useState<number[]>([]);

  useEffect(() => {
    const newYears = Array.from({ length: yearNd - year + 1 }, (_, i) => {
      return year + i;
    });
    setTrys(newYears);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, yearNd]);

  return (
    <main className="w-full h-[75%] flex">
      <section className="w-full h-full overflow-auto flex flex-col justify-end custom-scrollbar">
        <div className="w-full h-[calc(65%)]">
          <div className="flex transition-transform duration-300 w-full h-full">
            {trys.map((info, indexs) =>
              object[info].map((infos, index) => (
                <div
                  key={index}
                  className="h-full min-w-[calc(100%/3)] flex justify-center items-end border-b-2 border-sidebarChoose"
                >
                  <div
                    style={{
                      height: `${infos.unplanned}%`,
                      transition: "height 0.5s ease",
                    }}
                    className="w-20% flex items-center flex-col relative"
                  >
                    <p className="absolute top-[-20px] text-sidebarChoose font-bold">
                      {infos.unplanned}
                    </p>
                    <div className="w-full h-full bg-sidebarChoose"></div>
                  </div>
                  <div
                    style={{
                      height: `${infos.planned}%`,
                      transition: "height 0.5s ease",
                      backgroundColor: "rgba(0, 0, 75, 0.387)",
                    }}
                    className="w-20% flex items-center flex-col relative"
                  >
                    <p
                      style={{ color: "rgba(0, 0, 75, 0.387)" }}
                      className="absolute top-[-20px] font-bold"
                    >
                      {infos.planned}
                    </p>
                    <div className="w-full h-full"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <article className="h-20% flex relative w-full ">
          <div className="flex transition-transform duration-300 w-full">
            {trys.map((info, index) =>
              object[info].map((ndInfo, ndIndex) => (
                <div
                  key={ndIndex}
                  className="flex flex-col  h-full min-w-[calc(100%/3)] items-center justify-center overflow-hidden"
                >
                  <p className="  m-0 p-0 text-sidebarChoose ">
                    {ndInfo.month}
                  </p>
                  <p className="  m-0 p-0 text-sidebarChoose font-bold">
                    {info}
                  </p>
                </div>
              ))
            )}
          </div>
        </article>
      </section>
    </main>
  );
};
