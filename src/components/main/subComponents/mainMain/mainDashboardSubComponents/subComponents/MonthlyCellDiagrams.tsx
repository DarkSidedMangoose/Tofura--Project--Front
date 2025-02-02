import React, { useEffect, useState } from "react";
import { object } from "./DashboardObjects";
import "../../../../Scrollbar.css";

const MonthlyCellDiagrams: React.FC = () => {
  const objectLength = Object.keys(object).length;
  const years = Array.from(
    { length: objectLength },
    (_, i) => Number(Object.keys(object)[0]) + i
  );
  const [year, setYear] = useState<number>(Number(Object.keys(object)[0]));
  const [yearNd, setYearNd] = useState<number>(Number(Object.keys(object)[0]));

  const [yearIndex, setYearIndex] = useState(
    Object.keys(object).indexOf(`${year}`)
  );
  const [yearsNd, setYearsNd] = useState<number[]>(
    Array.from(
      { length: objectLength - yearIndex },
      (_, i) => Number(Object.keys(object)[yearIndex]) + i
    )
  );

  useEffect(() => {
    setYearIndex(Object.keys(object).indexOf(`${year}`));
  }, [year]);

  useEffect(
    () => {
      setYearsNd(
        Array.from(
          { length: objectLength - yearIndex },
          (_, i) => Number(Object.keys(object)[yearIndex]) + i
        )
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [yearIndex]
  );
  useEffect(() => {
    setYearNd(yearsNd[0]);
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
    <section className="w-full h-full bg-white rounded-2xl flex flex-col">
      <header className="w-full h-[35%] text-sm flex flex-col items-end text-white font-bold">
        <article className="w-full h-[calc(100%/35*10)] rounded-tl-2xl rounded-tr-2xl bg-sidebarChoose flex items-center justify-center">
          <p>წლიური დიაგრამა თვეების მიხედვით</p>
        </article>
        <div className="flex w-full h-1/2 justify-between">
          <div className="h-full flex justify-start items-center w-1/3">
            <select
              className="p-2 border ml-[2%] focus:border-sidebarChoose outline-none h-80% w-70% border-sidebarChoose rounded bg-white text-sidebarChoose cursor-pointer"
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
              className="p-2 border ml-[2%] focus:border-sidebarChoose outline-none h-80% w-70% border-sidebarChoose rounded bg-white text-sidebarChoose cursor-pointer"
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
          <div className="w-2/3 h-full text-sidebarChoose flex flex-col justify-center items-end text-[10.5px]">
            <div className="w-40% h-80%">
              <section className="w-3/5 h-[47.5%] flex items-center gap-[5%]">
                <div className="aspect-1 h-full bg-sidebarChoose"></div>
                <p>გეგმიური</p>
              </section>
              <section className="w-3/5 h-[47.5%] flex items-center gap-[5%]">
                <div
                  style={{ backgroundColor: "rgba(0, 0, 75, 0.387)" }}
                  className="aspect-1 h-full"
                ></div>
                <p>არაგეგმიური</p>
              </section>
            </div>
          </div>
        </div>
      </header>
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
    <main className="w-full h-80% flex">
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
        <article className="h-20% flex relative w-full">
          <div className="flex transition-transform duration-300 w-full">
            {trys.map((info, index) =>
              object[info].map((ndInfo, ndIndex) => (
                <div
                  key={ndIndex}
                  className="flex flex-col  h-full min-w-[calc(100%/3)] items-center justify-center overflow-hidden"
                >
                  <p className="  m-0 p-0 text-sidebarChoose font-bold">
                    {ndInfo.month}
                  </p>
                  <p>{info}</p>
                </div>
              ))
            )}
          </div>
        </article>
      </section>
    </main>
  );
};
