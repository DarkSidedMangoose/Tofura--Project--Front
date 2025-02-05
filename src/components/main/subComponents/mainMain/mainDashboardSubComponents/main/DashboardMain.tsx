import React, { useEffect, useState } from "react";
import CountryWithRegions from "../subComponents/MapCountryWithRegions/CountryWithRegions";
import "../../../../Scrollbar.css";
// import Diagram from "../subComponents/Diagram";
// import MonthlyCellDiagrams from "../subComponents/MonthlyCellDiagrams";
const DashboardMain: React.FC = () => {
  const [shown, setShown] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {}, []);
  const handleShown = (arg: boolean) => {
    setShown(arg);
  };
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    if (shown) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shown]);
  return (
    <section className="w-full h-full flex flex-col gap-[5%] justify-center items-center ">
      <div className="w-full h-full flex gap-[5%]  ">
        {shown && (
          <div
            className={`z-50 w-[200px] h-[200px]  absolute   bg-gray-700 `}
            style={{
              left: `${position.x - 350}px`,
              top: `${position.y}px`,
            }}
          >
            {position.x}
            {position.y}
          </div>
        )}
        <CountryWithRegions setShown={handleShown} />
      </div>
    </section>
  );
};

export default DashboardMain;
