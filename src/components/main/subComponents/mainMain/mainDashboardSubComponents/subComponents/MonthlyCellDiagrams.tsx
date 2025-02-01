import React, { useEffect, useState } from "react";

const MonthlyCellDiagrams: React.FC = () => {
  const years = Array.from({ length: 6 }, (_, i) => 2020 + i);
  const [year, setYear] = useState<number>(2020);

  useEffect(() => {
    console.log(year);
  }, [year]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <section className="w-full h-full bg-white rounded-2xl flex flex-col">
      <header className="w-full h-[35%] text-sm flex flex-col items-end text-white font-bold">
        <article className="w-full h-[calc(100%/35*10)] rounded-tl-2xl rounded-tr-2xl bg-sidebarChoose flex items-center justify-center">
          <p>დიაგრამა თვეების მიხედვით</p>
        </article>
        <div className="flex w-full h-1/2 justify-between">
          <div className="h-full flex justify-start items-center w-1/3">
            <select
              className="p-2 border ml-[2%] h-80% w-70% border-gray-600 rounded bg-white text-sidebarChoose cursor-pointer"
              onChange={handleYearChange}
              value={year}
            >
              {years.map((year) => (
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
      <MonthlyDiagram year={year} />
    </section>
  );
};

export default MonthlyCellDiagrams;

interface Percentage {
  planned: number;
  unplanned: number;
}

interface YearData {
  [year: number]: Percentage[];
}

const MonthlyDiagram: React.FC<{ year: number }> = ({ year }) => {
  const [identifier, setIdentifier] = useState<keyof YearData>(year);

  useEffect(() => {
    setIdentifier(year);
    console.log(year);
  }, [year]);

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

  const percentages: YearData[] = [
    {
      2020: [
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
      ],
      2021: [
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
      ],
      2022: [
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
      ],
      2023: [
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
      ],
      2024: [
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
      ],
      2025: [
        { planned: 1, unplanned: 1 },
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
      ],
    },
  ];

  return (
    <main className="w-full h-80% flex">
      <section className="w-full h-full overflow-auto flex flex-col justify-end">
        <div className="w-full h-[calc(65%)]">
          <div className="flex transition-transform duration-300 w-full h-full">
            {percentages[0][identifier].map((info, index) => (
              <div
                key={index}
                className="h-full min-w-[calc(100%/3)] flex justify-center items-end border-b-2 border-sidebarChoose"
              >
                <div
                  style={{ height: `${info.unplanned}%` }}
                  className="w-20% flex items-center flex-col relative"
                >
                  <p className="absolute top-[-20px] text-sidebarChoose font-bold">
                    {info.unplanned}
                  </p>
                  <div className="w-full h-full bg-sidebarChoose"></div>
                </div>
                <div
                  style={{
                    height: `${info.planned}%`,
                    backgroundColor: "rgba(0, 0, 75, 0.387)",
                  }}
                  className="w-20% flex items-center flex-col relative"
                >
                  <p
                    style={{ color: "rgba(0, 0, 75, 0.387)" }}
                    className="absolute top-[-20px] font-bold"
                  >
                    {info.planned}
                  </p>
                  <div className="w-full h-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <article className="h-[calc(15%)] flex relative w-full">
          <div className="flex transition-transform duration-300 w-full">
            {months.map((e, i) => (
              <p
                key={i}
                className="min-w-[calc(100%/3)] flex justify-center items-center m-0 p-0 text-sidebarChoose font-bold"
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
